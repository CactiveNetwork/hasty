"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[524],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5614:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={sidebar_position:4,id:"delete",description:"Hasty delete method"},d="Delete method",p={unversionedId:"methods/delete",id:"methods/delete",isDocsHomePage:!1,title:"Delete method",description:"Hasty delete method",source:"@site/docs/methods/delete.mdx",sourceDirName:"methods",slug:"/methods/delete",permalink:"/docs/methods/delete",editUrl:"https://github.com/CactiveNetwork/hasty-docs/edit/main/docs/docs/methods/delete.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"delete",description:"Hasty delete method"},sidebar:"tutorialSidebar",previous:{title:"Clear method",permalink:"/docs/methods/clear"},next:{title:"Get method",permalink:"/docs/methods/get"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2},{value:"Return Type",id:"return-type",children:[],level:2}],u={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"delete-method"},"Delete method"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"<","Hasty",">"),".",(0,l.kt)("strong",{parentName:"p"},"delete"),"(key, options?)")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Key to delete, allows dot notation."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("hr",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="delete.js"',title:'"delete.js"'},"// Avoid subpoena's\n<Hasty>.set('illegal_content.tax_fraud', [...])\n<Hasty>.delete('illegal_content.tax_fraud') // true\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Key to delete, allows dot notation."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Options"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional method options."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/types/method-options"},"MethodOptions")),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("h2",{id:"return-type"},"Return Type"),(0,l.kt)("p",null,"<","Hasty",">",".delete() whether the deletion was successful.\nSee ",(0,l.kt)("a",{parentName:"p",href:"#example"},"example"),"."))}c.isMDXComponent=!0}}]);