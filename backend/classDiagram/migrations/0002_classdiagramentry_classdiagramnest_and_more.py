# Generated by Django 5.0.4 on 2024-11-18 04:55

import classDiagram.models
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classDiagram', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClassDiagramEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=classDiagram.models.upload_to_author)),
            ],
        ),
        migrations.CreateModel(
            name='ClassDiagramNest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('file', models.FileField(upload_to=classDiagram.models.upload_to_author)),
                ('generated_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('dir_name', models.CharField(default='default_class_directory', max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='ClassDiagram',
        ),
        migrations.AddField(
            model_name='classdiagramentry',
            name='sequence_diagram_nest',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='class_diagram_files', to='classDiagram.classdiagramnest'),
        ),
    ]
