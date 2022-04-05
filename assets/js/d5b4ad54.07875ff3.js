"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3859],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return w}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=u(o),w=n,d=f["".concat(s,".").concat(w)]||f[w]||p[w]||a;return o?r.createElement(d,l(l({ref:t},c),{},{components:o})):r.createElement(d,l({ref:t},c))}));function w(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8783:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),l=["components"],i={description:"Learn the basics of setting up a new workflow.",sidebar_position:4},s="Setting Up a Workflow",u={unversionedId:"portal-guide/workflows/setting-up-a-mesh-workflow",id:"portal-guide/workflows/setting-up-a-mesh-workflow",title:"Setting Up a Workflow",description:"Learn the basics of setting up a new workflow.",source:"@site/docs/portal-guide/workflows/setting-up-a-mesh-workflow.md",sourceDirName:"portal-guide/workflows",slug:"/portal-guide/workflows/setting-up-a-mesh-workflow",permalink:"/portal-guide/workflows/setting-up-a-mesh-workflow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/workflows/setting-up-a-mesh-workflow.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn the basics of setting up a new workflow.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Base Workflows",permalink:"/portal-guide/workflows/base-workflows"},next:{title:"Common Workflows",permalink:"/portal-guide/workflows/common-workflows"}},c=[{value:"Workflow Setup",id:"workflow-setup",children:[{value:"Create a Workflow",id:"create-a-workflow",children:[],level:3}],level:2}],p={toc:c};function f(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-workflow"},"Setting Up a Workflow"),(0,a.kt)("p",null,"Workflows are a graph of computation that encompass one or more Clarifai or Custom model","(","s",")",". Every workflow is attached to one of your applications. Under each workflow, you will see a list of the Clarifai Models and all custom models in that application when selecting models to add to your workflow. With Workflow Predict, you will be able to run your business logic on one efficient tool."),(0,a.kt)("p",null,"This won't have any impact on the price you are charged per call. You will still be charged for the same operation if it were separate calls to the API. When you do a predict with a workflow you're charged for the prediction of each model in the workflow as if they were separate calls."),(0,a.kt)("h2",{id:"workflow-setup"},"Workflow Setup"),(0,a.kt)("p",null,"To set up a workflow, you will need to head over to the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/apps"},"Applications page")," through your account. From there, you will need to select which application you want to create the workflow under."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AI Applications",src:o(8209).Z})),(0,a.kt)("p",null,'Then click on the model mode icon in the lefthand sidebar. From here, click the "Create Workflow" button at the top righthand corner of the screen.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AI model gallery",src:o(6859).Z})),(0,a.kt)("h3",{id:"create-a-workflow"},"Create a Workflow"),(0,a.kt)("p",null,'To create a custom workflow, just click the "ADD" button next you the model you would like to add. You will see the model displayed in the "Selected Models" section below. You can use the dropdown menu on the left hand side of the screen to filter through your available models:'),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Workflow ID")," - Provide a descriptive name for your workflow. This ID will be used to make the API call, so make sure to give it something URL-friendly."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"User"),' - Filter your models by user ID. Be sure to select "Clarifai" if you would like to choose a Clarifai Model.'),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"APP")," - Filter your models based on their app."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Inputs")," - Filter your models based on the type if input that they accept."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Outputs")," - Filter your models based on the type of output that they return."),(0,a.kt)("p",null,"Once added you can configure your input nodes for each model. Model outputs vary based on the type of model that you are working with."),(0,a.kt)("p",null,"For Clarifai Models, you will be able to use the latest version. For your custom models, you can select the version of your model."),(0,a.kt)("p",null,'You can add up to 20 models to a single workflow. Once you have finished adding everything, press the "Save Workflow" button and that will save the state of your workflow. Now you are ready to predict using your brand new workflow. You can edit a workflow at any time.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a workflow",src:o(5841).Z})))}f.isMDXComponent=!0},8209:function(e,t,o){t.Z=o.p+"assets/images/application-screen-new2-ed48bbb80f9df32721691c150630002e.png"},6859:function(e,t,o){t.Z=o.p+"assets/images/create-workflow-new2-a8427df239fc87eb81213aabc7ef9912.png"},5841:function(e,t,o){t.Z=o.p+"assets/images/my-workflow-new2-7ca2042d36c88cc7fc8379b9d96b2662.png"}}]);