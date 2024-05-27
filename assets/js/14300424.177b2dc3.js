"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7139],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>m});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return a?o.createElement(m,l(l({ref:t},c),{},{components:a})):o.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:n,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},38763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=a(58168),n=(a(96540),a(15680));const i={description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform",sidebar_position:3},l="Your First Custom Model (~5 min)",r={unversionedId:"clarifai-basics/quick-start/your-first-custom-model",id:"clarifai-basics/quick-start/your-first-custom-model",title:"Your First Custom Model (~5 min)",description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform",source:"@site/docs/clarifai-basics/quick-start/your-first-custom-model.md",sourceDirName:"clarifai-basics/quick-start",slug:"/clarifai-basics/quick-start/your-first-custom-model",permalink:"/clarifai-basics/quick-start/your-first-custom-model",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/quick-start/your-first-custom-model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Your First Visual Search App (~1 min)",permalink:"/clarifai-basics/quick-start/your-first-visual-search-app"},next:{title:"Key Terminology to Know",permalink:"/clarifai-basics/glossary/"}},s={},p=[{value:"Step 1: Set up Your Account or Login",id:"step-1-set-up-your-account-or-login",level:2},{value:"Step 2: Verify Your Email Address",id:"step-2-verify-your-email-address",level:2},{value:"Step 3: Click &quot;my-first-application&quot;",id:"step-3-click-my-first-application",level:2},{value:"Step 4: Upload Training Data",id:"step-4-upload-training-data",level:2},{value:"Step 5: Create Your Custom Model",id:"step-5-create-your-custom-model",level:2},{value:"Step 6: Train Your Custom Model",id:"step-6-train-your-custom-model",level:2},{value:"Dataset",id:"dataset",level:4},{value:"Base Embed Model",id:"base-embed-model",level:4},{value:"Concepts",id:"concepts",level:4},{value:"Concepts Mutually Exclusive",id:"concepts-mutually-exclusive",level:4},{value:"Enrich Dataset",id:"enrich-dataset",level:4},{value:"Inference Settings (optional)",id:"inference-settings-optional",level:4},{value:"Train Model",id:"train-model",level:4},{value:"Step 7: Use Your Custom Model",id:"step-7-use-your-custom-model",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.yg)(u,(0,o.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"your-first-custom-model-5-min"},"Your First Custom Model (~5 min)"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Get up and running in less than 5 minutes with your first custom model")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Let's see how you can easily create custom models on the Clarifai portal. "),(0,n.yg)("admonition",{title:"objective",type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"For this example, we'll create a simple classification model that differentiates between dogs and cats. ")),(0,n.yg)("h2",{id:"step-1-set-up-your-account-or-login"},"Step 1: Set up Your Account or Login"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://clarifai.com/signup"},"Click here")," if you need to set up your account for the first time. "),(0,n.yg)("p",null,"Or ",(0,n.yg)("a",{parentName:"p",href:"https://clarifai.com/login"},"click here")," to log in.\u200c"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Create account login",src:a(64541).A,width:"1919",height:"927"})),(0,n.yg)("h2",{id:"step-2-verify-your-email-address"},"Step 2: Verify Your Email Address"),(0,n.yg)("p",null,"If you created a new account, check your email inbox. We will send you a link that enables you to automatically verify your address.\u200c"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"verify email",src:a(87719).A,width:"1913",height:"925"})),(0,n.yg)("h2",{id:"step-3-click-my-first-application"},'Step 3: Click "my-first-application"'),(0,n.yg)("p",null,"Go to your apps' listing page, where you'll find a default \"my-first-application\" already created."),(0,n.yg)("p",null,"If you click on the application, you'll be redirected to its individual page, where you can upload inputs."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"my first app",src:a(26523).A,width:"1824",height:"694"})),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"You can also click the ",(0,n.yg)("strong",{parentName:"p"},"Create")," button at the upper-right section of the navigation bar to easily create a new application.")),(0,n.yg)("h2",{id:"step-4-upload-training-data"},"Step 4: Upload Training Data"),(0,n.yg)("admonition",{title:"training",type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"In machine learning, training refers to teaching a model to \u201clearn\u201d from the annotated concepts on the provided inputs. ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concepts/"},"Concepts"),'\u2014also known as "classes"\u2014are the tags or keywords that are used to annotate (or label) an input to indicate that the input has that entity.'),(0,n.yg)("p",{parentName:"admonition"},"Training data consists of input samples and their corresponding output labels or target values. By exposing the model to a diverse range of training examples, it can learn to make predictions or decisions on new, unseen data.")),(0,n.yg)("p",null,"Select the ",(0,n.yg)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar to upload training data on your app."),(0,n.yg)("p",null,"Next, click the ",(0,n.yg)("strong",{parentName:"p"},"Upload inputs")," button."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"data mode",src:a(82779).A,width:"1906",height:"895"})),(0,n.yg)("p",null,"The small window that pops up allows you to upload your inputs \u2014 either by uploading them directly from your local device or by providing publicly accessible URLs. "),(0,n.yg)("p",null,'Let\'s start by uploading images of dogs and annotating them with the "dog" concept. '),(0,n.yg)("p",null,"For this illustration, let's select the ",(0,n.yg)("strong",{parentName:"p"},"URL")," tab and provide the following images of dogs:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"https://samples.clarifai.com/dog1.jpeg\nhttps://samples.clarifai.com/dog2.jpeg\nhttps://samples.clarifai.com/dog3.jpeg\n")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"browse files",src:a(80563).A,width:"1904",height:"821"})),(0,n.yg)("p",null,"To label the inputs, click the plus (",(0,n.yg)("strong",{parentName:"p"},"+"),") sign  next to the ",(0,n.yg)("strong",{parentName:"p"},"Select or add concepts")," search box. Then, type the new concept name in the search box."),(0,n.yg)("p",null,"The new name you typed will appear underneath the search box. Click the ",(0,n.yg)("strong",{parentName:"p"},"Add new concept")," button to create the concept. Once created, the concept will be listed underneath the search box."),(0,n.yg)("p",null,'To upload the images you\'ve annotated with the "dog" concept, click the ',(0,n.yg)("strong",{parentName:"p"},"Upload inputs")," button at the bottom of the pop-up window"),(0,n.yg)("p",null,'Similarly, let\'s upload the following images of cats and annotate them with the "cat" concept.'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-text"},"https://samples.clarifai.com/cat1.jpeg\nhttps://samples.clarifai.com/cat2.jpeg\nhttps://samples.clarifai.com/cat3.jpeg\n")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"browse files",src:a(94879).A,width:"1912",height:"891"})," "),(0,n.yg)("p",null,"Lastly, click the ",(0,n.yg)("strong",{parentName:"p"},"Upload inputs"),' button at the bottom of the pop-up window to upload the images you\'ve annotated with the "cat" concept.'),(0,n.yg)("p",null,"You can find the uploaded images on the Inputs-Manager page. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"uploaded images",src:a(10064).A,width:"1896",height:"824"})," "),(0,n.yg)("h2",{id:"step-5-create-your-custom-model"},"Step 5: Create Your Custom Model"),(0,n.yg)("p",null,"After uploading images that already contain the concepts you want your model to see, you can now proceed to create your own custom model."),(0,n.yg)("p",null,"Select the ",(0,n.yg)("strong",{parentName:"p"},"Models")," option on the collapsible left sidebar. And on the ensuing Models-Manager page, click the ",(0,n.yg)("strong",{parentName:"p"},"Add Model")," button at the upper-right corner of the page."),(0,n.yg)("p",null,"And on the window that pops up, select the ",(0,n.yg)("strong",{parentName:"p"},"Build a Custom Model")," option and click the ",(0,n.yg)("strong",{parentName:"p"},"Continue")," button."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"models manager page",src:a(36509).A,width:"1909",height:"894"})),(0,n.yg)("p",null,"Next, choose the ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types"},"type of model")," you want to create. For this example, let\u2019s choose the ",(0,n.yg)("strong",{parentName:"p"},"Transfer Learn")," model type."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Essentially, transfer learning leverages the knowledge gained from a pre-trained model to facilitate the learning process of a new model for a related problem. This lets you train new models in seconds, not minutes or hours. ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning"},"Click here")," to learn more about it. ")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"create new model",src:a(55302).A,width:"1887",height:"914"})),(0,n.yg)("p",null,"On the ensuing page, provide a unique, memorable ID for your model. "),(0,n.yg)("p",null,"Click the ",(0,n.yg)("strong",{parentName:"p"},"Continue to Configure Model")," button to create your model. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"create model id",src:a(20495).A,width:"1815",height:"777"})),(0,n.yg)("h2",{id:"step-6-train-your-custom-model"},"Step 6: Train Your Custom Model"),(0,n.yg)("p",null,"Next, set up the details required to train your model. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"train model",src:a(51472).A,width:"1140",height:"1232"})),(0,n.yg)("h4",{id:"dataset"},"Dataset"),(0,n.yg)("p",null,"You can select a dataset to use to train the model. Since we don't have a dataset for this example, we'll use the default dataset automatically generated with all the compatible labeled inputs in the app. "),(0,n.yg)("p",null,"You can read more about datasets ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete"},"here"),". "),(0,n.yg)("h4",{id:"base-embed-model"},"Base Embed Model"),(0,n.yg)("p",null,"Select the base embed model to use for embeddings, which has to be one of the embed models in the app workflow. This allows you to specify the specific model in case the default workflow of your app has multiple embedding models present. "),(0,n.yg)("p",null,"For this example, let's go with the default option. "),(0,n.yg)("h4",{id:"concepts"},"Concepts"),(0,n.yg)("p",null,"Select the concepts that you want the model to predict. "),(0,n.yg)("p",null,'For this example, let\'s choose the concepts of "dog" and "cat," which we previously assigned as labels when we uploaded the training data. '),(0,n.yg)("h4",{id:"concepts-mutually-exclusive"},"Concepts Mutually Exclusive"),(0,n.yg)("p",null,"Let's turn the button on to indicate no overlap between any of the model concepts."),(0,n.yg)("h4",{id:"enrich-dataset"},"Enrich Dataset"),(0,n.yg)("p",null,"If it's enabled (set to ",(0,n.yg)("inlineCode",{parentName:"p"},"Automatic"),"), it lets you enrich the model with supplemental data from pre-built datasets of negative embeddings, which improves the model's accuracy."),(0,n.yg)("p",null,"Otherwise, setting it to ",(0,n.yg)("inlineCode",{parentName:"p"},"Disabled")," lets you not use the negative embeddings, whether they are available or not."),(0,n.yg)("p",null,"For this example, let's go with the default option. "),(0,n.yg)("h4",{id:"inference-settings-optional"},"Inference Settings (optional)"),(0,n.yg)("p",null,"Optionally, you can configure the following inference settings for your model:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Max Concepts")," \u2014 The maximum number of concepts to return."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Min Value")," \u2014 The minimum value of the prediction confidence to filter. ")),(0,n.yg)("p",null,"For this example, we'll go with the default option.  "),(0,n.yg)("h4",{id:"train-model"},"Train Model"),(0,n.yg)("p",null,"After configuring the settings, click the ",(0,n.yg)("strong",{parentName:"p"},"Train Model")," button to begin training your model."),(0,n.yg)("h2",{id:"step-7-use-your-custom-model"},"Step 7: Use Your Custom Model"),(0,n.yg)("p",null,"You'll be redirected to the created model's page."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"use custom model",src:a(57721).A,width:"1881",height:"853"})),(0,n.yg)("p",null,"Once the model is trained and ready, you can put it to work, such as by making ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/ppredict"},"predictions")," with it."))}d.isMDXComponent=!0},80563:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/browse_files_custom_model-9c6db007c7a60d15eaf2a6a7e9318136.png"},94879:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/browse_files_custom_model_1-50e71b9f83e3fee2b4f098f3afc83d7e.png"},26523:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/click_my_first_app-78dd5cc9ebd467c9f2b1edbc2d8b8a73.png"},64541:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/create_acct_login-5af937ac1ee6f4014f940c8357118cf0.png"},36509:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/create_custom_model_1-bfa8ad1f094863c27ca556d4887f9b86.png"},55302:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/create_custom_model_2-40186515b36c0e511eec4d86edc7807b.png"},20495:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/create_custom_model_3-c72dfc1cceaa7a9620c1e3342888a82c.png"},51472:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/create_custom_model_4-7562835ee71fa7d42d80193fc99433d5.png"},57721:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/create_custom_model_5-f4f8bcde320b368a23fb5f5a416437a9.png"},82779:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/data_mode-690b563bc3a8415b89e806109f2b708d.png"},10064:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/uploaded_images_1-cff5aa65607d93eb1859836945e355b4.png"},87719:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/verify_email-a0a6c26a68e0279d7ef7bc14fc8ec89b.png"}}]);