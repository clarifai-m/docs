"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1824],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var r=n.createContext({}),u=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(r.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,r=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=u(a),h=l,b=c["".concat(r,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(b,i(i({ref:e},s),{},{components:a})):n.createElement(b,i({ref:e},s))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var r in e)hasOwnProperty.call(e,r)&&(p[r]=e[r]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98649:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const o={description:"Label multiple inputs at once",sidebar_position:3},i="Bulk Labeling",p={unversionedId:"portal-guide/data/explorer/bulk-labeling",id:"portal-guide/data/explorer/bulk-labeling",title:"Bulk Labeling",description:"Label multiple inputs at once",source:"@site/docs/portal-guide/data/explorer/bulk-labeling.md",sourceDirName:"portal-guide/data/explorer",slug:"/portal-guide/data/explorer/bulk-labeling",permalink:"/portal-guide/data/explorer/bulk-labeling",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Label multiple inputs at once",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Annotations",permalink:"/portal-guide/data/explorer/annotations"},next:{title:"Proposals",permalink:"/portal-guide/data/explorer/proposals"}},r={},u=[{value:"Bulk Labeling at Upload Time",id:"bulk-labeling-at-upload-time",level:2},{value:"Bulk Labeling in Explorer",id:"bulk-labeling-in-explorer",level:2},{value:"Bulk Add Metadata",id:"bulk-add-metadata",level:2},{value:"Bulk Add Geodata",id:"bulk-add-geodata",level:2}],s={toc:u};function d(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bulk-labeling"},"Bulk Labeling"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Label multiple inputs at once")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Clarifai provides a number of convenient ways to label multiple inputs at once in data mode."),(0,l.kt)("h2",{id:"bulk-labeling-at-upload-time"},"Bulk Labeling at Upload Time"),(0,l.kt)("p",null,"You can label your inputs as they are uploaded with bulk labeling at upload time. To do so, head to your application's individual page and select the ",(0,l.kt)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar."),(0,l.kt)("p",null,"You'll be redirected to the inputs manager page, which is the main page showcasing all the inputs in your app. Click the ",(0,l.kt)("strong",{parentName:"p"},"Upload Inputs")," button at the upper-right corner of the page."),(0,l.kt)("p",null,"The inputs uploader window that pops up lets you upload inputs to your application\u2014either by uploading them directly from your local device or by providing publicly accessible URLs. "),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(45334).Z,width:"1915",height:"839"})),(0,l.kt)("p",null,"Click the ",(0,l.kt)("strong",{parentName:"p"},"Show Upload Settings")," button to expose a section that allows you to add concepts with your inputs. "),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(53118).Z,width:"1177",height:"681"})),(0,l.kt)("p",null,"You can select or add the concepts you want to upload with your inputs in the ",(0,l.kt)("strong",{parentName:"p"},"Concepts")," field. If there are concepts you've already added to your app, you can select them. "),(0,l.kt)("p",null,"If you want to create and add a new concept, click the plus sign (",(0,l.kt)("strong",{parentName:"p"},"+"),") next to the  ",(0,l.kt)("strong",{parentName:"p"},"Concepts")," field. Then, type the new concept name in the field."),(0,l.kt)("p",null,"The new name you've typed will appear underneath the search field. Click the ",(0,l.kt)("strong",{parentName:"p"},"Add new concept")," button to create the concept, and it will be successfully added to your app."),(0,l.kt)("p",null,"Finally, click the ",(0,l.kt)("strong",{parentName:"p"},"Upload inputs")," button at the bottom of the pop-up window to bulk upload your multiple inputs while attaching label(s) to them. "),(0,l.kt)("h2",{id:"bulk-labeling-in-explorer"},"Bulk Labeling in Explorer"),(0,l.kt)("p",null,"After uploading inputs, you can easily add labels to them within the inputs manager page."),(0,l.kt)("p",null,'To label your inputs from there, start by selecting the inputs you like to label by clicking the checkmark at the upper-left corner of each image. You can even select multiple inputs by holding down the "shift" key.'),(0,l.kt)("p",null,"Next, click the ",(0,l.kt)("strong",{parentName:"p"},"Label as\u2026")," button that appears at the bottom section of the page."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(33909).Z,width:"1919",height:"829"})),(0,l.kt)("p",null,"The small window that pops up allows you to label the selected inputs with concept(s). "),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(27484).Z,width:"1551",height:"829"})),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"Add")," option, which lets you add labels to your inputs (the option is selected by default)."),(0,l.kt)("p",null,"Next, select or add the concepts you want to label with your inputs in the ",(0,l.kt)("strong",{parentName:"p"},"Concepts")," field. If there are concepts you've already added to your app, you can select them. As described earlier, you can also create and add new concepts. "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you select the ",(0,l.kt)("strong",{parentName:"p"},"Apply to all search results")," button, all the inputs that are visually similar to the ones you've selected initially will also be labeled. This lets you label your inputs easily and quickly in bulk.")),(0,l.kt)("p",null,"Finally, click the ",(0,l.kt)("strong",{parentName:"p"},"Add to inputs")," button at the bottom of the pop-up window to complete bulk labeling your inputs."),(0,l.kt)("h2",{id:"bulk-add-metadata"},"Bulk Add Metadata"),(0,l.kt)("p",null,"Metadata gives more information about each input. You can add them to inputs in bulk."),(0,l.kt)("p",null,"To add the same metadata to multiple inputs, click the ",(0,l.kt)("strong",{parentName:"p"},"Edit Metadata")," button at the bottom of the inputs manager page. As mentioned earlier, the button appears after selecting inputs by clicking the checkmark at the upper-left corner of each of them."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(5944).Z,width:"1917",height:"829"})),(0,l.kt)("p",null,"The small window that pops up allows you to add metadata information to all your selected inputs. "),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(66445).Z,width:"1341",height:"775"})),(0,l.kt)("p",null,"Select the ",(0,l.kt)("strong",{parentName:"p"},"Add")," option, which lets you add metadata to your inputs (the option is selected by default)."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you select the ",(0,l.kt)("strong",{parentName:"p"},"Apply to all search results")," button, all the inputs that are visually similar to the ones you've selected initially will also be labeled with the metadata information. This lets you label your inputs with metadata easily and quickly in bulk.")),(0,l.kt)("p",null,"Next, add the metadata you want to label with your inputs in the ",(0,l.kt)("strong",{parentName:"p"},"Metadata")," field. You need to add the metadata as a valid JSON object. "),(0,l.kt)("p",null,"Finally, click the ",(0,l.kt)("strong",{parentName:"p"},"Add to inputs")," button at the bottom of the pop-up window to complete bulk labeling your inputs with the metadata information."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"As demonstrated earlier, you can also add metadata information in bulk via the uploader pop-up window when uploading inputs to your application. ")),(0,l.kt)("h2",{id:"bulk-add-geodata"},"Bulk Add Geodata"),(0,l.kt)("p",null,'You can "Add geodata to selected."'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"patch geodata",src:a(70462).Z,width:"1000",height:"562"})),(0,l.kt)("p",null,'Once labeled with geodata, you can view your input on the world map under the righthand tab called "Geographical Data."'),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"geodata tab",src:a(69837).Z,width:"1000",height:"562"})))}d.isMDXComponent=!0},69837:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/geoDataTab-c718b28e40df7c8f3daeba64a7b9bf12.jpg"},45334:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/bulk_labeling_1-4b0b99081b4728ee9ff6b16a5555b7cc.png"},53118:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/bulk_labeling_2-fb33a015f91ef816b8d3dbd30f677df8.png"},33909:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/bulk_labeling_3-5bc33d6e4465c60f948a75ec4c7a9c10.png"},27484:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/bulk_labeling_4-9860812fccdfb88b938e151b78955802.png"},5944:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/bulk_labeling_5-d46fb3274e9b32f819b37be3ff657169.png"},66445:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/bulk_labeling_6-b229314cb72c6395923c14f92bd71a95.png"},70462:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/patchGeoDataGridview-8a3d91d645b77e78165e155edaef6fc2.jpg"}}]);