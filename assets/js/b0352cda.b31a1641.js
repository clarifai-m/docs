"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[267],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||s;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),s=t(2389),i=t(9443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),l=t(6010),p="tabItem_vU9c";function c(e){var n,t,s,i=e.lazy,c=e.block,d=e.defaultValue,m=e.values,f=e.groupId,g=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=h[0])?void 0:s.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var _=o(),w=_.tabGroupChoices,I=_.setTabGroupChoices,O=(0,r.useState)(y),T=O[0],k=O[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==T&&b.some((function(e){return e.value===j}))&&k(j)}var N=function(e){var n=e.currentTarget,t=x.indexOf(n),a=b[t].value;a!==T&&(E(n),k(a),null!=f&&I(f,a))},S=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},g)},b.map((function(e){var n=e.value,t=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:N,onClick:N},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function d(e){var n=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},5044:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),i=t(6396),o=t(8215),u=["components"],l={description:"Use AI to index your images based on semantic similarity.",sidebar_position:5},p="Index Images for Search",c={unversionedId:"api-guide/search/index-images-for-search",id:"api-guide/search/index-images-for-search",title:"Index Images for Search",description:"Use AI to index your images based on semantic similarity.",source:"@site/docs/api-guide/search/index-images-for-search.md",sourceDirName:"api-guide/search",slug:"/api-guide/search/index-images-for-search",permalink:"/docs-new/api-guide/search/index-images-for-search",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/search/index-images-for-search.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Use AI to index your images based on semantic similarity.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/docs-new/api-guide/search/rank"},next:{title:"Legacy Search",permalink:"/docs-new/api-guide/search/legacy-search/"}},d=[],m={toc:d};function f(e){var n=e.components,t=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"index-images-for-search"},"Index Images for Search"),(0,s.kt)("p",null,"To get started with search, you must first add images to the search index. You can add one or more images to the index at a time. You can supply an image either with a publicly accessible URL or by directly sending image bytes. You can send up to 128 images in one API call."),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nMultiInputResponse postInputsResponse = stub.postInputs(\n    PostInputsRequest.newBuilder()\n        .addInputs(\n            Input.newBuilder()\n                .setData(\n                    Data.newBuilder().setImage(\n                        Image.newBuilder()\n                            .setUrl("https://samples.clarifai.com/metro-north.jpg")\n                            .setAllowDuplicateUrl(true)\n                    )\n                )\n        )\n        .addInputs(\n            Input.newBuilder()\n                .setData(\n                    Data.newBuilder().setImage(\n                        Image.newBuilder()\n                            .setUrl("https://samples.clarifai.com/wedding.jpg")\n                            .setAllowDuplicateUrl(true)\n                    )\n                )\n        )\n        .addInputs(\n            Input.newBuilder()\n                .setData(\n                    Data.newBuilder().setImage(\n                        Image.newBuilder()\n                            .setBase64(ByteString.copyFrom(Files.readAllBytes(\n                                new File("{YOUR_IMAGE_FILE_LOCATION}").toPath()\n                            )))\n                    )\n                )\n        )\n        .build()\n);\n\nif (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n    for (Input input : postInputsResponse.getInputsList()) {\n        System.out.println("Input " + input.getId() + " status: ");\n        System.out.println(input.getStatus() + "\\n");\n    }\n\n    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());\n}\n'))),(0,s.kt)(o.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nconst fs = require("fs");\nconst imageBytes = fs.readFileSync("{YOUR_IMAGE_FILE_LOCATION}");\n\nstub.PostInputs(\n    {\n        inputs: [\n            {\n                data: {image: {url: "https://samples.clarifai.com/metro-north.jpg", allow_duplicate_url: true}}\n            },\n            {\n                data: {image: {url: "https://samples.clarifai.com/puppy.jpeg", allow_duplicate_url: true}}\n            },\n            {\n                data: {image: {base64: imageBytes}}\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            for (const input of response.inputs) {\n                console.log("Input " + input.id + " status: ");\n                console.log(JSON.stringify(input.status, null, 2) + "\\n");\n            }\n\n            throw new Error("Post inputs failed, status: " + response.status.description);\n        }\n    }\n);\n'))),(0,s.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'# Insert here the initialization code as outlined on this page:\n# https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\nwith open("{YOUR_IMAGE_FILE_LOCATION}", "rb") as f:\n    file_bytes = f.read()\n\npost_inputs_response = stub.PostInputs(\n    service_pb2.PostInputsRequest(\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url="https://samples.clarifai.com/metro-north.jpg",\n                        allow_duplicate_url=True\n                    )\n                )\n            ),\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url="https://samples.clarifai.com/wedding.jpg",\n                        allow_duplicate_url=True\n                    )\n                )\n            ),\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        base64=file_bytes\n                    )\n                )\n            ),\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_inputs_response.status.code != status_code_pb2.SUCCESS:\n    print("There was an error with your request!")\n    for input_response in post_inputs_response.inputs:\n        print("Input " + input_response.id + " status:")\n        print(input_response.status)\n    \n    print("\\tCode: {}".format(post_inputs_response.outputs[0].status.code))\n    print("\\tDescription: {}".format(post_inputs_response.outputs[0].status.description))\n    print("\\tDetails: {}".format(post_inputs_response.outputs[0].status.details))\n    raise Exception("Post inputs failed, status: " + post_inputs_response.status.description)\n'))),(0,s.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n    "inputs": [\n      {\n        "data": {\n          "image": {\n            "url": "https://samples.clarifai.com/metro-north.jpg",\n            "allow_duplicate_url": true\n          }\n        }\n      },\n      {\n        "data": {\n          "image": {\n            "url": "https://samples.clarifai.com/wedding.jpg",\n            "allow_duplicate_url": true\n          }\n        }\n      }\n    ]\n  }\'\\\n  https://api.clarifai.com/v2/inputs\n\n# Use image\'s "base64" field to upload image from your local machine.\n'))),(0,s.kt)(o.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n  "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n  "inputs": [\n    {\n      "data": {\n        "image": {\n          "url": "https://samples.clarifai.com/metro-north.jpg",\n          "allow_duplicate_url": true\n        }\n      }\n    },\n    {\n      "data": {\n        "image": {\n          "url": "https://samples.clarifai.com/wedding.jpg",\n          "allow_duplicate_url": true\n        }\n      }\n    }\n  ]\n});\n\n// # Use image\'s "base64" field to upload image from your local machine.\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n    body: raw\n};\n\nfetch(`https://api.clarifai.com/v2/inputs`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"response_json",label:"Response JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "status": {\n    "code": 10000,\n    "description": "Ok"\n  },\n  "inputs": [\n    {\n      "id": "edc70c917475499abdc7151f41d6cf3e",\n      "created_at": "2016-11-22T17:06:02Z",\n      "data": {\n        "image": {\n          "url": "https://samples.clarifai.com/metro-north.jpg"\n        }\n      },\n      "status": {\n        "code": 30001,\n        "description": "Download pending"\n      }\n    },\n    {\n      "id": "f96ca3bbf02041c59addcc13e3468b7d",\n      "created_at": "2016-11-22T17:06:02Z",\n      "data": {\n        "image": {\n          "url": "https://samples.clarifai.com/wedding.jpg"\n        }\n      },\n      "status": {\n        "code": 30001,\n        "description": "Download pending"\n      }\n    }\n  ]\n}\n')))))}f.isMDXComponent=!0}}]);