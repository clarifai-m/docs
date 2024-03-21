//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model ID, and concept IDs.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to train your own model
const MODEL_ID = "my-prompter-model";
const PROMPTER_DESCRIPTION = "Positive or negative sentiment classifier prompter";
const PROMPT_TEMPLATE = "Classify whether the sentiment of the given text is positive or negative {data.text.raw}";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostModelVersions(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        model_id: MODEL_ID,
        description: PROMPTER_DESCRIPTION,
        model_versions: [{
            output_info: {
                params: {
                  prompt_template : PROMPT_TEMPLATE
                }
            }

        }]

    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.error('Post models failed, status:', response.status);
            throw new Error("Post models failed, status: " + response.status.description);
        }

        console.log(response);

    }
);