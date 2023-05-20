from django.shortcuts import render, redirect, get_object_or_404, get_list_or_404
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import User


@api_view(["GET"])
def myprofile(request):
    if request.method == "GET":
        user = User.objects.get(username=request.user)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def myprofilereview(request):
    if request.method == "GET":
        user = User.objects.get(username=request.user)
        reviews = user.review_set.all()

        serializer = UserReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
@api_view(["GET"])
def profile(request, user_pk):
    if request.method == "GET":
        user = User.objects.get(pk=user_pk)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(["GET"])
def profilereview(request, user_pk):
    if request.method == "GET":
        user = User.objects.get(pk=user_pk)
        reviews = user.review_set.all()

        serializer = UserReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "POST"])
def follow(request, user_pk):

    if request.method == "GET":
        posts = User.objects.get(pk=user_pk)
        serializer = UserSerializer(posts)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        if request.user.is_authenticated:
            User = get_user_model()
            person = User.objects.get(pk=user_pk)
            if person != request.user:
                if person.user_followers.filter(pk=request.user.pk).exists():
                    person.user_followers.remove(request.user)
                else:
                    person.user_followers.add(request.user)
            return redirect('accounts:profile', person.username)
        return redirect('accounts:login')