"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7352],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),f=r,h=g["".concat(s,".").concat(f)]||g[f]||u[f]||i;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const i={description:"Learn about integrating Clarifai With LangChain"},o="Integrating Clarifai With LangChain",l={unversionedId:"integrations/langchain/README",id:"integrations/langchain/README",title:"Integrating Clarifai With LangChain",description:"Learn about integrating Clarifai With LangChain",source:"@site/docs/integrations/langchain/README.mdx",sourceDirName:"integrations/langchain",slug:"/integrations/langchain/",permalink:"/integrations/langchain/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/langchain/README.mdx",tags:[],version:"current",frontMatter:{description:"Learn about integrating Clarifai With LangChain"},sidebar:"tutorialSidebar",previous:{title:"Python SDK Notebook Examples",permalink:"/sdk/notebook-examples"},next:{title:"LLM Models",permalink:"/integrations/langchain/llm-models"}},s={},c=[],p={toc:c},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"integrating-clarifai-with-langchain"},"Integrating Clarifai With LangChain"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Unlock the full potential of large language models")),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://langchain.com"},"LangChain")," is an open-source framework that  simplifies the creation of applications using large language models (LLMs). It is designed to help you in crafting cutting-edge applications that seamlessly blend the prowess of LLMs with diverse computational resources and knowledge bases."),(0,r.yg)("p",null,"Clarifai offers an all-encompassing platform that covers the complete AI lifecycle\u2014from data exploration to inferencing. Notably, Clarifai offers support for LLMs, embeddings, and a vector store within a single, production-scale platform."),(0,r.yg)("p",null,"LLMs are a transformative technology. However, relying on LLMs in isolation, while impressive, often falls short of unleashing their full potential. Their true power shines when they are combined with other sources of computation and knowledge."),(0,r.yg)("p",null,"You can take advantage of LangChain\u2019s ability to streamline the complex processes involved in creating LLM applications and Clarifai\u2019s rich AI infrastructure to take your natural language-based applications to unprecedented heights. "),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.clarifai.com/blog/linking-up-clarifai-with-langchain-integration"},"Integrating Clarifai with LangChain")," is an excellent choice to operationalize your LangChain implementations and advance the frontiers of what\u2019s possible with LLMs."),(0,r.yg)("p",null,"Your integrations might involve building prompt templates, text output processors, creating chains within tasks, developing agents, retrievers, and many more."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"You can learn more about integrating Clarifai with LangChain ",(0,r.yg)("a",{parentName:"p",href:"https://python.langchain.com/docs/integrations/providers/clarifai"},"here"),". ")))}u.isMDXComponent=!0}}]);