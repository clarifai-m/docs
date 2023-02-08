"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21677:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={description:"Search helps you sort, save, organize and filter your datasets.",sidebar_position:1},i="Search Overview",s={unversionedId:"api-guide/search/rank-filter-combine-or-negate",id:"api-guide/search/rank-filter-combine-or-negate",title:"Search Overview",description:"Search helps you sort, save, organize and filter your datasets.",source:"@site/docs/api-guide/search/rank-filter-combine-or-negate.md",sourceDirName:"api-guide/search",slug:"/api-guide/search/rank-filter-combine-or-negate",permalink:"/api-guide/search/rank-filter-combine-or-negate",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Search helps you sort, save, organize and filter your datasets.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Search, Sort, Filter, and Save",permalink:"/api-guide/search/"},next:{title:"Combine or Negate",permalink:"/api-guide/search/combine-or-negate"}},l={},c=[{value:"Rank",id:"rank",level:2},{value:"Filter",id:"filter",level:2},{value:"&#39;AND&#39;",id:"and",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"search-overview"},"Search Overview"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Search helps you sort, save, organize, and filter your datasets")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You can send inputs ","(","as a url or bytes",")"," and once indexed, you can search for images by concept, image, or many advanced search parameters. When you ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /inputs"),", your base workflow is used to index your inputs, and this index enables search over the outputs of the models in your workflow."),(0,a.kt)("h2",{id:"rank"},"Rank"),(0,a.kt)("p",null,"Your model can identify concepts in your data and rank your search results by how confident it is that a given concept is present. You can even rank search results by how similar one input is to another input."),(0,a.kt)("h2",{id:"filter"},"Filter"),(0,a.kt)("p",null,"Trim down the amount of data returned in search. For example, you may only want to see inputs that one of your collaborators has labeled with the word \u201cdog\u201d. Or, perhaps you want only those inputs that were captured in a certain geographical region."),(0,a.kt)("h2",{id:"and"},"'AND'"),(0,a.kt)("p",null,'Combine multiple search parameters. For example, you can find all the inputs within a geographical region with a "weapon" in them, or all annotations assigned to user "Joe", or visually similar product images that are assigned the word "XL" in metadata.'),(0,a.kt)("admonition",{title:"note",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"The search functionality is currently only available for images.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image illustrating how to search by images using Clarifai&#39;s concepts",src:r(53184).Z,width:"700",height:"440"})))}p.isMDXComponent=!0},53184:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/illustration-search-a58627abea1da262a22cba6a8efc372c.png"}}]);