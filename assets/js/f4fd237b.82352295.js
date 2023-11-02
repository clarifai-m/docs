"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4051],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(i),d=n,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return i?a.createElement(h,o(o({ref:t},p),{},{components:i})):a.createElement(h,o({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var m=2;m<r;m++)o[m]=i[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},91413:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=i(87462),n=(i(67294),i(3905));const r={description:"Learn about our visual embedding templates",sidebar_position:3},o="Visual Embedding Templates",s={unversionedId:"portal-guide/model/deep-training/visual-embedding-templates",id:"portal-guide/model/deep-training/visual-embedding-templates",title:"Visual Embedding Templates",description:"Learn about our visual embedding templates",source:"@site/docs/portal-guide/model/deep-training/visual-embedding-templates.md",sourceDirName:"portal-guide/model/deep-training",slug:"/portal-guide/model/deep-training/visual-embedding-templates",permalink:"/portal-guide/model/deep-training/visual-embedding-templates",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/deep-training/visual-embedding-templates.md",tags:[],version:"current",lastUpdatedAt:1698924850,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:3,frontMatter:{description:"Learn about our visual embedding templates",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Visual Detection Templates",permalink:"/portal-guide/model/deep-training/visual-detection-templates"},next:{title:"Visual Segmenter Templates",permalink:"/portal-guide/model/deep-training/visual-segmenter-templates"}},l={},m=[{value:"Clarifai_ResNet_AngularMargin",id:"clarifai_resnet_angularmargin",level:2},{value:"Clarifai_InceptionBatchNorm",id:"clarifai_inceptionbatchnorm",level:2},{value:"Clarifai_ResNext",id:"clarifai_resnext",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visual-embedding-templates"},"Visual Embedding Templates"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Learn about our visual embedding templates")),(0,n.kt)("hr",null),(0,n.kt)("p",null,'Embedding models can be useful in their own right (for applications like clustering and visual search), or as an input to a machine learning model for a supervised task. In effect, embedding templates enable you to create your own "base models" that you can then use in your workflows.'),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can customize most hyperparameters by specifying the following values:"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"minimum"),"\u2014the minimum value a given parameter can take."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"maximum"),"\u2014the maximum value a given parameter can take."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"step"),"\u2014determines how much you can increment or decrement the minimum or maximum value in a single click/change."))),(0,n.kt)("h2",{id:"clarifai_resnet_angularmargin"},"Clarifai_ResNet_AngularMargin"),(0,n.kt)("p",null,"This is a powerful deep learning visual embedding template derived from the ResNet101 architecture. It incorporates the angular margin loss function, which is inspired by ArcFace, to enhance the discriminative power of the learned embeddings."),(0,n.kt)("p",null,"The ResNet101 architecture is a deep convolutional neural network (CNN) that belongs to the ResNet (Residual Network) family. ResNet101 is specifically designed to address the challenge of training very deep neural networks by introducing residual connections or skip connections."),(0,n.kt)("p",null,"ResNet101 comprises 101 layers, including convolutional layers, pooling layers, fully connected layers, and residual blocks. The network's depth facilitates the learning of highly complex features and hierarchical representations from input images. With more layers, ResNet101 can capture intricate patterns and details, making it particularly effective in tasks such as image classification, object detection, and image segmentation."),(0,n.kt)("p",null,"ArcFace is a face recognition method that utilizes angular margin loss to enhance the discriminative power of the learned face embeddings. It was introduced as an improvement over traditional softmax-based approaches for face recognition tasks."),(0,n.kt)("p",null,"In face recognition, the goal is to learn a feature representation (embedding) for each face image that captures its unique characteristics while maximizing the inter-class variations and minimizing the intra-class variations. ArcFace achieves this by introducing an angular margin loss function that explicitly encourages greater angular separability between different classes."),(0,n.kt)("p",null,"By leveraging ResNet101's exceptional feature extraction capabilities and combining it with the angular margin loss, ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNet_AngularMargin")," achieves state-of-the-art performance in various visual recognition tasks such as face recognition, object detection, and image retrieval."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNet_AngularMargin")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"32"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1024"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Init epochs"),"\u2014This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step epochs"),'\u2014This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by ",(0,n.kt)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num items_per_epoch"),'\u2014This is the number of input images per "epoch." The default value is the number of images in the dataset.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Angular scale"),"\u2014This is the radius hyperparameter used in Angular Margin Loss, which is a variation of the popular Softmax Loss used in deep learning tasks, particularly in face recognition problems. It is the hyperparameter that controls the margin or angular gap between different class embeddings in the angular space. This margin is used to enhance the discriminative power of the learned embeddings, allowing for better class separation during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Angular margin"),"\u2014This is a margin hyperparameter used in Angular Margin Loss. It aims to enhance the discriminative power of the learned embeddings by enforcing larger angular separations between different classes. This helps to ensure that the model learns to distinguish between different classes. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.9"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Embeddings size"),"\u2014This is the embedding dimension to use as output from the selected model. It determines the length of the feature vectors produced by the model, which represent the learned representations of the input data. It is essential to strike a balance when selecting the embedding dimension. A smaller dimension may lead to loss of information, while a very large dimension can lead to overfitting and increased computational costs. Ultimately, the optimal embedding dimension should be determined through experimentation and evaluation of the specific task and dataset at hand.")),(0,n.kt)("h2",{id:"clarifai_inceptionbatchnorm"},"Clarifai_InceptionBatchNorm"),(0,n.kt)("p",null,"This template\u2019s model architecture is built upon the embeddings extracted from the intermediate layer of the ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," classifier. These embeddings serve as a compact and meaningful representation of the input data, capturing important features and patterns."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," classifier itself is a deep learning model that has been trained on a large dataset for various recognition tasks, such as image classification or object detection. It is based on the InceptionBatchNorm architecture, which is a variant of the Inception architecture designed to incorporate batch normalization for improved training and generalization performance."),(0,n.kt)("p",null,"By extracting embeddings from the intermediate layer of the ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," classifier, the deep learning template model can leverage the rich representations learned by the classifier. These embeddings encapsulate the semantic information about the input data, enabling the template model to perform various tasks efficiently, such as similarity matching, clustering, or retrieval."),(0,n.kt)("p",null,"The architecture of the deep learning template model takes these embeddings as input and builds upon them to solve specific problems. It may consist of additional layers, such as fully connected layers, convolutional layers, or recurrent layers, depending on the task at hand. These layers are typically fine-tuned or trained from scratch to adapt the embeddings to the specific requirements of the target task."),(0,n.kt)("p",null,"Overall, the ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," deep learning template model architecture benefits from the powerful feature representation provided by the embeddings extracted from the intermediate layer of the ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," classifier. This approach combines the strengths of pre-trained models with the flexibility of custom model architectures, allowing for efficient and effective solutions to a wide range of machine learning problems."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_InceptionBatchNorm")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logreg"),'\u2014This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"32"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1024"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Init epochs"),"\u2014This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step epochs"),'\u2014This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by ",(0,n.kt)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num items_per_epoch"),'\u2014This is the number of input images per "epoch." The default value is the number of images in the dataset.')),(0,n.kt)("h2",{id:"clarifai_resnext"},"Clarifai_ResNext"),(0,n.kt)("p",null,"This template uses embeddings extracted from the intermediate layer of the ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNext")," classifier to enhance the capabilities of computer vision systems. These embeddings capture high-level representations of images that encode semantic information about the visual content. By leveraging these embeddings, Clarifai_ResNext empowers various use cases, such as image recognition, object detection, and image similarity search, with enhanced accuracy and robustness."),(0,n.kt)("p",null,"The intermediate layer of the ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNext")," classifier serves as a feature extractor, transforming raw image data into a compact and meaningful representation. This layer contains a set of neurons that are specifically designed to capture relevant visual patterns and features. Each neuron in the intermediate layer represents a specific aspect or concept within an image, such as edges, textures, or shapes. By combining the activations of these neurons, the embeddings formed in the intermediate layer provide a holistic representation of the image."),(0,n.kt)("p",null,"Once these embeddings are obtained, they can be used for a variety of downstream tasks. For example, in image recognition, the embeddings can be fed into a softmax classifier to predict the most likely labels or categories for the input images. Similarly, in object detection, the embeddings can be utilized by a bounding box regression algorithm to accurately localize and identify objects within an image."),(0,n.kt)("p",null,"Furthermore, the embeddings from ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNext")," can be employed for image similarity search. By comparing the embeddings of different images, it is possible to measure their similarity and retrieve visually similar images from a database. This enables various use cases, such as content-based image retrieval, recommendation systems, and image clustering."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Clarifai_ResNext")," template supports the following hyperparameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Logreg"),'\u2014This specifies whether to use sigmoid units (logreg=1) or softmax (logreg=0); you can choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts (i.e., P > 0.5) to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" (i.e., only one concept could be correctly assigned to a given input). This will result in each prediction output representing a discrete probability distribution (i.e., all predicted values sum to 1). The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"0"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Image size"),"\u2014This is the input image size, specifically the minimum side dimension. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"32"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"1024"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"16"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"128"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Init epochs"),"\u2014This is the number of epochs to run at the initial learning rate before the first step/change in the learning rate. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step epochs"),'\u2014This is the number of epochs between learning rate decreases. The learning rate will be adjusted after each "Step epochs" number of epochs. The minimum value it supports for customization is ',(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train the model. It determines how many passes the model makes over the entire dataset during training. The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),". "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The overall learning rate (per step) is calculated by ",(0,n.kt)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Num items_per_epoch"),'\u2014This is the number of input images per "epoch." The default value is the number of images in the dataset.')))}u.isMDXComponent=!0}}]);