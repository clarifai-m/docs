"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7104],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),p=o,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52991:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),o=r(34334),i=r(53438),a=r(39960),c=r(13919),l=r(95999),s="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function m(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t;let{item:r}=e;const o=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:o,title:r.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},75739:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=r(83117),o=(r(67294),r(3905)),i=r(52991),a=r(53438);const c={description:"Mesh provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic."},l="Creating Workflows",s={unversionedId:"api-guide/workflows/README",id:"api-guide/workflows/README",title:"Creating Workflows",description:"Mesh provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic.",source:"@site/docs/api-guide/workflows/README.mdx",sourceDirName:"api-guide/workflows",slug:"/api-guide/workflows/",permalink:"/api-guide/workflows/",draft:!1,tags:[],version:"current",frontMatter:{description:"Mesh provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic."},sidebar:"tutorialSidebar",previous:{title:"Improving Your Model",permalink:"/api-guide/evaluate/improving-your-model"},next:{title:"Base Workflows",permalink:"/api-guide/workflows/base-workflows"}},u={},d=[],f={toc:d};function p(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-workflows"},"Creating Workflows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand Mesh Workflows")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Mesh Workflows provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic."),(0,o.kt)("p",null,"Use Mesh Workflows to process complex logic, gain insights, and build targeted solutions. With Mesh Workflows, you can work with your machine learning models like they are nodes in a graph. "),(0,o.kt)("p",null,"Clarifai makes it easy to connect together models of different kinds so that you can perform complex operations on your data, and build solutions that target your specific business needs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(23472).Z,width:"356",height:"229"})),(0,o.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},23472:function(e,t,r){t.Z=r.p+"assets/images/mesh-234e605274fafc22e6752c491543ad4f.svg"}}]);