"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9391],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(o),c=n,f=m["".concat(p,".").concat(c)]||m[c]||u[c]||a;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},40533:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(87462),n=(o(67294),o(3905));const a={description:"Learn about some of the most important model types on the Clarifai platform.",sidebar_position:2},i="Model Types",l={unversionedId:"api-guide/model/model-types",id:"api-guide/model/model-types",title:"Model Types",description:"Learn about some of the most important model types on the Clarifai platform.",source:"@site/docs/api-guide/model/model-types.md",sourceDirName:"api-guide/model",slug:"/api-guide/model/model-types",permalink:"/api-guide/model/model-types",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about some of the most important model types on the Clarifai platform.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Clarifai Models",permalink:"/api-guide/model/clarifai-models"},next:{title:"Custom Transfer Learning Models",permalink:"/api-guide/model/custom-model-walkthrough"}},p={},s=[],d={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"model-types"},"Model Types"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about some of the most important model types on the Clarifai platform")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Clarifai offers a wide variety of ",(0,n.kt)("a",{parentName:"p",href:"https://clarifai.com/explore"},"models")," that can be used as standalone solutions, or as building blocks for your own custom business solutions."),(0,n.kt)("p",null,"It's important to note that Clarifai continually introduces new models to augment your options. So, you need to check the platform frequently for an up-to-date list of the models we provide."),(0,n.kt)("p",null,"For a listing of the models available to you:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make a ",(0,n.kt)("inlineCode",{parentName:"li"},"GET")," call to the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#list-model-types"},(0,n.kt)("inlineCode",{parentName:"a"},"/models/types"))," API method or the ",(0,n.kt)("inlineCode",{parentName:"li"},"ListModelTypes")," gRPC API method. The method responds with all the available model types."),(0,n.kt)("li",{parentName:"ul"},"If you want to create a model with your preferred model type, you can make a ",(0,n.kt)("inlineCode",{parentName:"li"},"POST")," request to the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#create-a-model"},(0,n.kt)("inlineCode",{parentName:"a"},"/models"))," API method or the ",(0,n.kt)("inlineCode",{parentName:"li"},"PostModels")," gRPC API method with the ",(0,n.kt)("inlineCode",{parentName:"li"},"model_type_id")," parameter specified in the request. ")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"Click here")," to learn more about the model types we offer.")))}u.isMDXComponent=!0}}]);