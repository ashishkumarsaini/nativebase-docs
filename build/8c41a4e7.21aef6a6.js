(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{459:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(742)),i={id:"customizingComponents",title:"Customising Components"},s={unversionedId:"customizingComponents",id:"version-3.0.0-next.38/customizingComponents",isDocsHomePage:!1,title:"Customising Components",description:"NativeBase theme is complex object which looks like",source:"@site/versioned_docs/version-3.0.0-next.38/customizingComponents.md",slug:"/customizingComponents",permalink:"/3.0.0-next.38/customizingComponents",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.38/customizingComponents.md",version:"3.0.0-next.38",sidebar:"version-3.0.0-next.38/componentsSidebar",previous:{title:"Making components dark mode compatible",permalink:"/3.0.0-next.38/darkMode"},next:{title:"Breakpoints",permalink:"/3.0.0-next.38/breakpoint"}},c=[{value:"Basic",id:"basic",children:[]},{value:"Customizing Base Style",id:"customizing-base-style",children:[]},{value:"Adding Variants",id:"adding-variants",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"NativeBase theme is complex object which looks like"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"// theme\n{\n    colors: {...},\n    fonts: {...},\n    .\n    .\n    .\n    config: {...},\n}\n")),Object(r.b)("p",null,"using NativeBase's ",Object(r.b)("inlineCode",{parentName:"p"},"extendTheme")," function, we can update theme object. You can customize the components at multiple levels."),Object(r.b)("h2",{id:"basic"},"Basic"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react';\nimport { NativeBaseProvider, extendTheme } from 'native-base';\n\nexport default function () {\n  const theme = extendTheme({\n    components: {\n      Button: {\n        // Can simply pass default props to change default behaviour of components.\n        defaultProps: {\n          colorScheme: 'red',\n        },\n      },\n      Heading: {\n        // Can pass also function, giving you access theming tools\n        baseStyle: ({ colorMode }) => {\n          return {\n            color: colorMode === 'dark' ? 'red.300' : 'blue.300',\n            fontWeight: 'normal',\n          };\n        },\n      },\n    },\n  });\n  return (\n    <NativeBaseProvider theme={theme}>{/* components */}</NativeBaseProvider>\n  );\n}\n")),Object(r.b)("p",null,"From the above example we can observe that we customize components by passing the ",Object(r.b)("strong",{parentName:"p"},"components")," object with the ",Object(r.b)("strong",{parentName:"p"},"key")," being the ",Object(r.b)("strong",{parentName:"p"},"name")," of the ",Object(r.b)("strong",{parentName:"p"},"component"),". Whereas you set ",Object(r.b)("inlineCode",{parentName:"p"},"defaultProps")," or ",Object(r.b)("inlineCode",{parentName:"p"},"baseStyle")," to customize the components."),Object(r.b)("p",null,"Both defaultProps and baseStyle can either be simple object or function. You can use object simple use cases while the function when you want to use ",Object(r.b)("inlineCode",{parentName:"p"},"themeTools"),"."),Object(r.b)("h2",{id:"customizing-base-style"},"Customizing Base Style"),Object(r.b)("p",null,"You can specify the base style of the component and use it across project."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Customizing BaseStyle","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20NativeBaseProvider%2C%20Center%2C%20extendTheme%20%7D%20from%20'native-base'%3B%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20const%20theme%20%3D%20extendTheme(%7B%0A%20%20%20%20components%3A%20%7B%0A%20%20%20%20%20%20Text%3A%20%7B%0A%20%20%20%20%20%20%20%20baseStyle%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'emerald.400'%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20defaultProps%3A%20%7B%20size%3A%20'lg'%20%7D%2C%0A%20%20%20%20%20%20%20%20sizes%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20xl%3A%20%7B%20fontSize%3A%20'64px'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20lg%3A%20%7B%20fontSize%3A%20'32px'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20md%3A%20%7B%20fontSize%3A%20'16px'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20sm%3A%20%7B%20fontSize%3A%20'12px'%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%20theme%3D%7Btheme%7D%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ENativeBase%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}),Object(r.b)("h2",{id:"adding-variants"},"Adding Variants"),Object(r.b)("p",null,"You can also add the variants to the components and use it across project."),Object(r.b)("div",{className:"snack-player","data-snack-name":"Customizing Variants","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20NativeBaseProvider%2C%0A%20%20Button%2C%0A%20%20extendTheme%2C%0A%20%20Center%2C%0A%20%20VStack%2C%0A%7D%20from%20'native-base'%3B%0A%0Aexport%20default%20function%20()%20%7B%0A%20%20const%20theme%20%3D%20extendTheme(%7B%0A%20%20%20%20components%3A%20%7B%0A%20%20%20%20%20%20Button%3A%20%7B%0A%20%20%20%20%20%20%20%20variants%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20rounded%3A%20(%7B%20colorScheme%20%7D%3A%20any)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20bg%3A%20%60%24%7BcolorScheme%7D.500%60%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20rounded%3A%20'full'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%20theme%3D%7Btheme%7D%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22emerald%22%3EDefault%20Button%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20colorScheme%3D%22emerald%22%20variant%3D%22rounded%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20Rounded%20Button%0A%20%20%20%20%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%20%20%3C%2FVStack%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%3B%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient"}))}l.isMDXComponent=!0},742:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||r;return n?o.a.createElement(b,s(s({ref:t},p),{},{components:n})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);