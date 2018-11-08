from django.db import models



class Lead(models.Model):
    username = models.CharField(max_length=200)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    technique = models.BooleanField()
    perfectArt = models.BooleanField()
    latestNews = models.BooleanField()
    scholarship = models.BooleanField()
    famous_artist = models.BooleanField()
    artist_stories = models.BooleanField()
    artforms = models.BooleanField()
    art_collection = models.BooleanField()
    choose_art_wall = models.BooleanField()
    artist_sign = models.BooleanField()
