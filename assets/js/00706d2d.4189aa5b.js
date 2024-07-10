"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7026],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var i=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=i.createContext({}),c=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,g=d["".concat(r,".").concat(u)]||d[u]||h[u]||s;return a?i.createElement(g,n(n({ref:t},p),{},{components:a})):i.createElement(g,n({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,n=new Array(s);n[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<s;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=a(58168),o=(a(96540),a(15680));const s={description:"Learn how to interpret the evaluation results of classification models",sidebar_position:1},n="Evaluating Classification Models",l={unversionedId:"portal-guide/evaluate/interpreting-evaluations",id:"portal-guide/evaluate/interpreting-evaluations",title:"Evaluating Classification Models",description:"Learn how to interpret the evaluation results of classification models",source:"@site/docs/portal-guide/evaluate/interpreting-evaluations.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/interpreting-evaluations",permalink:"/portal-guide/evaluate/interpreting-evaluations",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/interpreting-evaluations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to interpret the evaluation results of classification models",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Evaluating Models",permalink:"/portal-guide/evaluate/"},next:{title:"Evaluating Detection Models",permalink:"/portal-guide/evaluate/detection"}},r={},c=[{value:"Evaluation Highlights",id:"evaluation-highlights",level:2},{value:"ROC/AUC (Accuracy Score)",id:"rocauc-accuracy-score",level:2},{value:"Total Labeled",id:"total-labeled",level:2},{value:"Total Predicted",id:"total-predicted",level:2},{value:"True Positives",id:"true-positives",level:2},{value:"False Negatives",id:"false-negatives",level:2},{value:"False Positives",id:"false-positives",level:2},{value:"Recall",id:"recall",level:2},{value:"Precision",id:"precision",level:2},{value:"F1",id:"f1",level:2},{value:"Prediction Threshold",id:"prediction-threshold",level:2},{value:"Choosing a Prediction Threshold",id:"choosing-a-prediction-threshold",level:3},{value:"Evaluation Summary",id:"evaluation-summary",level:2},{value:"Confusion Matrix",id:"confusion-matrix",level:2},{value:"Selection Details",id:"selection-details",level:2},{value:"Precision-Recall Curve",id:"precision-recall-curve",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...s}=e;return(0,o.yg)(d,(0,i.A)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"evaluating-classification-models"},"Evaluating Classification Models"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Learn how to interpret the evaluation results of classification models")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"As mentioned in the previous ",(0,o.yg)("a",{parentName:"p",href:"./"},"Evaluating Models")," section, once the evaluation process is complete, the ",(0,o.yg)("strong",{parentName:"p"},"Calculate")," button will become a ",(0,o.yg)("strong",{parentName:"p"},"View Results")," button. "),(0,o.yg)("p",null,"You can click the ",(0,o.yg)("strong",{parentName:"p"},"View Results")," button to see and interpret the evaluation results of your classification models. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(26368).A,width:"1799",height:"694"})),(0,o.yg)("p",null,"You will then be redirected to the ",(0,o.yg)("strong",{parentName:"p"},"Evaluation results")," page, where you can analyze the outcomes of the evaluation process."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(85023).A,width:"1792",height:"822"})),(0,o.yg)("p",null,"On the page, you will generally see results that represent either:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The average across K-splits; or")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The test set of a single split, which is approximately 1/K of your original training set."))),(0,o.yg)("p",null,"Note that a single split will be capped at 1,000 inputs."),(0,o.yg)("p",null,"Let's talk about how to interpret the evaluation results. "),(0,o.yg)("h2",{id:"evaluation-highlights"},"Evaluation Highlights"),(0,o.yg)("p",null,"At the top of the page, you will find details about the evaluated model, including:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Version of the model evaluated"),(0,o.yg)("li",{parentName:"ul"},"Evaluation date"),(0,o.yg)("li",{parentName:"ul"},"Number of concepts used for evaluation"),(0,o.yg)("li",{parentName:"ul"},"App name"),(0,o.yg)("li",{parentName:"ul"},"Dataset name"),(0,o.yg)("li",{parentName:"ul"},"Dataset version ID")),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"Evaluation highlights")," section provides key numerical metrics that offer an overview of the model's prediction performance, allowing you to assess the model's effectiveness at a glance."),(0,o.yg)("h2",{id:"rocauc-accuracy-score"},"ROC/AUC (Accuracy Score)"),(0,o.yg)("p",null,"The ROC/AUC is a key metric for assessing the prediction performance of a classification model. ROC stands for Receiver Operating Characteristic, and AUC stands for Area Under the Curve. The AUC is defined as the macro average of the areas under the ROC curve for every concept, averaged across K-splits."),(0,o.yg)("p",null,"This metric provides a concise summary of how well each model discriminates between classes or concepts, making it easier to compare models based on their ROC characteristics. It allows you to quickly identify models that excel in distinguishing between concepts, aiding in the selection of those with superior discrimination capabilities and better performance."),(0,o.yg)("p",null,"A higher ROC/AUC score generally indicates better discrimination between classes or concepts. A score of 1 represents a perfect model, while a score of 0.5 represents a model with no discrimination ability, essentially performing no better than random chance. Generally, a score above 0.9 is considered excellent."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"It's important to note that the ROC/AUC is not dependent on the specified ",(0,o.yg)("a",{parentName:"p",href:"#prediction-threshold"},"prediction threshold"),". ")),(0,o.yg)("p",null,"The ROC curve is generated by plotting the True Positive Rate (y-axis) against the False Positive Rate (x-axis) as you vary the threshold for assigning observations to a given class. The AUC is the area under this curve and is arguably the best way to summarize a model\u2019s performance in a single number."),(0,o.yg)("p",null,"The AUC can be thought of as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation. This makes it a useful metric even for datasets with highly unbalanced classes."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"We discourage users from making a final assessment of a classification model's accuracy based solely on the ROC/AUC score.")),(0,o.yg)("h2",{id:"total-labeled"},"Total Labeled"),(0,o.yg)("p",null,"The total number of inputs that were originally labeled as the concept in the test set. Note that the Total Labeled value is not dependent on the ",(0,o.yg)("a",{parentName:"p",href:"#prediction-threshold"},"prediction threshold"),"."),(0,o.yg)("p",null,"It is calculated as: ",(0,o.yg)("inlineCode",{parentName:"p"},"True Positives (correct predictions) + False Negatives (incorrect predictions)"),". "),(0,o.yg)("h2",{id:"total-predicted"},"Total Predicted"),(0,o.yg)("p",null,"The total number of inputs that were predicted as the concept in the test set. This means these inputs were predicted as a concept with a probability greater than the prediction threshold value."),(0,o.yg)("p",null,"It is calculated as: ",(0,o.yg)("inlineCode",{parentName:"p"},"True Positives (correct predictions) + False Positives (incorrect predictions)"),"."),(0,o.yg)("h2",{id:"true-positives"},"True Positives"),(0,o.yg)("p",null,"The number of inputs that were correctly predicted as the concept they were actually labeled. Also known as \u201chits.\u201d For example, these are the images that were labeled as \u201cdog\u201d and were predicted as \u201cdog.\u201d"),(0,o.yg)("h2",{id:"false-negatives"},"False Negatives"),(0,o.yg)("p",null,"The number of inputs that were not predicted as the concept they were actually labeled. Also known as \u201cmisses\u201d. For example, these are the images that were labeled as \u201cdog\u201d but were not predicted as \u201cdog.\u201d "),(0,o.yg)("h2",{id:"false-positives"},"False Positives"),(0,o.yg)("p",null,"The number of inputs that were predicted as the concept but were not labeled as the concept. Also known as \u201cfalse alarms.\u201d For example, these are the images that were predicted as \u201cdog\u201d but were not labeled as \u201cdog.\u201d"),(0,o.yg)("p",null,"Here is a table that summarizes the above concepts:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(54650).A,width:"522",height:"246"})," "),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"Image source: ",(0,o.yg)("a",{parentName:"em",href:"https://www.researchgate.net/profile/Nittaya-Kerdprasop/publication/329526806/figure/fig1/AS:745215891623936@1554684722023/Example-of-confusion-matrix-True-Positive-TP-The-number-of-instances-that-a-model.ppm"},"ResearchGate"))),(0,o.yg)("h2",{id:"recall"},"Recall"),(0,o.yg)("p",null,"Recall rate, also known as sensitivity or true positive rate, measures a model's ability to correctly identify all actual positive cases. It is the proportion of actual positive cases that were correctly predicted."),(0,o.yg)("p",null,"It is calculated as: ",(0,o.yg)("inlineCode",{parentName:"p"},"True Positives / (True Positives + False Negatives)"),". "),(0,o.yg)("h2",{id:"precision"},"Precision"),(0,o.yg)("p",null,"Precision rate, also known as positive predictive value, measures the accuracy of the positive predictions of a model. It is the proportion of the predicted positive cases that are actually positive."),(0,o.yg)("p",null,"It is calculated as: ",(0,o.yg)("inlineCode",{parentName:"p"},"True Positives / (True Positives + False Positives)"),". "),(0,o.yg)("h2",{id:"f1"},"F1"),(0,o.yg)("p",null,"The F1 score provides an overall assessment of a model's ability to balance precision and recall. It is the harmonic mean of precision and recall, offering a balanced measure of a model's performance concerning both false positives and false negatives."),(0,o.yg)("p",null,"It is calculated as: ",(0,o.yg)("inlineCode",{parentName:"p"},"2 * (Precision * Recall) / (Precision + Recall)"),". "),(0,o.yg)("p",null,"The F1 score ranges from 0 to 1, with 1 being the best possible score. A high F1 score implies that the model has both high precision and high recall, meaning it correctly identifies most positive instances in the dataset while minimizing false positives."),(0,o.yg)("p",null,"You can use the F1 score to determine how well your model aligns with the desired trade-off between false positives and false negatives, depending on the specific application context."),(0,o.yg)("h2",{id:"prediction-threshold"},"Prediction Threshold"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(31683).A,width:"1798",height:"538"})," "),(0,o.yg)("p",null,'The probability threshold determines the model\'s predictions. The default threshold is 0.5. An input is classified as a concept (e.g., "dog") only if its prediction probability exceeds the threshold. You can adjust the threshold slider based on how strict you want the classification to be.'),(0,o.yg)("p",null,'For example, if the threshold is set to 0.5 and the model predicts that the probability of an image being a "dog" is 0.7, the image will be classified as a "dog." However, if you increase the threshold to 0.8, the same image will not be classified as a "dog" since 0.7 is below the new threshold. This adjustment can help reduce False Positives but might increase False Negatives.'),(0,o.yg)("admonition",{title:"important",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"All binary prediction metrics \u2014 such as True Positives, False Negatives, False Positives, Total Predicted, Recall Rate, and Precision Rate \u2014 depend on this threshold. Adjusting the threshold slider will change the values of these metrics.")),(0,o.yg)("h3",{id:"choosing-a-prediction-threshold"},"Choosing a Prediction Threshold"),(0,o.yg)("p",null,'A threshold is the "sweet spot" numerical score that aligns with your prediction objective for recall and/or precision. In practice, there are multiple ways to define "accuracy" in machine learning, and the threshold is the value used to gauge our preferences.'),(0,o.yg)("p",null,"When setting your classification threshold for predicting out-of-sample data, it becomes a business decision. You must decide whether to minimize the False Positive Rate or maximize the True Positive Rate."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If your model predicts concepts that lead to high-stakes decisions, such as diagnosing a disease or ensuring safety through moderation, you might consider a few false positives as acceptable (better safe than sorry). In this case, you would prioritize high precision."),(0,o.yg)("li",{parentName:"ul"},"If your model predicts concepts that lead to suggestions or flexible outcomes, you might prioritize a high recall rate to allow for exploration and coverage.")),(0,o.yg)("p",null,"In both scenarios, it is crucial to train and test your model with data that accurately reflects its intended use case."),(0,o.yg)("p",null,"After determining the goal of your model (high precision or high recall), you can use unseen test data to evaluate how well your model meets the established standards."),(0,o.yg)("h2",{id:"evaluation-summary"},"Evaluation Summary"),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"Evaluation Summary")," table provides a comprehensive overview of the numerical evaluation results for each concept. For every concept, you can review the metrics that indicate its performance."),(0,o.yg)("p",null,"This table enables you to gauge the overall prediction performance of your model and identify the high-performing and low-performing concepts."),(0,o.yg)("h2",{id:"confusion-matrix"},"Confusion Matrix"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(13393).A,width:"1349",height:"723"})," "),(0,o.yg)("p",null,"A confusion matrix is a table used to visualize the performance of a model. It summarizes the model's predictions on a set of data by comparing the actual labels with the predicted labels, helping to identify where the model gets things right or wrong."),(0,o.yg)("p",null,"The confusion matrix is typically presented in a tabular format with the Y-axis representing the Actual Concepts and the X-axis representing the Predicted Concepts. The cells display the average prediction probabilities for each concept and for groups of images labeled as a certain concept."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Diagonal cells:")," Show the average probability for true positives (correctly predicted inputs)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Off-diagonal cells:")," Show the average probability for false positives, false negatives, and other misclassifications.")),(0,o.yg)("p",null,'Each row represents a subset of the test set labeled as a specific concept (e.g., "dog"). As you move across a row, each cell represents the average prediction probability for each concept (indicated by the column name) for all inputs in that subset across all K-splits.'),(0,o.yg)("p",null,"The confusion matrix helps you assess the effectiveness of a model for a particular task. It provides insights into:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Accuracy:")," Overall, how often is the model correct?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Misclassification Rate:")," Overall, how often is the model incorrect?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"True Positive Rate (Recall):")," When the actual label is positive, how often does the model predict positive?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"False Positive Rate:")," When the actual label is negative, how often does the model predict positive?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Specificity:")," When the actual label is negative, how often does the model predict negative?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Precision:")," When the model predicts positive, how often is it correct?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Prevalence:")," How often does the positive condition actually occur in the sample?")),(0,o.yg)("h2",{id:"selection-details"},"Selection Details"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(83226).A,width:"1363",height:"789"})," "),(0,o.yg)("p",null,"The ",(0,o.yg)("strong",{parentName:"p"},"Selection Details")," table allows you to analyze your inputs by showing an image of the input alongside the prediction probabilities for each specific concept. After selecting an actual concept used for labeling your input and a concept predicted during the evaluation process, the table displays relevant information to facilitate analysis."),(0,o.yg)("p",null,"To identify and correct biases in your model's predictions, you can hone in on the False Positives and False Negatives. This can help you detect any biases in how the model is predicting and correct any inputs that are mislabeled."),(0,o.yg)("p",null,"Note that the prediction probabilities in this table may differ from your actual model's probabilities. This is because all evaluation results are based on the new model built for evaluation purposes during the cross-validation process."),(0,o.yg)("h2",{id:"precision-recall-curve"},"Precision-Recall Curve"),(0,o.yg)("p",null,"A Precision-Recall Curve (PR curve) is a graphical representation that assesses the performance of a binary classification model across various thresholds. It plots the trade-off between precision (positive predictive value) and recall (sensitivity) of each concept used to train your model. "),(0,o.yg)("p",null,"Typically, it provides insights into how well a model balances precision and recall across different decision thresholds, offering a nuanced view of its performance beyond traditional metrics like accuracy."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(23286).A,width:"1697",height:"789"})," "),(0,o.yg)("p",null,"The PR curve is created by plotting precision on the y-axis and recall on the x-axis for different thresholds used by the model. A higher area under the PR curve (AUC-PR) indicates better performance of the model, especially when dealing with imbalanced datasets where one class (typically the negative class) is much more frequent than the other."),(0,o.yg)("admonition",{title:"PR Curve",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"When a model has high recall but low precision, it correctly identifies most of the positive samples but also generates many false positives (i.e., it incorrectly classifies many negative samples as positive). On the other hand, when a model has high precision but low recall, it accurately classifies samples as positive but may miss many actual positive samples, resulting in fewer positive detections overall."),(0,o.yg)("p",{parentName:"admonition"},"Because both precision and recall are important, the precision-recall curve is used to illustrate the trade-off between these metrics at different threshold levels. This curve helps in selecting the optimal threshold to balance and maximize both precision and recall, thereby improving the overall performance of the model.")),(0,o.yg)("admonition",{title:"Learn More",type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Click ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/tutorials/how-to-evaluate-an-image-classification-model"},"here")," to learn more about how to evaluate an image classification model. ")))}h.isMDXComponent=!0},13393:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/evaluate_11-edbfe324882740f6d73ade96c543dba5.png"},83226:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/evaluate_12-5dd8ba20b8109f5393c95324b148f3ef.png"},54650:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/evaluate_15-31785bb6c0df25b40cf00f0315562e0e.bin"},26368:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/evaluate_3-678d81d05914aad92f50e6ddf92c6b4d.png"},85023:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/evaluate_4-53369d52ad26dc5d0446029fa3a39c63.png"},23286:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/evaluate_5-d1d7dedb0c4ca9be804307e37c65418a.png"},31683:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/evaluate_8-5263552f7b88ed16422c6bc2a441f1a8.png"}}]);