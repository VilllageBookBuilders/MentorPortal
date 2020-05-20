from django.contrib.auth import login, authenticate
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from login.forms import SignUpForm
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, "index.html")

def testing(request):
    return HttpResponse("Testing Basic HttpResponse.")

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('login')
    else:
        form = SignUpForm()
    return render(request, "signup.html", {'form': form})

def profile(request):
    return render(request, "myprofile.html")