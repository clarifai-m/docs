"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9809],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>d});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(o),d=r,y=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return o?n.createElement(y,a(a({ref:t},m),{},{components:o})):n.createElement(y,a({ref:t},m))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},57954:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const i={description:"Iterate upon and improve your models.",sidebar_position:2},a="Improving Your Model",l={unversionedId:"community/evaluate/improving-your-model",id:"community/evaluate/improving-your-model",title:"Improving Your Model",description:"Iterate upon and improve your models.",source:"@site/docs/community/evaluate/improving-your-model.md",sourceDirName:"community/evaluate",slug:"/community/evaluate/improving-your-model",permalink:"/community/evaluate/improving-your-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Iterate upon and improve your models.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Interpreting Evaluations",permalink:"/community/evaluate/interpreting-evaluations"}},p={},s=[{value:"Possible Areas of Improvement",id:"possible-areas-of-improvement",level:2},{value:"Tips",id:"tips",level:2}],m={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"improving-your-model"},"Improving Your Model"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Iterate upon and improve your models")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The evaluation metrics are meant to help you diagnose the quality of your model. Your model may belong to one or more of many categories, including, but not limited to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Good model with all great concepts."),(0,r.kt)("li",{parentName:"ol"},"OK model with a few bad concepts."),(0,r.kt)("li",{parentName:"ol"},"Bad model with all bad concepts."),(0,r.kt)("li",{parentName:"ol"},"Biased model: the model is consistently picking up certain visual cues other than what you\u2019d like to pick up."),(0,r.kt)("li",{parentName:"ol"},"Model with variance: there is no consistency in the way the model is predicting on inputs.")),(0,r.kt)("h2",{id:"possible-areas-of-improvement"},"Possible Areas of Improvement"),(0,r.kt)("p",null,"The performance of your model depends on the performance of each concept, which is trained on a set of inputs. We\u2019d recommend that you look at both inputs and concepts when diagnosing areas of improvement."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Inputs")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Diversity: try to include all perspectives of the concept, e.g. include all angles of a \u201cdog\u201d, if you\u2019re building a \u201cdog\u201d concept."),(0,r.kt)("li",{parentName:"ol"},"Strong positives: Images that are the true representation of your concept."),(0,r.kt)("li",{parentName:"ol"},"Training data should be representative of the real world data -- avoid making models where the data is too \u2018easy\u2019, i.e. unrealistic set of data."),(0,r.kt)("li",{parentName:"ol"},"Number: minimum 50 inputs per concept; more inputs the better."),(0,r.kt)("li",{parentName:"ol"},"File dimensions: minimum 512px x 512px.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Concepts")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Concepts: avoid concepts that do not rely on visual cues within the image. Also, current custom training does not perform well on training to identify faces."),(0,r.kt)("li",{parentName:"ol"},"Labels: check to see if any inputs are labeled with wrong concepts.")),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("p",null,"When improving your model, there is no one-size-fits-all answer. Here are some tips to keep in mind:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Although we use ROC AUC as a general top-level \u2018score\u2019 for both concept and model, we do not recommend that you rely on 1 metric only to draw your final conclusion on your model performance."),(0,r.kt)("li",{parentName:"ol"},"Refer to both Concepts by Concepts Results as well as Selection Details to get a better grasp of your model."),(0,r.kt)("li",{parentName:"ol"},"When interpreting the evaluation results, keep in mind the nature of your model. Specifically, pay attention to whether or not you have labeled the inputs with more than 1 concept ","(","i.e. non-mutually exclusive concepts environment",")",", vs. only 1 concept per image."),(0,r.kt)("li",{parentName:"ol"},"Remember, the rule of diminishing returns may also apply to training models. After a certain point, the changes may not make a big difference in the model quality.")))}u.isMDXComponent=!0}}]);