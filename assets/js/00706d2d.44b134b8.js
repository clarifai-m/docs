"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5448],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return a?o.createElement(m,r(r({ref:t},p),{},{components:a})):o.createElement(m,r({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6255:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=a(7462),n=a(3366),i=(a(7294),a(3905)),r=["components"],l={description:"Learn to interpret model evaluations.",sidebar_position:1},s="Interpreting Evaluations",c={unversionedId:"portal-guide/evaluate/interpreting-evaluations",id:"portal-guide/evaluate/interpreting-evaluations",title:"Interpreting Evaluations",description:"Learn to interpret model evaluations.",source:"@site/docs/portal-guide/evaluate/interpreting-evaluations.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/interpreting-evaluations",permalink:"/portal-guide/evaluate/interpreting-evaluations",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/evaluate/interpreting-evaluations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn to interpret model evaluations.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Evaluating Models",permalink:"/portal-guide/evaluate/"},next:{title:"Improving Your Model",permalink:"/portal-guide/evaluate/improving-your-model"}},p=[{value:"Interpreting Results",id:"interpreting-results",children:[{value:"Model Analysis",id:"model-analysis",children:[{value:"Model Accuracy Score",id:"model-accuracy-score",children:[],level:4}],level:3},{value:"Concept Analysis",id:"concept-analysis",children:[{value:"Prediction Threshold",id:"prediction-threshold",children:[],level:4},{value:"Evaluation Summary",id:"evaluation-summary",children:[],level:4},{value:"Concept by Concept Results (Advanced)",id:"concept-by-concept-results-advanced",children:[],level:4}],level:3},{value:"Input Analysis",id:"input-analysis",children:[{value:"Selection Details",id:"selection-details",children:[],level:4},{value:"Expanded Selection Details",id:"expanded-selection-details",children:[],level:4}],level:3}],level:2},{value:"Improving your Model",id:"improving-your-model",children:[{value:"Possible Areas of Improvement",id:"possible-areas-of-improvement",children:[],level:3},{value:"Tips",id:"tips",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,l=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interpreting-evaluations"},"Interpreting Evaluations"),(0,i.kt)("h2",{id:"interpreting-results"},"Interpreting Results"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5600).Z})," Once the Model Evaluation is complete, you\u2019ll be able to view the evaluation results in the ",(0,i.kt)("a",{parentName:"p",href:"https://clarifai.com/apps"},"Portal here")),(0,i.kt)("p",null,"We suggest that you start by looking at the Concept by Concept Probabilities Results and the Summary Table to get a sense of the overall model prediction performance and identify the high-performing and low-performing concepts. Afterwards, hone in on the Selection Details of the False Positives and False Negatives to identify any biases, if any, in how the model is predicting, and to correct any inputs that are mislabeled"),(0,i.kt)("p",null,"Generally, you\u2019ll be looking at results that represent either a",")"," the average across K splits, or b",")"," the test set of a single split, which is about 1/K of your original training set. Note that a single split will be capped at 1,000 inputs."),(0,i.kt)("h3",{id:"model-analysis"},"Model Analysis"),(0,i.kt)("h4",{id:"model-accuracy-score"},"Model Accuracy Score"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"model eval results",src:a(2427).Z})," Model Accuracy Score is the highest level metric for your model\u2019s prediction performance. It is defined as the macro average of the areas under the receiver operating characteristic curve for every concept. This metric does not depend on the Prediction Threshold. This metric is an average across K splits."),(0,i.kt)("p",null,"A score of 1 represents a perfect model; a score of .5 represents a worthless model. As a general rule of thumb, a score above .9 is considered good."),(0,i.kt)("p",null,"Note that we discourage users from making a final assessment of the model accuracy based on the Model Accuracy Score only."),(0,i.kt)("h3",{id:"concept-analysis"},"Concept Analysis"),(0,i.kt)("h4",{id:"prediction-threshold"},"Prediction Threshold"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"prediction threshold",src:a(1988).Z})," Probability threshold determines the model\u2019s predictions. The default threshold is .5. The input is predicted as ","(","i.e. \u201ccounts\u201d as",")"," as a concept, such as \u201cdog\u201d, only if the prediction probability for \u201cdog\u201d is higher than the set threshold, for example, 0.5. You can adjust the threshold depending on how \u2018strict\u2019 you want your classification to be."),(0,i.kt)("p",null,"All prediction binary metrics, such as True Positives, False Negatives, and False Positives, and Total Predicted, Recall Rate, Precision Rate, depend on this threshold."),(0,i.kt)("h4",{id:"evaluation-summary"},"Evaluation Summary"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"model eval summary",src:a(7439).Z})," This table summarizes the numerical evaluation results for every concept. For every concept, it calculates:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"K-Split Average")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ROC AUC ","(","Concept Accuracy Score",")",":")," concept\u2019s prediction performance score, defined the area under the receiver operating characteristic curve. A score of 1 represents a perfect model; a score of .5 represents a worthless model. As a general rule of thumb, a score above .9 is considered good. Note: ROC AUC is not dependent on the prediction threshold.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1-Split")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total Labeled:")," Total number of inputs that were originally labeled as the concept in the test set. Total Labeled is the sum of True Positives ","(","correct",")"," and False Negatives ","(","incorrect",")",". Note: Total Labeled is not dependent on the prediction threshold."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total Predicted:")," Total number of inputs that were predicted as the concept in the test set. This means these inputs were predicted as a concept with probability greater than the prediction threshold value. Total Predicted is the sum of True Positives ","(","correct",")"," and False Positives ","(","incorrect",")","."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"True Positives ","(","TP",")",":")," Number of inputs that were correctly predicted as the concept they were actually labeled. Also known as \u201chits\u201d. ","(","E.g. These are the images that were labeled as \u201cdog\u201d and were predicted as \u201cdog\u201d",")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"False Negatives ","(","FN",")",":")," Number of inputs that were not predicted as the concept they were actually labeled. Also known as \u201cmisses\u201d. ","(","E.g. These are the images that were labeled as \u201cdog\u201d but were not predicted as \u201cdog\u201d",")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"False Positives ","(","FP",")",":")," Number of inputs that were predicted as the concept, but they were not labeled as the concept. Also known as \u201cfalse alarms\u201d. ","(","E.g. These are the images that were predicted as \u201cdog\u201d but were not labeled as \u201cdog\u201d",")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Recall Rate:")," proportion of the images labeled as the concept that were predicted as the concept. It is calculated as True Positives divided by Total Labeled. Also known as \u201csensitivity\u201d or \u201ctrue positive rate\u201d."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Precision Rate:")," proportion of the images predicted as a concept that had been actually labeled as the concept. It is calculated as True Positives divided by Total Predicted. Also known as \u201cpositive predictive value\u201d.")),(0,i.kt)("h4",{id:"concept-by-concept-results-advanced"},"Concept by Concept Results ","(","Advanced",")"),(0,i.kt)("p",null,"This section has a concept by concept matrix. Note that this is not a confusion matrix; we recommend that you read this through before interpreting the data."),(0,i.kt)("p",null,"In general, the matrix is meant to be read by fixing each row. Each row represents a subset of the test set that was actually labeled as a particular concept. For this subset, each cell across the row represents either"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The number of inputs that were predicted as a concept ","(","i.e. \u201ccounts\u201d",")",", or"),(0,i.kt)("li",{parentName:"ol"},"The average prediction probability for each concept, noted by the column name, for all inputs in this subset, across all K splits  ","(","i.e. \u201cprobabilities\u201d",")",".")),(0,i.kt)("p",null,"Concepts that co-occur, or are similar, may form a visual cluster on the matrix. On the other hand, exclusive or dissimilar concepts should not form a cluster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Counts ","(","1-Split",")")," ",(0,i.kt)("img",{alt:"concept by concept results",src:a(7559).Z})," Each row represents the subset of the test set that were actually labeled as a concept, e.g. \u201cdog\u201d. As you go across the row, each cell shows the number of times those images were predicted as each concept, noted by the column name."),(0,i.kt)("p",null,"The diagonal cells represent True Positives, i.e. correctly predicted inputs. You\u2019d want this number to be as close to the Total Labeled as possible."),(0,i.kt)("p",null,"Depending on how your model was trained, the off-diagonal cells could include both correct and incorrect predictions. In a non-mutually exclusive concepts environment, you can label an image with more than 1 concept. For example, an image is labeled as both \u201cdog\u201d and \u201ccat\u201d, this image would be counted in both \u201cdog\u201d row and \u201ccat\u201d row. If the model correctly predicts this image to be both \u201cdog\u201d and \u201ccat\u201d, then this input will be counted in both on and off-diagonal cells."),(0,i.kt)("p",null,"Few things to note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Remember that the prediction counts depend on the threshold. This means the images are counted toward a predicted concept only if the prediction probability for this concept is higher than the threshold."),(0,i.kt)("li",{parentName:"ol"},"This means the sum of the row may be less or greater than the ","#"," of total labeled inputs that were labeled as the concept."),(0,i.kt)("li",{parentName:"ol"},"You can click on each cell to view the actual prediction results for every input that was counted in this cell."),(0,i.kt)("li",{parentName:"ol"},"This represents the test set data of a single split.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Probabilities ","(","K-Split Average",")")," ",(0,i.kt)("img",{alt:"concept by concept five split results",src:a(8589).Z})," Each row represents the subset of the test set that were actually labeled as a concept, e.g. \u201cdog\u201d. As you go across the row, each cell shows the average prediction probability for each concept, noted by the column name, for all inputs in this subset. In short, the cell shows the average prediction probability for a concept given the images labeled as a concept."),(0,i.kt)("p",null,"Few things to note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"This matrix does not depend on the Prediction Threshold."),(0,i.kt)("li",{parentName:"ol"},"You can click on each cell to view the actual prediction results for every input that were used to calculate this cell."),(0,i.kt)("li",{parentName:"ol"},"This represents the average across all K splits.")),(0,i.kt)("h3",{id:"input-analysis"},"Input Analysis"),(0,i.kt)("h4",{id:"selection-details"},"Selection Details"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"not expanded",src:a(868).Z})," This Selection Details table shows the input-level details of the selection you made on the Summary Table or Concept by Concept Results. It shows the image input and prediction probabilities for a specific concept."),(0,i.kt)("p",null,"Note: the prediction probabilities on this table may seem different from your actual model\u2019s probabilities. The reason is that all the evaluation results are based on the new model that was built for evaluation purposes during the cross validation process."),(0,i.kt)("h4",{id:"expanded-selection-details"},"Expanded Selection Details"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"expanded",src:a(7630).Z})," You can click on the expand button to view the prediction probabilities for every concept for each image. The blue dot denotes the concept","(","s",")"," the input was actually labeled, i.e. true positives. The red dot denotes the concept","(","s",")"," that the input was not labeled."),(0,i.kt)("h2",{id:"improving-your-model"},"Improving your Model"),(0,i.kt)("p",null,"The evaluation metrics are meant to help you diagnose the quality of your model. Your model may belong to one or more of many categories, including, but not limited to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Good model with all great concepts.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"OK model with a few bad concepts.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bad model: with all bad concepts.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Biased model: the model is consistently picking up certain visual cues other than what you\u2019d like to pick up. This is sometimes obvious to pick up in the"),(0,i.kt)("p",{parentName:"li"},"Portal here"),(0,i.kt)("p",{parentName:"li"},"<","/a",">",".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Model with Variance: there is no consistency in the way the model is predicting on inputs."))),(0,i.kt)("h3",{id:"possible-areas-of-improvement"},"Possible Areas of Improvement"),(0,i.kt)("p",null,"The performance of your model depends on the performance of each concept, which is trained on a set of inputs. We\u2019d recommend that you look at both inputs and concepts when diagnosing areas of improvement."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inputs")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Diversity: try to include all perspectives of the concept, e.g. include all angles of a \u201cdog\u201d, if you\u2019re building a \u201cdog\u201d concept."),(0,i.kt)("li",{parentName:"ol"},"Strong positives: Images that are the true representation of your concept."),(0,i.kt)("li",{parentName:"ol"},"Training data should be representative of the real world data -- avoid making models where the data is too \u2018easy\u2019, i.e. unrealistic set of data."),(0,i.kt)("li",{parentName:"ol"},"Number: minimum 50 inputs per concept; more inputs the better."),(0,i.kt)("li",{parentName:"ol"},"File dimensions: minimum 512px x 512px.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Concepts")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Concepts: avoid concepts that do not rely on visual cues within the image. Also, current custom training does not perform well on training to identify faces."),(0,i.kt)("li",{parentName:"ol"},"Labels: check to see if any inputs are labeled with wrong concepts.")),(0,i.kt)("h3",{id:"tips"},"Tips"),(0,i.kt)("p",null,"When improving your model, there is no one-size-fits-all answer. Here are some tips to keep in mind:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Although we use ROC AUC as a general top-level \u2018score\u2019 for both concept and model, we do not recommend that you rely on 1 metric only to draw your final conclusion on your model performance."),(0,i.kt)("li",{parentName:"ol"},"Refer to both Concepts by Concepts Results as well as Selection Details to get a better grasp of your model."),(0,i.kt)("li",{parentName:"ol"},"When interpreting the evaluation results, keep in mind the nature of your model. Specifically, pay attention to whether or not you have labeled the inputs with more than 1 concept ","(","i.e. non-mutually exclusive concepts environment",")",", vs. only 1 concept per image."),(0,i.kt)("li",{parentName:"ol"},"Remember, the rule of diminishing returns may also apply to training models. After a certain point, the changes may not make a big difference in the model quality.")))}u.isMDXComponent=!0},8589:function(e,t,a){t.Z=a.p+"assets/images/cxc-5split-0d5c64d2073d8cfed6d0ef82cbb32116.png"},7559:function(e,t,a){t.Z=a.p+"assets/images/cxc-result-862ed914ce2b0af044b43a7b4b7c8800.png"},5600:function(e,t,a){t.Z=a.p+"assets/images/eval-results-new-87505dc1e85439db895529e88ba171c9.png"},7439:function(e,t,a){t.Z=a.p+"assets/images/eval-summary-table-8be560fc566d193e3280463511041d56.png"},7630:function(e,t,a){t.Z=a.p+"assets/images/expanded-new-f3a0feec226110d33e28a1d62edd25dd.png"},2427:function(e,t,a){t.Z=a.p+"assets/images/model-score-new-9d107c6a3f2c6c4ebfdb6df63d77fa7b.png"},868:function(e,t,a){t.Z=a.p+"assets/images/not-expanded-new-4b3bedbaec403115647edc3ca3ea1cb5.png"},1988:function(e,t,a){t.Z=a.p+"assets/images/prediction-threshold-new-0c0b29d80cee5499403c777987e20f38.png"}}]);