"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[568],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return a?o.createElement(h,i(i({ref:t},c),{},{components:a})):o.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={description:"Extend Clarifai\u2019s UIs and perform customized backend processing"},i="Modules",s={unversionedId:"portal-guide/modules/README",id:"portal-guide/modules/README",title:"Modules",description:"Extend Clarifai\u2019s UIs and perform customized backend processing",source:"@site/docs/portal-guide/modules/README.mdx",sourceDirName:"portal-guide/modules",slug:"/portal-guide/modules/",permalink:"/portal-guide/modules/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/modules/README.mdx",tags:[],version:"current",frontMatter:{description:"Extend Clarifai\u2019s UIs and perform customized backend processing"},sidebar:"tutorialSidebar",previous:{title:"Text Classification",permalink:"/portal-guide/workflows/common-workflows/custom-text-walkthrough"},next:{title:"Create and Install Modules",permalink:"/portal-guide/modules/create-install"}},l={},u=[{value:"Modules UI Integration",id:"modules-ui-integration",level:2},{value:"Modules Features",id:"modules-features",level:2},{value:"Examples",id:"examples",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modules"},"Modules"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extend Clarifai\u2019s UIs and perform customized backend processing")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Modules are custom plugins that provide both UI elements and the ability to perform some computation around our API. Modules enable you to extend the Clarifai UIs, augment backend processing capabilities, and build customized solutions quickly and easily. "),(0,n.kt)("p",null,"They offer flexibility, integration possibilities, scalability, and the opportunity to tailor the Clarifai platform to specific use cases, empowering you to deliver enhanced experiences and value to your machine learning projects. "),(0,n.kt)("p",null,"With modules, you can build a complete AI solution in your app\u2014alongside the inputs, datasets, concepts, models, workflows, and other AI resources needed to solve a problem. "),(0,n.kt)("p",null," ",(0,n.kt)("img",{alt:"modules manager page",src:a(50902).Z,width:"3192",height:"1818"})),(0,n.kt)("h2",{id:"modules-ui-integration"},"Modules UI Integration"),(0,n.kt)("p",null,"Modules are integrated into our overall UI in a composable way. They are implemented as Python programs that should be treated as API clients to our API."),(0,n.kt)("p",null,"After integration, modules have sidebar entries that show up on the portal\u2019s collapsible left sidebar, just like the rest of our other navigation entries."),(0,n.kt)("p",null,"We currently support creating modules using Streamlit, which is an open-source, Python-based framework that lets you create interactive web applications for data science and machine learning projects. The framework is designed to simplify the process of building and sharing custom web applications by providing a straightforward and intuitive interface."),(0,n.kt)("p",null,"At launch, we have focused on Streamlit. Nonetheless, our modules are flexible enough to integrate with other UI frameworks that render from the server side in the future. Please let us know which other ones you\u2019d love to see. "),(0,n.kt)("h2",{id:"modules-features"},"Modules Features"),(0,n.kt)("p",null,"Here are some notable features of Clarifai modules."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"UI Extension"))),(0,n.kt)("p",null,"Modules allow you to seamlessly integrate custom functionality into the Clarifai user interface (UI). You can create modules that add new features, widgets, or views to the UI, providing users with an expanded set of tools and options. This extensibility enables you to tailor the Clarifai UI to match your specific requirements or industry needs."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Custom Workflows"))),(0,n.kt)("p",null,"With modules, you can design and implement custom workflows within the Clarifai platform. You have the flexibility to define specific steps, actions, or processes that users can execute within the UI. This capability enables you to create streamlined and efficient workflows that align with your unique business processes or use cases."),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Backend Processing"))),(0,n.kt)("p",null,"Modules also empower you to perform backend processing tasks within the Clarifai infrastructure\u2014leveraging the power and ecosystem of Python. You can develop modules that integrate with the Clarifai API, enabling advanced data processing, analysis, or model training. This functionality allows you to create, share, and use your AI resources within the Clarifai\u2019s AI Lake while maintaining control and customization of the experience."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Integration with External Systems"))),(0,n.kt)("p",null,"Modules can facilitate seamless integration with external systems and services. You can create modules that interact with other APIs or data sources, enabling data exchange, synchronization, or integration with third-party tools. This integration capability enhances the interoperability of the Clarifai platform and expands its potential use cases."),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Tailored Solutions"))),(0,n.kt)("p",null,"By leveraging modules, you can build tailored solutions on top of the Clarifai platform. You have the freedom to develop modules that address specific business needs, industry requirements, or niche use cases. This customization allows you to deliver unique value propositions to your users or customers, setting you apart from competitors."),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Developer Community and Ecosystem"))),(0,n.kt)("p",null,"Modules foster an active developer community and ecosystem around the Clarifai platform. Users can create and share their modules, contributing to a rich library of reusable components and solutions. This collaborative environment encourages innovation, knowledge sharing, and the development of diverse applications that extend the capabilities of the Clarifai platform."),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Scalability and Future-Proofing"))),(0,n.kt)("p",null,"With modules, you can design your solutions with scalability and future-proofing in mind. You can architect modules that can adapt and evolve as your business needs change, or as the Clarifai platform evolves. This scalability ensures that your custom functionalities and integrations remain compatible and effective over time."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://clarifai.com/meta/Llama-2/installed_module_versions/LLM_Battleground/compare"},"LLM Battleground"),"\u2014Evaluate and compare multiple Large Language Models (LLMs) simultaneously. You do not need to log in to start using it. Learn how to use it ",(0,n.kt)("a",{parentName:"li",href:"https://www.clarifai.com/blog/compare-top-llms-with-llm-battleground"},"here"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://clarifai.com/clarifai/generative-ai/installed_module_versions/module-chatbot"},"Chatbot"),"\u2014A conversational chatbot that remembers the conversation as you go."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://clarifai.com/clarifai/geoint-demo-3/installed_module_versions/docQA"},"DocQA"),"\u2014Upload documents such as PDFs and chat with your data. Watch this ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HbuOu9zq2UE"},"video")," to see it in action. You can also learn how to use it ",(0,n.kt)("a",{parentName:"li",href:"https://www.clarifai.com/blog/doc-qa-revolutionizing-document-analysis"},"here"),".")))}p.isMDXComponent=!0},50902:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/modules_homepage-9af00c9b6790deafda130bdd5302a85e.png"}}]);