from rest_framework import serializers
from .models import User
from movies.models import Movie, Review
from communitys.models import Post, Comment


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source="movie.title")
    movie_poster_path = serializers.CharField(source="movie.poster_path")

    class Meta:
        model = Review
        exclude = ("updated_at", "user")


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username",)


class UserListSerializer(serializers.ModelSerializer):
    profile_image = serializers.ImageField(
        max_length=None, allow_empty_file=False, use_url=True
    )

    class Meta:
        model = User
        fields = ("profile_image", "content")


class UserContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("content",)


class UserDetailSerializer(serializers.ModelSerializer):
    followings_count = serializers.IntegerField(source="followings.count")  # 내가 팔로잉
    user_followers = UserSerializer(many=True)
    user_followers_count = serializers.IntegerField(
        source="user_followers.count"
    )  # 나를 팔로워
    like_movies = MovieSerializer(many=True)
    review_set = ReviewSerializer(many=True)
    post_set = PostSerializer(many=True)
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = User
        exclude = [
            "last_login",
            "is_superuser",
            "is_staff",
            "password",
            "is_active",
            "date_joined",
            "groups",
            "user_permissions",
        ]
        read_only_fields = (
            "followings_count",
            "user_followers_count",
            "user_followers",
            "like_movies",
            "review_set",
            "post_set",
            "comment_set",
        )
