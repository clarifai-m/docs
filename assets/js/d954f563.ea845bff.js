"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9873],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),o=t(2389),i=t(9443);var s=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),l=t(6010),c="tabItem_vU9c";function p(e){var n,t,o,i=e.lazy,p=e.block,d=e.defaultValue,f=e.values,m=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,u.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(o=b[0])?void 0:o.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=s(),w=y.tabGroupChoices,O=y.setTabGroupChoices,T=(0,r.useState)(k),_=T[0],E=T[1],P=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=w[m];null!=x&&x!==_&&h.some((function(e){return e.value===x}))&&E(x)}var N=function(e){var n=e.currentTarget,t=P.indexOf(n),a=h[t].value;a!==_&&(j(n),E(a),null!=m&&O(m,a))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;t=P[r]||P[P.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var n=e.value,t=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":_===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function d(e){var n=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},7770:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(6396),s=t(8215),u=["components"],l={description:"This is a page about performing task annotations with the Clarifai API.",sidebar_position:5},c="Task Annotations",p={unversionedId:"api-guide/annotate/task-annotations",id:"api-guide/annotate/task-annotations",title:"Task Annotations",description:"This is a page about performing task annotations with the Clarifai API.",source:"@site/docs/api-guide/annotate/task-annotations.md",sourceDirName:"api-guide/annotate",slug:"/api-guide/annotate/task-annotations",permalink:"/api-guide/annotate/task-annotations",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/annotate/task-annotations.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"This is a page about performing task annotations with the Clarifai API.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tasks",permalink:"/api-guide/annotate/tasks"},next:{title:"Creating and Training Models",permalink:"/api-guide/model/"}},d=[],f={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"task-annotations"},"Task Annotations"),(0,o.kt)("p",null,"In order to keep track of each user's work assigned to a task, all the annotations of this user related to this task should be linked to the task id."),(0,o.kt)("p",null,"Therefore, when a user creates an annotation, the task id should be provided as below:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n    {\n      "annotations": [\n        {\n          "input_id": "{{asset_id}}",\n          "data": {\n            "concepts": [\n              {\n                "id": "tree",\n                "value": 1\n              },\n              {\n                "id": "water",\n                "value": 0\n              }\n            ]\n          },\n          "annotation_info": {\n            "task_id": "{{task_id}}"\n          }\n        }\n      ]\n    }\'\\\n  https://api.clarifai.com/v2/annotations\n'))),(0,o.kt)(s.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n    "annotations": [\n    {\n      "input_id": "{{asset_id}}",\n      "data": {\n        "concepts": [\n          {\n            "id": "tree",\n            "value": 1\n          },\n          {\n            "id": "water",\n            "value": 0\n          }\n        ]\n      },\n      "annotation_info": {\n        "task_id": "{{task_id}}"\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/annotations", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))))}m.isMDXComponent=!0}}]);