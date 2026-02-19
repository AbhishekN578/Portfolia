from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100, default="Abhishek N")
    address = models.TextField()
    email = models.EmailField()
    github_link = models.URLField(blank=True)
    linkedin_link = models.URLField(blank=True)
    resume_url = models.URLField(blank=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    github_url = models.URLField()
    live_url = models.URLField(blank=True)
    image_url = models.URLField(blank=True)
    stack = models.CharField(max_length=200, help_text="e.g. React, Django, MySQL")

    def __str__(self):
        return self.title
