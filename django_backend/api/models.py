from django.db import models


class Student(models.Model):

    image = models.FileField(upload_to='uploads/images', null=True, blank=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(max_length=100, null=False, blank=False, unique=True)
    address = models.TextField(max_length=500, null=False, blank=False)
    phone = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self) -> str:
        return str(self.name)
