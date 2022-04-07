"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9047],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:s},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),s=t(7294),i=t(2389),o=t(9443);var r=function(){var e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(3616),p=t(6010),l="tabItem_vU9c";function u(e){var n,t,i,o=e.lazy,u=e.block,d=e.defaultValue,h=e.values,m=e.groupId,_=e.className,g=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=h?h:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,c.lx)(f,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=g[0])?void 0:i.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=r(),E=C.tabGroupChoices,T=C.setTabGroupChoices,N=(0,s.useState)(v),k=N[0],I=N[1],y=[],w=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var P=E[m];null!=P&&P!==k&&f.some((function(e){return e.value===P}))&&I(P)}var O=function(e){var n=e.currentTarget,t=y.indexOf(n),a=f[t].value;a!==k&&(w(n),I(a),null!=m&&T(m,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.currentTarget)+1;t=y[a]||y[0];break;case"ArrowLeft":var s=y.indexOf(e.currentTarget)-1;t=y[s]||y[y.length-1]}null==(n=t)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},_)},f.map((function(e){var n=e.value,t=e.label,i=e.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:function(e){return y.push(e)},onKeyDown:S,onFocus:O,onClick:O},i,{className:(0,p.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":k===n})}),null!=t?t:n)}))),o?(0,s.cloneElement)(g.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==k})}))))}function d(e){var n=(0,i.Z)();return s.createElement(u,(0,a.Z)({key:String(n)},e))}},6845:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return _},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=t(7462),s=t(3366),i=(t(7294),t(3905)),o=t(6396),r=t(8215),c=t(9055),p=["components"],l={description:"Manage your concepts.",sidebar_position:1},u="Create, Get, Update",d={unversionedId:"api-guide/concepts/create-get-update",id:"api-guide/concepts/create-get-update",title:"Create, Get, Update",description:"Manage your concepts.",source:"@site/docs/api-guide/concepts/create-get-update.md",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/create-get-update",permalink:"/docs/api-guide/concepts/create-get-update",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/concepts/create-get-update.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Manage your concepts.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating and Managing Concepts",permalink:"/docs/api-guide/concepts/"},next:{title:"Languages",permalink:"/docs/api-guide/concepts/languages"}},h=[{value:"Create",id:"create",children:[{value:"Add Concepts",id:"add-concepts",children:[],level:3}],level:2},{value:"Get",id:"get",children:[{value:"Get Concept by ID",id:"get-concept-by-id",children:[],level:3},{value:"List Concepts",id:"list-concepts",children:[],level:3}],level:2},{value:"Update",id:"update",children:[{value:"Update Concept Name",id:"update-concept-name",children:[],level:3}],level:2}],m={toc:h};function _(e){var n=e.components,t=(0,s.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-get-update"},"Create, Get, Update"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Manage your concepts")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Within your app, you can create concepts, modify them after creation, and get them from your app. We currently do not support deleting concepts since they have such an integral tie across almost all other data structures in the platform like inputs, models, searches, etc."),(0,i.kt)("p",null,"You will find that some of our endpoints have additional information returned from the clarifai/main app, which contains our pre-trained models and a large knowledge graph we've assembled over the years."),(0,i.kt)("h2",{id:"create"},"Create"),(0,i.kt)("h3",{id:"add-concepts"},"Add Concepts"),(0,i.kt)("p",null,"To create a new concept in you app, you POST the concept with an id and name. You can also post more than one concept in the same API by sending a list of concepts."),(0,i.kt)("p",null,"Below is an example of how to add concepts.  "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################################\n# In this section, we set the user authentication, app ID, concept ID and name.\n# Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever concepts you want to process\nCONCEPT_ID = 'cat'\nCONCEPT_NAME = 'Cat Name'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_concepts_response = stub.PostConcepts(\n    service_pb2.PostConceptsRequest(\n        user_app_id=userDataObject,\n        concepts=[resources_pb2.Concept(id=CONCEPT_ID, name=CONCEPT_NAME)]\n    ),\n    metadata=metadata\n)\n\nif post_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print(post_concepts_response.status)\n    raise Exception(\"Post concept failed, status: \" + post_concepts_response.status.description)\n    \nprint(post_concepts_response)")),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse postConceptsResponse = stub.postConcepts(\n    PostConceptsRequest.newBuilder()\n        .addConcepts(Concept.newBuilder().setId("charlie").setName("Charlie Name"))\n        .build()\n);\n\nif (postConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Post concepts failed, status: " + postConceptsResponse.getStatus());\n}\n'))),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostConcepts(\n    {\n        concepts: [{id: "charlie", name: "Charlie Name"}]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "concepts": [\n      {\n        "id": "{concept_id}",\n        "name": "{new_concept_name}"\n      }\n      ]\n  }\'\\\n  https://api.clarifai.com/v2/concepts\n'))),(0,i.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concepts": [\n    {\n      "id": "{CONCEPT_ID}",\n      "name": "{CONCEPT_NAME}"\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/concepts", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "9852fce206578f4bc5b6bed38f03eed8"\n}\nconcepts {\n  id: "cat"\n  name: "Cat Name"\n  value: 1.0\n  created_at {\n    seconds: 1643890626\n    nanos: 775078265\n  }\n  language: "en"\n  app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n  visibility {\n    gettable: PRIVATE\n  }\n  user_id: "ei2l2oz3s3iz"\n}\n'))),(0,i.kt)("h2",{id:"get"},"Get"),(0,i.kt)("h3",{id:"get-concept-by-id"},"Get Concept by ID"),(0,i.kt)("p",null,"Below is an example of how to get a singular concept by it's ID."),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-python",mdxType:"CodeBlock"},"###########################################################################\n# In this section, we set the user authentication, app ID, and concept ID.\n# Change these strings to run your own example.\n###########################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to whatever concept you want to retrieve\nCONCEPT_ID = 'cat'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nget_concepts_response = stub.GetConcept(\n    service_pb2.GetConceptRequest(\n        user_app_id=userDataObject,\n        concept_id=CONCEPT_ID\n    ),\n    metadata=metadata\n)\n\nif get_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print(get_concepts_response.status)\n    raise Exception(\"Get concept failed, status: \" + get_concepts_response.status.description)\n    \nprint(get_concepts_response)")),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nSingleConceptResponse getConceptResponse = stub.getConcept(\n    GetConceptRequest.newBuilder()\n        .setConceptId("charlie")\n        .build()\n);\n\nif (getConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Get concepts failed, status: " + getConceptsResponse.getStatus());\n}\n'))),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.GetConcept(\n    {\n        concept_id: "bosco"\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Get concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts/{concept_id}\n'))),(0,i.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const conceptId = '{CONCEPT_ID}'\nconst appId = '{YOUR_APP_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "240b8fa082722b0f137c09ec5141cfa3"\n}\nconcept {\n  id: "cat"\n  name: "Cat Name"\n  value: 1.0\n  created_at {\n    seconds: 1643890626\n    nanos: 775078000\n  }\n  language: "en"\n  app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n  visibility {\n    gettable: PRIVATE\n  }\n  user_id: "ei2l2oz3s3iz"\n}\n'))),(0,i.kt)("h3",{id:"list-concepts"},"List Concepts"),(0,i.kt)("p",null,"You can get a list of concepts within your app with a GET call. This call supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-guide/advanced-topics/pagination"},"pagination")),(0,i.kt)("p",null,"Below is an example of how to list concepts. "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-python",mdxType:"CodeBlock"},"###########################################################################\n# In this section, we set the user authentication. \n# Change these strings to run your own example.\n###########################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nlist_concepts_response = stub.ListConcepts(\n    service_pb2.ListConceptsRequest(user_app_id=userDataObject),    \n    metadata=metadata\n)\n\nif list_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print(list_concepts_response.status)\n    raise Exception(\"List concept failed, status: \" + list_concepts_response.status.description)\n    \nprint(list_concepts_response)")),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse listConceptsResponse = stub.listConcepts(\n    ListConceptsRequest.newBuilder()\n        .build()\n);\n\nif (listConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("List concepts failed, status: " + listConceptsResponse.getStatus());\n}\n'))),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.ListConcepts(\n    {},\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("List concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts\n'))),(0,i.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const appId = '{YOUR_APP_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "1155d18c386559cfdaa22274a0531d9f"\n}\nconcepts {\n  id: "cat"\n  name: "Cat Name"\n  value: 1.0\n  created_at {\n    seconds: 1643890626\n    nanos: 775078000\n  }\n  language: "en"\n  app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n  visibility {\n    gettable: PRIVATE\n  }\n  user_id: "ei2leoz3s3iy"\n}\nconcepts {\n  id: "charlie"\n  name: "Charlie Name"\n  value: 1.0\n  created_at {\n    seconds: 1643865054\n    nanos: 92351000\n  }\n  language: "en"\n  app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n  visibility {\n    gettable: PRIVATE\n  }\n  user_id: "ei2l2oz3s3iz"\n}\n'))),(0,i.kt)("h2",{id:"update"},"Update"),(0,i.kt)("h3",{id:"update-concept-name"},"Update Concept Name"),(0,i.kt)("p",null,'Below is an example of how to update a concept\'s name given its id by using the "overwrite" action. You can also patch multiple concepts by sending a list of concepts.'),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(c.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################################\n# In this section, we set the user authentication, app ID, concept ID and name.\n# Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever concept you want to update\nCONCEPT_ID = 'cat'\nCONCEPT_NAME = 'New Cat Name'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npatch_concepts_response = stub.PatchConcepts(\n    service_pb2.PatchConceptsRequest(\n        user_app_id=userDataObject,\n        action=\"overwrite\",  # The only supported action right now is overwrite\n        concepts=[resources_pb2.Concept(id=CONCEPT_ID, name=CONCEPT_NAME)]\n    ),\n    metadata=metadata\n)\n\nif patch_concepts_response.status.code != status_code_pb2.SUCCESS:\n    print(patch_concepts_response.status)\n    raise Exception(\"Patch concept failed, status: \" + patch_concepts_response.status.description)\n    \nprint(patch_concepts_response)")),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse patchConceptsResponse = stub.patchConcepts(\n    PatchConceptsRequest.newBuilder()\n        .setAction("overwrite")  // The only supported action right now is overwrite.\n        .addConcepts(Concept.newBuilder().setId("charlie").setName("Charlie Name"))\n        .build()\n);\n\nif (patchConceptsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Patch concepts failed, status: " + patchConceptsResponse.getStatus());\n}\n'))),(0,i.kt)(r.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PatchConcepts(\n    {\n        action: "overwrite",  // The only supported action right now is overwrite\n        concepts: [{id: "charlie", name: "Charlie Name"}]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Patch concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "concepts": [\n      {\n        "id": "charlie",\n        "name": "Charlie Name"\n      }\n      ],\n    "action": "overwrite"\n  }\'\\\n  https://api.clarifai.com/v2/concepts\n'))),(0,i.kt)(r.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concepts": [\n    {\n      "id": "charlie",\n      "name": "Charlie Name"\n    }\n  ],\n  "action": "overwrite"\n});\n\nconst requestOptions = {\n  method: \'PATCH\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/concepts", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "67ba891f905e081690e4e94522fc21c7"\n}\nconcepts {\n  id: "cat"\n  name: "New Cat Name"\n  value: 1.0\n  created_at {\n    seconds: 1643897414\n    nanos: 497920914\n  }\n  language: "en"\n  app_id: "a39423543bb941bf9ba2ee95fad11f0a"\n  user_id: "ei2l2oz3s3iz"\n}\n'))))}_.isMDXComponent=!0}}]);