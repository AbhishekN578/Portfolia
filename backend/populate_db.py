import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from core.models import Profile, Project

def populate():
    # Clear existing
    Profile.objects.all().delete()
    Project.objects.all().delete()

    # Create Profile
    profile = Profile.objects.create(
        name="Abhishek N",
        address="M.M Doddi Kakkera Shorapur Yadgir 585215",
        email="aabhishek4463@gmail.com",
        github_link="https://github.com/AbhishekN578/",
        linkedin_link="",
        resume_url=""
    )

    # Create Projects
    projects = [
        {
            "title": "Commentary Portal",
            "description": "A robust platform for sports commentary and updates.",
            "github_url": "https://github.com/AbhishekN578/commentry-portal",
            "stack": "Django, React, MySQL"
        },
        {
            "title": "Music Player",
            "description": "Feature-rich music streaming application.",
            "github_url": "https://github.com/IWAYTrainings/Abhishek_MusicPlayer",
            "stack": "React, CSS, JavaScript"
        },
        {
            "title": "Food Delivery App",
            "description": "Integrated food delivery system with real-time tracking.",
            "github_url": "https://github.com/AbhishekN578/food-delivery-app",
            "stack": "Django REST, React, MySQL"
        }
    ]

    for p in projects:
        Project.objects.create(**p)

if __name__ == "__main__":
    populate()
    print("Database populated successfully!")
