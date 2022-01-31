"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9919],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(7462),a=n(7294),s=n(2389),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),p=n(6010),l="tabItem_vU9c";function c(e){var t,n,s,i=e.lazy,c=e.block,d=e.defaultValue,m=e.values,h=e.groupId,f=e.className,_=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:_.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=_.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=_[0])?void 0:s.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var O=r(),w=O.tabGroupChoices,T=O.setTabGroupChoices,E=(0,a.useState)(g),y=E[0],x=E[1],D=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var k=w[h];null!=k&&k!==y&&v.some((function(e){return e.value===k}))&&x(k)}var S=function(e){var t=e.currentTarget,n=D.indexOf(t),o=v[n].value;o!==y&&(I(t),x(o),null!=h&&T(h,o))},M=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=D.indexOf(e.currentTarget)+1;n=D[o]||D[0];break;case"ArrowLeft":var a=D.indexOf(e.currentTarget)-1;n=D[a]||D[D.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:function(e){return D.push(e)},onKeyDown:M,onFocus:S,onClick:S},s,{className:(0,p.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":y===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(_.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function d(e){var t=(0,s.Z)();return a.createElement(c,(0,o.Z)({key:String(t)},e))}},9833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var o=n(7462),a=n(3366),s=(n(7294),n(3905)),i=n(6396),r=n(8215),u=["components"],p={description:"Make predictions on passages of text",sidebar_position:3},l="Text",c={unversionedId:"api-guide/predict/text",id:"api-guide/predict/text",title:"Text",description:"Make predictions on passages of text",source:"@site/docs/api-guide/predict/text.md",sourceDirName:"api-guide/predict",slug:"/api-guide/predict/text",permalink:"/docs-new/api-guide/predict/text",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/predict/text.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Make predictions on passages of text",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Video",permalink:"/docs-new/api-guide/predict/video"},next:{title:"Prediction Parameters",permalink:"/docs-new/api-guide/predict/prediction-parameters"}},d=[{value:"Make text predictions via URL",id:"make-text-predictions-via-url",children:[],level:3},{value:"Make text predictions on local text files",id:"make-text-predictions-on-local-text-files",children:[],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,u);return(0,s.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"text"},"Text"),(0,s.kt)("h3",{id:"make-text-predictions-via-url"},"Make text predictions via URL"),(0,s.kt)("p",null,"You can make predictions on passages of text hosted on the web"),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id="{THE_MODEL_ID}",\n        version_id="{THE_MODEL_VERSION_ID}",  # This is optional. Defaults to the latest model version.\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(\n                        base64=file_bytes\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(post_model_outputs_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(post_model_outputs_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(respopost_model_outputs_responsense.outputs[0].status.details))\n    raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here.\noutput = post_model_outputs_response.outputs[0]\n\nprint("Predicted concepts:")\nfor concept in output.data.concepts:\n    print("%s %.2f" % (concept.name, concept.value))\n'))),(0,s.kt)(r.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\n///////////////////////////////////////////////////////////////////////////////\n// Specifying the Request Data\n///////////////////////////////////////////////////////////////////////////////\n//\n// In the Clarifai platform a text is defined by a special Text object.\n// There are several ways in which a Text object can be populated including\n// by url and raw string.\n//\n$text = new Text([\n    'url' => 'https://samples.clarifai.com/negative_sentence_12.txt'\n]);\n\n//\n// After an Text object is created, a Data object is constructed around it.\n// The Data object offers a container that contains additional text independent\n// metadata.  In this particular use case, no other metadata is needed to be\n// specified.\n//\n$data = new Data([\n    'text' => $text\n]);\n\n//\n// The Data object is then wrapped in an Input object in order to meet the\n// API specification.  Additional fields are available to populate in the Input\n// object, but for the purposes of this example we can send in just the\n// Data object.\n//\n$input = new Input([\n    'data' => $data\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Creating the request object \n///////////////////////////////////////////////////////////////////////////////\n//\n// Finally, the request object itself is created.  This object carries the request\n// along with the request status and other metadata related to the request itself.\n// In this example we populate:\n//    - the `user_app_id` field with the UserAppIDSet constructed above\n//    - the `model_id` field with the ID of the model we are referencing\n//    - the `inputs` field with an array of input objects constructed above \n//\n$request = new PostModelOutputsRequest([\n    'user_app_id' => $userDataObject, // This is defined above\n    'model_id' => 'aaa03c23b3724a16a56b629203edc62c',  // This is the ID of the publicly available General model.\n    'inputs' => [$input]\n]);\n\n///////////////////////////////////////////////////////////////////////////////\n// Making the RPC call\n///////////////////////////////////////////////////////////////////////////////\n//\n// Once the request object is constructed, we can call the actual request to the\n// Clarifai platform.  This uses the opened gRPC client channel to communicate the\n// request and then wait for the response.\n//\n[$response, $status] = $client->PostModelOutputs(\n    $request,\n    $metadata\n)->wait();\n\n///////////////////////////////////////////////////////////////////////////////\n// Handling the Response\n///////////////////////////////////////////////////////////////////////////////\n//\n// The response is returned and the first thing we do is check the status of it.\n// A successful response will have a status code of 0, otherwise there is some \n// reported error.\n//\nif ($status->code !== 0) throw new Exception(\"Error: {$status->details}\");\n\n//\n// In addition to the RPC response status, there is a Clarifai API status that\n// reports if the operationo was a success or failure (not just that the commuunication)\n// was successful.\n//\nif ($response->getStatus()->getCode() != StatusCode::SUCCESS) {\n    throw new Exception(\"Failure response: \" . $response->getStatus()->getDescription() . \" \" .\n        $response->getStatus()->getDetails());\n}\n\n//\n// The output of a successful call can be used in many ways.  In this example,\n// we loop through all of the predicted concepts and print them out along with\n// their numerical prediction value (confidence).\n//\necho \"Predicted concepts:\\n\";\nforeach ($response->getOutputs()[0]->getData()->getConcepts() as $concept) {\n    echo $concept->getName() . \": \" . number_format($concept->getValue(), 2) . \"\\n\";\n}\n?>\n"))),(0,s.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(\n    PostModelOutputsRequest.newBuilder()\n        .setModelId("{THE_MODEL_ID}")\n        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.\n        .addInputs(\n            Input.newBuilder().setData(\n                Data.newBuilder().setText(\n                    Text.newBuilder().setUrl("https://samples.clarifai.com/negative_sentence_12.txt")\n                )\n            )\n        )\n        .build()\n);\n\nif (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());\n}\n\n// Since we have one input, one output will exist here.\nOutput output = postModelOutputsResponse.getOutputs(0);\n\nSystem.out.println("Predicted concepts:");\nfor (Concept concept : output.getData().getConceptsList()) {\n    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());\n}\n'))),(0,s.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostModelOutputs(\n    {\n        model_id: "{THE_MODEL_ID}",\n        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.\n        inputs: [\n            {data: {text: {url: "https://samples.clarifai.com/negative_sentence_12.txt"}}}\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post model outputs failed, status: " + response.status.description);\n        }\n\n        // Since we have one input, one output will exist here.\n        const output = response.outputs[0];\n\n        console.log("Predicted concepts:");\n        for (const concept of output.data.concepts) {\n            console.log(concept.name + " " + concept.value);\n        }\n    }\n);\n'))),(0,s.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST\n    -H \'Authorization: Key YOUR_API_KEY\'\n    -H "Content-Type: application/json"\n    -d \'\n    {\n      "inputs": [\n        {\n          "data": {\n            "text": {\n              "url": "https://samples.clarifai.com/negative_sentence_12.txt"\n            }\n          }\n        }\n      ]\n    }\'\n    https://api.clarifai.com/v2/models/{THE_MODEL_ID}/versions/{THE_MODEL_VERSION_ID}/outputs\n'))),(0,s.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "text": {\n          "url": "https://samples.clarifai.com/negative_sentence_12.txt"\n        }\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\n// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only\n// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs\n// this will default to the latest version_id\n\nfetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)("h2",{id:"make-text-predictions-on-local-text-files"},"Make text predictions on local text files"),(0,s.kt)("p",null,"Make predictions based on local text files."),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nwith open("{YOUR_IMAGE_FILE_LOCATION}", "rb") as f:\n    file_bytes = f.read()\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id="{THE_MODEL_ID}",\n        version_id="{THE_MODEL_VERSION_ID}",  # This is optional. Defaults to the latest model version.\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(\n                        raw="Butchart Gardens contains over 900 varieties of plants."\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(post_model_outputs_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(post_model_outputs_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(respopost_model_outputs_responsense.outputs[0].status.details))\n    raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here.\noutput = post_model_outputs_response.outputs[0]\n\nprint("Predicted concepts:")\nfor concept in output.data.concepts:\n    print("%s %.2f" % (concept.name, concept.value))\n'))),(0,s.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\nimport com.google.protobuf.ByteString;\nimport java.io.File;\nimport java.nio.file.Files;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiOutputResponse postModelOutputsResponse = stub.postModelOutputs(\n    PostModelOutputsRequest.newBuilder()\n        .setModelId("{THE_MODEL_ID}")\n        .setVersionId("{THE_MODEL_VERSION_ID")  // This is optional. Defaults to the latest model version.\n        .addInputs(\n            Input.newBuilder().setData(\n                Data.newBuilder().setText(\n                    Text.newBuilder()\n                        .setRaw(ByteString.copyFrom(Files.readAllBytes(\n                            new File("{YOUR_IMAGE_FILE_LOCATION}").toPath()\n                        )))\n                )\n            )\n        )\n        .build()\n);\n\nif (postModelOutputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post model outputs failed, status: " + postModelOutputsResponse.getStatus());\n}\n\n// Since we have one input, one output will exist here.\nOutput output = postModelOutputsResponse.getOutputs(0);\n\nSystem.out.println("Predicted concepts:");\nfor (Concept concept : output.getData().getConceptsList()) {\n    System.out.printf("%s %.2f%n", concept.getName(), concept.getValue());\n}\n'))),(0,s.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nconst fs = require("fs");\nconst imageBytes = fs.readFileSync("{YOUR_IMAGE_FILE_LOCATION}");\n\nstub.PostModelOutputs(\n    {\n        model_id: "{THE_MODEL_ID}",\n        version_id: "{THE_MODEL_VERSION_ID}",  // This is optional. Defaults to the latest model version.\n        inputs: [\n            {data: {text: {raw: textFile}}}\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post model outputs failed, status: " + response.status.description);\n        }\n\n        // Since we have one input, one output will exist here.\n        const output = response.outputs[0];\n\n        console.log("Predicted concepts:");\n        for (const concept of output.data.concepts) {\n            console.log(concept.name + " " + concept.value);\n        }\n    }\n);\n'))),(0,s.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'// Smaller files (195 KB or less)\n\ncurl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "inputs": [\n      {\n        "data": {\n          "text": {\n            "raw": "\'"$(raw /home/user/image.jpeg)"\'"\n          }\n        }\n      }\n    ]\n  }\'\\\n  https://api.clarifai.com/v2/models/{THE_MODEL_ID}/outputs\n'))),(0,s.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "text": {\n          "raw": "{YOUR_RAW_TEXT}"\n        }\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\n// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only\n// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs\n// this will default to the latest version_id\n\nfetch("https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/versions/{MODEL_VERSION_ID}/outputs", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))))}h.isMDXComponent=!0}}]);