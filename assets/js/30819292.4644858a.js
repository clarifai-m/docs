"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7559],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Installation Guide",sidebar_label:"Installation Guide"},o=void 0,s={unversionedId:"nodejs-sdk/installation-guide/README",id:"nodejs-sdk/installation-guide/README",title:"Installation Guide",description:"npm",source:"@site/docs/nodejs-sdk/installation-guide/README.md",sourceDirName:"nodejs-sdk/installation-guide",slug:"/nodejs-sdk/installation-guide/",permalink:"/nodejs-sdk/installation-guide/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/nodejs-sdk/installation-guide/README.md",tags:[],version:"current",frontMatter:{title:"Installation Guide",sidebar_label:"Installation Guide"},sidebar:"tutorialSidebar",previous:{title:"Building RAG with DSPy",permalink:"/integrations/DSPy/rag-dspy"},next:{title:"App",permalink:"/nodejs-sdk/installation-guide/classes/App"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Next.js Server Components",id:"nextjs-server-components",level:3},{value:"Usage",id:"usage",level:2},{value:"Using Models",id:"using-models",level:3},{value:"Using Workflows",id:"using-workflows",level:3},{value:"Listing available apps in an user account",id:"listing-available-apps-in-an-user-account",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/clarifai-nodejs"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/clarifai-nodejs",alt:"npm"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-nodejs/actions/workflows/build.yml"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/Clarifai/clarifai-nodejs/actions/workflows/build.yml/badge.svg",alt:"Build"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/26upV8Y4Nd"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/1145701543228735582",alt:"Discord"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This library is currently in developer preview, any improvements & feedback welcome!")),(0,r.kt)("h1",{id:"clarifai-nodejs-sdk"},"Clarifai Node.js SDK"),(0,r.kt)("p",null,"This is the official Node.js client for interacting with our powerful ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com"},"API"),". The Clarifai Node.js SDK offers a comprehensive set of tools to integrate Clarifai's AI platform to leverage computer vision capabilities like classification, detection, segmentation and natural language capabilities like classification, summarisation, generation, Q&A, etc into your applications. With just a few lines of code, you can leverage cutting-edge artificial intelligence to unlock valuable insights from visual and textual content."),(0,r.kt)("p",null,"Give the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-nodejs"},"repo a star \u2b50")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install clarifai-nodejs\n")),(0,r.kt)("h3",{id:"nextjs-server-components"},"Next.js Server Components"),(0,r.kt)("p",null,"To use Clarifai Node.js in Next.js App Directory with server components, you will need to add ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-nodejs-grpc"},"clarifai-nodejs-grpc")," package (which is one of the primary dependency of Clarifai Node.js SDK) to the ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages"},"serverComponentsExternalPackages")," config of ",(0,r.kt)("inlineCode",{parentName:"p"},"next.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  experimental: {\n    serverComponentsExternalPackages: ['clarifai-nodejs-grpc'],\n  },\n}\n\nmodule.exports = nextConfig\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Clarifai uses ",(0,r.kt)("strong",{parentName:"p"},"Personal Access Tokens(PATs)")," to validate requests. You can create and manage PATs under your Clarifai account security settings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd17 ",(0,r.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens/"},"Create PAT:")," ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Log into Portal ","\u2192"," Profile Icon ","\u2192"," Security Settings ","\u2192"," Create Personal Access Token ","\u2192"," Set the scopes ","\u2192"," Confirm")))),(0,r.kt)("p",null,"Export your PAT as an environment variable. Then, import and initialize the API Client."),(0,r.kt)("p",null,"Set PAT as environment variable through terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cmd"},"export CLARIFAI_PAT={your personal access token}\n")),(0,r.kt)("p",null,"or use ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv")," to load environment variables via a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,r.kt)("h3",{id:"using-models"},"Using Models"),(0,r.kt)("p",null,"Using the celebrity face recognition model to predict the celebrity in a given picture. For list of all available models visit ",(0,r.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/models"},"clarifai models page"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Input, Model } from "clarifai-nodejs";\n\nconst input = Input.getInputFromUrl({\n  inputId: "test-image",\n  imageUrl:\n    "https://samples.clarifai.com/celebrity.jpeg",\n});\n\nconst model = new Model({\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT!,\n    userId: process.env.CLARIFAI_USER_ID!,\n    appId: process.env.CLARIFAI_APP_ID!\n  },\n  modelId: "celebrity-face-recognition",\n});\n\nmodel\n  .predict({\n    inputs: [input],\n  })\n  .then((response) => {\n    const result = response?.[0].data?.conceptsList[0].name ?? "unrecognized";\n    console.log(result);\n  })\n  .catch(console.error);\n')),(0,r.kt)("h3",{id:"using-workflows"},"Using Workflows"),(0,r.kt)("p",null,"Using a custom workflow built on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/"},"clarifai.com")," to analyze sentiment of a given image. For list of all available workflows visit ",(0,r.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/workflows"},"clarifai workflows page")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Input, Workflow } from "clarifai-nodejs";\n\nconst input = Input.getInputFromUrl({\n  inputId: "test-image",\n  imageUrl:\n    "https://samples.clarifai.com/celebrity.jpeg",\n});\n\nconst workflow = new Workflow({\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT!,\n    userId: process.env.CLARIFAI_USER_ID!,\n    appId: process.env.CLARIFAI_APP_ID!\n  },\n  workflowId: "workflow-238a93",\n});\n\nworkflow\n  .predict({\n    inputs: [input],\n  })\n  .then((response) => {\n    const result =\n      response.resultsList[0].outputsList[0].data?.regionsList[0].data\n        ?.conceptsList[0].name ?? "unrecognized";\n    console.log(result);\n  })\n  .catch(console.error);\n')),(0,r.kt)("h3",{id:"listing-available-apps-in-an-user-account"},"Listing available apps in an user account"),(0,r.kt)("p",null,"On Clarifai, apps act as a central repository for models, datasets, inputs and other resources and information. Checkout how to create apps on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application/"},"clarifai portal"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { User } from "clarifai-nodejs";\n\nexport const user = new User({\n  pat: process.env.CLARIFAI_PAT!,\n  userId: process.env.CLARIFAI_USER_ID!,\n  appId: process.env.CLARIFAI_APP_ID!,\n});\n\nconst list = await user\n  .listApps({\n    pageNo: 1,\n    perPage: 20,\n    params: {\n      sortAscending: true,\n    },\n  })\n  .next();\n\nconst apps = list.value;\nconsole.log(apps);\n')),(0,r.kt)("p",null,"For full usage details, checkout our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/nodejs-sdk/installation-guide/modules"},"API Reference docs")))}d.isMDXComponent=!0}}]);