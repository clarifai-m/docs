"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={description:"Learn about the different types of labels that are possible with Scribe.",sidebar_position:2},a="Label Types",l={unversionedId:"legacy-portal-guide/annotate/label-types",id:"legacy-portal-guide/annotate/label-types",title:"Label Types",description:"Learn about the different types of labels that are possible with Scribe.",source:"@site/docs/legacy-portal-guide/annotate/label-types.md",sourceDirName:"legacy-portal-guide/annotate",slug:"/legacy-portal-guide/annotate/label-types",permalink:"/legacy-portal-guide/annotate/label-types",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about the different types of labels that are possible with Scribe.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Task",permalink:"/legacy-portal-guide/annotate/create-a-task"},next:{title:"Labeling Tools",permalink:"/legacy-portal-guide/annotate/labeling-tools"}},s={},c=[{value:"Classification",id:"classification",level:2},{value:"Bounding Box Detection",id:"bounding-box-detection",level:2},{value:"Detection for Still Images",id:"detection-for-still-images",level:3},{value:"Detection for Video",id:"detection-for-video",level:3},{value:"Polygon Detection",id:"polygon-detection",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"label-types"},"Label Types"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about the different types of labels that are possible with Scribe")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Scribe provides three basic label types for your images and videos. These label types provide increasing levels of granularity to support the needs of your specific use case."),(0,i.kt)("h2",{id:"classification"},"Classification"),(0,i.kt)("p",null,"Provide annotation for an entire image, or single frame of video. To classify an image, just create your concepts, click on the concepts in the right-hand sidebar and click submit."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(28131).Z,width:"1000",height:"562"})),(0,i.kt)("h2",{id:"bounding-box-detection"},"Bounding Box Detection"),(0,i.kt)("p",null,"Provide annotation within a single box-shaped region of an image or video. To use bounding box detection, you must start with a workflow that offers detection capabilities. From here you can label detected regions, or draw your own bounding boxes for labeling."),(0,i.kt)("h3",{id:"detection-for-still-images"},"Detection for Still Images"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bounding box detection for still image",src:n(8646).Z,width:"1000",height:"562"})),(0,i.kt)("h3",{id:"detection-for-video"},"Detection for Video"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bounding box detection for video",src:n(96945).Z,width:"1000",height:"562"})),(0,i.kt)("h2",{id:"polygon-detection"},"Polygon Detection"),(0,i.kt)("p",null,"Provide annotation within any polygon-shaped region of an image or video."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1923).Z,width:"1000",height:"562"})))}d.isMDXComponent=!0},28131:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/classification_label-088e7029b83878e8598d05cda3b74f88.jpg"},8646:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/detector_label-7014c61c91a6be77dd95517bb20d0207.jpg"},1923:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polygon-18128a6f04319c765e53c28fa70d5382.jpg"},96945:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/video_detector-a224ae3f78fcfd41b2715f5c37da89a3.jpg"}}]);