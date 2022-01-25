"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7135],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var o=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(7462),a=t(7294),r=t(2389),i=t(9443);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3616),u=t(6010),c="tabItem_vU9c";function p(e){var n,t,r,i=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,w=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.lx)(h,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),_=g.tabGroupChoices,y=g.setTabGroupChoices,O=(0,a.useState)(b),T=O[0],R=O[1],P=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=_[f];null!=E&&E!==T&&h.some((function(e){return e.value===E}))&&R(E)}var W=function(e){var n=e.currentTarget,t=P.indexOf(n),o=h[t].value;o!==T&&(j(n),R(o),null!=f&&y(f,o))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var o=P.indexOf(e.currentTarget)+1;t=P[o]||P[0];break;case"ArrowLeft":var a=P.indexOf(e.currentTarget)-1;t=P[a]||P[P.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},w)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return P.push(e)},onKeyDown:x,onFocus:W,onClick:W},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,r.Z)();return a.createElement(p,(0,o.Z)({key:String(n)},e))}},6202:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=t(6396),s=t(8215),l=["components"],u={description:"Make model predictions in your workflows.",sidebar_position:1},c="Workflow Predict",p={unversionedId:"api-guide/workflows/common-workflows/workflow-predict",id:"api-guide/workflows/common-workflows/workflow-predict",title:"Workflow Predict",description:"Make model predictions in your workflows.",source:"@site/docs/api-guide/workflows/common-workflows/workflow-predict.md",sourceDirName:"api-guide/workflows/common-workflows",slug:"/api-guide/workflows/common-workflows/workflow-predict",permalink:"/api-guide/workflows/common-workflows/workflow-predict",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/workflows/common-workflows/workflow-predict.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Make model predictions in your workflows.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Common Workflows",permalink:"/api-guide/workflows/common-workflows/"},next:{title:"Auto Annotation",permalink:"/api-guide/workflows/common-workflows/auto-annotation-walkthrough"}},d=[],m={toc:d};function f(e){var n=e.components,u=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,u,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workflow-predict"},"Workflow Predict"),(0,r.kt)("p",null,"The Workflow Predict API allows you to predict using 1 or more model","(","s",")",", regardless of them being Clarifai or custom, within a single API call. The max number of inputs processed at once with any given workflow is 32."),(0,r.kt)("p",null,"Now that you have that all set up, you will be able to predict under a workflow using the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST /v2/workflows/{workflow_id}/results")," endpoint. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"{workflow-id}")," currently is whatever you set as your ID. Then as far as your request body, nothing has changed with how you would normally do a predict. In the response body, you will see a ",(0,r.kt)("inlineCode",{parentName:"p"},"results")," object and each object will be the response from the models in the same ordering from the workflow you set up."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image showing the Portal&#39;s workflow prediction results",src:t(4706).Z})),(0,r.kt)("p",null,"You can also use the Explorer in Clarifai Portal to see the results of your workflow's predictions on a given input."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nPostWorkflowResultsResponse postWorkflowResultsResponse = stub.postWorkflowResults(\n    PostWorkflowResultsRequest.newBuilder()\n        .setWorkflowId("{YOUR_WORKFLOW_ID}")\n        .addInputs(\n            Input.newBuilder().setData(\n                Data.newBuilder().setImage(\n                    Image.newBuilder().setUrl(\n                        "https://samples.clarifai.com/metro-north.jpg"\n                    )\n                )\n            )\n        )\n        .build()\n);\n\nif (postWorkflowResultsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post workflow results failed, status: " + postWorkflowResultsResponse.getStatus());\n}\n\n// We\'ll get one WorkflowResult for each input we used above. Because of one input, we have here\n// one WorkflowResult.\nWorkflowResult results = postWorkflowResultsResponse.getResults(0);\n\n// Each model we have in the workflow will produce one output.\nfor (Output output : results.getOutputsList()) {\n    Model model = output.getModel();\n\n    System.out.println("Predicted concepts for the model `" + model.getName() + "`:");\n    for (Concept concept : output.getData().getConceptsList()) {\n        System.out.printf("\\t%s %.2f%n", concept.getName(), concept.getValue());\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostWorkflowResults(\n    {\n        workflow_id: "{YOUR_WORKFLOW_ID}",\n        inputs: [\n            {data: {image: {url: "https://samples.clarifai.com/metro-north.jpg"}}}\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post workflow results failed, status: " + response.status.description);\n        }\n\n        // We\'ll get one WorkflowResult for each input we used above. Because of one input, we have here\n        // one WorkflowResult.\n        const results = response.results[0];\n\n        // Each model we have in the workflow will produce one output.\n        for (const output of results.outputs) {\n            const model = output.model;\n\n            console.log("Predicted concepts for the model `" + model.name + "`:");\n            for (const concept of output.data.concepts) {\n                console.log("\\t" + concept.name + " " + concept.value);\n            }\n        }\n    }\n);\n'))),(0,r.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\npost_workflow_results_response = stub.PostWorkflowResults(\n    service_pb2.PostWorkflowResultsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        workflow_id="{YOUR_WORKFLOW_ID}",\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url="https://samples.clarifai.com/metro-north.jpg"\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_workflow_results_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception("Post workflow results failed, status: " + post_workflow_results_response.status.description)\n\n# We\'ll get one WorkflowResult for each input we used above. Because of one input, we have here\n# one WorkflowResult.\nresults = post_workflow_results_response.results[0]\n\n# Each model we have in the workflow will produce one output.\nfor output in results.outputs:\n    model = output.model\n\n    print("Predicted concepts for the model `%s`" % model.name)\n    for concept in output.data.concepts:\n        print("\\t%s %.2f" % (concept.name, concept.value))\n'))),(0,r.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  -H \'authorization: Key YOUR_API_KEY\' \\\n  -H \'content-type: application/json\' \\\n  -d \'{\n    "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n          }\n        }\n      }\n    ]\n}\'\\\nhttps://api.clarifai.com/v2/workflows/{YOUR_WORKFLOW_ID}/results\n')))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"response_json",label:"Response JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "status": {\n    "code": 10000,\n    "description": "Ok"\n  },\n  "workflow": {\n    "id": "my-workflow",\n    "app_id": "c54b7637df12407aa9c57dfd6d5c057f",\n    "created_at": "2017-07-10T01:45:05.672880Z"\n  },\n  "results": [\n    {\n      "status": {\n        "code": 10000,\n        "description": "Ok"\n      },\n      "input": {\n        "id": "c88aeed9d04c471cace6f8e4801f1a1c",\n        "data": {\n          "image": {\n            "url": "https://samples.clarifai.com/metro-north.jpg"\n          }\n        }\n      },\n      "outputs": [\n        {\n          "id": "feae971167a04d1bbebb7ea49d6ba0f7",\n          "status": {\n            "code": 10000,\n            "description": "Ok"\n          },\n          "created_at": "2017-07-10T12:01:44.929928529Z",\n          "model": {\n            "id": "d16f390eb32cad478c7ae150069bd2c6",\n            "name": "moderation",\n            "created_at": "2017-05-12T21:28:00.471607Z",\n            "app_id": "main",\n            "output_info": {\n              "message": "Show output_info with: GET /models/{model_id}/output_info",\n              "type": "concept",\n              "type_ext": "concept"\n            },\n            "model_version": {\n              "id": "b42ac907ac93483484483a0040a386be",\n              "created_at": "2017-05-12T21:28:00.471607Z",\n              "status": {\n                "code": 21100,\n                "description": "Model trained successfully"\n              }\n            }\n          },\n          "data": {\n            "concepts": [\n              {\n                "id": "ai_QD1zClSd",\n                "name": "safe",\n                "value": 0.99999714,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_kBBGf7r8",\n                "name": "gore",\n                "value": 3.7771046e-05,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_8QQwMjQR",\n                "name": "drug",\n                "value": 1.0449563e-05,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_V76bvrtj",\n                "name": "explicit",\n                "value": 5.2887003e-06,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_RtXh5qkR",\n                "name": "suggestive",\n                "value": 4.7939684e-06,\n                "app_id": "main"\n              }\n            ]\n          }\n        },\n        {\n          "id": "f635b40cbeee47ddb7b348a981e14faf",\n          "status": {\n            "code": 10000,\n            "description": "Ok"\n          },\n          "created_at": "2017-07-10T12:01:44.929941126Z",\n          "model": {\n            "id": "aaa03c23b3724a16a56b629203edc62c",\n            "name": "general-v1.3",\n            "created_at": "2016-02-26T23:38:40.086101Z",\n            "app_id": "main",\n            "output_info": {\n              "message": "Show output_info with: GET /models/{model_id}/output_info",\n              "type": "concept",\n              "type_ext": "concept"\n            },\n            "model_version": {\n              "id": "aa9ca48295b37401f8af92ad1af0d91d",\n              "created_at": "2016-07-13T00:58:55.915745Z",\n              "status": {\n                "code": 21100,\n                "description": "Model trained successfully"\n              }\n            }\n          },\n          "data": {\n            "concepts": [\n              {\n                "id": "ai_HLmqFqBf",\n                "name": "train",\n                "value": 0.9989112,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_fvlBqXZR",\n                "name": "railway",\n                "value": 0.9975532,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_Xxjc3MhT",\n                "name": "transportation system",\n                "value": 0.9959158,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_6kTjGfF6",\n                "name": "station",\n                "value": 0.992573,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_RRXLczch",\n                "name": "locomotive",\n                "value": 0.992556,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_VRmbGVWh",\n                "name": "travel",\n                "value": 0.98789215,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_SHNDcmJ3",\n                "name": "subway system",\n                "value": 0.9816359,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_jlb9q33b",\n                "name": "commuter",\n                "value": 0.9712483,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_46lGZ4Gm",\n                "name": "railroad track",\n                "value": 0.9690325,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_tr0MBp64",\n                "name": "traffic",\n                "value": 0.9687052,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_l4WckcJN",\n                "name": "blur",\n                "value": 0.9667078,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_2gkfMDsM",\n                "name": "platform",\n                "value": 0.9624243,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_CpFBRWzD",\n                "name": "urban",\n                "value": 0.960752,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_786Zr311",\n                "name": "no person",\n                "value": 0.95864904,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_6lhccv44",\n                "name": "business",\n                "value": 0.95720303,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_971KsJkn",\n                "name": "track",\n                "value": 0.9494642,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_WBQfVV0p",\n                "name": "city",\n                "value": 0.94089437,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_dSCKh8xv",\n                "name": "fast",\n                "value": 0.9399334,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_TZ3C79C6",\n                "name": "road",\n                "value": 0.93121606,\n                "app_id": "main"\n              },\n              {\n                "id": "ai_VSVscs9k",\n                "name": "terminal",\n                "value": 0.9230834,\n                "app_id": "main"\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ]\n}\n')))))}f.isMDXComponent=!0},4706:function(e,n,t){n.Z=t.p+"assets/images/preview-workflows-new-7376708b5787ab7f7ba14a50dc4cf232.png"}}]);