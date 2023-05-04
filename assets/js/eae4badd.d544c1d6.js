"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6993],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var l=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,a=function(e,t){if(null==e)return{};var o,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return o?l.createElement(h,n(n({ref:t},u),{},{components:o})):l.createElement(h,n({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,n=new Array(r);n[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,n[1]=i;for(var c=2;c<r;c++)n[c]=o[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4176:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=o(87462),a=(o(67294),o(3905));const r={description:"Collectors are an excellent way to capture input data from a collaborator's model, and use it as training data in your own models.",sidebar_position:3},n="Collectors",i={unversionedId:"legacy-portal-guide/data/collectors",id:"legacy-portal-guide/data/collectors",title:"Collectors",description:"Collectors are an excellent way to capture input data from a collaborator's model, and use it as training data in your own models.",source:"@site/docs/legacy-portal-guide/data/collectors.md",sourceDirName:"legacy-portal-guide/data",slug:"/legacy-portal-guide/data/collectors",permalink:"/legacy-portal-guide/data/collectors",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Collectors are an excellent way to capture input data from a collaborator's model, and use it as training data in your own models.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Object Tracking",permalink:"/legacy-portal-guide/data/explorer/object-tracking"},next:{title:"Making Predictions",permalink:"/legacy-portal-guide/ppredict"}},s={},c=[{value:"Collectors",id:"collectors-1",level:2},{value:"Creating a new collector",id:"creating-a-new-collector",level:3},{value:"Collectors",id:"collectors-2",level:2},{value:"Collector Parameters",id:"collector-parameters",level:3},{value:"Collector ID",id:"collector-id",level:4},{value:"Description",id:"description",level:4},{value:"Pre-queue workflow",id:"pre-queue-workflow",level:4},{value:"Post Inputs key",id:"post-inputs-key",level:4},{value:"Source",id:"source",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,l.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collectors"},"Collectors"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Collectors are an excellent way to capture input data from a collaborator's model, and use it as training data in your own models")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"collectors-1"},"Collectors"),(0,a.kt)("p",null,"Collectors capture input data for your app. They enable you to pipe in data from production models automatically, and are the key to unlocking many platform training capabilities like active learning. Collectors are available with Essential and Enterprise plans to help you manage data ingestion at scale."),(0,a.kt)("p",null,"You can create app-level collectors to monitor specific models and specify sampling rules for triggering data ingestion. Collectors can only collect data from apps where you are the app owner."),(0,a.kt)("h3",{id:"creating-a-new-collector"},"Creating a new collector"),(0,a.kt)("p",null,'Collectors help you to feed your models with real-world training data. This data can be taken from models that you have already deployed to production. Just create a collector within your app and set it up to ingest data from another model when new inputs are "posted" to this model.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a new collector",src:o(186).Z,width:"1000",height:"562"})),(0,a.kt)("h2",{id:"collectors-2"},"Collectors"),(0,a.kt)("p",null,"Collectors capture input data for your app. They enable you to pipe in data from production models automatically, and are the key to unlocking many platform training capabilities like active learning. Collectors are available with Essential and Enterprise plans to help you manage data ingestion at scale."),(0,a.kt)("p",null,"You can create app-level collectors to monitor specific models and specify sampling rules for triggering data ingestion."),(0,a.kt)("h3",{id:"collector-parameters"},"Collector Parameters"),(0,a.kt)("h4",{id:"collector-id"},"Collector ID"),(0,a.kt)("p",null,"Give your collector a useful and descriptive name."),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,"Provide additional details about your collector."),(0,a.kt)("h4",{id:"pre-queue-workflow"},"Pre-queue workflow"),(0,a.kt)("p",null,"In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion. Common pre-queue workflows are designed to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Randomly sample inputs"),(0,a.kt)("li",{parentName:"ul"},"Filter inputs by metadata"),(0,a.kt)("li",{parentName:"ul"},"Filter inputs with a maximum probability below a given threshold"),(0,a.kt)("li",{parentName:"ul"},"Filter inputs with a minimum probability above a given threshold"),(0,a.kt)("li",{parentName:"ul"},"Filter specific concept probabilities above a given threshold"),(0,a.kt)("li",{parentName:"ul"},"Knowledge graph mapping from public General model concepts to a custom model")),(0,a.kt)("p",null,"At least one ","(","pre-queue or post-queue",")"," workflow ID is required. The input to this workflow is going to be the OUTPUT of the model. We recommend that you use fast and light-weight models in it as it will effect the speed of the predictions being made."),(0,a.kt)("h4",{id:"post-inputs-key"},"Post Inputs key"),(0,a.kt)("p",null,"Select the API key that you would like to use to allow new inputs to be posted to your app. This is the post-queue workflow ID of the workflow to run to after the collector is processing the queued input. This API key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app."),(0,a.kt)("p",null,"This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. If the workflow output has any field that is non-empty then it will be passed on to POST /inputs to the destination app. At least one ","(","pre-queue or post-queue",")"," workflow ID is required."),(0,a.kt)("h4",{id:"source"},"Source"),(0,a.kt)("p",null,"Select the model that you would like to collect from, and the collector will automatically post the new inputs to your app. Simply enter your model name, or model ID number. You can select the model that you would like to collect from in the drop down menu. When the user predicts an input against this model, the input is going to be collected."),(0,a.kt)("p",null,"The app ID and user ID where the model is located. If using a publicly available model, the model user and app ID should be ",(0,a.kt)("inlineCode",{parentName:"p"},"clarifai")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"main"),", respectively. Otherwise the IDs should belong to the user who created the model. An API key ID using which the inputs are is going to be added."))}d.isMDXComponent=!0},186:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/create_new_collector-243affe180e02464a4579c79c018bafe.jpg"}}]);