"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8401],{71243:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(58168),l=n(96540),o=n(20053),r=n(17559),i=n(84142),c=n(99169),s=n(75489),d=n(21312),m=n(86025);function u(e){return l.createElement("svg",(0,a.A)({viewBox:"0 0 24 24"},e),l.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const p={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,m.A)("/");return l.createElement("li",{className:"breadcrumbs__item"},l.createElement(s.A,{"aria-label":(0,d.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},l.createElement(u,{className:p.breadcrumbHomeIcon})))}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function f(e){let{children:t,href:n,isLast:a}=e;const o="breadcrumbs__link";return a?l.createElement("span",{className:o,itemProp:"name"},t):n?l.createElement(s.A,{className:o,href:n,itemProp:"item"},l.createElement("span",{itemProp:"name"},t)):l.createElement("span",{className:o},t)}function b(e){let{children:t,active:n,index:r,addMicrodata:i}=e;return l.createElement("li",(0,a.A)({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,o.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,l.createElement("meta",{itemProp:"position",content:String(r+1)}))}function E(){const e=(0,i.OF)(),t=(0,c.Dt)();return e?l.createElement("nav",{className:(0,o.A)(r.G.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,d.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},l.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&l.createElement(h,null),e.map(((t,n)=>{const a=n===e.length-1;return l.createElement(b,{key:n,active:a,index:n,addMicrodata:!!t.href},l.createElement(f,{href:t.href,isLast:a},t.label))})))):null}},23332:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var a=n(96540),l=n(69024),o=n(89532);const r=a.createContext(null);function i(e){let{children:t,content:n}=e;const l=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(r.Provider,{value:l},t)}function c(){const e=(0,a.useContext)(r);if(null===e)throw new o.dV("DocProvider");return e}function s(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(l.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var d=n(20053),m=n(24581),u=n(86929);function p(){const{metadata:e}=c();return a.createElement(u.A,{previous:e.previous,next:e.next})}var h=n(51878),v=n(4267),f=n(17559),b=n(21312);function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(b.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function g(e){let{lastUpdatedBy:t}=e;return a.createElement(b.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:l}=e;return a.createElement("span",{className:f.G.common.lastUpdated},a.createElement(b.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:l?a.createElement(g,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=n(58168);const C={iconEdit:"iconEdit_Z9Sw"};function L(e){let{className:t,...n}=e;return a.createElement("svg",(0,N.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,d.A)(C.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function _(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:f.G.common.editThisPage},a.createElement(L,null),a.createElement(b.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=n(75489);const k={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function y(e){let{permalink:t,label:n,count:l}=e;return a.createElement(T.A,{href:t,className:(0,d.A)(k.tag,l?k.tagWithCount:k.tagRegular)},n,l&&a.createElement("span",null,l))}const x={tags:"tags_jXut",tag:"tag_QGVx"};function H(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(b.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,d.A)(x.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:x.tag},a.createElement(y,{label:t,permalink:n}))}))))}const w={lastUpdated:"lastUpdated_vwxv"};function M(e){return a.createElement("div",{className:(0,d.A)(f.G.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(H,e)))}function U(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return a.createElement("div",{className:(0,d.A)(f.G.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(_,{editUrl:t})),a.createElement("div",{className:(0,d.A)("col",w.lastUpdated)},(n||l)&&a.createElement(A,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function B(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,i=r.length>0,s=!!(t||n||o);return i||s?a.createElement("footer",{className:(0,d.A)(f.G.docs.docFooter,"docusaurus-mt-lg")},i&&a.createElement(M,{tags:r}),s&&a.createElement(U,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var I=n(41422),S=n(6342);function V(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function z(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=z({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function O(e){const t=e.getBoundingClientRect();return t.top===t.bottom?O(e.parentNode):t}function R(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>O(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(O(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function D(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,S.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function G(e){const t=(0,a.useRef)(void 0),n=D();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:r}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=R(i,{anchorTopOffset:n.current}),s=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function P(e){let{toc:t,className:n,linkClassName:l,isChild:o}=e;return t.length?a.createElement("ul",{className:o?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(P,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const W=a.memo(P);function F(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:i,...c}=e;const s=(0,S.p)(),d=r??s.tableOfContents.minHeadingLevel,m=i??s.tableOfContents.maxHeadingLevel,u=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>z({toc:V(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:m});return G((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:m}}),[l,o,d,m])),a.createElement(W,(0,N.A)({toc:u,className:n,linkClassName:l},c))}const q={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function j(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,N.A)({type:"button"},n,{className:(0,d.A)("clean-btn",q.tocCollapsibleButton,!t&&q.tocCollapsibleButtonExpanded,n.className)}),a.createElement(b.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const $={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function Y(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:i}=(0,I.u)({initialState:!0});return a.createElement("div",{className:(0,d.A)($.tocCollapsible,!r&&$.tocCollapsibleExpanded,n)},a.createElement(j,{collapsed:r,onClick:i}),a.createElement(I.N,{lazy:!0,className:$.tocCollapsibleContent,collapsed:r},a.createElement(F,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const Q={tocMobile:"tocMobile_ITEo"};function Z(){const{toc:e,frontMatter:t}=c();return a.createElement(Y,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.A)(f.G.docs.docTocMobile,Q.tocMobile)})}const X={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},J="table-of-contents__link toc-highlight",K="table-of-contents__link--active";function ee(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,d.A)(X.tableOfContents,"thin-scrollbar",t)},a.createElement(F,(0,N.A)({},n,{linkClassName:J,linkActiveClassName:K})))}function te(){const{toc:e,frontMatter:t}=c();return a.createElement(ee,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var ne=n(51107),ae=n(15680),le=n(5260);var oe=n(77964);var re=n(92303);const ie={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function ce(e){return!!e&&("SUMMARY"===e.tagName||ce(e.parentElement))}function se(e,t){return!!e&&(e===t||se(e.parentElement,t))}function de(e){let{summary:t,children:n,...l}=e;const o=(0,re.A)(),r=(0,a.useRef)(null),{collapsed:i,setCollapsed:c}=(0,I.u)({initialState:!l.open}),[s,m]=(0,a.useState)(l.open),u=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,N.A)({},l,{ref:r,open:s,"data-collapsed":i,className:(0,d.A)(ie.details,o&&ie.isBrowser,l.className),onMouseDown:e=>{ce(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;ce(t)&&se(t,r.current)&&(e.preventDefault(),i?(c(!1),m(!0)):c(!0))}}),u,a.createElement(I.N,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)}},a.createElement("div",{className:ie.collapsibleContent},n)))}const me={details:"details_b_Ee"},ue="alert alert--info";function pe(e){let{...t}=e;return a.createElement(de,(0,N.A)({},t,{className:(0,d.A)(ue,me.details,t.className)}))}function he(e){return a.createElement(ne.A,e)}const ve={containsTaskList:"containsTaskList_mC6p"};const fe={img:"img_ev3q"};const be="admonition_LlT9",Ee="admonitionHeading_tbUL",ge="admonitionIcon_kALy",Ae="admonitionContent_S0QG";const Ne={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(b.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(b.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(b.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(b.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(b.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ce={secondary:"note",important:"info",success:"tip",warning:"danger"};function Le(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}const _e={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(le.A,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(oe.A,e)},a:function(e){return a.createElement(T.A,e)},pre:function(e){return a.createElement(oe.A,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(pe,(0,N.A)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,N.A)({},e,{className:(t=e.className,(0,d.A)(t,t?.includes("contains-task-list")&&ve.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,N.A)({loading:"lazy"},e,{className:(t=e.className,(0,d.A)(t,fe.img))}));var t},h1:e=>a.createElement(he,(0,N.A)({as:"h1"},e)),h2:e=>a.createElement(he,(0,N.A)({as:"h2"},e)),h3:e=>a.createElement(he,(0,N.A)({as:"h3"},e)),h4:e=>a.createElement(he,(0,N.A)({as:"h4"},e)),h5:e=>a.createElement(he,(0,N.A)({as:"h5"},e)),h6:e=>a.createElement(he,(0,N.A)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:o}=Le(e),r=function(e){const t=Ce[e]??e,n=Ne[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Ne.info)}(n),i=l??r.label,{iconComponent:c}=r,s=o??a.createElement(c,null);return a.createElement("div",{className:(0,d.A)(f.G.common.admonition,f.G.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,be)},a.createElement("div",{className:Ee},a.createElement("span",{className:ge},s),i),a.createElement("div",{className:Ae},t))},mermaid:()=>null};function Te(e){let{children:t}=e;return a.createElement(ae.xA,{components:_e},t)}function ke(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,d.A)(f.G.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(ne.A,{as:"h1"},n)),a.createElement(Te,null,t))}var ye=n(71243);const xe={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function He(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?a.createElement(Z,null):void 0,desktop:!o||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(te,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,d.A)("col",!n.hidden&&xe.docItemCol)},a.createElement(h.A,null),a.createElement("div",{className:xe.docItemContainer},a.createElement("article",null,a.createElement(ye.A,null),a.createElement(v.A,null),n.mobile,a.createElement(ke,null,t),a.createElement(B,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function we(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(i,{content:e.content},a.createElement(l.e3,{className:t},a.createElement(s,null),a.createElement(He,null,a.createElement(n,null))))}},86929:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(58168),l=n(96540),o=n(21312),r=n(20053),i=n(75489);function c(e){const{permalink:t,title:n,subLabel:a,isNext:o}=e;return l.createElement(i.A,{className:(0,r.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&l.createElement("div",{className:"pagination-nav__sublabel"},a),l.createElement("div",{className:"pagination-nav__label"},n))}function s(e){const{previous:t,next:n}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&l.createElement(c,(0,a.A)({},t,{subLabel:l.createElement(o.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&l.createElement(c,(0,a.A)({},n,{subLabel:l.createElement(o.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4267:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(96540),l=n(20053),o=n(21312),r=n(17559),i=n(32252);function c(e){let{className:t}=e;const n=(0,i.r)();return n.badge?a.createElement("span",{className:(0,l.A)(t,r.G.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},51878:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(96540),l=n(20053),o=n(44586),r=n(75489),i=n(21312),c=n(44070),s=n(17559),d=n(55597),m=n(32252);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(i.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){let{versionLabel:t,to:n,onClick:l}=e;return a.createElement(i.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(r.A,{to:n,onClick:l},a.createElement(i.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,o.A)(),{pluginId:i}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:m}=(0,d.g1)(i),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.HW)(i),f=u??(b=v).docs.find((e=>e.id===b.mainDocId));var b;return a.createElement("div",{className:(0,l.A)(t,s.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(p,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:v.label,to:f.path,onClick:()=>m(v.name)})))}function f(e){let{className:t}=e;const n=(0,m.r)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},51107:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(58168),l=n(96540),o=n(20053),r=n(21312),i=n(6342),c=n(75489);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.p)();if("h1"===t||!n)return l.createElement(t,(0,a.A)({},d,{id:void 0}));const u=(0,r.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return l.createElement(t,(0,a.A)({},d,{className:(0,o.A)("anchor",m?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,d.className),id:n}),d.children,l.createElement(c.A,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}}}]);