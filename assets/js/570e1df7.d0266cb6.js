"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9118],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(a),f=r,m=p["".concat(o,".").concat(f)]||p[f]||c[f]||i;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,s[1]=u;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),i=a(2389),s=a(9443);var u=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(3616),l=a(6010),d="tabItem_vU9c";function c(e){var t,a,i,s=e.lazy,c=e.block,p=e.defaultValue,f=e.values,m=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),T=k.tabGroupChoices,w=k.setTabGroupChoices,O=(0,r.useState)(g),E=O[0],x=O[1],N=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=T[m];null!=C&&C!==E&&h.some((function(e){return e.value===C}))&&x(C)}var D=function(e){var t=e.currentTarget,a=N.indexOf(t),n=h[a].value;n!==E&&(j(t),x(n),null!=m&&w(m,n))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.currentTarget)+1;a=N[n]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.currentTarget)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:D,onClick:D},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,i.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},8934:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=a(6396),u=a(8215),o=["components"],l={description:"Create, explore and modify datasets",sidebar_position:3},d="Dataset Inputs",c={unversionedId:"api-guide/data/datasets/dataset-inputs",id:"api-guide/data/datasets/dataset-inputs",title:"Dataset Inputs",description:"Create, explore and modify datasets",source:"@site/docs/api-guide/data/datasets/dataset-inputs.md",sourceDirName:"api-guide/data/datasets",slug:"/api-guide/data/datasets/dataset-inputs",permalink:"/docs-new/api-guide/data/datasets/dataset-inputs",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/data/datasets/dataset-inputs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Create, explore and modify datasets",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dataset Filters",permalink:"/docs-new/api-guide/data/datasets/dataset-filters"},next:{title:"Dataset Versions",permalink:"/docs-new/api-guide/data/datasets/dataset-versions"}},p=[{value:"Add inputs to a dataset",id:"add-inputs-to-a-dataset",children:[],level:2},{value:"List inputs in a datasets",id:"list-inputs-in-a-datasets",children:[],level:2},{value:"Get a dataset inputs",id:"get-a-dataset-inputs",children:[],level:2},{value:"Delete Inputs",id:"delete-inputs",children:[],level:2}],f={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dataset-inputs"},"Dataset Inputs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Create, explore, and modify datasets")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"add-inputs-to-a-dataset"},"Add inputs to a dataset"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request POST 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs' \\\n--header 'Authorization: Key {{YOUR API KEY}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"dataset_inputs\": [\n        {\n            \"input\": {\n                \"id\": \"{{input_id}}\"\n            }\n        }\n    ]\n}'\n")))),(0,i.kt)("h2",{id:"list-inputs-in-a-datasets"},"List inputs in a datasets"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs?page=1&per_page=100' \\\n--header 'Authorization: Key {{YOUR API KEY}}' \\\n--header 'Content-Type: application/json'\n")))),(0,i.kt)("h2",{id:"get-a-dataset-inputs"},"Get a dataset inputs"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs/{{input_id}}' \\\n--header 'Authorization: Key {{YOUR API KEY}}' \\\n--header 'Content-Type: application/json'\n")))),(0,i.kt)("h2",{id:"delete-inputs"},"Delete Inputs"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request DELETE 'api.clarifai.com/v2/datasets/{{dataset_id}}/inputs' \\\n--header 'Authorization: Key {{YOUR API KEY}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"input_ids\": [\"{{input_id}}\"]\n}'\n")))))}m.isMDXComponent=!0}}]);