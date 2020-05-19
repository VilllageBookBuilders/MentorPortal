from django.urls import path, include
from . import views
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path("", views.index, name="index"),
    path("testing", views.testing, name="testing"),
    path("signup", views.signup, name="signup"),
    path("login", LoginView.as_view(), name="login"),
    path("profile", views.profile, name="profile"),
    path("logout", LogoutView.as_view(), name="logout"),
]