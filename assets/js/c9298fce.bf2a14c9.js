"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=a(87462),n=(a(67294),a(3905));const r={},o="Using Postman with Clarifai APIs",l={unversionedId:"api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",id:"api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",title:"Using Postman with Clarifai APIs",description:"Introduction",source:"@site/docs/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis.md",sourceDirName:"api-guide/api-overview/helpful-api-resources",slug:"/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",permalink:"/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Helpful API Resources",permalink:"/api-guide/api-overview/helpful-api-resources"},next:{title:"Your Data",permalink:"/api-guide/data/"}},s={},p=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Postman Basics",id:"postman-basics",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1: Fork Your Postman Collection",id:"step-1-fork-your-postman-collection",level:3},{value:"Step 2: Get Your PAT Token",id:"step-2-get-your-pat-token",level:3},{value:"Step 3: Set up Authorization",id:"step-3-set-up-authorization",level:3},{value:"Step 4: Create Your Postman Environment",id:"step-4-create-your-postman-environment",level:3},{value:"Step 5: Add Variables to Postman Environment",id:"step-5-add-variables-to-postman-environment",level:3},{value:"Step 6: Test Clarifai API for SUCCESS!",id:"step-6-test-clarifai-api-for-success",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-postman-with-clarifai-apis"},"Using Postman with Clarifai APIs"),(0,n.kt)("h2",{id:"introduction"},(0,n.kt)("strong",{parentName:"h2"},"Introduction")),(0,n.kt)("p",null,"This page explains how to use ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," to perform some API calls to Clarifai by showing the actions available within the Clarifai platform. You can use Postman to make a wide variety of ",(0,n.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PATCH"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"DELETE")," calls."),(0,n.kt)("p",null,"With Postman, you can use, hit, or test the Clarifai API without the need to use the Portal or call the endpoints programmatically. Postman also allows you to make API calls and generate code snippets in your favorite programming language. You can use the snippets to make REST requests to the Clarifai API."),(0,n.kt)("p",null,"This page will hopefully get you set up and somewhat familiar with using Postman to make requests to the Clarifai platform. After learning how to use Postman to make calls to Clarifai, you can make other requests by referring to the REST examples throughout this documentation. "),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An active Clarifai account"),(0,n.kt)("li",{parentName:"ul"},"Basic knowledge of an API structure and JSON formatting")),(0,n.kt)("h2",{id:"postman-basics"},"Postman Basics"),(0,n.kt)("p",null,"By clicking the ",(0,n.kt)("strong",{parentName:"p"},"Send")," button , you can receive the response for a particular request you created or selected from the collection. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(88976).Z,width:"2608",height:"1566"})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Follow the steps below to start using Postman with Clarifai APIs."),(0,n.kt)("h3",{id:"step-1-fork-your-postman-collection"},"Step 1: Fork Your Postman Collection"),(0,n.kt)("p",null,"Click the button below to fork the Clarifai Postman collection to your workspace."),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://god.gw.postman.com/run-collection/30622694-ddd58eb6-5c51-42a3-aa0d-97cc0efd546d?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D30622694-ddd58eb6-5c51-42a3-aa0d-97cc0efd546d%26entityType%3Dcollection%26workspaceId%3D00399af6-b92f-47d8-938f-0cacf755c972"},(0,n.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,n.kt)("h3",{id:"step-2-get-your-pat-token"},"Step 2: Get Your PAT Token"),(0,n.kt)("p",null,"Obtain your ",(0,n.kt)("strong",{parentName:"p"},"PAT")," by ",(0,n.kt)("em",{parentName:"p"},"Logging into Portal \u2192 Profile Icon \u2192 Security Settings \u2192 Create Personal Access Token \u2192 Set the scopes \u2192 Confirm.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://clarifai.com/signup"},"this link")," to create Clarifai account.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Learn how to get your PAT ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"here"),"."))),(0,n.kt)("h3",{id:"step-3-set-up-authorization"},"Step 3: Set up Authorization"),(0,n.kt)("p",null,"Postman allows users to setup authorization in a parental level for each collection so that you dont have to add it to the headers of each request individually. To set this feature go to  ",(0,n.kt)("strong",{parentName:"p"},"Authorization")," tab of the collection and set the values as shown below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(22787).Z,width:"3362",height:"1204"})),(0,n.kt)("h3",{id:"step-4-create-your-postman-environment"},"Step 4: Create Your Postman Environment"),(0,n.kt)("p",null,"Set up environment in your personal workspace."),(0,n.kt)("p",null,"Click on the eye icon placed on the right panel to view the environment. Click the ",(0,n.kt)("strong",{parentName:"p"},"Add")," button to create a new environment."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(67450).Z,width:"2696",height:"1120"})),(0,n.kt)("h3",{id:"step-5-add-variables-to-postman-environment"},"Step 5: Add Variables to Postman Environment"),(0,n.kt)("p",null,"Add the following variables to the new environment to start making API calls."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(13709).Z,width:"1487",height:"223"})),(0,n.kt)("p",null,"The values for variable can be set as following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"base_url"),"\u2014",(0,n.kt)("a",{parentName:"li",href:"https://api.clarifai.com"},"https://api.clarifai.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),"\u2014Add the PAT (this is what is used for authorization)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"user_id"),"\u2014Add the User ID ")),(0,n.kt)("h3",{id:"step-6-test-clarifai-api-for-success"},"Step 6: Test Clarifai API for SUCCESS!"),(0,n.kt)("p",null,"To test if its working , select ",(0,n.kt)("strong",{parentName:"p"},"Applications")," collection. From that select ",(0,n.kt)("strong",{parentName:"p"},"Create Application (Universal)")," request and hit ",(0,n.kt)("strong",{parentName:"p"},"Send"),". You will get the following response body if all the steps have been done correctly."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(88976).Z,width:"2608",height:"1566"})))}m.isMDXComponent=!0},22787:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-1-39c2b167fc45568d81375342341410e1.png"},88976:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-2-0df7395dd524832f50050165008d856b.png"},67450:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-3-e985fac8c7c76ab29de604de2cee1c9f.png"},13709:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-5-418cf8b48223b089a4b2d05cee10f6ef.png"}}]);