from django.shortcuts import get_list_or_404, get_object_or_404
from django.db.models import Case, When
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from accounts.models import User
from .models import Movie, Review
from .serializers import *
from .relate_movie import get_relate_movies
import datetime


@api_view(["GET"])
def movie_list(request):
    if request.method == "GET":
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    if request.method == "GET":
        serializer = MovieDetailSerializer(movie)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
def like(request, movie_pk):
    if request.method == "POST":
        if request.user.is_authenticated:
            movie = Movie.objects.get(pk=movie_pk)
            if movie.like_users.filter(pk=request.user.pk).exists():
                movie.like_users.remove(request.user)
            else:
                movie.like_users.add(request.user)
            serializer = MovieDetailSerializer(movie)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_401_UNAUTHORIZED)


@api_view(["GET", "POST"])
def review_list(request, movie_pk):
    if request.method == "GET":
        movie = Movie.objects.get(pk=movie_pk)
        reviews = movie.review_set.all()
        serializer = ReviewDetailSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        movie = get_object_or_404(Movie, pk=movie_pk)
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            review = serializer.save(movie=movie, user_id=request.user.pk)
            serializer = ReviewDetailSerializer(review)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["PUT", "DELETE"])
def review_detail(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)

    if request.method == "GET":
        serializer = ReviewDetailSerializer(review)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PUT":
        serializer = ReviewSerializer(instance=review, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET"])
def relate_movie_list(request, movie_pk):
    if request.method == "GET":
        movie = get_object_or_404(Movie, pk=movie_pk)
        title = movie.title
        title_list = get_relate_movies(title)

        # 결과 순서를 저장
        ordering = Case(
            *[When(title=title, then=pos) for pos, title in enumerate(title_list)]
        )

        # 결과 조회 및 저장된 순서로 정렬
        movie = Movie.objects.filter(title__in=title_list).order_by(ordering)[:15]

        serializer = MovieListSerializer(movie, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def recent_movie_list(request, page):
    if request.method == "GET":
        pagenum = (page - 1) * 15
        movie = Movie.objects.filter(release_date__lte=datetime.date.today()).order_by(
            "-release_date"
        )[pagenum : pagenum + 15]

        serializer = MovieListSerializer(movie, many=True)

        response = {
            "movies": serializer.data,
            "total_length": len(Movie.objects.all()),
        }
        return Response(response, status=status.HTTP_200_OK)


@api_view(["GET"])
def recommend_movie_list(request, page):
    if request.method == "GET":
        pagenum = (page - 1) * 15
        defaultmovie = Movie.objects.order_by("-score")[pagenum : pagenum + 15]
        defaultSerializer = MovieListSerializer(defaultmovie, many=True)

        if request.user.is_authenticated:
            user = User.objects.get(username=request.user)
            likemovies = user.like_movies.all()
            data_list = list(likemovies.values_list("genres", flat=True))

            likegenres = {}
            totallike = 0
            for genre in data_list:
                likegenres.setdefault(genre, 0)
                likegenres[genre] += 1
                totallike += 1

            if totallike == 0:
                response = {
                    "movies": defaultSerializer.data,
                    "total_length": len(Movie.objects.all()),
                }
                return Response(response, status=status.HTTP_200_OK)

            likegenres = list(sorted(likegenres, key=lambda x: -likegenres[x]))

            size = min(3, len(likegenres))
            genres = likegenres[0:size]
            movie = Movie.objects.filter(genres__in=genres)

            serializer = MovieListSerializer(
                movie.order_by("-score")[pagenum + 1 : pagenum + 16], many=True
            )

            response = {
                "movies": serializer.data,
                "total_length": len(Movie.objects.filter(genres__in=genres)),
            }
            return Response(response, status=status.HTTP_200_OK)

        response = {
            "movies": defaultSerializer.data,
            "total_length": len(Movie.objects.all()),
        }
        return Response(response, status=status.HTTP_200_OK)


@api_view(["GET"])
def genre_list(request):
    if request.method == "GET":
        genre = Genre.objects.all()
        serializer = GenreSerializer(genre, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def genre_movie_list(request, genre_id, page):
    if request.method == "GET":
        pagenum = (page - 1) * 15
        genres = [genre_id]
        movie = Movie.objects.filter(genres__in=genres).order_by("-score")[
            pagenum : pagenum + 15
        ]

        serializer = MovieListSerializer(movie, many=True)

        response = {
            "movies": serializer.data,
            "total_length": len(Movie.objects.filter(genres__in=genres)),
        }
        return Response(response, status=status.HTTP_200_OK)
