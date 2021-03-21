# Commander
Commander is an advanced open-sourced **free** administration panel made for the Roblox community. With just 4 easy steps, you can start using the best administration panel for your game today!

# Our Story
Commander started back in 2019 as a fun project, but has progressed into more, to where we are today.

# Get Started
You do not need knowledge of programming in order to set up Commander, we will walk you through it all! (Although knowing some is helpful!)

You can install Commander by clicking [this link](https://github.com/va1kio/commander/blob/main/Commander.rbxm), or by visiting the [Developer Forum](https://devforum.roblox.com/t/dp1-commander-your-next-admin-system/503290), hosted by Roblox.

Once downloaded, open a game in Roblox Studio.

>! API Services must be enabled for Commander to work correctly!

To turn on API services go to the `Home` tab and click on `Game Settings` and find `Security` and enable `API Services`!

![image](https://user-images.githubusercontent.com/76509586/111884437-a6668f80-898f-11eb-881d-bc36c6401fe7.png)

After that, go to the `View` tab and click on `Explorer` and `Command Bar`.

![image](https://user-images.githubusercontent.com/76509586/110735189-e50d8480-81ee-11eb-8e7d-d8ec4330fc82.png)

Right click on your `Explorer` and press `Insert from File`.

![image](https://user-images.githubusercontent.com/76509586/110734924-657fb580-81ee-11eb-8b4d-9c5eec785343.png)

Locate your `Command.RBXM` file.

Once Commander is inserted your Explorer should look like this,

![image](https://user-images.githubusercontent.com/76509586/110735087-b2638c00-81ee-11eb-9aea-6c9e5a57be29.png)

Locate your `Command Bar` located at the bottom of you screen. Insert this codeblock into it and press `Enter`.

```lua
workspace.Commander.Server.Disabled = false
workspace.Commander.Server.Parent = game:GetService("ServerScriptService")
workspace.Commander:Destroy()
```

Once completed, your `Explorer` should look like this,

![image](https://user-images.githubusercontent.com/76509586/110735681-decbd800-81ef-11eb-9893-2baa69123cb9.png)

And finally, you can configure the **administrator list** by going to `ServerScriptService > SystemPackages > Settings`

You should find a table, or something that looks like this!

![image](https://user-images.githubusercontent.com/76509586/110735871-43873280-81f0-11eb-88d9-8267cffe01e4.png)

To add administrators simply follow this format,

```lua
["Admins"] = {
	[game.CreatorId] = "Owner",
	["nana_kon"] = "Owner",
	["USERNAME"] = "ADMINLEVEL",
},
```

The different types of admin levels are;
* Owner
* Admin
* Moderator

Congratulations! You've set up and configured Commander!

# Learn More
You can learn more about the API, the UI, and packages in the top.

> If you require any assistance you can join the [Discord server](https://discord.com/invite/RzxxD7YCaU)! 
