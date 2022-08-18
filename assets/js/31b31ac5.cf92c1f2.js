"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1047],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return f}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return i?r.createElement(m,o(o({ref:t},u),{},{components:i})):r.createElement(m,o({ref:t},u))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=i[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},46003:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c}});var r=i(83117),n=(i(67294),i(3905));const a={description:"Get up-and-running in less than 1 minute with the world's most powerful AI platform",sidebar_position:1},o="Your First AI Predictions (~1 min)",s={unversionedId:"clarifai-basics/quick-start/your-first-predictions",id:"clarifai-basics/quick-start/your-first-predictions",title:"Your First AI Predictions (~1 min)",description:"Get up-and-running in less than 1 minute with the world's most powerful AI platform",source:"@site/docs/clarifai-basics/quick-start/your-first-predictions.md",sourceDirName:"clarifai-basics/quick-start",slug:"/clarifai-basics/quick-start/your-first-predictions",permalink:"/clarifai-basics/quick-start/your-first-predictions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get up-and-running in less than 1 minute with the world's most powerful AI platform",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Start Here (5 mins or less!)",permalink:"/clarifai-basics/start-here-5-mins-or-less"},next:{title:"Your First Visual Search App (~1 min)",permalink:"/clarifai-basics/quick-start/your-first-visual-search-app"}},l={},c=[{value:"Step 1: Set up your account or login",id:"step-1-set-up-your-account-or-login",level:2},{value:"Step 2: Verify your email address",id:"step-2-verify-your-email-address",level:2},{value:"Step 3: Click &quot;my-first-application&quot;",id:"step-3-click-my-first-application",level:2},{value:"Step 4: Upload an image",id:"step-4-upload-an-image",level:2},{value:"Step 5: Take a look at your first predictions",id:"step-5-take-a-look-at-your-first-predictions",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"your-first-ai-predictions-1-min"},"Your First AI Predictions (~1 min)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Get up and running in less than 1 minute with the world's most powerful AI\nplatform")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"When we talk about artificial intelligence, we are generally talking about computer systems that can make predictions. What is being predicted, you ask? Predictions usually include at least two parts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Model output(s)"),(0,n.kt)("li",{parentName:"ul"},"Some kind of accuracy score (sometimes this part is hidden under the hood)")),(0,n.kt)("p",null,'Why is this considered "intelligence"? Your model is offering you ideas, and telling you which ideas it is most confident about.'),(0,n.kt)("p",null,"This turns out to be a very useful way to do computing. And due to the diligent work of our engineers and research scientists, Clarifai models can deliver predictions in the form of many different types of model outputs."),(0,n.kt)("p",null,'Let\'s start with the the most common type of prediction: "concepts".'),(0,n.kt)("h2",{id:"step-1-set-up-your-account-or-login"},"Step 1: Set up your account or login"),(0,n.kt)("p",null,"Just ",(0,n.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/signup"},"click here")," if you need to set up your account for the first time. Or ",(0,n.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/login"},"click here")," to login.\u200c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create account login",src:i(13904).Z,width:"3840",height:"2160"})),(0,n.kt)("h2",{id:"step-2-verify-your-email-address"},"Step 2: Verify your email address"),(0,n.kt)("p",null,"Check your email. We will send you a link that enables you to automatically verify your email.\u200c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"verify email",src:i(9673).Z,width:"3840",height:"2160"})),(0,n.kt)("h2",{id:"step-3-click-my-first-application"},'Step 3: Click "my-first-application"'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"my first app",src:i(48994).Z,width:"3840",height:"2160"})),(0,n.kt)("h2",{id:"step-4-upload-an-image"},"Step 4: Upload an image"),(0,n.kt)("p",null,'In the Clarifai Portal, you can upload images, videos, and text in "Data Mode". Click "Add Inputs", or visit Data Mode by clicking the icon on the lefthand side of the screen.\u200c'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"data mode",src:i(11228).Z,width:"3840",height:"2160"})),(0,n.kt)("p",null,'In this example, we are using the "General" model, which comes pre-loaded in "my-first-application". The General model is designed to work with images and videos. '),(0,n.kt)("p",null,'Click "Browse Files" and upload one or more of your own images.\u200c'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"browse files",src:i(9085).Z,width:"3840",height:"2160"})),(0,n.kt)("p",null,"You will be prompted to Add or Assign Concepts. Let's skip this step for now."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"skip add labels",src:i(19530).Z,width:"3840",height:"2160"})),(0,n.kt)("h2",{id:"step-5-take-a-look-at-your-first-predictions"},"Step 5: Take a look at your first predictions"),(0,n.kt)("p",null,'Click the "eye" icon on the lefthand sidebar to explore your data.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"view explorer",src:i(706).Z,width:"3840",height:"2160"})),(0,n.kt)("p",null,"Click on your image and take a look at your first predictions! The General model you selected can recognize over 11,000 concepts right out of the box."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"view predictions",src:i(23884).Z,width:"3840",height:"2160"})),(0,n.kt)("p",null,"That's it!"))}p.isMDXComponent=!0},9085:function(e,t,i){t.Z=i.p+"assets/images/browse_files-9b46a8eb37fc259e4d2c699d79936c08.png"},48994:function(e,t,i){t.Z=i.p+"assets/images/click_my_first_app-56fd07dae2869ef34869a4bf51a8a850.png"},13904:function(e,t,i){t.Z=i.p+"assets/images/create_acct_login-b28acb73cf91fc8bcfcf22c1a212d01d.png"},11228:function(e,t,i){t.Z=i.p+"assets/images/data_mode-d19d025b1675148c0c750a76a9702613.png"},19530:function(e,t,i){t.Z=i.p+"assets/images/skip_add_labels-42d6e090ab1a8ec6c2fd37c5900e0d80.png"},9673:function(e,t,i){t.Z=i.p+"assets/images/verify_email-639282cf48a2aba20a320858e7f0b074.png"},706:function(e,t,i){t.Z=i.p+"assets/images/view-explorer-d3af5c02fc7555a13a60ffcde50612f9.png"},23884:function(e,t,i){t.Z=i.p+"assets/images/view-predictions-39cb2e77a4115b029b2f8714d80e97ed.png"}}]);