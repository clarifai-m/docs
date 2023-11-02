"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||n;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},96123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={description:"(Beta) Proposals enable you to build model and concept hierarchies",sidebar_position:4},i="Proposals",l={unversionedId:"portal-guide/data/explorer/proposals",id:"portal-guide/data/explorer/proposals",title:"Proposals",description:"(Beta) Proposals enable you to build model and concept hierarchies",source:"@site/docs/portal-guide/data/explorer/proposals.md",sourceDirName:"portal-guide/data/explorer",slug:"/portal-guide/data/explorer/proposals",permalink:"/portal-guide/data/explorer/proposals",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/data/explorer/proposals.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"(Beta) Proposals enable you to build model and concept hierarchies",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bulk Labeling",permalink:"/portal-guide/data/explorer/bulk-labeling"},next:{title:"Object Tracking",permalink:"/portal-guide/data/explorer/object-tracking"}},c={},s=[{value:"Build model and concept hierarchies",id:"build-model-and-concept-hierarchies",level:2},{value:"Concept hierarchies",id:"concept-hierarchies",level:3},{value:"Model hierarchies",id:"model-hierarchies",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proposals"},"Proposals"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"(Beta) Proposals enable you to build model and concept hierarchies")),(0,a.kt)("hr",null),(0,a.kt)("div",{style:{position:"relative",width:"100%",overflow:"hidden","padding-top":"56.25%"}},(0,a.kt)("iframe",{width:"900",height:"500",style:{position:"absolute",top:"0",left:"0",bottom:"0",right:"0",width:"100%",height:"100%"},src:"https://www.youtube.com/embed/7r2sc3I6Tvo",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("h2",{id:"build-model-and-concept-hierarchies"},"Build model and concept hierarchies"),(0,a.kt)("p",null,"Organizing models and concepts hierarchically can be very useful when working with large and complex model taxonomies."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create parent-child relationships between concepts",src:r(75589).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"concept-hierarchies"},"Concept hierarchies"),(0,a.kt)("p",null,"By establishing concept hierarchies you can build applications that can account for the fact that child concepts ","(","like table",")"," are related to parent concepts ","(","like furniture",")",". Learn more about working with concept relationships with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concepts/knowledge_graph"},"Clarifai Knowledge Graph. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choose your concept relationships",src:r(22136).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"model-hierarchies"},"Model hierarchies"),(0,a.kt)("p",null,"By establishing model hierarchies you can establish relationships between grouping models and ranking models. This parent-child relationship can help address very common real world problems in AI, where you will first want to group subsets of your data together, before processing with more specialized models. You can choose any custom or pre-built model as your grouping and ranking models."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The proposals tab helps you to take advantage of AI assist and knowledge graph linking. ",src:r(96840).Z,width:"1920",height:"1080"})))}u.isMDXComponent=!0},96840:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/concept-relations-2-1c9a6dfac07fb680053e5d2537281856.jpg"},22136:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/concept-relations-f321d77884105c5e927d514580ac5337.jpg"},75589:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/proposers-a73fdbe34d94c9afc24662ba33732ecd.jpg"}}]);