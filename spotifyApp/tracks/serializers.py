from rest_framework import serializers

class TrackSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   track = serializers.IntegerField()
   artist = serializers.IntegerField()