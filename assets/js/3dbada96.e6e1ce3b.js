"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2050],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),h=a,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},52106:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(87462),a=(o(67294),o(3905));const i={description:"Use AI to help you build AI. Auto annotation uses your model predictions to label your training data.",sidebar_position:1},r="Auto Annotation",l={unversionedId:"legacy-portal-guide/workflows/common-workflows/auto-annotation-walkthrough",id:"legacy-portal-guide/workflows/common-workflows/auto-annotation-walkthrough",title:"Auto Annotation",description:"Use AI to help you build AI. Auto annotation uses your model predictions to label your training data.",source:"@site/docs/legacy-portal-guide/workflows/common-workflows/auto-annotation-walkthrough.md",sourceDirName:"legacy-portal-guide/workflows/common-workflows",slug:"/legacy-portal-guide/workflows/common-workflows/auto-annotation-walkthrough",permalink:"/legacy-portal-guide/workflows/common-workflows/auto-annotation-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Use AI to help you build AI. Auto annotation uses your model predictions to label your training data.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Common Workflows",permalink:"/legacy-portal-guide/workflows/common-workflows"},next:{title:"Visual Text Recognition",permalink:"/legacy-portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough"}},s={},d=[{value:"Create Concepts, Label and Train a Custom Model",id:"create-concepts-label-and-train-a-custom-model",level:2},{value:"Navigate to the Model Gallery",id:"navigate-to-the-model-gallery",level:2},{value:"Create a Context-Based Classifier",id:"create-a-context-based-classifier",level:2},{value:"Create <code>GREATER THAN</code> and <code>LESS THAN</code> Concept Thresholder models",id:"create-greater-than-and-less-than-concept-thresholder-models",level:2},{value:"Create a <code>WRITE SUCCESS</code> and <code>WRITE PENDING</code> Annotation Writer models",id:"create-a-write-success-and-write-pending-annotation-writer-models",level:2},{value:"Create the workflow",id:"create-the-workflow",level:2},{value:"Make the new workflow your app&#39;s default",id:"make-the-new-workflow-your-apps-default",level:2},{value:"Add new images",id:"add-new-images",level:2},{value:"View Annotations in Explorer",id:"view-annotations-in-explorer",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auto-annotation"},"Auto Annotation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use AI to help you build AI. Auto annotation uses your model predictions to label your training data")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This tutorial demonstrates how auto-annotation workflows can be configured within Clarifai Portal. With auto-annotation, you can use model predictions to label your inputs. Auto-annotation can help you to prepare training data, or assign other useful labels and metadata to your inputs."),(0,a.kt)("p",null,"When a concept is predicted by a model, it is predicted with a confidence score between 0 and 1. When your model predictions are confident ","(","close to 1",")",", you can have your data automatically labeled with that concept. When your predictions are less-than-confident, you can have your input sent to a human being for review."),(0,a.kt)("p",null,"This enables you to speed-up and scale-up your annotation process while ensuring quality standards."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(94551).Z,width:"519",height:"331"})),(0,a.kt)("h2",{id:"create-concepts-label-and-train-a-custom-model"},"Create Concepts, Label and Train a Custom Model"),(0,a.kt)("p",null,"To begin, create your application and upload your inputs."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(29259).Z,width:"1000",height:"562"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(48764).Z,width:"1000",height:"562"})),(0,a.kt)("p",null,"Upload files from your computer, or add image and video URLs."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(24839).Z,width:"1000",height:"562"})),(0,a.kt)("p",null,"Create the concepts that you would like to use for your model. Click create new concept in the lefthand sidebar. In this tutorial we'll create concepts that describe people based on activities they do in the park: ",(0,a.kt)("inlineCode",{parentName:"p"},"walker"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"runner"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bike_rider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rollerblader")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"stroller"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(42621).Z,width:"1000",height:"562"})),(0,a.kt)("p",null,"Label your inputs with the appropriate concepts by clicking the checkmark box."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(30512).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"navigate-to-the-model-gallery"},"Navigate to the Model Gallery"),(0,a.kt)("p",null,"Now it is time to create some custom models."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(51459).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"create-a-context-based-classifier"},"Create a Context-Based Classifier"),(0,a.kt)("p",null,"A Context-Based Classifier lets you create a custom classification model that will predict the concepts you have created. Choose a ",(0,a.kt)("inlineCode",{parentName:"p"},"DISPLAY NAME")," and click in the ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT_INFO.DATA.CONCEPTS"),' box to select the concepts that you would like included in your model. Finally, click "Create Model" and then click "Train Model" in the next page.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(25275).Z,width:"1000",height:"562"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(93568).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"create-greater-than-and-less-than-concept-thresholder-models"},"Create ",(0,a.kt)("inlineCode",{parentName:"h2"},"GREATER THAN")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"LESS THAN")," Concept Thresholder models"),(0,a.kt)("p",null,"Concept Thresholders help you route your data based on the confidence of your predictions. Choose a ",(0,a.kt)("inlineCode",{parentName:"p"},"DISPLAY NAME")," and add the concepts you would like to route under the ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT_INFO.DATA")," heading. You can choose separate concept thresholds for each of your custom concepts. Create one model with high ",(0,a.kt)("inlineCode",{parentName:"p"},"CONCEPT THRESHOLDS")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"GREATER_THAN")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT_INFO.PARAMS.CONCEPT_THRESHOLD_TYPE"),". Create a second Concept Thresholder model with low ",(0,a.kt)("inlineCode",{parentName:"p"},"CONCEPT THRESHOLDS")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"LESS_THAN")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT_INFO.PARAMS.CONCEPT_THRESHOLD_TYPE"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"LESS_THAN")," model will help you screen out concepts that are predicted with very low confidence."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(39661).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"create-a-write-success-and-write-pending-annotation-writer-models"},"Create a ",(0,a.kt)("inlineCode",{parentName:"h2"},"WRITE SUCCESS")," and ",(0,a.kt)("inlineCode",{parentName:"h2"},"WRITE PENDING")," Annotation Writer models"),(0,a.kt)("p",null,"The Annotation Writer writes each annotation with a specific concept, status and user. Create one Annotation Writer that will write the annotation with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ANNOTATION_SUCCESS")," status and choose the user ","(","possibly yourself",")"," under ",(0,a.kt)("inlineCode",{parentName:"p"},"OUTPUT_INFO.PARAMS.ANNOTATION_USER_ID"),". Create a second Annotation Writer that will write with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ANNOTATION_PENDING")," status."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8875).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"create-the-workflow"},"Create the workflow"),(0,a.kt)("p",null,"We will now join all the models together into a single workflow. In the Clarifai platform, the outputs from one model can be used as inputs to another model. Different models accept and produce different types of inputs and outputs."),(0,a.kt)("p",null,"The Context-Based Classifier will return list of concepts for each of your inputs. These inputs will then be sent to the Concept Thresholder models. ",(0,a.kt)("inlineCode",{parentName:"p"},"GREATER THAN")," model will filter out the concept if it lower than the threshold and send the final concept list to ",(0,a.kt)("inlineCode",{parentName:"p"},"WRITE SUCCESS")," model. Concepts will then be written to the input with ",(0,a.kt)("inlineCode",{parentName:"p"},"SUCCESS")," status. You can train or search on these concepts immediately."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LESS THAN")," model will filter out the concepts with low prediction scores. The remaining concept list will be sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"WRITE PENDING"),". Concepts will then be written to the input with ",(0,a.kt)("inlineCode",{parentName:"p"},"PENDING")," status."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(82122).Z,width:"1000",height:"562"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(32899).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"make-the-new-workflow-your-apps-default"},"Make the new workflow your app's default"),(0,a.kt)("p",null,"Make this the default workflow in the app, so it will run every time we add an input and execute the auto annotation process. If the workflow is not the default workflow of your app you can still use PostWorkflowResults on new inputs to check that you configured the workflow graph and your models properly but the data will not be written to the DB. This is recommended before making it your default workflow and adding inputs to you app."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(48619).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"add-new-images"},"Add new images"),(0,a.kt)("p",null,"Adding new images will trigger the default workflow in your app."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(52058).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"view-annotations-in-explorer"},"View Annotations in Explorer"),(0,a.kt)("p",null,'Now you can view your annotations in Explorer. Just drag your mouse over the "tag" icon to see annotations associated with the image.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7590).Z,width:"1000",height:"562"})))}u.isMDXComponent=!0},7590:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/aa_inputs-56f96fb30c439429cb6e47402d80c01c.jpg"},52058:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add_additional_inputs-63e43cf7bd9461b6f3a434adbcd74653.jpg"},24839:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add_inputs_auto_demo-bd96e6c95644db06e82e2a8c0f0b0240.jpg"},8875:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/annotation_writer-6aa0954032836690e873af104d06c8dd.jpg"},94551:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/auto_annotation-2d039b31aba2ad0fa23440cda906d080.jpg"},48764:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/auto_annotation_app_details-7e2ddb425cd1df55d6372a77334b7cd1.jpg"},39661:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/concept_thresholder-a7be659530488b178e2375aacf034b36.jpg"},32899:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/connect_nodes_aa-0c1e736566973e8e35ed0ceb4cdacbb9.jpg"},29259:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_auto_annotation_demo-aca1c476aa8c8be84d0805b6ed8fb60b.jpg"},25275:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_cbc_aa-c2cb2deafb2f239c696a8ba97b1419ad.jpg"},42621:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_concepts_auto_a-7487f439b618a46b688dd6e3346b381d.jpg"},82122:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_workflow_aa-781a425a3eaff1b141676dbd0624df7e.jpg"},30512:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/label_inputs_aa-e72e96d615a2605b1830d05d03eb2677.jpg"},51459:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/model_gallery-600622e80046daa69b6c40f443379f39.jpg"},48619:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/set_as_default-84de97d847e653d77b3f36da9ab0cf20.jpg"},93568:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/train_cbc_aa-e90feb9269dae5dc3522d1f771707963.jpg"}}]);