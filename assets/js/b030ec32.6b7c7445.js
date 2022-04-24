"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5696],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37630:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={description:"Manage your labeling workforce.",sidebar_position:5},s="Workforce Management",c={unversionedId:"portal-guide/annotate/workforce-management",id:"portal-guide/annotate/workforce-management",title:"Workforce Management",description:"Manage your labeling workforce.",source:"@site/docs/portal-guide/annotate/workforce-management.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/workforce-management",permalink:"/portal-guide/annotate/workforce-management",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/annotate/workforce-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Manage your labeling workforce.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"AI Assist",permalink:"/portal-guide/annotate/ai-assist"},next:{title:"Review",permalink:"/portal-guide/annotate/review"}},u=[{value:"All tasks",id:"all-tasks",children:[],level:2},{value:"Assigned to me",id:"assigned-to-me",children:[],level:2},{value:"For Review",id:"for-review",children:[],level:2},{value:"Stats",id:"stats",children:[],level:2},{value:"Metrics V2",id:"metrics-v2",children:[],level:2}],p={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workforce-management"},"Workforce Management"),(0,o.kt)("p",null,"Labeler provides a variety of workforce management tools that help your company to distribute and manage labeling tasks. In labeling mode, you can view all related tasks, activities and statistics for your application."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(16521).Z})),(0,o.kt)("h2",{id:"all-tasks"},"All tasks"),(0,o.kt)("p",null,'A listing of all tasks associated with a given app. You can add new tasks by clicking the "create task" button in the upper right hand corner of the screen.'),(0,o.kt)("h2",{id:"assigned-to-me"},"Assigned to me"),(0,o.kt)("p",null,"A listing of all tasks assigned to the current user of the app."),(0,o.kt)("h2",{id:"for-review"},"For Review"),(0,o.kt)("p",null,'{% embed url="',(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/Py2NuRNicTY%22"},'https://youtu.be/Py2NuRNicTY"'),' caption="Clarifai Labeler: Review Work" %}'),(0,o.kt)("p",null,"A listing of all tasks to be reviewed by the current user of the app."),(0,o.kt)("h2",{id:"stats"},"Stats"),(0,o.kt)("p",null,"Stats provide performance metrics for your team."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Select time")," - Choose the time interval that you would like to use to measure performance ","(","hour, day, week, month, year",")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Collaborators")," - All collaborators that have been added to an app"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tasks")," - All assigned tasks associated with an app"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Labels created")," - Total labels created"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Time per label")," - Time per label"),(0,o.kt)("h2",{id:"metrics-v2"},"Metrics V2"),(0,o.kt)("p",null,"Click the Metrics V2 tab under the Labeler tab to view worker performance for each of your tasks. You can  review task inputs that are approved, awaiting review or rejected, and you can review performance trends for each of your labelers over time. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Metrics V2",src:r(26335).Z})))}d.isMDXComponent=!0},16521:function(e,t,r){t.Z=r.p+"assets/images/review-9c551cd1bd4d99b21b30652a0354afc9.jpg"},26335:function(e,t,r){t.Z=r.p+"assets/images/task-reporter-9f55f19a7b49653a85292ae53c6ab54b.jpg"}}]);