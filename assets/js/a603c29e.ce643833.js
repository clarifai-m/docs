"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4752],{44343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>v,frontMatter:()=>p,metadata:()=>f,toc:()=>g});var a=t(74848),i=t(28453),r=t(11470),s=t(19365),o=t(21432);const l='# Import the App class from the embedchain module\nfrom embedchain import App\n\n# Create an instance of the App class using a custom configuration\napp = App.from_config(config={\n    # Configuration for the large language model (LLM)\n    "llm": {\n        # Specify the provider for the LLM, in this case, Clarifai\n        "provider": "clarifai",\n        # Configuration details for the LLM\n        "config": {\n            # Specify the model URL from Clarifai\n            "model": "https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct",\n            # Additional model parameters\n            "model_kwargs": {\n                # Temperature parameter for the model, which controls the randomness of the output\n                "temperature": 0.5,\n                # Maximum number of tokens (words or pieces of words) in the generated response\n                "max_tokens": 1000\n            }\n        }\n    },\n    # Configuration for the embedder\n    "embedder": {\n        # Specify the provider for the embedder, in this case, Clarifai\n        "provider": "clarifai",\n        # Configuration details for the embedder\n        "config": {\n            # Specify the embedding model URL from Clarifai\n            "model": "https://clarifai.com/openai/embed/models/text-embedding-ada",\n        }\n    }\n})\n',d='app.add("https://www.forbes.com/profile/elon-musk")',c="while True:\n    # Prompt the user to enter a question\n    question = input(\"Enter question: \")\n    \n    # Check if the user wants to quit the loop\n    if question in ['q', 'exit', 'quit']:\n        # If the input is 'q', 'exit', or 'quit', break the loop and end the program\n        break\n    \n    # Use the app to query the entered question and get an answer\n    answer = app.query(question)\n    \n    # Print the answer returned by the app\n    print(answer)",u="Inserting batches in chromadb: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 1/1 [00:06<00:00,  6.86s/it]",h="Enter question: identify the person\nThe person being referred to in the context is Elon Musk.",p={},m="Using Clarifai LLMs And Models In Embedchain",f={id:"integrations/embedchain/embedchain-tutorial",title:"Using Clarifai LLMs And Models In Embedchain",description:"Using Clarifai models in Embedchain",source:"@site/docs/integrations/embedchain/embedchain-tutorial.md",sourceDirName:"integrations/embedchain",slug:"/integrations/embedchain/embedchain-tutorial",permalink:"/integrations/embedchain/embedchain-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/embedchain/embedchain-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrating Clarifai With Embedchain",permalink:"/integrations/embedchain/"},next:{title:"Integrating Clarifai With LangChain",permalink:"/integrations/langchain/"}},b={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Data Ingestion",id:"data-ingestion",level:2},{value:"Query",id:"query",level:2}];function x(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"using-clarifai-llms-and-models-in-embedchain",children:"Using Clarifai LLMs And Models In Embedchain"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Using Clarifai models in Embedchain"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(n.p,{children:"In this example, we will explore ways to create a RAG agent with LLMs and embedders from Clarifai using Embedchain."}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token ",(0,a.jsx)(n.a,{href:"https://docs.clarifai.com/python-sdk/sdk-overview/",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Guide to get your ",(0,a.jsx)(n.a,{href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens",children:"PAT"})]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Install the required packages."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"!pip install embedchain[clarifai]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"initialisation",children:"Initialisation"}),"\n",(0,a.jsxs)(n.p,{children:["Embedchain allows users to create personalised AI apps using the ",(0,a.jsx)(n.code,{children:"App"})," method. It also allows users to create and manage instances of bots (applications) that leverage custom knowledge bases for answering queries. You can also add data from different sources such as text, documents, websites, images, and videos into your app."]}),"\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.a,{href:"https://docs.embedchain.ai/api-reference/app/overview",children:"here"})," to learn more about apps in embedchain."]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(s.A,{value:"python",label:"Python",children:(0,a.jsx)(o.A,{className:"language-python",children:l})})}),"\n",(0,a.jsxs)(n.p,{children:["This code initializes an application instance from the EmbedChain framework with specific configurations for a large language model (LLM) and an embedder, both sourced from Clarifai. The ",(0,a.jsx)(n.code,{children:"App.from_config"})," method is used to set up this instance. The LLM configuration specifies the use of the ",(0,a.jsx)(n.code,{children:"mistral-7B-Instruct"})," model hosted by Clarifai, with additional parameters such as a temperature setting of 0.5 to control response randomness and a maximum token limit of 1000 for generated outputs. The embedder configuration uses the ",(0,a.jsx)(n.code,{children:"text-embedding-ada"})," model from Clarifai for embedding text data."]}),"\n",(0,a.jsx)(n.h2,{id:"data-ingestion",children:"Data Ingestion"}),"\n",(0,a.jsx)(n.p,{children:"In EmbedChain you can add data and its embedding from various sources into the application's knowledge base, making it accessible for querying by the bots. This process involves extracting content from different data types, converting it into embeddings using specified models, and storing these embeddings in the knowledge base. For our example, we are going to use an Image URL."}),"\n",(0,a.jsxs)(n.p,{children:["Click ",(0,a.jsx)(n.a,{href:"https://docs.embedchain.ai/api-reference/app/add",children:"here"})," to learn more about data ingestion in embedchain."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["By default, embedchain uses ",(0,a.jsx)(n.code,{children:"chromadb"})," as vectorstore for your app."]})}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(s.A,{value:"python",label:"Python",children:(0,a.jsx)(o.A,{className:"language-python",children:d})})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Output"}),(0,a.jsx)(o.A,{className:"language-python",children:u})]}),"\n",(0,a.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,a.jsxs)(n.p,{children:["Users can now run queries on the data they ingested using the ",(0,a.jsx)(n.code,{children:"app.query()"})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["Refer to ",(0,a.jsx)(n.a,{href:"https://docs.embedchain.ai/api-reference/app/query",children:"this"})," page to know more about ",(0,a.jsx)(n.code,{children:"app.query()"}),"."]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(s.A,{value:"python",label:"Python",children:(0,a.jsx)(o.A,{className:"language-python",children:c})})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Output"}),(0,a.jsx)(o.A,{className:"language-python",children:h})]})]})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),i=t(18215),r=t(23104),s=t(56347),o=t(205),l=t(57485),d=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=m({queryString:t,groupId:i}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),g=(()=>{const e=d??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=o[t].value;i!==a&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(j,{...e,children:u(e.children)},String(n))}}}]);