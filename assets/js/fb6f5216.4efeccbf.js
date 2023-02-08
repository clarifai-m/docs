"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2942],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>w});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),w=r,k=d["".concat(s,".").concat(w)]||d[w]||p[w]||i;return o?n.createElement(k,a(a({ref:t},u),{},{components:o})):n.createElement(k,a({ref:t},u))}));function w(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},25920:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const i={description:"Work with text in images, just like you work with encoded text.",sidebar_position:2},a="Visual Text Recognition",l={unversionedId:"portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",id:"portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",title:"Visual Text Recognition",description:"Work with text in images, just like you work with encoded text.",source:"@site/docs/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",sourceDirName:"portal-guide/workflows/common-workflows",slug:"/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",permalink:"/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Work with text in images, just like you work with encoded text.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Auto Annotation",permalink:"/portal-guide/workflows/common-workflows/auto-annotation-walkthrough"},next:{title:"Text Classification",permalink:"/portal-guide/workflows/common-workflows/custom-text-walkthrough"}},s={},c=[{value:"How VTR works",id:"how-vtr-works",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"visual-text-recognition"},"Visual Text Recognition"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Work with text in images, just like you work with encoded text")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Visual text recognition helps you convert printed text in images and videos into machine-encoded text. You can input a scanned document, a photo of a document, a scene-photo ","(","such as the text on signs and billboards",")",", or text superimposed on an image ","(","such as in a meme",")"," and output the words and individual characters present in the images. "),(0,r.kt)("p",null,'VTR lets you "digitize" text so that it can be edited, searched, stored, displayed and analyzed.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(11553).Z,width:"1000",height:"562"})),(0,r.kt)("admonition",{title:"note",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The current version of our VTR model is not designed for use with handwritten text, or documents with tightly-packed text ","(","like you might see on the page of a novel, for example",")",".")),(0,r.kt)("h2",{id:"how-vtr-works"},"How VTR works"),(0,r.kt)("p",null,"VTR works by first detecting the location of text in your photos or video frames, then cropping the region where the text is present, and then finally running a specialized classification model that will extract text from the cropped image. To accomplish these different tasks, you will need to configure a workflow. You will then add these three models to your workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visual Text Detection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1.0 Cropper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visual Text Recognition"))),(0,r.kt)("p",null,"Start by creating an app with General-Detection as the base workflow."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(19921).Z,width:"1000",height:"562"})),(0,r.kt)("p",null,'Next, navigate to Model Mode and click "Create Workflow".'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(51459).Z,width:"1000",height:"562"})),(0,r.kt)("p",null,'Under "User" select Clarifai to access Clarifai Models.'),(0,r.kt)("p",null,"Add these three models to your workflow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visual Text Detection")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1.0 Cropper")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Visual Text Recognition"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(76313).Z,width:"1000",height:"562"})),(0,r.kt)("p",null,"Connect the input nodes in your workflow."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Connect "1.0 Cropper" to "Visual Text Detector".'),(0,r.kt)("li",{parentName:"ul"},'Connect "Visual Text Recognition" to "1.0 Cropper".')),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(74819).Z,width:"1000",height:"562"})),(0,r.kt)("p",null,'Upload your inputs and navigate to Explorer view. On the righthand sidebar click the "gear" icon under app workflow. Select your newly created workflow and view your detected text.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(75656).Z,width:"1000",height:"562"})))}p.isMDXComponent=!0},74819:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/connect_nodes_str-68e2c2457b7b2d205537715b89b171a4.jpg"},19921:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_gen_det-d521bd1b22c892a47414091245508fba.jpg"},76313:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_wk-0d2fff27b6dbe5cceb9b6a4aec30273c.jpg"},51459:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/model_gallery-600622e80046daa69b6c40f443379f39.jpg"},11553:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/vtr-7d53fc1ef292e02c58f04d0f9bed3df1.jpg"},75656:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/workflow_options-a84e8d0d367619c2cd065477fca5d688.jpg"}}]);