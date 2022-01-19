"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7955],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return a?o.createElement(m,r(r({ref:t},d),{},{components:a})):o.createElement(m,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2861:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=a(7462),i=a(3366),n=(a(7294),a(3905)),r=["components"],s={description:"Learn to interpret model evaluations.",sidebar_position:1},l="Interpreting Evaluations",c={unversionedId:"api-guide/evaluate/interpreting-evaluations",id:"api-guide/evaluate/interpreting-evaluations",title:"Interpreting Evaluations",description:"Learn to interpret model evaluations.",source:"@site/docs/api-guide/evaluate/interpreting-evaluations.md",sourceDirName:"api-guide/evaluate",slug:"/api-guide/evaluate/interpreting-evaluations",permalink:"/api-guide/evaluate/interpreting-evaluations",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/evaluate/interpreting-evaluations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn to interpret model evaluations.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Evaluating Models",permalink:"/api-guide/evaluate/"},next:{title:"Improving Your Model",permalink:"/api-guide/evaluate/improving-your-model"}},d=[{value:"Model Analysis",id:"model-analysis",children:[{value:"Model Accuracy Score",id:"model-accuracy-score",children:[],level:3}],level:2},{value:"Concept Analysis",id:"concept-analysis",children:[{value:"Prediction Threshold",id:"prediction-threshold",children:[{value:"Choosing a Prediction Threshold",id:"choosing-a-prediction-threshold",children:[],level:4}],level:3},{value:"Evaluation Summary",id:"evaluation-summary",children:[{value:"K-Split Average",id:"k-split-average",children:[],level:4},{value:"1-Split",id:"1-split",children:[],level:4}],level:3},{value:"Concept by Concept Results",id:"concept-by-concept-results",children:[{value:"Counts (1-Split)",id:"counts-1-split",children:[],level:4},{value:"Probabilities (K-Split Average)",id:"probabilities-k-split-average",children:[],level:4},{value:"Co-occurrence",id:"co-occurrence",children:[],level:4},{value:"Noise",id:"noise",children:[],level:4}],level:3}],level:2},{value:"Input Analysis",id:"input-analysis",children:[{value:"Selection Details",id:"selection-details",children:[],level:3},{value:"Expanded Selection Details",id:"expanded-selection-details",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"interpreting-evaluations"},"Interpreting Evaluations"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(128).Z})),(0,n.kt)("p",null,"Once the Model Evaluation is complete, you\u2019ll be able to view the evaluation results in Portal."),(0,n.kt)("p",null,"We suggest that you start by looking at the Concept by Concept Probabilities Results and the Summary Table to get a sense of the overall model prediction performance and identify the high-performing and low-performing concepts. Afterwards, hone-in on the Selection Details of the False Positives and False Negatives to identify any biases, if any, in how the model is predicting, and to correct any inputs that are mislabeled"),(0,n.kt)("p",null,"Generally, you\u2019ll be looking at results that represent either a",")"," the average across K splits, or b",")"," the test set of a single split, which is about 1/K of your original training set. Note that a single split will be capped at 1,000 inputs."),(0,n.kt)("h2",{id:"model-analysis"},"Model Analysis"),(0,n.kt)("h3",{id:"model-accuracy-score"},"Model Accuracy Score"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"model eval results",src:a(7699).Z})),(0,n.kt)("p",null,"Model Accuracy Score is the highest level metric for your model\u2019s prediction performance. It is defined as the macro average of the areas under the receiver operating characteristic curve for every concept. This metric does not depend on the Prediction Threshold. This metric is an average across K splits."),(0,n.kt)("p",null,"A score of 1 represents a perfect model; a score of .5 represents a worthless model. As a general rule of thumb, a score above .9 is considered good."),(0,n.kt)("p",null,"Note that we discourage users from making a final assessment of the model accuracy based on the Model Accuracy Score only."),(0,n.kt)("h2",{id:"concept-analysis"},"Concept Analysis"),(0,n.kt)("h3",{id:"prediction-threshold"},"Prediction Threshold"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"prediction threshold",src:a(1708).Z})),(0,n.kt)("p",null,"Probability threshold determines the model\u2019s predictions. The default threshold is .5. The input is predicted as ","(","i.e. \u201ccounts\u201d as",")"," as a concept, such as \u201cdog\u201d, only if the prediction probability for \u201cdog\u201d is higher than the set threshold, for example, 0.5. You can adjust the threshold depending on how \u2018strict\u2019 you want your classification to be."),(0,n.kt)("p",null,"All prediction binary metrics, such as True Positives, False Negatives, and False Positives, and Total Predicted, Recall Rate, Precision Rate, depend on this threshold."),(0,n.kt)("h4",{id:"choosing-a-prediction-threshold"},"Choosing a Prediction Threshold"),(0,n.kt)("p",null,"A threshold is the \u201csweet spot\u201d numerical score that is dependent on the objective of your prediction for ",(0,n.kt)("em",{parentName:"p"},"recall")," and/or ",(0,n.kt)("em",{parentName:"p"},"precision"),". In practice, there are multiple ways to define \u201caccuracy\u201d when it comes to machine learning, and the threshold is the number we use to gauge for our preferences."),(0,n.kt)("p",null,"You might be wondering how you should set your classification threshold, once you are ready to use it to predict out-of-sample data. This is more of a business decision, in that you have to decide whether you would rather minimize your False Positive Rate or maximize your True Positive Rate."),(0,n.kt)("p",null,"If our model is used to predict concepts that lead to a high-stakes decision, like a diagnosis of a disease or moderation for safety, we might consider a few false positives as forgivable ","(","better to be safe than sorry!",")",". In this case, we might want high precision."),(0,n.kt)("p",null,"If our model is used to predict concepts that lead to a suggestion or flexible outcome, we might want high recall so that the model can allow for exploration."),(0,n.kt)("p",null,"In either scenario, we will want to make sure our model is trained and tested with data that best reflects is use-case."),(0,n.kt)("p",null,"Once we have determined the goal of our model ","(","high precision or high recall",")",", we can use test data that our model has never seen before to evaluate how well our model predicts according to the standards we have set."),(0,n.kt)("h3",{id:"evaluation-summary"},"Evaluation Summary"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"model eval summary",src:a(3880).Z})),(0,n.kt)("p",null,"This table summarizes the numerical evaluation results for every concept. For every concept, it calculates:"),(0,n.kt)("h4",{id:"k-split-average"},"K-Split Average"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ROC AUC ","(","Concept Accuracy Score",")"),": The concept\u2019s prediction performance score, defined by the area under the Receiver Operating Characteristic curve. This score gives us an idea of how well we have separated our different classes, or concepts."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8953).Z})),(0,n.kt)("p",null,"A score of 1 represents a perfect model; a score of .5 represents a poor model. As a general rule of thumb, a score above .9 is considered good. Note: ROC AUC is not dependent on the prediction threshold."),(0,n.kt)("p",null,"ROC AUC is generated by plotting the True Positive Rate ","(","y-axis",")"," against the False Positive Rate ","(","x-axis",")"," as you vary the threshold for assigning observations to a given class. The AUC, or Area Under the Curve of these points is ","(","arguably",")"," the best way to summarize a model\u2019s performance in a single number."),(0,n.kt)("p",null,"You can think of AUC as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation, and thus it is a useful metric even for datasets with highly unbalanced classes. A score of 1 represents a perfect model; a score of .5 represents a model that would be no better than random guessing, and this wouldn\u2019t be suitable for predictions and should be re-trained. Note: ROC AUC is not dependent on the prediction threshold."),(0,n.kt)("h4",{id:"1-split"},"1-Split"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Total Labeled:")," Total number of inputs that were originally labeled as the concept in the test set. Total Labeled is the sum of True Positives ","(","correct",")"," and False Negatives ","(","incorrect",")",". Note: Total Labeled is not dependent on the prediction threshold."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Total Predicted:")," Total number of inputs that were predicted as the concept in the test set. This means these inputs were predicted as a concept with probability greater than the prediction threshold value. Total Predicted is the sum of True Positives ","(","correct",")"," and False Positives ","(","incorrect",")","."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"True Positives ","(","TP",")",":")," Number of inputs that were correctly predicted as the concept they were actually labeled. Also known as \u201chits\u201d. ","(","E.g. These are the images that were labeled as \u201cdog\u201d and were predicted as \u201cdog\u201d",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"False Negatives ","(","FN",")",":")," Number of inputs that were not predicted as the concept they were actually labeled. Also known as \u201cmisses\u201d. ","(","E.g. These are the images that were labeled as \u201cdog\u201d but were not predicted as \u201cdog\u201d",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"False Positives ","(","FP",")",":")," Number of inputs that were predicted as the concept, but they were not labeled as the concept. Also known as \u201cfalse alarms\u201d. ","(","E.g. These are the images that were predicted as \u201cdog\u201d but were not labeled as \u201cdog\u201d",")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Recall Rate:")," proportion of the images labeled as the concept that were predicted as the concept. It is calculated as True Positives divided by Total Labeled. Also known as \u201csensitivity\u201d or \u201ctrue positive rate\u201d."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Precision Rate:")," proportion of the images predicted as a concept that had been actually labeled as the concept. It is calculated as True Positives divided by Total Predicted. Also known as \u201cpositive predictive value\u201d."),(0,n.kt)("h3",{id:"concept-by-concept-results"},"Concept by Concept Results"),(0,n.kt)("p",null,"A concept-by-concept matrix is a graphic flattening of data to show what has been labeled for a concept. This tool is another way of visualizing the performance of a model. It allows us to review where we see true positives, or correctly predicted inputs ","(","the diagonal row",")",". Simply put, this is an excellent tool for telling us where our model gets things right or wrong."),(0,n.kt)("p",null,"Each row represents the subset of the test set that were actually labeled as a concept, e.g. \u201cdog\u201d. As you go across the row, each cell shows the number of times those images were predicted as each concept, noted by the column name."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4809).Z})),(0,n.kt)("p",null,"This matrix helps you understand:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Accuracy"),": Overall, how often is the model correct?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Misclassification Rate"),": Overall, how often is it wrong?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"True Positive Rate"),": When it's actually yes, how often does it predict yes?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"False Positive Rate"),": When it's actually no, how often does it predict yes?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Specificity"),": When it's actually no, how often does it predict no?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Precision"),": When it predicts yes, how often is it correct?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prevalence"),": How often does the yes condition actually occur in our sample?")),(0,n.kt)("h4",{id:"counts-1-split"},"Counts ","(","1-Split",")"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"concept by concept results",src:a(3452).Z})),(0,n.kt)("p",null,'The "count" is the the number of inputs that were predicted as a concept.'),(0,n.kt)("p",null,"Each row represents the subset of the test set that were actually labeled as a concept, e.g. \u201cdog\u201d. As you go across the row, each cell shows the number of times those images were predicted as each concept, noted by the column name."),(0,n.kt)("p",null,"The diagonal cells represent True Positives, i.e. correctly predicted inputs. You\u2019d want this number to be as close to the Total Labeled as possible."),(0,n.kt)("p",null,"Depending on how your model was trained, the off-diagonal cells could include both correct and incorrect predictions. In a non-mutually exclusive concepts environment, you can label an image with more than 1 concept. For example, an image is labeled as both \u201chamburger\u201d and \u201csandwich\u201d, this image would be counted in both \u201chamburger\u201d row and \u201csandwich\u201d row. If the model correctly predicts this image to be both \u201chamburger\u201d and \u201csandwich\u201d, then this input will be counted in both on and off-diagonal cells."),(0,n.kt)("p",null,"Few things to note:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Remember that the prediction counts depend on the threshold. This means the images are counted toward a predicted concept only if the prediction probability for this concept is higher than the threshold."),(0,n.kt)("li",{parentName:"ol"},"This means the sum of the row may be less or greater than the ","#"," of total labeled inputs that were labeled as the concept."),(0,n.kt)("li",{parentName:"ol"},"You can click on each cell to view the actual prediction results for every input that was counted in this cell."),(0,n.kt)("li",{parentName:"ol"},"This represents the test set data of a single split.")),(0,n.kt)("h4",{id:"probabilities-k-split-average"},"Probabilities ","(","K-Split Average",")"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"concept by concept five split results",src:a(1947).Z})),(0,n.kt)("p",null,"Each row represents the subset of the test set that were actually labeled as a concept, e.g. \u201cdog\u201d. As you go across the row, each cell shows the average prediction probability for each concept, noted by the column name, for all inputs in this subset. In short, the cell shows the average prediction probability for a concept given the images labeled as a concept."),(0,n.kt)("p",null,"Few things to note:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"This matrix does not depend on the Prediction Threshold."),(0,n.kt)("li",{parentName:"ol"},"You can click on each cell to view the actual prediction results for every input that were used to calculate this cell."),(0,n.kt)("li",{parentName:"ol"},"This represents the average across all K splits.")),(0,n.kt)("h4",{id:"co-occurrence"},"Co-occurrence"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2960).Z})),(0,n.kt)("p",null,"Concepts that co-occur, or are similar, may appear as cluster on the matrix. In this sample matrix for a food model trained to predict the cooking preparation for foods, we see a cluster around \u2018Gratin\u2019 and \u2018Baked\u2019. Without context of what these concepts mean or how the training data appears, we can assume that the training data looks very similar, and it is ","(","\u2018Gratin\u2019 IS a variant of baked preparation, only with cheese",")",". And so, clusters aren\u2019t necessarily a bad thing, sometimes they are absolutely correct if the subject matter is naturally similar."),(0,n.kt)("h4",{id:"noise"},"Noise"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/Clarifai/docs/tree/8313400f6e12fb76e8c47c70350059e1d4bf56e1/images/noise.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1-2 Concept model ","(","left",")")," : Hair Volume is graded as it appears from root to tip, either voluminous, or not voluminous ",(0,n.kt)("strong",{parentName:"p"},"1-4 Concept model ","(","right",")")," : Hair Volume is tiered depending on where it exists from the root, ends of the hair and hair length. Level 4 is the most distinct because it is dependent on the shortest hair length."),(0,n.kt)("p",null,"The matrix on the right is an example of a noisy matrix, compared to the binary model on the left, which has a more clearly defined diagonal line. Concepts trained with data that is too similar, too subtle to differentiate, or labeled across different concepts, will muddle the distinction between concepts, and will not form a clean diagonal line in a confusion matrix. In this case, the model on the left would be considered the ideal concept distinction."),(0,n.kt)("h2",{id:"input-analysis"},"Input Analysis"),(0,n.kt)("h3",{id:"selection-details"},"Selection Details"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"not expanded",src:a(7290).Z})),(0,n.kt)("p",null,"This Selection Details table shows the input-level details of the selection you made on the Summary Table or Concept by Concept Results. It shows the image input and prediction probabilities for a specific concept."),(0,n.kt)("p",null,"Note: the prediction probabilities on this table may seem different from your actual model\u2019s probabilities. The reason is that all the evaluation results are based on the new model that was built for evaluation purposes during the cross validation process."),(0,n.kt)("h3",{id:"expanded-selection-details"},"Expanded Selection Details"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"expanded",src:a(5815).Z})),(0,n.kt)("p",null,"You can click on the expand button to view the prediction probabilities for every concept for each image. The blue dot denotes the concept","(","s",")"," the input was actually labeled, i.e. true positives. The red dot denotes the concept","(","s",")"," that the input was not labeled."))}u.isMDXComponent=!0},2960:function(e,t,a){t.Z=a.p+"assets/images/co-occur-77d330cf84d4b548a6320caf171c37b4.png"},4809:function(e,t,a){t.Z=a.p+"assets/images/concept_by_concept-b1074b6a5d09a65b585b1bbe17e04198.png"},1947:function(e,t,a){t.Z=a.p+"assets/images/cxc-5split-0d5c64d2073d8cfed6d0ef82cbb32116.png"},3452:function(e,t,a){t.Z=a.p+"assets/images/cxc-result-862ed914ce2b0af044b43a7b4b7c8800.png"},128:function(e,t,a){t.Z=a.p+"assets/images/eval-results-new-87505dc1e85439db895529e88ba171c9.png"},3880:function(e,t,a){t.Z=a.p+"assets/images/eval-summary-table-8be560fc566d193e3280463511041d56.png"},5815:function(e,t,a){t.Z=a.p+"assets/images/expanded-new-f3a0feec226110d33e28a1d62edd25dd.png"},7699:function(e,t,a){t.Z=a.p+"assets/images/model-score-new-9d107c6a3f2c6c4ebfdb6df63d77fa7b.png"},7290:function(e,t,a){t.Z=a.p+"assets/images/not-expanded-new-4b3bedbaec403115647edc3ca3ea1cb5.png"},1708:function(e,t,a){t.Z=a.p+"assets/images/prediction-threshold-new-0c0b29d80cee5499403c777987e20f38.png"},8953:function(e,t,a){t.Z=a.p+"assets/images/roc_auc-aaae99eb6871fd8b74fc0962b7614eed.png"}}]);