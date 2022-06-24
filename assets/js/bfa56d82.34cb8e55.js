"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[410],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(a),d=i,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||n;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},29715:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),s=["components"],o={description:"Get up-and-running in less than 1 minute with the world's most powerful AI platform",sidebar_position:2},l="Your First Visual Search App (~1 min)",c={unversionedId:"clarifai-basics/quick-start/your-first-visual-search-app",id:"clarifai-basics/quick-start/your-first-visual-search-app",title:"Your First Visual Search App (~1 min)",description:"Get up-and-running in less than 1 minute with the world's most powerful AI platform",source:"@site/docs/clarifai-basics/quick-start/your-first-visual-search-app.md",sourceDirName:"clarifai-basics/quick-start",slug:"/clarifai-basics/quick-start/your-first-visual-search-app",permalink:"/clarifai-basics/quick-start/your-first-visual-search-app",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get up-and-running in less than 1 minute with the world's most powerful AI platform",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Your First AI Predictions (~1 min)",permalink:"/clarifai-basics/quick-start/your-first-predictions"},next:{title:"Your First Custom Model (~5 min)",permalink:"/clarifai-basics/quick-start/your-first-custom-model"}},p=[{value:"Step 1: Set up your account or login",id:"step-1-set-up-your-account-or-login",children:[],level:2},{value:"Step 2: Verify your email address",id:"step-2-verify-your-email-address",children:[],level:2},{value:"Step 3: Create an application",id:"step-3-create-an-application",children:[],level:2},{value:"Step 4: Upload sample images image",id:"step-4-upload-sample-images-image",children:[],level:2},{value:"Step 5: Search for similar faces",id:"step-5-search-for-similar-faces",children:[],level:2}],u={toc:p};function f(e){var t=e.components,o=(0,i.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"your-first-visual-search-app-1-min"},"Your First Visual Search App (~1 min)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Get up and running in less than 1 minute with the world's most powerful AI\nplatform")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Visual search is a versatile and useful tool when you are working with visual data. Visual search helps you compare images based on their visual similarity."),(0,n.kt)("h2",{id:"step-1-set-up-your-account-or-login"},"Step 1: Set up your account or login"),(0,n.kt)("p",null,"Just ",(0,n.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/signup"},"click here")," if you need to set up your account for the first time. Or ",(0,n.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/login"},"click here")," to login.\u200c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create account login",src:a(15106).Z})),(0,n.kt)("h2",{id:"step-2-verify-your-email-address"},"Step 2: Verify your email address"),(0,n.kt)("p",null,"Check your email. We will send you a link that enables you to automatically verify your email.\u200c"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"verify email",src:a(79753).Z})),(0,n.kt)("h2",{id:"step-3-create-an-application"},"Step 3: Create an application"),(0,n.kt)("p",null,'Click "Create Application" in the upper righthand corner of the screen.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create application",src:a(34345).Z})),(0,n.kt)("p",null,'Name your application, and select "Face" as the base model.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"face base model",src:a(58365).Z})),(0,n.kt)("h2",{id:"step-4-upload-sample-images-image"},"Step 4: Upload sample images image"),(0,n.kt)("p",null,'In Clarifai Portal, you can upload images, videos and text in "Data Mode". Click "Add Inputs", or visit Data Mode by clicking the icon on the lefthand side of the screen.\u200c'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"data mode",src:a(7733).Z})),(0,n.kt)("p",null,"Browse your files and select several images of people's faces."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"browse files",src:a(87625).Z})),(0,n.kt)("p",null,"You will be prompted to Add or Assign Concepts. Let's skip this step for now."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"skip add labels",src:a(97932).Z})),(0,n.kt)("h2",{id:"step-5-search-for-similar-faces"},"Step 5: Search for similar faces"),(0,n.kt)("p",null,'Once images are uploaded, click the "Eye" icon on the lefthand side of the screen to return to Explorer. Now just click on the spyglass icon next to any image.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"search by face",src:a(63113).Z})),(0,n.kt)("p",null,"Clarifai will sort your images by visual similarity. In this example, we can see that the top ranking results are images of the same person."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"view search results",src:a(53639).Z})),(0,n.kt)("p",null,"That's it!\n\u200b"))}f.isMDXComponent=!0},87625:function(e,t,a){t.Z=a.p+"assets/images/browse_files-9b46a8eb37fc259e4d2c699d79936c08.png"},34345:function(e,t,a){t.Z=a.p+"assets/images/create-application-647415ec801a7db3c59abdc52bb01ffa.png"},15106:function(e,t,a){t.Z=a.p+"assets/images/create_acct_login-b28acb73cf91fc8bcfcf22c1a212d01d.png"},7733:function(e,t,a){t.Z=a.p+"assets/images/data_mode-d19d025b1675148c0c750a76a9702613.png"},58365:function(e,t,a){t.Z=a.p+"assets/images/face-base_model-b9753a48aac40035a81494f6865d44aa.png"},63113:function(e,t,a){t.Z=a.p+"assets/images/search-by-face-db1dad97391be6ea4ef4aad7373e4074.png"},97932:function(e,t,a){t.Z=a.p+"assets/images/skip_add_labels-42d6e090ab1a8ec6c2fd37c5900e0d80.png"},79753:function(e,t,a){t.Z=a.p+"assets/images/verify_email-639282cf48a2aba20a320858e7f0b074.png"},53639:function(e,t,a){t.Z=a.p+"assets/images/view-search-results-89f932c55e75962bee470cd9716311db.png"}}]);