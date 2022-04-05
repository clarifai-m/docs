"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6608],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),y=l,k=d["".concat(u,".").concat(y)]||d[y]||c[y]||i;return t?a.createElement(k,r(r({ref:n},p),{},{components:t})):a.createElement(k,r({ref:n},p))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5043:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var a=t(7462),l=t(3366),i=(t(7294),t(3905)),r=["components"],o={description:"Patch data in your applications.",sidebar_position:2},u="Patching",s={unversionedId:"api-guide/advanced-topics/patching",id:"api-guide/advanced-topics/patching",title:"Patching",description:"Patch data in your applications.",source:"@site/docs/api-guide/advanced-topics/patching.md",sourceDirName:"api-guide/advanced-topics",slug:"/api-guide/advanced-topics/patching",permalink:"/api-guide/advanced-topics/patching",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/advanced-topics/patching.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Patch data in your applications.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Status Codes",permalink:"/api-guide/advanced-topics/status-codes"},next:{title:"Pagination",permalink:"/api-guide/advanced-topics/pagination"}},p=[{value:"Merge",id:"merge",children:[],level:2},{value:"Remove",id:"remove",children:[],level:2},{value:"Overwrite",id:"overwrite",children:[],level:2}],c={toc:p};function d(e){var n=e.components,t=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"patching"},"Patching"),(0,i.kt)("p",null,"We designed PATCH to work over multiple resources at the same time ","(","bulk",")"," and be flexible enough for all your needs to minimize round trips to the server. Therefore it might seem a little different to any PATCH you've seen before, but it's not complicated. All three actions that are supported do overwrite by default, but have special behaviour for lists of objects ","(","for example lists of concepts",")","."),(0,i.kt)("h2",{id:"merge"},"Merge"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"merge")," action will overwrite a ",(0,i.kt)("inlineCode",{parentName:"p"},"key:value")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"key:new_value")," or append to an existing list of values, merging dictionaries that match by a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field."),(0,i.kt)("p",null,"In the following examples A is being patched into B to create the Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'*Merges different key:values*\nA = `{"a":[1,2,3]}`\nB = `{"blah":true}`\nResult = `{"blah":true, "a":[1,2,3]}`\n\n*For id lists, merge will append*\nA = `{"a":[{"id": 1}]}`\nB = `{"a":[{"id": 2}]}`\nResult = `{"a":[{"id": 2}, {"id":1}]}`\n\n*Simple merge of key:values and within a list*\nA = `{"a":[{"id": "1", "other":true}], "blah":1}`\nB = `{"a":[{"id": "2"},{"id":"1", "other":false}]}`\nResult = `{"a":[{"id": "2"},{"id": "1"}], "blah":1}`\n\n*Different types should overwrite fine*\nA = `{"a":[{"id": "1"}], "blah":1}`\nB = `{"a":[{"id": "2"}], "blah":"string"}`\nResult = `{"a":[{"id": "2"},{"id": "1"}], "blah":1}`\n\n*Deep merge, notice the "id":"1" matches, so those dicts are merged in the list*\nA = `{"a":[{"id": "1","hey":true}], "blah":1}`\nB = `{"a":[{"id": "1","foo":"bar","hey":false},{"id":"2"}], "blah":"string"}`\nResult = `{"a":[{"hey":true,"id": "1","foo":"bar"},{"id":"2"}], "blah":1}`\n\n*For non-id lists, merge will append*\nA = `{"a":[{"blah": "1"}], "blah":1}`\nB = `{"a":[{"blah": "2"}], "blah":"string"}`\nResult = `{"a":[{"blah": "2"}, {"blah":"1"}], "blah":1}`\n\n*For non-id lists, merge will append*\nA = `{"a":[{"blah": "1"}], "blah":1, "dict":{"a":1,"b":2}}`\nB = `{"a":[{"blah": "2"}], "blah":"string"}`\nResult = `{"a":[{"blah": "2"}, {"blah":"1"}], "blah":1, "dict":{"a":1,"b":2}}`\n\n*Simple overwrite root element*\nA = `{"key1":true}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":true}`\n\n*Overwrite a sub element*\nA = `{"key1":{"key2":true}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key2":true, "key3":"value3"}}`\n\n*Merge a sub element*\nA = `{"key1":{"key2":{"key4":"value4"}}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key2":{"key4":"value4"}, "key3":"value3"}}`\n\n*Merge multiple trees*\nA = `{"key1":{"key2":{"key9":"value9"}, "key3":{"key4":"value4", "key10":[1,2,3]}}, "key6":{"key11":"value11"}}`\nB = `{"key1":{"key2":"value2", "key3":{"key4":{"key5":"value5"}}}, "key6":{"key7":{"key8":"value8"}}}`\nResult = `{"key1":{"key2":{"key9":"value9"}, "key3":{"key4":"value4", "key10":[1,2,3]}}, "key6":{"key7":{"key8":"value8"}, "key11":"value11"}}`\n\n*Merge {} element will replace*\nA = `{"key1":{"key2":{}}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key2":{}, "key3":"value3"}}`\n\n*Merge a null element does nothing*\nA = `{"key1":{"key2":null}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key2":"value2", "key3":"value3"}}`\n\n*Merge a blank list [] will replace root element*\nA = `{"key1":[]}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":[]}`\n\n*Merge a blank list [] will replace single element*\nA = `{"key1":{"key2":[]}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key2":[], "key3":"value3"}}`\n\n*Merge a blank list [] will remove nested objects*\nA = `{"key1":{"key2":[{"key3":"value3"}]}}`\nB = `{"key1":{"key2":{"key3":"value3"}}}`\nResult = `{"key1":{"key2":[{"key3":"value3"}]}}`\n\n*Merge an existing list with some other struct*\nA = `{"key1":{"key2":{"key3":[{"key4":"value4"}]}}}`\nB = `{"key1":{"key2":[]}}`\nResult = `{"key1":{"key2":{"key3":[{"key4":"value4"}]}}}`\n')),(0,i.kt)("h2",{id:"remove"},"Remove"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"remove")," action will overwrite a ",(0,i.kt)("inlineCode",{parentName:"p"},"key:value")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"key:new_value")," or delete anything in a list that matches the provided values' ids."),(0,i.kt)("p",null,"In the following examples A is being patched into B to create the Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'*Remove from list*\nA = `{"a":[{"id": "1"}], "blah":1}`\nB = `{"a":[{"id": "2"},{"id": "3"}, {"id":"1"}], "blah":"string"}`\nResult = `{"a":[{"id": "2"},{"id":"3"}], "blah":1}`\n\n*For non-id lists, remove will append*\nA = `{"a":[{"blah": "1"}], "blah":1}`\nB = `{"a":[{"blah": "2"}], "blah":"string"}`\nResult = `{"a":[{"blah": "2"}, {"blah":"1"}], "blah":1}`\n\n*Empty out a nested dictionary*\nA = `{"key1":{"key2":true}}`\nB = `{"key1":{"key2":"value2"}}`\nResult = `{"key1":{}}`\n\n*Remove the root element, should be empty*\nA = `{"key1":true}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{}`\n\n*Remove a sub element*\nA = `{"key1":{"key2":true}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key3":"value3"}}`\n\n*Remove a multiple sub elements*\nA = `{"key1":{"key2":{"key3":true}, "key4":true}}`\nB = `{"key1":{"key2":{"key3":{"key5":"value5"}}, "key4":{"key6":{"key7":"value7"}}}}`\nResult = `{"key1":{"key2":{}}}`\n\n*Remove one of the root elements if there are more than one*\nA = `{"key1":true}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}, "key4":["a", "b", "c"]}`\nResult = `{"key4":["a", "b", "c"]}`\n\n*Remove with false should over write*\nA = `{"key1":{"key2":false, "key3":true}, "key4":false}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}, "key4":[{"key5":"value5", "key6":"value6"}, {"key7": "value7"}]}`\nResult = `{"key1":{"key2":false}, "key4":false}`\n\n*Only objects with id\'s can be put into lists*\nA = `{"key1":[{"key2":true}]}`\nB = `{"key1":[{"key2":"value2"}, {"key3":"value3"}]}`\nResult = `{}`\n\n*Elements with {} should do nothing*\nA = `{"key1":{}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key2":"value2", "key3":"value3"}}`\n\n*Elements with nil should do nothing*\nA = `{"key1":{"key2":null}}`\nB = `{"key1":{"key2":"value2", "key3":"value3"}}`\nResult = `{"key1":{"key2":"value2", "key3":"value3"}}`\n')),(0,i.kt)("h2",{id:"overwrite"},"Overwrite"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite")," action will overwrite the old object with the new object. If you want to change a field or sub-object with the ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite")," action, it is suggested to first call ",(0,i.kt)("inlineCode",{parentName:"p"},"Get")," to obtain the original object. Then you can change the field or sub-object you would like to overwrite, followed by assembling the ",(0,i.kt)("inlineCode",{parentName:"p"},"overwrite")," request with the entire object."),(0,i.kt)("p",null,"In the following examples A is being patched into B to create the Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'A = `{"a":[{"id": "1"}], "blah":1}`\nB = `{"a":[{"id": "2"}], "blah":"string", "foo": "bar}`\nResult = `{"a":[{"id": "1"}], "blah":1}`\n\nA = `{}`\nB = `{"a":[{"blah": "2"}], "blah":"string"}`\nResult = `{}`\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Patch inputs with overwrite action will overwrite data object")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'*Before Patch*\n"input": {\n    "id": "68be8de5a7de42c4873bf63fb6b8683d",\n    "data": {\n        "image": {\n            "url": "https://samples.clarifai.com/your-image.jpg",\n        },\n        "concepts": [\n            {\n                "id": "car",\n                "name": "car",\n                "value": 1,\n                "app_id": "your-application-id"\n            }\n        ],\n        "geo": {\n            "geo_point": {\n                "longitude": 40.7129,\n                "latitude": 74.0058\n            }\n        }\n    },\n}\n\n*Patch Request*\n{\n    "inputs": [\n        {\n            "id": "68be8de5a7de42c4873bf63fb6b8683d",\n            "data": {\n                "concepts": [\n                    {\n                        "id": "ferrari",\n                        "value": 1.0\n                    }\n                ],\n                "metadata": {\n                    "foo": "bar"\n                }\n            }\n        }\n    ],\n    "action": "overwrite"\n}\n\n*Result*\n"input": {\n    "id": "68be8de5a7de42c4873bf63fb6b8683d",\n    "data": {\n        "image": {\n            "url": "https://samples.clarifai.com/your-image.jpg",\n        },\n        "concepts": [\n            {\n                "id": "ferrari",\n                "name": "ferrari",\n                "value": ,\n                "app_id": "your-application-id"\n            }\n        ],\n        "metadata": {\n            "foo": "bar"\n        }\n    },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Patch models with overwrite action will overwrite output","_","info and name")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'*Before Patch*\n"model": {\n    "id": "test-model-1580486147",\n    "name": "test-model-1580486147",\n    "app_id": "test-app-1580486122",\n    "output_info": {\n        "data": {\n            "concepts": [\n                {\n                    "id": "car",\n                    "name": "car",\n                    "value": 1,\n                    "language": "en",\n                    "app_id": "test-app-1580486122"\n                },\n                {\n                    "id": "ferrari",\n                    "name": "ferrari",\n                    "value": 1,\n                    "language": "en",\n                    "app_id": "test-app-1580486122"\n                }\n            ]\n        },\n        "output_config": {\n            "concepts_mutually_exclusive": false,\n            "closed_environment": false,\n            "max_concepts": 0,\n            "min_value": 0,\n            "test_split_percent": 10,\n            "embed_model_version_id": "bb186755eda04f9cbb6fe32e816be104",\n            "invalid_data_tolerance_percent": 5\n        },\n        "type": "concept",\n        "type_ext": "concept"\n    }\n}\n\n*Patch Request*\n{\n    "models": [\n        {\n            "id": "test-model-1580486147",\n            "name": "my-new-model",\n            "output_info": {\n                "data": {\n                    "concepts": [\n                        {\n                            "id": "animal"\n                        },\n                        {\n                            "id": "dog"\n                        },\n                        {\n                            "id": "cat"\n                        }\n                    ]\n                },\n                "output_config": {\n                    "concepts_mutually_exclusive": true\n                }\n            }\n        }\n    ],\n    "action": "overwrite"\n}\n\n*Result*\n"model": {\n    "id": "test-model-1580486147",\n    "name": "my-new-model",\n    "app_id": "test-app-1580486122",\n    "output_info": {\n        "data": {\n            "concepts": [\n                {\n                    "id": "animal",\n                    "name": "animal",\n                    "value": 1,\n                    "language": "en",\n                    "app_id": "test-app-1580486122"\n                },\n                {\n                    "id": "cat",\n                    "name": "cat",\n                    "value": 1,\n                    "language": "en",\n                    "app_id": "test-app-1580486122"\n                },\n                {\n                    "id": "dog",\n                    "name": "dog",\n                    "value": 1,\n                    "language": "en",\n                    "app_id": "test-app-1580486122"\n                }\n            ]\n        },\n        "output_config": {\n            "concepts_mutually_exclusive": true,\n            "closed_environment": false,\n            "max_concepts": 0,\n            "min_value": 0,\n            "test_split_percent": 10,\n            "embed_model_version_id": "bb186755eda04f9cbb6fe32e816be104",\n            "invalid_data_tolerance_percent": 5\n        },\n        "type": "concept",\n        "type_ext": "concept"\n    }\n}\n')))}d.isMDXComponent=!0}}]);