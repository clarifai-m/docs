"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1969],{3905:function(e,r,o){o.d(r,{Zo:function(){return l},kt:function(){return d}});var t=o(7294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=t.createContext({}),c=function(e){var r=t.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},l=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(o),d=n,w=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return o?t.createElement(w,i(i({ref:r},l),{},{components:o})):t.createElement(w,i({ref:r},l))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6558:function(e,r,o){o.r(r),o.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var t=o(7462),n=o(3366),a=(o(7294),o(3905)),i=["components"],s={description:"Get a head start with your data.",sidebar_position:1},u="Base Workflows",c={unversionedId:"api-guide/workflows/base-workflows",id:"api-guide/workflows/base-workflows",title:"Base Workflows",description:"Get a head start with your data.",source:"@site/docs/api-guide/workflows/base-workflows.md",sourceDirName:"api-guide/workflows",slug:"/api-guide/workflows/base-workflows",permalink:"/api-guide/workflows/base-workflows",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/workflows/base-workflows.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get a head start with your data.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating Workflows",permalink:"/api-guide/workflows/"},next:{title:"Input Nodes",permalink:"/api-guide/workflows/input_nodes"}},l=[],p={toc:l};function f(e){var r=e.components,s=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,s,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"base-workflows"},"Base Workflows"),(0,a.kt)("p",null,'The Base Workflow includes one prebuilt Clarifai Model that provides the basic structure for indexing your data. The Base Workflow gives you a "head start" when working with your data, by pre-indexing your inputs for search and by providing a default embedding for your custom models. Your base workflow is what makes your data sortable and searchable as soon as it is uploaded. '),(0,a.kt)("p",null,"Choose a base workflow that you can build upon to create a custom solution. For example, if you're training a custom model around food, you could choose the Food model as your Base Workflow to optimize your custom model performance."),(0,a.kt)("p",null,"You can choose one Base Workflow per app, and you can change your base workflow once your app is created. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choose your base workflow when you set up your app.",src:o(2351).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Change your base workflow once an app is created.",src:o(133).Z})))}f.isMDXComponent=!0},2351:function(e,r,o){r.Z=o.p+"assets/images/baseworkflowsetup-43b75cb396652a81e4d06e521032b8bb.jpg"},133:function(e,r,o){r.Z=o.p+"assets/images/changebasewkflw-896b433ba60eb7d8982ef28efbc31f8d.jpg"}}]);