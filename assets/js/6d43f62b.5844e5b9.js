"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2346],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3514:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),a=n(20053),o=n(84142),i=n(75489),c=n(16654),l=n(21312);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return r.createElement(i.A,{href:t,className:(0,a.A)("card padding--lg",s.cardContainer)},n)}function d(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,a.A)("text--truncate",s.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.A)("text--truncate",s.cardDescription),title:i},i))}function u(e){let{item:t}=e;const n=(0,o._o)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.cC)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.$S)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const i=(0,o.d1)(t);return r.createElement("section",{className:(0,a.A)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},14152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(58168),a=(n(96540),n(15680)),o=n(3514),i=n(84142);const c={description:"Put a word to it."},l="Creating and Managing Concepts",s={unversionedId:"api-guide/concepts/README",id:"api-guide/concepts/README",title:"Creating and Managing Concepts",description:"Put a word to it.",source:"@site/docs/api-guide/concepts/README.mdx",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/",permalink:"/api-guide/concepts/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/concepts/README.mdx",tags:[],version:"current",frontMatter:{description:"Put a word to it."},sidebar:"tutorialSidebar",previous:{title:"Multilingual Classification",permalink:"/api-guide/predict/multilingual-classification"},next:{title:"Create, Get, Update, Delete",permalink:"/api-guide/concepts/create-get-update"}},p={},d=[{value:"Concept Best Practices",id:"concept-best-practices",level:2}],u={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"creating-and-managing-concepts"},"Creating and Managing Concepts"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Put a word to it")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Concepts are a known entity in the world. They are fundamental for annotating your data, for defining the vocabulary that a model should output, for relating things to each other, for receiving your predictions, for searching for these concepts, and more."),(0,a.yg)("p",null,"A concept is something that describes an input, similar to a \u201ctag\u201d or \u201ckeyword.\u201d The data in these concepts give the model something to \u201cobserve\u201d about the keyword, and learn from."),(0,a.yg)("p",null,'For example, a concept may be a "dog", a "cat", or a "tree". If you annotate some input data as having a "dog" or "cat" present, that provides the foundation for training a model on that data. A model could then be created with "dog" and "cat" in the list of concepts that it will learn to predict.'),(0,a.yg)("p",null,'After training, the model can predict the concepts "dog" and "cat" and you can search over your data for "dogs" and "cats" that the model identifies, or that have been annotated.'),(0,a.yg)("h2",{id:"concept-best-practices"},"Concept Best Practices"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Avoid special characters and spaces"),(0,a.yg)("li",{parentName:"ul"},"Avoid long concept names. Typically, 1-3 word concepts are best")),(0,a.yg)(o.A,{items:(0,i.$S)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);