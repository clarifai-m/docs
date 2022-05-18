//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details of the points 
// we want to perform a search with. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to perform your own search
const LONGITUDE_1 = -31.0;
const LATITUDE_1 = 42.0;
const LONGITUDE_2 = -29.0;
const LATITUDE_2 = 39.0;

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostAnnotationsSearches(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        searches: [
            {
                query: {
                    filters: [
                        {
                            annotation: {
                                data: {
                                    geo: {
                                        geo_box: [
                                            {
                                                geo_point: {
                                                    longitude: LONGITUDE_1,
                                                    latitude: LATITUDE_1
                                                }
                                            },
                                            {
                                                geo_point: {
                                                    longitude: LONGITUDE_2,
                                                    latitude: LATITUDE_2
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
        }
    }
);