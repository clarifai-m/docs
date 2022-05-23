"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5245],{58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return h}});var t=a(87462),r=a(67294),s=a(72389),i=a(79443);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=a(63616),u=a(86010),l="tabItem_vU9c";function p(e){var n,a,s,i=e.lazy,p=e.block,h=e.defaultValue,d=e.values,m=e.groupId,g=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,c.lx)(b,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===h?h:null!=(n=null!=h?h:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(s=f[0])?void 0:s.props.value;if(null!==_&&!b.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),w=y.tabGroupChoices,C=y.setTabGroupChoices,S=(0,r.useState)(_),T=S[0],N=S[1],I=[],k=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==T&&b.some((function(e){return e.value===E}))&&N(E)}var P=function(e){var n=e.currentTarget,a=I.indexOf(n),t=b[a].value;t!==T&&(k(n),N(t),null!=m&&C(m,t))},D=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=I.indexOf(e.currentTarget)+1;a=I[t]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;a=I[r]||I[I.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},g)},b.map((function(e){var n=e.value,a=e.label,s=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:P,onClick:P},s,{className:(0,u.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":T===n})}),null!=a?a:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function h(e){var n=(0,s.Z)();return r.createElement(p,(0,t.Z)({key:String(n)},e))}},45259:function(e,n,a){a.r(n),a.d(n,{contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return d}});var t=a(87462),r=a(63366),s=(a(67294),a(3905)),i=a(26396),o=a(58215),c=a(19055),u=["components"],l={description:"Group or separate items in your dataset.",sidebar_position:1},p="Combine or Negate",h={unversionedId:"api-guide/search/legacy-search/combine-or-negate",id:"api-guide/search/legacy-search/combine-or-negate",title:"Combine or Negate",description:"Group or separate items in your dataset.",source:"@site/docs/api-guide/search/legacy-search/combine-or-negate.md",sourceDirName:"api-guide/search/legacy-search",slug:"/api-guide/search/legacy-search/combine-or-negate",permalink:"/api-guide/search/legacy-search/combine-or-negate",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Group or separate items in your dataset.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Legacy Search",permalink:"/api-guide/search/legacy-search/"},next:{title:"Filter",permalink:"/api-guide/search/legacy-search/filter"}},d=[],m={toc:d};function g(e){var n=e.components,a=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"combine-or-negate"},"Combine or Negate"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Group or separate items in your dataset")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"You can also combine searches using AND."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The initialization code used in the following example is outlined in detail on the ",(0,s.kt)("a",{parentName:"p",href:"../../api-overview/api-clients#client-installation-instructions"},"client installation page.")))),(0,s.kt)(i.Z,{mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-python",mdxType:"CodeBlock"},"################################################################################\n# In this section, we set the user authentication, app ID, and the concepts we  \n# we want to search by. Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to search by your own concepts\nCONCEPT_ID_1 = 'cat'\nCONCEPT_ID_2 = 'dog'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\n# Here we search for images which we labeled with \"cat\" and for which the General prediction model does not find\n# a \"dog\" concept.\npost_searches_response = stub.PostSearches(\n    service_pb2.PostSearchesRequest(\n        user_app_id=userDataObject,\n        query=resources_pb2.Query(\n            ands=[\n                resources_pb2.And(\n                    input=resources_pb2.Input(  # Setting Input indicates we search for images that have the concept(s)\n                                                # which we added to the input manually.\n                        data=resources_pb2.Data(\n                            concepts=[\n                                resources_pb2.Concept(\n                                    name=CONCEPT_ID_1,\n                                    value=1\n                                )\n                            ]\n                        )\n                    )\n                ),\n                resources_pb2.And(\n                    output=resources_pb2.Output(  # Setting Output indicates we search for images that have the concept(s)\n                                                  # which were predicted by the General model.\n                        data=resources_pb2.Data(\n                            concepts=[\n                                resources_pb2.Concept(\n                                    name=CONCEPT_ID_2,\n                                    value=0\n                                )\n                            ]\n                        )\n                    )\n                )\n            ]\n        )\n    ),\n    metadata=metadata\n)\n\nif post_searches_response.status.code != status_code_pb2.SUCCESS:\n    print(post_searches_response.status)\n    raise Exception(\"Post searches failed, status: \" + post_searches_response.status.description)\n\nprint(\"Found inputs:\")\nfor hit in post_searches_response.hits:\n    print(\"\\tScore %.2f for %s\" % (hit.score, hit.input.id))")),(0,s.kt)(o.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,s.kt)(c.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the concepts we  \n// we want to search by. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to search by your own concepts\nconst CONCEPT_ID_1 = \'cat\';\nconst CONCEPT_ID_2 = \'dog\';\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\n// Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n// a "dog" concept\n\nstub.PostSearches(\n    {\n        user_app_id: {\n            user_id: USER_ID,\n            app_id: APP_ID\n        },\n        query: {\n            ands: [\n                {\n                    input: {  // Setting Input indicates we search for images that have the concept(s)\n                        // which we added to the input manually\n                        data: {\n                            concepts: [\n                                {\n                                    name: CONCEPT_ID_1,\n                                    value: 1\n                                }\n                            ]\n                        }\n                    }\n                },\n                {\n                    output: {  // Setting Output indicates we search for images that have the concept(s)\n                        // which were predicted by the General model\n                        data: {\n                            concepts: [\n                                {\n                                    name: CONCEPT_ID_2,\n                                    value: 0\n                                }\n                            ]\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post searches failed, status: " + response.status.description);\n        }\n\n        console.log("Found inputs:");\n        for (const hit of response.hits) {\n            console.log("\\tScore " + hit.score + " for " + hit.input.id);\n        }\n    }\n);')),(0,s.kt)(o.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'import com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.*;\n\n// Insert here the initialization code as outlined on this page:\n// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions\n\n// Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n// a "dog" concept.\nMultiSearchResponse postSearchesResponse = stub.postSearches(\n    PostSearchesRequest.newBuilder().setQuery(\n        Query.newBuilder()\n            .addAnds(\n                And.newBuilder().setInput( // Setting Input indicates we search for images that have the concept(s)\n                                           // which we added to the input manually.\n                    Input.newBuilder().setData(\n                        Data.newBuilder().addConcepts(\n                            Concept.newBuilder()\n                                .setName("cat")\n                                .setValue(1f)\n                        )\n                    )\n                )\n            )\n            .addAnds(\n                And.newBuilder().setOutput(  // Setting Output indicates we search for images that have the concept(s)\n                                             // which were predicted by the General model.\n                    Output.newBuilder().setData(\n                        Data.newBuilder().addConcepts(\n                            Concept.newBuilder()\n                                .setName("dog")\n                                .setValue(0f)\n                        )\n                    )\n                )\n            )\n    )\n    .build()\n);\n\nif (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n  throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());\n}\n\nSystem.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");\nfor (Hit hit : postSearchesResponse.getHitsList()) {\n    System.out.printf("\\tScore %.2f for %s\\n", hit.getScore(), hit.getInput().getId());\n}\n'))),(0,s.kt)(o.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"app.inputs.search([\n  { input: { url: 'https://samples.clarifai.com/puppy.jpeg' } },\n  { concept: { name: 'cat', type: 'input' } },\n  { concept: { name: 'dog' } }\n]).then(\n  function(response) {\n    // do something with response\n  },\n  function(err) {\n    // there was an error\n  }\n);\n"))),(0,s.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from clarifai.rest import ClarifaiApp, InputSearchTerm, OutputSearchTerm, SearchQueryBuilder\napp = ClarifaiApp(api_key='YOUR_API_KEY')\n\nterm1 = InputSearchTerm(concept='cat')\nterm2 = OutputSearchTerm(concept='dog', value=False)\nterm3 = OutputSearchTerm(url=\"https://samples.clarifai.com/metro-north.jpg\")\n\nquery = SearchQueryBuilder()\nquery.add_term(term1)\nquery.add_term(term2)\nquery.add_term(term3)\n\napp.inputs.search(query)\n"))),(0,s.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'client.searchInputs()\n    .ands(\n        SearchClause.matchUserTaggedConcept(Concept.forName("cat")),\n        SearchClause.matchConcept(Concept.forName("dog").withValue(false)),\n        SearchClause.matchImageVisually(ClarifaiImage.of("https://samples.clarifai.com/metro-north.jpg"))\n    )\n    .getPage(1)\n    .executeSync();\n'))),(0,s.kt)(o.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Threading.Tasks;\nusing Clarifai.API;\nusing Clarifai.DTOs.Searches;\n\nnamespace YourNamespace\n{\n    public class YourClassName\n    {\n        public static async Task Main()\n        {\n            var client = new ClarifaiClient("YOUR_API_KEY");\n\n            await client.SearchInputs(\n                    SearchBy.UserTaggedConceptName("cat"),\n                    SearchBy.ConceptName("dog"),\n                    SearchBy.ImageURL("https://samples.clarifai.com/metro-north.jpg"))\n                .Page(1)\n                .ExecuteAsync();\n        }\n    }\n}\n'))),(0,s.kt)(o.Z,{value:"objective-c",label:"Objective-C",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-objectivec"},'//Search for inputs that are predicted as "fast" and visually similar to the given image.\nClarifaiConcept *conceptFromGeneralModel = [[ClarifaiConcept alloc] initWithConceptName:@"fast"];\nClarifaiSearchTerm *term1 = [ClarifaiSearchTerm searchByPredictedConcept:conceptFromGeneralModel];\n\nClarifaiSearchTerm *term2 = [ClarifaiSearchTerm searchVisuallyWithImageURL:@"https://samples.clarifai.com/metro-north.jpg"];\n\n[_app search:@[term1, term2] page:@1 perPage:@20 completion:^(NSArray<ClarifaiSearchResult *> *results, NSError *error) {\n  // Print output of first search result.\n  NSLog(@"inputID: %@", results[0].inputID);\n  NSLog(@"URL: %@", results[0].mediaURL);\n  NSLog(@"probability of input matching search query: %@", results[0].score);\n}];\n'))),(0,s.kt)(o.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'use Clarifai\\API\\ClarifaiClient;\nuse Clarifai\\DTOs\\Searches\\SearchBy;\nuse Clarifai\\DTOs\\Searches\\SearchInputsResult;\n\n$client = new ClarifaiClient(\'YOUR_API_KEY\');\n\n$response = $client->searchInputs([\n        SearchBy::userTaggedConceptName(\'cat\'),\n        SearchBy::conceptName(\'dog\'),\n        SearchBy::imageURL(\'https://samples.clarifai.com/metro-north.jpg\')\n    ])\n    ->executeSync();\n\nif ($response->isSuccessful()) {\n    echo "Response is successful.\\n";\n\n    /** @var SearchInputsResult $result */\n    $result = $response->get();\n\n    foreach ($result->searchHits() as $searchHit) {\n        echo $searchHit->input()->id() . \' \' . $searchHit->score() . "\\n";\n    }\n} else {\n    echo "Response is not successful. Reason: \\n";\n    echo $response->status()->description() . "\\n";\n    echo $response->status()->errorDetails() . "\\n";\n    echo "Status code: " . $response->status()->statusCode();\n}\n'))),(0,s.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n# a "dog" concept.\n\ncurl -X POST \\\n  -H "Authorization: Key {api-key}" \\\n  -H "Content-Type: application/json" \\\n-d \'\n{\n    "query": {\n        "ands": [\n            {\n                "input":{\n                    "data": {\n                        "concepts": [\n                            {\n                                "name": "cat",\n                                "value": 1\n                            }\n                        ]\n                    }\n                }\n            },\n            {\n                "output": {\n                    "data": {\n                        "concepts": [\n                            {\n                                "name": "dog",\n                                "value": 0\n                            }\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n}\'\\\nhttps://api.clarifai.com/v2/searches\n')))))}g.isMDXComponent=!0}}]);