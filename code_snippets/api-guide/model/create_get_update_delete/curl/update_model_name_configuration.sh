curl -X PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "models": [
      {
        "id": "petsID",
        "name": "newname",
        "output_info": {
          "data": {"concepts": [{"id": "birds"}, {"id": "hurd"}]},
          "output_config": {
            "concepts_mutually_exclusive": true            
          }
        }
      }
    ],
    "action": "overwrite"
  }'
 