"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3958],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(a),d=r,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7462),r=a(7294),i=a(2389),o=a(9443);var c=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(3616),l=a(6010),u="tabItem_vU9c";function p(e){var t,a,i,o=e.lazy,p=e.block,f=e.defaultValue,d=e.values,m=e.groupId,y=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(t=null!=f?f:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=h[0])?void 0:i.props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=c(),w=g.tabGroupChoices,P=g.setTabGroupChoices,A=(0,r.useState)(k),O=A[0],T=A[1],E=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=w[m];null!=x&&x!==O&&v.some((function(e){return e.value===x}))&&T(x)}var C=function(e){var t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==O&&(I(t),T(n),null!=m&&P(m,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;a=E[r]||E[E.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},y)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:C,onClick:C},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function f(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},2563:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return f},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(6396),c=a(8215),s=["components"],l={sidebar_position:1},u="App-Specific API Keys",p={unversionedId:"clarifai-basics/authentication/app-specific-api-keys",id:"clarifai-basics/authentication/app-specific-api-keys",title:"App-Specific API Keys",description:"App-specific API Keys are used to authorize your Clarifai applications. A key is automatically generated when you create a new application. You can also go to the Application's List, select an app of your choice and create a new key in the app details page. Each API key is tied to a specific user and a specific app.",source:"@site/docs/clarifai-basics/authentication/app-specific-api-keys.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/app-specific-api-keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/authentication/app-specific-api-keys.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/clarifai-basics/authentication/"},next:{title:"Authorize",permalink:"/clarifai-basics/authentication/authorize"}},f=[{value:"Create an API Key in Portal",id:"create-an-api-key-in-portal",children:[],level:2},{value:"Create an API Key programmatically",id:"create-an-api-key-programmatically",children:[],level:2}],d={toc:f};function m(e){var t=e.components,l=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"app-specific-api-keys"},"App-Specific API Keys"),(0,i.kt)("p",null,"App-specific API Keys are used to authorize your Clarifai applications. A key is automatically generated when you create a new application. You can also go to the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/apps"},"Application's List"),", select an app of your choice and create a new key in the app details page. ",(0,i.kt)("em",{parentName:"p"},"Each API key is tied to a specific user and a specific app.")),(0,i.kt)("p",null,"You have fine-grained control over the data exposed through your app. You can control the scope of an API Key through a simple checkbox interface when you first set up your app."),(0,i.kt)("h2",{id:"create-an-api-key-in-portal"},"Create an API Key in Portal"),(0,i.kt)("p",null,'Just navigate to the app management page and click "Create an API Key"'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6532).Z})),(0,i.kt)("h2",{id:"create-an-api-key-programmatically"},"Create an API Key programmatically"),(0,i.kt)("p",null,"For enterprise customers, it is also possible to generate applications and keys programmatically. If you are managing the work of multiple users who's data, models, and concepts need to be segregated, we recommend you create apps and a keys this way. This ensures that each individual user only has access to their own private resources."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"cURL",label:"cURL",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.clarifai.com/v2/users/{{user_id}}/keys\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Clarifai-Session-Token: {{session_token}}\' \\\n--data-raw \'{\n    "keys": [\n        {\n            "description": "All permissions",\n            "scopes": [\n                "All"\n            ],\n            "apps": [\n                {\n                    "id": "{{app_id}}",\n                    "user_id": "{{user_id}}"\n                }\n            ]\n        }\n    ]\n}\'\n')))),(0,i.kt)("p",null,"API Keys do not expire. In case your API Key gets compromised, you should delete that key, and create a new one with the same scopes. We recommend that you do ",(0,i.kt)("strong",{parentName:"p"},"not")," share your API Key with other users."))}m.isMDXComponent=!0},6532:function(e,t,a){t.Z=a.p+"assets/images/apikey-screen-8f8010af338f2765d4e43ad932d4d601.png"}}]);