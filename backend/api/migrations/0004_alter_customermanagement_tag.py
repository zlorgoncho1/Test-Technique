# Generated by Django 4.0.3 on 2022-03-16 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_customermanagement_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customermanagement',
            name='tag',
            field=models.CharField(default='kiranacharyaa', max_length=50),
        ),
    ]