"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5227],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return a?t.createElement(m,i(i({ref:n},c),{},{components:a})):t.createElement(m,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},44890:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const o={title:"Node.js Installation Guide",sidebar_label:"Node.js SDK Installation Guide",sidebar_position:3},i=void 0,s={unversionedId:"sdk/node-js-installation",id:"sdk/node-js-installation",title:"Node.js Installation Guide",description:"npm",source:"@site/docs/sdk/node-js-installation.md",sourceDirName:"sdk",slug:"/sdk/node-js-installation",permalink:"/sdk/node-js-installation",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/node-js-installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Node.js Installation Guide",sidebar_label:"Node.js SDK Installation Guide",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Python API Reference",permalink:"/sdk/api-reference"},next:{title:"Node.js API Reference",permalink:"/sdk/node-api-reference/"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Next.js Server Components",id:"nextjs-server-components",level:3},{value:"Usage",id:"usage",level:2},{value:"Using Models",id:"using-models",level:3},{value:"Using Workflows",id:"using-workflows",level:3},{value:"Listing available apps in an user account",id:"listing-available-apps-in-an-user-account",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/clarifai-nodejs"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/npm/v/clarifai-nodejs",alt:"npm"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-nodejs/actions/workflows/build.yml"},(0,r.yg)("img",{parentName:"a",src:"https://github.com/Clarifai/clarifai-nodejs/actions/workflows/build.yml/badge.svg",alt:"Build"})),"\n",(0,r.yg)("a",{parentName:"p",href:"https://discord.com/invite/26upV8Y4Nd"},(0,r.yg)("img",{parentName:"a",src:"https://img.shields.io/discord/1145701543228735582",alt:"Discord"}))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This library is currently in developer preview, any improvements & feedback welcome!")),(0,r.yg)("h1",{id:"clarifai-nodejs-sdk"},"Clarifai Node.js SDK"),(0,r.yg)("p",null,"This is the official Node.js client for interacting with our powerful ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com"},"API"),". The Clarifai Node.js SDK offers a comprehensive set of tools to integrate Clarifai's AI platform to leverage computer vision capabilities like classification, detection, segmentation and natural language capabilities like classification, summarisation, generation, Q&A, etc into your applications. With just a few lines of code, you can leverage cutting-edge artificial intelligence to unlock valuable insights from visual and textual content."),(0,r.yg)("p",null,"Give the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-nodejs"},"repo a star \u2b50")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"npm install clarifai-nodejs\n")),(0,r.yg)("h3",{id:"nextjs-server-components"},"Next.js Server Components"),(0,r.yg)("p",null,"To use Clarifai Node.js in Next.js App Directory with server components, you will need to add ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-nodejs-grpc"},"clarifai-nodejs-grpc")," package (which is one of the primary dependency of Clarifai Node.js SDK) to the ",(0,r.yg)("a",{parentName:"p",href:"https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages"},"serverComponentsExternalPackages")," config of ",(0,r.yg)("inlineCode",{parentName:"p"},"next.config.js")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  experimental: {\n    serverComponentsExternalPackages: ['clarifai-nodejs-grpc'],\n  },\n}\n\nmodule.exports = nextConfig\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Clarifai uses ",(0,r.yg)("strong",{parentName:"p"},"Personal Access Tokens(PATs)")," to validate requests. You can create and manage PATs under your Clarifai account security settings."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,r.yg)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens/"},"Create PAT:")," ",(0,r.yg)("strong",{parentName:"li"},(0,r.yg)("em",{parentName:"strong"},"Log into Portal ","\u2192"," Profile Icon ","\u2192"," Security Settings ","\u2192"," Create Personal Access Token ","\u2192"," Set the scopes ","\u2192"," Confirm")))),(0,r.yg)("p",null,"Export your PAT as an environment variable. Then, import and initialize the API Client."),(0,r.yg)("p",null,"Set PAT as environment variable through terminal:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cmd"},"export CLARIFAI_PAT={your personal access token}\n")),(0,r.yg)("p",null,"or use ",(0,r.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," to load environment variables via a ",(0,r.yg)("inlineCode",{parentName:"p"},".env")," file"),(0,r.yg)("h3",{id:"using-models"},"Using Models"),(0,r.yg)("p",null,"Using the celebrity face recognition model to predict the celebrity in a given picture. For list of all available models visit ",(0,r.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models"},"clarifai models page"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { Input, Model } from "clarifai-nodejs";\n\nconst input = Input.getInputFromUrl({\n  inputId: "test-image",\n  imageUrl:\n    "https://samples.clarifai.com/celebrity.jpeg",\n});\n\nconst model = new Model({\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT!,\n    userId: process.env.CLARIFAI_USER_ID!,\n    appId: process.env.CLARIFAI_APP_ID!\n  },\n  modelId: "celebrity-face-recognition",\n});\n\nmodel\n  .predict({\n    inputs: [input],\n  })\n  .then((response) => {\n    const result = response?.[0].data?.conceptsList[0].name ?? "unrecognized";\n    console.log(result);\n  })\n  .catch(console.error);\n')),(0,r.yg)("h3",{id:"using-workflows"},"Using Workflows"),(0,r.yg)("p",null,"Using a custom workflow built on ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/"},"clarifai.com")," to analyze sentiment of a given image. For list of all available workflows visit ",(0,r.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/workflows"},"clarifai workflows page")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { Input, Workflow } from "clarifai-nodejs";\n\nconst input = Input.getInputFromUrl({\n  inputId: "test-image",\n  imageUrl:\n    "https://samples.clarifai.com/celebrity.jpeg",\n});\n\nconst workflow = new Workflow({\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT!,\n    userId: process.env.CLARIFAI_USER_ID!,\n    appId: process.env.CLARIFAI_APP_ID!\n  },\n  workflowId: "workflow-238a93",\n});\n\nworkflow\n  .predict({\n    inputs: [input],\n  })\n  .then((response) => {\n    const result =\n      response.resultsList[0].outputsList[0].data?.regionsList[0].data\n        ?.conceptsList[0].name ?? "unrecognized";\n    console.log(result);\n  })\n  .catch(console.error);\n')),(0,r.yg)("h3",{id:"listing-available-apps-in-an-user-account"},"Listing available apps in an user account"),(0,r.yg)("p",null,"On Clarifai, apps act as a central repository for models, datasets, inputs and other resources and information. Checkout how to create apps on ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application/"},"clarifai portal"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import { User } from "clarifai-nodejs";\n\nexport const user = new User({\n  pat: process.env.CLARIFAI_PAT!,\n  userId: process.env.CLARIFAI_USER_ID!,\n  appId: process.env.CLARIFAI_APP_ID!,\n});\n\nconst list = await user\n  .listApps({\n    pageNo: 1,\n    perPage: 20,\n    params: {\n      sortAscending: true,\n    },\n  })\n  .next();\n\nconst apps = list.value;\nconsole.log(apps);\n')),(0,r.yg)("p",null,"For full usage details, checkout our ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/nodejs-sdk/installation-guide/modules"},"API Reference docs")))}d.isMDXComponent=!0}}]);