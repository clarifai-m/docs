"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||n;return r?o.createElement(d,i(i({ref:t},m),{},{components:r})):o.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},29321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(87462),a=(r(67294),r(3905));const n={description:"Learn about our transform operators",sidebar_position:3},i="Transform",s={unversionedId:"portal-guide/model/agent-system-operators/transform",id:"portal-guide/model/agent-system-operators/transform",title:"Transform",description:"Learn about our transform operators",source:"@site/docs/portal-guide/model/agent-system-operators/transform.md",sourceDirName:"portal-guide/model/agent-system-operators",slug:"/portal-guide/model/agent-system-operators/transform",permalink:"/portal-guide/model/agent-system-operators/transform",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/agent-system-operators/transform.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about our transform operators",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Filter",permalink:"/portal-guide/model/agent-system-operators/filter"},next:{title:"Push",permalink:"/portal-guide/model/agent-system-operators/push"}},p={},l=[{value:"Image Cropper",id:"image-cropper",level:2},{value:"Image Align",id:"image-align",level:2},{value:"Image Tiling Operator",id:"image-tiling-operator",level:2},{value:"Image-to-Image",id:"image-to-image",level:2}],m={toc:l},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transform"},"Transform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn about our transform operators")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Transform operators are a specific type of agent system operators that are specialized for data transformation tasks. These operators are responsible for modifying and/or augmenting your data as it passes through the workflow."),(0,a.kt)("p",null,"They can be used to crop out regions of an image, align an image based on the pose of a face, or even map predictions from one model to another."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Since the transform operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows ',(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow"},"here"),". ")),(0,a.kt)("h2",{id:"image-cropper"},"Image Cropper"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Regions"),(0,a.kt)("p",null,"Allows you to crop the input image according to each input region that is present in the input. When used in a workflow, this model can look back along the graph of the workflow to find the input image if the preceding model does not output an image itself so that you can do ",(0,a.kt)("inlineCode",{parentName:"p"},"image->detector->cropper")," type of workflow easily."),(0,a.kt)("h2",{id:"image-align"},"Image Align"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Image"),(0,a.kt)("p",null,"Allows you to align images using key points."),(0,a.kt)("h2",{id:"image-tiling-operator"},"Image Tiling Operator"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Regions"),(0,a.kt)("p",null,"This is an operator for tiling images into a fixed number of equal-sized images. "),(0,a.kt)("h2",{id:"image-to-image"},"Image-to-Image"))}c.isMDXComponent=!0}}]);