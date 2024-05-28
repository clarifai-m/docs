"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2047],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={description:"Learn how to install the Clarifai SDKs",sidebar_position:1},i="Python SDK Installation Guide",l={unversionedId:"sdk/python-installation",id:"sdk/python-installation",title:"Python SDK Installation Guide",description:"Learn how to install the Clarifai SDKs",source:"@site/docs/sdk/python-installation.md",sourceDirName:"sdk",slug:"/sdk/python-installation",permalink:"/sdk/python-installation",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/python-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to install the Clarifai SDKs",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Organization and Teams",permalink:"/tutorials/organizations-and-teams"},next:{title:"Python API Reference",permalink:"/sdk/api-reference"}},s={},p=[{value:"Install the Package",id:"install-the-package",level:2},{value:"Installation from Source (for Development)",id:"installation-from-source-for-development",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"python-sdk-installation-guide"},"Python SDK Installation Guide"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Learn how to install the Clarifai Python SDK")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"Our new Python SDK empowers you to simplify data import, interact with our API in an object-oriented manner, quickly create apps, inputs, and datasets, easily consume models and workflows from the Clarifai community, and more. "),(0,r.yg)("p",null,"To consume the Clarifai API effortlessly and with just a few lines of code, the new Python SDK is all you need."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The current Python SDK version is ",(0,r.yg)("inlineCode",{parentName:"p"},"v10.2.1"))),(0,r.yg)("a",{href:"https://pypi.org/project/clarifai",target:"_blank"}," ",(0,r.yg)("img",{src:"https://img.shields.io/pypi/dm/clarifai",alt:"PyPI - Downloads"})," "),(0,r.yg)("h2",{id:"install-the-package"},"Install the Package"),(0,r.yg)("p",null,"You can install the latest stable version of the Python SDK package by using ",(0,r.yg)("inlineCode",{parentName:"p"},"pip"),"."),(0,r.yg)("p",null,"To install, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"pip install -U clarifai\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Install Clarifai SDKs through  ",(0,r.yg)("inlineCode",{parentName:"p"},'pip install "clarifai[all]"')," to use more optional libraries mentioned ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-python/blob/491d5444f5ae5da234012022e1ba4e83739242a4/setup.py"},"here"),".")),(0,r.yg)("h2",{id:"installation-from-source-for-development"},"Installation from Source (for Development)"),(0,r.yg)("p",null,"If you want to install from source for development purposes, follow these steps:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"git clone https://github.com/Clarifai/clarifai-python.git\ncd clarifai-python\npython3 -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt\npython setup.py install\n")),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"Clarifai uses Personal Access Tokens (PATs) to validate requests. You can create and manage PATs under your Clarifai account security settings. To set your PAT as an environment variable, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"export CLARIFAI_PAT={your personal access token}\n")))}y.isMDXComponent=!0}}]);