from rest_framework import serializers
from .models import Movie, Genre, Review
from accounts.models import User


# 전체 장르 GET
class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"


# 리뷰 POST, PUT
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = (
            "content",
            "rank",
        )
        read_only_fields = ("user_id",)


# 리뷰 GET
class ReviewDetailSerializer(serializers.ModelSerializer):
    class UserDetailSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ("profile_image", "username")

    # 리뷰를 출력할때 작성한 유저의 프로필 사진과 닉네임 전달
    user = UserDetailSerializer()

    class Meta:
        model = Review
        fields = "__all__"
        read_only_fields = ("user_id",)


# 영화 POST, PUT
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"
        read_only_fields = ("like_users",)


# 영화 디테일 GET
class MovieDetailSerializer(serializers.ModelSerializer):
    class GenreSerializer(serializers.ModelSerializer):
        class Meta:
            model = Genre
            fields = (
                "name",
                "pk",
            )

    genres = GenreSerializer(many=True)
    review_set = ReviewDetailSerializer(many=True)
    review_count = serializers.IntegerField(source="review_set.count")
    like_users_count = serializers.IntegerField(source="like_users.count")

    class Meta:
        model = Movie
        fields = "__all__"


class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"
