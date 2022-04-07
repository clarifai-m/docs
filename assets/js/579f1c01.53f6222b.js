"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7777],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,s=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:s},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),s=n(7294),o=n(2389),r=n(9443);var i=function(){var e=(0,s.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3616),p=n(6010),c="tabItem_vU9c";function u(e){var t,n,o,r=e.lazy,u=e.block,d=e.defaultValue,_=e.values,m=e.groupId,h=e.className,f=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=_?_:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=i(),T=E.tabGroupChoices,I=E.setTabGroupChoices,D=(0,s.useState)(v),w=D[0],k=D[1],y=[],P=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=T[m];null!=O&&O!==w&&g.some((function(e){return e.value===O}))&&k(O)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),a=g[n].value;a!==w&&(P(t),k(a),null!=m&&I(m,a))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.currentTarget)+1;n=y[a]||y[0];break;case"ArrowLeft":var s=y.indexOf(e.currentTarget)-1;n=y[s]||y[y.length-1]}null==(t=n)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},h)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return y.push(e)},onKeyDown:N,onFocus:x,onClick:x},o,{className:(0,p.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),r?(0,s.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function d(e){var t=(0,o.Z)();return s.createElement(u,(0,a.Z)({key:String(t)},e))}},3415:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return _}});var a=n(7462),s=n(3366),o=(n(7294),n(3905)),r=n(6396),i=n(8215),l=n(9055),p=["components"],c={description:"Develop your own custom text classifier.",sidebar_position:4},u="Custom Text Model",d={unversionedId:"api-guide/model/custom-text-model-walkthrough",id:"api-guide/model/custom-text-model-walkthrough",title:"Custom Text Model",description:"Develop your own custom text classifier.",source:"@site/docs/api-guide/model/custom-text-model-walkthrough.md",sourceDirName:"api-guide/model",slug:"/api-guide/model/custom-text-model-walkthrough",permalink:"/docs/api-guide/model/custom-text-model-walkthrough",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-guide/model/custom-text-model-walkthrough.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Develop your own custom text classifier.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom Models",permalink:"/docs/api-guide/model/custom-model-walkthrough"},next:{title:"Models: Create, Update, Get, Delete",permalink:"/docs/api-guide/model/create-get-update-and-delete"}},_=[{value:"Create a New Application",id:"create-a-new-application",children:[],level:2},{value:"Add a Batch of Texts",id:"add-a-batch-of-texts",children:[],level:2},{value:"Wait for Inputs to Download",id:"wait-for-inputs-to-download",children:[],level:2},{value:"Create a Custom Model",id:"create-a-custom-model",children:[],level:2},{value:"Train the Model",id:"train-the-model",children:[],level:2},{value:"Wait for Model Training to Complete",id:"wait-for-model-training-to-complete",children:[],level:2},{value:"Predict on New Inputs",id:"predict-on-new-inputs",children:[],level:2},{value:"Start Model Evaluation",id:"start-model-evaluation",children:[],level:2},{value:"Wait for Model Evaluation Results",id:"wait-for-model-evaluation-results",children:[],level:2}],m={toc:_};function h(e){var t=e.components,n=(0,s.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-text-model"},"Custom Text Model"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Develop your own custom text classifier")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Clarifai API has the ability not only to learn concepts from images and videos, but from texts as well."),(0,o.kt)("p",null,"In this walkthrough, you'll learn how to create and use a custom text model, learn from your own text data using the power of the Clarifai's base Text model, and predict on new text examples."),(0,o.kt)("p",null,"The steps below can all be done via ",(0,o.kt)("a",{parentName:"p",href:"https://portal.clarifai.com"},"the Clarifai's portal"),". But here you'll learn how to do them programmatically via an API, using our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/clarifai-python-grpc"},"gRPC Python client"),"."),(0,o.kt)("p",null,"The examples below map directly to any of our other gRPC clients."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The walkthrough assumes you have already created your Clarifai's user account and the ",(0,o.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/settings/authentication"},"Personal Access Token"),". Also, first set up the gRPC Python client together with the initial code. See the ",(0,o.kt)("a",{parentName:"p",href:"../api-overview/api-clients#client-installation-instructions"},"client installation page.")))),(0,o.kt)("p",null,"For debugging purposes, each response returned by a method call can be printed to the console, and its entire data and structure will be shown verbosely."),(0,o.kt)("h2",{id:"create-a-new-application"},"Create a New Application"),(0,o.kt)("p",null,"The first step is manual. In the Clarifai Portal, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/getting-started/applications/create-an-application"},"create a new application")," with ",(0,o.kt)("strong",{parentName:"p"},"Text")," selected as the Base Workflow."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/clarifai-api/img3/prod/large/e12ce254f2824b0ab2aef1b10784ff23/3e695b780f597cd263b06d0aeb30b3d1?v=001",alt:null})),(0,o.kt)("h2",{id:"add-a-batch-of-texts"},"Add a Batch of Texts"),(0,o.kt)("p",null,"We'll now add several text inputs that we will later use as training data in our custom model. The idea is that we'll create a model which can differentiate between positive and negative sentences ","(","in a grammatical sense",")",". "),(0,o.kt)("p",null,"We'll mark each input with one of the two concepts: ",(0,o.kt)("inlineCode",{parentName:"p"},"positive")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"negative"),"."),(0,o.kt)("p",null,"The texts can be added either directly ","(","it's called raw",")"," or from a URL."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},'##########################################################################\n# In this section, we set the user authentication, app ID, and negative \n# and positive texts. Change these strings to run your own example.\n##########################################################################\n\nUSER_ID = \'YOUR_USER_ID_HERE\'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = \'YOUR_PAT_HERE\'\nAPP_ID = \'YOUR_APP_ID_HERE\'\n# Add your own batch of texts\npositive_raw_texts = [\n    "Marie is a published author.",\n    "In three years, everyone will be happy.",\n    "Nora Roberts is the most prolific romance writer the world has ever known.",\n    "She has written more than 225 books.",\n    "If you walk into Knoxville, you\'ll find a shop named Rala.",\n    "There are more than 850 miles of hiking trails in the Great Smoky Mountains.",\n    "Harrison Ford is 6\'1\\".",\n    "According to Reader\'s Digest, in the original script of Return of The Jedi, Han Solo died.",\n    "Kate travels to Doolin, Ireland every year for a writers\' conference.",\n    "Fort Stevens was decommissioned by the United States military in 1947.",\n]\nnegative_text_urls = [\n    "https://samples.clarifai.com/negative_sentence_1.txt",\n    "https://samples.clarifai.com/negative_sentence_2.txt",\n    "https://samples.clarifai.com/negative_sentence_3.txt",\n    "https://samples.clarifai.com/negative_sentence_4.txt",\n    "https://samples.clarifai.com/negative_sentence_5.txt",\n    "https://samples.clarifai.com/negative_sentence_6.txt",\n    "https://samples.clarifai.com/negative_sentence_7.txt",\n    "https://samples.clarifai.com/negative_sentence_8.txt",\n    "https://samples.clarifai.com/negative_sentence_9.txt",\n    "https://samples.clarifai.com/negative_sentence_10.txt",\n]\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = ((\'authorization\', \'Key \' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_inputs_response = stub.PostInputs(\n    service_pb2.PostInputsRequest(\n        user_app_id=userDataObject,\n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(raw=raw_text),\n                    concepts=[resources_pb2.Concept(id="positive", value=1)]\n                )\n            )\n            for raw_text in positive_raw_texts\n        ] + [\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    text=resources_pb2.Text(\n                        url=text_url,\n                        allow_duplicate_url=True\n                    ),\n                    concepts=[resources_pb2.Concept(id="negative", value=1)]\n                )\n            )\n            for text_url in negative_text_urls\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_inputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_inputs_response.status)\n    raise Exception("Failed response, status: " + post_inputs_response.status.description)\n\n# Uncomment this line to see the structure and data of the response\n#print(post_inputs_response)'))),(0,o.kt)("h2",{id:"wait-for-inputs-to-download"},"Wait for Inputs to Download"),(0,o.kt)("p",null,"Let's now wait for all the inputs to download."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},'###############################################################\n# In this section, we set the user authentication and app ID. \n# Change these strings to run your own example.\n###############################################################\n\nUSER_ID = \'YOUR_USER_ID_HERE\'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = \'YOUR_PAT_HERE\'\nAPP_ID = \'YOUR_APP_ID_HERE\'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nimport time\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = ((\'authorization\', \'Key \' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwhile True:\n    list_inputs_response = stub.ListInputs(\n        service_pb2.ListInputsRequest(\n            user_app_id=userDataObject,\n            page=1,\n            per_page=100\n        ),\n        metadata=metadata\n    )\n    \n    if list_inputs_response.status.code != status_code_pb2.SUCCESS:\n        print(list_inputs_response.status)\n        raise Exception("Failed response, status: " + list_inputs_response.status.description)\n\n    for the_input in list_inputs_response.inputs:\n        input_status_code = the_input.status.code\n        if input_status_code == status_code_pb2.INPUT_DOWNLOAD_SUCCESS:\n            continue\n        elif input_status_code in (status_code_pb2.INPUT_DOWNLOAD_PENDING, status_code_pb2.INPUT_DOWNLOAD_IN_PROGRESS):\n            print("Not all inputs have been downloaded yet. Checking again shortly.")\n            break\n        else:\n            error_message = (\n                    str(input_status_code) + " " +\n                    the_input.status.description + " " +\n                    the_input.status.details\n            )\n            raise Exception(\n                f"Expected inputs to download, but got {error_message}. Full response: {list_inputs_response}"\n            )\n    else:\n        # Once all inputs have been successfully downloaded, break the while True loop\n        print("All inputs have been successfully downloaded.")\n        break\n    time.sleep(2)'))),(0,o.kt)("h2",{id:"create-a-custom-model"},"Create a Custom Model"),(0,o.kt)("p",null,"Now we can create a custom model that's going to be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"positive")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"negative")," concepts. "),(0,o.kt)("p",null,"All inputs ","(","in our application",")"," associated with these two concepts will be used as training data, once we actually train the model."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"#############################################################################\n# In this section, we set the user authentication, app ID, and the ID of the \n# model we want to create. Change these strings to run your own example.\n#############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to create your own custom model\nMODEL_ID = 'text-model-1' \n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_models_response = stub.PostModels(\n    service_pb2.PostModelsRequest(\n        user_app_id=userDataObject,\n        models=[\n            resources_pb2.Model(\n                id=MODEL_ID,\n                output_info=resources_pb2.OutputInfo(\n                    data=resources_pb2.Data(\n                        concepts=[\n                            resources_pb2.Concept(id=\"positive\"),\n                            resources_pb2.Concept(id=\"negative\"),\n                        ]\n                    ),\n                    output_config=resources_pb2.OutputConfig(closed_environment=True)\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_models_response.status.code != status_code_pb2.SUCCESS:\n    print(post_models_response.status)\n    raise Exception(\"Failed response, status: \" + post_models_response.status.description)\n\n# Uncomment this line to see the structure and data of the response\n#print(post_models_response)"))),(0,o.kt)("h2",{id:"train-the-model"},"Train the Model"),(0,o.kt)("p",null,"Let's train the model. This will make it learn from the inputs so that we can later use it to predict new text examples. "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"#############################################################################\n# In this section, we set the user authentication, app ID, and the ID of the \n# model we want to train. Change these strings to run your own example.\n#############################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to train your own custom model\nMODEL_ID = 'text-model-1' \n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_versions_response = stub.PostModelVersions(\n    service_pb2.PostModelVersionsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID\n    ),\n    metadata=metadata\n)\n\nif post_model_versions_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_versions_response.status)\n    raise Exception(\"Failed response, status: \" + post_model_versions_response.status.description)\n\n# Uncomment this line to see the structure and data of the response\n#print(post_model_versions_response)"))),(0,o.kt)("h2",{id:"wait-for-model-training-to-complete"},"Wait for Model Training to Complete"),(0,o.kt)("p",null,"Let's wait for the model training to complete."),(0,o.kt)("p",null,"Each model training produces a new model version. Notice that on the bottom of the following code example, we placed the model version ID into its own variable."),(0,o.kt)("p",null,"We'll be using it later to specify which specific model version we want to use ","(","since a model can have multiple versions",")","."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"###############################################################################\n# In this section, we set the user authentication, app ID, and the ID of the \n# model to wait for its training. Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change this to wait for your own model's training\nMODEL_ID = 'text-model-1' \n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nimport time\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwhile True:\n    get_model_response = stub.GetModel(\n        service_pb2.GetModelRequest(\n             user_app_id=userDataObject,\n            model_id=MODEL_ID\n        ),\n        metadata=metadata\n    )\n    \n    if get_model_response.status.code != status_code_pb2.SUCCESS:\n        print(get_model_response.status)\n        raise Exception(\"Failed response, status: \" + get_model_response.status.description)\n\n    version_status_code = get_model_response.model.model_version.status.code\n    if version_status_code == status_code_pb2.MODEL_TRAINED:\n        print(\"The model has been successfully trained.\")\n        break\n    elif version_status_code in (status_code_pb2.MODEL_QUEUED_FOR_TRAINING, status_code_pb2.MODEL_TRAINING):\n        print(\"The model hasn't been trained yet. Trying again shortly.\")\n        time.sleep(2)\n    else:\n        error_message = (\n                str(get_model_response.status.code) + \" \" +\n                get_model_response.status.description + \" \" +\n                get_model_response.status.details\n        )\n        raise Exception(\n            f\"Expected model to train, but got {error_message}. Full response: {get_model_response}\"\n        )\n\nmodel_version_id = get_model_response.model.model_version.id\n"))),(0,o.kt)("h2",{id:"predict-on-new-inputs"},"Predict on New Inputs"),(0,o.kt)("p",null,"Let's now use the trained custom model to predict new text examples."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"###########################################################################\n# In this section, we set the user authentication, app ID, model details, \n# and new input samples. Change these strings to run your own example.\n###########################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to make your own predictions\nMODEL_ID = 'text-model-1'\nMODEL_VERSION_ID = '49219b5968624221ac488303dde55327' \nINPUT_TEXT = 'Butchart Gardens contains over 900 varieties of plants.'\nINPUT_URL = 'https://samples.clarifai.com/negative_sentence_12.txt'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        # By default, the latest model version will be used, but it doesn't hurt to set it explicitly\n        version_id=MODEL_VERSION_ID,\n        inputs=[\n            resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(raw=INPUT_TEXT))),\n            resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(url=INPUT_URL))),\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_outputs_response.status)\n    raise Exception(\"Failed response, status: \" + post_model_outputs_response.status.description)\n\nfor output in post_model_outputs_response.outputs:\n    text_object = output.input.data.text\n    val = text_object.raw if text_object.raw else text_object.url\n\n    print(f\"The following concepts were predicted for the input `{val}`:\")\n    for concept in output.data.concepts:\n        print(f\"\\t{concept.name}: {concept.value:.2f}\")\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Code Output Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"The following concepts were predicted for the input `Butchart Gardens contains over 900 varieties of plants.`:\n    positive: 0.83\n    negative: 0.17\nThe following concepts were predicted for the input `https://samples.clarifai.com/negative_sentence_12.txt`:\n    negative: 1.00\n    positive: 0.00\n"))),(0,o.kt)("h2",{id:"start-model-evaluation"},"Start Model Evaluation"),(0,o.kt)("p",null,"Let's now test the performance of the model by using model evaluation. "),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"../evaluate"},"the Model Evaluation page")," to learn more."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"###########################################################################\n# In this section, we set the user authentication, app ID, model ID, \n# and model version. Change these strings to run your own example.\n###########################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to make your own evaluations\nMODEL_ID = 'text-model-1' \nMODEL_VERSION_ID = '49219b5968624221ac488303dde55327'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_version_metrics = stub.PostModelVersionMetrics(\n    service_pb2.PostModelVersionMetricsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID\n    ),\n    metadata=metadata\n)\n\nif post_model_version_metrics.status.code != status_code_pb2.SUCCESS:\n    print(post_model_version_metrics.status)\n    raise Exception(\"Failed response, status: \" + post_model_version_metrics.status.description)\n\nprint(post_model_version_metrics)"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"JSON Output Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'status {\n  code: SUCCESS\n  description: "Ok"\n  req_id: "967dfe6d8d59d4eaa3b7c7b71bfb190b"\n}\nmodel_version {\n  id: "49219b5968624221ac488303dde55327"\n  created_at {\n    seconds: 1646391865\n    nanos: 51793000\n  }\n  status {\n    code: MODEL_TRAINED\n    description: "Model is trained and ready"\n  }\n  active_concept_count: 2\n  metrics {\n    status {\n      code: MODEL_EVALUATED\n      description: "Model was successfully evaluated."\n    }\n    summary {\n      macro_avg_roc_auc: 1.0\n      macro_avg_f1_score: 1.0\n      macro_avg_precision: 1.0\n      macro_avg_recall: 1.0\n    }\n  }\n  total_input_count: 158\n  completed_at {\n    seconds: 1646391870\n    nanos: 501850000\n  }\n  visibility {\n    gettable: PRIVATE\n  }\n  app_id: "my-text-model"\n  user_id: "ei2leoz3s3iy"\n  metadata {\n  }\n}\n'))),(0,o.kt)("h2",{id:"wait-for-model-evaluation-results"},"Wait for Model Evaluation Results"),(0,o.kt)("p",null,"Model evaluation takes some time; depending on the amount of data the model has. "),(0,o.kt)("p",null,"Let's wait for it to complete, and print all the results that it gives us."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"#################################################################################\n# In this section, we set the user authentication, app ID, and the model to wait\n# for its evaluation results. Change these strings to run your own example.\n#################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to wait for your own model's evaluation results\nMODEL_ID = 'text-model-1' \nMODEL_VERSION_ID = '49219b5968624221ac488303dde55327'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nimport time\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\nwhile True:\n    get_model_version_metrics_response = stub.GetModelVersionMetrics(\n        service_pb2.GetModelVersionMetricsRequest(\n            user_app_id=userDataObject,\n            model_id=MODEL_ID,\n            version_id=MODEL_VERSION_ID,\n            fields=resources_pb2.FieldsValue(\n                confusion_matrix=True,\n                cooccurrence_matrix=True,\n                label_counts=True,\n                binary_metrics=True,\n                test_set=True,\n                metrics_by_area=True,\n                metrics_by_class=True,\n            )\n        ),\n        metadata=metadata\n    )\n    \n    if get_model_version_metrics_response.status.code != status_code_pb2.SUCCESS:\n        print(get_model_version_metrics_response.status)\n        raise Exception(\"Get model version metrics failed: \" + get_model_version_metrics_response.status.description)\n    \n    metrics_status_code = get_model_version_metrics_response.model_version.metrics.status.code\n    if metrics_status_code == status_code_pb2.MODEL_EVALUATED:\n        print(\"The model has been successfully evaluated.\")\n        break\n    elif metrics_status_code in (status_code_pb2.MODEL_NOT_EVALUATED, status_code_pb2.MODEL_QUEUED_FOR_EVALUATION, status_code_pb2.MODEL_EVALUATING):\n        print(\"The model hasn't been evaluated yet. Trying again shortly.\")\n        time.sleep(2)\n    else:\n        error_message = (\n                str(get_model_version_metrics_response.status.code) + \" \" +\n                get_model_version_metrics_response.status.description + \" \" +\n                get_model_version_metrics_response.status.details\n        )\n        raise Exception(\n            f\"Expected model to evaluate, but got {error_message}. Full response: {get_model_version_metrics_response}\"\n        )\n\nprint(\"The model metrics response object:\")\nprint(get_model_version_metrics_response)\n"))))}h.isMDXComponent=!0}}]);