"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1613],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,y=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},19285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));const i={description:"Review the work performed by your labelers.",sidebar_position:7},o="Review",l={unversionedId:"portal-guide/annotate/review",id:"portal-guide/annotate/review",title:"Review",description:"Review the work performed by your labelers.",source:"@site/docs/portal-guide/annotate/review.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/review",permalink:"/portal-guide/annotate/review",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/annotate/review.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Review the work performed by your labelers.",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Workforce Management",permalink:"/portal-guide/annotate/workforce-management"},next:{title:"Training Data",permalink:"/portal-guide/annotate/training-data"}},s={},u=[{value:"Manual Review",id:"manual-review",level:2},{value:"Input View",id:"input-view",level:3},{value:"Annotator View",id:"annotator-view",level:3},{value:"Consensus Review",id:"consensus-review",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(p,(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"review"},"Review"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Review the work performed by your labelers")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"Clarifai provides many useful tools and features to help you manage your labeling workforce and review their work for quality control and training purposes."),(0,r.yg)("p",null,"When you create a new task, you can chose between two review strategies:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Manual Review")," - Review and approve each labeled input individually."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Consensus Review")," - If you have multiple labelers who are each labeling the same inputs, you can use consensus review to help automate the process of reviewing your labelers work. Consensus review will automatically identify cases where your reviewers agree on a given label, so that you can quickly approve labels where multiple labelers agree.")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"tasks for review",src:a(80080).A,width:"1000",height:"562"})),(0,r.yg)("h2",{id:"manual-review"},"Manual Review"),(0,r.yg)("p",null,'Manual review lets you either spot check your labeler work, or review each individual input that a labeler has worked on. Just select "Manual" under Review Strategy. You will also need to select a reviewer for your task, this can be you or another one of your collaborators.'),(0,r.yg)("p",null,"Adjusting the sample size will give you a subset of the total labeled dataset for review. This is so that you can get an impression of your labeler's work, and then approve or reject their entire labeling task based on this impression. Please note that if you select a sample size that is less than 100%, you will not be able to approve or reject individual labels."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"manual review strategy",src:a(94390).A,width:"1000",height:"562"})),(0,r.yg)("p",null,"When you click on your review tasks under the review tab, you will be taken to a view where you can review and approve each labeled input. You can add additional annotations yourself in this view."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"manual review strategy",src:a(94390).A,width:"1000",height:"562"})),(0,r.yg)("h3",{id:"input-view"},"Input View"),(0,r.yg)("p",null,"From the input view, you can view each labeled input in a large view port. Individual annotations are highlighted for each bounding box and each image. Corresponding labels are outlined in righthand sidebar, where you can add, edit, or delete annotations."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"manual review",src:a(73606).A,width:"1000",height:"562"})),(0,r.yg)("h3",{id:"annotator-view"},"Annotator View"),(0,r.yg)("p",null,"In the annotator view, you will be able to view multiple labeled inputs at once, and accept or reject labels in bulk. You can toggle back and forth between the labels created by your individual labelers. Labeled inputs are grouped by concept for convenience."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"annotator view",src:a(76151).A,width:"1000",height:"522"})),(0,r.yg)("h2",{id:"consensus-review"},"Consensus Review"),(0,r.yg)("p",null,"Consensus review is a fantastic tool if your labeling task involves multiple labelers labeling the same data set. Consensus review will automatically detect when your labelers have annotated an input in the same way, so that you can approve labels quickly without reviewing the individual work of each labeler."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"consensus review strategy",src:a(48889).A,width:"1000",height:"562"})),(0,r.yg)("p",null,'You will see a "worker" tab in the righthand sidebar when reviewing labels. Any time the annotations of more than one worker agree you will see a double check mark next to the concept. You can approve labels that have been added by one worker, or even reject the labels of all of your workers if the labels do not meet your quality standards.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"consensus review",src:a(93311).A,width:"1000",height:"562"})))}d.isMDXComponent=!0},76151:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/annotator-view-61caacdcdad018a3267ba59376300030.jpg"},48889:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/consensus-review-strategy-10ce6070851f011b443fe33f35d7d1ab.jpg"},93311:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/consensus-review-0b8d47d7d7e27fa7d0df118ceb025f6b.jpg"},94390:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/manual-review-strategy-52f9c62d20fa2e488b653767d4604c4b.jpg"},73606:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/manual-review-435a23cf44ad31b307bdd1a192d36d97.jpg"},80080:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/tasks-for-review-f65c951ef4dcd24a3b28887e52383774.jpg"}}]);