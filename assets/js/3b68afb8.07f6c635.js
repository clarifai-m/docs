"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7135],{85162:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(67294),o=t(86010);const i="tabItem_Ymn6";function s(n){let{children:e,hidden:t,className:s}=n;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,s),hidden:t},e)}},74866:(n,e,t)=>{t.d(e,{Z:()=>E});var a=t(87462),o=t(67294),i=t(86010),s=t(12466),r=t(76775),l=t(91980),u=t(67392),c=t(50012);function p(n){return function(n){return o.Children.map(n,(n=>{if((0,o.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:o}}=n;return{value:e,label:t,attributes:a,default:o}}))}function d(n){const{values:e,children:t}=n;return(0,o.useMemo)((()=>{const n=e??p(t);return function(n){const e=(0,u.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function m(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function f(n){let{queryString:e=!1,groupId:t}=n;const a=(0,r.k6)(),i=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,l._X)(i),(0,o.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(a.location.search);e.set(i,n),a.replace({...a.location,search:e.toString()})}),[i,a])]}function _(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,i=d(n),[s,r]=(0,o.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:i}))),[l,u]=f({queryString:t,groupId:a}),[p,_]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,i]=(0,c.Nk)(t);return[a,(0,o.useCallback)((n=>{t&&i.set(n)}),[t,i])]}({groupId:a}),w=(()=>{const n=l??p;return m({value:n,tabValues:i})?n:null})();(0,o.useLayoutEffect)((()=>{w&&r(w)}),[w]);return{selectedValue:s,selectValue:(0,o.useCallback)((n=>{if(!m({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);r(n),u(n),_(n)}),[u,_,i]),tabValues:i}}var w=t(72389);const h="tabList__CuJ",k="tabItem_LNqP";function g(n){let{className:e,block:t,selectedValue:r,selectValue:l,tabValues:u}=n;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=n=>{const e=n.currentTarget,t=c.indexOf(e),a=u[t].value;a!==r&&(p(e),l(a))},m=n=>{var e;let t=null;switch(n.key){case"Enter":d(n);break;case"ArrowRight":{const e=c.indexOf(n.currentTarget)+1;t=c[e]??c[0];break}case"ArrowLeft":{const e=c.indexOf(n.currentTarget)-1;t=c[e]??c[c.length-1];break}}null==(e=t)||e.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},e)},u.map((n=>{let{value:e,label:t,attributes:s}=n;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,key:e,ref:n=>c.push(n),onKeyDown:m,onClick:d},s,{className:(0,i.Z)("tabs__item",k,null==s?void 0:s.className,{"tabs__item--active":r===e})}),t??e)})))}function b(n){let{lazy:e,children:t,selectedValue:a}=n;if(t=Array.isArray(t)?t:[t],e){const n=t.find((n=>n.props.value===a));return n?(0,o.cloneElement)(n,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},t.map(((n,e)=>(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==a}))))}function v(n){const e=_(n);return o.createElement("div",{className:(0,i.Z)("tabs-container",h)},o.createElement(g,(0,a.Z)({},n,e)),o.createElement(b,(0,a.Z)({},n,e)))}function E(n){const e=(0,w.Z)();return o.createElement(v,(0,a.Z)({key:String(e)},n))}},10303:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(87462),o=(t(67294),t(3905)),i=t(74866),s=t(85162),r=t(90814);const l={description:"Make model predictions in your workflows.",sidebar_position:1},u="Workflow Predict",c={unversionedId:"api-guide/workflows/common-workflows/workflow-predict",id:"api-guide/workflows/common-workflows/workflow-predict",title:"Workflow Predict",description:"Make model predictions in your workflows.",source:"@site/docs/api-guide/workflows/common-workflows/workflow-predict.md",sourceDirName:"api-guide/workflows/common-workflows",slug:"/api-guide/workflows/common-workflows/workflow-predict",permalink:"/api-guide/workflows/common-workflows/workflow-predict",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Make model predictions in your workflows.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Common Workflows",permalink:"/api-guide/workflows/common-workflows/"},next:{title:"Auto Annotation",permalink:"/api-guide/workflows/common-workflows/auto-annotation-walkthrough"}},p={},d=[{value:"Predict",id:"predict",level:2}],m={toc:d};function f(n){let{components:e,...l}=n;return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workflow-predict"},"Workflow Predict"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make model predictions in your workflows")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Workflow Predict API allows you to predict using one or more model","(","s",")",", regardless of them being Clarifai's or custom-built models, within a single API call. The max number of inputs processed at once with any given workflow is 32."),(0,o.kt)("p",null,"After you're set up, you can predict under a workflow using the ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /v2/workflows/WORKFLOW_ID_HERE/results")," endpoint. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"WORKFLOW_ID_HERE")," is whatever you set as your workflow ID. "),(0,o.kt)("p",null,"For the request body, nothing changes with how you would normally do a predict call. In the response body, you will see a ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," object and each object will be the response from the models in the same ordering from the workflow you set up."),(0,o.kt)("p",null,"You can also use the Explorer feature in the Clarifai Portal to see the results of your workflow's predictions on a given input."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image showing the Portal&#39;s workflow prediction results",src:t(54251).Z,width:"1000",height:"544"})),(0,o.kt)("p",{align:"center"},"Image showing the Portal's workflow prediction results"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The initialization code used in the following example is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page."))),(0,o.kt)("h2",{id:"predict"},"Predict"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to make a predict call with an external workflow that is outside the scope of your app, you need to use a PAT while specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," associated with the workflow you want to use. ")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},"##############################################################################\n# In this section, we set the user authentication, app ID, workflow ID, and  \n# image URL. Change these strings to run your own example.\n##############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to make your own predictions\nWORKFLOW_ID = 'my-custom-workflow'\nIMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\npost_workflow_results_response = stub.PostWorkflowResults(\n    service_pb2.PostWorkflowResultsRequest(\n        user_app_id=userDataObject,  \n        workflow_id=WORKFLOW_ID,\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_workflow_results_response.status.code != status_code_pb2.SUCCESS:\n    print(post_workflow_results_response.status)\n    raise Exception(\"Post workflow results failed, status: \" + post_workflow_results_response.status.description)\n\n# We'll get one WorkflowResult for each input we used above. Because of one input, we have here one WorkflowResult\nresults = post_workflow_results_response.results[0]\n\n# Each model we have in the workflow will produce one output.\nfor output in results.outputs:\n    model = output.model\n\n    print(\"Predicted concepts for the model `%s`\" % model.id)\n    for concept in output.data.concepts:\n        print(\"\\t%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(results)")),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n/////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, workflow ID, and  \n// image URL. Change these strings to run your own example.\n////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to make your own predictions\nconst WORKFLOW_ID = \'my-custom-workflow\';\nconst IMAGE_URL = \'https://samples.clarifai.com/metro-north.jpg\';\n\n/////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n/////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.PostWorkflowResults(\n    {\n        user_app_id: {\n            "user_id": USER_ID,\n            "app_id": APP_ID\n        },\n        workflow_id: WORKFLOW_ID,\n        inputs: [\n            { data: { image: { url: IMAGE_URL } } }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post workflow results failed, status: " + response.status.description);\n        }\n\n        // We\'ll get one WorkflowResult for each input we used above. Because of one input, we have here\n        // one WorkflowResult.\n        const results = response.results[0];\n\n        // Each model we have in the workflow will produce one output.\n        for (const output of results.outputs) {\n            const model = output.model;\n\n            console.log("Predicted concepts for the model `" + model.id + "`:");\n            for (const concept of output.data.concepts) {\n                console.log("\\t" + concept.name + " " + concept.value);\n            }\n        }\n    }\n);\n')),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    /////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, workflow ID, and  \n    // image URL. Change these strings to run your own example.\n    ////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to make your own predictions\n    static final String WORKFLOW_ID = "my-custom-workflow";\n    static final String IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        PostWorkflowResultsResponse postWorkflowResultsResponse = stub.postWorkflowResults(\n            PostWorkflowResultsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setWorkflowId(WORKFLOW_ID)\n            .addInputs(\n                Input.newBuilder().setData(\n                    Data.newBuilder().setImage(\n                        Image.newBuilder().setUrl(IMAGE_URL)\n                    )\n                )\n            )\n            .build()\n        );\n\n        if (postWorkflowResultsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Post workflow results failed, status: " + postWorkflowResultsResponse.getStatus());\n        }\n\n        // We\'ll get one WorkflowResult for each input we used above. Because of one input, we have here\n        // one WorkflowResult.\n        WorkflowResult results = postWorkflowResultsResponse.getResults(0);\n\n        // Each model we have in the workflow will produce one output.\n        for (Output output: results.getOutputsList()) {\n            Model model = output.getModel();\n\n            System.out.println("Predicted concepts for the model `" + model.getId() + "`:");\n            for (Concept concept: output.getData().getConceptsList()) {\n                System.out.printf("\\t%s %.2f%n", concept.getName(), concept.getValue());\n            }\n\n        }\n\n    }\n\n}')),(0,o.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows/YOUR_WORKFLOW_ID_HERE/results" \\\n  -H "authorization: Key YOUR_PAT_HERE" \\\n  -H "content-type: application/json" \\\n  -d \'{\n    "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n          }\n        }\n      }\n    ]\n}\''))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Code Output Example"),(0,o.kt)(r.Z,{className:"language-text",mdxType:"CodeBlock"},"Predicted concepts for the model `food-items-v1.0`\n    wine 0.95\n    beer 0.90\n    pizza 0.84\n    coffee 0.66\n    meat 0.63\n    barbecue 0.61\n    beef 0.56\n    fish 0.56\n    steak 0.55\n    gastronomy 0.53\n    chicken 0.49\n    water 0.46\n    lobster 0.45\n    oil 0.43\n    tea 0.43\n    pork 0.42\n    cheese 0.39\n    tuna 0.37\n    olive 0.37\n    turkey 0.35\nPredicted concepts for the model `general`\n    train 1.00\n    railway 1.00\n    transportation system 1.00\n    locomotive 0.99\n    station 0.99\n    travel 0.99\n    subway system 0.98\n    commuter 0.97\n    traffic 0.97\n    blur 0.96\n    urban 0.96\n    no person 0.96\n    platform 0.96\n    business 0.96\n    track 0.94\n    city 0.94\n    fast 0.94\n    road 0.93\n    terminal 0.92\n    public 0.92")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Output Example"),(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'status {\n    code: SUCCESS\n    description: "Ok"\n  }\n  input {\n    id: "0a799c6f1dd94588afd392b8f8cae1a0"\n    data {\n      image {\n        url: "https://samples.clarifai.com/metro-north.jpg"\n      }\n    }\n  }\n  outputs {\n    id: "74620e2daafa4fa1a890f13e22ad4080"\n    status {\n      code: SUCCESS\n      description: "Ok"\n    }\n    created_at {\n      seconds: 1648216884\n      nanos: 284812988\n    }\n    model {\n      id: "food-item-v1-recognition"\n      name: "food-items-v1.0"\n      created_at {\n        seconds: 1474150739\n        nanos: 955626000\n      }\n      app_id: "main"\n      output_info {\n        output_config {\n        }\n        message: "Show output_info with: GET /models/{model_id}/output_info"\n        fields_map {\n          fields {\n            key: "concepts"\n            value {\n              string_value: "softmax"\n            }\n          }\n        }\n      }\n      model_version {\n        id: "dfebc169854e429086aceb8368662641"\n        created_at {\n          seconds: 1474150739\n          nanos: 955626000\n        }\n        status {\n          code: MODEL_TRAINED\n          description: "Model is trained and ready"\n        }\n        visibility {\n          gettable: PUBLIC\n        }\n        app_id: "main"\n        user_id: "clarifai"\n        metadata {\n        }\n      }\n      display_name: "food-items-v1-visual-classifier"\n      user_id: "clarifai"\n      input_info {\n        fields_map {\n          fields {\n            key: "image"\n            value {\n              string_value: "images"\n            }\n          }\n        }\n      }\n      train_info {\n      }\n      model_type_id: "visual-classifier"\n      visibility {\n        gettable: PUBLIC\n      }\n      modified_at {\n        seconds: 1634712785\n        nanos: 568020000\n      }\n      import_info {\n      }\n    }\n    data {\n      concepts {\n        id: "ai_kTsPMX36"\n        name: "wine"\n        value: 0.9537787437438965\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_r2Fbdv8L"\n        name: "beer"\n        value: 0.9002427458763123\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_fZsLlGwm"\n        name: "pizza"\n        value: 0.8410654067993164\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_f1zKlGnc"\n        name: "coffee"\n        value: 0.6570742726325989\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_KWmFf1fn"\n        name: "meat"\n        value: 0.6265882849693298\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_7f0n1q5Q"\n        name: "barbecue"\n        value: 0.6149417161941528\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_XVpwLB09"\n        name: "beef"\n        value: 0.5626139640808105\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_69JKJjSz"\n        name: "fish"\n        value: 0.561673104763031\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_hmjcV7cH"\n        name: "steak"\n        value: 0.5533789396286011\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_05mwq5v5"\n        name: "gastronomy"\n        value: 0.5272657871246338\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_jvVxlhLh"\n        name: "chicken"\n        value: 0.49488314986228943\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_G58V132Z"\n        name: "water"\n        value: 0.46317076683044434\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_jsmJGj7n"\n        name: "lobster"\n        value: 0.45476287603378296\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_dHhR5NW4"\n        name: "oil"\n        value: 0.42813917994499207\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_CFS37srh"\n        name: "tea"\n        value: 0.4275510907173157\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_TRbv6FWL"\n        name: "pork"\n        value: 0.4154187738895416\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_FnZCSVMH"\n        name: "cheese"\n        value: 0.38525062799453735\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_5sLb6bK5"\n        name: "tuna"\n        value: 0.3674249053001404\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_61Tqv85G"\n        name: "olive"\n        value: 0.3656860589981079\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_b4b4hLRV"\n        name: "turkey"\n        value: 0.3539673686027527\n        app_id: "main"\n      }\n    }\n  }\n  outputs {\n    id: "cbea4f2cb08f4bf59a1295d5b0ddabfa"\n    status {\n      code: SUCCESS\n      description: "Ok"\n    }\n    created_at {\n      seconds: 1648216884\n      nanos: 291465486\n    }\n    model {\n      id: "general-image-recognition"\n      name: "general"\n      created_at {\n        seconds: 1457543499\n        nanos: 608845000\n      }\n      app_id: "main"\n      output_info {\n        output_config {\n        }\n        message: "Show output_info with: GET /models/{model_id}/output_info"\n        fields_map {\n          fields {\n            key: "concepts"\n            value {\n              string_value: "softmax"\n            }\n          }\n        }\n      }\n      model_version {\n        id: "aa9ca48295b37401f8af92ad1af0d91d"\n        created_at {\n          seconds: 1468372752\n          nanos: 147644000\n        }\n        status {\n          code: MODEL_TRAINED\n          description: "Model is trained and ready"\n        }\n        visibility {\n          gettable: PUBLIC\n        }\n        app_id: "main"\n        user_id: "clarifai"\n        metadata {\n        }\n      }\n      user_id: "clarifai"\n      input_info {\n        fields_map {\n          fields {\n            key: "image"\n            value {\n              string_value: "images"\n            }\n          }\n        }\n      }\n      train_info {\n      }\n      model_type_id: "visual-classifier"\n      visibility {\n        gettable: PUBLIC\n      }\n      modified_at {\n        seconds: 1648153319\n        nanos: 760183000\n      }\n      import_info {\n      }\n    }\n    data {\n      concepts {\n        id: "ai_HLmqFqBf"\n        name: "train"\n        value: 0.9987074136734009\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_fvlBqXZR"\n        name: "railway"\n        value: 0.9971307516098022\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_Xxjc3MhT"\n        name: "transportation system"\n        value: 0.9954404830932617\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_RRXLczch"\n        name: "locomotive"\n        value: 0.9914677143096924\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_6kTjGfF6"\n        name: "station"\n        value: 0.9910657405853271\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_VRmbGVWh"\n        name: "travel"\n        value: 0.9873164296150208\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_SHNDcmJ3"\n        name: "subway system"\n        value: 0.9797887802124023\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_jlb9q33b"\n        name: "commuter"\n        value: 0.967644214630127\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_tr0MBp64"\n        name: "traffic"\n        value: 0.9670584201812744\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_l4WckcJN"\n        name: "blur"\n        value: 0.9639896154403687\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_CpFBRWzD"\n        name: "urban"\n        value: 0.958390474319458\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_786Zr311"\n        name: "no person"\n        value: 0.957963764667511\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_2gkfMDsM"\n        name: "platform"\n        value: 0.9577903747558594\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_6lhccv44"\n        name: "business"\n        value: 0.9567283987998962\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_971KsJkn"\n        name: "track"\n        value: 0.9446062445640564\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_WBQfVV0p"\n        name: "city"\n        value: 0.9392585158348083\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_dSCKh8xv"\n        name: "fast"\n        value: 0.9364041686058044\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_TZ3C79C6"\n        name: "road"\n        value: 0.930669903755188\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_VSVscs9k"\n        name: "terminal"\n        value: 0.9190886616706848\n        app_id: "main"\n      }\n      concepts {\n        id: "ai_mcSHVRfS"\n        name: "public"\n        value: 0.9154675006866455\n        app_id: "main"\n      }\n    }\n  }\n    ')))}f.isMDXComponent=!0},54251:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/preview-workflows-new-7376708b5787ab7f7ba14a50dc4cf232.png"}}]);