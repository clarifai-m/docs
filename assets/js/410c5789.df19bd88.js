"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={description:"Learn about deprecation of `closed_environment`",sidebar_position:-4},r="Deprecation of closed_environment",l={unversionedId:"product-updates/upcoming-api-changes/closed-environment",id:"product-updates/upcoming-api-changes/closed-environment",title:"Deprecation of closed_environment",description:"Learn about deprecation of `closed_environment`",source:"@site/docs/product-updates/upcoming-api-changes/closed-environment.md",sourceDirName:"product-updates/upcoming-api-changes",slug:"/product-updates/upcoming-api-changes/closed-environment",permalink:"/product-updates/upcoming-api-changes/closed-environment",draft:!1,tags:[],version:"current",sidebarPosition:-4,frontMatter:{description:"Learn about deprecation of `closed_environment`",sidebar_position:-4},sidebar:"tutorialSidebar",previous:{title:"Changes to Use of PATs and API Keys",permalink:"/product-updates/upcoming-api-changes/pat-api-keys"},next:{title:"Updates to Model and Model Version Endpoints",permalink:"/product-updates/upcoming-api-changes/model-version-endpoints"}},d={},p=[{value:"Date",id:"date",level:2},{value:"Change",id:"change",level:2},{value:"Details",id:"details",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deprecation-of-closed_environment"},"Deprecation of ",(0,i.kt)("inlineCode",{parentName:"h1"},"closed_environment")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about deprecation of ",(0,i.kt)("inlineCode",{parentName:"strong"},"closed_environment"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"date"},"Date"),(0,i.kt)("p",null,"January 26th, 2023"),(0,i.kt)("h2",{id:"change"},"Change"),(0,i.kt)("p",null,"Deprecation of ",(0,i.kt)("inlineCode",{parentName:"p"},"closed_environment")," in favor of ",(0,i.kt)("inlineCode",{parentName:"p"},"enrich_dataset")," for creating embedding-classifier models "),(0,i.kt)("h2",{id:"details"},"Details"),(0,i.kt)("p",null,"When using the ",(0,i.kt)("strong",{parentName:"p"},"PostModels")," endpoint to create a custom embedding-classifier model, you could include the ",(0,i.kt)("inlineCode",{parentName:"p"},"closed_environment")," variable, as part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"modelVersion.OutputInfo.OutputConfig")," struct. "),(0,i.kt)("p",null,"The variable accepted a Boolean value and specified whether a pre-stored dataset, of (usually) negative embeddings, should be added to the training process of your model. This generally leads to higher model accuracy without any additional effort on your end. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"closed_environment")," was set to ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),", which was the default action, we would try to use additional negative embeddings during the training process. ",(0,i.kt)("em",{parentName:"p"},"However, the default action would fail if the underlying base model did not have negative embeddings.")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If it was set to ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", it meant that the user wanted a closed environment for the training and therefore we did not add additional negative embeddings. This worked for all embedding models."))),(0,i.kt)("p",null,"We plan to replace it with ",(0,i.kt)("inlineCode",{parentName:"p"},"enrich_dataset")," that is specified inside ",(0,i.kt)("inlineCode",{parentName:"p"},"modelVersion.TrainInfo.Params")," when creating embedding-classifiers, which is the only type of model that supports it. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"enrich_dataset")," variable will be implemented as an ",(0,i.kt)("inlineCode",{parentName:"p"},"ENUM")," instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"BOOL")," so that it can have two options: ",(0,i.kt)("inlineCode",{parentName:"p"},"Automatic")," (default) and ",(0,i.kt)("inlineCode",{parentName:"p"},"Disabled"),". "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Automatic")," means that if there are negative embeddings for a base model, we will use them\u2014and we won\u2019t use them if they\u2019re not available. ",(0,i.kt)("em",{parentName:"p"},"So, the training will not fail if the underlying embeddings do not have negative embeddings."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Disabled")," means that we should not use the negative embeddings whether they are available or not. "))),(0,i.kt)("p",null,"That way, ",(0,i.kt)("inlineCode",{parentName:"p"},"enrich_dataset")," fixes the problem with ",(0,i.kt)("inlineCode",{parentName:"p"},"closed_environment"),". Previously, setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"closed_environment")," variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," (the default value) would fail if the base model didn\u2019t have the negatives for it. "),(0,i.kt)("p",null,"This change will also affect the ",(0,i.kt)("strong",{parentName:"p"},"PostModelVersions")," endpoint."))}u.isMDXComponent=!0}}]);