"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1603],{8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(7462),a=t(7294),i=t(2389),r=t(9443);var s=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3616),d=t(6010),c="tabItem_vU9c";function u(e){var n,t,i,r=e.lazy,u=e.block,p=e.defaultValue,f=e.values,m=e.groupId,w=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.lx)(k,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=h[0])?void 0:i.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=s(),b=_.tabGroupChoices,N=_.setTabGroupChoices,I=(0,a.useState)(g),D=I[0],x=I[1],E=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=b[m];null!=T&&T!==D&&k.some((function(e){return e.value===T}))&&x(T)}var R=function(e){var n=e.currentTarget,t=E.indexOf(n),o=k[t].value;o!==D&&(O(n),x(o),null!=m&&N(m,o))},W=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=E.indexOf(e.currentTarget)+1;t=E[o]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;t=E[a]||E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":u},w)},k.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:D===n?0:-1,"aria-selected":D===n,key:n,ref:function(e){return E.push(e)},onKeyDown:W,onFocus:R,onClick:R},i,{className:(0,d.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":D===n})}),null!=t?t:n)}))),r?(0,a.cloneElement)(h.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==D})}))))}function p(e){var n=(0,i.Z)();return a.createElement(u,(0,o.Z)({key:String(n)},e))}},6516:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=t(6396),s=t(8215),l=t(9055),d=["components"],c={description:"Work with text in images, just like you work with encoded text.",sidebar_position:4},u="Visual Text Recognition",p={unversionedId:"api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",id:"api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",title:"Visual Text Recognition",description:"Work with text in images, just like you work with encoded text.",source:"@site/docs/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",sourceDirName:"api-guide/workflows/common-workflows",slug:"/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",permalink:"/docs/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Work with text in images, just like you work with encoded text.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom KNN Face Classifier Workflow",permalink:"/docs/api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough"},next:{title:"Search, Sort, Filter, and Save",permalink:"/docs/api-guide/search/"}},f=[{value:"How VTR Works",id:"how-vtr-works",children:[],level:2},{value:"Building a VTR Workflow",id:"building-a-vtr-workflow",children:[],level:2}],m={toc:f};function w(e){var n=e.components,c=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"visual-text-recognition"},"Visual Text Recognition"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Work with text in images, just like you work with encoded text")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Visual text recognition helps you convert printed text in images and videos into machine-encoded text. You can input a scanned document, a photo of a document, a scene-photo ","(","such as the text on signs and billboards",")",", or text superimposed on an image ","(","such as in a meme",")",", and output the words and individual characters present in the images."),(0,i.kt)("p",null,'VTR lets you "digitize" text so that it can be edited, searched, stored, displayed and analyzed.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(8025).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The current version of our VTR model is not designed for use with handwritten text or documents with tightly-packed text\u2014like you might see on the page of a novel, for example."))),(0,i.kt)("h2",{id:"how-vtr-works"},"How VTR Works"),(0,i.kt)("p",null,"VTR works by first detecting the location of text in your photos or video frames, then cropping the region where the text is present, and then finally running a specialized classification model that will extract text from the cropped image. To accomplish these different tasks, you will need to configure a workflow. "),(0,i.kt)("p",null,"You will then add these three models to your workflow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Text Detection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1.0 Cropper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Text Recognition"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The initialization code used in the following example is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../../api-overview/api-clients#client-installation-instructions"},"client installation page.")))),(0,i.kt)("h2",{id:"building-a-vtr-workflow"},"Building a VTR Workflow"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, and the details of the \n# VTR Workflow we want to build. Change these strings to run your own example.\n##################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to build your own VTR Workflow\nWORKFLOW_ID = 'visual-text-recognition-id'\n\nWORKFLOWNODE_ID_1 = 'detect-concept'\nMODEL_ID_1 = '2419e2eae04d04f820e5cf3aba42d0c7'\nMODEL_VERSION_ID_1 = '75a5b92a0dec436a891b5ad224ac9170'\n\nWORKFLOWNODE_ID_2 = 'image-crop'\nMODEL_ID_2 = 'ce3f5832af7a4e56ae310d696cbbefd8'\nMODEL_VERSION_ID_2 = 'a78efb13f7774433aa2fd4864f41f0e6'\n\nWORKFLOWNODE_ID_3 = 'image-to-text'\nMODEL_ID_3 = '9fe78b4150a52794f86f237770141b33'\nMODEL_VERSION_ID_3 = 'd94413e582f341f68884cac72dbd2c7b'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\npost_workflows_response = stub.PostWorkflows(\n    service_pb2.PostWorkflowsRequest(\n        user_app_id=userDataObject,  \n        workflows=[\n            resources_pb2.Workflow(\n                id=WORKFLOW_ID,\n                nodes=[\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_1,\n                        model=resources_pb2.Model(\n                            id=MODEL_ID_1,\n                            model_version=resources_pb2.ModelVersion(\n                                id=MODEL_VERSION_ID_1\n                            )\n                        )\n                    ),\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_2,\n                        model=resources_pb2.Model(\n                            id=MODEL_ID_2,\n                            model_version=resources_pb2.ModelVersion(\n                                id=MODEL_VERSION_ID_2\n                                )\n                            ),\n                            node_inputs=[\n                                resources_pb2.NodeInput(node_id=WORKFLOWNODE_ID_1)\n                            ]\n                        ),\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_3,\n                        model=resources_pb2.Model(\n                            id=MODEL_ID_3,\n                            model_version=resources_pb2.ModelVersion(\n                                id=MODEL_VERSION_ID_3\n                                )\n                            ),\n                            node_inputs=[\n                                resources_pb2.NodeInput(node_id=WORKFLOWNODE_ID_2)\n                            ]\n                        ),\n                ]\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_workflows_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception(\"Post workflows failed, status: \" + post_workflows_response.status.description)\n")),(0,i.kt)(s.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiWorkflowResponse postWorkflowsResponse = stub.postWorkflows(\n  PostWorkflowsRequest.newBuilder()\n      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))\n      .addWorkflows(\n          Workflow.newBuilder()\n              .setId("visual-text-recognition-id")\n              .addNodes(\n                  WorkflowNode.newBuilder()\n                      .setId("detect-concept")\n                      .setModel(\n                          Model.newBuilder()\n                              .setId("2419e2eae04d04f820e5cf3aba42d0c7")\n                              .setModelVersion(\n                                  ModelVersion.newBuilder()\n                                      .setId("75a5b92a0dec436a891b5ad224ac9170")\n                              )\n                      )\n              )\n              .addNodes(\n                  WorkflowNode.newBuilder()\n                      .setId("image-crop")\n                      .setModel(\n                          Model.newBuilder()\n                              .setId("ce3f5832af7a4e56ae310d696cbbefd8")\n                              .setModelVersion(\n                                  ModelVersion.newBuilder()\n                                      .setId("a78efb13f7774433aa2fd4864f41f0e6")\n                              )\n                      )\n                      .addNodeInputs(NodeInput.newBuilder().setNodeId("detect-concept"))\n              )\n              .addNodes(\n                  WorkflowNode.newBuilder()\n                      .setId("image-to-text")\n                      .setModel(\n                          Model.newBuilder()\n                              .setId("9fe78b4150a52794f86f237770141b33")\n                              .setModelVersion(\n                                  ModelVersion.newBuilder()\n                                      .setId("d94413e582f341f68884cac72dbd2c7b")\n                              )\n                      )\n                      .addNodeInputs(NodeInput.newBuilder().setNodeId("image-crop"))\n              )\n      )\n      .build()\n);\n\nif (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());\n}\n'))),(0,i.kt)(s.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostWorkflows(\n    {\n        user_app_id: {\n            app_id: "e83440590d104cee97ef84af1856837d"\n        },\n        workflows: [\n            {\n                id: "visual-text-recognition-id",\n                nodes: [\n                    {\n                        id: "detect-concept",\n                        model: {\n                            id: "2419e2eae04d04f820e5cf3aba42d0c7",\n                            model_version: {\n                                id: "75a5b92a0dec436a891b5ad224ac9170"\n                            }\n                        }\n                    },\n                    {\n                        id: "image-crop",\n                        model: {\n                            id: "ce3f5832af7a4e56ae310d696cbbefd8",\n                            model_version: {\n                                id: "a78efb13f7774433aa2fd4864f41f0e6"\n                            }\n                        },\n                        node_inputs: [\n                            {node_id: "detect-concept"}\n                        ]\n                    },\n                    {\n                        id: "image-to-text",\n                        model: {\n                            id: "9fe78b4150a52794f86f237770141b33",\n                            model_version: {\n                                id: "d94413e582f341f68884cac72dbd2c7b"\n                            }\n                        },\n                        node_inputs: [\n                            {node_id: "image-crop"}\n                        ]\n                    },\n                ]\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            console.log(response.status);\n            throw new Error("Post workflows failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'https://api.clarifai.com/v2/users/me/apps/{{app}}/workflows\' \\\n    -H \'Authorization: Key {{PAT}}\' \\\n    -H \'Content-Type: application/json\' \\\n    --data-raw \'{\n        "workflows": [\n            {\n                "id": "visual-text-recognition-id",\n                "nodes": [\n                    {\n                        "id": "detect-concept",\n                        "model": {\n                            "id": "2419e2eae04d04f820e5cf3aba42d0c7",\n                            "model_version": {\n                                "id": "75a5b92a0dec436a891b5ad224ac9170"\n                            }\n                        }\n                    },\n                    {\n                        "id": "image-crop",\n                        "model": {\n                            "id": "ce3f5832af7a4e56ae310d696cbbefd8",\n                            "model_version": {\n                                "id": "a78efb13f7774433aa2fd4864f41f0e6"\n                            }\n                        },\n                        "node_inputs": [\n                            {\n                                "node_id": "general-concept"\n                            }\n                        ]\n                    },\n                    {\n                        "id": "image-to-text",\n                        "model": {\n                            "id": "9fe78b4150a52794f86f237770141b33",\n                            "model_version": {\n                                "id": "d94413e582f341f68884cac72dbd2c7b"\n                            }\n                        },\n                        "node_inputs": [\n                            {\n                                "node_id": "image-crop"\n                            }\n                        ]\n                    },\n                ]\n            }\n        ]\n    }\'\n')))))}w.isMDXComponent=!0},8025:function(e,n,t){n.Z=t.p+"assets/images/vtr-7d53fc1ef292e02c58f04d0f9bed3df1.jpg"}}]);