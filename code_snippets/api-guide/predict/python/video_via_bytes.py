####################################################################################################
# In this section, we set the user authentication, app ID, model details, location of the video
# we want as an input, and sample_ms. Change these strings to run your own example.
###################################################################################################

USER_ID = 'YOUR_USER_ID_HERE'
# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Change these to whatever model and video input you want to use
MODEL_ID = 'general-image-recognition'
MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40'
VIDEO_FILE_LOCATION = 'YOUR_VIDEO_FILE_LOCATION_HERE'
# Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS) 
SAMPLE_MS = 500

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

from clarifai_grpc.channel.clarifai_channel import ClarifaiChannel
from clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc
from clarifai_grpc.grpc.api.status import status_code_pb2

channel = ClarifaiChannel.get_grpc_channel()
stub = service_pb2_grpc.V2Stub(channel)

metadata = (('authorization', 'Key ' + PAT),)

userDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)

with open(VIDEO_FILE_LOCATION, "rb") as f:
    file_bytes = f.read()

post_model_outputs_response = stub.PostModelOutputs(
    service_pb2.PostModelOutputsRequest(
        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT
        model_id=MODEL_ID,
        version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version
        inputs=[
            resources_pb2.Input(
                data=resources_pb2.Data(
                    video=resources_pb2.Video(
                        base64=file_bytes
                    )
                )
            )
        ],
        model=resources_pb2.Model(
            output_info=resources_pb2.OutputInfo(
                output_config=resources_pb2.OutputConfig(sample_ms=SAMPLE_MS)
            )
        ),
    ),
    metadata=metadata
)
if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:
    print(post_model_outputs_response.status)
    raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)

# Since we have one input, one output will exist here
output = post_model_outputs_response.outputs[0]

# A separate prediction is available for each "frame"
for frame in output.data.frames:
    print("Predicted concepts on frame " + str(frame.frame_info.time) + ":")
    for concept in frame.data.concepts:
        print("\t%s %.2f" % (concept.name, concept.value))

# Uncomment this line to print the full Response JSON
#print(output)