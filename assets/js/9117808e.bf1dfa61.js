"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),f=r,m=p["".concat(l,".").concat(f)]||p[f]||c[f]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},15754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={description:"Manage the datasets for training, testing, and evaluating your models"},s="Datasets",i={unversionedId:"portal-guide/datasets/README",id:"portal-guide/datasets/README",title:"Datasets",description:"Manage the datasets for training, testing, and evaluating your models",source:"@site/docs/portal-guide/datasets/README.mdx",sourceDirName:"portal-guide/datasets",slug:"/portal-guide/datasets/",permalink:"/portal-guide/datasets/",draft:!1,tags:[],version:"current",frontMatter:{description:"Manage the datasets for training, testing, and evaluating your models"},sidebar:"tutorialSidebar",previous:{title:"Create a Task",permalink:"/portal-guide/annotate/tasks/create-a-task"},next:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/datasets/create-get-update-delete"}},l={},u=[],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasets"},"Datasets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manage the datasets for training, testing, and evaluating your models")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A dataset is a collection of data examples you can use to train, test, and evaluate your machine learning model. With Clarifai datasets, you can manage the datasets you want to use for visual search, training, and evaluation. "),(0,r.kt)("p",null,"Datasets are stored as convenient snapshots in datasets tables, and they play a critical role in determining the performance of your models."),(0,r.kt)("p",null,"The quality and quantity of the data in the dataset can significantly impact the accuracy and robustness of the resulting machine learning model. Therefore, it is essential to select a relevant and sufficient dataset for the task you have at hand."),(0,r.kt)("p",null,"You can add different types of datasets on the Clarifai portal, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Training dataset"),"\u2014This is the data you can use to initially train a model. It comprises a set of annotated examples, where the annotations are the output values the model is expected to predict."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Validation dataset"),"\u2014This is the data you can use to fine-tune your model's hyperparameters and assess its performance during training. It comprises a set of annotated examples that are not used for training, but are used to gauge the model's performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testing dataset"),"\u2014This is the data you can use to assess the final performance of your trained model. It comprises a set of annotated examples that are not used for training or validation.")))}c.isMDXComponent=!0}}]);