"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[343],{85162:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>_});var o=a(87462),n=a(67294),l=a(86010),i=a(12466),r=a(16550),s=a(91980),d=a(67392),u=a(50012);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function f(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,l=f(e),[i,r]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:l}))),[s,d]=c({queryString:a,groupId:o}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,l]=(0,u.Nk)(a);return[o,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:o}),y=(()=>{const e=s??p;return h({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&r(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var y=a(72389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),f=e=>{const t=e.currentTarget,a=u.indexOf(t),o=d[a].value;o!==r&&(p(t),s(o))},h=e=>{let t=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:f},i,{className:(0,l.Z)("tabs__item",T.tabItem,i?.className,{"tabs__item--active":r===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:o}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function v(e){const t=m(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",T.tabList)},n.createElement(g,(0,o.Z)({},e,t)),n.createElement(k,(0,o.Z)({},e,t)))}function _(e){const t=(0,y.Z)();return n.createElement(v,(0,o.Z)({key:String(t)},e))}},93948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>_,default:()=>N,frontMatter:()=>v,metadata:()=>b,toc:()=>w});var o=a(87462),n=(a(67294),a(3905)),l=a(74866),i=a(85162),r=a(90814);const s='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\napp = client.create_app(app_id="demo_train", base_workflow="Universal")',d="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nCSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/imdb.csv')\n\n\n# Create a Clarifai dataset with the specified dataset_id \ndataset = app.create_dataset(dataset_id=\"text_dataset\")\n# Upload the dataset using the provided dataloader and get the upload status\ndataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)\n",u="print(app.list_trainable_model_types())",p='MODEL_ID = "model_text_to_text"\nMODEL_TYPE_ID = "text-to-text"\n\n# Create a model by passing the model name and model type as parameter\nmodel = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)\n',f="print(model.list_training_templates())\n",h="# get the model params\nmodel_params = model.get_params(template='HuggingFace_AdvancedConfig')\n# update dataset field \nmodel.update_params(dataset_id = 'text_dataset')\nprint(model.training_params)",c='import time\n#Starting the training\nmodel_version_id = model.train()\n\n#Checking the status of training\nwhile True:\n    status = model.training_status(version_id=model_version_id,training_logs=False)\n    if status.code == 21106: #MODEL_TRAINING_FAILED\n        print(status)\n        break\n    elif status.code == 21100: #MODEL_TRAINED\n        print(status)\n        break\n    else:\n        print("Current Status:",status)\n        print("Waiting---")\n        time.sleep(120)\n',m='# Getting the predictions\nTEXT = b"This is a great place to work"\nmodel_prediction = model.predict_by_bytes(TEXT, input_type="text")\n\n# Get the output\nprint(\'Input: \',TEXT)\nprint(model_prediction.outputs[0].data.text)',y="['visual-classifier',\n 'visual-detector',\n 'visual-segmenter',\n 'visual-embedder',\n 'clusterer',\n 'text-classifier',\n 'embedding-classifier',\n 'text-to-text']",T="['HF_GPTNeo_125m_lora',\n 'HF_GPTNeo_2p7b_lora',\n 'HF_Llama_2_13b_chat_GPTQ_lora',\n 'HF_Llama_2_7b_chat_GPTQ_lora',\n 'HF_Mistral_7b_instruct_GPTQ_lora',\n 'HuggingFace_AdvancedConfig']\n",g="{'dataset_id': 'text_dataset',\n 'dataset_version_id': '',\n 'train_params': {'invalid_data_tolerance_percent': 5.0,\n  'template': 'HuggingFace_AdvancedConfig',\n  'model_config': {'pretrained_model_name_or_path': 'facebook/opt-125m',\n   'torch_dtype': 'torch.float32'},\n  'tokenizer_config': {'model_max_length': 512.0},\n  'trainer_config': {'num_train_epochs': 1.0,\n   'auto_find_batch_size': True,\n   'output_dir': 'checkpoint'}}}\n",k='\nInput:  b\'This is a great place to work\'\n\nraw: ". The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food is good. The staff is very friendly and helpful. The food"\n\ntext_info {\n\n  encoding: "UnknownTextEnc"\n\n}',v={},_="Text To Text",b={unversionedId:"python-sdk/Model-Training-Tutorial/text_to_text",id:"python-sdk/Model-Training-Tutorial/text_to_text",title:"Text To Text",description:"Text-to-text models are a class of natural language processing (NLP) models designed to handle a wide range of text-based tasks using a unified architecture. Unlike traditional NLP models that are task-specific, text-to-text models are trained to map input text to output text, making them highly versatile and capable of performing various tasks such as translation, summarization, question answering, and text generation. You can learn more about Text-To-Text here.",source:"@site/docs/python-sdk/Model-Training-Tutorial/text_to_text.md",sourceDirName:"python-sdk/Model-Training-Tutorial",slug:"/python-sdk/Model-Training-Tutorial/text_to_text",permalink:"/python-sdk/Model-Training-Tutorial/text_to_text",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/Model-Training-Tutorial/text_to_text.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text Classifier",permalink:"/python-sdk/Model-Training-Tutorial/text_classifier"},next:{title:"Visual Classifier",permalink:"/python-sdk/Model-Training-Tutorial/visual_classifier"}},x={},w=[{value:"App Creation",id:"app-creation",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Choose The Model Type",id:"choose-the-model-type",level:2},{value:"Model Creation",id:"model-creation",level:2},{value:"Template Selection",id:"template-selection",level:2},{value:"Setup Model Parameters",id:"setup-model-parameters",level:2},{value:"Initiate Model Training",id:"initiate-model-training",level:2},{value:"Model Prediction",id:"model-prediction",level:2}],C={toc:w},I="wrapper";function N(e){let{components:t,...a}=e;return(0,n.kt)(I,(0,o.Z)({},C,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"text-to-text"},"Text To Text"),(0,n.kt)("p",null,"Text-to-text models are a class of natural language processing (NLP) models designed to handle a wide range of text-based tasks using a unified architecture. Unlike traditional NLP models that are task-specific, text-to-text models are trained to map input text to output text, making them highly versatile and capable of performing various tasks such as translation, summarization, question answering, and text generation. You can learn more about Text-To-Text ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/text-to-text"},"here"),"."),(0,n.kt)("h2",{id:"app-creation"},"App Creation"),(0,n.kt)("p",null,"The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as \u201cdemo_train\u201d and the base workflow is set as \u201cUniversal\u201d. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},s))),(0,n.kt)("h2",{id:"dataset-upload"},"Dataset Upload"),(0,n.kt)("p",null,"The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The  data used for training in this tutorial is available in the examples repository you have cloned."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},d))),"If you have followed the steps correctly you should receive an output that looks like this,",(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)("img",{src:"/img/python-sdk/tt_du.png",width:"700",height:"700"})),(0,n.kt)("h2",{id:"choose-the-model-type"},"Choose The Model Type"),(0,n.kt)("p",null,"First let's list the all available trainable model types in the platform,"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},u))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)(r.Z,{className:"language-text",mdxType:"CodeBlock"},y)),(0,n.kt)("p",null,"Click ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"here")," to know more about Clarifai Model Types."),(0,n.kt)("h2",{id:"model-creation"},"Model Creation"),(0,n.kt)("p",null,"From the above list of model types we are going to choose text-to-text as it is similar to our use case. Now let's create a model with the above model type."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},p))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)("img",{src:"/img/python-sdk/tt_mc.png",width:"700",height:"700"})),(0,n.kt)("h2",{id:"template-selection"},"Template Selection"),(0,n.kt)("p",null,"Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"'HuggingFace_AdvancedConfig' "),"template for training our model."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},f))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)(r.Z,{className:"language-text",mdxType:"CodeBlock"},T)),(0,n.kt)("h2",{id:"setup-model-parameters"},"Setup Model Parameters"),(0,n.kt)("p",null,"You can update the model params to your need before initiating training."),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},h))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)(r.Z,{className:"language-text",mdxType:"CodeBlock"},g)),(0,n.kt)("h2",{id:"initiate-model-training"},"Initiate Model Training"),(0,n.kt)("p",null,"We can initiate the model training by calling the model.train() method. The Clarifai Python SDK also offers features like showing training status and saving training logs in a local file."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use.")),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},c))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)("img",{src:"/img/python-sdk/tc_imt.png",width:"700",height:"700"})),(0,n.kt)("h2",{id:"model-prediction"},"Model Prediction"),(0,n.kt)("p",null,"Since the model is trained and ready let\u2019s run some predictions to view the model performance,"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},m))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Output"),(0,n.kt)(r.Z,{className:"language-text",mdxType:"CodeBlock"},k)))}N.isMDXComponent=!0}}]);