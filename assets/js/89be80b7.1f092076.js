"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5579],{85162:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(67294),o=t(34334),i="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,s),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return _}});var a=t(83117),o=t(67294),i=t(34334),s=t(72389),r=t(67392),c=t(7094),l=t(12466),p="tabList__CuJ",u="tabItem_LNqP";function d(e){var n,t;const{lazy:s,block:d,defaultValue:_,values:h,groupId:E,className:C}=e,T=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),m=null!=h?h:T.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),I=(0,r.l)(m,((e,n)=>e.value===n.value));if(I.length>0)throw new Error('Docusaurus error: Duplicate values "'+I.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===_?_:null!=(n=null!=_?_:null==(t=T.find((e=>e.props.default)))?void 0:t.props.value)?n:T[0].props.value;if(null!==f&&!m.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+m.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:g}=(0,c.U)(),[P,R]=(0,o.useState)(f),y=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=E){const e=b[E];null!=e&&e!==P&&m.some((n=>n.value===e))&&R(e)}const D=e=>{const n=e.currentTarget,t=y.indexOf(n),a=m[t].value;a!==P&&(O(n),R(a),null!=E&&g(E,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=y.indexOf(e.currentTarget)+1;t=null!=(a=y[n])?a:y[0];break}case"ArrowLeft":{var o;const n=y.indexOf(e.currentTarget)-1;t=null!=(o=y[n])?o:y[y.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},C)},m.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===n?0:-1,"aria-selected":P===n,key:n,ref:e=>y.push(e),onKeyDown:N,onFocus:D,onClick:D},s,{className:(0,i.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":P===n})}),null!=t?t:n)}))),s?(0,o.cloneElement)(T.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},T.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==P})))))}function _(e){const n=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},30991:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var a=t(83117),o=(t(67294),t(3905)),i=t(65488),s=t(85162),r=t(66066);const c={description:"Connect the knowledge gained by different models.",sidebar_position:4},l="Knowledge Graph",p={unversionedId:"api-guide/concepts/knowledge_graph",id:"api-guide/concepts/knowledge_graph",title:"Knowledge Graph",description:"Connect the knowledge gained by different models.",source:"@site/docs/api-guide/concepts/knowledge_graph.md",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/knowledge_graph",permalink:"/api-guide/concepts/knowledge_graph",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Connect the knowledge gained by different models.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Search by Concept",permalink:"/api-guide/concepts/search-by-concept"},next:{title:"Labeling Your Data",permalink:"/api-guide/annotate/"}},u={},d=[{value:"Create Relations",id:"create-relations",level:2},{value:"List Existing Relations",id:"list-existing-relations",level:2},{value:"Delete Relations",id:"delete-relations",level:2}],_={toc:d};function h(e){let{components:n,...c}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"knowledge-graph"},"Knowledge Graph"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect the knowledge gained by different models")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(78373).Z,width:"936",height:"448"})),(0,o.kt)("p",null,"The Knowledge Graph uses Clarifai's concept mapping model to establish a hierarchical relationship between your concepts."),(0,o.kt)("p",null,"It uses three different ",(0,o.kt)("em",{parentName:"p"},"predicates")," to organize your concepts: hypernyms, hyponyms, and synonyms."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hyponym")," \u2014 represents an 'is a kind of' relation. For example, the relationship described as 'honey' ","(","subject",")",", 'hyponym' ","(","predicate",")",", 'food' ","(","object",")"," is more easily read as 'honey' 'is a kind of' 'food'."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hypernym")," \u2014 is the opposite of 'hyponym'. When you add the relationship, the opposite will automatically appear in your queries. An 'hypernym' can be read as 'is a parent of'. For example, 'food' ","(","subject",")",", 'hypernym' ","(","predicate",")",", 'honey' ","(","object",")"," is more easily read as 'food' is a parent of 'honey'."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Synonym"),' \u2014 defines two concepts that essentially mean the same thing. This is more like an "is" relationship. For example, a \'synonym\' relationship could be "puppy" is "pup". The reverse is also true if the former is added; so, "pup" is "puppy" will appear in queries as well.'),(0,o.kt)("h2",{id:"create-relations"},"Create Relations"),(0,o.kt)("p",null,"To create a relation between two concepts, you first have to create them in your custom model. See the  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/concepts/create-get-update/"},"Concepts page")," on how to do that programatically."),(0,o.kt)("p",null,"Each relation should have a specified predicate, which can be ",(0,o.kt)("em",{parentName:"p"},"hyponym"),", ",(0,o.kt)("em",{parentName:"p"},"hypernym"),", or ",(0,o.kt)("em",{parentName:"p"},"synonym"),"."),(0,o.kt)("p",null,"Below is an example of how to create a relation between two concepts. "),(0,o.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, subject concept ID, \n# object concept ID, and predicate. Change these strings to run your own example.\n###################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever relations you want to create\nSUBJECT_CONCEPT_ID = 'honey'\nOBJECT_CONCEPT_ID = 'food'\nPREDICATE = \"hypernym\" # This can be hypernym, hyponym, or synonym\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\npost_concept_relation_response = stub.PostConceptRelations(\n    service_pb2.PostConceptRelationsRequest(\n        user_app_id=resources_pb2.UserAppIDSet(\n            user_id=USER_ID,\n            app_id=APP_ID\n        ),\n        concept_id=SUBJECT_CONCEPT_ID,\n        concept_relations=[\n            resources_pb2.ConceptRelation(\n                object_concept=resources_pb2.Concept(id=OBJECT_CONCEPT_ID),\n                predicate=PREDICATE\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_concept_relation_response.status.code != status_code_pb2.SUCCESS:\n    print(post_concept_relation_response.status)\n    raise Exception(\"Post concept relation failed, status: \" + post_concept_relation_response.status.description)\n    \nprint(post_concept_relation_response)")),(0,o.kt)(s.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},"\x3c!--index.html file--\x3e\n\n<script>\n    ////////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, subject concept ID, \n    // object concept ID, and predicate. Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////////\n\n    const USER_ID = 'YOUR_USER_ID_HERE';\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = 'YOUR_PAT_HERE';\n    const APP_ID = 'YOUR_APP_ID_HERE';\n    // Change these to whatever relations you want to create\n    const SUBJECT_CONCEPT_ID = 'honey';\n    const OBJECT_CONCEPT_ID = 'food';\n    const PREDICATE = \"hypernym\"; // This can be hypernym, hyponym, or synonym\n\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const raw = JSON.stringify({\n        \"user_app_id\": {\n            \"user_id\": USER_ID,\n            \"app_id\": APP_ID\n        },\n        \"concept_relations\": [\n            {\n                \"object_concept\": {\n                    \"id\": OBJECT_CONCEPT_ID\n                },\n                \"predicate\": PREDICATE\n            }\n        ]\n    });\n\n    const requestOptions = {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Key ' + PAT\n        },\n        body: raw\n    };\n\n    fetch(\"https://api.clarifai.com/v2/users/me/apps/\" + APP_ID + \"/concepts/\" + SUBJECT_CONCEPT_ID + \"/relations\", requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n<\/script>")),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n////////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, subject concept ID,\n// object concept ID, and predicate. Change these strings to run your own example.\n////////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to whatever relations you want to create\nconst SUBJECT_CONCEPT_ID = \'honey\';\nconst OBJECT_CONCEPT_ID = \'food\';\nconst PREDICATE = "hypernym"; // This can be hypernym, hyponym, or synonym.\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.PostConceptRelations(\n    {\n        user_app_id: {\n            "user_id": USER_ID,\n            "app_id": APP_ID\n        },\n        concept_id: SUBJECT_CONCEPT_ID,\n        concept_relations: [\n            {\n                object_concept: {\n                    id: OBJECT_CONCEPT_ID,\n                },\n                predicate: PREDICATE\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Create concept relations failed, status: " + response.status.description);\n        }\n    }\n);')),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, subject concept ID, \n    // object concept ID, and predicate. Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\t\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to whatever relations you want to create\n    static final String SUBJECT_CONCEPT_ID = "honey";\n    static final String OBJECT_CONCEPT_ID = "food";\n    static final String PREDICATE = "hypernym"; // This can be hypernym, hyponym, or synonym\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\t\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        MultiConceptRelationResponse postConceptRelationsResponse = stub.postConceptRelations(\n            PostConceptRelationsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())\n            .setConceptId(SUBJECT_CONCEPT_ID)\n            .addConceptRelations(\n                ConceptRelation.newBuilder()\n                .setObjectConcept(Concept.newBuilder().setId(OBJECT_CONCEPT_ID).build())\n                .setPredicate(PREDICATE).build())\n            .build()\n        );\n\n        if (postConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Post concept relations failed, status: " + postConceptRelationsResponse.getStatus());\n        }\n\n        System.out.println(postConceptRelationsResponse);\n\n    }\n\n}')),(0,o.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_SUBJECT_CONCEPT_ID}/relations\' \\\n    -H \'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}\' \\\n    -H \'Content-Type: application/json\' \\\n    --data-raw \'{\n        "concept_relations": [\n            {\n                "object_concept": {\n                    "id": "{YOUR_OBJECT_CONCEPT_ID}"\n                },\n                "predicate": "hypernym"\n            }\n        ]\n    }\'\n')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Output Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "0d0a5ec5df14d62a7d660f392ce26727"\n}\nconcept_relations {\n  id: "2d794e5ede534500b4ac7da44ef570ee"\n  subject_concept {\n    id: "honey"\n    name: "honey"\n    value: 1.0\n    created_at {\n      seconds: 1643976334\n      nanos: 237961000\n    }\n    language: "en"\n    app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n    visibility {\n      gettable: PRIVATE\n    }\n    user_id: "e5y2lteoz3s3iy"\n  }\n  object_concept {\n    id: "food"\n    name: "food"\n    value: 1.0\n    created_at {\n      seconds: 1643976326\n      nanos: 123719000\n    }\n    language: "en"\n    app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n    visibility {\n      gettable: PRIVATE\n    }\n    user_id: "ei2leoz3s3iy"\n  }\n  predicate: "hypernym"\n  visibility {\n    gettable: PRIVATE\n  }\n}\n'))),(0,o.kt)("h2",{id:"list-existing-relations"},"List Existing Relations"),(0,o.kt)("p",null,"Below is an example of how to list existing relations between concepts. "),(0,o.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},"######################################################################################\n# In this section, we set the user authentication, app ID, concept ID, and predicate. \n# Change these strings to run your own example.\n######################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever concept you want to list its relations\nCONCEPT_ID = 'honey'\nPREDICATE = \"hypernym\" # This is optional. If skipped, all concept's relations will be returned\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nlist_concept_relation_response = stub.ListConceptRelations(\n    service_pb2.ListConceptRelationsRequest(\n        user_app_id=resources_pb2.UserAppIDSet(\n            user_id=USER_ID,\n            app_id=APP_ID\n        ),\n        concept_id=CONCEPT_ID,\n        predicate=PREDICATE  \n    ),\n    metadata=metadata\n)\n\nif list_concept_relation_response.status.code != status_code_pb2.SUCCESS:\n    print(list_concept_relation_response.status)\n    raise Exception(\"List concept relation failed, status: \" + list_concept_relation_response.status.description)\n\nfor relation in list_concept_relation_response.concept_relations:\n    print(relation) \n")),(0,o.kt)(s.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},"\x3c!--index.html file--\x3e\n\n<script>\n    ////////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, concept ID, and predicate.\n    // Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////////\n\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = 'YOUR_PAT_HERE';\n    const APP_ID = 'YOUR_APP_ID_HERE';\n    // Change these to whatever concept you want to list its relations\n    CONCEPT_ID = 'honey';\n    PREDICATE = \"hypernym\"; //  This is optional. If skipped, all concept's relations will be returned\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const requestOptions = {\n        method: 'GET',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Key ' + PAT\n        },\n    };\n\n    fetch(\"https://api.clarifai.com/v2/users/me/apps/\" + APP_ID + \"/concepts/\" + CONCEPT_ID + \"/relations?predicate=\" + PREDICATE, requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n<\/script>")),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, concept ID, and predicate.\n// Change these strings to run your own example.\n////////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to whatever concept you want to list its relations\nconst CONCEPT_ID = \'honey\';\nconst PREDICATE = "hypernym"; // This is optional. If skipped, all concept\'s relations will be returned\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.ListConceptRelations(\n    {\n        user_app_id: {\n            "user_id": USER_ID,\n            "app_id": APP_ID\n        },\n        concept_id: CONCEPT_ID,\n        predicate: PREDICATE\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("List concept relations failed, status: " + response.status.description);\n        }\n\n        for (const relation of response.concept_relations) {\n            console.log(relation);\n        }\n    }\n);')),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, concept ID, and predicate. \n    // Change these strings to run your own example.\n    ////////////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\t\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to whatever concept you want to list its relations\n    static final String CONCEPT_ID = "honey";\n    static final String PREDICATE = "hypernym"; // This is optional. If skipped, all concept\'s relations will be returned\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\t\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        MultiConceptRelationResponse listConceptRelationsResponse = stub.listConceptRelations(\n            ListConceptRelationsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())\n            .setConceptId(CONCEPT_ID)\n            .setPredicate(PREDICATE)\n            .build()\n        );\n\n        if (listConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("List concept relations failed, status: " + listConceptRelationsResponse.getStatus());\n        }\n\n        for (ConceptRelation relation: listConceptRelationsResponse.getConceptRelationsList()) {\n            System.out.println(relation);\n        }\n\n    }\n\n}')),(0,o.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Setting the predicate GET parameter is optional. If skipped, all concept's relations will be returned.\ncurl -X GET 'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_CONCEPT_ID}/relations?predicate=hypernym' \\\n    -H 'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}' \\\n    -H 'Content-Type: application/json'\n")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Output Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'id: "2d794e5ede534500b4ac7da44ef570ee"\nsubject_concept {\n  id: "honey"\n  name: "honey"\n  value: 1.0\n  created_at {\n    seconds: 1643976334\n    nanos: 237961000\n  }\n  language: "en"\n  app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n  visibility {\n    gettable: PRIVATE\n  }\n  user_id: "ei2leoz3s3iy"\n}\nobject_concept {\n  id: "food"\n  name: "food"\n  value: 1.0\n  created_at {\n    seconds: 1643976326\n    nanos: 123719000\n  }\n  language: "en"\n  app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n  visibility {\n    gettable: PRIVATE\n  }\n  user_id: "ei2leoz3s3iy"\n}\npredicate: "hypernym"\nvisibility {\n  gettable: PRIVATE\n}\n'))),(0,o.kt)("h2",{id:"delete-relations"},"Delete Relations"),(0,o.kt)("p",null,"Below is an example of how to delete relations between concepts. "),(0,o.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONCEPT_RELATION_IDS"),", log in to the Portal and access the relations details of your concept. Then, inspect the network activity under your browser's Network Tab. The IDs are under the ",(0,o.kt)("inlineCode",{parentName:"p"},"relations")," category. ")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, object concept ID, and\n# concept relation IDs. Change these strings to run your own example.\n####################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever relations you want to delete\nOBJECT_CONCEPT_ID = 'YOUR_OBJECT_CONCEPT_ID_HERE'\nCONCEPT_RELATION_IDS = ['0d9b0acb10fb4dac9a9d60a149d8fc5c','f5acf9c2a76143d78daf5f984693c52c']\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\ndelete_concept_relation_response = stub.DeleteConceptRelations(\n    service_pb2.DeleteConceptRelationsRequest(\n        user_app_id=resources_pb2.UserAppIDSet(\n            user_id=USER_ID,\n            app_id=APP_ID\n        ),\n        concept_id=OBJECT_CONCEPT_ID,\n        ids=CONCEPT_RELATION_IDS\n    ),\n    metadata=metadata\n)\n\nif delete_concept_relation_response.status.code != status_code_pb2.SUCCESS:\n    print(delete_concept_relation_response.status)\n    raise Exception(\"Delete concept relation failed, status: \" + delete_concept_relation_response.status.description)\n\n")),(0,o.kt)(s.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},"\x3c!--index.html file--\x3e\n\n<script>\n    ////////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, object concept ID, and\n    // concept relation IDs. Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////////\n\n     // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = 'YOUR_PAT_HERE';\n    const APP_ID = 'YOUR_APP_ID_HERE';\n    // Change these to whatever relations you want to delete\n    const OBJECT_CONCEPT_ID = 'YOUR_OBJECT_CONCEPT_ID_HERE';\n    const CONCEPT_RELATION_IDS = ['0d9b0acb10fb4dac9a9d60a149d8fc5c','f5acf9c2a76143d78daf5f984693c52c'];\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const raw = JSON.stringify({\n        \"ids\": CONCEPT_RELATION_IDS\n    });\n\n    const requestOptions = {\n        method: 'DELETE',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Key ' + PAT\n        },\n        body: raw\n    };\n\n    fetch(\"https://api.clarifai.com/v2/users/me/apps/\" + APP_ID + \"/concepts/\" + OBJECT_CONCEPT_ID + \"/relations\", requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n<\/script>")),(0,o.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-javascript",mdxType:"CodeBlock"},"//index.js file\n\n//////////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, object concept ID, and\n// concept relation IDs. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = 'YOUR_USER_ID_HERE';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = 'YOUR_PAT_HERE';\nconst APP_ID = 'YOUR_APP_ID_HERE';\n// Change these to whatever relations you want to delete\nconst OBJECT_CONCEPT_ID = 'YOUR_OBJECT_CONCEPT_ID_HERE';\nconst CONCEPT_RELATION_IDS = ['0d9b0acb10fb4dac9a9d60a149d8fc5c','f5acf9c2a76143d78daf5f984693c52c'];\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require(\"clarifai-nodejs-grpc\");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set(\"authorization\", \"Key \" + PAT);\n\nstub.DeleteConceptRelations(\n    {\n        user_app_id: {\n            \"user_id\": USER_ID,\n            \"app_id\": APP_ID\n        },\n        concept_id: OBJECT_CONCEPT_ID,\n        ids: CONCEPT_RELATION_IDS        \n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error(\"Delete concept relations failed, status: \" + response.status.description);\n        }\n    }\n);")),(0,o.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.status.BaseResponse;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    /////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, object concept ID, and\n    // concept relation IDs. Change these strings to run your own example.\n    /////////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\t\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to whatever relations you want to delete\n    static final String OBJECT_CONCEPT_ID = "YOUR_OBJECT_CONCEPT_ID_HERE";\n    static final String CONCEPT_RELATION_ID_1 = "0d9b0acb10fb4dac9a9d60a149d8fc5c";\n    static final String CONCEPT_RELATION_ID_2 = "f5acf9c2a76143d78daf5f984693c52c";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\t\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        BaseResponse deleteConceptRelationsResponse = stub.deleteConceptRelations(\n            DeleteConceptRelationsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID).build())\n            .addIds(CONCEPT_RELATION_ID_1)\n            .addIds(CONCEPT_RELATION_ID_2)\n            .setConceptId(OBJECT_CONCEPT_ID)\n            .build()\n        );\n\n        if (deleteConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Delete concept relations failed, status: " + deleteConceptRelationsResponse.getStatus());\n        }\n\n    }\n\n}')),(0,o.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_OBJECT_CONCEPT_ID}/relations' \\\n    -H 'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}' \\\n    -H 'Content-Type: application/json' \\\n    --data-raw '{\n        \"ids\": [\n            \"{YOUR_CONCEPT_RELATION_ID}\"\n        ]\n    }'\n")))))}h.isMDXComponent=!0},78373:function(e,n,t){n.Z=t.p+"assets/images/kg6-845a036f5276eb9b39c7349452d1f495.png"}}]);