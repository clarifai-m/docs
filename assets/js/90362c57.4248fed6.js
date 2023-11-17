"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2451],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=o.createContext({}),s=function(t){var e=o.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return o.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},b=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),b=r,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||n;return a?o.createElement(f,i(i({ref:e},p),{},{components:a})):o.createElement(f,i({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=b;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},34102:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=a(87462),r=(a(67294),a(3905));const n={description:"How to collaborate on the Clarifai platform",sidebar_position:3},i="Collaboration",l={unversionedId:"clarifai-basics/applications/collaboration",id:"clarifai-basics/applications/collaboration",title:"Collaboration",description:"How to collaborate on the Clarifai platform",source:"@site/docs/clarifai-basics/applications/collaboration.md",sourceDirName:"clarifai-basics/applications",slug:"/clarifai-basics/applications/collaboration",permalink:"/clarifai-basics/applications/collaboration",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/applications/collaboration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"How to collaborate on the Clarifai platform",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Application Settings",permalink:"/clarifai-basics/applications/application-settings"},next:{title:"Authentication",permalink:"/clarifai-basics/authentication/"}},c={},s=[{value:"How to add a collaborator",id:"how-to-add-a-collaborator",level:2}],p={toc:s},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collaboration"},"Collaboration"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to collaborate on the Clarifai platform")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Collaboration is a functionality that allows you to share your apps so that you can work with your team members to label data, create models, and more. This feature comes with complete control of the permissions available in your apps, which allows you to manage the capabilities and information available to each user. "),(0,r.kt)("p",null,"You can give a trusted collaborator full access privileges. You can also invite a worker and grant them limited permissions only to annotate data but not to delete them."),(0,r.kt)("h2",{id:"how-to-add-a-collaborator"},"How to add a collaborator"),(0,r.kt)("p",null,"Go to the application's individual page and select the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," option on the collapsible left sidebar."),(0,r.kt)("p",null,"When redirected to the ",(0,r.kt)("strong",{parentName:"p"},"App Settings")," page, scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"Collaborators")," section. "),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},"Add Collaborators")," button to add a collaborator to your app. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(48723).Z,width:"1891",height:"931"})),(0,r.kt)("p",null,"Then, use the form that pops up to invite a collaborator\u2014provide an email address associated with their Clarifai account, choose the scope of the resources that you would like the collaborator to access, and click the ",(0,r.kt)("strong",{parentName:"p"},"Confirm")," button. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The collaborator you want to invite must have a registered account on the Clarifai portal.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(11700).Z,width:"901",height:"799"})),(0,r.kt)("admonition",{title:"note",type:"important"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Since API keys are tied to a specific user and a specific app, your collaborators cannot create their own API keys. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Collaborators can also invite other collaborators.")))))}d.isMDXComponent=!0},48723:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/add_collaborators-4675272a621528a138a3f7e1193f667a.jpg"},11700:(t,e,a)=>{a.d(e,{Z:()=>o});const o=a.p+"assets/images/collaborator_scopes-c9b42bf711c8ea290b71cca9ea1fc4f1.jpg"}}]);