"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7707],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={description:"Glossary of key terminology to know when working with the Clarifai Platform",sidebar_position:2},s="Key Terminology to Know",c={unversionedId:"clarifai-basics/glossary",id:"clarifai-basics/glossary",title:"Key Terminology to Know",description:"Glossary of key terminology to know when working with the Clarifai Platform",source:"@site/docs/clarifai-basics/glossary.md",sourceDirName:"clarifai-basics",slug:"/clarifai-basics/glossary",permalink:"/clarifai-basics/glossary",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/glossary.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Glossary of key terminology to know when working with the Clarifai Platform",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Your First Visual Search App (~1 min)",permalink:"/clarifai-basics/quick-start/your-first-visual-search-app"},next:{title:"Applications",permalink:"/clarifai-basics/applications/"}},u=[{value:"Application",id:"application",children:[],level:2},{value:"Base workflow",id:"base-workflow",children:[],level:2},{value:"Concept",id:"concept",children:[],level:2},{value:"Embeddings",id:"embeddings",children:[],level:2},{value:"Indexing",id:"indexing",children:[],level:2},{value:"Input",id:"input",children:[],level:2},{value:"Model",id:"model",children:[],level:2},{value:"Operation",id:"operation",children:[],level:2},{value:"Output",id:"output",children:[],level:2},{value:"Portal",id:"portal",children:[],level:2},{value:"Prediction",id:"prediction",children:[],level:2},{value:"Search",id:"search",children:[],level:2},{value:"Train",id:"train",children:[],level:2},{value:"Workflow",id:"workflow",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-terminology-to-know"},"Key Terminology to Know"),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("p",null,"An application is a kind of self-contained project for managing data, annotating, modeling, predicting and searching. An operation performed in one application will return results from data within that application but will be blind to data in other applications. You can create as many applications as you like and can divide your use among them to segment data into collections and manage access accordingly."),(0,a.kt)("h2",{id:"base-workflow"},"Base workflow"),(0,a.kt)("p",null,"When you add an input to your app, the base workflow of your app computes the outputs from all the models in that workflow and indexes those outputs. Those indexed outputs are what incur your monthly indexing fee, and enable search and training on top of the base workflow models."),(0,a.kt)("h2",{id:"concept"},"Concept"),(0,a.kt)("p",null,"A concept is something that describes an entity in the physical world, similar to a \u201ctag\u201d or \u201ckeyword\u201d. You can use a concept to annotate an input if that input has that entity. You can also add it to a model if you want that model to be able to recognize that entity."),(0,a.kt)("h2",{id:"embeddings"},"Embeddings"),(0,a.kt)("p",null,"A low-dimensional representation of a model\u2019s input that has rich semantic information."),(0,a.kt)("h2",{id:"indexing"},"Indexing"),(0,a.kt)("p",null,"Indexing collects, parses, and stores your inputs to facilitate fast and accurate information retrieval. Indexing happens automatically every time you add new inputs to your app. Indexing enables responsive visual search, data clustering, concept search and model training."),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,"An input is the data you're providing into the platform. Inputs and their predictions are indexed so that they can be used for search. You can also add your own concepts to inputs to use when training your own model. When you upload data to an app that is known as \"POSTing\" inputs. You can also send inputs to a model to get a model's outputs with PostModelOutputs."),(0,a.kt)("h2",{id:"model"},"Model"),(0,a.kt)("p",null,"Models convert inputs to outputs. Clarifai provides many different models that each \u2018see\u2019 the world differently - with a unique group of concepts. Clarifai has built some great models for you use, but there are times when you wish you had a model that sees the world the way you see it, with your own concepts. You can use your own model by adding images with concepts, training it, and then specifying it when making predictions."),(0,a.kt)("h2",{id:"operation"},"Operation"),(0,a.kt)("p",null,"An Operation is an action that is performed via our API or User Interface. It can include actions such as predictions, searches, input uploads, training custom models, model evaluations and more."),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("p",null,'On output, usually in the form of a prediction or predictions, is the data returned to you when you send an input into a model. Because of their close relationship, the terms "outputs" and "predictions" are sometimes used interchangeably.'),(0,a.kt)("h2",{id:"portal"},"Portal"),(0,a.kt)("p",null,"Portal is a web application that allows you to preview your Clarifai apps. You can view all the inputs you have added, perform searches, and train new models."),(0,a.kt)("h2",{id:"prediction"},"Prediction"),(0,a.kt)("p",null,"A prediction is an answer to the question \u201cWhat can you tell me about this input?\u201d. When you call predict on an input, you will receive one or more predictions of different concepts that apply to that image. Predictions vary based on the concepts included in a given model."),(0,a.kt)("h2",{id:"search"},"Search"),(0,a.kt)("p",null,"All of the images in your app are indexed by both the concepts applied by the app\u2019s default model, and by their own visual properties. Search, in the context of Clarifai, refers to finding relevant images in your app by text ","(","match concepts",")",", reverse image search ","(","similar-looking images",")",", or both."),(0,a.kt)("h2",{id:"train"},"Train"),(0,a.kt)("p",null,"Train is when you update a model to \u201clearn\u201d from all the annotated concepts on your inputs. Any time you add or update image concepts, you can use train again to create a new model version, fit to the latest information."),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"Workflows enables users to make predictions on one or more pre-trained or custom models, with a single API call."))}p.isMDXComponent=!0}}]);