"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4752],{19365:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(96540),i=t(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,o),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>C});var n=t(58168),i=t(96540),r=t(20053),o=t(23104),s=t(56347),l=t(57485),u=t(31682),d=t(89466);function c(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:i}}=e;return{value:a,label:t,attributes:n,default:i}}))}function m(e){const{values:a,children:t}=e;return(0,i.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.W6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=m(e),[o,s]=(0,i.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[l,u]=h({queryString:t,groupId:n}),[c,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,d.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),f=(()=>{const e=l??c;return p({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:a,block:t,selectedValue:s,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),m=e=>{const a=e.currentTarget,t=d.indexOf(a),n=u[t].value;n!==s&&(c(a),l(n))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}a?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return i.createElement("li",(0,n.A)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>d.push(e),onKeyDown:p,onClick:m},o,{className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===a})}),t??a)})))}function v(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=g(e);return i.createElement("div",{className:(0,r.A)("tabs-container",b.tabList)},i.createElement(y,(0,n.A)({},e,a)),i.createElement(v,(0,n.A)({},e,a)))}function C(e){const a=(0,f.A)();return i.createElement(w,(0,n.A)({key:String(a)},e))}},78046:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>h,default:()=>w,frontMatter:()=>p,metadata:()=>g,toc:()=>b});var n=t(58168),i=(t(96540),t(15680)),r=t(11470),o=t(19365),s=t(77964);const l='# Import the App class from the embedchain module\nfrom embedchain import App\n\n# Create an instance of the App class using a custom configuration\napp = App.from_config(config={\n    # Configuration for the large language model (LLM)\n    "llm": {\n        # Specify the provider for the LLM, in this case, Clarifai\n        "provider": "clarifai",\n        # Configuration details for the LLM\n        "config": {\n            # Specify the model URL from Clarifai\n            "model": "https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct",\n            # Additional model parameters\n            "model_kwargs": {\n                # Temperature parameter for the model, which controls the randomness of the output\n                "temperature": 0.5,\n                # Maximum number of tokens (words or pieces of words) in the generated response\n                "max_tokens": 1000\n            }\n        }\n    },\n    # Configuration for the embedder\n    "embedder": {\n        # Specify the provider for the embedder, in this case, Clarifai\n        "provider": "clarifai",\n        # Configuration details for the embedder\n        "config": {\n            # Specify the embedding model URL from Clarifai\n            "model": "https://clarifai.com/openai/embed/models/text-embedding-ada",\n        }\n    }\n})\n',u='app.add("https://www.forbes.com/profile/elon-musk")',d="while True:\n    # Prompt the user to enter a question\n    question = input(\"Enter question: \")\n    \n    # Check if the user wants to quit the loop\n    if question in ['q', 'exit', 'quit']:\n        # If the input is 'q', 'exit', or 'quit', break the loop and end the program\n        break\n    \n    # Use the app to query the entered question and get an answer\n    answer = app.query(question)\n    \n    # Print the answer returned by the app\n    print(answer)",c="Inserting batches in chromadb: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 1/1 [00:06<00:00,  6.86s/it]",m="Enter question: identify the person\nThe person being referred to in the context is Elon Musk.",p={},h="Using Clarifai LLMs And Models In Embedchain",g={unversionedId:"integrations/embedchain/embedchain-tutorial",id:"integrations/embedchain/embedchain-tutorial",title:"Using Clarifai LLMs And Models In Embedchain",description:"Using Clarifai models in Embedchain",source:"@site/docs/integrations/embedchain/embedchain-tutorial.md",sourceDirName:"integrations/embedchain",slug:"/integrations/embedchain/embedchain-tutorial",permalink:"/integrations/embedchain/embedchain-tutorial",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/embedchain/embedchain-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrating Clarifai With Embedchain",permalink:"/integrations/embedchain/"},next:{title:"Integrating Clarifai With LangChain",permalink:"/integrations/langchain/"}},f={},b=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Data Ingestion",id:"data-ingestion",level:2},{value:"Query",id:"query",level:2}],y={toc:b},v="wrapper";function w(e){let{components:a,...t}=e;return(0,i.yg)(v,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"using-clarifai-llms-and-models-in-embedchain"},"Using Clarifai LLMs And Models In Embedchain"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Using Clarifai models in Embedchain")),(0,i.yg)("hr",null),(0,i.yg)("p",null,"In this example, we will explore ways to create a RAG agent with LLMs and embedders from Clarifai using Embedchain."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token ",(0,i.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/python-sdk/sdk-overview/"},"here"),"."),(0,i.yg)("admonition",{parentName:"li",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Guide to get your ",(0,i.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Install the required packages."))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"!pip install embedchain[clarifai]\n")),(0,i.yg)("h2",{id:"initialisation"},"Initialisation"),(0,i.yg)("p",null,"Embedchain allows users to create personalised AI apps using the ",(0,i.yg)("inlineCode",{parentName:"p"},"App")," method. It also allows users to create and manage instances of bots (applications) that leverage custom knowledge bases for answering queries. You can also add data from different sources such as text, documents, websites, images, and videos into your app. "),(0,i.yg)("p",null,"Click ",(0,i.yg)("a",{parentName:"p",href:"https://docs.embedchain.ai/api-reference/app/overview"},"here")," to learn more about apps in embedchain."),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},l))),(0,i.yg)("p",null,"This code initializes an application instance from the EmbedChain framework with specific configurations for a large language model (LLM) and an embedder, both sourced from Clarifai. The ",(0,i.yg)("inlineCode",{parentName:"p"},"App.from_config")," method is used to set up this instance. The LLM configuration specifies the use of the ",(0,i.yg)("inlineCode",{parentName:"p"},"mistral-7B-Instruct")," model hosted by Clarifai, with additional parameters such as a temperature setting of 0.5 to control response randomness and a maximum token limit of 1000 for generated outputs. The embedder configuration uses the ",(0,i.yg)("inlineCode",{parentName:"p"},"text-embedding-ada")," model from Clarifai for embedding text data. "),(0,i.yg)("h2",{id:"data-ingestion"},"Data Ingestion"),(0,i.yg)("p",null,"In EmbedChain you can add data and its embedding from various sources into the application's knowledge base, making it accessible for querying by the bots. This process involves extracting content from different data types, converting it into embeddings using specified models, and storing these embeddings in the knowledge base. For our example, we are going to use an Image URL."),(0,i.yg)("p",null,"Click ",(0,i.yg)("a",{parentName:"p",href:"https://docs.embedchain.ai/api-reference/app/add"},"here")," to learn more about data ingestion in embedchain."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"By default, embedchain uses ",(0,i.yg)("inlineCode",{parentName:"p"},"chromadb")," as vectorstore for your app.")),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},u))),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Output"),(0,i.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},c)),(0,i.yg)("h2",{id:"query"},"Query"),(0,i.yg)("p",null,"Users can now run queries on the data they ingested using the ",(0,i.yg)("inlineCode",{parentName:"p"},"app.query()")," method."),(0,i.yg)("p",null,"Refer to ",(0,i.yg)("a",{parentName:"p",href:"https://docs.embedchain.ai/api-reference/app/query"},"this")," page to know more about ",(0,i.yg)("inlineCode",{parentName:"p"},"app.query()"),"."),(0,i.yg)(r.A,{mdxType:"Tabs"},(0,i.yg)(o.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},d))),(0,i.yg)("details",null,(0,i.yg)("summary",null,"Output"),(0,i.yg)(s.A,{className:"language-python",mdxType:"CodeBlock"},m)))}w.isMDXComponent=!0}}]);