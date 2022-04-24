"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8963],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),i=a(72389),o=a(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(63616),c=a(86010),s="tabItem_vU9c";function p(e){var t,a,i,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,r.useState)(g),A=T[0],I=T[1],C=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=w[f];null!=O&&O!==A&&b.some((function(e){return e.value===O}))&&I(O)}var E=function(e){var t=e.currentTarget,a=C.indexOf(t),n=b[a].value;n!==A&&(P(t),I(n),null!=f&&N(f,n))},x=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},h)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return C.push(e)},onKeyDown:x,onFocus:E,onClick:E},i,{className:(0,c.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},2318:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(26396),l=a(58215),u=["components"],c={sidebar_position:2},s="Authorize",p={unversionedId:"clarifai-basics/authentication/authorize",id:"clarifai-basics/authentication/authorize",title:"Authorize",description:"After creating your API Key, you are ready to make API calls. Most clients set up authentication when initializing the client; though, it can be changed for particular requests, if needed.",source:"@site/docs/clarifai-basics/authentication/authorize.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/authorize",permalink:"/clarifai-basics/authentication/authorize",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/authentication/authorize.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"App-Specific API Keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys"},next:{title:"Personal Access Tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens"}},d=[],m={toc:d};function f(e){var t=e.components,a=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorize"},"Authorize"),(0,i.kt)("hr",null),"After creating your `API Key`, you are ready to make API calls. Most clients set up authentication when initializing the client; though, it can be changed for particular requests, if needed.",(0,i.kt)("p",null,"If you are using the REST API, you will need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header as described in the cURL example."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"Javascript",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Authentication done at gRPC stub initialization time see:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\nmetadata.set("authorization", "Key YOUR_CLARIFAI_API_KEY");\n'))),(0,i.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"metadata = (('authorization', 'Key YOUR_API_KEY'),)\n# Yes the word 'Key' appears in addition to the alphanumeric API_KEY\n"))),(0,i.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Authentication done at grpc stub initialization time see:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\nV2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n    .withCallCredentials(new ClarifaiCallCredentials("YOUR_CLARIFAI_API_KEY"));\n'))),(0,i.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing Clarifai.API;\nnamespace YourNamespace\n{\n    public class YourClassName\n    {\n        public static async Task Main()\n        {\n            var client = new ClarifaiClient("YOUR_API_KEY");\n        }\n    }\n}\n'))),(0,i.kt)(l.Z,{value:"objective-c",label:"Objective-C",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objectivec"},'ClarifaiApp *app = [[ClarifaiApp alloc] initWithApiKey:@"YOUR_API_KEY"];\n'))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Clarifai\\API\\ClarifaiClient;\n$client = new ClarifaiClient('YOUR_API_KEY');\n"))),(0,i.kt)(l.Z,{value:"cURL",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST \\\n  -H 'Authorization: Key YOUR_API_KEY' \\\n  -H \"Content-Type: application/json\" \\\n  -d '\n")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"If the API Key does not have the required scope","(","s",")"," to execute a given request, you will get an error message reporting the missing scopes and/or endpoints that your key needs in order to execute the request."),(0,i.kt)("li",{parentName:"ul"},"An invalid key may be reported as 'API key not found'. "),(0,i.kt)("li",{parentName:"ul"},"Failure to include a required key may result in 'Invalid request'.")))))}f.isMDXComponent=!0}}]);