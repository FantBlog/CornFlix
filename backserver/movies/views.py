from django.shortcuts import get_list_or_404, get_object_or_404
from django.db.models import Case, When
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
import datetime
from .models import Movie, Review
from .serializers import *
from .searcher import get_recommendations


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def movie_list(request):
    if request.method == "GET":
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)

    if request.method == "GET":
        serializer = MovieDetailSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PUT":
        serializer = MovieSerializer(instance=movie, data=request.POST)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        movie.delete()
        context = {"delete": f"{movie_pk}번 영화 삭제됨"}
        return Response(context, status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "POST"])
def review_list(request, movie_pk):
    if request.method == "GET":
        movie = Movie.objects.get(pk=movie_pk)
        reviews = movie.review_set.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        if not request.user.is_authenticated:
            context = {"error": "로그인이 필요한 작업입니다."}
            return Response(context, status=status.HTTP_400_BAD_REQUEST)

        movie = get_object_or_404(Movie, pk=movie_pk)
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            review = serializer.save(movie=movie)
            serializer = ReviewDetailSerializer(review)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def review_detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)

    if request.method == "GET":
        serializer = ReviewDetailSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PUT":
        serializer = ReviewSerializer(instance=review, data=request.POST)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
def recommend_movie_list(request, search):
    if request.method == "GET":
        title_list = get_recommendations(search)
        # 결과 순서를 저장
        ordering = Case(
            *[When(title=title, then=pos) for pos, title in enumerate(title_list)]
        )
        # 결과 조회 및 저장된 순서로 정렬
        movie = Movie.objects.filter(title__in=title_list).order_by(ordering)

        serializer = MovieListSerializer(movie, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def like_recommend_movie_list(request, genre_id):
    if request.method == "GET":
        genres = [genre_id]
        movie = Movie.objects.filter(genres__in=genres).order_by("-score")[:20]

        serializer = MovieListSerializer(movie, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def recent_movie_list(request):
    if request.method == "GET":
        movie = Movie.objects.filter(release_date__lte=datetime.date.today()).order_by(
            "-release_date"
        )[:20]

        serializer = MovieListSerializer(movie, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
