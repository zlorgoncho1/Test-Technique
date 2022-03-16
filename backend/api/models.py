from django.db import models

class customerManagement(models.Model):
	fullname = models.CharField(max_length=50)
	tag = models.CharField(max_length=50, default="defaultTag")
	status = models.BooleanField()
	location = models.CharField(max_length=50)
	phone = models.CharField(max_length=50)
	picture = models.ImageField(upload_to="api/images/", null=True, blank=True, default="default.png")

	def __str__(self):
		return self.fullname + ' | ' + self.tag