"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3362],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61875:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={description:"Learn about our text classifier model type",sidebar_position:8},i="Text Classifier",l={unversionedId:"portal-guide/model/model-types/text-classifier",id:"portal-guide/model/model-types/text-classifier",title:"Text Classifier",description:"Learn about our text classifier model type",source:"@site/docs/portal-guide/model/model-types/text-classifier.md",sourceDirName:"portal-guide/model/model-types",slug:"/portal-guide/model/model-types/text-classifier",permalink:"/portal-guide/model/model-types/text-classifier",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Learn about our text classifier model type",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Clusterer",permalink:"/portal-guide/model/model-types/clusterer"},next:{title:"Text-to-Text",permalink:"/portal-guide/model/model-types/text-to-text"}},s={},c=[{value:"Example use case",id:"example-use-case",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-classifier"},"Text Classifier"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about our text classifier model type")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input"),": Text"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Output"),": Concepts"),(0,o.kt)("p",null,"Text classifier is a type of deep fine-tuned model designed to automatically categorize or classify text data into predefined categories or concepts. This is a common task in natural language processing (NLP) and has a wide range of applications, including sentiment analysis, spam detection, topic categorization, and more. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The text classifier model type also comes with various templates that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns.")),(0,o.kt)("p",null,"You may choose a text classifier model type in cases where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need an automated way to process and categorize large amounts of textual data, enabling applications that require efficient and accurate text categorization."),(0,o.kt)("li",{parentName:"ul"},'You need a text classification model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your ',(0,o.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/workflows/"},"workflows"),"."),(0,o.kt)("li",{parentName:"ul"},"You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.")),(0,o.kt)("h2",{id:"example-use-case"},"Example use case"),(0,o.kt)("p",null,"A company wants to monitor customer sentiment towards its products by analyzing online reviews. They receive a large number of product reviews on their website and social media platforms. To efficiently understand customer opinions, they can employ a text classifier model to automatically classify these reviews as positive, negative, or neutral."))}d.isMDXComponent=!0}}]);