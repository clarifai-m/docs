"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3190],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),f=i,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),i=a(34334),r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(83117),i=a(67294),r=a(34334),l=a(72389),o=a(67392),s=a(7094),p=a(12466),c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:f,values:h,groupId:m,className:b}=e,C=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:C.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===f?f:null!=(t=null!=f?f:null==(a=C.find((e=>e.props.default)))?void 0:a.props.value)?t:C[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:A}=(0,s.U)(),[I,N]=(0,i.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=m){const e=k[m];null!=e&&e!==I&&g.some((t=>t.value===e))&&N(e)}const _=e=>{const t=e.currentTarget,a=P.indexOf(t),n=g[a].value;n!==I&&(E(t),N(n),null!=m&&A(m,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{var i;const t=P.indexOf(e.currentTarget)-1;a=null!=(i=P[t])?i:P[P.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>P.push(e),onKeyDown:w,onFocus:_,onClick:_},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":I===t})}),null!=a?a:t)}))),l?(0,i.cloneElement)(C.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},C.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function f(e){const t=(0,l.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},26547:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(83117),i=(a(67294),a(3905)),r=a(65488),l=a(85162);const o={description:"Clarifai API provides clients in the most popular languages."},s="Clarifai API Clients",p={unversionedId:"api-guide/api-overview/api-clients/README",id:"api-guide/api-overview/api-clients/README",title:"Clarifai API Clients",description:"Clarifai API provides clients in the most popular languages.",source:"@site/docs/api-guide/api-overview/api-clients/README.mdx",sourceDirName:"api-guide/api-overview/api-clients",slug:"/api-guide/api-overview/api-clients/",permalink:"/api-guide/api-overview/api-clients/",draft:!1,tags:[],version:"current",frontMatter:{description:"Clarifai API provides clients in the most popular languages."},sidebar:"tutorialSidebar",previous:{title:"Clarifai API Basics",permalink:"/api-guide/api-overview/"},next:{title:"gRPC vs HTTP Channels",permalink:"/api-guide/api-overview/api-clients/grpc-vs-http-channels"}},c={},u=[{value:"Manually-built Clients (deprecated)",id:"manually-built-clients-deprecated",level:2},{value:"Client Installation Instructions",id:"client-installation-instructions",level:2}],d={toc:u};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clarifai-api-clients"},"Clarifai API Clients"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Clarifai API provides clients in the most popular languages")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You can access the Clarifai API through clients in many of the most popular programming languages. Our clients are built on ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," and are accessible through HTTP+JSON channels as well as gRPC channels. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Official Clients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-python-grpc/"},"Clarifai Python"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-java-grpc/"},"Clarifai Java"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-nodejs-grpc"},"Clarifai NodeJS"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-csharp-grpc/"},"Clarifai C","#"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-php-grpc/"},"Clarifai PHP"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-swift-grpc"},"Clarifai Swift"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-rust-grpc"},"Clarifai Rust"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-go-grpc"},"Clarifai Go"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-cpp-grpc"},"Clarifai C++"))))),(0,i.kt)("h2",{id:"manually-built-clients-deprecated"},"Manually-built Clients ","(","deprecated",")"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Available Clients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-csharp"},"C","#"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-java"},"Java"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-javascript"},"JavaScript")," ","(",(0,i.kt)("a",{parentName:"td",href:"https://sdk.clarifai.com/js/latest/index.html"},"Reference Docs"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-php"},"PHP"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-python"},"Python")," ","(",(0,i.kt)("a",{parentName:"td",href:"https://clarifai-python.readthedocs.io/en/latest/index.html"},"Reference Docs"),")")))),(0,i.kt)("h2",{id:"client-installation-instructions"},"Client Installation Instructions"),(0,i.kt)("p",null,"Here are the installation instructions and the initialization code for some of our most commonly used clients. "),(0,i.kt)("p",null,"For information on installing our other clients, please follow the links above."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Learn how to set up authorization with the various API clients ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/authorize"},"here"),". ")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"##############################################################################################\n# Installation\n##############################################################################################\n\npython -m pip install clarifai-grpc\n\n##############################################################################################\n# Initialize the gRPC-based client to communicate with the Clarifai platform.\n##############################################################################################\n\n# Import the Clarifai gRPC-based objects needed\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_pb2, status_code_pb2\n\n# Construct the communications channel \nchannel = ClarifaiChannel.get_grpc_channel()\n# Construct the V2Stub object for accessing all the Clarifai API functionality\nstub = service_pb2_grpc.V2Stub(channel)\n\n##############################################################################################\n# This is where you set up the metadata object that's used to authenticate. \n# This authorization will be used by every Clarifai API call.\n# Change the following authorization key to your own credentials\n# Example: metadata = (('authorization', 'Key ' + 'a123457612345678'),)\n##############################################################################################\n \nmetadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_PAT_HERE'),)\n# Or, if you were to use an API Key:\n# metadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_API_KEY_HERE'),)\n# Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key\n\n##############################################################################################\n# A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n# user_id (your user id) and app_id (app id that contains the model of interest). \n# Both of them are specified as string values.\n##############################################################################################\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id='YOUR_USER_ID_HERE', app_id='YOUR_APPLICATION_ID_HERE')\n"))),(0,i.kt)(l.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'///////////////////////////////////////////////////////////////////////////////\n// Installation\n///////////////////////////////////////////////////////////////////////////////\n\nnpm install clarifai-nodejs-grpc\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Initialize the gRPC-based client to communicate with the Clarifai platform.\n////////////////////////////////////////////////////////////////////////////////////////////\n\n// Import the Clarifai gRPC-based client\nconst {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");\n\n// Construct the stub object for accessing all the Clarifai API functionality\nconst stub = ClarifaiStub.grpc();\n\n////////////////////////////////////////////////////////////////////////////////////////////\n// This is where you set up the Metadata object that\'s used to authenticate. \n// This authorization will be used by every Clarifai API call.\n// Change the following authorization key to your own credentials\n// Example: metadata.set("authorization", "Key " + "a123457612345678");\n////////////////////////////////////////////////////////////////////////////////////////////\n\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + "YOUR_CLARIFAI_PAT_HERE");\n// Or, if you were to use an API Key:\n// metadata.set("authorization", "Key " + "YOUR_CLARIFAI_API_KEY_HERE");\n// Yes, the word \'Key\' appears in addition to the alphanumeric PAT or API Key\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n// user_id (your user id) and app_id (app id that contains the model of interest). \n// Both of them are specified as string values.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nuser_app_id: {\n    "user_id": "YOUR_USER_ID_HERE",\n    "app_id": "YOUR_APPLICATION_ID_HERE"\n}\n'))),(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//////////////////////////////////////////////////////////////////////////////////////////////\n// Installation\n/////////////////////////////////////////////////////////////////////////////////////////////\n\n// Via Gradle:\nrepositories {\n    jcenter()\n}\n\ndependencies {\n    implementation \'com.clarifai:clarifai-grpc:LATEST_VERSION_HERE\'\n}\n\n// Via Maven:\n<repositories>\n<repository>\n    <id>jcenter</id>\n    <name>jcenter</name>\n    <url>https://jcenter.bintray.com</url>\n</repository>\n</repositories>\n\n<dependencies>\n<dependency>\n    <groupId>com.clarifai</groupId>\n    <artifactId>clarifai-grpc</artifactId>\n    <version>LATEST_VERSION_HERE</version>\n</dependency>\n</dependencies>\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Initialize the gRPC-based client to communicate with the Clarifai platform.\n////////////////////////////////////////////////////////////////////////////////////////////\n\n// Import the Clarifai gRPC-based objects needed\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Construct the communications channel.\n// Construct the stub object for accessing all the Clarifai API functionality.\n// Set up the authorization that will be used by every Clarifai API call.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nChannel channel = ClarifaiChannel.INSTANCE.getGrpcChannel();\n\nV2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(channel)\n.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_PAT_HERE"));\n\n// Or, if you were to use an API Key:\n//.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_API_KEY_HERE"));\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n// user_id (your user id) and app_id (app id that contains the model of interest). \n// Both of them are specified as string values.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\n.setUserAppId(UserAppIDSet.newBuilder().setUserId("YOUR_USER_ID_HERE").setAppId("YOUR_APPLICATION_ID_HERE"))\n'))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n//////////////////////////////////////////////////////////////////////////////\n// Installation\n//     - gRPC for PHP is required to use the Clarifai API\n//////////////////////////////////////////////////////////////////////////////\n\n//////////////////////////////////////////////////////////////////////////////\n// Set Clarifai Namespace\n//     - A variety of standard objects are provided in the Clarifai namespace\n//       from the client library.  Which ones that are necessary depend on the\n//       specific RPC call being made.  All namespaces used in the example\n//       code are included below for reference, although you likely won't need\n//       all of these in your application. \n//////////////////////////////////////////////////////////////////////////////\n\n// Various data structures that are used in the RPC calls to the Clarifai Platform\n// These operate as standardization wrappers for various types of data.\n\n//    Data Types\nuse Clarifai\\Api\\Image;\nuse Clarifai\\Api\\Text;\nuse Clarifai\\Api\\Video;\n\n//    ML Structures\nuse Clarifai\\Api\\Concept;\nuse Clarifai\\Api\\Model;\n\n//    Wrapper Types\nuse Clarifai\\Api\\Data;\nuse Clarifai\\Api\\Input;\n\n// Various Request objects.  These specify the structure of the actual RPC request between\n// the client and the platform.\nuse Clarifai\\Api\\PostModelOutputsRequest;\nuse Clarifai\\Api\\PostConceptsSearchesRequest;\n\n\nuse Clarifai\\Api\\ConceptQuery;\n\n// Output configuration objects\nuse Clarifai\\Api\\OutputInfo;\nuse Clarifai\\Api\\OutputConfig;\n\n// The request status code object.  This contains information on the success or failure of\n// the API operation.\nuse Clarifai\\Api\\Status\\StatusCode;\n\n\n\n//////////////////////////////////////////////////////////////////////////////\n// Initialize client\n//     - This initializes the gRPC based client to communicate with the \n//       Clarifai platform. \n//////////////////////////////////////////////////////////////////////////////\n\n// The Clarifai PHP Client repository includes an autoload.php helper file that needs to be included\nrequire 'vendor/autoload.php';\n\n// Enable use of the ClarifaiClient object from the Clarifai namespace\nuse Clarifai\\ClarifaiClient;  \n\n// Construct the actual gRPC client object\n$client = ClarifaiClient::grpc();\n\n\n\n//////////////////////////////////////////////////////////////////////////////\n// Set up Personal Access Token and Access information\n//     - This will be used by every Clarifai API call \n//////////////////////////////////////////////////////////////////////////////\n\n// Specify the Authorization key.  This should be changed to your Personal Access Token.\n// Example: $metadata = ['Authorization' => ['Key 123456789123456789']]; \n$metadata = ['Authorization' => ['Key {YOUR PERSONAL ACCESS TOKEN HERE}']]; // Using the PAT in these examples\n\n//\n// A UserAppIDSet object is needed for most rpc calls.  This object cotnains\n// two pieces of information: the user id and the app id.  Both of these are\n// specified as string values.\n//\n\nuse Clarifai\\Api\\UserAppIDSet;  // Specify the namespace for the UserAppIDSet object\n\n$userDataObject = new UserAppIDSet([\n    'user_id' => '{YOUR USER NAME HERE}', // This is your user id\n    'app_id' => '{YOUR APPLICATION ID HERE}' // This is the app id which contains the model of interest\n]);\n\n"))),(0,i.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'\n///////////////////////////////////////////////////////////////////////////////\n// Installation\n///////////////////////////////////////////////////////////////////////////////\ndotnet add package ClarifaiGrpc\n\n///////////////////////////////////////////////////////////////////////////////\n// Initialize client\n///////////////////////////////////////////////////////////////////////////////\nusing System;\nusing System.Collections.Generic;\nusing Clarifai.Api;\nusing Clarifai.Channels;\nusing Grpc.Core;\nusing StatusCode = Clarifai.Api.Status.StatusCode;\n\nvar client = new V2.V2Client(ClarifaiChannel.Grpc());\n\nvar metadata = new Metadata\n{\n    {"Authorization", "Key {YOUR_PERSONAL_TOKEN}"}\n};\n')))))}f.isMDXComponent=!0}}]);