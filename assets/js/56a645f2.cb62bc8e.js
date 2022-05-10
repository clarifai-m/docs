"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2766],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,v=h["".concat(i,".").concat(d)]||h[d]||p[d]||s;return r?a.createElement(v,c(c({ref:t},u),{},{components:r})):a.createElement(v,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<s;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8190:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),c=["components"],o={description:"Slice and dice your datasets with saved searches.",sidebar_position:4},i="Saved Searches",l={unversionedId:"portal-guide/psearch/psaved_searches",id:"portal-guide/psearch/psaved_searches",title:"Saved Searches",description:"Slice and dice your datasets with saved searches.",source:"@site/docs/portal-guide/psearch/psaved_searches.md",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/psaved_searches",permalink:"/portal-guide/psearch/psaved_searches",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Slice and dice your datasets with saved searches.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Combine or Negate",permalink:"/portal-guide/psearch/pcombine_or_negate"},next:{title:"Visual Search",permalink:"/portal-guide/psearch/visual-search"}},u=[{value:"Click save in the search bar",id:"click-save-in-the-search-bar",children:[],level:2},{value:"Name your search",id:"name-your-search",children:[{value:"Preserve Search Results",id:"preserve-search-results",children:[],level:3}],level:2},{value:"Access your search any time",id:"access-your-search-any-time",children:[],level:2}],p={toc:u};function h(e){var t=e.components,o=(0,n.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"saved-searches"},"Saved Searches"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Slice and dice your datasets with saved searches")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"With saved searches, you can capture your search results at a given point in time, and record the inputs, annotations, search parameters, and models that you are running through the platform. "),(0,s.kt)("p",null,"Saved searches help you to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Save a search so that you can return to those same results later"),(0,s.kt)("li",{parentName:"ul"},"Share a search with a collaborator in your app"),(0,s.kt)("li",{parentName:"ul"},'Carve out data that you want to evaluate your models on as a "golden set"'),(0,s.kt)("li",{parentName:"ul"},"Split your data into training sets and test tests")),(0,s.kt)("h2",{id:"click-save-in-the-search-bar"},"Click save in the search bar"),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(26073).Z})),(0,s.kt)("h2",{id:"name-your-search"},"Name your search"),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(55144).Z})),(0,s.kt)("h3",{id:"preserve-search-results"},"Preserve Search Results"),(0,s.kt)("p",null,"You have the option to preserve the current search results as they are. Adding or annotating new inputs will not affect these results. However, deleting inputs from the app will remove them from the search results."),(0,s.kt)("h2",{id:"access-your-search-any-time"},"Access your search any time"),(0,s.kt)("p",null,'You can access your saved search by navigating to the "Saved Searches" section at the top of the sidebar.'),(0,s.kt)("p",null,(0,s.kt)("img",{src:r(93878).Z})))}h.isMDXComponent=!0},55144:function(e,t,r){t.Z=r.p+"assets/images/name_search-83a545c784f9623529b910c10f84c37b.jpg"},26073:function(e,t,r){t.Z=r.p+"assets/images/saved_search-59471e108235c6f208c495b3f2968885.jpg"},93878:function(e,t,r){t.Z=r.p+"assets/images/saved_searches_list-e31661a4492e9864e5e332c51c9fdc78.jpg"}}]);