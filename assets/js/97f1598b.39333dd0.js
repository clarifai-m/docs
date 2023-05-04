"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3335],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,f=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},17061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={description:"Build a powerful and flexible application for classifying text passages.",sidebar_position:3},i="Text Classification",l={unversionedId:"legacy-portal-guide/workflows/common-workflows/custom-text-walkthrough",id:"legacy-portal-guide/workflows/common-workflows/custom-text-walkthrough",title:"Text Classification",description:"Build a powerful and flexible application for classifying text passages.",source:"@site/docs/legacy-portal-guide/workflows/common-workflows/custom-text-walkthrough.md",sourceDirName:"legacy-portal-guide/workflows/common-workflows",slug:"/legacy-portal-guide/workflows/common-workflows/custom-text-walkthrough",permalink:"/legacy-portal-guide/workflows/common-workflows/custom-text-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Build a powerful and flexible application for classifying text passages.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Visual Text Recognition",permalink:"/legacy-portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough"},next:{title:"Search, Sort, Filter and Save",permalink:"/legacy-portal-guide/psearch/"}},d={},p=[{value:"Create an app",id:"create-an-app",level:2},{value:"Navigate to Explorer Mode",id:"navigate-to-explorer-mode",level:2},{value:"Add your inputs",id:"add-your-inputs",level:2},{value:"Option 1: Browse your files",id:"option-1-browse-your-files",level:3},{value:"Option 2: Add text",id:"option-2-add-text",level:3},{value:"Add custom concepts",id:"add-custom-concepts",level:4},{value:"Navigate to Model Mode",id:"navigate-to-model-mode",level:2},{value:"Select Context-based Classifier",id:"select-context-based-classifier",level:2},{value:"Try out your new model",id:"try-out-your-new-model",level:2}],s={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"text-classification"},"Text Classification"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Build a powerful and flexible application for classifying text passages")),(0,o.kt)("hr",null),(0,o.kt)("iframe",{width:"900",height:"500",src:"https://www.youtube.com/embed/-blQVbccAF0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"Text models can be trained to understand the meaning of text passages. We offer a general text embedding model, as well as a specialized text moderation model. This walkthrough shows you how to create a custom text model from our text embedding model."),(0,o.kt)("h2",{id:"create-an-app"},"Create an app"),(0,o.kt)("p",null,"Create a new application and select \u201cText\u201d as your default workflow."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6409).Z,width:"1000",height:"562"})),(0,o.kt)("h2",{id:"navigate-to-explorer-mode"},"Navigate to Explorer Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(69601).Z,width:"1000",height:"562"})),(0,o.kt)("h2",{id:"add-your-inputs"},"Add your inputs"),(0,o.kt)("h3",{id:"option-1-browse-your-files"},"Option 1: Browse your files"),(0,o.kt)("p",null,"You can upload your text directly from a ",(0,o.kt)("inlineCode",{parentName:"p"},".csv"),' file. This means you can work with your favorite spreadsheet software or text editor when preparing your data for upload. Just use the provided "CSV template" to get started.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14073).Z,width:"3840",height:"2160"})),(0,o.kt)("p",null,"Next, add your text data. At a minimum, you should add text to the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.data.text.raw")," field. You can add one concept per column to the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.data.concepts[*].id")," fields. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.data.concepts[*].value")," column, there are two options: enter the number ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," if the concept ",(0,o.kt)("em",{parentName:"p"},"is")," present in the input, enter the value ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," if the concept is ",(0,o.kt)("em",{parentName:"p"},"not")," present in the input ","(","a negative example",")",". If no value is entered, a default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," will be assigned to your input."),(0,o.kt)("p",null,"You can add columns for as many concepts as you like, and you can add new columns to add values for any other values supported by the API:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A unique identifier for your input")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.text.raw"),(0,o.kt)("td",{parentName:"tr",align:"left"},'The "text" for your input')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.concepts","[","i","]",".id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Your custom concept")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.concepts","[","i","]",".value"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The value for your custom concept ","(",(0,o.kt)("inlineCode",{parentName:"td"},"1")," for true, ",(0,o.kt)("inlineCode",{parentName:"td"},"0")," for false",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.metadata"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any additional metadata in valid ",(0,o.kt)("a",{parentName:"td",href:"https://www.json.org/json-en.html"},"JSON")," format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.geo.geo","_","point.latitude"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Latitude for geodata")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.geo.geo","_","point.longitude"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Longitude for geodata")))),(0,o.kt)("p",null,"Finally, you will need to save your work as a ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," file. If you are editing in Google Sheets, go to File ",">",">",">"," Download ",">",">",">"," Comma-separated values ","(",".csv, current sheet",")",". If you are using Excel, go to File ",">",">",">"," Save As ",">",">",">"," Browse ",">",">",">"," Save as Type ",">",">",">"," CSV."),(0,o.kt)("p",null,"Once you have downloaded the ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," file, you can then upload it by clicking on \u201cBrowse your files\u201d"),(0,o.kt)("h3",{id:"option-2-add-text"},"Option 2: Add text"),(0,o.kt)("p",null,"Just click \u201cadd text\u201d and directly enter your text in the text field."),(0,o.kt)("p",null,"Label your inputs If you \u201cadd text\u201d you will need to then label your inputs in Portal."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(11194).Z,width:"1000",height:"562"})),(0,o.kt)("h4",{id:"add-custom-concepts"},"Add custom concepts"),(0,o.kt)("p",null,"Click on an input and add new concepts in the right hand sidebar. Just click in the empty form field under \u201cCustom Model Predictions\u201d, enter your concept, and hit \u201creturn\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(77317).Z,width:"1000",height:"562"})),(0,o.kt)("h2",{id:"navigate-to-model-mode"},"Navigate to Model Mode"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83387).Z,width:"1000",height:"562"})),(0,o.kt)("h2",{id:"select-context-based-classifier"},"Select Context-based Classifier"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(74748).Z,width:"1000",height:"562"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MODEL ID ","(","OPTIONAL",")")," - Optional custom model ID of your choosing."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DISPLAY NAME")," - This is the name of your new custom model. Enter a descriptive name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.DATA.CONCEPTS")," - Click in the empty form field and select all of the custom concepts that you have added one-by-one."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.OUTPUT","_","CONFIG.CONCEPTS","_","MUTUALLY","_","EXCLUSIVE")," - Use the default setting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.OUTPUT","_","CONFIG.CLOSED","_","ENVIRONMENT")," - Set CLOSED","_","ENVIRONMENT to \u201cYes\u201d."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.OUTPUT","_","CONFIG.EMBED","_","MODEL","_","VERSION","_","ID")," - Use the default setting.")),(0,o.kt)("p",null,"Once you click \u201cCreate Model\u201d, a new screen will appear."),(0,o.kt)("p",null,"Click \u201cTrain Model\u201d in the upper right hand corner of the screen."),(0,o.kt)("h2",{id:"try-out-your-new-model"},"Try out your new model"),(0,o.kt)("p",null,"Navigate to \u201cExplorer Mode\u201d and \u201cAdd Inputs\u201d. Add some new text inputs, and then navigate back to \u201cExplorer Mode\u201d"),(0,o.kt)("p",null,"You will see custom concept predictions in the right hand sidebar when you click on an individual input."))}c.isMDXComponent=!0},11194:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/browse_explorer-0e8389a802a56c4bd53078a69692c5c2.jpg"},6409:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_text-b7f121780af7e2e6fbd2aee17e5f0288.jpg"},14073:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/csv_template-c39d4e10f6ce151787f205866a2c0ef3.jpg"},77317:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/label_concept-a92513f162efe95edc94d0362e849ac9.jpg"},83387:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/model_mode-061859faf2c3d6eaadbbe5e43227b4bd.jpg"},69601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nav-to-explorer-689516549ebe6ef6b142ebc9871a484b.jpg"},74748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sci_phil_context-3586759cb754e87c68998262dc47325f.jpg"}}]);