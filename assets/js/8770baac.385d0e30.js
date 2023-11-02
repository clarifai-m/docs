"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4015],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(o),h=n,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||a;return o?r.createElement(f,l(l({ref:t},d),{},{components:o})):r.createElement(f,l({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},23671:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={description:"Learn about changes to the workflow builder model IDs",sidebar_position:-6},l="Changes to Workflow Builder Model IDs",i={unversionedId:"product-updates/upcoming-api-changes/workflow-builder-ids",id:"product-updates/upcoming-api-changes/workflow-builder-ids",title:"Changes to Workflow Builder Model IDs",description:"Learn about changes to the workflow builder model IDs",source:"@site/docs/product-updates/upcoming-api-changes/workflow-builder-ids.md",sourceDirName:"product-updates/upcoming-api-changes",slug:"/product-updates/upcoming-api-changes/workflow-builder-ids",permalink:"/product-updates/upcoming-api-changes/workflow-builder-ids",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/product-updates/upcoming-api-changes/workflow-builder-ids.md",tags:[],version:"current",sidebarPosition:-6,frontMatter:{description:"Learn about changes to the workflow builder model IDs",sidebar_position:-6},sidebar:"tutorialSidebar",previous:{title:"Enabling Secure Data Hosting",permalink:"/product-updates/upcoming-api-changes/secure-data-hosting"},next:{title:"Changes to Use of PATs and API Keys",permalink:"/product-updates/upcoming-api-changes/pat-api-keys"}},s={},u=[{value:"Issue",id:"issue",level:2},{value:"Fix",id:"fix",level:2},{value:"What you need to do",id:"what-you-need-to-do",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"changes-to-workflow-builder-model-ids"},"Changes to Workflow Builder Model IDs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about changes to the workflow builder model IDs")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Change"),": Fixed an issue where the workflow builder inconsistently returned an old hash-based ID, instead of a new, user-friendly V2 ID of models"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fix Release Date"),": July 27th, 2023 "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Who is affected"),":  Portal and API users who need to match the model IDs returned from workflows"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type of change"),": Critical, breaking change"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What you need to do"),": ",(0,n.kt)("a",{parentName:"p",href:"#what-you-need-to-do"},"See below"),"."),(0,n.kt)("h2",{id:"issue"},"Issue"),(0,n.kt)("p",null,"If you pick a model when creating a workflow on the Portal, you will see the ID of the model you\u2019ve selected. This is the V2 ID, which is a human-readable, user-friendly version of the ID of the model. "),(0,n.kt)("p",null,"For example, the V2 ID of the following visual classification model is ",(0,n.kt)("inlineCode",{parentName:"p"},"apparel-classification-v2"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"apparel classification model id",src:o(9759).Z,width:"1517",height:"743"})),(0,n.kt)("p",null,"However, if you save the workflow and access the model again, you will notice that the ID of the model has changed to an old version, which we had migrated from. That ID is a hash value that may not be user-friendly."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"apparel classification model hash id",src:o(85158).Z,width:"1532",height:"740"})),(0,n.kt)("p",null,"And if you use the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/workflows/create-get-update-delete#get-all-workflows-in-an-app"},"ListWorkflows")," API method to get all the custom workflows in your app, you notice that the backend returns the old hash-based ID of the model. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"get custom workflows app",src:o(57024).Z,width:"1819",height:"609"})),(0,n.kt)("h2",{id:"fix"},"Fix"),(0,n.kt)("p",null,"To fix the inconsistency, all workflow graphs will start returning the new V2 ID of models, instead of the old hash-based ID. "),(0,n.kt)("h2",{id:"what-you-need-to-do"},"What you need to do"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you\u2019re an API user who depends on programmatically matching the model IDs returned from workflows, you need to ensure that you correctly reference the V2 ID of your models in your code.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you\u2019re a Portal user who checks the results of your workflow graphs by matching the model IDs, you need to ensure that you correctly check the V2 ID of your models."))))}c.isMDXComponent=!0},9759:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workflow-builder-1-710d0614428e930243a0464163816cef.png"},85158:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workflow-builder-2-f31b2025a9cf05384e6d7576efe6977a.png"},57024:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workflow-builder-3-051fca53d14ef4253932e5f430646d81.png"}}]);