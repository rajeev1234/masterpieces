# Generated by Django 2.0 on 2018-11-05 09:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lead',
            old_name='ques1',
            new_name='art_collection',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques10',
            new_name='artforms',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques2',
            new_name='artist_sign',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques3',
            new_name='artist_stories',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques4',
            new_name='choose_art_wall',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques5',
            new_name='famous_artist',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques6',
            new_name='latestNews',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques7',
            new_name='perfectArt',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques8',
            new_name='scholarship',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='ques9',
            new_name='technique',
        ),
        migrations.RenameField(
            model_name='lead',
            old_name='name',
            new_name='username',
        ),
    ]
