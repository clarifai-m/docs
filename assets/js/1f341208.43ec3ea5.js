"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={description:"Evaluate model performance"},l="Evaluating Models",i={unversionedId:"portal-guide/evaluate/README",id:"portal-guide/evaluate/README",title:"Evaluating Models",description:"Evaluate model performance",source:"@site/docs/portal-guide/evaluate/README.mdx",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/",permalink:"/portal-guide/evaluate/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/README.mdx",tags:[],version:"current",lastUpdatedAt:1698924850,formattedLastUpdatedAt:"Nov 2, 2023",frontMatter:{description:"Evaluate model performance"},sidebar:"tutorialSidebar",previous:{title:"Creating and Managing Model Versions",permalink:"/portal-guide/model-versions/"},next:{title:"Interpreting Evaluations",permalink:"/portal-guide/evaluate/interpreting-evaluations"}},s={},u=[{value:"How It Works",id:"how-it-works",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Running Evaluation",id:"running-evaluation",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evaluating-models"},"Evaluating Models"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about model evaluation tools")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Now that you've successfully trained the model, you may want to test its performance before using it in a production environment.\nThe model evaluation tool allows you to perform cross-validation on a specified model version. "),(0,o.kt)("p",null,"Once the evaluation is complete, you can view the various metrics that inform the model\u2019s performance."),(0,o.kt)("h2",{id:"how-it-works"},"How It Works"),(0,o.kt)("p",null,"Model evaluation performs a K-split cross-validation on data you used to train your custom model."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"cross validation",src:n(57058).Z,width:"962",height:"946"})),(0,o.kt)("p",null,"In the cross-validation process, it will: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set aside a random 1/K subset of the training data and designate it as a test set;"),(0,o.kt)("li",{parentName:"ol"},"Train a new model with the remaining training data;"),(0,o.kt)("li",{parentName:"ol"},"Pass the test set data through this new model to make predictions;"),(0,o.kt)("li",{parentName:"ol"},"Compare the predictions against the test set\u2019s actual labels;"),(0,o.kt)("li",{parentName:"ol"},"Repeat steps 1",")"," through 4",")"," across K splits to average out the evaluation results.")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To run the evaluation on your custom model, it should meet the following criteria:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It should be a custom-trained model version with the following:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"At least two concepts;"),(0,o.kt)("li",{parentName:"ol"},"At least ten training inputs per concept ","(","at least 50 inputs per concept is recommended",")",".")))),(0,o.kt)("admonition",{title:"Note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The evaluation may result in an error if the model version doesn\u2019t satisfy the requirements above.")),(0,o.kt)("h2",{id:"running-evaluation"},"Running Evaluation"),(0,o.kt)("p",null,"You can run the evaluation on a specific version of your custom model on the Community platform. "),(0,o.kt)("p",null,"To do so, on your application's page, select the ",(0,o.kt)("strong",{parentName:"p"},"App Models")," option on the collapsible left sidebar. On your ",(0,o.kt)("strong",{parentName:"p"},"Models")," listing page, select the model you'd like to evaluate its performance. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22699).Z,width:"1902",height:"541"})),(0,o.kt)("p",null,"You'll be redirected to the individual model's page. Under the ",(0,o.kt)("strong",{parentName:"p"},"Versions")," tab, go to the version of the model you want to evaluate its performance. And under the ",(0,o.kt)("strong",{parentName:"p"},"ROC")," column, click the ",(0,o.kt)("strong",{parentName:"p"},"Calculate")," button, which will start the evaluation process. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62400).Z,width:"1885",height:"831"})),(0,o.kt)("p",null,"The evaluation may take up to 30 minutes. Once it is complete, the ",(0,o.kt)("strong",{parentName:"p"},"Calculate")," button will become a ",(0,o.kt)("strong",{parentName:"p"},"View Results")," button. "),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"View Results")," button to see the evaluation results."),(0,o.kt)("p",null,"For more information on how to interpret the evaluation results, check the next ",(0,o.kt)("a",{parentName:"p",href:"../evaluate/interpreting-evaluations/"},"Interpreting Evaluations")," section."))}d.isMDXComponent=!0},22699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/evaluate_1-3738064a939a5b82ee5576267daa9c0a.png"},62400:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/evaluate_2-fe41c5541d6f81dd6859fd708504cf7a.png"},57058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cross_validation-cfadf56b2e40cbff4a4709169d1b5640.jpg"}}]);