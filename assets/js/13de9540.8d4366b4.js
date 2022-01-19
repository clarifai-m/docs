"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[155],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},499:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={description:"Use Clarifai Models or your own custom models to provide assistance in your labeling tasks.",sidebar_position:4},l="AI Assist",c={unversionedId:"portal-guide/annotate/ai-assist",id:"portal-guide/annotate/ai-assist",title:"AI Assist",description:"Use Clarifai Models or your own custom models to provide assistance in your labeling tasks.",source:"@site/docs/portal-guide/annotate/ai-assist.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/ai-assist",permalink:"/portal-guide/annotate/ai-assist",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/annotate/ai-assist.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Use Clarifai Models or your own custom models to provide assistance in your labeling tasks.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Labeling Tools",permalink:"/portal-guide/annotate/labeling-tools"},next:{title:"Workforce Management",permalink:"/portal-guide/annotate/workforce-management"}},u=[{value:"Custom Workflow",id:"custom-workflow",children:[],level:2},{value:"Clarifai Workflow",id:"clarifai-workflow",children:[{value:"Hypernym",id:"hypernym",children:[],level:3},{value:"Synonym",id:"synonym",children:[],level:3}],level:2},{value:"Review",id:"review",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ai-assist"},"AI Assist"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AI Assist for efficient data labeling",src:o(4110).Z})),(0,r.kt)("p",null,"Speed up your labeling workflows with AI Assist. AI assist assigns concepts automatically for faster dataset annotation."),(0,r.kt)("p",null,'To activate AI Assist, just create a new labeling task and toggle the "Enable AI Assist" switch at the bottom of the task creation screen. Now you will need to choose a workflow to power your AI predictions. AI Assist supports custom models as well as Clarifai models.'),(0,r.kt)("h2",{id:"custom-workflow"},"Custom Workflow"),(0,r.kt)("p",null,"By selecting a custom workflow AI Assist will offer predictions made by your custom model. In order to take advantage of a custom workflow you will already need to have labeled some data and trained a custom model. If you are starting a labeling project from scratch you will need to start with a Clarifai Workflow. "),(0,r.kt)("h2",{id:"clarifai-workflow"},"Clarifai Workflow"),(0,r.kt)("p",null,'By choosing a Clarifai workflow, AI Assist will make predictions based on one of Clarifai\'s Public Models. AI Assist will automatically recognize concepts in your application that map to existing Clarifai concepts. You will see these concepts outlined in green in the "Mapped concepts" section.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"label text",src:o(3825).Z})),(0,r.kt)("p",null,'Custom concepts that are not recognized by Clarifai models will be outlined in red under the "Unmapped concepts" section.'),(0,r.kt)("p",null,'You can map one of your custom concepts to a concept recognized by a Clarifai model in the "Set knowledge graph concept relations" section.'),(0,r.kt)("h3",{id:"hypernym"},"Hypernym"),(0,r.kt)("p",null,'If you want to map a "general" concept recognized by a Clarifai model to a more specific concept in your application, choose the hypernym option.'),(0,r.kt)("h3",{id:"synonym"},"Synonym"),(0,r.kt)("p",null,"If you want to map a custom concept to a similar Clarifai concept, choose the synonym tab."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"label text",src:o(7340).Z})),(0,r.kt)("p",null,"Scribe will automatically recommend possible matching Clarifai concepts."),(0,r.kt)("h2",{id:"review"},"Review"),(0,r.kt)("p",null,'Once a task is created your labelers can review and label your inputs. Labels will automatically be added to your inputs based on the "AI Assist Prediction Threshold". If the probability score is highlighted in green the label will be added to the input when you click "Submit input for review".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"label text",src:o(1349).Z})),(0,r.kt)("p",null,"Labelers can also add, remove, or change their own labels."))}d.isMDXComponent=!0},4110:function(e,t,o){t.Z=o.p+"assets/images/ai-assist-ded17da7362eb10f79565de710b9022c.jpg"},3825:function(e,t,o){t.Z=o.p+"assets/images/aiAssistClarifai-163d16db7e824da88d2efd7c2e7d95a9.jpg"},1349:function(e,t,o){t.Z=o.p+"assets/images/aiAssistConceptThreshold-85f6393561c9938458a8547cc6eda1d8.jpg"},7340:function(e,t,o){t.Z=o.p+"assets/images/aiAssistHyper-5b69ea3035afea77a0308ad8678c4ff5.jpg"}}]);