from django.urls import path
from . import views

app_name = "movies"
urlpatterns = [
    path("", views.movie_list, ""),
    path("<int:movie_pk>/", views.movie_detail, ""),
    path("<int:movie_pk>/like/", views.like, ""),
    path("<int:movie_pk>/reviews/", views.review_list, ""),
    path("reviews/<int:review_pk>/", views.review_detail, ""),
    path("relate/<int:movie_pk>/", views.relate_movie_list, ""),
    path("recent/<int:page>/", views.recent_movie_list, ""),
    path("recommend/<int:page>/", views.recommend_movie_list, ""),
    path("genre/<int:genre_id>/<int:page>/", views.genre_movie_list, ""),
]
