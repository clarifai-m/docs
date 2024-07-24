"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6305],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var r=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=o,u=d["".concat(l,".").concat(g)]||d[g]||h[g]||n;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},67556:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(58168),o=(a(96540),a(15680));const n={description:"Learn about our filter operators",sidebar_position:2},i="Filter",s={unversionedId:"portal-guide/agent-system-operators/filter",id:"portal-guide/agent-system-operators/filter",title:"Filter",description:"Learn about our filter operators",source:"@site/docs/portal-guide/agent-system-operators/filter.md",sourceDirName:"portal-guide/agent-system-operators",slug:"/portal-guide/agent-system-operators/filter",permalink:"/portal-guide/agent-system-operators/filter",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/agent-system-operators/filter.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about our filter operators",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"RAG Prompter",permalink:"/portal-guide/agent-system-operators/rag-prompter"},next:{title:"Transform",permalink:"/portal-guide/agent-system-operators/transform"}},l={},p=[{value:"\u200b\u200b<strong>Common Features of Filter Operators</strong>",id:"common-features-of-filter-operators",level:4},{value:"Region Thresholder",id:"region-thresholder",level:2},{value:"Example Scenario",id:"example-scenario",level:4},{value:"Concept Thresholder",id:"concept-thresholder",level:2},{value:"Example Scenario",id:"example-scenario-1",level:4},{value:"Random Sampler",id:"random-sampler",level:2},{value:"Example Scenario",id:"example-scenario-2",level:4}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"filter"},"Filter"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Learn about our filter operators")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Filtering helps you to remove unwanted data from your workflow. This data might take the form of inputs (like images, video, and text) or it might be an output from another model, like a predicted concept. One very common use of filters in workflows is to eliminate predictions that fall below a certain confidence threshold. That's exactly what filter operators do."),(0,o.yg)("p",null,"Filter operators process and analyze data by selectively passing information based on defined criteria."),(0,o.yg)("p",null,"This guide covers three primary filter operators used in various data processing workflows: Region Thresholder, Concept Thresholder, and Random Sample. Each operator is designed to enhance the efficiency and accuracy of data handling, ensuring that only relevant data is analyzed in subsequent stages."),(0,o.yg)("h4",{id:"common-features-of-filter-operators"},"\u200b\u200b",(0,o.yg)("strong",{parentName:"h4"},"Common Features of Filter Operators")),(0,o.yg)("p",null,"All three operators share several key features and functionalities:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Input Filtering"),": Each operator takes input data and applies a set of predefined rules or conditions to filter the data, ensuring that only relevant data points proceed to the next stage of processing."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Enhanced Workflow Efficiency"),": By eliminating irrelevant or less significant data early in the process, these operators reduce the workload and computational requirements of downstream processes."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Configurability"),": Users can configure each operator with specific parameters and thresholds to meet the unique needs of their application, making these tools versatile across different scenarios and datasets.")),(0,o.yg)("h2",{id:"region-thresholder"},"Region Thresholder"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Input: "),(0,o.yg)("inlineCode",{parentName:"p"},"regions[\u2026].data.concepts"),"\n",(0,o.yg)("strong",{parentName:"p"},"Output: "),(0,o.yg)("inlineCode",{parentName:"p"},"regions[\u2026].data.concepts")),(0,o.yg)("p",null,"The Region Thresholder model filters image regions based on the confidence scores assigned to detected concepts and works with the visual detection node."),(0,o.yg)("p",null,"It ensures that only regions meeting specific confidence criteria are passed on for further processing, enhancing the workflow results' accuracy and relevance. It uses a thresholding mechanism to filter out regions according to threshold criteria set by the user, ensuring that only regions with required scores are considered for further analysis. "),(0,o.yg)("p",null,"It\u2019s threshold mechanism is discussed below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Threshold Type:")," The threshold can be set using various operators such as >, >=, =, <=, or <."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Per Concept Thresholding:")," For each concept detected in a region, the confidence score is compared to the specified threshold or threshold criteria set by the user. For example, if the threshold type is >, then only regions with a concept's confidence score greater than the threshold will be passed on."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Overall Region Filtering:")," If all concepts within a region are filtered out (i.e., none meet the threshold criteria), the entire region is removed from the output.")),(0,o.yg)("h4",{id:"example-scenario"},"Example Scenario"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Concept:"),' "Laptop"'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Threshold Type:")," >"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Threshold Value:")," 0.8"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Operation:"),' If the confidence score of "Laptop" in a detected region is greater than 0.8, that region is passed through. Otherwise, it is filtered out.')),(0,o.yg)("p",null,"Let's demonstrate how you can use the Region Thresholder, alongside a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/visual-detector"},"detection model"),". The reason behind this is that the Visual Detector identifies regions and provides the confidence scores that the Thresholder uses to filter those regions effectively. Without the Visual Detector, the Region Thresholder would lack the necessary data to perform its filtering function."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as ",(0,o.yg)("a",{parentName:"p",href:"https://clarifai.com/clarifai/main/models/general-image-detection"},"general-image-detection"),", and select its version. You can also set the other configuration options \u2014 including selecting the concepts you want to filter.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Search for the Region-Thresholder option in the left-hand sidebar and drag it onto the workspace. Now set up its output configuration on below given parameters:"))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"concepts -")," Select the concepts and their confidence threshold value."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"concept_threshold_type -")," Select the concept threshold type from the dropdown. ")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Connect the visual-detector model with the Region Thresholder operator and save your workflow.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Region Thresholder Setup",src:a(42928).A,width:"3020",height:"1420"})),(0,o.yg)("p",null,"To see it in action upload the inputs from your local device or use the inputs in the app.  As soon as you upload inputs, the workflow will give the output based on the configurations done."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Region Thresholder Output",src:a(66912).A,width:"3020",height:"1420"})),(0,o.yg)("h2",{id:"concept-thresholder"},"Concept Thresholder"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Input: "),(0,o.yg)("inlineCode",{parentName:"p"},"concepts"),"\n",(0,o.yg)("strong",{parentName:"p"},"Output: "),(0,o.yg)("inlineCode",{parentName:"p"},"concepts")),(0,o.yg)("p",null,"The Concept Thresholder model filters entire datasets based on the confidence scores assigned to specific concepts. This model works effectively across different types of data inputs, not limited to visual data."),(0,o.yg)("p",null,"It ensures that only data points meeting specific confidence criteria are passed on for further processing, enhancing the accuracy and relevance of the workflow results. It uses a thresholding mechanism to filter out data according to criteria set by the user, ensuring that only data with required scores are considered for further analysis."),(0,o.yg)("p",null,"Its threshold mechanism is discussed below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Threshold Type:")," The threshold can be set using various operators such as >, >=, =, <=, or <."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Per Concept Thresholding:")," For each concept detected in the dataset, the confidence score is compared to the specified threshold or threshold criteria set by the user. For example, if the threshold type is >, then only data points with a concept's confidence score greater than the threshold will be passed on."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Overall Data Filtering:")," If all concepts within a data point are filtered out (i.e., none meet the threshold criteria), the entire data point is removed from the output.")),(0,o.yg)("h4",{id:"example-scenario-1"},"Example Scenario"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Concept:"),' "Bridge"'),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Threshold Type:")," >"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Threshold Value:")," 0.75"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Operation:"),' If the confidence score of "Bridge" in a data point is greater than 0.75, that data point is passed through. Otherwise, it is filtered out.')),(0,o.yg)("p",null,"Let's demonstrate how you can use the Concept Thresholder to efficiently manage large datasets. This model is pivotal for tasks where specific concept relevancy is critical, such as filtering customer feedback or social media posts."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as ",(0,o.yg)("a",{parentName:"li",href:"https://clarifai.com/clarifai/main/models/general-image-detection"},"general-image-detection"),", and select its version. You can also set the other configuration options \u2014 including selecting the concepts you want to filter.")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Search for the concept-thresholder option in the left-hand sidebar and drag it onto the empty workspace. Now set up its output configuration on the below-given parameters:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"concepts")," - Select the concepts and their confidence threshold value."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"concept_threshold_type")," - Select the concept threshold type from the dropdown.")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Connect the visual-detector model with the Concept Thresholder operator and save your workflow.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"alt text",src:a(42201).A,width:"3024",height:"1322"})),(0,o.yg)("p",null,"To see it in action upload the inputs from your local device or use the inputs in the app.  As soon as you upload inputs, the workflow will give the output based on the configurations done."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"alt text",src:a(1895).A,width:"3024",height:"1506"})),(0,o.yg)("h2",{id:"random-sampler"},"Random Sampler"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Input: "),(0,o.yg)("inlineCode",{parentName:"p"},"any"),"\n",(0,o.yg)("strong",{parentName:"p"},"Output: "),(0,o.yg)("inlineCode",{parentName:"p"},"any")),(0,o.yg)("p",null,"The Random Sample model randomly selects a subset of data from the input based on a specified sample size or percentage, making it an essential tool for statistical analysis and model training. This operator ensures that the sample is representative of the whole dataset, thus maintaining the integrity and variability of the data."),(0,o.yg)("p",null,"It employs a sampling mechanism to randomly pick data points, ensuring that every item in the dataset has an equal chance of being included in the sample. This approach is crucial for reducing bias in the analysis results."),(0,o.yg)("p",null,"Its sampling mechanism is discussed below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Sampling Type:")," The sampling can be configured to select either a fixed number of items or a percentage of the total dataset."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Random Selection:")," Each item in the dataset is given an equal probability of being selected, ensuring a fair and unbiased sample.")),(0,o.yg)("h4",{id:"example-scenario-2"},"Example Scenario"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Sampling Type:")," Percentage"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Sampling Value:")," 10%"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Operation:")," If the dataset consists of 1,000 items, the Random Sample operator will randomly select 100 items to be passed on for further processing.")),(0,o.yg)("p",null,"Let's demonstrate how you can use the Random Sample operator to handle large datasets efficiently or prepare data for machine learning model training."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Go to the workflow builder page. Search for the visual-detector option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to search for a detection model, such as ",(0,o.yg)("a",{parentName:"li",href:"https://clarifai.com/clarifai/main/models/general-image-detection"},"general-image-detection"),", and select its version. You can also set the other configuration options \u2014 including selecting the concepts you want to filter.")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Search for the random-sample option in the left-hand sidebar and drag it onto the empty workspace. Then, use the pop-up that appears on the right-hand sidebar to specify the sampling criteria ie; ",(0,o.yg)("strong",{parentName:"li"},"keep fraction"),". This is the fraction of input to randomly keep. This is implemented as simply if keep_fraction > rand() then output this input from the model . This is applied independently for each input sent in a batch to the model.")),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},"Save your workflow without the need to connect it directly to a data processing model, as it functions independently to reduce the dataset size.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"alt text",src:a(76448).A,width:"3020",height:"1300"})),(0,o.yg)("p",null,"To see it in action, upload the inputs from your local device or use the inputs in the app. As soon as you upload inputs, the workflow will give the output based on the configurations done, displaying a randomly selected subset of the data."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"alt text",src:a(1895).A,width:"3024",height:"1506"})))}h.isMDXComponent=!0},76448:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Concept Thresholder Setup-b184a4d86c47436b9e57a5b5ce113b27.png"},1895:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Random Sampler Output-b2be6d3ca3a1d82f4ae2a7b6f35e9267.png"},42201:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Random Sampler Setup-85895526c53ba32f2509780106a4545e.png"},66912:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Region Thresholder Output-c1a6ad400d2e1718ccb2e4127a616d59.png"},42928:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/Region Thresholder Setup-cc6dfe750f208908e69bb9fce1d02dbb.png"}}]);