"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5445],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),f=l,k=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8742:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={sidebar_position:4},s="Scopes",p={unversionedId:"clarifai-basics/authentication/scopes",id:"clarifai-basics/authentication/scopes",title:"Scopes",description:"Scopes provide control over the set of functionality and features available when using our API. Modifying scopes allows for fine-grained control over the data that users have access to, and can help keep your app secure from malicious attacks.",source:"@site/docs/clarifai-basics/authentication/scopes.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/scopes",permalink:"/clarifai-basics/authentication/scopes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/authentication/scopes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Personal Access Tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens"},next:{title:"2FA",permalink:"/clarifai-basics/authentication/factor-authentication"}},c=[{value:"Combining Scopes",id:"combining-scopes",children:[],level:2},{value:"Operations and Endpoints",id:"operations-and-endpoints",children:[{value:"Operation Level Scopes",id:"operation-level-scopes",children:[],level:3},{value:"Endpoint level scopes",id:"endpoint-level-scopes",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scopes"},"Scopes"),(0,r.kt)("p",null,"Scopes provide control over the set of functionality and features available when using our API. Modifying scopes allows for fine-grained control over the data that users have access to, and can help keep your app secure from malicious attacks."),(0,r.kt)("p",null,"You can control scopes for our apps at three different levels:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"App-Specific API Keys")," Control access to resources used by a specific app and a specific user"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Personal Access Tokens")," Control access to resources available to a specific user"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Collaboration")," Control access to resources available to collaborators"),(0,r.kt)("h2",{id:"combining-scopes"},"Combining Scopes"),(0,r.kt)("p",null,"A variety of use cases can be address by selecting different combinations of scopes."),(0,r.kt)("p",null,"For example, you might want to create an app that only has access to the search endpoint, but for search to work properly it needs access to Predict at the operation level ","(","so that it can perform advanced visual searches like searching by an image crop, which first needs to be understood with a prediction before search is performed",")","."),(0,r.kt)("p",null,"By giving the combination of predict op-level but only search endpoint, you can create an app that can perform searches, but not model predictions ","(","like PostModelOutputs",")","."),(0,r.kt)("p",null,"Since collaborators need to create an API key to access the app they are invited to ","(","or use a PAT",")",", the scopes that are attached to the collaborator invite for an app will be intersected with the scopes attached to the API key or PAT. Therefore, the permissions allowed when making requests will be the minimum set of scopes from that intersection. This ensures that the app owner remains in full control of the permissions they want their collaborators to have."),(0,r.kt)("h2",{id:"operations-and-endpoints"},"Operations and Endpoints"),(0,r.kt)("p",null,"You have control over both operation and endpoint level scopes."),(0,r.kt)("h3",{id:"operation-level-scopes"},"Operation Level Scopes"),(0,r.kt)("p",null,"Operation level scopes provide control over the ability to read, write, or delete a given resource type. To see the always up to date list of operation level scopes avilable in your plan create a key in Portal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Annotation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Annotations:Add ","(","Write Annotations",")"),(0,r.kt)("li",{parentName:"ul"},"Annotations:Delete ","(","Delete Annotations",")"),(0,r.kt)("li",{parentName:"ul"},"Annotations:Get ","(","Read Annotations",")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Concept")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Concepts:Add ","(","Write Concepts",")"),(0,r.kt)("li",{parentName:"ul"},"Concepts:Get ","(","Read Concepts",")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inputs:Add ","(","Write Inputs",")"),(0,r.kt)("li",{parentName:"ul"},"Inputs:Delete ","(","Delete Inputs",")"),(0,r.kt)("li",{parentName:"ul"},"Inputs:Get ","(","Read Inputs",")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Model")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Models:Add ","(","Write Models",")"),(0,r.kt)("li",{parentName:"ul"},"Models:Delete ","(","Delete Models",")"),(0,r.kt)("li",{parentName:"ul"},"Models:Get ","(","Read Models",")"),(0,r.kt)("li",{parentName:"ul"},"Models:Train ","(","Train a Custom Model",")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Predict")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Predict ","(","Predict on Public and Custom Models",")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Search")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search ","(","Search by Inputs and Concepts",")")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Workflow")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Workflows:Add ","(","Write Workflows",")"),(0,r.kt)("li",{parentName:"ul"},"Workflows:Delete ","(","Delete Workflows",")"),(0,r.kt)("li",{parentName:"ul"},"Workflows:Get ","(","Read Workflows",")")),(0,r.kt)("h3",{id:"endpoint-level-scopes"},"Endpoint level scopes"),(0,r.kt)("p",null,"Endpoint level scopes give you control over access to specific endpoints. To see the always up to date list of endpoint level scopes available in your plan create a key in Portal."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Concept")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetConcept"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetConceptCounts"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListConcepts"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchConcepts"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostConcepts"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostConceptsSearches")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Input")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteInput"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteInputs"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetInput"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetInputCount"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListInputs"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListModelInputs"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchInputs"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostInputs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Model")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteModel"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteModelVersion"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteModels"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModel"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModelOutputInfo"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModelVersion"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetModelVersionMetrics"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListModelVersions"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListModels"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchModels"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelVersionMetrics"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelVersions"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModels"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelsSearches")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Predict")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostModelOutputs"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostWorkflowResults")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Search")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostSearches")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Workflows")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteWorkflow"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/DeleteWorkflows"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/GetWorkflow"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/ListWorkflows"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PatchWorkflows"),(0,r.kt)("li",{parentName:"ul"},"/clarifai.api.V2/PostWorkflows")))}d.isMDXComponent=!0}}]);