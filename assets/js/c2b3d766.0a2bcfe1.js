"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,g=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={description:"Connect words to the subjects in your data."},c="Creating and Managing Concepts",i={unversionedId:"portal-guide/concepts/README",id:"portal-guide/concepts/README",title:"Creating and Managing Concepts",description:"Connect words to the subjects in your data.",source:"@site/docs/portal-guide/concepts/README.mdx",sourceDirName:"portal-guide/concepts",slug:"/portal-guide/concepts/",permalink:"/portal-guide/concepts/",draft:!1,tags:[],version:"current",frontMatter:{description:"Connect words to the subjects in your data."},sidebar:"tutorialSidebar",previous:{title:"Making Predictions",permalink:"/portal-guide/ppredict"},next:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/concepts/create-get-update-delete"}},p={},s=[{value:"Concept Best Practices",id:"concept-best-practices",level:2}],l={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-and-managing-concepts"},"Creating and Managing Concepts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect words to the subjects in your data")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Concepts are entities in the world that you want to search over, recognize, annotate, etc. For further details, see our concepts API docs ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/concepts/"},"here"),"."),(0,o.kt)("h2",{id:"concept-best-practices"},"Concept Best Practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid special characters and spaces."),(0,o.kt)("li",{parentName:"ul"},"Avoid long concept names. Typically, 1-3 word concepts are best.")))}u.isMDXComponent=!0}}]);