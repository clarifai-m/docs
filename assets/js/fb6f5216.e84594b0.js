"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2942],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5920:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={description:"Work with text in images, just like you work with encoded text.",sidebar_position:2},s="Visual Text Recognition",c={unversionedId:"portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",id:"portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",title:"Visual Text Recognition",description:"Work with text in images, just like you work with encoded text.",source:"@site/docs/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",sourceDirName:"portal-guide/workflows/common-workflows",slug:"/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",permalink:"/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Work with text in images, just like you work with encoded text.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Auto Annotation",permalink:"/portal-guide/workflows/common-workflows/auto-annotation-walkthrough"},next:{title:"Text Classification",permalink:"/portal-guide/workflows/common-workflows/custom-text-walkthrough"}},u=[{value:"How VTR works",id:"how-vtr-works",children:[],level:2}],p={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"visual-text-recognition"},"Visual Text Recognition"),(0,i.kt)("p",null,"Visual text recognition helps you convert printed text in images and videos into machine-encoded text. You can input a scanned document, a photo of a document, a scene-photo ","(","such as the text on signs and billboards",")",", or text superimposed on an image ","(","such as in a meme",")",' and output the words and individual characters present in the images. VTR lets you "digitize" text so that it can be edited, searched, stored, displayed and analyzed.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(8543).Z})),(0,i.kt)("p",null,"Please note: The current version of our VTR model is not designed for use with handwritten text, or documents with tightly-packed text ","(","like you might see on the page of a novel, for example",")","."),(0,i.kt)("h2",{id:"how-vtr-works"},"How VTR works"),(0,i.kt)("p",null,"VTR works by first detecting the location of text in your photos or video frames, then cropping the region where the text is present, and then finally running a specialized classification model that will extract text from the cropped image. To accomplish these different tasks, you will need to configure a workflow. You will then add these three models to your workflow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Text Detection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1.0 Cropper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Text Recognition"))),(0,i.kt)("p",null,"Start by creating an app with General-Detection as the base workflow."),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(426).Z})),(0,i.kt)("p",null,'Next, navigate to Model Mode and click "Create Workflow".'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(4837).Z})),(0,i.kt)("p",null,'Under "User" select Clarifai to access Clarifai Models.'),(0,i.kt)("p",null,"Add these three models to your workflow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Text Detection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"1.0 Cropper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visual Text Recognition"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(6046).Z})),(0,i.kt)("p",null,"Connect the input nodes in your workflow."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Connect "1.0 Cropper" to "Visual Text Detector".'),(0,i.kt)("li",{parentName:"ul"},'Connect "Visual Text Recognition" to "1.0 Cropper".')),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(6869).Z})),(0,i.kt)("p",null,'Upload your inputs and navigate to Explorer view. On the righthand sidebar click the "gear" icon under app workflow. Select your newly created workflow and view your detected text.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:o(4940).Z})))}d.isMDXComponent=!0},6869:function(e,t,o){t.Z=o.p+"assets/images/connect_nodes_str-68e2c2457b7b2d205537715b89b171a4.jpg"},426:function(e,t,o){t.Z=o.p+"assets/images/create_gen_det-d521bd1b22c892a47414091245508fba.jpg"},6046:function(e,t,o){t.Z=o.p+"assets/images/create_wk-0d2fff27b6dbe5cceb9b6a4aec30273c.jpg"},4837:function(e,t,o){t.Z=o.p+"assets/images/model_gallery-600622e80046daa69b6c40f443379f39.jpg"},8543:function(e,t,o){t.Z=o.p+"assets/images/vtr-7d53fc1ef292e02c58f04d0f9bed3df1.jpg"},4940:function(e,t,o){t.Z=o.p+"assets/images/workflow_options-a84e8d0d367619c2cd065477fca5d688.jpg"}}]);