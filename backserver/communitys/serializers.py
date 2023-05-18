from rest_framework import serializers
from .models import Post, Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = ("like_users",)


class PosDetailSerializer(serializers.ModelSerializer):
    comment_set = CommentSerializer(many=True)
    comment_count = serializers.IntegerField(source="comment_set.count")

    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = (
            "comment_set",
            "comment_count",
        )


class CommentDetailSerializer(serializers.ModelSerializer):
    post = PostSerializer()

    class Meta:
        model = Comment
        fields = "__all__"
        read_only_fields = ("post",)