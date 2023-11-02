"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3859],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),f=n,d=u["".concat(s,".").concat(f)]||u[f]||w[f]||a;return o?r.createElement(d,l(l({ref:t},c),{},{components:o})):r.createElement(d,l({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},48783:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>w,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={description:"Learn the basics of setting up a new workflow",sidebar_position:4},l="Setting Up a Workflow",i={unversionedId:"portal-guide/workflows/setting-up-a-mesh-workflow",id:"portal-guide/workflows/setting-up-a-mesh-workflow",title:"Setting Up a Workflow",description:"Learn the basics of setting up a new workflow",source:"@site/docs/portal-guide/workflows/setting-up-a-mesh-workflow.md",sourceDirName:"portal-guide/workflows",slug:"/portal-guide/workflows/setting-up-a-mesh-workflow",permalink:"/portal-guide/workflows/setting-up-a-mesh-workflow",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/workflows/setting-up-a-mesh-workflow.md",tags:[],version:"current",lastUpdatedAt:1698924850,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:4,frontMatter:{description:"Learn the basics of setting up a new workflow",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Base Workflows",permalink:"/portal-guide/workflows/base-workflows"},next:{title:"Common Workflows",permalink:"/portal-guide/workflows/common-workflows"}},s={},p=[{value:"Workflow Setup",id:"workflow-setup",level:2},{value:"Workflow Predict",id:"workflow-predict",level:2}],c={toc:p},u="wrapper";function w(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setting-up-a-workflow"},"Setting Up a Workflow"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn the basics of setting up a new workflow")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Workflows are a graph of computation that encompass one or more Clarifai or custom model","(","s",")",". Every workflow is attached to one of your applications. "),(0,n.kt)("p",null,"Under each workflow, you will see a list of the Clarifai models and all custom models in that application when selecting models to add to your workflow. With Workflow Predict, you will be able to run your business logic on one efficient tool."),(0,n.kt)("p",null,"This won't have any impact on the price you are charged per call. You will still be charged for the same operation as if it were separate calls to the API. When you do a predict with a workflow, you're charged for the prediction of each model in the workflow as if they were separate calls."),(0,n.kt)("h2",{id:"workflow-setup"},"Workflow Setup"),(0,n.kt)("p",null,"You can ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/input-nodes/#create-your-workflow"},"click here")," to read a step-by-step walkthrough about how to create a workflow. "),(0,n.kt)("h2",{id:"workflow-predict"},"Workflow Predict"),(0,n.kt)("p",null,"After creating your workflow, you can start using it to make predictions. "),(0,n.kt)("p",null,"The custom workflow we created previously combined two models together. We can use it to extract text from ",(0,n.kt)("a",{parentName:"p",href:"https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg"},"this image")," and then translate the extracted text to Spanish."),(0,n.kt)("p",null,"To do so, let's go to the workflow's individual page and click the ",(0,n.kt)("strong",{parentName:"p"},"Try your own image or video")," button to upload the image. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"try your own image or video",src:o(88435).Z,width:"1891",height:"857"})),(0,n.kt)("p",null,"On the small window that pops up, upload the image."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"upload image",src:o(49683).Z,width:"843",height:"606"})),(0,n.kt)("p",null,"After the image has been processed, the output will contain the predictions each model in the workflow returns. You can see on the screenshot below that the text was successfully extracted from the image and then translated to Spanish. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"workflow prediction",src:o(11547).Z,width:"1561",height:"871"})),(0,n.kt)("p",null,"That's the power of using workflows on the Clarifai Community platform!"))}w.isMDXComponent=!0},49683:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/window_upload_image-4969eb8d5b5cd5acee2aa76736f789f3.png"},88435:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workflow_predict_try_your_own_image-fbc0c1e4ca651d9ee05cd89bf3830d01.png"},11547:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workflow_prediction_output-c3b8f5ef0164246f6e783649deb96c29.png"}}]);