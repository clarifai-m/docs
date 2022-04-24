"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1818],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},38595:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],l={description:"Pre-configured API calls with Postman."},s="Using Postman with Clarifai APIs",p={unversionedId:"api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",id:"api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",title:"Using Postman with Clarifai APIs",description:"Pre-configured API calls with Postman.",source:"@site/docs/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis.md",sourceDirName:"api-guide/api-overview/helpful-api-resources",slug:"/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",permalink:"/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis.md",tags:[],version:"current",frontMatter:{description:"Pre-configured API calls with Postman."},sidebar:"tutorialSidebar",previous:{title:"Helpful API Resources",permalink:"/api-guide/api-overview/helpful-api-resources"},next:{title:"Your Data",permalink:"/api-guide/data/"}},c=[{value:"<strong>Overview</strong>",id:"overview",children:[],level:3},{value:'Prerequisites <a id="prerequisites"></a>',id:"prerequisites-",children:[],level:3},{value:'Setup <a id="setup"></a>',id:"setup-",children:[{value:'Import the Clarifai collection into Postman <a id="import-the-datadog-collection-into-postman"></a>',id:"import-the-clarifai-collection-into-postman-",children:[],level:4},{value:'Postman environment setup <a id="postman-environment-setup"></a>',id:"postman-environment-setup-",children:[],level:4}],level:3},{value:'Working with the Collection <a id="working-with-the-collection"></a>',id:"working-with-the-collection-",children:[{value:'Builder <a id="builder"></a>',id:"builder-",children:[],level:4},{value:'Description <a id="description"></a>',id:"description-",children:[],level:4},{value:'Params <a id="params"></a>',id:"params-",children:[],level:4}],level:3}],u={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-postman-with-clarifai-apis"},"Using Postman with Clarifai APIs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-configured API calls with Postman")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"overview"},(0,r.kt)("strong",{parentName:"h3"},"Overview")),(0,r.kt)("p",null,"This page explains how to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," to perform API calls to Clarifai by showing the actions available within the Clarifai API. You can use Postman to make a wide variety of ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," calls."),(0,r.kt)("h3",{id:"prerequisites-"},"Prerequisites ",(0,r.kt)("a",{id:"prerequisites"})),(0,r.kt)("p",null,"You have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An active Clarifai account."),(0,r.kt)("li",{parentName:"ul"},"Access to your ",(0,r.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/getting-started/authentication/app-specific-api-keys"},"Clarifai API key")," and user login credentials."),(0,r.kt)("li",{parentName:"ul"},"Basic knowledge of API structure and JSON formatting.")),(0,r.kt)("h3",{id:"setup-"},"Setup ",(0,r.kt)("a",{id:"setup"})),(0,r.kt)("h4",{id:"import-the-clarifai-collection-into-postman-"},"Import the Clarifai collection into Postman ",(0,r.kt)("a",{id:"import-the-datadog-collection-into-postman"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.getpostman.com/run-collection/8c7850b96f74d0fc03c0"},(0,r.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,r.kt)("p",null,"This collection works in Postman for Web or in your Postman application. It may take several seconds to load."),(0,r.kt)("h4",{id:"postman-environment-setup-"},"Postman environment setup ",(0,r.kt)("a",{id:"postman-environment-setup"})),(0,r.kt)("p",null,"After the Postman collection is imported, a full list of available Clarifai API calls is structured by folder in the left pane of Postman."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AUTHENTICATION")),(0,r.kt)("p",null,"The collection includes a ",(0,r.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/postman/variables-and-environments/variables/#environments-in-postman"},"Postman environment")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"Clarifai Authentication"),", where you can add your username, password and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/getting-started/authentication/app-specific-api-keys"},"Clarifai API key")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/getting-started/authentication/personal-access-tokens"},"Personal Access Token")," for authentication."),(0,r.kt)("p",null,"Follow these steps to set up your environment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Manage Environments")," gear icon in the upper right corner of Postman."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Clarifai Authentication")),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Edit"),"."),(0,r.kt)("li",{parentName:"ol"},"Add in your Clarifai API key as the initial value and current value for the ",(0,r.kt)("inlineCode",{parentName:"li"},"api_key")," variable, and add your Clarifai Application key as the initial value and current value for the ",(0,r.kt)("inlineCode",{parentName:"li"},"application_key")," variable.")),(0,r.kt)("h3",{id:"working-with-the-collection-"},"Working with the Collection ",(0,r.kt)("a",{id:"working-with-the-collection"})),(0,r.kt)("p",null,"After setup is complete, you are ready to begin making API calls. In the Postman -",">"," Clarifai folder, there are subfolders for each type of API category listed in the Clarifai API Reference. Expand the subfolders to see the HTTP methods and API call names."),(0,r.kt)("h4",{id:"builder-"},"Builder ",(0,r.kt)("a",{id:"builder"})),(0,r.kt)("p",null,"When you click on an API call in the collection, it loads in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Builder")," pane on the right. On this pane you can send the API call and see the returned status, response time, and API response code."),(0,r.kt)("h4",{id:"description-"},"Description ",(0,r.kt)("a",{id:"description"})),(0,r.kt)("p",null,"When you click on the Endpoint name a description of the endpoint and all required/optional parameters is displayed to help you build your requests:"),(0,r.kt)("h4",{id:"params-"},"Params ",(0,r.kt)("a",{id:"params"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Params")," tab shows all parameters and values that are currently on the API call. Here, you are able to add parameters and values. View the available arguments in the corresponding section of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview"},"Clarifai API documentation"),"."),(0,r.kt)("p",null,"This tab is an alternative to viewing the ",(0,r.kt)("inlineCode",{parentName:"p"},"param1:value1\xb6m2:value2")," structure of the API call."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ampersand ","(","&",")"," and colon ","(",":",")"," are not needed in the params table. Postman inserts these for you."),(0,r.kt)("li",{parentName:"ul"},"All placeholders follow the format: ",(0,r.kt)("inlineCode",{parentName:"li"},"<PLACEHOLDER>")," . They should be replaced before running a query.")))}d.isMDXComponent=!0}}]);