"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1383],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,g=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return a?o.createElement(g,r(r({ref:t},p),{},{components:a})):o.createElement(g,r({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},44230:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=a(58168),n=(a(96540),a(15680));const i={description:"Frequently asked questions on model evaluation",sidebar_position:5},r="Model Evaluation FAQs",l={unversionedId:"portal-guide/evaluate/evaluation-faqs",id:"portal-guide/evaluate/evaluation-faqs",title:"Model Evaluation FAQs",description:"Frequently asked questions on model evaluation",source:"@site/docs/portal-guide/evaluate/evaluation-faqs.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/evaluation-faqs",permalink:"/portal-guide/evaluate/evaluation-faqs",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/evaluation-faqs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Frequently asked questions on model evaluation",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Improving Your Model",permalink:"/portal-guide/evaluate/improving-your-model"},next:{title:"Creating Workflows",permalink:"/portal-guide/workflows/"}},s={},c=[{value:"How can I improve concept performance?",id:"how-can-i-improve-concept-performance",level:2},{value:"What is the ROC AUC score, and how does it relate to prediction accuracy?",id:"what-is-the-roc-auc-score-and-how-does-it-relate-to-prediction-accuracy",level:2},{value:"How do we read a concept-by-concept matrix?",id:"how-do-we-read-a-concept-by-concept-matrix",level:2},{value:"Along with AUC, what other insights can a confusion matrix provide?",id:"along-with-auc-what-other-insights-can-a-confusion-matrix-provide",level:2},{value:"How can I improve a model by drilling down to \u201cproblematic cells\u201d in a confusion matrix?",id:"how-can-i-improve-a-model-by-drilling-down-to-problematic-cells-in-a-confusion-matrix",level:2},{value:"What is the importance of recall and precision rate?",id:"what-is-the-importance-of-recall-and-precision-rate",level:2},{value:"How do we choose a prediction threshold?",id:"how-do-we-choose-a-prediction-threshold",level:2},{value:"Once a model is trained and evaluated, how do we determine its accuracy?",id:"once-a-model-is-trained-and-evaluated-how-do-we-determine-its-accuracy",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,n.yg)(d,(0,o.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"model-evaluation-faqs"},"Model Evaluation FAQs"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Frequently asked questions on model evaluation")),(0,n.yg)("hr",null),(0,n.yg)("h2",{id:"how-can-i-improve-concept-performance"},"How can I improve concept performance?"),(0,n.yg)("p",null,"Concepts that perform well tend to be the ones that are annotated in images photographed in a consistent and unique way. "),(0,n.yg)("p",null,"Concepts that tend to perform poorly are those:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"a) trained on data with inconsistent compositions;"),(0,n.yg)("li",{parentName:"ul"},"b) the photos require outside context (relationships to people in portraits, etc.); and/or,"),(0,n.yg)("li",{parentName:"ul"},"c) the subject matter is subtle.")),(0,n.yg)("p",null,"Keep in mind the model has no concept of language; so, in essence, \u201cwhat you see is what you get.\u201d"),(0,n.yg)("p",null,"Let\u2019s take a case of a false positive prediction made by a model in the process of training to recognize wedding imagery."),(0,n.yg)("p",null,"Here is an example of an image of a married couple, which had a ",(0,n.yg)("strong",{parentName:"p"},"false positive")," prediction for a person holding a bouquet of flowers, even though there is no bouquet in the photo. "),(0,n.yg)("p",null,"What\u2019s going on here?"),(0,n.yg)("p",null," ",(0,n.yg)("img",{alt:"concept performance",src:a(41114).A,width:"1080",height:"720"})),(0,n.yg)("p",null,"A photo\u2019s composition and the combination of elements therein could confuse a model."),(0,n.yg)("p",null,"All the images below were labeled with the ",(0,n.yg)("strong",{parentName:"p"},"\u2018Bouquet_Floral_Holding\u2019")," concept. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"images for concept performance",src:a(28620).A,width:"1600",height:"858"})),(0,n.yg)("p",null,"In this very rare instance, the image in question has:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("em",{parentName:"li"},"veiled")," bride"),(0,n.yg)("li",{parentName:"ul"},"The bride & groom kissing/their heads close together"),(0,n.yg)("li",{parentName:"ul"},"Greenery over their heads"),(0,n.yg)("li",{parentName:"ul"},"Large, recognizable flowers")),(0,n.yg)("p",null,"The model sees ",(0,n.yg)("em",{parentName:"p"},"the combination")," of all these individual things ",(0,n.yg)("em",{parentName:"p"},"in lots of photos labeled")," \u2018Bouquet_Floral_Holding\u2019; and thus, that is the top result."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"images for concept performance",src:a(28620).A,width:"1600",height:"858"})),(0,n.yg)("th",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"images for concept performance",src:a(79303).A,width:"1250",height:"832"}))))),(0,n.yg)("p",null,"One way to fix this is to ",(0,n.yg)("strong",{parentName:"p"},"narrow")," the training data for \u2018Bouquet_Floral_Holding\u2019 to images in which the bouquet is the focal point, rather than any instance of the bouquet being held. "),(0,n.yg)("p",null,"This way, the model can focus on the anchoring theme/object within the dataset more easily."),(0,n.yg)("h2",{id:"what-is-the-roc-auc-score-and-how-does-it-relate-to-prediction-accuracy"},"What is the ROC AUC score, and how does it relate to prediction accuracy?"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"closed-set and open-set recognition",src:a(95191).A,width:"1600",height:"772"}),"\n",(0,n.yg)("em",{parentName:"p"},"Above table is available in model evaluation page in the legacy Clarifai\u2019s Explorer UI")),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"ROC AUC")," (Concept Accuracy Score) is the concept\u2019s prediction performance score, defined by the area under the Receiver Operating Characteristic curve. This score gives us an idea of how well we have separated our different classes, or concepts. "),(0,n.yg)("p",null,"ROC AUC is generated by plotting the True Positive Rate (y-axis) against the False Positive Rate (x-axis) as you vary the threshold for assigning observations to a given class. The AUC, or ",(0,n.yg)("strong",{parentName:"p"},"A"),"rea ",(0,n.yg)("strong",{parentName:"p"},"U"),"nder the ",(0,n.yg)("strong",{parentName:"p"},"C"),"urve of these points, is (arguably) the best way to summarize a model\u2019s performance in a single number. "),(0,n.yg)("p",null,"You can think of AUC as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation, and thus it is a useful metric even for datasets with highly unbalanced classes. "),(0,n.yg)("p",null,"A score of 1 represents a perfect model; a score of .5 represents a model that would be no better than random guessing, and this wouldn\u2019t be suitable for predictions and should be re-trained. "),(0,n.yg)("p",null,"Note that the ROC AUC is ",(0,n.yg)("em",{parentName:"p"},"not")," dependent on the prediction threshold."),(0,n.yg)("h2",{id:"how-do-we-read-a-concept-by-concept-matrix"},"How do we read a concept-by-concept matrix?"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"concept-by-concept matrix",src:a(22808).A,width:"1600",height:"538"}),"\n",(0,n.yg)("em",{parentName:"p"},"Above table is available in model evaluation page in the legacy Clarifai\u2019s Explorer UI")),(0,n.yg)("p",null,"A concept-by-concept matrix is a graphic flattening of data to show what has been labeled for a concept. This tool is another way of visualizing the performance of a model. "),(0,n.yg)("p",null,"It allows us to review where we see true positives, or correctly predicted inputs (the diagonal row). Simply put, this is an excellent tool for telling us where our model gets things right or wrong. "),(0,n.yg)("p",null,"Each row represents the subset of the test set that was actually labeled as a concept, e.g., \u201cdog.\u201d As you go across the row, each cell shows the number of times those images were predicted as each concept, noted by the column name."),(0,n.yg)("h2",{id:"along-with-auc-what-other-insights-can-a-confusion-matrix-provide"},"Along with AUC, what other insights can a confusion matrix provide?"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Accuracy"),"\u2014Overall, how often is the model correct?"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Misclassification Rate"),"\u2014Overall, how often is it wrong?"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"True Positive Rate"),"\u2014When it's actually yes, how often does it predict yes?"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"False Positive Rate"),"\u2014When it's actually no, how often does it predict yes?"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Specificity"),"\u2014When it's actually no, how often does it predict no?"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Precision"),"\u2014When it predicts yes, how often is it correct?"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Prevalence"),"\u2014How often does the yes condition actually occur in our sample?")),(0,n.yg)("p",null,"The diagonal cells represent True Positives, i.e., correctly predicted inputs. You\u2019d want this number to be as close to the Total Labeled as possible."),(0,n.yg)("p",null,"Depending on how your model was trained, the off-diagonal cells could include both correct and incorrect predictions. In a non-mutually exclusive concepts environment, you can label an image with more than 1 concept."),(0,n.yg)("p",null,"For example, an image labeled as both \u201chamburger\u201d and \u201csandwich\u201d would be counted in both the \u201chamburger\u201d row and the \u201csandwich\u201d row. If the model correctly predicts this image to be both \u201chamburger\u201d and \u201csandwich,\u201d then this input will be counted in both on and off-diagonal cells."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"concept-by-concept matrix",src:a(22808).A,width:"1600",height:"538"}),"\n",(0,n.yg)("em",{parentName:"p"},"Above table is available in model evaluation page in the legacy Clarifai\u2019s Explorer UI")),(0,n.yg)("p",null,"This is a sample confusion matrix for a model. The Y-axis ",(0,n.yg)("inlineCode",{parentName:"p"},"Actual Concepts")," are plotted against the X-axis ",(0,n.yg)("inlineCode",{parentName:"p"},"Predicted Concepts.")," The cells display average prediction probability for a certain concept, and for a group of images that were labeled as a certain concept. "),(0,n.yg)("p",null,"The diagonal cells are the average probability for true positives, and any cells off the horizontal cells contain the average probability for non-true positives. From this confusion matrix, we can see that each concept is distinct from one another, with a few areas of overlap, or clustering."),(0,n.yg)("p",null,"Concepts that co-occur, or are similar, may appear as a cluster on the matrix. "),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"concepts co-occurence",src:a(90415).A,width:"630",height:"616"})),(0,n.yg)("p",null,"In the above sample matrix for a food model trained to predict the cooking preparation for foods, we see a cluster around \u2018Gratin\u2019 and \u2018Baked\u2019. Without the context of what these concepts mean or how the training data appears, we can assume that the training data looks very similar, and it is (\u2018Gratin\u2019 is a variant of baked preparation, only with cheese)."),(0,n.yg)("p",null,"And so, clusters aren\u2019t necessarily a bad thing; and sometimes they are absolutely correct if the subject matter is naturally similar.  "),(0,n.yg)("p",null,"At Clarifai, we can work with you to determine if the cluster or area of confusion is appropriate for the final model. "),(0,n.yg)("p",null,"Here is an example of a noisy matrix:"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Hair Volume - Version I"),(0,n.yg)("th",{parentName:"tr",align:null},"Hair Volume - Version II"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"hair volume 1",src:a(97861).A,width:"490",height:"402"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{alt:"hair volume 2",src:a(27502).A,width:"636",height:"552"}))))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"1-2 concept model (left)"),": Hair Volume is graded as it appears from root to tip, either voluminous, or not voluminous."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"1-4 concept model (right)"),": Hair Volume is tiered depending on where it exists from the root, ends of the hair, and hair length. Level 4 is the most distinct because it is dependent on the shortest hair length.")),(0,n.yg)("p",null,"The matrix on the right is an example of a noisy matrix, compared to the binary model on the left, which has a more clearly defined diagonal line. "),(0,n.yg)("p",null,"Concepts trained with data that is too similar, too subtle to differentiate, or labeled across different concepts, will muddle the distinction between concepts, and will not form a clean diagonal line in a confusion matrix. "),(0,n.yg)("p",null,"In this case, the model on the left would be considered the ideal concept distinction."),(0,n.yg)("h2",{id:"how-can-i-improve-a-model-by-drilling-down-to-problematic-cells-in-a-confusion-matrix"},"How can I improve a model by drilling down to \u201cproblematic cells\u201d in a confusion matrix?"),(0,n.yg)("p",null," ",(0,n.yg)("img",{alt:"problematic cells in a confusion matrix",src:a(37307).A,width:"1600",height:"978"})),(0,n.yg)("h2",{id:"what-is-the-importance-of-recall-and-precision-rate"},"What is the importance of recall and precision rate?"),(0,n.yg)("p",null,"Recall rate refers to the proportion of the images labeled as the concept that were predicted as the concept. It is calculated as True Positives divided by Total Labeled. Also known as \u201csensitivity\u201d or \u201ctrue positive rate.\u201d"),(0,n.yg)("p",null,"Precision rate refers to the proportion of the images predicted as a concept that had been actually labeled as the concept. It is calculated as True Positives divided by Total Predicted. Also known as \u201cpositive predictive value.\u201d"),(0,n.yg)("p",null,"You can think of precision and recall in the context of what we want to calibrate our model towards. Precision and recall are inversely correlated; so, ultimately the ratio of false positives to false negatives is up to the client according to their goal."),(0,n.yg)("p",null,"We\u2019re asking one of the following of our model:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"That the guesses are correct, while missing some concepts (high precision);")),(0,n.yg)("p",null,"Or,"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"That most things are considered to be predicted as a concept, while having some wrong predictions (high recall).")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Example:"),"  "),(0,n.yg)("p",null,"Precision = tp\xf7(tp+fp)"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"I guess for X, and my guess is correct, although I may miss another X.")),(0,n.yg)("p",null,"Or,"),(0,n.yg)("p",null,"Recall = tp \xf7 (tp+fn)"),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"I guess all the X as X, but occasionally predict other subjects that are not X as X.")),(0,n.yg)("h2",{id:"how-do-we-choose-a-prediction-threshold"},"How do we choose a prediction threshold?"),(0,n.yg)("p",null,"A threshold is the \u201csweet spot\u201d numerical score that is dependent on the objective of your prediction for recall and/or precision. In practice, there are multiple ways to define \u201caccuracy\u201d when it comes to machine learning, and the threshold is the number we use to gauge our preferences."),(0,n.yg)("p",null,"You might be wondering how you should set your classification threshold, once you are ready to use it to predict out-of-sample data. This is more of a business decision, in that you have to decide whether you would rather minimize your ",(0,n.yg)("a",{parentName:"p",href:"#along-with-auc-what-other-insights-can-a-confusion-matrix-provide"},"false positive rate or maximize your true positive rate"),". "),(0,n.yg)("p",null,"If our model is used to predict concepts that lead to a high-stakes decision, like a diagnosis of a disease or moderation for safety, we might consider a few false positives as forgivable (better to be safe than sorry!). In this case, we might want ",(0,n.yg)("strong",{parentName:"p"},"high precision"),"."),(0,n.yg)("p",null,"If our model is used to predict concepts that lead to a suggestion or flexible outcome, we might want ",(0,n.yg)("strong",{parentName:"p"},"high recall")," so that the model can allow for exploration. "),(0,n.yg)("p",null,"In either scenario, we will want to ensure our model is trained and tested with data that best reflects its use case."),(0,n.yg)("p",null,"Once we have determined the goal of our model (high precision or high recall), we can use test data that our model has never seen before to evaluate how well our model predicts according to the standards we have set."),(0,n.yg)("h2",{id:"once-a-model-is-trained-and-evaluated-how-do-we-determine-its-accuracy"},"Once a model is trained and evaluated, how do we determine its accuracy?"),(0,n.yg)("p",null,"The goal of any model is to get it to see the world as you see it."),(0,n.yg)("p",null,"In ",(0,n.yg)("strong",{parentName:"p"},"multi-class classification,")," accuracy is determined by the number of correct predictions divided by the total number of examples."),(0,n.yg)("p",null,"In ",(0,n.yg)("strong",{parentName:"p"},"binary classification,")," or for mutually exclusive classes, accuracy is determined by the number of true positives added to the number of true negatives, divided by the total number of examples."),(0,n.yg)("p",null,"Once we have established the goal we are working towards with the ground truth, we begin to assess your model\u2019s prediction returns. This is a completely subjective question, and most clients simply want to know that their models will perform to their standards once it is in the real world."),(0,n.yg)("p",null,"We begin by running a test set of images through the model and reading their precision and recall scores. The test set of images should be:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"a) inputs that the model has not been trained with, and;"),(0,n.yg)("li",{parentName:"ul"},"b) be the same kind of data we would expect to see in the model\u2019s particular use case. ")),(0,n.yg)("p",null,"Once we have our precision or recall scores, we will compare these to the model\u2019s recall or precision thresholds for .5 and .8, respectively."))}h.isMDXComponent=!0},90415:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/co_occurence_gratin_baked-77d330cf84d4b548a6320caf171c37b4.png"},22808:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/concept_by_concept_matrix-5f01625104a02f76b58e833d8884b523.png"},28620:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/concept_performance_1-1f1148c4dbeaa8f74a0ba57a545a24b4.png"},79303:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/concept_performance_2-e78a66a986490cf6a8666bd2d40c91b7.png"},97861:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/noisy_matrix_1-a29fa87e95a1b1f6a6b35f3b3b8c77e6.png"},27502:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/noisy_matrix_2-70a765488398ab02743f9cdc3e6317f2.png"},37307:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/problematic_cells-fb5341412905358b3fe6750fea6eb48b.png"},95191:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/roc_auc-f6eede4bf545536f93ce90b27acc6e70.png"},41114:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/wedding_imagery-6ee7b5068f5a31187834c06182a98d5c.jpg"}}]);