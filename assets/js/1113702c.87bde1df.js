"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9117],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,c(c({ref:t},p),{},{components:n})):a.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(72389),c=n(79443);var i=function(){var e=(0,r.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(63616),u=n(86010),p="tabItem_vU9c";function s(e){var t,n,o,c=e.lazy,s=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),w=y.tabGroupChoices,O=y.setTabGroupChoices,C=(0,r.useState)(k),N=C[0],E=C[1],x=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=w[f];null!=Z&&Z!==N&&g.some((function(e){return e.value===Z}))&&E(Z)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==N&&(T(t),E(a),null!=f&&O(f,a))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return x.push(e)},onKeyDown:j,onFocus:D,onClick:D},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},48406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=(n(26396),n(58215),["components"]),i={description:"Manage your concepts.",sidebar_position:1},l="Create, Get, Update, Delete",u={unversionedId:"portal-guide/concepts/create-get-update-delete",id:"portal-guide/concepts/create-get-update-delete",title:"Create, Get, Update, Delete",description:"Manage your concepts.",source:"@site/docs/portal-guide/concepts/create-get-update-delete.md",sourceDirName:"portal-guide/concepts",slug:"/portal-guide/concepts/create-get-update-delete",permalink:"/portal-guide/concepts/create-get-update-delete",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Manage your concepts.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Creating and Managing Concepts",permalink:"/portal-guide/concepts/"},next:{title:"Knowledge Graph",permalink:"/portal-guide/concepts/knowledge_graph"}},p=[{value:"Create",id:"create",children:[{value:"Add Concepts",id:"add-concepts",children:[],level:3}],level:2},{value:"Get",id:"get",children:[{value:"Get Concept ID",id:"get-concept-id",children:[],level:3}],level:2},{value:"Update",id:"update",children:[{value:"Update Concept Name",id:"update-concept-name",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-get-update-delete"},"Create, Get, Update, Delete"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manage your concepts")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Within your app, you can create concepts, modify them after creation, and get them from your app."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We currently do not support deleting concepts since they have such an integral tie across almost all other data structures in the platform, like inputs, models, searches, etc."))),(0,o.kt)("p",null,"You will find that some of our endpoints have additional information returned from the Clarifai/main app, which contains our pre-trained models and a large knowledge graph we've assembled over the years."),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("h3",{id:"add-concepts"},"Add Concepts"),(0,o.kt)("p",null,'To create a new concept in the legacy Portal, start by heading to your application\'s page. Then, either click the "View In Explorer" button or the "eye" icon in the lefthand sidebar.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12275).Z})),(0,o.kt)("p",null,'On the ensuing page, click the plus (+) sign next to "Concepts" to add a new concept. '),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(38574).Z})),(0,o.kt)("p",null,'A "Create new concept" window will then pop up where you can provide a concept name and click the "add" button. You can provide as many concept names as you want. After finishing adding the concept names, click the "done" button. '),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(70237).Z})),(0,o.kt)("p",null,'You can view the concepts you\'ve created under the "Concepts" category. '),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(57053).Z})),(0,o.kt)("h2",{id:"get"},"Get"),(0,o.kt)("h3",{id:"get-concept-id"},"Get Concept ID"),(0,o.kt)("p",null,"To get a concept's ID, click the little 3-dot menu next to the concept's name. On the window that pops up, select \"View Details.\""),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4812).Z})),(0,o.kt)("p",null,"You'll be redirected to the concept's page, where you can view its details, including its ID. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(98723).Z})),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("h3",{id:"update-concept-name"},"Update Concept Name"),(0,o.kt)("p",null,"To update a concept's name, navigate to its page as illustrated previously. "),(0,o.kt)("p",null,"Then, click the edit button next to the concept's name to make the update."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43261).Z})))}d.isMDXComponent=!0},70237:function(e,t,n){t.Z=n.p+"assets/images/concept-create-new-concept-2e4a48caa0d8a2f3b922a96786655f49.png"},43261:function(e,t,n){t.Z=n.p+"assets/images/concept-edit-name-24381c16be3f952474ef4d6e26731ccd.png"},4812:function(e,t,n){t.Z=n.p+"assets/images/concept-get-id-1f3eaee4b3032667b0ff3b2e3c9083c7.png"},38574:function(e,t,n){t.Z=n.p+"assets/images/concept-plus-sign-3622d927286731242b369ce794ab1f58.png"},57053:function(e,t,n){t.Z=n.p+"assets/images/concept-view-created-4cb3b4ead52b53c1d1624a982a73094d.png"},98723:function(e,t,n){t.Z=n.p+"assets/images/concept-view-id-acc1f8cc0ff4bc326d2645e3a984cb67.png"},12275:function(e,t,n){t.Z=n.p+"assets/images/concept-view-in-explorer-42ac7f8ad843a26a0de5d92425780a3c.png"}}]);