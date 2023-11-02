"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const a={description:"Learn about updates to model and model version endpoints",sidebar_position:-3},r="Updates to Model and Model Version Endpoints",l={unversionedId:"product-updates/upcoming-api-changes/model-version-endpoints",id:"product-updates/upcoming-api-changes/model-version-endpoints",title:"Updates to Model and Model Version Endpoints",description:"Learn about updates to model and model version endpoints",source:"@site/docs/product-updates/upcoming-api-changes/model-version-endpoints.md",sourceDirName:"product-updates/upcoming-api-changes",slug:"/product-updates/upcoming-api-changes/model-version-endpoints",permalink:"/product-updates/upcoming-api-changes/model-version-endpoints",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/product-updates/upcoming-api-changes/model-version-endpoints.md",tags:[],version:"current",sidebarPosition:-3,frontMatter:{description:"Learn about updates to model and model version endpoints",sidebar_position:-3},sidebar:"tutorialSidebar",previous:{title:"Deprecation of closed_environment in favor of enrich_dataset",permalink:"/product-updates/upcoming-api-changes/closed-environment"},next:{title:"Changes to PostModelOutputs and PostWorkflowResults Responses",permalink:"/product-updates/upcoming-api-changes/postmodeloutputs-responses"}},s={},d=[{value:"Date",id:"date",level:2},{value:"Change",id:"change",level:2},{value:"Details",id:"details",level:2},{value:"Old Behavior",id:"old-behavior",level:4},{value:"New Behavior",id:"new-behavior",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"updates-to-model-and-model-version-endpoints"},"Updates to Model and Model Version Endpoints"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about updates to model and model version endpoints")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"date"},"Date"),(0,i.kt)("p",null,"January 20th, 2023"),(0,i.kt)("h2",{id:"change"},"Change"),(0,i.kt)("p",null,"Critical updates to model and model version endpoints"),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("h4",{id:"old-behavior"},"Old Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Previously, using the ",(0,i.kt)("strong",{parentName:"p"},"PostModels")," endpoint to create a new model also created a placeholder version of the model with user-provided fields. And if the ",(0,i.kt)("inlineCode",{parentName:"p"},"model_type_id")," of the model was trainable, then a new ModelVersion was created with UNTRAINED status by default. Otherwise, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"model_type_id")," was not trainable, then a new ModelVersion was created with TRAINED status.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modifying a model's config settings requires using the ",(0,i.kt)("strong",{parentName:"p"},"PatchModels")," endpoint. It's how you previously changed the info fields, descriptions, notes, metadata for both models and model versions. If you were only patching fields that are informational about the model, and not the model version, a model version was not created. If you were patching a trainable model where the latest model version was trained, and you were only changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"output_info"),", a new trained model version was created with the new info. Otherwise, if you were patching a trainable model where the latest model version had not been trained, the created model version was marked as untrained by default. If you were patching an untrainable model type, the new created model version was marked as trained.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Previously, using the ",(0,i.kt)("strong",{parentName:"p"},"PostModelVersions")," endpoint automatically, by default, kicked off training the latest untrained model version\u2014even though a user may not intend to train the latest version, which could unnecessarily incur training costs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Previously, using the ",(0,i.kt)("strong",{parentName:"p"},"PatchModelVersions")," endpoint only patched a model versions' visibility, metadata, license, or description\u2014while maintaining the model version's status."))),(0,i.kt)("h4",{id:"new-behavior"},"New Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PostModels")," will create new models but not create new model versions. This means trainable models that have not yet been trained will require the additional step of calling ",(0,i.kt)("strong",{parentName:"p"},"PostModelVersions"),"\u2014while providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"*_info")," fields in the model version\u2014to effect training.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PostModelVersions")," will allow users to give information specific to a model version. All the ",(0,i.kt)("inlineCode",{parentName:"p"},"*_info")," fields\u2014such as ",(0,i.kt)("inlineCode",{parentName:"p"},"output_info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"input_info"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"train_info"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"import_info"),"\u2014will be migrated to the endpoint. This would minimize the confusion and difficulty of maintaining these endpoints. Users will be able patch model specific fields without worrying about model version fields being affected.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PatchModels")," will allow users to patch only the model level fields, nothing in the model version. Unnecessary model versions will no longer be created. This allows users to easily track persisted versions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PatchModelVersions")," will be the new way to change most of the model version fields like gettable, metadata, license, description, notes, and ",(0,i.kt)("inlineCode",{parentName:"p"},"output_info")," (not including concepts). ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If users used ",(0,i.kt)("inlineCode",{parentName:"p"},"model.output_info.output_config")," when inferencing, they will have to change that to ",(0,i.kt)("inlineCode",{parentName:"p"},"model.model_version.output_info.output_config"),"."))))}c.isMDXComponent=!0}}]);