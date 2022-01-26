"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9319],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),i=t(7294),s=t(2389),o=t(9443);var r=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3616),u=t(6010),p="tabItem_vU9c";function c(e){var n,t,s,o=e.lazy,c=e.block,d=e.defaultValue,m=e.values,h=e.groupId,_=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=f[0])?void 0:s.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=r(),I=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,i.useState)(v),D=T[0],E=T[1],y=[],k=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=I[h];null!=S&&S!==D&&g.some((function(e){return e.value===S}))&&E(S)}var R=function(e){var n=e.currentTarget,t=y.indexOf(n),a=g[t].value;a!==D&&(k(n),E(a),null!=h&&O(h,a))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.currentTarget)+1;t=y[a]||y[0];break;case"ArrowLeft":var i=y.indexOf(e.currentTarget)-1;t=y[i]||y[y.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},_)},g.map((function(e){var n=e.value,t=e.label,s=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===n?0:-1,"aria-selected":D===n,key:n,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:R,onClick:R},s,{className:(0,u.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":D===n})}),null!=t?t:n)}))),o?(0,i.cloneElement)(f.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==D})}))))}function d(e){var n=(0,s.Z)();return i.createElement(c,(0,a.Z)({key:String(n)},e))}},1541:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=t(7462),i=t(3366),s=(t(7294),t(3905)),o=t(6396),r=t(8215),l=t(9055),u=["components"],p={description:"Make predictions on image inputs",sidebar_position:1},c="Images",d={unversionedId:"api-guide/predict/images",id:"api-guide/predict/images",title:"Images",description:"Make predictions on image inputs",source:"@site/docs/api-guide/predict/images.md",sourceDirName:"api-guide/predict",slug:"/api-guide/predict/images",permalink:"/api-guide/predict/images",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/predict/images.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Make predictions on image inputs",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/api-guide/predict/"},next:{title:"Video",permalink:"/api-guide/predict/video"}},m=[{value:"Via URL",id:"via-url",children:[],level:2},{value:"Via bytes",id:"via-bytes",children:[],level:2}],h={toc:m};function _(e){var n=e.components,t=(0,i.Z)(e,u);return(0,s.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"images"},"Images"),(0,s.kt)("h2",{id:"via-url"},"Via URL"),(0,s.kt)("p",null,"To get predictions for an input, you need to supply an image and the model you'd like to get predictions from. You can supply an image either with a publicly accessible URL or by directly sending bytes. You can send up to 128 images in one API call. You specify the model you'd like to use with the ",(0,s.kt)("inlineCode",{parentName:"p"},"{model-id}")," parameter."),(0,s.kt)("p",null,"Below is an example of how you would send image URLs and receive back predictions from the ",(0,s.kt)("inlineCode",{parentName:"p"},"general")," model. Note that the initialization code used here is outlined in detail on the ",(0,s.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section we set the user authentication, app and model IDs, and the URL\n# of the image we want as an input. Change these strings to run your own example.\n###################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\n# Change this to whatever image URL you want to process\nIMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'\n# This is optional. You can specify a model version or the empty string for the default.\nMODEL_VERSION_ID = ''\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version.\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_outputs_response.status)\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here.\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))")),(0,s.kt)(r.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\n///////////////////////////////////////////////////////////////////////////////\n// Specifying the Request Data\n///////////////////////////////////////////////////////////////////////////////\n//\n// In the Clarifai platform an image is defined by a special Image object.\n// There are several ways in which an Image object can be populated including\n// by url and image bytes (base64).\n//\n$image = new Image([\n    'url' => 'https://samples.clarifai.com/dog2.jpeg'\n]);\n\n//\n// After an Image object is created, a Data object is constructed around it.\n// The Data object offers a container that contains additional image independent\n// metadata.  In this particular use case, no other metadata is needed to be\n// specified.\n//\n$data = new Data([\n    'image' => $image\n]);\n\n//\n// The Data object is then wrapped in an Input object in order to meet the\n// API specification.  Additional fields are available to populate in the Input\n// object, but for the purposes of this example we can send in just the\n// Data object.\n//\n$input = new Input([\n    'data' => $data\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Creating the request object \n///////////////////////////////////////////////////////////////////////////////\n//\n// Finally, the request object itself is created.  This object carries the request\n// along with the request status and other metadata related to the request itself.\n// In this example we populate:\n//    - the `user_app_id` field with the UserAppIDSet constructed above\n//    - the `model_id` field with the ID of the model we are referencing\n//    - the `inputs` field with an array of input objects constructed above \n//\n$request = new PostModelOutputsRequest([\n    'user_app_id' => $userDataObject, // This is defined above\n    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.\n    'inputs' => [$input]\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Making the RPC call\n///////////////////////////////////////////////////////////////////////////////\n//\n// Once the request object is constructed, we can call the actual request to the\n// Clarifai platform.  This uses the opened gRPC client channel to communicate the\n// request and then wait for the response.\n//\n[$response, $status] = $client->PostModelOutputs(\n    $request,\n    $metadata\n)->wait();\n\n///////////////////////////////////////////////////////////////////////////////\n// Handling the Response\n///////////////////////////////////////////////////////////////////////////////\n//\n// The response is returned and the first thing we do is check the status of it.\n// A successful response will have a status code of 0, otherwise there is some \n// reported error.\n//\nif ($status->code !== 0) throw new Exception(\"Error: {$status->details}\");\n\n//\n// In addition to the RPC response status, there is a Clarifai API status that\n// reports if the operationo was a success or failure (not just that the commuunication)\n// was successful.\n//\nif ($response->getStatus()->getCode() != StatusCode::SUCCESS) {\n    throw new Exception(\"Failure response: \" . $response->getStatus()->getDescription() . \" \" .\n        $response->getStatus()->getDetails());\n}\n\n//\n// The output of a successful call can be used in many ways.  In this example,\n// we loop through all of the predicted concepts and print them out along with\n// their numerical prediction value (confidence).\n//\necho \"Predicted concepts:\\n\";\nforeach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {\n    echo $concept->getName() . \": \" . number_format($concept->getValue(), 2) . \"\\n\";\n}\n?>\n"))),(0,s.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(\n    PostModelOutputsRequest.newBuilder()\n        .setModelId("{THE_MODEL_ID}")\n        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.\n        .addInputs(\n            Input.newBuilder().setData(\n                Data.newBuilder().setImage(\n                    Image.newBuilder().setUrl("https://samples.clarifai.com/metro-north.jpg")\n                )\n            )\n        )\n        .build()\n);\n\nif (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());\n}\n\n// Since we have one input, one output will exist here.\nOutput output = postModelOutputsResponse.getOutputs(0);\n\nSystem.out.println("Predicted concepts:");\nfor (Concept concept : output.getData().getConceptsList()) {\n    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());\n}\n'))),(0,s.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostModelOutputs(\n    {\n        model_id: "{THE_MODEL_ID}",\n        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.\n        inputs: [\n            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post model outputs failed, status: " + response.status.description);\n        }\n\n        // Since we have one input, one output will exist here.\n        const output = response.outputs[0];\n\n        console.log("Predicted concepts:");\n        for (const concept of output.data.concepts) {\n            console.log(concept.name + " " + concept.value);\n        }\n    }\n);\n'))),(0,s.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST\n    -H \'Authorization: Key YOUR_API_KEY\'\n    -H "Content-Type: application/json"\n    -d \'\n    {\n      "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n            }\n          }\n        }\n      ]\n    }\'\n    https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs\n'))),(0,s.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n  "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "image": {\n          "url": "https://samples.clarifai.com/metro-north.jpg"\n        }\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\n// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only\n// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs\n// this will default to the latest version_id\n\nfetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"response_json",label:"Response JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "status": {\n    "code": 10000,\n    "description": "Ok"\n  },\n  "outputs": [\n    {\n      "id": "ea68cac87c304b28a8046557062f34a0",\n      "status": {\n        "code": 10000,\n        "description": "Ok"\n      },\n      "created_at": "2016-11-22T16:50:25Z",\n      "model": {\n        "name": "general-v1.3",\n        "id": "aaa03c23b3724a16a56b629203edc62c",\n        "created_at": "2016-03-09T17:11:39Z",\n        "app_id": null,\n        "output_info": {\n          "message": "Show output_info with: GET /models/{model_id}/output_info",\n          "type": "concept"\n        },\n        "model_version": {\n          "id": "aa9ca48295b37401f8af92ad1af0d91d",\n          "created_at": "2016-07-13T01:19:12Z",\n          "status": {\n            "code": 21100,\n            "description": "Model trained successfully"\n          }\n        }\n      },\n      "input": {\n        "id": "ea68cac87c304b28a8046557062f34a0",\n        "data": {\n          "image": {\n            "url": "https://samples.clarifai.com/metro-north.jpg"\n          }\n        }\n      },\n      "data": {\n        "concepts": [\n          {\n            "id": "ai_HLmqFqBf",\n            "name": "train",\n            "app_id": null,\n            "value": 0.9989112\n          },\n          {\n            "id": "ai_fvlBqXZR",\n            "name": "railway",\n            "app_id": null,\n            "value": 0.9975532\n          },\n          {\n            "id": "ai_Xxjc3MhT",\n            "name": "transportation system",\n            "app_id": null,\n            "value": 0.9959158\n          },\n          {\n            "id": "ai_6kTjGfF6",\n            "name": "station",\n            "app_id": null,\n            "value": 0.992573\n          },\n          {\n            "id": "ai_RRXLczch",\n            "name": "locomotive",\n            "app_id": null,\n            "value": 0.992556\n          },\n          {\n            "id": "ai_VRmbGVWh",\n            "name": "travel",\n            "app_id": null,\n            "value": 0.98789215\n          },\n          {\n            "id": "ai_SHNDcmJ3",\n            "name": "subway system",\n            "app_id": null,\n            "value": 0.9816359\n          },\n          {\n            "id": "ai_jlb9q33b",\n            "name": "commuter",\n            "app_id": null,\n            "value": 0.9712483\n          },\n          {\n            "id": "ai_46lGZ4Gm",\n            "name": "railroad track",\n            "app_id": null,\n            "value": 0.9690325\n          },\n          {\n            "id": "ai_tr0MBp64",\n            "name": "traffic",\n            "app_id": null,\n            "value": 0.9687052\n          },\n          {\n            "id": "ai_l4WckcJN",\n            "name": "blur",\n            "app_id": null,\n            "value": 0.9667078\n          },\n          {\n            "id": "ai_2gkfMDsM",\n            "name": "platform",\n            "app_id": null,\n            "value": 0.9624243\n          },\n          {\n            "id": "ai_CpFBRWzD",\n            "name": "urban",\n            "app_id": null,\n            "value": 0.960752\n          },\n          {\n            "id": "ai_786Zr311",\n            "name": "no person",\n            "app_id": null,\n            "value": 0.95864904\n          },\n          {\n            "id": "ai_6lhccv44",\n            "name": "business",\n            "app_id": null,\n            "value": 0.95720303\n          },\n          {\n            "id": "ai_971KsJkn",\n            "name": "track",\n            "app_id": null,\n            "value": 0.9494642\n          },\n          {\n            "id": "ai_WBQfVV0p",\n            "name": "city",\n            "app_id": null,\n            "value": 0.94089437\n          },\n          {\n            "id": "ai_dSCKh8xv",\n            "name": "fast",\n            "app_id": null,\n            "value": 0.9399334\n          },\n          {\n            "id": "ai_TZ3C79C6",\n            "name": "road",\n            "app_id": null,\n            "value": 0.93121606\n          },\n          {\n            "id": "ai_VSVscs9k",\n            "name": "terminal",\n            "app_id": null,\n            "value": 0.9230834\n          }\n        ]\n      }\n    }\n  ]\n}\n')))),(0,s.kt)("h2",{id:"via-bytes"},"Via bytes"),(0,s.kt)("p",null,"Below is an example of how you would send the bytes of an image and receive back predictions from the ",(0,s.kt)("inlineCode",{parentName:"p"},"general")," model."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nwith open("{YOUR_IMAGE_FILE_LOCATION}", "rb") as f:\n    file_bytes = f.read()\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id="{THE_MODEL_ID}",\n        version_id="{THE_MODEL_VERSION_ID}",  # This is optional. Defaults to the latest model version.\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        base64=file_bytes\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(post_model_outputs_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(post_model_outputs_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(post_model_outputs_response.outputs[0].status.details))\n    raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here.\noutput = post_model_outputs_response.outputs[0]\n\nprint("Predicted concepts:")\nfor concept in output.data.concepts:\n    print("%s %.2f" % (concept.name, concept.value))\n'))),(0,s.kt)(r.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\n//\n// For this example, the bytes of an image are needed and can be read in\n// using PHP provided functions.\n//\n$image = \"https://samples.clarifai.com/dog2.jpeg\";\n$imageData = file_get_contents($image); // Get the image data from the URL\n\n///////////////////////////////////////////////////////////////////////////////\n// Specifying the Request Data\n///////////////////////////////////////////////////////////////////////////////\n//\n// In the Clarifai platform an image is defined by a special Image object.\n// There are several ways in which an Image object can be populated including\n// by url and image bytes (base64).\n//\n$image = new Image([\n    'base64' => $imageData\n]);\n\n//\n// After an Image object is created, a Data object is constructed around it.\n// The Data object offers a container that contains additional image independent\n// metadata.  In this particular use case, no other metadata is needed to be\n// specified.\n//\n$data = new Data([\n    'image' => $image\n]);\n\n//\n// The Data object is then wrapped in an Input object in order to meet the\n// API specification.  Additional fields are available to populate in the Input\n// object, but for the purposes of this example we can send in just the\n// Data object.\n//\n$input = new Input([\n    'data' => $data\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Creating the request object \n///////////////////////////////////////////////////////////////////////////////\n//\n// Finally, the request object itself is created.  This object carries the request\n// along with the request status and other metadata related to the request itself.\n// In this example we populate:\n//    - the `user_app_id` field with the UserAppIDSet constructed above\n//    - the `model_id` field with the ID of the model we are referencing\n//    - the `inputs` field with an array of input objects constructed above \n//\n$request = new PostModelOutputsRequest([\n    'user_app_id' => $userDataObject, // This is defined above\n    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.\n    'inputs' => [$input]\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Making the RPC call\n///////////////////////////////////////////////////////////////////////////////\n//\n// Once the request object is constructed, we can call the actual request to the\n// Clarifai platform.  This uses the opened gRPC client channel to communicate the\n// request and then wait for the response.\n//\n[$response, $status] = $client->PostModelOutputs(\n    $request,\n    $metadata\n)->wait();\n\n///////////////////////////////////////////////////////////////////////////////\n// Handling the Response\n///////////////////////////////////////////////////////////////////////////////\n//\n// The response is returned and the first thing we do is check the status of it.\n// A successful response will have a status code of 0, otherwise there is some \n// reported error.\n//\nif ($status->code !== 0) throw new Exception(\"Error: {$status->details}\");\n\n//\n// In addition to the RPC response status, there is a Clarifai API status that\n// reports if the operationo was a success or failure (not just that the commuunication)\n// was successful.\n//\nif ($response->getStatus()->getCode() != StatusCode::SUCCESS) {\n    throw new Exception(\"Failure response: \" . $response->getStatus()->getDescription() . \" \" .\n        $response->getStatus()->getDetails());\n}\n\n//\n// The output of a successful call can be used in many ways.  In this example,\n// we loop through all of the predicted concepts and print them out along with\n// their numerical prediction value (confidence).\n//\necho \"Predicted concepts:\\n\";\nforeach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {\n    echo $concept->getName() . \": \" . number_format($concept->getValue(), 2) . \"\\n\";\n}\n?>\n"))),(0,s.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\nimport com.google.protobuf.ByteString;\nimport java.io.File;\nimport java.nio.file.Files;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(\n    PostModelOutputsRequest.newBuilder()\n        .setModelId("{THE_MODEL_ID}")\n        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.\n        .addInputs(\n            Input.newBuilder().setData(\n                Data.newBuilder().setImage(\n                    Image.newBuilder()\n                        .setBase64(ByteString.copyFrom(Files.readAllBytes(\n                            new File("{YOUR_IMAGE_FILE_LOCATION}").toPath()\n                        )))\n                )\n            )\n        )\n        .build()\n);\n\nif (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());\n}\n\n// Since we have one input, one output will exist here.\nOutput output = postModelOutputsResponse.getOutputs(0);\n\nSystem.out.println("Predicted concepts:");\nfor (Concept concept : output.getData().getConceptsList()) {\n    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());\n}\n'))),(0,s.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nconst fs = require("fs");\nconst imageBytes = fs.readFileSync("{YOUR_IMAGE_FILE_LOCATION}");\n\nstub.PostModelOutputs(\n    {\n        model_id: "{THE_MODEL_ID}",\n        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.\n        inputs: [\n            {data: {image: {base64: imageBytes}}}\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post model outputs failed, status: " + response.status.description);\n        }\n\n        // Since we have one input, one output will exist here.\n        const output = response.outputs[0];\n\n        console.log("Predicted concepts:");\n        for (const concept of output.data.concepts) {\n            console.log(concept.name + " " + concept.value);\n        }\n    }\n);\n'))),(0,s.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'// Smaller files (195 KB or less)\n\ncurl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "inputs": [\n      {\n        "data": {\n          "image": {\n            "base64": "\'"$(base64 /home/user/image.jpeg)"\'"\n          }\n        }\n      }\n    ]\n  }\'\\\n  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/outputs\n\n// Larger Files (Greater than 195 KB)\n\ncurl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d @- https://api.clarifai.com/v2/models/{model-id}/outputs << FILEIN\n  {\n    "inputs": [\n      {\n        "data": {\n          "image": {\n            "base64": "$(base64 /home/user/image.png)"\n          }\n        }\n      }\n    ]\n  }\nFILEIN\n'))),(0,s.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "image": {\n          "base64": "{BYTES_STRING}"\n        }\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\n// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only\n// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs\n// this will default to the latest version_id\n\nfetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"response_json",label:"Response JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "status": {\n    "code": 10000,\n    "description": "Ok"\n  },\n  "outputs": [\n    {\n      "id": "e1cf385843b94c6791bbd9f2654db5c0",\n      "status": {\n        "code": 10000,\n        "description": "Ok"\n      },\n      "created_at": "2016-11-22T16:59:23Z",\n      "model": {\n        "name": "general-v1.3",\n        "id": "aaa03c23b3724a16a56b629203edc62c",\n        "created_at": "2016-03-09T17:11:39Z",\n        "app_id": null,\n        "output_info": {\n          "message": "Show output_info with: GET /models/{model_id}/output_info",\n          "type": "concept"\n        },\n        "model_version": {\n          "id": "aa9ca48295b37401f8af92ad1af0d91d",\n          "created_at": "2016-07-13T01:19:12Z",\n          "status": {\n            "code": 21100,\n            "description": "Model trained successfully"\n          }\n        }\n      },\n      "input": {\n        "id": "e1cf385843b94c6791bbd9f2654db5c0",\n        "data": {\n          "image": {\n            "url": "https://s3.amazonaws.com/clarifai-api/img/prod/b749af061d564b829fb816215f6dc832/e11c81745d6d42a78ef712236023df1c.jpeg"\n          }\n        }\n      },\n      "data": {\n        "concepts": [\n          {\n            "id": "ai_l4WckcJN",\n            "name": "blur",\n            "app_id": null,\n            "value": 0.9973569\n          },\n          {\n            "id": "ai_786Zr311",\n            "name": "no person",\n            "app_id": null,\n            "value": 0.98865616\n          },\n          {\n            "id": "ai_JBPqff8z",\n            "name": "art",\n            "app_id": null,\n            "value": 0.986006\n          },\n          {\n            "id": "ai_5rD7vW4j",\n            "name": "wallpaper",\n            "app_id": null,\n            "value": 0.9722556\n          },\n          {\n            "id": "ai_sTjX6dqC",\n            "name": "abstract",\n            "app_id": null,\n            "value": 0.96476805\n          },\n          {\n            "id": "ai_Dm5GLXnB",\n            "name": "illustration",\n            "app_id": null,\n            "value": 0.922542\n          },\n          {\n            "id": "ai_5xjvC0Tj",\n            "name": "background",\n            "app_id": null,\n            "value": 0.8775655\n          },\n          {\n            "id": "ai_tBcWlsCp",\n            "name": "nature",\n            "app_id": null,\n            "value": 0.87474406\n          },\n          {\n            "id": "ai_rJGvwlP0",\n            "name": "insubstantial",\n            "app_id": null,\n            "value": 0.8196385\n          },\n          {\n            "id": "ai_2Bh4VMrb",\n            "name": "artistic",\n            "app_id": null,\n            "value": 0.8142488\n          },\n          {\n            "id": "ai_mKzmkKDG",\n            "name": "Christmas",\n            "app_id": null,\n            "value": 0.7996079\n          },\n          {\n            "id": "ai_RQccV41p",\n            "name": "woman",\n            "app_id": null,\n            "value": 0.7955615\n          },\n          {\n            "id": "ai_20SCBBZ0",\n            "name": "vector",\n            "app_id": null,\n            "value": 0.7775099\n          },\n          {\n            "id": "ai_4sJLn6nX",\n            "name": "dark",\n            "app_id": null,\n            "value": 0.7715479\n          },\n          {\n            "id": "ai_5Kp5FMJw",\n            "name": "still life",\n            "app_id": null,\n            "value": 0.7657637\n          },\n          {\n            "id": "ai_LM64MDHs",\n            "name": "shining",\n            "app_id": null,\n            "value": 0.7542407\n          },\n          {\n            "id": "ai_swtdphX8",\n            "name": "love",\n            "app_id": null,\n            "value": 0.74926054\n          },\n          {\n            "id": "ai_h45ZTxZl",\n            "name": "square",\n            "app_id": null,\n            "value": 0.7449074\n          },\n          {\n            "id": "ai_cMfj16kJ",\n            "name": "design",\n            "app_id": null,\n            "value": 0.73926914\n          },\n          {\n            "id": "ai_LxrzLJmf",\n            "name": "bright",\n            "app_id": null,\n            "value": 0.73790145\n          }\n        ]\n      }\n    }\n  ]\n}\n')))))}_.isMDXComponent=!0}}]);