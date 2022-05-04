"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5412],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54700:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={description:"Learn about model evaluation tools."},u="Evaluating Models",s={unversionedId:"api-guide/evaluate/README",id:"api-guide/evaluate/README",title:"Evaluating Models",description:"Learn about model evaluation tools.",source:"@site/docs/api-guide/evaluate/README.mdx",sourceDirName:"api-guide/evaluate",slug:"/api-guide/evaluate/",permalink:"/api-guide/evaluate/",tags:[],version:"current",frontMatter:{description:"Learn about model evaluation tools."},sidebar:"tutorialSidebar",previous:{title:"Deep Training",permalink:"/api-guide/model/deep-training"},next:{title:"Interpreting Evaluations",permalink:"/api-guide/evaluate/interpreting-evaluations"}},c=[{value:"How It Works",id:"how-it-works",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Running Evaluation",id:"running-evaluation",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"evaluating-models"},"Evaluating Models"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn about model evaluation tools")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now that you've successfully trained the model, you may want to test its performance before using it in the production environment. The Model Evaluation tool allows you to perform a cross validation on a specified model version. Once the evaluation is complete, you\u2019ll be able to view various metrics that will inform the model\u2019s performance."),(0,a.kt)("h2",{id:"how-it-works"},"How It Works"),(0,a.kt)("p",null,"Model Evaluation performs a K-split cross validation on data you used to train your custom model."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"cross validation",src:n(21191).Z})),(0,a.kt)("p",null,"In the cross validation process, it will: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set aside a random 1/K subset of the training data and designate as a test set, "),(0,a.kt)("li",{parentName:"ol"},"Train a new model with the remaining training data, "),(0,a.kt)("li",{parentName:"ol"},"Pass the test set data through this new model to make predictions, "),(0,a.kt)("li",{parentName:"ol"},"Compare the predictions against the test set\u2019s actual labels, and "),(0,a.kt)("li",{parentName:"ol"},"Repeat steps 1",")"," through 4",")"," across K splits to average out the evaluation results.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"To run the evaluation on your custom model, it will need the meet the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A custom trained model model version with:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"At least 2 concepts"),(0,a.kt)("li",{parentName:"ol"},"At least 10 training inputs per concept ","(","At least 50 inputs per concept is recommended",")")))),(0,a.kt)("h2",{id:"running-evaluation"},"Running Evaluation"),(0,a.kt)("p",null,"You can run the evaluation on a specific model version of your custom model in the Portal. Go to your Application, click on your model of interest, and select the Versions tab. Simply click on the Evaluate button for the specific model version."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76508).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29925).Z})),(0,a.kt)("p",null,"The evaluation may take up to 30 minutes. Once it is complete, the Evaluate button will become View button. Click on the View button to see the evaluation results."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(14435).Z})),(0,a.kt)("p",null,"Note that the evaluation may result in an error if the model version doesn\u2019t satisfy the requirements above."))}d.isMDXComponent=!0},21191:function(e,t,n){t.Z=n.p+"assets/images/cross_validation-cfadf56b2e40cbff4a4709169d1b5640.jpg"},29925:function(e,t,n){t.Z=n.p+"assets/images/preview-evaluate-new-5c50bbc4f2556812efffc9b5f1ec8220.png"},14435:function(e,t,n){t.Z=n.p+"assets/images/preview-view-new-6cb4d10fecd31abfd0c84526b646655b.png"},76508:function(e,t,n){t.Z=n.p+"assets/images/previewui-versions-new-797840a23ba1fed6a263e9065171c730.png"}}]);