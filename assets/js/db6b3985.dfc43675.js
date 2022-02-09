"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9573],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return m}});var r=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,l=function(e,t){if(null==e)return{};var o,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(o),m=l,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return o?r.createElement(h,n(n({ref:t},s),{},{components:o})):r.createElement(h,n({ref:t},s))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,n=new Array(a);n[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,n[1]=i;for(var u=2;u<a;u++)n[u]=o[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4862:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=o(87462),l=o(63366),a=(o(67294),o(3905)),n=["components"],i={description:"Collectors are an excellent way to capture input data from a collaborator's model, and use it as training data in your own models.",sidebar_position:3},c="Collectors",u={unversionedId:"portal-guide/data/collectors",id:"portal-guide/data/collectors",title:"Collectors",description:"Collectors are an excellent way to capture input data from a collaborator's model, and use it as training data in your own models.",source:"@site/docs/portal-guide/data/collectors.md",sourceDirName:"portal-guide/data",slug:"/portal-guide/data/collectors",permalink:"/docs-new/portal-guide/data/collectors",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/data/collectors.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Collectors are an excellent way to capture input data from a collaborator's model, and use it as training data in your own models.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Object Tracking",permalink:"/docs-new/portal-guide/data/explorer/object-tracking"},next:{title:"Making Predictions",permalink:"/docs-new/portal-guide/ppredict"}},s=[{value:"Collectors",id:"collectors-1",children:[{value:"Creating a new collector",id:"creating-a-new-collector",children:[],level:3}],level:2},{value:"Collectors",id:"collectors-2",children:[{value:"Collector Parameters",id:"collector-parameters",children:[{value:"Collector ID",id:"collector-id",children:[],level:4},{value:"Description",id:"description",children:[],level:4},{value:"Pre-queue workflow",id:"pre-queue-workflow",children:[],level:4},{value:"Post Inputs key",id:"post-inputs-key",children:[],level:4},{value:"Source",id:"source",children:[],level:4}],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,i=(0,l.Z)(e,n);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collectors"},"Collectors"),(0,a.kt)("h2",{id:"collectors-1"},"Collectors"),(0,a.kt)("p",null,"Collectors capture input data for your app. They enable you to pipe in data from production models automatically, and are the key to unlocking many platform training capabilities like active learning. Collectors are available with Essential and Enterprise plans to help you manage data ingestion at scale."),(0,a.kt)("p",null,"You can create app-level collectors to monitor specific models and specify sampling rules for triggering data ingestion. Collectors can only collect data from apps where you are the app owner."),(0,a.kt)("h3",{id:"creating-a-new-collector"},"Creating a new collector"),(0,a.kt)("p",null,'Collectors help you to feed your models with real-world training data. This data can be taken from models that you have already deployed to production. Just create a collector within your app and set it up to ingest data from another model when new inputs are "posted" to this model.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a new collector",src:o(98289).Z})),(0,a.kt)("h2",{id:"collectors-2"},"Collectors"),(0,a.kt)("p",null,"Collectors capture input data for your app. They enable you to pipe in data from production models automatically, and are the key to unlocking many platform training capabilities like active learning. Collectors are available with Essential and Enterprise plans to help you manage data ingestion at scale."),(0,a.kt)("p",null,"You can create app-level collectors to monitor specific models and specify sampling rules for triggering data ingestion."),(0,a.kt)("h3",{id:"collector-parameters"},"Collector Parameters"),(0,a.kt)("h4",{id:"collector-id"},"Collector ID"),(0,a.kt)("p",null,"Give your collector a useful and descriptive name."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Provide additional details about your collector."),(0,a.kt)("h4",{id:"pre-queue-workflow"},"Pre-queue workflow"),(0,a.kt)("p",null,"In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion. Common pre-queue workflows are designed to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Randomly sample inputs"),(0,a.kt)("li",{parentName:"ul"},"Filter inputs by metadata"),(0,a.kt)("li",{parentName:"ul"},"Filter inputs with a maximum probability below a given threshold"),(0,a.kt)("li",{parentName:"ul"},"Filter inputs with a minimum probability above a given threshold"),(0,a.kt)("li",{parentName:"ul"},"Filter specific concept probabilities above a given threshold"),(0,a.kt)("li",{parentName:"ul"},"Knowledge graph mapping from public General model concepts to a custom model")),(0,a.kt)("p",null,"At least one ","(","pre-queue or post-queue",")"," workflow ID is required. The input to this workflow is going to be the OUTPUT of the model. We recommend that you use fast and light-weight models in it as it will effect the speed of the predictions being made."),(0,a.kt)("h4",{id:"post-inputs-key"},"Post Inputs key"),(0,a.kt)("p",null,"Select the API key that you would like to use to allow new inputs to be posted to your app. This is the post-queue workflow ID of the workflow to run to after the collector is processing the queued input. This API key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app."),(0,a.kt)("p",null,"This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. If the workflow output has any field that is non-empty then it will be passed on to POST /inputs to the destination app. At least one ","(","pre-queue or post-queue",")"," workflow ID is required."),(0,a.kt)("h4",{id:"source"},"Source"),(0,a.kt)("p",null,"Select the model that you would like to collect from, and the collector will automatically post the new inputs to your app. Simply enter your model name, or model ID number. You can select the model that you would like to collect from in the drop down menu. When the user predicts an input against this model, the input is going to be collected."),(0,a.kt)("p",null,"The app ID and user ID where the model is located. If using a publicly available model, the model user and app ID should be ",(0,a.kt)("inlineCode",{parentName:"p"},"clarifai")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),", respectively. Otherwise the IDs should belong to the user who created the model. An API key ID using which the inputs are is going to be added."))}d.isMDXComponent=!0},98289:function(e,t,o){t.Z=o.p+"assets/images/create_new_collector-243affe180e02464a4579c79c018bafe.jpg"}}]);