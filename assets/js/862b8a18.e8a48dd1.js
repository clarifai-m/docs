"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),f=i,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),i=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(87462),i=a(67294),r=a(86010),l=a(12466),o=a(16550),s=a(91980),c=a(67392),u=a(50012);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}function d(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=h({queryString:a,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??p;return f({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),m(e)}),[c,m,r]),tabValues:r}}var b=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function C(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==o&&(p(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=m(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(C,(0,n.Z)({},e,t)),i.createElement(y,(0,n.Z)({},e,t)))}function I(e){const t=(0,b.Z)();return i.createElement(v,(0,n.Z)({key:String(t)},e))}},26547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(74866),l=a(85162);const o={description:"Clarifai API provides clients in the most popular languages."},s="Clarifai API Clients",c={unversionedId:"api-guide/api-overview/api-clients/README",id:"api-guide/api-overview/api-clients/README",title:"Clarifai API Clients",description:"Clarifai API provides clients in the most popular languages.",source:"@site/docs/api-guide/api-overview/api-clients/README.mdx",sourceDirName:"api-guide/api-overview/api-clients",slug:"/api-guide/api-overview/api-clients/",permalink:"/api-guide/api-overview/api-clients/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/api-overview/api-clients/README.mdx",tags:[],version:"current",frontMatter:{description:"Clarifai API provides clients in the most popular languages."},sidebar:"tutorialSidebar",previous:{title:"Clarifai API Basics",permalink:"/api-guide/api-overview/"},next:{title:"gRPC vs HTTP Channels",permalink:"/api-guide/api-overview/api-clients/grpc-vs-http-channels"}},u={},p=[{value:"Official Clients",id:"official-clients",level:2},{value:"Manually-built Clients (deprecated)",id:"manually-built-clients-deprecated",level:2},{value:"Client Installation Instructions",id:"client-installation-instructions",level:2}],d={toc:p},f="wrapper";function h(e){let{components:t,...a}=e;return(0,i.kt)(f,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clarifai-api-clients"},"Clarifai API Clients"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"}," Clarifai API provides clients in the most popular languages")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"You can access the Clarifai API through clients in many of the most popular programming languages. Our clients are built on ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," and are accessible through HTTP+JSON channels as well as gRPC channels. "),(0,i.kt)("h2",{id:"official-clients"},"Official Clients"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Available Clients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-python-grpc/"},"Clarifai Python"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-java-grpc/"},"Clarifai Java"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-nodejs-grpc"},"Clarifai NodeJS"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-csharp-grpc/"},"Clarifai C","#"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-php-grpc/"},"Clarifai PHP"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-swift-grpc"},"Clarifai Swift"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-rust-grpc"},"Clarifai Rust"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-go-grpc"},"Clarifai Go"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-cpp-grpc"},"Clarifai C++"))))),(0,i.kt)("h2",{id:"manually-built-clients-deprecated"},"Manually-built Clients ","(","deprecated",")"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Deprecated Clients"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-csharp"},"C","#"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-java"},"Java"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-javascript"},"JavaScript")," ","(",(0,i.kt)("a",{parentName:"td",href:"https://sdk.clarifai.com/js/latest/index.html"},"Reference Docs"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/clarifai-php"},"PHP"))))),(0,i.kt)("h2",{id:"client-installation-instructions"},"Client Installation Instructions"),(0,i.kt)("p",null,"Here are the installation instructions and the initialization code for some of our most commonly used clients. "),(0,i.kt)("p",null,"For information on installing our other clients, please follow the links above."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Learn how to set up authorization with the various API clients ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/authorize"},"here"),". ")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"##############################################################################################\n# Installation\n##############################################################################################\n\npython -m pip install clarifai-grpc\n\n##############################################################################################\n# Initialize the gRPC-based client to communicate with the Clarifai platform.\n##############################################################################################\n\n# Import the Clarifai gRPC-based objects needed\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_pb2, status_code_pb2\n\n# Construct the communications channel \nchannel = ClarifaiChannel.get_grpc_channel()\n# Construct the V2Stub object for accessing all the Clarifai API functionality\nstub = service_pb2_grpc.V2Stub(channel)\n\n##############################################################################################\n# This is where you set up the metadata object that's used to authenticate. \n# This authorization will be used by every Clarifai API call.\n# Change the following authorization key to your own credentials\n# Example: metadata = (('authorization', 'Key ' + 'a123457612345678'),)\n##############################################################################################\n \nmetadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_PAT_HERE'),)\n# Or, if you were to use an API Key:\n# metadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_API_KEY_HERE'),)\n# Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key\n\n##############################################################################################\n# A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n# user_id (your user id) and app_id (app id that contains the model of interest). \n# Both of them are specified as string values.\n##############################################################################################\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id='YOUR_USER_ID_HERE', app_id='YOUR_APPLICATION_ID_HERE')\n"))),(0,i.kt)(l.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'///////////////////////////////////////////////////////////////////////////////\n// Installation\n///////////////////////////////////////////////////////////////////////////////\n\nnpm install clarifai-nodejs-grpc\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Initialize the gRPC-based client to communicate with the Clarifai platform.\n////////////////////////////////////////////////////////////////////////////////////////////\n\n// Import the Clarifai gRPC-based client\nconst {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");\n\n// Construct the stub object for accessing all the Clarifai API functionality\nconst stub = ClarifaiStub.grpc();\n\n////////////////////////////////////////////////////////////////////////////////////////////\n// This is where you set up the Metadata object that\'s used to authenticate. \n// This authorization will be used by every Clarifai API call.\n// Change the following authorization key to your own credentials\n// Example: metadata.set("authorization", "Key " + "a123457612345678");\n////////////////////////////////////////////////////////////////////////////////////////////\n\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + "YOUR_CLARIFAI_PAT_HERE");\n// Or, if you were to use an API Key:\n// metadata.set("authorization", "Key " + "YOUR_CLARIFAI_API_KEY_HERE");\n// Yes, the word \'Key\' appears in addition to the alphanumeric PAT or API Key\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n// user_id (your user id) and app_id (app id that contains the model of interest). \n// Both of them are specified as string values.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nuser_app_id: {\n    "user_id": "YOUR_USER_ID_HERE",\n    "app_id": "YOUR_APPLICATION_ID_HERE"\n}\n'))),(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//////////////////////////////////////////////////////////////////////////////////////////////\n// Installation\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nVia Gradle:\n\nrepositories {\n    mavenCentral()\n}\n\ndependencies {\n    implementation \'com.clarifai:clarifai-grpc:LATEST_VERSION_HERE\'\n}\n\nVia Maven:\n\n<repositories>\n    <repository>\n        <id>mavenCentral</id>\n        <name>mavenCentral</name>\n        <url>https://repo1.maven.org/maven2</url>\n    </repository>\n</repositories>\n\n<dependencies>\n    <dependency>\n        <groupId>com.clarifai</groupId>\n        <artifactId>clarifai-grpc</artifactId>\n        <version>LATEST_VERSION_HERE</version>\n    </dependency>\n</dependencies>\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Initialize the gRPC-based client to communicate with the Clarifai platform.\n////////////////////////////////////////////////////////////////////////////////////////////\n\n// Import the Clarifai gRPC-based objects needed\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Construct the communications channel.\n// Construct the stub object for accessing all the Clarifai API functionality.\n// Set up the authorization that will be used by every Clarifai API call.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nChannel channel = ClarifaiChannel.INSTANCE.getGrpcChannel();\n\nV2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(channel)\n.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_PAT_HERE"));\n\n// Or, if you were to use an API Key:\n//.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_API_KEY_HERE"));\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n// user_id (your user id) and app_id (app id that contains the model of interest). \n// Both of them are specified as string values.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\n.setUserAppId(UserAppIDSet.newBuilder().setUserId("YOUR_USER_ID_HERE").setAppId("YOUR_APPLICATION_ID_HERE"))\n'))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"//////////////////////////////////////////////////////////////////////////////\n// Installation     \n//////////////////////////////////////////////////////////////////////////////\n\ncomposer require clarifai/clarifai-php-grpc\n\n// gRPC for PHP extension is required to use the Clarifai gRPC PHP client\n// Check how to add gRPC to your PHP installation here: https://github.com/grpc/grpc/tree/master/src/php\n\n////////////////////////////////////////////////////////////////////////////////\n// Set Clarifai Namespace\n//     - A variety of standard objects are provided in the Clarifai namespace\n//       from the client library. The ones that are necessary depend on the\n//       specific RPC call being made. The namespaces used in the example\n//       code throughout this documentation are included below for reference, \n //      although you likely won't need all of them in your application. \n////////////////////////////////////////////////////////////////////////////////\n\n// Various data structures that are used in the RPC calls to the Clarifai Platform\n// These operate as standardization wrappers for various types of data.\n\n//    Data Types\nuse Clarifai\\Api\\Image;\nuse Clarifai\\Api\\Text;\nuse Clarifai\\Api\\Video;\n\n//    ML Structures\nuse Clarifai\\Api\\Concept;\nuse Clarifai\\Api\\Model;\n\n//    Wrapper Types\nuse Clarifai\\Api\\Data;\nuse Clarifai\\Api\\Input;\n\n// Various Request objects. These specify the structure of the actual RPC request between\n// the client and the platform.\nuse Clarifai\\Api\\PostModelOutputsRequest;\nuse Clarifai\\Api\\PostConceptsSearchesRequest;\n\n\nuse Clarifai\\Api\\ConceptQuery;\n\n// Output configuration objects\nuse Clarifai\\Api\\OutputInfo;\nuse Clarifai\\Api\\OutputConfig;\n\n// The request status code object.  This contains information on the success or failure of\n// the API operation.\nuse Clarifai\\Api\\Status\\StatusCode;\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Initialize the gRPC-based client to communicate with the Clarifai platform.\n////////////////////////////////////////////////////////////////////////////////////////////\n\n// The Clarifai PHP Client repository includes an autoload.php helper file that needs to be included\nrequire __DIR__ . '/vendor/autoload.php';\n\n// Enable use of the ClarifaiClient object from the Clarifai namespace\nuse Clarifai\\ClarifaiClient;  \n\n// Construct the initialization object for accessing all the Clarifai API functionality\n$client = ClarifaiClient::grpc();\n\n////////////////////////////////////////////////////////////////////////////////////////////\n// This is where you set up the Metadata object that's used to authenticate. \n// This authorization will be used by every Clarifai API call.\n// Change the following authorization key to your own credentials\n// Example: $metadata = ['Authorization' => ['Key a123457612345678']];\n////////////////////////////////////////////////////////////////////////////////////////////\n\n$metadata = ['Authorization' => ['Key YOUR_CLARIFAI_PAT_HERE']];\n\n// Or, if you were to use an API Key:\n// $metadata = ['Authorization' => ['Key YOUR_CLARIFAI_API_KEY_HERE']];\n// Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n// user_id (your user id) and app_id (app id that contains the model of interest). \n// Both of them are specified as string values.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nuse Clarifai\\Api\\UserAppIDSet;\n\n$userDataObject = new UserAppIDSet([\n    'user_id' => 'YOUR_USER_ID_HERE', \n    'app_id' => 'YOUR_APPLICATION_ID_HERE' \n]);\n\n"))),(0,i.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'\n///////////////////////////////////////////////////////////////////////////////\n// Installation\n///////////////////////////////////////////////////////////////////////////////\ndotnet add package ClarifaiGrpc\n\n///////////////////////////////////////////////////////////////////////////////\n// Initialize client\n///////////////////////////////////////////////////////////////////////////////\nusing System;\nusing System.Collections.Generic;\nusing Clarifai.Api;\nusing Clarifai.Channels;\nusing Grpc.Core;\nusing StatusCode = Clarifai.Api.Status.StatusCode;\n\nvar client = new V2.V2Client(ClarifaiChannel.Grpc());\n\nvar metadata = new Metadata\n{\n    {"Authorization", "Key {YOUR_PERSONAL_TOKEN}"}\n};\n')))))}h.isMDXComponent=!0}}]);