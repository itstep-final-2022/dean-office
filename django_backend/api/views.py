from django.shortcuts import render

from rest_framework import viewsets
from .serializers import StudentsSerializer
from .models import Student


class StudentsView(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentsSerializer
