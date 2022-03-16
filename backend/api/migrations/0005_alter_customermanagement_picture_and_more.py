# Generated by Django 4.0.3 on 2022-03-16 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_customermanagement_tag'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customermanagement',
            name='picture',
            field=models.ImageField(blank=True, default='default.png', null=True, upload_to='api/images/'),
        ),
        migrations.AlterField(
            model_name='customermanagement',
            name='tag',
            field=models.CharField(default='dafaultTag', max_length=50),
        ),
    ]