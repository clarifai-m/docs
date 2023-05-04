"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2956],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,g=c["".concat(p,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[c]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84165:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const i={description:"Manage your annotations",sidebar_position:1},l="Create, Get, Update, Delete",r={unversionedId:"portal-guide/annotate/create-get-update-delete",id:"portal-guide/annotate/create-get-update-delete",title:"Create, Get, Update, Delete",description:"Manage your annotations",source:"@site/docs/portal-guide/annotate/create-get-update-delete.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/create-get-update-delete",permalink:"/portal-guide/annotate/create-get-update-delete",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Manage your annotations",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Labeling Your Data",permalink:"/portal-guide/annotate/"},next:{title:"Create a Task",permalink:"/portal-guide/annotate/create-a-task"}},p={},s=[{value:"Create Annotations",id:"create-annotations",level:2},{value:"Via the inputs manager page",id:"via-the-inputs-manager-page",level:3},{value:"Via the input viewer page",id:"via-the-input-viewer-page",level:3},{value:"Get Annotations",id:"get-annotations",level:2},{value:"Update and Delete Annotations",id:"update-and-delete-annotations",level:2},{value:"Via the inputs manager page",id:"via-the-inputs-manager-page-1",level:3},{value:"Via the input viewer page",id:"via-the-input-viewer-page-1",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-get-update-delete"},"Create, Get, Update, Delete"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Manage your annotations")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Within your app, you can add annotations to inputs, get the ones already added to inputs, remove them from inputs, and carry out other management tasks with them."),(0,o.kt)("h2",{id:"create-annotations"},"Create Annotations"),(0,o.kt)("p",null,"To label your inputs on the Clarifai platform, head to your application's individual page. Then, select the ",(0,o.kt)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar."),(0,o.kt)("p",null,"You'll be redirected to the inputs manager page, where you can create annotations and add them to your inputs. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(21183).Z,width:"1911",height:"923"})),(0,o.kt)("p",null,"You can use different ways to label your image inputs. Let's illustrate two of them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Via the inputs manager page"),(0,o.kt)("li",{parentName:"ul"},"Via the input viewer page")),(0,o.kt)("h3",{id:"via-the-inputs-manager-page"},"Via the inputs manager page"),(0,o.kt)("p",null,"The inputs manager page is the main page showcasing all the inputs in your app. To label your inputs from there, start by selecting the input(s) you like to label by clicking the small empty box at the top-left corner of each image. "),(0,o.kt)("p",null,"Next, click the ",(0,o.kt)("strong",{parentName:"p"},"Label as\u2026")," button that appears at the bottom section of the page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13313).Z,width:"1919",height:"839"})),(0,o.kt)("p",null,"The small window that pops up allows you to annotate the selected input(s) with concepts. "),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"Add")," option, which lets you add annotations to your inputs (the option is selected by default). "),(0,o.kt)("p",null,"If you want to create a new concept and use it for labeling your inputs:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(48881).Z,width:"899",height:"655"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click the plus sign (",(0,o.kt)("strong",{parentName:"li"},"+"),") next to the ",(0,o.kt)("strong",{parentName:"li"},"Select concepts")," search field;"),(0,o.kt)("li",{parentName:"ul"},"Type the new concept name in the search field. The new name you've typed will appear underneath the search field;"),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Add new concept")," button to create the concept. The new concept will be successfully added to your app;"),(0,o.kt)("li",{parentName:"ul"},"Finally, click the ",(0,o.kt)("strong",{parentName:"li"},"Add to inputs")," button at the bottom of the pop-up window to complete labeling your inputs with the newly created concept.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you select the ",(0,o.kt)("strong",{parentName:"p"},"Apply to all search results")," button, all the inputs that are visually similar to the one(s) you've initially selected will also be annotated. This allows you to label your inputs easily and fast. ")),(0,o.kt)("p",null,"If there are concepts you've already created and you want to use them to annotate your input(s), select them under the ",(0,o.kt)("strong",{parentName:"p"},"Concepts")," field. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(73157).Z,width:"1009",height:"821"})),(0,o.kt)("p",null,"After selecting the already existing concepts, click the ",(0,o.kt)("strong",{parentName:"p"},"Add to inputs")," button at the bottom of the pop-up window to complete labeling your inputs with them."),(0,o.kt)("h3",{id:"via-the-input-viewer-page"},"Via the input viewer page"),(0,o.kt)("p",null,"The input viewer page is the main page that showcases the details of a single input available in your app. If you click an input listed on the inputs manager page, you'll be redirected to the viewer page for that input, where you can see its details. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(68450).Z,width:"1895",height:"825"})),(0,o.kt)("p",null,"Once you're on the input viewer page, ensure the page's mode is set to ",(0,o.kt)("strong",{parentName:"p"},"Annotate"),", which is the default. You can find the mode settings at the top-right corner of the page. "),(0,o.kt)("p",null,"The page has several assistive tools to help you make the most of the labeling exercise. For example, on the top section, you can select an icon to label an input with bounding boxes, move an image around the workspace, or zoom an image in or out."),(0,o.kt)("p",null,"The left sidebar also shows a film strip of images you can scroll through to get the specific image you want to annotate. If you click any image on the sidebar, it'll appear on the main workspace. "),(0,o.kt)("p",null,"To label your image from the input viewer page, click the ",(0,o.kt)("strong",{parentName:"p"},"Add annotation tags...")," field and select the concept you want to use to annotate the image from the drop-down list\u2014that is, if the concept is already existing in your app."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(53983).Z,width:"1051",height:"669"})),(0,o.kt)("p",null,"You can add as many annotations as you want. The added annotations will appear in the ",(0,o.kt)("strong",{parentName:"p"},"Add annotation tags...")," field."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(91682).Z,width:"1055",height:"195"})),(0,o.kt)("p",null,"If you want to annotate an input with a new concept that does not already exist in your app, click the ",(0,o.kt)("strong",{parentName:"p"},"Add annotation tags...")," field and type the concept's name. Then, click the drop-down box that appears with the concept name beneath that field. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(98646).Z,width:"1055",height:"227"})),(0,o.kt)("p",null,"The new annotation will be added to your app and labeled with your input. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(30409).Z,width:"1053",height:"195"})),(0,o.kt)("h2",{id:"get-annotations"},"Get Annotations"),(0,o.kt)("p",null,"If you check the ",(0,o.kt)("strong",{parentName:"p"},"Labels")," section on the inputs manager page, you can see the annotations you've created listed there. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(17639).Z,width:"1917",height:"827"})),(0,o.kt)("p",null,"If you want to get the annotations of a single input, go to the input viewer page, and you'll see the labels in the ",(0,o.kt)("strong",{parentName:"p"},"Add annotation tags...")," field. You can also get the annotations, alongside the name of the person who added them, on the right sidebar. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14712).Z,width:"1559",height:"831"})),(0,o.kt)("h2",{id:"update-and-delete-annotations"},"Update and Delete Annotations"),(0,o.kt)("p",null,"You can remove an annotation from an input and label that input with another annotation. You can use different ways to edit an image's labels."),(0,o.kt)("p",null,"Let's illustrate two of them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Via the inputs manager page"),(0,o.kt)("li",{parentName:"ul"},"Via the input viewer page")),(0,o.kt)("h3",{id:"via-the-inputs-manager-page-1"},"Via the inputs manager page"),(0,o.kt)("p",null,"You can edit the annotations of an image via the inputs manager page."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(67780).Z,width:"1913",height:"827"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start by selecting the image by clicking the small empty box at its top-left corner\u2014just like we demonstrated previously;"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Label as\u2026")," button that appears on the bottom section of the page. The small window that pops up allows you to edit the labels associated with the input;"),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Remove")," option, which lets you remove the annotations you've added to the input;"),(0,o.kt)("li",{parentName:"ol"},"Under the ",(0,o.kt)("strong",{parentName:"li"},"Concepts")," field, select the concepts you want to remove from the input. After selecting a concept, it'll appear beneath the ",(0,o.kt)("strong",{parentName:"li"},"Select concepts")," search field. Alternatively, you can check the ",(0,o.kt)("strong",{parentName:"li"},"Remove all Concepts")," button to delete all the annotations present in the input;"),(0,o.kt)("li",{parentName:"ol"},"Finally, click the ",(0,o.kt)("strong",{parentName:"li"},"Remove from inputs")," button to delete the selected concepts from the input.")),(0,o.kt)("h3",{id:"via-the-input-viewer-page-1"},"Via the input viewer page"),(0,o.kt)("p",null,"To edit the annotations of an image via the input viewer page, start by navigating to the page\u2014just like we demonstrated previously."),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Add annotation tags...")," field, which shows the concepts in the input, click the delete (",(0,o.kt)("strong",{parentName:"p"},"x"),") button next to the concept you want to remove. You can also click the ",(0,o.kt)("strong",{parentName:"p"},"Delete All")," button to remove all the concepts from the input. "),(0,o.kt)("p",null,"You can also remove a concept from an input by deselecting its checkmark on the right sidebar.  "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(61008).Z,width:"1887",height:"843"})))}d.isMDXComponent=!0},21183:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_1-44063f3ee412b58be0b5976890f473b9.png"},30409:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_10-35035b04773e39eeb66f8b2d52173991.png"},14712:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_11-481e16d8edaf5aa2bfdd83f999f4b53f.png"},13313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_2-c3a789e412a954edec932de7271fd69e.png"},73157:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_3-664e38fcb6cd86df554a01600f2491f1.png"},48881:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_4-ea99de9ab4e7e6a84971f2c5e11762ca.png"},17639:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_5-cd289d2372ec4ebf6d0f8dfd2c0855ed.png"},68450:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_6-963a884d519cfb3b8492f8b33060a7d7.png"},53983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_7-97df42780baf655fac229702dcfe6e99.png"},91682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_8-caa6b35aa07fe35c68db65aa9f448222.png"},98646:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_annotations_9-58e15cbb9207f7b58db56848a8c136c2.png"},67780:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update_annotations_1-11eb4fe102e812056966b2b53b19b211.png"},61008:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update_annotations_2-453332ded523c71ddc8c4693ba4141f7.png"}}]);