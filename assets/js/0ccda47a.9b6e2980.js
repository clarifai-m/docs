"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9919],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:s},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),s=t(7294),i=t(2389),o=t(9443);var r=function(){var e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=t(3616),u=t(6010),l="tabItem_vU9c";function c(e){var n,t,i,o=e.lazy,c=e.block,d=e.defaultValue,m=e.values,_=e.groupId,h=e.className,f=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,p.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=r(),T=E.tabGroupChoices,O=E.setTabGroupChoices,I=(0,s.useState)(g),w=I[0],D=I[1],x=[],y=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=_){var k=T[_];null!=k&&k!==w&&v.some((function(e){return e.value===k}))&&D(k)}var R=function(e){var n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==w&&(y(n),D(a),null!=_&&O(_,a))},N=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var s=x.indexOf(e.currentTarget)-1;t=x[s]||x[x.length-1]}null==(n=t)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},h)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:R,onClick:R},i,{className:(0,u.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,s.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,i.Z)();return s.createElement(c,(0,a.Z)({key:String(n)},e))}},5239:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var a=t(7462),s=t(3366),i=(t(7294),t(3905)),o=t(6396),r=t(8215),p=t(9055),u=["components"],l={description:"Make predictions on passages of text",sidebar_position:3},c="Text",d={unversionedId:"api-guide/predict/text",id:"api-guide/predict/text",title:"Text",description:"Make predictions on passages of text",source:"@site/docs/api-guide/predict/text.md",sourceDirName:"api-guide/predict",slug:"/api-guide/predict/text",permalink:"/api-guide/predict/text",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/predict/text.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Make predictions on passages of text",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Video",permalink:"/api-guide/predict/video"},next:{title:"Prediction Parameters",permalink:"/api-guide/predict/prediction-parameters"}},m=[{value:"Via URL",id:"via-url",children:[],level:2},{value:"Via Local Files",id:"via-local-files",children:[],level:2},{value:"Via Raw Text",id:"via-raw-text",children:[],level:2}],_={toc:m};function h(e){var n=e.components,t=(0,s.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text"},"Text"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make predictions on text inputs")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To get predictions for an input, you need to supply the text and the model you'd like to get predictions from. You can supply the text via a publicly accessible URL, a local text file, or in the raw format. "),(0,i.kt)("p",null,"You specify the model you'd like to use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"{model-id}")," parameter."),(0,i.kt)("h2",{id:"via-url"},"Via URL"),(0,i.kt)("p",null,"Below is an example of how you would make predictions on passages of text hosted on the web from the ",(0,i.kt)("inlineCode",{parentName:"p"},"product-review-sentiment-multi")," model. "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(p.Z,{className:"language-python",mdxType:"CodeBlock"},"#######################################################################################\n# In this section, we set the user authentication, app and model IDs, and the URL of \n# the text we want as an input. Change these strings to run your own example.\n#######################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\n# Change this to whatever raw text you want to process\nTEXT_FILE_URL = 'YOUR_TEXT_FILE_HERE'\n# This is optional. You can specify a model version or an empty string for the default\nMODEL_VERSION_ID = ''\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(\n                        url=TEXT_FILE_URL\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(\"There was an error with your request!\")\n    print(\"\\tCode: {}\".format(post_model_outputs_response.outputs[0].status.code))\n    print(\"\\tDescription: {}\".format(post_model_outputs_response.outputs[0].status.description))\n    print(\"\\tDetails: {}\".format(respopost_model_outputs_responsense.outputs[0].status.details))\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(output)")),(0,i.kt)(r.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\n///////////////////////////////////////////////////////////////////////////////\n// Specifying the Request Data\n///////////////////////////////////////////////////////////////////////////////\n//\n// In the Clarifai platform a text is defined by a special Text object.\n// There are several ways in which a Text object can be populated including\n// by url and raw string.\n//\n$text = new Text([\n    'url' => 'https://samples.clarifai.com/negative_sentence_12.txt'\n]);\n\n//\n// After an Text object is created, a Data object is constructed around it.\n// The Data object offers a container that contains additional text independent\n// metadata.  In this particular use case, no other metadata is needed to be\n// specified.\n//\n$data = new Data([\n    'text' => $text\n]);\n\n//\n// The Data object is then wrapped in an Input object in order to meet the\n// API specification.  Additional fields are available to populate in the Input\n// object, but for the purposes of this example we can send in just the\n// Data object.\n//\n$input = new Input([\n    'data' => $data\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Creating the request object \n///////////////////////////////////////////////////////////////////////////////\n//\n// Finally, the request object itself is created.  This object carries the request\n// along with the request status and other metadata related to the request itself.\n// In this example we populate:\n//    - the `user_app_id` field with the UserAppIDSet constructed above\n//    - the `model_id` field with the ID of the model we are referencing\n//    - the `inputs` field with an array of input objects constructed above \n//\n$request = new PostModelOutputsRequest([\n    'user_app_id' => $userDataObject, // This is defined above\n    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.\n    'inputs' => [$input]\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Making the RPC call\n///////////////////////////////////////////////////////////////////////////////\n//\n// Once the request object is constructed, we can call the actual request to the\n// Clarifai platform.  This uses the opened gRPC client channel to communicate the\n// request and then wait for the response.\n//\n[$response, $status] = $client->PostModelOutputs(\n    $request,\n    $metadata\n)->wait();\n\n///////////////////////////////////////////////////////////////////////////////\n// Handling the Response\n///////////////////////////////////////////////////////////////////////////////\n//\n// The response is returned and the first thing we do is check the status of it.\n// A successful response will have a status code of 0, otherwise there is some \n// reported error.\n//\nif ($status->code !== 0) throw new Exception(\"Error: {$status->details}\");\n\n//\n// In addition to the RPC response status, there is a Clarifai API status that\n// reports if the operationo was a success or failure (not just that the commuunication)\n// was successful.\n//\nif ($response->getStatus()->getCode() != StatusCode::SUCCESS) {\n    throw new Exception(\"Failure response: \" . $response->getStatus()->getDescription() . \" \" .\n        $response->getStatus()->getDetails());\n}\n\n//\n// The output of a successful call can be used in many ways.  In this example,\n// we loop through all of the predicted concepts and print them out along with\n// their numerical prediction value (confidence).\n//\necho \"Predicted concepts:\\n\";\nforeach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {\n    echo $concept->getName() . \": \" . number_format($concept->getValue(), 2) . \"\\n\";\n}\n?>\n"))),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(\n    PostModelOutputsRequest.newBuilder()\n        .setModelId("{THE_MODEL_ID}")\n        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.\n        .addInputs(\n            Input.newBuilder().setData(\n                Data.newBuilder().setText(\n                    Text.newBuilder().setUrl("https://samples.clarifai.com/negative_sentence_12.txt")\n                )\n            )\n        )\n        .build()\n);\n\nif (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());\n}\n\n// Since we have one input, one output will exist here.\nOutput output = postModelOutputsResponse.getOutputs(0);\n\nSystem.out.println("Predicted concepts:");\nfor (Concept concept : output.getData().getConceptsList()) {\n    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());\n}\n'))),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostModelOutputs(\n    {\n        model_id: "{THE_MODEL_ID}",\n        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.\n        inputs: [\n            {data: {text: {url: "https://samples.clarifai.com/negative_sentence_12.txt"}}}\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post model outputs failed, status: " + response.status.description);\n        }\n\n        // Since we have one input, one output will exist here.\n        const output = response.outputs[0];\n\n        console.log("Predicted concepts:");\n        for (const concept of output.data.concepts) {\n            console.log(concept.name + " " + concept.value);\n        }\n    }\n);\n'))),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST\n    -H \'Authorization: Key YOUR_API_KEY\'\n    -H "Content-Type: application/json"\n    -d \'\n    {\n      "inputs": [\n        {\n          "data": {\n            "text": {\n              "url": "https://samples.clarifai.com/negative_sentence_12.txt"\n            }\n          }\n        }\n      ]\n    }\'\n    https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs\n'))),(0,i.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "text": {\n          "url": "https://samples.clarifai.com/negative_sentence_12.txt"\n        }\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\n// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only\n// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs\n// this will default to the latest version_id\n\nfetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Predicted concepts:\n5 stars 0.87\n4 stars 0.12\n3 stars 0.01\n1 star 0.00\n2 stars 0.00\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'Predicted concepts:\nid: "6575509feeb34e7ab881918a5a8a6e72"\nstatus {\n  code: SUCCESS\n  description: "Ok"\n}\ncreated_at {\n  seconds: 1643377570\n  nanos: 986312649\n}\nmodel {\n  id: "91ff804429654ce25e93e710beea82ea"\n  name: "product-review-sentiment-multi"\n  created_at {\n    seconds: 1617956285\n    nanos: 315594000\n  }\n  app_id: "main"\n  output_info {\n    output_config {\n    }\n    message: "Show output_info with: GET /models/{model_id}/output_info"\n    fields_map {\n      fields {\n        key: "concepts"\n        value {\n          string_value: "softmax"\n        }\n      }\n    }\n  }\n  model_version {\n    id: "79fa197706da4212a6e74afcd919d5a5"\n    created_at {\n      seconds: 1617956285\n      nanos: 327678000\n    }\n    status {\n      code: MODEL_TRAINED\n      description: "Model is trained and ready"\n    }\n    visibility {\n      gettable: PRIVATE\n    }\n    app_id: "main"\n    user_id: "clarifai"\n    metadata {\n    }\n  }\n  user_id: "clarifai"\n  input_info {\n    fields_map {\n      fields {\n        key: "text"\n        value {\n          string_value: "text"\n        }\n      }\n    }\n  }\n  train_info {\n  }\n  model_type_id: "text-classifier"\n  visibility {\n    gettable: PRIVATE\n  }\n  metadata {\n  }\n  modified_at {\n    seconds: 1617956285\n    nanos: 315594000\n  }\n  import_info {\n  }\n}\ninput {\n  id: "732dfaee2ed74b7aa8c596081ae29db3"\n  data {\n    text {\n      url: "https://alfrickopidi.com/test.txt"\n    }\n  }\n}\ndata {\n  concepts {\n    id: "ai_372MvFLZ"\n    name: "5 stars"\n    value: 0.866517961025238\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_qbKLQz68"\n    name: "4 stars"\n    value: 0.11985281109809875\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_xhvBFMxc"\n    name: "3 stars"\n    value: 0.009703087620437145\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_1l3VDCQM"\n    name: "1 star"\n    value: 0.002005926100537181\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_dRpwfL86"\n    name: "2 stars"\n    value: 0.0019201975082978606\n    app_id: "main"\n  }\n}\n\n'))),(0,i.kt)("h2",{id:"via-local-files"},"Via Local Files"),(0,i.kt)("p",null,"Below is an example of how you would provide text inputs via local text files and receive predictions from the ",(0,i.kt)("inlineCode",{parentName:"p"},"product-review-sentiment-multi")," model. "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(p.Z,{className:"language-python",mdxType:"CodeBlock"},"#######################################################################################\n# In this section, we set the user authentication, app and model IDs, and the location\n# of the text we want as an input. Change these strings to run your own example.\n#######################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\n# Change this to whatever raw text you want to process\nTEXT_FILE_LOCATION = 'YOUR_TEXT_FILE_LOCATION'\n# This is optional. You can specify a model version or an empty string for the default\nMODEL_VERSION_ID = ''\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwith open(TEXT_FILE_LOCATION, \"rb\") as f:\n    file_bytes = f.read()\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(\n                        raw=file_bytes\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(\"There was an error with your request!\")\n    print(\"\\tCode: {}\".format(post_model_outputs_response.outputs[0].status.code))\n    print(\"\\tDescription: {}\".format(post_model_outputs_response.outputs[0].status.description))\n    print(\"\\tDetails: {}\".format(respopost_model_outputs_responsense.outputs[0].status.details))\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here.\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(output)")),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\nimport com.google.protobuf.ByteString;\nimport java.io.File;\nimport java.nio.file.Files;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(\n    PostModelOutputsRequest.newBuilder()\n        .setModelId("{THE_MODEL_ID}")\n        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.\n        .addInputs(\n            Input.newBuilder().setData(\n                Data.newBuilder().setText(\n                    Text.newBuilder()\n                        .setRaw(ByteString.copyFrom(Files.readAllBytes(\n                            new File("{YOUR_IMAGE_FILE_LOCATION}").toPath()\n                        )))\n                )\n            )\n        )\n        .build()\n);\n\nif (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());\n}\n\n// Since we have one input, one output will exist here.\nOutput output = postModelOutputsResponse.getOutputs(0);\n\nSystem.out.println("Predicted concepts:");\nfor (Concept concept : output.getData().getConceptsList()) {\n    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());\n}\n'))),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nconst fs = require("fs");\nconst imageBytes = fs.readFileSync("{YOUR_IMAGE_FILE_LOCATION}");\n\nstub.PostModelOutputs(\n    {\n        model_id: "{THE_MODEL_ID}",\n        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.\n        inputs: [\n            {data: {text: {raw: textFile}}}\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post model outputs failed, status: " + response.status.description);\n        }\n\n        // Since we have one input, one output will exist here.\n        const output = response.outputs[0];\n\n        console.log("Predicted concepts:");\n        for (const concept of output.data.concepts) {\n            console.log(concept.name + " " + concept.value);\n        }\n    }\n);\n'))),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'// Smaller files (195 KB or less)\n\ncurl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "inputs": [\n      {\n        "data": {\n          "text": {\n            "raw": "\'"$(raw /home/user/image.jpeg)"\'"\n          }\n        }\n      }\n    ]\n  }\'\\\n  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/outputs\n'))),(0,i.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "text": {\n          "raw": "{YOUR_RAW_TEXT}"\n        }\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\n// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only\n// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs\n// this will default to the latest version_id\n\nfetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Predicted concepts:\n5 stars 0.87\n4 stars 0.12\n3 stars 0.01\n1 star 0.00\n2 stars 0.00\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'Predicted concepts:\nid: "dde301bab8324380a8ee54beb29db326"\nstatus {\n  code: SUCCESS\n  description: "Ok"\n}\ncreated_at {\n  seconds: 1643372278\n  nanos: 17467714\n}\nmodel {\n  id: "91ff804429654ce25e93e710beea82ea"\n  name: "product-review-sentiment-multi"\n  created_at {\n    seconds: 1617956285\n    nanos: 315594000\n  }\n  app_id: "main"\n  output_info {\n    output_config {\n    }\n    message: "Show output_info with: GET /models/{model_id}/output_info"\n    fields_map {\n      fields {\n        key: "concepts"\n        value {\n          string_value: "softmax"\n        }\n      }\n    }\n  }\n  model_version {\n    id: "79fa197706da4212a6e74afcd919d5a5"\n    created_at {\n      seconds: 1617956285\n      nanos: 327678000\n    }\n    status {\n      code: MODEL_TRAINED\n      description: "Model is trained and ready"\n    }\n    visibility {\n      gettable: PRIVATE\n    }\n    app_id: "main"\n    user_id: "clarifai"\n    metadata {\n    }\n  }\n  user_id: "clarifai"\n  input_info {\n    fields_map {\n      fields {\n        key: "text"\n        value {\n          string_value: "text"\n        }\n      }\n    }\n  }\n  train_info {\n  }\n  model_type_id: "text-classifier"\n  visibility {\n    gettable: PRIVATE\n  }\n  metadata {\n  }\n  modified_at {\n    seconds: 1617956285\n    nanos: 315594000\n  }\n  import_info {\n  }\n}\ninput {\n  id: "9530f43d439046e6876f0646760c7071"\n  data {\n    text {\n      raw: "I love your product very much"\n      url: "https://samples.clarifai.com/placeholder.gif"\n    }\n  }\n}\ndata {\n  concepts {\n    id: "ai_372MvFLZ"\n    name: "5 stars"\n    value: 0.866517961025238\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_qbKLQz68"\n    name: "4 stars"\n    value: 0.11985281109809875\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_xhvBFMxc"\n    name: "3 stars"\n    value: 0.009703087620437145\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_1l3VDCQM"\n    name: "1 star"\n    value: 0.002005926100537181\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_dRpwfL86"\n    name: "2 stars"\n    value: 0.0019201975082978606\n    app_id: "main"\n  }\n}\n\n\n'))),(0,i.kt)("h2",{id:"via-raw-text"},"Via Raw Text"),(0,i.kt)("p",null,"Below is an example of how you would provide raw text inputs and receive predictions from the ",(0,i.kt)("inlineCode",{parentName:"p"},"product-review-sentiment-multi")," model. "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(p.Z,{className:"language-python",mdxType:"CodeBlock"},"#######################################################################################\n# In this section, we set the user authentication, app and model IDs, and the raw text\n# we want as an input. Change these strings to run your own example.\n#######################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\n# Change this to whatever raw text you want to process\nRAW_TEXT = 'I love your product very much'\n# This is optional. You can specify a model version or an empty string for the default\nMODEL_VERSION_ID = ''\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  # This is optional. Defaults to the latest model version\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(\n                        raw=RAW_TEXT\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(\"There was an error with your request!\")\n    print(\"\\tCode: {}\".format(post_model_outputs_response.outputs[0].status.code))\n    print(\"\\tDescription: {}\".format(post_model_outputs_response.outputs[0].status.description))\n    print(\"\\tDetails: {}\".format(respopost_model_outputs_responsense.outputs[0].status.details))\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(output)")),(0,i.kt)(r.Z,{value:"php",label:"PHP",mdxType:"TabItem"}),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"}),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"}),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"}),(0,i.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"})),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Predicted concepts:\n5 stars 0.87\n4 stars 0.12\n3 stars 0.01\n1 star 0.00\n2 stars 0.00\n\n"))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'Predicted concepts:\nid: "5f4db88d798e442aa6f8a006efd27ef5"\nstatus {\n  code: SUCCESS\n  description: "Ok"\n}\ncreated_at {\n  seconds: 1643367419\n  nanos: 631443555\n}\nmodel {\n  id: "91ff804429654ce25e93e710beea82ea"\n  name: "product-review-sentiment-multi"\n  created_at {\n    seconds: 1617956285\n    nanos: 315594000\n  }\n  app_id: "main"\n  output_info {\n    output_config {\n    }\n    message: "Show output_info with: GET /models/{model_id}/output_info"\n    fields_map {\n      fields {\n        key: "concepts"\n        value {\n          string_value: "softmax"\n        }\n      }\n    }\n  }\n  model_version {\n    id: "79fa197706da4212a6e74afcd919d5a5"\n    created_at {\n      seconds: 1617956285\n      nanos: 327678000\n    }\n    status {\n      code: MODEL_TRAINED\n      description: "Model is trained and ready"\n    }\n    visibility {\n      gettable: PRIVATE\n    }\n    app_id: "main"\n    user_id: "clarifai"\n    metadata {\n    }\n  }\n  user_id: "clarifai"\n  input_info {\n    fields_map {\n      fields {\n        key: "text"\n        value {\n          string_value: "text"\n        }\n      }\n    }\n  }\n  train_info {\n  }\n  model_type_id: "text-classifier"\n  visibility {\n    gettable: PRIVATE\n  }\n  metadata {\n  }\n  modified_at {\n    seconds: 1617956285\n    nanos: 315594000\n  }\n  import_info {\n  }\n}\ninput {\n  id: "ebd63f00c1a540df897427e16005631d"\n  data {\n    text {\n      raw: "I love your product very much"\n      url: "https://samples.clarifai.com/placeholder.gif"\n    }\n  }\n}\ndata {\n  concepts {\n    id: "ai_372MvFLZ"\n    name: "5 stars"\n    value: 0.866517961025238\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_qbKLQz68"\n    name: "4 stars"\n    value: 0.11985281109809875\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_xhvBFMxc"\n    name: "3 stars"\n    value: 0.009703087620437145\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_1l3VDCQM"\n    name: "1 star"\n    value: 0.002005926100537181\n    app_id: "main"\n  }\n  concepts {\n    id: "ai_dRpwfL86"\n    name: "2 stars"\n    value: 0.0019201975082978606\n    app_id: "main"\n  }\n}\n\n'))))}h.isMDXComponent=!0}}]);