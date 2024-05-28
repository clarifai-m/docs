"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9702],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),s=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),y=r,c=d["".concat(g,".").concat(y)]||d[y]||m[y]||o;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},71773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(58168),r=(a(96540),a(15680));const o={description:"Learn about scheduled changes to the Clarifai platform"},l="Upcoming Platform Changes",i={unversionedId:"product-updates/upcoming-api-changes/README",id:"product-updates/upcoming-api-changes/README",title:"Upcoming Platform Changes",description:"Learn about scheduled changes to the Clarifai platform",source:"@site/docs/product-updates/upcoming-api-changes/README.mdx",sourceDirName:"product-updates/upcoming-api-changes",slug:"/product-updates/upcoming-api-changes/",permalink:"/product-updates/upcoming-api-changes/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/product-updates/upcoming-api-changes/README.mdx",tags:[],version:"current",frontMatter:{description:"Learn about scheduled changes to the Clarifai platform"},sidebar:"tutorialSidebar",previous:{title:"Scribe LabelForce",permalink:"/data-labeling-services/labeling-services"},next:{title:"Enabling Secure Data Hosting",permalink:"/product-updates/upcoming-api-changes/secure-data-hosting"}},g={},s=[{value:"Upcoming Changes",id:"upcoming-changes",level:2},{value:"Completed Changes",id:"completed-changes",level:2},{value:"Changes to the Use of PATs and API Keys",id:"changes-to-the-use-of-pats-and-api-keys",level:3},{value:"Deprecation of <code>closed_environment</code>",id:"deprecation-of-closed_environment",level:3},{value:"Updates to Model and Model Version Endpoints",id:"updates-to-model-and-model-version-endpoints",level:3},{value:"Changes to <strong>PostModelOutputs</strong> and <strong>PostWorkflowResults</strong> Responses",id:"changes-to-postmodeloutputs-and-postworkflowresults-responses",level:3},{value:"Other Previous Changes",id:"other-previous-changes",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"upcoming-platform-changes"},"Upcoming Platform Changes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Learn about scheduled changes to the Clarifai platform")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"This page lists the changes that we want you to be aware of well in advance, as they may affect how you use the Clarifai platform. These changes include scheduled downtime and other improvements in the stability, performance, or functionality of the Clarifai platform, all aimed at better serving you as a customer."),(0,r.yg)("p",null,"Some of these changes may not be backward compatible and may require you to update how you call our APIs. We have created this page with the intention of being as transparent as possible, so that you can plan any corresponding changes in advance and minimize any interruptions to your usage of Clarifai services."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The dates listed in the following tables indicate when we plan to implement the changes. While we may actually make the change in the days following the specified date, it is advisable to update your client-side code before that date to minimize any downtime to your applications.")),(0,r.yg)("p",null,"We will continue to regularly update this page, and a good way to stay up to date is by watching our ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/docs"},"documentation repository on GitHub"),"."),(0,r.yg)("h2",{id:"upcoming-changes"},"Upcoming Changes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"completed-changes"},"Completed Changes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"August 15, 2023"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"(Breaking change)")," Enabling Secure Data Hosting (SDH) feature for all users"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Learn more ",(0,r.yg)("a",{parentName:"td",href:"./secure-data-hosting"},"here"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"July 27th, 2023"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"(Breaking change)")," Fixed critical issue with the workflow builder returning old hash-based ID"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Learn more ",(0,r.yg)("a",{parentName:"td",href:"./workflow-builder-ids"},"here"))))),(0,r.yg)("h3",{id:"changes-to-the-use-of-pats-and-api-keys"},"Changes to the Use of PATs and API Keys"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"March 30th, 2023"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("strong",{parentName:"td"},"(Breaking change)"),"  Critical changes to the use of PATs and API keys"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Learn more ",(0,r.yg)("a",{parentName:"td",href:"./pat-api-keys"},"here"))))),(0,r.yg)("h3",{id:"deprecation-of-closed_environment"},"Deprecation of ",(0,r.yg)("inlineCode",{parentName:"h3"},"closed_environment")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"January 26th, 2023"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Deprecation of ",(0,r.yg)("inlineCode",{parentName:"td"},"closed_environment")," in favor of ",(0,r.yg)("inlineCode",{parentName:"td"},"enrich_dataset")," for creating embedding-classifier models"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Learn more ",(0,r.yg)("a",{parentName:"td",href:"./closed-environment"},"here"))))),(0,r.yg)("h3",{id:"updates-to-model-and-model-version-endpoints"},"Updates to Model and Model Version Endpoints"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"January 20th, 2023"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Critical updates to model and model version endpoints"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Learn more ",(0,r.yg)("a",{parentName:"td",href:"./model-version-endpoints"},"here"))))),(0,r.yg)("h3",{id:"changes-to-postmodeloutputs-and-postworkflowresults-responses"},"Changes to ",(0,r.yg)("strong",{parentName:"h3"},"PostModelOutputs")," and ",(0,r.yg)("strong",{parentName:"h3"},"PostWorkflowResults")," Responses"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"January 4th, 2023"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Exclusion of Some Fields From ",(0,r.yg)("strong",{parentName:"td"},"PostModelOutputs")," and ",(0,r.yg)("strong",{parentName:"td"},"PostWorkflowResults")," Prediction Responses"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Learn more ",(0,r.yg)("a",{parentName:"td",href:"./postmodeloutputs-responses"},"here"))))),(0,r.yg)("h3",{id:"other-previous-changes"},"Other Previous Changes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Date"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Change"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Varied"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Other previous completed changes"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Learn more ",(0,r.yg)("a",{parentName:"td",href:"./other-previous-changes"},"here"))))))}m.isMDXComponent=!0}}]);