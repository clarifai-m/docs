<?php

require __DIR__ . "/vendor/autoload.php";

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the inputs and 
// concepts IDs we want to update. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these based on the updates you want to make
$INPUT_ID_1 = 'c99f1b557d1d43d1916b46f8ce4a0487';
$INPUT_ID_2 = '1be923b967f148dbb4e588cf4a723da1';
$CONCEPT_ID_1 = 'tree';
$CONCEPT_ID_2 = 'water';
$CONCEPT_ID_3 = 'animal';
$CONCEPT_ID_4 = 'fruit';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\Data;
use Clarifai\Api\Input;
use Clarifai\Api\Concept;
use Clarifai\Api\PatchInputsRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID
]);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->PatchInputs(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new PatchInputsRequest([
            "user_app_id" => $userDataObject,
            "action" => "merge",  // Supported actions: overwrite, merge, remove
            'inputs' => [
                new Input([ // The Input object wraps the id and Data object in order to meet the API specification 
                    "id" => $INPUT_ID_1,             
                    'data' => new Data([ // The Data object is constructed around the Concept object. It offers a container that has additional concept independent
                                        // metadata                    
                        "concepts" => [
                            new Concept([
                            "id" => $CONCEPT_ID_1,
                            "value" => 1 // 1 means true, this concept is present
                            ]),
                            new Concept([
                                "id" => $CONCEPT_ID_2,
                                "value" => 0 // 0 means false, this concept is not present
                            ])
                        ]
                    ])
                            ]),
                new Input([ 
                    "id" => $INPUT_ID_2,             
                    'data' => new Data([                          
                        "concepts" => [
                            new Concept([
                            "id" => $CONCEPT_ID_3,
                            "value" => 1 
                            ]),
                            new Concept([
                                "id" => $CONCEPT_ID_4,
                                "value" => 0 
                            ])
                        ]
                    ])
                ])
            ]
        ]),
        $metadata
    )->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) {
    throw new Exception("Error: {$status->details}");
}
// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure 
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    print $response->getStatus()->getDetails();
    throw new Exception("Failure response: " . $response->getStatus()->getDescription());
}

?>
