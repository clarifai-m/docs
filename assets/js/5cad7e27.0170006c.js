"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9351],{85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),i=n(67294),r=n(86010),o=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=l??d;return h({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var y=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(b,(0,a.Z)({},e,t)),i.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,y.Z)();return i.createElement(v,(0,a.Z)({key:String(t)},e))}},71495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>I,frontMatter:()=>b,metadata:()=>v,toc:()=>T});var a=n(87462),i=(n(67294),n(3905)),r=n(74866),o=n(85162),s=n(90814);const l='# For the demo, we are using the "llama2-70b-chat" model from Clarifai\nMODEL_URL = "https://clarifai.com/meta/Llama-2/models/llama2-70b-chat" \n\n# PAT (Personal Access Token) provided by Clarifai for authentication\nPAT = "CLARIFAI_PAT"\n\n# User ID for authentication\nUSER_ID = "YOUR_ID"\n\n# App ID for authentication\nAPP_ID = "YOUR_APP"',u='# Import necessary modules from LangChain for text splitting, document loading, and Clarifai vector storage\nfrom langchain.text_splitter import CharacterTextSplitter\nfrom langchain.document_loaders import TextLoader\nfrom langchain.vectorstores import Clarifai as clarifaivectorstore\n\n# Initialize a TextLoader object with the path to the text file containing documents to ingest\nloader = TextLoader("/content/examples/RAG/data/Crawfords_Auto_Repair_Guide.txt") # Replace with your file path\n\n# Load documents using the loader\ndocuments = loader.load()\n\n# Set up a CharacterTextSplitter to split documents into smaller chunks for efficient processing\ntext_splitter = CharacterTextSplitter(chunk_size=1024, chunk_overlap=200)\n\n# Split documents into smaller chunks\ndocs = text_splitter.split_documents(documents)\n\n# Create a vector database using the Clarifai vector store\nclarifai_vector_db = clarifaivectorstore.from_documents(\n    user_id=USER_ID,  # User ID for authentication\n    app_id=APP_ID,    # App ID for authentication\n    documents=docs,   # Split documents\n    pat=PAT           # Personal Access Token (PAT) for authentication\n)',c="# Importing necessary modules\nimport dspy\nfrom dspy.retrieve.clarifai_rm import ClarifaiRM \n\n# Initializing the language model (LLM) with Clarifai\nllm = dspy.Clarifai(\n    model=MODEL_URL,             # Clarifai model URL\n    api_key=PAT,                 # Personal Access Token (PAT) for authentication\n    n=2,                         # Number of results to return\n    inference_params={           # Parameters for inference\n        \"max_tokens\": 100,       # Maximum number of tokens per input\n        'temperature': 0.6       # Temperature parameter for text generation\n    }\n)\n\n# Initializing the retriever model with Clarifai for document retrieval\nretriever_model = ClarifaiRM(\n    clarifai_user_id=USER_ID,    # User ID for Clarifai authentication\n    clarfiai_app_id=APP_ID,      # App ID for Clarifai authentication\n    clarifai_pat=PAT,            # PAT for Clarifai authentication\n    k=2                           # Number of documents to retrieve\n)\n\n# Configuring settings for DSPy\ndspy.settings.configure(\n    lm=llm,                      # Language model\n    rm=retriever_model           # Retriever model\n)",d="sentence = \"Fuel pump is broken\"\n\nclassify = dspy.Predict('sentence -> sentiment')\nprint(classify(sentence=sentence).sentiment)",p='# Defining a class named GenerateAnswer which inherits from dspy.Signature\nclass GenerateAnswer(dspy.Signature):\n    """Think and Answer questions based on the context provided."""\n\n    # Defining input fields with descriptions\n    context = dspy.InputField(desc="May contain relevant facts about user query")\n    question = dspy.InputField(desc="User query")\n    \n    # Defining output field with description\n    answer = dspy.OutputField(desc="Answer in one or two lines")\n',h="# Define a class named RAG inheriting from dspy.Module\nclass RAG(dspy.Module):\n    # Initialize the RAG class\n    def __init__(self):\n        # Call the superclass's constructor\n        super().__init__()\n\n        # Initialize the retrieve module\n        self.retrieve = dspy.Retrieve()\n        \n        # Initialize the generate_answer module using ChainOfThought with GenerateAnswer\n        self.generate_answer = dspy.ChainOfThought(GenerateAnswer)\n    \n    # Define the forward method\n    def forward(self, question):\n        # Retrieve relevant context passages based on the input question\n        context = self.retrieve(question).passages\n        \n        # Generate an answer based on the retrieved context and the input question\n        prediction = self.generate_answer(context=context, question=question)\n        \n        # Return the prediction as a dspy.Prediction object containing context and answer\n        return dspy.Prediction(context=context, answer=prediction.answer)\n",m='# Define the question to ask the RAG program\nmy_question = "How to change the brake fluid"\n\n# Create a RAG (Retrieval-Augmented Generation) object\nRag_obj = RAG()\n\n# Get the prediction from the RAG model for the given question.\n# This prediction includes both the context and the answer.\npredict_response_llama70b = Rag_obj(my_question)\n\n# Print the question, predicted answer, and truncated retrieved contexts.\nprint(f"Question: {my_question}")\nprint(f"Predicted Answer: {predict_response_llama70b.answer}")\nprint(f"Retrieved Contexts (truncated): {[c[:200] + \'...\' for c in predict_response_llama70b.context]}")',f='2024-04-09 13:14:16 INFO     clarifai.client.input:                                                    input.py:687\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "b5030582b50f20e6e78c52513cfa11dc"                                            \n\n                                                                                                                   \n\nINFO:clarifai.client.input:\n\nInputs Uploaded\n\ncode: SUCCESS\n\ndescription: "Ok"\n\ndetails: "All inputs successfully added"\n\nreq_id: "b5030582b50f20e6e78c52513cfa11dc"\n\n2024-04-09 13:14:18 INFO     clarifai.client.input:                                                    input.py:687\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "44ccf3fbb5b8932868a107658b5ce18e"                                            \n\n                                                                                                                   \n\nINFO:clarifai.client.input:\n\nInputs Uploaded\n\ncode: SUCCESS\n\ndescription: "Ok"\n\ndetails: "All inputs successfully added"\n\nreq_id: "44ccf3fbb5b8932868a107658b5ce18e"\n\n2024-04-09 13:14:20 INFO     clarifai.client.input:                                                    input.py:687\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "b8364c5c2a3a4b8d477f99b1028b6fec"                                            \n\n                                                                                                                   \n\nINFO:clarifai.client.input:\n\nInputs Uploaded\n\ncode: SUCCESS\n\ndescription: "Ok"\n\ndetails: "All inputs successfully added"\n\nreq_id: "b8364c5c2a3a4b8d477f99b1028b6fec"\n\n2024-04-09 13:14:21 INFO     clarifai.client.input:                                                    input.py:687\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "7c5d3751e0a79deae8012de213768932"                                            \n\n                                                                                                                   \n\nINFO:clarifai.client.input:\n\nInputs Uploaded\n\ncode: SUCCESS\n\ndescription: "Ok"\n\ndetails: "All inputs successfully added"\n\nreq_id: "7c5d3751e0a79deae8012de213768932"',y="NEGATIVE\n\nSentence: The car is running smoothly\n\nSentiment: POSITIVE\n\nSentence: The car is having some issues\n\nSentiment: NEUTRAL\n\nSentence: The car is amazing\n\nSentiment: POSITIVE\n\nSentence: The car is a lemon\n\nSentiment: NEGATIVE",g="Question: How to change the brake fluid\nPredicted Answer: Check the level of the brake fluid by looking at the markings on the reservoir. If the level is low, bring it to a mechanic.\nRetrieved Contexts (truncated): ['If you don t have the owner s manual for your car then you may be able to find one\\nonline by using Google or another search engine. Search the website for the make of\\nthe vehicle. You could also try y...', 'If you don t have the owner s manual for your car then you may be able to find one\\nonline by using Google or another search engine. Search the website for the make of\\nthe vehicle. You could also try y...']\n",b={},k="Building RAG with DSPy",v={unversionedId:"integrations/DSPy/rag-dspy",id:"integrations/DSPy/rag-dspy",title:"Building RAG with DSPy",description:"Learn how to build RAG with DSPy and  Clarifai Python SDK",source:"@site/docs/integrations/DSPy/rag-dspy.md",sourceDirName:"integrations/DSPy",slug:"/integrations/DSPy/rag-dspy",permalink:"/integrations/DSPy/rag-dspy",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/DSPy/rag-dspy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DSPy Modules & Signatures",permalink:"/integrations/DSPy/modules-signatures"},next:{title:"Installation Guide",permalink:"/nodejs-sdk/installation-guide/"}},w={},T=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Data Ingestion",id:"data-ingestion",level:2},{value:"Setup DSPy",id:"setup-dspy",level:2},{value:"RAG with DSPy",id:"rag-with-dspy",level:2},{value:"Chat",id:"chat",level:2}],S={toc:T},C="wrapper";function I(e){let{components:t,...n}=e;return(0,i.kt)(C,(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-rag-with-dspy"},"Building RAG with DSPy"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to build RAG with DSPy and  Clarifai Python SDK")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"RAG systems combine two key functionalities: information retrieval and text generation. When you ask a question, RAG first retrieves relevant information (context) from a source like a document or database. Then, it uses that context to generate a well-informed and accurate answer. DSPy acts as your mission control for building RAG systems. It provides essential tools like modules and signatures to design and execute your program efficiently.\nClick ",(0,i.kt)("a",{parentName:"p",href:"https://www.clarifai.com/blog/what-is-rag-retrieval-augmented-generation"},"here")," to learn more about RAG."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/python-sdk/sdk-overview/"},"here"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Guide to get your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the Clarifai Examples repository to get the data files required for this example.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"!git clone https://github.com/Clarifai/examples.git\n%cd /content/examples/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install the required packages.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"!pip install clarifai\n!pip install langchain\n!pip install dspy-ai\n")),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"The first part of creating a DSPy-Clarifai application is to set some initial fields. The variables should be configured correctly for authentication and model access."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},l))),(0,i.kt)("p",null,"Here we are opting for llama2-70b-chat as the LLM Model. You can choose different LLM Models for the DSPy from Clarifai Community ",(0,i.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24"},"Models"),"."),(0,i.kt)("h2",{id:"data-ingestion"},"Data Ingestion"),(0,i.kt)("p",null,"To use Clarifai as a retriever, the straightforward approach involves ingesting documents directly into the Clarifai app, which functions as your vector database. This enables easy retrieval of similar documents based on their vectors. To streamline this ingestion process, we've integrated the Clarifai vector database into our workflow. For this task, we will be using the Vehicle Repair Manual as data for DSPy. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Langchain is required only for the data ingestion step, which you can skip if data has been already ingested through alternate methods.")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},u))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},f)),(0,i.kt)("h2",{id:"setup-dspy"},"Setup DSPy"),(0,i.kt)("p",null,"In the next step we are going to initialize DSPy with an LLM model from the Clarifai platform, this showcases the flexibility Clarifai offers. "),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},c))),(0,i.kt)("p",null,"Before we move on to the next section let\u2019s do a test run,"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},d))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},y)),(0,i.kt)("h2",{id:"rag-with-dspy"},"RAG with DSPy"),(0,i.kt)("p",null,'To construct a RAG module in DSPy effectively, you first need to define its signature. The signature explains the input and output fields succinctly, mapping from "question" to "answer" in a clear and intuitive manner. Once the signature is established, you proceed to create the module itself. A module in DSPy is where you put the signature into action, defining a specific functionality that compiles and generates responses based on the given queries. To begin, you construct a signature class, detailing the required input fields and the corresponding output fields. It\'s essential to provide comprehensive docstrings and descriptions within the class to ensure that the DSPy signature understands the context thoroughly and can compile the best prompt for the given use case. By following these steps, you can create robust and effective modules within DSPy, enabling seamless processing and response generation for various natural language processing tasks.'),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GenerateAnswer")," class is given below,"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},p))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"RAG")," class is given below,"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},h))),(0,i.kt)("h2",{id:"chat"},"Chat"),(0,i.kt)("p",null,"In the final step, we are going to perform information retrieval using a Clarifai retriever based on factual evidence."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},m))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},g)))}I.isMDXComponent=!0}}]);