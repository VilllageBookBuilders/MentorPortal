from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def index(request):
    return render(request, "index.html")

def testing(request):
    return HttpResponse("Testing Basic HttpResponse.")

def signup(request):
    return render(request, "signup.html")

def profile(request):
    return render(request, "myprofile.html")