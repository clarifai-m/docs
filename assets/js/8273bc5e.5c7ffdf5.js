"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3180],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(g,i(i({ref:t},p),{},{components:o})):r.createElement(g,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},51457:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const a={description:'Use a "Context based classifier" to quickly customize an existing model.',sidebar_position:3},i="Custom Models",l={unversionedId:"portal-guide/model/pcustom-model-walkthrough",id:"portal-guide/model/pcustom-model-walkthrough",title:"Custom Models",description:'Use a "Context based classifier" to quickly customize an existing model.',source:"@site/docs/portal-guide/model/pcustom-model-walkthrough.md",sourceDirName:"portal-guide/model",slug:"/portal-guide/model/pcustom-model-walkthrough",permalink:"/portal-guide/model/pcustom-model-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:'Use a "Context based classifier" to quickly customize an existing model.',sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Clarifai Models",permalink:"/portal-guide/model/clarifai-models"},next:{title:"Model Types",permalink:"/portal-guide/model/model-types"}},s={},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-models"},"Custom Models"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Use a "Context based classifier" to quickly customize an existing model')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"To set up a new model, you will need to head over to the ",(0,n.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/"},"Applications page")," through your account. Start by creating your new application."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(57963).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,'Click "View in Explorer", or click the "eye" icon in the lefthand sidebar.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(21562).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,'Add your inputs. Just click "browse your files" or paste image URLs in the space provided.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(65597).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,"Click on an image. You can create new concepts and label your images in the right hand sidebar."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(35263).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,'Navigate to Model Mode and select your model. Click on the "four squares" icon on the lefthand sidebar.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(51459).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,'Click "Create Custom Model" to choose a model template. You can filter your results by:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Model Type"),' You can choose "Trainable" ',"(","machine learning",")",', or "Non-Trainable" ',"(","fixed-function",")"," models."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Input")," Inputs currently accept Embeddings, Concepts, Image, Image or Video, Region Images, or Region Concepts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Output")," Outputs currently return Clusters, Color, Concepts, Embeddings, Region Embeddings, Region Concepts, Region Images, or Region Text.")),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(42464).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,'For this example we choose a context-based classifier that can use a pre-trained Clarifai Model. From here we name the model, and add concepts that we have created. The available parameters vary based on the type of model that you choose. When you have configured the model the way you like it, click the "Create Model" button at the bottom of the page.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(92694).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,'Finally, click the blue "Train Model" button in the upper righthand corner of the screen. Once it is trained you can put it to work by ',(0,n.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows"},"adding it to your workflows"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(85427).Z,width:"1000",height:"562"})))}d.isMDXComponent=!0},65597:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Add_inputs2-deedb75937ecb12c819a559c08304413.jpg"},57963:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/create_an_application-10f67153207c786c962de3bacf8141a3.jpg"},35263:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/create_concepts_and_label-2d52fe2fa71ad1129c975bee97e105f2.jpg"},92694:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/create_context_based_classifier-c4a6bce085cde5ca56d1ceef1db0151e.jpg"},42464:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/create_custom_model-9d0f1ba878132e90597056e0ff6190e0.jpg"},51459:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/model_gallery-600622e80046daa69b6c40f443379f39.jpg"},85427:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/train_model-c8b81a36cce1945d63bf96b1692aafae.jpg"},21562:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/view_in_explorer-00db149612d849bcf383184446ec8ffe.jpg"}}]);