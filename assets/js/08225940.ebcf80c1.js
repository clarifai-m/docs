"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[521],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var l=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,l,a=function(e,t){if(null==e)return{};var o,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var d=l.createContext({}),p=function(e){var t=l.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=p(e.components);return l.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=p(o),m=a,h=s["".concat(d,".").concat(m)]||s[m]||c[m]||i;return o?l.createElement(h,n(n({ref:t},u),{},{components:o})):l.createElement(h,n({ref:t},u))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[s]="string"==typeof e?e:a,n[1]=r;for(var p=2;p<i;p++)n[p]=o[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,o)}m.displayName="MDXCreateElement"},71844:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=o(87462),a=(o(67294),o(3905));const i={description:"Seamlessly upload locally built models into our platform",sidebar_position:9},n="Local Model Upload",r={unversionedId:"portal-guide/model/local-model-upload",id:"portal-guide/model/local-model-upload",title:"Local Model Upload",description:"Seamlessly upload locally built models into our platform",source:"@site/docs/portal-guide/model/local-model-upload.md",sourceDirName:"portal-guide/model",slug:"/portal-guide/model/local-model-upload",permalink:"/portal-guide/model/local-model-upload",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Seamlessly upload locally built models into our platform",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Import Models from Hugging Face",permalink:"/portal-guide/model/hf-model-importer"},next:{title:"Creating and Managing Model Versions",permalink:"/portal-guide/model-versions/"}},d={},p=[{value:"How to Upload a Model",id:"how-to-upload-a-model",level:2},{value:"Step 1: Build the Model",id:"step-1-build-the-model",level:3},{value:"Step 2: Add the Model",id:"step-2-add-the-model",level:3},{value:"Step 3: Fill out the Model Upload Form",id:"step-3-fill-out-the-model-upload-form",level:3},{value:"Model ID",id:"model-id",level:4},{value:"Model Type",id:"model-type",level:4},{value:"Clarifai Model Notes\u200b",id:"clarifai-model-notes",level:4},{value:"Model Version Description",id:"model-version-description",level:4},{value:"Triton Model Zip URL",id:"triton-model-zip-url",level:4},{value:"Input Fields",id:"input-fields",level:4},{value:"Output Fields",id:"output-fields",level:4},{value:"Select the Checkbox\u200b",id:"select-the-checkbox",level:4},{value:"Upload Model\u200b",id:"upload-model",level:4},{value:"Step 4: Use the Model",id:"step-4-use-the-model",level:3}],u={toc:p},s="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"local-model-upload"},"Local Model Upload"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Seamlessly upload locally built models into our platform")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You can upload custom-built machine learning models from your local development environment directly into the Clarifai platform. To ensure smooth integration with the Clarifai platform, it's essential that your model adheres to the Triton format, which is our preferred data format for model deployment."),(0,a.kt)("p",null,"We've designed our platform to provide robust support for widely used tools, such as TensorFlow, PyTorch, and ONNX. This ensures that your preferred development environments and frameworks remain fully compatible with our platform, giving you flexibility and convenience in deploying your models."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The local model upload functionality is exclusively available to Enterprise users. ")),(0,a.kt)("p",null,"The local model upload feature provides several benefits, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create highly specialized and tailored AI solutions that cater to your unique business needs. "),(0,a.kt)("li",{parentName:"ul"},"Leverage Clarifai\u2019s robust infrastructure to expand the capabilities of your locally built models. For example, you can link an uploaded model with other models in a ",(0,a.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/workflows/"},"workflow")," and unlock new possibilities. "),(0,a.kt)("li",{parentName:"ul"},"Share locally built models, enabling you to showcase your innovations and collaborate with others in the AI community. ")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The uploaded model will be automatically deployed and ready to be evaluated, fine-tuned and customized, combined with other models and agent operators in a workflow, or used to serve inference requests as it is.")),(0,a.kt)("h2",{id:"how-to-upload-a-model"},"How to Upload a Model"),(0,a.kt)("h3",{id:"step-1-build-the-model"},"Step 1: Build the Model"),(0,a.kt)("p",null,"Begin by constructing the model you intend to deploy on the Clarifai platform, making sure to follow the guidelines of the Triton format."),(0,a.kt)("p",null,"Then, compress the model into a ZIP file and host it on a publicly accessible URL."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-python/tree/master/clarifai/models/model_serving"},"Click here")," to access a step-by-step guide for creating your own Triton inference model.")),(0,a.kt)("h3",{id:"step-2-add-the-model"},"Step 2: Add the Model"),(0,a.kt)("p",null,"After building the model, you can now upload it to the Clarifai platform."),(0,a.kt)("p",null,"Go to the individual page of an application you own, and select the ",(0,a.kt)("strong",{parentName:"p"},"Models")," option on the collapsible left sidebar."),(0,a.kt)("p",null,"On the models listing page, click the ",(0,a.kt)("strong",{parentName:"p"},"Add Model")," button at the upper-right corner of the page."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(46707).Z,width:"1919",height:"919"})),(0,a.kt)("p",null,"On the ",(0,a.kt)("strong",{parentName:"p"},"Add a model")," window that pops up, select the ",(0,a.kt)("strong",{parentName:"p"},"Upload a Model")," option and click the Continue button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(97399).Z,width:"1913",height:"917"})),(0,a.kt)("p",null,"You'll be redirected to the ",(0,a.kt)("strong",{parentName:"p"},"Triton Model Upload")," page, where you can upload your custom-built model. "),(0,a.kt)("h3",{id:"step-3-fill-out-the-model-upload-form"},"Step 3: Fill out the Model Upload Form"),(0,a.kt)("p",null,"You can now start filling out the model upload form. "),(0,a.kt)("p",null,"This form is where you'll provide essential information about your model and its specifications, ensuring that it is properly configured and ready for integration into the Clarifai platform. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(16221).Z,width:"1362",height:"1452"})),(0,a.kt)("p",null,"Let\u2019s talk about the fields to fill in the form."),(0,a.kt)("h4",{id:"model-id"},"Model ID"),(0,a.kt)("p",null,"Carefully pick a memorable, human-readable ID for the model you want to upload."),(0,a.kt)("h4",{id:"model-type"},"Model Type"),(0,a.kt)("p",null,"Choose a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"model type")," from the available options in the drop-down list."),(0,a.kt)("h4",{id:"clarifai-model-notes"},"Clarifai Model Notes\u200b"),(0,a.kt)("p",null,"Provide a short description of what the model is about. Later, you can go to the model's individual page, under the ",(0,a.kt)("strong",{parentName:"p"},"Notes")," section, and edit its description using Markdown."),(0,a.kt)("h4",{id:"model-version-description"},"Model Version Description"),(0,a.kt)("p",null,"Optionally, you can provide a brief description of the model version, summarizing its characteristics or updates."),(0,a.kt)("h4",{id:"triton-model-zip-url"},"Triton Model Zip URL"),(0,a.kt)("p",null,"Enter a publicly accessible, download URL for the zipped Triton model. "),(0,a.kt)("h4",{id:"input-fields"},"Input Fields"),(0,a.kt)("p",null,"Provide the required input parameters for the model."),(0,a.kt)("h4",{id:"output-fields"},"Output Fields"),(0,a.kt)("p",null,"Provide the required output parameters for the model."),(0,a.kt)("h4",{id:"select-the-checkbox"},"Select the Checkbox\u200b"),(0,a.kt)("p",null,"Select the checkbox to acknowledge uploading your custom-built model to the Clarifai platform."),(0,a.kt)("h4",{id:"upload-model"},"Upload Model\u200b"),(0,a.kt)("p",null,"Finally, click the ",(0,a.kt)("strong",{parentName:"p"},"Upload Model")," button to complete uploading your model. "),(0,a.kt)("h3",{id:"step-4-use-the-model"},"Step 4: Use the Model"),(0,a.kt)("p",null,"You\u2019ll be redirected to the individual page of the model."),(0,a.kt)("p",null,"If you check the model's versions table, you\u2019ll notice that the model is still being uploaded. It takes a few minutes for the model to be uploaded\u2014large models can take longer."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(65875).Z,width:"1918",height:"850"})),(0,a.kt)("p",null,"After the model has been uploaded, the status will change to ",(0,a.kt)("inlineCode",{parentName:"p"},"Model is trained and ready.")),(0,a.kt)("p",null,"You can now click the ",(0,a.kt)("strong",{parentName:"p"},"Use Model")," button at the upper-right corner of the page to start using the model."))}c.isMDXComponent=!0},46707:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/local_upload-1-5afcf4414110c3b2f05f66c108d671a5.png"},97399:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/local_upload-2-a180130d55d24e0f0366f826e482e027.png"},16221:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/local_upload-3-42d34d8e471dd71f90a661a034daa613.png"},65875:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/local_upload-4-3ac37e8cbfa00567934147f36a935d9a.png"}}]);