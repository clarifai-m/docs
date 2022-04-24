"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[785],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21677:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={description:"Search helps you sort, save, organize and filter your datasets.",sidebar_position:1},c="Search Overview",l={unversionedId:"api-guide/search/rank-filter-combine-or-negate",id:"api-guide/search/rank-filter-combine-or-negate",title:"Search Overview",description:"Search helps you sort, save, organize and filter your datasets.",source:"@site/docs/api-guide/search/rank-filter-combine-or-negate.md",sourceDirName:"api-guide/search",slug:"/api-guide/search/rank-filter-combine-or-negate",permalink:"/api-guide/search/rank-filter-combine-or-negate",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/search/rank-filter-combine-or-negate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Search helps you sort, save, organize and filter your datasets.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Search, Sort, Filter, and Save",permalink:"/api-guide/search/"},next:{title:"Combine or Negate",permalink:"/api-guide/search/combine-or-negate"}},u=[{value:"Rank",id:"rank",children:[],level:2},{value:"Filter",id:"filter",children:[],level:2},{value:"&#39;AND&#39;",id:"and",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"search-overview"},"Search Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Search helps you sort, save, organize, and filter your datasets")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You can send inputs ","(","as a url or bytes",")"," and once indexed, you can search for images by concept, image, or many advanced search parameters. When you ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /inputs"),", your base workflow is used to index your inputs, and this index enables search over the outputs of the models in your workflow."),(0,i.kt)("h2",{id:"rank"},"Rank"),(0,i.kt)("p",null,"Your model can identify concepts in your data and rank your search results by how confident it is that a given concept is present. You can even rank search results by how similar one input is to another input."),(0,i.kt)("h2",{id:"filter"},"Filter"),(0,i.kt)("p",null,"Trim down the amount of data returned in search. For example, you may only want to see inputs that one of your collaborators has labeled with the word \u201cdog\u201d. Or, perhaps you want only those inputs that were captured in a certain geographical region."),(0,i.kt)("h2",{id:"and"},"'AND'"),(0,i.kt)("p",null,'Combine multiple search parameters. For example, you can find all the inputs within a geographical region with a "weapon" in them, or all annotations assigned to user "Joe", or visually similar product images that are assigned the word "XL" in metadata.'),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The search functionality is currently only available for images."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image illustrating how to search by images using Clarifai&#39;s concepts",src:r(95609).Z})))}d.isMDXComponent=!0},95609:function(e,t,r){t.Z=r.p+"assets/images/illustration-search-a58627abea1da262a22cba6a8efc372c.png"}}]);