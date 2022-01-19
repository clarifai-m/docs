"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9297],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,g=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={description:"Put a word to it."},p="Creating and Managing Concepts",u={unversionedId:"api-guide/concepts/README",id:"api-guide/concepts/README",title:"Creating and Managing Concepts",description:"Put a word to it.",source:"@site/docs/api-guide/concepts/README.mdx",sourceDirName:"api-guide/concepts",slug:"/api-guide/concepts/",permalink:"/api-guide/concepts/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/concepts/README.mdx",tags:[],version:"current",frontMatter:{description:"Put a word to it."},sidebar:"tutorialSidebar",previous:{title:"Multilingual Classification",permalink:"/api-guide/predict/multilingual-classification"},next:{title:"Create, Get, Update",permalink:"/api-guide/concepts/create-get-update"}},s=[{value:"Concept Best Practices",id:"concept-best-practices",children:[],level:2}],l={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-and-managing-concepts"},"Creating and Managing Concepts"),(0,o.kt)("p",null,"Concepts are a known entity in the world. They are fundamental to annotating your data, for defining the vocabulary that a model should output, for relating things to each other, for receiving your predictions, searching for these concepts and more."),(0,o.kt)("p",null,"A concept is something that describes an input, similar to a \u201ctag\u201d or \u201ckeyword.\u201d The data in these concepts give the model something to \u201cobserve\u201d about the key word, and learn from."),(0,o.kt)("p",null,'For example, a concept may be a "dog", a "cat", or a "tree". If you annotate some input data as having a "dog" or "cat" present, that provides the foundation for training a model on that data. A model could then be created with "dog" and "cat" in the list of concepts that it will learn to predict. After training, the model can predict the concepts "dog" and "cat" and you can search over your data for "dogs" and "cats" that the model identifies, or that have been annotated.'),(0,o.kt)("h2",{id:"concept-best-practices"},"Concept Best Practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid special characters and spaces"),(0,o.kt)("li",{parentName:"ul"},"Avoid long concept names. Typically 1-3 word concepts are best.")))}d.isMDXComponent=!0}}]);