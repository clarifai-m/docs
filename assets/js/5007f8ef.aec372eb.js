"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5445],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,f=u["".concat(p,".").concat(d)]||u[d]||k[d]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),l=(a(67294),a(3905));const r={description:"Implement fine-grained control over the data that users have access to",sidebar_position:4},i="Scopes",o={unversionedId:"clarifai-basics/authentication/scopes",id:"clarifai-basics/authentication/scopes",title:"Scopes",description:"Implement fine-grained control over the data that users have access to",source:"@site/docs/clarifai-basics/authentication/scopes.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/scopes",permalink:"/clarifai-basics/authentication/scopes",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Implement fine-grained control over the data that users have access to",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Authorize",permalink:"/clarifai-basics/authentication/authorize"},next:{title:"2FA",permalink:"/clarifai-basics/authentication/factor-authentication"}},p={},s=[{value:"Combining Scopes",id:"combining-scopes",level:2},{value:"Operations and Endpoints",id:"operations-and-endpoints",level:2},{value:"Operation Level Scopes",id:"operation-level-scopes",level:3},{value:"Endpoint level scopes",id:"endpoint-level-scopes",level:3}],c={toc:s},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scopes"},"Scopes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Improve your apps' security")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Scopes provide control over the set of functionality and features available when using our API. Modifying scopes allows for fine-grained control over the data that users have access to, and can help keep your app secure from malicious attacks."),(0,l.kt)("p",null,"You can control scopes for your apps at three different levels:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"App-Specific API Keys"),"\u2014Control access to resources used by a specific app and a specific user.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Personal Access Tokens"),"\u2014Control access to resources available to a specific user.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Collaboration"),"\u2014Control access to resources available to collaborators."))),(0,l.kt)("h2",{id:"combining-scopes"},"Combining Scopes"),(0,l.kt)("p",null,"A variety of use cases can be addressed by selecting different combinations of scopes."),(0,l.kt)("p",null,"For example, you might want to create an app that only has access to the search endpoint, but for search to work properly, it needs to access Predict at the operation level ","(","so that it can perform advanced visual searches like searching by an image crop, which first needs to be understood with the prediction before search is performed",")","."),(0,l.kt)("p",null,"By giving the combination of predict op-level but only search endpoint, you can create an app that can perform searches, but not model predictions ","(","like PostModelOutputs",")","."),(0,l.kt)("p",null,"Since collaborators need to create an API key to access the app they are invited to ","(","or use a PAT",")",", the scopes that are attached to the collaborators invited to an app will be intersected with the scopes attached to the API key or PAT. "),(0,l.kt)("p",null,"Therefore, the permissions allowed when making requests will be the minimum set of scopes from that intersection. This ensures that the app owner remains in full control of the permissions they want their collaborators to have."),(0,l.kt)("h2",{id:"operations-and-endpoints"},"Operations and Endpoints"),(0,l.kt)("p",null,"You have control over both operation and endpoint level scopes."),(0,l.kt)("h3",{id:"operation-level-scopes"},"Operation Level Scopes"),(0,l.kt)("p",null,"Operation level scopes provide control over the ability to read, write, or delete a given resource type. To see the always up to date list of operation level scopes available in your plan, create a key in the Portal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Annotation")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Annotations:Add ","(","Write Annotations",")"),(0,l.kt)("li",{parentName:"ul"},"Annotations:Delete ","(","Delete Annotations",")"),(0,l.kt)("li",{parentName:"ul"},"Annotations:Get ","(","Read Annotations",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Concept")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Concepts:Add ","(","Write Concepts",")"),(0,l.kt)("li",{parentName:"ul"},"Concepts:Get ","(","Read Concepts",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Inputs:Add ","(","Write Inputs",")"),(0,l.kt)("li",{parentName:"ul"},"Inputs:Delete ","(","Delete Inputs",")"),(0,l.kt)("li",{parentName:"ul"},"Inputs:Get ","(","Read Inputs",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Model")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Models:Add ","(","Write Models",")"),(0,l.kt)("li",{parentName:"ul"},"Models:Delete ","(","Delete Models",")"),(0,l.kt)("li",{parentName:"ul"},"Models:Get ","(","Read Models",")"),(0,l.kt)("li",{parentName:"ul"},"Models:Train ","(","Train a Custom Model",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Predict")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Predict ","(","Predict on Public and Custom Models",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Search ","(","Search by Inputs and Concepts",")")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Workflow")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Workflows:Add ","(","Write Workflows",")"),(0,l.kt)("li",{parentName:"ul"},"Workflows:Delete ","(","Delete Workflows",")"),(0,l.kt)("li",{parentName:"ul"},"Workflows:Get ","(","Read Workflows",")")),(0,l.kt)("h3",{id:"endpoint-level-scopes"},"Endpoint level scopes"),(0,l.kt)("p",null,"Endpoint level scopes give you control over access to specific endpoints. To see the always up to date list of endpoint level scopes available in your plan, create a key in the Portal."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Concept")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetConcept"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetConceptCounts"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListConcepts"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchConcepts"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostConcepts"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostConceptsSearches")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Input")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteInput"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteInputs"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetInput"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetInputCount"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListInputs"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListModelInputs"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchInputs"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostInputs")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Model")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteModel"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteModelVersion"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteModels"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModel"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModelOutputInfo"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModelVersion"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModelVersionMetrics"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListModelVersions"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListModels"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchModels"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelVersionMetrics"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelVersions"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModels"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelsSearches")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Predict")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelOutputs"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostWorkflowResults")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostSearches")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Workflows")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteWorkflow"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteWorkflows"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetWorkflow"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListWorkflows"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchWorkflows"),(0,l.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostWorkflows")))}k.isMDXComponent=!0}}]);