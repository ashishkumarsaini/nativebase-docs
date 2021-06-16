(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return r})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return A}));var n=a(3),o=a(7),s=(a(0),a(742)),r={id:"toast",title:"Toast"},i={unversionedId:"toast",id:"version-3.0.0-next.37/toast",isDocsHomePage:!1,title:"Toast",description:"Toast is used to show alerts on top of an overlay. Toast will close itself when the close button is clicked, or after a timeout \u2014 the default is 5 seconds. The toast component is used to give feeback to users after an action has taken place.",source:"@site/versioned_docs/version-3.0.0-next.37/toast.md",slug:"/toast",permalink:"/3.0.0-next.37/toast",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.37/toast.md",version:"3.0.0-next.37",sidebar:"version-3.0.0-next.37/componentsSidebar",previous:{title:"Spinner",permalink:"/3.0.0-next.37/spinner"},next:{title:"Text",permalink:"/3.0.0-next.37/text"}},c=[{value:"Import",id:"import",children:[]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Position",id:"position",children:[]},{value:"Custom component",id:"custom-component",children:[]},{value:"Closing Toasts",id:"closing-toasts",children:[]},{value:"Status",id:"status",children:[]},{value:"Status",id:"status-1",children:[]},{value:"Preventing Duplicate Toast",id:"preventing-duplicate-toast",children:[]}]},{value:"Props",id:"props",children:[]},{value:"Accessibility",id:"accessibility",children:[]}],d={toc:c};function A(t){var e=t.components,a=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,a,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Toast")," is used to show alerts on top of an overlay. ",Object(s.b)("inlineCode",{parentName:"p"},"Toast")," will close itself when the close button is clicked, or after a timeout \u2014 the default is 5 seconds. The toast component is used to give feeback to users after an action has taken place."),Object(s.b)("p",null,"Toasts can be configured to appear at either the top or the bottom of an application window, and it is possible to have more than one toast onscreen at a time."),Object(s.b)("h2",{id:"import"},"Import"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { useToast } from 'native-base';\n")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"basic"},"Basic"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Button%2C%20useToast%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20toast%20%3D%20useToast()%0A%20%20return%20(%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hello%20world%22%2C%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Bottom%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"position"},"Position"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20useToast%2C%0A%20%20VStack%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20toast%20%3D%20useToast()%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hello%20world%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20%22bottom%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Bottom%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hello%20world%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20%22top%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Top%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hello%20world%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20%22top-left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Top%20left%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hello%20world%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20%22top-right%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%22pink.400%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Top%20right%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hello%20world%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20%22bottom-left%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Bottom%20left%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hello%20world%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20placement%3A%20%22bottom-right%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Bottom%20right%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"custom-component"},"Custom component"),Object(s.b)("p",null,"Display a custom component instead of the default Toast UI."),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Button%2C%20useToast%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20toast%20%3D%20useToast()%0A%20%20return%20(%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20render%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CBox%20bg%3D%22teal.500%22%20px%3D%7B4%7D%20py%3D%7B3%7D%20rounded%3D%22md%22%20mb%3D%7B5%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Hi%2C%20Nice%20to%20see%20you%20(%20%C2%B4%20%E2%88%80%20%60%20)%EF%BE%89%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FBox%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Custom%20Toast%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"closing-toasts"},"Closing Toasts"),Object(s.b)("p",null,"Toasts can be closed imperatively, individually (via the close instance method) or all together (via the closeAll instance method)."),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20useToast%2C%0A%20%20VStack%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20toast%20%3D%20useToast()%0A%20%20const%20toastIdRef%20%3D%20React.useRef()%0A%0A%20%20function%20close()%20%7B%0A%20%20%20%20if%20(toastIdRef.current)%20%7B%0A%20%20%20%20%20%20toast.close(toastIdRef.current)%0A%20%20%20%20%7D%0A%20%20%7D%0A%0A%20%20function%20closeAll()%20%7B%0A%20%20%20%20toast.closeAll()%0A%20%20%7D%0A%0A%20%20function%20addToast()%20%7B%0A%20%20%20%20toastIdRef.current%20%3D%20toast.show(%7B%0A%20%20%20%20%20%20title%3A%20%22Hi%2C%20Nice%20to%20see%20you%20(%20%C2%B4%20%E2%88%80%20%60%20)%EF%BE%89%22%2C%0A%20%20%20%20%7D)%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BaddToast%7D%3EToast%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7Bclose%7D%20variant%3D%22outline%22%3E%0A%20%20%20%20%20%20%20%20Close%20last%20toast%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%20%20%3CButton%20onPress%3D%7BcloseAll%7D%20variant%3D%22outline%22%3E%0A%20%20%20%20%20%20%20%20Close%20all%20toasts%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"status"},"Status"),Object(s.b)("p",null,"You can use status to change the color of your toasts."),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20useToast%2C%0A%20%20VStack%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20toast%20%3D%20useToast()%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Account%20verified%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22success%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%20%22Thanks%20for%20signing%20up%20with%20us.%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Success%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Something%20went%20wrong%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22error%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%20%22Please%20create%20a%20support%20ticket%20from%20the%20support%20page%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Error%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Network%20connection%20restored%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22info%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22This%20is%20to%20inform%20you%20that%20your%20network%20connectivity%20is%20restored%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Info%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Invalid%20email%20address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22warning%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%20%22Please%20enter%20a%20valid%20email%20address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Warning%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"status-1"},"Status"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Toast")," uses the same variants as the ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/3.0.0-next.37/alert"}),"Alert")," component."),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20useToast%2C%0A%20%20VStack%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20toast%20%3D%20useToast()%0A%20%20return%20(%0A%20%20%20%20%3CVStack%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Account%20verified%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22success%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%20%22Thanks%20for%20signing%20up%20with%20us.%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Success%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Something%20went%20wrong%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22error%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%20%22Please%20create%20a%20support%20ticket%20from%20the%20support%20page%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Error%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Network%20connection%20restored%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22info%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22This%20is%20to%20inform%20you%20that%20your%20network%20connectivity%20is%20restored%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Info%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Invalid%20email%20address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20status%3A%20%22warning%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20description%3A%20%22Please%20enter%20a%20valid%20email%20address%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Warning%0A%20%20%20%20%20%20%3C%2FButton%3E%0A%20%20%20%20%3C%2FVStack%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"preventing-duplicate-toast"},"Preventing Duplicate Toast"),Object(s.b)("p",null,"In some cases you might need to prevent duplicate of specific toasts. To achieve you need to pass an id and use the toast.isActive method to determine when to call toast.show(...)."),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20Button%2C%20useToast%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20function%20Example()%20%7B%0A%20%20const%20toast%20%3D%20useToast()%0A%20%20const%20id%20%3D%20%22test-toast%22%0A%20%20return%20(%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20if%20(!toast.isActive(id))%20%7B%0A%20%20%20%20%20%20%20%20%20%20toast.show(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3A%20%22Hey!%20You%20can't%20create%20a%20duplicate%20toast%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20Click%20me!%0A%20%20%20%20%3C%2FButton%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("p",null,"Below props can be passed while calling toast.show."),Object(s.b)("undefined",null,Object(s.b)("table",null,"\n  ",Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        title\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ReactNode\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The title to be rendered in the Toast\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        description\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ReactNode\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The description of the toast\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        duration\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The delay before the toast hides (in milliseconds). If set to `null`, toast will never dismiss.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        5000\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        id\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        any\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The `id` of the toast. Mostly used when you need to prevent duplicate. By default, we generate a unique `id` for each toast\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        isClosable\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        If `true`, toast will show a close button\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        onCloseComplete\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        () => void\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Callback function to run side effects after the toast has closed.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        placement\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},'\n        "bottom" | "top" | "top-right" | "top-left" | "bottom-left" | "bottom-right"\n      '),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The placement of the toast. Defaults to bottom\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        bottom\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        render\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        (props: any) => ReactNode\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Render a component toast component. Any component passed will receive 2 props: `id` and `onClose`.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        status\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},'\n        "info" | "warning" | "error" | "success"\n      '),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The status of the toast. Adding status will render an [Alert](alert.md) component inside the `Toast`\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        variant\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},'\n        "solid" | "subtle" | "left-accent" | "top-accent" | "outline" | "outline-light"\n      '),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The variants of the [Alert](alert.md) component.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        accessibilityAnnouncement\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        string\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        The text to be announced by a screen reader when the Toast opens.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        accessibilityLiveRegion\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},'\n        "none" | "polite" | "assertive"\n      '),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Determines the [accessibility announcement tone](https://reactnative.dev/docs/accessibility#accessibilityliveregion-android).\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(s.b)("p",null,"Toast implements ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(s.b)("h2",{id:"accessibility"},"Accessibility"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"On Android and Web, Toast renders under a View with accessibilityLiveRegion which announces the content rendered inside it to screen reader devices."),Object(s.b)("li",{parentName:"ul"},"On iOS, accessibilityLiveRegion is not supported yet, so we use the ",Object(s.b)("a",Object(n.a)({parentName:"li"},{href:"https://reactnative.dev/docs/accessibilityinfo#announceforaccessibility"}),"accessibilityAnnouncement")," to announce the content.")))}A.isMDXComponent=!0},742:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return u}));var n=a(0),o=a.n(n);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var d=o.a.createContext({}),A=function(t){var e=o.a.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},l=function(t){var e=A(t.components);return o.a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},b=o.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,r=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),l=A(a),b=n,u=l["".concat(r,".").concat(b)]||l[b]||p[b]||s;return a?o.a.createElement(u,i(i({ref:e},d),{},{components:a})):o.a.createElement(u,i({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,r=new Array(s);r[0]=b;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,r[1]=i;for(var d=2;d<s;d++)r[d]=a[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);