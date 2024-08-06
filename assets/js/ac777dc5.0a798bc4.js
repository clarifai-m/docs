"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6780],{8324:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=n(74848),a=n(28453);const o={description:"Learn about positive and negative annotations.",sidebar_position:9},s="Positive and Negative Annotations",r={id:"portal-guide/annotate/positive-and-negative-annotations",title:"Positive and Negative Annotations",description:"Learn about positive and negative annotations.",source:"@site/docs/portal-guide/annotate/positive-and-negative-annotations.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/positive-and-negative-annotations",permalink:"/portal-guide/annotate/positive-and-negative-annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/annotate/positive-and-negative-annotations.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Learn about positive and negative annotations.",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Training Data",permalink:"/portal-guide/annotate/training-data"},next:{title:"Datasets",permalink:"/portal-guide/datasets/"}},d={},c=[];function p(t){const e={h1:"h1",img:"img",p:"p",strong:"strong",...(0,a.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"positive-and-negative-annotations",children:"Positive and Negative Annotations"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"Learn about positive and negative annotations"})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsx)(e.p,{children:"When annotating your data, you have the option of providing both positive and negative labels for your concepts. Here is how your model interprets the labels that you add."}),"\n",(0,i.jsx)(e.p,{children:"(i) If any concept is tagged with a positive annotation, that is treated as a positive label for that concept."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(31594).A+"",width:"3000",height:"1750"})}),"\n",(0,i.jsx)(e.p,{children:"(ii) When a concept is tagged with a positive annotation, this also implies a negative label on all other concepts not also tagged as positive."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(53709).A+"",width:"3000",height:"2500"})}),"\n",(0,i.jsx)(e.p,{children:"(iii) When input image 2 is tagged with a negative annotation, and input image 1 is tagged positive, then both of these actions have the same effect on input image 2: all classes not tagged positive are implicitly negative already from (ii)."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(37948).A+"",width:"3000",height:"2500"})}),"\n",(0,i.jsx)(e.p,{children:"(iv) If there are no positive annotations for any concept, then if any concept is tagged with a negative annotation, this is treated as a negative example for all concepts related to that image."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(67070).A+"",width:"3000",height:"2500"})}),"\n",(0,i.jsx)(e.p,{children:"(v) If there are no positive or negative annotations, the example is ignored."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:n(29953).A+"",width:"3000",height:"2500"})})]})}function g(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}},31594:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/annotation_i-a15a00f6a566b808d239bfb702c81b3b.jpg"},53709:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/annotation_ii-b0e933ba329cbb80fbcd52ef4728ee2d.jpg"},37948:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/annotation_iii-3085a769a96cd6632d16fd051331b96c.jpg"},67070:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/annotation_iv-4695574bec0c531993ed6ce7704e745e.jpg"},29953:(t,e,n)=>{n.d(e,{A:()=>i});const i=n.p+"assets/images/annotation_v-d9d404e82c880332eccea5a621e15506.jpg"},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);