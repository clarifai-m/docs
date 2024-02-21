"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9118],{85162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),s=a(86010);const r={tabItem:"tabItem_Ymn6"};function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(87462),s=a(67294),r=a(86010),u=a(12466),l=a(16550),i=a(91980),o=a(67392),d=a(50012);function c(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function p(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[u,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,o]=b({queryString:a,groupId:n}),[c,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=i??c;return m({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:u,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),f(e)}),[o,f,r]),tabValues:r}}var h=a(72389);const E={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=o[a].value;n!==l&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:u}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},u,{className:(0,r.Z)("tabs__item",E.tabItem,u?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",E.tabList)},s.createElement(_,(0,n.Z)({},e,t)),s.createElement(v,(0,n.Z)({},e,t)))}function g(e){const t=(0,h.Z)();return s.createElement(T,(0,n.Z)({key:String(t)},e))}},15800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>b,toc:()=>h});var n=a(87462),s=(a(67294),a(3905)),r=a(74866),u=a(85162),l=a(90814);const i='curl --location -g --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_inputs": [\n        {\n            "input": {\n                "id": "YOUR_INPUT_ID_HERE"\n            }\n        }\n    ]\n}\'',o='curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs?page=1&per_page=100" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"',d='curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs/YOUR_INPUT_ID_HERE" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"',c='curl --location -g --request DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs/" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "input_ids": ["YOUR_INPUT_ID_HERE"]\n}\'',p={description:"Create, explore and modify datasets",sidebar_position:3},m="Dataset Inputs",b={unversionedId:"api-guide/data/datasets/dataset-inputs",id:"api-guide/data/datasets/dataset-inputs",title:"Dataset Inputs",description:"Create, explore and modify datasets",source:"@site/docs/api-guide/data/datasets/dataset-inputs.md",sourceDirName:"api-guide/data/datasets",slug:"/api-guide/data/datasets/dataset-inputs",permalink:"/api-guide/data/datasets/dataset-inputs",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/data/datasets/dataset-inputs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Create, explore and modify datasets",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dataset Annotation Filters",permalink:"/api-guide/data/datasets/dataset-filters"},next:{title:"Dataset Versions",permalink:"/api-guide/data/datasets/dataset-versions"}},f={},h=[{value:"Add Inputs to a Dataset",id:"add-inputs-to-a-dataset",level:2},{value:"List Inputs in Datasets",id:"list-inputs-in-datasets",level:2},{value:"Get a Dataset Input",id:"get-a-dataset-input",level:2},{value:"Delete Inputs",id:"delete-inputs",level:2}],E={toc:h},_="wrapper";function v(e){let{components:t,...a}=e;return(0,s.kt)(_,(0,n.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dataset-inputs"},"Dataset Inputs"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create, explore, and modify datasets")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"add-inputs-to-a-dataset"},"Add Inputs to a Dataset"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},i))),(0,s.kt)("h2",{id:"list-inputs-in-datasets"},"List Inputs in Datasets"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},o))),(0,s.kt)("h2",{id:"get-a-dataset-input"},"Get a Dataset Input"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},d))),(0,s.kt)("h2",{id:"delete-inputs"},"Delete Inputs"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},c))))}v.isMDXComponent=!0}}]);