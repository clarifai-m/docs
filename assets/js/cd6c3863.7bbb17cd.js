"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6204],{85162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294),i=t(34334),s="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(s,r),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(83117),i=t(67294),s=t(34334),r=t(72389),o=t(67392),l=t(7094),u=t(12466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var n,t;const{lazy:r,block:d,defaultValue:m,values:g,groupId:h,className:f}=e,_=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=g?g:_.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),E=(0,o.l)(b,((e,n)=>e.value===n.value));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const I=null===m?m:null!=(n=null!=m?m:null==(t=_.find((e=>e.props.default)))?void 0:t.props.value)?n:_[0].props.value;if(null!==I&&!b.some((e=>e.value===I)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,l.U)(),[P,k]=(0,i.useState)(I),C=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==P&&b.some((n=>n.value===e))&&k(e)}const y=e=>{const n=e.currentTarget,t=C.indexOf(n),a=b[t].value;a!==P&&(A(n),k(a),null!=h&&T(h,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=C.indexOf(e.currentTarget)+1;t=null!=(a=C[n])?a:C[0];break}case"ArrowLeft":{var i;const n=C.indexOf(e.currentTarget)-1;t=null!=(i=C[n])?i:C[C.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,s.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},b.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:e=>C.push(e),onKeyDown:N,onFocus:y,onClick:y},r,{className:(0,s.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),r?(0,i.cloneElement)(_.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},_.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==P})))))}function m(e){const n=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(n)},e))}},77109:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=t(83117),i=(t(67294),t(3905)),s=t(65488),r=t(85162),o=t(66066);const l={description:"Paginate your data batches.",sidebar_position:3},u="Pagination",p={unversionedId:"api-guide/advanced-topics/pagination",id:"api-guide/advanced-topics/pagination",title:"Pagination",description:"Paginate your data batches.",source:"@site/docs/api-guide/advanced-topics/pagination.md",sourceDirName:"api-guide/advanced-topics",slug:"/api-guide/advanced-topics/pagination",permalink:"/api-guide/advanced-topics/pagination",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Paginate your data batches.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Patching",permalink:"/api-guide/advanced-topics/patching"},next:{title:"Batch Predict CSV on Custom Text Model",permalink:"/api-guide/advanced-topics/batch-predict-csv-on-custom-text-model"}},c={},d=[],m={toc:d};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Paginate your data batches")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Many API calls are paginated. It is an helpful feature when working with our API, especially if you have a huge number of results to display."),(0,i.kt)("p",null,"You can provide ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"per_page")," params to the API request, and your results will be split into pages. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," params indicates the page number\u2060\u2014defaults to 1. The ",(0,i.kt)("inlineCode",{parentName:"p"},"per_page")," params indicates the number of results that will be contained in each page\u2060\u2014defaults to 128. You can get up to 1,000 results per page. "),(0,i.kt)("p",null,"In the following example, we are getting all inputs and specifying to start at page 2 and retrieve 20 results per page."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The initialization code used in the following example is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions"},"client installation page."))),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################\n# In this section, we set the user authentication and app ID.\n# Change these strings to run your own example.\n#################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\nlist_inputs_response = stub.ListInputs(\n    service_pb2.ListInputsRequest(\n        user_app_id=userDataObject,\n        page=2, \n        per_page=20\n    ),\n    metadata=metadata\n)\n\nif list_inputs_response.status.code != status_code_pb2.SUCCESS:\n    print(list_inputs_response.status)\n    raise Exception(\"List inputs failed, status: \" + list_inputs_response.status.description)\n\nfor input_object in list_inputs_response.inputs:\n    print(input_object)")),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication and app ID.\n// Change these strings to run your own example.\n////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.ListInputs(\n    {\n        user_app_id: {\n            user_id: USER_ID,\n            app_id: APP_ID\n        },\n        page: 2,\n        per_page: 20\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("List inputs failed, status: " + response.status.description);\n        }\n\n        for (const input of response.inputs) {\n            console.log(JSON.stringify(input, null, 2));\n        }\n    }\n);\n')),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication and app ID.\n    // Change these strings to run your own example.\n    ////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\t\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        MultiInputResponse listInputsResponse = stub.listInputs(\n            ListInputsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setPage(2)\n            .setPerPage(20)\n            .build()\n        );\n\n        if (listInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("List inputs failed, status: " + listInputsResponse.getStatus());\n        }\n\n        for (Input input: listInputsResponse.getInputsList()) {\n            System.out.println(input);\n        }\n\n    }\n\n}')),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl -X GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/inputs?page=2&per_page=20" \\\n  -H "Authorization: Key YOUR_PAT_HERE" \\\n  '))))}g.isMDXComponent=!0}}]);