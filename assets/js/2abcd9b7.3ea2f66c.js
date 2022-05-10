"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9966],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=n,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return a?i.createElement(f,o(o({ref:t},u),{},{components:a})):i.createElement(f,o({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67613:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={description:"Search based on semantic similarity.",sidebar_position:5},l="Visual Search",c={unversionedId:"portal-guide/psearch/visual-search",id:"portal-guide/psearch/visual-search",title:"Visual Search",description:"Search based on semantic similarity.",source:"@site/docs/portal-guide/psearch/visual-search.md",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/visual-search",permalink:"/portal-guide/psearch/visual-search",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Search based on semantic similarity.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Saved Searches",permalink:"/portal-guide/psearch/psaved_searches"},next:{title:"Text Search",permalink:"/portal-guide/psearch/text-search"}},u=[{value:"Full Scene Visual Search",id:"full-scene-visual-search",children:[],level:2},{value:"Localized Search",id:"localized-search",children:[{value:"Face Detection and Search",id:"face-detection-and-search",children:[],level:3}],level:2},{value:"Visual Search in Video",id:"visual-search-in-video",children:[{value:"The Timeline",id:"the-timeline",children:[],level:3},{value:"Refine search",id:"refine-search",children:[],level:3}],level:2}],d={toc:u};function h(e){var t=e.components,s=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"visual-search"},"Visual Search"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Search based on semantic similarity")),(0,r.kt)("hr",null),(0,r.kt)("p",null,'With visual search, you can search for images in your application based on their "visual similarity" to other images. Visual search uses the same underlying technology that powers classification and detection, but does not require concepts. This means that you do not need to label or train your model with custom concepts, and you do not need to use any existing concepts in our pre-built models. Visual search ranks your data based on the similarity of visual characteristics alone.'),(0,r.kt)("p",null,'Just keep in mind that visual search is not an "objective" measure of visual similarity. Visual search uses a model ',(0,r.kt)("em",{parentName:"p"},"embedding"),' to measure visual similarity. The embedding can be thought of as your model\'s "feature identifier". If you train your model on images of human faces, it will understand features like eyes, ears, noses and mouths; if you train your model on images of houses, it will understand features like windows, roofs and doors.'),(0,r.kt)("h2",{id:"full-scene-visual-search"},"Full Scene Visual Search"),(0,r.kt)("p",null,"To perform a visual search that uses an entire image as an input ","(",'the "full scene"',")",", just navigate to Explorer and click the magnifying glass icon in the bottom righthand corner of an image."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(20863).Z})),(0,r.kt)("p",null,"A thumbnail of your image will be added to the search bar and Explorer will display your inputs in a ranking from most visually similar to least visually similar."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(78268).Z})),(0,r.kt)("h2",{id:"localized-search"},"Localized Search"),(0,r.kt)("p",null,'Localized search lets you perform visual searches by using the detected regions of an image. To perform a localized search, you will need to use a "Detection" model in your base workflow.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(27918).Z})),(0,r.kt)("p",null,'Navigate to the "Detection" window on the righthand side of the screen in Explorer. Here you will see the individual objects detected by your model. Just click the "magnifying glass over bounding box" icon next to the object that you would like to search with.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37253).Z})),(0,r.kt)("p",null,"A thumbnail of your image will be added to the search bar, and Explorer will rank your inputs based on visual similarity to the region of the image that you searched with."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(33901).Z})),(0,r.kt)("h3",{id:"face-detection-and-search"},"Face Detection and Search"),(0,r.kt)("p",null,'One common use for localized search is searching for images of specific people. Face detection behaves just like other detection models. Begin by creating an app that uses "Face" as the base workflow, and then click the "magnifying glass" icon next to the image of the person that you would like to search for.'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(76778).Z})),(0,r.kt)("h2",{id:"visual-search-in-video"},"Visual Search in Video"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now available for early access preview. Contact customer support for additional information")),(0,r.kt)("p",null,"You can also use full scene and localized search with video. Each frame of video is treated like an individual image. You can view detections and search with detected regions just like with still photos."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(87058).Z})),(0,r.kt)("h3",{id:"the-timeline"},"The Timeline"),(0,r.kt)("p",null,"When you search a region of a video, Explorer will display all still images and video frames that contain visually similar images to the region that you searched with. When you click on a frame of a video, the whole video will open in a timeline view. From here, and sections of video that contain visually similar images will be highlighted in green."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(41265).Z})),(0,r.kt)("h3",{id:"refine-search"},"Refine search"),(0,r.kt)("p",null,"When working with a mix of video and still images in an application, you have the ability to refine your search results. You can choose to only view still images or only view videos in your search results. You can also choose detection thresholds, so that you can control how visually similar images will have to be to be returned in your search results."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(56078).Z})))}h.isMDXComponent=!0},27918:function(e,t,a){t.Z=a.p+"assets/images/detection_model-021062f6562d42128f7f5820bf92590e.jpg"},76778:function(e,t,a){t.Z=a.p+"assets/images/face_search-e7f3aecca968e58ef236a225945af7bb.jpg"},37253:function(e,t,a){t.Z=a.p+"assets/images/local_magnify-21f7d9f09a1d10f1ed40d4587f03a0b3.jpg"},87058:function(e,t,a){t.Z=a.p+"assets/images/local_magnify_video-e1434b8f5fc6e823a256c91b568be7c1.jpg"},20863:function(e,t,a){t.Z=a.p+"assets/images/magnify_glass-68f2f8b2e22866edc60387b5a85b6012.jpg"},56078:function(e,t,a){t.Z=a.p+"assets/images/refine_search-c8f223ed2530aa7d06ccae70d8790835.jpg"},41265:function(e,t,a){t.Z=a.p+"assets/images/search_timeline-b5f4ca644d5026590aa64d2b705a9ef8.jpg"},78268:function(e,t,a){t.Z=a.p+"assets/images/visual_search_results-a62addce688d5cae4977b57d1d03761d.jpg"},33901:function(e,t,a){t.Z=a.p+"assets/images/visual_searh_local-66135a1250b37f77d56723dc948e8636.jpg"}}]);