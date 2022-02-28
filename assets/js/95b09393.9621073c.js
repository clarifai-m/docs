"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1374],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(m,o(o({ref:a},p),{},{components:t})):n.createElement(m,o({ref:a},p))}));function f(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},6396:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(7462),r=t(7294),i=t(2389),o=t(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(3616),s=t(6010),p="tabItem_vU9c";function u(e){var a,t,i,o=e.lazy,u=e.block,d=e.defaultValue,f=e.values,m=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),y=(0,c.lx)(h,(function(e,a){return e.value===a.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(a=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(i=b[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=l(),k=w.tabGroupChoices,C=w.setTabGroupChoices,O=(0,r.useState)(g),T=O[0],E=O[1],P=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==T&&h.some((function(e){return e.value===j}))&&E(j)}var A=function(e){var a=e.currentTarget,t=P.indexOf(a),n=h[t].value;n!==T&&(x(a),E(n),null!=m&&C(m,n))},N=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;t=P[n]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},h.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return P.push(e)},onKeyDown:N,onFocus:A,onClick:A},i,{className:(0,s.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function d(e){var a=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(a)},e))}},9839:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(6396),l=t(8215),c=["components"],s={description:"How to create a Clarifai Application",sidebar_position:1},p="Create an Application",u={unversionedId:"clarifai-basics/applications/create-an-application",id:"clarifai-basics/applications/create-an-application",title:"Create an Application",description:"How to create a Clarifai Application",source:"@site/docs/clarifai-basics/applications/create-an-application.md",sourceDirName:"clarifai-basics/applications",slug:"/clarifai-basics/applications/create-an-application",permalink:"/docs-new/clarifai-basics/applications/create-an-application",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/applications/create-an-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"How to create a Clarifai Application",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/docs-new/clarifai-basics/applications/"},next:{title:"Application Settings",permalink:"/docs-new/clarifai-basics/applications/application-settings"}},d=[{value:"Create Application in Portal",id:"create-application-in-portal",children:[{value:"ID Validation",id:"id-validation",children:[],level:3}],level:2},{value:"Create Applications Programmatically",id:"create-applications-programmatically",children:[{value:"Copy Applications",id:"copy-applications",children:[],level:3}],level:2}],f={toc:d};function m(e){var a=e.components,s=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-an-application"},"Create an Application"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"How to create a Clarifai application")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"create-application-in-portal"},"Create Application in Portal"),(0,i.kt)("p",null,"To create an application, head to the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/"},"Portal")," and press the 'Create Application' button. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Application creation window",src:t(5153).Z})),(0,i.kt)("h3",{id:"id-validation"},"ID Validation"),(0,i.kt)("p",null,"Application names and other names in the Portal must follow a few rules. Names must be 1 to 32 letters or numbers in length, with hyphens or underscores as separators. Note that spaces, periods, etc are not allowed as separators. "),(0,i.kt)("p",null,"You can also set the default language so that you can create, train and search concepts in your own language. Please keep in mind that pre-trained model concepts currently only work in English."),(0,i.kt)("h2",{id:"create-applications-programmatically"},"Create Applications Programmatically"),(0,i.kt)("p",null,"For enterprise customers, it is also possible to generate applications and keys programmatically. If you are managing the work of multiple users, who's data, models, and concepts need to be segregated, we recommend you create apps and keys this way. This ensures that each individual user only has access to their own private resources."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"curl --location --request POST 'https://api.clarifai.com/v2/users/{{user_id}}/apps/' \\\n--header 'Content-Type: application/json' \\\n--header 'X-Clarifai-Session-Token: {{session_token}}' \\\n--data-raw '{\n    \"apps\": [\n        {\n            \"id\": \"test-application-1589318146\"\n        }\n    ]\n}'\n")))),(0,i.kt)("h3",{id:"copy-applications"},"Copy Applications"),(0,i.kt)("p",null,"You can also create an application by cloning an existing application. Cloning an existing application can be a great way to start a new project, or branch and existing one. We\u2019ve made cloning easy with a simple interface in the Portal. Just click \u201cCreate Copy\u201d on the bottom-right corner of your app on the app management page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(836).Z})))}m.isMDXComponent=!0},836:function(e,a,t){a.Z=t.p+"assets/images/app_duplication-ee6fb33bf70e295dc46014478f46428a.jpg"},5153:function(e,a,t){a.Z=t.p+"assets/images/create-new-app-new-b870893cd1ccf7b8f78f9f672faa92f7.png"}}]);