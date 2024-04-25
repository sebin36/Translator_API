from django.db import models

class Translation(models.Model):
    source_text = models.TextField()
    target_text = models.TextField()
    source_language = models.CharField(max_length=50)
    target_language = models.CharField(max_length=50)
