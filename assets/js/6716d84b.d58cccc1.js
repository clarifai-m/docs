"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6341],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>g});var o=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(a),y=l,g=p["".concat(s,".").concat(y)]||p[y]||m[y]||i;return a?o.createElement(g,n(n({ref:t},u),{},{components:a})):o.createElement(g,n({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=y;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,n[1]=r;for(var d=2;d<i;d++)n[d]=a[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}y.displayName="MDXCreateElement"},73802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=a(58168),l=(a(96540),a(15680));const i={description:"Learn how to create and install your modules",sidebar_position:1},n="Create and Install Modules",r={unversionedId:"portal-guide/modules/create-install",id:"portal-guide/modules/create-install",title:"Create and Install Modules",description:"Learn how to create and install your modules",source:"@site/docs/portal-guide/modules/create-install.md",sourceDirName:"portal-guide/modules",slug:"/portal-guide/modules/create-install",permalink:"/portal-guide/modules/create-install",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/modules/create-install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to create and install your modules",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/portal-guide/modules/"},next:{title:"Manage Your Modules",permalink:"/portal-guide/modules/manage"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Prerequisite for Creating Modules",id:"prerequisite-for-creating-modules",level:2},{value:"Create Modules",id:"create-modules",level:2},{value:"Module ID",id:"module-id",level:4},{value:"Module Description",id:"module-description",level:4},{value:"Module Metadata",id:"module-metadata",level:4},{value:"Module Visibility",id:"module-visibility",level:4},{value:"Create Module",id:"create-module",level:4},{value:"Create a Module Version",id:"create-a-module-version",level:2},{value:"Get a GitHub URL",id:"get-a-github-url",level:3},{value:"Fill the form",id:"fill-the-form",level:3},{value:"Notes Preview",id:"notes-preview",level:4},{value:"Module Version ID",id:"module-version-id",level:4},{value:"Module ID",id:"module-id-1",level:4},{value:"Sidebar Title",id:"sidebar-title",level:4},{value:"Module Version Description",id:"module-version-description",level:4},{value:"Module Version Metadata",id:"module-version-metadata",level:4},{value:"Module Version Visibility",id:"module-version-visibility",level:4},{value:"Environment Variables and Secrets",id:"environment-variables-and-secrets",level:4},{value:"Sidebar Page Title",id:"sidebar-page-title",level:4},{value:"Select deployment type",id:"select-deployment-type",level:4},{value:"Create Module Version",id:"create-module-version",level:4},{value:"Install the Created Module Version",id:"install-the-created-module-version",level:2},{value:"Destination user_id",id:"destination-user_id",level:4},{value:"Destination app_id",id:"destination-app_id",level:4},{value:"Get shareable link",id:"get-shareable-link",level:4},{value:"Install Module",id:"install-module",level:4},{value:"Install the Module Into Destination App",id:"install-the-module-into-destination-app",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...i}=e;return(0,l.yg)(p,(0,o.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"create-and-install-modules"},"Create and Install Modules"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Learn how to create and install your modules")),(0,l.yg)("hr",null),(0,l.yg)("p",null,"The Clarifai portal allows you to create and install new modules and carry out various management tasks on them. "),(0,l.yg)("h2",{id:"overview"},"Overview"),(0,l.yg)("p",null,"There are two steps for creating modules: "),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. Creating a module and its versions"),"\u2014This is the process of authoring a new module and registering it on our AI lake. At the end of this process, it won\u2019t be interactable with our UI just yet; the next process of installing the module version into the sidebar handles that. Creating a module requires familiarity with GitHub and Python development. You\u2019ll start by coding your module, which is a great experience even locally, and then creating the module in the Clarifai platform, where we will fully host it for you. Each time you update the code of your module, you can simply create a new module version to capture that change."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. Installing a module"),"\u2014Once a module is created (or you find an already created one in our Community platform, or from your team members), you can install the module. This process will register the module in your Clarifai app, and it will appear on the portal\u2019s collapsible left sidebar so that you can interact with it."),(0,l.yg)("h2",{id:"prerequisite-for-creating-modules"},"Prerequisite for Creating Modules"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"A Streamlit app repository on GitHub. ")),(0,l.yg)("p",null,"For this example, we'll use ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/module-template"},"this Clarifai app module template"),". You can refer to its README.md file to learn how to clone the repository to your development environment."),(0,l.yg)("admonition",{type:"info"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Your Streamlit app should have a file named ",(0,l.yg)("inlineCode",{parentName:"p"},"app.py")," because we support integrating with Streamlit apps only from the ",(0,l.yg)("inlineCode",{parentName:"p"},"app.py")," entry point. It also serves as a central configuration file for your application. The file plays a crucial role in defining the behavior and structure of your Streamlit app integrated into the Clarifai platform. ")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"After installing a module, the markdown notes for the module overview page on the Clarifai portal will be created from the README.md file. Also, the left sidebar child items that appear under the ",(0,l.yg)("strong",{parentName:"p"},"Installed Modules")," category will be constructed from your Streamlit\u2019s app pages or folder. If your Streamlit app does not have them, it will be constructed as a single-page app with no sidebar subpages.")))),(0,l.yg)("h2",{id:"create-modules"},"Create Modules"),(0,l.yg)("p",null,"To create a new module, go to the individual page of your application. Then, select the ",(0,l.yg)("strong",{parentName:"p"},"Modules")," option on the collapsible left sidebar. "),(0,l.yg)("p",null,"You'll be redirected to the ",(0,l.yg)("strong",{parentName:"p"},"Modules")," manager page, where you can create new modules and view already created ones."),(0,l.yg)("p",null,"Click the ",(0,l.yg)("strong",{parentName:"p"},"Create Module")," button at the upper-right corner of the page."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"modules manager page",src:a(69951).A,width:"1896",height:"845"})),(0,l.yg)("p",null,"You\u2019ll be redirected to a page where you can create a module and a specific version for it. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"create a module",src:a(33092).A,width:"1799",height:"923"})),(0,l.yg)("p",null,"Let's talk about the fields to fill in the form for creating a new module. "),(0,l.yg)("h4",{id:"module-id"},"Module ID"),(0,l.yg)("p",null,"Start by providing a unique ID of the module you want to create. The ID is scoped to your app; so, it needs to be unique within your app, but not necessarily globally."),(0,l.yg)("h4",{id:"module-description"},"Module Description"),(0,l.yg)("p",null,"Provide a short description of your module. The description will be displayed on the Clarifai Community platform for others to quickly understand the purpose of your module."),(0,l.yg)("h4",{id:"module-metadata"},"Module Metadata"),(0,l.yg)("p",null,"Optionally, you can provide a JSON blob of metadata to attach to the module. It helps with filtering and organizing your modules."),(0,l.yg)("h4",{id:"module-visibility"},"Module Visibility"),(0,l.yg)("p",null,"You can choose to make the module public or private. Public modules are visible to everyone in the Community. Private modules are only visible to you and your collaborators."),(0,l.yg)("h4",{id:"create-module"},"Create Module"),(0,l.yg)("p",null,"Click the ",(0,l.yg)("strong",{parentName:"p"},"Create Module")," button to finish creating your module."),(0,l.yg)("p",null,"You\u2019ll get a message that the module has been successfully created. "),(0,l.yg)("h2",{id:"create-a-module-version"},"Create a Module Version"),(0,l.yg)("p",null,"After creating a module, you can now create a specific version for it. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"create a module version",src:a(86989).A,width:"1789",height:"885"})),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"Each module represents one Streamlit app. As you make changes to your Streamlit app code, you can create new versions of the module as you go. ")),(0,l.yg)("p",null,"In the input field, you can provide either:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"GitHub branch URL; or,"),(0,l.yg)("li",{parentName:"ul"},"GitHub commit URL.")),(0,l.yg)("p",null,"The URL you provide should be for the specific repository you would like to deploy as your module version. The repository should be public\u2014or, you\u2019ll need to provide Clarifai with the necessary permissions to import data from your private repository. The authorization process will walk you through a simple process where you grant access to your private repository using a GitHub Oauth app provided by Clarifai."),(0,l.yg)("h3",{id:"get-a-github-url"},"Get a GitHub URL"),(0,l.yg)("p",null,"To get a GitHub branch URL, navigate to your repository\u2019s page and switch to the branch you want. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"get GitHub branch URL",src:a(82130).A,width:"1582",height:"919"})),(0,l.yg)("p",null,"You can then grab the URL displayed on the branch page. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"copy GitHub branch URL",src:a(96955).A,width:"1788",height:"640"})),(0,l.yg)("p",null,"Here is an example: ",(0,l.yg)("inlineCode",{parentName:"p"},"https://github.com/[github-username]/module-example/tree/[branch-name]"),"."),(0,l.yg)("p",null,"Or, to get a commit URL, navigate to your repository\u2019s page and click the ",(0,l.yg)("strong",{parentName:"p"},"commits")," link."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"get a commit URL",src:a(18624).A,width:"1732",height:"661"})),(0,l.yg)("p",null,"On the ensuing page, click the ",(0,l.yg)("strong",{parentName:"p"},"View commit details")," button. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"view commit details",src:a(13097).A,width:"1806",height:"613"})),(0,l.yg)("p",null,"Next, grab the URL of the specific commit you want."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"copy commit URL",src:a(67230).A,width:"1832",height:"735"})),(0,l.yg)("p",null,"Here is an example: ",(0,l.yg)("inlineCode",{parentName:"p"},"https://github.com/[github-username]/module-example/commit/b03da4dae7cc617adbfe335ee7608c10ff69d0d4"),"."),(0,l.yg)("h3",{id:"fill-the-form"},"Fill the form"),(0,l.yg)("p",null,"After getting the GitHub URL, paste it in the input field, and click the enter button on your keyboard. Then, a form will appear for you to provide the details for creating a new module version. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"create a module",src:a(19719).A,width:"1804",height:"880"})),(0,l.yg)("p",null,"Let\u2019s talk about the fields to fill in the form. "),(0,l.yg)("h4",{id:"notes-preview"},"Notes Preview"),(0,l.yg)("p",null,"There is an expandable section that shows the markdown notes pulled from the module\u2019s GitHub README.md file. These markdown notes are what will show on your module\u2019s landing page and are only driven by what is found in the README.md file. So, you may review them here. If they are not satisfactory, you may make a new commit and then update the GitHub URL before proceeding with the next steps."),(0,l.yg)("h4",{id:"module-version-id"},"Module Version ID"),(0,l.yg)("p",null,"Start by providing a unique ID of the module version you want to create. For example, you can provide a version number as ",(0,l.yg)("inlineCode",{parentName:"p"},"1_0_0")," so that you can give ",(0,l.yg)("inlineCode",{parentName:"p"},"major_minor_patch")," semantic versioning to your users."),(0,l.yg)("h4",{id:"module-id-1"},"Module ID"),(0,l.yg)("p",null,"Provide the module ID the version belongs to. It should be the ID of a module you created previously."),(0,l.yg)("h4",{id:"sidebar-title"},"Sidebar Title"),(0,l.yg)("p",null,"Provide the module\u2019s title that will appear on the collapsible left sidebar under the ",(0,l.yg)("strong",{parentName:"p"},"Installed Modules")," category."),(0,l.yg)("h4",{id:"module-version-description"},"Module Version Description"),(0,l.yg)("p",null,"Provide a short description of your module version. The description will be displayed to help users explore the different versions of your module and quickly understand the purpose of each version. "),(0,l.yg)("p",null,"If you have a detailed description, you should provide it using the markdown notes on the module overview page. "),(0,l.yg)("h4",{id:"module-version-metadata"},"Module Version Metadata"),(0,l.yg)("p",null,"Optionally, you can provide a JSON blob of metadata to attach to the module version. It helps with filtering and organizing your module versions."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"create a module",src:a(78191).A,width:"1734",height:"936"})),(0,l.yg)("h4",{id:"module-version-visibility"},"Module Version Visibility"),(0,l.yg)("p",null,"You can choose to make the module version public or private. Public module versions are visible to everyone in the Community. Private module versions are only visible to you and your collaborators."),(0,l.yg)("h4",{id:"environment-variables-and-secrets"},"Environment Variables and Secrets"),(0,l.yg)("p",null,"Optionally, you can set environment variables and secrets for your module version. "),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/modules/secrets-management"},"Click here")," to learn how to set them. "),(0,l.yg)("h4",{id:"sidebar-page-title"},"Sidebar Page Title"),(0,l.yg)("p",null,"The page titles you provide will appear as the left sidebar child items under the ",(0,l.yg)("strong",{parentName:"p"},"Installed Modules")," category. The titles will link to the single page ",(0,l.yg)("inlineCode",{parentName:"p"},"app.py")," file of your module."),(0,l.yg)("p",null,"If you have a single-page Streamlit app, you do not need to add page titles. On the other hand, if you have a multi-page Streamlit app, each module under pages/ in the repository will be mapped to an option on the navigation bar. "),(0,l.yg)("h4",{id:"select-deployment-type"},"Select deployment type"),(0,l.yg)("p",null,"You can choose any of the following two deployment types:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Deploy locally \u2014 You can deploy the module version manually on your local machine. However, it will only be accessible to you. You need to provide the URL where your module is deployed. For example, you can provide ",(0,l.yg)("inlineCode",{parentName:"p"},"http://localhost:8502")," for local Streamlit development or ",(0,l.yg)("inlineCode",{parentName:"p"},"https://share.streamlit.io/...")," for Streamlit cloud deployment. Your deployment should be running before installing it. ")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Clarifai cloud \u2014 You can also deploy the module version on Clarifai's fully hosted cloud platform. This will make it accessible to other users and be fully managed for you. "))),(0,l.yg)("h4",{id:"create-module-version"},"Create Module Version"),(0,l.yg)("p",null,"Click the ",(0,l.yg)("strong",{parentName:"p"},"Create Module Version")," button to finish creating your module version."),(0,l.yg)("p",null,"After the deployment has been processed, you\u2019ll get a message that the version has been successfully added to your module. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"create a module version",src:a(96646).A,width:"1805",height:"861"})),(0,l.yg)("h2",{id:"install-the-created-module-version"},"Install the Created Module Version"),(0,l.yg)("p",null,"After creating a module and adding a version for it, a form will appear on the same page that allows you to install it on your app. This is an optional step for convenience purposes as you may want to use the newly created module version for yourself in the same application. Remember that you cannot actually use the created module version until you install it."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Your new module, and its versions, will appear in the AI Lake under the ",(0,l.yg)("strong",{parentName:"p"},"Modules")," section, and anyone who has the necessary permissions on your app and the module can install it. To make that easy, we also provide a link you can share for others to install it.")),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"install created module version",src:a(94205).A,width:"1809",height:"902"})),(0,l.yg)("p",null,"Let\u2019s talk about the fields to fill in the form. "),(0,l.yg)("h4",{id:"destination-user_id"},"Destination user_id"),(0,l.yg)("p",null,"Provide the ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id")," of the app you want to install the module to. It defaults to the current user ID, but you can change it to others, such as collaborators or organizations you belong to."),(0,l.yg)("h4",{id:"destination-app_id"},"Destination app_id"),(0,l.yg)("p",null,"Provide the ",(0,l.yg)("inlineCode",{parentName:"p"},"app_id")," of the app you want to install the module to. It defaults to the current app ID, but you can change to any apps within the destination ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id\u2019s")," account."),(0,l.yg)("h4",{id:"get-shareable-link"},"Get shareable link"),(0,l.yg)("p",null,"You can copy the provided shareable link and send it to anyone to install the module in their environment. They just need to replace ",(0,l.yg)("inlineCode",{parentName:"p"},"{USER_ID}")," with their user ID, and ",(0,l.yg)("inlineCode",{parentName:"p"},"{APP_ID}")," with the app ID they want to install the module to."),(0,l.yg)("h4",{id:"install-module"},"Install Module"),(0,l.yg)("p",null,"Click the ",(0,l.yg)("strong",{parentName:"p"},"Install Module")," button to install the module directly to the ",(0,l.yg)("inlineCode",{parentName:"p"},"user_id")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"app_id")," you\u2019d stated. "),(0,l.yg)("h2",{id:"install-the-module-into-destination-app"},"Install the Module Into Destination App"),(0,l.yg)("p",null,"You\u2019ll be redirected to another page where you can choose a URL suffix for installing the module into the destination app. It\u2019ll be available at ",(0,l.yg)("inlineCode",{parentName:"p"},"https://clarifai.com/{user_id}/{app_id}/installed_module_versions/{suffix}"),". "),(0,l.yg)("p",null,"You can also set the module\u2019s visibility on the same page. You can make the installation of the module version public, even if the underlying module and its versions are private, allowing you to open up a new capability. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"install created module version",src:a(73076).A,width:"1871",height:"767"})),(0,l.yg)("p",null,"Finally, click the ",(0,l.yg)("strong",{parentName:"p"},"Install to this App")," button. "),(0,l.yg)("p",null,"You\u2019ll get a message that the module has been successfully installed on your app. "),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"installed module to app",src:a(22987).A,width:"1853",height:"769"})),(0,l.yg)("p",null,"If you refresh the page, you\u2019ll notice that your installed module appears on the left sidebar under the ",(0,l.yg)("strong",{parentName:"p"},"Installed Modules")," category."),(0,l.yg)("p",null,(0,l.yg)("img",{alt:"module on sidebar",src:a(32482).A,width:"1892",height:"910"})),(0,l.yg)("p",null,"That\u2019s it!"))}m.isMDXComponent=!0},69951:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_1-2c275941c279a782dbb42d0af4bb79e0.png"},78191:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_10-83ea77b1418e39de7bbb69ea1c24479e.png"},96646:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_11-f0423ff5eb4518f8f89abf4b5b48483d.png"},94205:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_12-24336afec8af9dbb1fcc8d9552a245ed.png"},73076:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_13-5937299aa1c7620e447fa34c2db36193.png"},22987:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_14-3ce60a8685744211fc4f5ae1085787e6.png"},32482:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_15-bab620917dc05c545c541555ca65c377.png"},33092:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_2-4692c3255e7b9311a2a7b308010b73b9.png"},86989:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_3-7f3a433b3d98c290aacf6ef97dea9dea.png"},82130:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_4-aa98daf9dd320761f36df03329d5336c.png"},96955:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_5-2c07d3cb05a02b1840481c75f08fa69b.png"},18624:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_6-7786532aa6883ea2f23d89cd727df501.png"},13097:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_7-75ab60ac6a321e6534e57181e1b30dc6.png"},67230:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_8-d175c603fb25bf3afa2cf8d0016460f9.png"},19719:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/module_9-adfda1f7ac0c788450062f8cce8d6e22.png"}}]);