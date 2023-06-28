"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[682],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>f});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=u(n),k=l,f=c["".concat(s,".").concat(k)]||c[k]||p[k]||o;return n?r.createElement(f,a(a({ref:e},d),{},{components:n})):r.createElement(f,a({ref:e},d))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:l,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},34853:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const o={description:"Learn how to enhance the security of your Clarifai organization",sidebar_position:3},a="Security",i={unversionedId:"portal-guide/clarifai-organizations/security",id:"portal-guide/clarifai-organizations/security",title:"Security",description:"Learn how to enhance the security of your Clarifai organization",source:"@site/docs/portal-guide/clarifai-organizations/security.md",sourceDirName:"portal-guide/clarifai-organizations",slug:"/portal-guide/clarifai-organizations/security",permalink:"/portal-guide/clarifai-organizations/security",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn how to enhance the security of your Clarifai organization",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Apps, Models, and Workflows",permalink:"/portal-guide/clarifai-organizations/apps-models-workflows"},next:{title:"Advanced Topics",permalink:"/portal-guide/advanced-topics"}},s={},u=[{value:"Scopes and Access Levels of Organization Members",id:"scopes-and-access-levels-of-organization-members",level:2},{value:"How to Enforce the Security of Your Clarifai Organization",id:"how-to-enforce-the-security-of-your-clarifai-organization",level:2}],d={toc:u},c="wrapper";function p(t){let{components:e,...o}=t;return(0,l.kt)(c,(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"security"},"Security"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn how to enhance the security of your Clarifai organization")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"At Clarifai, we understand that the security of your organization is of utmost importance. We are committed to prioritizing security and have designed our platform to cater to the needs of even the most security-conscious companies. "),(0,l.kt)("p",null,"Our robust security measures ensure the protection and confidentiality of your valuable data. "),(0,l.kt)("h2",{id:"scopes-and-access-levels-of-organization-members"},"Scopes and Access Levels of Organization Members"),(0,l.kt)("p",null,"Scopes and access levels play a crucial role in defining the boundaries of the components, resources, or data that members of an organization can access or manipulate. "),(0,l.kt)("p",null,"Every member of a Clarifai organization\u2014administrator, organization contributor, or team contributor\u2014has their own pre-set scopes that determine what actions they can perform and what resources they can access. "),(0,l.kt)("p",null,"The permissions allowed for each user type help to protect your organization\u2019s resources from unauthorized infiltration, maintain the privacy of your assets, and ensure trackability of resources by knowing who has access to what. "),(0,l.kt)("p",null,"Here is a table detailing the scopes and access levels allowed for each user type within a Clarifai organization:"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Administrator")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Organization Contributor")),(0,l.kt)("td",null,(0,l.kt)("strong",null,"Team Contributor"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"View sidebar items"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Create Models"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Create Workflows"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Edit App ID"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Edit App Description"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Edit App Notes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"View Collaborators"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Edit Collaborators"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Base Workflow View"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Base Workflow Edit"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Delete All Models"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Delete App"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Invite / Modify / Delete Members"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Create / Edit / Delete Teams"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Add Members to Teams"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Add Apps to Teams"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Create Apps"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Use Modules"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Create / Delete Modules"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Install / Uninstall Modules"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"Yes"),(0,l.kt)("td",null,"No"))),(0,l.kt)("h2",{id:"how-to-enforce-the-security-of-your-clarifai-organization"},"How to Enforce the Security of Your Clarifai Organization"),(0,l.kt)("p",null,"You can take some additional actions to augment the security of your organization at Clarifai."),(0,l.kt)("p",null,"To access the security settings of your organization, start by clicking your organization\u2019s profile icon at the top-right section of the navigation bar. On the drop-down list that follows, select the ",(0,l.kt)("strong",{parentName:"p"},"Security")," option. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Security organization settings",src:n(72902).Z,width:"368",height:"429"})),(0,l.kt)("p",null,"On the ",(0,l.kt)("strong",{parentName:"p"},"Security")," page, you can view the password policies associated with your organization\u2019s account. You can also create and view identity providers to reinforce the security of your organization. "),(0,l.kt)("p",null,"For example, if you want to add a security identity provider, such as SAML (Security Assertion Markup Language), click the ",(0,l.kt)("strong",{parentName:"p"},"Create Identity Provider")," button. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Security page",src:n(34927).Z,width:"1889",height:"495"})),(0,l.kt)("p",null,"On the next page, provide its details and click the ",(0,l.kt)("strong",{parentName:"p"},"Create")," button to finalize the process. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Create identity provider",src:n(18253).Z,width:"1535",height:"561"})),(0,l.kt)("p",null,"SAML is a reliable mechanism that can add to the security of your organization\u2019s account by ensuring authentication and authorization data are securely transferred between parties."))}p.isMDXComponent=!0},18253:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/create_identity_provider-f2047aebeb5b2a1562f1e3673ad705b6.png"},72902:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/security_option-5255235fa3ab8f12e0162b28c82476fb.png"},34927:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/security_page-32a5652555f3bb5935d8634d7ff35477.png"}}]);