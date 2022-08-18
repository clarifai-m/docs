"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7955],{85162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(67294),i=t(34334),r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(83117),i=t(67294),r=t(34334),o=t(72389),s=t(67392),l=t(7094),u=t(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:o,block:d,defaultValue:_,values:m,groupId:E,className:h}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),I=(0,s.l)(v,((e,n)=>e.value===n.value));if(I.length>0)throw new Error('Docusaurus error: Duplicate values "'+I.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===_?_:null!=(n=null!=_?_:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:D,setTabGroupChoices:O}=(0,l.U)(),[b,R]=(0,i.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=E){const e=D[E];null!=e&&e!==b&&v.some((n=>n.value===e))&&R(e)}const N=e=>{const n=e.currentTarget,t=T.indexOf(n),a=v[t].value;a!==b&&(S(n),R(a),null!=E&&O(E,String(a)))},A=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=T.indexOf(e.currentTarget)+1;t=null!=(a=T[n])?a:T[0];break}case"ArrowLeft":{var i;const n=T.indexOf(e.currentTarget)-1;t=null!=(i=T[n])?i:T[T.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},h)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:e=>T.push(e),onKeyDown:A,onFocus:N,onClick:N},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":b===n})}),null!=t?t:n)}))),o?(0,i.cloneElement)(g.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==b})))))}function _(e){const n=(0,o.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},83175:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=t(83117),i=(t(67294),t(3905)),r=t(65488),o=t(85162),s=t(66066);const l={description:"Learn to interpret model evaluations.",sidebar_position:1},u="Interpreting Evaluations",c={unversionedId:"api-guide/evaluate/interpreting-evaluations",id:"api-guide/evaluate/interpreting-evaluations",title:"Interpreting Evaluations",description:"Learn to interpret model evaluations.",source:"@site/docs/api-guide/evaluate/interpreting-evaluations.md",sourceDirName:"api-guide/evaluate",slug:"/api-guide/evaluate/interpreting-evaluations",permalink:"/api-guide/evaluate/interpreting-evaluations",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn to interpret model evaluations.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Evaluating Models",permalink:"/api-guide/evaluate/"},next:{title:"Improving Your Model",permalink:"/api-guide/evaluate/improving-your-model"}},p={},d=[{value:"Get Evaluation Results",id:"get-evaluation-results",level:2}],_={toc:d};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interpreting-evaluations"},"Interpreting Evaluations"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn to interpret model evaluations")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"get-evaluation-results"},"Get Evaluation Results"),(0,i.kt)("p",null,"Below is an example of how you would get the evaluation results of a specific version of a custom model. "),(0,i.kt)("p",null,"You can use the results to assess the performance of your model. "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},"####################################################################################\n# In this section, we set the user authentication, app ID, and the model's  \n# details. Change these strings to run your own example.\n###################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to get your own model evaluation results\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\nMODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nget_model_version_metrics = stub.GetModelVersionMetrics(\n    service_pb2.GetModelVersionMetricsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID      \n    ),\n    metadata=metadata\n)\n\nif get_model_version_metrics.status.code != status_code_pb2.SUCCESS:\n    print(get_model_version_metrics.status)\n    raise Exception(\"Get model metrics failed, status: \" + get_model_version_metrics.status.description)\n\nprint(get_model_version_metrics)")),(0,i.kt)(o.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"\x3c!--index.html file--\x3e\n\n<script>\n    ////////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model's  \n    // details. Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////////\n\n    const USER_ID = 'YOUR_USER_ID_HERE';\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = 'YOUR_PAT_HERE';\n    const APP_ID = 'YOUR_APP_ID_HERE';\n    // Change these to get your own model evaluation results\n    const MODEL_ID = 'YOUR_MODEL_ID_HERE';\n    const MODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE';\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const requestOptions = {\n        method: 'GET',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Key ' + PAT\n        }\n    \n    };\n\n    fetch(`https://api.clarifai.com/v2/users/${USER_ID}/apps/${APP_ID}/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/metrics`, requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n\n<\/script>")),(0,i.kt)(o.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the model's\n// details. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = 'YOUR_USER_ID_HERE';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = 'YOUR_PAT_HERE';\nconst APP_ID = 'YOUR_APP_ID_HERE';\n// Change these to get your own model evaluation results\nconst MODEL_ID = 'YOUR_MODEL_ID_HERE';\nconst MODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE';\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require(\"clarifai-nodejs-grpc\");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set(\"authorization\", \"Key \" + PAT);\n\nstub.GetModelVersionMetrics(\n  {\n    user_app_id: {\n      user_id: USER_ID,\n      app_id: APP_ID,\n    },\n\n    model_id: MODEL_ID,\n    model_version: MODEL_VERSION_ID,\n  },\n\n  metadata,\n\n  (err, response) => {\n    if (err) {\n      throw new Error(err);\n    }\n\n    if (response.status.code !== 10000) {\n      throw new Error(\"Get model metrics failed, status: \" + response.status.description);\n    }  \n\n    console.log(response);\n\n  }\n\n);\n")),(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model\'s\n    // details. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to get your own model evaluation results\n    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";\n    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        SingleModelVersionResponse getModelVersionMetricsResponse = stub.getModelVersionMetrics(\n            GetModelVersionMetricsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setModelId(MODEL_ID)\n            .setVersionId(MODEL_VERSION_ID)\n            .build()\n        );\n\n        if (getModelVersionMetricsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Get model metrics failed, status: " + getModelVersionMetricsResponse.getStatus());\n        }\n        \n        System.out.println(getModelVersionMetricsResponse);\n    }\n\n}'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Code Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "c0168837e14b654f4487ab1846660ad9"\n}\nmodel_version {\n  id: "4fa241e368534224a07be38955a16a98"\n  created_at {\n    seconds: 1659633219\n    nanos: 356537000\n  }\n  status {\n    code: MODEL_TRAINED\n    description: "Model is trained and ready"\n  }\n  active_concept_count: 1\n  metrics {\n    status {\n      code: MODEL_EVALUATED\n      description: "Model was successfully evaluated."\n    }\n    summary {\n      macro_avg_roc_auc: 0.75\n      macro_std_roc_auc: 0.25\n      macro_avg_f1_score: 1.0\n      macro_avg_precision: 1.0\n      macro_avg_recall: 0.5\n    }\n  }\n  total_input_count: 24\n  completed_at {\n    seconds: 1659633222\n    nanos: 16763000\n  }\n  visibility {\n    gettable: PRIVATE\n  }\n  app_id: "deep-learning"\n  user_id: "ei2leoz3s3iy"\n  metadata {\n  }\n}\n'))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also learn how to interpret a model's evaluation results on the Portal ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations"},"here"),". ")))}m.isMDXComponent=!0}}]);