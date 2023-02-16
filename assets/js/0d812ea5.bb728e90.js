"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7303],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>R});var n=a(87462),s=a(67294),r=a(86010),i=a(12466),o=a(76775),l=a(91980),u=a(67392),d=a(50012);function c(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function p(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,u]=f({queryString:a,groupId:n}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),E=(()=>{const e=l??c;return h({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{E&&o(E)}),[E]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var E=a(72389);const _="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==o&&(c(t),l(n))},h=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:p},i,{className:(0,r.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":o===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=m(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",_)},s.createElement(v,(0,n.Z)({},e,t)),s.createElement(T,(0,n.Z)({},e,t)))}function R(e){const t=(0,E.Z)();return s.createElement(g,(0,n.Z)({key:String(t)},e))}},62456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),s=(a(67294),a(3905)),r=a(74866),i=a(85162),o=a(90814);const l={description:"Use filter and search functionality over your datasets",sidebar_position:2},u="Dataset Annotation Filters",d={unversionedId:"api-guide/data/datasets/dataset-filters",id:"api-guide/data/datasets/dataset-filters",title:"Dataset Annotation Filters",description:"Use filter and search functionality over your datasets",source:"@site/docs/api-guide/data/datasets/dataset-filters.md",sourceDirName:"api-guide/data/datasets",slug:"/api-guide/data/datasets/dataset-filters",permalink:"/api-guide/data/datasets/dataset-filters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Use filter and search functionality over your datasets",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dataset Basics",permalink:"/api-guide/data/datasets/dataset-basics"},next:{title:"Dataset Inputs",permalink:"/api-guide/data/datasets/dataset-inputs"}},c={},p=[{value:"Add Dataset Annotation Filters",id:"add-dataset-annotation-filters",level:2},{value:"List Dataset Annotation Filters",id:"list-dataset-annotation-filters",level:2},{value:"Get a Dataset Annotation Filter",id:"get-a-dataset-annotation-filter",level:2},{value:"Change a Dataset Annotation Filter",id:"change-a-dataset-annotation-filter",level:2},{value:"Delete a Dataset Annotation Filter",id:"delete-a-dataset-annotation-filter",level:2}],h={toc:p};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dataset-annotation-filters"},"Dataset Annotation Filters"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Use filter and search functionality over your datasets")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The dataset annotation filters do not affect the inputs that belong to a dataset. Inputs are explicitly added or removed from datasets. Rather, they affect the annotations (for the inputs in the dataset) that are used whenever the dataset is converted into a dataset version and used for training or evaluation. "),(0,s.kt)("p",null,"We calculate the metrics for the dataset version whenever it is created (each time a dataset is used for training or evaluation). Therefore, if a user wants to train a model on the exact same set of inputs, but by using annotations created by person A vs. the ones created by person B, they would update the dataset annotation filter for the same dataset to create two different dataset versions (both containing the same inputs, but one with person A's annotations and the other with person B's). "),(0,s.kt)("p",null,"Comparing the performance of those two models is a common technique for assessing the quality of the two labelers' annotations. "),(0,s.kt)("h2",{id:"add-dataset-annotation-filters"},"Add Dataset Annotation Filters"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/filters" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_filters": [\n        {\n            "id": "dataset-filter-1633032596",            \n            "saved_search": {\n                "id": "YOUR_SEARCH_ID_HERE"\n            }\n        }\n    ]\n}\''))),(0,s.kt)("h2",{id:"list-dataset-annotation-filters"},"List Dataset Annotation Filters"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/filters?page=1&per_page=100" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"'))),(0,s.kt)("h2",{id:"get-a-dataset-annotation-filter"},"Get a Dataset Annotation Filter"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/filters/YOUR_DATASET_FILTER_ID_HERE" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"'))),(0,s.kt)("h2",{id:"change-a-dataset-annotation-filter"},"Change a Dataset Annotation Filter"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/filters" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_filters": [\n        {\n            "id": "YOUR_DATASET_FILTER_ID_HERE",            \n            "saved_search_id": "YOUR_SEARCH_ID_HERE"\n        }\n    ],\n    "action": "overwrite"\n}\'\n'))),(0,s.kt)("h2",{id:"delete-a-dataset-annotation-filter"},"Delete a Dataset Annotation Filter"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/filters" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_filter_ids": ["YOUR_DATASET_FILTER_ID_HERE"]\n}\''))))}f.isMDXComponent=!0}}]);