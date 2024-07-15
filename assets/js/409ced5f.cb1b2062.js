"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1553],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),y=r,f=u["".concat(s,".").concat(y)]||u[y]||p[y]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},45025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const i={description:"Reduce noise by filtering out unwanted data",sidebar_position:5},o="Filter",l={unversionedId:"portal-guide/psearch/pfilter",id:"portal-guide/psearch/pfilter",title:"Filter",description:"Reduce noise by filtering out unwanted data",source:"@site/docs/portal-guide/psearch/pfilter.md",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/pfilter",permalink:"/portal-guide/psearch/pfilter",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/psearch/pfilter.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Reduce noise by filtering out unwanted data",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Combine or Negate",permalink:"/portal-guide/psearch/pcombine_or_negate"},next:{title:"Clarifai Organizations",permalink:"/portal-guide/clarifai-organizations/"}},s={},c=[{value:"Filter by metadata",id:"filter-by-metadata",level:2},{value:"Filter by geo-location",id:"filter-by-geo-location",level:2},{value:"Filter by annotations",id:"filter-by-annotations",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"filter"},"Filter"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Reduce noise by filtering out unwanted data")),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"filter-by-metadata"},"Filter by metadata"),(0,r.yg)("p",null,"Attach additional information to your inputs as you upload them to the Clarifai platform. Add product IDs, user IDs, or any other relevant information needed to drive specific business outcomes. Metadata can be used to quickly filter your data, and can be combined with ranking criteria."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(54891).A,width:"2418",height:"1206"})),(0,r.yg)("p",null,"You can even search by metadata in the single image view in Portal. Just expand the metadata window, click table, and then click the line that has the metadata you would like to use for search. The line is automatically added to the search bar and will filter your search results."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(95889).A,width:"1578",height:"510"})),(0,r.yg)("h2",{id:"filter-by-geo-location"},"Filter by geo-location"),(0,r.yg)("p",null,"Combine visual search with location-awareness to organize your data by place. Include latitude and longitude information when you upload your data, and then filter to find all inputs within a given radius. Or even define a region on the map and limit your results to the inputs within that region."),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(50788).A,width:"2418",height:"1206"})),(0,r.yg)("h2",{id:"filter-by-annotations"},"Filter by annotations"),(0,r.yg)("p",null,'Annotations are the human-labeled concepts on your inputs. Typically part of your "training" dataset, these inputs are indexed alongside model predictions and similarity search information. Collaboration tools make it easy to track annotations done by different team members.'),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(95276).A,width:"2418",height:"1206"})))}p.isMDXComponent=!0},95276:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/filter_by_annotations-d7086962f601c11aa3256709801ad7dd.jpg"},50788:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/filter_by_geolocation-660725e72b454d203aa8afe2d0cf2f9b.jpg"},54891:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/filter_by_metadata-a30c35636624cb8693f59b6ff320fd3f.jpg"},95889:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/metadata_search_image_view-a80445200a9994485ec79f40db158c54.jpg"}}]);