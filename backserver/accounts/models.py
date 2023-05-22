from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    followings = models.ManyToManyField(
        "self", symmetrical=False, related_name="user_followers"
    )


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    content = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to="profile_images/", blank=True)

    def __str__(self):
        return self.user.username
