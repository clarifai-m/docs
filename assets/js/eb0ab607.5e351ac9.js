"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[824],{19365:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,r),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var i=n(58168),a=n(96540),o=n(20053),r=n(23104),l=n(56347),s=n(57485),d=n(31682),u=n(89466);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=p(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[s,d]=f({queryString:n,groupId:i}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),y=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var y=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),i=d[n].value;i!==l&&(c(t),s(i))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,i.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},r,{className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function _(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function v(e){const t=h(e);return a.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},a.createElement(b,(0,i.A)({},e,t)),a.createElement(_,(0,i.A)({},e,t)))}function x(e){const t=(0,y.A)();return a.createElement(v,(0,i.A)({key:String(t)},e))}},12368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>_,default:()=>D,frontMatter:()=>b,metadata:()=>v,toc:()=>A});var i=n(58168),a=(n(96540),n(15680)),o=n(11470),r=n(19365),l=n(77964);const s='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "nlptownres"\n#APP_ID = "text-classification"\n\n# Text sentiment analysis with 3 classes positive, negative, neutral.\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'sentiment-analysis-twitter-roberta-base\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'aa7f35c01e0642fda5cf400f543e7c40\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\nmodel_url = "https://clarifai.com/erfan/text-classification/models/sentiment-analysis-twitter-roberta-base"\n\n# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.\n\n\n# Example for prediction through Bytes:\n# model_prediction = model.predict_by_bytes(input_bytes, input_type="text")\n\n\n# Example for prediction through URL:\n# model_prediction = Model(model_url).predict_by_url(URL, input_type="text")\n\n\nfile_path = "datasets/upload/data/text_files/positive/0_9.txt"\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_filepath(\n    file_path, input_type="text"\n)\n\n# Get the output\nprint(model_prediction.outputs[-1].data.concepts)\n',d='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\nprompt = "What\u2019s the future of AI?"\n# You can set the model using model URL or model ID.\nmodel_url="https://clarifai.com/openai/chat-completion/models/GPT-4"\n\n\n# Model Predict\nmodel_prediction = Model(url=model_url,pat="YOUR_PAT").predict_by_bytes(prompt.encode(), input_type="text")\n\nprint(model_prediction.outputs[0].data.text.raw)',u='from clarifai.client.model import Model\n\nprompt = """Classes: [`positive`, `negative`, `neutral`]\nText: Sunny weather makes me happy.\n\nClassify the text into one of the above classes."""\n\n\n\n# Model Predict\nmodel_prediction = Model("https://clarifai.com/openai/chat-completion/models/GPT-4").predict_by_bytes(prompt.encode(), input_type="text")\n\nprint(model_prediction.outputs[0].data.text.raw)',c='from clarifai.client.model import Model\nimport numpy as np\nimport cv2\nimport matplotlib.pyplot as plt\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "stability-ai"\n#APP_ID = "stable-diffusion-2"\n\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'stable-diffusion-xl\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'0c919cc1edfc455dbc96207753f178d7\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\ninput_text = b"floor plan for 2 bedroom kitchen house"\n\n# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and Bytes format.\n\n\n# Example for prediction through URL:\n# model_prediction = model.predict_by_url(url, input_type="text")\n\n\n# Example for prediction through Filepath:\n# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")\n\n# Image Generation using Stable Diffusion XL\nmodel_url = "https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl"\n\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(\n    input_text, input_type="text"\n)\n\n\n# Base64 image to numpy array\nim_b = model_prediction.outputs[0].data.image.base64\nimage_np = np.frombuffer(im_b, np.uint8)\nimg_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)\n# Display the image\nplt.axis("off")\nplt.imshow(img_np[..., ::-1])\n',p='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "eleven-labs"\n#APP_ID = "audio-generation"\n\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'speech-synthesis\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'f588d92c044d4487a38c8f3d7a3b0eb2\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\n\ninput_text = "Hello, How are you doing today!"\n\n# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.\n\n\n# Example for prediction through URL:\n# model_prediction = model.predict_by_url(url, input_type="text")\n\n\n# Example for prediction through Filepath:\n# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")\n\nmodel_url = "https://clarifai.com/eleven-labs/audio-generation/models/speech-synthesis"\n\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(\n    input_text, "text"\n)\n\n# Save the audio file\nwith open("output_audio.wav", mode="bx") as f:\n    f.write(model_prediction.outputs[0].data.audio.base64)\n',m='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "cohere"\n#APP_ID = "embed"\n\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'cohere-embed-english-v3_0\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'model_version\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\ninput_text = """In India Green Revolution commenced in the early 1960s that led to an increase in food grain production, especially in Punjab, Haryana, and Uttar Pradesh. Major milestones in this undertaking were the development of high-yielding varieties of wheat. The Green revolution is revolutionary in character due to the introduction of new technology, new ideas, the new application of inputs like HYV seeds, fertilizers, irrigation water, pesticides, etc. As all these were brought suddenly and spread quickly to attain dramatic results thus it is termed as a revolution in green agriculture.\n"""\n# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.\n\n# Example for prediction through URL:\n# model_prediction = model.predict_by_url(URL ,input_type="text")\n\n\n# Example for prediction through Filepath:\n# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="text")\n\n\nmodel_url = "https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0"\n\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(\n    input_text, "text"\n)\n\nembeddings = model_prediction.outputs[0].data.embeddings[0].vector\n\nnum_dimensions = model_prediction.outputs[0].data.embeddings[0].num_dimensions\n\nprint(embeddings[:10])\n',f='[id: "LABEL_0"\n\nname: "LABEL_0"\n\nvalue: 0.6046636700630188\n\napp_id: "text-classification"\n\n, id: "LABEL_1"\n\nname: "LABEL_1"\n\nvalue: 0.3062974512577057\n\napp_id: "text-classification"\n\n, id: "LABEL_2"\n\nname: "LABEL_2"\n\nvalue: 0.08903887867927551\n\napp_id: "text-classification"\n\n]',h="The future of AI is vast and holds immense potential. Here are a few possibilities:\n\n1. Enhanced Personalization: AI will be able to understand and predict user preferences with increasing accuracy. This will allow for highly personalized experiences, from product recommendations to personalized healthcare.\n\n2. Automation: AI will continue to automate routine tasks, freeing up time for individuals to focus on more complex problems. This could be in any field, from manufacturing to customer service.\n\n3. Advanced Data Analysis: AI will be able to analyze and interpret large amounts of data more efficiently. This could lead to significant breakthroughs in fields like climate science, medicine, and economics.\n\n4. AI in Healthcare: AI is expected to revolutionize healthcare, from predicting diseases before symptoms appear, to assisting in surgeries, to personalized treatment plans.\n\n5. Improved AI Ethics: As AI becomes more integral to our lives, there will be an increased focus on ensuring it is used ethically and responsibly. This could lead to advancements in AI that are more transparent, fair, and accountable.\n\n6. General AI: Perhaps the most exciting (and daunting) prospect is the development of Artificial General Intelligence (AGI) - AI systems that possess the ability to understand, learn, adapt, and implement knowledge across a wide array of tasks, much like a human brain.\n\nRemember, while AI holds great promise, it's also important to consider the challenges and implications it brings, such as job displacement due to automation, privacy concerns, and ethical considerations.",y="`positive`";var g=n(9588);const b={sidebar_position:2},_="Text as Input",v={unversionedId:"python-sdk/Inference-from-AI-Models/Text-as-Input",id:"python-sdk/Inference-from-AI-Models/Text-as-Input",title:"Text as Input",description:"Learn how to perform inference with text as input using Clarifai Python SDK",source:"@site/docs/python-sdk/Inference-from-AI-Models/Text-as-Input.md",sourceDirName:"python-sdk/Inference-from-AI-Models",slug:"/python-sdk/Inference-from-AI-Models/Text-as-Input",permalink:"/python-sdk/Inference-from-AI-Models/Text-as-Input",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/Inference-from-AI-Models/Text-as-Input.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image as Input",permalink:"/python-sdk/Inference-from-AI-Models/Image-as-Input"},next:{title:"Audio as Input",permalink:"/python-sdk/Inference-from-AI-Models/Audio-as-Input"}},x={},A=[{value:"Text Classifier",id:"text-classifier",level:2},{value:"Text Generation Using LLM",id:"text-generation-using-llm",level:2},{value:"Text Classifier Using LLM",id:"text-classifier-using-llm",level:2},{value:"Text  to image",id:"text--to-image",level:2},{value:"Text to Audio",id:"text-to-audio",level:2},{value:"Text Embedder",id:"text-embedder",level:2}],I={toc:A},T="wrapper";function D(e){let{components:t,...n}=e;return(0,a.yg)(T,(0,i.A)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"text-as-input"},"Text as Input"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Learn how to perform inference with text as input using Clarifai Python SDK")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Unlock the potential of Clarifai's state-of-the-art text-based AI features, allowing you to elevate your applications with unparalleled accuracy and efficiency. Dive into a comprehensive suite of tools designed to simplify the integration of Clarifai's AI capabilities, empowering developers to unleash the potential of text-driven applications across various domains. Discover a robust and developer-friendly Python SDK that streamlines the incorporation of advanced text-based AI models, making it easier than ever to implement powerful natural language processing solutions."),(0,a.yg)("h2",{id:"text-classifier"},"Text Classifier"),(0,a.yg)("p",null,"Empower your applications with text classification ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-classifier%22%5D%7D%5D"},"models")," using Clarifai's Predict API for Text. By providing input text to your preferred classification model, you can gain valuable insights into the content's nature. This API offers flexibility, allowing you to provide data through URLs or files for seamless text classification."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The file size of each text input should be less than 20MB.")),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},s))),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Output"),(0,a.yg)(l.A,{className:"language-text",mdxType:"CodeBlock"},f)),(0,a.yg)("h2",{id:"text-generation-using-llm"},"Text Generation Using LLM"),(0,a.yg)("p",null,"Empower your applications with dynamic text creation using the robust capabilities of the Clarifai Predict API. This API leverages cutting-edge text generation ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D"},"models")," to generate textual content dynamically based on user-defined prompts, providing a versatile and powerful tool for various applications."),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},d))),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Output"),(0,a.yg)(l.A,{className:"language-text",mdxType:"CodeBlock"},h)),(0,a.yg)("h2",{id:"text-classifier-using-llm"},"Text Classifier Using LLM"),(0,a.yg)("p",null,"Dive into the realm of text classification with Clarifai's Predict API, where you can leverage Language ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D"},"Models")," (LLM) to categorize text based on carefully constructed prompts."),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},u))),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Output"),(0,a.yg)(l.A,{className:"language-text",mdxType:"CodeBlock"},y)),(0,a.yg)("h2",{id:"text--to-image"},"Text  to image"),(0,a.yg)("p",null,"Leverage the power of the Predict API to seamlessly transform textual input into vibrant and expressive images. With the Text to Image ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-image%22%5D%7D%5D"},"models"),", you can effortlessly generate visually compelling content by providing text as input."),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},c))),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Output"),(0,a.yg)("img",{src:"/img/python-sdk/text_to_image.png"})),(0,a.yg)("h2",{id:"text-to-audio"},"Text to Audio"),(0,a.yg)("p",null,"The Text to Audio ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22text%22%5D%7D%2C%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22speech-synthesis%22%2C%22text-to-speech%22%5D%7D%5D"},"models"),", powered by our Predict API, seamlessly transforms provided textual content into an audio file using advanced speech synthesis models. This capability allows users to effortlessly convert written text into a natural and expressive audio experience."),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},p))),(0,a.yg)("h2",{id:"text-embedder"},"Text Embedder"),(0,a.yg)("p",null,"The Predict API offers a versatile set of capabilities, including the conversion of text into embedding vectors through the Text Embedder ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-embedder%22%5D%7D%5D"},"model"),". This powerful functionality serves various purposes, making it an invaluable tool for applications such as Semantic Similarity Analysis, Content Recommendation Systems, Anomaly Detection, and Document Clustering."),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(r.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},m))),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Output"),(0,a.yg)(l.A,{className:"language-text",mdxType:"CodeBlock"},g.A)))}D.isMDXComponent=!0},9588:(e,t,n)=>{n.d(t,{A:()=>i});const i="[-0.02596100978553295,\n\n 0.023946398869156837,\n\n -0.07173235714435577,\n\n 0.032294824719429016,\n\n 0.020313993096351624,\n\n -0.026998838409781456,\n\n 0.008684193715453148,\n\n -0.016651064157485962,\n\n -0.012316598556935787,\n\n 0.00042328768176957965]"}}]);