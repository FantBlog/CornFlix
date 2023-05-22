from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    followings = models.ManyToManyField(
        "self", symmetrical=False, related_name="user_followers", blank=True
    )
    content = models.TextField(blank=True)
    profile_image = models.ImageField(upload_to="profile_images/", blank=True)