from django.http import JsonResponse
from django.views import View
from .models import Movie



# Create your views here.
class Movies(View):
    def get(self, request, *args, **kwargs):
        movies= Movie.objects.all()
        data = {}
        i = 0
        while i < movies.count():
            data[i] = {
            'title': movies[i].title,
            'description': movies[i].description,
            'content': movies[i].content,
            'created': movies[i].created,
            'uuid': movies[i].uuid,
            'type': movies[i].type,
            'videos': movies[i].videos,
            'image': movies[i].image.url,
            'flyer': movies[i].flyer.url,
            'age_limit': movies[i].age_limit,
            }
            
            i += 1
        return JsonResponse({'movie': data})
        

