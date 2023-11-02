"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95682:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={description:"Dynamic AI model orchestration and inference scaling"},a="Making Predictions",c={unversionedId:"api-guide/predict/README",id:"api-guide/predict/README",title:"Making Predictions",description:"Dynamic AI model orchestration and inference scaling",source:"@site/docs/api-guide/predict/README.mdx",sourceDirName:"api-guide/predict",slug:"/api-guide/predict/",permalink:"/api-guide/predict/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/predict/README.mdx",tags:[],version:"current",frontMatter:{description:"Dynamic AI model orchestration and inference scaling"},sidebar:"tutorialSidebar",previous:{title:"Collectors",permalink:"/api-guide/data/collectors"},next:{title:"Images",permalink:"/api-guide/predict/images"}},s={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"making-predictions"},"Making Predictions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dynamic AI model orchestration and inference scaling")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The Predict API analyzes your images, texts, or videos and tells you what's inside of them. The API will return a list of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary#concept"},"concepts")," with corresponding probabilities of how likely it is these concepts are contained within the image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(44795).Z,width:"358",height:"303"})),(0,i.kt)("p",null,"We recommend specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"version_id")," parameter in your predict calls. If no ",(0,i.kt)("inlineCode",{parentName:"p"},"version_id")," is specified, predictions will occur on the most recent version of the model. This helps when you want to run a specific version of your model in production while building other future versions of your model. "),(0,i.kt)("p",null,"This is also true with Clarifai's pre-trained models, as we will update them to have new versions from time to time. Therefore using a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"version_id")," keeps your production environment stable."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(86649).Z,width:"1500",height:"1000"})))}u.isMDXComponent=!0},44795:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/armada-d1a139f5354d3f341fd4347439d0d8b8.svg"},86649:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/predict-6beb1f21a9b164f977f70c75c115997a.jpg"}}]);