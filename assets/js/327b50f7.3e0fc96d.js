"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),o=n(86010),a=n(53438),i=n(39960),c=n(13919),l=n(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",d="cardDescription_PWke";function u(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",d),title:i},i))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==o?void 0:o.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},55460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(52991),i=n(53438);const c={description:"Easily create and train new models"},l="Creating and Training Models",s={unversionedId:"community/model/README",id:"community/model/README",title:"Creating and Training Models",description:"Easily create and train new models",source:"@site/docs/community/model/README.mdx",sourceDirName:"community/model",slug:"/community/model/",permalink:"/community/model/",draft:!1,tags:[],version:"current",frontMatter:{description:"Easily create and train new models"},sidebar:"tutorialSidebar",previous:{title:"Release 5.10",permalink:"/product-updates/changelog/release510"},next:{title:"Clarifai Models",permalink:"/community/model/clarifai-models"}},m={},d=[],u={toc:d};function p(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-and-training-models"},"Creating and Training Models"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Easily create and train new models")),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Community makes it unbelievably easy to train new models. It all happens with the click of a button. And once your model is trained, it is already deployed and ready to use.")),(0,o.kt)("p",null,"The Community platform makes it easy for you to use AI models to power your business solution. You can create your own custom models, or get started right away by using one of our pre-optimized Clarifai Models."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(61699).Z,width:"271",height:"294"})),(0,o.kt)(a.Z,{items:(0,i.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0},61699:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enlight-007484a47c7d0ce73a1cf6d4866ed349.svg"}}]);