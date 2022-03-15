from rest_framework import viewsets
from .models import customerManagement
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = customerManagement.objects.all()
    serializer_class = UserSerializer