"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8732],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={description:"Learn how to install the Clarifai Python SDK",sidebar_position:1},i="Installation Guide",l={unversionedId:"python-sdk/sdk-overview",id:"python-sdk/sdk-overview",title:"Installation Guide",description:"Learn how to install the Clarifai Python SDK",source:"@site/docs/python-sdk/sdk-overview.md",sourceDirName:"python-sdk",slug:"/python-sdk/sdk-overview",permalink:"/python-sdk/sdk-overview",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/sdk-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to install the Clarifai Python SDK",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Organization and Teams",permalink:"/tutorials/organizations-and-teams"},next:{title:"API Reference",permalink:"/python-sdk/api-reference"}},s={},p=[{value:"Install the Package",id:"install-the-package",level:2},{value:"Installation from Source (for Development)",id:"installation-from-source-for-development",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"installation-guide"},"Installation Guide"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Learn how to install the Clarifai Python SDK")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Our new Python SDK empowers you to simplify data import, interact with our API in an object-oriented manner, quickly create apps, inputs, and datasets, easily consume models and workflows from the Clarifai community, and more. "),(0,a.yg)("p",null,"To consume the Clarifai API effortlessly and with just a few lines of code, the new Python SDK is all you need."),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"The current Python SDK version is ",(0,a.yg)("inlineCode",{parentName:"p"},"v10.2.1"))),(0,a.yg)("a",{href:"https://pypi.org/project/clarifai",target:"_blank"}," ",(0,a.yg)("img",{src:"https://img.shields.io/pypi/dm/clarifai",alt:"PyPI - Downloads"})," "),(0,a.yg)("h2",{id:"install-the-package"},"Install the Package"),(0,a.yg)("p",null,"You can install the latest stable version of the Python SDK package by using ",(0,a.yg)("inlineCode",{parentName:"p"},"pip"),"."),(0,a.yg)("p",null,"To install, run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"pip install -U clarifai\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Install Clarifai Python SDK through  ",(0,a.yg)("inlineCode",{parentName:"p"},'pip install "clarifai[all]"')," to use more optional libraries mentioned ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-python/blob/491d5444f5ae5da234012022e1ba4e83739242a4/setup.py"},"here"),".")),(0,a.yg)("h2",{id:"installation-from-source-for-development"},"Installation from Source (for Development)"),(0,a.yg)("p",null,"If you want to install from source for development purposes, follow these steps:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"git clone https://github.com/Clarifai/clarifai-python.git\ncd clarifai-python\npython3 -m venv .venv\nsource .venv/bin/activate\npip install -r requirements.txt\npython setup.py install\n")),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"Clarifai uses Personal Access Tokens (PATs) to validate requests. You can create and manage PATs under your Clarifai account security settings. To set your PAT as an environment variable, run:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"export CLARIFAI_PAT={your personal access token}\n")))}y.isMDXComponent=!0}}]);