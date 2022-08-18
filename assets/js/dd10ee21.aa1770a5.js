"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8963],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),i=a(34334),r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(83117),i=a(67294),r=a(34334),o=a(72389),l=a(67392),s=a(7094),c=a(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,a;const{lazy:o,block:d,defaultValue:h,values:m,groupId:f,className:y}=e,b=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),A=(0,l.l)(g,((e,t)=>e.value===t.value));if(A.length>0)throw new Error('Docusaurus error: Duplicate values "'+A.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const I=null===h?h:null!=(t=null!=h?h:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==I&&!g.some((e=>e.value===I)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:k}=(0,s.U)(),[P,C]=(0,i.useState)(I),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=f){const e=v[f];null!=e&&e!==P&&g.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,a=_.indexOf(t),n=g[a].value;n!==P&&(w(t),C(n),null!=f&&k(f,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=_.indexOf(e.currentTarget)+1;a=null!=(n=_[t])?n:_[0];break}case"ArrowLeft":{var i;const t=_.indexOf(e.currentTarget)-1;a=null!=(i=_[t])?i:_[_.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},y)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>_.push(e),onKeyDown:E,onFocus:T,onClick:T},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=a?a:t)}))),o?(0,i.cloneElement)(b.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function h(e){const t=(0,o.Z)();return i.createElement(d,(0,n.Z)({key:String(t)},e))}},2318:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(83117),i=(a(67294),a(3905)),r=a(65488),o=a(85162);const l={sidebar_position:3},s="Authorize",c={unversionedId:"clarifai-basics/authentication/authorize",id:"clarifai-basics/authentication/authorize",title:"Authorize",description:"Authorize before securely making API requests",source:"@site/docs/clarifai-basics/authentication/authorize.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/authorize",permalink:"/clarifai-basics/authentication/authorize",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"App-Specific API Keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys"},next:{title:"Scopes",permalink:"/clarifai-basics/authentication/scopes"}},u={},p=[{value:"Authorization Keys",id:"authorization-keys",level:2},{value:"Authorization Examples",id:"authorization-examples",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorize"},"Authorize"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authorize before securely making API requests")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"After creating your access credentials, you are ready to make API calls. Most of our API clients require setting up authentication during initialization; though, it can be changed for particular requests, if needed. "),(0,i.kt)("p",null,"If you are using a REST API, you will need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header as illustrated in the cURL example below."),(0,i.kt)("h2",{id:"authorization-keys"},"Authorization Keys"),(0,i.kt)("p",null,"The key used for authorization can either be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"A Personal Access Token ","(","PAT",")"),", which is tied to a user; or,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys"},"An API Key"),", which is tied to a specific application.")),(0,i.kt)("admonition",{title:"IMPORTANT NOTE",type:"important"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"PAT is the primary authentication mechanism we use. "))),(0,i.kt)("p",null,"Using a PAT is more powerful than an API Key. A PAT represents you when accessing the Clarifai API. It allows you to access multiple applications with a single key."),(0,i.kt)("p",null,"With a PAT, you can access your own apps as well as any other apps you have permissions to use, such as public apps, apps you're added as a collaborator, or apps belonging to your organization's team. Also, certain endpoints support only PATs, such as creating a new application or a new API Key. "),(0,i.kt)("p",null,"When using a PAT to call the API, you need to specify your user ID alongside the application ID to which the request should be applied. "),(0,i.kt)("p",null,"On the other hand, an API Key restricts your access only to a single app. So, it could be suitable for accessing resources that are specifically locked down to a single app."),(0,i.kt)("p",null,"When using an app-specific API Key, you do not need to specify either the user ID or the application ID as they are already part of the API Key. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Clarifai provides various clients you can use to access the API in your favorite programming language. Learn how to install your preferred client ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/"},"here"),". ")),(0,i.kt)("h2",{id:"authorization-examples"},"Authorization Examples"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"###############################################################################################\n# Initialize the gRPC-based client to communicate with the Clarifai platform.\n###############################################################################################\n\n# Import the Clarifai gRPC-based objects needed\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_pb2, status_code_pb2\n\n# Construct the communications channel \nchannel = ClarifaiChannel.get_grpc_channel()\n# Construct the V2Stub object for accessing all the Clarifai API functionality\nstub = service_pb2_grpc.V2Stub(channel)\n\n##############################################################################################\n# This is where you set up the metadata object that's used to authenticate. \n# This authorization will be used by every Clarifai API call.\n# Change the following authorization key to your own credentials\n# Example: metadata = (('authorization', 'Key ' + 'a123457612345678'),)\n##############################################################################################\n \nmetadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_PAT_HERE'),)\n# Or, if you were to use an API Key:\n# metadata = (('authorization', 'Key ' + 'YOUR_CLARIFAI_API_KEY_HERE'),)\n# Yes, the word 'Key' appears in addition to the alphanumeric PAT or API Key\n\n##############################################################################################\n# A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n# user_id (your user id) and app_id (app id that contains the model of interest). \n# Both of them are specified as string values.\n##############################################################################################\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id='YOUR_USER_ID_HERE', app_id='YOUR_APPLICATION_ID_HERE')\n"))),(0,i.kt)(o.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'/////////////////////////////////////////////////////////////////////////////////////////////\n// Initialize the gRPC-based client to communicate with the Clarifai platform.\n////////////////////////////////////////////////////////////////////////////////////////////\n\n// Import the Clarifai gRPC-based client\nconst {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc");\n\n// Construct the stub object for accessing all the Clarifai API functionality\nconst stub = ClarifaiStub.grpc();\n\n////////////////////////////////////////////////////////////////////////////////////////////\n// This is where you set up the Metadata object that\'s used to authenticate. \n// This authorization will be used by every Clarifai API call.\n// Change the following authorization key to your own credentials\n// Example: metadata.set("authorization", "Key " + "a123457612345678");\n////////////////////////////////////////////////////////////////////////////////////////////\n\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + "YOUR_CLARIFAI_PAT_HERE");\n// Or, if you were to use an API Key:\n// metadata.set("authorization", "Key " + "YOUR_CLARIFAI_API_KEY_HERE");\n// Yes, the word \'Key\' appears in addition to the alphanumeric PAT or API Key\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n// user_id (your user id) and app_id (app id that contains the model of interest). \n// Both of them are specified as string values.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nuser_app_id: {\n    "user_id": "YOUR_USER_ID_HERE",\n    "app_id": "YOUR_APPLICATION_ID_HERE"\n}\n'))),(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/////////////////////////////////////////////////////////////////////////////////////////////\n// Initialize the gRPC-based client to communicate with the Clarifai platform.\n////////////////////////////////////////////////////////////////////////////////////////////\n\n// Import the Clarifai gRPC-based objects needed\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// Construct the communications channel.\n// Construct the stub object for accessing all the Clarifai API functionality.\n// Set up the authorization that will be used by every Clarifai API call.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\nChannel channel = ClarifaiChannel.INSTANCE.getGrpcChannel();\n\nV2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(channel)\n.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_PAT_HERE"));\n\n// Or, if you were to use an API Key:\n//.withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_API_KEY_HERE"));\n\n/////////////////////////////////////////////////////////////////////////////////////////////\n// A UserAppIDSet object is needed when using a PAT. It contains two pieces of information: \n// user_id (your user id) and app_id (app id that contains the model of interest). \n// Both of them are specified as string values.\n/////////////////////////////////////////////////////////////////////////////////////////////\n\n.setUserAppId(UserAppIDSet.newBuilder().setUserId("YOUR_USER_ID_HERE").setAppId("YOUR_APPLICATION_ID_HERE"))\n'))),(0,i.kt)(o.Z,{value:"cURL",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  -H "Authorization: Key YOUR_CLARIFAI_PAT_HERE" \\\n  -H "Content-Type: application/json" \\  \n'))),(0,i.kt)(o.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing Clarifai.API;\nnamespace YourNamespace\n{\n    public class YourClassName\n    {\n        public static async Task Main()\n        {\n            var client = new ClarifaiClient("YOUR_API_KEY");\n        }\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"objective-c",label:"Objective-C",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'ClarifaiApp *app = [[ClarifaiApp alloc] initWithApiKey:@"YOUR_API_KEY"];\n'))),(0,i.kt)(o.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Clarifai\\API\\ClarifaiClient;\n$client = new ClarifaiClient('YOUR_API_KEY');\n")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"If your PAT or API Key does not have the required scope","(","s",")"," to execute a given request, you will get an error message reporting the missing scopes and/or endpoints that are needed to execute the request."),(0,i.kt)("li",{parentName:"ul"},"An invalid PAT or API Key may be reported as 'API key not found'. "),(0,i.kt)("li",{parentName:"ul"},"Failure to include the required PAT or API Key may result in 'Invalid request'."))))}h.isMDXComponent=!0}}]);