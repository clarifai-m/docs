"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7030],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),u=i,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(58168),i=(n(96540),n(15680));const r={description:"Train new models with the click of a button.",sidebar_position:3},o="Training Basics",l={unversionedId:"portal-guide/model/training-basics",id:"portal-guide/model/training-basics",title:"Training Basics",description:"Train new models with the click of a button.",source:"@site/docs/portal-guide/model/training-basics.md",sourceDirName:"portal-guide/model",slug:"/portal-guide/model/training-basics",permalink:"/portal-guide/model/training-basics",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/training-basics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Train new models with the click of a button.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custom Models",permalink:"/portal-guide/model/pcustom-model-walkthrough"},next:{title:"Model Training FAQs",permalink:"/portal-guide/model/training-faqs"}},s={},d=[{value:"Train a Transfer Learning Model",id:"train-a-transfer-learning-model",level:2},{value:"Train a Deep Fine-Tuned Model",id:"train-a-deep-fine-tuned-model",level:2},{value:"Training Time Estimator",id:"training-time-estimator",level:3}],p={toc:d},g="wrapper";function c(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"training-basics"},"Training Basics"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Train new models with the click of a button")),(0,i.yg)("hr",null),(0,i.yg)("p",null,"When you train a model, you are telling the system to look at all the inputs with concepts you've provided and learn from them. Then, when the model encounters new inputs, it could correctly generate predictions by applying the learned knowledge."),(0,i.yg)("p",null,"The train operation is asynchronous. It may take some time for your model to be fully trained and ready. Your model will be trained on all inputs that have been processed, and a new version will be created. "),(0,i.yg)("h2",{id:"train-a-transfer-learning-model"},"Train a Transfer Learning Model"),(0,i.yg)("p",null,"To train a ",(0,i.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/"},"transfer learning model"),", start by navigating to the individual page of your app. Then, select the ",(0,i.yg)("strong",{parentName:"p"},"Models")," option on the collapsible left sidebar."),(0,i.yg)("p",null,"You\u2019ll be redirected to the models\u2019 listing page, where you can see a list of models available in your app. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"models listing page",src:n(29641).A,width:"1920",height:"824"})),(0,i.yg)("p",null,"Select the model you like to train. "),(0,i.yg)("p",null,"On the individual model's page, click the ",(0,i.yg)("strong",{parentName:"p"},"Create New Model Version")," button on the page's upper right-hand corner.  "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"train model",src:n(49754).A,width:"1915",height:"728"})),(0,i.yg)("p",null,"You'll be redirected to a page where you can set up the details for training your transfer learning model. "),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"train transfer learning model",src:n(45202).A,width:"1356",height:"1777"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Dataset"),"\u2014Select a ",(0,i.yg)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete"},"dataset"),", and its version, for training the model. Otherwise, if there's no dataset, all compatible labeled inputs in your app will be used as a default dataset. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Base embed_model"),"\u2014Select the base model version to use for embeddings, which has to be one of the embed models in the app workflow. This allows you to specify the specific model in case the default workflow of your app has multiple embedding models present in it."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Concepts"),"\u2014Select the concepts that you want this model version to predict. These should be concepts that are in your training dataset with labels."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Concepts mutually_exclusive"),"\u2014Turn this on if there is no overlap between any of your concepts. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Enrich dataset"),"\u2014If it's enabled (set to ",(0,i.yg)("inlineCode",{parentName:"li"},"Automatic"),"), it lets you enrich the model with supplemental data from pre-built datasets of negative embeddings, which improves the model's accuracy. Otherwise, setting it to ",(0,i.yg)("inlineCode",{parentName:"li"},"Disabled")," lets you not to use the negative embeddings whether they are available or not."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Inference settings"),"\u2014Optionally, you may configure the inference settings to enhance the performance of your model.")),(0,i.yg)("p",null,"After configuring the settings, click the ",(0,i.yg)("strong",{parentName:"p"},"Train Model")," button to begin training the model. "),(0,i.yg)("h2",{id:"train-a-deep-fine-tuned-model"},"Train a Deep Fine-Tuned Model"),(0,i.yg)("p",null,"To train a ",(0,i.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/deep-training/"},"deep fine-tuned")," model, navigate to the individual page of your model and click the ",(0,i.yg)("strong",{parentName:"p"},"Create New Model Version")," button\u2014as was illustrated previously. "),(0,i.yg)("p",null,"On the ensuing page, set up the details for training your deep fine-tuned model."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"train deep fine-tuned model",src:n(48459).A,width:"1360",height:"1703"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Dataset"),"\u2014Select a dataset, and its version, for training the model. Otherwise, if there's no dataset, all compatible labeled inputs in your app will be used as a default dataset. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Concepts"),"\u2014Select the concepts that you want this model version to predict. These should be concepts that are in your training dataset with labels."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Invalid data_tolerance_percent"),"\u2014Set a percentage value (0 to 100) of user's tolerance level to invalid inputs among all training inputs. Training will be stopped with error thrown if actual percent of invalid inputs is higher than this."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Template"),"\u2014select a ",(0,i.yg)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/model/deep-training/#template-types"},"template")," you want to use to train your model. "),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Training and inference settings"),"\u2014Optionally, you may configure the training and inference settings to enhance the performance of your model.")),(0,i.yg)("p",null,"After configuring the settings, click the ",(0,i.yg)("strong",{parentName:"p"},"Train Model")," button to begin training the model. "),(0,i.yg)("h3",{id:"training-time-estimator"},"Training Time Estimator"),(0,i.yg)("p",null,"Before initiating the training of a deep fine-tuned model, you will get an estimate outlining the anticipated duration of the training process. This offers transparency in expected training costs. We currently charge $4 per hour."),(0,i.yg)("p",null,"The estimate is displayed above the ",(0,i.yg)("strong",{parentName:"p"},"Train Model")," button (check the above screenshot), rounded down to the nearest hour with 15-minute increments. "),(0,i.yg)("p",null,"The exact training time estimate depends on the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Model type;"),(0,i.yg)("li",{parentName:"ul"},"Model configuration details;"),(0,i.yg)("li",{parentName:"ul"},"Dataset statistics;"),(0,i.yg)("li",{parentName:"ul"},"Hardware.")),(0,i.yg)("p",null,"Clarifai\u2019s Training Time Estimator is carefully designed to balance trade-offs between simplicity, generalization, and accuracy. "),(0,i.yg)("p",null,"Notably, some model configurations and dataset statistics affect training time much more than others. For example, the number of items in the dataset directly affects the number of training steps in most configs, while the learning rate has no impact. "),(0,i.yg)("p",null,"In addition, some parameters affect the time linearly (e.g. number of items), while others may be quadratic (e.g. image size), and others approximately linear, quadratic, or subquadratic\u2014depending on the model (e.g. number of tokens in each input). "),(0,i.yg)("p",null,"The current version of the Training Time Estimator provides estimates only for each template\u2019s default parameter configuration, and we plan to include other parameter configurations in the upcoming releases. "),(0,i.yg)("p",null,"The exact calculation based on the current AWS A10 GPU is:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-text"},"training time = int(round(A * num_inputs * num_epochs + B)) \n")),(0,i.yg)("p",null,(0,i.yg)("em",{parentName:"p"},"Where A and B are parameter coefficients estimated specific to the template of each model type.")))}c.isMDXComponent=!0},49754:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/custom_model_created_model_page-a5fee7209543a1b81c4a4cda368906b3.png"},48459:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/train_deep_fine_tuned_model-8930c927a9015610578e7391bdf66dd0.png"},29641:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/training_basics_models_page-2a63c7289fe5b098b9844999d275d67b.png"},45202:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/update_transfer_learning_classifier_model-96a3a6abdcca0679c75e039f9a7adcc4.png"}}]);