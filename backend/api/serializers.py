from rest_framework import serializers
from .models import customerManagement

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = customerManagement
        fields = '__all__'