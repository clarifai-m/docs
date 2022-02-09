"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7375],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,y=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return t?n.createElement(y,i(i({ref:r},l),{},{components:t})):n.createElement(y,i({ref:r},l))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62820:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={},s="Legacy Search",u={unversionedId:"api-guide/search/legacy-search/README",id:"api-guide/search/legacy-search/README",title:"Legacy Search",description:"You can send inputs \\(as a url or bytes\\) and once indexed, you can search for images by concept, image, or many advanced search parameters. When you POST /inputs, your base workflow is used to index your inputs, and this index enables search over the outputs of the models in your workflow.",source:"@site/docs/api-guide/search/legacy-search/README.mdx",sourceDirName:"api-guide/search/legacy-search",slug:"/api-guide/search/legacy-search/",permalink:"/docs-new/api-guide/search/legacy-search/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/search/legacy-search/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Index Images for Search",permalink:"/docs-new/api-guide/search/index-images-for-search"},next:{title:"Combine or Negate",permalink:"/docs-new/api-guide/search/legacy-search/combine-or-negate"}},l=[{value:"Rank",id:"rank",children:[],level:2},{value:"Filter",id:"filter",children:[],level:2},{value:"&#39;AND&#39;",id:"and",children:[],level:2}],p={toc:l};function d(e){var r=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"legacy-search"},"Legacy Search"),(0,o.kt)("p",null,"You can send inputs ","(","as a url or bytes",")"," and once indexed, you can search for images by concept, image, or many advanced search parameters. When you ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /inputs"),", your base workflow is used to index your inputs, and this index enables search over the outputs of the models in your workflow."),(0,o.kt)("h2",{id:"rank"},"Rank"),(0,o.kt)("p",null,"Your model can identify concepts in your data and rank your search results by how confident it is that a given concept is present. You can even rank search results by how similar one input is to another input."),(0,o.kt)("h2",{id:"filter"},"Filter"),(0,o.kt)("p",null,"Trim down the amount of data returned in search. For example, you may only want to see inputs that one of your collaborators has labeled with the word \u201cdog\u201d. Or perhaps you want only those inputs that were captured in a certain geographical region."),(0,o.kt)("h2",{id:"and"},"'AND'"),(0,o.kt)("p",null,'Combine multiple search parameters. For example, you can find all the inputs within a geographical region with a "weapon" in them, or all annotations assigned to user "Joe", or visually similar product images that are assigned the word "XL" in metadata.'),(0,o.kt)("p",null,"Search currently is only available for images."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image illustrating how to search by images using Clarifai&#39;s concepts",src:t(86855).Z})))}d.isMDXComponent=!0},86855:function(e,r,t){r.Z=t.p+"assets/images/illustration-search-a58627abea1da262a22cba6a8efc372c.png"}}]);