"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9031],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>g});var o=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},y=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),y=n,g=u["".concat(l,".").concat(y)]||u[y]||h[y]||i;return t?o.createElement(g,r(r({ref:a},p),{},{components:t})):o.createElement(g,r({ref:a},p))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=y;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},10966:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(58168),n=(t(96540),t(15680));const i={description:"Learn about breaking changes to the use of PATs and API keys",sidebar_position:-5},r="Changes to Use of PATs and API Keys",s={unversionedId:"product-updates/upcoming-api-changes/pat-api-keys",id:"product-updates/upcoming-api-changes/pat-api-keys",title:"Changes to Use of PATs and API Keys",description:"Learn about breaking changes to the use of PATs and API keys",source:"@site/docs/product-updates/upcoming-api-changes/pat-api-keys.md",sourceDirName:"product-updates/upcoming-api-changes",slug:"/product-updates/upcoming-api-changes/pat-api-keys",permalink:"/product-updates/upcoming-api-changes/pat-api-keys",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/product-updates/upcoming-api-changes/pat-api-keys.md",tags:[],version:"current",sidebarPosition:-5,frontMatter:{description:"Learn about breaking changes to the use of PATs and API keys",sidebar_position:-5},sidebar:"tutorialSidebar",previous:{title:"Changes to Workflow Builder Model IDs",permalink:"/product-updates/upcoming-api-changes/workflow-builder-ids"},next:{title:"Deprecation of closed_environment in favor of enrich_dataset",permalink:"/product-updates/upcoming-api-changes/closed-environment"}},l={},c=[{value:"Date",id:"date",level:2},{value:"Change",id:"change",level:2},{value:"Details",id:"details",level:2},{value:"Terminology",id:"terminology",level:4},{value:"Why we are making this change",id:"why-we-are-making-this-change",level:4},{value:"What is changing",id:"what-is-changing",level:4}],p={toc:c},u="wrapper";function h(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,o.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"changes-to-use-of-pats-and-api-keys"},"Changes to Use of PATs and API Keys"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Learn about breaking changes to the use of PATs and API keys")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"date"},"Date"),(0,n.yg)("p",null,"March 30th, 2023"),(0,n.yg)("h2",{id:"change"},"Change"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Breaking change"),"\u2014Critical changes to the use of PATs and API keys"),(0,n.yg)("h2",{id:"details"},"Details"),(0,n.yg)("p",null,"An upcoming version of Clarifai\u2019s API, 9.3, will significantly change how personal access tokens (PATs) and API keys work. We plan to implement this change on March 30, 2023, providing 45 days to change the way your applications authenticate on our platform.  "),(0,n.yg)("h4",{id:"terminology"},"Terminology"),(0,n.yg)("p",null,"If any of the terms used here are unfamiliar, you can check them in our ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary"},"glossary"),". Specifically, we mention ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary#model"},"models"),", ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary#workflow"},"workflows"),", ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary/#public"},"public"),", ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary/#private"},"private"),", ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary/#collaboration"},"collaboration"),", ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary/#organization"},"organization"),", and ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/glossary/#community"},"community"),"."),(0,n.yg)("h4",{id:"why-we-are-making-this-change"},"Why we are making this change"),(0,n.yg)("p",null,"With PATs you can access resources for which you\u2019re a collaborator or teammate. You can also access public content shared by any user, in addition to all your private content across all of your apps. This simplifies the use of all the resources you have access to unlike using API keys that are restricted to a single application. PAT provides a consistent, secure, and robust authentication method. Finally, for Enterprise clients, Org functionality is PAT only and this change creates a consistent method of authentication across the platform."),(0,n.yg)("h4",{id:"what-is-changing"},"What is changing"),(0,n.yg)("p",null,"Previously, you could use API keys to access any model, concept, or workflow owned by the app scoped to the API key, as well as those owned by the user ",(0,n.yg)("inlineCode",{parentName:"p"},"clarifai")," in the application ",(0,n.yg)("inlineCode",{parentName:"p"},"main"),". Now, accessing models or workflows owned by ",(0,n.yg)("inlineCode",{parentName:"p"},"clarifai")," in the application ",(0,n.yg)("inlineCode",{parentName:"p"},"main")," can only be done with a PAT tied to your account. "),(0,n.yg)("p",null,"To be specific:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You must now use ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PATs")," to make API calls for resources that are outside the scope of your apps, such as Clarifai\u2019s models and workflows. While using a PAT, you must also specify the ",(0,n.yg)("inlineCode",{parentName:"p"},"USER_ID")," of the application owner, and the ",(0,n.yg)("inlineCode",{parentName:"p"},"APP_ID")," of the application that you\u2019re accessing. The legacy behavior allowed you to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"USER_ID")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"APP_ID"),' of any application on the platform to access Clarifai models and workflows in the app "main". This change requires you to specify the ',(0,n.yg)("inlineCode",{parentName:"p"},"USER_ID")," (clarifai) and ",(0,n.yg)("inlineCode",{parentName:"p"},"APP_ID")," (main) associated with the application containing the resource (model, concept, workflow, etc).")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You will no longer be able to use ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys"},"API keys")," to access resources outside the application the API key is created in. With a key, there is no need to specify the user_id or the app_id as they are already part of the key. API keys will function as normal when accessing resources within the application the key is created in, but will no longer allow access to resources owned by the user ",(0,n.yg)("inlineCode",{parentName:"p"},"clarifai")," in the application ",(0,n.yg)("inlineCode",{parentName:"p"},"main"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Since workflows are a collection of models, some of which may be references to models that are not in the same application as the workflow itself, you should also use PATs to interact with workflows. While API keys will still work for the time being for workflows in the same app as the API key that contains only models from that same app, this will be a very narrow use of workflows. Therefore, we recommend updating your code to use PATs when using workflows too.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"The preferred method for accessing the Clarifai API moving forward is with a PAT. To avoid potential future breakage we recommend using a PAT. Of course, we will provide prior notice if additional behavior is going to change for API keys."))),(0,n.yg)("p",null,"We hope and expect that this will not be a significant change for you. In order to implement it, you will need to ensure that you set the ",(0,n.yg)("inlineCode",{parentName:"p"},"PAT"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"USER_ID"),", and ",(0,n.yg)("inlineCode",{parentName:"p"},"APP_ID")," variables appropriately. There are examples using all of our supported languages on ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/predict/images"},"this page"),", and we are available at any time if you need assistance or have any questions."),(0,n.yg)("p",null,"The best place to contact us for support questions is our ",(0,n.yg)("a",{parentName:"p",href:"https://discord.gg/WgUvPK4pVD"},"Discord Server"),", which is monitored by many of our support teams and is the fastest way to get help."),(0,n.yg)("p",null,"We do apologize for any inconvenience this causes, however, we are confident that this is a positive change that will simplify the usage of the platform going forward and make it easier to leverage AI created by other people on our platform!"),(0,n.yg)("p",null,"Thank you for your understanding and please feel free to reach out for any help."))}h.isMDXComponent=!0}}]);