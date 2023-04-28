"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9352],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,h=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(h,c(c({ref:t},s),{},{components:n})):a.createElement(h,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:n,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),o=n(86010),c=n(12466),l=n(76775),i=n(91980),u=n(67392),s=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[c,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,o]),tabValues:o}}var f=n(72389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,c.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},g=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:c}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:g,onClick:d},c,{className:(0,o.Z)("tabs__item",v,null==c?void 0:c.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},7920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));n(74866),n(85162);const o={description:"Manage your concepts.",sidebar_position:1},c="Create, Get, Update, Delete",l={unversionedId:"legacy-portal-guide/concepts/create-get-update-delete",id:"legacy-portal-guide/concepts/create-get-update-delete",title:"Create, Get, Update, Delete",description:"Manage your concepts.",source:"@site/docs/legacy-portal-guide/concepts/create-get-update-delete.md",sourceDirName:"legacy-portal-guide/concepts",slug:"/legacy-portal-guide/concepts/create-get-update-delete",permalink:"/legacy-portal-guide/concepts/create-get-update-delete",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Manage your concepts.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating and Managing Concepts",permalink:"/legacy-portal-guide/concepts/"},next:{title:"Knowledge Graph",permalink:"/legacy-portal-guide/concepts/knowledge_graph"}},i={},u=[{value:"Create",id:"create",level:2},{value:"Add Concepts",id:"add-concepts",level:3},{value:"Get",id:"get",level:2},{value:"Get Concept ID",id:"get-concept-id",level:3},{value:"Update",id:"update",level:2},{value:"Update Concept Name",id:"update-concept-name",level:3}],s={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-get-update-delete"},"Create, Get, Update, Delete"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manage your concepts")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Within your app, you can create concepts, modify them after creation, and get them from your app."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We currently do not support deleting concepts since they have such an integral tie across almost all other data structures in the platform, like inputs, models, searches, etc.")),(0,r.kt)("p",null,"You will find that some of our endpoints have additional information returned from the Clarifai/main app, which contains our pre-trained models and a large knowledge graph we've assembled over the years."),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("h3",{id:"add-concepts"},"Add Concepts"),(0,r.kt)("p",null,'To create a new concept in the legacy Portal, start by heading to your application\'s page. Then, either click the "View In Explorer" button or the "eye" icon in the lefthand sidebar.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(92760).Z,width:"1873",height:"905"})),(0,r.kt)("p",null,'On the ensuing page, click the plus (+) sign next to "Concepts" to add a new concept. '),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(46993).Z,width:"1455",height:"536"})),(0,r.kt)("p",null,'A "Create new concept" window will then pop up where you can provide a concept name and click the "add" button. You can provide as many concept names as you want. After finishing adding the concept names, click the "done" button. '),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37262).Z,width:"1747",height:"643"})),(0,r.kt)("p",null,'You can view the concepts you\'ve created under the "Concepts" category. '),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73956).Z,width:"1267",height:"821"})),(0,r.kt)("h2",{id:"get"},"Get"),(0,r.kt)("h3",{id:"get-concept-id"},"Get Concept ID"),(0,r.kt)("p",null,"To get a concept's ID, click the little 3-dot menu next to the concept's name. On the window that pops up, select \"View Details.\""),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(51984).Z,width:"1475",height:"879"})),(0,r.kt)("p",null,"You'll be redirected to the concept's page, where you can view its details, including its ID. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94).Z,width:"1461",height:"607"})),(0,r.kt)("h2",{id:"update"},"Update"),(0,r.kt)("h3",{id:"update-concept-name"},"Update Concept Name"),(0,r.kt)("p",null,"To update a concept's name, navigate to its page as illustrated previously. "),(0,r.kt)("p",null,"Then, click the edit button next to the concept's name to make the update."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3827).Z,width:"1483",height:"603"})))}p.isMDXComponent=!0},37262:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concept-create-new-concept-2e4a48caa0d8a2f3b922a96786655f49.png"},3827:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concept-edit-name-24381c16be3f952474ef4d6e26731ccd.png"},51984:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concept-get-id-1f3eaee4b3032667b0ff3b2e3c9083c7.png"},46993:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concept-plus-sign-3622d927286731242b369ce794ab1f58.png"},73956:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concept-view-created-4cb3b4ead52b53c1d1624a982a73094d.png"},94:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concept-view-id-acc1f8cc0ff4bc326d2645e3a984cb67.png"},92760:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concept-view-in-explorer-42ac7f8ad843a26a0de5d92425780a3c.png"}}]);