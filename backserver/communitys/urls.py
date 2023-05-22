from django.urls import path
from . import views

app_name = "communitys"
urlpatterns = [
    path("posts/", views.post_list, ""),
    path("posts/<int:post_pk>/", views.post_detail, ""),
    path("posts/<int:post_pk>/like/", views.like, ""),
    path("posts/<int:post_pk>/comments/", views.comment_list, ""),
    path("comments/<int:comment_pk>/", views.comment_detail, ""),
]
