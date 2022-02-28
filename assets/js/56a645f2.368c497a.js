"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2766],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(t),h=n,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||s;return t?a.createElement(m,c(c({ref:r},l),{},{components:t})):a.createElement(m,c({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<s;u++)c[u]=t[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8190:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var a=t(7462),n=t(3366),s=(t(7294),t(3905)),c=["components"],o={description:"Slice and dice your datasets with saved searches.",sidebar_position:4},i="Saved Searches",u={unversionedId:"portal-guide/psearch/psaved_searches",id:"portal-guide/psearch/psaved_searches",title:"Saved Searches",description:"Slice and dice your datasets with saved searches.",source:"@site/docs/portal-guide/psearch/psaved_searches.md",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/psaved_searches",permalink:"/docs-new/portal-guide/psearch/psaved_searches",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/psearch/psaved_searches.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Slice and dice your datasets with saved searches.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Combine or Negate",permalink:"/docs-new/portal-guide/psearch/pcombine_or_negate"},next:{title:"Visual Search",permalink:"/docs-new/portal-guide/psearch/visual-search"}},l=[{value:"Click save in the search bar",id:"click-save-in-the-search-bar",children:[],level:2},{value:"Name your search",id:"name-your-search",children:[{value:"Preserve Search Results",id:"preserve-search-results",children:[],level:3}],level:2},{value:"Access your search any time",id:"access-your-search-any-time",children:[],level:2}],p={toc:l};function d(e){var r=e.components,o=(0,n.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},p,o,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"saved-searches"},"Saved Searches"),(0,s.kt)("p",null,"With saved searches you can capture your search results at a given point in time, and record the inputs, annotations, search parameters and models that you are running through the platform. Saved searches help you to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Save a search so that you can return to those same results later"),(0,s.kt)("li",{parentName:"ul"},"Share a search with a collaborator in your app"),(0,s.kt)("li",{parentName:"ul"},'Carve out data that you want to evaluate your models on as a "golden set"'),(0,s.kt)("li",{parentName:"ul"},"Split your data into training sets and test tests")),(0,s.kt)("h2",{id:"click-save-in-the-search-bar"},"Click save in the search bar"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(368).Z})),(0,s.kt)("h2",{id:"name-your-search"},"Name your search"),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6954).Z})),(0,s.kt)("h3",{id:"preserve-search-results"},"Preserve Search Results"),(0,s.kt)("p",null,"You have the option to preserve the current search results as they are. Adding or annotating new inputs will not affect these results. However, deleting inputs from the app will remove them from the search results."),(0,s.kt)("h2",{id:"access-your-search-any-time"},"Access your search any time"),(0,s.kt)("p",null,'You can access your saved search by navigating to the "Saved Searches" section at the top of the sidebar.'),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(9241).Z})))}d.isMDXComponent=!0},6954:function(e,r,t){r.Z=t.p+"assets/images/name_search-83a545c784f9623529b910c10f84c37b.jpg"},368:function(e,r,t){r.Z=t.p+"assets/images/saved_search-59471e108235c6f208c495b3f2968885.jpg"},9241:function(e,r,t){r.Z=t.p+"assets/images/saved_searches_list-e31661a4492e9864e5e332c51c9fdc78.jpg"}}]);