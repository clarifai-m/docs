"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(g,c(c({ref:t},l),{},{components:n})):r.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={description:"Connect words to the subjects in your data."},c="Creating and Managing Concepts",i={unversionedId:"portal-guide/concepts/README",id:"portal-guide/concepts/README",title:"Creating and Managing Concepts",description:"Connect words to the subjects in your data.",source:"@site/docs/portal-guide/concepts/README.mdx",sourceDirName:"portal-guide/concepts",slug:"/portal-guide/concepts/",permalink:"/portal-guide/concepts/",draft:!1,tags:[],version:"current",frontMatter:{description:"Connect words to the subjects in your data."},sidebar:"tutorialSidebar",previous:{title:"Making Predictions",permalink:"/portal-guide/ppredict"},next:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/concepts/create-get-update-delete"}},p={},s=[{value:"Concept Best Practices",id:"concept-best-practices",level:2}],l={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-and-managing-concepts"},"Creating and Managing Concepts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect words to the subjects in your data")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Concepts are entities in the world that you want to search over, recognize, annotate, etc. "),(0,o.kt)("p",null,"For further details, see our concepts API docs ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/concepts/"},"here"),"."),(0,o.kt)("h2",{id:"concept-best-practices"},"Concept Best Practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid special characters and spaces."),(0,o.kt)("li",{parentName:"ul"},"Avoid long concept names. Typically, 1-3 word concepts are best.")))}d.isMDXComponent=!0}}]);