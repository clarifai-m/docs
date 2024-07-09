"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9522],{15680:(e,t,i)=>{i.d(t,{xA:()=>d,yg:()=>g});var a=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(i),h=n,g=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return i?a.createElement(g,r(r({ref:t},d),{},{components:i})):a.createElement(g,r({ref:t},d))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},75653:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=i(58168),n=(i(96540),i(15680));const o={description:"Learn how to interpret the evaluation results of detection models",sidebar_position:1.1},r="Evaluating Detection Models",s={unversionedId:"portal-guide/evaluate/detection",id:"portal-guide/evaluate/detection",title:"Evaluating Detection Models",description:"Learn how to interpret the evaluation results of detection models",source:"@site/docs/portal-guide/evaluate/detection.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/detection",permalink:"/portal-guide/evaluate/detection",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/detection.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{description:"Learn how to interpret the evaluation results of detection models",sidebar_position:1.1},sidebar:"tutorialSidebar",previous:{title:"Evaluating Classification Models",permalink:"/portal-guide/evaluate/interpreting-evaluations"},next:{title:"LLM Evaluation",permalink:"/portal-guide/evaluate/llms"}},l={},c=[{value:"Evaluation Highlights",id:"evaluation-highlights",level:2},{value:"Intersection Over Union (IoU)",id:"intersection-over-union-iou",level:2},{value:"Precision",id:"precision",level:2},{value:"Recall",id:"recall",level:2},{value:"F1 Score",id:"f1-score",level:2},{value:"Precision-Recall Curve",id:"precision-recall-curve",level:2},{value:"Average Precision (AP)",id:"average-precision-ap",level:2},{value:"Mean Average Precision (mAP)",id:"mean-average-precision-map",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,n.yg)(u,(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"evaluating-detection-models"},"Evaluating Detection Models"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Learn how to interpret the evaluation results of detection models")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"As mentioned in the previous ",(0,n.yg)("a",{parentName:"p",href:"./"},"Evaluating Models")," section, once the evaluation process is complete, the ",(0,n.yg)("strong",{parentName:"p"},"Calculate")," button will become a ",(0,n.yg)("strong",{parentName:"p"},"View Results")," button. "),(0,n.yg)("p",null,"You can click the ",(0,n.yg)("strong",{parentName:"p"},"View Results")," button to see and interpret the evaluation results of your detection model. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:i(13965).A,width:"1792",height:"476"})),(0,n.yg)("p",null,"You will then be redirected to the ",(0,n.yg)("strong",{parentName:"p"},"Evaluation results")," page, where you can analyze the outcomes of the evaluation process."),(0,n.yg)("p",null,(0,n.yg)("img",{src:i(71460).A,width:"1772",height:"783"})),(0,n.yg)("h2",{id:"evaluation-highlights"},"Evaluation Highlights"),(0,n.yg)("p",null,"At the top of the page, you will find details about the evaluated model, including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Version of the model evaluated"),(0,n.yg)("li",{parentName:"ul"},"Evaluation date"),(0,n.yg)("li",{parentName:"ul"},"Number of concepts used for evaluation"),(0,n.yg)("li",{parentName:"ul"},"App name"),(0,n.yg)("li",{parentName:"ul"},"Dataset name"),(0,n.yg)("li",{parentName:"ul"},"Dataset version ID")),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Evaluation highlights")," section provides key numerical metrics that offer an overview of the model's prediction performance, allowing you to assess the model's effectiveness at a glance."),(0,n.yg)("br",null),(0,n.yg)("p",null,"Let\u2019s talk about the crucial metrics used in the evaluation of object detection models. "),(0,n.yg)("h2",{id:"intersection-over-union-iou"},"Intersection Over Union (IoU)"),(0,n.yg)("p",null,"Intersection over Union (IoU) measures the degree of overlap between two bounding boxes: the predicted bounding box and the ground truth bounding box. It is defined as the ratio of the area of overlap to the area of union between the two intersecting boxes."),(0,n.yg)("p",null,"It is calculated as: ",(0,n.yg)("inlineCode",{parentName:"p"},"Area of Overlap / Area of Union"),". "),(0,n.yg)("p",null,"Here is an image that demonstrates the IoU between a ground truth bounding box (in green) and a detected bounding box (in red):"),(0,n.yg)("p",null,(0,n.yg)("img",{src:i(15528).A,width:"464",height:"193"})),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Image source: ",(0,n.yg)("a",{parentName:"em",href:"https://github.com/rafaelpadilla/Object-Detection-Metrics"},"GitHub"))),(0,n.yg)("p",null,"The IoU score provides a numerical value indicating how well the model\u2019s predictions align with the actual object locations. A higher IoU score signifies a better match between the predicted and ground truth bounding boxes, indicating superior localization accuracy. The values range from 0 to 1, where 1 indicates perfect overlap, and 0 indicates no overlap. "),(0,n.yg)("p",null,"IoU can be used to determine the following concepts:"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"For each predicted bounding box, IoU is calculated with respect to the ground truth bounding boxes. A predicted bounding box is considered a true positive if its IoU with a ground truth bounding box exceeds a predefined threshold (such as 0.5). Otherwise, it is considered a false positive. ")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"True Positive")," \u2013 a correct detection where IoU is greater than the threshold."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"False Positive")," \u2013 an incorrect detection where IoU is less than the threshold. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"False Negative")," \u2013 occurs when a ground truth is not detected. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"True Negative")," \u2013 not applicable for object detection tasks, as it would represent a corrected misdetection. ")),(0,n.yg)("p",null,"Different IoU thresholds can be applied to assess the model's performance at varying levels of strictness. "),(0,n.yg)("p",null,"This is how the metrics are displayed on the ",(0,n.yg)("strong",{parentName:"p"},"Evaluation Summary")," table:"),(0,n.yg)("p",null,(0,n.yg)("img",{src:i(803).A,width:"1645",height:"580"})),(0,n.yg)("h2",{id:"precision"},"Precision"),(0,n.yg)("p",null,"Precision measures the accuracy of the model\u2019s positive predictions. It quantifies the model's ability to identify only the relevant objects, specifically assessing how well the model distinguishes true positives from false positives."),(0,n.yg)("p",null,"A high precision score implies that the model effectively avoids false positives, providing reliable positive predictions."),(0,n.yg)("p",null,"It is calculated as: ",(0,n.yg)("inlineCode",{parentName:"p"},"True Positives / (True Positives + False Positives (all detections))"),"."),(0,n.yg)("h2",{id:"recall"},"Recall"),(0,n.yg)("p",null,"Recall, also known as sensitivity or the true positive rate, measures a model's ability to correctly identify all relevant objects in the image (all ground truth bounding boxes). It specifically measures the model\u2019s completeness in detecting objects of interest."),(0,n.yg)("p",null,"A high recall score implies that the model effectively identifies most of the relevant objects in the data."),(0,n.yg)("p",null,"It is calculated as: ",(0,n.yg)("inlineCode",{parentName:"p"},"True Positives / (True Positives + False Negatives (all ground truths))"),"."),(0,n.yg)("h2",{id:"f1-score"},"F1 Score"),(0,n.yg)("p",null,"The F1 score offers an overall assessment of a model's ability to balance precision and recall. It is the harmonic mean of precision and recall, providing a balanced measure of a model's performance in relation to both false positives and false negatives."),(0,n.yg)("p",null,"It is calculated as: ",(0,n.yg)("inlineCode",{parentName:"p"},"2 * (Precision * Recall) / (Precision + Recall)")),(0,n.yg)("p",null,"The F1 score ranges from 0 to 1, with 1 being the best possible score. A high F1 score indicates that the model has both high precision and high recall, meaning it accurately identifies most positive instances in the dataset while minimizing false positives."),(0,n.yg)("h2",{id:"precision-recall-curve"},"Precision-Recall Curve"),(0,n.yg)("p",null,"The Precision-Recall (PR) curve is an effective tool for evaluating the performance of an object detector as the confidence threshold is varied. This curve is plotted for each object class and provides insights into the trade-off between precision and recall."),(0,n.yg)("p",null,"An object detector for a particular class is considered good if its precision remains high as recall increases. This means that even when varying the confidence threshold, both precision and recall values stay high. High precision indicates that the detector identifies only relevant objects (few to no false positives), while high recall means it finds all ground truth objects (few to no false negatives)."),(0,n.yg)("p",null,"On the other hand, a poor object detector increases the number of detected objects (resulting in more false positives and thus lower precision) to achieve high recall. This is why the PR curve typically starts with high precision values (y-axis) that decrease as recall (x-axis) increases. "),(0,n.yg)("p",null,"A good object detector will have a PR curve that maintains a high precision level across a broad range of recall values, indicating balanced performance in detecting relevant objects while minimizing false positives."),(0,n.yg)("p",null,"This is how the curve is displayed on the page:"),(0,n.yg)("p",null,(0,n.yg)("img",{src:i(70636).A,width:"1693",height:"788"})),(0,n.yg)("h2",{id:"average-precision-ap"},"Average Precision (AP)"),(0,n.yg)("p",null,"By varying the confidence score threshold for detections, different sets of true positives and false positives are obtained, which are used to plot the precision-recall curve. The area under this curve (AUC), which often exhibits a zigzag pattern, represents the Average Precision (AP) for each class. Higher AUC values indicate superior model performance."),(0,n.yg)("p",null,"AP is a single value that is crucial in capturing a harmonious balance between false positives and false negatives, which encapsulates the complexities of the model\u2019s performance."),(0,n.yg)("h2",{id:"mean-average-precision-map"},"Mean Average Precision (mAP)"),(0,n.yg)("p",null,"Mean Average Precision (mAP) extends the concept of Average Precision (AP). Instead of assessing the model\u2019s performance at a single confidence threshold, mAP calculates the average AP values across multiple IoU thresholds. "),(0,n.yg)("p",null,"It summarizes the detection and classification performance of an object detection model across all classes. Localization establishes the location of an instance (such as bounding box coordinates), and classification identifies what it is (such as a cat or a dog)."),(0,n.yg)("p",null,"mAP is a single number that represents the tradeoff between precision and recall in order to maximize the effect of both metrics. Higher mAP values indicate better overall performance."),(0,n.yg)("p",null,"This approach ensures that the model performs well not only with loose bounding boxes (low IoU) but also with tighter, more accurate detections (high IoU). By averaging the precision across various IoU thresholds, mAP provides a comprehensive performance profile."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"Learn how to use the Prediction Threshold slider tool ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations#prediction-threshold"},"here"),". ")))}p.isMDXComponent=!0},15528:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/evaluate_10-e5f7dc40ccf4e7240528b25f285f5a7e.png"},803:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/evaluate_13-77ebd51d660952d755c1d532fbbd0eb3.png"},70636:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/evaluate_14-58cb53bbbdf9407950c1c4b14181f87b.png"},13965:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/evaluate_6-70eddbcbdc778531de50a2c1c80fc498.png"},71460:(e,t,i)=>{i.d(t,{A:()=>a});const a=i.p+"assets/images/evaluate_7-9cac1b0571955d0d455928241926b4b8.png"}}]);