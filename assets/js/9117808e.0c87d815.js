"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[480],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),f=r,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},15754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={description:"Manage the datasets for training, testing, and evaluating your models"},i="Datasets",s={unversionedId:"portal-guide/datasets/README",id:"portal-guide/datasets/README",title:"Datasets",description:"Manage the datasets for training, testing, and evaluating your models",source:"@site/docs/portal-guide/datasets/README.mdx",sourceDirName:"portal-guide/datasets",slug:"/portal-guide/datasets/",permalink:"/portal-guide/datasets/",draft:!1,tags:[],version:"current",frontMatter:{description:"Manage the datasets for training, testing, and evaluating your models"},sidebar:"tutorialSidebar",previous:{title:"Positive and Negative Annotations",permalink:"/portal-guide/annotate/positive-and-negative-annotations"},next:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/datasets/create-get-update-delete"}},l={},u=[],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasets"},"Datasets"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manage the datasets for training, testing, and evaluating your models")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A dataset is a collection of data examples you can use to train, test, and evaluate your machine learning model. With Clarifai datasets, you can manage the datasets you want to use for visual search, training, and evaluation. "),(0,r.kt)("p",null,"Datasets are stored as convenient snapshots in datasets tables, and they play a critical role in determining the performance of your models."),(0,r.kt)("p",null,"The quality and quantity of the data in the dataset can significantly impact the accuracy and robustness of the resulting machine learning model. Therefore, it is essential to select a relevant and sufficient dataset for the task you have at hand."),(0,r.kt)("p",null,"You can add different types of datasets on the Clarifai portal, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Training dataset"),"\u2014This is the data you can use to initially train a model. It comprises a set of annotated examples, where the annotations are the output values the model is expected to predict."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Validation dataset"),"\u2014This is the data you can use to fine-tune your model's hyperparameters and assess its performance during training. It comprises a set of annotated examples that are not used for training, but are used to gauge the model's performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Testing dataset"),"\u2014This is the data you can use to assess the final performance of your trained model. It comprises a set of annotated examples that are not used for training or validation.")))}p.isMDXComponent=!0}}]);