"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9391],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return p}});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(a),p=i,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||n;return a?o.createElement(h,r(r({ref:t},c),{},{components:a})):o.createElement(h,r({ref:t},c))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},533:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var o=a(7462),i=a(3366),n=(a(7294),a(3905)),r=["components"],s={description:"Learn about some of the most important model types on the Clarifai platform.",sidebar_position:2},l="Model Types",d={unversionedId:"api-guide/model/model-types",id:"api-guide/model/model-types",title:"Model Types",description:"Learn about some of the most important model types on the Clarifai platform.",source:"@site/docs/api-guide/model/model-types.md",sourceDirName:"api-guide/model",slug:"/api-guide/model/model-types",permalink:"/api-guide/model/model-types",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/model/model-types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about some of the most important model types on the Clarifai platform.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Clarifai Models",permalink:"/api-guide/model/clarifai-models"},next:{title:"Custom Models",permalink:"/api-guide/model/custom-model-walkthrough"}},c=[{value:"Trainable Models",id:"trainable-models",children:[{value:"Visual-Classifier",id:"visual-classifier",children:[],level:3},{value:"Visual-Detector",id:"visual-detector",children:[],level:3},{value:"Embedding-Classifier",id:"embedding-classifier",children:[],level:3}],level:2},{value:"Custom Models",id:"custom-models",children:[{value:"Deep Trained Models (Visual Classifier, Visual Detector, Visual Embedder)",id:"deep-trained-models-visual-classifier-visual-detector-visual-embedder",children:[],level:3},{value:"Context-Based Classifier",id:"context-based-classifier",children:[],level:3},{value:"Clusterer",id:"clusterer",children:[],level:3}],level:2},{value:"Non-Trainable Models (Fixed-Function Operators)",id:"non-trainable-models-fixed-function-operators",children:[],level:2}],u={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"model-types"},"Model Types"),(0,n.kt)("p",null,"Clarifai offers a wide variety of models that can be used as standalone solutions, or as the building blocks for your own custom business solution."),(0,n.kt)("p",null,"This page describes some important model types that you should know when working with the Clarifai platform. Please keep in mind that this is an overview of the general categories of models available to you and that new models are created all the time. For a listing of the models available to you:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make a ",(0,n.kt)("inlineCode",{parentName:"li"},"GET")," call to ",(0,n.kt)("inlineCode",{parentName:"li"},"/models/types")," api. The api responds with all available model types."),(0,n.kt)("li",{parentName:"ul"},"You can then choose any one of the model types and make a ",(0,n.kt)("inlineCode",{parentName:"li"},"POST")," request to the ",(0,n.kt)("inlineCode",{parentName:"li"},"/models")," api with the payload specified in the response for the chosen model type.")),(0,n.kt)("h2",{id:"trainable-models"},"Trainable Models"),(0,n.kt)("h3",{id:"visual-classifier"},"Visual-Classifier"),(0,n.kt)("p",null,'Classification models help you answer the question "What" or "Who" is in your data. Classification models understand the world in terms of ',(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/concepts"},"concepts"),". Models can come pre-trained to recognize concepts, or you can create your own custom models to recognize custom concepts."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example use case:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"A large retailer looking to find and remove listings for illegal objects and substances across thousands of listings that include user-generated data. A classification model allows the retailer to quickly find listings that are in violation of their community rules, and remove them from the site.")),(0,n.kt)("h3",{id:"visual-detector"},"Visual-Detector"),(0,n.kt)("p",null,'Detection models answer the question "Where" are objects in your data. Detectors can come pre-trained to detect specific objects, or you can train your own custom detectors to detect your own custom list of objects.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example use case:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"A roofing company wants to provide insurance companies and customers with a consistent way of evaluating roof damage. This company captures images of roofs with a drone, and then feeds the images into a detection model. The detection model can then locate and classify specific areas of damage on the roofs.")),(0,n.kt)("h3",{id:"embedding-classifier"},"Embedding-Classifier"),(0,n.kt)("p",null,"Embedding models don't answer a specific question. Instead, they help you work with something that is a little more abstract: the underlying ",(0,n.kt)("em",{parentName:"p"},"structure")," of a classification or detection model. In fact, you can think of an embedding model as a classification or detection model with the concepts removed, because in many cases this is exactly what an embedding model is. Embedding models are important because they help you transfer the learnings from existing models to your own custom models. This means that you can come up with your own set of custom concepts and quickly train a new model with relatively few training samples."),(0,n.kt)("p",null,"Embeddings also can be combined with cluster models to provide a fast and efficient way to search your data based on ",(0,n.kt)("em",{parentName:"p"},"visual similarity"),"."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example use case:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"A security company wants to use face verification as part of their two-factor identification system. They would begin by using Clarifai's face embedding model, and then training this model to recognize the identities of permitted individuals. They would simply upload images of the people that want to identify, add individual names as concepts, and train the new model using a ",(0,n.kt)("strong",{parentName:"em"},"Context-Based Classifier"),".")),(0,n.kt)("h2",{id:"custom-models"},"Custom Models"),(0,n.kt)("h3",{id:"deep-trained-models-visual-classifier-visual-detector-visual-embedder"},"Deep Trained Models ","(","Visual Classifier, Visual Detector, Visual Embedder",")"),(0,n.kt)("p",null,"Use deep trained models when you are working with highly specialized data, or you want to push the accuracy of your model to its limits for a specific use case. Deep training builds a custom neural network for your application from the ground-up. This means that your model can become an expert in recognizing the unique set of visual features that is important in your data set."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example use case:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"A radiology laboratory is training a model to detect COVID-19 in patients based on their chest x-rays. They need to push model accuracy to its absolute limit to reduce false positives. Their dataset is also highly specialized and technical in nature. They would typically choose to a deep trained model to get the best results.")),(0,n.kt)("h3",{id:"context-based-classifier"},"Context-Based Classifier"),(0,n.kt)("p",null,"The Context-Based Classifier is the key to transfer learning and custom model building on the Clarifai platform. The context based classifier can learn new concepts and create new custom models out of existing models."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example use case:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"A retailer wants to train a model that can recognize their apparel in use on social media. They would use a context-based classifier in conjunction with Clarifai's apparel model to train a new custom model that will recognize clothing items produced by their brand.")),(0,n.kt)("h3",{id:"clusterer"},"Clusterer"),(0,n.kt)("p",null,'Cluster models work with Embedding models so that you can perform visual searches. Cluster models are able to use the mathematical structure of a model\'s embedding to determine which images are "clustered together" in the embedding space. This means that you can search for visually similar people or objects in your dataset quickly and easily, without the need for labeling and training custom concepts.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example use case:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'An online retailer wants to suggest relevant products based on visual similarity to products that customers have previously purchased. They would use a cluster model together with an embedding model, and perform a "visual search" on their catalog to identify similar items.')),(0,n.kt)("h2",{id:"non-trainable-models-fixed-function-operators"},"Non-Trainable Models ","(","Fixed-Function Operators",")"),(0,n.kt)("p",null,'Fixed-Function Operators are "non-trainable models" that help you connect, direct, and network your models in a workflow. Some of our most popular operators are used for random sampling, routing based on predictions and image cropping.'),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Example use case:")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},'A customer wants to automatically tag images based on AI predictions. They would might connect a classification model with a "Concept Thresholder" model to determine which images are labeled and which ones are not.')))}m.isMDXComponent=!0}}]);