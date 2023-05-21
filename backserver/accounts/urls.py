from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('profile/<str:user_name>/', views.profile, name='profile'),
    path('profile/<str:user_name>/review/', views.profilereview, name='profilereview'),
    path('<str:user_name>/follow/', views.follow, name='follow'),
]
