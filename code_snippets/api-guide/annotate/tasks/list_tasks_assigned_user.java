package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.StatusCode;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;

public class ClarifaiExample {

    ///////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, app ID, and
    // worker user ID. Change these strings to run your own example.
    ///////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the Account's Security section	
    static final String PAT = "YOUR_PAT_HERE";
    static final String APP_ID = "YOUR_APP_ID_HERE";
    static final String WORKER_USER_ID = "WORKER_USER_ID_HERE";

    //////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    //////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
            .withCallCredentials(new ClarifaiCallCredentials(PAT));

        MultiTaskResponse listTasksResponse = stub.listTasks(
            ListTasksRequest.newBuilder()
            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
            .addWorkerUserIds(WORKER_USER_ID)
            .build()
        );

        if (listTasksResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("List tasks failed, status: " + listTasksResponse.getStatus());
        }

        System.out.println(listTasksResponse);
    }
}
