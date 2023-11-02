"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),g=o,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},90499:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={description:"Generate annotations for your inputs automatically",sidebar_position:5},s="AI-Assisted Labeling",r={unversionedId:"portal-guide/annotate/ai-assist",id:"portal-guide/annotate/ai-assist",title:"AI-Assisted Labeling",description:"Generate annotations for your inputs automatically",source:"@site/docs/portal-guide/annotate/ai-assist.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/ai-assist",permalink:"/portal-guide/annotate/ai-assist",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/annotate/ai-assist.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Generate annotations for your inputs automatically",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Labeling Tools",permalink:"/portal-guide/annotate/labeling-tools"},next:{title:"Workforce Management",permalink:"/portal-guide/annotate/workforce-management"}},l={},c=[{value:"1. Navigate to Input-Viewer",id:"1-navigate-to-input-viewer",level:2},{value:"2. Choose a Model or Workflow",id:"2-choose-a-model-or-workflow",level:2},{value:"3. Generate Annotations",id:"3-generate-annotations",level:2},{value:"4. Review and Accept Predictions",id:"4-review-and-accept-predictions",level:2},{value:"5. Edit Suggestions",id:"5-edit-suggestions",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ai-assisted-labeling"},"AI-Assisted Labeling"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate annotations for your inputs automatically")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"AI-assisted labeling is an innovative Clarifai feature that leverages artificial intelligence technology to assist and optimize the process of annotating data. "),(0,o.kt)("p",null,"You can request predictions from any model or workflow available to you on a particular input, and then review, correct, or validate them before converting them into annotations."),(0,o.kt)("p",null,"AI-Assist provides you with several benefits, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Significantly accelerate the labeling process, reducing the time required to create labeled datasets."),(0,o.kt)("li",{parentName:"ul"},"Automation can reduce the labor costs associated with manual labeling."),(0,o.kt)("li",{parentName:"ul"},"AI models can provide consistent labeling, minimizing human errors."),(0,o.kt)("li",{parentName:"ul"},"It allows for the efficient and scalable handling of large datasets or rapidly changing data.")),(0,o.kt)("p",null,"Let\u2019s demonstrate how you can do it on the Clarifai portal. "),(0,o.kt)("h2",{id:"1-navigate-to-input-viewer"},"1. Navigate to Input-Viewer"),(0,o.kt)("p",null,"Navigate to the Input-Viewer screen and confirm that you're in the ",(0,o.kt)("strong",{parentName:"p"},"Annotate")," mode, which is the default status."),(0,o.kt)("p",null,'To add an AI-assisted labeling model, you can either click the "add a model for ai assisted labeling" link, or, alternatively, click the gear icon in the upper-right corner of the page.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"navigate to input-viewer screen",src:a(93809).Z,width:"1909",height:"849"})),(0,o.kt)("p",null,"The AI Assist sidebar that appears enables you to choose a model or workflow for assisting in labeling your inputs."),(0,o.kt)("h2",{id:"2-choose-a-model-or-workflow"},"2. Choose a Model or Workflow"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("strong",{parentName:"p"},"Select Model or Workflow")," search box to choose a model or workflow you want to get its predictions. "),(0,o.kt)("p",null,"You can choose your own customized model or workflow, or look for a public one from the Community. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"choose a model or workflow",src:a(49705).Z,width:"1848",height:"853"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"When working with image inputs, you need to choose a model or workflow that outputs concepts or objects (bounding box regions). This ensures the generation and display of annotation suggestions.")),(0,o.kt)("p",null,"In this example, we will illustrate how to generate annotations using a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/visual-classifier"},"classification")," model and a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/visual-detector"},"detection")," workflow. "),(0,o.kt)("p",null,"First, let\u2019s choose the Community\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://clarifai.com/clarifai/main/models/general-image-recognition"},"general-image-recognition")," model, which is a visual classification model that identifies a variety of concepts in images."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:" general-image-recognition model",src:a(8290).Z,width:"1800",height:"653"})),(0,o.kt)("p",null,"Second, let\u2019s select another input on the Input-Viewer screen. And on the AI Assist sidebar, let\u2019s choose the ",(0,o.kt)("a",{parentName:"p",href:"https://clarifai.com/clarifai/main/workflows/General-Detection"},"General-Detection")," workflow, which identifies a variety of common objects in images."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"General-Detection workflow",src:a(81181).Z,width:"1824",height:"712"})),(0,o.kt)("h2",{id:"3-generate-annotations"},"3. Generate Annotations"),(0,o.kt)("p",null,"After choosing a model or workflow, it could take a few moments to automatically generate the annotations. The generated labels are sorted in descending order based on their concept probability values."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Classifications")," section lists the concepts generated by the classification model, alongside their probability values. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"generate classification annotations",src:a(34163).Z,width:"1767",height:"768"})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Objects / Regions")," section displays the bounding boxes identified by the detection workflow, alongside their probability values. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"generate bounding box annotations",src:a(82721).Z,width:"1764",height:"853"})),(0,o.kt)("h2",{id:"4-review-and-accept-predictions"},"4. Review and Accept Predictions"),(0,o.kt)("p",null,"Finally, you can review and accept the outputted model or workflow prediction suggestions."),(0,o.kt)("p",null,"Here is how you can review and accept classification predictions:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"review and accept classification predictions",src:a(12670).Z,width:"1916",height:"854"})),(0,o.kt)("p",null,"Here is how you can review and accept objects or regions predictions:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"review and accept objects predictions",src:a(85118).Z,width:"1916",height:"854"})),(0,o.kt)("p",null,"You can use the slider control to display prediction results with probability values falling within your selected range. "),(0,o.kt)("p",null,"If you want to accept all the AI-assisted suggestions, just click the \u201cAccept all AI assist predictions\u201d button. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"When you accept an AI-assisted prediction suggestion, it will be applied automatically as a label to your input and seamlessly integrated into your application.")),(0,o.kt)("p",null,"To manually accept a prediction, simply click on the checkbox next to it. You will notice a color change, and a confirmation message will indicate that the annotation has been successfully added. "),(0,o.kt)("p",null,"If you want to remove the annotation from the input, simply uncheck the same checkbox whose color has changed. The removed annotation will revert to being a suggestion rather than being entirely removed from the list. "),(0,o.kt)("p",null,"If you want to delete an annotation from the list of suggestions, click on the three vertical dots located next to it. A small pop-up will appear, prompting you to confirm the deletion."),(0,o.kt)("h2",{id:"5-edit-suggestions"},"5. Edit Suggestions"),(0,o.kt)("p",null,"You can also edit the concept list suggestions. "),(0,o.kt)("p",null,"To edit a classification prediction, hover your mouse cursor next to the suggestion, and a pen icon will appear. Click the icon to reveal an input box that enables you to update the annotation according to your preferences."),(0,o.kt)("p",null,"To edit a region prediction, simply click on the labeled bounding box and drag it to cover the specific areas you want it to encompass."))}u.isMDXComponent=!0},93809:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_1-19ab4c26775da7b4f8a07057af307b8e.png"},49705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_2-8fb6aa234bf3cbf72bba3742ffadf540.png"},8290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_3-8a640fc4c8236826390fcc8c9399a0fb.png"},81181:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_4-b5aab0025807f23c095951c9e7536ff5.png"},34163:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_5-ee218b80066fc08637a4a3b8e40195c5.png"},82721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_6-6b4eb49e54c04b554e7d7de85c7565b0.png"},12670:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_7-f19b07e21ddb55eee7d48fd1d8067c4b.png"},85118:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ai_assist_8-ea970971917c2ab29ce8f731ab9258a8.png"}}]);