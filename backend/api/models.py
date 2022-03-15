from django.db import models

class customerManagement(models.Model):
	fullname = models.CharField(max_length=50)
	status = models.BooleanField()
	location = models.CharField(max_length=50)
	phone = models.CharField(max_length=50)

	def __str__(self):
		return self.fullname