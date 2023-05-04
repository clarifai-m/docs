"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1303],{85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(87462),o=n(67294),i=n(86010),s=n(12466),r=n(16550),l=n(91980),u=n(67392),p=n(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=c(e),[s,r]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),_=(()=>{const e=l??d;return m({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{_&&r(_)}),[_]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);r(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var _=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==r&&(d(t),l(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},s,{className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function k(e){const t=(0,_.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},83918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>h});var a=n(87462),o=(n(67294),n(3905)),i=n(74866),s=n(85162),r=n(90814);const l='import os\n\nfrom pdf2image import convert_from_path\n\ndef pdf_to_page_images(file_path):\n    """return an iterable of images that span the pages of the document"""\n    assert os.path.exists(file_path), f"file not found: {file_path}"\n    pdf_images = convert_from_path(file_path)\n\n    return pdf_images',u='#!/usr/bin/env python3\nimport io\nimport os\nimport json\nimport time\nimport argparse\n\nfrom pdf2image import convert_from_path\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_pb2, status_code_pb2\n\n\ndef pdf_to_page_images(file_path):\n    """return an iterable of images that span the pages of the document"""\n    assert os.path.exists(file_path), f"file not found: {file_path}"\n    pdf_images = convert_from_path(file_path)\n\n    return pdf_images\n\ndef post_image_bytes_as_input(image_bytes, stub, metadata):\n    """post an image in bytes format to the platform as an input"""\n    post_inputs_response = stub.PostInputs(  # what is an intellgent way to handle these platform objects? Obvi singleton object that acts as a unified permissions manager...  \n        service_pb2.PostInputsRequest(\n            inputs=[\n                resources_pb2.Input(\n                    data=resources_pb2.Data(\n                        image=resources_pb2.Image(\n                            base64=image_bytes\n                        )\n                    )\n                ) \n            ]    \n        ),\n        metadata=metadata\n    )\n\n    return post_inputs_response\n\ndef image_to_bytes(img):\n    """convert a PIL image object to a byte array"""\n    byte_arr = io.BytesIO()\n    img.save(byte_arr, format=\'PNG\')\n    return byte_arr.getvalue()\n\ndef pixels_to_proportions(coordinates, image):\n    """\n    This function expects a sequence of coordinates as inputs, along with the image it corresponds to.\n    That is, something like: $[(x_0, y_0), (x_1, y_1), ..., (x_n, y_n)]$\n    """\n    w, h = image.size\n    output = []\n\n    for (x, y) in coordinates:\n        # x /= w\n        # y /= h\n        output.append((x/w, y/h))\n\n    return output\n\n\ndef proportions_to_pixels(coordinates, image):\n    """see docstring for `pixels_to_proportions`"""\n    w, h = image.size\n    output = []\n    for (x, y) in coordinates:\n        output.append((x*w, y*h))\n\n    return output\n\ndef unpack_tuple_list(a):\n    """flatten a nested list. Currently fixed at a depth of k=2."""\n    return [i for sub in a for i in sub]\n\ndef grouped(iterable, n):\n    """h/t https://stackoverflow.com/a/5389547\n    Given the iterable `S`, and the integer n\n    $S \\to (s_{0,0}, s_{0,1}, s_{0,2}, \\dots, s_{0, n-1}), \\ldots, (s_{m,0}, s_{m,1} , s_{m,2},...s_{m, n-1})$\n    """\n    return zip(*[iter(iterable)]*n)\n\ndef read_json_fields(json_file):\n    """\n    parse the document fields defined in json_file\n    """\n    with open(json_file, \'rb\') as f:\n        d = json.load(f)\n\n    for k, v in d.items():\n        yield k, v\n\n\ndef _hold_for_upload(asset_id, stub, metadata, t=.5):\n    """function that will halt the program while we wait for the input to finish uploading"""\n    from itertools import count\n    for i in count():\n        get_inputs_response = stub.GetInput(\n            request=service_pb2.GetInputRequest(\n                input_id=asset_id,\n            ),\n            metadata=metadata\n        )\n        assert get_inputs_response.status.code == status_code_pb2.SUCCESS\n\n        if get_inputs_response.input.status.code == status_code_pb2.INPUT_DOWNLOAD_SUCCESS:\n            break\n        else:\n            time.sleep(t)\n            continue\n\n    return True \n\n\ndef predict_text(image, model_id, stub, metadata):\n    """return the text value output by the specified OCR model. This is """\n    image_bytes = image_to_bytes(image)\n\n    post_model_outputs_response = stub.PostModelOutputs(\n        service_pb2.PostModelOutputsRequest(\n            model_id=model_id,\n            inputs=[\n                resources_pb2.Input(\n                    data=resources_pb2.Data(\n                        image=resources_pb2.Image(\n                            base64=image_bytes\n                        )\n                    )\n                )\n            ]\n        ),\n        metadata=metadata\n    )\n    if post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n        raise Exception("Post model outputs failed, status: " + post_model_outputs_response.status.description)\n\n    predicted_text = post_model_outputs_response.outputs[0].data.text.raw\n\n    return predicted_text\n\ndef make_concept(concept, value=1.):\n    """create a concept object. Note: By default this will create a positive association - value=1. - with the concept."""\n    return resources_pb2.Concept(id=concept, value=value)\n\ndef coords_to_bbox(x0, y0, x1, y1):\n    """create a BoundingBox object from a set of 2d Cartesian coordinates"""\n    return resources_pb2.BoundingBox(\n        left_col=x0,\n        top_row=y0,\n        right_col=x1,\n        bottom_row=y1\n    )\n\ndef make_annotation(input_id, coords, body, stub, metadata, *concepts):\n    """we\'re going to simply post a single region annotation at a time"""\n    post_annotations_response = stub.PostAnnotations(\n        service_pb2.PostAnnotationsRequest(\n            annotations=[\n                resources_pb2.Annotation(\n                    input_id=input_id,\n                    data=resources_pb2.Data(\n                        regions=[\n                            resources_pb2.Region(\n                                region_info=resources_pb2.RegionInfo(\n                                    bounding_box=coords_to_bbox(*coords),\n                                    text=resources_pb2.Text(raw=body)\n                                ),\n                                data=resources_pb2.Data(\n                                    concepts=[make_concept(concept) for concept in concepts],\n                                )\n                            )\n                        ]\n                    ),\n                ),\n            ]\n        ),\n        metadata=metadata\n    )\n\n    if post_annotations_response.status.code != status_code_pb2.SUCCESS:\n        raise Exception("Post annotations failed, status: " + post_annotations_response.status.description)    \n\n    return post_annotations_response\n\ndef main(args):\n    # initialize the Clarifai client\n    print(args)\n    channel = ClarifaiChannel.get_json_channel()\n    stub = service_pb2_grpc.V2Stub(channel)\n\n    metadata = ((\'authorization\', f\'Key {args.api_key}\'),)\n\n    # import the pdf document, and convert it to an iterable of images for the pages\n    doc, *_ = pdf_to_page_images(args.file) # we know our document is only one page, so we isolate the first item in the iterable. Isomorphic to pdf_to_page_images(args.file)[0]\n    doc_bytes = image_to_bytes(doc)\n\n    # post the doc as an input\n    post_input_response = post_image_bytes_as_input(doc_bytes, stub, metadata)\n\n    doc_id = post_input_response.inputs[0].id  # we know there will only be one input, given the setup above\n    \n    print(f"[DOC] - {doc_id}")\n    _ = _hold_for_upload(doc_id, stub, metadata)  # ensure that the input is uploaded, so that we can annotate the regions-of-interest\n\n    doc_fields = read_json_fields(args.layout)    \n\n    for field, value in doc_fields:\n        relative_coords = grouped(value, 2)  # xy-coords -> n=2\n        pixel_coords = proportions_to_pixels(relative_coords, doc)\n        pixel_coords_flat = unpack_tuple_list(pixel_coords)\n\n        # get a crop of the region\n        region = doc.crop(pixel_coords_flat)\n\n        # predicted text in cropped region\n        predicted_text = predict_text(region, args.model_id, stub, metadata)\n        print("\\t-", f"{field} | {predicted_text}")\n\n        post_annotation_response = make_annotation(doc_id, tuple(value), predicted_text, stub, metadata, field)\n\n        if post_annotation_response.status.code != status_code_pb2.SUCCESS:\n            breakpoint()\n\n    print("Done.")\n\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser()\n    parser.add_argument(\'-f\', \'--file\', type=str, help="File path to the PDF document you would like to parse and annotate.")\n    parser.add_argument(\'-k\', \'--api_key\', type=str, help="The Clarifai API key associate with your application.")\n    parser.add_argument(\'-m\', \'--model_id\', type=str, help="The ID of the Clarifai model you would like to use for OCR.", default=\'eng-ocr\')\n    parser.add_argument(\'-l\', \'--layout\', type=str, help="Path to the JSON file in which the document layout is defined.", default=\'assets/field_regions.json\')\n\n    args = parser.parse_args()\n\n    _ = main(args)\n',p={description:"Capture information from an organization's form that are stored as PDF documents.",sidebar_position:5},d="Intelligent Document Processing",c={unversionedId:"api-guide/advanced-topics/intelligent-document-processing",id:"api-guide/advanced-topics/intelligent-document-processing",title:"Intelligent Document Processing",description:"Capture information from an organization's form that are stored as PDF documents.",source:"@site/docs/api-guide/advanced-topics/intelligent-document-processing.md",sourceDirName:"api-guide/advanced-topics",slug:"/api-guide/advanced-topics/intelligent-document-processing",permalink:"/api-guide/advanced-topics/intelligent-document-processing",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Capture information from an organization's form that are stored as PDF documents.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Batch Predict CSV on Custom Text Model",permalink:"/api-guide/advanced-topics/batch-predict-csv-on-custom-text-model"},next:{title:"Dataset Export",permalink:"/api-guide/advanced-topics/export_labels"}},m={},h=[{value:"Introduction",id:"introduction",level:2},{value:"The Use Case",id:"the-use-case",level:3},{value:"Assumptions",id:"assumptions",level:3},{value:"Setup",id:"setup",level:2},{value:"Full implementation",id:"full-implementation",level:2}],f={toc:h},_="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(_,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intelligent-document-processing"},"Intelligent Document Processing"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Capture information from an organization's form that are stored as PDF documents")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this series of posts, advanced users at Clarifai will present working solutions to help you kick-start your own AI solutions."),(0,o.kt)("h3",{id:"the-use-case"},"The Use Case"),(0,o.kt)("p",null,"There is a problem facing many organizations as they attempt to modernize: digitizing documents.\nIn order to effectively gain insights from their old paper records, organizations must transform them into digital versions."),(0,o.kt)("p",null,"Now, simply making a digital copy of a document is actually rather easy\u2060\u2014simply scan it or take its photo.\nThe problem, though, is that while this changes how the document is stored, it doesn't give you any real improvements to accessing the data therein."),(0,o.kt)("p",null,"Previously, this required a laborious, manual, data entry process. Someone would have to transcribe the documents one-by-one, and enter each field into the books.\nThis presents a problem to organizations that potentially have thousands and thousands of documents in their records, which can be intractable when it comes to the time and cost of the effort.\nLuckily, there's a middle-ground."),(0,o.kt)("p",null,"Using Clarifai's publicly available Optical Character Recognition (OCR) models, organizations can leverage Artifical Intelligence to both do this in a quick and cost-effective manner, and without sacrificing the insights they would have from recording every single value.  "),(0,o.kt)("h3",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,"Before we begin, let us make some assumptions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'The forms are standardized with static regions for fixed values; for example, the "name" field will always appear in the same location across all forms;'),(0,o.kt)("li",{parentName:"ol"},"All the entries will be in English, using the Roman alphabet;"),(0,o.kt)("li",{parentName:"ol"},"The organizations have a simple means of converting their paper documents to pdf documents, and storing them to a local file system, which is a common feature on most commercial print stations;"),(0,o.kt)("li",{parentName:"ol"},"All the forms will be type-filled, not handwritten, so as to make generating examples easier.")),(0,o.kt)("p",null,"These assumptions were largely made to make this example succinct and easily digestable."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"Before we get to the implementation, let's take a moment to provide an overview thereof."),(0,o.kt)("p",null,"First off, the broad strokes have already been laid out: convert pdf to image, use Clarifai for OCR, and from that you'll have the text, which you then store in order to access later.\nClearly, there are some gaps that need to be filled in though\u2060\u2014the largest of which is just ",(0,o.kt)("em",{parentName:"p"},"how")," the document will be processed."),(0,o.kt)("p",null,"Working backwards a bit, the way in which the information will be recorded will be highly dependent on the organization's data policies.\nSo to simplify things, we will utilize Clarifai's platform to store the annotated documents."),(0,o.kt)("p",null,"Given assumption 1 above, we know that the fields will be in fixed locations.\nThis means we can define those ahead of time, and here we've chosen to do so using a JSON file, in which we define the document's structure in a manner similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "field_1": [0.25, 0.25, 0.50, 0.50],\n    "field_2": [0.50, 0.25, 0.75, 0.50],\n    .\n    .\n    .\n    "field_n": [0.25, 0.75, 0.50, 1.00]\n}\n')),(0,o.kt)("p",null,"Each key-value pair in the JSON file corresponds to the field name, the key (",(0,o.kt)("inlineCode",{parentName:"p"},'"field_n"'),"), and the region coordinates in the form of $","[x_0, y_0, x_1, y_1]","$."),(0,o.kt)("admonition",{title:"note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"All the region coordinates on Clarifai are relative, not pixel values. This is important, as other image processing libraries might use the pixel values instead.\nWe will address converting between these values below.")),(0,o.kt)("p",null,"Given that we know the name of the field, and where it is on the image, we can easily iterate through all of these field values, and annotate the corresponding region on the image. Having the coordinate values will also let us take sub-crops of the document to use the OCR model to predict on; isolating the text associated with a given field."),(0,o.kt)("p",null,"With this, we have a more fleshed out plan:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We assume that the user is already familiar with basic platform usage, and has an account.\nIf more information is needed here, please find the appropriate section of the document in order to access more in-depth information.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Convert PDF to Image, and upload it on the Clarifai platform for storage."),(0,o.kt)("li",{parentName:"ol"},"Read values from the JSON where the form's fields and their locations are defined."),(0,o.kt)("li",{parentName:"ol"},"For each field and region:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Extract a sub-crop for the field;"),(0,o.kt)("li",{parentName:"ul"},"Use Clarifai's OCR model to predict the text associated with the field;"),(0,o.kt)("li",{parentName:"ul"},"Write the predicted text back to the input as an annotation.")))),(0,o.kt)("p",null,"Now let's dive into the implementation:"),(0,o.kt)("p",null,"Starting with the conversion of a PDF document to an image, we can handle this with the open-source library ",(0,o.kt)("inlineCode",{parentName:"p"},"pdf2image"),", which does exactly what the name suggests."),(0,o.kt)("p",null,"In order to be a bit more defensive with our programming, we will wrap the call to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pdf2image.convert_from_path")," method in a separate function, and do some quick sanity checking to make sure the PDF file exists."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},l))),(0,o.kt)("p",null,"This will return iterable images that correspond to the individual pages of the document."),(0,o.kt)("admonition",{title:"note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"For simplicity's sake, our form only has one page.")),(0,o.kt)("h2",{id:"full-implementation"},"Full implementation"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"intelligent_document_processing.py",label:"intelligent_document_processing.py",mdxType:"TabItem"},(0,o.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},u))))}g.isMDXComponent=!0}}]);