"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4171],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62287:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:5},c="2FA",l={unversionedId:"clarifai-basics/authentication/factor-authentication",id:"clarifai-basics/authentication/factor-authentication",title:"2FA",description:"Two-factor authentication is an optional sign-in security feature that provides an additional layer of security for your account.",source:"@site/docs/clarifai-basics/authentication/2-factor-authentication.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/factor-authentication",permalink:"/docs-new/clarifai-basics/authentication/factor-authentication",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/clarifai-basics/authentication/2-factor-authentication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Scopes",permalink:"/docs-new/clarifai-basics/authentication/scopes"},next:{title:"Role-Based Access Control",permalink:"/docs-new/clarifai-basics/authentication/rbac"}},u=[{value:"Why 2FA?",id:"why-2fa",children:[{value:"Who needs 2FA?",id:"who-needs-2fa",children:[],level:3},{value:"How does 2FA work on the Clarifai Platform",id:"how-does-2fa-work-on-the-clarifai-platform",children:[],level:3}],level:2},{value:"2FA Setup",id:"2fa-setup",children:[{value:"2FA Sign-In",id:"2fa-sign-in",children:[],level:3},{value:"2FA Disable",id:"2fa-disable",children:[],level:3}],level:2},{value:"2FA Recovery",id:"2fa-recovery",children:[{value:"Self-serve",id:"self-serve",children:[],level:3},{value:"Last-resort",id:"last-resort",children:[],level:3}],level:2}],f={toc:u};function p(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2fa"},"2FA"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Two-factor authentication is an optional sign-in security feature that provides an additional layer of security for your account."),(0,i.kt)("h2",{id:"why-2fa"},"Why 2FA?"),(0,i.kt)("p",null,"Passwords have been the main form of authentication since the start of the digital revolution. However, this security measure is far from infallible. Here are some concerns about the password-based authentication:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"90% of passwords can be cracked in less than six hours."),(0,i.kt)("li",{parentName:"ul"},"2/3 of people use the same password everywhere."),(0,i.kt)("li",{parentName:"ul"},"Sophisticated cyber attackers have the power to test billions of passwords every second."),(0,i.kt)("li",{parentName:"ul"},"The vulnerability of passwords is the main reason for requiring and using 2FA.")),(0,i.kt)("h3",{id:"who-needs-2fa"},"Who needs 2FA?"),(0,i.kt)("p",null,"As a security best-practice, you should enable 2FA to minimize the risk of cybersecurity attack on your account. Despite the interruption at the sign-in process, the additional security benefit is significant."),(0,i.kt)("p",null,"For enterprise users, 2FA might fall under the security-related controls for compliance reasons. Organizations might want to enforce 2FA for their users to ensure account and data safety."),(0,i.kt)("h3",{id:"how-does-2fa-work-on-the-clarifai-platform"},"How does 2FA work on the Clarifai Platform"),(0,i.kt)("p",null,"Two-factor Authentication ","(","2FA",")"," works together with the sign-in process. 2FA will ask you to provide a code at sign-in. It works as the extra layer of security after basic authentication. It affects the user flow of Sign-in when the 2FA is enabled. The 2FA recovery is added into the sign-in process when the 2FA device is lost. Also, 2FA setup and disable are added into the user security settings."),(0,i.kt)("p",null,"You are able to enable and disable the 2FA for the sign-in process. Also, you are able to recover the 2FA if you lose the 2FA authenticator."),(0,i.kt)("h2",{id:"2fa-setup"},"2FA Setup"),(0,i.kt)("p",null,"To enable the 2FA, you have to sign-in to the platform first. Once you sign into the platform, you can go to Security settings page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(56770).Z})),(0,i.kt)("p",null,"On the Security page, user can toggle the \u201cEnable\u201d to setup the 2FA."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(56557).Z})),(0,i.kt)("p",null,"Once the enable is toggled:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7183).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(87846).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23521).Z})),(0,i.kt)("h3",{id:"2fa-sign-in"},"2FA Sign-In"),(0,i.kt)("p",null,"When you sign in to the Clarifai platform with correct username and password, 2FA kicks in."),(0,i.kt)("p",null,"A box will show up on the screen asking for the authentication code."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69286).Z})),(0,i.kt)("p",null,"If the correct code is entered, you will be taken to Portal."),(0,i.kt)("h3",{id:"2fa-disable"},"2FA Disable"),(0,i.kt)("p",null,"To disable the 2FA, go to the Security page."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(23521).Z})),(0,i.kt)("p",null,"Click the toggle, you will be prompted to enter the code from the authenticator application."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(78528).Z})),(0,i.kt)("p",null,"Once entered with the correct code, 2FA will be successfully disabled."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55206).Z})),(0,i.kt)("h2",{id:"2fa-recovery"},"2FA Recovery"),(0,i.kt)("h3",{id:"self-serve"},"Self-serve"),(0,i.kt)("p",null,"If the authentication app is somehow lost, you will not be able to sign in with 2FA."),(0,i.kt)("p",null,"In order to recover access to the Clarifai platform, you need to go through the recovery process."),(0,i.kt)("p",null,"Go to the sign-in page ",(0,i.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/login"},"https://portal.clarifai.com/login")),(0,i.kt)("p",null,"Enter the correct username and password."),(0,i.kt)("p",null,"With the prompt of the 2FA code, click \u201cEnter a recovery code\u201d link."),(0,i.kt)("p",null,"A box below will be prompted asking for recovery code."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69286).Z})),(0,i.kt)("p",null,"After entering the recovery code and click \u201cVERIFY\u201d, an email will be sent to the account email address to confirm the TOTP reset."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(48563).Z})),(0,i.kt)("p",null,"Click the link, a page to the Clarifai portal will be opened. Your 2FA will be confirmed to be reset from there."),(0,i.kt)("h3",{id:"last-resort"},"Last-resort"),(0,i.kt)("p",null,"If you lose the recovery code, there is no self-serve way to recover access to the Clarifai platform. You will have to reach out to ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@clarifai.com"},"support@clarifai.com")," to recover access."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15293).Z})))}p.isMDXComponent=!0},55206:function(e,t,n){t.Z=n.p+"assets/images/2fa-disabled-63892070ab4bfdb936e557ae473128b9.png"},23521:function(e,t,n){t.Z=n.p+"assets/images/2fa-success-1724556278d47df767a64125fcf702fb.png"},56557:function(e,t,n){t.Z=n.p+"assets/images/enable-f11770beb2d732dbcf4017ebedad4713.png"},78528:function(e,t,n){t.Z=n.p+"assets/images/enter-code-2935205c6675525e02b1c6790dbdf59a.png"},87846:function(e,t,n){t.Z=n.p+"assets/images/recovery-code-10a4b90c03726560f9b2825ace8cf94e.png"},7183:function(e,t,n){t.Z=n.p+"assets/images/scan-369edf2fbf5c12cc54f1376be4e54a63.png"},56770:function(e,t,n){t.Z=n.p+"assets/images/signed-in-as-c10f9794587374a04d0457067896152c.png"},15293:function(e,t,n){t.Z=n.p+"assets/images/two-factor-reset-c1e5be8083e61419bf6c409abcf3c4ce.png"},69286:function(e,t,n){t.Z=n.p+"assets/images/verify-2fa-29177cd12f41d0a915e979017b174730.png"},48563:function(e,t,n){t.Z=n.p+"assets/images/verify-email-a14cb83becd17368825987b2a2761479.png"}}]);