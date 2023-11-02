"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},62223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={description:"Learn about our clusterer model type",sidebar_position:7},i="Clusterer",l={unversionedId:"portal-guide/model/model-types/clusterer",id:"portal-guide/model/model-types/clusterer",title:"Clusterer",description:"Learn about our clusterer model type",source:"@site/docs/portal-guide/model/model-types/clusterer.md",sourceDirName:"portal-guide/model/model-types",slug:"/portal-guide/model/model-types/clusterer",permalink:"/portal-guide/model/model-types/clusterer",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/model-types/clusterer.md",tags:[],version:"current",lastUpdatedAt:1698924850,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:7,frontMatter:{description:"Learn about our clusterer model type",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Visual Embedder",permalink:"/portal-guide/model/model-types/visual-embedder"},next:{title:"Text Classifier",permalink:"/portal-guide/model/model-types/text-classifier"}},s={},u=[{value:"Example use case",id:"example-use-case",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"clusterer"},"Clusterer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about our clusterer model type")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Input"),": Images and videos"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Output"),": Clusters"),(0,n.kt)("p",null,"Clusterer is a type of deep fine-tuned model designed to identify and group similar images or video frames within a dataset. The primary goal of clustering is to discover patterns or relationships among data points based on their inherent characteristics or features, without requiring explicit labels or predefined categories."),(0,n.kt)("p",null,'Cluster models are often used in conjunction with embedding models to perform visual searches. This is done by first using an embedding model to represent each image as a vector in a lower-dimensional space. The cluster model then uses the mathematical structure of this space to determine which images are "clustered together."'),(0,n.kt)("p",null,"The cluster model type can be used in a wide range of applications, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Customer segmentation in marketing"),": Cluster models can be used to group customers with similar purchasing behaviors, demographics, or preferences."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Anomaly detection in network security"),": Cluster models can identify unusual patterns in network traffic data, helping detect potential security threats or cyberattacks. Unusual clusters can indicate unauthorized access or malicious activity."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Document clustering in natural language processing"),": In textual data analysis, cluster models can group similar documents based on their content. This aids in tasks like topic modeling, content summarization, and document organization.")),(0,n.kt)("p",null,"You may choose a visual classifier model type in cases where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You want to perform visual searches accurately, quickly, and easily. Cluster models and embedding models do not require any labels or custom concepts to be trained. This makes them much more scalable and flexible than traditional methods for visual search, which often require a large amount of labeled data to train."),(0,n.kt)("li",{parentName:"ul"},'You need a cluster model to learn new features not recognized by the existing Clarifai models. In that case, you may need to "deep fine-tune" your custom model and integrate it directly within your ',(0,n.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/workflows/"},"workflows"),"."),(0,n.kt)("li",{parentName:"ul"},"You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models.")),(0,n.kt)("h2",{id:"example-use-case"},"Example use case"),(0,n.kt)("p",null,"If you want to find all images of cats in your dataset, you can simply use the cluster model to find all images that are clustered together with the embedding of a cat image."))}p.isMDXComponent=!0}}]);