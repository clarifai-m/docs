"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[267],{58215:function(n,e,t){var a=t(67294);e.Z=function(n){var e=n.children,t=n.hidden,s=n.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:s},e)}},26396:function(n,e,t){t.d(e,{Z:function(){return d}});var a=t(87462),s=t(67294),i=t(72389),r=t(79443);var o=function(){var n=(0,s.useContext)(r.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n},l=t(63616),u=t(86010),p="tabItem_vU9c";function c(n){var e,t,i,r=n.lazy,c=n.block,d=n.defaultValue,m=n.values,f=n.groupId,g=n.className,h=s.Children.map(n.children,(function(n){if((0,s.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=m?m:h.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,l.lx)(_,(function(n,e){return n.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var I=null===d?d:null!=(e=null!=d?d:null==(t=h.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(i=h[0])?void 0:i.props.value;if(null!==I&&!_.some((function(n){return n.value===I})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+_.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),w=v.tabGroupChoices,y=v.setTabGroupChoices,N=(0,s.useState)(I),k=N[0],E=N[1],T=[],U=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var A=w[f];null!=A&&A!==k&&_.some((function(n){return n.value===A}))&&E(A)}var O=function(n){var e=n.currentTarget,t=T.indexOf(e),a=_[t].value;a!==k&&(U(e),E(a),null!=f&&y(f,a))},x=function(n){var e,t=null;switch(n.key){case"ArrowRight":var a=T.indexOf(n.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var s=T.indexOf(n.currentTarget)-1;t=T[s]||T[T.length-1]}null==(e=t)||e.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},g)},_.map((function(n){var e=n.value,t=n.label,i=n.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,key:e,ref:function(n){return T.push(n)},onKeyDown:x,onFocus:O,onClick:O},i,{className:(0,u.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":k===e})}),null!=t?t:e)}))),r?(0,s.cloneElement)(h.filter((function(n){return n.props.value===k}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map((function(n,e){return(0,s.cloneElement)(n,{key:e,hidden:n.props.value!==k})}))))}function d(n){var e=(0,i.Z)();return s.createElement(c,(0,a.Z)({key:String(e)},n))}},50347:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=t(87462),s=t(63366),i=(t(67294),t(3905)),r=t(26396),o=t(58215),l=t(19055),u=["components"],p={description:"Use AI to index your images based on semantic similarity.",sidebar_position:5},c="Index Images for Search",d={unversionedId:"api-guide/search/index-images-for-search",id:"api-guide/search/index-images-for-search",title:"Index Images for Search",description:"Use AI to index your images based on semantic similarity.",source:"@site/docs/api-guide/search/index-images-for-search.md",sourceDirName:"api-guide/search",slug:"/api-guide/search/index-images-for-search",permalink:"/api-guide/search/index-images-for-search",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/search/index-images-for-search.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Use AI to index your images based on semantic similarity.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/api-guide/search/rank"},next:{title:"Legacy Search",permalink:"/api-guide/search/legacy-search/"}},m=[],f={toc:m};function g(n){var e=n.components,t=(0,s.Z)(n,u);return(0,i.kt)("wrapper",(0,a.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"index-images-for-search"},"Index Images for Search"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use AI to index your images based on semantic similarity")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"To get started with search, you must first add images to the search index. You can add one or more images to the index at a time. You can supply an image either with a publicly accessible URL or by directly sending image bytes. You can send up to 128 images in one API call."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The initialization code used in the following example is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")))),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"############################################################################\n# In this section, we set the user authentication, app ID, and images to \n# add to the index. Change these strings to run your own example.\n############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to add your own images to the search index\nIMAGE_FILE_LOCATION =  'YOUR_IMAGE_FILE_LOCATION'\nIMAGE_URL_1 = 'https://samples.clarifai.com/metro-north.jpg'\nIMAGE_URL_2 = 'https://samples.clarifai.com/wedding.jpg'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwith open(IMAGE_FILE_LOCATION, \"rb\") as f:\n    file_bytes = f.read()\n\npost_inputs_response = stub.PostInputs(\n    service_pb2.PostInputsRequest(\n        user_app_id=userDataObject,\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL_1,\n                        allow_duplicate_url=True\n                    )\n                )\n            ),\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL_2,\n                        allow_duplicate_url=True\n                    )\n                )\n            ),\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        base64=file_bytes\n                    )\n                )\n            ),\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_inputs_response.status.code != status_code_pb2.SUCCESS:\n    print(\"There was an error with your request!\")\n    for input_response in post_inputs_response.inputs:\n        print(\"Input \" + input_response.id + \" status:\")\n        print(input_response.status)\n    \n    raise Exception(\"Post inputs failed, status: \" + post_inputs_response.status.description)\n\nprint(post_inputs_response)")),(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiInputResponse postInputsResponse = stub.postInputs(\n    PostInputsRequest.newBuilder()\n        .addInputs(\n            Input.newBuilder()\n                .setData(\n                    Data.newBuilder().setImage(\n                        Image.newBuilder()\n                            .setUrl("https://samples.clarifai.com/metro-north.jpg")\n                            .setAllowDuplicateUrl(true)\n                    )\n                )\n        )\n        .addInputs(\n            Input.newBuilder()\n                .setData(\n                    Data.newBuilder().setImage(\n                        Image.newBuilder()\n                            .setUrl("https://samples.clarifai.com/wedding.jpg")\n                            .setAllowDuplicateUrl(true)\n                    )\n                )\n        )\n        .addInputs(\n            Input.newBuilder()\n                .setData(\n                    Data.newBuilder().setImage(\n                        Image.newBuilder()\n                            .setBase64(ByteString.copyFrom(Files.readAllBytes(\n                                new File("{YOUR_IMAGE_FILE_LOCATION}").toPath()\n                            )))\n                    )\n                )\n        )\n        .build()\n);\n\nif (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    for (Input input : postInputsResponse.getInputsList()) {\n        System.out.println("Input " + input.getId() + " status: ");\n        System.out.println(input.getStatus() + "\\n");\n    }\n\n    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());\n}\n'))),(0,i.kt)(o.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nconst fs = require("fs");\nconst imageBytes = fs.readFileSync("{YOUR_IMAGE_FILE_LOCATION}");\n\nstub.PostInputs(\n    {\n        inputs: [\n            {\n                data: {image: {url: "https://samples.clarifai.com/metro-north.jpg", allow_duplicate_url: true}}\n            },\n            {\n                data: {image: {url: "https://samples.clarifai.com/puppy.jpeg", allow_duplicate_url: true}}\n            },\n            {\n                data: {image: {base64: imageBytes}}\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            for (const input of response.inputs) {\n                console.log("Input " + input.id + " status: ");\n                console.log(JSON.stringify(input.status, null, 2) + "\\n");\n            }\n\n            throw new Error("Post inputs failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "inputs": [\n      {\n        "data": {\n          "image": {\n            "url": "https://samples.clarifai.com/metro-north.jpg",\n            "allow_duplicate_url": true\n          }\n        }\n      },\n      {\n        "data": {\n          "image": {\n            "url": "https://samples.clarifai.com/wedding.jpg",\n            "allow_duplicate_url": true\n          }\n        }\n      }\n    ]\n  }\'\\\n  https://api.clarifai.com/v2/inputs\n\n# Use image\'s "base64" field to upload image from your local machine.\n'))),(0,i.kt)(o.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n  "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "image": {\n          "url": "https://samples.clarifai.com/metro-north.jpg",\n          "allow_duplicate_url": true\n        }\n      }\n    },\n    {\n      "data": {\n        "image": {\n          "url": "https://samples.clarifai.com/wedding.jpg",\n          "allow_duplicate_url": true\n        }\n      }\n    }\n  ]\n});\n\n// # Use image\'s "base64" field to upload image from your local machine.\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n    body: raw\n};\n\nfetch(`https://api.clarifai.com/v2/inputs`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "6d324034e6f6944f6b4f553c0173ba94"\n}\ninputs {\n  id: "b319f06f2b2749248504e1fa8593e84e"\n  data {\n    image {\n      url: "https://samples.clarifai.com/metro-north.jpg"\n      image_info {\n        format: "UnknownImageFormat"\n        color_mode: "UnknownColorMode"\n      }\n    }\n  }\n  created_at {\n    seconds: 1649236360\n    nanos: 11398455\n  }\n  modified_at {\n    seconds: 1649236360\n    nanos: 11398455\n  }\n  status {\n    code: INPUT_DOWNLOAD_PENDING\n    description: "Download pending"\n  }\n}\ninputs {\n  id: "f787d1446583484dabb8d3173e63c057"\n  data {\n    image {\n      url: "https://samples.clarifai.com/wedding.jpg"\n      image_info {\n        format: "UnknownImageFormat"\n        color_mode: "UnknownColorMode"\n      }\n    }\n  }\n  created_at {\n    seconds: 1649236360\n    nanos: 11398455\n  }\n  modified_at {\n    seconds: 1649236360\n    nanos: 11398455\n  }\n  status {\n    code: INPUT_DOWNLOAD_PENDING\n    description: "Download pending"\n  }\n}\ninputs {\n  id: "6812891f981040bdb1de4a24c4f31c74"\n  data {\n    image {\n      url: "https://s3.amazonaws.com/clarifai-api/img3/prod/orig/e12ce254f2824b0ab2aef1b10784ff23/140c856dc82565d2c4d6ea720fceff78"\n      hosted {\n        prefix: "https://s3.amazonaws.com/clarifai-api/img3/prod"\n        suffix: "e12ce254f2824b0ab2aef1b10784ff23/140c856dc82565d2c4d6ea720fceff78"\n        sizes: "orig"\n      }\n      image_info {\n        format: "UnknownImageFormat"\n        color_mode: "UnknownColorMode"\n      }\n    }\n  }\n  created_at {\n    seconds: 1649236360\n    nanos: 11398455\n  }\n  modified_at {\n    seconds: 1649236360\n    nanos: 11398455\n  }\n  status {\n    code: INPUT_DOWNLOAD_PENDING\n    description: "Download pending"\n  }\n} \n'))))}g.isMDXComponent=!0}}]);