"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[413],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31248:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={description:"Enjoy the convenience of working with spreadsheet data.",sidebar_position:1},l="Importing Data with CSV and TSV Files",d={unversionedId:"portal-guide/advanced-topics/csv-and-tsv",id:"portal-guide/advanced-topics/csv-and-tsv",title:"Importing Data with CSV and TSV Files",description:"Enjoy the convenience of working with spreadsheet data.",source:"@site/docs/portal-guide/advanced-topics/csv-and-tsv.md",sourceDirName:"portal-guide/advanced-topics",slug:"/portal-guide/advanced-topics/csv-and-tsv",permalink:"/portal-guide/advanced-topics/csv-and-tsv",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/advanced-topics/csv-and-tsv.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Enjoy the convenience of working with spreadsheet data.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Topics",permalink:"/portal-guide/advanced-topics"},next:{title:"Scribe LabelForce",permalink:"/data-labeling-services/labeling-services"}},c=[{value:"CSV templates",id:"csv-templates",children:[{value:"Working with your CSV file",id:"working-with-your-csv-file",children:[],level:3}],level:2}],s={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"importing-data-with-csv-and-tsv-files"},"Importing Data with CSV and TSV Files"),(0,o.kt)("p",null,"You can upload your text directly from a ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," ","(",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Comma-separated_values"},"comma separated values"),")"," or ",(0,o.kt)("inlineCode",{parentName:"p"},".tsv")," ","(",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tab-separated_values"},"tab separated values"),")",' file. This means you can work with your favorite spreadsheet software or text editor when preparing your data for upload. This can be especially useful when you want to upload inputs and concepts at the same time. Just use the provided "CSV template" to get started.'),(0,o.kt)("h2",{id:"csv-templates"},"CSV templates"),(0,o.kt)("p",null,"To help you get started, you can download ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," templates for images and text uploads here:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/docs/tree/2b88c8e0d79fe52bd541c980599dec1c787beafa/.gitbook/assets/ClarifaiImageUploadTemplate.csv"},"Image Upload Template")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/docs/tree/2b88c8e0d79fe52bd541c980599dec1c787beafa/.gitbook/assets/ClarifaiTextUploadTemplate.csv"},"Text Upload Template")),(0,o.kt)("h3",{id:"working-with-your-csv-file"},"Working with your CSV file"),(0,o.kt)("p",null,"At a minimum, you should add and image URL or text to the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.data.image.url")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"input.data.text.raw")," field respectively. You can add one concept per column to the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.data.concepts[*].id")," fields. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"input.data.concepts[*].value")," column, there are two options: enter the number ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," if the concept ",(0,o.kt)("em",{parentName:"p"},"is")," present in the input, enter the value ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," if the concept is ",(0,o.kt)("em",{parentName:"p"},"not")," present in the input ","(","a negative example",")",". If no value is entered, a default value of ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," will be assigned to your input."),(0,o.kt)("p",null,"You can add columns for as many concepts as you like, and you can add new columns to add values for any other values supported by the API:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A unique identifier for your input")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.image.url"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The URL ","(","web address",")"," for your input")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.text.raw"),(0,o.kt)("td",{parentName:"tr",align:"left"},'The "text" for your input')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.concepts","[","i","]",".id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Your custom concept")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.concepts","[","i","]",".value"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The value for your custom concept ","(",(0,o.kt)("inlineCode",{parentName:"td"},"1")," for true, ",(0,o.kt)("inlineCode",{parentName:"td"},"0")," for false",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.metadata"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Any additional metadata in valid ",(0,o.kt)("a",{parentName:"td",href:"https://www.json.org/json-en.html"},"JSON")," format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.geo.geo","_","point.latitude"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Latitude for geodata")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"input.data.geo.geo","_","point.longitude"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Longitude for geodata")))),(0,o.kt)("p",null,"Finally, you will need to save your work as a ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," file. If you are editing in Google Sheets, go to File ",">",">",">"," Download ",">",">",">"," Comma-separated values ","(",".csv, current sheet",")",". If you are using Excel, go to File ",">",">",">"," Save As ",">",">",">"," Browse ",">",">",">"," Save as Type ",">",">",">"," CSV."),(0,o.kt)("p",null,"Once you have downloaded the ",(0,o.kt)("inlineCode",{parentName:"p"},".csv")," file, you can then upload it by clicking on \u201cBrowse files\u201d"))}u.isMDXComponent=!0}}]);