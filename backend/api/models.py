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

MOVIE_CATEGORY=(
    ('Originals', 'Originals'),
    ('Horror', 'Horror'),
    ('Action', 'Action'),
    ('Romance', 'Romance'),
    ('Documentary', 'Documentary'),
    ('Comedy', 'Comedy'),
    ('Sci-fi', 'Sci-fi'),
    ('Drama', 'Drama'),
    ('Fantasy', 'Fantasy'),
    ('Crime', 'Crime'),
    ('Thriller', 'Thriller'),
)

MOVIE_STATUS=(
    ('Trending', 'Trending'),
    ('Popular', 'Popular'),
    ('New Release', 'New Release'),
    ('Most Watched', 'Most Watched'),
)

PREMIERE=(
    ('NO', 'NO'),
    ('YES', 'YES')
)

# Create your models here.
class Movie(models.Model):
    title=models.CharField(max_length=225)
    description:str=models.TextField()
    content:str=models.TextField()
    created=models.DateTimeField(auto_now_add=True)
    uuid=models.UUIDField(default=uuid.uuid4)
    type=models.CharField(max_length=10, choices=MOVIE_CHOICES)
    category=models.CharField(max_length=20, choices=MOVIE_CATEGORY)
    videos=models.CharField(max_length=225)
    image=models.CharField(max_length=225)
    flyer=models.CharField(max_length=225)
    age_limit=models.CharField(max_length=10, choices=AGE_CHOICES)
    status=models.CharField(max_length=20, choices=MOVIE_STATUS)
    premiere=models.CharField(max_length=10, choices=PREMIERE, default="NO")

    def __str__ (self):
        return self.title
