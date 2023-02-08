"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5412],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(87462),o=n(67294),r=n(86010),i=n(12466),s=n(76775),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function E(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=E({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),_=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{_&&s(_)}),[_]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var _=n(72389);const f="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),l(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":s===t})}),n??t)})))}function I(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f)},o.createElement(g,(0,a.Z)({},e,t)),o.createElement(I,(0,a.Z)({},e,t)))}function D(e){const t=(0,_.Z)();return o.createElement(b,(0,a.Z)({key:String(t)},e))}},55661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>E,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),i=n(85162),s=n(90814);const l={description:"Learn about model evaluation tools."},u="Evaluating Models",c={unversionedId:"api-guide/evaluate/README",id:"api-guide/evaluate/README",title:"Evaluating Models",description:"Learn about model evaluation tools.",source:"@site/docs/api-guide/evaluate/README.mdx",sourceDirName:"api-guide/evaluate",slug:"/api-guide/evaluate/",permalink:"/api-guide/evaluate/",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about model evaluation tools."},sidebar:"tutorialSidebar",previous:{title:"Deep Training",permalink:"/api-guide/model/deep-training"},next:{title:"Interpreting Evaluations",permalink:"/api-guide/evaluate/interpreting-evaluations"}},d={},p=[{value:"How It Works",id:"how-it-works",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Running Evaluation",id:"running-evaluation",level:2}],m={toc:p};function E(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evaluating-models"},"Evaluating Models"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Evaluate a model's performance")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that you've successfully trained the model, you may want to test its performance before using it in a production environment.\nThe Model Evaluation tool allows you to perform a cross validation on a specified model version. Once the evaluation is complete, you can view the various metrics that inform the model\u2019s performance."),(0,o.kt)("h2",{id:"how-it-works"},"How It Works"),(0,o.kt)("p",null,"Model Evaluation performs a K-split cross validation on data you used to train your custom model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cross validation",src:n(57058).Z,width:"962",height:"946"})),(0,o.kt)("p",null,"In the cross validation process, it will: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set aside a random 1/K subset of the training data and designate as a test set; "),(0,o.kt)("li",{parentName:"ol"},"Train a new model with the remaining training data; "),(0,o.kt)("li",{parentName:"ol"},"Pass the test set data through this new model to make predictions; "),(0,o.kt)("li",{parentName:"ol"},"Compare the predictions against the test set\u2019s actual labels; and,"),(0,o.kt)("li",{parentName:"ol"},"Repeat steps 1",")"," through 4",")"," across K splits to average out the evaluation results.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To run the evaluation on your custom model, it should meet the following criteria:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should be a custom trained model version with:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"At least 2 concepts."),(0,o.kt)("li",{parentName:"ol"},"At least 10 training inputs per concept ","(","at least 50 inputs per concept is recommended",")",".")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The evaluation may result in an error if the model version doesn\u2019t satisfy the requirements above.")),(0,o.kt)("h2",{id:"running-evaluation"},"Running Evaluation"),(0,o.kt)("p",null,"Below is an example of how you would run an evaluation on a specific version of a custom model. "),(0,o.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},"####################################################################################\n# In this section, we set the user authentication, app ID, and the model's  \n# details. Change these strings to run your own example.\n###################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to evaluate your own model\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\nMODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_version_metrics = stub.PostModelVersionMetrics(\n    service_pb2.PostModelVersionMetricsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID      \n    ),\n    metadata=metadata\n)\n\nif post_model_version_metrics.status.code != status_code_pb2.SUCCESS:\n    print(post_model_version_metrics.status)\n    raise Exception(\"Evaluate model failed, status: \" + post_model_version_metrics.status.description)\n")),(0,o.kt)(i.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"\x3c!--index.html file--\x3e\n\n<script>\n    ////////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model's  \n    // details. Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////////\n\n    const USER_ID = 'YOUR_USER_ID_HERE';\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = 'YOUR_PAT_HERE';\n    const APP_ID = 'YOUR_APP_ID_HERE';\n    // Change these to evaluate your own model\n    const MODEL_ID = 'YOUR_MODEL_ID_HERE';\n    const MODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE';\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const raw = JSON.stringify({\n        \"user_app_id\": {\n            \"user_id\": USER_ID,\n            \"app_id\": APP_ID\n        }\n    });\n\n    const requestOptions = {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Key ' + PAT\n        },\n        body: raw\n    };\n\n    fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/metrics`, requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n\n<\/script>")),(0,o.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the model\'s\n// details. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = "YOUR_USER_ID_HERE";\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = "YOUR_PAT_HERE";\nconst APP_ID = "YOUR_APP_ID_HERE";\n// Change these to evaluate your own model\nconst MODEL_ID = "YOUR_MODEL_ID_HERE";\nconst MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.PostModelVersionMetrics(\n  {\n    user_app_id: {\n      user_id: USER_ID,\n      app_id: APP_ID,\n    },\n\n    model_id: MODEL_ID,\n    model_version: MODEL_VERSION_ID,\n  },\n\n  metadata,\n\n  (err, response) => {\n    if (err) {\n      throw new Error(err);\n    }\n\n    if (response.status.code !== 10000) {\n      throw new Error("Evaluate model failed, status: " + response.status.description);\n    }  \n\n  }\n);\n')),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(s.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model\'s\n    // details. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to evaluate your own model\n    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";\n    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        SingleModelVersionResponse postModelVersionMetricsResponse = stub.postModelVersionMetrics(\n            PostModelVersionMetricsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setModelId(MODEL_ID)\n            .setVersionId(MODEL_VERSION_ID)\n            .build()\n        );\n\n        if (postModelVersionMetricsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Evaluate model failed, status: " + postModelVersionMetricsResponse.getStatus());\n        }\n\n    }\n\n}')),(0,o.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/models/YOUR_MODEL_ID_HERE/versions/YOUR_MODEL_VERSION_ID_HERE/metrics" \\\n  -H "Authorization: Key YOUR_PAT_HERE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{}\''))),(0,o.kt)("p",null,"Once the evaluation is complete, you can retrieve the results and analyze the performance of your custom model."),(0,o.kt)("p",null,"We'll talk about how to interpret a model's evaluation results in the next section. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also learn how to perform evaluation on the Portal ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/evaluate/"},"here"),". ")))}E.isMDXComponent=!0},57058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cross_validation-cfadf56b2e40cbff4a4709169d1b5640.jpg"}}]);