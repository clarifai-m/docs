"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5230],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),k=n,y=p["".concat(s,".").concat(k)]||p[k]||d[k]||o;return a?r.createElement(y,i(i({ref:t},u),{},{components:a})):r.createElement(y,i({ref:t},u))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9177:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={description:"Manage and delegate your labeling work with tasks.",sidebar_position:1},s="Create a Task",c={unversionedId:"portal-guide/annotate/create-a-task",id:"portal-guide/annotate/create-a-task",title:"Create a Task",description:"Manage and delegate your labeling work with tasks.",source:"@site/docs/portal-guide/annotate/create-a-task.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/create-a-task",permalink:"/docs/portal-guide/annotate/create-a-task",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/annotate/create-a-task.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Manage and delegate your labeling work with tasks.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Labeling Your Data",permalink:"/docs/portal-guide/annotate/"},next:{title:"Label Types",permalink:"/docs/portal-guide/annotate/label-types"}},u=[{value:"Task Name and Instructions",id:"task-name-and-instructions",children:[],level:2},{value:"Task Types",id:"task-types",children:[],level:2},{value:"Applicable Concepts",id:"applicable-concepts",children:[],level:2},{value:"Input Sources",id:"input-sources",children:[],level:2},{value:"Workers",id:"workers",children:[],level:2},{value:"Worker Strategy",id:"worker-strategy",children:[],level:2},{value:"Review Strategy",id:"review-strategy",children:[{value:"None",id:"none",children:[],level:3},{value:"Manual",id:"manual",children:[],level:3},{value:"Consensus (Coming soon!)",id:"consensus-coming-soon",children:[],level:3}],level:2},{value:"Sample Size to Select for Manual Review",id:"sample-size-to-select-for-manual-review",children:[],level:2},{value:"Reviewers",id:"reviewers",children:[],level:2},{value:"Enable AI Assist",id:"enable-ai-assist",children:[],level:2},{value:"Video FPS",id:"video-fps",children:[],level:2}],d={toc:u};function p(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-task"},"Create a Task"),(0,o.kt)("p",null,'{% embed url="',(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/7AQLsVq5RLQ%22"},'https://youtu.be/7AQLsVq5RLQ"'),' caption="Clarifai Scribe: Creating Tasks" %}'),(0,o.kt)("p",null,"Tasks enable you delegate labeling jobs to your team."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a task and start labeling",src:a(6059).Z})),(0,o.kt)("h2",{id:"task-name-and-instructions"},"Task Name and Instructions"),(0,o.kt)("p",null,'Provide your task with a descriptive name and provide instructions for your labelers. You can even provide you labelers with a "visual dictionary" by including sample image URLs.'),(0,o.kt)("h2",{id:"task-types"},"Task Types"),(0,o.kt)("p",null,"Choose the type of label that you would like your worker to add to your images or video. You can choose classification, bounding box detection, polygon detection label types."),(0,o.kt)("p",null,"Please note that if you want to create a detection labeling task, you will need to select a detection model as the base workflow in your app."),(0,o.kt)("h2",{id:"applicable-concepts"},"Applicable Concepts"),(0,o.kt)("p",null,'Concepts are the words that you are labeling your data with. Concepts can be anything you can think of, and can be written in the language of your choice. You can create concepts in Portal, or you can create them when assigning tasks. Check the "Select all concepts" box to automatically add all available concepts to your app.'),(0,o.kt)("h2",{id:"input-sources"},"Input Sources"),(0,o.kt)("p",null,'You can choose "All inputs", which will include all inputs from your dataset, or you can choose any one of your ',(0,o.kt)("a",{parentName:"p",href:"/docs/portal-guide/psearch/psaved_searches"},"Saved Searches"),"."),(0,o.kt)("p",null,"By saving your searches, you can slice and dice your dataset, and configure dynamic and static types of datasets. You can also create highly customized filters to your data, by adding metadata and searching by metadata filtering."),(0,o.kt)("h2",{id:"workers"},"Workers"),(0,o.kt)("p",null,'You can assign work to a worker, or group of workers. Simply add the worker email addresses and workers will receive an email notification and a new task will be added to their "Assigned to Me" tab.'),(0,o.kt)("h2",{id:"worker-strategy"},"Worker Strategy"),(0,o.kt)("p",null,'Manually assign work to a specific person, or have work randomly assigned to workers from a group of collaborators. By selecting "Full", all inputs will be assigned to each worker. By selecting "Partition" you will be able to break up your labeling task amongst your workers.'),(0,o.kt)("h2",{id:"review-strategy"},"Review Strategy"),(0,o.kt)("h3",{id:"none"},"None"),(0,o.kt)("p",null,'All labels will be automatically marked with a "Success" status and can be immediately used to train your new model.'),(0,o.kt)("h3",{id:"manual"},"Manual"),(0,o.kt)("p",null,'Labels will be marked with a "Pending Review" status until the assigned reviewer approves them. These labels cannot be used to train new models until approved.'),(0,o.kt)("h3",{id:"consensus-coming-soon"},"Consensus ","(","Coming soon!",")"),(0,o.kt)("p",null,'Consensus review will mark labels with "Success" status in cases where multiple reviewers provide the same label.'),(0,o.kt)("h2",{id:"sample-size-to-select-for-manual-review"},"Sample Size to Select for Manual Review"),(0,o.kt)("p",null,"You can choose to review all or part of a workers labels. Simply adjust the slider, and you will review a random subset of their labeled images. For example, if a worker is labeling 10,000 images, you might choose to review 1% of them for quality control."),(0,o.kt)("h2",{id:"reviewers"},"Reviewers"),(0,o.kt)("p",null,'You assign reviewers by adding their email. Assigned review tasks will show up in the "For Review" tab.'),(0,o.kt)("h2",{id:"enable-ai-assist"},"Enable AI Assist"),(0,o.kt)("p",null,"Enable AI-assisted workflow predictions in your labeling project. You must first create a workflow with a custom model to enable predictions."),(0,o.kt)("h2",{id:"video-fps"},"Video FPS"),(0,o.kt)("p",null,"Select your preferred video sample rate. This is the integer value that represents the number of frames that we can capture per second. We do not currently sample video at fractional frame rates."))}p.isMDXComponent=!0},6059:function(e,t,a){t.Z=a.p+"assets/images/task_overview-ee2ff243bc40930ed2fc057d3cbcfa83.jpg"}}]);