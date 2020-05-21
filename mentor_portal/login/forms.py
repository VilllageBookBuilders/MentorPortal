from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

# # GENDERS = [
#     ('male, Male'),
#     ('female', 'Female')
# ]

class SignUpForm(UserCreationForm):
    first_name = forms.CharField(max_length=30, required=True)
    last_name = forms.CharField(max_length=30, required=True)
    email = forms.EmailField(max_length=100, required=True)
    over_age_14 = forms.BooleanField(label='Age 14 or older', required=True)
    # gender = forms.ChoiceField(widget=forms.RadioSelect, choices=GENDERS)
    time_zone = forms.CharField(label='Time Zone Abbreviation', max_length=5, required=True)
    availability1 = forms.CharField(max_length=100, required=True)
    availability2 = forms.CharField(max_length=100, required=True)
    availability3 = forms.CharField(max_length=100, required=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'over_age_14', 'time_zone', 'availability1', 'availability2', 'availability3', 'password1', 'password2', )