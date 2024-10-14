"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[244],{13731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(74848),i=n(28453),o=n(3514),s=n(84142);const a={description:"Learn how to easily create and train new models"},l="Creating and Training Models",c={id:"portal-guide/model/README",title:"Creating and Training Models",description:"Learn how to easily create and train new models",source:"@site/docs/portal-guide/model/README.mdx",sourceDirName:"portal-guide/model",slug:"/portal-guide/model/",permalink:"/portal-guide/model/",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/README.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to easily create and train new models"},sidebar:"tutorialSidebar",previous:{title:"Create, Get, Update, Merge, and Delete",permalink:"/portal-guide/datasets/create-get-update-delete"},next:{title:"Clarifai Models",permalink:"/portal-guide/model/clarifai-models"}},d={},u=[];function m(e){const t={a:"a",h1:"h1",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"creating-and-training-models",children:"Creating and Training Models"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Learn how to easily create and train new models"})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(t.p,{children:"The Clarifai platform simplifies the entire process of creating and training AI models, making it incredibly easy and efficient. With just a single click, your model is not only trained but also automatically deployed, ready to enhance your business solutions instantly."}),"\n",(0,r.jsxs)(t.p,{children:["You can either ",(0,r.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/model/clarifai-models",children:"build custom models"})," tailored to your specific needs or jumpstart your projects with Clarifai's ",(0,r.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/model/pcustom-model-walkthrough",children:"pre-optimized models"}),", which are designed for immediate use."]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(83669).A+"",width:"271",height:"294"})})}),"\n","\n",(0,r.jsx)(o.A,{items:(0,s.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(96540);var r=n(18215),i=n(84142),o=n(28774),s=n(53465),a=n(16654),l=n(21312),c=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,i.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(96540),i=n(44586);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},83669:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/enlight-007484a47c7d0ce73a1cf6d4866ed349.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(96540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);