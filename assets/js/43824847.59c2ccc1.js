"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2334],{3905:(A,g,I)=>{I.d(g,{Zo:()=>B,kt:()=>E});var C=I(67294);function t(A,g,I){return g in A?Object.defineProperty(A,g,{value:I,enumerable:!0,configurable:!0,writable:!0}):A[g]=I,A}function e(A,g){var I=Object.keys(A);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);g&&(C=C.filter((function(g){return Object.getOwnPropertyDescriptor(A,g).enumerable}))),I.push.apply(I,C)}return I}function a(A){for(var g=1;g<arguments.length;g++){var I=null!=arguments[g]?arguments[g]:{};g%2?e(Object(I),!0).forEach((function(g){t(A,g,I[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(I)):e(Object(I)).forEach((function(g){Object.defineProperty(A,g,Object.getOwnPropertyDescriptor(I,g))}))}return A}function l(A,g){if(null==A)return{};var I,C,t=function(A,g){if(null==A)return{};var I,C,t={},e=Object.keys(A);for(C=0;C<e.length;C++)I=e[C],g.indexOf(I)>=0||(t[I]=A[I]);return t}(A,g);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);for(C=0;C<e.length;C++)I=e[C],g.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(A,I)&&(t[I]=A[I])}return t}var n=C.createContext({}),r=function(A){var g=C.useContext(n),I=g;return A&&(I="function"==typeof A?A(g):a(a({},g),A)),I},B=function(A){var g=r(A.components);return C.createElement(n.Provider,{value:g},A.children)},i="mdxType",Q={inlineCode:"code",wrapper:function(A){var g=A.children;return C.createElement(C.Fragment,{},g)}},o=C.forwardRef((function(A,g){var I=A.components,t=A.mdxType,e=A.originalType,n=A.parentName,B=l(A,["components","mdxType","originalType","parentName"]),i=r(I),o=t,E=i["".concat(n,".").concat(o)]||i[o]||Q[o]||e;return I?C.createElement(E,a(a({ref:g},B),{},{components:I})):C.createElement(E,a({ref:g},B))}));function E(A,g){var I=arguments,t=g&&g.mdxType;if("string"==typeof A||t){var e=I.length,a=new Array(e);a[0]=o;var l={};for(var n in g)hasOwnProperty.call(g,n)&&(l[n]=g[n]);l.originalType=A,l[i]="string"==typeof A?A:t,a[1]=l;for(var r=2;r<e;r++)a[r]=I[r];return C.createElement.apply(null,a)}return C.createElement.apply(null,I)}o.displayName="MDXCreateElement"},41694:(A,g,I)=>{I.r(g),I.d(g,{assets:()=>n,contentTitle:()=>a,default:()=>Q,frontMatter:()=>e,metadata:()=>l,toc:()=>r});var C=I(87462),t=(I(67294),I(3905));const e={description:"Changelog for Clarifai Release 7.7",sidebar_position:-22,pagination_next:"product-updates/changelog/release78",pagination_prev:"product-updates/changelog/release76"},a="Release 7.7",l={unversionedId:"product-updates/changelog/release77",id:"product-updates/changelog/release77",title:"Release 7.7",description:"Changelog for Clarifai Release 7.7",source:"@site/docs/product-updates/changelog/release77.md",sourceDirName:"product-updates/changelog",slug:"/product-updates/changelog/release77",permalink:"/product-updates/changelog/release77",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/product-updates/changelog/release77.md",tags:[],version:"current",sidebarPosition:-22,frontMatter:{description:"Changelog for Clarifai Release 7.7",sidebar_position:-22,pagination_next:"product-updates/changelog/release78",pagination_prev:"product-updates/changelog/release76"},sidebar:"tutorialSidebar",previous:{title:"Release 7.6",permalink:"/product-updates/changelog/release76"},next:{title:"Release 7.8",permalink:"/product-updates/changelog/release78"}},n={},r=[{value:"Models",id:"models",level:2},{value:"Platform Objects",id:"platform-objects",level:2},{value:"Portal",id:"portal",level:2}],B={toc:r},i="wrapper";function Q(A){let{components:g,...e}=A;return(0,t.kt)(i,(0,C.Z)({},B,e,{components:g,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"release-77"},"Release 7.7"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:"center"},"New Feature"),(0,t.kt)("th",{parentName:"tr",align:"center"},"Improvement"),(0,t.kt)("th",{parentName:"tr",align:"center"},"Bug Fix"),(0,t.kt)("th",{parentName:"tr",align:"center"},"Enterprise Only"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"new-feature",src:I(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"improvement",src:I(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"bug",src:I(61616).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"enterprise",src:I(88207).Z,width:"16",height:"16"}))))),(0,t.kt)("h2",{id:"models"},"Models"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Status"),(0,t.kt)("th",{parentName:"tr",align:null},"Details"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:I(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},'Model: Published "edge-optimized-person" Visual-Detector')),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:I(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},'Model: Published "hate-symbol" Visual-Detector')))),(0,t.kt)("h2",{id:"platform-objects"},"Platform Objects"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Status"),(0,t.kt)("th",{parentName:"tr",align:null},"Details"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:I(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Annotation: Added support for Image-Masks")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:I(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Visual-Search: Added support for Landmark-Align enabled Workflows")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:I(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task: Added ability to add/remove Workers after creation")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"bug",src:I(61616).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},'Training-Coordinator: Jobs returning "Failed to get data" error')))),(0,t.kt)("h2",{id:"portal"},"Portal"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Status"),(0,t.kt)("th",{parentName:"tr",align:null},"Details"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:I(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task-Labeler: Added Quick-Mask tool")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:I(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task-Reporter: Initial release of Single-Task-Report")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:I(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Input-Details: Add copy image and text files as well as urls")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:I(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Model-Evaluation: Click to preview Text-Inputs in table")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:I(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task-Labeler: Allow merging/splitting of saved Track-Annotations")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"bug",src:I(61616).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Model-Evaluator: Sorting by ACCURACY SCORE (ROC AUC) does not sort")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"bug",src:I(61616).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task-Editor: Fixed inaccessible Collaborators tab")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"bug",src:I(61616).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task-Reviewer: Not showing all Annotations awaiting review")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"bug",src:I(61616).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task-Reviewer: Video-Input thumbnails fail to load")))))}Q.isMDXComponent=!0},61616:(A,g,I)=>{I.d(g,{Z:()=>C});const C="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMTo1OQAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMTo1OS0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMTo1OS0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAxOjU5LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABYAAQEBAAAAAAAAAAAAAAAAAAYFCf/EAB0QAAICAwEBAQAAAAAAAAAAAAUGBAcCAwgBCRT/xAAZAQACAwEAAAAAAAAAAAAAAAADBQIEBgn/xAAkEQABBQEAAwAABwAAAAAAAAADAQIEBQYHCBEhABITFSIxMv/aAAwDAQACEQMRAD8A1NWIXT3YvVP0q2y+2OtalVOVbOb4KwhUAUei8kwsCHaz18Wuq1eqjitapZ3QJQoWmHGGxJJNiKTtnu/LKTs8yzxLEmT5twq2M8DIRiIwUVxXK5jSGa1jBMIxFcjRIiIiKr3L9+/jrran5TxTkXi60PCuObG365laWRbaHo0SghChW02hyljLsrbSW9JaODXkmaE7zFlGFFrIgG/kRBNVGhzJXqvjvvvhdD87s6Fu1PvxupMieQrgZbBHMy4qWS/BFcqqWZVre5NMUUYkByUr8e6dpHlxxSPP0+joEoRjJlic6bAtKwX7nLkDlEjOcI7ytewZitYrDAIR6I5Wqvr2iKjkX4it9q+gxORdr8du/wChXx/5thLrndNu41docVV5yTV2dvl87PtolvltbS0lSWZCHNii/WZHJJhSohI5EkyAzVEFmuyOl+QupvpZDLcNdVXWkdYWY4ygTfRwp7F4wlA062eeHmV99Uk1lw0FpoZ+iZ6Nw2dDKLxGHsx3eYycfPNZWLMgTbhHVs6QOcYitJGaVvobiGcjmFGN/wBVpU+tVHMVPv3+klkPlvZ+SeLZoffeRYW+4/lqQVhS76Zn5anuYNFlK+RBss9cXdW4kME7PGaRkoB4llFO1WexKqukGNvVfX3YPzuxicHdF0dW/LFkV/KmPV0CbLYGUsrA35HZz5V7tR8UFzyV4JEqGzIILmziZGUWIltmmZv2ltUKHFyzp8+p9VkuMGEYXsshpnvcNpRPc4pijZ/lo/4tVXKrld6VVd6S3CZyHi/FvJVTeQfM99qOt5jRiDn8NMy1dVQ7efnb+qroefyOeurNQrMmXTUnywR4sYUONCY8A2Q3nP8A/9k="},88207:(A,g,I)=>{I.d(g,{Z:()=>C});const C="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMzoxNgAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMzoxNi0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMzoxNi0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAzOjE2LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABUAAQEAAAAAAAAAAAAAAAAAAAgH/8QAHRAAAQUBAQEBAAAAAAAAAAAABQMEBgcIAgkBE//EABcBAQEBAQAAAAAAAAAAAAAAAAQFBgj/xAAhEQACAwACAgIDAAAAAAAAAAACAwEEBQYREiEAEyIxUf/aAAwDAQACEQMRAD8AUcEF7J9Ad0+s7F16IbbomF44tyxGMNrrNJ6xzCxmIRuyLXigSJw+sIXPYig8kSIOvGDdg1EsXhmVm3/X7/VHq/PSnRNk+P8AFuNcGKOKcc07HIKFQrFvYVUXC7DqdF7H2Ltiq+RVLLZSUmQrQsfXQx6wKhv6ejtROpoV10HthaqhNmSAWvAQBQNCJKBVERAxJGU/39nkNeOtcp+oWBqdEba9H7Ii9tW5Rwqw4RtcRctZ9FIlZV0Na2KtmlY2fM5MzkQAkH4MojZbw1T6YH2TxMeqm9Fd9/KrM3C3OF8o0Gcc4jUdRoaR1LPHGZ9zwfTziuBJXKdZJKaDJXJo8p8lEMnEicfCxYu0tjNQOhqtBz68NXoQ9XYNsQqYhLTOCGR8uj69FE9ex+XuJra7wjt31wTPebmzdHVtte1LK6ATDPQKzBDdtApbYlsSUcejVmQSByvlsZIxyxmnTdcKUGnIqXZqfFOkXyPPxKY+MHk3HOCSrl/Hsi5x2lT+2vqtpsmbSKlFJqdTs2kdrB1Qu4YBqeso67GfalzdztDbg8q/aVoObIsqi2Olm15iQNWs+ikHR1IlBLKP7+jhCc06B0D6W4Gs2tPO/f8AQMNqm7Kak1oSzWhe87IZIRmvbfC2ARIo2PbkVBtY2LFA2pn6xjCD7r6UMvFPrFv2+fd891rOxlZXD+UU7nLOLali9naCaSMJeZTKXW6DKoBNSg9pOM2EvydI/gsY8pgR+ECpZta2a5OZp1lpsINx3psNiAU8WzP2vEYARGC6CJ/Ip9R3Pz//2Q=="},85973:(A,g,I)=>{I.d(g,{Z:()=>C});const C="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMjoxOQAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMjoxOS0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMjoxOS0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAyOjE5LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABYAAQEBAAAAAAAAAAAAAAAAAAABCf/EAB4QAAICAgMBAQAAAAAAAAAAAAUGAwQCBwEIEwAJ/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAJ/8QAHxEAAQQDAQEBAQAAAAAAAAAABAIDBQYBBxIAEwgU/9oADAMBAAIRAxEAPwDTd43T2X3D+hbnpCp2Y3TrtaN9knDVYmNJfGsIKWV4Q7F1oTyPWwx4OLlmqjqFfmfPLiKa9Y9LFqfKWTLL7SGJqlBq+kYq3OUGqTh4lEi7ESqWho0smQOKiRTyfueUGUQlLj7y+MY6SyjlDaMJTjHsO7HsPcN+/Vlg1wxuHYdTh5Hb0/SQUVyzzkcFDRQFjPiAf5IiPkwAluMiCtfRWeHCXe3XnVLXlXiPunsvp79C03SFvsxunYi0E7JKGqi0bs+NZsUzLxZ3ErRXkgtmjxkXFNaHX7HMGePrNRsedirPjLHjl8y9UoNo0jK25qg1SDPLocnYxlRMPGiEx5w0QSeN8DxAxSFIbfZR3jPKXkdIcRlKs48VvYm4aD+q6/rh/cOw7ZDx23oGknIsdnnJEKZijrGDDnZLiJCTPCQ4+IS781YwtwZ3h1l1K0YV6POluzGnf0Lc930+s+6NirYTsi4bUEZpSI1mhLOvF3YuyieB7KFAGhcU1odfr8T45cTTUbHpXs18ZY8sfiItdBtGkYqou36qQZ5dEi66TiWmI0QmPNFiRQCfsAWaKQpLb7K+M45S8jlba8pVjPqya83FQP1XYdkD6d2HbIiO27P3YBVdrM5IgzMUdYz5cHAsvHRcgEhx4Qlr6Jz9HBnemnmsLTlPiNpbsxuH9Ckzd9zrPujXS2b7JKG1S+bqiNYUSsLwl3EspbggymgAUXLNVHULHEGOPEM16x5161fKWTHD5l7XQavpGVqLV+qk4eJQ5OuDJiZiNLJkDSYkkAbLIAhhRCUuPvI7znpLKOluLwlOc+q1rvcN+/Vde2ORp7YdTiJHb0Ddz1WKszkcDDRQNjBmDsFS8jFx4S3GRBncNpx83CXeWmWsrXjHv//Z"},55131:(A,g,I)=>{I.d(g,{Z:()=>C});const C="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMjowOAAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMjowOC0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMjowOC0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAyOjA4LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABcAAAMBAAAAAAAAAAAAAAAAAAMGBwn/xAAeEAACAgMBAQEBAAAAAAAAAAAFBgMEAgcIAQkTIv/EABkBAAIDAQAAAAAAAAAAAAAAAAEGAgMFCf/EACURAAEEAgIBBAMBAAAAAAAAAAECAwQFBgcRIQAIEhMxIjJBUf/aAAwDAQACEQMRAD8A2nWEzrbtboX6IUk/srdupiHPm1jinrBJVnhtXkcthm1bUAq4G9ABaAtVerxxIAylbMVRhG3YmJ2SVqGzND+VjPAdecf9rq0ltRCQFEJPagB0ev17PB5585kVdLt/eGxfUexTbqznEJGustnVGK0dVfXFbQzEqtssr6qvfRX2sFqubSjHorDsxqLJecXKckuodWj2OISPJ1zz+8fOZ4duqOhmcr0dvf3XOz9Q7KcW4yDWIAm0VpAZQNsefZzFUnbsVy9/D2eyMqWBV2COenL7JjjJ4B8ramCXXFFxYSpKiSB+QBHZPP3/AIOPF+hXuHXl76bL692xsa1l7Lz443lOHZPdXE2DVNwcrq8es696PYWs1qU861MkJLjkVpyI+2lxhRUArwDfT62552V9KVJQ5U6Fb7nT+2827Wm19aKDeVDKkAfZGwHdaZKRNdWDNYncngbh0+FeoUoXA96jLFa8/b+IwflbVIAacPyK5SpIJA4Uog9A8/Y/vXldyzuDXOT+pynptS7FuXtp5gbjGMuxinuZcKpRCybIb2ss2JVbVTW5TzjdxGcS2zLjvwpEdaHR7+k0o099edobv+e0TzxtuvVpXQG4VR12fsFoR2xaRzUVRj18XaD9X06qA6S5hlAnECFcPKUITz2SEQ2llNnHjnLIqdeWx7mlpKFhSlFJAPaST2Bx9fXPjPOvtx7tzr06IvtLZxikvXmZ1N5lWRWtFb1lFOS1Z47MtbBoz6iAxWgopZEluGuVIccdkIisFxSQpf8A/9k="}}]);