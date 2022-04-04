"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9749],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return w}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),w=r,v=d["".concat(s,".").concat(w)]||d[w]||p[w]||o;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7848:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={description:"Review the work performed by your labelers.",sidebar_position:6},s="Review",u={unversionedId:"portal-guide/annotate/review",id:"portal-guide/annotate/review",title:"Review",description:"Review the work performed by your labelers.",source:"@site/docs/portal-guide/annotate/review.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/review",permalink:"/docs/portal-guide/annotate/review",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/annotate/review.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Review the work performed by your labelers.",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Workforce Management",permalink:"/docs/portal-guide/annotate/workforce-management"},next:{title:"Training Data",permalink:"/docs/portal-guide/annotate/training-data"}},c=[{value:"Manual Review",id:"manual-review",children:[{value:"Input View",id:"input-view",children:[],level:3},{value:"Annotator View",id:"annotator-view",children:[],level:3}],level:2},{value:"Consensus Review",id:"consensus-review",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"review"},"Review"),(0,o.kt)("p",null,"Clarifai provides many useful tools and features to help you manage your labeling workforce and review their work for quality control and training purposes."),(0,o.kt)("p",null,"When you create a new task, you can chose between two review strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Manual Review")," - Review and approve each labeled input individually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Consensus Review")," - If you have multiple labelers who are each labeling the same inputs, you can use consensus review to help automate the process of reviewing your labelers work. Consensus review will automatically identify cases where your reviewers agree on a given label, so that you can quickly approve labels where multiple labelers agree.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/Clarifai/docs/tree/7e99cb3b97df935e4b39bee27cb9ae0ecb3c8c67/.gitbook/assets/tasks-for-review.jpg",alt:"tasks for review"})),(0,o.kt)("h2",{id:"manual-review"},"Manual Review"),(0,o.kt)("p",null,'Manual review lets you either spot check your labeler work, or review each individual input that a labeler has worked on. Just select "Manual" under Review Strategy. You will also need to select a reviewer for your task, this can be you or another one of your collaborators.'),(0,o.kt)("p",null,"Adjusting the sample size will give you a subset of the total labeled dataset for review. This is so that you can get an impression of your labeler's work, and then approve or reject their entire labeling task based on this impression. Please note that if you select a sample size that is less than 100%, you will not be able to approve or reject individual labels."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"manual review strategy",src:n(2146).Z})),(0,o.kt)("p",null,"When you click on your review tasks under the review tab, you will be taken to a view where you can review and approve each labeled input. You can add additional annotations yourself in this view."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"manual review strategy",src:n(2146).Z})),(0,o.kt)("h3",{id:"input-view"},"Input View"),(0,o.kt)("p",null,"From the input view, you can view each labeled input in a large view port. Individual annotations are highlighted for each bounding box and each image. Corresponding labels are outlined in righthand sidebar, where you can add, edit, or delete annotations."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"manual review",src:n(8246).Z})),(0,o.kt)("h3",{id:"annotator-view"},"Annotator View"),(0,o.kt)("p",null,"In the annotator view, you will be able to view multiple labeled inputs at once, and accept or reject labels in bulk. You can toggle back and forth between the labels created by your individual labelers. Labeled inputs are grouped by concept for convenience."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"annotator view",src:n(9025).Z})),(0,o.kt)("h2",{id:"consensus-review"},"Consensus Review"),(0,o.kt)("p",null,"Consensus review is a fantastic tool if your labeling task involves multiple labelers labeling the same data set. Consensus review will automatically detect when your labelers have annotated an input in the same way, so that you can approve labels quickly without reviewing the individual work of each labeler."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"consensus review strategy",src:n(3519).Z})),(0,o.kt)("p",null,'You will see a "worker" tab in the righthand sidebar when reviewing labels. Any time the annotations of more than one worker agree you will see a double check mark next to the concept. You can approve labels that have been added by one worker, or even reject the labels of all of your workers if the labels do not meet your quality standards.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"consensus review",src:n(8923).Z})))}d.isMDXComponent=!0},9025:function(e,t,n){t.Z=n.p+"assets/images/annotator-view-61caacdcdad018a3267ba59376300030.jpg"},3519:function(e,t,n){t.Z=n.p+"assets/images/consensus-review-strategy-10ce6070851f011b443fe33f35d7d1ab.jpg"},8923:function(e,t,n){t.Z=n.p+"assets/images/consensus-review-0b8d47d7d7e27fa7d0df118ceb025f6b.jpg"},2146:function(e,t,n){t.Z=n.p+"assets/images/manual-review-strategy-52f9c62d20fa2e488b653767d4604c4b.jpg"},8246:function(e,t,n){t.Z=n.p+"assets/images/manual-review-435a23cf44ad31b307bdd1a192d36d97.jpg"}}]);