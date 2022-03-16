from django.http import JsonResponse
from django.views import View
from .models import FilmedMovie
from .serializers import movieSerializer




# Create your views here.
class FilmedMovies(View):
    def get(self, request, *args, **kwargs):
        movies= FilmedMovie.objects.filter()
        serialize = movieSerializer(movies, many= True)

        return JsonResponse(serialize.data, safe=False)
        

