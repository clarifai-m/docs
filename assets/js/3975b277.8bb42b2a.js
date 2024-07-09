"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1529],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,g=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},64764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(58168),o=(a(96540),a(15680));const r={description:"Learn how to evaluate your fine-tuned LLMs",sidebar_position:2},i="LLM Evaluation",l={unversionedId:"portal-guide/evaluate/llms",id:"portal-guide/evaluate/llms",title:"LLM Evaluation",description:"Learn how to evaluate your fine-tuned LLMs",source:"@site/docs/portal-guide/evaluate/llms.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/llms",permalink:"/portal-guide/evaluate/llms",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/llms.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn how to evaluate your fine-tuned LLMs",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Evaluating Detection Models",permalink:"/portal-guide/evaluate/detection"},next:{title:"Evaluation Leaderboard",permalink:"/portal-guide/evaluate/leaderboard"}},s={},p=[{value:"How the LLM Eval Module Works",id:"how-the-llm-eval-module-works",level:2},{value:"Evaluation Templates",id:"evaluation-templates",level:2},{value:"1. LLM-as-a-Judge",id:"1-llm-as-a-judge",level:3},{value:"2. TruthfulQA",id:"2-truthfulqa",level:3},{value:"3. General",id:"3-general",level:3},{value:"4. Custom",id:"4-custom",level:3},{value:"Inference Parameters",id:"inference-parameters",level:2},{value:"Prompt Template",id:"prompt-template",level:2},{value:"How to Fine-Tune a Model",id:"how-to-fine-tune-a-model",level:2},{value:"Step 1: Prepare training data",id:"step-1-prepare-training-data",level:3},{value:"Step 2: Create an app",id:"step-2-create-an-app",level:3},{value:"Step 3: Add inputs to app",id:"step-3-add-inputs-to-app",level:3},{value:"Step 4: Choose a model type",id:"step-4-choose-a-model-type",level:3},{value:"Step 5: Create the model\u200b",id:"step-5-create-the-model",level:3},{value:"Step 6: Train the model\u200b",id:"step-6-train-the-model",level:3},{value:"How to Evaluate a Fine-Tuned Model",id:"how-to-evaluate-a-fine-tuned-model",level:2},{value:"Step 1: Select a dataset",id:"step-1-select-a-dataset",level:3},{value:"Step 2: Choose a template",id:"step-2-choose-a-template",level:3},{value:"Step 3: Customize weights",id:"step-3-customize-weights",level:3},{value:"Step 4: Add inference parameters",id:"step-4-add-inference-parameters",level:3},{value:"Step 5: Add prompt templates",id:"step-5-add-prompt-templates",level:3},{value:"Step 6:  Additional options",id:"step-6--additional-options",level:3},{value:"Step 7: Evaluate",id:"step-7-evaluate",level:3},{value:"Step 8: View results",id:"step-8-view-results",level:3}],u={toc:p},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"llm-evaluation"},"LLM Evaluation"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Learn how to evaluate your fine-tuned LLMs")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Fine-tuning large language models (LLMs) is a powerful strategy that lets you take a pre-trained language model and further train it on a specific dataset or task to adapt it to that particular domain or application. "),(0,o.yg)("p",null,"After specializing the model for a specific task, it\u2019s important to evaluate its performance and assess its effectiveness when provided with real-world scenarios. By running an LLM evaluation, you can gauge how well the model has adapted to the target task or domain."),(0,o.yg)("p",null,"At Clarifai, we provide the LLM Eval module to help you evaluate the strengths and weaknesses of your LLMs against standardized benchmarks alongside custom criteria."),(0,o.yg)("h2",{id:"how-the-llm-eval-module-works"},"How the LLM Eval Module Works"),(0,o.yg)("p",null,"The LLM Eval ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/modules/"},"module")," evaluates the performance of language models by comparing the predicted string to a reference string or an input.  "),(0,o.yg)("p",null,'A predicted string refers to the output generated by the fine-tuned model based on a given input text, such as a question or a prompt. A reference or context string, on the other hand, is the ground truth or the correct output for the input. It could be a human-written answer, translation, summary, or any other benchmark considered the "correct" response.'),(0,o.yg)("p",null,"The module undertakes the string evaluation by comparing the predicted string with the reference string to measure the accuracy or performance of the model. "),(0,o.yg)("p",null,"For example, in a question-answering task, if the input is a question, the predicted string would be an answer generated by the fine-tuned model in response to that question, and the reference string would be a human-generated answer that\u2019s considered correct or highly accurate for the given question. "),(0,o.yg)("p",null,"Different metrics, such as Exact Match or ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/evaluate/interpreting-evaluations/#f1-score"},"F1 Score"),", would then be used to assess how closely the predicted answer aligns with the reference answer."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The LLM Eval module allows you to evaluate across 100+ tasks covering diverse use cases like retrieval-augmented generation (RAG), classification, casual chat, content summarization, and more.")),(0,o.yg)("h2",{id:"evaluation-templates"},"Evaluation Templates"),(0,o.yg)("p",null,"You can choose a variety of templates for evaluating your fine-tuned large language model using the LLM Eval module. "),(0,o.yg)("h3",{id:"1-llm-as-a-judge"},"1. LLM-as-a-Judge"),(0,o.yg)("p",null,"The ",(0,o.yg)("a",{parentName:"p",href:"https://arxiv.org/abs/2306.05685"},"LLM-as-a-Judge")," template uses a strong LLM to evaluate the outputs of another LLM. It involves leveraging the capabilities of an AI model to perform judgment-based tasks on another AI model\u2019s work. "),(0,o.yg)("p",null,"This template employs a selected LLM to perform string evaluation on a model\u2019s predicted response based on an input question and a ground truth \u2014 as explained earlier.\nTypically, the LLM works as a judge and determines the quality of the model\u2019s predicted output against the ideal or expected output. "),(0,o.yg)("p",null,"After the judgment process, the evaluation results would then be categorized into different classes and given a score. The LangChain\u2019s ",(0,o.yg)("a",{parentName:"p",href:"https://api.python.langchain.com/en/latest/evaluation/langchain.evaluation.criteria.eval_chain.CriteriaEvalChain.html"},(0,o.yg)("inlineCode",{parentName:"a"},"CriteriaEvalChain"))," method is used to compute the classes. "),(0,o.yg)("p",null,"These classes include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Relevance")," \u2013 Is the submission referring to a real quote from the text?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Depth")," \u2013 Does the submission illustrate depth of thought?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Creativity")," \u2013 Does the submission illustrate novelty or unique ideas?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Correctness")," \u2013 Is the submission correct, accurate, and factual?"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Helpfulness")," \u2013 Is the submission helpful, insightful, and appropriate?")),(0,o.yg)("p",null,"Each of the specified classes will be given a binary score between 0 and 1, where 1 represents the highest level of confidence or agreement with the judgment provided by the LLM-as-a-judge. For example, if ",(0,o.yg)("strong",{parentName:"p"},"Relevance")," is scored at 0.80, it implies that the LLM-as-a-judge is 80% confident that the predicted response is relevant to the specified scenario. "),(0,o.yg)("admonition",{title:"Assign user-defined weights",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"You can also assign user-defined weights to each class. This lets you measure customized business metrics for specific use cases. For example, for RAG-related evaluation cases, where reading comprehension and instruction following are desired, you may want to give zero weight to ",(0,o.yg)("strong",{parentName:"p"},"Creativity")," and more weights for ",(0,o.yg)("strong",{parentName:"p"},"Accuracy"),", ",(0,o.yg)("strong",{parentName:"p"},"Helpfulness"),", and ",(0,o.yg)("strong",{parentName:"p"},"Relevance"),".")),(0,o.yg)("h3",{id:"2-truthfulqa"},"2. TruthfulQA"),(0,o.yg)("p",null,"The TruthfulQA template evaluates a model\u2019s performance based on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/sylinrl/TruthfulQA"},"TruthfulQA")," benchmark. The benchmark assesses how models imitate human falsehoods. "),(0,o.yg)("p",null,"With this template, you can evaluate if a model is truthful in generating answers to questions. If a model performs well, it will desist from generating false responses learned from mimicking human texts. If a model does not perform well, it will generate false answers that imitate popular misconceptions, which could potentially deceive people. "),(0,o.yg)("p",null,"Specifically, this template employs the zero-shot generative task methodology within the TruthfulQA framework to compute standard metrics that evaluate the quality of generated responses or answers. "),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"In the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/agent-system-operators/prompter#zero-shot-prompting"},"zero-shot approach"),", the model is not provided with specific training examples or labeled data for the task at hand. Instead, it is expected to generate responses based on its understanding of the prompt or question without any prior training on similar examples.")),(0,o.yg)("p",null,"The metrics used include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"BLEU (Bilingual Evaluation Understudy)")," \u2014 It measures the similarity between a machine-generated text and a reference human translation. "),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"ROUGE (Recall-Oriented Understudy for Gisting Evaluation)")," \u2014 It is essentially a set of metrics for evaluating automatic summarization of texts as well as machine translations. ")),(0,o.yg)("p",null,"These metrics provide valuable insights into the model's fluency, coherence, and ability to capture the essence of the input prompt or question. Both BLEU and ROUGE scores range from 0 to 10, with higher values indicating better performance."),(0,o.yg)("p",null,"You can also set up weights for each score to adjust their relative importance in the evaluation process. This allows you to customize the evaluation criteria based on specific priorities or preferences. "),(0,o.yg)("p",null,"For example, you may assign higher weights to BLEU if you prioritize lexical similarity and phrase matching, while assigning higher weights to ROUGE if you value the preservation of longer sequences and coherence."),(0,o.yg)("h3",{id:"3-general"},"3. General"),(0,o.yg)("p",null,"The General template is a standardized framework that evaluates the performance of language models by assessing the fine-tuned model\u2019s response and the ground truth (reference) scores using some common natural language processing (NLP) metrics. "),(0,o.yg)("p",null,"Some of these metrics include:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"F1"),"\u2014 This is a combined metric that considers both ",(0,o.yg)("strong",{parentName:"li"},"precision")," (proportion of correctly identified positive cases) and ",(0,o.yg)("strong",{parentName:"li"},"recall")," (proportion of actual positive cases identified) of the model's response. It measures the model's ability to accurately identify relevant information."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Exact Match"),"\u2014 It measures the percentage of model responses that exactly match the ground truth responses.\nYou can also set up weights for the metrics to adjust their relative importance in the evaluation process. This allows you to customize the evaluation criteria based on specific priorities or preferences. ")),(0,o.yg)("p",null,"For example, you may assign higher weights to the F1 score if you prioritize precision and recall equally, while assigning lower weights to BLEU and ROUGE if they are less relevant to your task."),(0,o.yg)("h3",{id:"4-custom"},"4. Custom"),(0,o.yg)("p",null,"You can also create your own custom template for performing evaluations tailored to your specific needs and objectives. Custom templates offer flexibility in defining evaluation criteria, metrics, and workflows according to the unique requirements of your task or domain."),(0,o.yg)("p",null,"For example, you can use the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/EleutherAI/lm-evaluation-harness/blob/main/docs/task_guide.md"},(0,o.yg)("inlineCode",{parentName:"a"},"lm-evaluation-harness"))," framework to create your own custom template. "),(0,o.yg)("h2",{id:"inference-parameters"},"Inference Parameters"),(0,o.yg)("p",null,"The LLM Eval module allows you to adjust inference parameters to limit or influence the model response, providing greater control over the output generated by the model. "),(0,o.yg)("p",null,"These parameters can shape various aspects of the model's behavior, such as response length, style, complexity, or specificity.\nSome of the inference parameters you can specify are ",(0,o.yg)("inlineCode",{parentName:"p"},"temperature"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"max_tokens"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"top-k"),". You can learn more about them ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/predict/llms#use-hyperparameters-to-customize-llms"},"here"),". "),(0,o.yg)("h2",{id:"prompt-template"},"Prompt Template"),(0,o.yg)("p",null,"The LLM Eval module allows you to evaluate your fine-tuned model using prompt templates. "),(0,o.yg)("p",null,"A ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/agent-system-operators/prompter/"},"prompt template")," serves as a pre-configured piece of text used to instruct an LLM. It acts as a structured query or input that guides the model in generating the desired response. "),(0,o.yg)("p",null,"After running the evaluation, the prompt templates will be ranked, allowing you to select the best-performing prompt-model combinations to use for creating ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/workflow-builder/"},"workflows"),".  "),(0,o.yg)("h2",{id:"how-to-fine-tune-a-model"},"How to Fine-Tune a Model"),(0,o.yg)("p",null,"These are the steps you need to follow to create and fine-tune your LLM model. "),(0,o.yg)("h3",{id:"step-1-prepare-training-data"},"Step 1: Prepare training data"),(0,o.yg)("p",null,"Let\u2019s start by preparing the training data in a format that Clarifai accepts. "),(0,o.yg)("p",null,"Let\u2019s say that you want to use the LLM-as-a-Judge or the General template to evaluate the performance of a fine-tuned model on a question-answering dataset. "),(0,o.yg)("p",null,"You\u2019d present it with a set of input questions wherein the LLM-as-a-Judge would gauge the model\u2019s predictions against the predefined answers \u2014 as explained earlier. As such, you\u2019d require a dataset with at least two fields: ",(0,o.yg)("inlineCode",{parentName:"p"},"question")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"answer"),".  "),(0,o.yg)("p",null,"However, the Clarifai platform only permits single-field datasets for such cases. Therefore, you need to pre-process the text in the dataset to obtain these two fields. "),(0,o.yg)("p",null,"You can use either of the following approaches to achieve that:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"JSON format")," \u2014 Structure the dataset in JSON format that includes separate 'question' and 'answer' fields.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Prompt template format")," \u2014 Distinguish between questions and answers within the text by using ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/text-to-text"},"special characters or markers"),". For example, you might structure the text as follows: ",(0,o.yg)("inlineCode",{parentName:"p"},"###Instruct: What is a cat? ###Response: A cat is an animal.")," Here, the question and answer are separated by '###Response'. By identifying and utilizing such a marker (referred to as the split word), the module can extract the two desired fields for evaluation."))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If you're using a CSV file, you need to ensure that all your data is kept within a single column.")),(0,o.yg)("p",null,"For this example, we\u2019ll use the following dataset of five samples structured in JSON format."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"question": "What are the names of some famous actors that started their careers on Broadway?",\n"answer": "Some famous actors that started their careers on Broadway include: \\n1. Hugh Jackman \\n2. Meryl Streep \\n3. Denzel Washington \\n4. Julia Roberts \\n5. Christopher Walken \\n6. Anthony Rapp \\n7. Audra McDonald \\n8. Nathan Lane \\n9. Sarah Jessica Parker \\n10. Lin-Manuel Miranda"\n}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"question": "What is some cool music from the 1920s?",\n"answer": "Some cool music from the 1920s includes jazz classics like Duke Ellington\'s \\"Mood Indigo,\\" Louis Armstrong\'s \\"West End Blues,\\" and Bessie Smith\'s \\"Down Hearted Blues.\\" Other popular tunes from the era include Fats Waller\'s \\"Ain\'t Misbehavin,\\" George Gershwin\'s \\"Rhapsody in Blue,\\" and Irving Berlin\'s \\"Puttin\' On the Ritz.\\""\n}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"question": "How did US states get their names?",\n"answer": "US states get their names from a variety of sources, including Native American tribes, Spanish explorers, British colonists, and even presidents. For example, the state of Alabama was named after the Native American tribe that lived in the area, while the state of Florida gets its name from the Spanish explorer, Ponce de Leon, who explored the area in the 1500s. Other states are named after English kings (like Virginia, named after England\'s \\"Virgin Queen,\\" Queen Elizabeth I) or presidents (like Washington, named after George Washington)."\n}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"question": "How do I wrap a present neatly?",\n"answer": "1. Start by gathering the supplies you will need to wrap the present, such as wrapping paper, tape, scissors, and ribbon.\\n\\n2. Cut the wrapping paper to the size of the gift, ensuring that there is enough paper to cover the entire gift.\\n\\n3. Place the gift in the center of the wrapping paper, and fold the sides in, tucking the excess paper at the bottom.\\n\\n4. Secure the folded paper with tape.\\n\\n5. Cut a length of ribbon and tie it around the gift.\\n\\n6. Trim the excess ribbon with scissors.\\n\\n7. Add a decorative bow or other embellishment to the top of the gift."\n}\n')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"question": "Hi, my sister and her girlfriends want me to play kickball with them. Can you explain how the game is played, so they don\'t take advantage of me?",\n"answer": "Kickball is a game similar to baseball, but with a large rubber ball instead of a bat and a ball. The game is usually played with two teams of six players each. Each team has three bases and a home plate. The players on the kicking team line up at home plate and take turns kicking the ball. The object of the game is to score runs by running around all three bases and back to home plate without being tagged out by the defense. The team with the most runs at the end of the game is the winner."\n}\n')),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"For evaluating a production-ready model, we recommend using a dataset containing at least 100 to 2,000 inputs \u2014 depending on your specific needs. This ensures a sufficiently large and diverse sample size to accurately assess the model's performance across various scenarios and edge cases.")),(0,o.yg)("admonition",{title:"TruthfulQA template format",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"If you want to use the TruthfulQA template to evaluate your model\u2019s performance, then you need to prepare your data based on that JSON format. ",(0,o.yg)("a",{parentName:"p",href:"https://huggingface.co/datasets/truthful_qa"},"Here")," is an example. ")),(0,o.yg)("h3",{id:"step-2-create-an-app"},"Step 2: Create an app"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal"},"Click here")," to learn how to create an application on the Clarifai portal. "),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"When creating the application, choose the Text/Document option as the primary input type. And in the collapsible ",(0,o.yg)("strong",{parentName:"p"},"Advanced Settings")," field, select ",(0,o.yg)("strong",{parentName:"p"},"Universal")," as the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/base-workflows/"},"base workflow"),". ")),(0,o.yg)("h3",{id:"step-3-add-inputs-to-app"},"Step 3: Add inputs to app"),(0,o.yg)("p",null,"Select the ",(0,o.yg)("strong",{parentName:"p"},"Inputs")," option on your app\u2019s collapsible left sidebar, and use the inputs uploader pop-up window to ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#add-inputs"},"upload")," the text data you prepared to a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete"},"dataset")," within your application.  "),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(31333).A,width:"1913",height:"902"})),(0,o.yg)("h3",{id:"step-4-choose-a-model-type"},"Step 4: Choose a model type"),(0,o.yg)("p",null,"Choose the ",(0,o.yg)("strong",{parentName:"p"},"Models")," option on your app\u2019s collapsible left sidebar. Click the ",(0,o.yg)("strong",{parentName:"p"},"Add Model")," button on the upper-right corner of the page.\nOn the window that pops up, select the ",(0,o.yg)("strong",{parentName:"p"},"Build a Custom Model")," option and click the ",(0,o.yg)("strong",{parentName:"p"},"Continue")," button."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(2999).A,width:"1894",height:"897"})),(0,o.yg)("p",null,"You\u2019ll be redirected to a page where you can choose the type of model you want to create and fine-tune."),(0,o.yg)("p",null,"Select the ",(0,o.yg)("strong",{parentName:"p"},"Text Generator")," option."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(79068).A,width:"1694",height:"746"})),(0,o.yg)("h3",{id:"step-5-create-the-model"},"Step 5: Create the model\u200b"),(0,o.yg)("p",null,"The ensuing page allows you to create and fine-tune a text-to-text model for generation or conversion purposes."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(44554).A,width:"1237",height:"1422"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Model Id")," \u2014Provide an ID for your model."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Dataset")," \u2014 Select the dataset you want to use to fine-tune the model. Also, select the version of your dataset."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Invalid data_tolerance_percent")," \u2014 Optionally, you can set a tolerance threshold (0 to 100) for the percentage of invalid inputs during training, and if this threshold is exceeded, training is stopped with an error."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Template")," \u2014 Select a pre-configured model template you want to use to train on your data. For this example, we\u2019ll go with the recommended template: ",(0,o.yg)("inlineCode",{parentName:"li"},"HF_Llama_2_7b_chat_GPTQ_lora"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Training settings")," \u2014 Optionally, you may configure the training settings to enhance the performance of your model. ")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"For this example, we'll modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"num_train_epochs")," parameter, located in the ",(0,o.yg)("strong",{parentName:"p"},"Trainer config")," option, to a value of 50. Increasing the epoch from 1 to 50 means that each input text will be processed 50 times during training.")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/deep-training/text-templates/"},"Click here")," to learn more about the hyperparameters that each template supports."),(0,o.yg)("h3",{id:"step-6-train-the-model"},"Step 6: Train the model\u200b"),(0,o.yg)("p",null,"Finally, click the ",(0,o.yg)("strong",{parentName:"p"},"Train")," button."),(0,o.yg)("h2",{id:"how-to-evaluate-a-fine-tuned-model"},"How to Evaluate a Fine-Tuned Model"),(0,o.yg)("p",null,"After successfully training your language model, you may want to test its performance before using it in a production environment. "),(0,o.yg)("p",null,"On the model\u2019s versions table:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(76467).A,width:"1842",height:"818"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Select the version you want to evaluate its performance;"),(0,o.yg)("li",{parentName:"ul"},"Select the evaluation dataset you want to use;"),(0,o.yg)("li",{parentName:"ul"},"And click the ",(0,o.yg)("strong",{parentName:"li"},"Evaluate")," button.")),(0,o.yg)("p",null,"You\u2019ll be redirected to the LLM Eval module page, allowing you to evaluate the performance of your model version. "),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(80856).A,width:"1325",height:"1215"})),(0,o.yg)("p",null,"These are the steps you need to follow to evaluate your fine-tuned LLM model. "),(0,o.yg)("h3",{id:"step-1-select-a-dataset"},"Step 1: Select a dataset"),(0,o.yg)("p",null,"If a holdout dataset hasn't been chosen yet, select one for evaluating your model's performance."),(0,o.yg)("h3",{id:"step-2-choose-a-template"},"Step 2: Choose a template"),(0,o.yg)("p",null,"Choose an evaluation template from the left sidebar. For this example, we\u2019ll choose the ",(0,o.yg)("strong",{parentName:"p"},"llm-as-a-judge")," template and select the ",(0,o.yg)("strong",{parentName:"p"},"Llama2-chat-70B")," model as the judge to use. "),(0,o.yg)("p",null,"Note that you can also add your own model found in the Clarifai platform by providing its publicly accessible URL."),(0,o.yg)("h3",{id:"step-3-customize-weights"},"Step 3: Customize weights"),(0,o.yg)("p",null,"Optionally, you can set up weights to adjust their relative importance in the evaluation process \u2014 as explained earlier."),(0,o.yg)("h3",{id:"step-4-add-inference-parameters"},"Step 4: Add inference parameters"),(0,o.yg)("p",null,"You can input your inference parameters using the format of comma-separated keyword arguments, for example: ",(0,o.yg)("inlineCode",{parentName:"p"},"max_new_tokens=512"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"return_full_text=False"),". "),(0,o.yg)("h3",{id:"step-5-add-prompt-templates"},"Step 5: Add prompt templates"),(0,o.yg)("p",null,"You can add up to five prompt templates to use for evaluating your model. Ensure that each of them follows ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/agent-system-operators/prompter/"},"prompter rules"),"."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Your prompt template should include at least one instance of the placeholder ",(0,o.yg)("inlineCode",{parentName:"p"},"{{question}}"),". When you input your text data at inference time, all occurrences of ",(0,o.yg)("inlineCode",{parentName:"p"},"{{question}}")," within the template will be replaced with the provided text.")),(0,o.yg)("h3",{id:"step-6--additional-options"},"Step 6:  Additional options"),(0,o.yg)("p",null,"Optionally, you could:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Provide a regex code. For instance, to extract all text following the phrase ",(0,o.yg)("inlineCode",{parentName:"p"},"### Response:"),", you may add ",(0,o.yg)("inlineCode",{parentName:"p"},"### Response: (\\w+)"),". You may leave the field empty if you prefer not to apply any filtering to your results. The filtered outputs will be displayed in the ",(0,o.yg)("strong",{parentName:"p"},"filtered_prediction")," column of the evaluation results table.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If your dataset is in the prompt template format, add a split word. Leave it empty if your dataset is in JSON format."))),(0,o.yg)("h3",{id:"step-7-evaluate"},"Step 7: Evaluate"),(0,o.yg)("p",null,"Click the ",(0,o.yg)("strong",{parentName:"p"},"Evaluate")," button to begin the evaluation process."),(0,o.yg)("h3",{id:"step-8-view-results"},"Step 8: View results"),(0,o.yg)("p",null,"After running an evaluation, you can view the results under the ",(0,o.yg)("strong",{parentName:"p"},"Evaluation Result")," section. You can also create workflows with your prompt templates."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(1985).A,width:"1362",height:"1278"})),(0,o.yg)("p",null,"The results will include the average value of your chosen metrics, as well as the individual values of each metric. Additionally, a detailed table will display extra information, such as the provided data for evaluation, model predicted output, filtered prediction, metric values, and more. "),(0,o.yg)("p",null,"Note that the results will persist on the page, and will be populated anytime you select the previously evaluated holdout dataset. "),(0,o.yg)("p",null,"That\u2019s it!"))}h.isMDXComponent=!0},2999:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/llm-evaluation-1-9d344edc9c1ade07c7f2f246d1830a86.png"},79068:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/llm-evaluation-2-ee92b3916249c1e22bb346e02c869c6e.png"},31333:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/llm-evaluation-3-5333ed35d35a70715c52106e5e0447c0.png"},44554:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/llm-evaluation-4-bb912bf08aa172dd2ce454fc12a73706.png"},76467:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/llm-evaluation-5-944c5fe4047fea35f3bde93bf267c22b.png"},80856:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/llm-evaluation-6-b6444d18170bfee72d6c4e1956507630.png"},1985:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/llm-evaluation-7-eb15f4a0b80537cb6b083f6fb6230278.png"}}]);