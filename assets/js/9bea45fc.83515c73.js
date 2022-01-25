"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9047],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),o=n(7294),s=n(2389),r=n(9443);var i=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3616),p=n(6010),l="tabItem_vU9c";function u(e){var t,n,s,r=e.lazy,u=e.block,d=e.defaultValue,m=e.values,h=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,c.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=g[0])?void 0:s.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=i(),C=_.tabGroupChoices,w=_.setTabGroupChoices,k=(0,o.useState)(y),T=k[0],N=k[1],E=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=C[h];null!=I&&I!==T&&v.some((function(e){return e.value===I}))&&N(I)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),a=v[n].value;a!==T&&(O(t),N(a),null!=h&&w(h,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var o=E.indexOf(e.currentTarget)-1;n=E[o]||E[E.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},f)},v.map((function(e){var t=e.value,n=e.label,s=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:S,onClick:S},s,{className:(0,p.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,s.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},8961:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),r=n(6396),i=n(8215),c=["components"],p={description:"Manage your concepts.",sidebar_position:1},l="Create, Get, Update",u={unversionedId:"api-guide/concepts/create-get-update",id:"api-guide/concepts/create-get-update",title:"Create, Get, Update",description:"Manage your concepts.",source:"@site/docs/api-guide/concepts/create-get-update.md",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/create-get-update",permalink:"/api-guide/concepts/create-get-update",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/concepts/create-get-update.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Manage your concepts.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating and Managing Concepts",permalink:"/api-guide/concepts/"},next:{title:"Languages",permalink:"/api-guide/concepts/languages"}},d=[{value:"Create",id:"create",children:[{value:"Add Concepts",id:"add-concepts",children:[],level:3}],level:2},{value:"Get",id:"get",children:[{value:"Get Concept by ID",id:"get-concept-by-id",children:[],level:3},{value:"List concepts",id:"list-concepts",children:[],level:3}],level:2},{value:"Update",id:"update",children:[{value:"Update Concept Name",id:"update-concept-name",children:[],level:3}],level:2}],m={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"create-get-update"},"Create, Get, Update"),(0,s.kt)("p",null,"Within your app you can create concpets, modify them after creation an get them from yoru app. We currently do not support deleting concepts since they are such an integral tie across almost all other data structures in the platform like inputs, models, searches, etc."),(0,s.kt)("p",null,"You will find that some of our endpoints have additional information returned from the clarifai/main app which contains our pre-trained models but also a large knowledge graph we've assembled over the years."),(0,s.kt)("h2",{id:"create"},"Create"),(0,s.kt)("h3",{id:"add-concepts"},"Add Concepts"),(0,s.kt)("p",null,"To create a new concept in you app you POST the concept with an id and name. You can also post more than one concept in the same API by sending a list of concepts."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse postConceptsResponse = stub.postConcepts(\n    PostConceptsRequest.newBuilder()\n        .addConcepts(Concept.newBuilder().setId("charlie").setName("Charlie Name"))\n        .build()\n);\n\nif (postConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Post concepts failed, status: " + postConceptsResponse.getStatus());\n}\n'))),(0,s.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostConcepts(\n    {\n        concepts: [{id: "charlie", name: "Charlie Name"}]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,s.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\npost_concepts_response = stub.PostConcepts(\n    service_pb2.PostConceptsRequest(\n        concepts=[resources_pb2.Concept(id="charlie", name="Charlie Name")]\n    ),\n    metadata=metadata\n)\n\nif post_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(post_concepts_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(post_concepts_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(post_concepts_response.outputs[0].status.details))\n    raise Exception("Post concept failed, status: " + post_concepts_response.status.description)\n'))),(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "concepts": [\n      {\n        "id": "{concept_id}",\n        "name": "{new_concept_name}"\n      }\n      ]\n  }\'\\\n  https://api.clarifai.com/v2/concepts\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concepts": [\n    {\n      "id": "{CONCEPT_ID}",\n      "name": "{CONCEPT_NAME}"\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/concepts", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)("h2",{id:"get"},"Get"),(0,s.kt)("h3",{id:"get-concept-by-id"},"Get Concept by ID"),(0,s.kt)("p",null,"You can get a singular concept by it's ID."),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nSingleConceptResponse getConceptResponse = stub.getConcept(\n    GetConceptRequest.newBuilder()\n        .setConceptId("charlie")\n        .build()\n);\n\nif (getConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Get concepts failed, status: " + getConceptsResponse.getStatus());\n}\n'))),(0,s.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.GetConcept(\n    {\n        concept_id: "bosco"\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Get concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,s.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nget_concepts_response = stub.GetConcept(\n    service_pb2.GetConceptRequest(\n        concept_id="charlie"\n    ),\n    metadata=metadata\n)\n\nif get_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(get_concepts_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(get_concepts_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(get_concepts_response.outputs[0].status.details))\n    raise Exception("Get concept failed, status: " + get_concepts_response.status.description)\n'))),(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts/{concept_id}\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const conceptId = '{CONCEPT_ID}'\nconst appId = '{YOUR_APP_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,s.kt)("h3",{id:"list-concepts"},"List concepts"),(0,s.kt)("p",null,"You can get a list of concepts within your app with a GET call. This call supports ",(0,s.kt)("a",{parentName:"p",href:"/api-guide/advanced-topics/pagination"},"pagination")),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse listConceptsResponse = stub.listConcepts(\n    ListConceptsRequest.newBuilder()\n        .build()\n);\n\nif (listConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("List concepts failed, status: " + listConceptsResponse.getStatus());\n}\n'))),(0,s.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.ListConcepts(\n    {},\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("List concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,s.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nlist_concepts_response = stub.ListConcepts(\n    service_pb2.ListConceptsRequest(),\n    metadata=metadata\n)\n\nif list_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(list_concepts_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(list_concepts_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(list_concepts_response.outputs[0].status.details))\n    raise Exception("List concept failed, status: " + list_concepts_response.status.description)\n'))),(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const appId = '{YOUR_APP_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,s.kt)("h2",{id:"update"},"Update"),(0,s.kt)("h3",{id:"update-concept-name"},"Update Concept Name"),(0,s.kt)("p",null,'The code below showcases how to update a concept\'s name given its id by using the "overwrite" action. You can also patch multiple concepts by sending a list of concepts.'),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse patchConceptsResponse = stub.patchConcepts(\n    PatchConceptsRequest.newBuilder()\n        .setAction("overwrite")  // The only supported action right now is overwrite.\n        .addConcepts(Concept.newBuilder().setId("charlie").setName("Charlie Name"))\n        .build()\n);\n\nif (patchConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Patch concepts failed, status: " + patchConceptsResponse.getStatus());\n}\n'))),(0,s.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PatchConcepts(\n    {\n        action: "overwrite",  // The only supported action right now is overwrite\n        concepts: [{id: "charlie", name: "Charlie Name"}]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Patch concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,s.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\npatch_concepts_response = stub.PatchConcepts(\n    service_pb2.PatchConceptsRequest(\n        action="overwrite",  # The only supported action right now is overwrite.\n        concepts=[resources_pb2.Concept(id="charlie", name="Charlie Name")]\n    ),\n    metadata=metadata\n)\n\nif patch_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    print("\\tCode: {}".format(patch_concepts_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(patch_concepts_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(patch_concepts_response.outputs[0].status.details))\n    raise Exception("Patch concept failed, status: " + patch_concepts_response.status.description)\n'))),(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "concepts": [\n      {\n        "id": "charlie",\n        "name": "Charlie Name"\n      }\n      ],\n    "action": "overwrite"\n  }\'\\\n  https://api.clarifai.com/v2/concepts\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concepts": [\n    {\n      "id": "charlie",\n      "name": "Charlie Name"\n    }\n  ],\n  "action": "overwrite"\n});\n\nconst requestOptions = {\n  method: \'PATCH\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/concepts", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))))}h.isMDXComponent=!0}}]);