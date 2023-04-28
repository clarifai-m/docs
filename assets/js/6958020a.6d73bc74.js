"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9452],{85162:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),o=t(86010);const r="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(87462),o=t(67294),r=t(86010),s=t(12466),i=t(76775),c=t(91980),l=t(67392),u=t(50012);function p(e){return function(e){var n;return(null==(n=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function d(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=d(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,l]=m({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,u.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),b=(()=>{const e=c??p;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),f(e)}),[l,f,r]),tabValues:r}}var b=t(72389);const _="tabList__CuJ",g="tabItem_LNqP";function E(e){let{className:n,block:t,selectedValue:i,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==i&&(p(n),c(a))},h=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}null==(n=t)||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n)},l.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>u.push(e),onKeyDown:h,onClick:d},s,{className:(0,r.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":i===n})}),t??n)})))}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function C(e){const n=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",_)},o.createElement(E,(0,a.Z)({},e,n)),o.createElement(w,(0,a.Z)({},e,n)))}function T(e){const n=(0,b.Z)();return o.createElement(C,(0,a.Z)({key:String(n)},e))}},4960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=t(87462),o=(t(67294),t(3905)),r=t(74866),s=t(85162),i=t(90814);const c={description:"Group or separate items in your dataset.",sidebar_position:2},l="Combine or Negate",u={unversionedId:"api-guide/search/combine-or-negate",id:"api-guide/search/combine-or-negate",title:"Combine or Negate",description:"Group or separate items in your dataset.",source:"@site/docs/api-guide/search/combine-or-negate.md",sourceDirName:"api-guide/search",slug:"/api-guide/search/combine-or-negate",permalink:"/api-guide/search/combine-or-negate",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Group or separate items in your dataset.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Search Overview",permalink:"/api-guide/search/rank-filter-combine-or-negate"},next:{title:"Filter",permalink:"/api-guide/search/filter"}},p={},d=[],h={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"combine-or-negate"},"Combine or Negate"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Group or separate items in your dataset")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can also combine searches. Unlike our legacy search, in annotation search, ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Rank")," is a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Annotation")," objects. Filtered annotations will be ANDed. "),(0,o.kt)("p",null,"When you combine both ",(0,o.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Rank"),", filter will be applied before ranking annotations. This is important because limiting the result set on large applications can speedup the overall query drastically when doing a ranking."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The initialization code used in the following example is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page."))),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################################\n# In this section, we set the user authentication, app ID, and the concepts we  \n# we want to search by. Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to search by your own concepts\nCONCEPT_ID_1 = 'cat'\nCONCEPT_ID_2 = 'dog'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\n# Here we search for images which we labeled with \"cat\" and for which the General prediction model does not find\n# a \"dog\" concept.\npost_annotations_searches_response = stub.PostAnnotationsSearches(\n    service_pb2.PostAnnotationsSearchesRequest(\n        user_app_id=userDataObject,  \n        searches = [\n            resources_pb2.Search(\n                query=resources_pb2.Query(\n                    filters=[\n                        resources_pb2.Filter(\n                            annotation=resources_pb2.Annotation(\n                                data=resources_pb2.Data(\n                                    concepts=[  # You can search by multiple concepts\n                                        resources_pb2.Concept(\n                                            id=CONCEPT_ID_1,  # You could search by concept Name as well\n                                            value=1  # Value of 0 will search for images that don't have the concept\n                                        )\n                                    ]\n                                )\n                            )\n                        )\n                    ],\n                    ranks=[\n                        resources_pb2.Rank(\n                            annotation=resources_pb2.Annotation(\n                                data=resources_pb2.Data(\n                                    concepts=[  # You can search by multiple concepts\n                                        resources_pb2.Concept(\n                                            id=CONCEPT_ID_2,  # You could search by concept Name as well\n                                            value=0  # Value of 0 will search for images that don't have the concept\n                                        )\n                                    ]\n                                )\n                            )\n                        )\n                    ]\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_annotations_searches_response.status.code != status_code_pb2.SUCCESS:\n    print(post_annotations_searches_response.status)    \n    raise Exception(\"Post searches failed, status: \" + post_annotations_searches_response.status.description)\n\nprint(\"Search result:\")\nfor hit in post_annotations_searches_response.hits:\n    print(\"\\tScore %.2f for annotation: %s off input: %s\" % (hit.score, hit.annotation.id, hit.input.id))")),(0,o.kt)(s.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},'\x3c!--index.html file--\x3e\n\n<script>\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the concepts we  \n    // we want to search by. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    const USER_ID = \'YOUR_USER_ID_HERE\';\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = \'YOUR_PAT_HERE\';\n    const APP_ID = \'YOUR_APP_ID_HERE\';\n    // Change these to search by your own concepts\n    const CONCEPT_ID_1 = \'cat\';\n    const CONCEPT_ID_2 = \'dog\';\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const raw = JSON.stringify({\n        "user_app_id": {\n            "user_id": USER_ID,\n            "app_id": APP_ID\n        },\n        "searches": [\n            {\n                "query": {\n                    "filters": [\n                        {\n                            "annotation": {\n                                "data": {\n                                    "concepts": [\n                                        {\n                                            "id": CONCEPT_ID_1,\n                                            "value": 1\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ],\n                    "ranks": [\n                        {\n                            "annotation": {\n                                "data": {\n                                    "concepts": [\n                                        {\n                                            "id": CONCEPT_ID_2,\n                                            "value": 0\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ]\n                }\n            }\n        ]\n    });\n\n    const requestOptions = {\n        method: \'POST\',\n        headers: {\n            \'Accept\': \'application/json\',\n            \'Authorization\': \'Key \' + PAT\n        },\n        body: raw\n    };\n\n    fetch(`https://api.clarifai.com/v2/annotations/searches`, requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log(\'error\', error));\n\n<\/script>')),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the concepts we  \n// we want to search by. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to search by your own concepts\nconst CONCEPT_ID_1 = \'cat\';\nconst CONCEPT_ID_2 = \'dog\';\n\n/////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n/////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\n// Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n// a "dog" concept.\nstub.PostAnnotationsSearches(\n    {\n        user_app_id: {\n            user_id: USER_ID,\n            app_id: APP_ID\n        },\n\n        searches: [\n            {\n                query: {\n                    filters: [\n                        {\n                            annotation: {\n                                data: {\n                                    concepts: [  // You can search by multiple concepts\n                                        {\n                                            id: CONCEPT_ID_1,  // You could search by concept Name as well\n                                            value: 1  // Value of 0 will search for images that don\'t have the concept\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ],\n                    ranks: [\n                        {\n                            annotation: {\n                                data: {\n                                    concepts: [  // You can search by multiple concepts\n                                        {\n                                            id: CONCEPT_ID_2,  // You could search by concept Name as well\n                                            value: 0  // Value of 0 will search for images that don\'t have the concept\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ]\n                }\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n        console.log(response.status)\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post annotations searches failed, status: " + response.status.description);\n        }\n\n        console.log("Search result:");\n        for (const hit of response.hits) {\n            console.log("\\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);\n        }\n    }\n);')),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the concepts we  \n    // we want to search by. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to search by your own concepts\n    static final String CONCEPT_ID_1 = "cat";\n    static final String CONCEPT_ID_2 = "dog";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        // Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n        // a "dog" concept.\n        MultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(\n            PostAnnotationsSearchesRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .addSearches(\n                Search.newBuilder().setQuery(\n                    Query.newBuilder()\n                    .addFilters(\n                        Filter.newBuilder().setAnnotation(\n                            Annotation.newBuilder().setData(\n                                Data.newBuilder().addConcepts( // You can search by multiple concepts\n                                    Concept.newBuilder()\n                                    .setId(CONCEPT_ID_1) // You could search by concept Name as well\n                                    .setValue(1f) // Value of 0 will search for images that don\'t have the concept\n                                )\n                            )\n                        )\n                    )\n                    .addRanks(\n                        Rank.newBuilder().setAnnotation(\n                            Annotation.newBuilder().setData(\n                                Data.newBuilder().addConcepts( // You can search by multiple concepts\n                                    Concept.newBuilder()\n                                    .setId(CONCEPT_ID_2) // You could search by concept Name as well\n                                    .setValue(1f) // Value of 0 will search for images that don\'t have the concept\n                                )\n                            )\n                        )\n                    )\n                )\n            )\n            .build()\n        );\n\n        if (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());\n        }\n\n        System.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");\n        for (Hit hit: postAnnotationsSearchesResponse.getHitsList()) {\n            System.out.printf("\\tScore %.2f for annotation %s of input %s\\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId());\n        }\n\n    }\n\n}')),(0,o.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},'# Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n# a "dog" concept.\n\ncurl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations/searches" \\\n  -H "Authorization: Key YOUR_PAT_HERE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "searches": [\n      {\n        "query": {\n          "filters": [\n            {\n              "annotation": {\n                "data": {\n                  "concepts": [\n                    {\n                      "id":"cat",\n                      "value": 1\n                    }\n                  ]\n                }\n              }\n            }\n          ],\n          "ranks": [\n            {\n              "annotation": {\n                "data": {\n                  "concepts": [\n                    {\n                      "id":"dog",\n                      "value": 0\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      }\n    ]\n  }\'\n'))))}m.isMDXComponent=!0}}]);