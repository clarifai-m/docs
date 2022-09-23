# Value of 0 will search for images that don't have the concept.
# Instead of "id", you can search by "name" as well.
# Here we search for images which we labeled with "ai_fvlBqXZR" and for which the General prediction model does not find
# a "people" concept.

curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations/searches" \
  -H "Authorization: Key YOUR_PAT_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "searches": [
      {
        "query": {
        "ranks": [
            {
            "annotation": {
                "data": {
                "concepts": [
                    {
                    "id":"ai_fvlBqXZR",
                    "value": 1
                    }
                ]
                }
            }
            }, {   
            "annotation": {
                "data": {
                "concepts": [
                    {
                    "id":"people",
                    "value": 0
                    }
                ]
                }
            }
            }
        ]
        }
      }
    ]
  }'