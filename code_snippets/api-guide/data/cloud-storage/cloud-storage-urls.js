//index.js file

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, ID to collect statistics about inputs job 
// to be created, and cloud storage URL. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own extraction job
const INPUTS_JOB_ID = "";  // If empty, ID will be autogenerated; if non-empty, the given ID will be used
const CLOUD_STORAGE_URL = "s3://samples.clarifai.com/storage/";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostInputsDataSources(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "app_pat": PAT,
        "data_sources": [
            {
                "inputs_add_job_id": INPUTS_JOB_ID,
                "url": {
                    "url": CLOUD_STORAGE_URL,
                    // Uncomment to add credentials
                    /* "credentials": {
                         "s3_creds": { "id": "ADD_ACCESS_ID_HERE", "secret": "ADD_SECRET_HERE", "region": "ADD_AWS_REGION_HERE" }
                     }*/
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
            console.log(response.status);
            throw new Error("Post inputs failed, status: " + response.status.description);
        }

        console.log(response);
    }

);