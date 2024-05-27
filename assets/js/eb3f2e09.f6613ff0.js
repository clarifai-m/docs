"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4783],{19365:(e,n,t)=>{t.d(n,{A:()=>s});var i=t(96540),o=t(20053);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,s),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var i=t(58168),o=t(96540),a=t(20053),s=t(23104),r=t(56347),l=t(57485),d=t(31682),c=t(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:o}}=e;return{value:n,label:t,attributes:i,default:o}}))}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=u(e),[s,r]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[l,d]=f({queryString:t,groupId:i}),[p,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),h=(()=>{const e=l??p;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&r(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);r(e),d(e),y(e)}),[d,y,a]),tabValues:a}}var h=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=d[t].value;i!==r&&(p(n),l(i))},m=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n)},d.map((e=>{let{value:n,label:t,attributes:s}=e;return o.createElement("li",(0,i.A)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:u},s,{className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n})}),t??n)})))}function _(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i}))))}function A(e){const n=y(e);return o.createElement("div",{className:(0,a.A)("tabs-container",g.tabList)},o.createElement(b,(0,i.A)({},e,n)),o.createElement(_,(0,i.A)({},e,n)))}function v(e){const n=(0,h.A)();return o.createElement(A,(0,i.A)({key:String(n)},e))}},76789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>P,contentTitle:()=>w,default:()=>E,frontMatter:()=>T,metadata:()=>D,toc:()=>L});var i=t(58168),o=(t(96540),t(15680)),a=t(11470),s=t(19365),r=t(77964),l=t(95581),d=t(69298),c=t(38900),p=t(64398),u=t(56202),m=t(75633),f=t(69179),y=t(33637),h=t(8068),g=t(55826),b=t(19596),_=t(1435),A=t(99583),v=t(35749),I=t(1992),x=t(9588);const T={sidebar_position:2},w="Text as Input",D={unversionedId:"sdk/Inference-from-AI-Models/Text-as-Input",id:"sdk/Inference-from-AI-Models/Text-as-Input",title:"Text as Input",description:"Learn how to perform inference with text as input using Clarifai Python SDK",source:"@site/docs/sdk/Inference-from-AI-Models/Text-as-Input.md",sourceDirName:"sdk/Inference-from-AI-Models",slug:"/sdk/Inference-from-AI-Models/Text-as-Input",permalink:"/sdk/Inference-from-AI-Models/Text-as-Input",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/Inference-from-AI-Models/Text-as-Input.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image as Input",permalink:"/sdk/Inference-from-AI-Models/Image-as-Input"},next:{title:"Audio as Input",permalink:"/sdk/Inference-from-AI-Models/Audio-as-Input"}},P={},L=[{value:"Text Classifier",id:"text-classifier",level:2},{value:"Text Generation Using LLM",id:"text-generation-using-llm",level:2},{value:"Text Classifier Using LLM",id:"text-classifier-using-llm",level:2},{value:"Text  to image",id:"text--to-image",level:2},{value:"Text to Audio",id:"text-to-audio",level:2},{value:"Text Embedder",id:"text-embedder",level:2}],B={toc:L},M="wrapper";function E(e){let{components:n,...t}=e;return(0,o.yg)(M,(0,i.A)({},B,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"text-as-input"},"Text as Input"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Learn how to perform inference with text as input using Clarifai Python SDK")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Unlock the potential of Clarifai's state-of-the-art text-based AI features, allowing you to elevate your applications with unparalleled accuracy and efficiency. Dive into a comprehensive suite of tools designed to simplify the integration of Clarifai's AI capabilities, empowering developers to unleash the potential of text-driven applications across various domains. Discover a robust and developer-friendly Python SDK that streamlines the incorporation of advanced text-based AI models, making it easier than ever to implement powerful natural language processing solutions."),(0,o.yg)("h2",{id:"text-classifier"},"Text Classifier"),(0,o.yg)("p",null,"Empower your applications with text classification ",(0,o.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-classifier%22%5D%7D%5D"},"models")," using Clarifai's Predict API for Text. By providing input text to your preferred classification model, you can gain valuable insights into the content's nature. This API offers flexibility, allowing you to provide data through URLs or files for seamless text classification."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The file size of each text input should be less than 20MB.")),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-python",mdxType:"CodeBlock"},l.A),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(r.A,{className:"language-text",mdxType:"CodeBlock"},A.A))),(0,o.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-typescript",mdxType:"CodeBlock"},d.A))),(0,o.yg)("h2",{id:"text-generation-using-llm"},"Text Generation Using LLM"),(0,o.yg)("p",null,"Empower your applications with dynamic text creation using the robust capabilities of the Clarifai Predict API. This API leverages cutting-edge text generation ",(0,o.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D"},"models")," to generate textual content dynamically based on user-defined prompts, providing a versatile and powerful tool for various applications."),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-python",mdxType:"CodeBlock"},c.A),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(r.A,{className:"language-text",mdxType:"CodeBlock"},v.A))),(0,o.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-typescript",mdxType:"CodeBlock"},p.A))),(0,o.yg)("h2",{id:"text-classifier-using-llm"},"Text Classifier Using LLM"),(0,o.yg)("p",null,"Dive into the realm of text classification with Clarifai's Predict API, where you can leverage Language ",(0,o.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D"},"Models")," (LLM) to categorize text based on carefully constructed prompts."),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-python",mdxType:"CodeBlock"},u.A),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(r.A,{className:"language-text",mdxType:"CodeBlock"},I.A))),(0,o.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-typescript",mdxType:"CodeBlock"},m.A))),(0,o.yg)("h2",{id:"text--to-image"},"Text  to image"),(0,o.yg)("p",null,"Leverage the power of the Predict API to seamlessly transform textual input into vibrant and expressive images. With the Text to Image ",(0,o.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-image%22%5D%7D%5D"},"models"),", you can effortlessly generate visually compelling content by providing text as input."),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-python",mdxType:"CodeBlock"},f.A),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)("img",{src:"/img/python-sdk/text_to_image.png"}))),(0,o.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-typescript",mdxType:"CodeBlock"},y.A))),(0,o.yg)("h2",{id:"text-to-audio"},"Text to Audio"),(0,o.yg)("p",null,"The Text to Audio ",(0,o.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22text%22%5D%7D%2C%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22speech-synthesis%22%2C%22text-to-speech%22%5D%7D%5D"},"models"),", powered by our Predict API, seamlessly transforms provided textual content into an audio file using advanced speech synthesis models. This capability allows users to effortlessly convert written text into a natural and expressive audio experience."),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-python",mdxType:"CodeBlock"},h.A)),(0,o.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-typescript",mdxType:"CodeBlock"},g.A))),(0,o.yg)("h2",{id:"text-embedder"},"Text Embedder"),(0,o.yg)("p",null,"The Predict API offers a versatile set of capabilities, including the conversion of text into embedding vectors through the Text Embedder ",(0,o.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-embedder%22%5D%7D%5D"},"model"),". This powerful functionality serves various purposes, making it an invaluable tool for applications such as Semantic Similarity Analysis, Content Recommendation Systems, Anomaly Detection, and Document Clustering."),(0,o.yg)(a.A,{mdxType:"Tabs"},(0,o.yg)(s.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-python",mdxType:"CodeBlock"},b.A),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(r.A,{className:"language-text",mdxType:"CodeBlock"},x.A))),(0,o.yg)(s.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-typescript",mdxType:"CodeBlock"},_.A))))}E.isMDXComponent=!0},1992:(e,n,t)=>{t.d(n,{A:()=>i});const i="`positive`"},99583:(e,n,t)=>{t.d(n,{A:()=>i});const i='[id: "LABEL_0"\n\nname: "LABEL_0"\n\nvalue: 0.6046636700630188\n\napp_id: "text-classification"\n\n, id: "LABEL_1"\n\nname: "LABEL_1"\n\nvalue: 0.3062974512577057\n\napp_id: "text-classification"\n\n, id: "LABEL_2"\n\nname: "LABEL_2"\n\nvalue: 0.08903887867927551\n\napp_id: "text-classification"\n\n]'},9588:(e,n,t)=>{t.d(n,{A:()=>i});const i="[-0.02596100978553295,\n\n 0.023946398869156837,\n\n -0.07173235714435577,\n\n 0.032294824719429016,\n\n 0.020313993096351624,\n\n -0.026998838409781456,\n\n 0.008684193715453148,\n\n -0.016651064157485962,\n\n -0.012316598556935787,\n\n 0.00042328768176957965]"},35749:(e,n,t)=>{t.d(n,{A:()=>i});const i="The future of AI is vast and holds immense potential. Here are a few possibilities:\n\n1. Enhanced Personalization: AI will be able to understand and predict user preferences with increasing accuracy. This will allow for highly personalized experiences, from product recommendations to personalized healthcare.\n\n2. Automation: AI will continue to automate routine tasks, freeing up time for individuals to focus on more complex problems. This could be in any field, from manufacturing to customer service.\n\n3. Advanced Data Analysis: AI will be able to analyze and interpret large amounts of data more efficiently. This could lead to significant breakthroughs in fields like climate science, medicine, and economics.\n\n4. AI in Healthcare: AI is expected to revolutionize healthcare, from predicting diseases before symptoms appear, to assisting in surgeries, to personalized treatment plans.\n\n5. Improved AI Ethics: As AI becomes more integral to our lives, there will be an increased focus on ensuring it is used ethically and responsibly. This could lead to advancements in AI that are more transparent, fair, and accountable.\n\n6. General AI: Perhaps the most exciting (and daunting) prospect is the development of Artificial General Intelligence (AGI) - AI systems that possess the ability to understand, learn, adapt, and implement knowledge across a wide array of tasks, much like a human brain.\n\nRemember, while AI holds great promise, it's also important to consider the challenges and implications it brings, such as job displacement due to automation, privacy concerns, and ethical considerations."},69298:(e,n,t)=>{t.d(n,{A:()=>i});const i='import { Model } from "clarifai-nodejs";\nimport path from "path";\n\n/**\n    Your PAT (Personal Access Token) can be found in the Account\'s Security section\n    Specify the correct userId/appId pairings\n    Since you\'re making inferences outside your app\'s scope\n    USER_ID = "nlptownres"\n    APP_ID = "text-classification"\n\n    You can set the model using model URL or model ID.\n    Change these to whatever model you want to use\n    eg : MODEL_ID = "sentiment-analysis-twitter-roberta-base"\n    You can also set a particular model version by specifying the  version ID\n    eg: MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40"\n    Model class objects can be initialised by providing its URL or also by defining respective userId, appId and modelId\n\n    eg : \n    const model = new Model({\n        authConfig: {\n            userId: "clarifai",\n            appId: "main",\n            pat: process.env.CLARIFAI_PAT,\n        },\n        modelId: MODEL_ID,\n    });\n\n*/\n\nconst modelUrl =\n  "https://clarifai.com/erfan/text-classification/models/sentiment-analysis-twitter-roberta-base";\n\n/**\n        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.\n\n\n        Example for prediction through Bytes:\n        const modelPrediction = await model.predictByBytes({\n                                    inputBytes,\n                                    inputType\n                                });\n\n\n        Example for prediction through Filepath:\n        const modelPrediction = await model.predictByFilepath({\n                                    filepath, \n                                    inputType\n                                });\n    */\n\nconst filepath = path.resolve(__dirname, "../../../assets/sample.txt");\n\nconst model = new Model({\n  url: modelUrl,\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT,\n  },\n});\nconst modelPrediction = await model.predictByFilepath({\n  filepath,\n  inputType: "text",\n});\n\n// Get the output\nconsole.log(\n  modelPrediction?.[modelPrediction.length - 1]?.data?.conceptsList,\n);'},75633:(e,n,t)=>{t.d(n,{A:()=>i});const i="import { Model } from \"clarifai-nodejs\";\n\nconst prompt = `Classes: ['positive', 'negative', 'neutral']\nText: Sunny weather makes me happy.\n\nClassify the text into one of the above classes.`;\n\n// Model Predict\nconst model = new Model({\n  url: \"https://clarifai.com/openai/chat-completion/models/GPT-4\",\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT,\n  },\n});\n\n\nconst modelPrediction = await model.predictByBytes({\n  inputBytes: Buffer.from(prompt),\n  inputType: \"text\",\n});\n\nconsole.log(modelPrediction?.[0]?.data?.text?.raw);\n"},1435:(e,n,t)=>{t.d(n,{A:()=>i});const i='import { Model } from "clarifai-nodejs";\n\n/**\n    Your PAT (Personal Access Token) can be found in the Account\'s Security section\n    Specify the correct userId/appId pairings\n    Since you\'re making inferences outside your app\'s scope\n    USER_ID = "cohere"\n    APP_ID = "embed"\n\n    You can set the model using model URL or model ID.\n    Change these to whatever model you want to use\n    eg : MODEL_ID = \'cohere-embed-english-v3_0\'\n    You can also set a particular model version by specifying the  version ID\n    eg: MODEL_VERSION_ID = "model_version"\n    Model class objects can be initialised by providing its URL or also by defining respective userId, appId and modelId\n\n    eg : \n    const model = new Model({\n        authConfig: {\n            userId: "clarifai",\n            appId: "main",\n            pat: process.env.CLARIFAI_PAT,\n        },\n        modelId: MODEL_ID,\n    });\n\n*/\n\nconst inputText = Buffer.from(\n  `In India Green Revolution commenced in the early 1960s that led to an increase in food grain production, especially in Punjab, Haryana, and Uttar Pradesh. Major milestones in this undertaking were the development of high-yielding varieties of wheat. The Green revolution is revolutionary in character due to the introduction of new technology, new ideas, the new application of inputs like HYV seeds, fertilizers, irrigation water, pesticides, etc. As all these were brought suddenly and spread quickly to attain dramatic results thus it is termed as a revolution in green agriculture.`,\n);\n\n/**\n        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.\n\n\n        Example for prediction through Bytes:\n        const modelPrediction = await model.predictByBytes({\n                                    inputBytes,\n                                    inputType\n                                });\n\n\n        Example for prediction through Filepath:\n        const modelPrediction = await model.predictByFilepath({\n                                    filepath, \n                                    inputType\n                                });\n    */\nconst modelUrl =\n  "https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0";\n\n\nconst model = new Model({\n  url: modelUrl,\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT,\n  },\n});\n\nconst modelPrediction = await model.predictByBytes({\n  inputBytes: inputText,\n  inputType: "text",\n});\n\nconst embeddings =\n  modelPrediction?.[0]?.data?.embeddingsList?.[0]?.vectorList ?? [];\n\n// const numDimensions =\n//   modelPrediction?.[0]?.data?.embeddingsList?.[0]?.numDimensions;\n\nconsole.log(embeddings.slice(0, 10));\n'},64398:(e,n,t)=>{t.d(n,{A:()=>i});const i='import { Model } from "clarifai-nodejs";\n\n// Your PAT (Personal Access Token) can be found in the Account\'s Security section\nconst prompt = "What\u2019s the future of AI?";\n// You can set the model using model URL or model ID.\nconst modelUrl = "https://clarifai.com/openai/chat-completion/models/GPT-4";\n\n// Model Predict\nconst model = new Model({\n  url: modelUrl,\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT,\n  },\n});\n\n\nconst modelPrediction = await model.predictByBytes({\n  inputBytes: Buffer.from(prompt),\n  inputType: "text",\n});\n\nconsole.log(modelPrediction?.[0]?.data?.text?.raw);\n'},55826:(e,n,t)=>{t.d(n,{A:()=>i});const i='import { Model } from "clarifai-nodejs";\nimport fs from "fs";\n\n/**\n    Your PAT (Personal Access Token) can be found in the Account\'s Security section\n    Specify the correct userId/appId pairings\n    Since you\'re making inferences outside your app\'s scope\n    USER_ID = "eleven-labs"\n    APP_ID = "audio-generation"\n\n    You can set the model using model URL or model ID.\n    Change these to whatever model you want to use\n    eg : MODEL_ID = \'speech-synthesis\'\n    You can also set a particular model version by specifying the  version ID\n    eg: MODEL_VERSION_ID = "f588d92c044d4487a38c8f3d7a3b0eb2"\n    Model class objects can be initialised by providing its URL or also by defining respective userId, appId and modelId\n\n    eg : \n    const model = new Model({\n        authConfig: {\n            userId: "clarifai",\n            appId: "main",\n            pat: process.env.CLARIFAI_PAT,\n        },\n        modelId: MODEL_ID,\n    });\n\n*/\n\nconst inputText = Buffer.from("Hello, How are you doing today!");\n\n/**\n        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.\n\n\n        Example for prediction through Bytes:\n        const modelPrediction = await model.predictByBytes({\n                                    inputBytes,\n                                    inputType\n                                });\n\n\n        Example for prediction through Filepath:\n        const modelPrediction = await model.predictByFilepath({\n                                    filepath, \n                                    inputType\n                                });\n    */\n\nconst modelUrl =\n  "https://clarifai.com/eleven-labs/audio-generation/models/speech-synthesis";\n\n\nconst model = new Model({\n  url: modelUrl,\n  authConfig: {\n    pat: process.env.CLARIFAI_PAT,\n  },\n});\nconst modelPrediction = await model.predictByBytes({\n  inputType: "text",\n  inputBytes: inputText,\n});\n\n// Save the audio file\n// Note: The following code assumes you have the necessary logic to write the audio data to a file in TypeScript.\n// You may need to modify this part based on your specific requirements.\nconst outputBase64 = modelPrediction?.[0]?.data?.audio?.base64 ?? "";\n\nfs.writeFileSync("audio.wav", outputBase64, "base64");\n'},33637:(e,n,t)=>{t.d(n,{A:()=>i});const i='import { Model } from "clarifai-nodejs";\nimport fs from "fs";\n\n/**\n    Your PAT (Personal Access Token) can be found in the Account\'s Security section\n    Specify the correct userId/appId pairings\n    Since you\'re making inferences outside your app\'s scope\n    USER_ID = "stability-ai"\n    APP_ID = "stable-diffusion-2"\n\n    You can set the model using model URL or model ID.\n    Change these to whatever model you want to use\n    eg : MODEL_ID = "stable-diffusion-xl"\n    You can also set a particular model version by specifying the  version ID\n    eg: MODEL_VERSION_ID = "0c919cc1edfc455dbc96207753f178d7"\n    Model class objects can be initialised by providing its URL or also by defining respective userId, appId and modelId\n\n    eg : \n    const model = new Model({\n        authConfig: {\n            userId: "clarifai",\n            appId: "main",\n            pat: process.env.CLARIFAI_PAT,\n        },\n        modelId: MODEL_ID,\n    });\n\n*/\n\nconst inputText: Buffer = Buffer.from("floor plan for 2 bedroom kitchen house");\n\n/**\n        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.\n\n\n        Example for prediction through Bytes:\n        const modelPrediction = await model.predictByBytes({\n                                    inputBytes,\n                                    inputType\n                                });\n\n\n        Example for prediction through Filepath:\n        const modelPrediction = await model.predictByFilepath({\n                                    filepath, \n                                    inputType\n                                });\n    */\n\n// Image Generation using Stable Diffusion XL\nconst modelUrl =\n  "https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl";\n\n\nconst model = new Model({\n  url: modelUrl,\n  authConfig: { pat: process.env.CLARIFAI_PAT },\n});\n\nconst modelPrediction = await model.predictByBytes({\n  inputBytes: inputText,\n  inputType: "text",\n});\n\n// Base64 image to numpy array\nconst outputBase64 = modelPrediction?.[0]?.data?.image?.base64 ?? "";\n\nfs.writeFileSync("image.png", outputBase64, "base64");\n'},56202:(e,n,t)=>{t.d(n,{A:()=>i});const i='from clarifai.client.model import Model\n\nprompt = """Classes: [`positive`, `negative`, `neutral`]\nText: Sunny weather makes me happy.\n\nClassify the text into one of the above classes."""\n\n\n\n# Model Predict\nmodel_prediction = Model("https://clarifai.com/openai/chat-completion/models/GPT-4").predict_by_bytes(prompt.encode(), input_type="text")\n\nprint(model_prediction.outputs[0].data.text.raw)'},95581:(e,n,t)=>{t.d(n,{A:()=>i});const i='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "nlptownres"\n#APP_ID = "text-classification"\n\n# Text sentiment analysis with 3 classes positive, negative, neutral.\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'sentiment-analysis-twitter-roberta-base\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'aa7f35c01e0642fda5cf400f543e7c40\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\nmodel_url = "https://clarifai.com/erfan/text-classification/models/sentiment-analysis-twitter-roberta-base"\n\n# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.\n\n\n# Example for prediction through Bytes:\n# model_prediction = model.predict_by_bytes(input_bytes, input_type="text")\n\n\n# Example for prediction through URL:\n# model_prediction = Model(model_url).predict_by_url(URL, input_type="text")\n\n\nfile_path = "datasets/upload/data/text_files/positive/0_9.txt"\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_filepath(\n    file_path, input_type="text"\n)\n\n# Get the output\nprint(model_prediction.outputs[-1].data.concepts)\n'},19596:(e,n,t)=>{t.d(n,{A:()=>i});const i='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "cohere"\n#APP_ID = "embed"\n\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'cohere-embed-english-v3_0\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'model_version\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\ninput_text = """In India Green Revolution commenced in the early 1960s that led to an increase in food grain production, especially in Punjab, Haryana, and Uttar Pradesh. Major milestones in this undertaking were the development of high-yielding varieties of wheat. The Green revolution is revolutionary in character due to the introduction of new technology, new ideas, the new application of inputs like HYV seeds, fertilizers, irrigation water, pesticides, etc. As all these were brought suddenly and spread quickly to attain dramatic results thus it is termed as a revolution in green agriculture.\n"""\n# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.\n\n# Example for prediction through URL:\n# model_prediction = model.predict_by_url(URL ,input_type="text")\n\n\n# Example for prediction through Filepath:\n# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="text")\n\n\nmodel_url = "https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0"\n\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(\n    input_text, "text"\n)\n\nembeddings = model_prediction.outputs[0].data.embeddings[0].vector\n\nnum_dimensions = model_prediction.outputs[0].data.embeddings[0].num_dimensions\n\nprint(embeddings[:10])\n'},38900:(e,n,t)=>{t.d(n,{A:()=>i});const i='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\nprompt = "What\u2019s the future of AI?"\n# You can set the model using model URL or model ID.\nmodel_url="https://clarifai.com/openai/chat-completion/models/GPT-4"\n\n\n# Model Predict\nmodel_prediction = Model(url=model_url,pat="YOUR_PAT").predict_by_bytes(prompt.encode(), input_type="text")\n\nprint(model_prediction.outputs[0].data.text.raw)'},8068:(e,n,t)=>{t.d(n,{A:()=>i});const i='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "eleven-labs"\n#APP_ID = "audio-generation"\n\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'speech-synthesis\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'f588d92c044d4487a38c8f3d7a3b0eb2\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\n\ninput_text = "Hello, How are you doing today!"\n\n# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.\n\n\n# Example for prediction through URL:\n# model_prediction = model.predict_by_url(url, input_type="text")\n\n\n# Example for prediction through Filepath:\n# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")\n\nmodel_url = "https://clarifai.com/eleven-labs/audio-generation/models/speech-synthesis"\n\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(\n    input_text, "text"\n)\n\n# Save the audio file\nwith open("output_audio.wav", mode="bx") as f:\n    f.write(model_prediction.outputs[0].data.audio.base64)\n'},69179:(e,n,t)=>{t.d(n,{A:()=>i});const i='from clarifai.client.model import Model\nimport numpy as np\nimport cv2\nimport matplotlib.pyplot as plt\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "stability-ai"\n#APP_ID = "stable-diffusion-2"\n\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'stable-diffusion-xl\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'0c919cc1edfc455dbc96207753f178d7\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\ninput_text = b"floor plan for 2 bedroom kitchen house"\n\n# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and Bytes format.\n\n\n# Example for prediction through URL:\n# model_prediction = model.predict_by_url(url, input_type="text")\n\n\n# Example for prediction through Filepath:\n# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")\n\n# Image Generation using Stable Diffusion XL\nmodel_url = "https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl"\n\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(\n    input_text, input_type="text"\n)\n\n\n# Base64 image to numpy array\nim_b = model_prediction.outputs[0].data.image.base64\nimage_np = np.frombuffer(im_b, np.uint8)\nimg_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)\n# Display the image\nplt.axis("off")\nplt.imshow(img_np[..., ::-1])\n'}}]);