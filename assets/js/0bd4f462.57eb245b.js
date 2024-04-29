"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),r=n(86010),i=n(53438),o=n(39960),c=n(13919),l=n(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return a.createElement(o.Z,{href:t,className:(0,r.Z)("card padding--lg",s.cardContainer)},n)}function d(e){let{href:t,icon:n,title:i,description:o}=e;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",s.cardTitle),title:i},n," ",i),o&&a.createElement("p",{className:(0,r.Z)("text--truncate",s.cardDescription),title:o},o))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return a.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return a.createElement(y,e);const o=(0,i.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},o.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},68302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(52991),o=n(53438);const c={title:"Labeling Your Data",description:"Scribe helps you to label your data so that you can create training data for your new models."},l="Labeling Your Data",s={unversionedId:"api-guide/annotate/README",id:"api-guide/annotate/README",title:"Labeling Your Data",description:"Scribe helps you to label your data so that you can create training data for your new models.",source:"@site/docs/api-guide/annotate/README.mdx",sourceDirName:"api-guide/annotate",slug:"/api-guide/annotate/",permalink:"/api-guide/annotate/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/annotate/README.mdx",tags:[],version:"current",frontMatter:{title:"Labeling Your Data",description:"Scribe helps you to label your data so that you can create training data for your new models."},sidebar:"tutorialSidebar",previous:{title:"Knowledge Graph",permalink:"/api-guide/concepts/knowledge_graph"},next:{title:"Annotations : Create, Get, Update, Delete",permalink:"/api-guide/annotate/annotations"}},u={},d=[{value:"Data Labeling Services",id:"data-labeling-services",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...c}=e;return(0,r.kt)(m,(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"labeling-your-data"},"Labeling Your Data"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scribe helps you label your data so that you can create training data for your new models")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Annotations ","(",'sometimes called "labels"',")",' are how we "teach" machines to recognize concepts. When you want to create a custom model for your business, you do this by training this model to recognize the concepts that you have annotated on your sample data.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1136).Z,width:"350",height:"225"})),(0,r.kt)("h2",{id:"data-labeling-services"},"Data Labeling Services"),(0,r.kt)("p",null,"Clarifai offers fully managed data annotation services for creating high-quality training datasets. Scale your AI initiatives quickly with high-quality, human-annotated data. "),(0,r.kt)("p",null,"You can find out more ",(0,r.kt)("a",{parentName:"p",href:"https://www.clarifai.com/data-annotation-services"},"here"),"."),(0,r.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},1136:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/scribe-a47e75c0ca64415d908266af00977bae.svg"}}]);