"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8601],{8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:s},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),s=t(7294),r=t(2389),o=t(9443);var c=function(){var e=(0,s.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(3616),p=t(6010),l="tabItem_vU9c";function u(e){var n,t,r,o=e.lazy,u=e.block,d=e.defaultValue,h=e.values,m=e.groupId,f=e.className,g=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),_=(0,i.lx)(b,(function(e,n){return e.value===n.value}));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(n=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=c(),k=y.tabGroupChoices,C=y.setTabGroupChoices,S=(0,s.useState)(v),E=S[0],N=S[1],T=[],w=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=k[m];null!=I&&I!==E&&b.some((function(e){return e.value===I}))&&N(I)}var P=function(e){var n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==E&&(w(n),N(a),null!=m&&C(m,a))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var s=T.indexOf(e.currentTarget)-1;t=T[s]||T[T.length-1]}null==(n=t)||n.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},f)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return T.push(e)},onKeyDown:R,onFocus:P,onClick:P},r,{className:(0,p.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,s.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function d(e){var n=(0,r.Z)();return s.createElement(u,(0,a.Z)({key:String(n)},e))}},8054:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return h}});var a=t(7462),s=t(3366),r=(t(7294),t(3905)),o=t(6396),c=t(8215),i=t(9055),p=["components"],l={description:"Search based on specific words.",sidebar_position:3,title:"Search by Concept"},u="Search by Concept",d={unversionedId:"api-guide/concepts/search-by-concept",id:"api-guide/concepts/search-by-concept",title:"Search by Concept",description:"Search based on specific words.",source:"@site/docs/api-guide/concepts/search-by-concept.md",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/search-by-concept",permalink:"/api-guide/concepts/search-by-concept",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/concepts/search-by-concept.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Search based on specific words.",sidebar_position:3,title:"Search by Concept"},sidebar:"tutorialSidebar",previous:{title:"Languages",permalink:"/api-guide/concepts/languages"},next:{title:"Knowledge Graph",permalink:"/api-guide/concepts/knowledge_graph"}},h=[],m={toc:h};function f(e){var n=e.components,t=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"search-by-concept"},"Search by Concept"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Search based on specific words")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can search for concepts by ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", even in a different ",(0,r.kt)("inlineCode",{parentName:"p"},"language")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConceptSearches")," endpoint."),(0,r.kt)("p",null,"Below is an example of how to search for concepts."),(0,r.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,r.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"##########################################################################################\n# In this section, we set the user authentication, app ID, search name, and language ID.\n# Change these strings to run your own example.\n##########################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to whatever concept you want to search for\nSEARCH_NAME = \"\u4eba\"\nLANGUAGE_ID = \"ja\"\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_concepts_searches_response = stub.PostConceptsSearches(\n    service_pb2.PostConceptsSearchesRequest(\n        user_app_id=userDataObject,\n        concept_query=resources_pb2.ConceptQuery(\n            name=SEARCH_NAME,\n            language=LANGUAGE_ID\n        )\n    ),\n    metadata=metadata\n)\n\nif post_concepts_searches_response.status.code != status_code_pb2.SUCCESS:\n    print(post_concepts_searches_response.status)\n    raise Exception(\"Post concepts searches failed, status: \" + post_concepts_searches_response.status.description)\n    \nprint(\"Found concepts:\")\nfor concept in post_concepts_searches_response.concepts:\n    print(\"\\t%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(post_concepts_searches_response)")),(0,r.kt)(c.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiConceptResponse postConceptsSearchesResponse = stub.postConceptsSearches(\n    PostConceptsSearchesRequest.newBuilder()\n        .setConceptQuery(\n            ConceptQuery.newBuilder()\n                .setName("\u4eba")\n                .setLanguage("ja")\n        )\n        .build()\n);\n\nif (postConceptsSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post concepts searches failed, status: " + postConceptsSearchesResponse.getStatus());\n}\n\nSystem.out.println("Found concepts:");\nfor (Concept concept : postConceptsSearchesResponse.getConceptsList()) {\n    System.out.printf("\\t%s %.2f%n", concept.getName(), concept.getValue());\n}\n'))),(0,r.kt)(c.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nstub.PostConceptsSearches(\n    {\n        concept_query: {name: "\u4eba", language: "ja"}\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post concepts searches failed, status: " + response.status.description);\n        }\n\n        console.log("Found concepts:");\n        for (const concept of response.concepts) {\n            console.log("\\t" + concept.name + " " + concept.value);\n        }\n    }\n);\n'))),(0,r.kt)(c.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "concept_query": {\n      "name":"\u4eba",\n      "language": "ja"\n    }\n  }\'\\\n  https://api.clarifai.com/v2/concepts/searches\n'))),(0,r.kt)(c.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "concept_query": {\n    "name":"\u4eba",\n    "language": "ja"\n  }\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/concepts/searches", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Code Output Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Found concepts:\n    \u4eba 1.00\n    \u4eba 1.00\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON Output Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "6e24dbc1e4977bd6f4092d0c72169a68"\n}\nconcepts {\n  id: "ai_ZKJ48TFz"\n  name: "\\344\\272\\272"\n  value: 1.0\n  created_at {\n    seconds: 1458214981\n    nanos: 223962000\n  }\n  language: "ja"\n  app_id: "main"\n  visibility {\n    gettable: PUBLIC\n  }\n  user_id: "clarifai"\n}\nconcepts {\n  id: "ai_l8TKp2h5"\n  name: "\\344\\272\\272"\n  value: 1.0\n  created_at {\n    seconds: 1458214981\n    nanos: 223962000\n  }\n  language: "ja"\n  app_id: "main"\n  visibility {\n    gettable: PUBLIC\n  }\n  user_id: "clarifai"\n}\n\n'))))}f.isMDXComponent=!0}}]);