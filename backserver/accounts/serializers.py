from rest_framework import serializers
from .models import User
from movies.models import Movie, Review
from communitys.models import Post, Comment

class MovieSerializer(serializers.ModelSerializer):
    # user 가 좋아하는 영화 목록에 들어갈 정보
    # 제목, 링크용 id?, 포스터
    class Meta:
        model = Movie
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
        
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        exclude = ('updated_at','user')

class UserSerializer(serializers.ModelSerializer):
    followings_count = serializers.IntegerField(source="followings.count")
    user_followers_count = serializers.IntegerField(source="user_followers.count")
    like_movies = MovieSerializer(many=True)
    review_set = ReviewSerializer(many=True)
    post_set = PostSerializer(many=True)
    comment_set = CommentSerializer(many=True)
    class Meta:
        model = User
        exclude = ['last_login','is_superuser','is_staff','password','is_active','date_joined','groups','user_permissions']


class UserReviewSerializer(serializers.ModelSerializer):
    movie_title = serializers.CharField(source='movie.title')
    movie_poster_path = serializers.CharField(source='movie.poster_path')

    class Meta:
        model = Review
        fields = '__all__'