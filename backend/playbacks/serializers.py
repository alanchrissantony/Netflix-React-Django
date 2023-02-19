from rest_framework import serializers
from .models import Movie



class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']