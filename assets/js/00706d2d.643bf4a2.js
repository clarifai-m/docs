"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7026],{26140:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var s=t(74848),a=t(28453);const n={description:"Learn how to interpret the evaluation results of classification models",sidebar_position:1},o="Evaluating Classification Models",r={id:"portal-guide/evaluate/interpreting-evaluations",title:"Evaluating Classification Models",description:"Learn how to interpret the evaluation results of classification models",source:"@site/docs/portal-guide/evaluate/interpreting-evaluations.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/interpreting-evaluations",permalink:"/portal-guide/evaluate/interpreting-evaluations",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/interpreting-evaluations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to interpret the evaluation results of classification models",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Evaluating Models",permalink:"/portal-guide/evaluate/"},next:{title:"Evaluating Detection Models",permalink:"/portal-guide/evaluate/detection"}},l={},c=[{value:"Evaluation Highlights",id:"evaluation-highlights",level:2},{value:"ROC/AUC (Accuracy Score)",id:"rocauc-accuracy-score",level:2},{value:"Total Labeled",id:"total-labeled",level:2},{value:"Total Predicted",id:"total-predicted",level:2},{value:"True Positives",id:"true-positives",level:2},{value:"False Negatives",id:"false-negatives",level:2},{value:"False Positives",id:"false-positives",level:2},{value:"Recall",id:"recall",level:2},{value:"Precision",id:"precision",level:2},{value:"F1",id:"f1",level:2},{value:"Prediction Threshold",id:"prediction-threshold",level:2},{value:"Choosing a Prediction Threshold",id:"choosing-a-prediction-threshold",level:3},{value:"Evaluation Summary",id:"evaluation-summary",level:2},{value:"Confusion Matrix",id:"confusion-matrix",level:2},{value:"Selection Details",id:"selection-details",level:2},{value:"Precision-Recall Curve",id:"precision-recall-curve",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"evaluating-classification-models",children:"Evaluating Classification Models"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Learn how to interpret the evaluation results of classification models"})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsxs)(i.p,{children:["As mentioned in the previous ",(0,s.jsx)(i.a,{href:"./",children:"Evaluating Models"})," section, once the evaluation process is complete, the ",(0,s.jsx)(i.strong,{children:"Calculate"})," button will become a ",(0,s.jsx)(i.strong,{children:"View Results"})," button."]}),"\n",(0,s.jsxs)(i.p,{children:["You can click the ",(0,s.jsx)(i.strong,{children:"View Results"})," button to see and interpret the evaluation results of your classification models."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(26368).A+"",width:"1799",height:"694"})}),"\n",(0,s.jsxs)(i.p,{children:["You will then be redirected to the ",(0,s.jsx)(i.strong,{children:"Evaluation results"})," page, where you can analyze the outcomes of the evaluation process."]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(85023).A+"",width:"1792",height:"822"})}),"\n",(0,s.jsx)(i.p,{children:"On the page, you will generally see results that represent either:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The average across K-splits; or"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The test set of a single split, which is approximately 1/K of your original training set."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Note that a single split will be capped at 1,000 inputs."}),"\n",(0,s.jsx)(i.p,{children:"Let's talk about how to interpret the evaluation results."}),"\n",(0,s.jsx)(i.h2,{id:"evaluation-highlights",children:"Evaluation Highlights"}),"\n",(0,s.jsx)(i.p,{children:"At the top of the page, you will find details about the evaluated model, including:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Version of the model evaluated"}),"\n",(0,s.jsx)(i.li,{children:"Evaluation date"}),"\n",(0,s.jsx)(i.li,{children:"Number of concepts used for evaluation"}),"\n",(0,s.jsx)(i.li,{children:"App name"}),"\n",(0,s.jsx)(i.li,{children:"Dataset name"}),"\n",(0,s.jsx)(i.li,{children:"Dataset version ID"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"Evaluation highlights"})," section provides key numerical metrics that offer an overview of the model's prediction performance, allowing you to assess the model's effectiveness at a glance."]}),"\n",(0,s.jsx)(i.h2,{id:"rocauc-accuracy-score",children:"ROC/AUC (Accuracy Score)"}),"\n",(0,s.jsx)(i.p,{children:"The ROC/AUC is a key metric for assessing the prediction performance of a classification model. ROC stands for Receiver Operating Characteristic, and AUC stands for Area Under the Curve. The AUC is defined as the macro average of the areas under the ROC curve for every concept, averaged across K-splits."}),"\n",(0,s.jsx)(i.p,{children:"This metric provides a concise summary of how well each model discriminates between classes or concepts, making it easier to compare models based on their ROC characteristics. It allows you to quickly identify models that excel in distinguishing between concepts, aiding in the selection of those with superior discrimination capabilities and better performance."}),"\n",(0,s.jsx)(i.p,{children:"A higher ROC/AUC score generally indicates better discrimination between classes or concepts. A score of 1 represents a perfect model, while a score of 0.5 represents a model with no discrimination ability, essentially performing no better than random chance. Generally, a score above 0.9 is considered excellent."}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsxs)(i.p,{children:["It's important to note that the ROC/AUC is not dependent on the specified ",(0,s.jsx)(i.a,{href:"#prediction-threshold",children:"prediction threshold"}),"."]})}),"\n",(0,s.jsx)(i.p,{children:"The ROC curve is generated by plotting the True Positive Rate (y-axis) against the False Positive Rate (x-axis) as you vary the threshold for assigning observations to a given class. The AUC is the area under this curve and is arguably the best way to summarize a model\u2019s performance in a single number."}),"\n",(0,s.jsx)(i.p,{children:"The AUC can be thought of as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation. This makes it a useful metric even for datasets with highly unbalanced classes."}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"We discourage users from making a final assessment of a classification model's accuracy based solely on the ROC/AUC score."})}),"\n",(0,s.jsx)(i.h2,{id:"total-labeled",children:"Total Labeled"}),"\n",(0,s.jsxs)(i.p,{children:["The total number of inputs that were originally labeled as the concept in the test set. Note that the Total Labeled value is not dependent on the ",(0,s.jsx)(i.a,{href:"#prediction-threshold",children:"prediction threshold"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["It is calculated as: ",(0,s.jsx)(i.code,{children:"True Positives (correct predictions) + False Negatives (incorrect predictions)"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"total-predicted",children:"Total Predicted"}),"\n",(0,s.jsx)(i.p,{children:"The total number of inputs that were predicted as the concept in the test set. This means these inputs were predicted as a concept with a probability greater than the prediction threshold value."}),"\n",(0,s.jsxs)(i.p,{children:["It is calculated as: ",(0,s.jsx)(i.code,{children:"True Positives (correct predictions) + False Positives (incorrect predictions)"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"true-positives",children:"True Positives"}),"\n",(0,s.jsx)(i.p,{children:"The number of inputs that were correctly predicted as the concept they were actually labeled. Also known as \u201chits.\u201d For example, these are the images that were labeled as \u201cdog\u201d and were predicted as \u201cdog.\u201d"}),"\n",(0,s.jsx)(i.h2,{id:"false-negatives",children:"False Negatives"}),"\n",(0,s.jsx)(i.p,{children:"The number of inputs that were not predicted as the concept they were actually labeled. Also known as \u201cmisses\u201d. For example, these are the images that were labeled as \u201cdog\u201d but were not predicted as \u201cdog.\u201d"}),"\n",(0,s.jsx)(i.h2,{id:"false-positives",children:"False Positives"}),"\n",(0,s.jsx)(i.p,{children:"The number of inputs that were predicted as the concept but were not labeled as the concept. Also known as \u201cfalse alarms.\u201d For example, these are the images that were predicted as \u201cdog\u201d but were not labeled as \u201cdog.\u201d"}),"\n",(0,s.jsx)(i.p,{children:"Here is a table that summarizes the above concepts:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(54650).A+"",width:"522",height:"246"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsxs)(i.em,{children:["Image source: ",(0,s.jsx)(i.a,{href:"https://www.researchgate.net/profile/Nittaya-Kerdprasop/publication/329526806/figure/fig1/AS:745215891623936@1554684722023/Example-of-confusion-matrix-True-Positive-TP-The-number-of-instances-that-a-model.ppm",children:"ResearchGate"})]})}),"\n",(0,s.jsx)(i.h2,{id:"recall",children:"Recall"}),"\n",(0,s.jsx)(i.p,{children:"Recall rate, also known as sensitivity or true positive rate, measures a model's ability to correctly identify all actual positive cases. It is the proportion of actual positive cases that were correctly predicted."}),"\n",(0,s.jsxs)(i.p,{children:["It is calculated as: ",(0,s.jsx)(i.code,{children:"True Positives / (True Positives + False Negatives)"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"precision",children:"Precision"}),"\n",(0,s.jsx)(i.p,{children:"Precision rate, also known as positive predictive value, measures the accuracy of the positive predictions of a model. It is the proportion of the predicted positive cases that are actually positive."}),"\n",(0,s.jsxs)(i.p,{children:["It is calculated as: ",(0,s.jsx)(i.code,{children:"True Positives / (True Positives + False Positives)"}),"."]}),"\n",(0,s.jsx)(i.h2,{id:"f1",children:"F1"}),"\n",(0,s.jsx)(i.p,{children:"The F1 score provides an overall assessment of a model's ability to balance precision and recall. It is the harmonic mean of precision and recall, offering a balanced measure of a model's performance concerning both false positives and false negatives."}),"\n",(0,s.jsxs)(i.p,{children:["It is calculated as: ",(0,s.jsx)(i.code,{children:"2 * (Precision * Recall) / (Precision + Recall)"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"The F1 score ranges from 0 to 1, with 1 being the best possible score. A high F1 score implies that the model has both high precision and high recall, meaning it correctly identifies most positive instances in the dataset while minimizing false positives."}),"\n",(0,s.jsx)(i.p,{children:"You can use the F1 score to determine how well your model aligns with the desired trade-off between false positives and false negatives, depending on the specific application context."}),"\n",(0,s.jsx)(i.h2,{id:"prediction-threshold",children:"Prediction Threshold"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(31683).A+"",width:"1798",height:"538"})}),"\n",(0,s.jsx)(i.p,{children:'The probability threshold determines the model\'s predictions. The default threshold is 0.5. An input is classified as a concept (e.g., "dog") only if its prediction probability exceeds the threshold. You can adjust the threshold slider based on how strict you want the classification to be.'}),"\n",(0,s.jsx)(i.p,{children:'For example, if the threshold is set to 0.5 and the model predicts that the probability of an image being a "dog" is 0.7, the image will be classified as a "dog." However, if you increase the threshold to 0.8, the same image will not be classified as a "dog" since 0.7 is below the new threshold. This adjustment can help reduce False Positives but might increase False Negatives.'}),"\n",(0,s.jsx)(i.admonition,{title:"important",type:"warning",children:(0,s.jsx)(i.p,{children:"All binary prediction metrics \u2014 such as True Positives, False Negatives, False Positives, Total Predicted, Recall Rate, and Precision Rate \u2014 depend on this threshold. Adjusting the threshold slider will change the values of these metrics."})}),"\n",(0,s.jsx)(i.h3,{id:"choosing-a-prediction-threshold",children:"Choosing a Prediction Threshold"}),"\n",(0,s.jsx)(i.p,{children:'A threshold is the "sweet spot" numerical score that aligns with your prediction objective for recall and/or precision. In practice, there are multiple ways to define "accuracy" in machine learning, and the threshold is the value used to gauge our preferences.'}),"\n",(0,s.jsx)(i.p,{children:"When setting your classification threshold for predicting out-of-sample data, it becomes a business decision. You must decide whether to minimize the False Positive Rate or maximize the True Positive Rate."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"If your model predicts concepts that lead to high-stakes decisions, such as diagnosing a disease or ensuring safety through moderation, you might consider a few false positives as acceptable (better safe than sorry). In this case, you would prioritize high precision."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"If your model predicts concepts that lead to suggestions or flexible outcomes, you might prioritize a high recall rate to allow for exploration and coverage."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"In both scenarios, it is crucial to train and test your model with data that accurately reflects its intended use case."}),"\n",(0,s.jsx)(i.p,{children:"After determining the goal of your model (high precision or high recall), you can use unseen test data to evaluate how well your model meets the established standards."}),"\n",(0,s.jsx)(i.h2,{id:"evaluation-summary",children:"Evaluation Summary"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"Evaluation Summary"})," table provides a comprehensive overview of the numerical evaluation results for each concept. For every concept, you can review the metrics that indicate its performance."]}),"\n",(0,s.jsx)(i.p,{children:"This table enables you to gauge the overall prediction performance of your model and identify the high-performing and low-performing concepts."}),"\n",(0,s.jsx)(i.h2,{id:"confusion-matrix",children:"Confusion Matrix"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(13393).A+"",width:"1349",height:"723"})}),"\n",(0,s.jsx)(i.p,{children:"A confusion matrix is a table used to visualize the performance of a model. It summarizes the model's predictions on a set of data by comparing the actual labels with the predicted labels, helping to identify where the model gets things right or wrong."}),"\n",(0,s.jsx)(i.p,{children:"The confusion matrix is typically presented in a tabular format with the Y-axis representing the Actual Concepts and the X-axis representing the Predicted Concepts. The cells display the average prediction probabilities for each concept and for groups of images labeled as a certain concept."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Diagonal cells:"})," Show the average probability for true positives (correctly predicted inputs)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Off-diagonal cells:"})," Show the average probability for false positives, false negatives, and other misclassifications."]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:'Each row represents a subset of the test set labeled as a specific concept (e.g., "dog"). As you move across a row, each cell represents the average prediction probability for each concept (indicated by the column name) for all inputs in that subset across all K-splits.'}),"\n",(0,s.jsx)(i.p,{children:"The confusion matrix helps you assess the effectiveness of a model for a particular task. It provides insights into:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Accuracy:"})," Overall, how often is the model correct?"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Misclassification Rate:"})," Overall, how often is the model incorrect?"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"True Positive Rate (Recall):"})," When the actual label is positive, how often does the model predict positive?"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"False Positive Rate:"})," When the actual label is negative, how often does the model predict positive?"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Specificity:"})," When the actual label is negative, how often does the model predict negative?"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Precision:"})," When the model predicts positive, how often is it correct?"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Prevalence:"})," How often does the positive condition actually occur in the sample?"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"selection-details",children:"Selection Details"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(83226).A+"",width:"1363",height:"789"})}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.strong,{children:"Selection Details"})," table allows you to analyze your inputs by showing an image of the input alongside the prediction probabilities for each specific concept. After selecting an actual concept used for labeling your input and a concept predicted during the evaluation process, the table displays relevant information to facilitate analysis."]}),"\n",(0,s.jsx)(i.p,{children:"To identify and correct biases in your model's predictions, you can hone in on the False Positives and False Negatives. This can help you detect any biases in how the model is predicting and correct any inputs that are mislabeled."}),"\n",(0,s.jsx)(i.p,{children:"Note that the prediction probabilities in this table may differ from your actual model's probabilities. This is because all evaluation results are based on the new model built for evaluation purposes during the cross-validation process."}),"\n",(0,s.jsx)(i.h2,{id:"precision-recall-curve",children:"Precision-Recall Curve"}),"\n",(0,s.jsx)(i.p,{children:"A Precision-Recall Curve (PR curve) is a graphical representation that assesses the performance of a binary classification model across various thresholds. It plots the trade-off between precision (positive predictive value) and recall (sensitivity) of each concept used to train your model."}),"\n",(0,s.jsx)(i.p,{children:"Typically, it provides insights into how well a model balances precision and recall across different decision thresholds, offering a nuanced view of its performance beyond traditional metrics like accuracy."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:t(23286).A+"",width:"1697",height:"789"})}),"\n",(0,s.jsx)(i.p,{children:"The PR curve is created by plotting precision on the y-axis and recall on the x-axis for different thresholds used by the model. A higher area under the PR curve (AUC-PR) indicates better performance of the model, especially when dealing with imbalanced datasets where one class (typically the negative class) is much more frequent than the other."}),"\n",(0,s.jsxs)(i.admonition,{title:"PR Curve",type:"warning",children:[(0,s.jsx)(i.p,{children:"When a model has high recall but low precision, it correctly identifies most of the positive samples but also generates many false positives (i.e., it incorrectly classifies many negative samples as positive). On the other hand, when a model has high precision but low recall, it accurately classifies samples as positive but may miss many actual positive samples, resulting in fewer positive detections overall."}),(0,s.jsx)(i.p,{children:"Because both precision and recall are important, the precision-recall curve is used to illustrate the trade-off between these metrics at different threshold levels. This curve helps in selecting the optimal threshold to balance and maximize both precision and recall, thereby improving the overall performance of the model."})]}),"\n",(0,s.jsx)(i.admonition,{title:"Learn More",type:"tip",children:(0,s.jsxs)(i.p,{children:["Click ",(0,s.jsx)(i.a,{href:"https://docs.clarifai.com/tutorials/how-to-evaluate-an-image-classification-model",children:"here"})," to learn more about how to evaluate an image classification model."]})})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},13393:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/evaluate_11-edbfe324882740f6d73ade96c543dba5.png"},83226:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/evaluate_12-5dd8ba20b8109f5393c95324b148f3ef.png"},54650:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/evaluate_15-31785bb6c0df25b40cf00f0315562e0e.bin"},26368:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/evaluate_3-678d81d05914aad92f50e6ddf92c6b4d.png"},85023:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/evaluate_4-53369d52ad26dc5d0446029fa3a39c63.png"},23286:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/evaluate_5-d1d7dedb0c4ca9be804307e37c65418a.png"},31683:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/evaluate_8-5263552f7b88ed16422c6bc2a441f1a8.png"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>r});var s=t(96540);const a={},n=s.createContext(a);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);