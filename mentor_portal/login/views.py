from django.shortcuts import render
from django.http import HttpResponse
# from .forms import ListForm
# from .models import Mentor
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, "index.html")

def testing(request):
    return HttpResponse("Testing Basic HttpResponse.")

def signup(request):
    return render(request, "signup.html")
    # if request.method == 'POST':
    #     form = ListForm(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         messages.success(request, ('You have been signed up!  You may now log in.'))
    #         return render(request, 'login.html')
    # else:
    #     return render(request, "signup.html")

def login(request):
    return render(request, "login.html")