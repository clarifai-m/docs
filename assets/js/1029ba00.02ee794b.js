"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6264],{15680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>u});var a=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),g=n,u=d["".concat(l,".").concat(g)]||d[g]||m[g]||o;return i?a.createElement(u,r(r({ref:t},p),{},{components:i})):a.createElement(u,r({ref:t},p))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},37948:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(58168),n=(i(96540),i(15680));const o={description:"Learn about our visual detection templates",sidebar_position:2,keywords:["visual detection templates","deep learning visual detection","AI visual detection","object detection templates","deep training visual detection","machine learning visual detection","custom visual detection models","pre-trained visual detection templates","image detection AI","deep learning object detection"]},r="Visual Detection Templates",s={unversionedId:"portal-guide/model/deep-training/visual-detection-templates",id:"portal-guide/model/deep-training/visual-detection-templates",title:"Visual Detection Templates",description:"Learn about our visual detection templates",source:"@site/docs/portal-guide/model/deep-training/visual-detection-templates.md",sourceDirName:"portal-guide/model/deep-training",slug:"/portal-guide/model/deep-training/visual-detection-templates",permalink:"/portal-guide/model/deep-training/visual-detection-templates",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/deep-training/visual-detection-templates.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about our visual detection templates",sidebar_position:2,keywords:["visual detection templates","deep learning visual detection","AI visual detection","object detection templates","deep training visual detection","machine learning visual detection","custom visual detection models","pre-trained visual detection templates","image detection AI","deep learning object detection"]},sidebar:"tutorialSidebar",previous:{title:"Visual Classification Templates",permalink:"/portal-guide/model/deep-training/visual-classification-templates"},next:{title:"Visual Embedding Templates",permalink:"/portal-guide/model/deep-training/visual-embedding-templates"}},l={},c=[{value:"MMDetection Templates",id:"mmdetection-templates",level:2},{value:"MMDetection_YOLOX",id:"mmdetection_yolox",level:3},{value:"MMDetection_YOLOF",id:"mmdetection_yolof",level:3},{value:"MMDetection_SSD",id:"mmdetection_ssd",level:3},{value:"MMDetection_FasterRCNN",id:"mmdetection_fasterrcnn",level:3},{value:"MMDetection_AdvancedConfig",id:"mmdetection_advancedconfig",level:3},{value:"Clarifai Templates",id:"clarifai-templates",level:2},{value:"Clarifai_InceptionV4",id:"clarifai_inceptionv4",level:3},{value:"Clarifai_InceptionV2",id:"clarifai_inceptionv2",level:3},{value:"Other Templates",id:"other-templates",level:2},{value:"Detection_MSC10",id:"detection_msc10",level:3},{value:"Hyperparameters",id:"hyperparameters",level:2},{value:"Image Size",id:"image-size",level:3},{value:"Max Aspect Ratio",id:"max-aspect-ratio",level:3},{value:"Keep Aspect Ratio",id:"keep-aspect-ratio",level:3},{value:"Batch Size",id:"batch-size",level:3},{value:"Num Epochs",id:"num-epochs",level:3},{value:"Min Samples Per Epoch",id:"min-samples-per-epoch",level:3},{value:"Per Item Lrate",id:"per-item-lrate",level:3},{value:"Pretrained Weights",id:"pretrained-weights",level:3},{value:"Frozen Stages",id:"frozen-stages",level:3},{value:"Random Resize Lower",id:"random-resize-lower",level:3},{value:"Random Resize Upper",id:"random-resize-upper",level:3},{value:"Load From",id:"load-from",level:3},{value:"Use Perclass Regression",id:"use-perclass-regression",level:3},{value:"Anchor Ratios",id:"anchor-ratios",level:3},{value:"Use Focal Loss",id:"use-focal-loss",level:3},{value:"Pretrain Base Data",id:"pretrain-base-data",level:3},{value:"Base Model",id:"base-model",level:3},{value:"Continue From Eid",id:"continue-from-eid",level:3}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"visual-detection-templates"},"Visual Detection Templates"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Learn about our visual detection templates")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Our visual detection templates are essentially configuration files and scripts that serve as starting points or blueprints for creating, training, and evaluating object detection models. They streamline the process of building models that can accurately identify objects within specific regions of your images or videos. "),(0,n.yg)("p",null,"With these training templates, you can quickly and efficiently create detection models that return concepts and bounding boxes for the identified objects."),(0,n.yg)("p",null,(0,n.yg)("img",{src:i(10531).A,width:"1539",height:"758"})),(0,n.yg)("h2",{id:"mmdetection-templates"},"MMDetection Templates"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://mmdetection.readthedocs.io/en/latest/overview.html"},"MMDetection")," is a powerful open-source toolbox developed as part of the OpenMMLab project. It is based on PyTorch and provides a flexible and extensible framework for object detection and instance segmentation tasks. "),(0,n.yg)("p",null,"MMDetection offers a rich set of templates and resources that simplify the process of developing and deploying advanced object detection and instance segmentation models. "),(0,n.yg)("p",null,"We support a wide range of MMDetection templates to accelerate your development efforts and ensure you achieve state-of-the-art results. "),(0,n.yg)("admonition",{title:"info",type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"We currently support MMDetection v3.3.0. ")),(0,n.yg)("h3",{id:"mmdetection_yolox"},"MMDetection_YOLOX"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_YOLOX")," template is a configuration in the MMDetection framework for utilizing the advanced ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Megvii-BaseDetection/YOLOX"},"YOLOX")," model, part of the YOLO (You Only Look Once) family of object detection models. "),(0,n.yg)("p",null,"YOLOX introduces several improvements over previous YOLO versions, including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Anchor-free design")," \u2014 Eliminates the need for predefined anchors (reference boxes for bounding box prediction). The absence of hand-crafted anchors allows the model to predict bounding boxes directly. This makes the model more flexible and efficient in handling objects of various shapes and sizes."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Multi positives with center sampling")," \u2014 Enhances positive sample selection by focusing on bounding box centers, improving feature learning and detection accuracy."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Decoupled head"),": Separates the tasks of object classification and bounding box regression into two branches, which is a significant departure from the single-head design in the previous YOLO models. Decoupled head leads to more accurate predictions and faster model convergence."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"SimOTA label assignment")," \u2014 Assigns positive or negative labels to objects based on their Intersection over Union (IoU) with ground truth boxes, ensuring more accurate and context-aware label assignments."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Advanced data augmentations")," \u2014 Uses advanced techniques to improve the model's generalization (working on new data) by exposing it to diverse object arrangements and conditions.")),(0,n.yg)("p",null,"This template leverages these advanced features to create highly efficient and accurate object detection pipelines, facilitating quick setup and customization for various applications."),(0,n.yg)("h3",{id:"mmdetection_yolof"},"MMDetection_YOLOF"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"MMDetection_YOLOF")," is a configuration provided by the MMDetection framework specifically designed to utilize the ",(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/2103.09460"},"YOLOF"),' model, which stands for "You Only Look One-level Feature." YOLOF is a simplified, efficient variant of the YOLO (You Only Look Once) series tailored for real-time object detection tasks. '),(0,n.yg)("p",null,"Here are the key features of the template:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"One-level feature extraction")," \u2014 YOLOF uses a single-level feature map for detection, unlike multi-scale feature maps used in more complex models. This simplified architecture reduces computational overhead, making it suitable for real-time applications where speed is crucial."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Anchor-free design")," \u2014 Similar to YOLOX, YOLOF adopts an anchor-free approach, eliminating the need for predefined anchor boxes and allowing for more straightforward bounding box predictions."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"High efficiency")," \u2014 YOLOF is designed to ensure rapid inference and low latency.")),(0,n.yg)("p",null,"This template facilitates quick setup and customization, enabling efficient deployment of object detection models in various real-world applications requiring speed and accuracy."),(0,n.yg)("h3",{id:"mmdetection_ssd"},"MMDetection_SSD"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_SSD")," template is a configuration provided by the MMDetection framework for utilizing the ",(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/1512.02325"},"SSD")," (Single Shot MultiBox Detector) model. SSD is an efficient and straightforward object detection model known for its balance of speed and accuracy, making it suitable for real-time applications."),(0,n.yg)("p",null,"SSD is designed to detect objects in images using a single deep neural network. It eliminates the need for a separate proposal generation stage, making it faster and more efficient than some other object detection models."),(0,n.yg)("p",null,"Here are the key features of the template:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Single shot detection")," \u2014 Detects objects and their bounding boxes in a single forward pass of the network, as opposed to two-stage detectors like Faster R-CNN. The one-step process significantly reduces the computational complexity and increases the speed of detection."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Multi-scale feature maps")," \u2014 SSD uses multiple feature maps at different scales to detect objects of various sizes. This approach allows SSD to effectively handle objects at different resolutions and aspect ratios."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Default boxes (anchors)")," \u2014 Predicts offsets and confidences for predefined anchor boxes of different shapes and sizes."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Hard negative mining")," \u2014 Uses hard negative mining during training to handle the class imbalance between the background and object classes. This technique helps in focusing the training on difficult examples, improving the overall accuracy of the detector.")),(0,n.yg)("h3",{id:"mmdetection_fasterrcnn"},"MMDetection_FasterRCNN"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_FasterRCNN")," template is a configuration provided by the MMDetection framework for utilizing the ",(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/1506.01497"},"Faster R-CNN")," model, which is a popular and highly effective object detection model. Faster R-CNN stands for Faster Region-based Convolutional Neural Network and is known for its high accuracy in detecting objects within images."),(0,n.yg)("p",null,"Here are the key features of the template:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Two-stage detection")," \u2014 Uses an RPN (Region Proposal Network) for generating region proposals (potential object bounding boxes) and a Fast R-CNN detector for performing object classification and bounding box regression on the proposed regions."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Shared convolutional layers")," \u2014 The RPN and the Fast R-CNN detection network share convolutional features, improving efficiency."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Anchor boxes")," \u2014 Uses predefined anchor boxes of different scales and aspect ratios at each sliding window location to handle objects of various shapes and sizes. Predicts offsets to these anchors to refine the bounding box locations. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"End-to-end training")," \u2014 The entire Faster R-CNN model, including the RPN and the detection network, is trained end-to-end, enhancing performance.")),(0,n.yg)("h3",{id:"mmdetection_advancedconfig"},"MMDetection_AdvancedConfig"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/deep-training/custom-templates"},"Click here")," to learn how to use the ",(0,n.yg)("strong",{parentName:"p"},"MMDetection_AdvancedConfig")," template to create your own customized template for deep fine-tuning tasks. "),(0,n.yg)("h2",{id:"clarifai-templates"},"Clarifai Templates"),(0,n.yg)("p",null,"Clarifai\u2019s templates are our own configurations designed to streamline common object detection and instance segmentation tasks. These templates provide essential settings and structures, offering a solid foundation for building custom detection and segmentation pipelines. "),(0,n.yg)("p",null,"We offer the following visual detection templates. "),(0,n.yg)("h3",{id:"clarifai_inceptionv4"},"Clarifai_InceptionV4"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," template is a pre-configured setup provided by Clarifai, leveraging the ",(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/1602.07261"},"InceptionV4")," model for visual recognition tasks such as object detection and instance segmentation."),(0,n.yg)("p",null,"InceptionV4 is a convolutional neural network architecture that builds on the success of the earlier Inception models (also known as GoogLeNet), designed by researchers at Google. InceptionV4 combines the strengths of InceptionV3 and Residual Networks (ResNet) to achieve high accuracy and efficiency in visual recognition tasks."),(0,n.yg)("p",null,"Here are the key features of the template:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Hybrid architecture")," \u2014 Combines inception modules and residual connections for comprehensive feature extraction and efficient training."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"High accuracy")," \u2014 Achieves high precision in visual recognition tasks due to its deep and complex architecture."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Efficient training")," \u2014 Designed to be trained efficiently on large datasets, making it suitable for tasks requiring detailed feature extraction and high precision.")),(0,n.yg)("h3",{id:"clarifai_inceptionv2"},"Clarifai_InceptionV2"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV2")," template is a pre-configured setup provided by Clarifai, leveraging the ",(0,n.yg)("a",{parentName:"p",href:"https://arxiv.org/pdf/1512.00567v3"},"InceptionV2")," model, a convolutional neural network designed for efficient and accurate visual recognition tasks such as object detection and instance segmentation. "),(0,n.yg)("p",null,"InceptionV2 is an improvement over the original Inception (GoogLeNet) model, enhancing both performance and efficiency. It includes several architectural updates to optimize computational resources while maintaining high accuracy."),(0,n.yg)("p",null,"Here are the key features of the template:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Inception modules")," \u2014 Uses inception modules to perform convolutions at multiple scales for comprehensive feature extraction."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Efficiency improvements")," \u2014 Utilizes factorized convolutions and reduction modules to reduce computational complexity."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Improved training")," \u2014 Incorporates batch normalization to stabilize and accelerate training.")),(0,n.yg)("h2",{id:"other-templates"},"Other Templates"),(0,n.yg)("p",null,"We also support the following additional templates. "),(0,n.yg)("h3",{id:"detection_msc10"},"Detection_MSC10"),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Detection_MSC10")," template provides an excellent starting point for building and deploying sophisticated object detection and instance segmentation models. With its blend of accuracy, efficiency, and customizability, the template can significantly enhance the development process for various visual detection applications."),(0,n.yg)("p",null,"For example, you can customize it with the MSCOCO (Microsoft Common Objects in Context) dataset, a large-scale object detection, segmentation, and captioning dataset. You can also customize it with the InceptionV4 architecture, a state-of-the-art architecture known for handling complex image recognition and detection tasks. This allows it to achieve faster convergence and better performance on related tasks."),(0,n.yg)("h2",{id:"hyperparameters"},"Hyperparameters"),(0,n.yg)("p",null,"Each visual detection template comes with its own hyperparameters, which you can tune to influence \u201chow\u201d your model learns. With hyperparameters, you can customize and fine-tune a template to suit your specific tasks and achieve better performance."),(0,n.yg)("admonition",{title:"Customize values",type:"warning"},(0,n.yg)("p",{parentName:"admonition"},"You can customize most hyperparameters by specifying the following values:"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"minimum")," \u2014 The minimum value a given parameter can take;"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"maximum")," \u2014 The maximum value a given parameter can take;"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"step")," \u2014 Determines how much you can increase or decrease the minimum or maximum value in a single click/change."))),(0,n.yg)("h3",{id:"image-size"},"Image Size"),(0,n.yg)("p",null,"The image size hyperparameter defines the dimensions of the input images used for training and inference. It is crucial because it affects the model's performance, memory consumption, and computational requirements."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Lower values:")," Use less memory and enable faster processing but might reduce detection accuracy due to fewer pixels."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Higher values:")," Provide more pixel information, potentially increasing detection accuracy, but require more memory and computational power.")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Choosing the appropriate image size involves balancing the need for detailed image information with the constraints of memory and computational resources. Selecting the right size can enhance model performance and detection accuracy.")),(0,n.yg)("p",null,"You can specify either a single value or multiple values:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Single value:")," When a single value is specified, images are resized so that the minimum side (either width or height) matches that value. The aspect ratio is maintained by adjusting the other dimension proportionally."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Multiple values:"),' When more than one value is specified, and combined with the "keep_aspect_ratio=False" hyperparameter (if supported by the template), images are resized to the exact width and height specified, regardless of the original aspect ratio.')),(0,n.yg)("p",null,"For example, the valid choices for the image size hyperparameter you can specify for the ",(0,n.yg)("strong",{parentName:"p"},"Clarifai_InceptionV4")," template are 320, 512, or 800."),(0,n.yg)("h3",{id:"max-aspect-ratio"},"Max Aspect Ratio"),(0,n.yg)("p",null,'When "keep_aspect_ratio" is set to True, this hyperparameter controls the maximum ratio between the longer side and the shorter side of an image during resizing. You can customize this ratio to ensure that the longer side of the image is no more than a specified multiple of the shorter side. The allowed range for this parameter is from 1.0 to 5.0.'),(0,n.yg)("h3",{id:"keep-aspect-ratio"},"Keep Aspect Ratio"),(0,n.yg)("p",null,"This boolean hyperparameter determines whether to preserve the original aspect ratio of an image during resizing. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"True (default, recommended):")," The aspect ratio of the image will be maintained, ensuring the image is resized proportionally to fit within the desired dimensions without distortion."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"False:")," The image will be resized to exactly match the specified dimensions, disregarding the original aspect ratio. This may result in distortion as the image's proportions are altered.")),(0,n.yg)("h3",{id:"batch-size"},"Batch Size"),(0,n.yg)("p",null,"This hyperparameter specifies the number of images used in each training iteration, directly affecting how often the model parameters are updated based on the gradient of the loss function."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Larger batch size:")," Provides more data per update, resulting in more stable and accurate gradient estimates. However, it requires more memory and computational resources.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Smaller batch size:")," Uses less memory and computational power, allowing for faster updates. However, it introduces more noise and variance in the gradient estimates, which can lead to less stable training."))),(0,n.yg)("p",null,"The batch size can be customized with values ranging from 1 to 32, adjusted in increments of 1. Selecting the appropriate batch size involves balancing the trade-offs to optimize training efficiency and performance."),(0,n.yg)("h3",{id:"num-epochs"},"Num Epochs"),(0,n.yg)("p",null,"This hyperparameter specifies the total number of epochs for training. An epoch is defined as one complete pass over the entire dataset. One epoch corresponds to a single pass through the full training dataset."),(0,n.yg)("p",null,"Increasing the number of epochs allows the model to learn from the data for a longer period, potentially leading to a more robust and accurate model. Since more epochs will result in longer training times, it\u2019s important to monitor the model\u2019s performance to avoid overfitting, which can occur if the model is trained for too many epochs."),(0,n.yg)("p",null,"The number of epochs can be customized with values ranging from 1 to 200, adjustable in increments of 1."),(0,n.yg)("h3",{id:"min-samples-per-epoch"},"Min Samples Per Epoch"),(0,n.yg)("p",null,"This hyperparameter specifies the minimum number of samples processed in one epoch during training, particularly useful for very small datasets. It ensures that a sufficient number of samples are processed in each epoch to provide meaningful training updates."),(0,n.yg)("p",null,"It's essential to manage this hyperparameter carefully to prevent overfitting and maintain stable training. For very small datasets, a common approach is to repeat the dataset multiple times within an epoch, effectively increasing the number of training iterations and improving model learning without overfitting."),(0,n.yg)("p",null,"By setting an appropriate value for this hyperparameter, you can ensure effective training even with limited data, enhancing model performance and stability."),(0,n.yg)("h3",{id:"per-item-lrate"},"Per Item Lrate"),(0,n.yg)("p",null,"This is the initial learning rate per item; it's the rate at which the model weights are changed per item. The lrate (learning rate) is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function."),(0,n.yg)("p",null,"The overall learning rate (per step) is calculated by ",(0,n.yg)("inlineCode",{parentName:"p"},"lrate = batch_size * per_item_lrate"),". The minimum value it supports for customization is 0.0."),(0,n.yg)("p",null,"Properly adjusting the per item learning rate allows fine-tuning of the model\u2019s convergence speed and stability, essential for effective training."),(0,n.yg)("h3",{id:"pretrained-weights"},"Pretrained Weights"),(0,n.yg)("p",null,"This hyperparameter specifies whether to initialize the model with pre-trained weights. You can choose from the following options:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"None:")," The model will not be initialized with weights.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"coco (default):")," The model will be initialized with weights pre-trained on the COCO (Common Objects in Context) dataset, which can accelerate training and improve performance by leveraging prior knowledge from a large and diverse dataset."))),(0,n.yg)("h3",{id:"frozen-stages"},"Frozen Stages"),(0,n.yg)("p",null,"This hyperparameter specifies which stages of the backbone network should remain frozen (i.e., their weights do not get updated) during training. Freezing certain stages can help retain pre-trained features and reduce the risk of overfitting, especially when fine-tuning a model on a new dataset."),(0,n.yg)("p",null,"You can choose to freeze between 1 and 4 stages, adjustable in increments of 1. By selecting the appropriate number of frozen stages, you can balance retaining valuable pre-trained features and adapting the model to new data."),(0,n.yg)("h3",{id:"random-resize-lower"},"Random Resize Lower"),(0,n.yg)("p",null,"This is the lower limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or larger than this lower limit. "),(0,n.yg)("p",null,"It uses the same one or two-element format as ",(0,n.yg)("inlineCode",{parentName:"p"},"image_size"),". And if it's empty, it uses ",(0,n.yg)("inlineCode",{parentName:"p"},"image_size"),". If the original image size is smaller than the lower limit, it will not be resized, and the original size will be used."),(0,n.yg)("p",null,"By setting an appropriate lower limit, you can ensure that input images are resized within a desirable range, which helps in augmenting the training data and improving model robustness."),(0,n.yg)("h3",{id:"random-resize-upper"},"Random Resize Upper"),(0,n.yg)("p",null,"This is the upper limit for the random resizing. It means that during training, the input images will be randomly resized to a size equal to or smaller than this upper limit. "),(0,n.yg)("p",null,"It uses the same one or two-element format as ",(0,n.yg)("inlineCode",{parentName:"p"},"image_size"),". And if it's empty, it uses ",(0,n.yg)("inlineCode",{parentName:"p"},"image_size"),". If the original image size is already smaller than the upper limit, it will not be resized, and the original size will be used."),(0,n.yg)("p",null,"Setting an appropriate upper limit helps ensure that input images are resized within a desired range, enhancing data augmentation and contributing to more effective model training."),(0,n.yg)("h3",{id:"load-from"},"Load From"),(0,n.yg)("p",null,"This hyperparameter specifies the source path from which to load a model checkpoint as a pre-trained model."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Empty:")," Leave this field empty to train a model from scratch."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"coco:"),' Enter "coco" to load the pre-trained model from the COCO (Common Objects in Context) dataset.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"URL:")," Enter a URL to load the pre-trained model from a specified path.")),(0,n.yg)("p",null,"Using this hyperparameter, you can easily initialize your model with pre-trained weights to accelerate training and leverage existing knowledge, or opt to start training from scratch as needed."),(0,n.yg)("h3",{id:"use-perclass-regression"},"Use Perclass Regression"),(0,n.yg)("p",null,"This boolean hyperparameter determines whether to use separate coordinate regressors for each class or a single set for all classes."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"True:")," Enables per-class regression, where separate box coordinate regressors are used for each class. This means that each object class has its own dedicated set of regression parameters, allowing for more tailored and potentially accurate predictions of bounding box coordinates (e.g., x, y, width, height) specific to each class."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"False:")," A single set of box coordinate regressors is used for all classes, which simplifies the model and reduces computational complexity.")),(0,n.yg)("p",null,"By setting this hyperparameter, you can choose between increased specificity with per-class regressors and a more streamlined model with shared regressors."),(0,n.yg)("h3",{id:"anchor-ratios"},"Anchor Ratios"),(0,n.yg)("p",null,"These define the width (w) to height (h) ratios of anchor boxes, which are predefined bounding boxes of various shapes and sizes used as reference templates in object detection."),(0,n.yg)("p",null,"Anchor boxes help detect objects of different scales and aspect ratios in an image. The anchor ratios determine the shapes of these boxes, enabling the object detector to effectively handle objects with diverse aspect ratios."),(0,n.yg)("p",null,"By configuring anchor ratios appropriately, you can improve the object detector's ability to accurately detect and localize objects of varying shapes and sizes within images."),(0,n.yg)("h3",{id:"use-focal-loss"},"Use Focal Loss"),(0,n.yg)("p",null,"This boolean parameter specifies whether to use focal loss or Online Hard Example Mining (OHEM) during training."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Focal Loss (True):")," Focal loss is a modification of the standard cross-entropy loss that addresses class imbalance by introducing a modulating factor. This factor downweights the contribution of easy examples and focuses more on hard examples, improving the training of imbalanced datasets by giving more importance to challenging samples.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"OHEM (False):")," Online Hard Example Mining (OHEM) is a technique that also addresses class imbalance. Instead of using all samples in a batch, OHEM selects the hardest examples (those with the highest loss) for backpropagation. This focuses the training on difficult samples, enhancing learning efficiency and effectiveness, especially when dealing with many easy background samples."))),(0,n.yg)("p",null,"By setting this hyperparameter, you can choose between focal loss and OHEM to handle class imbalance, focusing training efforts on more challenging and informative examples."),(0,n.yg)("h3",{id:"pretrain-base-data"},"Pretrain Base Data"),(0,n.yg)("p",null,'This hyperparameter specifies the pre-initialization weights for the base model. For instance, "mscoco" refers to using weights pre-trained on the Microsoft COCO dataset.'),(0,n.yg)("p",null,"This setting allows you to initialize your model with weights trained on a large and diverse dataset, leveraging learned features and accelerating training on your specific task or dataset."),(0,n.yg)("h3",{id:"base-model"},"Base Model"),(0,n.yg)("p",null,"This refers to the foundational architecture used for the detector. Pre-trained architectures enable transfer learning, where models trained on large datasets can be fine-tuned for specific tasks with smaller datasets, saving time and resources."),(0,n.yg)("p",null,"Choosing the appropriate base model architecture is crucial as it forms the backbone of your detector, determining its overall performance, speed, and capability to handle various tasks."),(0,n.yg)("h3",{id:"continue-from-eid"},"Continue From Eid"),(0,n.yg)("p",null,"If specified, this parameter initializes the model with weights from a checkpoint identified by the Eid (Experiment ID)."),(0,n.yg)("p",null,"This allows you to resume training or initialize a model with specific weights stored in a checkpoint corresponding to a particular experiment ID (Eid)."))}m.isMDXComponent=!0},10531:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/visual-detection-templates-d0b943700c0cc1d3d6c603f05566901e.png"}}]);