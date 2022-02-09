"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2299],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2740:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={description:"The Clarifai API helps you incorporate powerful AI technology in your application."},c="Clarifai API Basics",s={unversionedId:"api-guide/api-overview/README",id:"api-guide/api-overview/README",title:"Clarifai API Basics",description:"The Clarifai API helps you incorporate powerful AI technology in your application.",source:"@site/docs/api-guide/api-overview/README.mdx",sourceDirName:"api-guide/api-overview",slug:"/api-guide/api-overview/",permalink:"/docs-new/api-guide/api-overview/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/api-overview/README.mdx",tags:[],version:"current",frontMatter:{description:"The Clarifai API helps you incorporate powerful AI technology in your application."},sidebar:"tutorialSidebar",previous:{title:"Clarifai Community Quick Start",permalink:"/docs-new/clarifai-basics/community"},next:{title:"Clarifai API Clients",permalink:"/docs-new/api-guide/api-overview/api-clients/"}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clarifai-api-basics"},"Clarifai API Basics"),(0,i.kt)("p",null,"The Clarifai API ","(","Application Programming Interface",")"," is the interface that allows clients and servers to \u201ctalk\u201d to each other. This is for \u201csoftware to software\u201d communication, and it is useful for programmatically implementing Clarifai's AI technology within your own products and tools. The Clarifai API acts as a sort of \u201cgatekeeper\u201d to our software that translates clients like Python, Node and Java. These clients are used to make requests, which the API translates to commands that the software can understand."),(0,i.kt)("p",null,"Clarifai\u2019s API allows users to access the Clarifai platform through four request types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"POST")," - Upload inputs and information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PATCH")," - Update or modify existing information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GET")," - Request information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")," - Delete existing information")),(0,i.kt)("p",null,"Access Clarifai's API over HTTPS via ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.clarifai.com"),"."),(0,i.kt)("p",null,"In the examples throughout our documentation, we use single brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"{variable}")," to indicate variables that you should replace with a real value."),(0,i.kt)("p",null,"We recommend using a ",(0,i.kt)("a",{parentName:"p",href:"api-clients/"},"client library")," to access the API. We offer official clients in a variety of languages. To access the Clarifai API in other languages, use the REST API directly. For REST documentation please see the cURL examples."))}f.isMDXComponent=!0}}]);