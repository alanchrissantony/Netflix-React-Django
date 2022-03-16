from rest_framework import serializers
from .models import FilmedMovie


class movieSerializer(serializers.ModelSerializer):
    class Meta:
        model = FilmedMovie
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']