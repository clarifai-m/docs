"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5314],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,g=d["".concat(p,".").concat(f)]||d[f]||l[f]||c;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],i={description:"Connect words to the subjects in your data."},p="Creating and Managing Concepts",u={unversionedId:"portal-guide/concepts/README",id:"portal-guide/concepts/README",title:"Creating and Managing Concepts",description:"Connect words to the subjects in your data.",source:"@site/docs/portal-guide/concepts/README.mdx",sourceDirName:"portal-guide/concepts",slug:"/portal-guide/concepts/",permalink:"/portal-guide/concepts/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/concepts/README.mdx",tags:[],version:"current",frontMatter:{description:"Connect words to the subjects in your data."},sidebar:"tutorialSidebar",previous:{title:"Making Predictions",permalink:"/portal-guide/ppredict"},next:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/concepts/create-get-update-delete"}},s=[{value:"Concept Best Practices",id:"concept-best-practices",children:[],level:2}],l={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"creating-and-managing-concepts"},"Creating and Managing Concepts"),(0,c.kt)("p",null,"Concepts are entities in the world that you want to search over, recognize, annotate, etc. For further details see our ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/docs/tree/1fde8ce20559136e6ac1e875864befea10f3f218/api-guide/concept/README.md"},"concepts API docs here"),"."),(0,c.kt)("h2",{id:"concept-best-practices"},"Concept Best Practices"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Avoid special characters and spaces"),(0,c.kt)("li",{parentName:"ul"},"Avoid long concept names. Typically 1-3 word concepts are best.")))}d.isMDXComponent=!0}}]);