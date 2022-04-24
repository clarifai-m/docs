"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9339],{3905:function(e,a,r){r.d(a,{Zo:function(){return c},kt:function(){return h}});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),u=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},c=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=n,v=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return r?t.createElement(v,s(s({ref:a},c),{},{components:r})):t.createElement(v,s({ref:a},c))}));function h(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58215:function(e,a,r){var t=r(67294);a.Z=function(e){var a=e.children,r=e.hidden,n=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:n},a)}},26396:function(e,a,r){r.d(a,{Z:function(){return d}});var t=r(87462),n=r(67294),o=r(72389),s=r(79443);var l=function(){var e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(63616),u=r(86010),c="tabItem_vU9c";function p(e){var a,r,o,s=e.lazy,p=e.block,d=e.defaultValue,h=e.values,v=e.groupId,m=e.className,f=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:f.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),b=(0,i.lx)(y,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(a=null!=d?d:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?a:null==(o=f[0])?void 0:o.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),T=k.tabGroupChoices,w=k.setTabGroupChoices,S=(0,n.useState)(g),O=S[0],E=S[1],x=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=T[v];null!=j&&j!==O&&y.some((function(e){return e.value===j}))&&E(j)}var C=function(e){var a=e.currentTarget,r=x.indexOf(a),t=y[r].value;t!==O&&(N(a),E(t),null!=v&&w(v,t))},_=function(e){var a,r=null;switch(e.key){case"ArrowRight":var t=x.indexOf(e.currentTarget)+1;r=x[t]||x[0];break;case"ArrowLeft":var n=x.indexOf(e.currentTarget)-1;r=x[n]||x[x.length-1]}null==(a=r)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},m)},y.map((function(e){var a=e.value,r=e.label,o=e.attributes;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:C,onClick:C},o,{className:(0,u.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===a})}),null!=r?r:a)}))),s?(0,n.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}function d(e){var a=(0,o.Z)();return n.createElement(p,(0,t.Z)({key:String(a)},e))}},18077:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return v}});var t=r(87462),n=r(63366),o=(r(67294),r(3905)),s=r(26396),l=r(58215),i=["components"],u={description:"Save your searches",sidebar_position:4},c="Saved Searches",p={unversionedId:"api-guide/search/legacy-search/saved_searches",id:"api-guide/search/legacy-search/saved_searches",title:"Saved Searches",description:"Save your searches",source:"@site/docs/api-guide/search/legacy-search/saved_searches.md",sourceDirName:"api-guide/search/legacy-search",slug:"/api-guide/search/legacy-search/saved_searches",permalink:"/api-guide/search/legacy-search/saved_searches",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/search/legacy-search/saved_searches.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Save your searches",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/api-guide/search/legacy-search/rank"},next:{title:"Advanced Topics",permalink:"/api-guide/advanced-topics/"}},d=[{value:"Create a Saved Search",id:"create-a-saved-search",children:[],level:2},{value:"List Saved Searches in an App",id:"list-saved-searches-in-an-app",children:[],level:2},{value:"Search by Search ID",id:"search-by-search-id",children:[],level:2}],h={toc:d};function v(e){var a=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},h,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"saved-searches"},"Saved Searches"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Save your searches")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"With saved searches, you can capture your search results at a given point in time, and record the inputs, annotations, search parameters, and models that you are running through the platform. "),(0,o.kt)("p",null,"Saved searches help you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Save a search so that you can return to those same results later"),(0,o.kt)("li",{parentName:"ul"},"Share a search with a collaborator in your app"),(0,o.kt)("li",{parentName:"ul"},'Carve out data that you want to evaluate your models on as a "golden set"'),(0,o.kt)("li",{parentName:"ul"},"Split your data into training sets and test tests")),(0,o.kt)("h2",{id:"create-a-saved-search"},"Create a Saved Search"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://api.clarifai.com/v2/searches/\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: Key {{key}}\' \\\n--data-raw \'{\n    "searches": [{\n        "query": {\n            "ands": [{\n                "annotation":{\n                    "annotation_info": {\n                        "asset_set": ["set1", "set2"]\n                    }\n                }\n            }]\n        },\n        "save": true,\n        "id": "dataset-1589318146",\n        "name": "Dataset #1589318146"\n    }]\n}\n\'\n')))),(0,o.kt)("h2",{id:"list-saved-searches-in-an-app"},"List Saved Searches in an App"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.clarifai.com/v2/searches/' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Key {{key}}'\n")))),(0,o.kt)("h2",{id:"search-by-search-id"},"Search by Search ID"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.clarifai.com/v2/searches/{{search_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Key {{key}}' \\\n--data-raw '{\n  \"pagination\": {\n    \"page\": 1,\n    \"per_page\": 5\n  }\n}'\n")))),(0,o.kt)("p",null,"Saved searches are extremely helpful when testing out multiple versions of a model, or collaborating with a team. Just save your search, and refer back to it any time."))}v.isMDXComponent=!0}}]);