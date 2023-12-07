package com.clarifai.example;

import com.clarifai.grpc.api.*;
import com.clarifai.channel.ClarifaiChannel;
import com.clarifai.credentials.ClarifaiCallCredentials;
import com.clarifai.grpc.api.status.StatusCode;

public class ClarifaiExample {

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // In this section, we set the user authentication, user and app ID, model details, and raw text we want as a prompt.
    // Change these values to run your own example.
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    static final String USER_ID = "YOUR_USER_ID_HERE";
    // Your PAT (Personal Access Token) can be found in the portal under Authentication
    static final String PAT = "YOUR_PAT_HERE";    
    static final String APP_ID = "YOUR_APP_ID_HERE";
    // Change this to train your own model
    static final String MODEL_ID = "petsID";
    static final String CONCEPT_ID = "boscoe";

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////	

    public static void main(String[] args) {

        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())
                .withCallCredentials(new ClarifaiCallCredentials(PAT));

        SingleModelResponse postModelVersionsResponse = stub.postModelVersions(
                PostModelVersionsRequest.newBuilder()
                        .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))
                        .setModelId(MODEL_ID)
                        .addModelVersions(ModelVersion.newBuilder()
                                .setOutputInfo(OutputInfo.newBuilder()
                                        .setData(Data.newBuilder()
                                                .addConcepts(Concept.newBuilder()
                                                        .setId(CONCEPT_ID)
                                                        .setValue(1)
                                                )
                                        )
                                )
                        )
                        .build()
        );

        if (postModelVersionsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
            throw new RuntimeException("Post model outputs failed, status: " + postModelVersionsResponse.getStatus());
        }

    }
}
