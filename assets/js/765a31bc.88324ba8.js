"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},30011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:1},r="Upcoming API Changes",l={unversionedId:"product-updates/upcoming-api-changes",id:"product-updates/upcoming-api-changes",title:"Upcoming API Changes",description:"Learn about scheduled API changes",source:"@site/docs/product-updates/upcoming-api-changes.md",sourceDirName:"product-updates",slug:"/product-updates/upcoming-api-changes",permalink:"/product-updates/upcoming-api-changes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Scribe LabelForce",permalink:"/data-labeling-services/labeling-services"},next:{title:"Changelog",permalink:"/product-updates/changelog"}},s={},d=[{value:"Upcoming Changes",id:"upcoming-changes",level:2},{value:"Completed Changes",id:"completed-changes",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upcoming-api-changes"},"Upcoming API Changes"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn about scheduled API changes")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here is a list of changes to the API that we want you to be aware of well in advance as they may affect how you use Clarifai's platform. These changes include scheduled downtime and other improvements in stability, performance or functionality of the Clarifai platform in order to better serve you as a customer. "),(0,i.kt)("p",null,"Some of these changes may not be backward compatible and thus require you to update how you call our APIs. We created this page with the mindset of being as transparent as possible so you can plan any corresponding changes in advance and minimize any interruptions to your usage of Clarifai."),(0,i.kt)("p",null,"The dates listed in the following tables are the date we plan to make the change. We may actually make the change in the days following the specified date. However, to be safe, your client-side code needs updating before that date to minimize any downtime to your applications."),(0,i.kt)("p",null,"We will continue to update this page regularly, so a good way to always stay up to date is to watch our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Clarifai/docs"},"documentation repo on GitHub"),"."),(0,i.kt)("h2",{id:"upcoming-changes"},"Upcoming Changes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Change"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"March 30th 2023"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"(Breaking change)"),"  ",(0,i.kt)("br",null),(0,i.kt)("br",null)," Critical changes to the use of PATs and API keys"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An upcoming version of Clarifai\u2019s API, 9.3, will significantly change how personal access tokens (PATs) and API keys work. We plan to implement this change on March 30, 2023, providing 45 days to change the way your applications authenticate on our platform.  ",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Terminology:")," If any of the terms used here are unfamiliar, you can check them in our ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary"},"glossary"),". Specifically, we mention ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary#model"},"models"),", ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary#workflow"},"workflows"),", ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary/#public"},"public"),", ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary/#private"},"private"),", ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary/#collaboration"},"collaboration"),", ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary/#organization"},"organization"),", and ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/glossary/#community"},"community"),".",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Why are we making this change?")," With PATs you can access resources for which you\u2019re a collaborator or teammate. You can also access public content shared by any user, in addition to all your private content across all of your apps. This simplifies the use of all the resources you have access to unlike using API keys that are restricted to a single application. PAT provides a consistent, secure, and robust authentication method. Finally, for Enterprise clients, Org functionality is PAT only and this change creates a consistent method of authentication across the platform.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"What is changing?")," Previously, you could use API keys to access any model, concept, or workflow owned by the app scoped to the API key, as well as those owned by the user ",(0,i.kt)("inlineCode",{parentName:"td"},"clarifai")," in the application ",(0,i.kt)("inlineCode",{parentName:"td"},"main"),". Now, accessing models or workflows owned by ",(0,i.kt)("inlineCode",{parentName:"td"},"clarifai")," in the application ",(0,i.kt)("inlineCode",{parentName:"td"},"main")," can only be done with a PAT tied to your account. To be specific:",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",null,"You must now use ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PATs")," to make API calls for resources that are outside the scope of your apps, such as Clarifai\u2019s models and workflows. While using a PAT, you must also specify the ",(0,i.kt)("inlineCode",{parentName:"td"},"USER_ID")," of the application owner, and the ",(0,i.kt)("inlineCode",{parentName:"td"},"APP_ID")," of the application that you\u2019re accessing. The legacy behavior allowed you to use the ",(0,i.kt)("inlineCode",{parentName:"td"},"USER_ID")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"APP_ID"),' of any application on the platform to access Clarifai models and workflows in the app "main". This change requires you to specify the ',(0,i.kt)("inlineCode",{parentName:"td"},"USER_ID")," (clarifai) and ",(0,i.kt)("inlineCode",{parentName:"td"},"APP_ID")," (main) associated with the application containing the resource (model, concept, workflow, etc)."),(0,i.kt)("li",null,"You will no longer be able to use ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys"},"API keys")," to access resources outside the application the API key is created in. With a key, there is no need to specify the user_id or the app_id as they are already part of the key. API keys will function as normal when accessing resources within the application the key is created in, but will no longer allow access to resources owned by the user ",(0,i.kt)("inlineCode",{parentName:"td"},"clarifai")," in the application ",(0,i.kt)("inlineCode",{parentName:"td"},"main"),"."),(0,i.kt)("li",null,"Since workflows are a collection of models, some of which may be references to models that are not in the same application as the workflow itself, you should also use PATs to interact with workflows. While API keys will still work for the time being for workflows in the same app as the API key that contains only models from that same app, this will be a very narrow use of workflows. Therefore, we recommend updating your code to use PATs when using workflows too."),(0,i.kt)("li",null,"The preferred method for accessing the Clarifai API moving forward is with a PAT. To avoid potential future breakage we recommend using a PAT. Of course, we will provide prior notice if additional behavior is going to change for API keys.")),"We hope and expect that this will not be a significant change for you. In order to implement it, you will need to ensure that you set the ",(0,i.kt)("inlineCode",{parentName:"td"},"PAT"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"USER_ID"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"APP_ID")," variables appropriately. There are examples using all of our supported languages on ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/api-guide/predict/images"},"this page"),", and we are available at any time if you need assistance or have any questions. The best place to contact us for support questions is our ",(0,i.kt)("a",{parentName:"td",href:"https://join.slack.com/t/clarifaicommunity/shared_invite/zt-1jehqesme-l60djcd3c_4a1eCV~uPUjQ"},"Community Slack"),", which is monitored by many of our support teams and is the fastest way to get help.",(0,i.kt)("br",null),(0,i.kt)("br",null),"We do apologize for any inconvenience this causes, however, we are confident that this is a positive change that will simplify the usage of the platform going forward and make it easier to leverage AI created by other people on our platform!",(0,i.kt)("br",null),(0,i.kt)("br",null),"Thank you for your understanding and please feel free to reach out for any help.")))),(0,i.kt)("h2",{id:"completed-changes"},"Completed Changes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Change"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"January 26th 2023"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of ",(0,i.kt)("inlineCode",{parentName:"td"},"closed_environment")," in Favor of ",(0,i.kt)("inlineCode",{parentName:"td"},"enrich_dataset")," For Creating Embedding-Classifier Models"),(0,i.kt)("td",{parentName:"tr",align:"left"},"When using the ",(0,i.kt)("strong",{parentName:"td"},"PostModels")," endpoint to create a custom embedding-classifier model, you could include the ",(0,i.kt)("inlineCode",{parentName:"td"},"closed_environment")," variable, as part of the ",(0,i.kt)("inlineCode",{parentName:"td"},"modelVersion.OutputInfo.OutputConfig")," struct. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," The variable accepted a Boolean value and specified whether a pre-stored dataset, of (usually) negative embeddings, should be added to the training process of your model. This generally leads to higher model accuracy without any additional effort on your end. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("ul",null,(0,i.kt)("li",null," If ",(0,i.kt)("inlineCode",{parentName:"td"},"closed_environment")," was set to ",(0,i.kt)("inlineCode",{parentName:"td"},"False"),", which was the default action, we would try to use additional negative embeddings during the training process. ",(0,i.kt)("em",{parentName:"td"},"However, the default action would fail if the underlying base model did not have negative embeddings.")," "),(0,i.kt)("li",null,"If it was set to ",(0,i.kt)("inlineCode",{parentName:"td"},"True"),", it meant that the user wanted a closed environment for the training and therefore we did not add additional negative embeddings. This worked for all embedding models."))," We plan to replace it with ",(0,i.kt)("inlineCode",{parentName:"td"},"enrich_dataset")," that is specified inside ",(0,i.kt)("inlineCode",{parentName:"td"},"modelVersion.TrainInfo.Params")," when creating embedding-classifiers, which is the only type of model that supports it. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," The ",(0,i.kt)("inlineCode",{parentName:"td"},"enrich_dataset")," variable will be implemented as an ",(0,i.kt)("inlineCode",{parentName:"td"},"ENUM")," instead of a ",(0,i.kt)("inlineCode",{parentName:"td"},"BOOL")," so that it can have two options: ",(0,i.kt)("inlineCode",{parentName:"td"},"Automatic")," (default) and ",(0,i.kt)("inlineCode",{parentName:"td"},"Disabled"),". ",(0,i.kt)("br",null),(0,i.kt)("br",null)," ",(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"Automatic")," means that if there are negative embeddings for a base model, we will use them\u2014and we won\u2019t use them if they\u2019re not available. ",(0,i.kt)("em",{parentName:"td"},"So, the training will not fail if the underlying embeddings do not have negative embeddings.")),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"Disabled")," means that we should not use the negative embeddings whether they are available or not. "))," That way, ",(0,i.kt)("inlineCode",{parentName:"td"},"enrich_dataset")," fixes the problem with ",(0,i.kt)("inlineCode",{parentName:"td"},"closed_environment"),". Previously, setting the ",(0,i.kt)("inlineCode",{parentName:"td"},"closed_environment")," variable to ",(0,i.kt)("inlineCode",{parentName:"td"},"False")," (the default value) would fail if the base model didn\u2019t have the negatives for it. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," This change will also affect the ",(0,i.kt)("strong",{parentName:"td"},"PostModelVersions")," endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"January 20, 2023"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Critical Updates to Model and Model Version Endpoints"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("h4",null,"Old Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Previously, using the ",(0,i.kt)("strong",{parentName:"td"},"PostModels")," endpoint to create a new model also created a placeholder version of the model with user-provided fields. And if the ",(0,i.kt)("inlineCode",{parentName:"td"},"model_type_id")," of the model was trainable, then a new ModelVersion was created with UNTRAINED status by default. Otherwise, if the ",(0,i.kt)("inlineCode",{parentName:"td"},"model_type_id")," was not trainable, then a new ModelVersion was created with TRAINED status."),(0,i.kt)("li",null,"Modifying a model's config settings requires using the ",(0,i.kt)("strong",{parentName:"td"},"PatchModels")," endpoint. It's how you previously changed the info fields, descriptions, notes, metadata for both models and model versions. If you were only patching fields that are informational about the model, and not the model version, a model version was not created. If you were patching a trainable model where the latest model version was trained, and you were only changing the ",(0,i.kt)("inlineCode",{parentName:"td"},"output_info"),", a new trained model version was created with the new info. Otherwise, if you were patching a trainable model where the latest model version had not been trained, the created model version was marked as untrained by default. If you were patching an untrainable model type, the new created model version was marked as trained."),(0,i.kt)("li",null,"Previously, using the ",(0,i.kt)("strong",{parentName:"td"},"PostModelVersions")," endpoint automatically, by default, kicked off training the latest untrained model version\u2014even though a user may not intend to train the latest version, which could unnecessarily incur training costs."),(0,i.kt)("li",null,"Previously, using the ",(0,i.kt)("strong",{parentName:"td"},"PatchModelVersions")," endpoint only patched a model versions' visibility, metadata, license, or description\u2014while maintaining the model version's status."),(0,i.kt)("br",null)),(0,i.kt)("h4",null,"New Behavior"),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"PostModels")," will create new models but not create new model versions. This means trainable models that have not yet been trained will require the additional step of calling ",(0,i.kt)("strong",{parentName:"td"},"PostModelVersions"),"\u2014while providing the ",(0,i.kt)("inlineCode",{parentName:"td"},"*_info")," fields in the model version\u2014to effect training.",(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"PostModelVersions")," will allow users to give information specific to a model version. All the ",(0,i.kt)("inlineCode",{parentName:"td"},"*_info")," fields\u2014such as ",(0,i.kt)("inlineCode",{parentName:"td"},"output_info"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"input_info"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"train_info"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"import_info"),"\u2014will be migrated to the endpoint. This would minimize the confusion and difficulty of maintaining these endpoints. Users will be able patch model specific fields without worrying about model version fields being affected.")),(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"PatchModels")," will allow users to patch only the model level fields, nothing in the model version. Unnecessary model versions will no longer be created. This allows users to easily track persisted versions."),(0,i.kt)("li",null,(0,i.kt)("strong",{parentName:"td"},"PatchModelVersions")," will be the new way to change most of the model version fields like gettable, metadata, license, description, notes, and ",(0,i.kt)("inlineCode",{parentName:"td"},"output_info")," (not including concepts)."),(0,i.kt)("li",null,"If users used ",(0,i.kt)("inlineCode",{parentName:"td"},"model.output_info.output_config")," when inferencing, they will have to change that to ",(0,i.kt)("inlineCode",{parentName:"td"},"model.model_version.output_info.output_config"),".")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"January 4th 2023"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Exclusion of Some Fields From ",(0,i.kt)("strong",{parentName:"td"},"PostModelOutputs")," and ",(0,i.kt)("strong",{parentName:"td"},"PostWorkflowResults")," Prediction Responses"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("ul",null,(0,i.kt)("li",null,"When using the ",(0,i.kt)("strong",{parentName:"td"},"PostModelOutputs")," endpoint or the ",(0,i.kt)("strong",{parentName:"td"},"PostWorkflowResults")," endpoint to make a prediction call, the entire model information, including all hyperparameters, is included for each output in the response. This is extremely verbose and also unnecessary, as the same information appears repeatedly throughout the response. It also impacts network usage, ease of viewing and processing the results and debugging by the user, and other performances."),(0,i.kt)("li",null," Model description, notes and related model info fields are to be excluded from ",(0,i.kt)("strong",{parentName:"td"},"PostModelOutputs")," and ",(0,i.kt)("strong",{parentName:"td"},"PostWorkflowResults")," prediction responses. The model and model version ids are still available in the responses. If you need more model info than that available from any of the responses, you can look up the info by model id using the ",(0,i.kt)("strong",{parentName:"td"},"GetModel")," endpoint.")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"November 22, 2022"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /searches")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The generic search API will be deprecated in favor of ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /inputs/searches")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /annotations/searches"),". ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /searches")," will still be supported for now, but will not receive any feature updates so users are suggested to use the newer search endpoints.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"January 20, 2022"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of ",(0,i.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"display_name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"To make Clarifai Model IDs more readable and user friendly, we plan to make the following API/UI changes during the week of Jan 17th. Please see user impact and suggestions below and contact ",(0,i.kt)("a",{parentName:"td",href:"mailto:support@clarifai.com"},"support@clarifai.com")," if you have any questions. ",(0,i.kt)("br",null),(0,i.kt)("br",null)," The old ",(0,i.kt)("inlineCode",{parentName:"td"},"user_unique_id")," will still be usable in all queries, but the responses will be filled with the new ",(0,i.kt)("inlineCode",{parentName:"td"},"v2_user_unique_id"),". ",(0,i.kt)("inlineCode",{parentName:"td"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"display_name")," are deprecated in the API and UI, and ",(0,i.kt)("inlineCode",{parentName:"td"},"user_unique_id")," will soon be deprecated as well so users are suggested to use new model id field ",(0,i.kt)("inlineCode",{parentName:"td"},"v2_user_unique_id"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"November 24, 2021. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of type option"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"type")," option in POST /models and /models/searches reuest will no longer be supported and will be removed from our API after this point in time. ",(0,i.kt)("inlineCode",{parentName:"td"},"model_type_id")," is in use for model type references.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"February 12, 2021. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of ",(0,i.kt)("inlineCode",{parentName:"td"},"delete_all")," option"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"delete_all")," option in DELETE /inputs request will no longer be supported and will be removed from our API after this point in time. You can delete inputs by id. Each request can have at most 128 ids.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"October 16, 2020. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of Demographics Model"),(0,i.kt)("td",{parentName:"tr",align:"left"},"To reduce the risk of race bias in our own models, we have constructed a new approach to visual recognition of race. We've also divided age, race and gender recognition into separate models, and then packaged the models into a new public Demographics Workflow. This new approach provides much more flexibility, and makes outputs easier to parse. We will be retiring the current demographics model on October 16th, 2020. Please reference this ",(0,i.kt)("a",{parentName:"td",href:"https://www.clarifai.com/blog/new-demographics-workflow"},"blog post"),", and our ",(0,i.kt)("a",{parentName:"td",href:"https://docs.clarifai.com/api-guide/api-overview"},"API documentation")," for more information about how you can update your code to take advantage of the new workflow.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"October 20, 2020. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Model Training Do Not Wait For Inputs To Be Processed"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Currently, when we train a context-based classifier model, we wait for all inputs to be added to your app before a model version is created and processed, with a 1 hour training timeout. In the future, we will use any available inputs and annotations that are available at the time a model version is created for training. If the input is pending or in progress, those inputs and associated annotations will not be used for training. You can use ",(0,i.kt)("a",{parentName:"td",href:"https://api.clarifai.com/v2/inputs/status"},"https://api.clarifai.com/v2/inputs/status")," to check input counts for each status.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"February 27, 2020. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/product-updates/upcoming-api-changes#deprecation-face-from-api"},"Deprecation of Face object from API")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Face object in our API responses will be deprecated in favor of a list of Concepts that other model types return. This should only effect users of the Celebrity, Demographics, or custom face recognition models where the ",(0,i.kt)("inlineCode",{parentName:"td"},"data.face")," attributes like ",(0,i.kt)("inlineCode",{parentName:"td"},"data.face.identity"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"data.face.age_appearance"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"data.face.gender_appearance"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"data.face.multicultural_appearance")," will now be returned in the list of ",(0,i.kt)("inlineCode",{parentName:"td"},"data.concepts")," Concept object. The API will return both for a while during the transition to give you time to update your code away from using the ",(0,i.kt)("inlineCode",{parentName:"td"},"data.face")," objects altogether. We are doing this to simplify the API interface and make it more easily compatible for advanced functionality that is coming soon in workflows! The custom face recognition and celebrity models are a simple change to just access the new ",(0,i.kt)("inlineCode",{parentName:"td"},"data.concepts")," field, but the demographics model is a more fundamental change away from having three distinct lists of concept to a single list. In order to cope with this, we have introduced a ",(0,i.kt)("inlineCode",{parentName:"td"},"vocab_id")," field in each ",(0,i.kt)("inlineCode",{parentName:"td"},"data.concepts")," entry that is returned by the demographics model so that you can distinguish ",(0,i.kt)("inlineCode",{parentName:"td"},"age_appearance"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"gender_appearance")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"multicultural_appearance"),".To convert new format to old format, check python example ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/Clarifai/docs/tree/master/examples/deprecate_face_object"},"here."),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"February 24, 2020. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Consolidation of Input Related Status Codes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As we support more media types, it is impractical to have status codes for each. Thus status codes will now be prefixed ",(0,i.kt)("inlineCode",{parentName:"td"},"INPUT_...")," rather than ",(0,i.kt)("inlineCode",{parentName:"td"},"INPUT_IMAGE_...")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"INPUT_VIDEO_..."),". We will maintain the int value for the ",(0,i.kt)("inlineCode",{parentName:"td"},"INPUT_IMAGE_...")," prefixed statuses, but no longer support the int values associated with statuses prefixed ",(0,i.kt)("inlineCode",{parentName:"td"},"INPUT_VIDEO..."),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"February 12, 2020. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of Face model type names"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The ",(0,i.kt)("inlineCode",{parentName:"td"},"facedetect*")," model types will be deprecated in favor of their more general ",(0,i.kt)("inlineCode",{parentName:"td"},"detect*")," counterparts. For example these would be the changes of model type: ",(0,i.kt)("inlineCode",{parentName:"td"},"facedetect")," -",">"," ",(0,i.kt)("inlineCode",{parentName:"td"},"detect")," ",(0,i.kt)("inlineCode",{parentName:"td"},"facedetect-identity")," -",">"," ",(0,i.kt)("inlineCode",{parentName:"td"},"detect-concept")," ",(0,i.kt)("inlineCode",{parentName:"td"},"facedetect-demographics")," -",">"," ",(0,i.kt)("inlineCode",{parentName:"td"},"detect-concept")," ",(0,i.kt)("inlineCode",{parentName:"td"},"facedetect-embed")," -",">"," ",(0,i.kt)("inlineCode",{parentName:"td"},"detect-embed")," This change is to unify the APIs around face products and object detection products so that they are compatible everywhere either is used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"February 3, 2020. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PATCH /inputs")," overwrite action change"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The overwrite action when patching inputs currently has some inconsistent behavior. If you patch ",(0,i.kt)("inlineCode",{parentName:"td"},"input.data.metadata")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"input.data.geo")," fields on an input that has ",(0,i.kt)("inlineCode",{parentName:"td"},"input.data.concepts")," already added to it, these concepts will remain after the patch even though the patch action was ",(0,i.kt)("inlineCode",{parentName:"td"},"overwrite"),".  Going forward, the overwrite behavior will overwrite the entire ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," object with what is included in the ",(0,i.kt)("inlineCode",{parentName:"td"},"PATCH /inputs")," API call. Therefore if concepts are not provided in the patch call, but were originally on that input, they will be erased ","(","overwritten with an empty list of concepts",")",". You can maintain the current behvaiour by always sending back the complete ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," object from ",(0,i.kt)("inlineCode",{parentName:"td"},"GET /input/{input_id}")," along with any modification to it if you are using the ",(0,i.kt)("inlineCode",{parentName:"td"},"overwrite")," action.   Update: this change has become more complicated than originally expected and we may not undergo it after all, more to come in future. Still a good idea to update your PATCH calls to use the ",(0,i.kt)("inlineCode",{parentName:"td"},"merge")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"remove")," actions instead of ",(0,i.kt)("inlineCode",{parentName:"td"},"overwrite")," due to ",(0,i.kt)("inlineCode",{parentName:"td"},"overwrite"),"'s inconsistency.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"February 1, 2020. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Deprecation of Focus Model"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Focus model will no longer be supported and will be removed from our API after this point in time. If you have requests for recognizing focus and blurry regions within images please contact ",(0,i.kt)("a",{parentName:"td",href:"mailto:sales@clarifai.com"},"sales@clarifai.com")," so that we can help you directly.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"November 20, 2019. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"image.crop")," argument will be deprecated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"In some requests we used to allow cropping of images during the request using the ",(0,i.kt)("inlineCode",{parentName:"td"},"image.crop")," field. This was for convenience only, but in reality is was rarely ever used and significantly complicates the processing pipelines under the hood. Therefore, we will no longer support the ",(0,i.kt)("inlineCode",{parentName:"td"},"image.crop")," field in any requests that used to accept it.   If you want to have similar behavior please crop the images on the client side and send the cropped bytes as base64 encoded image data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"September 30, 2019. 5:00pm ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DELETE /inputs")," will only operate asynchronously"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Along the same lines as ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /inputs")," becoming completely asynchronous, we are cleaning up some inconsistent behavior in the API for deleting inputs. Previously, when a single image is deleted with ",(0,i.kt)("inlineCode",{parentName:"td"},"DELETE /inputs")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"DELETE /inputs/{input_id}")," it was a synchronous operation, but when a batch of images were deleted it was asynchronous. We are making both asynchronous. This allows us to provide more advanced functionality with workflows that index your inputs.  What this means for your code is if you application relies on the input having been deleted when the ",(0,i.kt)("inlineCode",{parentName:"td"},"DELETE /inputs")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"DELETE /inputs/{input_id}")," calls return, you now need to add a second call to ",(0,i.kt)("inlineCode",{parentName:"td"},"GET /inputs/{input_id}")," in order to check that it fails with a not found error.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"September 24, 2019. 5:00pm ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"POST /inputs")," will only operate asynchronously"),(0,i.kt)("td",{parentName:"tr",align:"left"},"We are cleaning up some inconsistent behavior in the API where a single image added with ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /inputs")," was a synchronous operation, but a batch of images was asynchronous. We are making both asynchronous. This allows us to provide more advanced functionality with workflows that index your inputs.  What this means for your code is if you application relies on added inputs having already been indexed when the ",(0,i.kt)("inlineCode",{parentName:"td"},"POST /inputs")," call returns, you now need to add a second call to ",(0,i.kt)("inlineCode",{parentName:"td"},"GET /inputs/{input_id}")," in order to check the status of the input you just added to look for 30000 ","(","INPUT","_","IMAGE","_","DOWNLOAD","_","SUCCESS",")"," status code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"September 11, 2019. 9:00am ET"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Scheduled Database Downtime"),(0,i.kt)("td",{parentName:"tr",align:"left"},"We plan to upgrade our database to make it faster and provide more space for your applications. We expect a few minutes of downtime during this upgrade but you should plan for up to an hour of downtime in case things don't go as expected. This will primarily affect the following uses of our platform: POST/GET/PATCH/DELETE inputs, Search, Custom Training, Model Evaluation")))))}c.isMDXComponent=!0}}]);