(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{370:function(t,a,e){"use strict";e.r(a);var s=e(45),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"information"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#information"}},[t._v("#")]),t._v(" Information")]),t._v(" "),e("p",[t._v("Packages are commands! This will teach you how to correctly make your own package, the example we will be doing will kick a player!")]),t._v(" "),e("p",[t._v("Thanks to our mature "),e("RouterLink",{attrs:{to:"/pages/guides/packages/api.html"}},[t._v("API")]),t._v(" packages can easily communicate with the client. That being said, making a package is much easier than you think, a package can be made if you understand Luau and make use of our "),e("RouterLink",{attrs:{to:"/pages/guides/packages/api.html"}},[t._v("API")]),t._v(" and "),e("RouterLink",{attrs:{to:"/pages/guides/packages/ui.html"}},[t._v("UI Generator")]),t._v("!")],1),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"how-packages-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-packages-work"}},[t._v("#")]),t._v(" How Packages Work")]),t._v(" "),e("p",[t._v("When packages are being loaded by the server, the system will verify the package, whether it is correctly formatted and error-free. After that, the system will assign system packages like the "),e("RouterLink",{attrs:{to:"/pages/guides/packages/api.html"}},[t._v("API")]),t._v(", so the package can make use of the pre-built library to create awesome commands without being bloated in size.")],1),t._v(" "),e("p",[t._v("When an administrator has joined the server, the system will send the administrator a list of packages to be created in UI, with their corresponding location (Player or Server).")]),t._v(" "),e("h1",{attrs:{id:"creating-a-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-package"}},[t._v("#")]),t._v(" Creating a Package")]),t._v(" "),e("p",[t._v("We recommend you make use of our "),e("RouterLink",{attrs:{to:"/pages/guides/packages/api.html"}},[t._v("API")]),t._v(" and "),e("RouterLink",{attrs:{to:"/pages/guides/packages/ui.html"}},[t._v("UI Generator")]),t._v(" to prevent your package(s) from being bloated in size.")],1),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("Roblox Studio")]),t._v(" "),e("li",[t._v("Commander")]),t._v(" "),e("li",[t._v("Luau Knowledge")])]),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"getting-started"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),e("p",[t._v("To get started, create a "),e("code",[t._v("ModuleScript")]),t._v(" and follow the format located below.")]),t._v(" "),e("div",{staticClass:"language-lua extra-class"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" module "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Package Name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tDescription "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Package Description"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tLocation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Player"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Execute "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Attachment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" module\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Packages can be ran when being loaded, so the package can register functions and events like PlayerAdded via the "),e("RouterLink",{attrs:{to:"/pages/guides/packages/api.html"}},[t._v("API")]),t._v(". "),e("strong",[t._v("As a result, you should have an if statement to ignore the first run")]),t._v(", which is below.")],1)]),t._v(" "),e("div",{staticClass:"language-lua extra-class"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"command"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),e("h2",{attrs:{id:"location-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#location-options"}},[t._v("#")]),t._v(" Location Options")]),t._v(" "),e("ul",[e("li",[t._v("Server")]),t._v(" "),e("li",[t._v("Player")])]),t._v(" "),e("hr"),t._v(" "),e("h1",{attrs:{id:"making-a-kick-command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#making-a-kick-command"}},[t._v("#")]),t._v(" Making a Kick Command")]),t._v(" "),e("h2",{attrs:{id:"finding-a-target-using-the-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#finding-a-target-using-the-api"}},[t._v("#")]),t._v(" Finding a Target Using The API")]),t._v(" "),e("p",[t._v("We encourage using the "),e("RouterLink",{attrs:{to:"/pages/guides/packages/api.html"}},[t._v("API")]),t._v("'s built-in player finder in order to prevent your package from being bloated. If your package is in the "),e("code",[t._v("Player")]),t._v(" location, the "),e("code",[t._v("Attachment")]),t._v(" argument will be the target user, in this case, you have to find whether the target exists in the game or not.")],1),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("If you are using a custom player finder, "),e("strong",[t._v("DO NOT")]),t._v(" use fuzzy search or any other kind to find the player, it is heavily recommended to compare whether the "),e("code",[t._v("Attachment")]),t._v(" argument completely matches the player's name.")])]),t._v(" "),e("h2",{attrs:{id:"kicking-the-target"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kicking-the-target"}},[t._v("#")]),t._v(" Kicking the Target")]),t._v(" "),e("p",[t._v("After implementing the target search in your package, you can now create the payload, by default, the built-in player finder returns the player instance, and if there's no match, it will return nil. As a result, "),e("strong",[t._v("you need to setup and if statement to check whether the result is nil or not")]),t._v(". If the result is not nil you will need to kick the target.")]),t._v(" "),e("p",[t._v("After doing so, your package should look something similar to this,")]),t._v(" "),e("div",{staticClass:"language-lua extra-class"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" module "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tName "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kick"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tDescription "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kicks a player"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tLocation "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Player"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Execute "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Attachment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"command"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" target "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modules"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("API"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPlayerWithName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Attachment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Check if the player is in game, if so return the player's name.")]),t._v("\n\t\t\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" target "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t\t\ttarget"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Kick")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Kicked by "')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),t._v(" Client"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- If statement checking if the API does not return nil.")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" module\n")])])]),e("hr"),t._v(" "),e("p",[t._v("Congratulations! You've successfully made your first package!")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Challenge")]),t._v(" "),e("p",[t._v("Are you able to make it so it will ask the administrator for a reason to kicking the target?")])]),t._v(" "),e("blockquote",[e("p",[t._v("If you require any assistance you can join the "),e("a",{attrs:{href:"https://discord.com/invite/RzxxD7YCaU",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord server"),e("OutboundLink")],1),t._v("!")])])])}),[],!1,null,null,null);a.default=n.exports}}]);