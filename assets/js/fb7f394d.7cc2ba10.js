"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[492],{60509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(74848),n=r(28453);const s={description:"Use vector search to find what you need in your unstructured data"},i="Smart Search: Search, Sort, Filter & Save",o={id:"portal-guide/psearch/README",title:"Smart Search: Search, Sort, Filter & Save",description:"Use vector search to find what you need in your unstructured data",source:"@site/docs/portal-guide/psearch/README.mdx",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/",permalink:"/portal-guide/psearch/",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/psearch/README.mdx",tags:[],version:"current",frontMatter:{description:"Use vector search to find what you need in your unstructured data"},sidebar:"tutorialSidebar",previous:{title:"Environment Variables and Secrets",permalink:"/portal-guide/modules/secrets-management"},next:{title:"Smart Image Search",permalink:"/portal-guide/psearch/visual-search"}},c={},l=[{value:"Fully-Managed Vector Search Engine",id:"fully-managed-vector-search-engine",level:2},{value:"Powered by a Vector Database",id:"powered-by-a-vector-database",level:2},{value:"Simplifies Smart Search Integration",id:"simplifies-smart-search-integration",level:2},{value:"Types of Smart Search",id:"types-of-smart-search",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"smart-search-search-sort-filter--save",children:"Smart Search: Search, Sort, Filter & Save"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Use vector search to find what you need in your unstructured data"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.p,{children:"Clarifai\u2019s Smart Search features allow you to harness the power of AI to search through unlabeled data with ease. Whether you're searching for images, videos, or text data, Smart Search empowers you to quickly find the content you need based on visual, semantic and/or conceptual understanding."}),"\n",(0,a.jsx)(t.p,{children:"With Smart Search, you can unlock the full potential of your unstructured data assets, making it easier than ever to locate and retrieve the data of interest."}),"\n",(0,a.jsx)(t.p,{children:"Smart Search allows you to to accomplish various tasks, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"You can use the search results within the Clarifai\u2019s web-app to accelerate data labeling for custom model training tasks;"}),"\n",(0,a.jsx)(t.li,{children:"You can return the search results via API to integrate AI-powered search features into your own end-solutions."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:r(12987).A+"",width:"221",height:"278"})}),"\n",(0,a.jsx)(t.h2,{id:"fully-managed-vector-search-engine",children:"Fully-Managed Vector Search Engine"}),"\n",(0,a.jsxs)(t.p,{children:["Our Smart Search feature leverages vector search capabilities to power the search experience. ",(0,a.jsx)(t.a,{href:"https://www.clarifai.com/blog/finding-what-you-need-a-comprehensive-guide-to-vector-search",children:"Vector search"})," is a type of search engine that uses vectors to search and retrieve text, images, and videos."]}),"\n",(0,a.jsx)(t.p,{children:"Vector embeddings are numerical \u201crepresentations\u201d of unstructured data, which enable their meaning to be encoded and processed mathematically. By converting the data into vectors, which is a language native to computers, we can efficiently perform search operations on them."}),"\n",(0,a.jsx)(t.p,{children:"Instead of traditional keyword-based search, where exact matches are sought, vector search allows for searching based on visual and/or semantic similarity by calculating distances between vector embedding representations of the data."}),"\n",(0,a.jsx)(t.h2,{id:"powered-by-a-vector-database",children:"Powered by a Vector Database"}),"\n",(0,a.jsx)(t.p,{children:"Our vector search engine uses deep learning embedding models to first analyze the visual features of each input, such as color, shape, and texture. This process, known as feature extraction, generates a corresponding vector representation for each piece of unstructured data."}),"\n",(0,a.jsxs)(t.p,{children:["These vector representations are then indexed and stored in our ",(0,a.jsx)(t.a,{href:"https://www.clarifai.com/blog/using-clarifais-native-vector-database",children:"vector database"})," (also called a vector store or a semantic search engine). When a user performs a search, their query is also converted into a vector representation. The vector DB then searches for the vector representations that are most similar to the query vector representation. The results are then displayed to the user."]}),"\n",(0,a.jsx)(t.p,{children:"By using our vector search as a service, you can get more relevant search results, faster search times, and scalable performance."}),"\n",(0,a.jsx)(t.h2,{id:"simplifies-smart-search-integration",children:"Simplifies Smart Search Integration"}),"\n",(0,a.jsx)(t.p,{children:"Choosing Clarifai's turnkey smart search solution is better than building your own from scratch."}),"\n",(0,a.jsx)(t.p,{children:"Without Clarifai, you would need to do the following in order to build smart search features into your own solutions:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Set up your own vector database instance. This involves choosing a database platform, installing the software, and configuring the database."}),"\n",(0,a.jsx)(t.li,{children:"Build out the entire pipeline for turning images/text into embeddings. This involves using a computer vision or natural language processing (NLP) library to extract features from images or text, and then converting those features into a vector representation."}),"\n",(0,a.jsx)(t.li,{children:"Insert or query the vector database. This involves using the database's API to add new data or search for existing data."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This process can be very time-consuming and complex, especially for developers who are not familiar with vector databases or machine learning."}),"\n",(0,a.jsx)(t.p,{children:"Clarifai eliminates the need for developers to do all of this work by providing an out of the box solution for building state-of-the-art smart search capabilities."}),"\n",(0,a.jsx)(t.h2,{id:"types-of-smart-search",children:"Types of Smart Search"}),"\n",(0,a.jsx)(t.p,{children:"We offer the following types of Smart Search options on our platform:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Smart Image Search"}),"\u2014Allows you to retrieve images sorted by their visual relevance to a query in the form of:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Image"}),"\u2014Provide a reference image of interest to compare inputs against."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Concept"}),"\u2014Provide a trained concept to compare input predictions against."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Caption"}),"\u2014Provide a full-text description to compare inputs against."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Smart Object Search"}),"\u2014Allows you to retrieve annotated objects (bounding boxes within images) sorted by their visual relevance to a query in the form of:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Image"}),"\u2014Provide a reference image of interest to compare inputs against."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Concept"}),"\u2014Provide a trained concept to compare input predictions against."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Caption"}),"\u2014Provide a full-text description to compare inputs against."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Smart Text Search"}),"\u2014Allows you to retrieve text data sorted by their content and semantic similarity to a query in the form of:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Text"}),"\u2014Provide a text description to compare input predictions against."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Concept"}),"\u2014Provide a trained concept to compare input predictions against."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},12987:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/spacetime-bfa0d6ae24419bc14d4f3595c7fe6da6.svg"},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);