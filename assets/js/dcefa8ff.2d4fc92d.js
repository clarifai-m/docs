"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={description:"Learn about our text fine-tuning templates",sidebar_position:5},o="Text Fine-Tuning Templates",l={unversionedId:"portal-guide/model/deep-training/text-templates",id:"portal-guide/model/deep-training/text-templates",title:"Text Fine-Tuning Templates",description:"Learn about our text fine-tuning templates",source:"@site/docs/portal-guide/model/deep-training/text-templates.md",sourceDirName:"portal-guide/model/deep-training",slug:"/portal-guide/model/deep-training/text-templates",permalink:"/portal-guide/model/deep-training/text-templates",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/deep-training/text-templates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Learn about our text fine-tuning templates",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Visual Segmenter Templates",permalink:"/portal-guide/model/deep-training/visual-segmenter-templates"},next:{title:"Agent System Operators",permalink:"/portal-guide/model/agent-system-operators/"}},s={},p=[{value:"GPT-Neo LoRA",id:"gpt-neo-lora",level:2},{value:"Model config",id:"model-config",level:3},{value:"<strong>Peft config</strong>",id:"peft-config",level:3},{value:"Tokenizer config",id:"tokenizer-config",level:3},{value:"Trainer config",id:"trainer-config",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"text-fine-tuning-templates"},"Text Fine-Tuning Templates"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about our text fine-tuning templates")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Clarifai's text fine-tuning templates empower you to leverage pre-trained language models and refine them through additional training on specific tasks or datasets, customizing them for precise use cases. "),(0,i.kt)("p",null,"Each template comes with its own hyperparameters, which you can tune to influence \u201chow\u201d your model learns. With hyperparameters, you can customize and adapt a template to suit your specific tasks and achieve better performance."),(0,i.kt)("h2",{id:"gpt-neo-lora"},"GPT-Neo LoRA"),(0,i.kt)("p",null,"The GPT-Neo LoRA template is a pre-defined configuration of parameters that can be used to fine-tune the GPT-Neo language model using a technique called Low-Rank Adaptation (LoRA)."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2106.09685"},"LoRA")," is a specialized technique that allows for efficient and effective fine-tuning of large language models (LLMs), even when working with devices or environments that have limited computational resources."),(0,i.kt)("p",null,"The LoRA optimization approach streamlines the fine-tuning process for language models. It does so by identifying and leveraging low-rank structures in the model's parameter space. These low-rank structures represent patterns and relationships within the data that can be exploited during fine-tuning."),(0,i.kt)("p",null,"With LoRA, you can fine-tune the GPT-Neo large language model for text classification tasks, all while maximizing resource efficiency. LoRA can reduce the number of trainable parameters in the model, which makes it possible to fine-tune it on downstream tasks more efficiently."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.eleuther.ai/artifacts/gpt-neo"},"The GPT-Neo")," large language model, developed by EleutherAI, was trained as an autoregressive language model. This means that its core functionality is taking a string of text and predicting the next token. It is an attempt to produce GPT-3-like language models and comes in 125M, 1.3B, and 2.7B parameter variants."),(0,i.kt)("p",null,"The GPT-Neo LoRA template supports the following hyperparameters:"),(0,i.kt)("h3",{id:"model-config"},"Model config"),(0,i.kt)("p",null,"It is a dictionary of key-value pairs that define which pre-trained model can be used as a base. "),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pretrained_model_name": "EleutherAI/gpt-neo-2.7B"\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pretrained_model_name")," key specifies the name of the pre-trained model that you want to instantiate. In this example, the name of the pre-trained model is ",(0,i.kt)("inlineCode",{parentName:"p"},"EleutherAI/gpt-neo-2.7B"),"\u2014the 2.7B parameter variant of the GPT-Neo model."),(0,i.kt)("p",null,"The keys and values of the model config are passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"transformers.AutoModelForSequenceClassification.from_pretrained()")," function to instantiate the pre-trained model for sequence classification. "),(0,i.kt)("p",null,"The function will automatically select the correct model class based on the name of the pre-trained model. In this example, the function will select the ",(0,i.kt)("inlineCode",{parentName:"p"},"GPTNeoForSequenceClassification")," model class."),(0,i.kt)("p",null,"Once the pre-trained model has been instantiated, you can use it to classify text sequences."),(0,i.kt)("h3",{id:"peft-config"},(0,i.kt)("strong",{parentName:"h3"},"Peft config")),(0,i.kt)("p",null,"It is a dictionary of key-value pairs that define how to fine-tune a pre-trained model on a downstream task using a parameter-efficient fine-tuning (PEFT) method. "),(0,i.kt)("p",null,"PEFT methods allow for efficient and effective fine-tuning of LLMs, even on devices with limited resources. LoRA is a specific PEFT method that uses low-rank matrices to represent the parameters of a pre-trained model. "),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "peft_type": "LORA"\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"peft_type")," key specifies the type of PEFT method to use. The keys and values of Peft config are passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"peft.get_peft_model()")," function to instantiate a PEFT model. "),(0,i.kt)("p",null,"The function will automatically select the correct PEFT model class based on the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"peft_type")," key. In this example, the function will select the ",(0,i.kt)("inlineCode",{parentName:"p"},"LoraModel")," class."),(0,i.kt)("p",null,"Once the model has been instantiated, you can use it to fine-tune the base model on a downstream task using the LoRA method."),(0,i.kt)("h3",{id:"tokenizer-config"},"Tokenizer config"),(0,i.kt)("p",null,"It is a dictionary of key-value pairs that define the configuration of a pre-trained tokenizer. The pre-trained tokenizer is responsible for breaking the input text into tokens, which are then used by the pre-trained model to make predictions. "),(0,i.kt)("p",null,"The keys and values of the tokenizer config are passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"transformers.AutoTokenizer.from_pretrained()")," function to instantiate a pre-trained tokenizer."),(0,i.kt)("p",null,"If the tokenizer config is not specified, the function will use the model name from the model config to instantiate the appropriate pre-trained tokenizer. For example, if the model config specifies the model name as ",(0,i.kt)("inlineCode",{parentName:"p"},"EleutherAI/gpt-neo-2.7B"),", the function will instantiate the ",(0,i.kt)("inlineCode",{parentName:"p"},"GPTNeoTokenizer")," class."),(0,i.kt)("h3",{id:"trainer-config"},"Trainer config"),(0,i.kt)("p",null,"It is a dictionary of key-value pairs that define the configuration of the Transformers ",(0,i.kt)("inlineCode",{parentName:"p"},"Trainer")," class. It defines the training process for a pre-trained model. "),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "num_train_epochs": 1,\n    "per_device_train_batch_size": 2\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"num_train_epochs")," key specifies the number of epochs to train the model for. The ",(0,i.kt)("inlineCode",{parentName:"p"},"per_device_train_batch_size")," key specifies the batch size for each training device. The batch size is the number of training examples that are processed by the model in a single training step. "),(0,i.kt)("p",null,"The keys and values of the trainer config are passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"transformers.TrainingArguments()")," function to instantiate a ",(0,i.kt)("inlineCode",{parentName:"p"},"TrainingArguments")," object. The object defines the hyperparameters and other settings that are used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Trainer")," class to train a pre-trained model."))}u.isMDXComponent=!0}}]);