"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9452],{58215:function(n,e,t){var a=t(67294);e.Z=function(n){var e=n.children,t=n.hidden,o=n.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},e)}},26396:function(n,e,t){t.d(e,{Z:function(){return d}});var a=t(87462),o=t(67294),r=t(72389),s=t(79443);var i=function(){var n=(0,o.useContext)(s.Z);if(null==n)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return n},c=t(63616),l=t(86010),u="tabItem_vU9c";function p(n){var e,t,r,s=n.lazy,p=n.block,d=n.defaultValue,h=n.values,m=n.groupId,f=n.className,b=o.Children.map(n.children,(function(n){if((0,o.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=h?h:b.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),g=(0,c.lx)(_,(function(n,e){return n.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(e=null!=d?d:null==(t=b.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(r=b[0])?void 0:r.props.value;if(null!==v&&!_.some((function(n){return n.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+_.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),E=w.tabGroupChoices,T=w.setTabGroupChoices,N=(0,o.useState)(v),y=N[0],C=N[1],k=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=E[m];null!=A&&A!==y&&_.some((function(n){return n.value===A}))&&C(A)}var P=function(n){var e=n.currentTarget,t=k.indexOf(e),a=_[t].value;a!==y&&(I(e),C(a),null!=m&&T(m,a))},S=function(n){var e,t=null;switch(n.key){case"ArrowRight":var a=k.indexOf(n.currentTarget)+1;t=k[a]||k[0];break;case"ArrowLeft":var o=k.indexOf(n.currentTarget)-1;t=k[o]||k[k.length-1]}null==(e=t)||e.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},_.map((function(n){var e=n.value,t=n.label,r=n.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,key:e,ref:function(n){return k.push(n)},onKeyDown:S,onFocus:P,onClick:P},r,{className:(0,l.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":y===e})}),null!=t?t:e)}))),s?(0,o.cloneElement)(b.filter((function(n){return n.props.value===y}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},b.map((function(n,e){return(0,o.cloneElement)(n,{key:e,hidden:n.props.value!==y})}))))}function d(n){var e=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(e)},n))}},59205:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),s=t(26396),i=t(58215),c=t(19055),l=["components"],u={description:"Group or separate items in your dataset.",sidebar_position:2},p="Combine or Negate",d={unversionedId:"api-guide/search/combine-or-negate",id:"api-guide/search/combine-or-negate",title:"Combine or Negate",description:"Group or separate items in your dataset.",source:"@site/docs/api-guide/search/combine-or-negate.md",sourceDirName:"api-guide/search",slug:"/api-guide/search/combine-or-negate",permalink:"/api-guide/search/combine-or-negate",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Group or separate items in your dataset.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Search Overview",permalink:"/api-guide/search/rank-filter-combine-or-negate"},next:{title:"Filter",permalink:"/api-guide/search/filter"}},h=[],m={toc:h};function f(n){var e=n.components,t=(0,o.Z)(n,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"combine-or-negate"},"Combine or Negate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group or separate items in your dataset")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can also combine searches. Unlike our legacy search, in annotation search, ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Rank")," is a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"Annotation")," objects. Filtered annotations will be ANDed. "),(0,r.kt)("p",null,"When you combine both ",(0,r.kt)("inlineCode",{parentName:"p"},"Filter")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Rank"),", filter will be applied before ranking annotations. This is important because limiting the result set on large applications can speedup the overall query drastically when doing a ranking."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The initialization code used in the following example is outlined in detail on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################################\n# In this section, we set the user authentication, app ID, and the concepts we  \n# we want to search by. Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to search by your own concepts\nCONCEPT_ID_1 = 'cat'\nCONCEPT_ID_2 = 'dog'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\n# Here we search for images which we labeled with \"cat\" and for which the General prediction model does not find\n# a \"dog\" concept.\npost_annotations_searches_response = stub.PostAnnotationsSearches(\n    service_pb2.PostAnnotationsSearchesRequest(\n        user_app_id=userDataObject,  \n        searches = [\n            resources_pb2.Search(\n                query=resources_pb2.Query(\n                    filters=[\n                        resources_pb2.Filter(\n                            annotation=resources_pb2.Annotation(\n                                data=resources_pb2.Data(\n                                    concepts=[  # You can search by multiple concepts\n                                        resources_pb2.Concept(\n                                            id=CONCEPT_ID_1,  # You could search by concept Name as well\n                                            value=1  # Value of 0 will search for images that don't have the concept\n                                        )\n                                    ]\n                                )\n                            )\n                        )\n                    ],\n                    ranks=[\n                        resources_pb2.Rank(\n                            annotation=resources_pb2.Annotation(\n                                data=resources_pb2.Data(\n                                    concepts=[  # You can search by multiple concepts\n                                        resources_pb2.Concept(\n                                            id=CONCEPT_ID_2,  # You could search by concept Name as well\n                                            value=0  # Value of 0 will search for images that don't have the concept\n                                        )\n                                    ]\n                                )\n                            )\n                        )\n                    ]\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_annotations_searches_response.status.code != status_code_pb2.SUCCESS:\n    print(post_annotations_searches_response.status)    \n    raise Exception(\"Post searches failed, status: \" + post_annotations_searches_response.status.description)\n\nprint(\"Search result:\")\nfor hit in post_annotations_searches_response.hits:\n    print(\"\\tScore %.2f for annotation: %s off input: %s\" % (hit.score, hit.annotation.id, hit.input.id))")),(0,r.kt)(i.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},'\x3c!--index.html file--\x3e\n\n<script>\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the concepts we  \n    // we want to search by. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    const USER_ID = \'YOUR_USER_ID_HERE\';\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = \'YOUR_PAT_HERE\';\n    const APP_ID = \'YOUR_APP_ID_HERE\';\n    // Change these to search by your own concepts\n    const CONCEPT_ID_1 = \'cat\';\n    const CONCEPT_ID_2 = \'dog\';\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const raw = JSON.stringify({\n        "user_app_id": {\n            "user_id": USER_ID,\n            "app_id": APP_ID\n        },\n        "searches": [\n            {\n                "query": {\n                    "filters": [\n                        {\n                            "annotation": {\n                                "data": {\n                                    "concepts": [\n                                        {\n                                            "id": CONCEPT_ID_1,\n                                            "value": 1\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ],\n                    "ranks": [\n                        {\n                            "annotation": {\n                                "data": {\n                                    "concepts": [\n                                        {\n                                            "id": CONCEPT_ID_2,\n                                            "value": 1\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ]\n                }\n            }\n        ]\n    });\n\n    const requestOptions = {\n        method: \'POST\',\n        headers: {\n            \'Accept\': \'application/json\',\n            \'Authorization\': \'Key \' + PAT\n        },\n        body: raw\n    };\n\n    fetch(`https://api.clarifai.com/v2/searches`, requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log(\'error\', error));\n\n<\/script>')),(0,r.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the concepts we  \n// we want to search by. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to search by your own concepts\nconst CONCEPT_ID_1 = \'cat\';\nconst CONCEPT_ID_2 = \'dog\';\n\n/////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n/////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\n// Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n// a "dog" concept.\nstub.PostAnnotationsSearches(\n    {\n        user_app_id: {\n            user_id: USER_ID,\n            app_id: APP_ID\n        },\n\n        searches: [\n            {\n                query: {\n                    filters: [\n                        {\n                            annotation: {\n                                data: {\n                                    concepts: [  // You can search by multiple concepts\n                                        {\n                                            id: CONCEPT_ID_1,  // You could search by concept Name as well\n                                            value: 1  // Value of 0 will search for images that don\'t have the concept\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ],\n                    ranks: [\n                        {\n                            annotation: {\n                                data: {\n                                    concepts: [  // You can search by multiple concepts\n                                        {\n                                            id: CONCEPT_ID_2,  // You could search by concept Name as well\n                                            value: 0  // Value of 0 will search for images that don\'t have the concept\n                                        }\n                                    ]\n                                }\n                            }\n                        }\n                    ]\n                }\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n        console.log(response.status)\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post annotations searches failed, status: " + response.status.description);\n        }\n\n        console.log("Search result:");\n        for (const hit of response.hits) {\n            console.log("\\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);\n        }\n    }\n);')),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\n// Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n// a "dog" concept.\nMultiSearchResponse postAnnotationsSearchesResponse = stub.postAnnotationsSearches(\n    PostAnnotationsSearchesRequest.newBuilder().addSearches(\n        Search.newBuilder().setQuery(\n            Query.newBuilder()\n                .addFilters(\n                    Filter.newBuilder().setAnnotation(\n                        Annotation.newBuilder().setData(\n                                Data.newBuilder().addConcepts(  // You can search by multiple concepts.\n                                Concept.newBuilder()\n                                    .setId("cat")  // You could search by concept Name as well.\n                                    .setValue(1f)  // Value of 0 will search for images that don\'t have the concept.\n                            )\n                        )\n                    )\n                )\n                .addRanks(\n                Rank.newBuilder().setAnnotation(\n                    Annotation.newBuilder().setData(\n                            Data.newBuilder().addConcepts(  // You can search by multiple concepts.\n                            Concept.newBuilder()\n                                .setId("dog")  // You could search by concept Name as well.\n                                .setValue(1f)  // Value of 0 will search for images that don\'t have the concept.\n                        )\n                    )\n                )\n            )\n        )    \n    )\n    .build()\n);\n\nif (postAnnotationsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post annotations searches failed, status: " + postAnnotationsSearchesResponse.getStatus());\n}\n\nSystem.out.println("Found inputs " + postAnnotationsSearchesResponse.getHitsCount() + ":");\nfor (Hit hit : postAnnotationsSearchesResponse.getHitsList()) {\n    System.out.printf("\\tScore %.2f for annotation % of input %s\\n", hit.getScore(), hit.getAnnotation().getId(), hit.getInput().getId())\n}\n'))),(0,r.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n# a "dog" concept.\n\ncurl -X POST \\\n  -H "Authorization: Key {api-key}" \\\n  -H "Content-Type: application/json" \\\n-d \'\n{\n    "searches": [\n      {\n        "query": {\n          "filters": [\n            {\n              "annotation": {\n                "data": {\n                  "concepts": [\n                    {\n                      "id":"people",\n                      "value": 1\n                    }\n                  ]\n                }\n              }\n            }\n          ],\n          "ranks": [\n            {\n              "annotation": {\n                "data": {\n                  "concepts": [\n                    {\n                      "id":"people",\n                      "value": 1\n                    }\n                  ]\n                }\n              }\n            }\n          ]\n        }\n      }\n    ]\n}\'\\\nhttps://api.clarifai.com/v2/searches\n')))))}f.isMDXComponent=!0}}]);