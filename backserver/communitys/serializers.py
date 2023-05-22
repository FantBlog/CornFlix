from rest_framework import serializers
from .models import Post, Comment
from accounts.models import User


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("username",)


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class CommentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("content",)


class PostListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("id", "title", "content")


class PostDetailSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)
    comment_count = serializers.IntegerField(source="comment_set.count")
    like_users = UserSerializer(many=True)
    like_users_count = serializers.IntegerField(source="like_users.count")
    user = UserSerializer()

    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = (
            "comment_set",
            "comment_count",
            "like_users_count",
            "user_set",
        )


class CommentDetailSerializer(serializers.ModelSerializer):
    post = PostListSerializer()

    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ("post",)
