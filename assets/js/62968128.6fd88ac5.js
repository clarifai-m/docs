"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1603],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),f=r,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||a;return t?o.createElement(m,i(i({ref:n},u),{},{components:t})):o.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return p}});var o=t(7462),r=t(7294),a=t(2389),i=t(9443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3616),d=t(6010),u="tabItem_vU9c";function c(e){var n,t,a,i=e.lazy,c=e.block,p=e.defaultValue,f=e.values,m=e.groupId,w=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=s(),y=k.tabGroupChoices,x=k.setTabGroupChoices,_=(0,r.useState)(h),T=_[0],N=_[1],I=[],O=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=y[m];null!=P&&P!==T&&g.some((function(e){return e.value===P}))&&N(P)}var E=function(e){var n=e.currentTarget,t=I.indexOf(n),o=g[t].value;o!==T&&(O(n),N(o),null!=m&&x(m,o))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=I.indexOf(e.currentTarget)+1;t=I[o]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;t=I[r]||I[I.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":c},w)},g.map((function(e){var n=e.value,t=e.label,a=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return I.push(e)},onKeyDown:j,onFocus:E,onClick:E},a,{className:(0,d.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,a.Z)();return r.createElement(c,(0,o.Z)({key:String(n)},e))}},9994:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=t(6396),s=t(8215),l=["components"],d={description:"Work with text in images, just like you work with encoded text.",sidebar_position:4},u="Visual Text Recognition",c={unversionedId:"api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",id:"api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",title:"Visual Text Recognition",description:"Work with text in images, just like you work with encoded text.",source:"@site/docs/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",sourceDirName:"api-guide/workflows/common-workflows",slug:"/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",permalink:"/docs-new/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Work with text in images, just like you work with encoded text.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom KNN Face Classifier Workflow",permalink:"/docs-new/api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough"},next:{title:"Search, Sort, Filter and Save",permalink:"/docs-new/api-guide/search/"}},p=[{value:"How VTR works",id:"how-vtr-works",children:[],level:2},{value:"Building a VTR workflow",id:"building-a-vtr-workflow",children:[],level:2}],f={toc:p};function m(e){var n=e.components,d=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},f,d,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"visual-text-recognition"},"Visual Text Recognition"),(0,a.kt)("p",null,"Visual text recognition helps you convert printed text in images and videos into machine-encoded text. You can input a scanned document, a photo of a document, a scene-photo ","(","such as the text on signs and billboards",")",", or text superimposed on an image ","(","such as in a meme",")",' and output the words and individual characters present in the images. VTR lets you "digitize" text so that it can be edited, searched, stored, displayed and analyzed.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(8543).Z})),(0,a.kt)("p",null,"Please note: The current version of our VTR model is not designed for use with handwritten text, or documents with tightly-packed text ","(","like you might see on the page of a novel, for example",")","."),(0,a.kt)("h2",{id:"how-vtr-works"},"How VTR works"),(0,a.kt)("p",null,"VTR works by first detecting the location of text in your photos or video frames, then cropping the region where the text is present, and then finally running a specialized classification model that will extract text from the cropped image. To accomplish these different tasks, you will need to configure a workflow. You will then add these three models to your workflow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Visual Text Detection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1.0 Cropper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Visual Text Recognition"))),(0,a.kt)("h2",{id:"building-a-vtr-workflow"},"Building a VTR workflow"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\npost_workflows_response = stub.PostWorkflows(\n    service_pb2.PostWorkflowsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        workflows=[\n            resources_pb2.Workflow(\n                id="visual-text-recognition-id",\n                nodes=[\n                    resources_pb2.WorkflowNode(\n                        id="detect-concept",\n                        model=resources_pb2.Model(\n                            id="2419e2eae04d04f820e5cf3aba42d0c7",\n                            model_version=resources_pb2.ModelVersion(\n                                id="75a5b92a0dec436a891b5ad224ac9170"\n                            )\n                        )\n                    ),\n                    resources_pb2.WorkflowNode(\n                        id="image-crop",\n                        model=resources_pb2.Model(\n                            id="ce3f5832af7a4e56ae310d696cbbefd8",\n                            model_version=resources_pb2.ModelVersion(\n                                id="a78efb13f7774433aa2fd4864f41f0e6"\n                                )\n                            ),\n                            node_inputs=[\n                                resources_pb2.NodeInput(node_id="detect-concept")\n                            ]\n                        ),\n                    resources_pb2.WorkflowNode(\n                        id="image-to-text",\n                        model=resources_pb2.Model(\n                            id="9fe78b4150a52794f86f237770141b33",\n                            model_version=resources_pb2.ModelVersion(\n                                id="d94413e582f341f68884cac72dbd2c7b"\n                                )\n                            ),\n                            node_inputs=[\n                                resources_pb2.NodeInput(node_id="image-crop")\n                            ]\n                        ),\n                ]\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_workflows_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception("Post workflows failed, status: " + post_workflows_response.status.description)\n'))),(0,a.kt)(s.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiWorkflowResponse postWorkflowsResponse = stub.postWorkflows(\n  PostWorkflowsRequest.newBuilder()\n      .setUserAppId(UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}"))\n      .addWorkflows(\n          Workflow.newBuilder()\n              .setId("visual-text-recognition-id")\n              .addNodes(\n                  WorkflowNode.newBuilder()\n                      .setId("detect-concept")\n                      .setModel(\n                          Model.newBuilder()\n                              .setId("2419e2eae04d04f820e5cf3aba42d0c7")\n                              .setModelVersion(\n                                  ModelVersion.newBuilder()\n                                      .setId("75a5b92a0dec436a891b5ad224ac9170")\n                              )\n                      )\n              )\n              .addNodes(\n                  WorkflowNode.newBuilder()\n                      .setId("image-crop")\n                      .setModel(\n                          Model.newBuilder()\n                              .setId("ce3f5832af7a4e56ae310d696cbbefd8")\n                              .setModelVersion(\n                                  ModelVersion.newBuilder()\n                                      .setId("a78efb13f7774433aa2fd4864f41f0e6")\n                              )\n                      )\n                      .addNodeInputs(NodeInput.newBuilder().setNodeId("detect-concept"))\n              )\n              .addNodes(\n                  WorkflowNode.newBuilder()\n                      .setId("image-to-text")\n                      .setModel(\n                          Model.newBuilder()\n                              .setId("9fe78b4150a52794f86f237770141b33")\n                              .setModelVersion(\n                                  ModelVersion.newBuilder()\n                                      .setId("d94413e582f341f68884cac72dbd2c7b")\n                              )\n                      )\n                      .addNodeInputs(NodeInput.newBuilder().setNodeId("image-crop"))\n              )\n      )\n      .build()\n);\n\nif (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());\n}\n'))),(0,a.kt)(s.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostWorkflows(\n    {\n        user_app_id: {\n            app_id: "e83440590d104cee97ef84af1856837d"\n        },\n        workflows: [\n            {\n                id: "visual-text-recognition-id",\n                nodes: [\n                    {\n                        id: "detect-concept",\n                        model: {\n                            id: "2419e2eae04d04f820e5cf3aba42d0c7",\n                            model_version: {\n                                id: "75a5b92a0dec436a891b5ad224ac9170"\n                            }\n                        }\n                    },\n                    {\n                        id: "image-crop",\n                        model: {\n                            id: "ce3f5832af7a4e56ae310d696cbbefd8",\n                            model_version: {\n                                id: "a78efb13f7774433aa2fd4864f41f0e6"\n                            }\n                        },\n                        node_inputs: [\n                            {node_id: "detect-concept"}\n                        ]\n                    },\n                    {\n                        id: "image-to-text",\n                        model: {\n                            id: "9fe78b4150a52794f86f237770141b33",\n                            model_version: {\n                                id: "d94413e582f341f68884cac72dbd2c7b"\n                            }\n                        },\n                        node_inputs: [\n                            {node_id: "image-crop"}\n                        ]\n                    },\n                ]\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            console.log(response.status);\n            throw new Error("Post workflows failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,a.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'https://api.clarifai.com/v2/users/me/apps/{{app}}/workflows\' \\\n    -H \'Authorization: Key {{PAT}}\' \\\n    -H \'Content-Type: application/json\' \\\n    --data-raw \'{\n        "workflows": [\n            {\n                "id": "visual-text-recognition-id",\n                "nodes": [\n                    {\n                        "id": "detect-concept",\n                        "model": {\n                            "id": "2419e2eae04d04f820e5cf3aba42d0c7",\n                            "model_version": {\n                                "id": "75a5b92a0dec436a891b5ad224ac9170"\n                            }\n                        }\n                    },\n                    {\n                        "id": "image-crop",\n                        "model": {\n                            "id": "ce3f5832af7a4e56ae310d696cbbefd8",\n                            "model_version": {\n                                "id": "a78efb13f7774433aa2fd4864f41f0e6"\n                            }\n                        },\n                        "node_inputs": [\n                            {\n                                "node_id": "general-concept"\n                            }\n                        ]\n                    },\n                    {\n                        "id": "image-to-text",\n                        "model": {\n                            "id": "9fe78b4150a52794f86f237770141b33",\n                            "model_version": {\n                                "id": "d94413e582f341f68884cac72dbd2c7b"\n                            }\n                        },\n                        "node_inputs": [\n                            {\n                                "node_id": "image-crop"\n                            }\n                        ]\n                    },\n                ]\n            }\n        ]\n    }\'\n')))))}m.isMDXComponent=!0},8543:function(e,n,t){n.Z=t.p+"assets/images/vtr-7d53fc1ef292e02c58f04d0f9bed3df1.jpg"}}]);