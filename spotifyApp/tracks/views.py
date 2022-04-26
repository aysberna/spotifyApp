from urllib.parse import urlencode
from rest_framework.views import APIView
from rest_framework.response import Response
import requests

class TrackView(APIView):

    def get(self, request, param):
        CLIENT_ID = "CLIENT_ID"
        CLIENT_SECRET = "CLIENT_SECRET"
        
        AUTH_URL = "https://accounts.spotify.com/api/token"
        auth_response = requests.post(AUTH_URL, {
            'grant_type': 'client_credentials',
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET,
        })

        # Convert response to JSON
        auth_response_data = auth_response.json()

        # Save the access token
        access_token = auth_response_data['access_token']

        # Need to pass access token into header to send properly formed GET request to API server
        headers = {
            'Authorization': 'Bearer {token}'.format(token=access_token)
        }

        params = urlencode({
            'q': f"{param}", # genre
            'type': "artist",
            'limit': "10"
        })

        BASE_URL = 'https://api.spotify.com/v1/search'
        data = f"{BASE_URL}?{params}"
        result = requests.get(data, headers=headers)
        result = result.json()

        return Response(result)
