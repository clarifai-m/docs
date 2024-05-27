"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6021],{19365:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(96540),o=t(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(58168),o=t(96540),r=t(20053),i=t(23104),l=t(56347),s=t(57485),d=t(31682),c=t(89466);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[s,d]=g({queryString:t,groupId:a}),[u,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),h=(()=>{const e=s??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var h=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),a=d[t].value;a!==l&&(u(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n)},d.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,r.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=f(e);return o.createElement("div",{className:(0,r.A)("tabs-container",y.tabList)},o.createElement(_,(0,a.A)({},e,n)),o.createElement(b,(0,a.A)({},e,n)))}function w(e){const n=(0,h.A)();return o.createElement(v,(0,a.A)({key:String(n)},e))}},40343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>h,default:()=>x,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var a=t(58168),o=(t(96540),t(15680)),r=t(11470),i=t(19365),l=t(77964);const s='class InferenceModel(TextToText):\n  """User model inference class."""\n\n  def __init__(self) -> None:\n    """\n    Load inference time artifacts that are called frequently .e.g. models, tokenizers, etc.\n    in this method so they are loaded only once for faster inference.\n    """\n    # current directory\n    self.base_path: Path = os.path.dirname(__file__)\n\n  def predict(self, input_data: list,\n              inference_parameters: Dict[str, Union[str, float, int, bool]]) -> list:\n    """ Custom prediction function for `text-to-text` (also called as `text generation`) model.\n\n    Args:\n      input_data (List[str]): List of text\n      inference_parameters (Dict[str, Union[str, float, int, bool]]): your inference parameters\n\n    Returns:\n      list of TextOutput\n\n    """\n\n    raise NotImplementedError()\n',d='import os\nfrom typing import Dict, Union\nfrom clarifai.models.model_serving.model_config import *\n\nimport torch\nfrom transformers import AutoTokenizer\nimport transformers\n\nclass InferenceModel(TextToText):\n  """User model inference class."""\n\n  def __init__(self) -> None:\n    """\n    Load inference time artifacts that are called frequently .e.g. models, tokenizers, etc.\n    in this method so they are loaded only once for faster inference.\n    """\n    # current directory\n    self.base_path = os.path.dirname(__file__)\n    # where you save hf checkpoint in your working dir e.i. `your_model_dir`\n    model_path = os.path.join(self.base_path, "checkpoint")\n    self.tokenizer = AutoTokenizer.from_pretrained(model_path)\n    self.pipeline = transformers.pipeline(\n        "text-generation",\n        model=model_path,\n        torch_dtype=torch.float16,\n        device_map="auto",\n    )\n\n  def predict(self, input_data: list,\n              inference_parameters: Dict[str, Union[str, float, int]]) -> list:\n    """ Custom prediction function for `text-to-text` (also called as `text generation`) model.\n\n    Args:\n      input_data (List[str]): List of text\n      inference_parameters (Dict[str, Union[str, float, int]]): your inference parameters\n\n    Returns:\n      list of TextOutput\n\n    """\n    output_sequences = self.pipeline(\n        input_data,\n        eos_token_id=self.tokenizer.eos_token_id,\n        **inference_parameters)\n\n    # wrap outputs in Clarifai defined output\n    return [TextOutput(each[0]) for each in output_sequences]',c='def test_text_input(self):\n  text: list = ["Tell me about Clarifai", "How deploy model to Clarifai"]\n  outputs = self.model.predict(text, temperature=0.9) # In term of inference parameters for the above example, it will PASSED\n  outputs = self.model.predict(text, top_k=10) # And this one will FAILED since `top_k` param is not defined when init self.model',u="Get your PAT from https://clarifai.com/settings/security and pass it here: <insert your pat here>",p="Consider using `hf_transfer` for faster downloads. This solution comes with some limitations. See https://huggingface.co/docs/huggingface_hub/hf_transfer for more details.\nFetching 14 files:   0% 0/14 [00:00<?, ?it/s]downloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/README.md to /root/.cache/huggingface/hub/tmpks451wck\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/onnx/model.onnx to /root/.cache/huggingface/hub/tmp5jpha5yd\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/.gitignore to /root/.cache/huggingface/hub/tmp2hpe7iu0\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/onnx/config.json to /root/.cache/huggingface/hub/tmpufkrlq2_\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/onnx/preprocessor_config.json to /root/.cache/huggingface/hub/tmp8ts928m7\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/handler.py to /root/.cache/huggingface/hub/tmpu8jtbelz\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/config.json to /root/.cache/huggingface/hub/tmpzkygsvw4\n\nREADME.md: 100% 4.54k/4.54k [00:00<00:00, 13.5MB/s]\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/.gitattributes to /root/.cache/huggingface/hub/tmp6fd8ko4x\n\n.gitignore: 100% 29.0/29.0 [00:00<00:00, 94.1kB/s]\n\nonnx/config.json: 100% 1.72k/1.72k [00:00<00:00, 8.88MB/s]\n\nonnx/preprocessor_config.json: 100% 431/431 [00:00<00:00, 2.32MB/s]\n\nmodel.onnx:   0% 0.00/110M [00:00<?, ?B/s]\n\nconfig.json: 100% 1.73k/1.73k [00:00<00:00, 7.93MB/s]\n\n\nhandler.py: 100% 1.54k/1.54k [00:00<00:00, 8.31MB/s]\n\n\n.gitattributes: 100% 1.48k/1.48k [00:00<00:00, 6.78MB/s]\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/pytorch_model.bin to /root/.cache/huggingface/hub/tmpx_viyrvb\nFetching 14 files:   7% 1/14 [00:00<00:08,  1.55it/s]downloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/preprocessor_config.json to /root/.cache/huggingface/hub/tmpiltxv0t_\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/scheduler.pt to /root/.cache/huggingface/hub/tmppjzdy4m0\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/training_args.bin to /root/.cache/huggingface/hub/tmph_tb7wt3\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/trainer_state.json to /root/.cache/huggingface/hub/tmpl41baift\ndownloading https://huggingface.co/mattmdjaga/segformer_b2_clothes/resolve/f6ac72992f938a1d0073fb5e5a06fd781f19f9a2/rng_state.pth to /root/.cache/huggingface/hub/tmp8w6kv5ay\n\n\npreprocessor_config.json: 100% 271/271 [00:00<00:00, 864kB/s]\n\n\ntrainer_state.json:   0% 0.00/291k [00:00<?, ?B/s]\n\n\npytorch_model.bin:   0% 0.00/110M [00:00<?, ?B/s]\n\ntrainer_state.json: 100% 291k/291k [00:00<00:00, 1.99MB/s]\n\n\n\npytorch_model.bin:  10% 10.5M/110M [00:00<00:01, 70.5MB/s]\n\ntraining_args.bin: 100% 3.32k/3.32k [00:00<00:00, 9.70MB/s]\n\nmodel.onnx:  10% 10.5M/110M [00:00<00:04, 24.4MB/s]\n\nrng_state.pth: 100% 14.6k/14.6k [00:00<00:00, 32.1MB/s]\n\n\nscheduler.pt: 100% 627/627 [00:00<00:00, 2.31MB/s]\n\n\n\npytorch_model.bin:  29% 31.5M/110M [00:00<00:00, 111MB/s] \n\n\npytorch_model.bin:  48% 52.4M/110M [00:00<00:00, 146MB/s]\nmodel.onnx:  19% 21.0M/110M [00:00<00:02, 34.0MB/s]\n\n\npytorch_model.bin:  67% 73.4M/110M [00:00<00:00, 156MB/s]\nmodel.onnx:  29% 31.5M/110M [00:00<00:01, 43.8MB/s]\n\n\npytorch_model.bin:  86% 94.4M/110M [00:00<00:00, 172MB/s]\npytorch_model.bin: 100% 110M/110M [00:00<00:00, 139MB/s] \n\nmodel.onnx:  48% 52.4M/110M [00:01<00:00, 65.3MB/s]\nmodel.onnx:  67% 73.4M/110M [00:01<00:00, 86.4MB/s]\nmodel.onnx:  86% 94.4M/110M [00:01<00:00, 107MB/s] \nmodel.onnx: 100% 110M/110M [00:01<00:00, 75.2MB/s]\nFetching 14 files: 100% 14/14 [00:02<00:00,  6.75it/s]\n/content/examples/model_upload/visual_segmenter/segformer-b2/checkpoint\n",m="======================================= test session starts ========================================\n\nplatform linux -- Python 3.10.12, pytest-7.4.4, pluggy-1.4.0\n\nrootdir: /content/examples/model_upload/visual_segmenter\n\nplugins: anyio-3.7.1\n\ncollected 2 items                                                                                  \n\nsegformer-b2/test.py The cache for model files in Transformers v4.22.0 has been updated. Migrating your old cache. This is a one-time only operation. You can interrupt this and resume the migration later on by calling `transformers.utils.move_cache()`.\n\n0it [00:00, ?it/s]\n\n2024-04-09 09:57:46.703098: E external/local_xla/xla/stream_executor/cuda/cuda_dnn.cc:9261] Unable to register cuDNN factory: Attempting to register factory for plugin cuDNN when one has already been registered\n\n2024-04-09 09:57:46.703174: E external/local_xla/xla/stream_executor/cuda/cuda_fft.cc:607] Unable to register cuFFT factory: Attempting to register factory for plugin cuFFT when one has already been registered\n\n2024-04-09 09:57:46.805602: E external/local_xla/xla/stream_executor/cuda/cuda_blas.cc:1515] Unable to register cuBLAS factory: Attempting to register factory for plugin cuBLAS when one has already been registered\n\n2024-04-09 09:57:49.466995: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Warning: Could not find TensorRT\n\n..\n\n========================================= warnings summary =========================================\n\nsegformer-b2/test.py::CustomTest::test_default_cases\n\nsegformer-b2/test.py::CustomTest::test_specific_case1\n\n  /usr/local/lib/python3.10/dist-packages/transformers/models/segformer/image_processing_segformer.py:99: FutureWarning: The `reduce_labels` parameter is deprecated and will be removed in a future version. Please use `do_reduce_labels` instead.\n\n    warnings.warn(\n\n-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html\n\n================================== 2 passed, 2 warnings in 20.81s ==================================\n\nStart building...\n\n  0% 0/7 [00:00&lt;?, ?it/s]NOTE: skipping ['requirements.txt', '.cache', '__pycache__']\n\ncopying inference.py...: 100% 7/7 [00:00&lt;00:00,  8.16it/s]\n\nModel building in progress; the duration may vary depending on the size of checkpoints/assets...\n\nFinished. Your model is located at ./segformer-b2/model.clarifai",g="======================================= test session starts ========================================\n\nplatform linux -- Python 3.10.12, pytest-7.4.4, pluggy-1.4.0\n\nrootdir: /content/examples/model_upload/visual_segmenter\n\nplugins: anyio-3.7.1\n\ncollected 2 items                                                                                  \n\nsegformer-b2/test.py 2024-04-09 10:25:02.328582: E external/local_xla/xla/stream_executor/cuda/cuda_dnn.cc:9261] Unable to register cuDNN factory: Attempting to register factory for plugin cuDNN when one has already been registered\n\n2024-04-09 10:25:02.328646: E external/local_xla/xla/stream_executor/cuda/cuda_fft.cc:607] Unable to register cuFFT factory: Attempting to register factory for plugin cuFFT when one has already been registered\n\n2024-04-09 10:25:02.330329: E external/local_xla/xla/stream_executor/cuda/cuda_blas.cc:1515] Unable to register cuBLAS factory: Attempting to register factory for plugin cuBLAS when one has already been registered\n\n2024-04-09 10:25:03.910020: W tensorflow/compiler/tf2tensorrt/utils/py_utils.cc:38] TF-TRT Warning: Could not find TensorRT\n\n..\n\n========================================= warnings summary =========================================\n\nsegformer-b2/test.py::CustomTest::test_default_cases\n\nsegformer-b2/test.py::CustomTest::test_specific_case1\n\n  /usr/local/lib/python3.10/dist-packages/transformers/models/segformer/image_processing_segformer.py:99: FutureWarning: The `reduce_labels` parameter is deprecated and will be removed in a future version. Please use `do_reduce_labels` instead.\n\n    warnings.warn(\n\n-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html\n\n================================== 2 passed, 2 warnings in 16.90s ==================================\n\nSuccess!\n\nModel version: fac1b8a204554f7196871f106be75d8d\n",f={sidebar_position:1},h="Model Upload",y={unversionedId:"sdk/advance-model-operations/model-upload",id:"sdk/advance-model-operations/model-upload",title:"Model Upload",description:"Learn how to perform model upload using Clarifai Python SDK",source:"@site/docs/sdk/advance-model-operations/model-upload.md",sourceDirName:"sdk/advance-model-operations",slug:"/sdk/advance-model-operations/model-upload",permalink:"/sdk/advance-model-operations/model-upload",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/advance-model-operations/model-upload.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Model Operations",permalink:"/sdk/advance-model-operations/"},next:{title:"Model Export",permalink:"/sdk/advance-model-operations/model-export"}},_={},b=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Setup Configuration File",id:"setup-configuration-file",level:2},{value:"Testing",id:"testing",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Example",id:"example",level:2}],v={toc:b},w="wrapper";function x(e){let{components:n,...t}=e;return(0,o.yg)(w,(0,a.A)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"model-upload"},"Model Upload"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Learn how to perform model upload using Clarifai Python SDK")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Users can now upload their custom-built models into production using Clarifai Python SDK. The Clarifai Python SDK offers features like a command-line interface, easy implementation, and testing in Python to make the process of deploying the model easier."),(0,o.yg)("p",null,"Additionally, for serving configurations, the ",(0,o.yg)("inlineCode",{parentName:"p"},"serving_backend")," section contains custom settings, including options for NVIDIA Triton. With Triton, users can leverage high-performance GPU computation for inference tasks. NVIDIA Triton Inference Server stands out as a powerful and versatile platform. It streamlines the deployment and execution of machine learning models for inference tasks, offering a professional solution for developers and data scientists seeking to bridge the gap between model development and real-world applications.  Its emphasis on framework flexibility, performance optimization, scalability, and ease of integration makes it a compelling choice for maximizing the impact of machine learning models across various industries."),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Setting up the Clarifai Python SDK along with PAT. Refer to the installation and configuration with the PAT token ",(0,o.yg)("a",{parentName:"li",href:"https://docs.clarifai.com/python-sdk/sdk-overview/"},"here"),".")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Guide to get your ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT"))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Create a project directory named ",(0,o.yg)("inlineCode",{parentName:"li"},"your_model_dir")," and run the following commands,")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai create model --type text-to-text --working-dir your_model_dir\ncd your_model_dir\n")),(0,o.yg)("p",null,"The Clarifai Python SDK  will then create all the necessary files required for the deployment process inside  ",(0,o.yg)("inlineCode",{parentName:"p"},"your_model_dir")," . "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"your_model_dir\n\u251c\u2500\u2500 clarifai_config.yaml\n\u251c\u2500\u2500 inference.py\n\u251c\u2500\u2500 test.py\n\u2514\u2500\u2500 requirements.txt\n")),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},"inference.py: The crucial file where users need to implement their Python code."),(0,o.yg)("li",{parentName:"ul"},"clarifai_config.yaml: Contains all necessary configurations for model test, build and upload"),(0,o.yg)("li",{parentName:"ul"},"test.py: Predefined test cases to evaluate inference.py."),(0,o.yg)("li",{parentName:"ul"},"requirements.text: Equivalent to a normal Python project's requirements.txt."))),(0,o.yg)("h2",{id:"implementation"},"Implementation"),(0,o.yg)("p",null,"The next step involves the implementation of an inference class inside ",(0,o.yg)("inlineCode",{parentName:"p"},"inference.py")," , for your custom model. There are 2 functions inside the class that you must implement:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"init"),": a method to load the model, called once."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"predict"),": a function designed to generate predictions based on the provided inputs and inference parameters. This method includes a docstring inherited from its parent, providing information on input, parameters, and output types. Refer to the docstring to confirm that the outputs of this method adhere to the correct ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/Clarifai/clarifai-python/blob/master/clarifai/models/model_serving/model_config/output.py"},"Clarifai Output Type"),", as errors may occur otherwise.")),(0,o.yg)("p",null,"Below is an example template of inference.py for a text-to-text model,"),(0,o.yg)(r.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},s))),"Consider a scenario where we are going to use a HuggingFace Text-To-Text model, the inference class would look like this:",(0,o.yg)(r.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},d))),(0,o.yg)("h2",{id:"setup-configuration-file"},"Setup Configuration File"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_config.yaml")," contains all the required files for testing, building and uploading a model. "),(0,o.yg)("p",null,"The config file will have the following structure,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai_model:\n  clarifai_model_id:\n  clarifai_user_app_id:\n  description:\n  inference_parameters: (*)\n  labels: (*)\n  type: (**)\nserving_backend:\n  triton: (***)\n    max_batch_size:\n    image_shape:\n")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_model")," includes configurations necessary for the building, testing, and uploading process. It comprises several attributes: ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_model_id"),", which specifies the model ID on the platform; ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_user_app_id"),", which denotes the user ID and App ID on the platform, separated by '/'; and ",(0,o.yg)("inlineCode",{parentName:"p"},"description"),", providing a brief model description. These attributes are crucial for the model upload process, though if not provided, they can be passed during the upload command. Additionally, there are optional attributes: inference_parameters, allowing customization of model prediction methods for testing and uploading purposes; and labels, requiring manual insertion of concept names essential for specific model types. The type attribute, generated upon initializing the working directory, must not be modified."),(0,o.yg)("p",null,"For serving configurations, the ",(0,o.yg)("inlineCode",{parentName:"p"},"serving_backend")," section contains custom settings, including ",(0,o.yg)("inlineCode",{parentName:"p"},"triton")," options such as ",(0,o.yg)("inlineCode",{parentName:"p"},"max_batch_size"),", determining the maximum number of inputs for prediction, and ",(0,o.yg)("inlineCode",{parentName:"p"},"image_shape"),", applicable solely for image input models, specifying the width and height of input images. The default max_batch_size is 1, but if the model supports batch inference, it can be adjusted for enhanced GPU performance. The image_shape default is ","[-1, -1]",", indicating acceptance of any image size."),(0,o.yg)("h2",{id:"testing"},"Testing"),(0,o.yg)("p",null,"This test serves two primary purposes aimed at optimizing the testing and validation procedures:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Implementation Validation:\nBefore proceeding with the build or upload operations, users can utilize this feature to conduct a comprehensive assessment of their implementation. This step ensures the accuracy and preparedness of the model for deployment. The test encompasses the validation of custom configuration settings outlined in the\n",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_config.yaml")," file. ")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Inference Parameter Management:\nUsers are provided with the convenience of adding or updating inference parameters directly within the ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_config.yaml")," file. Additionally, the system performs automatic validation during the inference process to guarantee the accuracy and compatibility of these parameters with the model's requirements. The test ensures that only defined inference parameters with appropriate values can be utilized."))),(0,o.yg)("p",null,"Example test case for text input,"),(0,o.yg)(r.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},c))),(0,o.yg)("p",null,"Click ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-python/blob/master/clarifai/models/model_serving/docs/concepts.md#testpy"},"here")," to know more about test files and clarifai_config.yaml file."),(0,o.yg)("p",null,"Each model built for inference with triton requires certain dependencies & dependency versions to be installed for successful inference execution.  Therefore the next step is to add the required dependencies into ",(0,o.yg)("inlineCode",{parentName:"p"},"requirements.txt")," file."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai\ntorch=2.1.1\ntransformers==4.36.2\naccelerate==0.26.1\n")),(0,o.yg)("h2",{id:"deployment"},"Deployment"),(0,o.yg)("p",null,"In order to prepare for deployment we will have to build the files. This process will generate ",(0,o.yg)("inlineCode",{parentName:"p"},"*.clarifai")," zip file which contains all the necessary files to get your model to work on the Clarifai platform. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai build model\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"You need to upload your built file to a cloud storage service in order to obtain a direct download URL for the next step.")),(0,o.yg)("p",null,"Since we have all the files ready let\u2019s proceed to deploy the model using the following commands,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai login\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},u)),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai upload model --url <url> --user-app <your_user_id>/<your_app_id> --id <your_model_id>\n")),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"For the demo, we are going to upload an open-source visual segmentation model from Huggingface. Run the following commands step by step on a Google Colab instance or your local machine."),(0,o.yg)("p",null,"The first step is to install the required libraries,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"pip install clarifai\n")),(0,o.yg)("p",null,"Using the Clarifai CLI users can initialize a model from  the Clarifai Examples repository into your working directory by executing the following,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai create model --from-example --working-dir my_dir\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The ",(0,o.yg)("inlineCode",{parentName:"p"},"--working-dir")," parameter will create a directory. ")),(0,o.yg)("p",null,"From the list of available models let\u2019s choose a visual segmenter as an  example, "),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Image Output"),(0,o.yg)("img",{src:"/img/python-sdk/model_upload1.png",width:"700",height:"700"})),(0,o.yg)("p",null,"The CLI will then clone all the required files for ",(0,o.yg)("inlineCode",{parentName:"p"},"visual_segmenter"),"  directly onto the working directory."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Image Output"),(0,o.yg)("img",{src:"/img/python-sdk/model_upload2.png",width:"700",height:"700"})),(0,o.yg)("p",null,"Once we are inside the ",(0,o.yg)("inlineCode",{parentName:"p"},"my_dir")," directory, we can download the model checkpoint from HuggingFace into a ",(0,o.yg)("inlineCode",{parentName:"p"},"checkpoint")," directory."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"huggingface-cli download mattmdjaga/segformer_b2_clothes --local-dir my_dir/checkpoint --local-dir-use-symlinks False --exclude *.safetensors optimizer.pt\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},p)),(0,o.yg)("p",null,"Next, install the dependencies from the requirements.txt file,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"pip install -r my_dir/requirements.txt\n")),(0,o.yg)("p",null,"Before moving on to the build process we have to make some changes in the ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_config.yml")," file. You will have to add ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_model_id")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_user_app_id")," with the respective values.\nExample changes made to the ",(0,o.yg)("inlineCode",{parentName:"p"},"clarifai_config.yml")," file are given below,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai_model:\n  clarifai_model_id: 'segmentation_model'\n  clarifai_user_app_id: '8tzpjy1a841y/transfer_learn_3'\n  description: ''\n  inference_parameters: []\n  labels:\n  - background\n  - hat\n  - hair\n  - sunglass\n  - upper-clothes\n  - skirt\n  - pants\n  - dress\n  - belt\n  - left-shoe\n  - right-shoe\n  - face\n  - left-leg\n  - right-leg\n  - left-arm\n  - right-arm\n  - bag\n  - scarf\n  type: visual-segmenter\nserving_backend:\n  triton:\n    max_batch_size: 4\n")),(0,o.yg)("p",null,"After installing the dependencies and modifying the config file, we have to build the model and upload the ",(0,o.yg)("inlineCode",{parentName:"p"},"model.clarifai")," file to cloud storage."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai build model ./my_dir\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},m)),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"You can use the model from this URL for the model upload demo: ",(0,o.yg)("inlineCode",{parentName:"p"},"https://s3.amazonaws.com/samples.clarifai.com/model.clarifai"),".")),(0,o.yg)("p",null,"Now let's log in to the Clarifai using CLI,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai login\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},u)),(0,o.yg)("p",null,"The last and final step is to upload the model onto Clarifai\u2019s platform,"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"clarifai upload model my_dir --url https://s3.amazonaws.com/samples.clarifai.com/model.clarifai\n")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Output"),(0,o.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},g)))}x.isMDXComponent=!0}}]);