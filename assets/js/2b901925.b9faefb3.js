"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},29037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={description:"Add or subtract items from your search query",sidebar_position:4},i="Combine or Negate",c={unversionedId:"portal-guide/psearch/pcombine_or_negate",id:"portal-guide/psearch/pcombine_or_negate",title:"Combine or Negate",description:"Add or subtract items from your search query",source:"@site/docs/portal-guide/psearch/pcombine_or_negate.md",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/pcombine_or_negate",permalink:"/portal-guide/psearch/pcombine_or_negate",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Add or subtract items from your search query",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Smart Text Search",permalink:"/portal-guide/psearch/text-search"},next:{title:"Filter",permalink:"/portal-guide/psearch/pfilter"}},l={},s=[{value:"Negate Search Criteria",id:"negate-search-criteria",level:2},{value:"Combine Search Criteria",id:"combine-search-criteria",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"combine-or-negate"},"Combine or Negate"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add or subtract items from your search query")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"negate-search-criteria"},"Negate Search Criteria"),(0,n.kt)("p",null,"You can find all the data that is NOT similar to a given criteria. "),(0,n.kt)("p",null,"To do so, go to your app and select the ",(0,n.kt)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar. You\u2019ll be redirected to the Inputs Manager page where you can see the inputs available on your app. "),(0,n.kt)("p",null,"Next, on the ",(0,n.kt)("strong",{parentName:"p"},"Labels")," section, identify the concept you want to find its negative values and click the checkbox next to it. "),(0,n.kt)("p",null,"After selecting the concept, hover over it. Double arrows will appear with the following tooltip: ",(0,n.kt)("em",{parentName:"p"},"Filter for inputs that do NOT match this value"),". Click the double arrows. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"smart image search results",src:r(52044).Z,width:"1911",height:"853"})),(0,n.kt)("p",null,"You\u2019ll notice that the word ",(0,n.kt)("strong",{parentName:"p"},"NOT")," will be added to the concept, and the search results will be populated on the page."),(0,n.kt)("p",null,"For example, you can search for all inputs that are NOT annotated as \u201cdog\u201d. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"smart image search results",src:r(61309).Z,width:"1585",height:"836"})),(0,n.kt)("h2",{id:"combine-search-criteria"},"Combine Search Criteria"),(0,n.kt)("p",null,"You can add together multiple search parameters to expand your search. You can even combine negated search terms for more advanced tasks."),(0,n.kt)("p",null,"For example, you can combine two concepts and search by them."),(0,n.kt)("p",null,'Combining search criteria always uses the "AND" operation. "OR" is not an option.'))}d.isMDXComponent=!0},52044:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search_8-a1705754f347b885f29f1ad7e8f3ce84.png"},61309:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search_9-08eafe2a6b7d3d856c3f8546d34aa826.png"}}]);