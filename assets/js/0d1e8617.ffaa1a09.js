"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3986],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),i=r(86010),o=r(53438),a=r(39960),l=r(13919),c=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:a},a))}function d(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},27654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905)),o=r(52991),a=r(53438);const l={sidebar_position:8},c="Model Training Tutorial",s={unversionedId:"python-sdk/Model-Training-Tutorial/README",id:"python-sdk/Model-Training-Tutorial/README",title:"Model Training Tutorial",description:"Learn how to train a model using Clarifai Python SDK",source:"@site/docs/python-sdk/Model-Training-Tutorial/README.mdx",sourceDirName:"python-sdk/Model-Training-Tutorial",slug:"/python-sdk/Model-Training-Tutorial/",permalink:"/python-sdk/Model-Training-Tutorial/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/Model-Training-Tutorial/README.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Inference from Workflows",permalink:"/python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/"},next:{title:"Clusterer",permalink:"/python-sdk/Model-Training-Tutorial/clusterer"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"model-training-tutorial"},"Model Training Tutorial"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to train a model using Clarifai Python SDK")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Model training using the Clarifai Python SDK involves the utilization of Clarifai's powerful and user-friendly software development kit to create, train, and fine-tune machine-learning models for various tasks. The Clarifai Python SDK simplifies the process of incorporating cutting-edge machine learning capabilities into your applications, making it accessible for developers with different levels of expertise."),(0,i.kt)("p",null,"The Clarifai Python SDK allows you to define and configure your custom models, tailoring them to specific recognition requirements. Whether you're working on image classification, object detection, or any other task, Clarifai's Python SDK empowers you to design models that align with your application's unique needs.After defining the model architecture, you can initiate the training process using the Clarifai Python  SDK. Clarifai's platform employs state-of-the-art algorithms and deep learning techniques to iteratively improve model performance over time. During training, the SDK provides valuable feedback on the model's progress, allowing you to monitor metrics such as accuracy and loss."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting up  the Clarifai Python SDK along with PAT . Refer the installation and configuration with PAT token ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/python-sdk/sdk-overview/"},"here"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Guide to get your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the Clarifai Examples repository to get the data files required for the training demo.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"!git clone https://github.com/Clarifai/examples.git\n%cd /content/examples/\n")),(0,i.kt)(o.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);