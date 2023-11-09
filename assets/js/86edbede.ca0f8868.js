"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2339],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,c=m["".concat(l,".").concat(h)]||m[h]||u[h]||r;return n?o.createElement(c,i(i({ref:t},d),{},{components:n})):o.createElement(c,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={description:"Learn about our prompt operators",sidebar_position:1},i="Prompter",s={unversionedId:"portal-guide/model/agent-system-operators/prompter",id:"portal-guide/model/agent-system-operators/prompter",title:"Prompter",description:"Learn about our prompt operators",source:"@site/docs/portal-guide/model/agent-system-operators/prompter.md",sourceDirName:"portal-guide/model/agent-system-operators",slug:"/portal-guide/model/agent-system-operators/prompter",permalink:"/portal-guide/model/agent-system-operators/prompter",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/agent-system-operators/prompter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn about our prompt operators",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Agent System Operators",permalink:"/portal-guide/model/agent-system-operators/"},next:{title:"Filter",permalink:"/portal-guide/model/agent-system-operators/filter"}},l={},p=[{value:"Zero-Shot Prompting",id:"zero-shot-prompting",level:2},{value:"Few-Shot Prompting",id:"few-shot-prompting",level:2},{value:"Task-Specific Prompt",id:"task-specific-prompt",level:2},{value:"Translation",id:"translation",level:2},{value:"Pre-Encoded Knowledge QA",id:"pre-encoded-knowledge-qa",level:2},{value:"Close-Book QA",id:"close-book-qa",level:2},{value:"Text Extraction",id:"text-extraction",level:2},{value:"PII removal",id:"pii-removal",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prompter"},"Prompter"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn about our prompter operator")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Text"),(0,a.kt)("p",null,"A prompt template serves as a pre-configured piece of text used to instruct a large language model (LLM). It acts as a structured query or input that guides the model in generating the desired response."),(0,a.kt)("p",null,"LLMs are trained on massive datasets of text and code, and they can be used to perform a variety of tasks, including text generation, question answering, translation, summarization, text completion, and more."),(0,a.kt)("p",null,"LLMs are designed to understand and generate text based on the instructions or prompts they receive. Prompting an LLM allows you to leverage the model\u2019s pre-trained language capabilities and control its outputs so that it can deliver what is relevant to your needs.  "),(0,a.kt)("p",null,"The quality and relevance of the generated texts depend on the specific wording and context of the prompt. Prompts can be structured in various ways, and their effectiveness often depends on how well they convey the desired task or instruction to the model. "),(0,a.kt)("p",null,"There are several prompting techniques you can use. "),(0,a.kt)("h2",{id:"zero-shot-prompting"},"Zero-Shot Prompting"),(0,a.kt)("p",null,"Zero-shot prompting leverages the model's inherent language understanding to perform tasks without any specific labeled training data. "),(0,a.kt)("p",null,"It simply requires providing a clear prompt for the LLM to generate relevant responses. The LLM is then able to use its pre-trained knowledge to complete the task. "),(0,a.kt)("p",null,"Let\u2019s demonstrate how you can create a zero-shot prompter on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/workflow-builder/"},"workflow builder")," for a text classification task. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Your prompt template should include at least one instance of the placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}"),". When you input your text data at inference time, all occurrences of ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}")," within the template will be replaced with the provided text.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Search for the ",(0,a.kt)("strong",{parentName:"p"},"Prompter")," template option in the left-hand sidebar of the workflow builder and drag it onto the empty workspace."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Use the pop-up that appears on the right-hand sidebar to define the template text. For this example, let\u2019s use the following text: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Please label the sentiment towards the movie of the given movie review. The sentiment label should be "positive" or "negative" {data.text.raw}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zero-shot prompting",src:n(52668).Z,width:"1918",height:"916"})),(0,a.kt)("p",null,"Note that we also include the ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}")," placeholder to meet the requirements of the ",(0,a.kt)("strong",{parentName:"p"},"Prompter")," template."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," You can then connect the prompter model to a text-to-text model like ",(0,a.kt)("a",{parentName:"p",href:"https://clarifai.com/openai/chat-completion/models/GPT-4"},"GPT-4"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Save your workflow."),(0,a.kt)("p",null,"To observe it in action, navigate to the workflow's individual page and click the ",(0,a.kt)("strong",{parentName:"p"},"+")," button to input your text. "),(0,a.kt)("p",null,"For example, you could input the following as your input text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Text: I\u2019ll bet the video game is a lot more fun than the film.\nSentiment: \n")),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},"Submit")," button."),(0,a.kt)("p",null,"Once the model has completed processing your input, you'll see the results, starting with the earlier template text, now adapted to your input. "),(0,a.kt)("p",null,"In this case, the prompt text becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Please label the sentiment towards the movie of the given movie review. The sentiment label should be "positive" or "negative" Text: I\u2019ll bet the video game is a lot more fun than the film. Sentiment: \n')),(0,a.kt)("p",null,"And the output becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Negative\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zero-shot prompting output",src:n(66809).Z,width:"1917",height:"862"})),(0,a.kt)("p",null,'Note that in the above zero-shot prompt, we did not give the model any examples of text alongside their classifications. The model already knows what "sentiment" means without needing any extra information\u2014that\'s how its zero-shot abilities work. '),(0,a.kt)("h2",{id:"few-shot-prompting"},"Few-Shot Prompting"),(0,a.kt)("p",null,'In few-shot prompting, the large language model is given a limited number of examples or "shots" to adapt to a particular task. With just a few examples, it can perform more specialized tasks that require specific context or knowledge.'),(0,a.kt)("p",null,"This is in contrast to zero-shot prompting, which does not require any examples. Few-shot prompting is often used for more complex tasks where zero-shot prompting is not sufficient."),(0,a.kt)("p",null,"For example, few-shot prompting can be used to train an LLM to classify new types of data, translate languages that it has not been trained on, or generate different creative text formats."),(0,a.kt)("p",null,"Let\u2019s demonstrate how you can create a few-shot prompter on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/workflow-builder/"},"workflow builder")," for a text classification task. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Your prompt template should include at least one instance of the placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}"),". When you input your text data at inference time, all occurrences of ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}")," within the template will be replaced with the provided text.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Search for the ",(0,a.kt)("strong",{parentName:"p"},"Prompter")," template option in the left-hand sidebar of the workflow builder and drag it onto the empty workspace."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Use the pop-up that appears on the right-hand sidebar to define the template text."),(0,a.kt)("p",null,"For this example, let\u2019s use the following text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Please label the sentiment towards the movie of the given movie review. The sentiment label should be "positive" or "negative".\nText: (lawrence bounces) all over the stage, dancing, running, sweating, mopping his face and generally displaying the wacky talent that brought him fame in the first place.\nSentiment: positive\n\nText: despite all evidence to the contrary, this clunker has somehow managed to pose as an actual feature movie, the kind that charges full admission and gets hyped on tv and purports to amuse small children and ostensible adults.\nSentiment: negative\n\nText: for the first time in years, de niro digs deep emotionally, perhaps because he\'s been stirred by the powerful work of his co-stars.\nSentiment: positive\n\\n{data.text.raw}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"few-shot prompting",src:n(86969).Z,width:"1910",height:"859"})),(0,a.kt)("p",null,"Note that we also include the ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}")," placeholder to meet the requirements of the ",(0,a.kt)("strong",{parentName:"p"},"Prompter")," template."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," You can then connect the prompter model to a text-to-text model like ",(0,a.kt)("a",{parentName:"p",href:"https://clarifai.com/openai/chat-completion/models/GPT-4"},"GPT-4"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Save your workflow."),(0,a.kt)("p",null,"To observe it in action, navigate to the workflow's individual page and click the ",(0,a.kt)("strong",{parentName:"p"},"+")," button to input your text. "),(0,a.kt)("p",null,"For example, you could input the following as your input text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Text: I'll bet the video game is a lot more fun than the film.\nSentiment:\n")),(0,a.kt)("p",null,"Click the ",(0,a.kt)("strong",{parentName:"p"},"Submit")," button."),(0,a.kt)("p",null,"Once the model has completed processing your input, you'll see the results, starting with the earlier template text, now adapted to your input. "),(0,a.kt)("p",null,"In this case, the prompter text becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Please label the sentiment towards the movie of the given movie review. The sentiment label should be "positive" or "negative". Text: (lawrence bounces) all over the stage, dancing, running, sweating, mopping his face and generally displaying the wacky talent that brought him fame in the first place. Sentiment: positive Text: despite all evidence to the contrary, this clunker has somehow managed to pose as an actual feature movie, the kind that charges full admission and gets hyped on tv and purports to amuse small children and ostensible adults. Sentiment: negative Text: for the first time in years, de niro digs deep emotionally, perhaps because he\'\'s been stirred by the powerful work of his co-stars. Sentiment: positive \\nText: I\'ll bet the video game is a lot more fun than the film. Sentiment:\n')),(0,a.kt)("p",null,"And the output becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"negative\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"few-shot prompting output",src:n(6903).Z,width:"1913",height:"929"})),(0,a.kt)("p",null,"Note that in the above few-shot prompt, we provided a few examples to guide the model to perform better. The demonstrations enabled in-context learning and acted as conditioning for successive examples in which we wanted the model to produce a response we desired. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The prompt template can be used for a variety of prompting methods. Let's delve into the descriptions of other different prompting techniques below.")),(0,a.kt)("h2",{id:"task-specific-prompt"},"Task-Specific Prompt"),(0,a.kt)("p",null,"Here is an example of a text classification task with a task-specific prompt. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Human: You are a customer service agent that is classifying emails by type.\n\nInput:\n<email>\nHi -- My Mixmaster4000 is producing a strange noise when I operate it. It also smells a bit smoky and plasticky, like burning electronics.  I need a replacement.\n</email>\n\nCategories are:\n(A) Pre-sale question\n(B) Broken or defective item\n(C) Billing question\n(D) Other (please explain)\n\nAssistant: My answer is (\n\nResponse: B) Broken or defective item\n")),(0,a.kt)("h2",{id:"translation"},"Translation"),(0,a.kt)("p",null,"Here is an example of a prompt for a text translation task. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Instruction:\n{Translate the following phrase into French}\n\nInput: \n{I miss you}\n\nResponse:\n{Je te manque}\n")),(0,a.kt)("h2",{id:"pre-encoded-knowledge-qa"},"Pre-Encoded Knowledge QA"),(0,a.kt)("p",null,"This involves utilizing the model's built-in pre-encoded knowledge base to respond to questions. The model is provided with a large collection of facts and relationships, which it uses to generate answers when given prompts or questions."),(0,a.kt)("p",null,"The pre-existing knowledge base equips the model with the ability to answer questions that demand a good understanding of the world."),(0,a.kt)("p",null,"Here is an example. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Instruction: \n{What did Albert Einstein win the Nobel Prize for?}\n\nResponse: \n{The law of the photoelectric effect}\n")),(0,a.kt)("h2",{id:"close-book-qa"},"Close-Book QA"),(0,a.kt)("p",null,"Close-book QA, also known as zero-shot QA, refers to the ability of an LLM to answer questions without access to any additional information or context beyond its internal knowledge base. "),(0,a.kt)("p",null,"This stands in contrast to open-book QA, where the LLM can access and process external sources of information, such as documents, web pages, or knowledge bases."),(0,a.kt)("p",null,"Here is an example of a close-book QA with a model specific prompt. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Below is a document, followed by a question.  Answer the question using information in the document.  Respond using only information in the document below.  Do not provide any other information that is not in the docuemnt.\n\nInput:\n\n{{DOCUMENT}}\n\nInstruction:\n\n{{QUESTION}}\n\nResponse: \n\n{{ANSWER}}\n")),(0,a.kt)("h2",{id:"text-extraction"},"Text Extraction"),(0,a.kt)("p",null,"Here is an example of a prompt for a text extraction task. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Please precisely copy any email addresses from the following text \nand then write them, one per line. Only write an email address if it\'s precisely spelled out in the input text. \nIf there are no email addresses in the text, write "N/A". Do not say anything else.\n\nInput:\n{{TEXT}}\n\nResponse:\n')),(0,a.kt)("h2",{id:"pii-removal"},"PII removal"),(0,a.kt)("p",null,"Here is an example of a prompt for removal of Personal Identifiable Information (PII). "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Here is some text. We want to remove all personally identifying information \nfrom this text and replace it with XXX. It's very important that names, phone numbers, and email addresses, gets replaced with XXX.\nHere is the text, inside <text></text> XML tags\n\n<text>\n{{TEXT}}\n</text>\n\nPlease put your sanitized version of the text with PII removed \nin <response></response> XML tags.\n")))}u.isMDXComponent=!0},52668:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/prompter_1-210657ea62356217978de10f17b05377.png"},66809:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/prompter_2-f8da0c6f2d7433c058cf7d6fbfd9d5b1.png"},6903:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/prompter_3-cb2ab99bbb5a9d9bddfeff50730bd9b5.png"},86969:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/prompter_4-75f59896aa47d17b24d42e6eec9ebffa.png"}}]);