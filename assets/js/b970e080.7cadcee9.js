"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5953],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39574:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={description:"Iterate upon and improve your models.",sidebar_position:2},p="Improving Your Model",u={unversionedId:"api-guide/evaluate/improving-your-model",id:"api-guide/evaluate/improving-your-model",title:"Improving Your Model",description:"Iterate upon and improve your models.",source:"@site/docs/api-guide/evaluate/improving-your-model.md",sourceDirName:"api-guide/evaluate",slug:"/api-guide/evaluate/improving-your-model",permalink:"/api-guide/evaluate/improving-your-model",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/evaluate/improving-your-model.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Iterate upon and improve your models.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interpreting Evaluations",permalink:"/api-guide/evaluate/interpreting-evaluations"},next:{title:"Creating Workflows",permalink:"/api-guide/workflows/"}},s=[{value:"Possible Areas of Improvement",id:"possible-areas-of-improvement",children:[],level:2},{value:"Tips",id:"tips",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"improving-your-model"},"Improving Your Model"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Iterate upon and improve your models")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The evaluation metrics are meant to help you diagnose the quality of your model. Your model may belong to one or more of many categories, including, but not limited to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Good model with all great concepts."),(0,i.kt)("li",{parentName:"ol"},"OK model with a few bad concepts."),(0,i.kt)("li",{parentName:"ol"},"Bad model with all bad concepts."),(0,i.kt)("li",{parentName:"ol"},"Biased model: the model is consistently picking up certain visual cues other than what you\u2019d like to pick up."),(0,i.kt)("li",{parentName:"ol"},"Model with variance: there is no consistency in the way the model is predicting on inputs.")),(0,i.kt)("h2",{id:"possible-areas-of-improvement"},"Possible Areas of Improvement"),(0,i.kt)("p",null,"The performance of your model depends on the performance of each concept, which is trained on a set of inputs. We\u2019d recommend that you look at both inputs and concepts when diagnosing areas of improvement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inputs")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Diversity: try to include all perspectives of the concept, e.g. include all angles of a \u201cdog\u201d, if you\u2019re building a \u201cdog\u201d concept."),(0,i.kt)("li",{parentName:"ol"},"Strong positives: Images that are the true representation of your concept."),(0,i.kt)("li",{parentName:"ol"},"Training data should be representative of the real world data -- avoid making models where the data is too \u2018easy\u2019, i.e. unrealistic set of data."),(0,i.kt)("li",{parentName:"ol"},"Number: minimum 50 inputs per concept; more inputs the better."),(0,i.kt)("li",{parentName:"ol"},"File dimensions: minimum 512px x 512px.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Concepts")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Concepts: avoid concepts that do not rely on visual cues within the image. Also, current custom training does not perform well on training to identify faces."),(0,i.kt)("li",{parentName:"ol"},"Labels: check to see if any inputs are labeled with wrong concepts.")),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("p",null,"When improving your model, there is no one-size-fits-all answer. Here are some tips to keep in mind:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Although we use ROC AUC as a general top-level \u2018score\u2019 for both concept and model, we do not recommend that you rely on 1 metric only to draw your final conclusion on your model performance."),(0,i.kt)("li",{parentName:"ol"},"Refer to both Concepts by Concepts Results as well as Selection Details to get a better grasp of your model."),(0,i.kt)("li",{parentName:"ol"},"When interpreting the evaluation results, keep in mind the nature of your model. Specifically, pay attention to whether or not you have labeled the inputs with more than 1 concept ","(","i.e. non-mutually exclusive concepts environment",")",", vs. only 1 concept per image."),(0,i.kt)("li",{parentName:"ol"},"Remember, the rule of diminishing returns may also apply to training models. After a certain point, the changes may not make a big difference in the model quality.")))}m.isMDXComponent=!0}}]);