"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9368],{85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(86010);const s="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(s,r),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>D});var a=t(87462),o=t(67294),s=t(86010),r=t(12466),i=t(76775),l=t(91980),c=t(67392),p=t(50012);function u(e){return function(e){var n;return(null==(n=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:n.filter(Boolean))??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function d(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function _(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=d(e),[r,i]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!_({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,c]=h({queryString:t,groupId:a}),[u,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,p.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=l??u;return _({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{m&&i(m)}),[m]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!_({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var m=t(72389);const b="tabList__CuJ",g="tabItem_LNqP";function w(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=c[t].value;a!==i&&(u(n),l(a))},_=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}null==(n=t)||n.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>p.push(e),onKeyDown:_,onClick:d},r,{className:(0,s.Z)("tabs__item",g,null==r?void 0:r.className,{"tabs__item--active":i===n})}),t??n)})))}function E(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function I(e){const n=f(e);return o.createElement("div",{className:(0,s.Z)("tabs-container",b)},o.createElement(w,(0,a.Z)({},e,n)),o.createElement(E,(0,a.Z)({},e,n)))}function D(e){const n=(0,m.Z)();return o.createElement(I,(0,a.Z)({key:String(n)},e))}},58299:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=t(87462),o=(t(67294),t(3905)),s=t(74866),r=t(85162),i=t(90814);const l={description:"Use facial recognition to identify individual people.",sidebar_position:3},c="Custom KNN Face Classifier Workflow",p={unversionedId:"api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough",id:"api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough",title:"Custom KNN Face Classifier Workflow",description:"Use facial recognition to identify individual people.",source:"@site/docs/api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough.md",sourceDirName:"api-guide/workflows/common-workflows",slug:"/api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough",permalink:"/api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Use facial recognition to identify individual people.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Auto Annotation",permalink:"/api-guide/workflows/common-workflows/auto-annotation-walkthrough"},next:{title:"Visual Text Recognition",permalink:"/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough"}},u={},d=[{value:"Create a New Application",id:"create-a-new-application",level:2},{value:"Add Images",id:"add-images",level:2},{value:"Wait for Upload &amp; Map IDs to URLs",id:"wait-for-upload--map-ids-to-urls",level:2},{value:"List the Annotations",id:"list-the-annotations",level:2},{value:"Post New Annotations",id:"post-new-annotations",level:2},{value:"Create a KNN Model",id:"create-a-knn-model",level:2},{value:"Create a Workflow",id:"create-a-workflow",level:2},{value:"Predict",id:"predict",level:2}],_={toc:d};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-knn-face-classifier-workflow"},"Custom KNN Face Classifier Workflow"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use facial recognition to identify individual people")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Let's say you want to build a face recognition system that is able to differentiate between persons of whom you only have a few samples ","(","per person",")",". Machine learning models generally require a large inputs dataset to be able to classify the inputs well."),(0,o.kt)("p",null,"When a large dataset is the luxury you do not have, we recommend using our ",(0,o.kt)("strong",{parentName:"p"},"KNN Classifier Model"),", which uses k-nearest neighbor search and plurality voting amongst the nearest neighbors to classify new instances. It's recommended when you only have a small dataset like one input per concept."),(0,o.kt)("p",null,"In this walkthrough, you'll learn how to create a KNN classifier that's going to work based off the Clarifai's base Face model. The whole process below is going to be done programmatically, using the Clarifai's powerful API."),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Each of the steps below can also be done manually on ",(0,o.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/"},"the Clarifai Portal"),".")),(0,o.kt)("h2",{id:"create-a-new-application"},"Create a New Application"),(0,o.kt)("p",null,"The first step is manual: in the Clarifai Portal, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application/"},"create a new application")," with ",(0,o.kt)("strong",{parentName:"p"},"Face")," selected as the Base Workflow."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The initialization code used in the following examples is outlined in detail on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page."))),(0,o.kt)("h2",{id:"add-images"},"Add Images"),(0,o.kt)("p",null,"Add images that contain the faces you want to use as a training set."),(0,o.kt)("p",null,"Since the application's base model is Face, after adding an image, faces are automatically located and are available to be annotated."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"#############################################################################\n# In this section, we set the user authentication, app ID, and the URLs of \n# the images we want to add. Change these strings to run your own example.\n#############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to add your own images\nIMAGE_URL_1 = 'https://samples.clarifai.com/model-gallery/images/face-001.jpg'\nIMAGE_URL_2 = 'https://samples.clarifai.com/model-gallery/images/face-003.jpg'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\nimage_urls = [\n    IMAGE_URL_1,\n    IMAGE_URL_2\n]\npost_inputs_response = stub.PostInputs(\n    service_pb2.PostInputsRequest(\n        user_app_id=userDataObject,  \n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(url=url)\n                )\n            )\n            for url in image_urls\n        ]\n    ),\n    metadata=metadata\n)\n\n\nif post_inputs_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception(\"Failed response, status: \" + str(post_inputs_response.status))\n"))),(0,o.kt)("h2",{id:"wait-for-upload--map-ids-to-urls"},"Wait for Upload & Map IDs to URLs"),(0,o.kt)("p",null,"Now we'll wait for all the images to finish uploading, and then create a dictionary mapping from an input ID to the URL. This will help us to annotate the proper image in the next step."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},'################################################################\n# In this section, we set the user authentication and app ID. \n# Change these strings to run your own example.\n################################################################\n\nUSER_ID = \'YOUR_USER_ID_HERE\'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = \'YOUR_PAT_HERE\'\nAPP_ID = \'YOUR_APP_ID_HERE\'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nimport time\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = ((\'authorization\', \'Key \' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\nwhile True:\n    list_inputs_response = stub.ListInputs(\n        service_pb2.ListInputsRequest(\n            user_app_id=userDataObject,  \n            page=1, \n            per_page=100\n        ),\n        metadata=metadata\n    )\n\n    if list_inputs_response.status.code != status_code_pb2.SUCCESS:\n        raise Exception("Failed response, status: " + str(list_inputs_response.status))\n\n    for the_input in list_inputs_response.inputs:\n        input_status_code = the_input.status.code\n        if input_status_code == status_code_pb2.INPUT_DOWNLOAD_SUCCESS:\n            continue\n        elif input_status_code in (status_code_pb2.INPUT_DOWNLOAD_PENDING, status_code_pb2.INPUT_DOWNLOAD_IN_PROGRESS):\n            print("Not all inputs have been downloaded yet. Checking again shortly.")\n            break\n        else:\n            error_message = (\n                    str(input_status_code) + " " +\n                    the_input.status.description + " " +\n                    the_input.status.details\n            )\n            raise Exception(\n                f"Expected inputs to download, but got {error_message}. Full response: {list_inputs_response}"\n            )\n    else:\n        # Once all inputs have been successfully downloaded, break the while True loop\n        print("All inputs have been successfully downloaded.")\n        break\n    time.sleep(2)\n\n\ninput_id_to_url = {inp.id: inp.data.image.url for inp in list_inputs_response.inputs} # Note that we\'ll use input_id_to_url in the next List the Annotations example\n\nprint(list_inputs_response)'))),(0,o.kt)("h2",{id:"list-the-annotations"},"List the Annotations"),(0,o.kt)("p",null,"Let's now print all the regions that the Face base model detected on our images."),(0,o.kt)("p",null,"The code below prints the annotations together with the model version ID and region ID. These two IDs will be needed in the next step to annotate using our custom concepts. We'll also need the base Face model ID, which is the one where ",(0,o.kt)("inlineCode",{parentName:"p"},"model_version_id")," equals to ",(0,o.kt)("inlineCode",{parentName:"p"},"embedding_model_version_id"),"."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},'################################################################\n# In this section, we set the user authentication and app ID. \n# Change these strings to run your own example.\n################################################################\n\nUSER_ID = \'YOUR_USER_ID_HERE\'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = \'YOUR_PAT_HERE\'\nAPP_ID = \'YOUR_APP_ID_HERE\'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = ((\'authorization\', \'Key \' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\nlist_annotations_response = stub.ListAnnotations(\n    service_pb2.ListAnnotationsRequest(\n        user_app_id=userDataObject,  \n        list_all_annotations=True, \n        page=1, \n        per_page=100\n    ),\n    metadata=metadata\n)\n\nif list_annotations_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception("Failed response, status: " + str(list_annotations_response.status))\n\n\nfor annotation in list_annotations_response.annotations:\n    if not annotation.data or not annotation.data.regions:\n        continue\n    # Display results only for the base Face model.\n    if annotation.model_version_id != annotation.embed_model_version_id:\n        continue\n    for region in annotation.data.regions:\n        bbox = region.region_info.bounding_box\n        print(f"Face was detected on input ID {annotation.input_id} (URL: {input_id_to_url[annotation.input_id]})") # input_id_to_url is from the previous Wait for Upload & Map IDs to URLs method\n        print(f"\\tRegion ID: {region.id}")\n        print(f"\\tRegion location: left={bbox.left_col:.4f}, top={bbox.top_row:.4f}, right={bbox.right_col:.4f}, bottom={bbox.bottom_row:.4f}")\n        print(f"\\tConfidence: {region.value:.2f}")\n        print(f"\\tBase Face model version ID: {annotation.embed_model_version_id}")\n        print()\n\n'))),(0,o.kt)("h2",{id:"post-new-annotations"},"Post New Annotations"),(0,o.kt)("p",null,"Let's use the above information to add annotations, in the form of a concept, to the detected face regions."),(0,o.kt)("p",null,"Input below the IDs from the previous call, and choose your concept ID and name that you want to annotate the region with ","(","you may want to use e.g. person's name",")","."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, and the details of the \n# annotations we want to add. Change these strings to run your own example.\n##################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to add your own annotations\nINPUT_ID = '509188e5bc4a458cba90c05ed41e669c'\nEMBED_MODEL_VERSION_ID = 'fc3b8814fbe54533a3d80a1896dc9884'\nREGION_ID = '521c21ac6a7df00d95eb91c670758763'\nCONCEPT_ID = 'concept-id'\nCONCEPT_NAME = 'concept-name'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\npost_annotations_response = stub.PostAnnotations(\n    service_pb2.PostAnnotationsRequest(\n        user_app_id=userDataObject,  \n        annotations=[\n            resources_pb2.Annotation(\n                input_id=INPUT_ID,\n                embed_model_version_id=EMBED_MODEL_VERSION_ID,\n                data=resources_pb2.Data(\n                    regions=[\n                        resources_pb2.Region(\n                            id=REGION_ID,\n                            data=resources_pb2.Data(\n                                concepts=[\n                                    resources_pb2.Concept(\n                                        id=CONCEPT_ID,\n                                        name=CONCEPT_NAME,\n                                        value=1 # 1 means true, this concept is present\n                                    )\n                                ]\n                            )\n                        )\n                    ]\n                )\n\n            )\n        ],\n    ),\n    metadata=metadata\n)\n\nif post_annotations_response.status.code != status_code_pb2.SUCCESS:    \n    raise Exception(\"Failed response, status: \" + str(post_annotations_response.status))\n"))),(0,o.kt)("h2",{id:"create-a-knn-model"},"Create a KNN Model"),(0,o.kt)("p",null,"Let's now create a KNN model using the concept IDs that were added above. The model type ID should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"knn-concept"),"."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, and the details of the \n# KNN model we want to create. Change these strings to run your own example.\n##################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to create your own KNN model\nMODEL_ID = 'my-knn-face-classifier-model'\nCONCEPT_ID_1 = 'concept-id-1'\nCONCEPT_ID_2 = 'concept-id-2'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\npost_models_response = stub.PostModels(\n    service_pb2.PostModelsRequest(\n        user_app_id=userDataObject,  \n        models=[\n            resources_pb2.Model(\n                id=MODEL_ID,\n                model_type_id=\"knn-concept\",\n                output_info=resources_pb2.OutputInfo(\n                    data=resources_pb2.Data(\n                        concepts=[\n                            resources_pb2.Concept(id=CONCEPT_ID_1),\n                            resources_pb2.Concept(id=CONCEPT_ID_2)\n                        ]\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_models_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception(\"Failed response, status: \" + str(post_models_response.status))\n"))),(0,o.kt)("h2",{id:"create-a-workflow"},"Create a Workflow"),(0,o.kt)("p",null,"One last step before making predictions: let's create a workflow that's going to map from the base Face model to our custom KNN model."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, and the details of the \n# workflow we want to create. Change these strings to run your own example.\n##################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to create your own workflow\nWORKFLOW_ID = 'detect-knn-workflow'\nWORKFLOWNODE_ID_1 = 'face-v1.3-embed'\nEMBEDDING_MODEL_ID = 'd02b4508df58432fbb84e800597b8959'\nEMBEDDING_MODEL_VERSION_ID = '6ca3b762008e419583258aca49b88401'\nWORKFLOWNODE_ID_2 = 'knn-classifier'\nMODEL_ID = 'my-knn-face-classifier-model'\nMODEL_VERSION_ID = '66cddf2be70543fab654cbe91724495c'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\npost_workflows_response = stub.PostWorkflows(\n    service_pb2.PostWorkflowsRequest(\n        user_app_id=userDataObject,  \n        workflows=[\n            resources_pb2.Workflow(\n                id=WORKFLOW_ID,\n                nodes=[\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_1,\n                        model=resources_pb2.Model(\n                            id=EMBEDDING_MODEL_ID,  # This is the base Face model ID\n                            model_version=resources_pb2.ModelVersion(\n                                id=EMBEDDING_MODEL_VERSION_ID  # This is the base Face model version ID\n                            )\n                        )\n                    ),\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_2, \n                        model=resources_pb2.Model(\n                            id=MODEL_ID, \n                            model_version=resources_pb2.ModelVersion(\n                                id=MODEL_VERSION_ID\n                            )\n                        )\n                    ),\n                ]\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_workflows_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception(\"Failed response, status: \" + str(post_workflows_response.status))\n"))),(0,o.kt)("h2",{id:"predict"},"Predict"),(0,o.kt)("p",null,"We're going to run a prediction on the workflow created above."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, and the details of the \n# prediction we want to make. Change these strings to run your own example.\n##################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to run your own prediction\nWORKFLOW_ID = 'detect-knn-workflow'\nURL_TO_PREDICT_FACES_ON = 'https://samples.clarifai.com/model-gallery/images/face-005.jpg'\nMODEL_ID = 'my-knn-face-classifier-model'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\npost_workflow_results_response = stub.PostWorkflowResults(\n    service_pb2.PostWorkflowResultsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        workflow_id=WORKFLOW_ID,\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=URL_TO_PREDICT_FACES_ON\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\n# We get back one result per input. Since there's one input above, one input was returned\nresult = post_workflow_results_response.results[0]\n\nfor output in result.outputs:\n    # At this point, two outputs will be returned: one for the base Face model, and the other for our custom model.\n    # At this moment, we are only interested in the results of the latter model (if you want, you may also see the\n    # half-baked results of the base Face model, which is not a list of concepts, but an embedding vector)\n    if output.model.id != MODEL_ID:\n        continue\n    print(f\"The prediction of the model ID `{output.model.id}` is:\")\n    for concept in output.data.concepts:\n        print(f\"\\t{concept.name} (id: {concept.id}): {concept.value:.4f}\")\n"))))}h.isMDXComponent=!0}}]);