"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[492],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>h});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},43595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(58168),n=(a(96540),a(15680));const o={description:"Use vector search to find what you need in your unstructured data"},i="Smart Search: Search, Sort, Filter & Save",s={unversionedId:"portal-guide/psearch/README",id:"portal-guide/psearch/README",title:"Smart Search: Search, Sort, Filter & Save",description:"Use vector search to find what you need in your unstructured data",source:"@site/docs/portal-guide/psearch/README.mdx",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/",permalink:"/portal-guide/psearch/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/psearch/README.mdx",tags:[],version:"current",frontMatter:{description:"Use vector search to find what you need in your unstructured data"},sidebar:"tutorialSidebar",previous:{title:"Environment Variables and Secrets",permalink:"/portal-guide/modules/secrets-management"},next:{title:"Smart Image Search",permalink:"/portal-guide/psearch/visual-search"}},l={},c=[{value:"Fully-Managed Vector Search Engine",id:"fully-managed-vector-search-engine",level:2},{value:"Powered by a Vector Database",id:"powered-by-a-vector-database",level:2},{value:"Simplifies Smart Search Integration",id:"simplifies-smart-search-integration",level:2},{value:"Types of Smart Search",id:"types-of-smart-search",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"smart-search-search-sort-filter--save"},"Smart Search: Search, Sort, Filter & Save"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Use vector search to find what you need in your unstructured data")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Clarifai\u2019s Smart Search features allow you to harness the power of AI to search through unlabeled data with ease. Whether you're searching for images, videos, or text data, Smart Search empowers you to quickly find the content you need based on visual, semantic and/or conceptual understanding. "),(0,n.yg)("p",null,"With Smart Search, you can unlock the full potential of your unstructured data assets, making it easier than ever to locate and retrieve the data of interest. "),(0,n.yg)("p",null,"Smart Search allows you to to accomplish various tasks, including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"You can use the search results within the Clarifai\u2019s web-app to accelerate data labeling for custom model training tasks;"),(0,n.yg)("li",{parentName:"ul"},"You can return the search results via API to integrate AI-powered search features into your own end-solutions.")),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(12987).A,width:"221",height:"278"})),(0,n.yg)("h2",{id:"fully-managed-vector-search-engine"},"Fully-Managed Vector Search Engine"),(0,n.yg)("p",null,"Our Smart Search feature leverages vector search capabilities to power the search experience. ",(0,n.yg)("a",{parentName:"p",href:"https://www.clarifai.com/blog/finding-what-you-need-a-comprehensive-guide-to-vector-search"},"Vector search")," is a type of search engine that uses vectors to search and retrieve text, images, and videos."),(0,n.yg)("p",null,"Vector embeddings are numerical \u201crepresentations\u201d of unstructured data, which enable their meaning to be encoded and processed mathematically. By converting the data into vectors, which is a language native to computers, we can efficiently perform search operations on them. "),(0,n.yg)("p",null,"Instead of traditional keyword-based search, where exact matches are sought, vector search allows for searching based on visual and/or semantic similarity by calculating distances between vector embedding representations of the data. "),(0,n.yg)("h2",{id:"powered-by-a-vector-database"},"Powered by a Vector Database"),(0,n.yg)("p",null,"Our vector search engine uses deep learning embedding models to first analyze the visual features of each input, such as color, shape, and texture. This process, known as feature extraction, generates a corresponding vector representation for each piece of unstructured data."),(0,n.yg)("p",null,"These vector representations are then indexed and stored in our ",(0,n.yg)("a",{parentName:"p",href:"https://www.clarifai.com/blog/using-clarifais-native-vector-database"},"vector database")," (also called a vector store or a semantic search engine). When a user performs a search, their query is also converted into a vector representation. The vector DB then searches for the vector representations that are most similar to the query vector representation. The results are then displayed to the user. "),(0,n.yg)("p",null,"By using our vector search as a service, you can get more relevant search results, faster search times, and scalable performance. "),(0,n.yg)("h2",{id:"simplifies-smart-search-integration"},"Simplifies Smart Search Integration"),(0,n.yg)("p",null,"Choosing Clarifai's turnkey smart search solution is better than building your own from scratch.  "),(0,n.yg)("p",null,"Without Clarifai, you would need to do the following in order to build smart search features into your own solutions:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Set up your own vector database instance. This involves choosing a database platform, installing the software, and configuring the database."),(0,n.yg)("li",{parentName:"ul"},"Build out the entire pipeline for turning images/text into embeddings. This involves using a computer vision or natural language processing (NLP) library to extract features from images or text, and then converting those features into a vector representation."),(0,n.yg)("li",{parentName:"ul"},"Insert or query the vector database. This involves using the database's API to add new data or search for existing data.")),(0,n.yg)("p",null,"This process can be very time-consuming and complex, especially for developers who are not familiar with vector databases or machine learning. "),(0,n.yg)("p",null,"Clarifai eliminates the need for developers to do all of this work by providing an out of the box solution for building state-of-the-art smart search capabilities."),(0,n.yg)("h2",{id:"types-of-smart-search"},"Types of Smart Search"),(0,n.yg)("p",null,"We offer the following types of Smart Search options on our platform:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Smart Image Search"),"\u2014Allows you to retrieve images sorted by their visual relevance to a query in the form of: "),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Image"),"\u2014Provide a reference image of interest to compare inputs against."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concept"),"\u2014Provide a trained concept to compare input predictions against."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Caption"),"\u2014Provide a full-text description to compare inputs against."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Smart Object Search"),"\u2014Allows you to retrieve annotated objects (bounding boxes within images) sorted by their visual relevance to a query in the form of:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Image"),"\u2014Provide a reference image of interest to compare inputs against."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concept"),"\u2014Provide a trained concept to compare input predictions against."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Caption"),"\u2014Provide a full-text description to compare inputs against."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Smart Text Search"),"\u2014Allows you to retrieve text data sorted by their content and semantic similarity to a query in the form of:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Text"),"\u2014Provide a text description to compare input predictions against. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concept"),"\u2014Provide a trained concept to compare input predictions against.")))))}d.isMDXComponent=!0},12987:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/spacetime-bfa0d6ae24419bc14d4f3595c7fe6da6.svg"}}]);