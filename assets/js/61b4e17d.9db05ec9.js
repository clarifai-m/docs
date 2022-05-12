"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6252],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(f,r(r({ref:t},l),{},{components:n})):a.createElement(f,r({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={description:"Understanding positive and negative labels.",sidebar_position:3},p="Positive and Negative Annotations",c={unversionedId:"api-guide/annotate/positive-and-negative-annotations",id:"api-guide/annotate/positive-and-negative-annotations",title:"Positive and Negative Annotations",description:"Understanding positive and negative labels.",source:"@site/docs/api-guide/annotate/positive-and-negative-annotations.md",sourceDirName:"api-guide/annotate",slug:"/api-guide/annotate/positive-and-negative-annotations",permalink:"/api-guide/annotate/positive-and-negative-annotations",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Understanding positive and negative labels.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Training Data",permalink:"/api-guide/annotate/training-data"},next:{title:"Tasks",permalink:"/api-guide/annotate/tasks"}},l=[],u={toc:l};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"positive-and-negative-annotations"},"Positive and Negative Annotations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand positive and negative labels")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When annotating your data, you have the option of providing both positive and negative labels for your concepts. "),(0,o.kt)("p",null,"Here is how your model interprets the labels that you add."),(0,o.kt)("p",null,"(","i",")"," If any concept is tagged with a positive annotation, that is treated as a positive label for that concept."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1846).Z})),(0,o.kt)("p",null,"(","ii",")"," When a concept is tagged with a positive annotation, this also implies a negative label on all other concepts not also tagged as positive."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5013).Z})),(0,o.kt)("p",null,"(","iii",")"," When input image 2 is tagged with a negative annotation, and input image 1 is tagged positive, then both of these actions have the same effect on input image 2: all classes not tagged positive are implicitly negative already from ","(","ii",")","."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4402).Z})),(0,o.kt)("p",null,"(","iv",")"," If there are no positive annotations for any concept, then if any concept is tagged with a negative annotation, this is treated as a negative example for all concepts related to that image."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79393).Z})),(0,o.kt)("p",null,"(","v",")"," If there are no positive or negative annotations, the example is ignored."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43170).Z})))}d.isMDXComponent=!0},1846:function(e,t,n){t.Z=n.p+"assets/images/annotation_i-a15a00f6a566b808d239bfb702c81b3b.jpg"},5013:function(e,t,n){t.Z=n.p+"assets/images/annotation_ii-b0e933ba329cbb80fbcd52ef4728ee2d.jpg"},4402:function(e,t,n){t.Z=n.p+"assets/images/annotation_iii-3085a769a96cd6632d16fd051331b96c.jpg"},79393:function(e,t,n){t.Z=n.p+"assets/images/annotation_iv-4695574bec0c531993ed6ce7704e745e.jpg"},43170:function(e,t,n){t.Z=n.p+"assets/images/annotation_v-d9d404e82c880332eccea5a621e15506.jpg"}}]);