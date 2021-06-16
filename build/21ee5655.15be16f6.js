(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return f})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(742)),l=a(748),c=a(749),o=a(766),s={id:"install-rn",title:"Install in React Native CLI initiated project"},d={unversionedId:"install-rn",id:"install-rn",isDocsHomePage:!1,title:"Install in React Native CLI initiated project",description:"Create a new project",source:"@site/docs/install-rn.mdx",slug:"/install-rn",permalink:"/next/install-rn",editUrl:"https://github.com/nativebase/website/tree/main/docs/install-rn.mdx",version:"current",sidebar:"componentsSidebar",previous:{title:"Install in Expo project",permalink:"/next/install-expo"},next:{title:"Install in Create React App project",permalink:"/next/install-cra"}},f=[{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Run pod install",id:"run-pod-install",children:[]},{value:"Run the Hello world example",id:"run-the-hello-world-example",children:[]}],m={toc:f};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"react-native init AwesomeNativeBase\ncd AwesomeNativeBase\n")),Object(i.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(i.b)(l.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add native-base@next react-native-svg styled-components styled-system react-native-safe-area-context\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install native-base@next react-native-svg styled-components styled-system react-native-safe-area-context\n")))),Object(i.b)("h3",{id:"run-pod-install"},"Run pod install"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd ios/\npod install\n")),Object(i.b)("h3",{id:"run-the-hello-world-example"},"Run the Hello world example"),Object(i.b)("p",null,"Put the below code in your App.js"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { NativeBaseProvider, Box } from 'native-base';\n\nfunction App() {\n  return (\n    <NativeBaseProvider>\n      <Box>Hello world</Box>\n    </NativeBaseProvider>\n  );\n}\n")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)("img",{src:"/img/minion.gif"})),Object(i.b)("div",{className:"tailwind"},Object(i.b)("div",{className:"mt-4 mb-8"},Object(i.b)("div",{className:"row"},Object(i.b)(o.h,{title:"Customize NativeBaseProvider",url:"setup-provider",description:"NativeBaseProvider provides theme throughout your application",className:"bg-gray-700 mt-2",mdxType:"TileLink"}),Object(i.b)(o.h,{title:"Theme",url:"default-theme",description:"Read more about the default NativeBase theme and how to override it",className:"bg-gray-700  mt-2",mdxType:"TileLink"})),Object(i.b)("div",{className:"row mt-2"},Object(i.b)(o.h,{title:"Utility props",url:"utility-props",description:"Shorthands of commonly used styling props which maps with the provided theme",className:"bg-gray-700",mdxType:"TileLink"})))))}u.isMDXComponent=!0},743:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},746:function(e,t,a){"use strict";var n=a(0),r=a(747);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},747:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},748:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(746),l=a(744),c=a(56),o=a.n(c);const s=37,d=39;t.a=function(e){const{lazy:t,block:a,defaultValue:c,values:f,groupId:m,className:u}=e,{tabGroupChoices:b,setTabGroupChoices:p}=Object(i.a)(),[v,h]=Object(n.useState)(c),g=n.Children.toArray(e.children);if(null!=m){const e=b[m];null!=e&&e!==v&&f.some(t=>t.value===e)&&h(e)}const x=e=>{h(e),null!=m&&p(m,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},u)},f.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===e,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":v===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case d:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>x(e),onClick:()=>{x(e)}},t))),t?Object(n.cloneElement)(g.filter(e=>e.props.value===v)[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==v}))))}},749:function(e,t,a){"use strict";var n=a(743),r=a(0),i=a.n(r);t.a=function({children:e,hidden:t,className:a}){return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},751:function(e,t,a){"use strict";var n=a(0),r=a(764);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},756:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},757:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),l=a(756),c=a(8);const o=Object(n.createContext)({collectLink:()=>{}});var s=a(760),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,{isNavLink:a,to:f,href:m,activeClassName:u,isActive:b,"data-noBrokenLinkCheck":p,autoAddBaseUrl:v=!0}=e,h=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:g}=Object(s.b)(),x=Object(n.useContext)(o),y=f||m,w=Object(l.a)(y),j=null==y?void 0:y.replace("pathname://",""),E=void 0!==j?(N=j,v&&(e=>e.startsWith("/"))(N)?g(N):N):void 0;var N;const O=Object(n.useRef)(!1),k=a?i.e:i.c,C=c.a.canUseIntersectionObserver;let B;Object(n.useEffect)(()=>(!C&&w&&window.docusaurus.prefetch(E),()=>{C&&B&&B.disconnect()}),[E,C,w]);const I=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,S=!E||!w||I;return E&&w&&!I&&!p&&x.collectLink(E),S?r.a.createElement("a",Object.assign({href:E},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(k,Object.assign({},h,{onMouseEnter:()=>{O.current||(window.docusaurus.preload(E),O.current=!0)},innerRef:e=>{var t,a;C&&e&&w&&(t=e,a=()=>{window.docusaurus.prefetch(E)},B=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),a())})}),B.observe(t))},to:E||""},a&&{isActive:b,activeClassName:u}))}},760:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var n=a(22),r=a(756);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(n)return t+a;const l=!a.startsWith(t)?t+a.replace(/^\//,""):a;return i?e+l:l}(t,e,a,n)}}function l(e,t={}){const{withBaseUrl:a}=i();return a(e,t)}},764:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext(void 0);t.a=r},766:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"g",(function(){return u})),a.d(t,"a",(function(){return b})),a.d(t,"e",(function(){return p})),a.d(t,"h",(function(){return h})),a.d(t,"f",(function(){return x})),a.d(t,"d",(function(){return y})),a.d(t,"i",(function(){return j}));var n=a(0),r=a.n(n);var i=({name:e,variants:t})=>(e=e.charAt(0).toUpperCase()+e.slice(1),r.a.createElement("div",null,r.a.createElement("h3",{style:{marginTop:"3rem"}},e),r.a.createElement("div",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"repeat( auto-fit, minmax(200px, 1fr) )",marginTop:"1rem"}},Object.keys(t).map((a,n)=>r.a.createElement("div",{style:{display:"flex",flexDirection:"row"},key:`color-component-${a}-${n}`},r.a.createElement("div",{style:{width:"3rem",height:"3rem",backgroundColor:t[a],borderRadius:"0.375rem",marginRight:"0.5rem"}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{style:{fontWeight:"bold"}},`${"Singletons"!==e?e:""} ${a.charAt(0).toUpperCase()+a.slice(1)}`),r.a.createElement("div",null,t[a])))))));const l={singletons:{white:"#FFFFFF",black:"#000000",lightText:"#FFFFFF",darkText:"#27272a"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},lightBlue:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},warmGray:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},trueGray:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},gray:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},dark:{50:"#18181b",100:"#27272a",200:"#3f3f46",300:"#52525b",400:"#71717a",500:"#a1a1aa",600:"#d4d4d8",700:"#e4e4e7",800:"#f4f4f5",900:"#fafafa"},coolGray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},blueGray:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"}};var c=({})=>r.a.createElement("div",null,Object.keys(l).map((e,t)=>r.a.createElement(i,{variants:l[e],name:e,key:`space-block-${e}-${t}`})));var o=({name:e,value:t})=>r.a.createElement("div",{style:{display:"flex",alignItems:"flex-start",paddingTop:10,paddingBottom:10}},r.a.createElement("dt",{style:{lineHeight:1,width:"48px",flexShrink:0}},e),r.a.createElement("dd",{style:{lineHeight:"xs"!==t?1:void 0,fontSize:t,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:"600px",marginLeft:"20px"}},"The quick brown fox jumped over the lazy dog."));const s={xxs:10,xs:12,sm:14,md:16,lg:18,xl:20,"2xl":24,"3xl":30,"4xl":36,"5xl":48,"6xl":60,"7xl":72,"8xl":96,"9xl":128};var d=({})=>r.a.createElement("dl",{style:{backgroundColor:"#292d3e",borderRadius:4,padding:16,color:"white"}},Object.keys(s).map((e,t)=>r.a.createElement(o,{name:e,value:s[e],key:`space-component-${e}-${t}`})));var f=({name:e,value:t})=>r.a.createElement("tr",{style:{backgroundColor:"inherit"}},r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},e),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},t),r.a.createElement("td",{style:{borderWidth:0,borderBottomWidth:1}},r.a.createElement("div",{style:{height:16,width:t,backgroundColor:"#4B3AB2"}})));const m={px:"1px",.5:"2px",1:"4px",1.5:"6px",2:"8px",2.5:"10px",3:"12px",3.5:"14px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px",32:"128px",40:"160px",48:"192px",56:"224px",64:"256px",72:"288px",80:"320px",96:"384px"};var u=({})=>r.a.createElement("table",{style:{borderRadius:4,padding:16,borderWidth:0}},r.a.createElement("thead",null,r.a.createElement("tr",{style:{borderWidth:0}},r.a.createElement("th",{style:{borderWidth:0}}," Value "),r.a.createElement("th",{style:{borderWidth:0}}," Pixels "),r.a.createElement("th",{style:{borderWidth:0}},"Representation"))),r.a.createElement("tbody",null,Object.keys(m).map((e,t)=>r.a.createElement(f,{name:e,value:m[e],key:`space-component-${e}-${t}`}))));var b=()=>r.a.createElement("div",{className:"label android"},"Android");function p(){return r.a.createElement("div",{className:"kichen-sink-iframe mx-auto"},r.a.createElement("svg",{class:"kichen-sink-iframe-notch",viewBox:"0 0 219 31"},r.a.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),r.a.createElement("iframe",{loading:"lazy",importance:"low",frameBorder:"0",className:"kichen-sink-iframe-iframe",src:"https://kitchen-sink.vercel.app/"}))}var v=a(757);function h({title:e,description:t,className:a="",url:n,imgSrc:i,imgStyle:l,titleClassName:c="text-white",descriptionClassName:o="text-gray-100"}){return r.a.createElement(v.a,{to:n,className:"relative overflow-hidden no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 "+a},r.a.createElement("div",{className:"font-bold text-md mb-2 "+c},e),r.a.createElement("p",{className:" text-sm leading-5 "+o},t),r.a.createElement("div",{className:"absolute h-20 w-20",style:l||{right:-20,top:-10}},i&&r.a.createElement("img",{src:i})))}var g=a(751);function x(){const{isDarkTheme:e}=Object(g.a)(),t=e?"":"text-white",a=e?"border-gray-100":"border-gray-200",n=e?"bg-gray-600":"bg-gray-500";return r.a.createElement("div",{className:"border-0 border-l-4 border-solid "+t+" "+a},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("div",{className:"w-5 h-5 bg-indigo-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 bg-indigo-500 shadow-xl rounded-md",style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v3"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v2"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))),r.a.createElement("div",{className:"flex items-center mt-8"},r.a.createElement("div",{className:"w-5 h-5 bg-gray-500 rounded-full",style:{marginLeft:"-12px"}}),r.a.createElement("div",{className:"ml-8 py-5 px-6 shadow-xl rounded-md "+n,style:{maxWidth:"100%",width:"100%"}},r.a.createElement("h4",null,"v1"),r.a.createElement("span",null,"NativeBase is a free and open source UI component library for React Native to build native mobile apps for iOS and Android platforms. NativeBase also supports web from version 2.4.1."))))}function y(){const{isDarkTheme:e}=Object(g.a)(),t=e?"bg-blueGray-700":"bg-gray-600";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row -m-2"},r.a.createElement(h,{title:"Install in Expo project",url:"install-expo",description:"Follow this guide to install NativeBase in your existing or new Expo project",className:"mt-2 "+t,imgSrc:"/img/expo.svg",imgStyle:{top:50,right:-310,width:400,height:400,opacity:.1}}),r.a.createElement(h,{title:"Install in React Native CLI project",url:"install-rn",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/react-native.svg",imgStyle:{bottom:-50,right:-40,height:140,width:140,opacity:.1}})),r.a.createElement("div",{className:"mt-2 -m-2 row"},r.a.createElement(h,{title:"Install in NextJS project",url:"install-next",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/next.svg",imgStyle:{bottom:-180,right:-90,height:260,width:260,opacity:.1}}),r.a.createElement(h,{title:"Install in Create React App project",url:"install-cra",description:"Follow this guide to install NativeBase in your existing or new React Native CLI inititiated project",className:"mt-2 "+t,imgSrc:"/img/cra.svg",imgStyle:{bottom:-62,right:-45,height:165,width:165,opacity:.1}})))}var w=a(774);function j(){return n.createElement(w.NativeBaseProvider,null,n.createElement(w.Box,{bg:"primary.600",py:4,px:3,rounded:"md",alignSelf:"center",width:375,maxWidth:"100%"},n.createElement(w.HStack,{justifyContent:"space-between"},n.createElement(w.Box,{justifyContent:"space-between"},n.createElement(w.VStack,{space:2},n.createElement(w.Text,{fontSize:"sm",color:"white"},"Today @ 9PM"),n.createElement(w.Text,{color:"white",fontSize:"lg"},"Let's talk about avatar!")),n.createElement(w.Pressable,{rounded:"sm",bg:"primary.400",alignSelf:"flex-start",py:2,px:3},n.createElement(w.Text,{textTransform:"uppercase",fontSize:"sm",fontWeight:"bold",color:"white"},"Remind me"))),n.createElement(w.Image,{source:{uri:"https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg"},alt:"Aang flying and surrounded by clouds",height:100,rounded:"full",width:100}))))}},775:function(e,t){}}]);