from django.urls import path
from . import views

app_name = "movies"
urlpatterns = [
    path("movies/", views.movie_list, ""),
    path("movies/recent/<int:page>/", views.recent_movie_list, ""),
    path("movies/recommend/<int:page>/", views.recommend_movie_list, ""),
    path("movies/genre/<int:genre_id>/<int:page>/", views.genre_movie_list, ""),
    path("movies/relate/<int:movie_pk>/", views.relate_movie_list, ""),
    path("movies/<int:movie_pk>/", views.movie_detail, ""),
    path("movies/<int:movie_pk>/like/", views.like, ""),
    path("movies/<int:movie_pk>/reviews/", views.review_list, ""),
    path("reviews/<int:review_pk>/", views.review_detail, ""),
]
