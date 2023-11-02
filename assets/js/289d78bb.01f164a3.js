"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9846],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return a?r.createElement(f,n(n({ref:t},d),{},{components:a})):r.createElement(f,n({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,n[1]=i;for(var s=2;s<l;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),o=(a(67294),a(3905));const l={description:"Learn how to use our Clarifai Python SDK",sidebar_position:2},n="Tutorial",i={unversionedId:"python-sdk/tutorial",id:"python-sdk/tutorial",title:"Tutorial",description:"Learn how to use our Clarifai Python SDK",source:"@site/docs/python-sdk/tutorial.md",sourceDirName:"python-sdk",slug:"/python-sdk/tutorial",permalink:"/python-sdk/tutorial",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn how to use our Clarifai Python SDK",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation Guide",permalink:"/python-sdk/sdk-overview"},next:{title:"API Reference",permalink:"/python-sdk/api-reference"}},p={},s=[{value:"Examples",id:"examples",level:2},{value:"Predict with Models",id:"predict-with-models",level:3},{value:"Predict with Workflow",id:"predict-with-workflow",level:3},{value:"Create App",id:"create-app",level:3},{value:"Create Dataset",id:"create-dataset",level:3},{value:"Create Workflow",id:"create-workflow",level:3},{value:"Export Workflow",id:"export-workflow",level:3},{value:"Upload Dataset",id:"upload-dataset",level:3},{value:"Upload Inputs",id:"upload-inputs",level:3},{value:"List Apps",id:"list-apps",level:3},{value:"List Datasets",id:"list-datasets",level:3},{value:"List Models",id:"list-models",level:3},{value:"List Workflows",id:"list-workflows",level:3},{value:"Delete App",id:"delete-app",level:3},{value:"Notebook Examples",id:"notebook-examples",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial"},"Tutorial"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to use the Clarifai Python SDK")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Python SDK is designed to offer you a simple, fast, and efficient way to experience the power of Clarifai\u2019s AI platform\u2014all with just a few lines of code."),(0,o.kt)("p",null,"Here are some self-contained code snippets that you can easily copy and get started consuming the Clarifai API easily and quickly. "),(0,o.kt)("p",null,"For detailed information about the Python SDK, please refer to its ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/python-sdk/api-reference"},"API Reference"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"predict-with-models"},"Predict with Models"),(0,o.kt)("p",null,"For more information on any of the public models, visit ",(0,o.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/models"},"here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.model import Model\n\n# Model Predict\nmodel_prediction = Model("https://clarifai.com/anthropic/completion/models/claude-v2").predict_by_bytes(b"Write a tweet on future of AI", "text")\n\nmodel = Model(user_id="user_id", app_id="app_id", model_id="model_id")\nmodel_prediction = model.predict_by_url(url="url", input_type="image") # Supports image, text, audio, video\n\n# Customizing Model Inference Output\nmodel = Model(user_id="user_id", app_id="app_id", model_id="model_id",\n                  output_config={"min_value": 0.98}) # Return predictions having prediction confidence > 0.98\nmodel_prediction = model.predict_by_filepath(filepath="local_filepath", input_type="text") # Supports image, text, audio, video\n\nmodel = Model(user_id="user_id", app_id="app_id", model_id="model_id",\n                  output_config={"sample_ms": 2000}) # Return predictions for specified interval\nmodel_prediction = model.predict_by_url(url="VIDEO_URL", input_type="video")\n')),(0,o.kt)("h3",{id:"predict-with-workflow"},"Predict with Workflow"),(0,o.kt)("p",null,"For more information on any of the public workflows, visit ",(0,o.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/workflows"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.workflow import Workflow\n\n# Workflow Predict\nworkflow = Workflow("workflow_url") # Example: https://clarifai.com/clarifai/main/workflows/Face-Sentiment\nworkflow_prediction = workflow.predict_by_url(url="url", input_type="image") # Supports image, text, audio, video\n\n# Customizing Workflow Inference Output\nworkflow = Workflow(user_id="user_id", app_id="app_id", workflow_id="workflow_id",\n                  output_config={"min_value": 0.98}) # Return predictions having prediction confidence > 0.98\nworkflow_prediction = workflow.predict_by_filepath(filepath="local_filepath", input_type="text") # Supports image, text, audio, video\n')),(0,o.kt)("h3",{id:"create-app"},"Create App"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.user import User\nclient = User(user_id="user_id")\n\n# Get all apps\napps = client.list_apps()\n\n# Create app and dataset\napp = client.create_app(app_id="demo_app", base_workflow="Universal")\n')),(0,o.kt)("h3",{id:"create-dataset"},"Create Dataset"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.app import App\n\n# Get an app\napp = App(user_id="user_id", app_id="app_id")\n\n # Create a dataset\ndataset = app.create_dataset(dataset_id="demo_dataset")\n')),(0,o.kt)("h3",{id:"create-workflow"},"Create Workflow"),(0,o.kt)("p",null,"Create a new workflow specified by a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/examples/tree/main/workflows/configs"},"yaml config file"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.app import App\napp = App(user_id="user_id", app_id="app_id")\nworkflow = app.create_workflow(config_filepath="config.yml")\n')),(0,o.kt)("h3",{id:"export-workflow"},"Export Workflow"),(0,o.kt)("p",null,"Export an existing workflow from Clarifai as a local yaml file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.workflow import Workflow\nworkflow = Workflow(\"https://clarifai.com/clarifai/main/workflows/Demographics\")\nworkflow.export('demographics_workflow.yml')\n")),(0,o.kt)("h3",{id:"upload-dataset"},"Upload Dataset"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.dataset import Dataset\n\n# Get a dataset\ndataset = Dataset(user_id=\"user_id\", app_id=\"app_id\", dataset_id=\"dataset_id\")\n\n# Upload dataset from loaders\ndataset.upload_dataset(task='visual_segmentation', split=\"train\", dataset_loader='coco_segmentation')\n\n# Upload a dataset from local folder\ndataset.upload_from_folder(folder_path='folder_path', input_type='text', labels=True)\n\n# Upload a text dataset from csv file\ndataset.upload_from_csv(csv_path='csv_path', labels=True)\n")),(0,o.kt)("h3",{id:"upload-inputs"},"Upload Inputs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from clarifai.client.user import User\napp = User(user_id=\"user_id\").app(app_id=\"app_id\")\ninput_obj = app.inputs()\n\n#input upload from url\ninput_obj.upload_from_url(input_id = 'demo', image_url='https://samples.clarifai.com/metro-north.jpg')\n\n#input upload from filename\ninput_obj.upload_from_file(input_id = 'demo', video_file='demo.mp4')\n\n# text upload\ninput_obj.upload_text(input_id = 'demo', raw_text = 'This is a test')\n")),(0,o.kt)("h3",{id:"list-apps"},"List Apps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.user import User\nclient = User(user_id="user_id")\n\n# Get all apps\napps = client.list_apps()\n')),(0,o.kt)("h3",{id:"list-datasets"},"List Datasets"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.app import App\n\n# Get an app\napp = App(user_id="user_id", app_id="app_id")\n\n# Get all datasets\ndatasets = app.list_datasets()\n')),(0,o.kt)("h3",{id:"list-models"},"List Models"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.app import App\n\n# Get an app\napp = App(user_id="user_id", app_id="app_id")\n\n# Get all models\nmodels = app.list_models()\n\n# List all models in community filtered by model_type, description\nall_llm_community_models = App().list_models(filter_by={"query": "LLM",\n                                                     "model_type_id": "text-to-text"}, only_in_app=False)\n')),(0,o.kt)("h3",{id:"list-workflows"},"List Workflows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.app import App\n\n# Get an app\napp = App(user_id="user_id", app_id="app_id")\n\n# List all workflow in an app\nworkflows = app.list_workflows()\n\n# List all workflow in community filtered by description\nall_face_community_workflows = App().list_workflows(filter_by={"query": "face"}, only_in_app=False) # Get all face related workflows\n')),(0,o.kt)("h3",{id:"delete-app"},"Delete App"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Note: CLARIFAI_PAT must be set as env variable.\nfrom clarifai.client.user import User\nclient = User(user_id="user_id")\n\n# Delete an app\nclient.delete_app(app_id="app_id")\n')),(0,o.kt)("h2",{id:"notebook-examples"},"Notebook Examples"),(0,o.kt)("p",null,"Here are comprehensive step-by-step walkthroughs within Jupyter or Colab notebooks that showcase how to harness the power of the Clarifai Python SDK."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Notebook URL"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/examples/blob/main/basics/basics.ipynb"},"Basics")),(0,o.kt)("td",{parentName:"tr",align:null},"App and dataset lifecycle: creation, interaction, and deletion")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/examples/blob/main/datasets/upload/dataset_upload.ipynb"},"Datasets")),(0,o.kt)("td",{parentName:"tr",align:null},"Illustrates how to upload datasets into a Clarifai app using features from ",(0,o.kt)("inlineCode",{parentName:"td"},"Dataset"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/examples/blob/main/models/model_predict.ipynb"},"Models")),(0,o.kt)("td",{parentName:"tr",align:null},"Learn how to get predictions from text, image, video, and audio inputs")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/examples/blob/main/workflows/create_workflow.ipynb"},"Create Workflows")," ")," ",(0,o.kt)("li",null," ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/examples/blob/main/workflows/export_workflow.ipynb"},"Export workflows")))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("ul",null,(0,o.kt)("li",null,"Learn how to create workflows"),(0,o.kt)("li",null,"Learn how to export workflows")))))))}c.isMDXComponent=!0}}]);