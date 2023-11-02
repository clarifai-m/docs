"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1818],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),r=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=r(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=r(a),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var r=2;r<l;r++)s[r]=a[r];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var n=a(87462),i=(a(67294),a(3905));const l={description:"Learn how to make API calls with Postman",sidebar_position:1},s="Using Postman with Clarifai APIs",o={unversionedId:"api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",id:"api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",title:"Using Postman with Clarifai APIs",description:"Learn how to make API calls with Postman",source:"@site/docs/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis.md",sourceDirName:"api-guide/api-overview/helpful-api-resources",slug:"/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",permalink:"/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to make API calls with Postman",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Helpful API Resources",permalink:"/api-guide/api-overview/helpful-api-resources"},next:{title:"Your Data",permalink:"/api-guide/data/"}},p={},r=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up Postman Environment",id:"setting-up-postman-environment",level:2},{value:"Applications",id:"applications",level:2},{value:"a) Create Application",id:"a-create-application",level:3},{value:"b) Get Application(s)",id:"b-get-applications",level:3},{value:"c) Patch Application",id:"c-patch-application",level:3},{value:"d) Delete Application",id:"d-delete-application",level:3},{value:"Inputs",id:"inputs",level:2},{value:"a) Add Inputs",id:"a-add-inputs",level:3},{value:"Add Input with Metadata",id:"add-input-with-metadata",level:4},{value:"b) Get Inputs",id:"b-get-inputs",level:3},{value:"List All Inputs",id:"list-all-inputs",level:4},{value:"Get Input by Id",id:"get-input-by-id",level:4},{value:"c) Search Inputs",id:"c-search-inputs",level:3},{value:"d) Delete Inputs",id:"d-delete-inputs",level:3},{value:"Delete by ID",id:"delete-by-id",level:4},{value:"Delete Batch by IDs",id:"delete-batch-by-ids",level:4},{value:"Make Predictions",id:"make-predictions",level:2}],u={toc:r},d="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-postman-with-clarifai-apis"},"Using Postman with Clarifai APIs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to make API calls with Postman")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},(0,i.kt)("strong",{parentName:"h2"},"Overview")),(0,i.kt)("p",null,"This page explains how to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," to perform some API calls to Clarifai by showing the actions available within the Clarifai platform. You can use Postman to make a wide variety of ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," calls."),(0,i.kt)("p",null,"With Postman, you can use, hit, or test the Clarifai API without the need to use the Portal or call the endpoints programmatically. "),(0,i.kt)("p",null,"Postman also allows you to make API calls and generate code snippets in your favorite programming language. You can use the snippets to make REST requests to the Clarifai API."),(0,i.kt)("p",null,"This page will hopefully get you set up and somewhat familiar with using Postman to make requests to the Clarifai platform. After learning how to use Postman to make calls to Clarifai, you can make other requests by referring to the REST examples throughout this documentation. "),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You need to have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Postman"),(0,i.kt)("li",{parentName:"ul"},"An active Clarifai account"),(0,i.kt)("li",{parentName:"ul"},"Access to your ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"Personal Access Token (PAT)")," (or ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys"},"API key"),")"),(0,i.kt)("li",{parentName:"ul"},"Basic knowledge of an API structure and JSON formatting")),(0,i.kt)("h2",{id:"setting-up-postman-environment"},"Setting Up Postman Environment"),(0,i.kt)("p",null,"Setting up a Postman environment allows you to define the variables you can use in your Postman requests. After defining an ",(0,i.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/sending-requests/managing-environments/"},"environment variable"),", you can use it in making API requests\u2014instead of having to provide it each time you make a call."),(0,i.kt)("p",null,"To set any environment variable, select the ",(0,i.kt)("strong",{parentName:"p"},"Environments")," option on the left sidebar. Then, click ",(0,i.kt)("strong",{parentName:"p"},"Create Environment"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a Postman environment",src:a(62852).Z,width:"666",height:"581"})),(0,i.kt)("p",null,"On the ensuing page, enter a name for your environment and add the following variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base_url")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.clarifai.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_YOUR_PAT")," (this is what is used for ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/authorize/"},"authorization"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_id")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"ADD_YOUR_USER_ID"))),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set a Postman environment",src:a(22051).Z,width:"1407",height:"356"})),(0,i.kt)("p",null,"Set the environment as active. This allows Postman to treat it as the active environment and run all requests against that environment (if your API calls reference environment variables)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Set as active environment",src:a(27435).Z,width:"579",height:"563"})),(0,i.kt)("p",null,"To use a Postman environment variable value in an API request, you need to reference it by name, surrounded with double curly braces."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}")),(0,i.kt)("p",null,"You are now ready to start making calls to the Clarifai API!"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Setting the initial environment should be a one-time exercise. After that, you can add new variables (such as app ids, model ids, concept ids, etc) to the environment by opening it from the sidebar and editing it in the tab that opens. ")),(0,i.kt)("h2",{id:"applications"},"Applications"),(0,i.kt)("p",null,"Applications are the basic building blocks for creating projects on the Clarifai platform. Your data, annotations, models, predictions, and searches are contained within applications."),(0,i.kt)("h3",{id:"a-create-application"},"a) Create Application"),(0,i.kt)("p",null,"To create a new application, do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open a new tab on the Postman workbench."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"POST")," as the request method."),(0,i.kt)("li",{parentName:"ul"},"Enter ",(0,i.kt)("inlineCode",{parentName:"li"},"{{base_url}}/v2/users/{{user_id}}/apps")," for the request URL. Note that we already provided the ",(0,i.kt)("inlineCode",{parentName:"li"},"base_url")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"user_id")," variables in the Postman environment. "),(0,i.kt)("li",{parentName:"ul"},"Under the ",(0,i.kt)("strong",{parentName:"li"},"Headers")," tab, add the authorization details required for the request.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"Authorization \u2014 Key {{key}}\nContent-Type \u2014 application/json\n\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create new application",src:a(18237).Z,width:"1401",height:"331"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Under the ",(0,i.kt)("strong",{parentName:"li"},"Body")," tab, select ",(0,i.kt)("strong",{parentName:"li"},"raw")," and add the details of the application you want to create in JSON format.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apps": [\n    {\n      "id": "test-application"      \n    }\n  ]\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Send")," to create the application.")),(0,i.kt)("p",null,"Postman displays the response data of creating the application in the lower pane."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create application response",src:a(61296).Z,width:"1431",height:"851"})),(0,i.kt)("p",null,"Note that the response includes the id of the application, which you can set on the Postman environment as ",(0,i.kt)("inlineCode",{parentName:"p"},"app_id"),"."),(0,i.kt)("h3",{id:"b-get-applications"},"b) Get Application(s)"),(0,i.kt)("p",null,"To get the details of a specific app, make a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}"),". Also, add the authorization information under the ",(0,i.kt)("strong",{parentName:"p"},"Headers")," tab."),(0,i.kt)("p",null,"The request will return the details of the ",(0,i.kt)("inlineCode",{parentName:"p"},"app_id")," already set in the Postman environment. If you want to get the details of another app, you can set its value in the environment or directly in the URL field."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get application",src:a(78434).Z,width:"1405",height:"843"})),(0,i.kt)("p",null,"You can also list all the applications in your instance of the Clarifai platform by making a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps"),". "),(0,i.kt)("p",null,"After running the request, it will return a list of all your applications, their ids, and other information."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get applications",src:a(60983).Z,width:"1403",height:"837"})),(0,i.kt)("h3",{id:"c-patch-application"},"c) Patch Application"),(0,i.kt)("p",null,"You can use Postman to patch or edit the details of an existing application by making a ",(0,i.kt)("inlineCode",{parentName:"p"},"PATCH")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps"),". "),(0,i.kt)("p",null,"You can change an app's name, default language, default workflow, and more."),(0,i.kt)("p",null,"Under the ",(0,i.kt)("strong",{parentName:"p"},"Body")," tab, select ",(0,i.kt)("strong",{parentName:"p"},"raw")," and add the editing instructions. In our example below, we want to rename our app and also change its default workflow. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"{{app_id}}")," refers to the app id of the application that we want to edit. It is set in the Postman environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "apps": [\n        {\n            "id": "{{app_id}}",\n            "name": "my-first-app",\n            "default_workflow_id": "Food"\n        }\n    ],\n    "action": "overwrite"\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Patch application",src:a(53953).Z,width:"1411",height:"839"})),(0,i.kt)("h3",{id:"d-delete-application"},"d) Delete Application"),(0,i.kt)("p",null,"You can use Postman to delete an existing application by making a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}"),". "),(0,i.kt)("p",null,"Running the request will delete the app with the ",(0,i.kt)("inlineCode",{parentName:"p"},"app_id")," already set in the Postman environment. If you want to delete another app, you can set its value in the Postman environment or directly in the URL field."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete application",src:a(4338).Z,width:"1405",height:"783"})),(0,i.kt)("h2",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"An input is any data you provide into the Clarifai platform. It could be in the form of an image, video, text, or audio."),(0,i.kt)("p",null,"Let's illustrate how to add inputs, get inputs, search inputs, and delete inputs using Postman. "),(0,i.kt)("h3",{id:"a-add-inputs"},"a) Add Inputs"),(0,i.kt)("p",null,"For example, if you want to add an image input to the Clarifai platform, you can make a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs"),". "),(0,i.kt)("p",null,"And under the ",(0,i.kt)("strong",{parentName:"p"},"Body")," tab, select ",(0,i.kt)("strong",{parentName:"p"},"raw")," and add the details of the image you want to add. You need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," parameter to provide a publicly accessible URL of the image you want to add."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "inputs": [\n        {\n            "data": {\n                "image": {\n                    "url": "https://samples.clarifai.com/metro-north.jpg",\n                    "allow_duplicate_url": true\n                }\n            }\n        }\n    ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add image",src:a(31682).Z,width:"1429",height:"509"})),(0,i.kt)("p",null,"After running the request, you'll get a response that contains the id of the image you added:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add image",src:a(92378).Z,width:"1429",height:"503"})),(0,i.kt)("p",null,"Each input has a unique id associated with only itself. Even if you upload the same image multiple times to an application, each one will be assigned its own unique id. "),(0,i.kt)("h4",{id:"add-input-with-metadata"},"Add Input with Metadata"),(0,i.kt)("p",null,"You can also add an input alongside other metadata, such as concepts."),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "inputs": [\n        {\n            "data": {\n                "image": {\n                    "url": "https://samples.clarifai.com/dog.tiff",\n                    "allow_duplicate_url": true\n                },\n                "concepts": [\n                    {\n                        "id": "cat",\n                        "value": true\n                    }\n                ],\n                "metadata": {\n                    "split": "train"\n                }\n            }\n        }\n    ]\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add input with metadata",src:a(7703).Z,width:"1407",height:"835"})),(0,i.kt)("h3",{id:"b-get-inputs"},"b) Get Inputs"),(0,i.kt)("h4",{id:"list-all-inputs"},"List All Inputs"),(0,i.kt)("p",null,"To list all the inputs associated with your application, make a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs/?per_page=1000&page=1"),". "),(0,i.kt)("p",null,"Notice the ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"per_page")," query string parameters added to the request. These parameters allow you to split your results into ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/advanced-topics/pagination"},"pages"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," params indicates the page number\u2060\u2014defaults to 1. The ",(0,i.kt)("inlineCode",{parentName:"p"},"per_page")," params indicates the number of results that will be contained in each page\u2060\u2014defaults to 128. You can get up to 1,000 results per page."),(0,i.kt)("p",null,"In the above example, we are getting all inputs and specifying to start at page 1 and retrieve 1,000 results per page."),(0,i.kt)("p",null,"Here is how the results of running the request look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"List all inputs",src:a(80418).Z,width:"1421",height:"847"})),(0,i.kt)("h4",{id:"get-input-by-id"},"Get Input by Id"),(0,i.kt)("p",null,"To get the details of a specific input by its ID, make a ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs/{{input_id}}"),". "),(0,i.kt)("p",null,"Running the request will get the details of the input with its ",(0,i.kt)("inlineCode",{parentName:"p"},"input_id")," already set in the Postman environment. If you want to get the details of another input, you can set its value in the Postman environment or directly in the URL field."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Get input by id",src:a(58693).Z,width:"1393",height:"851"})),(0,i.kt)("h3",{id:"c-search-inputs"},"c) Search Inputs"),(0,i.kt)("p",null,"Our API automatically indexes your inputs so that they are ready for search from the moment they are uploaded. Once indexed, you can search inputs by concept, visual similarity, or other search parameters."),(0,i.kt)("p",null,"You need to make a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/searches"),"."),(0,i.kt)("p",null,"For example, here is how you can search your inputs for the presence of a defined search term:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pagination":{\n        "page": 1,\n        "per_page":1000\n    },\n    "query": {\n        "ands": [\n            {\n                "output": {\n                    "data": {\n                        "concepts": [\n                            {\n                                "name": "charlie"\n                            }\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"As you can see above, we've added an extra segment into the top line of the JSON content in the body tab: ",(0,i.kt)("inlineCode",{parentName:"p"},'"pagination":{"page":1, "per_page":1000}'),".\nAs explained previously, this extra code allows the API to return up to 1,000 results per page."),(0,i.kt)("p",null,"Here is how the results of running the request look like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Search inputs",src:a(99361).Z,width:"1411",height:"845"})),(0,i.kt)("p",null,'As you can see on the screenshot above, the results show the first input (of several inputs), along with a "score", which is the percentage that the model believes this image contains our search term ',(0,i.kt)("inlineCode",{parentName:"p"},"charlie"),"."),(0,i.kt)("h3",{id:"d-delete-inputs"},"d) Delete Inputs"),(0,i.kt)("h4",{id:"delete-by-id"},"Delete by ID"),(0,i.kt)("p",null,"To delete an input by its id, make a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs/{{input_id}}"),". "),(0,i.kt)("p",null,"Running the request will delete the input with its ",(0,i.kt)("inlineCode",{parentName:"p"},"input_id")," already set in the environment. If you want to delete another input, you can set its value in the Postman environment or directly in the URL field."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete input",src:a(32846).Z,width:"1397",height:"705"})),(0,i.kt)("h4",{id:"delete-batch-by-ids"},"Delete Batch by IDs"),(0,i.kt)("p",null,"You can also delete multiple inputs associated with your application in one API call by making a ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/inputs"),". It will happen asynchronously."),(0,i.kt)("p",null,"You need to add a list of your input ids using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ids")," parameter in the body of the request. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ids": ["c13b453fb806476cb00b25f29ae0c2ce", "235975f6115b4bf8b5b66e9a4d15e2b6", "d53d947baed14a6099d5f2b74a88b12c", "ae2ccd88d32d4c6089cd8770dbd8115b"]\n}\n')),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Delete batch by ids",src:a(74453).Z,width:"1409",height:"695"})),(0,i.kt)("h2",{id:"make-predictions"},"Make Predictions"),(0,i.kt)("p",null,"You can use Postman to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/predict/"},"make predictions")," on your image, video, and text inputs. The Clarifai API will analyze and tell you what's inside them."),(0,i.kt)("p",null,"The API will return a list of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/concepts/"},"concepts")," with corresponding probabilities of how likely it is these concepts are contained within the provided input."),(0,i.kt)("p",null,"For example, if you want to make predictions on image inputs, you need to make a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to this URL: ",(0,i.kt)("inlineCode",{parentName:"p"},"{{base_url}}/v2/users/{{user_id}}/apps/{{app_id}}/models/{{model_id}}/versions/{{model_version}}/outputs"),". "),(0,i.kt)("p",null,"Note that you need to specify the model you'd like to use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"model_id")," parameter. In this example, we'll use Clarifai's ",(0,i.kt)("inlineCode",{parentName:"p"},"general-image-recognition")," model."),(0,i.kt)("p",null,"Specifying the model's version id, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"version_id")," parameter, is optional. If  you do not specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"version_id"),", predictions will occur on the most recent version of the model."),(0,i.kt)("p",null,"You also need to provide a publicly-accessible URL of the image you want to make predictions from using the ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," parameter in the body of the request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n            }\n          }\n        }\n      ]\n}\n')),(0,i.kt)("p",null,"Here is an example of how you would send an image URL and receive predictions from Clarifai's ",(0,i.kt)("inlineCode",{parentName:"p"},"general-image-recognition")," model:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Make predictions",src:a(29042).Z,width:"1429",height:"839"})))}c.isMDXComponent=!0},31682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_image_1-487da4b671f7eded469a8e96f1910bf1.png"},92378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_image_2-6b4fae4d7a4554f50cca12a1969e1363.png"},7703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_input_with_metadata-b55362eceae4317360b7ef9c63823a69.png"},18237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_application_1-ad93de74b61f2c2d3a50b33992c62c69.png"},61296:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_application_3-1249043f9eefd497ccfd9a703ebc07bc.png"},62852:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_environment_variable-361de428e77f7bf3eea2db15ca396c8b.png"},4338:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete_application-0c4f7c15df49c1fc496cc99963bb4d60.png"},74453:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete_batch_ids-cbf5e916685da763806a92f6d04a976d.png"},32846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete_input-0b4410fb11713b8b892e74b418887095.png"},78434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/get_application_1-401c5e328c977252f731cde0fda2adc4.png"},60983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/get_application_2-680ecb08dc7faa72448b501acb835646.png"},58693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/get_input_by_id-042df6d14135c10598569108cfcf6699.png"},80418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/list_all_inputs-9013c29fe88186bcde9c53f261c1f4b1.png"},29042:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/make_predictions-9d80a9b0c23643e670a494515b9ef503.png"},53953:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/patch_application-dfc215c7ddd936ba68d81b3f334038b1.png"},99361:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search_inputs-9d9b7b2d251db03df387aac34a1c307c.png"},27435:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set_as_active_environment-bca42d1769b2915669c9563318670178.png"},22051:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set_environment_variable-3d5a159a0750b03833c3a248343852b0.png"}}]);