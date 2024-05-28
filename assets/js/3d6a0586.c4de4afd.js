"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4782],{19365:(e,a,t)=>{t.d(a,{A:()=>l});var r=t(96540),n=t(20053);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>E});var r=t(58168),n=t(96540),s=t(20053),l=t(23104),o=t(56347),u=t(57485),i=t(31682),c=t(89466);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,i.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[u,i]=m({queryString:t,groupId:r}),[d,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,c.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=u??d;return h({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),i(e),y(e)}),[i,y,s]),tabValues:s}}var g=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:t,selectedValue:o,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),r=i[t].value;r!==o&&(d(a),u(r))},h=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},a)},i.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,s.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===a})}),t??a)})))}function f(e){let{lazy:a,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function _(e){const a=y(e);return n.createElement("div",{className:(0,s.A)("tabs-container",v.tabList)},n.createElement(b,(0,r.A)({},e,a)),n.createElement(f,(0,r.A)({},e,a)))}function E(e){const a=(0,g.A)();return n.createElement(_,(0,r.A)({key:String(a)},e))}},80677:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>y});var r=t(58168),n=(t(96540),t(15680)),s=t(11470),l=t(19365),o=t(77964);const u='curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n    "searches": [{\n        "query": {\n            "ands": [{\n                "annotation":{\n                    "annotation_info": {\n                        "asset_set": ["set1", "set2"]\n                    }\n                }\n            }]\n        },\n        "save": true,\n        "id": "dataset-1589318146",\n        "name": "Dataset #1589318146"\n    }]\n}\'',i='curl --location --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE"',c='curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches/YOUR_SEARCH_ID_HERE" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n  "pagination": {\n    "page": 1,\n    "per_page": 5\n  }\n}\'',d={description:"Save your searches",sidebar_position:4},p="Saved Searches",h={unversionedId:"api-guide/search/legacy-search/saved_searches",id:"api-guide/search/legacy-search/saved_searches",title:"Saved Searches",description:"Save your searches",source:"@site/docs/api-guide/search/legacy-search/saved_searches.md",sourceDirName:"api-guide/search/legacy-search",slug:"/api-guide/search/legacy-search/saved_searches",permalink:"/api-guide/search/legacy-search/saved_searches",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/search/legacy-search/saved_searches.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Save your searches",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/api-guide/search/legacy-search/rank"},next:{title:"Advanced Topics",permalink:"/api-guide/advanced-topics/"}},m={},y=[{value:"Create a Saved Search",id:"create-a-saved-search",level:2},{value:"List Saved Searches in an App",id:"list-saved-searches-in-an-app",level:2},{value:"Search by Search ID",id:"search-by-search-id",level:2}],g={toc:y},v="wrapper";function b(e){let{components:a,...t}=e;return(0,n.yg)(v,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"saved-searches"},"Saved Searches"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Save your searches")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"With saved searches, you can capture your search results at any given point in time, and record the inputs, annotations, search parameters, and models that you are running through the platform. "),(0,n.yg)("p",null,"Saved searches help you to:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Save a search so that you can return to those same results later;"),(0,n.yg)("li",{parentName:"ul"},"Share a search with a collaborator in your app;"),(0,n.yg)("li",{parentName:"ul"},'Carve out data that you want to evaluate your models on as a "golden set";'),(0,n.yg)("li",{parentName:"ul"},"Split your data into training sets and test tests.")),(0,n.yg)("h2",{id:"create-a-saved-search"},"Create a Saved Search"),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.yg)(o.A,{className:"language-bash",mdxType:"CodeBlock"},u))),(0,n.yg)("h2",{id:"list-saved-searches-in-an-app"},"List Saved Searches in an App"),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.yg)(o.A,{className:"language-bash",mdxType:"CodeBlock"},i))),(0,n.yg)("h2",{id:"search-by-search-id"},"Search by Search ID"),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(l.A,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.yg)(o.A,{className:"language-bash",mdxType:"CodeBlock"},c))),(0,n.yg)("admonition",{title:"note",type:"important"},(0,n.yg)("p",{parentName:"admonition"},"Saved searches are extremely helpful when testing out multiple versions of a model, or collaborating with a team. Just save your search, and refer to it at any time.")))}b.isMDXComponent=!0}}]);