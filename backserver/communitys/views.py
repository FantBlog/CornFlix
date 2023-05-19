from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *


# Create your views here.
@api_view(["GET", "POST"])
def post_list(request):
    if request.method == "GET":
        posts = Post.objects.all()
        serializer = PostListSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        serializer = PostListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def post_detail(request, post_pk):
    if request.method == "GET":
        post = Post.objects.get(pk=post_pk)
        serializer = PostDetailSerializer(post)
        return Response(serializer.data)

    elif request.method == "PUT":
        post = Post.objects.get(pk=post_pk)
        serializer = PostListSerializer(instance=post, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        post = Post.objects.get(pk=post_pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "POST"])
def comment_list(request, post_pk):
    if request.method == "GET":
        post = Post.objects.get(pk=post_pk)
        comments = post.comment_set.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "POST":
        post = Post.objects.get(pk=post_pk)
        serializer = CommentListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(post=post, user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET", "PUT", "DELETE"])
def comment_detail(request, comment_pk):
    if request.method == "GET":
        comments = Comment.objects.get(pk=comment_pk)
        serializer = CommentDetailSerializer(comments)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PUT":
        comment = Comment.objects.get(pk=comment_pk)
        serializer = CommentListSerializer(instance=comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        comment = Comment.objects.get(pk=comment_pk)
        comment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
