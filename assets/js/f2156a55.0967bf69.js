"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7890],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),i=n(72389),o=n(79443);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(63616),u=n(86010),c="tabItem_vU9c";function d(e){var t,n,i,o=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,f=e.className,_=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:_.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(t=null!=p?p:null==(n=_.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=_[0])?void 0:i.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=s(),x=w.tabGroupChoices,y=w.setTabGroupChoices,k=(0,r.useState)(b),T=k[0],C=k[1],I=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var S=x[h];null!=S&&S!==T&&v.some((function(e){return e.value===S}))&&C(S)}var D=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==T&&(E(t),C(a),null!=h&&y(h,a))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},f)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:N,onFocus:D,onClick:D},i,{className:(0,u.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(_.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},73906:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(26396),s=n(58215),l=n(19055),u=["components"],c={description:"Enjoy the convenience of working with CSV files and text.",sidebar_position:4},d="Batch Predict CSV on Custom Text Model",p={unversionedId:"api-guide/advanced-topics/batch-predict-csv-on-custom-text-model",id:"api-guide/advanced-topics/batch-predict-csv-on-custom-text-model",title:"Batch Predict CSV on Custom Text Model",description:"Enjoy the convenience of working with CSV files and text.",source:"@site/docs/api-guide/advanced-topics/batch-predict-csv-on-custom-text-model.md",sourceDirName:"api-guide/advanced-topics",slug:"/api-guide/advanced-topics/batch-predict-csv-on-custom-text-model",permalink:"/api-guide/advanced-topics/batch-predict-csv-on-custom-text-model",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Enjoy the convenience of working with CSV files and text.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/api-guide/advanced-topics/pagination"},next:{title:"Intelligent Document Processing",permalink:"/api-guide/advanced-topics/intelligent-document-processing"}},m=[{value:"Example Usage",id:"example-usage",children:[],level:2}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"batch-predict-csv-on-custom-text-model"},"Batch Predict CSV on Custom Text Model"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enjoy the convenience of working with CSV files and text")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Below is a script that can be used to run predictions on a batch of text/sentences stored in a CSV file, using your custom text model."),(0,i.kt)("p",null,"To start, you'll need to create your own Custom Text Model, either via ",(0,i.kt)("a",{parentName:"p",href:"../../portal-guide/model/pcustom-model-walkthrough"},"our Portal")," or ",(0,i.kt)("a",{parentName:"p",href:"../model/custom-model-walkthrough"},"using the API"),"."),(0,i.kt)("p",null,"Make sure to record the model ID and version ID that you want to use ","(","each model gets a version ID after being successfully trained",")",", as well as the API key of the application in which the model exists."),(0,i.kt)("p",null,'This script assumes that you have a CSV file which has one column named "text" where the text you want to run predictions on is. It\'ll output another CSV file containing the predicted concepts for each text, together with confidence values.'),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"nlp_model_predicts.py",label:"nlp_model_predicts.py",default:!0,mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"\"\"\"\nA script designed for running bulk NLP model predictions on a .csv file of text entries.\nIt requires the library clarifai_grpc (to install it: `pip install clarifai_grpc`).\n\nMandatory arguments:\n- a CSV file with a \"text\" column; additional columns will be included/returned in the output file\n- a Clarifai API KEY\n- the model ID of the NLP model that you wish to predict with\n- the specific model version ID for the above NLP model\n\nOptional/Default arguments:\n- the \"top n\" number of results to be returned from the model predictions. default 3. [1-200]\n- the batch size or number of inputs to send in per predict call. default 32. max 128.\n\nExample usage:\npython nlp_model_predicts --csv_file CSVFILE --api_key API_KEY --model_id MODEL_ID --model_version MODEL_VERSION\n\nExample input CSV file:\ntext,random_column_1\n\"The quick brown fox something something.\",perhaps_some_data\n\"The lazy dog is...\",some_other_data\n\nExample output CSV file:\ntext,predict_1_concept,predict_1_value\n\"The quick brown fox something something.\",predicted_concept,0.873\n\"The lazy dog is...\",predicted_concept,0.982\n\"\"\"\n\nimport argparse\nimport csv\nimport os\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\n\ndef chunker(seq, size):\n    return (seq[pos:pos + size] for pos in range(0, len(seq), size))\n\n\ndef get_predict(texts, stub, model_id, model_version, auth_metadata, top_n):\n    \"\"\"\n    inputs:\n    \u2022 texts: a list of text to run predictions on\n    \u2022 auth_metadata: (('authorization', 'Key YOUR_API_KEY'),)\n    \u2022 top_n: integer for the desired max number of returned concepts [limit 20]\n\n    returns:\n    \u2022 the original text\n    \u2022 predict_n_concept : predicted concept ID\n    \u2022 predict_n_value   : predict concept value\n    \"\"\"\n\n    if len(texts) > 128:\n        raise Exception('Input length over maximum batch size. Please send in batches less than 128.')\n\n    inputs = [\n        resources_pb2.Input(data=resources_pb2.Data(text=resources_pb2.Text(raw=x)))\n        for x in texts\n    ]\n\n    # make the model predict request\n    request = service_pb2.PostModelOutputsRequest(\n        model_id=model_id,\n        version_id=model_version,\n        inputs=inputs,\n    )\n\n    response = stub.PostModelOutputs(request, metadata=auth_metadata)\n\n    if response.status.code != status_code_pb2.SUCCESS:\n        raise Exception(\"A failed response: \" + str(response.status) + \"\\n\\nFull response:\\n\" + str(response))\n\n    # parse results\n    list_of_dicts = []\n    for resp in response.outputs:\n        temp_dict = {\n            'text': resp.input.data.text.raw\n        }\n\n        for n in range(top_n):\n            try:\n                temp_dict['predict_{}_concept'.format(n + 1)] = resp.data.concepts[n].id\n                temp_dict['predict_{}_value'.format(n + 1)] = \"%.3f\" % resp.data.concepts[n].value\n            except Exception as e:\n                print(e)\n                break\n\n        list_of_dicts.append(temp_dict)\n\n    return list_of_dicts\n\n\ndef main():\n    parser = argparse.ArgumentParser(\n        description=\n        'Given a CSV file with a \"text\" column, provide NLP model predictions.'\n    )\n    parser.add_argument('--api_key', required=True, help='the app\\'s API key', type=str)\n    parser.add_argument('--csv_file', required=True, help='the CSV file with texts', type=str)\n    parser.add_argument('--model_id', required=True, help='the model ID', type=str)\n    parser.add_argument(\n        '--model_version', required=True, help='the specific model version ID', type=str)\n    parser.add_argument(\n        '--top_n', default=3, type=int, help='num results returned. default 3. max 200.')\n    parser.add_argument(\n        '--batch_size', default=32, type=int, help='prediction batch size. default 32. max 128')\n\n    args = parser.parse_args()\n\n    # setup the gRPC channel\n    channel = ClarifaiChannel.get_json_channel()\n    stub = service_pb2_grpc.V2Stub(channel)\n    metadata = (('authorization', f'Key {YOUR_API_KEY}'.format(args.api_key)),)\n\n    texts = []\n    with open(args.csv_file) as f:\n        csv_reader = csv.DictReader(f)\n        for row in csv_reader:\n            if 'text' not in row:\n                raise Exception('The CSV file must contain column with a header named text')\n\n            texts.append(row['text'])\n\n    predicted_data = []\n    # run model predictions in batches\n    for i, texts_chunk in enumerate(chunker(texts, args.batch_size)):\n        print(\"Predicting chunk #\" + str(i + 1))\n        predicted_data.extend(get_predict(texts_chunk, stub, args.model_id, args.model_version, metadata, args.top_n))\n\n    output_name = os.path.splitext(args.csv_file)[0] + '_results.csv'\n    print('Results saved to {}'.format(output_name))\n\n    with open(output_name, 'w') as f:\n        csv_writer = csv.DictWriter(f, fieldnames=predicted_data[0].keys())\n        csv_writer.writeheader()\n        csv_writer.writerows(predicted_data)\n\n\nif __name__ == '__main__':\n    main()"))),(0,i.kt)("h2",{id:"example-usage"},"Example Usage"),(0,i.kt)("p",null,'Let\'s say you have the following CSV file, and you want to predict whether the sentence is grammatically positive or negative for each text in a row. You first build a custom text model that was created to map text into two concepts: "positive" and "negative. '),(0,i.kt)("p",null,"See our ",(0,i.kt)("a",{parentName:"p",href:"../model/custom-text-model-walkthrough"},"Custom Text Model walkthrough")," on how to do that via our API."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"my_data.csv",label:"my_data.csv",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'number,text\n1,"We have never been to Asia, nor have we visited Africa."\n2,"I am never at home on Sundays."\n3,"One small action would change her life, but whether it would be for better or for worse was yet to be determined."\n4,"The waitress was not amused when he ordered green eggs and ham."\n5,"In that instant, everything changed."\n')),(0,i.kt)("p",null,"With that, you can run the script on the CSV file in the following manner, which will produce a new CSV file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python nlp_model_predicts.py --api_key YOUR_API_KEY --model_id YOUR_MODEL_ID --model_version YOUR_MODEL_VERSION_ID --csv_file my_data.csv --top_n 2\n")))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"my_data_results.csv",label:"my_data_results.csv",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'text,predict_1_concept,predict_1_value,predict_2_concept,predict_2_value\n"We have never been to Asia, nor have we visited Africa.",negative,1.000,positive,0.000\nI am never at home on Sundays.,negative,1.000,positive,0.000\n"One small action would change her life, but whether it would be for better or for worse was yet to be determined.",positive,1.000,negative,0.000\nThe waitress was not amused when he ordered green eggs and ham.,negative,1.000,positive,0.000\n"In that instant, everything changed.",positive,0.998,negative,0.002\n')))))}f.isMDXComponent=!0}}]);