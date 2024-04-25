<?php

require __DIR__ . "/vendor/autoload.php";

/////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and task IDs. 
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////

$USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
$PAT = "YOUR_PAT_HERE";
$APP_ID = "YOUR_APP_ID_HERE";
// Change these to delete your own tasks
$TASK_ID_1 = "7aceabee601c4e73b7c1f3ca1e09c1f6";
$TASK_ID_2 = "fa0c0ddcc43944da8cc66504a2b85d76";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

use Clarifai\ClarifaiClient;
use Clarifai\Api\DeleteTasksRequest;
use Clarifai\Api\Status\StatusCode;
use Clarifai\Api\UserAppIDSet;

$client = ClarifaiClient::grpc();

$metadata = ["Authorization" => ["Key " . $PAT]];

$userDataObject = new UserAppIDSet([
    "user_id" => $USER_ID,
    "app_id" => $APP_ID,
]);

// Let's make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a
// request and then wait for the response
[$response, $status] = $client->DeleteTasks(
        // The request object carries the request along with the request status and other metadata related to the request itself
        new DeleteTasksRequest([
            "user_app_id" => $userDataObject,
            "ids" => [$TASK_ID_1, $TASK_ID_2]         
        ]),
        $metadata
    )
    ->wait();

// A response is returned and the first thing we do is check the status of it
// A successful response will have a status code of 0; otherwise, there is some error
if ($status->code !== 0) {
    throw new Exception("Error: {$status->details}");
}

// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure
// (not just that the communication was successful)
if ($response->getStatus()->getCode() != StatusCode::SUCCESS) {
    throw new Exception(
        "Failure response: " .
            $response->getStatus()->getDescription() .
            " " .
            $response->getStatus()->getDetails()
    );
}

?>
