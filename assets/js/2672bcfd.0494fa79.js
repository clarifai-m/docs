"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4495],{19365:(e,n,a)=>{a.d(n,{A:()=>s});var t=a(96540),r=a(20053);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:a,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:a},n)}},11470:(e,n,a)=>{a.d(n,{A:()=>A});var t=a(58168),r=a(96540),i=a(20053),s=a(23104),o=a(56347),l=a(57485),p=a(31682),c=a(89466);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function d(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??u(a);return function(e){const n=(0,p.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,p]=h({queryString:a,groupId:t}),[u,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,c.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),g=(()=>{const e=l??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,i]),tabValues:i}}var g=a(92303);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:a,selectedValue:o,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),t=p[a].value;t!==o&&(u(n),l(t))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},n)},p.map((e=>{let{value:n,label:a,attributes:s}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,i.A)("tabs__item",I.tabItem,s?.className,{"tabs__item--active":o===n})}),a??n)})))}function _(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function b(e){const n=f(e);return r.createElement("div",{className:(0,i.A)("tabs-container",I.tabList)},r.createElement(y,(0,t.A)({},e,n)),r.createElement(_,(0,t.A)({},e,n)))}function A(e){const n=(0,g.A)();return r.createElement(b,(0,t.A)({key:String(n)},e))}},6401:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>w,contentTitle:()=>A,default:()=>D,frontMatter:()=>b,metadata:()=>v,toc:()=>T});var t=a(58168),r=(a(96540),a(15680)),i=a(11470),s=a(19365),o=a(77964);const l="from clarifai.client.search import Search\nfrom clarifai.client.input import Inputs\nfrom PIL import Image\nimport requests\nfrom IPython.display import display\n\n# Define your Clarifai credentials\nUSER_ID = ''\nAPP_ID = ''\nPAT = ''\n\n# Initialize the Clarifai client with your credentials\nclient = User(user_id=USER_ID)\n\n# Create an application within Clarifai with the specified ID and base workflow\n# The 'Universal' workflow is a general-purpose workflow that can handle various types of data\napp = client.create_app(app_id=APP_ID, base_workflow=\"Universal\", pat=PAT)\n\n# Initialize a search object for the specified user, application, and access token\ns = Search(user_id=USER_ID, app_id=APP_ID, pat=PAT)\n\n# Initialize an Inputs object for the specified user, application, and access token\ninp_obj = Inputs(user_id=USER_ID, app_id=APP_ID, pat=PAT)\n\n# Prepare an input protobuf message from the provided image URL\ninput_proto = inp_obj.get_input_from_url(\n        input_id=\"dog-tiff\",\n        image_url=\"https://samples.clarifai.com/dog.tiff\",\n        labels=[\"dog\"],\n        geo_info=[-30.0, 40.0],  # longitude, latitude\n)\n\n# Upload the prepared input protobuf message to the Clarifai application\ninp_obj.upload_inputs([input_proto])\n\n# Perform a search query with specified ranks and filters\nresponse = s.query(ranks=[{\"image_url\": \"https://samples.clarifai.com/dog.tiff\"}], filters=[{\"concepts\": [{'name':'dog','value':1}]}])\n\n# Process the response to extract the URL of the first matching image\nresp = list(response)\nfor r in resp:\n    hit = r.hits[0].input.data.image.url\n    break\n\n# Print the URL of the matched image\nprint(hit)\n\n# Open the matched image URL, resize it, and display it\nhit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))\ndisplay(hit_img)",p='import { Input, Search, User } from "clarifai-nodejs";\n\n\nconst appId = "test_app"; // Placeholder for application ID\n\n// Initialize a User object with your credentials\nconst client = new User({\n  userId: process.env.CLARIFAI_USER_ID,\n  pat: process.env.CLARIFAI_PAT,\n  appId,\n});\n\n// Create an application within Clarifai with the specified ID and base workflow\n// The \'Universal\' workflow is a general-purpose workflow that can handle various types of data\nawait client.createApp({\n  appId,\n  baseWorkflow: "Universal",\n});\n\n// Initialize an Input object to manage input data\nconst input = new Input({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n});\n\n// Prepare an input protobuf message from the provided image URL\nconst inputProto = Input.getInputFromUrl({\n  inputId: "dogTiff",\n  imageUrl: "https://samples.clarifai.com/dog.tiff",\n  labels: ["dog"],\n  geoInfo: {\n    longitude: -30.0,\n    latitude: 40.0,\n  },\n});\n\n// Upload the prepared input protobuf message to the clarifai application\ninput.uploadInputs({ inputs: [inputProto] });\n\n// Initialize a search object for the created application with top-k results set to 2\nconst search = new Search({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n  topK: 2,\n  metric: "euclidean",\n});\n\n// Perform a search query with specified ranks and filters\nconst response = search.query({\n  ranks: [{ imageUrl: "https://samples.clarifai.com/dog.tiff" }],\n  filters: [{ concepts: [{ name: "dog", value: 1 }] }],\n});\n\n// Process the response to extract the URL of the first matching image\nlet hit;\nfor await (const r of response) {\n  hit = r.hitsList?.[0]?.input?.data?.image?.url;\n  break;\n}\n\n// Print the URL of the matched image\nconsole.log(hit);\n',c='# Import necessary modules\nfrom clarifai.client.search import Search\nfrom clarifai.client.user import User\nfrom google.protobuf import struct_pb2\nfrom PIL import Image\nimport requests\nfrom IPython.display import display\n\n# User-specific credentials\nUSER_ID = \'\'  # User ID\nAPP_ID = \'\'   # Application ID\nPAT = \'\'      # Personal Access Token\n\n# Define dataset and image URL\nCREATE_DATASET_ID = "ci_search_dataset"\nDOG_IMG_URL = "https://samples.clarifai.com/dog.tiff"\n\n# Create Clarifai application\napp_obj = User(user_id=USER_ID, pat=PAT).create_app(app_id=APP_ID, base_workflow="General")\n\n# Create a dataset\ndataset_obj = app_obj.create_dataset(CREATE_DATASET_ID)\n\n# Initialize inputs object\ninp_obj = app_obj.inputs()\n\n# Define metadata for the image\nmetadata = struct_pb2.Struct()\nmetadata.update({"Breed": "Saint Bernard"})\n\n# Get input from URL and upload it\ninput_proto = inp_obj.get_input_from_url(\n        dataset_id=CREATE_DATASET_ID,\n        input_id="dog-tiff",\n        image_url=DOG_IMG_URL,\n        labels=["dog"],\n        geo_info=[-30.0, 40.0],  # longitude, latitude\n        metadata=metadata)\ninp_obj.upload_inputs([input_proto])\n\n# Define OR filter\nor_filter = [{  # OR\n              "concepts": [{\n                  "name": "deer",\n                  "value": 1\n              }, {\n                  "name": "dog",\n                  "value": 1\n              }]\n          }]\n\n# Perform search with OR filter\nsearch = app_obj.search()\nres = search.query(ranks=[{"image_url": "https://samples.clarifai.com/dog.tiff"}], filters=or_filter)\n\n# Process search results\nresp = list(res)\nfor r in resp:\n    hit = r.hits[0].input.data.image.url\n    break\n\n# Display the image\nprint(hit)\nhit_img = Image.open(requests.get(hit, stream=True).raw).resize((300,250))\ndisplay(hit_img)',u='import { Input, Search, User } from "clarifai-nodejs";\n\n\nconst appId = "test_app"; // Placeholder for application ID\n\nconst dogImgUrl = "https://samples.clarifai.com/dog.tiff";\n\n// Initialize a User object with your credentials\nconst client = new User({\n  userId: process.env.CLARIFAI_USER_ID,\n  pat: process.env.CLARIFAI_PAT,\n  appId,\n});\n\n// Create an application within Clarifai with the specified ID and base workflow\n// The \'Universal\' workflow is a general-purpose workflow that can handle various types of data\nawait client.createApp({\n  appId,\n  baseWorkflow: "Universal",\n});\n\n// Initialize an Input object to manage input data\nconst input = new Input({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n});\n\n// Define metadata for the image\nconst metadata = { Breed: "Saint Bernard" };\n\n// Get input from URL and upload it\nconst inputProto = Input.getInputFromUrl({\n  inputId: "dogTiff",\n  imageUrl: dogImgUrl,\n  labels: ["dog"],\n  geoInfo: { longitude: -30.0, latitude: 40.0 }, // longitude, latitude\n  metadata,\n});\nawait input.uploadInputs({ inputs: [inputProto] });\n\n// Define OR filter\nconst orFilter = [\n  {\n    // OR\n    concepts: [\n      {\n        name: "deer",\n        value: 1,\n      },\n      {\n        name: "dog",\n        value: 1,\n      },\n    ],\n  },\n];\n\n// Perform search with OR filter\nconst search = new Search({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n  topK: 2,\n  metric: "euclidean",\n});\nconst res = search.query({\n  ranks: [{ imageUrl: "https://samples.clarifai.com/dog.tiff" }],\n  filters: orFilter, // Filter for images only\n});\n\nlet hit;\n// Process search results\nfor await (const r of res) {\n  hit = r.hitsList?.[0]?.input?.data?.image?.url;\n  break;\n}\n\n// Display the image\nconsole.log(hit);\n',d='# Import necessary modules\nfrom clarifai.client.search import Search\nfrom clarifai.client.user import User\nfrom google.protobuf import struct_pb2\nfrom PIL import Image\nimport requests\nfrom IPython.display import display\n\n# Define user-specific credentials\nUSER_ID=\'\'\nAPP_ID=\'\'\nPAT=\'\'\n\n# Define constants\nCREATE_DATASET_ID = "ci_search_dataset"\nDOG_IMG_URL = "https://samples.clarifai.com/dog.tiff"\n\n# Create a new application\napp_obj = User(user_id=USER_ID, pat=PAT).create_app(app_id=APP_ID, base_workflow="General")\n\n# Create a new dataset\ndataset_obj = app_obj.create_dataset(CREATE_DATASET_ID)\n\n# Initialize Inputs object for uploading data\ninp_obj = app_obj.inputs()\n\n# Define metadata for the input\nmetadata = struct_pb2.Struct()\nmetadata.update({"Breed": "Saint Bernard"})\n\n# Get input from URL and upload it to the dataset\ninput_proto = inp_obj.get_input_from_url(\n        dataset_id=CREATE_DATASET_ID,\n        input_id="dog-tiff",\n        image_url=DOG_IMG_URL,\n        labels=["dog"],\n        geo_info=[-30.0, 40.0],  # longitude, latitude\n        metadata=metadata)\ninp_obj.upload_inputs([input_proto])\n\n# Define an AND filter\nand_filter = [\n              {  # AND\n                  "concepts": [{\n                      "name": "dog",\n                      "value": 1\n                  }]\n              },\n              {\n                  "concepts": [{\n                      "name": "deer",\n                      "value": 1\n                  }]\n              }\n          ]\n\n# Create a search object\nsearch = app_obj.search()\n\n# Perform a search query with the specified rank and AND filter\nres = search.query(ranks=[{"image_url": "https://samples.clarifai.com/dog.tiff"}], filters=and_filter)\n\n# Convert search results to a list\nresp = list(res)\n\n# Print the length of the search results\nprint(len(resp)) # Should be zero',m='import { Input, Search, User } from "clarifai-nodejs";\n\n\nconst appId = "test_app"; // Placeholder for application ID\n\nconst dogImgUrl = "https://samples.clarifai.com/dog.tiff";\n\n// Initialize a User object with your credentials\nconst client = new User({\n  userId: process.env.CLARIFAI_USER_ID,\n  pat: process.env.CLARIFAI_PAT,\n  appId,\n});\n\n// Create an application within Clarifai with the specified ID and base workflow\n// The \'Universal\' workflow is a general-purpose workflow that can handle various types of data\nawait client.createApp({\n  appId,\n  baseWorkflow: "Universal",\n});\n\n// Initialize an Input object to manage input data\nconst input = new Input({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n});\n\n// Define metadata for the image\nconst metadata = { Breed: "Saint Bernard" };\n\n// Get input from URL and upload it\nconst inputProto = Input.getInputFromUrl({\n  inputId: "dogTiff",\n  imageUrl: dogImgUrl,\n  labels: ["dog"],\n  geoInfo: { longitude: -30.0, latitude: 40.0 }, // longitude, latitude\n  metadata,\n});\nawait input.uploadInputs({ inputs: [inputProto] });\n\n// Define andFilter\nconst andFilter = [\n  {\n    // AND\n    concepts: [\n      {\n        name: "dog",\n        value: 1,\n      },\n    ],\n  },\n  {\n    concepts: [\n      {\n        name: "deer",\n        value: 1,\n      },\n    ],\n  },\n];\n\n// Perform search with OR filter\nconst search = new Search({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n  topK: 2,\n  metric: "euclidean",\n});\nconst res = search.query({\n  ranks: [{ imageUrl: "https://samples.clarifai.com/dog.tiff" }],\n  filters: andFilter, // Filter for images only\n});\n\nlet hit;\n// Process search results\nfor await (const r of res) {\n  hit = r.hitsList?.[0]?.input?.data?.image?.url;\n  break;\n}\n\n// Display the image\nconsole.log(hit);\n',h='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\n\n#(Example Workflows: \'Universal\', \'Empty\', \'General\')\napp = client.create_app(app_id="app_id", base_workflow="Universal")\n\n# set the input url\'s\nurls = [\n    "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",\n    "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",\n    "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg"\n]\n\ninput_obj = app.inputs()\n# add inputs to the app\nfor i, url in enumerate(urls):\n    input_obj.upload_from_url(input_id=f"input{i}", image_url=url)\n\n\n# perform search with pagination\nsearch = app.search(pagination=True)\nresponse = search.query(ranks=[{"text_raw": "Red pineapples on the beach."}], per_page=2,page_no=1)\nresp = list(response)\nprint(len(resp[0].hits))',f='import { Input, Search, User } from "clarifai-nodejs";\n\n\nconst appId = "test_app"; // Placeholder for application ID\n\n// Initialize a User object with your credentials\nconst client = new User({\n  userId: process.env.CLARIFAI_USER_ID,\n  pat: process.env.CLARIFAI_PAT,\n  appId,\n});\n\n// Create an application with the specified app ID and base workflow\nawait client.createApp({ appId, baseWorkflow: "Universal" });\n\n// URLs of images to be uploaded\nconst urls = [\n  "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",\n  "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",\n  "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg",\n];\n\n// Initialize an Input object to manage input data\nconst input = new Input({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n});\n\n// Upload each image from the provided URLs\nfor (let i = 0; i < urls.length; i++) {\n  await input.uploadFromUrl({ inputId: `input${i}`, imageUrl: urls[i] });\n}\n\n// Initialize a search object for the created application, top-K not set for pagination\nconst search = new Search({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n    appId,\n  },\n  metric: "euclidean",\n});\n\nconst response = search.query({\n  ranks: [{ textRaw: "Red pineapples on the beach." }],\n  perPage: 2,\n  page: 1,\n});\n\nconst hits = (await response.next()).value?.hitsList ?? [];\nconsole.log(hits);\n',g="https://samples.clarifai.com/dog.tiff",I="https://samples.clarifai.com/dog.tiff",y="0",_="2",b={description:"Learn how to perform Advanced Search",sidebar_position:3},A="Advance Search Operations",v={unversionedId:"sdk/Search/Advance-Search",id:"sdk/Search/Advance-Search",title:"Advance Search Operations",description:"Learn how to perform Advanced Search",source:"@site/docs/sdk/Search/Advance-Search.md",sourceDirName:"sdk/Search",slug:"/sdk/Search/Advance-Search",permalink:"/sdk/Search/Advance-Search",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/Search/Advance-Search.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn how to perform Advanced Search",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Filter",permalink:"/sdk/Search/Filter"},next:{title:"Advanced Model Operations",permalink:"/sdk/advance-model-operations/"}},w={},T=[{value:"Custom Concepts",id:"custom-concepts",level:2},{value:"OR",id:"or",level:2},{value:"AND",id:"and",level:2},{value:"Pagination",id:"pagination",level:2}],k={toc:T},C="wrapper";function D(e){let{components:n,...a}=e;return(0,r.yg)(C,(0,t.A)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"advance-search-operations"},"Advance Search Operations"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Learn how to perform advance search operations using Clarifai SDKs")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"In this section we are showcasing Clarifai\u2019s  powerful capabilities for refining search results based on complex criteria. The use of AND and OR operations allows users to perform more nuanced searches, combining multiple conditions to precisely filter content. With AND, users can narrow down results to items that meet all specified criteria simultaneously, while OR expands the search scope to include items that meet any of the provided conditions. Additionally, leveraging custom concepts enables users to define their own labels or categories, further enhancing search flexibility."),(0,r.yg)("h2",{id:"custom-concepts"},"Custom Concepts"),(0,r.yg)("p",null,'Searching with custom concepts in Clarifai involves associating user-defined labels or concepts with data, enabling more targeted searches. By specifying custom concepts like "dog," users can retrieve relevant results efficiently. This approach streamlines tasks such as content organization and classification, enhancing applications like image recognition and content moderation.'),(0,r.yg)("p",null,"Click ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/search/rank"},"here")," to know more about Custom Concept search."),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-python",mdxType:"CodeBlock"},l),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(o.A,{className:"language-text",mdxType:"CodeBlock"},g),(0,r.yg)("img",{src:"/img/python-sdk/as_cc.png",width:"700",height:"700"}))),(0,r.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-typescript",mdxType:"CodeBlock"},p))),(0,r.yg)("h2",{id:"or"},"OR"),(0,r.yg)("p",null,"In Clarifai, the OR search operation provides users with a flexible means to retrieve search results that satisfy one or more specified criteria. By employing the OR filter, users can broaden their search scope to include items that meet any of the provided conditions."),(0,r.yg)("p",null,"Click ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/search/legacy-search/"},"here")," to know more about OR search."),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-python",mdxType:"CodeBlock"},c),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(o.A,{className:"language-text",mdxType:"CodeBlock"},I),(0,r.yg)("img",{src:"/img/python-sdk/as_or.png",width:"700",height:"700"}))),(0,r.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-typescript",mdxType:"CodeBlock"},u))),(0,r.yg)("h2",{id:"and"},"AND"),(0,r.yg)("p",null,'In Clarifai, the AND operation allows users to refine search results by specifying multiple criteria that must all be met simultaneously. For example, if a user searches for images containing both "dog" and "deer" concepts, only images that are labeled as both dogs and deers will be returned.'),(0,r.yg)("p",null,"Click ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/search/legacy-search/"},"here")," to know more about AND search."),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-python",mdxType:"CodeBlock"},d),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(o.A,{className:"language-text",mdxType:"CodeBlock"},y))),(0,r.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-typescript",mdxType:"CodeBlock"},m))),(0,r.yg)("h2",{id:"pagination"},"Pagination"),(0,r.yg)("p",null,"In Clarifai SDKs, users can set the pagination parameters like ",(0,r.yg)("inlineCode",{parentName:"p"},"per_page")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"page_no")," for displaying the search results."),(0,r.yg)(i.A,{mdxType:"Tabs"},(0,r.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-python",mdxType:"CodeBlock"},h),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(o.A,{className:"language-text",mdxType:"CodeBlock"},_))),(0,r.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.yg)(o.A,{className:"language-typescript",mdxType:"CodeBlock"},f))))}D.isMDXComponent=!0}}]);