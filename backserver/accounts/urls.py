from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('me/', views.myprofile, name='myprofile'),
    path('profile/<username>/', views.profile, name='profile'),
    path('<int:user_pk>/follow/', views.follow, name='follow'),
]
