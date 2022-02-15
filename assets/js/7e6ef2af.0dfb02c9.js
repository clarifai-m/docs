"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4499],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return g}});var a=t(87462),r=t(67294),i=t(72389),s=t(79443);var o=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(53810),p=t(86010),c="tabItem_vU9c";function u(e){var n,t,i,s=e.lazy,u=e.block,g=e.defaultValue,d=e.values,m=e.groupId,h=e.className,_=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:_.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),N=(0,l.lx)(f,(function(e,n){return e.value===n.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===g?g:null!=(n=null!=g?g:null==(t=_.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=_[0])?void 0:i.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),C=b.tabGroupChoices,v=b.setTabGroupChoices,E=(0,r.useState)(k),T=E[0],I=E[1],y=[],w=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=C[m];null!=A&&A!==T&&f.some((function(e){return e.value===A}))&&I(A)}var P=function(e){var n=e.currentTarget,t=y.indexOf(n),a=f[t].value;a!==T&&(w(n),I(a),null!=m&&v(m,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.currentTarget)+1;t=y[a]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.currentTarget)-1;t=y[r]||y[y.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},h)},f.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return y.push(e)},onKeyDown:S,onFocus:P,onClick:P},i,{className:(0,p.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(_.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},_.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function g(e){var n=(0,i.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},11723:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return d}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),s=t(26396),o=t(58215),l=t(19055),p=["components"],c={description:"Multilingual support in Clarifai",sidebar_position:2},u="Languages",g={unversionedId:"api-guide/concepts/languages",id:"api-guide/concepts/languages",title:"Languages",description:"Multilingual support in Clarifai",source:"@site/docs/api-guide/concepts/languages.md",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/languages",permalink:"/docs-new/api-guide/concepts/languages",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/concepts/languages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Multilingual support in Clarifai",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create, Get, Update",permalink:"/docs-new/api-guide/concepts/create-get-update"},next:{title:"Search by Concept",permalink:"/docs-new/api-guide/concepts/search-by-concept"}},d=[{value:"Supported Languages",id:"supported-languages",children:[],level:2},{value:"Default Language",id:"default-language",children:[],level:2},{value:"List Language Translations by Concept ID",id:"list-language-translations-by-concept-id",children:[],level:2},{value:"Get Specific Language Translation for a Concept",id:"get-specific-language-translation-for-a-concept",children:[],level:2},{value:"Add a Language Translation for a Concept",id:"add-a-language-translation-for-a-concept",children:[],level:2},{value:"Update a Language Translation for a Concept",id:"update-a-language-translation-for-a-concept",children:[],level:2}],m={toc:d};function h(e){var n=e.components,c=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"languages"},"Languages"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Multilingual support in Clarifai")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The Clarifai API supports many languages in addition to English. These are represented as translations of names of concepts so that when you search by concept name or get predictions from a model's concepts, you can utilize the language of your choice."),(0,i.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,i.kt)("p",null,"The currently supported languages are listed below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Language"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Arabic ","(","ar",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ar")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bengali ","(","bn",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"bn")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Danish ","(","da",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"da")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"German ","(","de",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"de")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"English ","(","en",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"en")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Spanish ","(","es",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"es")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Finnish ","(","fi",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"fi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"French ","(","fr",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"fr")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Hindi ","(","hi",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"hi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Hungarian ","(","hu",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"hu")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Italian ","(","it",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"it")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Japanese ","(","ja",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ja")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Korean ","(","ko",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ko")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Dutch ","(","nl",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"nl")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Norwegian ","(","no",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Punjabi ","(","pa",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"pa")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Polish ","(","pl",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"pl")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Portuguese ","(","pt",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"pt")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Russian ","(","ru",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ru")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Swedish ","(","sv",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"sv")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Turkish ","(","tr",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"tr")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chinese Simplified ","(","zh",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"zh")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chinese Traditional ","(","zh-TW",")"),(0,i.kt)("td",{parentName:"tr",align:"left"},"zh-TW")))),(0,i.kt)("h2",{id:"default-language"},"Default Language"),(0,i.kt)("p",null,"When you create a new Application, you must specify a default language. This will be the default language concepts are returned in when you do not explicitly set a language in an API request. "),(0,i.kt)("p",null,"You cannot change the default language. You can however change languages per request."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create new app",src:t(45153).Z})),(0,i.kt)("h2",{id:"list-language-translations-by-concept-id"},"List Language Translations by Concept ID"),(0,i.kt)("p",null,"You can see all the language translations for a given concept ID with a GET call. This call supports ",(0,i.kt)("a",{parentName:"p",href:"/docs-new/api-guide/advanced-topics/pagination"},"pagination"),"."),(0,i.kt)("p",null,"Below is an example of how you would list language translations by concept ID. "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"#############################################################################\n# In this section, we set the user authentication, app ID, and concept ID.\n# Change these strings to run your own example.\n#############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to whatever concept you want to see its languages\nCONCEPT_ID = 'cat'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nlist_concept_languages_response = stub.ListConceptLanguages(\n    service_pb2.ListConceptLanguagesRequest(\n        user_app_id=userDataObject,\n        concept_id=CONCEPT_ID\n    ),\n    metadata=metadata\n)\n\n\nif list_concept_languages_response.status.code != status_code_pb2.SUCCESS:\n    print(list_concept_languages_response.status)\n    raise Exception(\"List concept failed, status: \" + list_concept_languages_response.status.description)\n    \nprint(list_concept_languages_response)")),(0,i.kt)(o.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse listConceptLanguagesResponse = stub.listConceptLanguages(\n    ListConceptLanguagesRequest.newBuilder()\n        .setConceptId("charlie")\n        .build()\n);\n\nif (listConceptLanguagesResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("List concept languages failed, status: " + listConceptLanguagesResponse.getStatus());\n}\n'))),(0,i.kt)(o.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.ListConceptLanguages(\n    {\n      concept_id: "charlie"\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("List concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts/{concept_id}/languages\n'))),(0,i.kt)(o.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const conceptId = '{CONCEPT_ID}'\nconst appId = '{YOUR_APP_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}/languages`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "e3d3b16eccf82d3b5563a0a01eebc579"\n}\nconcept_languages {\n  id: "en"\n  name: "Cat Name"\n} \n'))),(0,i.kt)("h2",{id:"get-specific-language-translation-for-a-concept"},"Get Specific Language Translation for a Concept"),(0,i.kt)("p",null,"Below is an example of how to get a single language translation for a concept. You can get it by the language code and concept ID."),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"#######################################################################################\n# In this section, we set the user authentication, app ID, concept ID and language.\n# Change these strings to run your own example.\n#######################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever concept you want to get its language translation\nCONCEPT_ID = 'cat'\nCONCEPT_LANGUAGE = \"en\"\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nget_concept_language_response = stub.GetConceptLanguage(\n    service_pb2.GetConceptLanguageRequest(\n        user_app_id=userDataObject,\n        concept_id=CONCEPT_ID,\n        language=CONCEPT_LANGUAGE\n    ),\n    metadata=metadata\n)\n\nif get_concept_language_response.status.code != status_code_pb2.SUCCESS:\n    print(get_concept_language_response.status)\n    raise Exception(\"Get concept failed, status: \" + get_concept_language_response.status.description)\n    \nprint(get_concept_language_response)")),(0,i.kt)(o.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse getConceptLanguageResponse = stub.getConceptLanguage(\n    ListConceptLanguageRequest.newBuilder()\n        .setConceptId("charlie")\n        .setLanguage("ja")\n        .build()\n);\n\nif (getConceptLanguageResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("List concept languages failed, status: " + getConceptLanguageResponse.getStatus());\n}\n'))),(0,i.kt)(o.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.GetConceptLanguage(\n    {\n      concept_id: "charlie",\n      language: "ja"\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Get concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts/{concept_id}/languages/{language}\n'))),(0,i.kt)(o.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const conceptId = '{CONCEPT_ID}'\nconst appId = '{YOUR_APP_ID}'\nconst language = '{LANGUAGE}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/concepts/${conceptId}/languages/${language}`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "ef625131675ba87841983c6e7f654e39"\n}\nconcept_language {\n  id: "en"\n  name: "Cat Name"\n} \n'))),(0,i.kt)("h2",{id:"add-a-language-translation-for-a-concept"},"Add a Language Translation for a Concept"),(0,i.kt)("p",null,"Below is an example of how to create a language translation for a concept by POSTing that language translation."),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################################################\n# In this section, we set the user authentication, app ID, concept ID, and language ID and name.\n# Change these strings to run your own example.\n################################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever concept you want to add its language translation\nCONCEPT_ID = 'charlie'\nLANGUAGE_ID = \"ja\"\nLANGUAGE_NAME = \"\u30dc\u30b9\u30b3\"\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nget_concept_language_response = stub.PostConceptLanguages(\n    service_pb2.PostConceptLanguagesRequest(\n        user_app_id=userDataObject,\n        concept_id=CONCEPT_ID,\n        concept_languages=[resources_pb2.ConceptLanguage(\n          id=LANGUAGE_ID,\n          name=LANGUAGE_NAME\n        )]\n    ),\n    metadata=metadata\n)\n\nif get_concept_language_response.status.code != status_code_pb2.SUCCESS:\n    print(get_concept_language_response.status)\n    raise Exception(\"Get concept failed, status: \" + get_concept_language_response.status.description)\n    \nprint(get_concept_language_response)")),(0,i.kt)(o.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse postConceptLanguageResponse = stub.postConceptLanguage(\n    PostConceptLanguageRequest.newBuilder()\n        .setConceptId("charlie")\n        .addConceptLanguages(ConceptLanguage.newBuilder().setId("ja").setName("\u30dc\u30b9\u30b3"))\n        .build()\n);\n\nif (postConceptLanguageResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Post concept languages failed, status: " + postConceptLanguageResponse.getStatus());\n}\n'))),(0,i.kt)(o.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostConceptLanguage(\n    {\n      concept_id: "charlie",\n      concept_languages: [\n        {\n          id: "ja",\n          name: "\u30dc\u30b9\u30b3"\n        }\n      ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Get concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts/{concept_id}/languages/{language}\n'))),(0,i.kt)(o.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const conceptId = \'{YOUR_CONCEPT_ID}\'\n\nconst raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concept_languages": [\n    {\n      "id": "ko",\n      "name": "\uac1c"\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch(`https://api.clarifai.com/v2/concepts/${conceptId}/languages`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "c5054cc812539059340a2275c3cb7cd5"\n}\nconcept_languages {\n  id: "ja"\n  name: "\\343\\203\\234\\343\\202\\271\\343\\202\\263"\n}\n'))),(0,i.kt)("h2",{id:"update-a-language-translation-for-a-concept"},"Update a Language Translation for a Concept"),(0,i.kt)("p",null,"Below is an example of how to update a language translation for a concept by PATCHing that language translation."),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"########################################################################################\n# In this section, we set the user authentication, app ID, concept ID, and language ID \n# and new name. Change these strings to run your own example.\n########################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever concept you want to update its language translation\nCONCEPT_ID = 'charlie'\nLANGUAGE_ID = \"ja\"\nLANGUAGE_NAME = \"new name\"\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nget_concept_language_response = stub.PatchConceptLanguages(\n    service_pb2.PatchConceptLanguagesRequest(\n        user_app_id=userDataObject,\n        concept_id=CONCEPT_ID,\n        concept_languages=[resources_pb2.ConceptLanguage(\n          id=LANGUAGE_ID,\n          name=LANGUAGE_NAME\n        )],\n        action=\"overwrite\"\n    ),\n    metadata=metadata\n)\n\nif get_concept_language_response.status.code != status_code_pb2.SUCCESS:\n    print(get_concept_language_response.status)\n    raise Exception(\"Get concept failed, status: \" + get_concept_language_response.status.description)\n    \nprint(get_concept_language_response)")),(0,i.kt)(o.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse patchConceptLanguageResponse = stub.patchConceptLanguage(\n    PatchConceptLanguageRequest.newBuilder()\n        .setAction("overwrite")\n        .setConceptId("charlie")\n        .addConceptLanguages(ConceptLanguage.newBuilder().setId("ja").setName("new name"))\n        .build()\n);\n\nif (patchConceptLanguageResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    throw new RuntimeException("Patch concept languages failed, status: " + patchConceptLanguageResponse.getStatus());\n}\n'))),(0,i.kt)(o.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PatchConceptLanguage(\n    {\n      action: "overwrite",\n      concept_id: "charlie",\n      concept_languages: [\n        {\n          id: "ja",\n          name: "new name"\n        }\n      ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Get concepts failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,i.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/concepts/{concept_id}/languages/{language}\n'))),(0,i.kt)(o.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const conceptId = \'{YOUR_CONCEPT_ID}\'\n\nconst raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concept_languages": [\n    {\n      "id": "ko",\n      "name": "\uac1c"\n    }\n  ],\n  "action": "overwrite"\n});\n\nvar requestOptions = {\n  method: \'PATCH\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch(`https://api.clarifai.com/v2/concepts/${conceptId}/languages`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON Output Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "779d702cbb303bcce4e469eb1d3552c2"\n}\nconcept_languages {\n  id: "ja"\n  name: "new name"\n}\n'))))}h.isMDXComponent=!0},45153:function(e,n,t){n.Z=t.p+"assets/images/create-new-app-new-b870893cd1ccf7b8f78f9f672faa92f7.png"}}]);