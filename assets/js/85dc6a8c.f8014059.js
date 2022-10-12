"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2114],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81106:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=a(83117),r=(a(67294),a(3905));const i={description:"Clarifai supports the most popular image, video and text formats for your input data."},o="Your Data",l={unversionedId:"api-guide/data/README",id:"api-guide/data/README",title:"Your Data",description:"Clarifai supports the most popular image, video and text formats for your input data.",source:"@site/docs/api-guide/data/README.mdx",sourceDirName:"api-guide/data",slug:"/api-guide/data/",permalink:"/api-guide/data/",draft:!1,tags:[],version:"current",frontMatter:{description:"Clarifai supports the most popular image, video and text formats for your input data."},sidebar:"tutorialSidebar",previous:{title:"Clarifai Postman Examples",permalink:"/api-guide/api-overview/helpful-api-resources/postman-examples"},next:{title:"Datasets",permalink:"/api-guide/data/datasets/"}},s={},p=[{value:"Inputs and outputs guide",id:"inputs-and-outputs-guide",level:2},{value:"Example:",id:"example",level:3},{value:"Table of uploadable data types:",id:"table-of-uploadable-data-types",level:3},{value:"Table of single data types passed between models:",id:"table-of-single-data-types-passed-between-models",level:3},{value:"Table of <code>regions[...]</code> data types:",id:"table-of-regions-data-types",level:3},{value:"Table of <code>frames[...]</code> data types:",id:"table-of-frames-data-types",level:3}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"your-data"},"Your Data"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clarifai supports the most popular image, video, and text formats for your input data")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Upload your inputs into the Clarifai platform for data labeling, training new models, search, or predictions. You can upload images, video, and text from URLs or from a local directory."),(0,r.kt)("h2",{id:"inputs-and-outputs-guide"},"Inputs and outputs guide"),(0,r.kt)("h3",{id:"example"},"Example:"),(0,r.kt)("p",null,"When choosing one of Clarifai's pre-built models, you might see something like this from our ",(0,r.kt)("inlineCode",{parentName:"p"},"person-vehicle")," model:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"regions","[...]",".data.concepts, regions","[...]",".region","_","info.bounding","_","box")))),(0,r.kt)("p",null,"These inputs and outputs can be clarified with the following table explaining these data types:"),(0,r.kt)("h3",{id:"table-of-uploadable-data-types"},"Table of uploadable data types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"This is freeform plain text which can be uploaded via raw text or specified with a URI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"This is an image in an accepted format, which currently includes JPG, PNG, TIFF, BMP, WEBP, CSV, and TSV. It can be uploaded via base64 bytes or specified with a URI.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"video"),(0,r.kt)("td",{parentName:"tr",align:null},"This is video in an accepted format, which currently includes AVI, MP4, WMV, MOV, GIF, and 3GPP. It can be uploaded via base64 bytes or specified with a URI.")))),(0,r.kt)("p",null,"All these data formats are read in as raw bytes in base64 format."),(0,r.kt)("h3",{id:"table-of-single-data-types-passed-between-models"},"Table of single data types passed between models:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embeddings"),(0,r.kt)("td",{parentName:"tr",align:null},"Vector representions of data passed from model to model. These are not uploadable by users.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clusters"),(0,r.kt)("td",{parentName:"tr",align:null},"These are IDs that identify clusters. These are primarily used for image search.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"concepts"),(0,r.kt)("td",{parentName:"tr",align:null},"The list of concepts used in a model. For the general model, these would be the top 20 concepts with classified with the highest confidence.")))),(0,r.kt)("h3",{id:"table-of-regions-data-types"},"Table of ",(0,r.kt)("inlineCode",{parentName:"h3"},"regions[...]")," data types:"),(0,r.kt)("p",null,"The notation of ",(0,r.kt)("inlineCode",{parentName:"p"},"[...]")," means that the variable is a list of things, so ",(0,r.kt)("inlineCode",{parentName:"p"},"regions[...]")," represents a list of regions of data. This could be parts of an image, text, video, or audio:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regions","[...]",".region_info.point"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a list of points which specify regions of an image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regions","[...]",".region_info.bounding","_","box"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a list of regions each containing the four corners of a bounding box in a specific region of an image. Each corner coordinate is normalized to ","[0,1]",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regions","[...]",".region_info.mask"),(0,r.kt)("td",{parentName:"tr",align:null},"The mask is an overlay of the entire image, with the specific concepts pixels set to a certain color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regions","[...]",".data.text"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a list of regions and their associated text. This could be OCR data for an image, or subtext within a larger text for NLP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regions","[...]",".data.embeddings"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a list of regions and their associated vector representions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regions","[...]",".data.concepts"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a list of regions and their associated or high confidence concepts.")))),(0,r.kt)("h3",{id:"table-of-frames-data-types"},"Table of ",(0,r.kt)("inlineCode",{parentName:"h3"},"frames[...]")," data types:"),(0,r.kt)("p",null,"The notation of ",(0,r.kt)("inlineCode",{parentName:"p"},"[...]")," means that the variable is a list of things, so ",(0,r.kt)("inlineCode",{parentName:"p"},"frames[...]")," represents a list of frames of video or audio, and therefore ",(0,r.kt)("inlineCode",{parentName:"p"},"frames[...].data.regions[...]")," represents a 2D matrix of the number of frames by the number of regions in each frame."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frames","[...]",".data.regions","[...]",".region","_","info.bounding","_","box"),(0,r.kt)("td",{parentName:"tr",align:null},"These are the four corners of a bounding box in a specific region of a specific frame of video. Each corner coordinate is normalized to ","[0,1]",".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frames","[...]",".data.regions","[...]",".data.concepts"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the matrix of frames and regions containing the  concepts used in a model. For the general model, these would be the top 20 concepts classified with the highest confidence in a specific region of a specific frame of video.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frames","[...]",".data.regions","[...]",".track_id"),(0,r.kt)("td",{parentName:"tr",align:null},"This is the matrix of frames and regions containing the tracking ids used to track objects across frames of a video.")))))}u.isMDXComponent=!0}}]);