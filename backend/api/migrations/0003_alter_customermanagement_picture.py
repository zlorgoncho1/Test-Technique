# Generated by Django 4.0.3 on 2022-03-16 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_customermanagement_picture_customermanagement_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customermanagement',
            name='picture',
            field=models.ImageField(blank=True, default='default.jpg', null=True, upload_to=''),
        ),
    ]
