"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2236],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(o),m=n,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return o?r.createElement(f,i(i({ref:t},p),{},{components:o})):r.createElement(f,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},15951:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],l={description:"Pre-trained, pre-optimized and ready to use right out of the box.",sidebar_position:2},s="Clarifai Models",d={unversionedId:"portal-guide/model/clarifai-models",id:"portal-guide/model/clarifai-models",title:"Clarifai Models",description:"Pre-trained, pre-optimized and ready to use right out of the box.",source:"@site/docs/portal-guide/model/clarifai-models.md",sourceDirName:"portal-guide/model",slug:"/portal-guide/model/clarifai-models",permalink:"/portal-guide/model/clarifai-models",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Pre-trained, pre-optimized and ready to use right out of the box.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Training Basics",permalink:"/portal-guide/model/training-basics"},next:{title:"Custom Models",permalink:"/portal-guide/model/pcustom-model-walkthrough"}},p=[{value:"Clarifai Models",id:"clarifai-models-1",children:[],level:2},{value:"Operator Models",id:"operator-models",children:[],level:2}],u={toc:p};function c(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"clarifai-models"},"Clarifai Models"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pre-trained, pre-optimized, and ready to use right out of the box")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Our model library is constantly growing and developing. To learn more about available models, you can browse ",(0,a.kt)("a",{parentName:"p",href:"https://clarifai.com/explore"},"Clarifai Community"),", view available models in Portal's Model Mode ","(",'Just navigate to Model Mode in Portal, click "Create Workflow" and select "clarifai" under "USER". You will see a list of all available pre-built models for your app',")",', or use the "Get" commands outlined in the API Guide.'),(0,a.kt)("h2",{id:"clarifai-models-1"},"Clarifai Models"),(0,a.kt)("p",null,'Clarifai Models are "Trainable" machine learning models that have been developed in-house and have been thoroughly tested.'),(0,a.kt)("p",null,'Clarifai Models are ready to make predictions right our of the box. For example, our "General" model recognizes recognizes over 11,000 different concepts including objects, themes, moods, and more, with outputs in 23 different languages. Our "Food" model recognizes more than 1,000 food items in images down to the ingredient level. Before you train your own model, we suggest trying these out to see if they fit your needs.'),(0,a.kt)("h2",{id:"operator-models"},"Operator Models"),(0,a.kt)("p",null,'Operator models are "Non-Trainable", or "fixed function" models that help you connect, route and control the inputs and outputs that you send through your ',(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/workflows/"},"workflows"),". Operator models are critical building blocks for creating more advanced workflows."),(0,a.kt)("p",null,"Here are a selection of model types to give you an idea of what is possible. Visit Model Mode in Portal to see a complete list of the models available to you."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Concept Thresholder")," - Use a threshold and an operator ","(",">",", ",">","=, =, ","<","=, or ","<",")",' to route the outputs of classification models in your workflows. For example, if you use the " ',">",' " threshold type and set the threshold value to 0.9, only concepts with that have been predicted with a confidence score greater than 0.9 will be sent as outputs from the concept thresholder, and other concepts will be ignored. Concept Thresholders can be networked and combined to enable complex routing behaviors.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Concept Synonym Mapper")," - Map the input concepts to output concepts by following synonym concept relations in the knowledge graph of your app."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Annotation Writer")," - Write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Image Cropper")," - Crop the input image according to each input region that is present in the input. When used in a workflow this model can look back along the graph of the workflow to find the input image if the preceding model does not output an image itself so that you can do image -",">"," detector -",">"," cropper type of workflow easily."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Random Sampler")," - Randomly sample inputs allowed to pass through as outputs. This is done with the conditional keep","_","fraction ",">"," rand","(",")"," where keep","_","fraction is the average fraction of inputs that will be allowed through."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cross App Visual Searcher")," - Perform a visual search in another app that you have configured in the model configuration and returns the matched search hits as concept."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"KNN Classifier Model")," - Use k nearest neighbor search and plurality voting amongst the nearest neighbors to classify new instances. This is recommended when you only have a small dataset like one image per concept.")))}c.isMDXComponent=!0}}]);