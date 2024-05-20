"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[797],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>c});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),g=i,c=p["".concat(s,".").concat(g)]||p[g]||h[g]||o;return a?n.createElement(c,r(r({ref:t},u),{},{components:a})):n.createElement(c,r({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},15816:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(58168),i=(a(96540),a(15680));const o={description:"Teach AI with specially labeled data.",sidebar_position:2},r="Training Data",l={unversionedId:"api-guide/annotate/training-data",id:"api-guide/annotate/training-data",title:"Training Data",description:"Teach AI with specially labeled data.",source:"@site/docs/api-guide/annotate/training-data.md",sourceDirName:"api-guide/annotate",slug:"/api-guide/annotate/training-data",permalink:"/api-guide/annotate/training-data",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/annotate/training-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Teach AI with specially labeled data.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Annotations : Create, Get, Update, Delete",permalink:"/api-guide/annotate/annotations"},next:{title:"Positive and Negative Annotations",permalink:"/api-guide/annotate/positive-and-negative-annotations"}},s={},d=[{value:"Data Quantity",id:"data-quantity",level:2},{value:"How many inputs does my model need?",id:"how-many-inputs-does-my-model-need",level:3},{value:"Bias",id:"bias",level:3},{value:"Data Quality",id:"data-quality",level:2},{value:"Cautionary Tale: The importance of representative data when working with User-Generated Content(USG)",id:"cautionary-tale-the-importance-of-representative-data-when-working-with-user-generated-contentusg",level:3},{value:"Semantic Clarity (The importance of &quot;of&quot; vs &quot;in&quot;)",id:"semantic-clarity-the-importance-of-of-vs-in",level:3},{value:"Cautionary Tale: False positive in wedding imagery",id:"cautionary-tale-false-positive-in-wedding-imagery",level:3}],u={toc:d},p="wrapper";function h(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"training-data"},"Training Data"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Teach AI with specially labeled data")),(0,i.yg)("hr",null),(0,i.yg)("p",null,'Your custom AI solution will require training data. Training data is used to "teach" AI models how to understand the world. A good set of training data will result in a model that will make accurate predictions on data in real-world scenarios. '),(0,i.yg)("p",null,"There are two basic considerations to keep in mind when building a training dataset: "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Quantity"),"\u2014Data quantity casts a wider net for model understanding. With more data, we can get more specific and more granular with our concepts.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Quality"),"\u2014Data quality, in the context of machine learning, is data that 1) Visually adheres to concept descriptions laid out in a taxonomy and 2) Reflects the expected user\u2019s data for the model's intended use case."))),(0,i.yg)("h2",{id:"data-quantity"},"Data Quantity"),(0,i.yg)("p",null,"When it comes to training AI models, more training data is generally better. More data means more examples from your model to learn from, and helps you improve the accuracy of your model predictions."),(0,i.yg)("h3",{id:"how-many-inputs-does-my-model-need"},"How many inputs does my model need?"),(0,i.yg)("p",null,"This is one of the most common questions that comes up when building a new model. Unfortunately, there are no hard and fast rules about the number of inputs that will be required for your particular use case. "),(0,i.yg)("p",null,"But as a general rule, if you are training a custom model on top of a Clarifai Model, you will need much less training data ","(","typically tens to tens-of-thousands of inputs",")",', than if you are building a "deep trained model" ',"(","typically thousands to millions of inputs",")","."),(0,i.yg)("h3",{id:"bias"},"Bias"),(0,i.yg)("p",null,"Bias occurs when the scope of your training data is ",(0,i.yg)("em",{parentName:"p"},"too narrow"),". If you only see green apples, you\u2019ll assume that all apples are green and think red apples were another kind of fruit. "),(0,i.yg)("p",null,"If the training data contains only a small number of examples, it\u2019ll react accordingly, taking it as truth. Small datasets make for a smaller worldview."),(0,i.yg)("h2",{id:"data-quality"},"Data Quality"),(0,i.yg)("p",null,"Models that perform well tend to be trained on data that is unique and photographed in a consistent way."),(0,i.yg)("p",null,"For best results, train your model with data that:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Adheres to concept descriptions laid out in a taxonomy;"),(0,i.yg)("li",{parentName:"ul"},"Represents the reality of the use-case;"),(0,i.yg)("li",{parentName:"ul"},"Has visually noticeable qualities\u2014something that is not too subtle for humans to pick up on AND something that can be picked up through the noise of a photo.")),(0,i.yg)("p",null,"Models that tend to perform poorly:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Trained on data with inconsistent compositions;"),(0,i.yg)("li",{parentName:"ul"},"Photos require outside context ","(","relationships to people in portraits, etc",")",";"),(0,i.yg)("li",{parentName:"ul"},"Subject matter is subtle. Keep in mind, the model has no concept of language; so in essence, \u201cwhat you see is what you get\u201d;"),(0,i.yg)("li",{parentName:"ul"},"Training set is ",(0,i.yg)("em",{parentName:"li"},"cast too wide"),'. If you train a concept of too many different kinds of images, and they are all visually different, the training set will become noisy. This will make it difficult for the model to find the visually distinct qualities to learn from, resulting in high levels of "variance".')),(0,i.yg)("h3",{id:"cautionary-tale-the-importance-of-representative-data-when-working-with-user-generated-contentusg"},"Cautionary Tale: The importance of representative data when working with User-Generated Content","(","USG",")"),(0,i.yg)("p",null,"An international beer company wanted to build a \u201cPerfect Pint\u201d model as part of a promotional campaign. The model was meant to analyze a photo of a pint of beer, and judge how well it had been poured and presented ","(",'this particular brand puts a strong emphasis on the importance of pouring beer with the ideal amount of "head", or foam, on top',")","."),(0,i.yg)("p",null,"The client had a few thousand images of professionally photographed pints of beer to use as training data. The images represented their beer in different stages of pour appearance on bar tops, taken in daylight and/or professional lighting."),(0,i.yg)("p",null,"The initial version of their model struggled to perform effectively in production. Even though their training data provided many examples of the object that they wanted to analyze, the ",(0,i.yg)("em",{parentName:"p"},"qualitative")," appearance of their training data did not capture the appearance of their beer in diverse real-world environments."),(0,i.yg)("p",null,"They needed to provide training data that captured:"),(0,i.yg)("p",null,"1",")"," The breadth of real world scenarios;"),(0,i.yg)("p",null,"2",")"," The quality of user generated images."),(0,i.yg)("p",null,"After applying these changes, the model's performance improved."),(0,i.yg)("h3",{id:"semantic-clarity-the-importance-of-of-vs-in"},"Semantic Clarity ","(",'The importance of "of" vs "in"',")"),(0,i.yg)("p",null,'When labeling an image, try to avoid labeling what is "in" the image, instead you will get better results if you label what the photo is "of". In cases where there are multiple objects in a scene, use a detector model, and label the detected regions separately.'),(0,i.yg)("h3",{id:"cautionary-tale-false-positive-in-wedding-imagery"},"Cautionary Tale: False positive in wedding imagery"),(0,i.yg)("p",null,"Here is an example of an image of a married couple, which had a false positive prediction for a person holding a bouquet of flowers, even though there is no bouquet in the photo. What\u2019s going on here?"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(21200).A,width:"936",height:"624"})),(0,i.yg)("p",null,"All of these images were labeled with \u2018Bouquet-floral","_","Holding\u2019:"),(0,i.yg)("p",null,(0,i.yg)("img",{src:a(72618).A,width:"936",height:"502"})),(0,i.yg)("p",null,"In this instance, the image in question has:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"A veiled bride;"),(0,i.yg)("li",{parentName:"ul"},"The Bride & groom kissing/their heads close together;"),(0,i.yg)("li",{parentName:"ul"},"Greenery over their heads;"),(0,i.yg)("li",{parentName:"ul"},"Large, recognizable flowers.")),(0,i.yg)("p",null,"The model sees the combination all of these individual things in lots of photos labeled \u2018Bouquet","_","Floral","_","Holding\u2019, and thus, that is the top result."),(0,i.yg)("p",null,"One way to fix this is to narrow the training data for \u2018Bouquet","_","Floral","_","Holding\u2019 to images in which the bouquet is focal point, rather than any instance of the bouquet being held. This way, the model can focus on the anchoring theme/object within the dataset more easily."))}h.isMDXComponent=!0},72618:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bouquet-e116addb500416d29ca054bbb82652fa.png"},21200:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/false_positive-30d1ca7b09020199a2fc9b017fa24e9b.png"}}]);