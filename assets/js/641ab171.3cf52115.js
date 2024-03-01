"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8],{85162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(87462),a=n(67294),r=n(86010),i=n(12466),s=n(16550),l=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,u]=f({queryString:n,groupId:o}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,c.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),b=(()=>{const e=l??d;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var b=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),o=u[n].value;o!==s&&(d(t),l(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.Z)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function I(e){const t=h(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},a.createElement(g,(0,o.Z)({},e,t)),a.createElement(v,(0,o.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return a.createElement(I,(0,o.Z)({key:String(t)},e))}},22268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>f});var o=n(87462),a=(n(67294),n(3905)),r=n(74866),i=n(85162),s=n(90814);const l='from clarifai.client.model import Model\n\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\n#USER_ID = "facebook"\n#APP_ID = "asr"\n\n# You can set the model using model URL or model ID.\n# Change these to whatever model you want to use\n# eg : MODEL_ID = \'asr-wav2vec2-base-960h-english\'\n# You can also set a particular model version by specifying the  version ID\n# eg: MODEL_VERSION_ID = \'model_version\'\n#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id\n\n# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)\n\naudio_url = "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"\n\n# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.\n\n# Example for prediction through Bytes:\n# model_prediction = model.predict_by_bytes(audio_bytes, input_type="audio")\n\n\n# Example for prediction through Filepath:\n# model_prediction = Model(model_url).predict_by_filepath(audio_filepath, input_type="audio")\n\nmodel_url = "https://clarifai.com/facebook/asr/models/asr-wav2vec2-large-robust-ft-swbd-300h-english"\n\nmodel_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(\n    audio_url, "audio"\n)\n\n# Print the output\nprint(model_prediction.outputs[0].data.text.raw)\n\n',u="GOOD MORNING I THINK THIS IS GOING TO BE A GREAT PRESENTATION",c={sidebar_position:3},d="Audio as Input",p={unversionedId:"python-sdk/Inference-from-AI-Models/Audio-as-Input",id:"python-sdk/Inference-from-AI-Models/Audio-as-Input",title:"Audio as Input",description:"The Clarifai Python SDK for Audio Processing provides a comprehensive set of tools and functionalities, enabling you to process audio inputs with unparalleled ease and efficiency. Whether you're working on applications related to voice recognition, sound classification, or speech-to-text conversion, our SDK streamlines the development process, allowing you to focus on building cutting-edge functionalities.",source:"@site/docs/python-sdk/Inference-from-AI-Models/Audio-as-Input.md",sourceDirName:"python-sdk/Inference-from-AI-Models",slug:"/python-sdk/Inference-from-AI-Models/Audio-as-Input",permalink:"/python-sdk/Inference-from-AI-Models/Audio-as-Input",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/Inference-from-AI-Models/Audio-as-Input.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Text as Input",permalink:"/python-sdk/Inference-from-AI-Models/Text-as-Input"},next:{title:"MultiModal as Input",permalink:"/python-sdk/Inference-from-AI-Models/Multimodal-as-Input"}},m={},f=[{value:"Audio to Text",id:"audio-to-text",level:2}],h={toc:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audio-as-input"},"Audio as Input"),(0,a.kt)("p",null,"The Clarifai Python SDK for Audio Processing provides a comprehensive set of tools and functionalities, enabling you to process audio inputs with unparalleled ease and efficiency. Whether you're working on applications related to voice recognition, sound classification, or speech-to-text conversion, our SDK streamlines the development process, allowing you to focus on building cutting-edge functionalities."),(0,a.kt)("h2",{id:"audio-to-text"},"Audio to Text"),(0,a.kt)("p",null,"Harness the power of the Predict API to seamlessly transform audio files into text-based formats using our advanced Automatic Speech Recognition (ASR) ",(0,a.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22audio-to-text%22%5D%7D%5D"},"model"),". With this functionality, you can effortlessly transcribe spoken words from audio, opening up possibilities for diverse applications such as transcription services, voice command processing, and more."),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},l))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Output"),(0,a.kt)(s.Z,{className:"language-text",mdxType:"CodeBlock"},u)))}y.isMDXComponent=!0}}]);