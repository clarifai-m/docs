"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5412],{85162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),o=n(34334),i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,s),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),o=n(67294),i=n(34334),s=n(72389),r=n(67392),l=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:s,block:d,defaultValue:m,values:h,groupId:E,className:_}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,r.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const I=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==I&&!f.some((e=>e.value===I)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:D,setTabGroupChoices:b}=(0,l.U)(),[O,R]=(0,o.useState)(I),T=[],{blockElementScrollPositionUntilNextRender:k}=(0,u.o5)();if(null!=E){const e=D[E];null!=e&&e!==O&&f.some((t=>t.value===e))&&R(e)}const N=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==O&&(k(t),R(a),null!=E&&b(E,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var o;const t=T.indexOf(e.currentTarget)-1;n=null!=(o=T[t])?o:T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},_)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:N,onClick:N},s,{className:(0,i.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},98828:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(83117),o=(n(67294),n(3905)),i=n(65488),s=n(85162),r=n(66066);const l={description:"Learn about model evaluation tools."},u="Evaluating Models",c={unversionedId:"api-guide/evaluate/README",id:"api-guide/evaluate/README",title:"Evaluating Models",description:"Learn about model evaluation tools.",source:"@site/docs/api-guide/evaluate/README.mdx",sourceDirName:"api-guide/evaluate",slug:"/api-guide/evaluate/",permalink:"/api-guide/evaluate/",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about model evaluation tools."},sidebar:"tutorialSidebar",previous:{title:"Deep Training",permalink:"/api-guide/model/deep-training"},next:{title:"Interpreting Evaluations",permalink:"/api-guide/evaluate/interpreting-evaluations"}},p={},d=[{value:"How It Works",id:"how-it-works",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Running Evaluation",id:"running-evaluation",level:2}],m={toc:d};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evaluating-models"},"Evaluating Models"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Evaluate a model's performance")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that you've successfully trained the model, you may want to test its performance before using it in a production environment.\nThe Model Evaluation tool allows you to perform a cross validation on a specified model version. Once the evaluation is complete, you can view the various metrics that inform the model\u2019s performance."),(0,o.kt)("h2",{id:"how-it-works"},"How It Works"),(0,o.kt)("p",null,"Model Evaluation performs a K-split cross validation on data you used to train your custom model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cross validation",src:n(57058).Z,width:"962",height:"946"})),(0,o.kt)("p",null,"In the cross validation process, it will: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set aside a random 1/K subset of the training data and designate as a test set; "),(0,o.kt)("li",{parentName:"ol"},"Train a new model with the remaining training data; "),(0,o.kt)("li",{parentName:"ol"},"Pass the test set data through this new model to make predictions; "),(0,o.kt)("li",{parentName:"ol"},"Compare the predictions against the test set\u2019s actual labels; and,"),(0,o.kt)("li",{parentName:"ol"},"Repeat steps 1",")"," through 4",")"," across K splits to average out the evaluation results.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To run the evaluation on your custom model, it should meet the following criteria:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should be a custom trained model version with:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"At least 2 concepts."),(0,o.kt)("li",{parentName:"ol"},"At least 10 training inputs per concept ","(","at least 50 inputs per concept is recommended",")",".")))),(0,o.kt)("admonition",{title:"Note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The evaluation may result in an error if the model version doesn\u2019t satisfy the requirements above.")),(0,o.kt)("h2",{id:"running-evaluation"},"Running Evaluation"),(0,o.kt)("p",null,"Below is an example of how you would run an evaluation on a specific version of a custom model. "),(0,o.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},"####################################################################################\n# In this section, we set the user authentication, app ID, and the model's  \n# details. Change these strings to run your own example.\n###################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to evaluate your own model\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\nMODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_version_metrics = stub.PostModelVersionMetrics(\n    service_pb2.PostModelVersionMetricsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID      \n    ),\n    metadata=metadata\n)\n\nif post_model_version_metrics.status.code != status_code_pb2.SUCCESS:\n    print(post_model_version_metrics.status)\n    raise Exception(\"Evaluate model failed, status: \" + post_model_version_metrics.status.description)\n")),(0,o.kt)(s.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},"\x3c!--index.html file--\x3e\n\n<script>\n    ////////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model's  \n    // details. Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////////\n\n    const USER_ID = 'YOUR_USER_ID_HERE';\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = 'YOUR_PAT_HERE';\n    const APP_ID = 'YOUR_APP_ID_HERE';\n    // Change these to evaluate your own model\n    const MODEL_ID = 'YOUR_MODEL_ID_HERE';\n    const MODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE';\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const raw = JSON.stringify({\n        \"user_app_id\": {\n            \"user_id\": USER_ID,\n            \"app_id\": APP_ID\n        }\n    });\n\n    const requestOptions = {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Key ' + PAT\n        },\n        body: raw\n    };\n\n    fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/metrics`, requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n\n<\/script>")),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the model\'s\n// details. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = "YOUR_USER_ID_HERE";\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = "YOUR_PAT_HERE";\nconst APP_ID = "YOUR_APP_ID_HERE";\n// Change these to evaluate your own model\nconst MODEL_ID = "YOUR_MODEL_ID_HERE";\nconst MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.PostModelVersionMetrics(\n  {\n    user_app_id: {\n      user_id: USER_ID,\n      app_id: APP_ID,\n    },\n\n    model_id: MODEL_ID,\n    model_version: MODEL_VERSION_ID,\n  },\n\n  metadata,\n\n  (err, response) => {\n    if (err) {\n      throw new Error(err);\n    }\n\n    if (response.status.code !== 10000) {\n      throw new Error("Evaluate model failed, status: " + response.status.description);\n    }  \n\n  }\n);\n')),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model\'s\n    // details. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to evaluate your own model\n    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";\n    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        SingleModelVersionResponse postModelVersionMetricsResponse = stub.postModelVersionMetrics(\n            PostModelVersionMetricsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setModelId(MODEL_ID)\n            .setVersionId(MODEL_VERSION_ID)\n            .build()\n        );\n\n        if (postModelVersionMetricsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Evaluate model failed, status: " + postModelVersionMetricsResponse.getStatus());\n        }\n\n    }\n\n}'))),(0,o.kt)("p",null,"Once the evaluation is complete, you can retrieve the results and analyze the performance of your custom model."),(0,o.kt)("p",null,"We'll talk about how to interpret a model's evaluation results in the next section. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also learn how to perform evaluation on the Portal ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/evaluate/"},"here"),". ")))}h.isMDXComponent=!0},57058:function(e,t,n){t.Z=n.p+"assets/images/cross_validation-cfadf56b2e40cbff4a4709169d1b5640.jpg"}}]);