"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1374],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||r;return t?n.createElement(m,o(o({ref:a},s),{},{components:t})):n.createElement(m,o({ref:a},s))}));function f(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=d;var c={};for(var p in a)hasOwnProperty.call(a,p)&&(c[p]=a[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9839:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],c={description:"How to create a Clarifai Application",sidebar_position:1},p="Create an Application",l={unversionedId:"clarifai-basics/applications/create-an-application",id:"clarifai-basics/applications/create-an-application",title:"Create an Application",description:"How to create a Clarifai Application",source:"@site/docs/clarifai-basics/applications/create-an-application.md",sourceDirName:"clarifai-basics/applications",slug:"/clarifai-basics/applications/create-an-application",permalink:"/clarifai-basics/applications/create-an-application",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/applications/create-an-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"How to create a Clarifai Application",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/clarifai-basics/applications/"},next:{title:"Application Settings",permalink:"/clarifai-basics/applications/application-settings"}},s=[{value:"Create an application in Portal",id:"create-an-application-in-portal",children:[{value:"ID Validation",id:"id-validation",children:[],level:3}],level:2},{value:"Create an application programmatically",id:"create-an-application-programmatically",children:[{value:"Copy an application",id:"copy-an-application",children:[],level:3}],level:2}],u={toc:s};function d(e){var a=e.components,c=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,c,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-an-application"},"Create an Application"),(0,r.kt)("p",null,"To create an application, head on over to the ",(0,r.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/apps"},"applications page")," and press the 'Create a New Application' button. "),(0,r.kt)("h2",{id:"create-an-application-in-portal"},"Create an application in Portal"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Application creation window",src:t(5153).Z})),(0,r.kt)("h3",{id:"id-validation"},"ID Validation"),(0,r.kt)("p",null,"Application names and other names in Portal must follow a few rules. Names must be 1 to 32 letters or numbers in length, with hyphens or underscores as separators ","(","spaces, periods, etc are not allowed",")","."),(0,r.kt)("p",null,"You can also set the default language so that you can create, train and search on concepts in your own language. Please keep in mind that pre-trained model concepts currently only work in English."),(0,r.kt)("h2",{id:"create-an-application-programmatically"},"Create an application programmatically"),(0,r.kt)("p",null,"For enterprise customers, it is also possible to generate applications and keys programmatically. If you are managing the work of multiple users who's data, models, and concepts need to be segregated, we recommend you create apps and a keys this way. This ensures that each individual user only has access to their own private resources."),(0,r.kt)("p",null,'{% tabs %}\n{% tab title="cURL" %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"curl --location --request POST 'https://api.clarifai.com/v2/users/{{user_id}}/apps/' \\\n--header 'Content-Type: application/json' \\\n--header 'X-Clarifai-Session-Token: {{session_token}}' \\\n--data-raw '{\n    \"apps\": [\n        {\n            \"id\": \"test-application-1589318146\"\n        }\n    ]\n}'\n")),(0,r.kt)("p",null,"{% endtab %}\n{% endtabs %}"),(0,r.kt)("h3",{id:"copy-an-application"},"Copy an application"),(0,r.kt)("p",null,"You can also create an application by cloning an existing application. Cloning an existing application can be a great way to start a new project, or branch and existing one. We\u2019ve made cloning easy with a simple interface in Portal. Just click \u201cCreate a copy\u201d in the bottom-right corner of your app on the app management page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(836).Z})))}d.isMDXComponent=!0},836:function(e,a,t){a.Z=t.p+"assets/images/app_duplication-ee6fb33bf70e295dc46014478f46428a.jpg"},5153:function(e,a,t){a.Z=t.p+"assets/images/create-new-app-new-b870893cd1ccf7b8f78f9f672faa92f7.png"}}]);