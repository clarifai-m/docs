"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8250],{3905:function(e,o,t){t.d(o,{Zo:function(){return c},kt:function(){return p}});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),s=function(e){var o=r.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},c=function(e){var o=s(e.components);return r.createElement(d.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},f=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),p=n,w=f["".concat(d,".").concat(p)]||f[p]||u[p]||i;return t?r.createElement(w,a(a({ref:o},c),{},{components:t})):r.createElement(w,a({ref:o},c))}));function p(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var d in o)hasOwnProperty.call(o,d)&&(l[d]=o[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96901:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var r=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],l={description:"Easily build custom workflows.",sidebar_position:2},d="Workflow Builder",s={unversionedId:"portal-guide/workflows/workflow-builder",id:"portal-guide/workflows/workflow-builder",title:"Workflow Builder",description:"Easily build custom workflows.",source:"@site/docs/portal-guide/workflows/workflow-builder.md",sourceDirName:"portal-guide/workflows",slug:"/portal-guide/workflows/workflow-builder",permalink:"/portal-guide/workflows/workflow-builder",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Easily build custom workflows.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Input Nodes",permalink:"/portal-guide/workflows/input-nodes"},next:{title:"Base Workflows",permalink:"/portal-guide/workflows/base-workflows"}},c=[{value:"Model Types",id:"model-types",children:[{value:"Filter",id:"filter",children:[],level:3},{value:"Edit",id:"edit",children:[],level:3},{value:"Action",id:"action",children:[],level:3},{value:"Aggregate",id:"aggregate",children:[],level:3},{value:"Predict",id:"predict",children:[],level:3}],level:2},{value:"Building Workflows",id:"building-workflows",children:[],level:2}],u={toc:c};function f(e){var o=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"workflow-builder"},"Workflow Builder"),(0,i.kt)("p",null,'The workflow builder is designed to make it easy for you to create, modify and experiment with AI workflows.\nYou can create the skeleton of a workflow by connecting one or more models, and then configuring each model-type as a node in your workflow.  Non-trainable models (also known as "model operators") can be added to workflows on-the-fly, without the need to pre-configure these models ahead of time. You can even view and edit the output settings of any model in a workflow, directly in the graph editor.'),(0,i.kt)("h2",{id:"model-types"},"Model Types"),(0,i.kt)("h3",{id:"filter"},"Filter"),(0,i.kt)("p",null,"Filtering helps you to remove unwanted data from your workflow. This data might take the form of inputs (like images, video and text), or it might be an output from another model, like a predicted concept. One very common use of filters in workflows is to eliminate predictions that fall below a certain confidence threshold."),(0,i.kt)("h3",{id:"edit"},"Edit"),(0,i.kt)("p",null,"Edit models help you to transform and/or augment your data. Edit models can be used to crop out regions of an image, align an image based on the pose of a face, or even map predictions from one model to another."),(0,i.kt)("h3",{id:"action"},"Action"),(0,i.kt)("p",null,"Action models help you to automate processes. You can trigger a wide variety of actions based on predictions made by models in your workflow. You can automatically send an SMS message when a certain object is detected, you can add a label to an image based on predicted concepts, and you can even trigger aws-lambda functions."),(0,i.kt)("h3",{id:"aggregate"},"Aggregate"),(0,i.kt)("p",null,"Aggregation models consolidate multiple model outputs into a single output. Aggregation is important for a wide variety of image, video and text use cases, and can help you count objects, connect individually detected words into sentences, or connect objects across multiple frames of video."),(0,i.kt)("h3",{id:"predict"},"Predict"),(0,i.kt)("p",null,'Prediction models are the "intelligent" part of your AI workflows. Predictions help you to understand, classify and organize your data. Predictions can be used to drive behaviors in other nodes in your workflow. Predictions take specific input types and then return predictions about things like the concepts, regions, poses, characters, words, and the abstract visual characteristics of your inputs.'),(0,i.kt)("h2",{id:"building-workflows"},"Building Workflows"),(0,i.kt)("p",null,"To build a workflow, just grab a model from the lefthand sidebar and drag it onto your workspace. This model will automatically be configured as a node in your workflow. Once a node is added to your workflow you can configure the model parameters in the righthand sidebar."),(0,i.kt)("p",null,"The models in your workflow will automatically connect when they are placed near each other. You can also grab the node connectors on each model and configure your workflow nodes manually."))}f.isMDXComponent=!0}}]);