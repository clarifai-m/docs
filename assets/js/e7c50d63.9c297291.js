"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3766],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return a?o.createElement(y,r(r({ref:t},d),{},{components:a})):o.createElement(y,r({ref:t},d))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},13490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=a(58168),n=(a(96540),a(15680));const l={description:"Build a powerful and flexible application for classifying text passages.",sidebar_position:3},r="Text Classification",i={unversionedId:"portal-guide/workflows/common-workflows/custom-text-walkthrough",id:"portal-guide/workflows/common-workflows/custom-text-walkthrough",title:"Text Classification",description:"Build a powerful and flexible application for classifying text passages.",source:"@site/docs/portal-guide/workflows/common-workflows/custom-text-walkthrough.md",sourceDirName:"portal-guide/workflows/common-workflows",slug:"/portal-guide/workflows/common-workflows/custom-text-walkthrough",permalink:"/portal-guide/workflows/common-workflows/custom-text-walkthrough",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/workflows/common-workflows/custom-text-walkthrough.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Build a powerful and flexible application for classifying text passages.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Visual Text Recognition",permalink:"/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough"},next:{title:"Modules",permalink:"/portal-guide/modules/"}},s={},p=[{value:"Create an App",id:"create-an-app",level:2},{value:"Navigate to the Inputs Manager Page",id:"navigate-to-the-inputs-manager-page",level:2},{value:"Add Your Inputs",id:"add-your-inputs",level:2},{value:"Option 1: Upload From a <code>.csv</code> File",id:"option-1-upload-from-a-csv-file",level:3},{value:"Option 2: Add Texts Directly",id:"option-2-add-texts-directly",level:3},{value:"Add a Dataset",id:"add-a-dataset",level:3},{value:"Add Custom Concepts",id:"add-custom-concepts",level:3},{value:"Click Upload Inputs Button",id:"click-upload-inputs-button",level:3},{value:"Navigate to Model Mode",id:"navigate-to-model-mode",level:2},{value:"Select Model Type",id:"select-model-type",level:2},{value:"Create a Model",id:"create-a-model",level:2},{value:"Try Out Your New model",id:"try-out-your-new-model",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,n.yg)(c,(0,o.A)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"text-classification"},"Text Classification"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Build a powerful and flexible application for classifying text passages")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Text classification is a natural language processing (NLP) task that involves categorizing or assigning predefined labels or categories to a given text document. It is a fundamental problem in machine learning and NLP, where the goal is to automatically analyze and classify textual data based on its content."),(0,n.yg)("p",null,"Text models can be trained to understand the meaning of text passages. "),(0,n.yg)("p",null,"This walkthrough shows you how to create a custom text classification model that can help you understand the sentiment of customer reviews on a product\u2014whether positive or negative. "),(0,n.yg)("h2",{id:"create-an-app"},"Create an App"),(0,n.yg)("p",null,"Let's start by creating a new application and selecting ",(0,n.yg)("strong",{parentName:"p"},"Text-Moderation")," as the default workflow."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(66611).A,width:"1822",height:"915"})),(0,n.yg)("h2",{id:"navigate-to-the-inputs-manager-page"},"Navigate to the Inputs Manager Page"),(0,n.yg)("p",null,"Head to your application's individual page. Then, select the ",(0,n.yg)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar."),(0,n.yg)("p",null,"You'll be redirected to the inputs manager page, where you can add inputs to your app. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(72280).A,width:"1930",height:"911"})),(0,n.yg)("h2",{id:"add-your-inputs"},"Add Your Inputs"),(0,n.yg)("p",null,"To add inputs to your app, click the ",(0,n.yg)("strong",{parentName:"p"},"Upload Inputs")," button. The small window that pops up allows you to upload your inputs."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(99492).A,width:"1915",height:"927"})),(0,n.yg)("p",null,"You can use either of the following options to add text inputs to your app:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Upload from a ",(0,n.yg)("inlineCode",{parentName:"li"},".csv")," file"),(0,n.yg)("li",{parentName:"ul"},"Add texts directly")),(0,n.yg)("h3",{id:"option-1-upload-from-a-csv-file"},"Option 1: Upload From a ",(0,n.yg)("inlineCode",{parentName:"h3"},".csv")," File"),(0,n.yg)("p",null,"You can upload your text directly from a ",(0,n.yg)("inlineCode",{parentName:"p"},".csv")," file. This means you can work with your favorite spreadsheet software or text editor when preparing your data for upload. "),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv/"},"Click here")," to learn how to upload your text data from a ",(0,n.yg)("inlineCode",{parentName:"p"},".csv")," file. "),(0,n.yg)("h3",{id:"option-2-add-texts-directly"},"Option 2: Add Texts Directly"),(0,n.yg)("p",null,"Select the ",(0,n.yg)("strong",{parentName:"p"},"Text")," option on the input uploader window. Then, use the input field to add texts directly to your app. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(55546).A,width:"1897",height:"770"})),(0,n.yg)("h3",{id:"add-a-dataset"},"Add a Dataset"),(0,n.yg)("p",null,"A ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/datasets/"},"dataset")," acts like a container that holds your text inputs. It plays a crucial role in creating and training your model."),(0,n.yg)("p",null,"To create a new dataset on the input uploader window, click the plus sign (",(0,n.yg)("strong",{parentName:"p"},"+"),") next to the ",(0,n.yg)("strong",{parentName:"p"},"Select or add datasets")," search box. Then, type the new dataset name in the search box."),(0,n.yg)("p",null,"The new name you've typed will appear underneath the search box. Click the ",(0,n.yg)("strong",{parentName:"p"},"Add new dataset")," button to create the dataset."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(41881).A,width:"1930",height:"878"})),(0,n.yg)("p",null,"Select the dataset you've just created, if you've not done that. "),(0,n.yg)("h3",{id:"add-custom-concepts"},"Add Custom Concepts"),(0,n.yg)("p",null,'A concept is something that describes the content of your text input, similar to a "tag" or "keyword." The data in these concepts give the model something to "observe" about the keyword, and learn from.'),(0,n.yg)("p",null,"To create a new custom concept on the input uploader window, click the plus sign (",(0,n.yg)("strong",{parentName:"p"},"+"),") next to the ",(0,n.yg)("strong",{parentName:"p"},"Select or add concepts"),' search box. Then, type the new concept name in the search box. For this example, let\'s create two concepts: "positive" and "negative."'),(0,n.yg)("p",null,"The new name you've typed will appear underneath the search box. Click the ",(0,n.yg)("strong",{parentName:"p"},"Add new concept")," button to create the concept."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(93961).A,width:"1930",height:"878"})),(0,n.yg)("p",null,"Select the concept you've just created, if you've not done that. You can follow the same process to create other concepts."),(0,n.yg)("h3",{id:"click-upload-inputs-button"},"Click Upload Inputs Button"),(0,n.yg)("p",null,"After adding text inputs, adding a dataset to contain the text inputs, and adding concepts that annotate the text inputs, click the ",(0,n.yg)("strong",{parentName:"p"},"Upload inputs")," button at the bottom of the input uploader window. "),(0,n.yg)("p",null,"Your inputs and their annotations will be added to your app. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(15441).A,width:"1930",height:"930"})),(0,n.yg)("h2",{id:"navigate-to-model-mode"},"Navigate to Model Mode"),(0,n.yg)("p",null,"Next, select the ",(0,n.yg)("strong",{parentName:"p"},"Models")," option on the collapsible left sidebar. You'll be redirected to the models listing page, where you can create a new model."),(0,n.yg)("p",null,"Click the ",(0,n.yg)("strong",{parentName:"p"},"Create Model")," button at the upper right section of the page. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(61870).A,width:"1888",height:"921"})),(0,n.yg)("h2",{id:"select-model-type"},"Select Model Type"),(0,n.yg)("p",null,"Select the ",(0,n.yg)("strong",{parentName:"p"},"Transfer Learning Classifier")," model type. This model leverages the knowledge captured by a pre-trained model so that you can get started very quickly with minimal training data. It allows you to transfer the knowledge gained from solving one problem to help solve a different but related problem."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(70364).A,width:"1892",height:"910"})),(0,n.yg)("h2",{id:"create-a-model"},"Create a Model"),(0,n.yg)("p",null,"On the ensuing page, provide the details for creating a new text classification model."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(19906).A,width:"1482",height:"1541"})," "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Model Id"),"\u2014Provide a unique ID for your model."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Dataset Id"),"\u2014Select the dataset you'd created previously. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Dataset version_id"),"\u2014You may select a version for your dataset. You can ",(0,n.yg)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#create-a-dataset-version"},"create a new dataset version")," by selecting the ",(0,n.yg)("strong",{parentName:"li"},"Datasets")," option on the collapsible left sidebar and following the prompts."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concepts"),"\u2014Select the concepts you'd created previously."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concepts mutually_exclusive"),"\u2014Turn this on if there is no overlap between any of your concepts. For this example, we'll not turn it on. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Enrich dataset"),"\u2014\u2014If it's enabled (set to ",(0,n.yg)("strong",{parentName:"li"},"Automatic"),"), it lets you use Clarifai's rich dataset of negative embeddings to improve your model's accuracy. For this example, we'll enable it. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Inference settings"),"\u2014Optionally, you may configure the inference settings to enhance the performance of your model. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Train Model"),"\u2014Click the button to create and train the model.")),(0,n.yg)("p",null,"After creating the model, you'll be redirected to its overview page."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(78622).A,width:"1890",height:"840"})," "),(0,n.yg)("h2",{id:"try-out-your-new-model"},"Try Out Your New model"),(0,n.yg)("p",null,"To try out your new model, select the ",(0,n.yg)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar. Then, click the ",(0,n.yg)("strong",{parentName:"p"},"Upload Inputs")," button and use the small input uploader window that pops up to add some new text inputs, just as we previously illustrated."),(0,n.yg)("p",null,"Next, on the inputs manager page, click the specific text input you want to get its predictions. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(64960).A,width:"1930",height:"878"})," "),(0,n.yg)("p",null,"You'll be redirected to the viewer page for that text input."),(0,n.yg)("p",null,"Once you're on the input viewer page, set the page's mode to ",(0,n.yg)("strong",{parentName:"p"},"Predict"),". You can find the mode settings at the upper right corner of the page."),(0,n.yg)("p",null,"On the right sidebar, click the ",(0,n.yg)("strong",{parentName:"p"},"Select a Model or Workflow")," link."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(30609).A,width:"1910",height:"771"})," "),(0,n.yg)("p",null,"On the right sidebar that appears, click the ",(0,n.yg)("strong",{parentName:"p"},"Select Model or Workflow")," search box, and select the model you created from the drop-down list."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(54362).A,width:"1566",height:"764"})," "),(0,n.yg)("p",null,"After selecting the model, the custom concept predictions will be processed and populated on the right sidebar."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(60547).A,width:"1568",height:"775"})," "),(0,n.yg)("p",null,"That's it!"))}u.isMDXComponent=!0},66611:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/create_text_1-9b7f3617b2d1478f3d1973f6a5176b6f.png"},72280:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/nav-to-explorer_1-a3915f0e5cad42501736c97d33052a69.png"},70364:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/select-model-type-7f7454319d2bb7c15430b13c53297bbe.png"},93961:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-add-concept-8998f5d10a6b8d9f3a93bef0c35d3e04.png"},41881:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-add-dataset-9b1e0f69736e6ef9957cdf5b6f42d17a.png"},64960:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-click-text-input-d4bc6c294331eda0f1a242dce53e2d7f.png"},19906:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-create-model-2-9b00e010c9ec672e806711706eed0a05.png"},61870:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-model-mode-48b496a046f1b18ae6d3f9036e950c50.png"},78622:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-model-overview-ed8853f09fde715a5ae29724b59a6b6c.png"},30609:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-try-own-model-1-e8a35ee0c80df46d8fee29cfe30cc44c.png"},54362:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-try-own-model-2-40e4a05fefc6b0644c8fb2f0826535d9.png"},60547:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-try-own-model-3-5a085807248dd07cd8fcef6c4fae7039.png"},55546:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-upload-inputs-1-44bddbf1288d2277942a56fd59d2e3de.png"},15441:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-upload-inputs-2-f7267f2a7497e080b76879e2942c96ab.png"},99492:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/text-upload-inputs-765b300a6c16f0214b42a95711d03e93.png"}}]);