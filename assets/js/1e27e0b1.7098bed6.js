"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2294],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96123:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={description:"(Beta) Proposals enable you to build model and concept hierarchies",sidebar_position:4},c="Proposals",p={unversionedId:"portal-guide/data/explorer/proposals",id:"portal-guide/data/explorer/proposals",title:"Proposals",description:"(Beta) Proposals enable you to build model and concept hierarchies",source:"@site/docs/portal-guide/data/explorer/proposals.md",sourceDirName:"portal-guide/data/explorer",slug:"/portal-guide/data/explorer/proposals",permalink:"/portal-guide/data/explorer/proposals",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"(Beta) Proposals enable you to build model and concept hierarchies",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bulk Labeling",permalink:"/portal-guide/data/explorer/bulk-labeling"},next:{title:"Object Tracking",permalink:"/portal-guide/data/explorer/object-tracking"}},s=[{value:"Build model and concept hierarchies",id:"build-model-and-concept-hierarchies",children:[{value:"Concept hierarchies",id:"concept-hierarchies",children:[],level:3},{value:"Model hierarchies",id:"model-hierarchies",children:[],level:3}],level:2}],u={toc:s};function d(e){var r=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proposals"},"Proposals"),(0,a.kt)("p",null,'{% embed url="',(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/7r2sc3I6Tvo%22"},'https://youtu.be/7r2sc3I6Tvo"'),' caption="Learn how to interact with your data in Explorer" %}'),(0,a.kt)("h2",{id:"build-model-and-concept-hierarchies"},"Build model and concept hierarchies"),(0,a.kt)("p",null,"Organizing models and concepts hierarchically can be very useful when working with large and complex model taxonomies."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create parent-child relationships between concepts",src:t(24208).Z})),(0,a.kt)("h3",{id:"concept-hierarchies"},"Concept hierarchies"),(0,a.kt)("p",null,"By establishing concept hierarchies you can build applications that can account for the fact that child concepts ","(","like table",")"," are related to parent concepts ","(","like furniture",")",". Learn more about working with concept relationships with the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concept/knowledge_graph"},"Clarifai Knowledge Graph. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Choose your concept relationships",src:t(51881).Z})),(0,a.kt)("h3",{id:"model-hierarchies"},"Model hierarchies"),(0,a.kt)("p",null,"By establishing model hierarchies you can establish relationships between grouping models and ranking models. This parent-child relationship can help address very common real world problems in AI, where you will first want to group subsets of your data together, before processing with more specialized models. You can choose any custom or pre-built model as your grouping and ranking models."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The proposals tab helps you to take advantage of AI assist and knowledge graph linking. ",src:t(2078).Z})))}d.isMDXComponent=!0},2078:function(e,r,t){r.Z=t.p+"assets/images/concept-relations-2-1c9a6dfac07fb680053e5d2537281856.jpg"},51881:function(e,r,t){r.Z=t.p+"assets/images/concept-relations-f321d77884105c5e927d514580ac5337.jpg"},24208:function(e,r,t){r.Z=t.p+"assets/images/proposers-a73fdbe34d94c9afc24662ba33732ecd.jpg"}}]);