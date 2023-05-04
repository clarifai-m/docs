"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3958],{85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),o=a(67294),r=a(86010),s=a(12466),i=a(16550),l=a(91980),c=a(67392),p=a(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[l,c]=h({queryString:a,groupId:n}),[u,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=l??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,r]),tabValues:r}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==i&&(u(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,r.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=y(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(_,(0,n.Z)({key:String(t)},e))}},91990:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var n=a(87462),o=(a(67294),a(3905)),r=a(74866),s=a(85162),i=a(90814);const l="###################################################################################\n# In this section, we set the user authentication, model details, and the URL\n# of the image we want as an input. Change these strings to run your own example.\n###################################################################################\n\n# Your API Key can be found in the portal under your App's settings\nKEY = 'YOUR_APP_KEY_HERE'\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\n# This is optional. You can specify a model version or the empty string for the default\nMODEL_VERSION_ID = ''\nIMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + KEY),)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  \n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_outputs_response.status)\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(output)",c='curl -X POST "https://api.clarifai.com/v2/models/YOUR_MODEL_ID_HERE/versions/YOUR_MODEL_VERSION_HERE/outputs" \\\n    -H "Authorization: Key YOUR_API_KEY_HERE" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n            }\n          }\n        }\n      ]\n    }\'\n   ',p={description:"Authenticate access to your own Clarifai apps",sidebar_position:2},u="App-Specific API Keys",d={unversionedId:"clarifai-basics/authentication/app-specific-api-keys",id:"clarifai-basics/authentication/app-specific-api-keys",title:"App-Specific API Keys",description:"Authenticate access to your own Clarifai apps",source:"@site/docs/clarifai-basics/authentication/app-specific-api-keys.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/app-specific-api-keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Authenticate access to your own Clarifai apps",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Personal Access Tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens"},next:{title:"Authorize",permalink:"/clarifai-basics/authentication/authorize"}},m={},h=[{value:"How to Create API Keys in the Legacy Portal",id:"how-to-create-api-keys-in-the-legacy-portal",level:2},{value:"How to Create API Keys in the Community Platform",id:"how-to-create-api-keys-in-the-community-platform",level:2},{value:"How to Create API Keys Programmatically",id:"how-to-create-api-keys-programmatically",level:2},{value:"How to Use an API Key Example",id:"how-to-use-an-api-key-example",level:2}],y={toc:h},f="wrapper";function k(e){let{components:t,...p}=e;return(0,o.kt)(f,(0,n.Z)({},y,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-specific-api-keys"},"App-Specific API Keys"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authenticate access to resources within the scope defined by the key")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"App-specific API Keys are used to authorize access to your Clarifai applications. You can use an API Key to access the resources within the scope of the app defined by that key."),(0,o.kt)("p",null,"A key is automatically generated when you create a new application. You can also go to the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/"},"Application's List")," on the Portal, select an app of your choice, and create a new key on the app details page. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Each API Key is associated with a specific user and a specific app. It ties in ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id"),", causing only resources in that app to be usable.")),(0,o.kt)("p",null,"When using an app-specific API Key to make a request, you do not need to specify either the user ID or the application ID as they are already part of the API Key."),(0,o.kt)("p",null,"An API Key allows you to have fine-grained control over the data exposed through your app. You can control the scope of your API Key through a simple checkbox interface displayed when you create a new key or edit a key. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You cannot use an API key to access models, model versions, workflows, and other resources that are not part of the app that the API key is associated with. You need a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT")," to do so. For example, to access any of Clarifai's resources, you need to use a PAT while specifying Clarifai's ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id")," to which the resource belongs. ")),(0,o.kt)("h2",{id:"how-to-create-api-keys-in-the-legacy-portal"},"How to Create API Keys in the Legacy Portal"),(0,o.kt)("p",null,"Navigate to your individual app's management page and click the ",(0,o.kt)("strong",{parentName:"p"},"Create new API key")," button. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new API Key",src:a(29244).Z,width:"1370",height:"909"})),(0,o.kt)("p",null,"Then, use the form that pops up to generate a new API Key for your application. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Generate API Key form",src:a(61024).Z,width:"1193",height:"889"})),(0,o.kt)("h2",{id:"how-to-create-api-keys-in-the-community-platform"},"How to Create API Keys in the Community Platform"),(0,o.kt)("p",null,"Navigate to your individual app's management page and, on the ",(0,o.kt)("strong",{parentName:"p"},"App Settings")," page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create API key")," button. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App settings create key",src:a(21884).Z,width:"1889",height:"649"})),(0,o.kt)("p",null,"Then, use the form that pops up to generate a new API Key for your application. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"App key create form",src:a(47485).Z,width:"1153",height:"717"})),(0,o.kt)("h2",{id:"how-to-create-api-keys-programmatically"},"How to Create API Keys Programmatically"),(0,o.kt)("p",null,"For enterprise users, it is also possible to generate keys programmatically. "),(0,o.kt)("p",null,"If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create keys this way. This ensures that each individual user only has access to their own private resources."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You need to use a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"Personal Access Token (PAT)")," to create an API Key. ")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"cURL",label:"cURL",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/keys" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n    "keys": [\n        {\n            "description": "All permissions",\n            "scopes": [\n                "All"\n            ],\n            "apps": [\n                {\n                    "id": "YOUR_APP_ID_HERE",\n                    "user_id": "YOUR_USER_ID_HERE"\n                }\n            ]\n        }\n    ]\n}\'\n')))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"API Keys do not expire. In case your API Key gets compromised, you should delete that key, and create a new one with the same scopes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We recommend that you do ",(0,o.kt)("strong",{parentName:"p"},"not")," share your API Key with other users.")))),(0,o.kt)("h2",{id:"how-to-use-an-api-key-example"},"How to Use an API Key Example"),(0,o.kt)("p",null,"Here is an example of how to use an API Key to make a prediction request from your own model. Note that your ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id")," are already tied to the key, so no need to specify them."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},l)),(0,o.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},c))))}k.isMDXComponent=!0},61024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apikey-screen-95c8c5a4dcc731b518ef3083e5d4ab58.png"},21884:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_api_key_community-4c6a924df4b39d0878321e105ef35ba6.png"},47485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_api_key_community_form-ab89a4865b0a6b0332f49b71a0d19e72.png"},29244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_new_api_key-805865bd1a56087914272d30f4e9e78d.png"}}]);