"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6497],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={description:"Connect the knowledge of different models.",sidebar_position:2},l="Knowledge Graph",p={unversionedId:"portal-guide/concepts/knowledge_graph",id:"portal-guide/concepts/knowledge_graph",title:"Knowledge Graph",description:"Connect the knowledge of different models.",source:"@site/docs/portal-guide/concepts/knowledge_graph.md",sourceDirName:"portal-guide/concepts",slug:"/portal-guide/concepts/knowledge_graph",permalink:"/portal-guide/concepts/knowledge_graph",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/portal-guide/concepts/knowledge_graph.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Connect the knowledge of different models.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create, Get, Update, Delete",permalink:"/portal-guide/concepts/create-get-update-delete"},next:{title:"Languages",permalink:"/portal-guide/concepts/languages"}},c=[],u={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"knowledge-graph"},"Knowledge Graph"),(0,r.kt)("p",null,"The Clarifai Knowledge Graph lets you map your custom concepts to a common set of concepts understood by all applications on the Clarifai platform. The knowledge graph makes it possible to link data across multiple custom and pre-built models in a meaningful way."),(0,r.kt)("p",null,"The Knowledge Graph uses Clarifai's concept mapping model to establish a hierarchical relationship between your concepts. Concept relationships are organized by three different ",(0,r.kt)("em",{parentName:"p"},"predicates"),": hypernyms, hyponyms, and synonyms."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hyponym")," represents an 'is a kind of' relation. The following relationship: 'honey' ","(","subject",")",", 'hyponym' ","(","predicate",")",", 'food' ","(","object",")"," is more easily be read as 'honey' 'is a kind of' 'food'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hypernym")," is the opposite of 'hyponym'. When you add one of the relationships the opposite will automatically appear for you in queries. The 'hypernym' can be read as 'is a parent of' so: 'food' ","(","subject",")",", 'hypernym' ","(","predicate",")",", 'honey' ","(","object",")"," can more easily be read as:'food' is a parent of 'honey'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Synonym"),' The \'synonym\' relation defines two concepts that essential mean the same thing. This is more like a "is" relationship. So for example a \'synonym\' relationship could be: "puppy" is "pup" The reverse is also true once the former is added so: "pup" is "puppy" will appear in queries as well.'),(0,r.kt)("p",null,"You can create these mappings in your application with a few easy steps."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Consider the following application that has four concepts: beverages, smoothie, breakfast, and french","_","toast. You can use the Knowledge Graph to create hierarchical relationships between the concepts.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(97248).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can link concepts as hierarchical by going to the details of either of the concepts. In the shown application, french","_","toast falls under breakfast. You can link them by accessing the View Details section of either concept.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(39017).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Once, in the details dashboard, you can link breakfast as a hypernym to french","_","toast under the Input Relations menu.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(34914).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Once you list breakfast as a hypernym to french","_","toast, it will set french","_","toast as a hyponym to breakfast automatically.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62749).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"This process can be used to create similar relationships between beverages and smoothie. Beverages will be listed as a hypernym to smoothie.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(88905).Z})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"By doing this, smoothie will be listed as a hyponym to beverages automatically.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(62140).Z})))}d.isMDXComponent=!0},97248:function(e,t,n){t.Z=n.p+"assets/images/kg1-2c933a013ca7d23b294b8189039b0beb.png"},39017:function(e,t,n){t.Z=n.p+"assets/images/kg2-3815cf078354127afc7a3a3b0975affc.png"},34914:function(e,t,n){t.Z=n.p+"assets/images/kg3-6d79807c559c9671b95f7ab20d163131.png"},62749:function(e,t,n){t.Z=n.p+"assets/images/kg4-a4072c4e2613acff51baa4c77baf84dc.png"},88905:function(e,t,n){t.Z=n.p+"assets/images/kg5-89e93df63d38f954caf5a3cd1e5aea25.png"},62140:function(e,t,n){t.Z=n.p+"assets/images/kg6-845a036f5276eb9b39c7349452d1f495.png"}}]);