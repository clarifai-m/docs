"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4619],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={description:"Manage your labeling workforce.",sidebar_position:6},i="Workforce Management",l={unversionedId:"portal-guide/annotate/workforce-management",id:"portal-guide/annotate/workforce-management",title:"Workforce Management",description:"Manage your labeling workforce.",source:"@site/docs/portal-guide/annotate/workforce-management.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/workforce-management",permalink:"/portal-guide/annotate/workforce-management",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/annotate/workforce-management.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Manage your labeling workforce.",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"AI-Assisted Labeling",permalink:"/portal-guide/annotate/ai-assist"},next:{title:"Review",permalink:"/portal-guide/annotate/review"}},s={},c=[{value:"All tasks",id:"all-tasks",level:2},{value:"Assigned to me",id:"assigned-to-me",level:2},{value:"For Review",id:"for-review",level:2},{value:"Stats",id:"stats",level:2},{value:"Metrics V2",id:"metrics-v2",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"workforce-management"},"Workforce Management"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Manage your labeling workforce")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Labeler provides a variety of workforce management tools that help your company to distribute and manage labeling tasks. In labeling mode, you can view all related tasks, activities and statistics for your application."),(0,n.yg)("p",null,(0,n.yg)("img",{src:r(82013).A,width:"1920",height:"1080"})),(0,n.yg)("h2",{id:"all-tasks"},"All tasks"),(0,n.yg)("p",null,'A listing of all tasks associated with a given app. You can add new tasks by clicking the "create task" button in the upper right hand corner of the screen.'),(0,n.yg)("h2",{id:"assigned-to-me"},"Assigned to me"),(0,n.yg)("p",null,"A listing of all tasks assigned to the current user of the app."),(0,n.yg)("h2",{id:"for-review"},"For Review"),(0,n.yg)("iframe",{width:"900",height:"500",src:"https://www.youtube.com/embed/Py2NuRNicTY",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.yg)("p",null,"A listing of all tasks to be reviewed by the current user of the app."),(0,n.yg)("h2",{id:"stats"},"Stats"),(0,n.yg)("p",null,"Stats provide performance metrics for your team."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Select time")," - Choose the time interval that you would like to use to measure performance ","(","hour, day, week, month, year",")"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Collaborators")," - All collaborators that have been added to an app"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Tasks")," - All assigned tasks associated with an app"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Labels created")," - Total labels created"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Time per label")," - Time per label"),(0,n.yg)("h2",{id:"metrics-v2"},"Metrics V2"),(0,n.yg)("p",null,"Click the Metrics V2 tab under the Labeler tab to view worker performance for each of your tasks. You can  review task inputs that are approved, awaiting review or rejected, and you can review performance trends for each of your labelers over time. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Metrics V2",src:r(22494).A,width:"1000",height:"562"})))}g.isMDXComponent=!0},82013:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/review-9c551cd1bd4d99b21b30652a0354afc9.jpg"},22494:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/task-reporter-9f55f19a7b49653a85292ae53c6ab54b.jpg"}}]);