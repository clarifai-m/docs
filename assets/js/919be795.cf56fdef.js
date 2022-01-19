"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9979],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,p=f["".concat(c,".").concat(d)]||f[d]||m[d]||i;return n?r.createElement(p,s(s({ref:t},u),{},{components:n})):r.createElement(p,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={description:"RBAC is a feature for administrators to define and assign different roles to the users in the system.",sidebar_position:6},c="Role-Based Access Control",l={unversionedId:"clarifai-basics/authentication/rbac",id:"clarifai-basics/authentication/rbac",title:"Role-Based Access Control",description:"RBAC is a feature for administrators to define and assign different roles to the users in the system.",source:"@site/docs/clarifai-basics/authentication/rbac.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/rbac",permalink:"/clarifai-basics/authentication/rbac",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/authentication/rbac.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"RBAC is a feature for administrators to define and assign different roles to the users in the system.",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"2FA",permalink:"/clarifai-basics/authentication/factor-authentication"},next:{title:"Clarifai Community Quick Start",permalink:"/clarifai-basics/community"}},u=[{value:"User Management",id:"user-management",children:[{value:"View Users",id:"view-users",children:[],level:3},{value:"Create New Users",id:"create-new-users",children:[],level:3},{value:"Edit Users",id:"edit-users",children:[],level:3}],level:2},{value:"Team Management",id:"team-management",children:[{value:"List Teams",id:"list-teams",children:[],level:3}],level:2}],m={toc:u};function f(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"role-based-access-control"},"Role-Based Access Control"),(0,i.kt)("p",null,"Role-based access control ","(","RBAC",")"," functionality enables application admins to limit the permissions of some users within a team. It is both a security best practice ","(","see the principle of least privilege",")"," and often a compliance requirement for admins to maintain separate accounts for their user level activities."),(0,i.kt)("p",null,"Currently RBAC is available to our on-premise enterprise customers only. RBAC is coming to cloud customers soon, stay tuned."),(0,i.kt)("h2",{id:"user-management"},"User Management"),(0,i.kt)("p",null,"The administrator of the client will have the full permission on their account, and be able to create, assign and define roles for their own users. User management is one of the core features of organization administrators."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8238).Z})),(0,i.kt)("h3",{id:"view-users"},"View Users"),(0,i.kt)("p",null,"Under the users view, it lists the users in the organization. User\u2019s full name, user ID, email, number of teams they are associated with, system role, and the 2nd-factor authentication status are listed."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7974).Z})),(0,i.kt)("h3",{id:"create-new-users"},"Create New Users"),(0,i.kt)("p",null,"The administrator can create a new user under the user management section. This is a straightforward way for the administrator to provision new users to the system. First Name, Last Name, Email and the Password will be needed to create a new user into the system."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2105).Z})),(0,i.kt)("h3",{id:"edit-users"},"Edit Users"),(0,i.kt)("p",null,"On this page, the administrator is able to change the name and the email for the users."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6814).Z})),(0,i.kt)("h2",{id:"team-management"},"Team Management"),(0,i.kt)("p",null,"Team is a holder for a group of users with the same permission settings to the Clarifai applications."),(0,i.kt)("h3",{id:"list-teams"},"List Teams"),(0,i.kt)("p",null,"The Administrator is able to see the Teams menu item from the left menu bar."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(127).Z})),(0,i.kt)("p",null,"The listing view gives an overview of all the users within the Name, ID, and Date of Creation. Administrator can also search by keyword."))}f.isMDXComponent=!0},2105:function(e,t,n){t.Z=n.p+"assets/images/create-new-users-cfe3cf1a1e55f2c240fbcf8bb4da64cb.png"},6814:function(e,t,n){t.Z=n.p+"assets/images/edit-the-users-9fbc6a481f94ac0efad5d12cef6c96de.png"},127:function(e,t,n){t.Z=n.p+"assets/images/list-teams-01e4bd9f1e48b5266eb30ba0bd04e8ac.png"},8238:function(e,t,n){t.Z=n.p+"assets/images/usercreationmanagment-4190fb82d4e47b3a61b1fbfc174f2dfe.png"},7974:function(e,t,n){t.Z=n.p+"assets/images/view-the-users-c6ba639ee6c6d827e89027816e006231.png"}}]);