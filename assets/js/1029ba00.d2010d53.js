"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6264],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,g=p["".concat(l,".").concat(h)]||p[h]||d[h]||o;return a?i.createElement(g,r(r({ref:t},m),{},{components:a})):i.createElement(g,r({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},37948:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(58168),n=(a(96540),a(15680));const o={description:"Learn about our visual detection templates",sidebar_position:2,keywords:["visual detection templates","deep learning visual detection","AI visual detection","object detection templates","deep training visual detection","machine learning visual detection","custom visual detection models","pre-trained visual detection templates","image detection AI","deep learning object detection"]},r="Visual Detection Templates",s={unversionedId:"portal-guide/model/deep-training/visual-detection-templates",id:"portal-guide/model/deep-training/visual-detection-templates",title:"Visual Detection Templates",description:"Learn about our visual detection templates",source:"@site/docs/portal-guide/model/deep-training/visual-detection-templates.md",sourceDirName:"portal-guide/model/deep-training",slug:"/portal-guide/model/deep-training/visual-detection-templates",permalink:"/portal-guide/model/deep-training/visual-detection-templates",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/deep-training/visual-detection-templates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about our visual detection templates",sidebar_position:2,keywords:["visual detection templates","deep learning visual detection","AI visual detection","object detection templates","deep training visual detection","machine learning visual detection","custom visual detection models","pre-trained visual detection templates","image detection AI","deep learning object detection"]},sidebar:"tutorialSidebar",previous:{title:"Visual Classification Templates",permalink:"/portal-guide/model/deep-training/visual-classification-templates"},next:{title:"Visual Embedding Templates",permalink:"/portal-guide/model/deep-training/visual-embedding-templates"}},l={},c=[{value:"MMDetection_YoloF",id:"mmdetection_yolof",level:2},{value:"MMDetection_SSD",id:"mmdetection_ssd",level:2},{value:"MMDetection_FasterRCNN",id:"mmdetection_fasterrcnn",level:2},{value:"Clarifai_InceptionV4",id:"clarifai_inceptionv4",level:2},{value:"Clarifai_InceptionV2",id:"clarifai_inceptionv2",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,i.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"visual-detection-templates"},"Visual Detection Templates"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Learn about our visual detection templates")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Detection templates make it easy to build models that can identify objects within a region of your images or videos. Detection models return concepts and bounding boxes."),(0,n.yg)("h2",{id:"mmdetection_yolof"},"MMDetection_YoloF"),(0,n.yg)("p",null,"This is a deep learning template model from MMDetection that focuses on object detection using the YOLO (You Only Look Once) framework."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://mmdetection.readthedocs.io/en/latest/overview.html"},"MMDetection"),', short for "OpenMMLab Detection Toolbox and Benchmark," is an open-source software framework developed by OpenMMLab. It is designed to facilitate research and development in the field of object detection and instance segmentation.'),(0,n.yg)("p",null,"MMDetection provides a comprehensive collection of state-of-the-art models, datasets, and evaluation metrics, making it a valuable resource for both academic and industrial applications."),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"We currently support MMDetection v3.3.0. ")),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_YoloF")," template leverages the power of convolutional neural networks (CNNs) and advanced techniques like anchor-based prediction and feature pyramid networks to accurately detect and localize objects in images or videos."),(0,n.yg)("p",null,"With its robust architecture and pretrained weights, ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_YoloF")," provides a strong foundation for developers and researchers to build custom object detection solutions for various use cases."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_YoloF")," template supports the following hyperparameters:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Max aspect_ratio"),'\u2014When "keep_aspect_ratio" is set to True, it is used to control the maximum length of the longer side of an image relative to the shorter side during image resizing. The minimum value it supports for customization is ',(0,n.yg)("inlineCode",{parentName:"li"},"1.0"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"5.0"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Keep aspect_ratio"),"\u2014This is a boolean that determines whether to keep the original aspect ratio of the image during resizing. If set to True (default, recommended), the aspect ratio of the image will be preserved when resizing. The image will be resized, maintaining the same aspect ratio, to fit within the desired dimensions. If set to False, non-aspect-preserving resizes will be used. In this case, the image may be distorted as it is resized to exactly match the specified dimensions, ignoring the original aspect ratio."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"32"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),". "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Min samples_per_epoch"),"\u2014For very small datasets, this specifies the minimum number of samples processed in one epoch during training. When dealing with very small datasets, it's essential to be cautious about the number of samples per epoch to avoid overfitting and unstable training. For small datasets, a common approach is to repeat the dataset multiple times to increase the number of effective epochs."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The ",(0,n.yg)("strong",{parentName:"li"},"lrate")," (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by ",(0,n.yg)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Pretrained weights"),"\u2014This specifies whether to init the model with pre-trained weights. You can choose either ",(0,n.yg)("inlineCode",{parentName:"li"},"None")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"coco")," (default) for this parameter. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Frozen stages"),"\u2014This specifies the backbone network stages to keep frozen during training. The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"4"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),". ")),(0,n.yg)("h2",{id:"mmdetection_ssd"},"MMDetection_SSD"),(0,n.yg)("p",null,"This template is an implementation of the SSD object detection algorithm within the MMDetection framework, offering a convenient and powerful tool for object detection tasks. The Single Shot MultiBox Detector (SSD) architecture is a popular object detection algorithm that offers a good trade-off between accuracy and speed."),(0,n.yg)("p",null,"The SSD model in MMDetection is designed to detect and localize objects in images using a single deep neural network. It achieves this by dividing the input image into a grid of cells and predicting object bounding boxes and class probabilities within each cell. SSD incorporates multiple convolutional layers of different scales to capture objects of various sizes and aspect ratios, allowing it to detect objects at different scales in a single pass."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"MMDetection_SSD")," provides a pre-configured implementation of the SSD architecture along with trained weights on standard benchmark datasets such as COCO and VOC. This allows users to utilize the model out of the box for various object detection tasks or as a starting point for further customization and fine-tuning."),(0,n.yg)("p",null,"By leveraging the MMDetection framework, users can take advantage of its data pre-processing, model training, and evaluation capabilities to train and evaluate the ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_SSD")," model on their own datasets. The framework also provides tools for visualizing and analyzing the detection results."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_SSD")," template supports the following hyperparameters:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"32"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),". "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The ",(0,n.yg)("strong",{parentName:"li"},"lrate")," (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by ",(0,n.yg)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Pretrained weights"),"\u2014This specifies whether to init the model with pre-trained weights. You can choose either ",(0,n.yg)("inlineCode",{parentName:"li"},"None")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"coco")," (default) for this parameter.  ")),(0,n.yg)("h2",{id:"mmdetection_fasterrcnn"},"MMDetection_FasterRCNN"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"MMDetection_FasterRCNN")," refers to a specific model implemented in the MMDetection framework that is based on the Faster R-CNN (Region-based Convolutional Neural Networks) architecture. Faster R-CNN is a widely used and highly effective object detection algorithm."),(0,n.yg)("p",null,"The Faster R-CNN algorithm consists of two main components: a region proposal network (RPN) and a region-based CNN for detection. The RPN generates potential object bounding box proposals, and the region-based CNN classifies and refines these proposals to produce the final detection results."),(0,n.yg)("p",null,"In MMDetection, the ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_FasterRCNN")," model provides a pre-configured implementation of the Faster R-CNN architecture along with pre-trained weights on standard benchmark datasets like COCO and VOC. It allows users to utilize the model out of the box for object detection tasks or as a starting point for further customization and fine-tuning."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"MMDetection_FasterRCNN")," leverages the MMDetection framework's capabilities for data preprocessing, model training, and evaluation. Users can train the model on their own datasets, adjust hyperparameters, and analyze the detection results using the provided tools."),(0,n.yg)("p",null,"The Faster R-CNN algorithm has been proven to achieve excellent performance in terms of accuracy, making ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_FasterRCNN")," a valuable tool for a wide range of object detection applications."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_FasterRCNN")," template supports the following hyperparameters:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Random resize_lower"),"\u2014This is the lower limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or larger than this lower limit. It uses the same one or two element format as ",(0,n.yg)("inlineCode",{parentName:"li"},"image_size"),". And if it's empty, it uses ",(0,n.yg)("inlineCode",{parentName:"li"},"image_size"),".  If the original image size is smaller than the lower limit, it will not be resized, and the original size will be used."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Random resize_upper"),"\u2014This is the upper limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or smaller than this upper limit. It uses the same one or two element format as ",(0,n.yg)("inlineCode",{parentName:"li"},"image_size"),". And if it's empty, it uses ",(0,n.yg)("inlineCode",{parentName:"li"},"image_size"),". If the original image size is already smaller than the upper limit, it will not be resized, and the original size will be used."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"32"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),".   "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The ",(0,n.yg)("strong",{parentName:"li"},"lrate")," (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by ",(0,n.yg)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"0.0"),"."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Pretrained weights"),"\u2014This specifies whether to init the model with pre-trained weights. You can choose either ",(0,n.yg)("inlineCode",{parentName:"li"},"None")," or ",(0,n.yg)("inlineCode",{parentName:"li"},"coco")," (default) for this parameter. ")),(0,n.yg)("h2",{id:"clarifai_inceptionv4"},"Clarifai_InceptionV4"),(0,n.yg)("p",null,"This is a visual detector template based on RetinaNet, a popular object detection framework, that utilizes the InceptionV4 architecture as its backbone."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/1602.07261"},"InceptionV4")," is a variant of the Inception architecture, which was originally introduced by Google for image classification tasks. The InceptionV4 model is a convolutional neural network (CNN) that is designed to extract high-level features from images for tasks such as object recognition, classification, and detection. It incorporates various innovative techniques, including inception modules with multiple parallel branches, factorized convolutions, and residual connections, to enhance its performance and efficiency."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," template leverages the strengths of InceptionV4 by applying it at multiple image scales, allowing for robust detection across a range of object sizes."),(0,n.yg)("p",null,"Compared to InceptionV2, ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," sacrifices speed for increased accuracy. While InceptionV2 is faster, ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," is slower but offers improved precision in object detection tasks. This makes it well-suited for applications that prioritize accuracy over real-time inference."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," is pretrained on either the COCO (Common Objects in Context) dataset or the OpenImages dataset. COCO is a widely used benchmark dataset for object detection, while OpenImages is a large-scale dataset with a diverse range of object categories. Pretraining on these datasets enables the model to learn general representations of objects, improving its ability to detect and classify objects accurately."),(0,n.yg)("p",null,"By combining the strengths of the RetinaNet framework, the powerful InceptionV4 backbone, and pretrained weights on COCO or OpenImages, ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," provides a robust and accurate solution for object detection tasks, making it a valuable tool for various computer vision applications."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," template supports the following hyperparameters:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"16"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),". "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),".  "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Use perclass_regression"),"\u2014This is a boolean that specifies whether to use separate coordinate regressors for each class, or one set for all classes. Per-class regression refers to the process of using separate box coordinate regressors for each class in the dataset. This means that for each object class, there is a dedicated set of regression parameters that are learned during the training process to predict the bounding box coordinates (e.g., x, y, width, and height) specific to that class."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Anchor ratios"),"\u2014Anchor boxes are predefined bounding boxes of different shapes and sizes that act as reference templates for detecting objects of various scales and aspect ratios in an image. The anchor ratios refer to the width (w) to height (h) ratios of these anchor boxes. They determine the shape of the anchor boxes, allowing the object detector to handle objects with different aspect ratios effectively."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Use focal_loss"),"\u2014This is a boolean that specifies whether to use focal loss during training or Online Hard Example Mining (OHEM). Focal loss is a modification of the standard cross-entropy loss that addresses the issue of class imbalance during training. It introduces a modulating factor to downweight the contribution of easy examples while focusing more on hard examples. OHEM is a technique used to alleviate the problem of class imbalance by focusing on challenging samples during training. Instead of using all samples in a batch, OHEM selects the hardest examples (e.g., the ones with the highest loss) and only uses those for backpropagation. By doing so, it gives more importance to the difficult examples, which can lead to more effective learning, especially when dealing with a large number of easy background samples."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The ",(0,n.yg)("strong",{parentName:"li"},"lrate")," (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by ",(0,n.yg)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"0.0"),".")),(0,n.yg)("h2",{id:"clarifai_inceptionv2"},"Clarifai_InceptionV2"),(0,n.yg)("p",null,"This is a visual detector template based on RetinaNet using the Inception V2 backbone architecture, which is applied at multiple image scales. It offers a balance between speed and accuracy. Compared to InceptionV4, InceptionV2 is faster but provides slightly lower accuracy."),(0,n.yg)("p",null,"The model can be pre-trained on either the COCO (Common Objects in Context) dataset or the OpenImages dataset. These datasets contain a wide range of labeled images, enabling the model to learn to detect various objects and entities in images. The choice of dataset for pretraining depends on the specific application and the types of objects or entities you want the model to detect."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV2")," serves as an efficient deep learning template that leverages the Inception V2 backbone architecture, providing a good trade-off between speed and accuracy for object detection tasks."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV2")," template supports the following hyperparameters:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Batch size"),"\u2014The number of images used during training. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase the batch size if the model is large and takes a long time to train. You may also want to increase the batch size if your total number of model concepts is larger than the batch size (you may want to increase it to around 2x the category count). The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"16"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),". "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Num epochs"),"\u2014This is the total number of epochs to train for. An epoch is defined as one-pass over the entire dataset. If you increase it, the model will take longer to train, but it could make the model more robust. The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),", while the maximum is ",(0,n.yg)("inlineCode",{parentName:"li"},"200"),"\u2014with an incremental or decremental step of ",(0,n.yg)("inlineCode",{parentName:"li"},"1"),". "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Use perclass_regression"),"\u2014This is a boolean that specifies whether to use separate coordinate regressors for each class, or one set for all classes. Per-class regression refers to the process of using separate box coordinate regressors for each class in the dataset. This means that for each object class, there is a dedicated set of regression parameters that are learned during the training process to predict the bounding box coordinates (e.g., x, y, width, and height) specific to that class."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Anchor ratios"),"\u2014Anchor boxes are predefined bounding boxes of different shapes and sizes that act as reference templates for detecting objects of various scales and aspect ratios in an image. The anchor ratios refer to the width (w) to height (h) ratios of these anchor boxes. They determine the shape of the anchor boxes, allowing the object detector to handle objects with different aspect ratios effectively."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Use focal_loss"),"\u2014This is a boolean that specifies whether to use focal loss during training or Online Hard Example Mining (OHEM). Focal loss is a modification of the standard cross-entropy loss that addresses the issue of class imbalance during training. It introduces a modulating factor to downweight the contribution of easy examples while focusing more on hard examples. OHEM is a technique used to alleviate the problem of class imbalance by focusing on challenging samples during training. Instead of using all samples in a batch, OHEM selects the hardest examples (e.g., the ones with the highest loss) and only uses those for backpropagation. By doing so, it gives more importance to the difficult examples, which can lead to more effective learning, especially when dealing with a large number of easy background samples."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Per item_lrate"),"\u2014This is the initial learning rate per item; it's the rate that the model weights are changed per item. The ",(0,n.yg)("strong",{parentName:"li"},"lrate")," (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function. The overall learning rate (per step) is calculated by ",(0,n.yg)("inlineCode",{parentName:"li"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is ",(0,n.yg)("inlineCode",{parentName:"li"},"0.0"),".")))}d.isMDXComponent=!0}}]);