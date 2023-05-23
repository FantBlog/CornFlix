from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import User


@api_view(["GET", "PUT"])
def profile(request, user_name):
    user = get_object_or_404(User, username=user_name)

    if request.method == "GET":
        serializer = UserDetailSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PUT":
        serializer = UserListSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save(username=user_name)
            user = get_object_or_404(User, username=user_name)
            serializer = UserDetailSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            print("asdfasdfasdfasdfasd")
            serializer = UserContentSerializer(instance=user, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(username=user_name)
                user = get_object_or_404(User, username=user_name)
                serializer = UserDetailSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(["GET", "POST"])
def follow(request, user_name):
    if request.method == "GET":
        user = get_object_or_404(User, username=user_name)
        serializer = UserDetailSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == "POST":
        if request.user.is_authenticated:
            User = get_user_model()
            person = get_object_or_404(User, username=user_name)
            if person != request.user:
                if person.user_followers.filter(pk=request.user.pk).exists():
                    person.user_followers.remove(request.user)
                else:
                    person.user_followers.add(request.user)
            serializer = UserDetailSerializer(person)
        return Response(serializer.data, status=status.HTTP_200_OK)
