<<<<<<< HEAD
# Generated by Django 5.0.4 on 2024-11-12 15:18
=======
# Generated by Django 5.1.3 on 2024-11-12 16:46
>>>>>>> 7681830a0765983957b35da352e83168a1178db7

import django.utils.timezone
import flowchart.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

<<<<<<< HEAD
    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Flowchart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('file', models.FileField(upload_to=flowchart.models.upload_to_author)),
                ('generated_at', models.DateTimeField(default=django.utils.timezone.now)),
=======
    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Flowchart",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("language", models.CharField(max_length=100)),
                ("author", models.CharField(max_length=100)),
                ("file", models.FileField(upload_to=flowchart.models.upload_to_author)),
                (
                    "generated_at",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
>>>>>>> 7681830a0765983957b35da352e83168a1178db7
            ],
        ),
    ]
