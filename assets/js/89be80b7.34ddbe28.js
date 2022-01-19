"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5579],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,_=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(_,s(s({ref:t},c),{},{components:n})):a.createElement(_,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),o=n(7294),r=n(2389),s=n(9443);var i=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=n(3616),l=n(6010),c="tabItem_vU9c";function u(e){var t,n,r,s=e.lazy,u=e.block,d=e.defaultValue,m=e.values,_=e.groupId,h=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,p.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=i(),v=C.tabGroupChoices,O=C.setTabGroupChoices,T=(0,o.useState)(g),R=T[0],E=T[1],I=[],k=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=_){var w=v[_];null!=w&&w!==R&&y.some((function(e){return e.value===w}))&&E(w)}var N=function(e){var t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==R&&(k(t),E(a),null!=_&&O(_,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var o=I.indexOf(e.currentTarget)-1;n=I[o]||I[I.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},y.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:N,onClick:N},r,{className:(0,l.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),s?(0,o.cloneElement)(f.filter((function(e){return e.props.value===R}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function d(e){var t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},5970:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return _}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(6396),i=n(8215),p=["components"],l={description:"Connect the knowledge gained by different models.",sidebar_position:4},c="Knowledge Graph",u={unversionedId:"api-guide/concepts/knowledge_graph",id:"api-guide/concepts/knowledge_graph",title:"Knowledge Graph",description:"Connect the knowledge gained by different models.",source:"@site/docs/api-guide/concepts/knowledge_graph.md",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/knowledge_graph",permalink:"/api-guide/concepts/knowledge_graph",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/concepts/knowledge_graph.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Connect the knowledge gained by different models.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Search by Concept",permalink:"/api-guide/concepts/search-by-concept"},next:{title:"Labeling Your Data",permalink:"/api-guide/annotate/"}},d=[{value:"Create",id:"create",children:[],level:2},{value:"List existing relations",id:"list-existing-relations",children:[],level:2},{value:"Delete",id:"delete",children:[],level:2}],m={toc:d};function _(e){var t=e.components,l=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"knowledge-graph"},"Knowledge Graph"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4107).Z})),(0,r.kt)("p",null,"The Knowledge Graph uses Clarifai's concept mapping model to establish a hierarchical relationship between your concepts. and to uses three different ",(0,r.kt)("em",{parentName:"p"},"predicates")," to organize your concepts: hypernyms, hyponyms, and synonyms."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hyponym")," represents an 'is a kind of' relation. The following relationship: 'honey' ","(","subject",")",", 'hyponym' ","(","predicate",")",", 'food' ","(","object",")"," is more easily be read as 'honey' 'is a kind of' 'food'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hypernym")," is the opposite of 'hyponym'. When you add one of the relationships the opposite will automatically appear for you in queries. The 'hypernym' can be read as 'is a parent of' so: 'food' ","(","subject",")",", 'hypernym' ","(","predicate",")",", 'honey' ","(","object",")"," can more easily be read as:'food' is a parent of 'honey'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Synonym"),' The \'synonym\' relation defines two concepts that essential mean the same thing. This is more like a "is" relationship. So for example a \'synonym\' relationship could be: "puppy" is "pup" The reverse is also true once the former is added so: "pup" is "puppy" will appear in queries as well.'),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"To create a relation between two concepts, you first have to create them in your custom model. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/concepts/concepts"},"the Concepts page")," on how to do that programatically."),(0,r.kt)("p",null,"Each relation has to have specified a predicate, which can be ",(0,r.kt)("em",{parentName:"p"},"hyponym"),", ",(0,r.kt)("em",{parentName:"p"},"hypernym"),", or ",(0,r.kt)("em",{parentName:"p"},"synonym"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\npost_concept_relation_response = stub.PostConceptRelations(\n    service_pb2.PostConceptRelationsRequest(\n        user_app_id=resources_pb2.UserAppIDSet(\n            app_id="{YOUR_APP_ID}"\n        ),\n        concept_id="{YOUR_SUBJECT_CONCEPT_ID}",\n        concept_relations=[\n            resources_pb2.ConceptRelation(\n                object_concept=resources_pb2.Concept(id="{YOUR_OBJECT_CONCEPT_ID}"),\n                predicate="hypernym" # This can be hypernym, hyponym, or synonym.\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_concept_relation_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(post_concept_relation_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(post_concept_relation_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(post_concept_relation_response.outputs[0].status.details))\n    raise Exception("Post concept relation failed, status: " + post_concept_relation_response.status.description)\n'))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptRelationResponse postConceptRelationsResponse = stub.postConceptRelations(\n    PostConceptRelationsRequest.newBuilder()\n        .setUserAppId(\n            UserAppIDSet.newBuilder()\n                .setAppId("{YOUR_APP_ID}")\n                .build()\n        )\n        .setConceptId("{YOUR_SUBJECT_CONCEPT_ID}")\n        .addConceptRelations(\n            ConceptRelation.newBuilder()\n                .setObjectConcept(Concept.newBuilder().setId("{YOUR_OBJECT_CONCEPT_ID}").build())\n                .setPredicate("hypernym").build()) // This can be hypernym, hypnonym, or synonym.\n        .build()\n);\n\nif (postConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Post concept relations failed, status: " + postConceptRelationsResponse.getStatus());\n}\n'))),(0,r.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostConceptRelations(\n    {\n        user_app_id: {\n            app_id: "{YOUR_APP_ID}"\n        },\n        concept_id: "{YOUR_SUBJECT_CONCEPT_ID}",\n        concept_relations: [\n            {\n                object_concept: {\n                    id: "{YOUR_OBJECT_CONCEPT_ID}",\n                },\n                predicate: "hypernym" // This can be hypernym, hyponym, or synonym.\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Create concept relations failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,r.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_SUBJECT_CONCEPT_ID}/relations\' \\\n    -H \'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}\' \\\n    -H \'Content-Type: application/json\' \\\n    --data-raw \'{\n        "concept_relations": [\n            {\n                "object_concept": {\n                    "id": "{YOUR_OBJECT_CONCEPT_ID}"\n                },\n                "predicate": "hypernym"\n            }\n        ]\n    }\'\n'))),(0,r.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const appId = \'{YOUR_APP_ID}\'\nconst subjectConceptId = \'{YOUR_SUBJECT_CONCEPT_ID}\'\n\nconst raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concept_relations": [\n      {\n          "object_concept": {\n              "id": "{YOUR_OBJECT_CONCEPT_ID}"\n          },\n          "predicate": "hypernym"\n      }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${subjectConceptId}/relations`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,r.kt)("h2",{id:"list-existing-relations"},"List existing relations"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nlist_concept_relation_response = stub.ListConceptRelations(\n    service_pb2.ListConceptRelationsRequest(\n        user_app_id=resources_pb2.UserAppIDSet(\n            app_id="{YOUR_APP_ID}"\n        ),\n        concept_id="{YOUR_CONCEPT_ID}",\n        predicate="hypernym"  # This is optional. If skipped, all concept\'s relations will be returned.\n    ),\n    metadata=metadata\n)\n\nif list_concept_relation_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(list_concept_relation_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(list_concept_relation_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(list_concept_relation_response.outputs[0].status.details))\n    raise Exception("List concept relation failed, status: " + list_concept_relation_response.status.description)\n\nfor relation in list_concept_relation_response.concept_relations:\n    print(relation)\n'))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptRelationResponse listConceptRelationsResponse = stub.listConceptRelations(\n    ListConceptRelationsRequest.newBuilder()\n        .setUserAppId(\n            UserAppIDSet.newBuilder()\n                .setAppId("{YOUR_APP_ID}")\n                .build()\n        )\n        .setConceptId("{YOUR_CONCEPT_ID}")\n        .setPredicate("hypernym")  // This is optional. If skipped, all concept\'s relations will be returned.\n        .build()\n);\n\n\nif (listConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("List concept relations failed, status: " + listConceptRelationsResponse.getStatus());\n}\n\nfor (ConceptRelation relation : listConceptRelationsResponse.getConceptRelationsList()) {\n    System.out.println(relation);\n}\n'))),(0,r.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.ListConceptRelations(\n    {\n        user_app_id: {\n            app_id: "{YOUR_APP_ID}"\n        },\n        concept_id: "{YOUR_CONCEPT_ID}",\n        predicate: "hypernym" // This is optional. If skipped, all concept\'s relations will be returned.\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("List concept relations failed, status: " + response.status.description);\n        }\n\n        for (const relation of response.concept_relations) {\n            console.log(relation);\n        }\n    }\n);\n'))),(0,r.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Setting the predicate GET parameter is optional. If skipped, all concept's relations will be returned.\ncurl -X GET 'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_CONCEPT_ID}/relations?predicate=hypernym' \\\n    -H 'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}' \\\n    -H 'Content-Type: application/json'\n"))),(0,r.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const appId = '{YOUR_APP_ID}'\nconst conceptId = '{YOUR_CONCEPT_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\n// Setting the predicate GET parameter is optional. If skipped, all concept's relations will be returned\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}/relations?predicate=hypernym`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,r.kt)("h2",{id:"delete"},"Delete"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\ndelete_concept_relation_response = stub.DeleteConceptRelations(\n    service_pb2.DeleteConceptRelationsRequest(\n        user_app_id=resources_pb2.UserAppIDSet(\n            app_id="{YOUR_APP_ID}"\n        ),\n        concept_id="{YOUR_OBJECT_CONCEPT_ID}",\n        ids=["{YOUR_CONCEPT_RELATION_ID}"]\n    ),\n    metadata=metadata\n)\n\nif delete_concept_relation_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(delete_concept_relation_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(delete_concept_relation_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(delete_concept_relation_response.outputs[0].status.details))\n    raise Exception("Delete concept relation failed, status: " + delete_concept_relation_response.status.description)\n'))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nBaseResponse deleteConceptRelationsResponse = stub.deleteConceptRelations(\n    DeleteConceptRelationsRequest.newBuilder()\n        .setUserAppId(\n            UserAppIDSet.newBuilder().setAppId("{YOUR_APP_ID}").build()\n        )\n        .addIds("{YOUR_CONCEPT_RELATION_ID}")\n        .setConceptId("{YOUR_OBJECT_CONCEPT_ID}")\n        .build()\n);\n\nif (deleteConceptRelationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Delete concept relations failed, status: " + deleteConceptRelationsResponse.getStatus());\n}\n'))),(0,r.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.DeleteConceptRelations(\n    {\n        user_app_id: {\n            app_id: "{YOUR_APP_ID}"\n        },\n        concept_id: "{YOUR_OBJECT_CONCEPT_ID}",\n        ids: [\n            "{YOUR_CONCEPT_RELATION_ID}"\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Delete concept relations failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,r.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X DELETE 'https://api.clarifai.com/v2/users/me/apps/{YOUR_APP_ID}/concepts/{YOUR_OBJECT_CONCEPT_ID}/relations' \\\n    -H 'Authorization: Key {YOUR_PERSONAL_ACCESS_TOKEN}' \\\n    -H 'Content-Type: application/json' \\\n    --data-raw '{\n        \"ids\": [\n            \"{YOUR_CONCEPT_RELATION_ID}\"\n        ]\n    }'\n"))),(0,r.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const appId = '{YOUR_APP_ID}'\nconst conceptId = '{YOUR_CONCEPT_ID}'\n\nconst raw = JSON.stringify({\n    \"ids\": [\n      \"{YOUR_CONCEPT_RELATION_ID}\"\n  ]\n})\n\nconst requestOptions = {\n  method: 'DELETE',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}/relations`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))))}_.isMDXComponent=!0},4107:function(e,t,n){t.Z=n.p+"assets/images/kg6-845a036f5276eb9b39c7349452d1f495.png"}}]);