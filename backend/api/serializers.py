from rest_framework import serializers
from .models import filmedmovie, netflixorginals, action, horror, romance, documentary


class FilmedMovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = filmedmovie
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']


class NetflixOriginalsSerializer(serializers.ModelSerializer):
    class Meta:
        model = netflixorginals
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']



class ActionSerializer(serializers.ModelSerializer):
    class Meta:
        model = action
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']


class HorrorSerializer(serializers.ModelSerializer):
    class Meta:
        model = horror
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']



class RomanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = romance
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']


class DocumentarySerializer(serializers.ModelSerializer):
    class Meta:
        model = documentary
        fields = ['title', 'description', 'content', 'created', 'uuid', 'type', 'videos', 'image', 'flyer', 'age_limit']