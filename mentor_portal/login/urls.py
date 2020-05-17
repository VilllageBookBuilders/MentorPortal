from django.urls import path, include
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("testing", views.testing, name="testing"),
    path("signup", views.signup, name="signup"),
    path("login", views.login, name="login"),
]