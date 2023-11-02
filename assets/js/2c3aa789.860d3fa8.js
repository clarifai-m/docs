"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7461],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,c=d["".concat(p,".").concat(f)]||d[f]||m[f]||i;return r?a.createElement(c,n(n({ref:t},s),{},{components:r})):a.createElement(c,n({ref:t},s))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var u=2;u<i;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),o=(r(67294),r(3905));const i={description:"Clarifai works with the most popular image, video, audio, and text formats.",sidebar_position:1},n="Supported Formats",l={unversionedId:"api-guide/data/supported-formats",id:"api-guide/data/supported-formats",title:"Supported Formats",description:"Clarifai works with the most popular image, video, audio, and text formats.",source:"@site/docs/api-guide/data/supported-formats.md",sourceDirName:"api-guide/data",slug:"/api-guide/data/supported-formats",permalink:"/api-guide/data/supported-formats",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/data/supported-formats.md",tags:[],version:"current",lastUpdatedAt:1698924850,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:1,frontMatter:{description:"Clarifai works with the most popular image, video, audio, and text formats.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Your Data",permalink:"/api-guide/data/"},next:{title:"Adding and Removing Data",permalink:"/api-guide/data/create-get-update-delete"}},p={},u=[{value:"Image formats",id:"image-formats",level:2},{value:"Video formats",id:"video-formats",level:2},{value:"Audio formats",id:"audio-formats",level:2},{value:"Text formats",id:"text-formats",level:2}],s={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"supported-formats"},"Supported Formats"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Clarifai works with the most popular image, video, audio, and text formats")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The API supports a wide range of the following data formats:"),(0,o.kt)("h2",{id:"image-formats"},"Image formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JPEG"),(0,o.kt)("li",{parentName:"ul"},"PNG"),(0,o.kt)("li",{parentName:"ul"},"TIFF"),(0,o.kt)("li",{parentName:"ul"},"BMP"),(0,o.kt)("li",{parentName:"ul"},"WEBP"),(0,o.kt)("li",{parentName:"ul"},"GIF")),(0,o.kt)("h2",{id:"video-formats"},"Video formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AVI"),(0,o.kt)("li",{parentName:"ul"},"MP4"),(0,o.kt)("li",{parentName:"ul"},"WMV"),(0,o.kt)("li",{parentName:"ul"},"MOV"),(0,o.kt)("li",{parentName:"ul"},"3GPP")),(0,o.kt)("h2",{id:"audio-formats"},"Audio formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WAV")),(0,o.kt)("h2",{id:"text-formats"},"Text formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plain text"),(0,o.kt)("li",{parentName:"ul"},"CSV files"),(0,o.kt)("li",{parentName:"ul"},"TSV files")))}m.isMDXComponent=!0}}]);