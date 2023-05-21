from django.shortcuts import render, redirect, get_object_or_404, get_list_or_404
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import User

@api_view(["GET"])
def profile(request, user_name):
    if request.method == "GET":
        user = User.objects.get(username=user_name)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def profilereview(request, user_name):
    if request.method == "GET":
        user = User.objects.get(username=user_name)
        reviews = user.review_set.all()

        serializer = UserReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "POST"])
def follow(request, user_name):

    if request.method == "GET":
        User = User.objects.get(username=user_name)
        serializer = UserSerializer(User)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        if request.user.is_authenticated:
            User = get_user_model()
            person = User.objects.get(username=user_name)
            if person != request.user:
                if person.user_followers.filter(pk=request.user.pk).exists():
                    person.user_followers.remove(request.user)
                else:
                    person.user_followers.add(request.user)
            return redirect('accounts:profile', person.username)
        return redirect('accounts:login')