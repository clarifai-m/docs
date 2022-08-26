"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8256],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),a=n(34334),i=n(53438),c=n(39960),o=n(13919),l=n(95999),u="cardContainer_fWXF",s="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},n)}function f(e){let{href:t,icon:n,title:i,description:c}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},n," ",i),c&&r.createElement("p",{className:(0,a.Z)("text--truncate",p),title:c},c))}function m(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:n}=e;const a=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:a,title:n.label,description:null==c?void 0:c.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{items:t,className:n}=e;return r.createElement("section",{className:(0,a.Z)("row",n)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},18977:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905)),i=n(52991),c=n(53438);const o={description:"Learn about advanced capabilities in our platform."},l="Advanced Topics",u={unversionedId:"api-guide/advanced-topics/README",id:"api-guide/advanced-topics/README",title:"Advanced Topics",description:"Learn about advanced capabilities in our platform.",source:"@site/docs/api-guide/advanced-topics/README.mdx",sourceDirName:"api-guide/advanced-topics",slug:"/api-guide/advanced-topics/",permalink:"/api-guide/advanced-topics/",draft:!1,tags:[],version:"current",frontMatter:{description:"Learn about advanced capabilities in our platform."},sidebar:"tutorialSidebar",previous:{title:"Saved Searches",permalink:"/api-guide/search/legacy-search/saved_searches"},next:{title:"Status Codes",permalink:"/api-guide/advanced-topics/status-codes"}},s={},p=[],d={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-topics"},"Advanced Topics"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn about the advanced capabilities of our platform")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Unlock the power of the Clarifai API."),(0,a.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);