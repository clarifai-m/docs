"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3281],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(r),c=n,d=g["".concat(s,".").concat(c)]||g[c]||y[c]||l;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},39733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const l={description:"Learn about the different types of our releases",sidebar_position:-100},o="Clarifai Release Types",i={unversionedId:"product-updates/changelog/release-types",id:"product-updates/changelog/release-types",title:"Clarifai Release Types",description:"Learn about the different types of our releases",source:"@site/docs/product-updates/changelog/release-types.md",sourceDirName:"product-updates/changelog",slug:"/product-updates/changelog/release-types",permalink:"/product-updates/changelog/release-types",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/product-updates/changelog/release-types.md",tags:[],version:"current",sidebarPosition:-100,frontMatter:{description:"Learn about the different types of our releases",sidebar_position:-100},sidebar:"tutorialSidebar",previous:{title:"Changelog",permalink:"/product-updates/changelog"},next:{title:"Release 10.5",permalink:"/product-updates/changelog/release105"}},s={},p=[],u={toc:p},g="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"clarifai-release-types"},"Clarifai Release Types"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Learn about the different types of our releases")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Clarifai release types refer to the different stages or types of releases that our software product can go through \u2014 from development to deployment. These options help us manage the introduction of new features, bug fixes, and updates while ensuring quality and stability. "),(0,n.yg)("p",null,"We can issue a release at any of the following phases, based on the degree of maturity:"),(0,n.yg)("admonition",{title:"Attention",type:"caution"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Non-GA features are provided primarily for evaluation and feedback purposes and should NEVER be used for production workloads. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"We could issue a release as an Enterprise-only feature, meaning it will be accessible exclusively to users on the Enterprise ",(0,n.yg)("a",{parentName:"p",href:"https://www.clarifai.com/pricing"},"pricing plan"),".")))),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Release Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Purpose"),(0,n.yg)("th",{parentName:"tr",align:null},"Interface Stability"),(0,n.yg)("th",{parentName:"tr",align:null},"Support"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("b",null,"Private Preview")),(0,n.yg)("td",{parentName:"tr",align:null},"Alpha quality available only to a select group of users, often by invitation"),(0,n.yg)("td",{parentName:"tr",align:null},"Gather feedback and identify issues from a controlled, smaller user base before wider release"),(0,n.yg)("td",{parentName:"tr",align:null},"No"),(0,n.yg)("td",{parentName:"tr",align:null},"Engineering team")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("b",null,"Developer Preview")),(0,n.yg)("td",{parentName:"tr",align:null},"An early release only for UI modules provided to engineers to give them an opportunity to test new features. It may be feature-complete but unstable"),(0,n.yg)("td",{parentName:"tr",align:null},"Gather feedback from engineers, ensure compatibility, and identify any issues related to the development environment or integration with other systems"),(0,n.yg)("td",{parentName:"tr",align:null},"No"),(0,n.yg)("td",{parentName:"tr",align:null},"Engineering team")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("b",null,"General Availability (GA)")),(0,n.yg)("td",{parentName:"tr",align:null},"The official release of the product to everyone. It is considered stable, feature-complete, and ready for production use"),(0,n.yg)("td",{parentName:"tr",align:null},"The final product is available for use by any user based on their pricing plan"),(0,n.yg)("td",{parentName:"tr",align:null},"Yes"),(0,n.yg)("td",{parentName:"tr",align:null},"Support team")))))}y.isMDXComponent=!0}}]);