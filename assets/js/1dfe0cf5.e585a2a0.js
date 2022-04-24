"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6726],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||c;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35670:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var a=n(87462),r=n(63366),c=(n(67294),n(3905)),o=["components"],i={sidebar_position:3},s="Personal Access Tokens",l={unversionedId:"clarifai-basics/authentication/personal-access-tokens",id:"clarifai-basics/authentication/personal-access-tokens",title:"Personal Access Tokens",description:"Personal Access Tokens \\(PAT here for short\\) represent a specific user when accessing the Clarifai API.",source:"@site/docs/clarifai-basics/authentication/personal-access-tokens.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/personal-access-tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/authentication/personal-access-tokens.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Authorize",permalink:"/clarifai-basics/authentication/authorize"},next:{title:"Scopes",permalink:"/clarifai-basics/authentication/scopes"}},u=[],p={toc:u};function f(e){var t=e.components,i=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"personal-access-tokens"},"Personal Access Tokens"),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Personal Access Tokens ","(","PAT here for short",")"," represent a specific user when accessing the Clarifai API."),(0,c.kt)("p",null,"PATs allow you to access multiple apps with a single API key. PATs allow a user to access their own apps and any apps where they have been added as collaborators."),(0,c.kt)("p",null,"PATs also allow you to create apps and app-specific API keys programmatically through the API. This is crucial for programs that segregate data of each of their end-users into different apps."),(0,c.kt)("p",null,"To create a new PAT, navigate to the bottom left hand corner of the application overview page and click on your initials:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"navigate-authentication",src:n(30257).Z})),(0,c.kt)("p",null,"Select authentication:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"authentication-screen",src:n(74826).Z})),(0,c.kt)("p",null,'And click on "Create a Personal Access Token":'),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"create-pat",src:n(12168).Z})))}f.isMDXComponent=!0},74826:function(e,t,n){t.Z=n.p+"assets/images/authentication_screen-9ac4fcae2ced9ade431ab8bfbcf9725e.jpg"},12168:function(e,t,n){t.Z=n.p+"assets/images/create_pat-ed740cd39617827e81a9496b9c8d48ce.jpg"},30257:function(e,t,n){t.Z=n.p+"assets/images/navigate_authentication-9cfee23042096a5265956b24102628fa.jpg"}}]);