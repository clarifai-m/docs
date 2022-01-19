"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5823],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4191:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform"},c="Your First AI Predictions (~1 min)",l={unversionedId:"clarifai-basics/quick-start/your-first-custom-model",id:"clarifai-basics/quick-start/your-first-custom-model",title:"Your First AI Predictions (~1 min)",description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform",source:"@site/docs/clarifai-basics/quick-start/your-first-custom-model.md",sourceDirName:"clarifai-basics/quick-start",slug:"/clarifai-basics/quick-start/your-first-custom-model",permalink:"/clarifai-basics/quick-start/your-first-custom-model",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/quick-start/your-first-custom-model.md",tags:[],version:"current",frontMatter:{description:"Get up-and-running in less than 5 minutes with the world's most powerful AI platform"},sidebar:"tutorialSidebar",previous:{title:"Start Here (5 mins or less!)",permalink:"/clarifai-basics/start-here-5-mins-or-less"},next:{title:"Your First AI Predictions (~1 min)",permalink:"/clarifai-basics/quick-start/your-first-predictions"}},u=[{value:"Step 1: Set up your account or login",id:"step-1-set-up-your-account-or-login",children:[],level:2},{value:"Step 2: Verify your email address",id:"step-2-verify-your-email-address",children:[],level:2},{value:"Step 3: Click &quot;my-first-application&quot;",id:"step-3-click-my-first-application",children:[],level:2},{value:"Step 4: Upload an image",id:"step-4-upload-an-image",children:[],level:2},{value:"Step 5: Create custom concepts",id:"step-5-create-custom-concepts",children:[],level:2},{value:"Step 6: Create and train your custom model",id:"step-6-create-and-train-your-custom-model",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-first-ai-predictions-1-min"},"Your First AI Predictions (~1 min)"),(0,r.kt)("p",null,"When we talk about artificial intelligence, we are generally talking about computer systems that can make predictions. What is being predicted you ask? Predictions usually include at least two parts:"),(0,r.kt)("p",null,"Model output(s)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Some kind if accuracy score (sometimes this part is hidden under the hood)"),(0,r.kt)("li",{parentName:"ul"},'Why is this considered "intelligence"? Your model is offering you ideas, and telling you which ideas it is most confident about.')),(0,r.kt)("p",null,'This turns out to be a very useful way to do computing, and due to the diligent work of our engineers and research scientists, Clarifai models can deliver predictions in the form of many different types of model outputs. Let\'s start with the the most common prediction: "concepts".'),(0,r.kt)("h2",{id:"step-1-set-up-your-account-or-login"},"Step 1: Set up your account or login"),(0,r.kt)("p",null,"Just click here if you need to set up your account for the first time. Or click here to login.\u200c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create account login",src:n(6782).Z})),(0,r.kt)("h2",{id:"step-2-verify-your-email-address"},"Step 2: Verify your email address"),(0,r.kt)("p",null,"Check your email. We will send you a link that enables you to automatically verify your email.\u200c"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"verify email",src:n(7993).Z})),(0,r.kt)("h2",{id:"step-3-click-my-first-application"},'Step 3: Click "my-first-application"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"my first app",src:n(4028).Z})),(0,r.kt)("h2",{id:"step-4-upload-an-image"},"Step 4: Upload an image"),(0,r.kt)("p",null,'In Clarifai Portal, you can upload images, videos and text in "Data Mode". Click "Add Inputs", or visit Data Mode by clicking the icon on the lefthand side of the screen.\u200c'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"data mode",src:n(7367).Z})),(0,r.kt)("p",null,'In this example, we are using the "General" model which comes pre-loaded in "my-first-application". The General model is designed to work with images and videos. Click "Browse Files" and upload one or more of your own images.\u200c'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"my first app",src:n(7367).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"browse files",src:n(7315).Z})),(0,r.kt)("p",null,"You will be prompted to Add or Assign Concepts. Let's skip this step for now."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"skip add labels",src:n(6097).Z})),(0,r.kt)("h2",{id:"step-5-create-custom-concepts"},"Step 5: Create custom concepts"),(0,r.kt)("p",null,'Click the "Create a Concept" button on the lefthand side of the screen.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-a-concept",src:n(4186).Z})),(0,r.kt)("p",null,"Enter the name of a person in your images. You  can repeat this part of the process multiple times to add multiple names."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create-name",src:n(5151).Z})),(0,r.kt)("p",null,"Use visual search to sort your images based on the person that you would like to recognize."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"search-by-face",src:n(9123).Z})),(0,r.kt)("p",null,"Select images of the person that you would like your app to recognize."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bsearch-and-select",src:n(9196).Z})),(0,r.kt)("h2",{id:"step-6-create-and-train-your-custom-model"},"Step 6: Create and train your custom model"),(0,r.kt)("p",null,"Click on the model mode icon in the lefthand sidebar."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"enter-model-mode",src:n(3217).Z})),(0,r.kt)("p",null,'Click the "Create Custom Model" button in the upper righthand part of the screen.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"click-create-custom-model",src:n(4946).Z})),(0,r.kt)("p",null,'Select "Context-Based Classifier"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"select-context-classifier",src:n(802).Z})),(0,r.kt)("p",null,'Give your model a display name, click "Select all concepts", then click "Create Model". You can leave the default settings for this example.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"name-and-concepts",src:n(3673).Z})),(0,r.kt)("p",null,'Click "Train Model" in the upper righthand corner of the screen. A popup will notify your when your model has successfully been trained.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"train-model",src:n(7824).Z})),(0,r.kt)("p",null,'Click "Evaluate" and then "View".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"evaluate-and-view",src:n(8631).Z})),(0,r.kt)("p",null,"Take a look at the evaluation metrics for your new model! You can now use the model to predict all of the concepts in your model (in this case the concepts are people's names."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eval-summary",src:n(2190).Z})))}d.isMDXComponent=!0},7315:function(e,t,n){t.Z=n.p+"assets/images/browse_files-9b46a8eb37fc259e4d2c699d79936c08.png"},4946:function(e,t,n){t.Z=n.p+"assets/images/click-create-custom-model-0b32fc59338212e750fc0a6e1f9a1c45.png"},4028:function(e,t,n){t.Z=n.p+"assets/images/click_my_first_app-56fd07dae2869ef34869a4bf51a8a850.png"},4186:function(e,t,n){t.Z=n.p+"assets/images/create-a-concept-f33c859c41ef2ea93aa9baef1118f889.png"},5151:function(e,t,n){t.Z=n.p+"assets/images/create-name-09df99f209a2c5d0f93ac91fbf21d450.png"},6782:function(e,t,n){t.Z=n.p+"assets/images/create_acct_login-b28acb73cf91fc8bcfcf22c1a212d01d.png"},7367:function(e,t,n){t.Z=n.p+"assets/images/data_mode-d19d025b1675148c0c750a76a9702613.png"},3217:function(e,t,n){t.Z=n.p+"assets/images/enter-model-mode-64e9b81dd0c4b763f3568bedb20d21e0.png"},2190:function(e,t,n){t.Z=n.p+"assets/images/eval-summary-2557814e9c3d78ea396f031ffb0f478b.png"},8631:function(e,t,n){t.Z=n.p+"assets/images/evaluate-and-view-5d489f90116f4986c7e5ab222dbdcdae.png"},3673:function(e,t,n){t.Z=n.p+"assets/images/name-and-concepts-90edb27a7c145c6dc587b07bc28daba1.png"},9196:function(e,t,n){t.Z=n.p+"assets/images/search-and-select-deee9340545b049ff9be023b83d81cde.png"},9123:function(e,t,n){t.Z=n.p+"assets/images/search-by-face-db1dad97391be6ea4ef4aad7373e4074.png"},802:function(e,t,n){t.Z=n.p+"assets/images/select-context-classifier-576789827e95273f4e0779f782dc8a64.png"},6097:function(e,t,n){t.Z=n.p+"assets/images/skip_add_labels-42d6e090ab1a8ec6c2fd37c5900e0d80.png"},7824:function(e,t,n){t.Z=n.p+"assets/images/train-model-55ffcf1a2e3b391f14279b23927cee2c.png"},7993:function(e,t,n){t.Z=n.p+"assets/images/verify_email-639282cf48a2aba20a320858e7f0b074.png"}}]);