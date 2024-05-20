"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3500],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var l=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)a=o[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=l.createContext({}),u=function(e){var t=l.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return l.createElement(r.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(a),g=n,y=d["".concat(r,".").concat(g)]||d[g]||c[g]||o;return a?l.createElement(y,i(i({ref:t},s),{},{components:a})):l.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=g;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p[d]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=a[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}g.displayName="MDXCreateElement"},280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var l=a(58168),n=(a(96540),a(15680));const o={description:"Label multiple inputs at once",sidebar_position:3},i="Bulk Labeling",p={unversionedId:"portal-guide/data/explorer/bulk-labeling",id:"portal-guide/data/explorer/bulk-labeling",title:"Bulk Labeling",description:"Label multiple inputs at once",source:"@site/docs/portal-guide/data/explorer/bulk-labeling.md",sourceDirName:"portal-guide/data/explorer",slug:"/portal-guide/data/explorer/bulk-labeling",permalink:"/portal-guide/data/explorer/bulk-labeling",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/data/explorer/bulk-labeling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Label multiple inputs at once",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Annotations",permalink:"/portal-guide/data/explorer/annotations"},next:{title:"Proposals",permalink:"/portal-guide/data/explorer/proposals"}},r={},u=[{value:"Bulk Labeling at Upload Time",id:"bulk-labeling-at-upload-time",level:2},{value:"Bulk Labeling",id:"bulk-labeling-1",level:2},{value:"Bulk Add Metadata",id:"bulk-add-metadata",level:2},{value:"Bulk Add Geodata",id:"bulk-add-geodata",level:2}],s={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,l.A)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"bulk-labeling"},"Bulk Labeling"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Label multiple inputs at once")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Clarifai provides a number of convenient ways to label multiple inputs at once in data mode."),(0,n.yg)("h2",{id:"bulk-labeling-at-upload-time"},"Bulk Labeling at Upload Time"),(0,n.yg)("p",null,"You can label your inputs as they are uploaded with bulk labeling at upload time. To do so, head to your application's individual page and select the ",(0,n.yg)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar."),(0,n.yg)("p",null,"You'll be redirected to the inputs manager page, which is the main page showcasing all the inputs in your app. Click the ",(0,n.yg)("strong",{parentName:"p"},"Upload Inputs")," button at the upper-right corner of the page."),(0,n.yg)("p",null,"The inputs uploader window that pops up lets you upload inputs to your application\u2014either by uploading them directly from your local device or by providing publicly accessible URLs. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(35612).A,width:"1915",height:"839"})),(0,n.yg)("p",null,"Click the ",(0,n.yg)("strong",{parentName:"p"},"Show Upload Settings")," button to expose a section that allows you to add concepts with your inputs. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(43191).A,width:"1177",height:"681"})),(0,n.yg)("p",null,"You can select or add the concepts you want to upload with your inputs in the ",(0,n.yg)("strong",{parentName:"p"},"Concepts")," field. If there are concepts you've already added to your app, you can select them. "),(0,n.yg)("p",null,"If you want to create and add a new concept, click the plus sign (",(0,n.yg)("strong",{parentName:"p"},"+"),") next to the  ",(0,n.yg)("strong",{parentName:"p"},"Concepts")," field. Then, type the new concept name in the field."),(0,n.yg)("p",null,"The new name you've typed will appear underneath the search field. Click the ",(0,n.yg)("strong",{parentName:"p"},"Add new concept")," button to create the concept, and it will be successfully added to your app."),(0,n.yg)("p",null,"Finally, click the ",(0,n.yg)("strong",{parentName:"p"},"Upload inputs")," button at the bottom of the pop-up window to bulk upload your multiple inputs while attaching label(s) to them. "),(0,n.yg)("h2",{id:"bulk-labeling-1"},"Bulk Labeling"),(0,n.yg)("p",null,"After uploading inputs, you can easily add labels to them within the inputs manager page."),(0,n.yg)("p",null,'To label your inputs from there, start by selecting the inputs you like to label by clicking the checkmark at the upper-left corner of each image. You can even select multiple inputs by holding down the "shift" key.'),(0,n.yg)("p",null,"Next, click the ",(0,n.yg)("strong",{parentName:"p"},"Label as\u2026")," button that appears at the bottom section of the page."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(43694).A,width:"1919",height:"829"})),(0,n.yg)("p",null,"The small window that pops up allows you to label the selected inputs with concept(s). "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(58529).A,width:"1551",height:"829"})),(0,n.yg)("p",null,"Select the ",(0,n.yg)("strong",{parentName:"p"},"Add")," option, which lets you add labels to your inputs (the option is selected by default)."),(0,n.yg)("p",null,"Next, select or add the concepts you want to label with your inputs in the ",(0,n.yg)("strong",{parentName:"p"},"Concepts")," field. If there are concepts you've already added to your app, you can select them. As described earlier, you can also create and add new concepts. "),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If you select the ",(0,n.yg)("strong",{parentName:"p"},"Apply to all search results")," button, all the inputs that are visually similar to the ones you've selected initially will also be labeled. This lets you label your inputs easily and quickly in bulk.")),(0,n.yg)("p",null,"Finally, click the ",(0,n.yg)("strong",{parentName:"p"},"Add to inputs")," button at the bottom of the pop-up window to complete bulk labeling your inputs."),(0,n.yg)("h2",{id:"bulk-add-metadata"},"Bulk Add Metadata"),(0,n.yg)("p",null,"Metadata gives more information about each input. You can add them to inputs in bulk."),(0,n.yg)("p",null,"To add the same metadata to multiple inputs, click the ",(0,n.yg)("strong",{parentName:"p"},"Edit Metadata")," button at the bottom of the inputs manager page. As mentioned earlier, the button appears after selecting inputs by clicking the checkmark at the upper-left corner of each of them."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(21048).A,width:"1917",height:"829"})),(0,n.yg)("p",null,"The small window that pops up allows you to add metadata information to all your selected inputs. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(33011).A,width:"1341",height:"775"})),(0,n.yg)("p",null,"Select the ",(0,n.yg)("strong",{parentName:"p"},"Add")," option, which lets you add metadata to your inputs (the option is selected by default)."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If you select the ",(0,n.yg)("strong",{parentName:"p"},"Apply to all search results")," button, all the inputs that are visually similar to the ones you've selected initially will also be labeled with the metadata information. This lets you label your inputs with metadata easily and quickly in bulk.")),(0,n.yg)("p",null,"Next, add the metadata you want to label with your inputs in the ",(0,n.yg)("strong",{parentName:"p"},"Metadata")," field. You need to add the metadata as a valid JSON object. "),(0,n.yg)("p",null,"Finally, click the ",(0,n.yg)("strong",{parentName:"p"},"Add to inputs")," button at the bottom of the pop-up window to complete bulk labeling your inputs with the metadata information."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"As demonstrated earlier, you can also add metadata information in bulk via the uploader pop-up window when uploading inputs to your application. ")),(0,n.yg)("h2",{id:"bulk-add-geodata"},"Bulk Add Geodata"),(0,n.yg)("p",null,'You can "Add geodata to selected."'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"patch geodata",src:a(26687).A,width:"1000",height:"562"})),(0,n.yg)("p",null,'Once labeled with geodata, you can view your input on the world map under the righthand tab called "Geographical Data."'),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"geodata tab",src:a(47701).A,width:"1000",height:"562"})))}c.isMDXComponent=!0},47701:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/geoDataTab-c718b28e40df7c8f3daeba64a7b9bf12.jpg"},35612:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/bulk_labeling_1-4b0b99081b4728ee9ff6b16a5555b7cc.png"},43191:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/bulk_labeling_2-fb33a015f91ef816b8d3dbd30f677df8.png"},43694:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/bulk_labeling_3-5bc33d6e4465c60f948a75ec4c7a9c10.png"},58529:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/bulk_labeling_4-9860812fccdfb88b938e151b78955802.png"},21048:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/bulk_labeling_5-d46fb3274e9b32f819b37be3ff657169.png"},33011:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/bulk_labeling_6-b229314cb72c6395923c14f92bd71a95.png"},26687:(e,t,a)=>{a.d(t,{A:()=>l});const l=a.p+"assets/images/patchGeoDataGridview-8a3d91d645b77e78165e155edaef6fc2.jpg"}}]);