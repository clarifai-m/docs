"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5552],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>h});var l=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,l,a=function(e,t){if(null==e)return{};var o,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=c(o),g=a,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return o?l.createElement(h,i(i({ref:t},p),{},{components:o})):l.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=g;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[u]="string"==typeof e?e:a,i[1]=n;for(var c=2;c<r;c++)i[c]=o[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,o)}g.displayName="MDXCreateElement"},19885:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var l=o(58168),a=(o(96540),o(15680));const r={description:"Capture inputs used for making predictions in your app",sidebar_position:3},i="Collectors",n={unversionedId:"portal-guide/data/collectors",id:"portal-guide/data/collectors",title:"Collectors",description:"Capture inputs used for making predictions in your app",source:"@site/docs/portal-guide/data/collectors.md",sourceDirName:"portal-guide/data",slug:"/portal-guide/data/collectors",permalink:"/portal-guide/data/collectors",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/data/collectors.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Capture inputs used for making predictions in your app",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Object Tracking",permalink:"/portal-guide/data/explorer/object-tracking"},next:{title:"Making Predictions",permalink:"/portal-guide/ppredict"}},s={},c=[{value:"Install the Module",id:"install-the-module",level:2},{value:"Option 1",id:"option-1",level:3},{value:"Option 2",id:"option-2",level:3},{value:"Create Collector",id:"create-collector",level:2},{value:"Collector ID\u200b",id:"collector-id",level:3},{value:"Description",id:"description",level:3},{value:"Pre-queue Workflow\u200b",id:"pre-queue-workflow",level:3},{value:"Post-queue Workflow\u200b",id:"post-queue-workflow",level:3},{value:"Post Inputs Key",id:"post-inputs-key",level:3},{value:"Activate Collector",id:"activate-collector",level:3},{value:"Caller",id:"caller",level:3},{value:"Source",id:"source",level:3},{value:"Create new Collector",id:"create-new-collector",level:3},{value:"Manage Collectors",id:"manage-collectors",level:2},{value:"Example",id:"example",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,l.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"collectors"},"Collectors"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Capture inputs used for making predictions in your app")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Collector is an ingenious feature that allows you to capture the inputs used for making predictions. After creating a collector, which includes specifying the caller user ID and the source model, a triggering process is established. "),(0,a.yg)("p",null,"This process ensures that whenever the stated user makes a prediction using the specified model, the inputs used in generating the predictions are automatically ingested and stored in your app."),(0,a.yg)("p",null,"With collectors, you can automatically pipe in data from production models, gather inputs to feed your models with real-world training data, and unlock many platform training capabilities."),(0,a.yg)("p",null,"To create a collector within your application, you need to use the Clarifai\u2019s ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/clarifai/data/modules/collector"},"Collectors module"),". "),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Modules are custom plugins with UI elements that let you extend the capabilities of the Clarifai platform. You can learn more about them ",(0,a.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/modules/"},"here"),". ")),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"The Collector feature is currently exclusively available to our Professional and Enterprise users. Learn more ",(0,a.yg)("a",{parentName:"p",href:"https://www.clarifai.com/pricing"},"here"),".")),(0,a.yg)("p",null,"Let\u2019s demonstrate how you can use the module to create a collector. "),(0,a.yg)("h2",{id:"install-the-module"},"Install the Module"),(0,a.yg)("h3",{id:"option-1"},"Option 1"),(0,a.yg)("p",null,"Go to the Collectors module ",(0,a.yg)("a",{parentName:"p",href:"https://clarifai.com/clarifai/data/modules/collector"},"page")," and click the ",(0,a.yg)("strong",{parentName:"p"},"Install Module")," button at the upper-right corner. "),(0,a.yg)("p",null,"Next, on the small window that pops up, select a desired user and destination app for installing the module."),(0,a.yg)("p",null,"Click the ",(0,a.yg)("strong",{parentName:"p"},"Confirm")," button."),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(82492).A,width:"1914",height:"900"})),(0,a.yg)("p",null,"On the ensuing page, choose a destination URL for installing the module, select the module visibility, and click the ",(0,a.yg)("strong",{parentName:"p"},"Install to this App!")," button. "),(0,a.yg)("p",null,"After the module has been successfully installed, click the ",(0,a.yg)("strong",{parentName:"p"},"Click to use installed module version")," button to start using it. You can also refresh the page for your installed module to appear on the left sidebar under the ",(0,a.yg)("strong",{parentName:"p"},"Installed Modules")," category."),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(66775).A,width:"1895",height:"856"})),(0,a.yg)("p",null,"If you click the button, you\u2019ll be redirected to a page that requires you to authorize the module to access data on your behalf. You will see the permissions the module requires.  "),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(23758).A,width:"1827",height:"875"})),(0,a.yg)("p",null,"Click the ",(0,a.yg)("strong",{parentName:"p"},"Authorize")," button."),(0,a.yg)("h3",{id:"option-2"},"Option 2"),(0,a.yg)("p",null,"Alternatively, you can use the module\u2019s URL to install it in your app. To do so, click the ",(0,a.yg)("strong",{parentName:"p"},"Manage Installed Modules")," option at the bottom of the collapsible left sidebar. "),(0,a.yg)("p",null,"Grab the URL of the Collectors module and paste it into the ",(0,a.yg)("strong",{parentName:"p"},"Module URL")," input field.  "),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(59873).A,width:"1814",height:"838"})),(0,a.yg)("p",null,"You can then follow the ensuing prompts to complete installing the module in your app. "),(0,a.yg)("h2",{id:"create-collector"},"Create Collector"),(0,a.yg)("p",null,"After installing the module and authorizing it to access data on your behalf, you\u2019ll be redirected to a page that allows you to create it. You can fill in the required details. "),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(91608).A,width:"1755",height:"956"})),(0,a.yg)("h3",{id:"collector-id"},"Collector ID\u200b"),(0,a.yg)("p",null,"Give your collector a useful and descriptive name."),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u200b\nProvide additional details about your collector."),(0,a.yg)("h3",{id:"pre-queue-workflow"},"Pre-queue Workflow\u200b"),(0,a.yg)("p",null,"In many scenarios, you will only want to ingest a sample, or subset of a given data source into your app. Pre-queue workflows allow you to pre-process your inputs so that you can sample and filter your new data before it is ever added to your app. Pre-queue workflows allow you to specify sampling rules for triggering data ingestion."),(0,a.yg)("p",null,"Common pre-queue workflows are designed to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Randomly sample inputs"),(0,a.yg)("li",{parentName:"ul"},"Filter inputs by metadata"),(0,a.yg)("li",{parentName:"ul"},"Filter inputs with a maximum probability below a given threshold"),(0,a.yg)("li",{parentName:"ul"},"Filter inputs with a minimum probability above a given threshold"),(0,a.yg)("li",{parentName:"ul"},"Filter specific concept probabilities above a given threshold"),(0,a.yg)("li",{parentName:"ul"},"Undertake knowledge graph mapping from public General model concepts to a custom model")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"At least one (pre-queue or post-queue) workflow ID is required. ")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"For this example, let\u2019s create a ",(0,a.yg)("strong",{parentName:"em"},"random-sample")," workflow, which randomly samples the inputs to be collected in your app. Let\u2019s set the ",(0,a.yg)("strong",{parentName:"em"},"keep_fraction")," parameter to 1, implying that all (100%) the inputs predicted by the specified model will be kept and added to your app.")," ")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("img",{src:o(66099).A,width:"1920",height:"841"}))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"After creating the workflow in the ",(0,a.yg)("a",{parentName:"em",href:"https://docs.clarifai.com/portal-guide/workflows/workflow-builder/"},"Workflow Builder"),", let\u2019s select it in the ",(0,a.yg)("strong",{parentName:"em"},"Pre-Queue Workflow")," field."))),(0,a.yg)("h3",{id:"post-queue-workflow"},"Post-queue Workflow\u200b"),(0,a.yg)("p",null,"This is the workflow to run after the collector has processed the queued input. This workflow uses the original input to the model as input to the workflow so that you can run additional models as well on that input to decide whether to queue the model or not. "),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"For this example, let\u2019s create an ",(0,a.yg)("strong",{parentName:"em"},"image-to-text")," workflow, which uses the ",(0,a.yg)("a",{parentName:"em",href:"https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip"},"general-english-image-caption-blip")," model to generate English captions from images. So, the images outputted by the pre-queue workflow will be captioned by the post-queue workflow, and the captioned text stored in your app."))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("img",{src:o(77295).A,width:"1918",height:"841"}))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"After creating the workflow in the Workflow Builder, let\u2019s select it in the ",(0,a.yg)("strong",{parentName:"em"},"Post-Queue Workflow")," field."))),(0,a.yg)("p",null,"If the workflow output has any field that is non-empty, then it will be passed on to POST /inputs to the destination app."),(0,a.yg)("h3",{id:"post-inputs-key"},"Post Inputs Key"),(0,a.yg)("p",null,"Select the PAT key that you would like your module to use to enable inputs to be posted to your app. This key must have the PostInputs scope, since it grants the collector the authority to POST inputs to your app. "),(0,a.yg)("p",null,"It should also have the permissions to access the source model used for making the predictions. "),(0,a.yg)("h3",{id:"activate-collector"},"Activate Collector"),(0,a.yg)("p",null,"Select the checkbox if you want to activate the collector and make it ready to be used. Otherwise, the collector will remain inactive. "),(0,a.yg)("h3",{id:"caller"},"Caller"),(0,a.yg)("p",null,"Specify the ID of the caller who will be making the prediction requests. You can even provide your own user ID. "),(0,a.yg)("h3",{id:"source"},"Source"),(0,a.yg)("p",null,"Specify the source model from which you want to collect data. The collector will automatically post the inputs utilized by the caller for making predictions using the specified model into your app. "),(0,a.yg)("p",null,"You need to specify the model URL and its version ID. "),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("em",{parentName:"p"},"For this example, let\u2019s specify the ",(0,a.yg)("a",{parentName:"em",href:"https://clarifai.com/clarifai/main/models/general-image-recognition"},"general-image-recognition")," model with its version ID as aa7f35c01e0642fda5cf400f543e7c40."))),(0,a.yg)("h3",{id:"create-new-collector"},"Create new Collector"),(0,a.yg)("p",null,"Here are the details we provided for creating the new collector:"),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(10890).A,width:"1737",height:"919"})),(0,a.yg)("p",null,"Finally, click the ",(0,a.yg)("strong",{parentName:"p"},"Create new collector")," button. "),(0,a.yg)("h2",{id:"manage-collectors"},"Manage Collectors"),(0,a.yg)("p",null,"If you click the ",(0,a.yg)("strong",{parentName:"p"},"Show All")," option located under the ",(0,a.yg)("strong",{parentName:"p"},"collector")," module within the collapsible left sidebar, you will be directed to a subsequent page where your created collector, along with its corresponding details, will be listed for your review."),(0,a.yg)("p",null,"This page also allows you to effortlessly deactivate, reactivate, or delete collectors as needed."),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(61309).A,width:"1804",height:"919"})),(0,a.yg)("p",null,"If you click the ",(0,a.yg)("strong",{parentName:"p"},"Update")," option, you will be directed to a subsequent page where you can update the details of your collector."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"Let\u2019s say the caller you\u2019d specified uses ",(0,a.yg)("a",{parentName:"p",href:"https://samples.clarifai.com/featured-models/ocr-woman-holding-sold-sign.jpg"},"this image")," to make a prediction on the general-image-recognition model, which you\u2019d stated as the source model. "),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(40180).A,width:"1602",height:"897"})),(0,a.yg)("p",null,"The image used for making the prediction will be automatically captured, captioned, and the generated text stored in your app \u2014 according to the rules you specified when creating the collector.  "),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(38278).A,width:"1911",height:"895"})),(0,a.yg)("p",null,"If you update the collector by deselecting the post-queue workflow, only the pre-queue workflow will remain active. As such, you'll notice that the image used for making the prediction will be captured in your app as-is. "),(0,a.yg)("p",null,(0,a.yg)("img",{src:o(2804).A,width:"1913",height:"894"})),(0,a.yg)("p",null,"That\u2019s  it!"))}d.isMDXComponent=!0},82492:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-1-f195da47a698cefa33c5a761044762e9.png"},38278:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-10-fb0a6e61413c40724382596b9e31a07b.png"},77295:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-11-d62ebd742c395e550a8e21be62507ee6.png"},2804:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-12-3b8edce10ea4a9a6cfbddba298aef95e.png"},66775:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-2-643f2c05f9b1446207b8754fd183e1c6.png"},23758:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-3-6c17bceaf73aacb157c4d3b8e0fee27e.png"},59873:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-4-ba45a9021398e93e0863d58b4cf79bcf.png"},91608:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-5-8f0fc03050c12851e307326777cf7bf7.png"},66099:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-6-bd8cf5f96fb5ea4b8dedf419a24fb1d7.png"},10890:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-7-b49f3d00dc125b2f5a8842f564ab943f.png"},61309:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-8-ffbea7fc8fc01a018eba888209566e8b.png"},40180:(e,t,o)=>{o.d(t,{A:()=>l});const l=o.p+"assets/images/collector-9-03c76c0401709aa872d230273a2b4b3f.png"}}]);