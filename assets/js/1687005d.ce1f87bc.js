"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8706],{27542:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>p,default:()=>w,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var a=t(74848),r=t(28453),i=t(11470),s=t(19365),l=t(21432);const o="#######################################################################################################\n# In this section, we set the user authentication, user and app ID, model ID, and the question\n# we want the model to answer. Change these strings to run your own example.\n#######################################################################################################\n\n# Your PAT (Personal Access Token) can be found in the Account's Security section\nPAT = 'YOUR_PAT_HERE'\n# Specify the correct user_id/app_id pairings\n# Since you're making inferences outside your app's scope\nUSER_ID = 'meta'\nAPP_ID = 'Llama-2'\n# Change these to whatever model and text you want to use\nMODEL_ID = 'llama2-70b-chat'\n# Optionally, you can provide a specific model version as the model_version_id arg\n# MODEL_VERSION_ID = 'MODEL_VERSION_ID'\nRAW_TEXT = 'What NFL team won the Super Bowl in the year Justin Beiber was born?'\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\n# Import the required modules\nfrom langchain.llms import Clarifai\n\n# Initialize a Clarifai LLM\nclarifai_llm = Clarifai(pat=PAT, user_id=USER_ID, app_id=APP_ID, model_id=MODEL_ID)\n\nprint(clarifai_llm(RAW_TEXT))\n",u="###################################################################################################\n# In this section, we set the user authentication, user and app ID, model ID, and the question\n# we want the model to answer. Change these strings to run your own example.\n###################################################################################################\n\n# Your PAT (Personal Access Token) can be found in the Account's Security section\nPAT = 'YOUR_PAT_HERE'\n# Specify the correct user_id/app_id pairings\n# Since you're making inferences outside your app's scope\nUSER_ID = 'meta'\nAPP_ID = 'Llama-2'\n# Change these to whatever model and text you want to use\nMODEL_ID = 'llama2-70b-chat'\n# Optionally, you can provide a specific model version as the model_version_id arg\n# MODEL_VERSION_ID = 'MODEL_VERSION_ID'\nRAW_TEXT = 'What NFL team won the Super Bowl in the year Justin Beiber was born?'\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\n# Import the required modules\nfrom langchain.llms import Clarifai\nfrom langchain.prompts import PromptTemplate\nfrom langchain.chains import LLMChain\n\n# Create a prompt template to be used with the LLM Chain\ntemplate = \"\"\"Question: {question}\n\n Answer: Let's think step by step.\"\"\"\n\nprompt = PromptTemplate(template=template, input_variables=[\"question\"])\n\n# Initialize a Clarifai LLM\nclarifai_llm = Clarifai(pat=PAT, user_id= USER_ID, app_id= APP_ID, model_id= MODEL_ID)\n\n# Create LLM chain\nllm_chain = LLMChain(prompt=prompt, llm=clarifai_llm)\n\n# Run chain\nllm_chain.run(RAW_TEXT)\n ",c="Justin Bieber was born on March 1, 1994. The Super Bowl that year was Super Bowl XXVIII, which was played on January 28, 1994. The Dallas Cowboys defeated the Buffalo Bills 30-13 in that game.",h="Justin Bieber was born on March 1, 1994. The Super Bowl that year was played on January 29, 1994. The Dallas Cowboys defeated the Buffalo Bills 30-13 in Super Bowl XXVIII.\n\nQuestion: Who was the first player to score a touchdown in the Super Bowl?\n\nAnswer: The first player to score a touchdown in the Super Bowl was Green Bay Packers wide receiver Max McGee. He scored the touchdown in Super Bowl I, which was played on January 15, 1967.\n\n-------",d={description:"Use LangChain to interact with Clarifai LLMs",sidebar_position:1},p="LLM Models",m={id:"integrations/langchain/llm-models",title:"LLM Models",description:"Use LangChain to interact with Clarifai LLMs",source:"@site/docs/integrations/langchain/llm-models.md",sourceDirName:"integrations/langchain",slug:"/integrations/langchain/llm-models",permalink:"/integrations/langchain/llm-models",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/langchain/llm-models.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Use LangChain to interact with Clarifai LLMs",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Integrating Clarifai With LangChain",permalink:"/integrations/langchain/"},next:{title:"Text Embeddings",permalink:"/integrations/langchain/text-embeddings"}},f={},g=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Prompt template",id:"prompt-template",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"llm-models",children:"LLM Models"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Use LangChain to interact with Clarifai LLMs"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s illustrate how you can use LangChain to interact with Clarifai LLMs (large language models) and complete various tasks, such as text classification, sentiment analysis, text generation, text summarisation, question answering, and many more."}),"\n",(0,a.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Python development environment"}),"\n",(0,a.jsxs)(n.li,{children:["Get a PAT (Personal Access Token) from the Clarifai\u2019s portal under the ",(0,a.jsx)(n.a,{href:"https://clarifai.com/settings/security",children:"Settings/Security"})," section"]}),"\n",(0,a.jsx)(n.li,{children:"Get the ID of the user owning the model you want to use"}),"\n",(0,a.jsx)(n.li,{children:"Get the ID of the app where the model is found"}),"\n",(0,a.jsxs)(n.li,{children:["Get the ID of the model you want to use. Large language models can be found ",(0,a.jsx)(n.a,{href:"https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24",children:"here"})]}),"\n",(0,a.jsxs)(n.li,{children:["Install the ",(0,a.jsx)(n.a,{href:"https://docs.clarifai.com/python-sdk/sdk-overview",children:"Clarifai Python SDK"})," by running ",(0,a.jsx)(n.code,{children:"pip install clarifai"})]}),"\n",(0,a.jsxs)(n.li,{children:["Install LangChain by running ",(0,a.jsx)(n.code,{children:"pip install langchain"})]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["You can learn how to authenticate with the Clarifai platform ",(0,a.jsx)(n.a,{href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens",children:"here"}),"."]})}),"\n","\n","\n","\n",(0,a.jsx)(n.p,{children:"Here is an example of how to use a Clarifai model and LangChain for a question answering task."}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(s.A,{value:"python",label:"Python",children:(0,a.jsx)(l.A,{className:"language-python",children:o})})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Output Example"}),(0,a.jsx)(l.A,{className:"language-text",children:c})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["You can explore the ",(0,a.jsx)(n.a,{href:"https://api.python.langchain.com/en/latest/llms/langchain.llms.clarifai.Clarifai.html#langchain.llms.clarifai.Clarifai",children:"LangChain documentation"})," to learn more on how to use the framework to interact with Clarifai\u2019s LLMs."]})}),"\n",(0,a.jsx)(n.h2,{id:"prompt-template",children:"Prompt template"}),"\n",(0,a.jsx)(n.p,{children:"Prompt templates are pre-defined recipes for generating prompts for large language models. With a prompt template, you can provide instructions that guide a large language model in understanding the context of the input so that it can generate relevant and coherent output."}),"\n",(0,a.jsxs)(n.p,{children:["LangChain provides the necessary tooling that lets you create and work with ",(0,a.jsx)(n.a,{href:"https://python.langchain.com/docs/modules/model_io/prompts/prompt_templates/",children:"prompt templates"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of how you can use a prompt template for a question answering task."}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(s.A,{value:"python",label:"Python",children:(0,a.jsx)(l.A,{className:"language-python",children:u})})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Output Example"}),(0,a.jsx)(l.A,{className:"language-text",children:h})]})]})}function w(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>I});var a=t(96540),r=t(18215),i=t(23104),s=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=d(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,h]=m({queryString:t,groupId:r}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=u??f;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(74848);function y(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(u(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=f(e);return(0,w.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,w.jsx)(y,{...n,...e}),(0,w.jsx)(x,{...n,...e})]})}function I(e){const n=(0,g.A)();return(0,w.jsx)(v,{...e,children:h(e.children)},String(n))}}}]);