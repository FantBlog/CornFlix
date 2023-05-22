from rest_framework import serializers
from .models import Movie, Genre, Review
from accounts.models import User


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ("name",)


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = (
            "title",
            "content",
            "rank",
        )


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"
        read_only_fields = ("like_users",)


class UserSerializer(serializers.ModelSerializer):
    like_movies = MovieSerializer(many=True)

    class Meta:
        model = User
        fields = "__all__"


class MovieDetailSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True)
    review_set = ReviewSerializer(many=True)
    review_count = serializers.IntegerField(source="review_set.count")

    class Meta:
        model = Movie
        fields = "__all__"


class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"


class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class ReviewDetailSerializer(serializers.ModelSerializer):
    movie = MovieSerializer()

    class Meta:
        model = Review
        fields = "__all__"
        read_only_fields = ("movie",)
