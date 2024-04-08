"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2892],{85162:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(67294),i=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(t){let{children:e,hidden:a,className:s}=t;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o.tabItem,s),hidden:a},e)}},74866:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(87462),i=a(67294),o=a(86010),s=a(12466),l=a(16550),d=a(91980),u=a(67392),r=a(50012);function p(t){return function(t){return i.Children.map(t,(t=>{if(!t||(0,i.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:i}}=t;return{value:e,label:a,attributes:n,default:i}}))}function c(t){const{values:e,children:a}=t;return(0,i.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function m(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function f(t){let{queryString:e=!1,groupId:a}=t;const n=(0,l.k6)(),o=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,d._X)(o),(0,i.useCallback)((t=>{if(!o)return;const e=new URLSearchParams(n.location.search);e.set(o,t),n.replace({...n.location,search:e.toString()})}),[o,n])]}function h(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,o=c(t),[s,l]=(0,i.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:o}))),[d,u]=f({queryString:a,groupId:n}),[p,h]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,o]=(0,r.Nk)(a);return[n,(0,i.useCallback)((t=>{a&&o.set(t)}),[a,o])]}({groupId:n}),_=(()=>{const t=d??p;return m({value:t,tabValues:o})?t:null})();(0,i.useLayoutEffect)((()=>{_&&l(_)}),[_]);return{selectedValue:s,selectValue:(0,i.useCallback)((t=>{if(!m({value:t,tabValues:o}))throw new Error(`Can't select invalid tab value=${t}`);l(t),u(t),h(t)}),[u,h,o]),tabValues:o}}var _=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(t){let{className:e,block:a,selectedValue:l,selectValue:d,tabValues:u}=t;const r=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),c=t=>{const e=t.currentTarget,a=r.indexOf(e),n=u[a].value;n!==l&&(p(e),d(n))},m=t=>{let e=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":{const a=r.indexOf(t.currentTarget)+1;e=r[a]??r[0];break}case"ArrowLeft":{const a=r.indexOf(t.currentTarget)-1;e=r[a]??r[r.length-1];break}}e?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},e)},u.map((t=>{let{value:e,label:a,attributes:s}=t;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,key:e,ref:t=>r.push(t),onKeyDown:m,onClick:c},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===e})}),a??e)})))}function b(t){let{lazy:e,children:a,selectedValue:n}=t;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=o.find((t=>t.props.value===n));return t?(0,i.cloneElement)(t,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((t,e)=>(0,i.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function k(t){const e=h(t);return i.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},i.createElement(y,(0,n.Z)({},t,e)),i.createElement(b,(0,n.Z)({},t,e)))}function v(t){const e=(0,_.Z)();return i.createElement(k,(0,n.Z)({key:String(e)},t))}},70879:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>E,contentTitle:()=>O,default:()=>q,frontMatter:()=>D,metadata:()=>j,toc:()=>Z});var n=a(87462),i=(a(67294),a(3905)),o=a(74866),s=a(85162),l=a(90814);const d='from clarifai.client.input import Inputs\n\nimg_url = "https://samples.clarifai.com/metro-north.jpg"\ninput_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")\n# You can also upload data through Bytes and Filepath,\n\n# Upload from file\n# input_obj.upload_from_file(input_id=\'demo\', image_file=\u2019image_filepath\')\n\n# Upload from bytes\n# input_obj.upload_from_bytes(input_id=\'demo\', image_bytes=image)\n\ninput_obj.upload_from_url(input_id="demo", image_url=img_url)\n',u='from clarifai.client.input import Inputs\n\ninput_text = b"Write a tweet on future of AI"\ninput_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")\n\n# You can also upload data through URLand Filepath,\n\n# Upload from file\n# input_obj.upload_from_file(input_id=\'text_dat\', text_file=\u2019text_filepath\')\n\n# Upload from url\n# input_obj.upload_from_url(input_id=\'text,text_url=\u201dtext_url\u201d)\n\ninput_obj.upload_from_bytes(input_id="text_data", text_bytes=input_text)',r='from clarifai.client.input import Inputs\n\naudio_url = "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"\ninput_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")\n\n# You can also upload data through Bytes and Filepath,\n\n# Upload from file\n# input_obj.upload_from_file(input_id=\'audio_data\', audio_file=\u2019audio_filepath\')\n\n# Upload from bytes\n# input_obj.upload_from_bytes(input_id=\'audio_data\u2019, audio_bytes=audio)\n\ninput_obj.upload_from_url(\n    input_id="audio_data",\n    audio_url=audio_url,\n)',p='from clarifai.client.input import Inputs\nvideo_url = "https://samples.clarifai.com/beer.mp4"\ninput_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")\n\n# You can also upload data through Bytes and Filepath,\n\n# Upload from file\n# input_obj.upload_from_file(input_id=\'video_data\', video_file=\u2019video_filepath\')\n\n# Upload from bytes\n# input_obj.upload_from_bytes(input_id=\'video_data\u2019, video_bytes=video)\n\ninput_obj.upload_from_url(\n    input_id="video_data", video_url= video_url\n)',c='from clarifai.client.input import Inputs\n\ninput_obj = Inputs(user_id="user_id", app_id="test_app", pat="YOUR_PAT")\n\n# initialize inputs of different type\nprompt = "What time of day is it?"\nimage_url = "https://samples.clarifai.com/metro-north.jpg"\n\n# Here you can give the value for different types of inputs\ninput_obj.get_multimodal_input(\n    input_id="multimodal_data", image_url=image_url, raw_text=prompt\n)',m='from clarifai.client.user import User\n\n# Create the input object\ninput_obj = User(user_id="user_id").app(app_id="test_app", pat="YOUR_PAT").inputs()\n# list the inputs with pagination\nall_inputs = list(input_obj.list_inputs(page_no=1,per_page=3))\nprint(all_inputs)',f='from clarifai.client.user import User\n\ninput_obj = User(user_id="user_id", pat="YOUR_PAT").app(app_id="test_app").inputs()\n# provide the inputs ids as parameters in delete_inputs function\ninput_obj.delete_inputs(list(input_obj.list_inputs()))',h='# Import necessary modules\nfrom google.protobuf.struct_pb2 import Struct\nfrom clarifai.client.input import Inputs\n\n# Create an Inputs object with user_id and app_id\ninput_object = Inputs(user_id="user_id", app_id="app_id")\n\n# Create a Struct object for metadata\nmetadata = Struct()\n\n# Update metadata with filename and split information\nmetadata.update({"filename": "XiJinping.jpg", "split": "train"})\n\n# URL of the image to upload\nurl = "https://samples.clarifai.com/XiJinping.jpg"\n\n# Upload the image from the URL with associated metadata\ninput_object.upload_from_url(input_id="metadata", image_url=url, metadata=metadata)',_='from google.protobuf.struct_pb2 import Struct\nfrom clarifai.client.input import Inputs\n\n# Initialize an Inputs object with specified user_id and app_id\ninput_object = Inputs(user_id="user_id", app_id="app_id")\n\n# Define the URL of the video to upload\nvideo_url = "https://samples.clarifai.com/beer.mp4"\n\n# Create a Struct object to hold metadata\nmetadata = Struct()\n\n# Update the metadata with filename and split information\nmetadata.update({"filename": "drinks.jpg", "split": "train"})\n\n# Upload the video from the specified URL with the provided metadata\ninput_object.upload_from_url(\n    input_id="video_data_metadata", video_url=video_url, metadata=metadata\n)\n',g='# Import necessary modules\nfrom google.protobuf.struct_pb2 import Struct\nfrom clarifai.client.input import Inputs\n\n# Define the input object with user_id and app_id\ninput_object = Inputs(user_id="user_id", app_id="app_id")\n\n# Define the input text\ninput_text = b"Write a tweet on future of AI"\n\n# Create a Struct object for metadata\nmetadata = Struct()\n\n# Update metadata with filename and split information\nmetadata.update({"filename": "tweet.txt", "split": "train"})\n\n# Upload the input from bytes with custom metadata\ninput_object.upload_from_bytes(input_id="text_data_metadata", text_bytes=input_text, metadata=metadata)\n',y='# Import necessary modules\nfrom clarifai.client.input import Inputs\nfrom google.protobuf.struct_pb2 import Struct\n\n\n# Define the input object with user_id and app_id\ninput_object = Inputs(user_id="user_id", app_id="app_id")\n\n# Define the URL of the audio file\naudio_url = "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"\n\n# Create a new Struct to hold metadata\nmetadata = Struct()\n\n# Update the metadata with filename and split information\nmetadata.update({"filename": "goodmorning.wav", "split": "test"})\n\n# Upload the input from the specified URL with metadata\ninput_object.upload_from_url(\n    input_id="audio_data_metadata",  # Specify an ID for the input\n    audio_url=audio_url,  # URL of the audio file\n    metadata=metadata  # Custom metadata associated with the input\n)\n',b='\n2024-01-15 16:38:49 INFO     clarifai.client.input:                                                    input.py:669\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "a14eda72951b06cd25561381d70ced74"    ',k='2024-01-16 14:14:41 INFO     clarifai.client.input:                                                    input.py:669\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "80d2454a1dea0411e20fb03b2fe0c8b1"',v='\n2024-01-16 14:18:58 INFO     clarifai.client.input:                                                    input.py:669\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "c16d3dd066d7ee48d038744daacef6e8" ',w='2024-01-16 14:25:26 INFO     clarifai.client.input:                                                    input.py:669\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "00576d040a6254019942ab4eceb306ad" ',I='id: "multimodal_data"\ndata {\n  image {\n    url: "https://samples.clarifai.com/metro-north.jpg"\n  }\n  text {\n    raw: "What time of day is it?"\n  }\n}\n',x='[id: "demo1"\ndata {\n  image {\n    url: "https://samples.clarifai.com/metro-north.jpg"\n    hosted {\n      prefix: "https://data.clarifai.com"\n      suffix: "users/8tzpjy1a841y/apps/test_app/inputs/image/140c856dc82565d2c4d6ea720fceff78"\n      sizes: "orig"\n      sizes: "tiny"\n      sizes: "small"\n      sizes: "large"\n      crossorigin: "use-credentials"\n    }\n    image_info {\n      width: 512\n      height: 384\n      format: "JPEG"\n      color_mode: "YUV"\n    }\n  }\n}\ncreated_at {\n  seconds: 1705917660\n  nanos: 789409000\n}\n...\n  code: INPUT_DOWNLOAD_SUCCESS\n  description: "Download complete"\n}\n]\n',T='2024-01-16 14:44:28 INFO     clarifai.client.input:                                                    input.py:732\n\n                             Inputs Deleted                                                                        \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             req_id: "4ae26cd15c7da98a1c2d3647b03d2768"  ',U='2024-04-05 13:03:24 INFO     clarifai.client.input:                                                    input.py:674\n                             Inputs Uploaded                                                                       \n                             code: SUCCESS                                                                         \n                             description: "Ok"                                                                     \n                             details: "All inputs successfully added"                                              \n                             req_id: "951a64b950cccf05c8d274c8acc1f0f6"                                            \n                                                                                                                   \nINFO:clarifai.client.input:\nInputs Uploaded\ncode: SUCCESS\ndescription: "Ok"\ndetails: "All inputs successfully added"\nreq_id: "951a64b950cccf05c8d274c8acc1f0f6"\n\n(\'8557e0f57f464c22b3483de76757fb4f\',\n status {\n   code: SUCCESS\n   description: "Ok"\n   details: "All inputs successfully added"\n   req_id: "951a64b950cccf05c8d274c8acc1f0f6"\n }\n inputs {\n   id: "metadata"\n   data {\n     image {\n       url: "https://samples.clarifai.com/XiJinping.jpg"\n       image_info {\n         format: "UnknownImageFormat"\n         color_mode: "UnknownColorMode"\n       }\n     }\n     metadata {\n       fields {\n         key: "filename"\n         value {\n           string_value: "XiJinping.jpg"\n         }\n       }\n       fields {\n         key: "split"\n         value {\n           string_value: "train"\n         }\n       }\n     }\n   }\n   created_at {\n     seconds: 1712322204\n     nanos: 737881425\n   }\n   modified_at {\n     seconds: 1712322204\n     nanos: 737881425\n   }\n   status {\n     code: INPUT_DOWNLOAD_PENDING\n     description: "Download pending"\n   }\n }\n inputs_add_job {\n   id: "8557e0f57f464c22b3483de76757fb4f"\n   progress {\n     pending_count: 1\n   }\n   created_at {\n     seconds: 1712322204\n     nanos: 714751000\n   }\n   modified_at {\n     seconds: 1712322204\n     nanos: 714751000\n   }\n   status {\n     code: JOB_QUEUED\n     description: "Job is queued to be ran."\n   }\n })',C='2024-04-05 13:05:49 INFO     clarifai.client.input:                                                    input.py:674\n                             Inputs Uploaded                                                                       \n                             code: SUCCESS                                                                         \n                             description: "Ok"                                                                     \n                             details: "All inputs successfully added"                                              \n                             req_id: "72c9820d805efb9f3ee7f0508778c1f3"                                            \n                                                                                                                   \nINFO:clarifai.client.input:\nInputs Uploaded\ncode: SUCCESS\ndescription: "Ok"\ndetails: "All inputs successfully added"\nreq_id: "72c9820d805efb9f3ee7f0508778c1f3"\n\n(\'7fdc30b9c2a24f31b6a41b32bd9fea02\',\n status {\n   code: SUCCESS\n   description: "Ok"\n   details: "All inputs successfully added"\n   req_id: "72c9820d805efb9f3ee7f0508778c1f3"\n }\n inputs {\n   id: "video_data_metadata"\n   data {\n     video {\n       url: "https://samples.clarifai.com/beer.mp4"\n       video_info {\n         video_format: "UnknownVideoFormat"\n       }\n     }\n     metadata {\n       fields {\n         key: "filename"\n         value {\n           string_value: "drinks.jpg"\n         }\n       }\n       fields {\n         key: "split"\n         value {\n           string_value: "train"\n         }\n       }\n     }\n   }\n   created_at {\n     seconds: 1712322349\n     nanos: 628288634\n   }\n   modified_at {\n     seconds: 1712322349\n     nanos: 628288634\n   }\n   status {\n     code: INPUT_DOWNLOAD_PENDING\n     description: "Download pending"\n   }\n }\n inputs_add_job {\n   id: "7fdc30b9c2a24f31b6a41b32bd9fea02"\n   progress {\n     pending_count: 1\n   }\n   created_at {\n     seconds: 1712322349\n     nanos: 602487000\n   }\n   modified_at {\n     seconds: 1712322349\n     nanos: 602487000\n   }\n   status {\n     code: JOB_QUEUED\n     description: "Job is queued to be ran."\n   }\n })',S='2024-04-05 13:07:04 INFO     clarifai.client.input:                                                    input.py:674\n                             Inputs Uploaded                                                                       \n                             code: SUCCESS                                                                         \n                             description: "Ok"                                                                     \n                             details: "All inputs successfully added"                                              \n                             req_id: "835f6c736f032947d1f4067e39c10b72"                                            \n                                                                                                                   \nINFO:clarifai.client.input:\nInputs Uploaded\ncode: SUCCESS\ndescription: "Ok"\ndetails: "All inputs successfully added"\nreq_id: "835f6c736f032947d1f4067e39c10b72"\n\n(\'e3de274f644a4e98a488e7c85f94c0d1\',\n status {\n   code: SUCCESS\n   description: "Ok"\n   details: "All inputs successfully added"\n   req_id: "835f6c736f032947d1f4067e39c10b72"\n }\n inputs {\n   id: "text_data_metadata"\n   data {\n     metadata {\n       fields {\n         key: "filename"\n         value {\n           string_value: "tweet.txt"\n         }\n       }\n       fields {\n         key: "split"\n         value {\n           string_value: "train"\n         }\n       }\n     }\n     text {\n       url: "https://data.clarifai.com/orig/users/8tzpjy1a841y/apps/visual_classifier_eval/inputs/text/c439598b04d8112867eec70097aa00c2"\n       text_info {\n         encoding: "UnknownTextEnc"\n       }\n     }\n   }\n   created_at {\n     seconds: 1712322424\n     nanos: 56818659\n   }\n   modified_at {\n     seconds: 1712322424\n     nanos: 56818659\n   }\n   status {\n     code: INPUT_DOWNLOAD_PENDING\n     description: "Download pending"\n   }\n }\n inputs_add_job {\n   id: "e3de274f644a4e98a488e7c85f94c0d1"\n   progress {\n     pending_count: 1\n   }\n   created_at {\n     seconds: 1712322423\n     nanos: 941401000\n   }\n   modified_at {\n     seconds: 1712322423\n     nanos: 941401000\n   }\n   status {\n     code: JOB_QUEUED\n     description: "Job is queued to be ran."\n   }\n })',N='2024-04-08 06:39:32 INFO     clarifai.client.input:                                                    input.py:674\n                             Inputs Uploaded                                                                       \n                             code: SUCCESS                                                                         \n                             description: "Ok"                                                                     \n                             details: "All inputs successfully added"                                              \n                             req_id: "4c96e4167170c174838c7987101f3478"                                            \n                                                                                                                   \nINFO:clarifai.client.input:\nInputs Uploaded\ncode: SUCCESS\ndescription: "Ok"\ndetails: "All inputs successfully added"\nreq_id: "4c96e4167170c174838c7987101f3478"\n\n(\'109349aa790a404db39f6324415a47a5\',\n status {\n   code: SUCCESS\n   description: "Ok"\n   details: "All inputs successfully added"\n   req_id: "4c96e4167170c174838c7987101f3478"\n }\n inputs {\n   id: "audio_data_metadata"\n   data {\n     metadata {\n       fields {\n         key: "filename"\n         value {\n           string_value: "goodmorning.wav"\n         }\n       }\n       fields {\n         key: "split"\n         value {\n           string_value: "test"\n         }\n       }\n     }\n     audio {\n       url: "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"\n       audio_info {\n         audio_format: "UnknownAudioFormat"\n       }\n     }\n   }\n   created_at {\n     seconds: 1712558372\n     nanos: 764691920\n   }\n   modified_at {\n     seconds: 1712558372\n     nanos: 764691920\n   }\n   status {\n     code: INPUT_DOWNLOAD_PENDING\n     description: "Download pending"\n   }\n }\n inputs_add_job {\n   id: "109349aa790a404db39f6324415a47a5"\n   progress {\n     pending_count: 1\n   }\n   created_at {\n     seconds: 1712558372\n     nanos: 751997000\n   }\n   modified_at {\n     seconds: 1712558372\n     nanos: 751997000\n   }\n   status {\n     code: JOB_QUEUED\n     description: "Job is queued to be ran."\n   }\n })',D={sidebar_position:5},O="Managing Inputs",j={unversionedId:"python-sdk/managing-inputs",id:"python-sdk/managing-inputs",title:"Managing Inputs",description:"Learn how to interact with inputs using Clarifai Python SDK",source:"@site/docs/python-sdk/managing-inputs.md",sourceDirName:"python-sdk",slug:"/python-sdk/managing-inputs",permalink:"/python-sdk/managing-inputs",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/managing-inputs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Managing Datasets",permalink:"/python-sdk/managing-datasets"},next:{title:"Inference from AI Models",permalink:"/python-sdk/Inference-from-AI-Models/"}},E={},Z=[{value:"Image Data as Inputs",id:"image-data-as-inputs",level:2},{value:"Text Data as Inputs",id:"text-data-as-inputs",level:2},{value:"Audio Data as Inputs",id:"audio-data-as-inputs",level:2},{value:"Video Data as Inputs",id:"video-data-as-inputs",level:2},{value:"Multimodal Data as Inputs",id:"multimodal-data-as-inputs",level:2},{value:"Custom Metadata",id:"custom-metadata",level:2},{value:"Image With Metadata",id:"image-with-metadata",level:3},{value:"Video With Metadata",id:"video-with-metadata",level:3},{value:"Text With Metadata",id:"text-with-metadata",level:3},{value:"Audio With Metadata",id:"audio-with-metadata",level:3},{value:"List inputs",id:"list-inputs",level:2},{value:"Delete Inputs",id:"delete-inputs",level:2}],P={toc:Z},A="wrapper";function q(t){let{components:e,...a}=t;return(0,i.kt)(A,(0,n.Z)({},P,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"managing-inputs"},"Managing Inputs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to interact with inputs using Clarifai Python SDK")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Effortlessly handle and organize your input data with Clarifai's Python SDK. The Input Management feature empowers you to efficiently manage various types of data, including images, videos, and text, facilitating seamless integration into your machine learning workflows. Take control of your inputs, whether sourced from URLs, file paths, or raw bytes, and streamline the preparation process for predictive model inferences. Clarifai's Input Management simplifies the task of organizing and preparing data for an enhanced and streamlined machine learning experience."),(0,i.kt)("h2",{id:"image-data-as-inputs"},"Image Data as Inputs"),(0,i.kt)("p",null,"The Clarifai Python SDK empowers you to seamlessly upload image data through various methods, providing flexibility and ease of integration. Whether your images are hosted online via URLs, stored locally as file paths, or represented as bytes within your application, our API accommodates all these formats. This versatility ensures a smooth and efficient workflow, allowing you to leverage Clarifai's powerful capabilities with the convenience that suits your specific use case."),(0,i.kt)("p",null,"Visit this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/data/create-get-update-delete"},"page")," for more information."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},d))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},b)),(0,i.kt)("h2",{id:"text-data-as-inputs"},"Text Data as Inputs"),(0,i.kt)("p",null,"Use the potential of the Clarifai Python SDK to effortlessly upload text data through diverse methods, providing a seamless experience and fostering adaptability in your integration process. Whether your text is accessible online via URLs, resides locally as file paths, or is represented as bytes within your application, our API seamlessly accommodates these formats. This versatility ensures a fluid and effective workflow, enabling you to unlock Clarifai's robust capabilities with the utmost convenience tailored to your specific use case."),(0,i.kt)("p",null,"Visit this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/data/create-get-update-delete"},"page")," for more information."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},u))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},k)),(0,i.kt)("h2",{id:"audio-data-as-inputs"},"Audio Data as Inputs"),(0,i.kt)("p",null,"Unlock the potential of audio analysis with the Clarifai Python SDK, offering seamless integration for uploading audio data through multiple avenues. Whether your audio files reside on external servers accessible via URLs, are stored locally with file paths, or are represented as raw bytes within your application, our API effortlessly accommodates each of these formats. This adaptability ensures a streamlined and user-friendly workflow, providing you the freedom to harness Clarifai's advanced capabilities with the utmost convenience tailored to your specific use case."),(0,i.kt)("p",null,"Visit this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/data/create-get-update-delete"},"page")," for more information."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},r))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},v)),(0,i.kt)("h2",{id:"video-data-as-inputs"},"Video Data as Inputs"),(0,i.kt)("p",null,"Unlock the potential of video analysis with the Clarifai Python SDK, offering seamless integration for uploading video data through various methods. Whether your videos are accessible online via URLs, residing locally as file paths, or encapsulated as bytes within your application, our API effortlessly accommodates these diverse formats."),(0,i.kt)("p",null,"Visit this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/data/create-get-update-delete"},"page")," for more information."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},p))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},w)),(0,i.kt)("h2",{id:"multimodal-data-as-inputs"},"Multimodal Data as Inputs"),(0,i.kt)("p",null,"With the Clarifai Python SDK, the integration of multimodal inputs becomes a seamless and intuitive process. Unlock the power of combining various types of inputs by leveraging our API. Whether you're incorporating a mix of images, text, or other data sources, our SDK allows you to specify and upload these multimodal inputs effortlessly. For now the Clarifai platform only supports multimodal inputs like ","[Image ,Text]","->text."),(0,i.kt)("p",null,"Visit this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/data/create-get-update-delete"},"page")," for more information."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},c))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},I)),(0,i.kt)("h2",{id:"custom-metadata"},"Custom Metadata"),(0,i.kt)("p",null,"When working with the Clarifai Python SDK, you can add inputs with custom metadata in addition to concepts. This allows you to attach additional information  to your inputs, which can be useful for various purposes such as categorization, filtering, or later reference."),(0,i.kt)("p",null,"Visit this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/data/create-get-update-delete#add-inputs-with-custom-metadata"},"page")," for more information."),(0,i.kt)("h3",{id:"image-with-metadata"},"Image With Metadata"),(0,i.kt)("p",null,"In the below example we are uploading an image with metadata that includes details about the filename and to which split it belongs to."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},h))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},U)),(0,i.kt)("h3",{id:"video-with-metadata"},"Video With Metadata"),(0,i.kt)("p",null,"In the below example we are uploading a video file  with metadata that includes details about the filename and to which split it belongs to."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},_))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},C)),(0,i.kt)("h3",{id:"text-with-metadata"},"Text With Metadata"),(0,i.kt)("p",null,"In the below example we are uploading a text file with metadata that includes details about the filename and to which split it belongs to."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},g))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},S)),(0,i.kt)("h3",{id:"audio-with-metadata"},"Audio With Metadata"),(0,i.kt)("p",null,"In the below example we are uploading an audio file with metadata that includes details about the filename and to which split it belongs to."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},y))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},N)),(0,i.kt)("h2",{id:"list-inputs"},"List inputs"),(0,i.kt)("p",null,"Effortlessly explore and manage your inputs with the Clarifai Python SDK. By utilizing the list_inputs() method, you gain the ability to seamlessly view all inputs within your app. This powerful function supports features like pagination, enabling a well-organized display of information. Tailor your queries by setting parameters such as page_no and per_page to align with your specific requirements."),(0,i.kt)("p",null,"Visit this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/data/create-get-update-delete"},"page")," for more information."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},m))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},x)),(0,i.kt)("h2",{id:"delete-inputs"},"Delete Inputs"),(0,i.kt)("p",null,"Effortlessly manage your input data with the Clarifai Python SDK's Delete Inputs feature. Through the API, you gain the ability to delete inputs seamlessly by providing a list of input IDs. This straightforward and intuitive process empowers you to maintain control over your dataset, allowing for efficient removal of specific inputs as needed."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Be certain that you want to delete a particular input as the operation cannot be undone.")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},f))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},T)))}q.isMDXComponent=!0}}]);