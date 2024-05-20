"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3410],{19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),l=a(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>_});var n=a(58168),l=a(96540),r=a(20053),o=a(23104),i=a(56347),s=a(57485),u=a(31682),d=a(89466);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=y({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Dv)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var h=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,r.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return l.createElement("div",{className:(0,r.A)("tabs-container",f.tabList)},l.createElement(b,(0,n.A)({},e,t)),l.createElement(T,(0,n.A)({},e,t)))}function _(e){const t=(0,h.A)();return l.createElement(v,(0,n.A)({key:String(t)},e))}},35857:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>T,default:()=>x,frontMatter:()=>b,metadata:()=>v,toc:()=>k});var n=a(58168),l=(a(96540),a(15680)),r=a(11470),o=a(19365),i=a(77964);const s='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\napp = client.create_app(app_id="demo_train", base_workflow="Universal")',u="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nCSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/imdb.csv')\n\n\n# Create a Clarifai dataset with the specified dataset_id \ndataset = app.create_dataset(dataset_id=\"text_dataset\")\n# Upload the dataset using the provided dataloader and get the upload status\ndataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)\n",d="print(app.list_trainable_model_types())",c='MODEL_ID = "model_clusterer"\nMODEL_TYPE_ID = "clusterer"\n\n# Create a model by passing the model name and model type as parameter\nmodel = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)\n',p="# Get the params for the selected template\nmodel_params = model.get_params()\nprint(model_params)",m='import time\n#Starting the training\nmodel_version_id = model.train()\n\n#Checking the status of training\nwhile True:\n    status = model.training_status(version_id=model_version_id,training_logs=False)\n    if status.code == 21106: #MODEL_TRAINING_FAILED\n        print(status)\n        break\n    elif status.code == 21100: #MODEL_TRAINED\n        print(status)\n        break\n    else:\n        print("Current Status:",status)\n        print("Waiting---")\n        time.sleep(120)',y='TEXT = b"This is a great place to work"\n\n# get the predictions\nmodel_prediction = model.predict_by_bytes(TEXT, input_type="text")\n\nprint(model_prediction.outputs[0].data.clusters)\n',g="['visual-classifier',\n 'visual-detector',\n 'visual-segmenter',\n 'visual-embedder',\n 'clusterer',\n 'text-classifier',\n 'embedding-classifier',\n 'text-to-text']",h="{'train_params': {'base_embed_model': None,\n  'coarse_clusters': 32.0,\n  'eval_holdout_fraction': 0.2,\n  'query_holdout_fraction': 0.1,\n  'to_be_indexed_queries_fraction': 0.25,\n  'max_num_query_embeddings': 100.0,\n  'num_results_per_query': [1.0, 5.0, 10.0, 20.0],\n  'max_visited': 32.0,\n  'quota': 1000.0,\n  'beta': 1.0}}",f='[id: "22_5"\n\nprojection: 0.010116016492247581\n\nprojection: -0.035988882184028625\n\n]',b={},T="Clusterer",v={unversionedId:"python-sdk/Model-Training-Tutorial/clusterer",id:"python-sdk/Model-Training-Tutorial/clusterer",title:"Clusterer",description:"Learn how to train a clustering model using Clarifai Python SDK",source:"@site/docs/python-sdk/Model-Training-Tutorial/clusterer.md",sourceDirName:"python-sdk/Model-Training-Tutorial",slug:"/python-sdk/Model-Training-Tutorial/clusterer",permalink:"/python-sdk/Model-Training-Tutorial/clusterer",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/Model-Training-Tutorial/clusterer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model Training Tutorial",permalink:"/python-sdk/Model-Training-Tutorial/"},next:{title:"Embedding Classifier",permalink:"/python-sdk/Model-Training-Tutorial/embedding_classifier"}},_={},k=[{value:"App Creation",id:"app-creation",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Choose The Model Type",id:"choose-the-model-type",level:2},{value:"Model Creation",id:"model-creation",level:2},{value:"Template Selection",id:"template-selection",level:2},{value:"Setup Model Parameters",id:"setup-model-parameters",level:2},{value:"Initiate Model Training",id:"initiate-model-training",level:2},{value:"Model Prediction",id:"model-prediction",level:2}],w={toc:k},A="wrapper";function x(e){let{components:t,...a}=e;return(0,l.yg)(A,(0,n.A)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"clusterer"},"Clusterer"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Learn how to train a clustering model using Clarifai Python SDK")),(0,l.yg)("hr",null),(0,l.yg)("p",null,"Clusterer models are algorithms used in machine learning and data analysis to group similar data points together into clusters or clusters. These models aim to find patterns and structures within datasets by organizing the data into groups based on similarities in their features. You can learn more about Clusterer  ",(0,l.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/clusterer"},"here"),"."),(0,l.yg)("h2",{id:"app-creation"},"App Creation"),(0,l.yg)("p",null,"The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as \u201cdemo_train\u201d and the base workflow is set as \u201cUniversal\u201d. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case."),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(i.A,{className:"language-python",mdxType:"CodeBlock"},s))),(0,l.yg)("h2",{id:"dataset-upload"},"Dataset Upload"),(0,l.yg)("p",null,"The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The data used for training in this tutorial is available in the examples repository you have cloned."),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(i.A,{className:"language-python",mdxType:"CodeBlock"},u))),(0,l.yg)("p",null,"If you have followed the steps correctly you should receive an output that looks like this,"),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)("img",{src:"/img/python-sdk/cl_du.png",width:"700",height:"700"})),(0,l.yg)("h2",{id:"choose-the-model-type"},"Choose The Model Type"),(0,l.yg)("p",null,"First let's list the all available trainable model types in the platform,"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(i.A,{className:"language-python",mdxType:"CodeBlock"},d))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(i.A,{className:"language-text",mdxType:"CodeBlock"},g)),(0,l.yg)("p",null,"Click ",(0,l.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"here")," to know more about Clarifai Model Types."),(0,l.yg)("h2",{id:"model-creation"},"Model Creation"),(0,l.yg)("p",null,"From the above list of model types we are going to choose clusterer as it is similar to our use case. Now let's create a model with the above model type."),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(i.A,{className:"language-python",mdxType:"CodeBlock"},c))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)("img",{src:"/img/python-sdk/cl_mc.png",width:"700",height:"700"})),(0,l.yg)("h2",{id:"template-selection"},"Template Selection"),(0,l.yg)("p",null,"Inside the Clarifai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. But when it comes to clustering there is only one default template available."),(0,l.yg)("h2",{id:"setup-model-parameters"},"Setup Model Parameters"),(0,l.yg)("p",null,"You can update the model params to your need before initiating training."),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(i.A,{className:"language-python",mdxType:"CodeBlock"},p))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(i.A,{className:"language-text",mdxType:"CodeBlock"},h)),(0,l.yg)("h2",{id:"initiate-model-training"},"Initiate Model Training"),(0,l.yg)("p",null,"We can initiate the model training by calling the model.train() method. The Clarifai Python SDK also offers features like showing training status and saving training logs in a local file."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use._")),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(i.A,{className:"language-python",mdxType:"CodeBlock"},m))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)("img",{src:"/img/python-sdk/cl_imt.png",width:"700",height:"700"})),(0,l.yg)("h2",{id:"model-prediction"},"Model Prediction"),(0,l.yg)("p",null,"Since the model is trained and ready let\u2019s run some predictions to view the model performance,"),(0,l.yg)(r.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(i.A,{className:"language-python",mdxType:"CodeBlock"},y))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(i.A,{className:"language-text",mdxType:"CodeBlock"},f)))}x.isMDXComponent=!0}}]);