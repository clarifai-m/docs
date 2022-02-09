"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[489],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51136:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={description:"(Beta) Track people and objects in video",sidebar_position:5},l="Object Tracking",s={unversionedId:"portal-guide/data/explorer/object-tracking",id:"portal-guide/data/explorer/object-tracking",title:"Object Tracking",description:"(Beta) Track people and objects in video",source:"@site/docs/portal-guide/data/explorer/object-tracking.md",sourceDirName:"portal-guide/data/explorer",slug:"/portal-guide/data/explorer/object-tracking",permalink:"/docs-new/portal-guide/data/explorer/object-tracking",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/data/explorer/object-tracking.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"(Beta) Track people and objects in video",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Proposals",permalink:"/docs-new/portal-guide/data/explorer/proposals"},next:{title:"Collectors",permalink:"/docs-new/portal-guide/data/collectors"}},p=[{value:"Track people and objects across multiple frames",id:"track-people-and-objects-across-multiple-frames",children:[],level:2},{value:"Build an object tracking workflow",id:"build-an-object-tracking-workflow",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],d={toc:p};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"object-tracking"},"Object Tracking"),(0,a.kt)("h2",{id:"track-people-and-objects-across-multiple-frames"},"Track people and objects across multiple frames"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(41717).Z})),(0,a.kt)("p",null,"Videos are actually made up of a sequence of still images. Detection models can identify individual people and objects in still images, but they are not able to maintain these identities across frames. That is, they are not able to say that the person in one frame video is the same as the person in the next frame of video."),(0,a.kt)("p",null,"This is where object tracking comes in. Clarifai offers convenient, pre-built object tracking workflows that help you identify and track objects and people across multiple frames of video."),(0,a.kt)("h2",{id:"build-an-object-tracking-workflow"},"Build an object tracking workflow"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(14262).Z})),(0,a.kt)("p",null,"To build an object tracking workflow, just visit model mode and click the create workflow button in the upper righthand corner of the screen. From here you will need to add two models to your workflow:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Model"),(0,a.kt)("th",{parentName:"tr",align:"left"},"ID"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"efficient person detector"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5750faf62ed9d514b9ee9d2d163f172e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Person Tracker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"c9d65bb4f86c487b848e9400725168d4")))),(0,a.kt)("p",null,"Just add these two models to your workflow and connect the efficient person detector to the input node on the Person Tracker."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Please keep in mind that video support is in Beta. Any video of 100MBs or less that is less than 1 minute can be processed at 10 FPS for any workflow. Download is 20 second limit per job assuming 5MB/sec."))}u.isMDXComponent=!0},41717:function(e,t,r){t.Z=r.p+"assets/images/object-tracker-a1c692b973631c7637c3b96410cf76d1.jpg"},14262:function(e,t,r){t.Z=r.p+"assets/images/person-tracker-wkflw-fb877c3a2d933183737a8a7aa06ecd49.jpg"}}]);