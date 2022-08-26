"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5245],{85162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),r=t(34334),s="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,i),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(83117),r=t(67294),s=t(34334),i=t(72389),o=t(67392),c=t(7094),l=t(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:i,block:d,defaultValue:h,values:m,groupId:g,className:f}=e,_=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:_.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),w=(0,o.l)(b,((e,n)=>e.value===n.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const E=null===h?h:null!=(n=null!=h?h:null==(t=_.find((e=>e.props.default)))?void 0:t.props.value)?n:_[0].props.value;if(null!==E&&!b.some((e=>e.value===E)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:T}=(0,c.U)(),[N,y]=(0,r.useState)(E),v=[],{blockElementScrollPositionUntilNextRender:S}=(0,l.o5)();if(null!=g){const e=C[g];null!=e&&e!==N&&b.some((n=>n.value===e))&&y(e)}const A=e=>{const n=e.currentTarget,t=v.indexOf(n),a=b[t].value;a!==N&&(S(n),y(a),null!=g&&T(g,String(a)))},P=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=v.indexOf(e.currentTarget)+1;t=null!=(a=v[n])?a:v[0];break}case"ArrowLeft":{var r;const n=v.indexOf(e.currentTarget)-1;t=null!=(r=v[n])?r:v[v.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},f)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>v.push(e),onKeyDown:P,onFocus:A,onClick:A},i,{className:(0,s.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(_.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},_.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function h(e){const n=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},36297:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var a=t(83117),r=(t(67294),t(3905)),s=t(65488),i=t(85162),o=t(66066);const c={description:"Group or separate items in your dataset.",sidebar_position:1},l="Combine or Negate",u={unversionedId:"api-guide/search/legacy-search/combine-or-negate",id:"api-guide/search/legacy-search/combine-or-negate",title:"Combine or Negate",description:"Group or separate items in your dataset.",source:"@site/docs/api-guide/search/legacy-search/combine-or-negate.md",sourceDirName:"api-guide/search/legacy-search",slug:"/api-guide/search/legacy-search/combine-or-negate",permalink:"/api-guide/search/legacy-search/combine-or-negate",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Group or separate items in your dataset.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Legacy Search",permalink:"/api-guide/search/legacy-search/"},next:{title:"Filter",permalink:"/api-guide/search/legacy-search/filter"}},p={},d=[],h={toc:d};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"combine-or-negate"},"Combine or Negate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group or separate items in your dataset")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can also combine searches using AND."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The initialization code used in the following example is outlined in detail on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page."))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,r.kt)(o.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################################\n# In this section, we set the user authentication, app ID, and the concepts we  \n# we want to search by. Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to search by your own concepts\nCONCEPT_NAME_1 = 'cat'\nCONCEPT_NAME_2 = 'dog'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\n# Here we search for images which we labeled with \"cat\" and for which the General prediction model does not find\n# a \"dog\" concept.\npost_searches_response = stub.PostSearches(\n    service_pb2.PostSearchesRequest(\n        user_app_id=userDataObject,\n        query=resources_pb2.Query(\n            ands=[\n                resources_pb2.And(\n                    input=resources_pb2.Input(  # Setting Input indicates we search for images that have the concept(s)\n                                                # which we added to the input manually.\n                        data=resources_pb2.Data(\n                            concepts=[\n                                resources_pb2.Concept(\n                                    name=CONCEPT_NAME_1,\n                                    value=1\n                                )\n                            ]\n                        )\n                    )\n                ),\n                resources_pb2.And(\n                    output=resources_pb2.Output(  # Setting Output indicates we search for images that have the concept(s)\n                                                  # which were predicted by the General model.\n                        data=resources_pb2.Data(\n                            concepts=[\n                                resources_pb2.Concept(\n                                    name=CONCEPT_NAME_2,\n                                    value=0\n                                )\n                            ]\n                        )\n                    )\n                )\n            ]\n        )\n    ),\n    metadata=metadata\n)\n\nif post_searches_response.status.code != status_code_pb2.SUCCESS:\n    print(post_searches_response.status)\n    raise Exception(\"Post searches failed, status: \" + post_searches_response.status.description)\n\nprint(\"Found inputs:\")\nfor hit in post_searches_response.hits:\n    print(\"\\tScore %.2f for %s\" % (hit.score, hit.input.id))")),(0,r.kt)(i.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,r.kt)(o.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the concepts we  \n// we want to search by. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to search by your own concepts\nconst CONCEPT_NAME_1 = \'cat\';\nconst CONCEPT_NAME_2 = \'dog\';\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\n// Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n// a "dog" concept\n\nstub.PostSearches(\n    {\n        user_app_id: {\n            user_id: USER_ID,\n            app_id: APP_ID\n        },\n        query: {\n            ands: [\n                {\n                    input: {  // Setting Input indicates we search for images that have the concept(s)\n                        // which we added to the input manually\n                        data: {\n                            concepts: [\n                                {\n                                    name: CONCEPT_NAME_1,\n                                    value: 1\n                                }\n                            ]\n                        }\n                    }\n                },\n                {\n                    output: {  // Setting Output indicates we search for images that have the concept(s)\n                        // which were predicted by the General model\n                        data: {\n                            concepts: [\n                                {\n                                    name: CONCEPT_NAME_2,\n                                    value: 0\n                                }\n                            ]\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post searches failed, status: " + response.status.description);\n        }\n\n        console.log("Found inputs:");\n        for (const hit of response.hits) {\n            console.log("\\tScore " + hit.score + " for " + hit.input.id);\n        }\n    }\n);')),(0,r.kt)(i.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,r.kt)(o.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the concepts we  \n    // we want to search by. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to search by your own concepts\n    static final String CONCEPT_NAME_1 = "cat";\n    static final String CONCEPT_NAME_2 = "dog";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        // Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n        // a "dog" concept.\n        MultiSearchResponse postSearchesResponse = stub.postSearches(\n            PostSearchesRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setQuery(\n                Query.newBuilder()\n                .addAnds(\n                    And.newBuilder().setInput( // Setting Input indicates we search for images that have the concept(s)\n                        // which we added to the input manually.\n                        Input.newBuilder().setData(\n                            Data.newBuilder().addConcepts(\n                                Concept.newBuilder()\n                                .setName(CONCEPT_NAME_1)\n                                .setValue(1f)\n                            )\n                        )\n                    )\n                )\n                .addAnds(\n                    And.newBuilder().setOutput( // Setting Output indicates we search for images that have the concept(s)\n                        // which were predicted by the General model.\n                        Output.newBuilder().setData(\n                            Data.newBuilder().addConcepts(\n                                Concept.newBuilder()\n                                .setName(CONCEPT_NAME_2)\n                                .setValue(0f)\n                            )\n                        )\n                    )\n                )\n            )\n            .build()\n        );\n\n        if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());\n        }\n\n        System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");\n        for (Hit hit : postSearchesResponse.getHitsList()) {\n            System.out.printf("\\tScore %.2f for %s\\n", hit.getScore(), hit.getInput().getId());\n        }\n\n    }\n\n}')),(0,r.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n# a "dog" concept.\n\ncurl -X POST \\\n  -H "Authorization: Key {api-key}" \\\n  -H "Content-Type: application/json" \\\n-d \'\n{\n    "query": {\n        "ands": [\n            {\n                "input":{\n                    "data": {\n                        "concepts": [\n                            {\n                                "name": "cat",\n                                "value": 1\n                            }\n                        ]\n                    }\n                }\n            },\n            {\n                "output": {\n                    "data": {\n                        "concepts": [\n                            {\n                                "name": "dog",\n                                "value": 0\n                            }\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n}\'\\\nhttps://api.clarifai.com/v2/searches\n')))))}m.isMDXComponent=!0}}]);