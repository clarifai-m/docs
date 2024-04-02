"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8094],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(a),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(k,r(r({ref:e},c),{},{components:a})):n.createElement(k,r({ref:e},c))}));function k(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81531:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={description:"Use a no-code interface to move data across Databricks and Clarifai",sidebar_position:4},r="Databricks-Connect Module",l={unversionedId:"integrations/databricks/databricks-connect",id:"integrations/databricks/databricks-connect",title:"Databricks-Connect Module",description:"Use a no-code interface to move data across Databricks and Clarifai",source:"@site/docs/integrations/databricks/databricks-connect.md",sourceDirName:"integrations/databricks",slug:"/integrations/databricks/databricks-connect",permalink:"/integrations/databricks/databricks-connect",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/databricks/databricks-connect.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Use a no-code interface to move data across Databricks and Clarifai",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Fetch Annotations",permalink:"/integrations/databricks/fetch-annotations"},next:{title:"Installation Guide",permalink:"/nodejs-sdk/installation-guide/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install the Module",id:"install-the-module",level:2},{value:"Option 1",id:"option-1",level:3},{value:"Option 2",id:"option-2",level:3},{value:"Authenticate a Databricks Connection",id:"authenticate-a-databricks-connection",level:2},{value:"Import Data From Databricks to Clarifai",id:"import-data-from-databricks-to-clarifai",level:2},{value:"a) Import from a Databricks volume",id:"a-import-from-a-databricks-volume",level:3},{value:"b) Import from an S3 bucket",id:"b-import-from-an-s3-bucket",level:3},{value:"File Format",id:"file-format",level:3},{value:"Export Data From Clarifai to Databricks",id:"export-data-from-clarifai-to-databricks",level:2},{value:"Option 1",id:"option-1-1",level:3},{value:"Option 2",id:"option-2-1",level:3},{value:"Update Databricks With Inputs and Annotations",id:"update-databricks-with-inputs-and-annotations",level:2}],c={toc:p},d="wrapper";function u(t){let{components:e,...o}=t;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"databricks-connect-module"},"Databricks-Connect Module"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use a no-code interface to move data across Databricks and Clarifai")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The Clarifai\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://clarifai.com/clarifai/Databricks-Connect-App/modules/Databricks-Connect"},"Databricks-Connect")," module seamlessly integrates Clarifai and Databricks, offering a user-friendly, no-code solution for bi-directional data movement. You can use the module to effortlessly transfer data across both platforms at the click of the button. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Modules are custom plugins with UI elements that let you extend the capabilities of the Clarifai platform. You can learn more about them ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/modules/"},"here"),". ")),(0,i.kt)("p",null,"The Databricks-Connect module allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authenticate a Databricks connection and connect with its compute clusters"),(0,i.kt)("li",{parentName:"ul"},"Import data from Databricks volume into Clarifai app and dataset"),(0,i.kt)("li",{parentName:"ul"},"Export data and annotations from a Clarifai app into Databricks volume and table"),(0,i.kt)("li",{parentName:"ul"},"Update input and annotation information within the chosen Delta table for the linked Clarifai app ")),(0,i.kt)("p",null,"Let\u2019s demonstrate how you can use the module."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application"},"Clarifai application")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete"},"dataset")," within a Clarifai application"),(0,i.kt)("li",{parentName:"ul"},"Set up your Clarifai ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT")," inside your Databricks workspace. ",(0,i.kt)("a",{parentName:"li",href:"https://docs.databricks.com/en/security/secrets/secrets.html#secrets"},"Click here")," to learn how to create and set secrets in Databricks. Also, use the following naming convention when setting secrets, as the module interprets secrets according to the specified scope and key name.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'scope-name  = "clarifai"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'key-name = "CLARIFAI_PAT"'))))),(0,i.kt)("h2",{id:"install-the-module"},"Install the Module"),(0,i.kt)("h3",{id:"option-1"},"Option 1"),(0,i.kt)("p",null,"Go to the Databricks-Connect module ",(0,i.kt)("a",{parentName:"p",href:"https://clarifai.com/clarifai/Databricks-Connect-App/modules/Databricks-Connect"},"page")," and click the ",(0,i.kt)("strong",{parentName:"p"},"Install Module")," button at the upper-right corner."),(0,i.kt)("p",null,"Next, on the small window that pops up, select a desired user and destination app for installing the module."),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Confirm")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(24412).Z,width:"1906",height:"897"})),(0,i.kt)("p",null,"On the ensuing page, choose a destination URL for installing the module, select the module visibility, and click the ",(0,i.kt)("strong",{parentName:"p"},"Install to this App!")," button. "),(0,i.kt)("p",null,"After the module has been successfully installed, click the ",(0,i.kt)("strong",{parentName:"p"},"Click to use installed module version")," button to start using it. You can also refresh the page for your installed module to appear on the left sidebar under the ",(0,i.kt)("strong",{parentName:"p"},"Installed Modules")," category.. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(56993).Z,width:"1802",height:"854"})),(0,i.kt)("p",null,"If you click the button, you\u2019ll be redirected to a page that requires you to authorize the module to access data on your behalf. You will see the permissions the module requires.  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(96160).Z,width:"1815",height:"832"})),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Authorize")," button."),(0,i.kt)("h3",{id:"option-2"},"Option 2"),(0,i.kt)("p",null,"Alternatively, you can use the module\u2019s URL to install it in your app. To do so, click the ",(0,i.kt)("strong",{parentName:"p"},"Manage Installed Modules")," option at the bottom of the collapsible left sidebar. "),(0,i.kt)("p",null,"Grab the URL of the Databricks-Connect module and paste it into the ",(0,i.kt)("strong",{parentName:"p"},"Module URL")," input field.  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(31240).Z,width:"1891",height:"830"})),(0,i.kt)("p",null,"You can then follow the ensuing prompts to complete installing the module in your app. "),(0,i.kt)("h2",{id:"authenticate-a-databricks-connection"},"Authenticate a Databricks Connection"),(0,i.kt)("p",null,"After installing the module and authorizing it to access data on your behalf, you\u2019ll be redirected to a page that requires you to provide configuration information to connect to your Databricks workspace. "),(0,i.kt)("p",null,"Provide the following credentials:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(17176).Z,width:"1891",height:"894"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Databricks Host")," \u2014 Specify the hostname. Example is ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<your_host_name>.cloud.databricks.com"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Databricks Token")," \u2014 Specify the personal access token. Learn how to get it ",(0,i.kt)("a",{parentName:"li",href:"https://docs.databricks.com/en/dev-tools/auth/pat.html#databricks-personal-access-token-authentication"},"here"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Databricks Cluster ID")," \u2014 Specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster_id"),". Example is ",(0,i.kt)("inlineCode",{parentName:"li"},"1234-12345-ab1cd2ef"),". ")),(0,i.kt)("p",null,"Next, click the ",(0,i.kt)("strong",{parentName:"p"},"Authenticate")," button. "),(0,i.kt)("p",null,"After successfully authenticating a Databricks connection, a section will appear on the same page that allows you to carry out various data ingestion tasks with the module. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We currently only support transferring image data between Clarifai and Databricks. ")),(0,i.kt)("h2",{id:"import-data-from-databricks-to-clarifai"},"Import Data From Databricks to Clarifai"),(0,i.kt)("p",null,"You can use the module to import data into a Clarifai app and a dataset. While importing the data, a Delta table will be created in Databricks that tracks the exported input information. "),(0,i.kt)("p",null,"Under the ",(0,i.kt)("strong",{parentName:"p"},"Import")," tab, you can either import data from a ",(0,i.kt)("strong",{parentName:"p"},"Databricks Unity Catalog")," or an Amazon ",(0,i.kt)("strong",{parentName:"p"},"S3")," bucket."),(0,i.kt)("h3",{id:"a-import-from-a-databricks-volume"},"a) Import from a Databricks volume"),(0,i.kt)("p",null,"To import data from a Databricks volume, select the ",(0,i.kt)("strong",{parentName:"p"},"Databricks Unity Catalog")," tab and provide the needed information."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In Databricks, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/data-governance/unity-catalog/create-catalogs.html"},"a catalog")," contains schemas, and a schema acts like a database that contains tables (for storing structured data) and volumes (for storing unstructured data). ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(69873).Z,width:"1703",height:"815"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List of catalogs available")," \u2014 Select your desired source catalog. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List of schemas available")," \u2014 Select your desired source schema. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List of volumes available")," \u2014 Select your desired source volume. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inputs Delta table name")," \u2014 Provide the name of the new table that will be created in Databricks. The table will be created inside ",(0,i.kt)("inlineCode",{parentName:"li"},"selected_catalog.selected_schema.table_name"),". ")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image names in the Databricks platform will be used as ",(0,i.kt)("inlineCode",{parentName:"p"},"input_id")," names on the Clarifai platform. So, ensure the names are unique to prevent any potential errors during the import process. ")),(0,i.kt)("p",null,"Lastly, specify the destination app and dataset on the Clarifai platform where you intend the data to be imported. "),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Upload")," button. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(48045).Z,width:"1722",height:"482"})," "),(0,i.kt)("p",null,"If the import process is successful, you\u2019ll see the exported data tracked inside the created ",(0,i.kt)("inlineCode",{parentName:"p"},"selected_catalog.selected_schema.table_name"),".  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(73567).Z,width:"1806",height:"850"})),(0,i.kt)("h3",{id:"b-import-from-an-s3-bucket"},"b) Import from an S3 bucket"),(0,i.kt)("p",null,"To import data from an S3 bucket, select the ",(0,i.kt)("strong",{parentName:"p"},"S3")," tab and provide the needed information. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To enable the ingestion of inputs from an S3 bucket, ensure that the chosen cluster for the operation has the required permissions and roles to access it. For detailed instructions on configuring Databricks S3 access with the instance profile, refer to the documentation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.databricks.com/en/connect/storage/tutorial-s3-instance-profile.html#tutorial-configure-s3-access-with-an-instance-profile"},"here"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(34846).Z,width:"1508",height:"850"})," "),(0,i.kt)("p",null,"You have the flexibility to use any of the following file formats for data ingestion:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CSV")," \u2014 Refer to the explanation below on the correct format to use."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Delta format")," (Parquet format) \u2014 Ensure the format follows the correct data schema as explained below. ")),(0,i.kt)("p",null,"After choosing your desired file format type, enter the S3 URL of the file you want to import. Here is an example: ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://my-s3-bucket/my-folder/my-file.csv"),". "),(0,i.kt)("p",null,"Lastly, specify the destination app and dataset on the Clarifai platform where you intend the data to be imported. "),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Upload")," button. "),(0,i.kt)("h3",{id:"file-format"},"File Format"),(0,i.kt)("p",null,"The CSV or the Delta file you want to import should be in the format that Clarifai accepts. Here are the columns you can include in the file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"inputid")," (mandatory) \u2014 A unique identifier for the input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"input")," (mandatory) \u2014 A publicly accessible URL that will be used to download the image."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"concepts")," (optional) \u2014 The concepts contained in images."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"metadata")," (optional) \u2014 Additional information in inputs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"geopoints")," (optional) \u2014 Geopoints applicable to the inputs.")),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"inputid"),(0,i.kt)("th",{parentName:"tr",align:null},"input"),(0,i.kt)("th",{parentName:"tr",align:null},"concepts"),(0,i.kt)("th",{parentName:"tr",align:null},"metadata"),(0,i.kt)("th",{parentName:"tr",align:null},"geopoints"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"image01"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://samples.clarifai.com/featured-models/color-colored-houses-boats-on-canal.jpg"},"https://samples.clarifai.com/featured-models/color-colored-houses-boats-on-canal.jpg")),(0,i.kt)("td",{parentName:"tr",align:null},"image"),(0,i.kt)("td",{parentName:"tr",align:null},"{'filename': 'canal.jpg', 'split': 'train'}"),(0,i.kt)("td",{parentName:"tr",align:null},"102,70")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"image02"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://samples.clarifai.com/metro-north.jpg"},"https://samples.clarifai.com/metro-north.jpg")),(0,i.kt)("td",{parentName:"tr",align:null},"image"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"Here are more details of the annotation structures Clarifai support:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Annotation Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Structure"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bounding box annotation"),(0,i.kt)("td",{parentName:"tr",align:null},"Regions","[...]",".region_info.bounding_box{top_row,left_col,bottom_row,right_col}, Regions","[...]",".data.concepts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Polygon annotation"),(0,i.kt)("td",{parentName:"tr",align:null},"Regions","[...]",".region_info.polygon.points{row","[\u2026]",",col","[\u2026]","}, Regions","[...]",".data.concepts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Image segmentation"),(0,i.kt)("td",{parentName:"tr",align:null},"Regions","[...]",".region_info.mask, Regions","[...]",".data.concepts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Video prediction"),(0,i.kt)("td",{parentName:"tr",align:null},"Frame.frame_info.time","[\u2026]",", Frame.frame_info.data.concepts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Text/image classification"),(0,i.kt)("td",{parentName:"tr",align:null},"Annotations.data.concepts")))),(0,i.kt)("h2",{id:"export-data-from-clarifai-to-databricks"},"Export Data From Clarifai to Databricks"),(0,i.kt)("p",null,"You can use the module to export data from a Clarifai app to a Databricks table. This allows you to seamlessly transfer pre-annotated, ready-to-use data for building AI pipelines within the Databricks environment. "),(0,i.kt)("p",null,"Under the ",(0,i.kt)("strong",{parentName:"p"},"Export")," tab, start by specifying the app and dataset on the Clarifai platform from which you want to export the data. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(41504).Z,width:"1519",height:"516"})," "),(0,i.kt)("p",null,"Next, on the ",(0,i.kt)("strong",{parentName:"p"},"Databricks")," section, you have the option to select ",(0,i.kt)("strong",{parentName:"p"},"Export images"),". If left unchecked, the specified annotations and their associated information will be exported to a Databricks table. On the other hand, checking it will result in the export of both the specified annotations and their corresponding images to a Databricks table.  "),(0,i.kt)("h3",{id:"option-1-1"},"Option 1"),(0,i.kt)("p",null,"If you leave the ",(0,i.kt)("strong",{parentName:"p"},"Export images")," option unchecked, you need to provide the following information:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(46935).Z,width:"1503",height:"582"})," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List of catalogs available")," \u2014 Select your destined, pre-existing catalog."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List of schemas available")," \u2014 Select your destined, pre-existing schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inputs Delta table name")," \u2014 Provide the name of a new annotations Delta table to be created.")),(0,i.kt)("p",null,"After providing the required information, click the ",(0,i.kt)("strong",{parentName:"p"},"Export")," button. It will create a Delta table that contains both annotations and inputs information. "),(0,i.kt)("p",null,"A preview of the newly created table data will also be displayed below the ",(0,i.kt)("strong",{parentName:"p"},"Export"),"  button. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(85018).Z,width:"3078",height:"1184"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The inputs table encompasses details about each input, including input ID, image information, date created, and more. The annotations table holds information on each annotation, such as annotation ID, annotation user ID, date created, and more. The common link between these two tables is the ",(0,i.kt)("strong",{parentName:"p"},"input ID"),", which is the same in both of them. "),(0,i.kt)("p",{parentName:"admonition"},"Here is a sample database structure of inputs table and annotations table:"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("img",{src:a(47359).Z,width:"1150",height:"682"}))),(0,i.kt)("h3",{id:"option-2-1"},"Option 2"),(0,i.kt)("p",null,"On the other hand, checking the ",(0,i.kt)("strong",{parentName:"p"},"Export images")," option enables you to export the annotations alongside their associated images in a Databricks volume.\nNote that this action will activate an extra selection box, allowing you to choose the specific volume within the schema where you wish to store the images."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(83336).Z,width:"1518",height:"726"})," "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"input_id")," of an input will serve as its filename when stored within the designated volume.")),(0,i.kt)("p",null,"This is how the exported data appears on Databricks:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(48341).Z,width:"1852",height:"695"})),(0,i.kt)("h2",{id:"update-databricks-with-inputs-and-annotations"},"Update Databricks With Inputs and Annotations"),(0,i.kt)("p",null,"You can use the module to update Databricks Delta tables with new inputs and annotations. This allows you to synchronize your Databricks workspace whenever you've added new inputs or annotations in your Clarifai app, modified existing ones, or made any changes to them. "),(0,i.kt)("p",null,"Under the ",(0,i.kt)("strong",{parentName:"p"},"Update")," tab, start by specifying the app and dataset on the Clarifai platform which have your updated data.  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7154).Z,width:"1529",height:"515"})," "),(0,i.kt)("p",null,"Next, on the ",(0,i.kt)("strong",{parentName:"p"},"Databricks")," section, provide the following information:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(53019).Z,width:"1394",height:"550"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List of catalogs available")," \u2014 Select your destined, pre-existing catalog."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List of schemas available")," \u2014 Select your destined, pre-existing schema. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Annotations Delta table")," \u2014 Select your destined, pre-existing annotations table. It cannot be the same as the inputs Delta table. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Inputs Delta table")," \u2014 Select your destined, pre-existing inputs table. It cannot be the same as the annotations Delta table. ")),(0,i.kt)("p",null,"After providing the required information, click the ",(0,i.kt)("strong",{parentName:"p"},"Update")," button. The upsert process will begin in the background, seamlessly updating the corresponding tables. "),(0,i.kt)("p",null,"A preview of the table data will also be displayed below the button. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(10443).Z,width:"1677",height:"656"})))}u.isMDXComponent=!0},24412:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-1-c76ba45d2a80c3532e7dbb3fbe09c885.png"},46935:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-10-39f7297fba8e03253fb084f89ec437cd.png"},83336:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-11-dd19cb10f3ee56d6fa64c4bdeaf90090.png"},7154:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-12-17db8beadfe842208920f1132f8469d6.png"},53019:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-13-6f548f01abcd8f811e24623b80544723.png"},85018:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-14-075ddbe9f1ce27513f725b61d641ef5f.png"},10443:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-15-a24b9b4e076019bee8efb1b217fdf0fe.png"},48341:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-16-673da159cfe8f22d32809be6779f6524.png"},73567:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-17-fd7a2fe07d0f64e139e979c34be92411.png"},47359:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-18-403a11644caf9bc6286024f7839caee9.png"},56993:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-2-5f5c841691e3034345a738984fc1eca0.png"},96160:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-3-ded92966a78d75c1745c714155868700.png"},31240:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-4-512ae7bb9fb2934af2197f709d4a9b59.png"},17176:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-5-d0a28058fd1b40921a2023560f292ab8.png"},69873:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-6-9b0695abd81f28463b7d77813785c5eb.png"},48045:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-7-998066dc716e1bb655aad8581c4bd0a8.png"},34846:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-8-cdad9afe9e534c2c2479a339bc091520.png"},41504:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/databricks-connect-9-92410f59b8021e1e9b68c0374d04427c.png"}}]);