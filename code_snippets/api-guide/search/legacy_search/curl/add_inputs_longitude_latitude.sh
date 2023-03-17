curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/inputs" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/dog.tiff",
            "allow_duplicate_url": true
          },
          "geo": {
            "geo_point": {
              "longitude": -30,
              "latitude": 40
            }
          }
        }
      }
    ]
  }'