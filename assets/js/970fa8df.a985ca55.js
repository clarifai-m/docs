"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7736],{78435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=n(74848),s=n(28453),i=n(11470),r=n(19365),o=n(21432);const c="##################################################################################################\n# FOR SECURE AUTHENTICATION, SET API KEY AS AN ENVIRONMENT VARIABLE\n#################################################################################################\n\n# The built-in Python os library provides functions to access and manipulate environment variables\nimport os\n\n# Python-dotenv reads key-value pairs from a .env file and can set them as environment variables\n# Install the library by running `pip install python-dotenv`\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\n# Set the `CLARIFAI_API_KEY` environment variable before running the code. For example, you can set it in an .env file as `export CLARIFAI_API_KEY=YOUR_API_KEY_HERE`\n# Your API Key can be found in the platform in your app's settings page\n\nKEY = os.getenv('CLARIFAI_API_KEY')\nif KEY is None:\n    raise ValueError(\"API Key is not set. Please set the CLARIFAI_API_KEY environment variable.\")\n\n################################################################################################\n# In this section, we set the  model details and the URL of the image we want as an input. \n# Change these strings to run your own example.\n################################################################################################\n\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\n# This is optional. You can specify a model version or the empty string for the default\nMODEL_VERSION_ID = ''\nIMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + KEY),)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  \n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_outputs_response.status)\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(output)",l='curl -X POST "https://api.clarifai.com/v2/models/YOUR_MODEL_ID_HERE/versions/YOUR_MODEL_VERSION_HERE/outputs" \\\n    -H "Authorization: Key YOUR_API_KEY_HERE" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n            }\n          }\n        }\n      ]\n    }\'\n   ',u={description:"Authenticate access to resources within the scope defined by the key",sidebar_position:2},p="App-Specific API Keys",d={id:"clarifai-basics/authentication/app-specific-api-keys",title:"App-Specific API Keys",description:"Authenticate access to resources within the scope defined by the key",source:"@site/docs/clarifai-basics/authentication/app-specific-api-keys.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/app-specific-api-keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/authentication/app-specific-api-keys.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Authenticate access to resources within the scope defined by the key",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Personal Access Tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens"},next:{title:"Authorize",permalink:"/clarifai-basics/authentication/authorize"}},h={},m=[{value:"How to Create API Keys on the Platform",id:"how-to-create-api-keys-on-the-platform",level:2},{value:"How to Create API Keys Programmatically",id:"how-to-create-api-keys-programmatically",level:2},{value:"How to Use an API Key Example",id:"how-to-use-an-api-key-example",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"app-specific-api-keys",children:"App-Specific API Keys"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Authenticate access to resources within the scope defined by the key"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.p,{children:"App-specific API Keys are used to authorize access to your Clarifai applications. You can use an API Key to access the resources within the scope of the app defined by that key."}),"\n",(0,a.jsxs)(t.p,{children:["A key is automatically generated when you create a new application. You can also create a new one, as described ",(0,a.jsx)(t.a,{href:"#how-to-create-api-keys-on-the-platform",children:"below"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Each API Key is associated with a specific user and a specific app. It ties in ",(0,a.jsx)(t.code,{children:"user_id"})," and ",(0,a.jsx)(t.code,{children:"app_id"}),", causing only resources in that app to be usable."]})}),"\n",(0,a.jsx)(t.p,{children:"When using an app-specific API Key to make a request, you do not need to specify either the user ID or the application ID, as they are already part of the key."}),"\n",(0,a.jsx)(t.p,{children:"An API Key allows you to have fine-grained control over the data exposed through your app. You can control the scope of your key through a simple checkbox interface displayed when you create a new key or edit a key."}),"\n",(0,a.jsx)(t.admonition,{title:"API Key Versus PAT",type:"caution",children:(0,a.jsxs)(t.p,{children:["You cannot use an API Key to access models, model versions, workflows, or other resources that are not part of the app that the key is associated with. You need a ",(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens",children:"PAT"})," to do so. For example, to access any of Clarifai's resources, you need to use a PAT while specifying Clarifai's ",(0,a.jsx)(t.code,{children:"user_id"})," and the ",(0,a.jsx)(t.code,{children:"app_id"})," to which the resource belongs."]})}),"\n",(0,a.jsx)(t.h2,{id:"how-to-create-api-keys-on-the-platform",children:"How to Create API Keys on the Platform"}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to your application's individual page and select the ",(0,a.jsx)(t.strong,{children:"Settings"})," option on the collapsible left sidebar."]}),"\n",(0,a.jsxs)(t.p,{children:["You'll be redirected to the ",(0,a.jsx)(t.strong,{children:"App Settings"})," page."]}),"\n",(0,a.jsxs)(t.p,{children:["Within the ",(0,a.jsx)(t.strong,{children:"API Keys"})," section, click the ",(0,a.jsx)(t.strong,{children:"Create API Key"})," button."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"App settings create key",src:n(66182).A+"",width:"1867",height:"884"})}),"\n",(0,a.jsxs)(t.p,{children:["Then, use the form that pops up to generate a new key for your application \u2014 provide a short description, select the scopes, and click the ",(0,a.jsx)(t.strong,{children:"Confirm"})," button."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"App key create form",src:n(67145).A+"",width:"1889",height:"869"})}),"\n",(0,a.jsxs)(t.p,{children:["The new key will be listed in the ",(0,a.jsx)(t.strong,{children:"API Keys"})," section, where you can copy it to the clipboard, edit it, or delete it."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"copy, edit, delete api key",src:n(84681).A+"",width:"1892",height:"881"})}),"\n",(0,a.jsx)(t.h2,{id:"how-to-create-api-keys-programmatically",children:"How to Create API Keys Programmatically"}),"\n",(0,a.jsx)(t.p,{children:"For enterprise users, it is also possible to generate keys programmatically."}),"\n",(0,a.jsx)(t.p,{children:"If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create keys this way. This ensures that each individual user only has access to their own private resources."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["You need to use a ",(0,a.jsx)(t.a,{href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens",children:"Personal Access Token (PAT)"})," to create an API Key."]})}),"\n","\n","\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(r.A,{value:"cURL",label:"cURL",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/keys" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n    "keys": [\n        {\n            "description": "All permissions",\n            "scopes": [\n                "All"\n            ],\n            "apps": [\n                {\n                    "id": "YOUR_APP_ID_HERE",\n                    "user_id": "YOUR_USER_ID_HERE"\n                }\n            ]\n        }\n    ]\n}\'\n'})})})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"API Keys do not expire. In case your key gets compromised, you should delete it, and create a new one with the same scopes."}),"\n",(0,a.jsxs)(t.li,{children:["We recommend that you do ",(0,a.jsx)(t.strong,{children:"not"})," share your API Key with other users."]}),"\n"]})}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-an-api-key-example",children:"How to Use an API Key Example"}),"\n",(0,a.jsx)(t.p,{children:"Here is an example of how to use an API Key to make a prediction request from your own model."}),"\n",(0,a.jsxs)(t.p,{children:["Note that your ",(0,a.jsx)(t.code,{children:"user_id"})," and ",(0,a.jsx)(t.code,{children:"app_id"})," are already tied to the key, so no need to specify them."]}),"\n",(0,a.jsx)(t.admonition,{title:"Set API Key as an Environment Variable",type:"tip",children:(0,a.jsx)(t.p,{children:"It's a good practice to load your API Key from an environment variable. Keeping your key in a secrets manager, and not in the source code, improves its security and management."})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(r.A,{value:"python",label:"Python",children:(0,a.jsx)(o.A,{className:"language-python",children:c})}),(0,a.jsx)(r.A,{value:"curl",label:"cURL",children:(0,a.jsx)(o.A,{className:"language-bash",children:l})})]})]})}function y(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(18215);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(96540),s=n(18215),i=n(23104),r=n(56347),o=n(205),c=n(57485),l=n(31682),u=n(70679);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=d(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,p]=m({queryString:n,groupId:s}),[f,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,u.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),b=(()=>{const e=l??f;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),y(e)}),[p,y,i]),tabValues:i}}var y=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function _(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),s=o[n].value;s!==a&&(l(t),r(s))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:p,onClick:u,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function A(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(_,{...t,...e}),(0,g.jsx)(A,{...t,...e})]})}function v(e){const t=(0,y.A)();return(0,g.jsx)(x,{...e,children:p(e.children)},String(t))}},66182:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_api_key_community-9cad7e2384395bfdba4f5926727aa56c.png"},84681:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_api_key_community_2-0fcfc340b618e981bd4627155eeec194.png"},67145:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/create_api_key_community_form-ad976a6423f5470bab36622b5b0744d7.png"}}]);