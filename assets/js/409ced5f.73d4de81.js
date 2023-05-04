"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={description:"Reduce noise by filtering out unwanted data",sidebar_position:2},o="Filter",l={unversionedId:"portal-guide/psearch/pfilter",id:"portal-guide/psearch/pfilter",title:"Filter",description:"Reduce noise by filtering out unwanted data",source:"@site/docs/portal-guide/psearch/pfilter.md",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/pfilter",permalink:"/portal-guide/psearch/pfilter",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Reduce noise by filtering out unwanted data",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/portal-guide/psearch/prank"},next:{title:"Combine or Negate",permalink:"/portal-guide/psearch/pcombine_or_negate"}},s={},c=[{value:"Filter by metadata",id:"filter-by-metadata",level:2},{value:"Filter by geo-location",id:"filter-by-geo-location",level:2},{value:"Filter by annotations",id:"filter-by-annotations",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filter"},"Filter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reduce noise by filtering out unwanted data")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"filter-by-metadata"},"Filter by metadata"),(0,r.kt)("p",null,"Attach additional information to your inputs as you upload them to the Clarifai platform. Add product IDs, user IDs, or any other relevant information needed to drive specific business outcomes. Metadata can be used to quickly filter your data, and can be combined with ranking criteria."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6423).Z,width:"2418",height:"1206"})),(0,r.kt)("p",null,"You can even search by metadata in the single image view in Portal. Just expand the metadata window, click table, and then click the line that has the metadata you would like to use for search. The line is automatically added to the search bar and will filter your search results."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57069).Z,width:"1578",height:"510"})),(0,r.kt)("h2",{id:"filter-by-geo-location"},"Filter by geo-location"),(0,r.kt)("p",null,"Combine visual search with location-awareness to organize your data by place. Include latitude and longitude information when you upload your data, and then filter to find all inputs within a given radius. Or even define a region on the map and limit your results to the inputs within that region."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(56525).Z,width:"2418",height:"1206"})),(0,r.kt)("h2",{id:"filter-by-annotations"},"Filter by annotations"),(0,r.kt)("p",null,'Annotations are the human-labeled concepts on your inputs. Typically part of your "training" dataset, these inputs are indexed alongside model predictions and similarity search information. Collaboration tools make it easy to track annotations done by different team members.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62397).Z,width:"2418",height:"1206"})))}p.isMDXComponent=!0},62397:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filter_by_annotations-d7086962f601c11aa3256709801ad7dd.jpg"},56525:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filter_by_geolocation-660725e72b454d203aa8afe2d0cf2f9b.jpg"},6423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/filter_by_metadata-a30c35636624cb8693f59b6ff320fd3f.jpg"},57069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metadata_search_image_view-a80445200a9994485ec79f40db158c54.jpg"}}]);