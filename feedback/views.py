from django.shortcuts import render
from feedback.models import Lead
from feedback.serializers import LeadSerializer
from rest_framework import generics
    
class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer