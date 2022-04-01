"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3625],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),v=r,m=p["".concat(l,".").concat(v)]||p[v]||c[v]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),r=a(7294),s=a(2389),o=a(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(3616),u=a(6010),d="tabItem_vU9c";function c(e){var t,a,s,o=e.lazy,c=e.block,p=e.defaultValue,v=e.values,m=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(s=b[0])?void 0:s.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),T=k.tabGroupChoices,w=k.setTabGroupChoices,O=(0,r.useState)(g),E=O[0],x=O[1],_=[],N=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=T[m];null!=j&&j!==E&&h.some((function(e){return e.value===j}))&&x(j)}var P=function(e){var t=e.currentTarget,a=_.indexOf(t),n=h[a].value;n!==E&&(N(t),x(n),null!=m&&w(m,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return _.push(e)},onKeyDown:C,onFocus:P,onClick:P},s,{className:(0,u.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function p(e){var t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},7934:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),s=(a(7294),a(3905)),o=a(6396),i=a(8215),l=["components"],u={description:"Manage dataset versions so you can track the performance of and iterate on your datasets",sidebar_position:4},d="Dataset Versions",c={unversionedId:"api-guide/data/datasets/dataset-versions",id:"api-guide/data/datasets/dataset-versions",title:"Dataset Versions",description:"Manage dataset versions so you can track the performance of and iterate on your datasets",source:"@site/docs/api-guide/data/datasets/dataset-versions.md",sourceDirName:"api-guide/data/datasets",slug:"/api-guide/data/datasets/dataset-versions",permalink:"/docs-new/api-guide/data/datasets/dataset-versions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/data/datasets/dataset-versions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Manage dataset versions so you can track the performance of and iterate on your datasets",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dataset Inputs",permalink:"/docs-new/api-guide/data/datasets/dataset-inputs"},next:{title:"Supported Formats",permalink:"/docs-new/api-guide/data/supported-formats"}},p=[{value:"Add a dataset version",id:"add-a-dataset-version",children:[],level:2},{value:"List dataset versions",id:"list-dataset-versions",children:[],level:2},{value:"Get a dataset versions",id:"get-a-dataset-versions",children:[],level:2},{value:"Change a dataset version",id:"change-a-dataset-version",children:[],level:2},{value:"Delete a dataset version",id:"delete-a-dataset-version",children:[],level:2}],v={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dataset-versions"},"Dataset Versions"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Manage dataset versions so you can track the performance of your datasets and iterate over them")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"add-a-dataset-version"},"Add a dataset version"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request POST \'api.clarifai.com/v2/datasets/{{dataset_id}}/versions\' \\\n--header \'Authorization: Key {{YOUR API KEY}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "dataset_versions": [\n        {\n            "id": "dataset-version-1633032673",\n            "name": "foo",\n            "dataset_filter": {\n                "id": "{{dataset_filter_id}}"\n            }\n        }\n    ]\n}\'\n')))),(0,s.kt)("h2",{id:"list-dataset-versions"},"List dataset versions"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions?page=1&per_page=100' \\\n--header 'Authorization: Key {{YOUR API KEY}}' \\\n--header 'Content-Type: application/json'\n")))),(0,s.kt)("h2",{id:"get-a-dataset-versions"},"Get a dataset versions"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request GET 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions/{{dataset_version_id}}' \\\n--header 'Authorization: Key {{YOUR API KEY}}' \\\n--header 'Content-Type: application/json'\n")))),(0,s.kt)("h2",{id:"change-a-dataset-version"},"Change a dataset version"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location -g --request PATCH \'api.clarifai.com/v2/datasets/{{dataset_id}}/versions\' \\\n--header \'Authorization: Key {{YOUR API KEY}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "dataset_versions": [\n        {\n            "id": "{{dataset_version_id}}",\n            "name": "dataset version updated name"\n        }\n    ],\n    "action": "overwrite"\n}\'\n')))),(0,s.kt)("h2",{id:"delete-a-dataset-version"},"Delete a dataset version"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location -g --request DELETE 'api.clarifai.com/v2/datasets/{{dataset_id}}/versions' \\\n--header 'Authorization: Key {{YOUR API KEY}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"dataset_version_ids\": [\"{{dataset_version_id}}\"]\n}'\n")))))}m.isMDXComponent=!0}}]);