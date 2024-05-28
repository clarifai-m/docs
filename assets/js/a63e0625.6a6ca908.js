"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1751],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>u});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},g=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(u,r(r({ref:t},g),{},{components:a})):n.createElement(u,r({ref:t},g))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(58168),o=(a(96540),a(15680));const i={description:"Learn about our push operators",sidebar_position:4},r="Push",s={unversionedId:"portal-guide/agent-system-operators/push",id:"portal-guide/agent-system-operators/push",title:"Push",description:"Learn about our push operators",source:"@site/docs/portal-guide/agent-system-operators/push.md",sourceDirName:"portal-guide/agent-system-operators",slug:"/portal-guide/agent-system-operators/push",permalink:"/portal-guide/agent-system-operators/push",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/agent-system-operators/push.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about our push operators",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Transform",permalink:"/portal-guide/agent-system-operators/transform"},next:{title:"Aggregate",permalink:"/portal-guide/agent-system-operators/aggregate"}},p={},l=[{value:"Annotation Writer",id:"annotation-writer",level:2},{value:"How to Annotate Text Inputs",id:"how-to-annotate-text-inputs",level:3},{value:"How to Annotate Image Inputs",id:"how-to-annotate-image-inputs",level:3}],g={toc:l},d="wrapper";function c(e){let{components:t,...i}=e;return(0,o.yg)(d,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"push"},"Push"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Learn about our push operators")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Push operators help you to automate processes. You can trigger a wide variety of actions based on predictions made by models in your workflow. For example, you can automatically add a label to an image based on predicted concepts."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},'Since the push operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows ',(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow"},"here"),". ")),(0,o.yg)("h2",{id:"annotation-writer"},"Annotation Writer"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Input"),": Any"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Output"),": Any"),(0,o.yg)("p",null,"Annotation Writer allows you to write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation. "),(0,o.yg)("p",null,"We'll demonstrate how to use the Annotation Writer to automatically annotate text and image inputs in your app."),(0,o.yg)("h3",{id:"how-to-annotate-text-inputs"},"How to Annotate Text Inputs"),(0,o.yg)("p",null,"Let's start by demonstrating how you can use an Annotation Writer, alongside a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/agent-system-operators/algorithmic-predict#regex-based-classifier"},"Regex-Based Classifier"),", to automatically label text inputs."),(0,o.yg)("admonition",{title:"Regex-Based Classifier",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Input"),": Text"),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Output"),": Concepts"),(0,o.yg)("p",{parentName:"admonition"},"This operator allows you to classify text using regular expressions. When the specified regex pattern matches the text, the text is assigned to one of the predefined concepts.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1.")," Create a concept that you want to be automatically assigned to your input. You can learn how to create concepts ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete"},"here"),". For this demonstration, let's create the ",(0,o.yg)("inlineCode",{parentName:"p"},"bucket")," concept. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2.")," Create a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/annotate/create-a-task"},"labeling task"),". Remember to choose ",(0,o.yg)("inlineCode",{parentName:"p"},"Classification")," as the modeling objective. Then, go to the ",(0,o.yg)("strong",{parentName:"p"},"Tasks")," listing page and copy the ID of the task. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(38726).A,width:"1916",height:"832"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3.")," Go to the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/workflow-builder/"},"workflow builder")," page. Search for the ",(0,o.yg)("inlineCode",{parentName:"p"},"regex-based-classifier")," node in the left-hand sidebar and drag and drop it onto the empty workspace."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(49330).A,width:"1908",height:"899"})),(0,o.yg)("p",null,"In the right-hand sidebar, click the ",(0,o.yg)("strong",{parentName:"p"},"SELECT CONCEPTS")," button and use the pop-up that appears to select the relevant concept(s) already existing in your application. For this example, we select the ",(0,o.yg)("inlineCode",{parentName:"p"},"bucket")," concept. "),(0,o.yg)("p",null,"In the ",(0,o.yg)("strong",{parentName:"p"},"regex")," field, provide the regex pattern that will be used to classify the text. If the pattern matches, the text will be classified as the selected concept. For this example, we provide ",(0,o.yg)("inlineCode",{parentName:"p"},"\\bbucket\\b"),', which would match the word "bucket" in instances where it appears as a whole word, surrounded by word boundaries.'),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"4.")," Search for the ",(0,o.yg)("strong",{parentName:"p"},"annotation-writer")," node in the left-hand sidebar and drag and drop it onto the workspace. Within the right-hand sidebar, specify the output configuration values:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(22493).A,width:"1911",height:"856"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Set the ",(0,o.yg)("inlineCode",{parentName:"li"},"annotation_status")," as ",(0,o.yg)("inlineCode",{parentName:"li"},"ANNOTATION_SUCCESS"),". This will write the annotations with the annotation success status."),(0,o.yg)("li",{parentName:"ul"},"Set the ",(0,o.yg)("inlineCode",{parentName:"li"},"annotation_user_id"),". This is the ",(0,o.yg)("inlineCode",{parentName:"li"},"user_id")," for which to write the annotations on their behalf as if they manually did the work themselves. You could also choose your own ",(0,o.yg)("inlineCode",{parentName:"li"},"user_id"),"."),(0,o.yg)("li",{parentName:"ul"},"For this example, let's leave the ",(0,o.yg)("inlineCode",{parentName:"li"},"annotation_info")," field empty."),(0,o.yg)("li",{parentName:"ul"},"Set the ",(0,o.yg)("inlineCode",{parentName:"li"},"task_id"),". This is the ID the task annotation work belongs to. You can retrieve it from the ",(0,o.yg)("strong",{parentName:"li"},"Tasks")," listing page \u2014 as mentioned earlier.")),(0,o.yg)("admonition",{title:"Annotation Status",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("strong",{parentName:"p"},"annotation_status")," field lets you specify the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/advanced-topics/status-codes#annotation-related-codes-24xxx"},"status of the annotation")," that will be created. These are the possible values:"),(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ANNOTATION_SUCCESS")," (code 24150) \u2014 The annotation is created successfully. "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ANNOTATION_PENDING")," (code 24151) \u2014 The annotation status is pending."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ANNOTATION_AWAITING_REVIEW")," (code 24157) \u2014 Annotation is still waiting for review before it's finalized."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"ANNOTATION_AWAITING_CONSENSUS_REVIEW")," (code 24159) \u2014 Annotation is still waiting for a consensus review before it's finalized."))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"5.")," Connect the operators and save your workflow. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"6.")," Go to your app's settings page and change the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/base-workflows/#how-to-change-a-base-workflow"},"Base Workflow")," to the workflow you just created. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"7.")," ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/data/#upload-inputs"},"Upload a text input")," into your app, such as ",(0,o.yg)("inlineCode",{parentName:"p"},"I'm looking for a bucket list"),". If you go to the Input-Viewer page, you'll notice that the text input has been automatically labeled with the ",(0,o.yg)("inlineCode",{parentName:"p"},"bucket")," concept. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(1364).A,width:"1917",height:"764"})),(0,o.yg)("p",null,"The Regex-Based Classifier successfully classified the input and forwarded it to the Annotation Writer for labeling. "),(0,o.yg)("h3",{id:"how-to-annotate-image-inputs"},"How to Annotate Image Inputs"),(0,o.yg)("p",null,"Next, let's demonstrate how you can use an Annotation Writer to automatically label image inputs. For this demonstration, we'll create a workflow that automatically classifies images of dogs and cats, assigning them the appropriate labels."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1.")," Create the concepts that you want to be automatically assigned to your input. You can learn how to create concepts ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete"},"here"),". For this demonstration, let's create ",(0,o.yg)("inlineCode",{parentName:"p"},"cat")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"dog")," concepts. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2.")," Create a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/visual-classifier"},"visual classification")," model and train it with the ",(0,o.yg)("inlineCode",{parentName:"p"},"cat")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"dog")," concepts. You can learn how to create the model ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/deep-training/#how-to-fine-tune-a-model"},"here"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3.")," Create a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/annotate/create-a-task"},"labeling task"),". Remember to choose ",(0,o.yg)("inlineCode",{parentName:"p"},"Classification")," as the modeling objective. Then, go to the ",(0,o.yg)("strong",{parentName:"p"},"Tasks")," listing page and copy the ID of the task \u2014 as mentioned earlier. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"4."),"  Go to the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/workflow-builder/"},"workflow builder")," page. Search for the ",(0,o.yg)("inlineCode",{parentName:"p"},"visual-classifier")," node in the left-hand sidebar and drag and drop it onto the empty workspace. Connect it to the ",(0,o.yg)("inlineCode",{parentName:"p"},"IN")," element."),(0,o.yg)("admonition",{title:"visual classifier",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Input"),": Image"),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Output"),": Concepts"),(0,o.yg)("p",{parentName:"admonition"},"It allows you to classify images into a set of concepts. ")),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(77003).A,width:"1913",height:"889"})),(0,o.yg)("p",null,"Use the pop-up that appears in the right sidebar to search for the classification model you created and add it to the node. After selecting the model, we'll use the default settings of the other output configuration options for the purpose of this illustration."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"5.")," Search for the ",(0,o.yg)("inlineCode",{parentName:"p"},"concept-thresholder")," node in the left sidebar and drag it onto the workspace. Connect it to the ",(0,o.yg)("inlineCode",{parentName:"p"},"visual-classifier")," node."),(0,o.yg)("admonition",{title:"concept-thresholder",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Input"),": Concepts"),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Output"),": Concepts"),(0,o.yg)("p",{parentName:"admonition"},'This operator allows you to threshold input concepts according to both a threshold and an overall operator (>, >=, =, <=, or <). For this example, we use the " > " (GREATER_THAN) threshold type. Thus, only the ',(0,o.yg)("inlineCode",{parentName:"p"},"cat")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"dog")," concepts outputted by the visual classifier model above a certain threshold will be processed further downstream. ")),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(13346).A,width:"1910",height:"889"})),(0,o.yg)("p",null,"Click the ",(0,o.yg)("strong",{parentName:"p"},"SELECT CONCEPTS")," button in the right sidebar."),(0,o.yg)("p",null,"In the window that appears, select the relevant concepts already existing in your application. For this example, let's select the ",(0,o.yg)("inlineCode",{parentName:"p"},"cat")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"dog")," concepts, and use the slider to set their threshold values to 0.80 each. This threshold will determine which concepts are accepted to be used for the auto-annotation."),(0,o.yg)("p",null,"Click the ",(0,o.yg)("strong",{parentName:"p"},"OK")," button to save the changes. You'll see the selected concepts highlighted in the right sidebar, along with their threshold values."),(0,o.yg)("p",null,"Lastly, select the ",(0,o.yg)("inlineCode",{parentName:"p"},"concept_threshold_type")," as ",(0,o.yg)("inlineCode",{parentName:"p"},"GREATER_THAN"),". Keep the other configuration options set to their default values."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"6.")," Search for the ",(0,o.yg)("strong",{parentName:"p"},"annotation-writer")," node in the left-hand sidebar and drag and drop it onto the workspace. Within the right-hand sidebar, specify the output configuration values:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(43705).A,width:"1898",height:"912"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Set the ",(0,o.yg)("inlineCode",{parentName:"li"},"annotation_status")," as ",(0,o.yg)("inlineCode",{parentName:"li"},"ANNOTATION_SUCCESS"),". This will write the annotations with the annotation success status."),(0,o.yg)("li",{parentName:"ul"},"Set the ",(0,o.yg)("inlineCode",{parentName:"li"},"annotation_user_id"),". This is the ",(0,o.yg)("inlineCode",{parentName:"li"},"user_id")," for which to write the annotations on their behalf as if they manually did the work themselves. You could also choose your own ",(0,o.yg)("inlineCode",{parentName:"li"},"user_id"),"."),(0,o.yg)("li",{parentName:"ul"},"For this example, let's leave the ",(0,o.yg)("inlineCode",{parentName:"li"},"annotation_info")," field empty."),(0,o.yg)("li",{parentName:"ul"},"Set the ",(0,o.yg)("inlineCode",{parentName:"li"},"task_id"),". This is the ID the task annotation work belongs to. You can retrieve it from the ",(0,o.yg)("strong",{parentName:"li"},"Tasks")," listing page \u2014 as mentioned earlier.")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"7.")," Click the ",(0,o.yg)("strong",{parentName:"p"},"Save Workflow")," button to save your workflow. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"8.")," Go to your app's settings page and change the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/base-workflows/#how-to-change-a-base-workflow"},"Base Workflow")," to the workflow you just created. "),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"9.")," ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/data/#upload-inputs"},"Upload an image input")," into your app, such as ",(0,o.yg)("a",{parentName:"p",href:"https://samples.clarifai.com/cat1.jpeg"},"this image")," of a cat. If you go to the Input-Viewer page, you'll notice that the image input has been automatically labeled with the ",(0,o.yg)("inlineCode",{parentName:"p"},"cat")," concept. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(11600).A,width:"1904",height:"915"})),(0,o.yg)("p",null,"The model successfully classified the input, the thresholder filtered the concepts, and the filtered concept was forwarded to the Annotation Writer for automatic labeling."))}c.isMDXComponent=!0},38726:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_1-2a4b764160cba2cb6627b08ab50f4bb7.png"},49330:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_1_1-4fedd52f558aacd7aab5ff5989fce924.png"},22493:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_2-74459f3479afd4ff6ede1c86ce665f19.png"},1364:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_3-aae607b42d0933a7add5066515eff25d.png"},77003:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_4-db80b55fb9872eba93b330d2a5677467.png"},13346:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_5-35f801fe65c5b93732287d27d2dd2484.png"},43705:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_6-05ee06562f227641ed75763694439161.png"},11600:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotation_writer_7-ad22c6efd28e4fac64148ca974c35cb3.png"}}]);