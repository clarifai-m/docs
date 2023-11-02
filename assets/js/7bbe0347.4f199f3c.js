"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2953],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(i),u=n,d=c["".concat(l,".").concat(u)]||c[u]||h[u]||r;return i?a.createElement(d,o(o({ref:t},p),{},{components:i})):a.createElement(d,o({ref:t},p))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var m=2;m<r;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},15887:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=i(87462),n=(i(67294),i(3905));const r={description:"Learn about our visual classification templates",sidebar_position:1},o="Visual Classification Templates",s={unversionedId:"portal-guide/model/deep-training/visual-classification-templates",id:"portal-guide/model/deep-training/visual-classification-templates",title:"Visual Classification Templates",description:"Learn about our visual classification templates",source:"@site/docs/portal-guide/model/deep-training/visual-classification-templates.md",sourceDirName:"portal-guide/model/deep-training",slug:"/portal-guide/model/deep-training/visual-classification-templates",permalink:"/portal-guide/model/deep-training/visual-classification-templates",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/deep-training/visual-classification-templates.md",tags:[],version:"current",lastUpdatedAt:1698924850,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:1,frontMatter:{description:"Learn about our visual classification templates",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deep Fine-Tuning Templates",permalink:"/portal-guide/model/deep-training/"},next:{title:"Visual Detection Templates",permalink:"/portal-guide/model/deep-training/visual-detection-templates"}},l={},m=[{value:"MMClassification_ResNet_50_RSB_A1",id:"mmclassification_resnet_50_rsb_a1",level:2},{value:"Clarifai_InceptionBatchNorm",id:"clarifai_inceptionbatchnorm",level:2},{value:"Clarifai_InceptionV2",id:"clarifai_inceptionv2",level:2},{value:"Clarifai_ResNext",id:"clarifai_resnext",level:2},{value:"Clarifai_InceptionTransferEmbedNorm",id:"clarifai_inceptiontransferembednorm",level:2}],p={toc:m},c="wrapper";function h(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visual-classification-templates"},"Visual Classification Templates"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about our visual classification templates")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Clarifai visual classification templates let you train a model to classify objects in your image inputs. Each template comes with its own hyperparameters, which you can tune to influence \u201chow\u201d your model learns. With hyperparameters, you can customize and fine-tune a template to suit your specific tasks and achieve better performance."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can customize most hyperparameters by specifying the following values:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"minimum"),"\u2014the minimum value a given parameter can take."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"maximum"),"\u2014the maximum value a given parameter can take."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"step"),"\u2014determines how much you can increment or decrement the minimum or maximum value in a single click/change."))),(0,n.kt)("h2",{id:"mmclassification_resnet_50_rsb_a1"},"MMClassification_ResNet_50_RSB_A1"),(0,n.kt)("p",null,"This template is a customized variant of the ResNet-50 architecture for multimodal classification tasks. Let\u2019s break down the components in the naming of the deep learning model architecture:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"MMClassification:")," This refers to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-mmlab/mmpretrain/tree/main"},"MMClassification toolkit")," that is designed for image classification tasks. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ResNet_50:"),' This refers to a specific variant of the Residual Network (ResNet) architecture. ResNet is a popular deep neural network architecture known for its skip connections that help alleviate the vanishing gradient problem. The number "50" typically denotes the depth or number of layers in the ResNet model.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RSB_A1:")," This refers to a particular modification, adaptation, or variant of the ResNet architecture."))),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"MMClassification_ResNet_50_RSB_A1")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the image size for training and inference. ResNet uses square images. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"256"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"600"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The ",(0,n.kt)("strong",{parentName:"li"},"lrate")," (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by ",(0,n.kt)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Weight decay"),"\u2014This is the weight decay value. It is used to prevent overfitting by penalizing large weights in the model. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_min_lrate"),"\u2014This is the minimum learning (per item) at the end of training using the cosine schedule. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Warmup iters"),"\u2014This is the number of steps in the warmup phase, during which the learning rate gradually increases before reaching its specified value.  The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Warmup ratio"),"\u2014The warmup phase learning rate multiplier, which scales the learning rate during the warmup phase."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pretrained weights"),"\u2014This specifies whether to init the model with pre-trained weights. You can choose either ",(0,n.kt)("inlineCode",{parentName:"li"},"None")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"ImageNet-1k")," (default) for this parameter. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flip probability"),"\u2014This is the probability that an image will be randomly flipped during training. Flipping images horizontally or vertically can augment the dataset and improve model generalization. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Flip direction"),"\u2014This is the direction to randomly flip during training. You can choose either ",(0,n.kt)("inlineCode",{parentName:"li"},"horizontal")," (default) or ",(0,n.kt)("inlineCode",{parentName:"li"},"vertical")," for this parameter. ")),(0,n.kt)("h2",{id:"clarifai_inceptionbatchnorm"},"Clarifai_InceptionBatchNorm"),(0,n.kt)("p",null,"This is an image classifier template based on the Inception architecture, which has been pre-trained on a combination of the ImageNet-21K dataset and additional image classification data."),(0,n.kt)("p",null,"The Inception architecture, initially introduced by Google, is known for its effectiveness in image classification tasks. It utilizes various convolutional layers and pooling operations to extract hierarchical features from images, enabling accurate classification."),(0,n.kt)("p",null,"By leveraging transfer learning, the pretrained Inception model can be used as a starting point for training an image classifier on a specific dataset or task."),(0,n.kt)("p",null,"In this case, the model has been pre-trained on the ImageNet-21K dataset, which consists of millions of labeled images from a wide range of categories. This dataset serves as a general-purpose pretraining source, providing the model with a foundation of knowledge about various visual concepts and features."),(0,n.kt)("p",null,"Additionally, the model has been further trained or fine-tuned on additional image classification data. This suggests that specific image datasets related to the intended classification task or domain have been utilized to enhance the model's performance and adapt it to the specific context."),(0,n.kt)("p",null,"The template is implemented using the Batch Normalization technique. The Batch Normalization method is a normalization technique that helps accelerate training and improve model performance by reducing internal covariate shift."),(0,n.kt)("p",null,"By incorporating Batch Normalization into the Inception architecture, the ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," classifier achieves better generalization and stability during training. It allows for efficient and accurate classification of images, leveraging the rich pretraining on the ImageNet-21K dataset and the additional image classification data."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logreg"),'\u2014This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"32"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1024"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Init epochs"),"\u2014This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step epochs"),'\u2014This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by ",(0,n.kt)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num items_per_epoch"),'\u2014This is the number of input images per "epoch." The default value is the number of images in the dataset.')),(0,n.kt)("h2",{id:"clarifai_inceptionv2"},"Clarifai_InceptionV2"),(0,n.kt)("p",null,"This template is an implementation of the InceptionV2 architecture without any modifications, starting with randomly initialized weights. This means that the model does not utilize any pretraining on large-scale datasets like ImageNet or any other specific initialization method."),(0,n.kt)("p",null,"Instead, it begins with random parameter values for all the layers in the InceptionV2 network. This allows for training the model from scratch or adapting it to a specific task or dataset by optimizing the weights based on the provided training data."),(0,n.kt)("p",null,"The InceptionV2 architecture is a variant of the Inception architecture, which was introduced by researchers at Google as a deep convolutional neural network (CNN) for image classification tasks. InceptionV2 is an improvement upon the original Inception architecture, also known as InceptionV1."),(0,n.kt)("p",null,"The main goal of the InceptionV2 architecture, like its predecessor, is to efficiently capture multi-scale information from images by utilizing various convolutional layers with different receptive field sizes. This allows the network to handle objects of different scales and capture both fine-grained and high-level features simultaneously."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionV2")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logreg"),'\u2014This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"32"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1024"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Init epochs"),"\u2014This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step epochs"),'\u2014This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by ",(0,n.kt)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num items_per_epoch"),'\u2014This is the number of input images per "epoch." The default value is the number of images in the dataset.')),(0,n.kt)("h2",{id:"clarifai_resnext"},"Clarifai_ResNext"),(0,n.kt)("p",null,"This template combines the power of the ResNeXt architecture, pre-trained on ImageNet-21K, with fine-tuning on domain-specific image classification data, and tailored modifications to meet Clarifai's unique requirements."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-mmlab/mmpretrain/tree/main/configs/resnext"},"ResNeXt"),', short for "Residual Next," is a deep convolutional neural network (CNN) architecture that extends the ResNet (Residual Network) architecture. It was introduced by researchers at Facebook AI Research (FAIR) as an advancement in the field of computer vision.'),(0,n.kt)("p",null,'ResNeXt introduces the concept of "cardinality" to enhance the representational power of the network. The cardinality represents the number of parallel paths within each network block, and it captures different types of feature interactions. Unlike the original ResNet architecture, which focuses on increasing depth or width,\nResNeXt achieves higher model capacity by increasing the number of parallel branches, thus allowing for richer and more diverse feature representations.'),(0,n.kt)("p",null,"The main idea behind ResNeXt is to provide a flexible and scalable architecture that can be easily adjusted based on available computational resources and requirements. By varying the cardinality parameter, ResNeXt can be customized to balance model complexity and performance."),(0,n.kt)("p",null,"ResNeXt architectures have demonstrated superior performance on various computer vision tasks, particularly image classification, by leveraging the power of deep residual connections, which enable efficient training of very deep networks. These networks have achieved state-of-the-art results on benchmark datasets, such as ImageNet."),(0,n.kt)("p",null,"This implementation is pre-trained on the ImageNet-21K dataset, which encompasses millions of labeled images across a diverse range of categories. By leveraging this large-scale pretraining, ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNext")," benefits from learning rich and generalizable visual representations from the vast and diverse ImageNet-21K dataset."),(0,n.kt)("p",null,"Additionally, ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNext")," has been further trained or fine-tuned on additional image classification data specific to the target domain or task. This additional training ensures that the model is adapted to the nuances and characteristics of the specific image classification problem, further improving its performance and accuracy within the desired context."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNext")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logreg"),'\u2014This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"32"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1024"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Init epochs"),"\u2014This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step epochs"),'\u2014This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by ",(0,n.kt)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num items_per_epoch"),'\u2014This is the number of input images per "epoch." The default value is the number of images in the dataset.')),(0,n.kt)("h2",{id:"clarifai_inceptiontransferembednorm"},"Clarifai_InceptionTransferEmbedNorm"),(0,n.kt)("p",null,"This template is an advanced image classifier that leverages the power of the Inception architecture as its foundation. It has been pre-trained on the vast and diverse ImageNet-21K dataset, which provides a comprehensive understanding of various visual concepts. Additionally, to enhance its capabilities further, the model has been exposed to additional image classification data, enabling it to handle a broader range of tasks."),(0,n.kt)("p",null,"To adapt the pretrained model for transfer learning, the classification head and hyperparameters have undergone careful modifications and tuning. The classification head refers to the top layers of the network responsible for mapping the learned representations to specific classes or categories. By customizing this component, ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionTransferEmbedNorm")," can effectively transfer its knowledge from the source domain (ImageNet-21K) to new, target domains with different sets of classes."),(0,n.kt)("p",null,"Furthermore, the hyperparameters of the model have been fine-tuned to optimize its performance for transfer learning tasks. Hyperparameters are adjustable settings that govern the learning process, such as learning rate, batch size, and regularization parameters. Through meticulous experimentation and validation, the hyperparameters of ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionTransferEmbedNorm")," have been carefully chosen to strike a balance between preserving the general knowledge from the source domain and adapting to the unique characteristics of the target domain."),(0,n.kt)("p",null,"By combining the powerful Inception architecture, pre-trained on ImageNet-21K, with the tailored modifications and hyperparameter tuning for transfer learning, ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionTransferEmbedNorm")," offers an effective and efficient solution for various image classification tasks, providing accurate predictions and insights."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionTransferEmbedNorm")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logreg"),'\u2014This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"32"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1024"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lrate"),"\u2014This is the learning rate per minibatch. It is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Base gradient_multiplier"),'\u2014This sets the learning rate of the pre-initialized base (also sometimes called "backbone") model that generates embeddings. Learning rate controls how the weights of our network are adjusted with respect to the loss gradient. The lower the value, the slower the trip along the downward slope. A low learning rate can help ensure that local minima are not missed, but can take a long time to converge, especially if the model gets stuck on a plateau region.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num items_per_epoch"),'\u2014This is the number of input images per "epoch." The default value is the number of images in the dataset.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Average horizontal_flips"),"\u2014If set to true, the template will average the embeddings from the original image and a horizontal flip of the image to get the final embedding vectors to output.")))}h.isMDXComponent=!0}}]);