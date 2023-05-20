from django.urls import path
from . import views

app_name = 'accounts'

urlpatterns = [
    path('me/', views.myprofile, name='myprofile'),
    path('me/review/', views.myprofilereview, name='myprofilereview'),
    path('profile/<int:user_pk>/', views.profile, name='profile'),
    path('profile/<int:user_pk>/review/', views.profilereview, name='profilereview'),
    path('<int:user_pk>/follow/', views.follow, name='follow'),
]
