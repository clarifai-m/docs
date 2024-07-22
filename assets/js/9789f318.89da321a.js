"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3291],{15680:(e,t,o)=>{o.d(t,{xA:()=>c,yg:()=>u});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(o),g=n,u=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return o?r.createElement(u,a(a({ref:t},c),{},{components:o})):r.createElement(u,a({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var h=2;h<i;h++)a[h]=o[h];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},67247:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var r=o(58168),n=(o(96540),o(15680));const i={},a="Region Thresholder",s={unversionedId:"portal-guide/agent-system-operators/Region-Thresholder",id:"portal-guide/agent-system-operators/Region-Thresholder",title:"Region Thresholder",description:"The Region Thresholder node or operator is designed to filter image regions based on the confidence scores assigned to detected concepts and works in conjunction with the visual detection node.",source:"@site/docs/portal-guide/agent-system-operators/Region-Thresholder.md",sourceDirName:"portal-guide/agent-system-operators",slug:"/portal-guide/agent-system-operators/Region-Thresholder",permalink:"/portal-guide/agent-system-operators/Region-Thresholder",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/agent-system-operators/Region-Thresholder.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Map",permalink:"/portal-guide/agent-system-operators/map"},next:{title:"Creating and Managing Model Versions",permalink:"/portal-guide/model-versions/"}},l={},h=[{value:"Threshold Mechanism:",id:"threshold-mechanism",level:2},{value:"Example Scenario:",id:"example-scenario",level:3},{value:"How to Create a Region Thresholder",id:"how-to-create-a-region-thresholder",level:2},{value:"1. Create a New Application",id:"1-create-a-new-application",level:3},{value:"2. Add Visual Detection Node",id:"2-add-visual-detection-node",level:3},{value:"3. Configure Region Thresholder Node",id:"3-configure-region-thresholder-node",level:3},{value:"4. Test the Workflow",id:"4-test-the-workflow",level:3}],c={toc:h},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.yg)(d,(0,r.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"region-thresholder"},"Region Thresholder"),(0,n.yg)("p",null,"The Region Thresholder node or operator is designed to filter image regions based on the confidence scores assigned to detected concepts and works in conjunction with the visual detection node."),(0,n.yg)("p",null,"It ensures that only regions meeting specific confidence criteria are passed on for further processing, thereby enhancing the accuracy and relevance of the workflow results.** **It uses a thresholding mechanism to filter out regions according to threshold criteria set by the user, Ensuring that only regions with required scores are considered for further analysis."),(0,n.yg)("h2",{id:"threshold-mechanism"},"Threshold Mechanism:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Threshold Type:")," The threshold can be set using various operators such as >, >=, =, ","<","=, or ","<","."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Per Concept Thresholding:")," For each concept detected in a region, the confidence score is compared to the specified threshold or threshold criteria set by the user. For example, if the threshold type is >, then only regions with a concept's confidence score greater than the threshold will be passed on."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Overall Region Filtering:")," If all concepts within a region are filtered out (i.e., none meet the threshold criteria), the entire region is removed from the output.")),(0,n.yg)("h3",{id:"example-scenario"},"Example Scenario:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Concept:"),' "Laptop"'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Threshold Type:")," >"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Threshold Value:")," 0.8"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Operation:"),' If the confidence score of "Laptop" in a detected region is greater than 0.8, that region is passed through. Otherwise, it is filtered out.')),(0,n.yg)("p",null,"Now that the theory of how Region Thresholder Functions is established, let\u2019s understand the Region Thresholder by creating an app, setting up a workflow with this node, and testing it to deepen our understanding."),(0,n.yg)("h2",{id:"how-to-create-a-region-thresholder"},"How to Create a Region Thresholder"),(0,n.yg)("h3",{id:"1-create-a-new-application"},"1. Create a New Application"),(0,n.yg)("p",null,"Follow this ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application/"},"guide")," to create an application in a few simple steps. Upload Inputs and Concepts in it."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"alt text",src:o(80619).A,width:"512",height:"266"})),(0,n.yg)("p",null,"Now, follow this ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/setting-up-a-mesh-workflow/#workflow-setup"},"guide")," and create a workflow. Once it is created and user can start editing it as per the requirements using the plethora of Clarifai models available to use visible in the left menu by dragging them into the workspace and connecting & configuring them as per need to create the workflow."),(0,n.yg)("p",null," \\\nTo understand how Region thresholder works we have set up a flow that uses a visual detector model as well. The reason behind this is that the Visual Detector identifies regions and provides the confidence scores that the Thresholder uses to filter those regions effectively. Without the Visual Detector, the Region Thresholder would lack the necessary data to perform its filtering function."),(0,n.yg)("h3",{id:"2-add-visual-detection-node"},"2. Add Visual Detection Node"),(0,n.yg)("p",null,"Drag and drop a visual detector node onto the workspace and connect it to the input data node. After connecting the input element, select the appropriate model for visual detection (e.g., Image Detection) and configure it."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"alt text",src:o(48337).A,width:"512",height:"227"})),(0,n.yg)("h3",{id:"3-configure-region-thresholder-node"},"3. Configure Region Thresholder Node"),(0,n.yg)("p",null,"Drag and drop a region-thresholder node onto the workspace and Connect the visual-detector node to the region-thresholder node. Post connection click on the region-thresholder node to configure it."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"alt text",src:o(82105).A,width:"512",height:"241"})),(0,n.yg)("p",null,"Select the concepts that we created in step 3 and Set the confidence threshold value."),(0,n.yg)("p",null,"Select the concept threshold type from the dropdown. These filters are critical in determining which concepts pass through based on their associated confidence scores. (>, >=, =, ","<","=, or ","<",") Here\u2019s how each type of threshold filter functions within the region thresholder:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",null,(0,n.yg)("code",null,"GREATER_THAN")),": Allows concepts with confidence scores strictly higher than the threshold."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",null,(0,n.yg)("code",null,"GREATER_THAN_OR_EQUAL")),": Allows concepts with confidence scores equal to or higher than the threshold."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",null,(0,n.yg)("code",null,"LESS_THAN")),": Permits only concepts with confidence scores strictly below the threshold."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",null,(0,n.yg)("code",null,"LESS_THAN_OR_EQUAL")),": Permits concepts with confidence scores equal to or below the threshold."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",null,(0,n.yg)("code",null,"EQUAL")),": Allows only concepts with confidence scores exactly equal to the threshold.")),(0,n.yg)("p",null,"Save the workflow."),(0,n.yg)("h3",{id:"4-test-the-workflow"},"4. Test the Workflow"),(0,n.yg)("p",null,"Upload the Inputs from a local device or use the inputs in the app.  We will use Batch Predict as we have already uploaded inputs in step 3. As soon as the user uploads inputs, the workflow will give the output based on the configurations done."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"alt text",src:o(39474).A,width:"512",height:"241"})),(0,n.yg)("p",null,"That\u2019s it."))}p.isMDXComponent=!0},80619:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/Create-app-upload-inputs-f7bffb05a91e325683ff387239be26b1.png"},82105:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/Region-thresholder-node-d1521a900bbf46e4e770ff68ab287908.png"},39474:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/Region-thresholder-output-f5a14e531712c6dc6aa86bd41bdefff0.png"},48337:(e,t,o)=>{o.d(t,{A:()=>r});const r=o.p+"assets/images/Visual-detector-node-f3ebe994ec7d7253524d3105596f2499.png"}}]);