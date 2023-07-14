"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>g,kt:()=>u});var A=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,A)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,A,n=function(e,t){if(null==e)return{};var a,A,n={},o=Object.keys(e);for(A=0;A<o.length;A++)a=o[A],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(A=0;A<o.length;A++)a=o[A],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=A.createContext({}),i=function(e){var t=A.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=i(e.components);return A.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},d=A.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),c=i(a),d=n,u=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return a?A.createElement(u,s(s({ref:t},g),{},{components:a})):A.createElement(u,s({ref:t},g))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:n,s[1]=r;for(var i=2;i<o;i++)s[i]=a[i];return A.createElement.apply(null,s)}return A.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var A=a(87462),n=(a(67294),a(3905));const o={description:"Manage and delegate your labeling work with tasks",sidebar_position:2},s="Create a Task",r={unversionedId:"portal-guide/annotate/create-a-task",id:"portal-guide/annotate/create-a-task",title:"Create a Task",description:"Manage and delegate your labeling work with tasks",source:"@site/docs/portal-guide/annotate/create-a-task.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/create-a-task",permalink:"/portal-guide/annotate/create-a-task",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Manage and delegate your labeling work with tasks",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/annotate/create-get-update-delete"},next:{title:"Label Types",permalink:"/portal-guide/annotate/label-types"}},l={},i=[{value:"Importance of Tasks",id:"importance-of-tasks",level:2},{value:"How to Create a Task",id:"how-to-create-a-task",level:2},{value:"Input Source",id:"input-source",level:3},{value:"Modeling Objective",id:"modeling-objective",level:3},{value:"Enable AI Assist",id:"enable-ai-assist",level:3},{value:"Add Collaborators",id:"add-collaborators",level:3},{value:"Task Name",id:"task-name",level:3},{value:"Instructions",id:"instructions",level:3},{value:"Submit",id:"submit",level:3}],g={toc:i},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,A.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-task"},"Create a Task"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Manage and delegate your labeling work with tasks")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Tasks enable you to delegate labeling jobs of any size to your team. You can create new labeling tasks, delegate these tasks to your workforce, and review their work in one convenient tool.  "),(0,n.kt)("h2",{id:"importance-of-tasks"},"Importance of Tasks"),(0,n.kt)("p",null,"Delegating labeling tasks to a team can provide several benefits, including:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Quality control")),(0,n.kt)("p",null,"Ensuring inputs are labeled correctly and consistently is critical for producing accurate models. By delegating the labeling tasks to a team, you can have multiple sets of eyes looking at the data and reviewing one another's work, which can help improve the accuracy of the exercise."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Flexibility")),(0,n.kt)("p",null,"Embracing a team approach to labeling can provide more flexibility in terms of workload management. If one team member is unavailable, or if they're unable to complete their assigned tasks within the stipulated time, other team members can take on their responsibilities. This ensures the labeling tasks are completed on schedule. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Improved productivity")),(0,n.kt)("p",null,"Annotating inputs can be time-consuming and resource-intensive. It can be challenging to complete the exercise wholly in-house. By delegating the work to a team, you can scale up the exercise quickly, especially as the volume of data increases. "),(0,n.kt)("p",null,"Distributing the work among team members can assist in speeding up the process and lead to efficient use of resources. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4. Expertise")),(0,n.kt)("p",null,"A team may comprise members with different backgrounds and skills, which can lead to a more comprehensive and accurate labeling process. For example, one team member may have expertise in ",(0,n.kt)("a",{parentName:"p",href:"https://www.clarifai.com/use-cases/visual-search"},"visual similarity search"),", while another may have experience with ",(0,n.kt)("a",{parentName:"p",href:"https://www.clarifai.com/solutions/content-moderation"},"content moderation"),"."),(0,n.kt)("h2",{id:"how-to-create-a-task"},"How to Create a Task"),(0,n.kt)("p",null,"Tasks enable you to delegate labeling jobs to your team. To create a task, go to your individual app page and select the ",(0,n.kt)("strong",{parentName:"p"},"Labeling")," option on the collapsible left sidebar. "),(0,n.kt)("p",null,"Next, on the ",(0,n.kt)("strong",{parentName:"p"},"Tasks")," manager page, click the ",(0,n.kt)("strong",{parentName:"p"},"Create New Task")," button at the top-right corner of the page. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(80266).Z,width:"1895",height:"827"})),(0,n.kt)("p",null,"You'll be redirected to the ",(0,n.kt)("strong",{parentName:"p"},"New Labeling Task")," page, where you can provide the details for creating a new task. "),(0,n.kt)("p",null,"Let's talk about the fields to fill in the form."),(0,n.kt)("h3",{id:"input-source"},"Input Source"),(0,n.kt)("p",null,"Start by selecting a dataset from which inputs will be assigned for the labeling task. To do so, click the ",(0,n.kt)("strong",{parentName:"p"},"Select Dataset")," search box and select the dataset you want to be used. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(64774).Z,width:"1355",height:"547"})),(0,n.kt)("p",null,"If you do not have an already created dataset, click the ",(0,n.kt)("strong",{parentName:"p"},"Create new Dataset")," option to create a new one. Then, provide the new dataset name on the drop-down that appears. You can also select the checkbox to add all the inputs in your app to the new dataset. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(82599).Z,width:"1311",height:"287"})),(0,n.kt)("h3",{id:"modeling-objective"},"Modeling Objective"),(0,n.kt)("p",null,"Next, choose the objective you want to achieve with your model. You can choose among the following label types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Classification\u2014categorizes images, videos, and texts into categories;"),(0,n.kt)("li",{parentName:"ul"},"Detection\u2014detects where an object of interest is and draws a bounding box around it;"),(0,n.kt)("li",{parentName:"ul"},"Segmentation (polygons for segmentation)\u2014outlines the exact shape or contour of an object.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(7921).Z,width:"1165",height:"265"})),(0,n.kt)("h3",{id:"enable-ai-assist"},"Enable AI Assist"),(0,n.kt)("p",null,"Concepts are the words that you are labeling your data with. Concepts can be anything you can think of, and can be written in the language of your choice. You can ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete#create-concepts"},"create concepts")," on your app, or you can create them when assigning tasks."),(0,n.kt)("p",null,"Enabling ",(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/annotate/ai-assist"},"AI Assist")," will allow Clarifai's AI to suggest concepts as you label your data. With AI Assist, you can speed up the labeling task and realize your goals faster. "),(0,n.kt)("p",null,"If you want to use the AI Assist tool, select the ",(0,n.kt)("strong",{parentName:"p"},"Yes")," option. Then, select a workflow you want to use\u2014either from your own app or an external app in the Community. You can even click the ",(0,n.kt)("strong",{parentName:"p"},"Create Workflow")," button at the bottom of the drop-down list to create a new workflow. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(23921).Z,width:"1287",height:"597"})),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Select concepts")," search box, select the concepts you want to use from the workflow. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(17030).Z,width:"1345",height:"777"})),(0,n.kt)("p",null,"You can also create new concepts, and select them. Click the plus (",(0,n.kt)("strong",{parentName:"p"},"+"),") sign next to the ",(0,n.kt)("strong",{parentName:"p"},"Select concepts")," search box and type the concept name in the empty field. Then, click the ",(0,n.kt)("strong",{parentName:"p"},"Add new concept")," button that appears underneath the search box to create the new concept. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(55442).Z,width:"1255",height:"399"})),(0,n.kt)("p",null,"The concepts you've selected will appear underneath the search box. Notice that there is a small AI Assist robot icon on the left side of each concept you've selected. The presence of the robot implies that the labeling task is going to be AI-assisted. Otherwise, the icon does not appear. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(96327).Z,width:"1297",height:"399"})),(0,n.kt)("p",null,"If you do not want to use the AI Assist tool, select the ",(0,n.kt)("strong",{parentName:"p"},"No")," option. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(51052).Z,width:"1161",height:"321"})),(0,n.kt)("p",null,"Then, select the concepts already present in your app or add new ones. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(93914).Z,width:"1267",height:"353"})),(0,n.kt)("h3",{id:"add-collaborators"},"Add Collaborators"),(0,n.kt)("p",null,"You can invite collaborators to help you with the task. Having collaborators can enhance the overall quality and efficiency of the labeling work. "),(0,n.kt)("p",null,"If you do not want to add any collaborator, select the ",(0,n.kt)("strong",{parentName:"p"},"No")," option. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(98337).Z,width:"1183",height:"315"})),(0,n.kt)("p",null,"If you want to add a collaborator(s), select the ",(0,n.kt)("strong",{parentName:"p"},"Yes")," option."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(82796).Z,width:"1323",height:"575"})),(0,n.kt)("p",null,"The drop-down section lets you specify the details and scopes of any additional collaborators who will be working on the task with you. "),(0,n.kt)("p",null,"To assign the labeling work to a worker or a group of workers, click the ",(0,n.kt)("strong",{parentName:"p"},"Select Labelers")," search box and select a worker you've already added as a collaborator within your app. You can also assign the task to yourself. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(70717).Z,width:"1181",height:"571"})),(0,n.kt)("p",null,"If you want to assign the task to another worker who already has an account on the Clarifai platform, click the ",(0,n.kt)("strong",{parentName:"p"},"Add Collaborators")," button and provide their email address in the small window that pops up. "),(0,n.kt)("p",null,"You also need to select the scopes you want the worker to have in the application. The collaborator will receive an email notification that they've been added to the application. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(21715).Z,width:"1197",height:"799"})),(0,n.kt)("p",null,"Next, you need to specify the worker strategy. This allows you to manually assign work to a specific person or have work randomly assigned to workers from a group of collaborators. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2946).Z,width:"805",height:"342"})),(0,n.kt)("p",null,"You can select either of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Full"),"\u2014All inputs will be assigned to each worker;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Partitioned"),"\u2014You will be able to break up your labeling task amongst your workers. So, you need to specify more than one labeler in the ",(0,n.kt)("strong",{parentName:"li"},"Labelers")," field. ")),(0,n.kt)("p",null,"Finally, you need to specify the review strategy. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(85861).Z,width:"781",height:"247"})),(0,n.kt)("p",null,"You can select any of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"None"),'\u2014All labels will be automatically marked with a "Success" status and can be immediately used to train your new model;')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Manual"),'\u2014Labels will be marked with a "Pending Review" status until the assigned reviewer approves them. These labels cannot be used to train new models until approved. You can choose to review all or part of a worker\'s labels. For example, if a worker is labeling 10,000 images, you might choose to review a sample size of 1% of them for quality control.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Consensus")," ","(","coming soon!",")",'\u2014Consensus review will mark labels with "Success" status in cases where multiple reviewers provide the same label.'))),(0,n.kt)("h3",{id:"task-name"},"Task Name"),(0,n.kt)("p",null,"Provide your task with a descriptive name."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(15861).Z,width:"1253",height:"243"})),(0,n.kt)("h3",{id:"instructions"},"Instructions"),(0,n.kt)("p",null,'Provide instructions for your labelers. You can even provide them with a "visual dictionary" by including sample image URLs they can refer to. '),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(734).Z,width:"1297",height:"389"})),(0,n.kt)("h3",{id:"submit"},"Submit"),(0,n.kt)("p",null,"After filling out the form for creating a new task, click the ",(0,n.kt)("strong",{parentName:"p"},"Create Task")," button to complete the process. "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(38555).Z,width:"1027",height:"151"})),(0,n.kt)("p",null,"The newly created task will be listed on the ",(0,n.kt)("strong",{parentName:"p"},"Tasks")," manager page."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(45380).Z,width:"1894",height:"543"})))}p.isMDXComponent=!0},80266:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_1-bf7a61347751ecfa69512dc92f287879.png"},45380:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_10-a73fad5807df7a1944e91fe80ed85b47.png"},7921:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_11-2473bf430abf78e7137a5aca638c159c.png"},51052:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_12-458a4e771d2612c11e778ac849dc166b.png"},23921:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_13-d6ad0feacda519d13cf809ce59ddc5cf.png"},96327:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_14-42491dc7172d15d049eb115d06e1ba3b.png"},93914:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_15-297d9d261fd8a9214658e28fdfdcef6c.png"},17030:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_16-79a5409542f617447e83d79165aa1991.png"},98337:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_17-d49f2a5f720d65ee26fb7a594386a7ce.png"},82796:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_18-7aab156f1ce516c167a135123aa443b3.png"},70717:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_19-14c109e6012c857d92193f75e489cf23.png"},15861:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_1_1-c3f218bb6f9bee6f25a063ebcefa48d7.png"},734:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_1_2-e7d2d6b37d604c9fadada5078e7ba51e.png"},21715:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_20-31d0bc82955f9bcb2a7f8f1fb044d873.png"},82599:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_21-f70ed5a15ee3d9ca7354e09dee2bc74e.png"},64774:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_4-c00ed13f9513af77995be803709a2598.png"},55442:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_5-b691b56d89620b43573f9f98ba702046.png"},2946:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_7-2ef385742713d75facdc287a5b0300c0.png"},85861:(e,t,a)=>{a.d(t,{Z:()=>A});const A=a.p+"assets/images/task_8-95d65026a11a98b6bc6419410d7373d9.png"},38555:(e,t,a)=>{a.d(t,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAMAAACXCAYAAABgBpJoAAAAAXNSR0IArs4c6QAAG/BJREFUeF7t3QuMZXV9B/DvzC5FIDxCoxttMyUEosFda3i0FFY3llYjoslWu7CAD5ItYm2UiBZfWZGISn1UTSnE0qDlsUAMpEExNdJ2dbValWihxJbGB1qaBWsRwtIt7Exz5t5x7l52Zu6duXPvOff/mcTsZuec8//9P7+/JPd7/+eciZmZmZn4IUCAAAECBAgQIECAAAECBIoRmBAGFNNrEyVAgAABAgQIECBAgAABArMCwgALgQABAgQIECBAgAABAgQIFCYgDCis4aZLgAABAgQIECBAgAABAgSEAdYAAQIECBAgQIAAAQIECBAoTEAYUFjDTZcAAQIECBAgQIAAAQIECAgDrAECBAgQIECAAAECBAgQIFCYgDCgsIabLgECBAgQIECAAAECBAgQEAZYAwQIECBAgAABAgQIECBAoDABYUBhDTddAgQIECBAgAABAgQIECAgDLAGCBAgQIAAAQIECBAgQIBAYQLCgMIabroECBAgQIAAAQIECBAgQEAYYA0QIECAAAECBAgQIECAAIHCBIQBhTXcdAkQIECAAAECBAgQIECAgDDAGiBAgAABAgQIECBAgAABAoUJCAMKa7jpEiBAgAABAgQIECBAgAABYYA1QIAAAQIECBAgQIAAAQIEChMQBhTWcNMlQIAAAQIECBAgQIAAAQLCAGuAAAECBAgQIECAAAECBAgUJiAMKKzhpkuAAAECBAgQIECAAAECBIQB1gABAgQIECBAgAABAgQIEChMQBhQWMNNlwABAgQIECBAgAABAgQICAOsAQIECBAgQIAAAQIECBAgUJiAMKCwhpsuAQIECBAgQIAAAQIECBAQBlgDBAgQIECAAAECBAgQIECgMAFhQGENN10CBAgQIECAAAECBAgQICAMsAYIECBAgAABAgQIECBAgEBhAsKAwhpuugQIECBAgAABAgQIECBAQBhgDRAgQIAAAQIECBAgQIAAgcIEhAGFNdx0CRAgQIAAAQIECBAgQICAMMAaIECAAAECBAgQIECAAAEChQkIAwpruOkSIECAAAECBAgQIECAAAFhgDVAgAABAgQIECBAgAABAgQKExAGFNZw0yVAgAABAgQIECBAgAABAsIAa4AAAQIECBAgQIAAAQIECBQmIAworOGmS4AAAQIECBAgQIAAAQIEhAHWAAECBAgQIECAAAECBAgQKExAGFBYw02XAAECBAgQIECAAAECBAgIA6wBAgQIECBAgAABAgQIECBQmIAwoLCGmy4BAgQIECBAgAABAgQIEBAGWAMECBAgQIAAAQIECBAgQKAwAWFAYQ03XQIECBAgQIAAAQIECBAgIAywBggQIECAAAECBAgQIECAQGECwoDCGm66BAgQIECAAAECBAgQIEBAGGANECBAgAABAgQIECBAgACBwgSEAYU13HQJECBAgAABAgQIECBAgIAwwBogUHOBvV/Zmad++tOaV6k8AgQIECBAgACBQQisefaz84yX/O4gLuUaBBYVEAZYIARqLDCzd2/++w9fXeMKlUaAAAECBAgQIDBogSPed1l+5aSTB31Z1yOwn4AwwIIgUGOBJ++5J794z7tqXKHSCBAgQIAAAQIEBi1wyDlbc9i55w36sq5HQBhgDRBoikBnGHDQhg05aP2GzMzMzJY/MTFxwL8P+3eddazW2J396h5vod/1elz3WliN83pdb6sx9nKvOQyXxWqrq9mg62rK/3+W89+b6pzqZ6H/Zi32u7lzevV2HAECBMZF4Imbd8xORRgwLh2t9zzsDKh3f1RXuEB3GHDkFR8qXMT0CRAgQIAAAQLjKfD4TTdGGDCeva3rrIQBde2MuggkEQZYBgQIECBAgACBMgSEAWX0uU6zFAbUqRtqIdAlIAywJAgQIECAAAECZQgIA8roc51mKQyoUzfUQkAYYA0QIECAAAECBIoUEAYU2faRTloYMFJ+gxNYXMDOACuEAAECBAgQIFCGgDCgjD7XaZbCgDp1Qy0E7AywBggQIECAAAECRQoIA4ps+0gnLQwYKb/BCdgZYA0QIECAAAECBAgkwgCrYNgCwoBhixuPQB8CbhPoA8uhBAgQIECAAIEGCwgDGty8hpYuDGho45RdhoAwoIw+myUBAgQIECBAQBhgDQxbQBgwbHHjEehDQBjQB5ZDCRAgQIAAAQINFhAGNLh5DS1dGNDQxim7DIGmhAEzMzNlNMQsCRAgQIAAgcYLTExM1HIOwoBatmWsixIGjHV7Ta7pAnUPA6oQoPrfrV+dyG1fS/71RxP5xZ5kWjbQ9KWnfgIECBAgMDYCkxPJkYcmzz9mJn9werLlRTOpAoG6hQLCgLFZco2ZiDCgMa1SaIkCdQ0D5nYC3LxzJh+4aTJPTSePPVFih8yZAAECBAgQaJLA4YckayeT9547nXM2tXYI1CUUEAY0aSWNR63CgPHoo1mMqUAdw4C53QBvv3YiX/jWRB7bM6b4pkWAAAECBAiMrcDhhyavOGUmH91Wn10CwoCxXW61nZgwoLatURiBpG5hwH5BwD9P2A1gkRIgQIAAAQKNFah2Cbzit+oTCAgDGruUGlu4MKCxrVN4CQJ1DAOqWwMuu3HSjoASFqA5EiBAgACBMReodghcdl7rloFR3y4gDBjzxVbD6QkDatgUJRGYE6hTGFDtCpiens6GN63JI4/rEQECBAgQIEBgPASOOiy55+p9mZycHGkgIAwYj/XUpFkIA5rULbUWJ1CnMKAKAm75SnLZDZNuDyhuJZowAQIECBAYX4HqdoHLzp/O2S/ObCAwqh9hwKjkyx1XGFBu7828AQJ1CQPmnhVw9ocm8rX76vlu3ga0U4kECBAgQIBATQVOP2Emt7xrtA8TFAbUdHGMcVnCgDFurqk1X6BOYcC+fdM55g1rMj3TfFczIECAAAECBAh0CkxOJD/6zL6sWTO6WwWEAdbksAWEAcMWNx6BPgTqFgZMvX5NH9U7lAABAgQIECDQHIEHPisMaE63VDoIAWHAIBRdg8AqCQgDVgnWZQkQIECAAAECXQLCAEuiNAFhQGkdN99GCQgDGtUuxRIgQIAAAQINFhAGNLh5Sl+WgDBgWWxOIjAcAWHAcJyNQoAAAQIECBAQBlgDpQkIA0rruPk2SkAY0Kh2KZYAAQIECBBosIAwoMHNU/qyBIQBy2JzEoHhCAgDhuNsFAIECBAgQICAMMAaKE1AGFBax823UQLCgEa1S7EECBAgQIBAgwWEAQ1untKXJSAMWBabkwgMR0AYMBxnoxAgQIAAAQIEhAHWQGkCwoDSOm6+jRIQBjSqXYolQIAAAQIEGiwgDGhw85S+LAFhwLLYnERgOALCgOE4G4UAAQIECBAgIAywBkoTEAaU1nHzbZSAMKBR7VIsAQIECBAg0GABYUCDm6f0ZQkIA5bF5iQCwxEQBgzH2SgECBAgQIAAAWGANVCagDCgtI6bb6MEhAGNapdiCRAgQIAAgQYLCAMa3DylL0tAGLAsNicRGI6AMGA4zkYhQIAAAQIECAgDrIHSBIQBpXXcfBslIAxoVLsUS4AAAQIECDRYQBjQ4OYpfVkCwoBlsTmJwHAEhAHDcTYKAQIECBAgQEAYYA2UJiAMKK3j5tsoAWFAo9qlWAIECBAgQKDBAsKABjdP6csSEAYsi81JBIYjIAwYjrNRCBAgQIAAAQLCAGugNAFhQGkdN99GCQgDGtUuxRIgQGBxgZcn3z8/OaI66sHkOe8ARoBAnQSEAXXqhlqGISAMGIayMQgsU0AYsEw4pxEYQ4HN5yeX/l4yddDik7t/Z7Lp0/UEmDoheeNZyRnHJnvvXv06P/aRZOtz+rPYdUOy5Yv9ndPz0cKAnqkcSGAUAsKAUagbc5QCwoBR6hubwBICwgBLhACBSuCiS5JLT0wO7uDYuyd54Oftfzg4mTo6OXhNUucw4KL3JNtPaNU8jDq3np1sPHr/NTS1PjnpqHYN30vufWz/39+zK7nmnlVad8KAVYJ1WQKDERAGDMbRVZojIAxoTq9UWqCAMKDAppsygS6BMy5Mrt00HwTsfTi57tbk8q93Hbgu2b4tOWV38spr68k47DDgQAqduwVWdRfAgQYXBtRzYaqKQFtAGGAplCYgDCit4+bbKAFhQKPapVgCgxdYl3zpymR9+9aAvT9Otr07uWvwIw3lisIAzwwYykIzCIFlCggDlgnntMYKCAMa2zqFlyAgDCihy+ZIYGGBzZckV53Y/v2e5PL3Jtfs7l2s+1vwtz+ZXH92cvyhSX6aPOfS+WtNnZZcsTnZuK51u0H1s/exZNeu5D03JA90DVvd///WzckZxyTPqq7X/jnQOUvdu/+0WwaqXQ6vT849ITli7hkJTyb335d84rOtgW7vw6Gz9F52BlS3F5z7O8n6o5KDO8Z/6CfJJ69LrvvB03twwbbkDScnU4d2+FW3cnw32XRV+/jFdgacmOx8S3J8e7xh3EbR+0pyJIEyBIQBZfTZLOcFhAFWA4EaCwgDatwcpREYgsD1VyVntO9vf+Cbyamf6m/Q/T743p6sO2v+w2bn0+w3vyn5+Mb9n0nQOdKj/5ZsuzzZ1fGPO29Mjl+knIe+nbzwz1sH9BMGVKHE9Rd21Nk9Rvse/09elVy5jHv7lwoDLnhncsWGRSb2ZHLNpcnlHWHEovPrfGvAQmHAuuTW9ycbD2+N++h9yUuveHoA01/3HU2AQL8CwoB+xRzfdAFhQNM7qP6xFhAGjHV7TY7AkgKdH7jvujp5been8SXP3v9D+P0PJsd3Plm//SF16jXJzs3tIGBPcvsdyW3/kRx8XHLxmcn69gfUe7+YvPSG+UGr2qYeTu78p+TL/9n695M3tb7Nn33Q4b7kunck79mdrD+xtRthw+8nFx3XOrYKN668u/3h98Hkrurb9nXJHR9MTnpG69/v35V84pvJwwclm89Kth47P351y8Smd/f/gXmpMGD2VobnJvffm9z29fb1j04ufmV7R0WSh76XvPDPWrVsfHNy62ntuh5LdtyZ3Fn5HZ2cflry6l9Nnje3A2OBMGD7B5OLfqN1jb0PJtve0dxbQXpYlg4hUFsBYUBtW6OwVRIQBqwSrMsSGISAMGAQiq5BoKECG5JvvDOZape/47zkkj6n0v2N9aM/bW2zv+a++Qv9cvfBAb7xzonJNy5p17A72fK2+d0B27cml+94ekFXfTzZvK7179+5PXnl5+aPWeqZAVv/NPnYb7aO7w4fqn+79hPJmc+cv97tH07e3OfugKXCgM2vSY76anJd920Im5MfvqYddDycbLm4ZfGxK5Otv96qadeOZMvnF2nSAcKA/R4Q+Vhy+fv6uxWkzyXhcAIEFhEQBlgepQkIA0rruPk2SkAY0Kh2KZbAYAU6PzgmWXEY8EhyyZuT/T6/d4xRbU1/3hVPn8Ktf5VsbD8ToJcaFvvAv1QY8Muxqucj/FFyTVc5nedXv7r/H5JNfb45YakwYLEm/nKnRkd9nTVV3+q/7aOLPM+gKww4dWfypa3JEdWgTyY7PpVc0t4tMdjF5GoECPQiIAzoRckx4yQgDBinbprL2AkIA8aupSZEoC+BztsE7vxwsm0F34If8JkDFyYPbuq9pO4wYONLks0bkg2/lhxxZLLuGR0P3Ks+rO9MNn16/vpLhQFLPYegu9LlPGSvpzDg2OStG5OTj0mmDk/WHd2a19yDFdMZVmxKvnth8qy54vYlD/1XctffJ5f8XVfFnWHA7uQ7R87fErHkroLe2+RIAgSWKSAMWCac0xorIAxobOsUXoKAMKCELpsjgYUFrvhgckH7XvI8nLz24v7uJV/qg+/Um5JvbGyN388DCjsfbFjdevCFu5NdP0q+883kzOqe+xNa1+wrDFiXfOPj7VsSOrbhD3p9LGYydX6y8+XtWwGeTL5zd/Llu5N72880ONDOgM76Np6VvGVTsrHz2QzV1v+L2rscunYGVLs0traP9ayAQXfa9Qj0LyAM6N/MGc0WEAY0u3+qH3MBYcCYN9j0CCwhsN+H0/YD9V57de8PzVsqDMhrkh/OPTzwx8mpvTyQ72XJ91/X3tq+Ozn1bfvXs5LbBO746/Y35R0PHxz0IlnMZNH7/zvDigVuY/hlrScmd1yYnNT98MXuZwZ8NLn1A/O3YXiLwKC77XoE+hMQBvTn5ejmCwgDmt9DMxhjAWHAGDfX1Aj0KND9EMCH7kvef+0B7ktfl2zflpyyO3ll+z76JcOAdcmXPpKsX9Mqpqet6l1b3fcLA7rfBrDIbQIP7EpOvXp/hM6dEKv1wXjRMOAj89/Ud1uc8Zbk+t9u17tUGJDkgKHIAR4gOHVWx3MDDrCbosdl4jACBAYgIAwYAKJLNEpAGNCodim2NAFhQGkdN18CBxDo+pZ59oh9yaO/SHbvaR9/aDJ1ZOue9s6t+UuGAdWH1ncm2zfMj/vAfcmOnfPf9p98YrLxucnuzydbvli9Sy/57pvm75Gfff1f9SyDrtfvVVfsvk1g8yXJVSfOf6C+88vJPYcnpyfZUgUYXQ9NfHR38oV/THb9vHXO1LHJ6c9v//1/klM/3P+KWcxkv1f8/Ty56fPJtx9vvzLxuQd+ZkC1m+CM/0t27Er+/eHk/iSnHJ+88eXJ1EGt+u68OtlWvXpggVcL7vdGgV5Dmf6n7gwCBJYQEAZYIqUJCANK67j5NkpAGNCodimWwOoJHJtc/5bkjI7X6i00WOcT9nsJA6rrdG6PX+i6u25ohwGLHf9ksusnycZjW1d52gP+uh+21x6s87juD8YL1bPQ2w+WasKiJl1hROe1qvEeOaH9TIOOnQHdOze6x3/o7uRVH2uHKwuEAdU5l74/eetx7bO9WWCpNvo9gVUREAasCquL1lhAGFDj5iiNgDDAGiBAoFNg9gF1L0pesC45ov2tc/X7vf+b/OJnyV1fTT75+flv9XsNA6prbD4/uXhjMnVoxzfgTyaPPpJ86+7kyr9J7p0rpn1LwrnHt+uodirsTm7akTz08oUfIFidfsbWZPum5Pj2/fTVK/V2/W2y5fb5mU6dllyxOdn4zI63E+xL9u5J7v1B67jbPpdc1/57P6tkKZP1L0uu2txRXzXm3cm2q5Prb0yOrwbrCAO2vi656LQDuD2cfOHLXW8UWCQMyLrk1vcnG+dcqgcPvi+5Znc/s3MsAQIrERAGrETPuU0UEAY0sWtqLkZAGFBMq02UAAECBAgQGLGAMGDEDTD80AWEAUMnNyCB3gWEAb1bOZIAAQIECBAgsBIBYcBK9JzbRAFhQBO7puZiBIQBxbTaRAkQIECAAIERCwgDRtwAww9dQBgwdHIDEuhdQBjQu5UjCRAgQIAAAQIrERAGrETPuU0UEAY0sWtqLkZAGFBMq02UAAECBAgQGLGAMGDEDTD80AWEAUMnNyCB3gWEAb1bOZIAAQIECBAgsBIBYcBK9JzbRAFhQBO7puZiBIQBxbTaRAkQIECAAIERCwgDRtwAww9dQBgwdHIDEuhdQBjQu5UjCRAgQIAAAQIrERAGrETPuU0UEAY0sWtqLkZAGFBMq02UAAECBAgQGLGAMGDEDTD80AWEAUMnNyCB3gWEAb1bOZIAAQIECBAgsBIBYcBK9JzbRAFhQBO7puZiBIQBxbTaRAkQIECAAIERCwgDRtwAww9dQBgwdHIDEuhdQBjQu5UjCRAgQIAAAQIrERAGrETPuU0UEAY0sWtqLkZAGFBMq02UAAECBAgQGLGAMGDEDTD80AWEAUMnNyCB3gWEAb1bOZIAAQIECBAgsBIBYcBK9JzbRAFhQBO7puZiBIQBxbTaRAkQIECAAIERCwgDRtwAww9dQBgwdHIDEuhdoG5hwDFvWJPpmd7rdyQBAgQIECBAoAkCkxPJjz6zL2vWTGZiYmIkJT9+04154uYds2Mfcs7WHHbueSOpw6DlCAgDyum1mTZQoG5hwAv+eE0eebyBkEomQIAAAQIECCwicNRhyb/8pTDAIilLQBhQVr/NtmECdQsDtl45ka/dN9kwReUSIECAAAECBBYXOP2E6ey4dMbOAAulKAFhQFHtNtmmCdQpDJiensnNO6dz+U1r89gTTZNULwECBAgQIEDgwAKHH5JsP/epnLNpMpOTE24TsFCKERAGFNNqE22iQJ3CgJmZmTz11L688E/W5pHHR3MvXRN7qGYCBAgQIECg3gJHHTaT7/7FU1m7ds1sEOCZAfXul+oGJyAMGJylKxEYuEBdwoBqYtPT06l2B9zylZlcvmNtHtsz8Om6IAECBAgQIEBgqAKHH5ps3/pUzn7xxOyugMnJ0d0O6QGCQ229wZIIAywDAjUWqFMYUO0MqAKBffumc+l1k7nzW2vcLlDjtaM0AgQIECBAYHGB6vaAM0/ZlysvmJ59VkAVBIxqV0BVqTDAih22gDBg2OLGI9CHQJ3CgKrsKhCowoAqFJgNBL69xg6BPvrpUAIECBAgQKAeAtWOgDNPbgUBVQgwylcKzokIA+qxNkqqQhhQUrfNtXECdQwDWjsEWrsEbv1q8sFb1mbf9IRdAo1bXQomQIAAAQLlCVS7AdZMzuTdZz+VLS/KbBAw99DAUe4KsDOgvLVYhxkLA+rQBTUQWECgbmHAXJlVIFD9VIFA9dfqz2RmdudA9TP3p8YSIECAAAECBEYtMPchv/Vn67kA1V/nng8w6hBgzsfOgFGvlPLGFwaU13MzbpBAXcOAzlBgPgAQAjRoaSmVAAECBAgUJ9B6U0Br2qN8a8BC8MKA4pbkyCcsDBh5CxRAYGGBuocBnaGAPhIgQIAAAQIEmiBQl50A3VbCgCasnvGqURgwXv00mzETaEoYMGbspkOAAAECBAgQGLqAMGDo5MUPKAwofgkAqLOAMKDO3VEbAQIECBAgQGBwAsKAwVm6Um8CwoDenBxFYCQCwoCRsBuUAAECBAgQIDB0AWHA0MmLH1AYUPwSAFBnAWFAnbujNgIECBAgQIDA4ASEAYOzdKXeBIQBvTk5isBIBIQBI2E3KAECBAgQIEBg6ALCgKGTFz+gMKD4JQCgzgLCgDp3R20ECBAgQIAAgcEJCAMGZ+lKvQkIA3pzchSBkQh0hwFrn79+JHUYlAABAgQIECBAYPUFnrh5x+wgh5yzNYede97qD2iEogWEAUW33+TrLtAZBtS9VvURIECAAAECBAgMRkAYMBhHV1lcQBhghRCoucDPXnVWzStUHgECBAgQIECAwCAFjvr4J7L2uOMGeUnXIvA0AWGARUGg5gIzTzyRPbffVvMqlUeAAAECBAgQIDAIgV/Z8IIctGHDIC7lGgQWFRAGWCAECBAgQIAAAQIECBAgQKAwAWFAYQ03XQIECBAgQIAAAQIECBAgIAywBggQIECAAAECBAgQIECAQGECwoDCGm66BAgQIECAAAECBAgQIEBAGGANECBAgAABAgQIECBAgACBwgSEAYU13HQJECBAgAABAgQIECBAgIAwwBogQIAAAQIECBAgQIAAAQKFCQgDCmu46RIgQIAAAQIECBAgQIAAAWGANUCAAAECBAgQIECAAAECBAoT+H+rJUv/X/33sQAAAABJRU5ErkJggg=="}}]);