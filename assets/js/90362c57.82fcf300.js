"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2342],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var o=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),s=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return o.createElement(p.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=s(t),u=n,y=g["".concat(p,".").concat(u)]||g[u]||d[u]||r;return t?o.createElement(y,l(l({ref:a},c),{},{components:t})):o.createElement(y,l({ref:a},c))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[g]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75421:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=t(58168),n=(t(96540),t(15680));const r={description:"How to collaborate on the Clarifai platform",sidebar_position:3},l="App Collaboration",i={unversionedId:"clarifai-basics/applications/collaboration",id:"clarifai-basics/applications/collaboration",title:"App Collaboration",description:"How to collaborate on the Clarifai platform",source:"@site/docs/clarifai-basics/applications/collaboration.md",sourceDirName:"clarifai-basics/applications",slug:"/clarifai-basics/applications/collaboration",permalink:"/clarifai-basics/applications/collaboration",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/applications/collaboration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"How to collaborate on the Clarifai platform",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"App Overview and Settings",permalink:"/clarifai-basics/applications/application-settings"},next:{title:"App Templates",permalink:"/clarifai-basics/app-templates"}},p={},s=[{value:"How to Add a Collaborator",id:"how-to-add-a-collaborator",level:2},{value:"Via App Overview Page",id:"via-app-overview-page",level:3},{value:"Via App Settings Page",id:"via-app-settings-page",level:3},{value:"Choose Scopes",id:"choose-scopes",level:2}],c={toc:s},g="wrapper";function d(e){let{components:a,...r}=e;return(0,n.yg)(g,(0,o.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"app-collaboration"},"App Collaboration"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"How to collaborate on the Clarifai platform")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Collaboration is a functionality that allows you to share your apps so that you can work with your team members to label data, create models, and more. With this feature, you can control the permissions available in your apps and manage the capabilities available to each user. "),(0,n.yg)("p",null,"For example, you can give a trusted collaborator full access privileges. You can also invite a worker and grant them limited permissions, such as only to annotate data but not to delete them."),(0,n.yg)("h2",{id:"how-to-add-a-collaborator"},"How to Add a Collaborator"),(0,n.yg)("h3",{id:"via-app-overview-page"},"Via App Overview Page"),(0,n.yg)("p",null,"You can easily add a collaborator directly from the ",(0,n.yg)("strong",{parentName:"p"},"App Overview")," page. "),(0,n.yg)("p",null,"Here\u2019s how:"),(0,n.yg)("p",null,(0,n.yg)("img",{src:t(61947).A,width:"1898",height:"826"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1.")," Go to the specific application where you want to add a collaborator;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2.")," Select the ",(0,n.yg)("strong",{parentName:"p"},"Overview")," option on the collapsible left sidebar;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"3.")," In the upper-right corner of the ",(0,n.yg)("strong",{parentName:"p"},"App Overview")," page, click the add collaborator button;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"4.")," A form will appear. Enter the email address associated with the collaborator\u2019s Clarifai account and ",(0,n.yg)("a",{parentName:"p",href:"#choose-scopes"},"specify the scope")," of resources you want them to access;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"5.")," Lastly, click the ",(0,n.yg)("strong",{parentName:"p"},"Confirm")," button. The invited collaborator will receive an email notification informing them that they have been added to the app."),(0,n.yg)("h3",{id:"via-app-settings-page"},"Via App Settings Page"),(0,n.yg)("p",null,"You can also add a collaborator from the ",(0,n.yg)("strong",{parentName:"p"},"App Settings")," page. "),(0,n.yg)("p",null,"Here's how: "),(0,n.yg)("p",null,(0,n.yg)("img",{src:t(83616).A,width:"1903",height:"884"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"1.")," Go to the specific application where you want to add a collaborator;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"2.")," Select the ",(0,n.yg)("strong",{parentName:"p"},"Settings")," option on the collapsible left sidebar;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"3.")," Once on the ",(0,n.yg)("strong",{parentName:"p"},"App Settings")," page, scroll down to find the ",(0,n.yg)("strong",{parentName:"p"},"Collaborators")," section;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"4.")," Click the ",(0,n.yg)("strong",{parentName:"p"},"Add Collaborators")," button;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"5.")," A form will appear. Enter the email address associated with the collaborator\u2019s Clarifai account and ",(0,n.yg)("a",{parentName:"p",href:"#choose-scopes"},"specify the scope")," of resources you want them to access;"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"6.")," Lastly, click the ",(0,n.yg)("strong",{parentName:"p"},"Confirm")," button. The invited collaborator will receive an email notification informing them that they have been added to the app."),(0,n.yg)("h2",{id:"choose-scopes"},"Choose Scopes"),(0,n.yg)("p",null,"You can select specific scopes when adding a collaborator. Modifying these scopes provides fine-grained control over the data that users can access, enhancing your app's security and preventing unauthorized intrusions."),(0,n.yg)("p",null,"In the ",(0,n.yg)("strong",{parentName:"p"},"Add Collaborator")," form, you can click the ",(0,n.yg)("strong",{parentName:"p"},"Select All Scopes")," button to choose all scopes at once. Alternatively, you can select individual scopes from the listed ",(0,n.yg)("strong",{parentName:"p"},"BASIC SCOPES"),", or click on the ",(0,n.yg)("strong",{parentName:"p"},"ADVANCED SCOPES")," option to access more advanced choices."),(0,n.yg)("p",null,"You can edit a collaborator's scopes at a later time."),(0,n.yg)("p",null,"These are the basic scopes you can choose:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"Annotation: Add and Remove Annotations on Inputs\nCollaborator: Add, Remove and Patch Collaborators\nCollector: Add, Remove and Patch Input Collectors\nConcept: Add, Remove and Patch Concept\nInput: Add and Remove Inputs to an App\nModel: Add, Remove and Train Custom Models\nPredict: Predict on Public and Custom Models\nSearch: Search over Inputs an App\nTask: Add, Remove and Patch Scribe labeling Tasks\nVocab: Add, Remove and Delete lists of Concepts\nWorkflow: Add, Remove and Delete Workflows of Models\n")),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/scopes/"},"Click here")," to learn more about scopes."),(0,n.yg)("admonition",{title:"Collaboration",type:"danger"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"Personal Access Tokens (PATs)")," are automatically generated for collaborators, providing them access to the Clarifai API.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Collaborators can also invite other collaborators.")))))}d.isMDXComponent=!0},61947:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/app-collaboration-1-02766f02c446d64cf509732910f81429.png"},83616:(e,a,t)=>{t.d(a,{A:()=>o});const o=t.p+"assets/images/app-collaboration-2-9c613e40ae84faa71b3c962c12693f8f.png"}}]);