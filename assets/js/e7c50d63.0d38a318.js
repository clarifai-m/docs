"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9986],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(d,".").concat(m)]||c[m]||s[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2947:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={description:"Build a powerful and flexible application for classifying text passages.",sidebar_position:3},d="Text Classification",p={unversionedId:"portal-guide/workflows/common-workflows/custom-text-walkthrough",id:"portal-guide/workflows/common-workflows/custom-text-walkthrough",title:"Text Classification",description:"Build a powerful and flexible application for classifying text passages.",source:"@site/docs/portal-guide/workflows/common-workflows/custom-text-walkthrough.md",sourceDirName:"portal-guide/workflows/common-workflows",slug:"/portal-guide/workflows/common-workflows/custom-text-walkthrough",permalink:"/portal-guide/workflows/common-workflows/custom-text-walkthrough",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/workflows/common-workflows/custom-text-walkthrough.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Build a powerful and flexible application for classifying text passages.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Visual Text Recognition",permalink:"/portal-guide/workflows/common-workflows/visual-text-recognition-walkthrough"},next:{title:"Search, Sort, Filter and Save",permalink:"/portal-guide/psearch/"}},u=[{value:"Create an app",id:"create-an-app",children:[],level:2},{value:"Navigate to Explorer Mode",id:"navigate-to-explorer-mode",children:[],level:2},{value:"Add your inputs",id:"add-your-inputs",children:[{value:"Option 1: Browse your files",id:"option-1-browse-your-files",children:[],level:3},{value:"Option 2: Add text",id:"option-2-add-text",children:[{value:"Add custom concepts",id:"add-custom-concepts",children:[],level:4}],level:3}],level:2},{value:"Navigate to Model Mode",id:"navigate-to-model-mode",children:[],level:2},{value:"Select Context-based Classifier",id:"select-context-based-classifier",children:[],level:2},{value:"Try out your new model",id:"try-out-your-new-model",children:[],level:2}],s={toc:u};function c(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-classification"},"Text Classification"),(0,r.kt)("p",null,'{% embed url="',(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/-blQVbccAF0%22"},'https://youtu.be/-blQVbccAF0"'),' caption="Natural Language Processing with Clarifai" %}'),(0,r.kt)("p",null,"Text models can be trained to understand the meaning of text passages. We offer a general text embedding model, as well as a specialized text moderation model. This walkthrough shows you how to create a custom text model from our text embedding model."),(0,r.kt)("h2",{id:"create-an-app"},"Create an app"),(0,r.kt)("p",null,"Create a new application and select \u201cText\u201d as your default workflow."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8088).Z})),(0,r.kt)("h2",{id:"navigate-to-explorer-mode"},"Navigate to Explorer Mode"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7865).Z})),(0,r.kt)("h2",{id:"add-your-inputs"},"Add your inputs"),(0,r.kt)("h3",{id:"option-1-browse-your-files"},"Option 1: Browse your files"),(0,r.kt)("p",null,"You can upload your text directly from a ",(0,r.kt)("inlineCode",{parentName:"p"},".csv"),' file. This means you can work with your favorite spreadsheet software or text editor when preparing your data for upload. Just use the provided "CSV template" to get started.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6831).Z})),(0,r.kt)("p",null,"Next, add your text data. At a minimum, you should add text to the ",(0,r.kt)("inlineCode",{parentName:"p"},"input.data.text.raw")," field. You can add one concept per column to the ",(0,r.kt)("inlineCode",{parentName:"p"},"input.data.concepts[*].id")," fields. For the ",(0,r.kt)("inlineCode",{parentName:"p"},"input.data.concepts[*].value")," column, there are two options: enter the number ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," if the concept ",(0,r.kt)("em",{parentName:"p"},"is")," present in the input, enter the value ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," if the concept is ",(0,r.kt)("em",{parentName:"p"},"not")," present in the input ","(","a negative example",")",". If no value is entered, a default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," will be assigned to your input."),(0,r.kt)("p",null,"You can add columns for as many concepts as you like, and you can add new columns to add values for any other values supported by the API:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input.id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A unique identifier for your input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input.data.text.raw"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The "text" for your input')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input.data.concepts","[","i","]",".id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Your custom concept")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input.data.concepts","[","i","]",".value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value for your custom concept ","(",(0,r.kt)("inlineCode",{parentName:"td"},"1")," for true, ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," for false",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input.metadata"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Any additional metadata in valid ",(0,r.kt)("a",{parentName:"td",href:"https://www.json.org/json-en.html"},"JSON")," format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input.data.geo.geo","_","point.latitude"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Latitude for geodata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"input.data.geo.geo","_","point.longitude"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Longitude for geodata")))),(0,r.kt)("p",null,"Finally, you will need to save your work as a ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," file. If you are editing in Google Sheets, go to File ",">",">",">"," Download ",">",">",">"," Comma-separated values ","(",".csv, current sheet",")",". If you are using Excel, go to File ",">",">",">"," Save As ",">",">",">"," Browse ",">",">",">"," Save as Type ",">",">",">"," CSV."),(0,r.kt)("p",null,"Once you have downloaded the ",(0,r.kt)("inlineCode",{parentName:"p"},".csv")," file, you can then upload it by clicking on \u201cBrowse your files\u201d"),(0,r.kt)("h3",{id:"option-2-add-text"},"Option 2: Add text"),(0,r.kt)("p",null,"Just click \u201cadd text\u201d and directly enter your text in the text field."),(0,r.kt)("p",null,"Label your inputs If you \u201cadd text\u201d you will need to then label your inputs in Portal."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1881).Z})),(0,r.kt)("h4",{id:"add-custom-concepts"},"Add custom concepts"),(0,r.kt)("p",null,"Click on an input and add new concepts in the right hand sidebar. Just click in the empty form field under \u201cCustom Model Predictions\u201d, enter your concept, and hit \u201creturn\u201d."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8156).Z})),(0,r.kt)("h2",{id:"navigate-to-model-mode"},"Navigate to Model Mode"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2733).Z})),(0,r.kt)("h2",{id:"select-context-based-classifier"},"Select Context-based Classifier"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7817).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MODEL ID ","(","OPTIONAL",")")," - Optional custom model ID of your choosing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DISPLAY NAME")," - This is the name of your new custom model. Enter a descriptive name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.DATA.CONCEPTS")," - Click in the empty form field and select all of the custom concepts that you have added one-by-one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.OUTPUT","_","CONFIG.CONCEPTS","_","MUTUALLY","_","EXCLUSIVE")," - Use the default setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.OUTPUT","_","CONFIG.CLOSED","_","ENVIRONMENT")," - Set CLOSED","_","ENVIRONMENT to \u201cYes\u201d."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OUTPUT","_","INFO.OUTPUT","_","CONFIG.EMBED","_","MODEL","_","VERSION","_","ID")," - Use the default setting.")),(0,r.kt)("p",null,"Once you click \u201cCreate Model\u201d, a new screen will appear."),(0,r.kt)("p",null,"Click \u201cTrain Model\u201d in the upper right hand corner of the screen."),(0,r.kt)("h2",{id:"try-out-your-new-model"},"Try out your new model"),(0,r.kt)("p",null,"Navigate to \u201cExplorer Mode\u201d and \u201cAdd Inputs\u201d. Add some new text inputs, and then navigate back to \u201cExplorer Mode\u201d"),(0,r.kt)("p",null,"You will see custom concept predictions in the right hand sidebar when you click on an individual input."))}c.isMDXComponent=!0},1881:function(e,t,n){t.Z=n.p+"assets/images/browse_explorer-0e8389a802a56c4bd53078a69692c5c2.jpg"},8088:function(e,t,n){t.Z=n.p+"assets/images/create_text-b7f121780af7e2e6fbd2aee17e5f0288.jpg"},6831:function(e,t,n){t.Z=n.p+"assets/images/csv_template-c39d4e10f6ce151787f205866a2c0ef3.jpg"},8156:function(e,t,n){t.Z=n.p+"assets/images/label_concept-a92513f162efe95edc94d0362e849ac9.jpg"},2733:function(e,t,n){t.Z=n.p+"assets/images/model_mode-061859faf2c3d6eaadbbe5e43227b4bd.jpg"},7865:function(e,t,n){t.Z=n.p+"assets/images/nav-to-explorer-689516549ebe6ef6b142ebc9871a484b.jpg"},7817:function(e,t,n){t.Z=n.p+"assets/images/sci_phil_context-3586759cb754e87c68998262dc47325f.jpg"}}]);