from django.db import models
import uuid


AGE_CHOICES=(
    ('All', 'All'),
    ('Kids', 'Kids')
)

MOVIE_CHOICES=(
    ('seasonal', 'Seasonal'),
    ('single', 'Single')
)

# Create your models here.
class Movie(models.Model):
    title=models.CharField(max_length=225)
    description:str=models.TextField()
    content:str=models.TextField()
    created=models.DateTimeField(auto_now_add=True)
    uuid=models.UUIDField(default=uuid.uuid4)
    type=models.CharField(max_length=10, choices=MOVIE_CHOICES)
    videos=models.CharField(max_length=225)
    image=models.ImageField(upload_to='image')
    flyer=models.ImageField(upload_to='flyers')
    age_limit=models.CharField(max_length=10, choices=AGE_CHOICES)

    def __str__ (self):
        return self.title