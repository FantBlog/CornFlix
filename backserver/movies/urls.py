from django.urls import path
from . import views

app_name = "movies"
urlpatterns = [
    path("movies/", views.movie_list, ""),
    path("movies/recommend/<int:genre_id>/", views.like_recommend_movie_list, ""),
    path("movies/recent/", views.recent_movie_list, ""),
    path("movies/<search>/", views.recommend_movie_list, ""),
    path("movies/<int:movie_pk>/", views.movie_detail, ""),
    path("movies/<int:movie_pk>/reviews/", views.review_list, ""),
    path("reviews/<int:review_pk>/", views.review_detail, ""),
]
