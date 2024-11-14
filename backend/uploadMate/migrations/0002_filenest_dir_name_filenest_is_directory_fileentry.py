# Generated by Django 5.0.4 on 2024-11-14 06:55

import django.db.models.deletion
import uploadMate.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploadMate', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='filenest',
            name='dir_name',
            field=models.CharField(default='default_directory', max_length=100),
        ),
        migrations.AddField(
            model_name='filenest',
            name='is_directory',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='FileEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=uploadMate.models.upload_to_author)),
                ('file_nest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='uploadMate.filenest')),
            ],
        ),
    ]
