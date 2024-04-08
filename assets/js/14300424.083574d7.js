"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>A,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},A=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,A=r(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return a?n.createElement(m,s(s({ref:t},A),{},{components:a})):n.createElement(m,s({ref:t},A))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44191:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform",sidebar_position:3},s="Your First Custom Model (~5 min)",r={unversionedId:"clarifai-basics/quick-start/your-first-custom-model",id:"clarifai-basics/quick-start/your-first-custom-model",title:"Your First Custom Model (~5 min)",description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform",source:"@site/docs/clarifai-basics/quick-start/your-first-custom-model.md",sourceDirName:"clarifai-basics/quick-start",slug:"/clarifai-basics/quick-start/your-first-custom-model",permalink:"/clarifai-basics/quick-start/your-first-custom-model",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/quick-start/your-first-custom-model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Your First Visual Search App (~1 min)",permalink:"/clarifai-basics/quick-start/your-first-visual-search-app"},next:{title:"Key Terminology to Know",permalink:"/clarifai-basics/glossary"}},l={},c=[{value:"Step 1: Set up your account or login",id:"step-1-set-up-your-account-or-login",level:2},{value:"Step 2: Verify your email address",id:"step-2-verify-your-email-address",level:2},{value:"Step 3: Click &quot;my-first-application&quot;",id:"step-3-click-my-first-application",level:2},{value:"Step 4: Upload training data",id:"step-4-upload-training-data",level:2},{value:"Step 5: Create and train your custom model",id:"step-5-create-and-train-your-custom-model",level:2},{value:"Model ID",id:"model-id",level:4},{value:"Dataset ID",id:"dataset-id",level:4},{value:"Concepts",id:"concepts",level:4},{value:"Concepts mutually_exclusive",id:"concepts-mutually_exclusive",level:4},{value:"Enrich dataset",id:"enrich-dataset",level:4},{value:"Inference settings (optional)",id:"inference-settings-optional",level:4},{value:"Train model",id:"train-model",level:4}],A={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"your-first-custom-model-5-min"},"Your First Custom Model (~5 min)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Get up and running in less than 5 minutes with your first custom model")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's see how you can easily create custom models on the Clarifai portal. "),(0,i.kt)("admonition",{title:"objective",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For this example, we'll create a simple classification model that differentiates between dogs and cats. ")),(0,i.kt)("h2",{id:"step-1-set-up-your-account-or-login"},"Step 1: Set up your account or login"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clarifai.com/signup"},"Click here")," if you need to set up your account for the first time. "),(0,i.kt)("p",null,"Or ",(0,i.kt)("a",{parentName:"p",href:"https://clarifai.com/login"},"click here")," to log in.\u200c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create account login",src:a(13904).Z,width:"1919",height:"927"})),(0,i.kt)("h2",{id:"step-2-verify-your-email-address"},"Step 2: Verify your email address"),(0,i.kt)("p",null,"If you created a new account, check your email. We will send you a link that enables you to automatically verify your address.\u200c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"verify email",src:a(9673).Z,width:"1913",height:"925"})),(0,i.kt)("h2",{id:"step-3-click-my-first-application"},'Step 3: Click "my-first-application"'),(0,i.kt)("p",null,"Go to your apps' listing page, where you'll find a default \"my-first-application\" already created."),(0,i.kt)("p",null,"If you click on the application, you'll be redirected to its individual page, where you can upload inputs."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"my first app",src:a(48994).Z,width:"1824",height:"694"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also click the ",(0,i.kt)("strong",{parentName:"p"},"Create")," button at the upper-right section of the navigation bar to easily create a new application.")),(0,i.kt)("h2",{id:"step-4-upload-training-data"},"Step 4: Upload training data"),(0,i.kt)("admonition",{title:"training",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"In machine learning, training refers to teaching a model to \u201clearn\u201d from the annotated concepts on the provided inputs. ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concepts/"},"Concepts"),'\u2014also known as "classes"\u2014are the tags or keywords that are used to annotate (or label) an input to indicate that the input has that entity.'),(0,i.kt)("p",{parentName:"admonition"},"Training data consists of input samples and their corresponding output labels or target values. By exposing the model to a diverse range of training examples, it can learn to make predictions or decisions on new, unseen data.")),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar to upload training data on your app."),(0,i.kt)("p",null,"Next, click the ",(0,i.kt)("strong",{parentName:"p"},"Upload inputs")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"data mode",src:a(11228).Z,width:"1906",height:"895"})),(0,i.kt)("p",null,"The small window that pops up allows you to upload your inputs \u2014 either by uploading them directly from your local device or by providing a publicly accessible URL. "),(0,i.kt)("p",null,'Let\'s start by uploading images of dogs and annotating them with the "dog" concept. '),(0,i.kt)("p",null,"For this illustration, let's provide the following images of dogs as URLs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://samples.clarifai.com/dog1.jpeg\nhttps://samples.clarifai.com/dog2.jpeg\nhttps://samples.clarifai.com/dog3.jpeg\n")),(0,i.kt)("p",null,"To label the inputs, click the plus (",(0,i.kt)("strong",{parentName:"p"},"+"),") sign  next to the ",(0,i.kt)("strong",{parentName:"p"},"Select concepts")," search box. Then, type the new concept name in the search box."),(0,i.kt)("p",null,"The new name you've typed will appear underneath the search box. Click the ",(0,i.kt)("strong",{parentName:"p"},"Add new concept")," button to create the concept. Once created, the concept will be listed underneath the search box."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"browse files",src:a(2786).Z,width:"1904",height:"821"})),(0,i.kt)("p",null,'To upload the the images you\'ve annotated with the "dog" concept, click the ',(0,i.kt)("strong",{parentName:"p"},"Upload inputs")," button at the bottom of the pop-up window"),(0,i.kt)("p",null,'Similarly, let\'s upload the following images of cats and annotate them with the "cat" concept.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"https://samples.clarifai.com/cat1.jpeg\nhttps://samples.clarifai.com/cat2.jpeg\nhttps://samples.clarifai.com/cat3.jpeg\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"browse files",src:a(56738).Z,width:"1912",height:"891"})," "),(0,i.kt)("p",null,"Lastly, click the ",(0,i.kt)("strong",{parentName:"p"},"Upload inputs"),' button at the bottom of the pop-up window to upload the images you\'ve annotated with the "cat" concept.'),(0,i.kt)("p",null,"You can find the uploaded images on the Inputs-Manager page. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"uploaded images",src:a(42987).Z,width:"1896",height:"824"})," "),(0,i.kt)("h2",{id:"step-5-create-and-train-your-custom-model"},"Step 5: Create and train your custom model"),(0,i.kt)("p",null,"After uploading images that already contain the concepts you want your model to see, you can now proceed to create your own custom model."),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"Models")," option on the collapsible left sidebar. And on the ensuing models manager page, click the ",(0,i.kt)("strong",{parentName:"p"},"Create Model")," button at the upper-right corner of the page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"models manager page",src:a(86177).Z,width:"1915",height:"593"})),(0,i.kt)("p",null,"Next, choose the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types"},"type of model")," you want to create. For this example, let\u2019s choose a ",(0,i.kt)("strong",{parentName:"p"},"Transfer Learning Classifier"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create new model",src:a(27314).Z,width:"1893",height:"931"})),(0,i.kt)("p",null,"On the ensuing page, provide the details required to create the custom model. "),(0,i.kt)("p",null,"Let's talk about the fields to fill in the form."),(0,i.kt)("h4",{id:"model-id"},"Model ID"),(0,i.kt)("p",null,"Provide a unique, memorable ID for your model."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create model id",src:a(66624).Z,width:"1107",height:"391"})),(0,i.kt)("h4",{id:"dataset-id"},"Dataset ID"),(0,i.kt)("p",null,"You can select a dataset to use for training the model. Since we don't have a dataset for this example, a new dataset will be automatically generated with all the inputs in the app. "),(0,i.kt)("p",null,"You can read more about datasets ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete"},"here"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dataset id",src:a(38289).Z,width:"1105",height:"235"})),(0,i.kt)("h4",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,'Select the concepts that you want the model to predict. Remember that we\'d already labeled the inputs with "dog" and "cat" concepts when we uploaded the training data.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"select concepts",src:a(57060).Z,width:"1200",height:"256"})),(0,i.kt)("h4",{id:"concepts-mutually_exclusive"},"Concepts mutually_exclusive"),(0,i.kt)("p",null,"Let's turn the button on to indicate that there is no overlap between any of the model concepts."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"concepts mutually_exclusive ",src:a(56905).Z,width:"1253",height:"237"})),(0,i.kt)("h4",{id:"enrich-dataset"},"Enrich dataset"),(0,i.kt)("p",null,"Setting this to ",(0,i.kt)("strong",{parentName:"p"},"Automatic")," enriches the training data with supplemental data from a pre-built dataset of negative embeddings, which improves the predictions' accuracy."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enrich dataset",src:a(31826).Z,width:"1131",height:"219"})),(0,i.kt)("h4",{id:"inference-settings-optional"},"Inference settings (optional)"),(0,i.kt)("p",null,"Optionally, you can configure the inference settings for your model. For this example, we'll go with the default inference settings. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"inference settings",src:a(85171).Z,width:"1255",height:"705"})),(0,i.kt)("h4",{id:"train-model"},"Train model"),(0,i.kt)("p",null,"Finally, click the ",(0,i.kt)("strong",{parentName:"p"},"Train Model")," button to create and train your model."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"train model",src:a(58322).Z,width:"787",height:"175"})),(0,i.kt)("p",null,"You'll be redirected to the created model's page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"created model page",src:a(72515).Z,width:"1913",height:"823"})),(0,i.kt)("p",null,"Once the model is trained and ready, you can put it to work, such as by making ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/ppredict"},"predictions")," with it."))}d.isMDXComponent=!0},2786:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/browse_files_custom_model-edb08a29ee4302efa014dc41bdb5464f.png"},56738:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/browse_files_custom_model_1-d0f4568cae8679c8ede78c4d49796e2b.png"},48994:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/click_my_first_app-78dd5cc9ebd467c9f2b1edbc2d8b8a73.png"},13904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_acct_login-5af937ac1ee6f4014f940c8357118cf0.png"},86177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_1-a01612a8ed91a8a910d56cb7cd2f8cbe.png"},72515:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_10-d7cc742bb79dfe963a57e0dcaab3fdb0.png"},27314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_2-29d6a809452889bc81fd7db608947420.png"},66624:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_3-b59d964d4cd20c77b7f23126d876c161.png"},38289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_4-a4518ecff520222f1de0cbe3b1450ae7.png"},57060:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_5-0084508effad8ce3c38ef06accf46e0a.png"},56905:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_6-e9813a4379ac1b883a7a9b6e37f94d06.png"},31826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_7-4020ebd4af6e9ea5958ec511831f065e.png"},85171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_custom_model_8-3485089be666cbc41002d6046c71c56a.png"},58322:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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rsRErfN9io0bo717VzUSsfiaD8WClWkSAABmiJhogOMVE8ye2Y6JjnY79tzxud73KeYtXx5Lbv1kZxsAYCb47ADMVa1WnPIba+KHPv2ZWHDRRXHwuedi/788VN0JAHDsxATMcaNnnBGLr/1wnPbxP4m9X/piNQoAcOzEBAyJ+W/8qVhyy62x7/5/rEYAAI6NmIAhs/AXfrHaAgA4NmKiQVqz+F1dZo55BACGhZhokFOrv43AYDOPAMCwEBMNcs6Z7WqLQWYeAYBhISYaIv89gl95SzsWn1wNMJDy/OV5nNW/LwEAcIKIiYbIa89fvXgiRlv+huAgy/OX51FLAADDQEw0QP2v2K1WK65713gs9pn7gZTnLc9fnsfMuxMAwFwnJhoiLzzrdydWvSkFhY87DZQ8X3ne6nclhAQAMAzEREPkxWf+F+18uWlNO1ad7x2KQZHnKc9Xnrd6DsUEADAMRiaSaptZlqciX9rtfGnHXY9GrP38vBhvj8TuvdVONEZ+NyJ/R+Ijv3YwVr+1+zG1Viu/w9S9AADMdWKiYaYHxcREO+7e0oovPjYa23aMxK6xkUh3MUvyH6Q7ddFEnLNsIt7xlvyxpvzLTd13I4QEADBsxEQD1VPSjYnudRrtjZuy2VOHQve6+9G0vJmvJ8cBAIaDmGiwPDWTASEimqT7DkT/togAAIaPmBgApqi5RAQAMMzEBAAAUMRPwwIAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUERMAAAARcQEAABQREwAAABFxAQAAFBETAAAAEXEBAAAUCDi/wB+yYTT6Q2OAgAAAABJRU5ErkJggg=="},11228:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data_mode-690b563bc3a8415b89e806109f2b708d.png"},42987:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uploaded_images_1-cff5aa65607d93eb1859836945e355b4.png"},9673:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify_email-a0a6c26a68e0279d7ef7bc14fc8ec89b.png"}}]);