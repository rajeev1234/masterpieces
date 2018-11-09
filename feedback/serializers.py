from rest_framework import serializers
from feedback.models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        # fields = ('name', 'email', 'message','ques1','ques2','ques3','ques4','ques5','ques6')
        fields = '__all__' 