"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8708],{3905:function(A,I,g){g.d(I,{Zo:function(){return Q},kt:function(){return E}});var C=g(67294);function t(A,I,g){return I in A?Object.defineProperty(A,I,{value:g,enumerable:!0,configurable:!0,writable:!0}):A[I]=g,A}function e(A,I){var g=Object.keys(A);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);I&&(C=C.filter((function(I){return Object.getOwnPropertyDescriptor(A,I).enumerable}))),g.push.apply(g,C)}return g}function a(A){for(var I=1;I<arguments.length;I++){var g=null!=arguments[I]?arguments[I]:{};I%2?e(Object(g),!0).forEach((function(I){t(A,I,g[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(g)):e(Object(g)).forEach((function(I){Object.defineProperty(A,I,Object.getOwnPropertyDescriptor(g,I))}))}return A}function B(A,I){if(null==A)return{};var g,C,t=function(A,I){if(null==A)return{};var g,C,t={},e=Object.keys(A);for(C=0;C<e.length;C++)g=e[C],I.indexOf(g)>=0||(t[g]=A[g]);return t}(A,I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);for(C=0;C<e.length;C++)g=e[C],I.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(A,g)&&(t[g]=A[g])}return t}var n=C.createContext({}),l=function(A){var I=C.useContext(n),g=I;return A&&(g="function"==typeof A?A(I):a(a({},I),A)),g},Q=function(A){var I=l(A.components);return C.createElement(n.Provider,{value:I},A.children)},r={inlineCode:"code",wrapper:function(A){var I=A.children;return C.createElement(C.Fragment,{},I)}},i=C.forwardRef((function(A,I){var g=A.components,t=A.mdxType,e=A.originalType,n=A.parentName,Q=B(A,["components","mdxType","originalType","parentName"]),i=l(g),E=t,c=i["".concat(n,".").concat(E)]||i[E]||r[E]||e;return g?C.createElement(c,a(a({ref:I},Q),{},{components:g})):C.createElement(c,a({ref:I},Q))}));function E(A,I){var g=arguments,t=I&&I.mdxType;if("string"==typeof A||t){var e=g.length,a=new Array(e);a[0]=i;var B={};for(var n in I)hasOwnProperty.call(I,n)&&(B[n]=I[n]);B.originalType=A,B.mdxType="string"==typeof A?A:t,a[1]=B;for(var l=2;l<e;l++)a[l]=g[l];return C.createElement.apply(null,a)}return C.createElement.apply(null,g)}i.displayName="MDXCreateElement"},72727:function(A,I,g){g.r(I),g.d(I,{assets:function(){return n},contentTitle:function(){return a},default:function(){return r},frontMatter:function(){return e},metadata:function(){return B},toc:function(){return l}});var C=g(83117),t=(g(67294),g(3905));const e={description:"Changelog for Clarifai Release 8.6",sidebar_position:-33,pagination_next:"product-updates/upcoming-api-changes",pagination_prev:"product-updates/changelog/release86"},a="Release 8.6",B={unversionedId:"product-updates/changelog/release86",id:"product-updates/changelog/release86",title:"Release 8.6",description:"Changelog for Clarifai Release 8.6",source:"@site/docs/product-updates/changelog/release86.md",sourceDirName:"product-updates/changelog",slug:"/product-updates/changelog/release86",permalink:"/product-updates/changelog/release86",draft:!1,tags:[],version:"current",sidebarPosition:-33,frontMatter:{description:"Changelog for Clarifai Release 8.6",sidebar_position:-33,pagination_next:"product-updates/upcoming-api-changes",pagination_prev:"product-updates/changelog/release86"},sidebar:"tutorialSidebar",previous:{title:"Release 8.6",permalink:"/product-updates/changelog/release86"},next:{title:"Upcoming API Changes",permalink:"/product-updates/upcoming-api-changes"}},n={},l=[{value:"Community Workflow",id:"community-workflow",level:2},{value:"Community Model",id:"community-model",level:2},{value:"Portal-Screen",id:"portal-screen",level:2}],Q={toc:l};function r(A){let{components:I,...e}=A;return(0,t.kt)("wrapper",(0,C.Z)({},Q,e,{components:I,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"release-86"},"Release 8.6"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:"center"},"New Feature"),(0,t.kt)("th",{parentName:"tr",align:"center"},"Improvement"),(0,t.kt)("th",{parentName:"tr",align:"center"},"Bug Fix"),(0,t.kt)("th",{parentName:"tr",align:"center"},"Enterprise Only"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"new-feature",src:g(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"improvement",src:g(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"bug",src:g(61616).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:"center"},(0,t.kt)("img",{alt:"enterprise",src:g(88207).Z,width:"16",height:"16"}))))),(0,t.kt)("h2",{id:"community-workflow"},"Community Workflow"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Status"),(0,t.kt)("th",{parentName:"tr",align:null},"Details"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:g(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},'Publish "asr-sentiment" workflow')))),(0,t.kt)("h2",{id:"community-model"},"Community Model"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Status"),(0,t.kt)("th",{parentName:"tr",align:null},"Details"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:g(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Publish ASR Mandarin Chinese model")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:g(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"New versions of all PaddleOCR models with improved accuracy")))),(0,t.kt)("h2",{id:"portal-screen"},"Portal-Screen"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Status"),(0,t.kt)("th",{parentName:"tr",align:null},"Details"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:g(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Input Uploader Setting Initial Release")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"new-feature",src:g(55131).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Dataset-Manager: Create a new Dataset")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:g(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Workflow Viewer: Preview Workflow predictions via improved experience")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:g(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Task-Manager: View Task workers and status more clearly")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},(0,t.kt)("img",{alt:"improvement",src:g(85973).Z,width:"16",height:"16"})),(0,t.kt)("td",{parentName:"tr",align:null},"Input-Viewer: View Concepts, Bounding Boxes, and Polygons")))))}r.isMDXComponent=!0},61616:function(A,I){I.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMTo1OQAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMTo1OS0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMTo1OS0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAxOjU5LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABYAAQEBAAAAAAAAAAAAAAAAAAYFCf/EAB0QAAICAwEBAQAAAAAAAAAAAAUGBAcCAwgBCRT/xAAZAQACAwEAAAAAAAAAAAAAAAADBQIEBgn/xAAkEQABBQEAAwAABwAAAAAAAAADAQIEBQYHCBEhABITFSIxMv/aAAwDAQACEQMRAD8A1NWIXT3YvVP0q2y+2OtalVOVbOb4KwhUAUei8kwsCHaz18Wuq1eqjitapZ3QJQoWmHGGxJJNiKTtnu/LKTs8yzxLEmT5twq2M8DIRiIwUVxXK5jSGa1jBMIxFcjRIiIiKr3L9+/jrran5TxTkXi60PCuObG365laWRbaHo0SghChW02hyljLsrbSW9JaODXkmaE7zFlGFFrIgG/kRBNVGhzJXqvjvvvhdD87s6Fu1PvxupMieQrgZbBHMy4qWS/BFcqqWZVre5NMUUYkByUr8e6dpHlxxSPP0+joEoRjJlic6bAtKwX7nLkDlEjOcI7ytewZitYrDAIR6I5Wqvr2iKjkX4it9q+gxORdr8du/wChXx/5thLrndNu41docVV5yTV2dvl87PtolvltbS0lSWZCHNii/WZHJJhSohI5EkyAzVEFmuyOl+QupvpZDLcNdVXWkdYWY4ygTfRwp7F4wlA062eeHmV99Uk1lw0FpoZ+iZ6Nw2dDKLxGHsx3eYycfPNZWLMgTbhHVs6QOcYitJGaVvobiGcjmFGN/wBVpU+tVHMVPv3+klkPlvZ+SeLZoffeRYW+4/lqQVhS76Zn5anuYNFlK+RBss9cXdW4kME7PGaRkoB4llFO1WexKqukGNvVfX3YPzuxicHdF0dW/LFkV/KmPV0CbLYGUsrA35HZz5V7tR8UFzyV4JEqGzIILmziZGUWIltmmZv2ltUKHFyzp8+p9VkuMGEYXsshpnvcNpRPc4pijZ/lo/4tVXKrld6VVd6S3CZyHi/FvJVTeQfM99qOt5jRiDn8NMy1dVQ7efnb+qroefyOeurNQrMmXTUnywR4sYUONCY8A2Q3nP8A/9k="},88207:function(A,I){I.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMzoxNgAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMzoxNi0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMzoxNi0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAzOjE2LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABUAAQEAAAAAAAAAAAAAAAAAAAgH/8QAHRAAAQUBAQEBAAAAAAAAAAAABQMEBgcIAgkBE//EABcBAQEBAQAAAAAAAAAAAAAAAAQFBgj/xAAhEQACAwACAgIDAAAAAAAAAAACAwEEBQYREiEAEyIxUf/aAAwDAQACEQMRAD8AUcEF7J9Ad0+s7F16IbbomF44tyxGMNrrNJ6xzCxmIRuyLXigSJw+sIXPYig8kSIOvGDdg1EsXhmVm3/X7/VHq/PSnRNk+P8AFuNcGKOKcc07HIKFQrFvYVUXC7DqdF7H2Ltiq+RVLLZSUmQrQsfXQx6wKhv6ejtROpoV10HthaqhNmSAWvAQBQNCJKBVERAxJGU/39nkNeOtcp+oWBqdEba9H7Ii9tW5Rwqw4RtcRctZ9FIlZV0Na2KtmlY2fM5MzkQAkH4MojZbw1T6YH2TxMeqm9Fd9/KrM3C3OF8o0Gcc4jUdRoaR1LPHGZ9zwfTziuBJXKdZJKaDJXJo8p8lEMnEicfCxYu0tjNQOhqtBz68NXoQ9XYNsQqYhLTOCGR8uj69FE9ex+XuJra7wjt31wTPebmzdHVtte1LK6ATDPQKzBDdtApbYlsSUcejVmQSByvlsZIxyxmnTdcKUGnIqXZqfFOkXyPPxKY+MHk3HOCSrl/Hsi5x2lT+2vqtpsmbSKlFJqdTs2kdrB1Qu4YBqeso67GfalzdztDbg8q/aVoObIsqi2Olm15iQNWs+ikHR1IlBLKP7+jhCc06B0D6W4Gs2tPO/f8AQMNqm7Kak1oSzWhe87IZIRmvbfC2ARIo2PbkVBtY2LFA2pn6xjCD7r6UMvFPrFv2+fd891rOxlZXD+UU7nLOLali9naCaSMJeZTKXW6DKoBNSg9pOM2EvydI/gsY8pgR+ECpZta2a5OZp1lpsINx3psNiAU8WzP2vEYARGC6CJ/Ip9R3Pz//2Q=="},85973:function(A,I){I.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMjoxOQAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMjoxOS0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMjoxOS0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAyOjE5LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABYAAQEBAAAAAAAAAAAAAAAAAAABCf/EAB4QAAICAgMBAQAAAAAAAAAAAAUGAwQCBwEIEwAJ/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAJ/8QAHxEAAQQDAQEBAQAAAAAAAAAABAIDBQYBBxIAEwgU/9oADAMBAAIRAxEAPwDTd43T2X3D+hbnpCp2Y3TrtaN9knDVYmNJfGsIKWV4Q7F1oTyPWwx4OLlmqjqFfmfPLiKa9Y9LFqfKWTLL7SGJqlBq+kYq3OUGqTh4lEi7ESqWho0smQOKiRTyfueUGUQlLj7y+MY6SyjlDaMJTjHsO7HsPcN+/Vlg1wxuHYdTh5Hb0/SQUVyzzkcFDRQFjPiAf5IiPkwAluMiCtfRWeHCXe3XnVLXlXiPunsvp79C03SFvsxunYi0E7JKGqi0bs+NZsUzLxZ3ErRXkgtmjxkXFNaHX7HMGePrNRsedirPjLHjl8y9UoNo0jK25qg1SDPLocnYxlRMPGiEx5w0QSeN8DxAxSFIbfZR3jPKXkdIcRlKs48VvYm4aD+q6/rh/cOw7ZDx23oGknIsdnnJEKZijrGDDnZLiJCTPCQ4+IS781YwtwZ3h1l1K0YV6POluzGnf0Lc930+s+6NirYTsi4bUEZpSI1mhLOvF3YuyieB7KFAGhcU1odfr8T45cTTUbHpXs18ZY8sfiItdBtGkYqou36qQZ5dEi66TiWmI0QmPNFiRQCfsAWaKQpLb7K+M45S8jlba8pVjPqya83FQP1XYdkD6d2HbIiO27P3YBVdrM5IgzMUdYz5cHAsvHRcgEhx4Qlr6Jz9HBnemnmsLTlPiNpbsxuH9Ckzd9zrPujXS2b7JKG1S+bqiNYUSsLwl3EspbggymgAUXLNVHULHEGOPEM16x5161fKWTHD5l7XQavpGVqLV+qk4eJQ5OuDJiZiNLJkDSYkkAbLIAhhRCUuPvI7znpLKOluLwlOc+q1rvcN+/Vde2ORp7YdTiJHb0Ddz1WKszkcDDRQNjBmDsFS8jFx4S3GRBncNpx83CXeWmWsrXjHv//Z"},55131:function(A,I){I.Z="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QCgRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAWodpAAQAAAABAAAAbgAAAAAAAABIAAAAAQAAAEgAAAABMjAyMDowNDoyMCAxNTowMjowOAAAA6ABAAMAAAABAAEAAKACAAMAAAABABAAAKADAAMAAAABABAAAAAAAAD/4QtLaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjUuMCI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNC0yMFQxNTowMjowOC0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNC0yMFQxNTowMjowOC0wNjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZmZpbml0eSBEZXNpZ25lciAoTWFyIDMxIDIwMjApIiBzdEV2dDp3aGVuPSIyMDIwLTA0LTIwVDE1OjAyOjA4LTA2OjAwIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAmRJQ0NfUFJPRklMRQABAQAAAlRsY21zBDAAAG1udHJSR0IgWFlaIAfkAAQAFAASAAoABGFjc3BBUFBMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAPmNwcnQAAAFIAAAATHd0cHQAAAGUAAAAFGNoYWQAAAGoAAAALHJYWVoAAAHUAAAAFGJYWVoAAAHoAAAAFGdYWVoAAAH8AAAAFHJUUkMAAAIQAAAAIGdUUkMAAAIQAAAAIGJUUkMAAAIQAAAAIGNocm0AAAIwAAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIgAAABwAcwBSAEcAQgAgAEkARQBDADYAMQA5ADYANgAtADIALgAxAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAADAAAAAcAE4AbwAgAGMAbwBwAHkAcgBpAGcAaAB0ACwAIAB1AHMAZQAgAGYAcgBlAGUAbAB5WFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEIAAAXe///zJQAAB5MAAP2Q///7of///aIAAAPcAADAblhZWiAAAAAAAABvoAAAOPUAAAOQWFlaIAAAAAAAACSfAAAPhAAAtsNYWVogAAAAAAAAYpcAALeHAAAY2XBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbY2hybQAAAAAAAwAAAACj1wAAVHsAAEzNAACZmgAAJmYAAA9c/9sAQwABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/9sAQwEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEB/8AAEQgAEAAQAwERAAIRAQMRAf/EABcAAAMBAAAAAAAAAAAAAAAAAAMGBwn/xAAeEAACAgMBAQEBAAAAAAAAAAAFBgMEAgcIAQkTIv/EABkBAAIDAQAAAAAAAAAAAAAAAAEGAgMFCf/EACURAAEEAgIBBAMBAAAAAAAAAAECAwQFBgcRIQAIEhMxIjJBUf/aAAwDAQACEQMRAD8A2nWEzrbtboX6IUk/srdupiHPm1jinrBJVnhtXkcthm1bUAq4G9ABaAtVerxxIAylbMVRhG3YmJ2SVqGzND+VjPAdecf9rq0ltRCQFEJPagB0ev17PB5585kVdLt/eGxfUexTbqznEJGustnVGK0dVfXFbQzEqtssr6qvfRX2sFqubSjHorDsxqLJecXKckuodWj2OISPJ1zz+8fOZ4duqOhmcr0dvf3XOz9Q7KcW4yDWIAm0VpAZQNsefZzFUnbsVy9/D2eyMqWBV2COenL7JjjJ4B8ramCXXFFxYSpKiSB+QBHZPP3/AIOPF+hXuHXl76bL692xsa1l7Lz443lOHZPdXE2DVNwcrq8es696PYWs1qU861MkJLjkVpyI+2lxhRUArwDfT62552V9KVJQ5U6Fb7nT+2827Wm19aKDeVDKkAfZGwHdaZKRNdWDNYncngbh0+FeoUoXA96jLFa8/b+IwflbVIAacPyK5SpIJA4Uog9A8/Y/vXldyzuDXOT+pynptS7FuXtp5gbjGMuxinuZcKpRCybIb2ss2JVbVTW5TzjdxGcS2zLjvwpEdaHR7+k0o099edobv+e0TzxtuvVpXQG4VR12fsFoR2xaRzUVRj18XaD9X06qA6S5hlAnECFcPKUITz2SEQ2llNnHjnLIqdeWx7mlpKFhSlFJAPaST2Bx9fXPjPOvtx7tzr06IvtLZxikvXmZ1N5lWRWtFb1lFOS1Z47MtbBoz6iAxWgopZEluGuVIccdkIisFxSQpf8A/9k="}}]);