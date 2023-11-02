"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9189],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=n,y=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return a?o.createElement(y,i(i({ref:t},m),{},{components:a})):o.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={description:"Learn about our visual anomaly  model type",sidebar_position:5},i="Visual Anomaly",l={unversionedId:"portal-guide/model/model-types/visual-anomaly",id:"portal-guide/model/model-types/visual-anomaly",title:"Visual Anomaly",description:"Learn about our visual anomaly  model type",source:"@site/docs/portal-guide/model/model-types/visual-anomaly.md",sourceDirName:"portal-guide/model/model-types",slug:"/portal-guide/model/model-types/visual-anomaly",permalink:"/portal-guide/model/model-types/visual-anomaly",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/model-types/visual-anomaly.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn about our visual anomaly  model type",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Visual Segmenter",permalink:"/portal-guide/model/model-types/visual-segmenter"},next:{title:"Visual Embedder",permalink:"/portal-guide/model/model-types/visual-embedder"}},s={},u=[{value:"Example use case",id:"example-use-case",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visual-anomaly"},"Visual Anomaly"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about our visual anomaly model type")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Input"),": Images and videos"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Output"),": ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concepts"},"Concepts")," "),(0,n.kt)("p",null,"Visual anomaly is a type of deep fine-tuned model that can be used to identify unusual or anomalous patterns in images and videos that differ from the expected norm. "),(0,n.kt)("p",null,"It does this by learning to identify normal patterns in images or videos and then using those patterns to detect anomalies in new images or videos. "),(0,n.kt)("p",null,"It works by first creating a heatmap of an image. The heatmap is a representation of the image where each pixel is assigned a value that indicates how likely it is to be anomalous. The model then calculates an image-level score for the image based on the heatmap. The image-level score indicates how likely it is that the image contains an anomaly."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The visual anomaly model type also comes with various templates that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way that your model learns.")),(0,n.kt)("p",null,"The visual anomaly model type can be used in a wide range of applications, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Object anomalies"),": These are anomalies that occur in the objects in an image. For example, an object may be missing, or it may be in a different location than it should be."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Background anomalies"),": These are anomalies that occur in the background of an image. For example, there may be a strange object in the background, or the background may be blurry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Lighting anomalies"),": These are anomalies that occur due to changes in lighting. For example, the image may be too dark or too bright, or there may be shadows in the image that should not be there.")),(0,n.kt)("p",null,"You may choose a visual anomaly model type in cases where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to accurately find anomalous examples with only normal examples in training."),(0,n.kt)("li",{parentName:"ul"},'You need a visual anomaly model to detect anomalous patterns not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your ',(0,n.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/workflows/"},"workflows"),"."),(0,n.kt)("li",{parentName:"ul"},"You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.")),(0,n.kt)("h2",{id:"example-use-case"},"Example use case"),(0,n.kt)("p",null,"In a manufacturing facility that produces electronic circuit boards, the quality control process is crucial to ensuring that the circuit boards are free from defects before they are shipped to customers. However, defects can occasionally occur during the manufacturing process, leading to malfunctioning products and customer dissatisfaction. In this scenario, a visual anomaly detection model can be employed to automatically inspect each circuit board for anomalies or defects."))}p.isMDXComponent=!0}}]);