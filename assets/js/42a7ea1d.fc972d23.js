"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},75284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={description:"Learn about integrating Clarifai With LlamaIndex"},o="Integrating Clarifai With LlamaIndex",l={unversionedId:"integrations/llamaindex/README",id:"integrations/llamaindex/README",title:"Integrating Clarifai With LlamaIndex",description:"Learn about integrating Clarifai With LlamaIndex",source:"@site/docs/integrations/llamaindex/README.mdx",sourceDirName:"integrations/llamaindex",slug:"/integrations/llamaindex/",permalink:"/integrations/llamaindex/",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about integrating Clarifai With LlamaIndex"},sidebar:"tutorialSidebar",previous:{title:"Vector Store",permalink:"/integrations/langchain/vector-store"},next:{title:"LLM Models",permalink:"/integrations/llamaindex/llm-models"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrating-clarifai-with-llamaindex"},"Integrating Clarifai With LlamaIndex"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unlock the full potential of large language models")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.llamaindex.ai/"},"LlamaIndex")," is an open-source framework designed to help you unleash the power of large language models (LLMs) over your data.\nInstead of using LLMs in isolation, you can unlock their full potential as a cutting-edge technology by combining them with other sources of computation and knowledge."),(0,r.kt)("p",null,"LLMs are often pre-trained on publicly available data, but not on your own private or specific data. Therefore, they may not perform well on a specific problem you\u2019re trying to solve. LlamaIndex lets you augment your LLM applications with your private or domain-specific data and boost their accuracy. "),(0,r.kt)("p",null,"You can use LlamaIndex for various use cases, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ingesting, structuring, and accessing external data to use with LLM applications. "),(0,r.kt)("li",{parentName:"ul"},"Building an embeddings query interface that accepts any input prompt and leverages your data to provide knowledge-augmented responses."),(0,r.kt)("li",{parentName:"ul"},"Storing and indexing your data for various purposes, including integrating with downstream vector search and database services.")),(0,r.kt)("p",null,"Integrating Clarifai with LlamaIndex offers an exceptional opportunity to tap into Clarifai\u2019s rich AI infrastructure and build accurate and powerful LLM applications. "),(0,r.kt)("p",null,"Through this integration, you can use LlamaIndex to interact with Clarifai LLM models for a wide range of tasks, such as getting answers over unstructured data and building data augmented chatbots. You can also create text embeddings that can facilitate tasks such as semantic search."))}d.isMDXComponent=!0}}]);