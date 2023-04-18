"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8559],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),f=r,y=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return a?n.createElement(y,o(o({ref:t},d),{},{components:a})):n.createElement(y,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={description:"Reduce noise by filtering out unwanted data.",sidebar_position:2},o="Filter",l={unversionedId:"legacy-portal-guide/psearch/pfilter",id:"legacy-portal-guide/psearch/pfilter",title:"Filter",description:"Reduce noise by filtering out unwanted data.",source:"@site/docs/legacy-portal-guide/psearch/pfilter.md",sourceDirName:"legacy-portal-guide/psearch",slug:"/legacy-portal-guide/psearch/pfilter",permalink:"/legacy-portal-guide/psearch/pfilter",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Reduce noise by filtering out unwanted data.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/legacy-portal-guide/psearch/prank"},next:{title:"Combine or Negate",permalink:"/legacy-portal-guide/psearch/pcombine_or_negate"}},c={},s=[{value:"Filter by metadata",id:"filter-by-metadata",level:2},{value:"Filter by geo-location",id:"filter-by-geo-location",level:2},{value:"Filter by annotations",id:"filter-by-annotations",level:2}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"filter"},"Filter"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reduce noise by filtering out unwanted data")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"filter-by-metadata"},"Filter by metadata"),(0,r.kt)("p",null,"Attach additional information to your inputs as you upload them to the Clarifai platform. Add product IDs, user IDs, or any other relevant information needed to drive specific business outcomes. Metadata can be used to quickly filter your data, and can be combined with ranking criteria."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6423).Z,width:"2418",height:"1206"})),(0,r.kt)("p",null,"You can even search by metadata in the single image view in Portal. Just expand the metadata window, click table, and then click the line that has the metadata you would like to use for search. The line is automatically added to the search bar and will filter your search results."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(57069).Z,width:"1578",height:"510"})),(0,r.kt)("h2",{id:"filter-by-geo-location"},"Filter by geo-location"),(0,r.kt)("p",null,"Combine visual search with location-awareness to organize your data by place. Include latitude and longitude information when you upload your data, and then filter to find all inputs within a given radius. Or even define a region on the map and limit your results to the inputs within that region."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(56525).Z,width:"2418",height:"1206"})),(0,r.kt)("h2",{id:"filter-by-annotations"},"Filter by annotations"),(0,r.kt)("p",null,'Annotations are the human-labeled concepts on your inputs. Typically part of your "training" dataset, these inputs are indexed alongside model predictions and similarity search information. Collaboration tools make it easy to track annotations done by different team members.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(62397).Z,width:"2418",height:"1206"})))}u.isMDXComponent=!0},62397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/filter_by_annotations-d7086962f601c11aa3256709801ad7dd.jpg"},56525:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/filter_by_geolocation-660725e72b454d203aa8afe2d0cf2f9b.jpg"},6423:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/filter_by_metadata-a30c35636624cb8693f59b6ff320fd3f.jpg"},57069:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metadata_search_image_view-a80445200a9994485ec79f40db158c54.jpg"}}]);