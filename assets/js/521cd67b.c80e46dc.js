"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1969],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),l=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(t),d=n,w=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?o.createElement(w,s(s({ref:r},c),{},{components:t})):o.createElement(w,s({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6558:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var o=t(7462),n=t(3366),a=(t(7294),t(3905)),s=["components"],i={description:"Get a head start with your data.",sidebar_position:1},u="Base Workflows",l={unversionedId:"api-guide/workflows/base-workflows",id:"api-guide/workflows/base-workflows",title:"Base Workflows",description:"Get a head start with your data.",source:"@site/docs/api-guide/workflows/base-workflows.md",sourceDirName:"api-guide/workflows",slug:"/api-guide/workflows/base-workflows",permalink:"/docs-new/api-guide/workflows/base-workflows",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/workflows/base-workflows.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get a head start with your data.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating Workflows",permalink:"/docs-new/api-guide/workflows/"},next:{title:"Input Nodes",permalink:"/docs-new/api-guide/workflows/input_nodes"}},c=[],p={toc:c};function f(e){var r=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base-workflows"},"Base Workflows"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get a head start with your data")),(0,a.kt)("hr",null),(0,a.kt)("p",null,'The Base Workflow includes one prebuilt Clarifai Model that provides the basic structure for indexing your data. The Base Workflow gives you a "head start" when working with your data\u2014by pre-indexing your inputs for search and by providing a default embedding for your custom models. '),(0,a.kt)("p",null,"Your base workflow is what makes your data sortable and searchable as soon as it is uploaded. "),(0,a.kt)("p",null,"Choose a base workflow that you can build upon to create a custom solution. For example, if you're training a custom model around food, you could choose the Food model as your Base Workflow to optimize your custom model performance."),(0,a.kt)("p",null,"You can choose one Base Workflow per app, and you can change your base workflow once your app is created. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choose your base workflow when you set up your app.",src:t(2351).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Change your base workflow once an app is created.",src:t(133).Z})))}f.isMDXComponent=!0},2351:function(e,r,t){r.Z=t.p+"assets/images/baseworkflowsetup-43b75cb396652a81e4d06e521032b8bb.jpg"},133:function(e,r,t){r.Z=t.p+"assets/images/changebasewkflw-896b433ba60eb7d8982ef28efbc31f8d.jpg"}}]);