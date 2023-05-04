"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6726],{85162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),o=a(86010);const s={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,r),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),o=a(67294),s=a(86010),r=a(12466),i=a(16550),l=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,c]=m({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=l??p;return h({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var g=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},r,{className:(0,s.Z)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=f(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return o.createElement(_,(0,n.Z)({key:String(t)},e))}},96372:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(87462),o=(a(67294),a(3905)),s=a(74866),r=a(85162),i=a(90814);const l="##################################################################################################\n# In this section, we set the user authentication, user and app ID, model details, and the URL\n# of the image we want as an input. Change these strings to run your own example.\n#################################################################################################\n\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\n# Specify the correct user_id/app_id pairings\n# Since you're making inferences outside your app's scope\nUSER_ID = 'clarifai'\nAPP_ID = 'main'\nMODEL_ID = 'general-image-recognition'\n# This is optional. You can specify a model version or the empty string for the default\nMODEL_VERSION_ID = ''\nIMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  \n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_outputs_response.status)\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(output)",c='curl -X POST "https://api.clarifai.com/v2/users/clarifai/apps/main/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs" \\\n    -H "Authorization: Key YOUR_PAT_HERE" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n            }\n          }\n        }\n      ]\n    }\'\n   ',u={description:"Authenticate your access across all apps within the Clarifai platform",sidebar_position:1},p="Personal Access Tokens",d={unversionedId:"clarifai-basics/authentication/personal-access-tokens",id:"clarifai-basics/authentication/personal-access-tokens",title:"Personal Access Tokens",description:"Authenticate your access across all apps within the Clarifai platform",source:"@site/docs/clarifai-basics/authentication/personal-access-tokens.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/personal-access-tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Authenticate your access across all apps within the Clarifai platform",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/clarifai-basics/authentication/"},next:{title:"App-Specific API Keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys"}},h={},m=[{value:"How to Create a PAT in the Legacy Portal",id:"how-to-create-a-pat-in-the-legacy-portal",level:2},{value:"How to Create a PAT in the Community Platform",id:"how-to-create-a-pat-in-the-community-platform",level:2},{value:"How to Use a PAT Example",id:"how-to-use-a-pat-example",level:2}],f={toc:m},g="wrapper";function k(e){let{components:t,...u}=e;return(0,o.kt)(g,(0,n.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"personal-access-tokens"},"Personal Access Tokens"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make inferences on resources outside the scope of your apps")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A Personal Access Token ","(","usually shortened as PAT",")"," is a kind of key that authenticates a user across all applications they have access to. It's not linked to a specific application."),(0,o.kt)("p",null,"A PAT represents you when accessing the Clarifai API. It's a powerful way of accessing your resources within the Clarifai platform. "),(0,o.kt)("p",null,"You can use PATs to accomplish the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access multiple apps with a single key. This lets you access your own apps as well as any other apps you have permissions to use, such as public apps, apps where you're added as a collaborator, or apps belonging to your organization's team."),(0,o.kt)("li",{parentName:"ul"},"Create apps and app-specific keys programmatically through the API. This is crucial for programs that segregate the data of each of their end-users into different apps.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"PAT is the primary authentication mechanism we use.  "),(0,o.kt)("li",{parentName:"ul"},"When using a PAT, you need to specify the ",(0,o.kt)("strong",{parentName:"li"},"user ID")," alongside the ",(0,o.kt)("strong",{parentName:"li"},"application ID")," of the owner of the resource you want to access\u2014be it your own or for another user. If accessing your own resources, you specify your own ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"app_id"),"; if you don't own them, specify the owner's ",(0,o.kt)("inlineCode",{parentName:"li"},"user_id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"app_id"),". "))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A PAT allows you to make inferences on resources that are outside the scope of your apps. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys"},"An API Key")," only allows you to access resources scoped to the app defined by that key. So, you can use an API Key to access your own resources, but not Clarifai's resources. ")),(0,o.kt)("h2",{id:"how-to-create-a-pat-in-the-legacy-portal"},"How to Create a PAT in the Legacy Portal"),(0,o.kt)("p",null,"To create a new PAT on the Legacy Portal, ",(0,o.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/login"},"log in")," and navigate to the bottom left-hand corner of the application overview page. Then, click  the initials of your name."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"navigate-authentication",src:a(8861).Z,width:"472",height:"754"})),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Authentication")," option. On the ensuing page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create Personal Access Token")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"authentication-screen",src:a(50171).Z,width:"1500",height:"1141"})),(0,o.kt)("p",null,"Provide a short token description, set the scopes you want to apply, and click the ",(0,o.kt)("strong",{parentName:"p"},"Create")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create-pat",src:a(28566).Z,width:"1500",height:"1868"})),(0,o.kt)("h2",{id:"how-to-create-a-pat-in-the-community-platform"},"How to Create a PAT in the Community Platform"),(0,o.kt)("p",null,"To create a new PAT on the Community platform, ",(0,o.kt)("a",{parentName:"p",href:"https://clarifai.com/login"},"log in")," and navigate to the top right-hand section of the navigation bar. Then, click your user\u2019s profile icon."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new PAT on Community",src:a(8023).Z,width:"683",height:"777"})),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Security")," settings option on the drop-down list. On the ensuing page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create Personal Access Token")," button.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account security settings",src:a(61065).Z,width:"1849",height:"721"})),(0,o.kt)("p",null,"Provide a short token description, set the scopes you want to apply, and click the ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create pat",src:a(88723).Z,width:"1439",height:"777"})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"PATs do not expire. In case your PAT gets compromised, you should delete it, and create a new one with the same scopes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We recommend that you do ",(0,o.kt)("strong",{parentName:"p"},"not")," share your PAT with other users.")))),(0,o.kt)("h2",{id:"how-to-use-a-pat-example"},"How to Use a PAT Example"),(0,o.kt)("p",null,"Here is an example of how to use a PAT to make a prediction request from Clarifai's ",(0,o.kt)("a",{parentName:"p",href:"https://clarifai.com/clarifai/main/models/general-image-recognition"},(0,o.kt)("inlineCode",{parentName:"a"},"general-image-recognition"))," model. Note that you need to specify the resource owner's ",(0,o.kt)("inlineCode",{parentName:"p"},"user_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"app_id")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserAppIDSet"),", if making a gRPC call, or in the URL, if making a REST call. "),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},l)),(0,o.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},c))))}k.isMDXComponent=!0},50171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/authentication_screen-e939f2b3807f585f9bcff53230dd778a.jpg"},28566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_pat-9b33764f05fcf32ebf285b19799fdc09.jpg"},8861:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/navigate_authentication-178c0a7f112e857fa3256d34fa2c1d56.jpg"},61065:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/account_security_settings-2f6ca5674309da8ac47e5f3ebb1d1ae9.png"},8023:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_pat_community-e206a58f3f8336c2102ad046bad6b1ad.png"},88723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pat_dialog_box-84b839cf94637b1978e9aba23d2c04c9.png"}}]);