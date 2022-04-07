"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4833],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,_=d["".concat(l,".").concat(k)]||d[k]||c[k]||s;return t?a.createElement(_,o(o({ref:n},u),{},{components:t})):a.createElement(_,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),s=t(2389),o=t(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(3616),p=t(6010),u="tabItem_vU9c";function c(e){var n,t,s,o=e.lazy,c=e.block,d=e.defaultValue,k=e.values,_=e.groupId,m=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.lx)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===d?d:null!=(n=null!=d?d:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(s=h[0])?void 0:s.props.value;if(null!==T&&!g.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),f=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,r.useState)(T),O=N[0],b=N[1],I=[],A=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=_){var E=f[_];null!=E&&E!==O&&g.some((function(e){return e.value===E}))&&b(E)}var S=function(e){var n=e.currentTarget,t=I.indexOf(n),a=g[t].value;a!==O&&(A(n),b(a),null!=_&&w(_,a))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;t=I[r]||I[I.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":c},m)},g.map((function(e){var n=e.value,t=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:S,onClick:S},s,{className:(0,p.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},706:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return _}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),o=t(6396),i=t(8215),l=["components"],p={description:"Group your labeling work into tasks that can be delegated.",sidebar_position:4},u="Tasks",c={unversionedId:"api-guide/annotate/tasks",id:"api-guide/annotate/tasks",title:"Tasks",description:"Group your labeling work into tasks that can be delegated.",source:"@site/docs/api-guide/annotate/tasks.md",sourceDirName:"api-guide/annotate",slug:"/api-guide/annotate/tasks",permalink:"/docs/api-guide/annotate/tasks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/annotate/tasks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Group your labeling work into tasks that can be delegated.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Positive and Negative Annotations",permalink:"/docs/api-guide/annotate/positive-and-negative-annotations"},next:{title:"Task Annotations",permalink:"/docs/api-guide/annotate/task-annotations"}},d=[{value:"Create",id:"create",children:[{value:"Non-Assigned Task",id:"non-assigned-task",children:[],level:3},{value:"Assigned Task",id:"assigned-task",children:[],level:3}],level:2},{value:"Task with Partitioned Worker Strategy",id:"task-with-partitioned-worker-strategy",children:[],level:2},{value:"Task with Consensus Review",id:"task-with-consensus-review",children:[],level:2},{value:"Get",id:"get",children:[{value:"Get Task by ID",id:"get-task-by-id",children:[],level:3},{value:"List All Tasks",id:"list-all-tasks",children:[],level:3},{value:"List Tasks Assigned to User",id:"list-tasks-assigned-to-user",children:[],level:3},{value:"List Tasks Assigned to User for Review",id:"list-tasks-assigned-to-user-for-review",children:[],level:3}],level:2},{value:"Update",id:"update",children:[{value:"Update Task",id:"update-task",children:[],level:3}],level:2},{value:"Delete",id:"delete",children:[{value:"Delete Multiple Tasks",id:"delete-multiple-tasks",children:[],level:3}],level:2}],k={toc:d};function _(e){var n=e.components,t=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tasks"},"Tasks"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Group your labeling work into tasks that can be delegated")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Tasks are a powerful tool that can help your team to annotate inputs from your application."),(0,s.kt)("h2",{id:"create"},"Create"),(0,s.kt)("p",null,"To create a new task in your app, you ",(0,s.kt)("inlineCode",{parentName:"p"},"POST")," the task information to ",(0,s.kt)("inlineCode",{parentName:"p"},"v2/task")," endpoint."),(0,s.kt)("h3",{id:"non-assigned-task"},"Non-Assigned Task"),(0,s.kt)("p",null,"A task should be assigned to a list of users, but it's not required. The following code will create a non-assigned task."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n  {\n      "tasks": [\n          {\n              "type": "CONCEPTS_CLASSIFICATION",\n              "name": "Annotate {{concept_id}}",\n              "worker": {\n                  "strategy": "FULL"\n              },\n              "concept_ids": [\n                  "{{concept_id}}"\n              ],\n              "input_source": {\n                  "type": "ALL_INPUTS"\n              },\n              "sample_ms": 1000,\n              "review": {\n                  "strategy": "NONE"\n              }\n          }\n      ]\n  }\'\\\n  https://api.clarifai.com/v2/tasks\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n    "tasks": [\n    {\n      "type": "CONCEPTS_CLASSIFICATION",\n      "name": "Annotate {{concept_id}}",\n      "worker": {\n          "strategy": "FULL"\n      },\n      "concept_ids": [\n          "{{concept_id}}"\n      ],\n      "input_source": {\n          "type": "ALL_INPUTS"\n      },\n      "sample_ms": 1000,\n      "review": {\n          "strategy": "NONE"\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/tasks", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)("h3",{id:"assigned-task"},"Assigned Task"),(0,s.kt)("p",null,"A task should be assigned to a list of users. These users will do the work, so they're also called workers. A task may also be assigned to a list of users for review."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n    {\n        "tasks": [\n            {\n                "type": "CONCEPTS_CLASSIFICATION",\n                "name": "Annotate {{concept_id}}",\n                "worker": {\n                    "strategy": "FULL",\n                    "user_ids": [\n                        "{{worker_user_id}}"\n                    ]\n                },\n                "concept_ids": [\n                    "{{concept_id}}"\n                ],\n                "input_source": {\n                    "type": "ALL_INPUTS"\n                },\n                "sample_ms": 1000,\n                "review": {\n                    "strategy": "MANUAL",\n                    "manual_strategy_info": {\n                        "sample_percentage": 0.5\n                    },\n                    "user_ids": [\n                        "{{reviewer_user_id}}"\n                    ]\n                }\n            }\n        ]\n    }\'\\\n  https://api.clarifai.com/v2/tasks\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n    "tasks": [\n    {\n      "type": "CONCEPTS_CLASSIFICATION",\n      "name": "Annotate {{concept_id}}",\n      "worker": {\n          "strategy": "FULL",\n          "user_ids": [\n              "{{worker_user_id}}"\n          ]\n      },\n      "concept_ids": [\n          "{{concept_id}}"\n      ],\n      "input_source": {\n          "type": "ALL_INPUTS"\n      },\n      "sample_ms": 1000,\n      "review": {\n          "strategy": "MANUAL",\n          "manual_strategy_info": {\n              "sample_percentage": 0.5\n          },\n          "user_ids": [\n              "{{reviewer_user_id}}"\n          ]\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/tasks", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)("h2",{id:"task-with-partitioned-worker-strategy"},"Task with Partitioned Worker Strategy"),(0,s.kt)("p",null,"The previous tasks were created with full worker strategy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "strategy": "FULL"\n}\n')),(0,s.kt)("p",null,"In case of ",(0,s.kt)("inlineCode",{parentName:"p"},"FULL")," worker strategy, each worker will work on all inputs selected in the input source."),(0,s.kt)("p",null,"If you wish the work to be distributed between workers, then you can select the ",(0,s.kt)("inlineCode",{parentName:"p"},"PARTITIONED")," worker strategy."),(0,s.kt)("p",null,"In the following example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"there are two workers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"workers_per_input"),": each input will be assigned to 1 worker"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"weights.{{user_id1}}"),": the first worker will get 90% of inputs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"weights.{{user_id2}}"),": the second worker will get 10% of inputs")),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n    {\n        "tasks": [\n            {\n                "type": "CONCEPTS_CLASSIFICATION",\n                "name": "Annotate {{concept_id}}",\n                "worker": {\n                    "strategy": "PARTITIONED",\n                    "user_ids": ["{{user_id1}}", "{{user_id2}}"],\n                    "partitioned_strategy_info": {\n                        "type": "WEIGHTED",\n                        "workers_per_input": 1,\n                        "weights": {\n                            "{{user_id1}}": 90,\n                            "{{user_id2}}": 10\n                        }\n                    }\n                },\n                "concept_ids": [\n                    "{{concept_id}}"\n                ],\n                "input_source": {\n                    "type": "ALL_INPUTS"\n                },\n                "sample_ms": 1000,\n                "review": {\n                    "strategy": "NONE"\n                }\n            }\n        ]\n    }\'\\\n  https://api.clarifai.com/v2/tasks\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n    "tasks": [\n    {\n      "type": "CONCEPTS_CLASSIFICATION",\n      "name": "Annotate {{concept_id}}",\n      "worker": {\n          "strategy": "PARTITIONED",\n          "user_ids": ["{{user_id1}}", "{{user_id2}}"],\n          "partitioned_strategy_info": {\n              "type": "WEIGHTED",\n              "workers_per_input": 1,\n              "weights": {\n                  "{{user_id1}}": 90,\n                  "{{user_id2}}": 10\n              }\n          }\n      },\n      "concept_ids": [\n          "{{concept_id}}"\n      ],\n      "input_source": {\n          "type": "ALL_INPUTS"\n      },\n      "sample_ms": 1000,\n      "review": {\n          "strategy": "NONE"\n      }\n    }\n  ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/tasks", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)("p",null,"Notes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"It is not required for the weights to add up to 100. For example, the weights ","[","9, 1","]"," are equivalent with weights ","[","90, 10","]","."),(0,s.kt)("li",{parentName:"ul"},"The partitioning is approximate. This means that the number of assigned inputs to each worker may have a small error margin, but it will be close to the assigned weight percentage.")),(0,s.kt)("h2",{id:"task-with-consensus-review"},"Task with Consensus Review"),(0,s.kt)("p",null,"The previous tasks were created with no review or manual review strategy."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "strategy": "MANUAL"\n}\n')),(0,s.kt)("p",null,"We recommend to create tasks with ",(0,s.kt)("inlineCode",{parentName:"p"},"CONSENSUS")," review strategy. When enough workers label an input in the same way, it will automatically be approved, with no need for the reviewer to spend time to check. In this way, the reviewer will be able to focus on the inputs where the workers don't agree."),(0,s.kt)("p",null,"Note that an approval threshold must be set. For example, in case of 3 workers and ",(0,s.kt)("inlineCode",{parentName:"p"},"approval_threshold")," set to 2, if an input is labeled in the same way by 2 workers, they form a majority and the group reaches a consensus."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X POST \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n    {\n        "tasks": [\n            {\n                "type": "CONCEPTS_CLASSIFICATION",\n                "name": "Annotate {{concept_id}}",\n                "worker": {\n                    "strategy": "PARTITIONED",\n                    "user_ids": ["{{user_id1}}", "{{user_id2}}", "{{user_id3}}"],\n                    "partitioned_strategy_info": {\n                        "type": "WEIGHTED",\n                        "workers_per_input": 1,\n                        "weights": {\n                            "{{user_id1}}": 1,\n                            "{{user_id2}}": 1,\n                            "{{user_id3}}": 1\n                        }\n                    }\n                },\n                "concept_ids": [\n                    "{{concept_id}}"\n                ],\n                "input_source": {\n                    "type": "ALL_INPUTS"\n                },\n                "sample_ms": 1000,\n                "review": {\n                    "strategy": "CONSENSUS",\n                    "consensus_strategy_info": {\n                        "approval_threshold": 2\n                    },\n                    "user_ids": [\n                        "{{user_id4}}"\n                    ]\n                }\n            }\n        ]\n    }\'\\\n  https://api.clarifai.com/v2/tasks\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n    "tasks": [\n        {\n          "type": "CONCEPTS_CLASSIFICATION",\n          "name": "Annotate {{concept_id}}",\n          "worker": {\n              "strategy": "PARTITIONED",\n              "user_ids": ["{{user_id1}}", "{{user_id2}}", "{{user_id3}}"],\n              "partitioned_strategy_info": {\n                  "type": "WEIGHTED",\n                  "workers_per_input": 1,\n                  "weights": {\n                      "{{user_id1}}": 1,\n                      "{{user_id2}}": 1,\n                      "{{user_id3}}": 1\n                  }\n              }\n          },\n          "concept_ids": [\n              "{{concept_id}}"\n          ],\n          "input_source": {\n              "type": "ALL_INPUTS"\n          },\n          "sample_ms": 1000,\n          "review": {\n              "strategy": "CONSENSUS",\n              "consensus_strategy_info": {\n                  "approval_threshold": 2\n              },\n              "user_ids": [\n                  "{{user_id4}}"\n              ]\n          }\n        }\n    ]\n});\n\nconst requestOptions = {\n  method: \'POST\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/tasks", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)("h2",{id:"get"},"Get"),(0,s.kt)("h3",{id:"get-task-by-id"},"Get Task by ID"),(0,s.kt)("p",null,"You can get a singular task by its ID. The ID was automatically generated when it was created."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/tasks/{task_id}\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const appId = '{YOUR_APP_ID}'\nconst taskId = '{TASK_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/tasks/${taskId}`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,s.kt)("h3",{id:"list-all-tasks"},"List All Tasks"),(0,s.kt)("p",null,"You can get a list of tasks within your app with a ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")," call. This call supports ",(0,s.kt)("a",{parentName:"p",href:"/docs/api-guide/advanced-topics/pagination"},"pagination"),"."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/tasks\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/tasks`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,s.kt)("h3",{id:"list-tasks-assigned-to-user"},"List Tasks Assigned to User"),(0,s.kt)("p",null,"Get only the tasks assigned to a specific user for work."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/tasks?worker_user_ids={{user_id}}\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const appId = '{YOUR_APP_ID}'\nconst workedUserId = '{WORKER_USER_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/tasks?worker_user_ids=${workerUserId}`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,s.kt)("h3",{id:"list-tasks-assigned-to-user-for-review"},"List Tasks Assigned to User for Review"),(0,s.kt)("p",null,"Get only the tasks assigned to a specific user for review."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X GET \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  https://api.clarifai.com/v2/tasks?review_user_ids={{user_id}}\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const appId = '{YOUR_APP_ID}'\nconst userId = '{USER_ID}'\n\nconst requestOptions = {\n  method: 'GET',\n  headers: {\n    'Accept': 'application/json',\n    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'\n  }\n};\n\nfetch(`https://api.clarifai.com/v2/users/me/apps/${appId}/tasks?review_user_ids=${userId}`, requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log('error', error));\n")))),(0,s.kt)("h2",{id:"update"},"Update"),(0,s.kt)("p",null,"Currently, we only support updating a task by providing all information at once."),(0,s.kt)("h3",{id:"update-task"},"Update Task"),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X PATCH \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n    {\n        "action": "overwrite",\n        "tasks": [\n            {\n                "id": "{{task_id}}",\n                "type": "CONCEPTS_CLASSIFICATION",\n                "name": "Annotate {{concept_id}}",\n                "worker": {\n                    "strategy": "PARTITIONED",\n                    "user_ids": ["{{user_id1}}", "{{user_id2}}"],\n                    "partitioned_strategy_info": {\n                        "type": "WEIGHTED",\n                        "workers_per_input": 1,\n                        "weights": {\n                            "{{user_id1}}": 1,\n                            "{{user_id2}}": 1\n                        }\n                    }\n                },\n                "concept_ids": [\n                    "{{concept_id}}"\n                ],\n                "input_source": {\n                    "type": "ALL_INPUTS"\n                },\n                "sample_ms": 1000,\n                "review": {\n                    "strategy": "CONSENSUS",\n                    "consensus_strategy_info": {\n                        "approval_threshold": 2\n                    },\n                    "user_ids": [\n                        "{{user_id3}}"\n                    ]\n                },\n                "status": {\n                    "code": "TASK_DONE"\n                }\n            }\n        ]\n    }\'\\\n  https://api.clarifai.com/v2/tasks\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n    "action": "overwrite",\n    "tasks": [\n        {\n            "id": "{{task_id}}",\n            "type": "CONCEPTS_CLASSIFICATION",\n            "name": "Annotate {{concept_id}}",\n            "worker": {\n                "strategy": "PARTITIONED",\n                "user_ids": ["{{user_id1}}", "{{user_id2}}"],\n                "partitioned_strategy_info": {\n                    "type": "WEIGHTED",\n                    "workers_per_input": 1,\n                    "weights": {\n                        "{{user_id1}}": 1,\n                        "{{user_id2}}": 1\n                    }\n                }\n            },\n            "concept_ids": [\n                "{{concept_id}}"\n            ],\n            "input_source": {\n                "type": "ALL_INPUTS"\n            },\n            "sample_ms": 1000,\n            "review": {\n                "strategy": "CONSENSUS",\n                "consensus_strategy_info": {\n                    "approval_threshold": 2\n                },\n                "user_ids": [\n                    "{{user_id3}}"\n                ]\n            },\n            "status": {\n                "code": "TASK_DONE"\n            }\n        }\n    ]\n});\n\nconst requestOptions = {\n  method: \'PATCH\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/tasks", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))),(0,s.kt)("h2",{id:"delete"},"Delete"),(0,s.kt)("h3",{id:"delete-multiple-tasks"},"Delete Multiple Tasks"),(0,s.kt)("p",null,"You can delete tasks using their IDs."),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},'curl -X DELETE \\\n  -H "Authorization: Key YOUR_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'\n    {\n        "ids":["{{task_id}}"]\n    }\'\\\n  https://api.clarifai.com/v2/tasks\n'))),(0,s.kt)(i.Z,{value:"js_rest",label:"Javascript (REST)",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const raw = JSON.stringify({\n    "user_app_id": {\n        "user_id": "{YOUR_USER_ID}",\n        "app_id": "{YOUR_APP_ID}"\n    },\n    "ids":["{{task_id}}"]\n});\n\nconst requestOptions = {\n  method: \'DELETE\',\n  headers: {\n    \'Accept\': \'application/json\',\n    \'Authorization\': \'Key {YOUR_PERSONAL_TOKEN}\'\n  },\n  body: raw\n};\n\nfetch("https://api.clarifai.com/v2/tasks", requestOptions)\n  .then(response => response.text())\n  .then(result => console.log(result))\n  .catch(error => console.log(\'error\', error));\n')))))}_.isMDXComponent=!0}}]);