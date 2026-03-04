from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Sample
from .serializer import SampleSerializer


class SampleViewSet(viewsets.ModelViewSet):
    queryset = Sample.objects.all()
    serializer_class = SampleSerializer
