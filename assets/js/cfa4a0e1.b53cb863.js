"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9094],{19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),l=a(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(i.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(58168),l=a(96540),i=a(20053),o=a(23104),s=a(56347),r=a(57485),d=a(31682),u=a(89466);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function p(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,r.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[r,d]=g({queryString:a,groupId:n}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Dv)(a);return[n,(0,l.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),h=(()=>{const e=r??c;return m({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var h=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:t,block:a,selectedValue:s,selectValue:r,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=d[a].value;n!==s&&(c(t),r(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},o,{className:(0,i.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=y(e);return l.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},l.createElement(_,(0,n.A)({},e,t)),l.createElement(v,(0,n.A)({},e,t)))}function T(e){const t=(0,h.A)();return l.createElement(b,(0,n.A)({key:String(t)},e))}},81692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>A,default:()=>D,frontMatter:()=>w,metadata:()=>k,toc:()=>I});var n=a(58168),l=(a(96540),a(15680)),i=a(11470),o=a(19365),s=a(77964);const r='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\napp = client.create_app(app_id="demo_train", base_workflow="Universal")',d="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nCSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/imdb.csv')\n\n\n# Create a Clarifai dataset with the specified dataset_id \ndataset = app.create_dataset(dataset_id=\"text_dataset\")\n# Upload the dataset using the provided dataloader and get the upload status\ndataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)",u="print(app.list_trainable_model_types())",c='MODEL_ID = "model_text_embedder"\nMODEL_TYPE_ID = "embedding-classifier"\n\n# Create a model by passing the model name and model type as parameter\nmodel = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)\n',p='# get the model params for default template\nmodel_params = model.get_params()\nconcepts = [concept.id for concept in app.list_concepts()]\n# update the concept field in model_params\nmodel.update_params(dataset_id = \'text_dataset\',concepts = ["id-pos","id-neg"])\n',m='import time\n#Starting the training\nmodel_version_id = model.train()\n\n#Checking the status of training\nwhile True:\n    status = model.training_status(version_id=model_version_id,training_logs=False)\n    if status.code == 21106: #MODEL_TRAINING_FAILED\n        print(status)\n        break\n    elif status.code == 21100: #MODEL_TRAINED\n        print(status)\n        break\n    else:\n        print("Current Status:",status)\n        print("Waiting---")\n        time.sleep(120)',g="# Get the predictions\nTEXT = b\"This is a great place to work\"\nmodel_prediction = model.predict_by_bytes(TEXT, input_type=\"text\")\n\n# Get the output\nprint('Input: ',TEXT)\nfor concept in model_prediction.outputs[0].data.concepts:\n    print(concept.id,':',round(concept.value,2))",y="# Evaluate the model using the specified dataset ID 'text_dataset' and evaluation ID 'one'.\nmodel.evaluate(dataset_id='text_dataset',eval_id='one',eval_info={\"use_kfold\":False})\n\n# Retrieve the evaluation result for the evaluation ID 'one'.\nresult = model.get_eval_by_id(eval_id=\"one\")\n\n# Print the summary of the evaluation result.\nprint(result.summary)",h="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nCSV_PATH = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/test_imdb.csv')\n\n\n# Create a Clarifai dataset with the specified dataset_id\ntest_dataset = app.create_dataset(dataset_id=\"test_text_dataset\")\n# Upload the dataset using the provided dataloader and get the upload status\ntest_dataset.upload_from_csv(csv_path=CSV_PATH,input_type='text',csv_type='raw', labels=True)\n\n# Evaluate the model using the specified test text dataset identified as 'test_text_dataset'\n# and the evaluation identifier 'two'.\nmodel.evaluate(dataset_id='test_text_dataset', eval_id='two')\n\n# Retrieve the evaluation result with the identifier 'two'.\nresult = model.get_eval_by_id(\"two\")\n\n# Print the summary of the evaluation result.\nprint(result.summary)",f="from clarifai.utils.evaluation import EvalResultCompare\n\n# Creating an instance of EvalResultCompare class with specified models and datasets\neval_result = EvalResultCompare(models=[model], datasets=[dataset, test_dataset])\n\n# Printing a detailed summary of the evaluation result\nprint(eval_result.detailed_summary())",_="['visual-classifier',\n 'visual-detector',\n 'visual-segmenter',\n 'visual-embedder',\n 'clusterer',\n 'text-classifier',\n 'embedding-classifier',\n 'text-to-text']",v="{'dataset_id': 'text_dataset',\n 'dataset_version_id': '',\n 'concepts': ['id-pos', 'id-neg'],\n 'train_params': {'base_embed_model': None, 'enrich_dataset': 'Automatic'},\n 'inference_params': {'min_value': 0.0}}\n",b="Input:  b'This is a great place to work'\n\nid-neg : 0.72\n\nid-pos : 0.28",T="macro_avg_roc_auc: 1.0\nmacro_avg_f1_score: 1.0\nmacro_avg_precision: 1.0\nmacro_avg_recall: 1.0",x="macro_avg_roc_auc: 1.0\nmacro_avg_f1_score: 1.0\nmacro_avg_precision: 1.0\nmacro_avg_recall: 1.0",C="(  Concept  Accuracy (ROC AUC)  Total Labeled  Total Predicted  True Positives  \\\n0  id-pos                 1.0             80               80              80   \n0  id-neg                 1.0            120              120             120   \n0  id-pos                 1.0             31               31              31   \n0  id-neg                 1.0             40               40              40   \n\n   False Negatives  False Positives  Recall  Precision   F1            Dataset  \n0                0                0     1.0        1.0  1.0      text_dataset2  \n0                0                0     1.0        1.0  1.0      text_dataset2  \n0                0                0     1.0        1.0  1.0  test_text_dataset  \n0                0                0     1.0        1.0  1.0  test_text_dataset  ,                Total Concept  Accuracy (ROC AUC)  Total Labeled  \\\n0      Dataset:text_dataset2                 1.0            200   \n0  Dataset:test_text_dataset                 1.0             71   \n\n   Total Predicted  True Positives  False Negatives  False Positives  Recall  \\\n0              200             200                0                0     1.0   \n0               71              71                0                0     1.0   \n\n   Precision   F1  \n0        1.0  1.0  \n0        1.0  1.0  )",w={},A="Embedding Classifier",k={unversionedId:"sdk/Model-Training-Tutorial/embedding_classifier",id:"sdk/Model-Training-Tutorial/embedding_classifier",title:"Embedding Classifier",description:"Learn how to train an embedding classifier using Clarifai Python SDK",source:"@site/docs/sdk/Model-Training-Tutorial/embedding_classifier.md",sourceDirName:"sdk/Model-Training-Tutorial",slug:"/sdk/Model-Training-Tutorial/embedding_classifier",permalink:"/sdk/Model-Training-Tutorial/embedding_classifier",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/Model-Training-Tutorial/embedding_classifier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clusterer",permalink:"/sdk/Model-Training-Tutorial/clusterer"},next:{title:"Text Classifier",permalink:"/sdk/Model-Training-Tutorial/text_classifier"}},E={},I=[{value:"App Creation",id:"app-creation",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Choose The Model Type",id:"choose-the-model-type",level:2},{value:"Model Creation",id:"model-creation",level:2},{value:"Template Selection",id:"template-selection",level:2},{value:"Setup Model Parameters",id:"setup-model-parameters",level:2},{value:"Initiate Model Training",id:"initiate-model-training",level:2},{value:"Model Prediction",id:"model-prediction",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2}],N={toc:I},P="wrapper";function D(e){let{components:t,...a}=e;return(0,l.yg)(P,(0,n.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"embedding-classifier"},"Embedding Classifier"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Learn how to train an embedding classifier using Clarifai Python SDK")),(0,l.yg)("hr",null),(0,l.yg)("p",null,"An Embedding Classifier is a machine learning model that combines the concept of word embeddings with classification tasks. Word embeddings are dense vector representations of words in a high-dimensional space, typically generated by algorithms like Word2Vec, GloVe, or FastText. You can learn more about Embedding Classifier ",(0,l.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning"},"here"),"."),(0,l.yg)("h2",{id:"app-creation"},"App Creation"),(0,l.yg)("p",null,"The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as \u201cdemo_train\u201d and the base workflow is set as \u201cUniversal\u201d. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},r))),(0,l.yg)("h2",{id:"dataset-upload"},"Dataset Upload"),(0,l.yg)("p",null,"The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The data used for training in this tutorial is available in the examples repository you have cloned."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},d))),(0,l.yg)("p",null,"If you have followed the steps correctly you should receive an output that looks like this,"),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)("img",{src:"/img/python-sdk/ec_du.png",width:"700",height:"700"})),(0,l.yg)("h2",{id:"choose-the-model-type"},"Choose The Model Type"),(0,l.yg)("p",null,"First let's list the all available trainable model types in the platform,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},u))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},_)),(0,l.yg)("p",null,"Click ",(0,l.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"here")," to know more about Clarifai Model Types."),(0,l.yg)("h2",{id:"model-creation"},"Model Creation"),(0,l.yg)("p",null,"From the above list of model types we are going to choose embedding-classifier as it is similar to our use case. Now let's create a model with the above model type."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},c))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)("img",{src:"/img/python-sdk/ec_mc.png",width:"700",height:"700"})),(0,l.yg)("h2",{id:"template-selection"},"Template Selection"),(0,l.yg)("p",null,"Inside the Clarifai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. But when it comes to Embedding Classifier there is only one default template available."),(0,l.yg)("h2",{id:"setup-model-parameters"},"Setup Model Parameters"),(0,l.yg)("p",null,"You can update the model parameters to your needs before initiating training."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},p))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},v)),(0,l.yg)("h2",{id:"initiate-model-training"},"Initiate Model Training"),(0,l.yg)("p",null,"We can initiate the model training by calling the model.train() method. The Clarifai Python SDK also offers features like showing training status and saving training logs in a local file."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use.")),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},m))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)("img",{src:"/img/python-sdk/ec_imt.png",width:"700",height:"700"})),(0,l.yg)("h2",{id:"model-prediction"},"Model Prediction"),(0,l.yg)("p",null,"Since the model is trained and ready let\u2019s run some predictions to view the model performance,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},g))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},b)),(0,l.yg)("h2",{id:"model-evaluation"},"Model Evaluation"),(0,l.yg)("p",null,"Now let's evaluate the model using train and test datasets. First let's see the evaluation metrics for the training dataset,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},y))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},T)),(0,l.yg)("p",null,"Before evaluating with a test dataset, we have to first upload the dataset using the data loader and then perform model evaluation,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},h))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},x)),(0,l.yg)("p",null,"Finally let's compare the results from  multiple datasets using ",(0,l.yg)("inlineCode",{parentName:"p"},"EvalResultCompare")," feature from Clarifai Python SDK to get a better understanding of the model's performance."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},f))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},C)))}D.isMDXComponent=!0}}]);