"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[564],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),o=a(86010),r=a(53438),i=a(39960),l=a(13919),s=a(95999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:a}=e;return n.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",p.cardContainer)},a)}function c(e){let{href:t,icon:a,title:r,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",p.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",p.cardDescription),title:i},i))}function u(e){let{item:t}=e;const a=(0,r.Wl)(t);return a?n.createElement(c,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const a=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,r.xz)(t.docId??void 0);return n.createElement(c,{href:t.href,icon:a,title:t.label,description:t.description??o?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const a=(0,r.jA)();return n.createElement(f,{items:a.items,className:t})}function f(e){const{items:t,className:a}=e;if(!t)return n.createElement(g,e);const i=(0,r.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",a)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},60582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),r=a(52991),i=a(53438);const l={description:"Train the entire graph of your custom model"},s="Deep Training",p={unversionedId:"portal-guide/model/deep-training/README",id:"portal-guide/model/deep-training/README",title:"Deep Training",description:"Train the entire graph of your custom model",source:"@site/docs/portal-guide/model/deep-training/README.mdx",sourceDirName:"portal-guide/model/deep-training",slug:"/portal-guide/model/deep-training/",permalink:"/portal-guide/model/deep-training/",draft:!1,tags:[],version:"current",frontMatter:{description:"Train the entire graph of your custom model"},sidebar:"tutorialSidebar",previous:{title:"Model Types",permalink:"/portal-guide/model/model-types"},next:{title:"Visual Classification Templates",permalink:"/portal-guide/model/deep-training/visual-classification-templates"}},d={},c=[{value:"Template Types",id:"template-types",level:2},{value:"Create Your Deep Trained Model",id:"create-your-deep-trained-model",level:2},{value:"Create App and Upload Inputs",id:"create-app-and-upload-inputs",level:4},{value:"Create Concepts and Label Inputs",id:"create-concepts-and-label-inputs",level:4},{value:"Model Mode",id:"model-mode",level:4},{value:"Create the Custom Model you Need",id:"create-the-custom-model-you-need",level:4},{value:"Configure Your Model",id:"configure-your-model",level:4},{value:"Train Your Model",id:"train-your-model",level:4},{value:"Job Cancellation",id:"job-cancellation",level:4}],u={toc:c},m="wrapper";function h(e){let{components:t,...l}=e;return(0,o.kt)(m,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deep-training"},"Deep Training"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Train the entire graph of your custom model")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Clarifai offers a variety of pre-built models that are designed to help you create AI solutions quickly and efficiently."),(0,o.kt)("p",null,"Clarifai models are the recommended starting point for many users because they offer incredibly fast training times, especially when you customize them using the Context-Based Classifier model type for transfer learning."),(0,o.kt)("p",null,"But there are many cases where accuracy and the ability to carefully target solutions takes priority over speed and ease of use. Additionally, you may need a model to learn new features not recognized by existing Clarifai Models. "),(0,o.kt)("p",null,'For such cases, it is possible to "deep train" your custom models and integrate them directly within your workflows.'),(0,o.kt)("p",null,"You might consider deep training if you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A custom tailored dataset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accurate labels")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expertise and time to fine tune models"))),(0,o.kt)("h2",{id:"template-types"},"Template Types"),(0,o.kt)("p",null,"You can take advantage of a variety of templates when building your deep trained models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way that your model learns."),(0,o.kt)("p",null,"Here are the template types we offer:"),(0,o.kt)(r.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"create-your-deep-trained-model"},"Create Your Deep Trained Model"),(0,o.kt)("p",null,"Creating and working with deep trained models is very similar to working with Clarifai models."),(0,o.kt)("p",null,"Let's demonstrate how you can create a deep trained model. "),(0,o.kt)("h4",{id:"create-app-and-upload-inputs"},"Create App and Upload Inputs"),(0,o.kt)("p",null,"Get started by creating your app and uploading inputs."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In general, deep trained models need more data than the ones trained on top of Clarifai models. For most applications, you\u2019ll need at least 1000 training inputs, but it could be much more than this depending on your specific use case.")),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create an App")," button and provide the information required to create a new application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create an app",src:a(15961).Z,width:"1889",height:"935"})),(0,o.kt)("p",null,"To upload inputs into your app, select the ",(0,o.kt)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar. Next, click the ",(0,o.kt)("strong",{parentName:"p"},"Upload Inputs")," button and upload the inputs you want to add to the app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"upload inputs",src:a(1452).Z,width:"1917",height:"863"})),(0,o.kt)("p",null,"The small window that pops up allows you to upload inputs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"upload inputs window",src:a(36244).Z,width:"1301",height:"805"})),(0,o.kt)("h4",{id:"create-concepts-and-label-inputs"},"Create Concepts and Label Inputs"),(0,o.kt)("p",null,"The process of creating concepts and labeling inputs is the same for deep trained models as for other Clarifai models."),(0,o.kt)("p",null,"Clicking the ",(0,o.kt)("strong",{parentName:"p"},"Show Upload Settings")," button on the small window that pops up when uploading inputs exposes a section that lets you create concepts and label inputs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Show Upload Settings",src:a(24595).Z,width:"1235",height:"691"})),(0,o.kt)("p",null,"The section allows you to add the following to your inputs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Datasets"),"\u2014A dataset is a set of data input examples for actions like training and evaluation. You can select a previously created dataset or create a new one. For this example, you may not provide it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Concepts"),"\u2014Adding concepts help in training your model. You can select a previously created concept or create a new one. For this example, create new concepts and label your image inputs with them."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Metadata"),"\u2014You can also add inputs with custom metadata, which can be searched or filtered. Metadata can be any arbitrary JSON. For this example, you may not provide it.")),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Upload inputs")," button at the button of the pop-up window to finalize uploading your inputs."),(0,o.kt)("h4",{id:"model-mode"},"Model Mode"),(0,o.kt)("p",null,"Next, select the ",(0,o.kt)("strong",{parentName:"p"},"App Models")," option on the collapsible left sidebar to enter the model mode."),(0,o.kt)("h4",{id:"create-the-custom-model-you-need"},"Create the Custom Model you Need"),(0,o.kt)("p",null,"On the ensuing page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create Model")," button on the top-right corner of the page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create app models",src:a(95532).Z,width:"1883",height:"593"})),(0,o.kt)("p",null,"Next, on the page for choosing the type of model you want to create, select a ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Classifier"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Embedder"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Detector"),"."),(0,o.kt)("p",null,"For this example, let\u2019s choose a ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Classifier"),", which would classify images into set of concepts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"choose visual classifier",src:a(26853).Z,width:"1539",height:"913"})),(0,o.kt)("h4",{id:"configure-your-model"},"Configure Your Model"),(0,o.kt)("p",null,"On the ensuing page, provide the details required to create the deep trained model."),(0,o.kt)("p",null,"For this example, let's provide the model id, select the concepts we created previously, and select a template name. You can also fill the other fields if you want to."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"configure model",src:a(31417).Z,width:"1471",height:"915"})),(0,o.kt)("p",null,"The pre-configured model template is essential for training with on your data. When you choose your deep training template, you will see the hyperparameters that are available within that template populated with default values. You can adjust these values as desired."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"template configuration",src:a(23421).Z,width:"1499",height:"885"})),(0,o.kt)("p",null,"After configuring the model, click the ",(0,o.kt)("strong",{parentName:"p"},"Create Model")," button at the bottom of the page."),(0,o.kt)("h4",{id:"train-your-model"},"Train Your Model"),(0,o.kt)("p",null,"Next, train your model by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Train Model")," button on the upper right-hand corner of the created model's page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"train model",src:a(72101).Z,width:"1889",height:"563"})),(0,o.kt)("p",null,"Deep training can take much longer time than custom training a model. Many hours are required to deep train models with large numbers of inputs and complex taxonomies. You can check the progress in the model details view and monitor the training as it continues."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"model training progress",src:a(16780).Z,width:"1570",height:"452"})),(0,o.kt)("p",null,"Once you've created and trained your new model, you can put it to work, such as by adding it to a workflow and using it in your app."),(0,o.kt)("h4",{id:"job-cancellation"},"Job Cancellation"),(0,o.kt)("p",null,"You can cancel a deep training job at any time by deleting the model version that you are training. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete model version",src:a(15037).Z,width:"1541",height:"309"})),(0,o.kt)("p",null,"Deep training is billed at an hourly rate and for cancelled jobs, you will be charged for the time that you've used to train your model. "),(0,o.kt)("p",null,"You can learn more about deep training pricing ",(0,o.kt)("a",{parentName:"p",href:"https://www.clarifai.com/pricing"},"here"),"."))}h.isMDXComponent=!0},26853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choose_visual_classifier-a97c936e4afbf27ec4a2745fa986e1fa.png"},95532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_create_model-5e2cf374cb72e96f06006713444b62d9.png"},15961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_create_new_app-2cb7644e0c0ab6a0a29d4ca8545902c9.png"},24595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_show_upload_settings-a983621643bece404140bf3be2152e94.png"},1452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_upload_inputs-c396077c3018aecdcdffb645c2a110f1.png"},36244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_models_upload_inputs_window-94431637f720d8794b43cb98ef5a5426.png"},31417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deep_training_create_model-f37b65bdfd9831d71d61907325c16db1.png"},72101:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deep_training_train_model-7854028c8cacc492c419b777129f8746.png"},15037:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete_model_version-966b342d63d90ab0474fd7cee4407f36.png"},16780:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/model_training_progress-660cca43282cbd594cc50fe4ef02d3b1.png"},23421:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template_configuration-32839484a23610f58485c45a6077a84c.png"}}]);