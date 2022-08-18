"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9966],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return p}});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),p=n,f=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return i?a.createElement(f,o(o({ref:t},u),{},{components:i})):a.createElement(f,o({ref:t},u))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},67613:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var a=i(83117),n=(i(67294),i(3905));const r={description:"Search based on semantic similarity.",sidebar_position:5},o="Visual Search",s={unversionedId:"portal-guide/psearch/visual-search",id:"portal-guide/psearch/visual-search",title:"Visual Search",description:"Search based on semantic similarity.",source:"@site/docs/portal-guide/psearch/visual-search.md",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/visual-search",permalink:"/portal-guide/psearch/visual-search",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Search based on semantic similarity.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Saved Searches",permalink:"/portal-guide/psearch/psaved_searches"},next:{title:"Text Search",permalink:"/portal-guide/psearch/text-search"}},l={},c=[{value:"Full Scene Visual Search",id:"full-scene-visual-search",level:2},{value:"Localized Search",id:"localized-search",level:2},{value:"Face Detection and Search",id:"face-detection-and-search",level:3},{value:"Visual Search in Video",id:"visual-search-in-video",level:2},{value:"The Timeline",id:"the-timeline",level:3},{value:"Refine search",id:"refine-search",level:3}],u={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"visual-search"},"Visual Search"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Search based on semantic similarity")),(0,n.kt)("hr",null),(0,n.kt)("p",null,'With visual search, you can search for images in your application based on their "visual similarity" to other images. Visual search uses the same underlying technology that powers classification and detection, but does not require concepts. This means that you do not need to label or train your model with custom concepts, and you do not need to use any existing concepts in our pre-built models. Visual search ranks your data based on the similarity of visual characteristics alone.'),(0,n.kt)("p",null,'Just keep in mind that visual search is not an "objective" measure of visual similarity. Visual search uses a model ',(0,n.kt)("em",{parentName:"p"},"embedding"),' to measure visual similarity. The embedding can be thought of as your model\'s "feature identifier". If you train your model on images of human faces, it will understand features like eyes, ears, noses and mouths; if you train your model on images of houses, it will understand features like windows, roofs and doors.'),(0,n.kt)("h2",{id:"full-scene-visual-search"},"Full Scene Visual Search"),(0,n.kt)("p",null,"To perform a visual search that uses an entire image as an input ","(",'the "full scene"',")",", just navigate to Explorer and click the magnifying glass icon in the bottom righthand corner of an image."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(16927).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,"A thumbnail of your image will be added to the search bar and Explorer will display your inputs in a ranking from most visually similar to least visually similar."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(77632).Z,width:"1000",height:"562"})),(0,n.kt)("h2",{id:"localized-search"},"Localized Search"),(0,n.kt)("p",null,'Localized search lets you perform visual searches by using the detected regions of an image. To perform a localized search, you will need to use a "Detection" model in your base workflow.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(85886).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,'Navigate to the "Detection" window on the righthand side of the screen in Explorer. Here you will see the individual objects detected by your model. Just click the "magnifying glass over bounding box" icon next to the object that you would like to search with.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(233).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,"A thumbnail of your image will be added to the search bar, and Explorer will rank your inputs based on visual similarity to the region of the image that you searched with."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(26760).Z,width:"1000",height:"562"})),(0,n.kt)("h3",{id:"face-detection-and-search"},"Face Detection and Search"),(0,n.kt)("p",null,'One common use for localized search is searching for images of specific people. Face detection behaves just like other detection models. Begin by creating an app that uses "Face" as the base workflow, and then click the "magnifying glass" icon next to the image of the person that you would like to search for.'),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(35191).Z,width:"1000",height:"562"})),(0,n.kt)("h2",{id:"visual-search-in-video"},"Visual Search in Video"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Now available for early access preview. Contact customer support for additional information")),(0,n.kt)("p",null,"You can also use full scene and localized search with video. Each frame of video is treated like an individual image. You can view detections and search with detected regions just like with still photos."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(29156).Z,width:"1000",height:"562"})),(0,n.kt)("h3",{id:"the-timeline"},"The Timeline"),(0,n.kt)("p",null,"When you search a region of a video, Explorer will display all still images and video frames that contain visually similar images to the region that you searched with. When you click on a frame of a video, the whole video will open in a timeline view. From here, and sections of video that contain visually similar images will be highlighted in green."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(85222).Z,width:"1000",height:"562"})),(0,n.kt)("h3",{id:"refine-search"},"Refine search"),(0,n.kt)("p",null,"When working with a mix of video and still images in an application, you have the ability to refine your search results. You can choose to only view still images or only view videos in your search results. You can also choose detection thresholds, so that you can control how visually similar images will have to be to be returned in your search results."),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(63516).Z,width:"1000",height:"562"})))}h.isMDXComponent=!0},85886:function(e,t,i){t.Z=i.p+"assets/images/detection_model-021062f6562d42128f7f5820bf92590e.jpg"},35191:function(e,t,i){t.Z=i.p+"assets/images/face_search-e7f3aecca968e58ef236a225945af7bb.jpg"},233:function(e,t,i){t.Z=i.p+"assets/images/local_magnify-21f7d9f09a1d10f1ed40d4587f03a0b3.jpg"},29156:function(e,t,i){t.Z=i.p+"assets/images/local_magnify_video-e1434b8f5fc6e823a256c91b568be7c1.jpg"},16927:function(e,t,i){t.Z=i.p+"assets/images/magnify_glass-68f2f8b2e22866edc60387b5a85b6012.jpg"},63516:function(e,t,i){t.Z=i.p+"assets/images/refine_search-c8f223ed2530aa7d06ccae70d8790835.jpg"},85222:function(e,t,i){t.Z=i.p+"assets/images/search_timeline-b5f4ca644d5026590aa64d2b705a9ef8.jpg"},77632:function(e,t,i){t.Z=i.p+"assets/images/visual_search_results-a62addce688d5cae4977b57d1d03761d.jpg"},26760:function(e,t,i){t.Z=i.p+"assets/images/visual_searh_local-66135a1250b37f77d56723dc948e8636.jpg"}}]);