"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3398],{55315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>x,default:()=>w,frontMatter:()=>y,metadata:()=>v,toc:()=>j});var n=a(74848),r=a(28453),l=a(11470),i=a(19365),s=a(21432);const o='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\napp = client.create_app(app_id="demo_train", base_workflow="Universal")',d="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nCSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/imdb.csv')\n\n\n# Create a Clarifai dataset with the specified dataset_id \ndataset = app.create_dataset(dataset_id=\"text_dataset\")\n# Upload the dataset using the provided dataloader and get the upload status\ndataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)\n",u="print(app.list_trainable_model_types())",c='MODEL_ID = "model_clusterer"\nMODEL_TYPE_ID = "clusterer"\n\n# Create a model by passing the model name and model type as parameter\nmodel = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)\n',h="# Get the params for the selected template\nmodel_params = model.get_params()\nprint(model_params)",p='import time\n#Starting the training\nmodel_version_id = model.train()\n\n#Checking the status of training\nwhile True:\n    status = model.training_status(version_id=model_version_id,training_logs=False)\n    if status.code == 21106: #MODEL_TRAINING_FAILED\n        print(status)\n        break\n    elif status.code == 21100: #MODEL_TRAINED\n        print(status)\n        break\n    else:\n        print("Current Status:",status)\n        print("Waiting---")\n        time.sleep(120)',m='TEXT = b"This is a great place to work"\n\n# get the predictions\nmodel_prediction = model.predict_by_bytes(TEXT, input_type="text")\n\nprint(model_prediction.outputs[0].data.clusters)\n',g="['visual-classifier',\n 'visual-detector',\n 'visual-segmenter',\n 'visual-embedder',\n 'clusterer',\n 'text-classifier',\n 'embedding-classifier',\n 'text-to-text']",f="{'train_params': {'base_embed_model': None,\n  'coarse_clusters': 32.0,\n  'eval_holdout_fraction': 0.2,\n  'query_holdout_fraction': 0.1,\n  'to_be_indexed_queries_fraction': 0.25,\n  'max_num_query_embeddings': 100.0,\n  'num_results_per_query': [1.0, 5.0, 10.0, 20.0],\n  'max_visited': 32.0,\n  'quota': 1000.0,\n  'beta': 1.0}}",b='[id: "22_5"\n\nprojection: 0.010116016492247581\n\nprojection: -0.035988882184028625\n\n]',y={},x="Clusterer",v={id:"sdk/Model-Training-Tutorial/clusterer",title:"Clusterer",description:"Learn how to train a clustering model using Clarifai SDKs",source:"@site/docs/sdk/Model-Training-Tutorial/clusterer.md",sourceDirName:"sdk/Model-Training-Tutorial",slug:"/sdk/Model-Training-Tutorial/clusterer",permalink:"/sdk/Model-Training-Tutorial/clusterer",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/Model-Training-Tutorial/clusterer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model Training Tutorial",permalink:"/sdk/Model-Training-Tutorial/"},next:{title:"Embedding Classifier",permalink:"/sdk/Model-Training-Tutorial/embedding_classifier"}},_={},j=[{value:"App Creation",id:"app-creation",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Choose The Model Type",id:"choose-the-model-type",level:2},{value:"Model Creation",id:"model-creation",level:2},{value:"Template Selection",id:"template-selection",level:2},{value:"Setup Model Parameters",id:"setup-model-parameters",level:2},{value:"Initiate Model Training",id:"initiate-model-training",level:2},{value:"Model Prediction",id:"model-prediction",level:2}];function T(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"clusterer",children:"Clusterer"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Learn how to train a clustering model using Clarifai SDKs"})}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(t.p,{children:["Clusterer models are algorithms used in machine learning and data analysis to group similar data points together into clusters or clusters. These models aim to find patterns and structures within datasets by organizing the data into groups based on similarities in their features. You can learn more about Clusterer  ",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/model/model-types/clusterer",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"app-creation",children:"App Creation"}),"\n",(0,n.jsx)(t.p,{children:"The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as \u201cdemo_train\u201d and the base workflow is set as \u201cUniversal\u201d. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case."}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:o})})}),"\n",(0,n.jsx)(t.h2,{id:"dataset-upload",children:"Dataset Upload"}),"\n",(0,n.jsx)(t.p,{children:"The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The data used for training in this tutorial is available in the examples repository you have cloned."}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:d})})}),"\n",(0,n.jsx)(t.p,{children:"If you have followed the steps correctly you should receive an output that looks like this,"}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)("img",{src:"/img/python-sdk/cl_du.png"})]}),"\n",(0,n.jsx)(t.h2,{id:"choose-the-model-type",children:"Choose The Model Type"}),"\n",(0,n.jsx)(t.p,{children:"First let's list the all available trainable model types in the platform,"}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:u})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(s.A,{className:"language-text",children:g})]}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/model/model-types/",children:"here"})," to know more about Clarifai Model Types."]}),"\n",(0,n.jsx)(t.h2,{id:"model-creation",children:"Model Creation"}),"\n",(0,n.jsx)(t.p,{children:"From the above list of model types we are going to choose clusterer as it is similar to our use case. Now let's create a model with the above model type."}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:c})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)("img",{src:"/img/python-sdk/cl_mc.png"})]}),"\n",(0,n.jsx)(t.h2,{id:"template-selection",children:"Template Selection"}),"\n",(0,n.jsx)(t.p,{children:"Inside the Clarifai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. But when it comes to clustering there is only one default template available."}),"\n",(0,n.jsx)(t.h2,{id:"setup-model-parameters",children:"Setup Model Parameters"}),"\n",(0,n.jsx)(t.p,{children:"You can update the model params to your need before initiating training."}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:h})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(s.A,{className:"language-text",children:f})]}),"\n",(0,n.jsx)(t.h2,{id:"initiate-model-training",children:"Initiate Model Training"}),"\n",(0,n.jsx)(t.p,{children:"We can initiate the model training by calling the model.train() method. The Clarifai SDKs also offers features like showing training status and saving training logs in a local file."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use._"})}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:p})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)("img",{src:"/img/python-sdk/cl_imt.png"})]}),"\n",(0,n.jsx)(t.h2,{id:"model-prediction",children:"Model Prediction"}),"\n",(0,n.jsx)(t.p,{children:"Since the model is trained and ready let\u2019s run some predictions to view the model performance,"}),"\n",(0,n.jsx)(l.A,{children:(0,n.jsx)(i.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:m})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(s.A,{className:"language-text",children:b})]})]})}function w(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(96540),r=a(18215),l=a(23104),i=a(56347),s=a(205),o=a(57485),d=a(31682),u=a(70679);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[d,c]=m({queryString:a,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),b=(()=>{const e=d??g;return p({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var f=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),u=e=>{const t=e.currentTarget,a=o.indexOf(t),r=s[a].value;r!==n&&(d(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:c,onClick:u,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function _(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,y.jsx)(x,{...t,...e}),(0,y.jsx)(v,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,y.jsx)(_,{...e,children:c(e.children)},String(t))}}}]);