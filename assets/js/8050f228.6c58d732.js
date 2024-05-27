"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7278],{19365:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(96540),l=t(20053);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.A)(i.tabItem,o),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>T});var n=t(58168),l=t(96540),i=t(20053),o=t(23104),s=t(56347),r=t(57485),d=t(31682),u=t(89466);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function c(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??m(t);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.W6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,r.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(n.location.search);a.set(i,e),n.replace({...n.location,search:a.toString()})}),[i,n])]}function y(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,i=c(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[r,d]=g({queryString:t,groupId:n}),[m,y]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,u.Dv)(t);return[n,(0,l.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),h=(()=>{const e=r??m;return p({value:e,tabValues:i})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),y(e)}),[d,y,i]),tabValues:i}}var h=t(92303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:s,selectValue:r,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),c=e=>{const a=e.currentTarget,t=u.indexOf(a),n=d[t].value;n!==s&&(m(a),r(n))},p=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},a)},d.map((e=>{let{value:a,label:t,attributes:o}=e;return l.createElement("li",(0,n.A)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>u.push(e),onKeyDown:p,onClick:c},o,{className:(0,i.A)("tabs__item",_.tabItem,o?.className,{"tabs__item--active":s===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},i.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function b(e){const a=y(e);return l.createElement("div",{className:(0,i.A)("tabs-container",_.tabList)},l.createElement(f,(0,n.A)({},e,a)),l.createElement(v,(0,n.A)({},e,a)))}function T(e){const a=(0,h.A)();return l.createElement(b,(0,n.A)({key:String(a)},e))}},63299:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>P,contentTitle:()=>E,default:()=>S,frontMatter:()=>N,metadata:()=>D,toc:()=>L});var n=t(58168),l=(t(96540),t(15680)),i=t(11470),o=t(19365),s=t(77964);const r='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\napp = client.create_app(app_id="demo_train", base_workflow="Universal")',d="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nmodule_path = os.path.join(os.getcwd().split('/models/model_train')[0], 'datasets/upload/image_classification/food-101')\n\n# Load the dataloader module using the provided function from your module\nfood101_dataloader = load_module_dataloader(module_path)\n\n# Create a Clarifai dataset with the specified dataset_id (\"image_dataset\")\ndataset = app.create_dataset(dataset_id=\"image_dataset\")\n\n# Upload the dataset using the provided dataloader and get the upload status\ndataset.upload_dataset(dataloader=food101_dataloader, get_upload_status=True)\n",u="print(app.list_trainable_model_types())",m='MODEL_ID = "model_classifier"\nMODEL_TYPE_ID = "visual-classifier"\n# Create a model by passing the model name and model type as parameter\nmodel = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)',c="print(model.list_training_templates())",p="import yaml\nYAML_FILE = 'mmclassification_efficientnet.yaml'\nmodel_params = model.get_params(template='MMClassification_EfficientNet', save_to=YAML_FILE)\n# Preview YAML content\nfile = open(YAML_FILE)\ndata = yaml.safe_load(file)\nprint(data)\n",g="file = open('models/model_train/saved_mmclassification_efficientnet.yaml')\ndata = yaml.safe_load(file)\nprint(data)\n",y="#Starting the training\nmodel_version_id = model.train(yaml_file='models/model_train/saved_mmclassification_efficientnet.yaml')\n#Checking the status of training\n#To store training logs in a file, fix training_logs param as True\nstatus = model.training_status(version_id=model_version_id,training_logs=False)\n",h="import cv2\nimport matplotlib.pyplot as plt\n\nIMAGE_PATH = os.path.join(os.getcwd().split('/models')[0],'datasets/upload/image_classification/food-101/images/hamburger/139558.jpg')\nmodel_prediction = model.predict_by_filepath(IMAGE_PATH, input_type=\"image\")\n\n#Display the model predictions\nimg = plt.imread(IMAGE_PATH)\nplt.axis('off')\nplt.imshow(img)\nfor concept in model_prediction.outputs[0].data.concepts:\n    print(concept.id,':',round(concept.value,2))",_="# Evaluate the model using the specified dataset ID and evaluation ID.\nmodel.evaluate(dataset_id='image_dataset', eval_id='one')\n\n\n# Retrieve the evaluation results using the specified evaluation ID and store it in the variable 'result'.\nresult = model.get_eval_by_id(eval_id=\"one\")\n\n# Print a summary of the evaluation results stored in the variable 'result'.\nprint(result.summary)\n",f="# Load the dataloader module using the provided function from your module\nPATH=os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/images_test')\nfood101_dataloader = load_module_dataloader(PATH)\n\n# Create a Clarifai dataset with the specified dataset_id (\"image_dataset\")\ntest_dataset = app.create_dataset(dataset_id=\"image_dataset2\")\n\n# Upload the dataset using the provided dataloader and get the upload status\ntest_dataset.upload_dataset(dataloader=food101_dataloader, get_upload_status=True)\n\n# Evaluate the model using the specified dataset ID and evaluation ID.\nmodel.evaluate(dataset_id='image_dataset2',eval_id='two')\n\n\n# Retrieve the evaluation results using the specified evaluation ID and store it in the variable 'result'.\nresult=model.get_eval_by_id(\"two\")\n\nprint(result.summary)",v="from clarifai.utils.evaluation import EvalResultCompare\n\n# Initializing an object of the EvalResultCompare class\n# with specified models and datasets\neval_result = EvalResultCompare(models=[model], datasets=[dataset, test_dataset])\n\nprint(eval_result.detailed_summary())",b="['visual-classifier',\n 'visual-detector',\n 'visual-segmenter',\n 'visual-anomaly-heatmap',\n 'visual-embedder',\n 'clusterer',\n 'text-classifier',\n 'embedding-classifier',\n 'text-to-text']",T="['classification_inception_general_v1_3_transfer_embednorm',\n 'classification_basemodel_v1',\n 'classification_cifar10_v1',\n 'Clarifai_InceptionTransferEmbedNorm',\n 'Clarifai_ResNext',\n 'Clarifai_InceptionV2',\n 'Clarifai_InceptionBatchNorm',\n 'MMClassification',\n 'MMClassification_EfficientNet',\n 'MMClassification_ResNet_50_RSB_A1',\n 'MMClassification_ResNet_50']",A="{'dataset_id': '',\n 'dataset_version_id': '',\n 'concepts': [],\n 'train_params': {'invalid_data_tolerance_percent': 5.0,\n  'template': 'MMClassification_EfficientNet',\n  'seed': -1.0,\n  'num_gpus': 1.0,\n  'image_size': 336.0,\n  'batch_size': 4.0,\n  'num_epochs': 30.0,\n  'per_item_lrate': 0.000390625,\n  'weight_decay': 0.0001,\n  'momentum': 0.9,\n  'pretrained_weights': 'ImageNet-1k',\n  'flip_probability': 0.5,\n  'flip_direction': 'horizontal',\n  'concepts_mutually_exclusive': False},\n 'inference_params': {'select_concepts': []}}\n",C="{'dataset_id': 'image_dataset',\n 'dataset_version_id': '',\n 'concepts': ['id-ramen', 'id-prime_rib', 'id-hamburger', 'id-beignets'],\n 'train_params': {'invalid_data_tolerance_percent': 5.0,\n  'template': 'MMClassification_EfficientNet',\n  'seed': -1.0,\n  'num_gpus': 1.0,\n  'image_size': 336.0,\n  'batch_size': 4.0,\n  'num_epochs': 10.0,\n  'per_item_lrate': 0.000390625,\n  'weight_decay': 0.0001,\n  'momentum': 0.9,\n  'pretrained_weights': 'ImageNet-1k',\n  'flip_probability': 0.5,\n  'flip_direction': 'horizontal',\n  'concepts_mutually_exclusive': False},\n 'inference_params': {'select_concepts': []}}",x='code: MODEL_TRAINED\ndescription: "Model is trained and ready"',w="id-hamburger : 0.64\n\nid-ramen : 0.45\n\nid-prime_rib : 0.44\n\nid-beignets : 0.42",k="macro_avg_roc_auc: 0.9200000166893005\nmacro_std_roc_auc: 0.03399345278739929\nmacro_avg_f1_score: 0.6682435274124146\nmacro_std_f1_score: 0.08137183636426926\nmacro_avg_precision: 0.53125\nmacro_avg_recall: 0.949999988079071",I="macro_avg_roc_auc: 1.0\nmacro_avg_f1_score: 0.7916666865348816\nmacro_std_f1_score: 0.21650634706020355\nmacro_avg_precision: 0.7083333134651184\nmacro_avg_recall: 1.0",M="INFO:clarifai.utils.evaluation.helpers:Model visual_classifier_eval2/model_classifier/48ed4: retrieving {'binary_metrics': True} metrics of dataset: image_dataset2\n(        Concept  Accuracy (ROC AUC)  Total Labeled  Total Predicted  \\\n 0      id-ramen               0.933              5               12   \n 0  id-prime_rib               0.960              5                5   \n 0  id-hamburger               0.920              5                8   \n 0   id-beignets               0.867              5               12   \n 0      id-ramen               1.000              1                3   \n 0  id-prime_rib               1.000              1                1   \n 0  id-hamburger               1.000              1                1   \n 0   id-beignets               1.000              1                1   \n \n    True Positives  False Negatives  False Positives  Recall  Precision  \\\n 0               5                0                7     1.0     0.4167   \n 0               4                1                1     0.8     0.6667   \n 0               5                0                3     1.0     0.6250   \n 0               5                0                7     1.0     0.4167   \n 0               1                0                2     1.0     0.3333   \n 0               1                0                0     1.0     1.0000   \n 0               1                0                0     1.0     1.0000   \n 0               1                0                0     1.0     0.5000   \n \n          F1         Dataset  \n 0  0.588269  image_dataset3  \n 0  0.727293  image_dataset3  \n 0  0.769231  image_dataset3  \n 0  0.588269  image_dataset3  \n 0  0.499962  image_dataset2  \n 0  1.000000  image_dataset2  \n 0  1.000000  image_dataset2  \n 0  0.666667  image_dataset2  ,\n             Total Concept  Accuracy (ROC AUC)  Total Labeled  Total Predicted  \\\n 0  Dataset:image_dataset3                0.92             20               37   \n 0  Dataset:image_dataset2                1.00              4                6   \n \n    True Positives  False Negatives  False Positives  Recall  Precision  \\\n 0              19                1               18    0.95   0.531275   \n 0               4                0                2    1.00   0.708325   \n \n          F1  \n 0  0.681455  \n 0  0.829263  )",N={},E="Visual Classifier",D={unversionedId:"sdk/Model-Training-Tutorial/visual_classifier",id:"sdk/Model-Training-Tutorial/visual_classifier",title:"Visual Classifier",description:"Learn how to train a visual classifier using Clarifai Python SDK",source:"@site/docs/sdk/Model-Training-Tutorial/visual_classifier.md",sourceDirName:"sdk/Model-Training-Tutorial",slug:"/sdk/Model-Training-Tutorial/visual_classifier",permalink:"/sdk/Model-Training-Tutorial/visual_classifier",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/Model-Training-Tutorial/visual_classifier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text To Text",permalink:"/sdk/Model-Training-Tutorial/text_to_text"},next:{title:"Visual Detector",permalink:"/sdk/Model-Training-Tutorial/visual_detector"}},P={},L=[{value:"App Creation",id:"app-creation",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Choosing The Model Type",id:"choosing-the-model-type",level:2},{value:"Model Creation",id:"model-creation",level:2},{value:"Template Selection",id:"template-selection",level:2},{value:"Setup Model Parameters",id:"setup-model-parameters",level:2},{value:"Initiate Model Training",id:"initiate-model-training",level:2},{value:"Model Prediction",id:"model-prediction",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2}],B={toc:L},V="wrapper";function S(e){let{components:a,...t}=e;return(0,l.yg)(V,(0,n.A)({},B,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"visual-classifier"},"Visual Classifier"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Learn how to train a visual classifier using Clarifai Python SDK")),(0,l.yg)("hr",null),(0,l.yg)("p",null,"The Visual Classifier is a powerful component of the Clarifai platform designed for efficient and accurate image recognition. Leveraging advanced machine learning algorithms, the Visual Classifier allows users to train custom models tailored to specific visual recognition tasks. You can learn more about Visual Classifier ",(0,l.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/visual-classifier"},"here"),"."),(0,l.yg)("h2",{id:"app-creation"},"App Creation"),(0,l.yg)("p",null,"The first part of model training includes the creation of an app under which the training process takes place."),(0,l.yg)("p",null,"Here we are creating an app with the app id as \u201cdemo_train\u201d and the base workflow is set as \u201cUniversal\u201d. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},r))),(0,l.yg)("h2",{id:"dataset-upload"},"Dataset Upload"),(0,l.yg)("p",null,"The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The  data used for training in this tutorial is available in the examples repository you have cloned."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},d))),(0,l.yg)("p",null,"If you have followed the steps correctly you should receive an output that looks like this,"),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)("img",{src:"/img/python-sdk/vc_du.png",width:"700",height:"700"})),(0,l.yg)("h2",{id:"choosing-the-model-type"},"Choosing The Model Type"),(0,l.yg)("p",null,"Now let's list the all available trainable model types in the platform that you can use for your tasks,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},u))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},b)),(0,l.yg)("p",null,"Click ",(0,l.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"here")," to know more about Clarifai Model Types."),(0,l.yg)("h2",{id:"model-creation"},"Model Creation"),(0,l.yg)("p",null,"From the above list of model types we are going to choose visual-classifier as it is similar to our use case. Now let's create a model with the above model type."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},m))),(0,l.yg)("h2",{id:"template-selection"},"Template Selection"),(0,l.yg)("p",null,"Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the ",(0,l.yg)("inlineCode",{parentName:"p"},"'MMClassification_EfficientNet' "),"template for training our model."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},c))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},T)),(0,l.yg)("h2",{id:"setup-model-parameters"},"Setup Model Parameters"),(0,l.yg)("p",null,"You can save the model parameters into a YAML file so that it can passed on to the model while initiating training."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},p))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},A)),(0,l.yg)("p",null,"You can edit the YAML file according to our needs and then load the files again for model training. Below is an example of the edits made to the YAML file,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},g))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},C)),(0,l.yg)("h2",{id:"initiate-model-training"},"Initiate Model Training"),(0,l.yg)("p",null,"We can initiate the model training by passing the YAML configuration file as parameter to the model.train(). The Clarifai Python SDK also offers features like showing training status and saving training logs in a local file."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},'If the status code is "MODEL-TRAINED", then the user can know the model is Trained and ready to use.')),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},y))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},x)),(0,l.yg)("h2",{id:"model-prediction"},"Model Prediction"),(0,l.yg)("p",null,"Since the model is trained and ready let\u2019s run some predictions to view the model performance,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},h))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},w),(0,l.yg)("img",{src:"/img/python-sdk/vc_mp.png",width:"500",height:"500"})),(0,l.yg)("h2",{id:"model-evaluation"},"Model Evaluation"),(0,l.yg)("p",null,"Now let's evaluate the model using train and test datasets. First let's see the evaluation metrics for the training dataset,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},_))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},k)),(0,l.yg)("p",null,"Before evaluating with a test dataset, we have to first upload the dataset using the data loader and then perform model evaluation,"),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},f))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},I)),(0,l.yg)("p",null,"Finally let's compare the results from  multiple datasets using ",(0,l.yg)("inlineCode",{parentName:"p"},"EvalResultCompare")," feature from Clarifai Python SDK to get a better understanding of the model's performance."),(0,l.yg)(i.A,{mdxType:"Tabs"},(0,l.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},v))),(0,l.yg)("details",null,(0,l.yg)("summary",null,"Output"),(0,l.yg)(s.A,{className:"language-text",mdxType:"CodeBlock"},M)))}S.isMDXComponent=!0}}]);