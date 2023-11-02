"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Keep your credentials secure and build powerful modules",sidebar_position:3},i="Environment Variables and Secrets",s={unversionedId:"portal-guide/modules/secrets-management",id:"portal-guide/modules/secrets-management",title:"Environment Variables and Secrets",description:"Keep your credentials secure and build powerful modules",source:"@site/docs/portal-guide/modules/secrets-management.md",sourceDirName:"portal-guide/modules",slug:"/portal-guide/modules/secrets-management",permalink:"/portal-guide/modules/secrets-management",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/modules/secrets-management.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Keep your credentials secure and build powerful modules",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Manage Your Modules",permalink:"/portal-guide/modules/manage"},next:{title:"Smart Search: Search, Sort, Filter & Save",permalink:"/portal-guide/psearch/"}},l={},c=[{value:"How it Works",id:"how-it-works",level:2},{value:"How to Create Secrets",id:"how-to-create-secrets",level:2},{value:"Template-based Secrets Injection",id:"template-based-secrets-injection",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"environment-variables-and-secrets"},"Environment Variables and Secrets"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Keep your credentials secure and build powerful modules")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"When creating a new module version, you have the option of configuring and setting environment variables and secrets for that specific version. For example, you might use them to store API keys, database connection strings, or other configuration details you do not want to expose publicly on GitHub."),(0,a.kt)("p",null,"This feature opens up a ton of possibilities and allows you to build much more powerful modules."),(0,a.kt)("p",null,"It can be beneficial for several reasons, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Allows you to manage the configuration and security of your module versions effectively, ensuring that each version has the necessary environment variables and secrets for its proper functioning. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can employ version-specific settings or secrets for each install of a version to operate independently and without affecting other versions of the same module in your application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Allows you to securely interact with external data sources, APIs, or services, and supercharge the capabilities of your modules."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"environment variables and secrets",src:n(59734).Z,width:"1804",height:"845"})),(0,a.kt)("h2",{id:"how-it-works"},"How it Works"),(0,a.kt)("p",null,"When creating a new module version, there is a text area where you can enter the environment variables and secrets specific to your module\u2019s requirements. If you don't need to configure any, you can simply leave this area empty."),(0,a.kt)("p",null,"We support creating secrets using the ",(0,a.kt)("a",{parentName:"p",href:"https://toml.io/en/"},"TOML")," file format. When building modules with Streamlit, we leverage their ",(0,a.kt)("inlineCode",{parentName:"p"},".streamlit/secrets.toml")," file to manage both secrets and environment variables. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To dive deeper into how Streamlit implements secrets management, you can explore their documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.streamlit.io/streamlit-community-cloud/deploy-your-app/secrets-management"},"here"),". ")),(0,a.kt)("p",null,"Once you provide your credentials within the designated text area, they are encrypted and stored for you and can be accessed conveniently via the ",(0,a.kt)("inlineCode",{parentName:"p"},"st.secrets")," dictionary. "),(0,a.kt)("p",null,"Moreover, Streamlit's implementation seamlessly maps these secrets to environment variables with matching names. For example, if your ",(0,a.kt)("inlineCode",{parentName:"p"},".toml")," file contains a definition like ",(0,a.kt)("inlineCode",{parentName:"p"},"CLARIFAI_PAT"),", it will also appear as an environment variable with the same name, simplifying access and integration into your module's functionality."),(0,a.kt)("h2",{id:"how-to-create-secrets"},"How to Create Secrets"),(0,a.kt)("p",null,"You can simply provide your secrets and environment variables using the TOML file format. "),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'KEY = "value"\nSOMETHING = 123\n')),(0,a.kt)("p",null,"And you can access them in your code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'secret_value = st.secrets.KEY  # access via attribute notation\n# Or \nimport os\nsecret_value = os.environ["KEY"]  # access via key notation\n')),(0,a.kt)("p",null,"To maintain clarity, you can even organize your secrets into sections, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},' [db_credentials]\nusername = "my_username"\npassword = "my_password"\n')),(0,a.kt)("p",null,"And you can access them in your code via the ",(0,a.kt)("inlineCode",{parentName:"p"},"st.secrets")," dictionary:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"db_username = st.secrets.db_credentials.username\n# Note: These sectioned secrets won\u2019t appear in os.environ. Only simple data types like strings, integers, and floats are accessible via os.environ.\n")),(0,a.kt)("h2",{id:"template-based-secrets-injection"},"Template-based Secrets Injection"),(0,a.kt)("p",null,"We have also enhanced the module manager with a feature that automatically retrieves the ",(0,a.kt)("inlineCode",{parentName:"p"},".streamlit/secrets.toml")," file from the GitHub repository being deployed, and pre-populates it in the text area. "),(0,a.kt)("p",null,"The module manager first loads authentication information from environment variables, which are sourced from the ",(0,a.kt)("inlineCode",{parentName:"p"},".streamlit/secrets.toml")," file, and then override them with query parameters. This approach offers increased flexibility and customization for our users."),(0,a.kt)("p",null,"It serves as a valuable tool for displaying a template in the user interface, showcasing the variables expected by the module so that the author remembers to set them when creating a new module version."),(0,a.kt)("p",null,"For example, our ",(0,a.kt)("a",{parentName:"p",href:"https://clarifai.com/anthropic/completion/installed_module_versions/LLMBattleground/compare"},"LLM Battleground")," module relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLARIFAI_PAT")," variable. When checking in its ",(0,a.kt)("inlineCode",{parentName:"p"},".streamlit/secrets.toml")," file, it appears as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'CLARIFAI_PAT = ""\n')),(0,a.kt)("p",null,"This template is utilized when creating a module version, enabling the module's author to input their specific Personal Access Token (PAT). The module manager then performs validation to ensure that this essential value is not left empty. "),(0,a.kt)("p",null,"Any variables left as ",(0,a.kt)("inlineCode",{parentName:"p"},'""')," will trigger an error, prompting the author to provide the necessary information, thereby promoting accurate and error-free module deployments."))}m.isMDXComponent=!0},59734:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/module_27-aa0c937009e7032f2240d22740184bad.png"}}]);