(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{659:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),s=(a(0),a(742)),i={id:"list",title:"List"},o={unversionedId:"list",id:"version-3.0.0-next.40/list",isDocsHomePage:!1,title:"List",description:"List is used to display list items.",source:"@site/versioned_docs/version-3.0.0-next.40/list.md",slug:"/list",permalink:"/list",editUrl:"https://github.com/nativebase/website/tree/main/versioned_docs/version-3.0.0-next.40/list.md",version:"3.0.0-next.40",sidebar:"version-3.0.0-next.40/componentsSidebar",previous:{title:"Divider",permalink:"/divider"},next:{title:"Alert",permalink:"/alert"}},c=[{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Ordered List",id:"ordered-list",children:[]},{value:"Unordered List",id:"unordered-list",children:[]},{value:"Styled List",id:"styled-list",children:[]},{value:"Pressable List",id:"pressable-list",children:[]},{value:"List with ListIcon",id:"list-with-listicon",children:[]},{value:"Virtualized List",id:"virtualized-list",children:[]}]},{value:"Props",id:"props",children:[{value:"List",id:"list",children:[]},{value:"List.Item",id:"listitem",children:[]}]}],d={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"List is used to display list items."),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)("h3",{id:"basic"},"Basic"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3ETopics%20(Plain%20List)%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList%20space%3D%7B2%7D%20my%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EEducation%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EHealth%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EOffice%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3ESports%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"ordered-list"},"Ordered List"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3EBill-%23187%20(Ordered%20List)%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList.Ordered%20my%3D%7B2%7D%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EFruit%20Juice%20x%202%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3ECheddar%20cheese%20-%20200g%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EMilk%201L%20x%202%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EBrown%20Bread%20-%20400g%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList.Ordered%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"unordered-list"},"Unordered List"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3EMy%20Todos%20(Unordered%20List)%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList.Unordered%20my%3D%7B2%7D%20space%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EGet%20groceries%20by%20Tomorrow.%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EBook%20appointment%20with%20the%20Doc.%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EBill%20payment%20-%20Electricity.%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EPay%20Telephone%20Bill%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList.Unordered%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"styled-list"},"Styled List"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CHeading%20fontSize%3D%7B24%7D%3EStyled%20List%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList.Ordered%0A%20%20%20%20%20%20%20%20my%3D%7B2%7D%0A%20%20%20%20%20%20%20%20space%3D%7B2%7D%0A%20%20%20%20%20%20%20%20start%3D%7B11%7D%0A%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20color%3A%20%22amber.600%22%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3EOcean's%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22red.200%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Ocean's%7B%22%20%22%7D%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22teal.400%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20Ocean's%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList.Ordered%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"pressable-list"},"Pressable List"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20List%2C%20Heading%2C%20Box%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BdefaultColor%2C%20setDefaultColor%5D%20%3D%20React.useState(%22primary.400%22)%0A%20%20return%20(%0A%20%20%20%20%3CBox%20w%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CHeading%0A%20%20%20%20%20%20%20%20px%3D%7B2%7D%0A%20%20%20%20%20%20%20%20py%3D%7B4%7D%0A%20%20%20%20%20%20%20%20bg%3D%7BdefaultColor%7D%0A%20%20%20%20%20%20%20%20fontSize%3D%7B24%7D%0A%20%20%20%20%20%20%20%20color%3D%7BdefaultColor%20%3D%3D%3D%20%22primary.400%22%20%3F%20%22white%22%20%3A%20%22gray.800%22%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20Default%20Theme%20Color%20(Pressable%20List%20Items)%0A%20%20%20%20%20%20%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList%20my%3D%7B2%7D%20py%3D%7B0%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%0A%20%20%20%20%20%20%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20py%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22primary.400%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setDefaultColor(%22primary.400%22)%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20primary.400%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%0A%20%20%20%20%20%20%20%20%20%20py%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22secondary.400%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setDefaultColor(%22secondary.400%22)%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20secondary.400%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%0A%20%20%20%20%20%20%20%20%20%20py%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22emerald.400%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setDefaultColor(%22emerald.400%22)%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20emerald.400%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%0A%20%20%20%20%20%20%20%20%20%20py%3D%7B4%7D%0A%20%20%20%20%20%20%20%20%20%20bg%3D%22blue.400%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setDefaultColor(%22blue.400%22)%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20blue.400%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"list-with-listicon"},"List with ListIcon"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%0A%20%20List%2C%0A%20%20Heading%2C%0A%20%20Box%2C%0A%20%20SearchIcon%2C%0A%20%20Center%2C%0A%20%20NativeBaseProvider%2C%0A%7D%20from%20%22native-base%22%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CBox%20height%3D%2250%25%22%20width%3D%2280%25%22%3E%0A%20%20%20%20%20%20%3CHeading%3EList%20with%20Icons%3C%2FHeading%3E%0A%20%20%20%20%20%20%3CList%20mt%3D%7B2%7D%20my%3D%7B2%7D%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%20as%3D%7BSearchIcon%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Inbox%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%20as%3D%7BSearchIcon%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Drafts%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%20as%3D%7BSearchIcon%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Graphs%20and%20stats%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%20%20%3CList.Item%3E%0A%20%20%20%20%20%20%20%20%20%20%3CList.Icon%20as%3D%7BSearchIcon%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20Attachments%0A%20%20%20%20%20%20%20%20%3C%2FList.Item%3E%0A%20%20%20%20%20%20%3C%2FList%3E%0A%20%20%20%20%3C%2FBox%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h3",{id:"virtualized-list"},"Virtualized List"),Object(s.b)("div",{className:"snack-player","data-snack-name":"Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%0Aimport%20%7B%20VirtualizedList%20%7D%20from%20%22react-native%22%0Aimport%20%7B%20List%2C%20Center%2C%20NativeBaseProvider%20%7D%20from%20%22native-base%22%0Aconst%20DATA%20%3D%20%5B%5D%0A%0Aconst%20getItem%20%3D%20(_data%2C%20index)%20%3D%3E%20(%7B%0A%20%20id%3A%20Math.random().toString(12).substring(0)%2C%0A%20%20title%3A%20%60Item%20%24%7Bindex%20%2B%201%7D%60%2C%0A%7D)%0A%0Aconst%20getItemCount%20%3D%20(_data)%20%3D%3E%20500%0A%0Aconst%20Item%20%3D%20(%7B%20title%20%7D)%20%3D%3E%20(%0A%20%20%3CList.Item%0A%20%20%20%20bg%3D%22emerald.200%22%0A%20%20%20%20borderRadius%3D%22md%22%0A%20%20%20%20justifyContent%3D%22center%22%0A%20%20%20%20_text%3D%7B%7B%0A%20%20%20%20%20%20fontSize%3A%20%222xl%22%2C%0A%20%20%20%20%7D%7D%0A%20%20%20%20px%3D%7B4%7D%0A%20%20%20%20py%3D%7B2%7D%0A%20%20%20%20my%3D%7B2%7D%0A%20%20%3E%0A%20%20%20%20%7Btitle%7D%0A%20%20%3C%2FList.Item%3E%0A)%0A%0Aexport%20const%20Example%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CVirtualizedList%0A%20%20%20%20%20%20data%3D%7BDATA%7D%0A%20%20%20%20%20%20initialNumToRender%3D%7B4%7D%0A%20%20%20%20%20%20renderItem%3D%7B(%7B%20item%20%7D)%20%3D%3E%20%3CItem%20title%3D%7Bitem.title%7D%20%2F%3E%7D%0A%20%20%20%20%20%20keyExtractor%3D%7B(item)%20%3D%3E%20item.key%7D%0A%20%20%20%20%20%20getItemCount%3D%7BgetItemCount%7D%0A%20%20%20%20%20%20getItem%3D%7BgetItem%7D%0A%20%20%20%20%2F%3E%0A%20%20)%0A%7D%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CNativeBaseProvider%3E%0A%20%20%20%20%20%20%3CCenter%20flex%3D%7B1%7D%3E%0A%20%20%20%20%20%20%20%20%3CExample%20%2F%3E%0A%20%20%20%20%20%20%3C%2FCenter%3E%0A%20%20%20%20%3C%2FNativeBaseProvider%3E%0A%20%20)%0A%7D%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy","data-snack-dependencies":"react-is,expo-font,native-base@3.0.0-next.40,styled-system,expo-constants,react-native-web,react-native-safe-area-context,react-native-svg,styled-components,@expo/vector-icons,expo-linear-gradient","data-snack-sdkversion":"40.0.0"}),Object(s.b)("h2",{id:"props"},"Props"),Object(s.b)("h3",{id:"list"},"List"),Object(s.b)("undefined",null,Object(s.b)("table",null,"\n  ",Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        children\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Element | Element[]\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        List's Children.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        unordered\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Unordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ul\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Unordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ordered\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Ordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ol\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Ordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _hover\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"stack#props"}),"IStackProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        common _hover that is passed to all the children.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _focus\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"stack#props"}),"IStackProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        common _focus that is passed to all the children.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _pressed\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"stack#props"}),"IStackProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        common _pressed that is passed to all the children.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        start\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Ordered List index starting value.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        0\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _text\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Props to style the commonly all the List.Item's text.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(s.b)("p",null,"List implements ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"stack#props"}),"Stack"),", ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"box#props"}),"Box"))),Object(s.b)("h3",{id:"listitem"},"List.Item"),Object(s.b)("undefined",null,Object(s.b)("table",null,"\n  ",Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Name\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Type\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Description\n    "),"\n    ",Object(s.b)("th",{parentName:"tr"},"\n      Default\n    "),"\n  "),"\n  ",Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        unordered\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Unordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ul\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Unordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ordered\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Ordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ol\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        boolean\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Is ListItem Ordered?.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        start\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        number\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Ordered List index starting value.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        0\n      "),"\n    "),Object(s.b)("tr",{parentName:"tbody"},"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        _text\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        ",Object(s.b)("a",Object(n.a)({parentName:"td"},{href:"text#props"}),"ITextProps"),"\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        Props to style the child text.\n      "),"\n      ",Object(s.b)("td",{parentName:"tr"},"\n        -\n      "),"\n    "))),"\n ",Object(s.b)("p",null,"ListItem implements ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"pressable#props"}),"Pressable"))))}p.isMDXComponent=!0},742:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return A}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(a),l=n,A=b["".concat(i,".").concat(l)]||b[l]||m[l]||s;return a?r.a.createElement(A,o(o({ref:t},d),{},{components:a})):r.a.createElement(A,o({ref:t},d))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=l;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);