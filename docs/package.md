# Information
Packages are commands! This will teach you how to correctly make your own package, the example we will be doing will kick a player!

Thanks to our mature [API](api.md) packages can easily communicate with the client. That being said, making a package is much easier than you think, a package can be made if you understand Luau and make use of our [API](api.md) and [UI Generator](ui.md)!
___
# How Packages Work
When packages are being loaded by the server, the system will verify the package, whether it is correctly formatted and error-free. After that, the system will assign system packages like the [API](api.md), so the package can make use of the pre-built library to create awesome commands without being bloated in size.

When an administrator has joined the server, the system will send the administrator a list of packages to be created in UI, with their corresponding location (Player or Server).

# Creating a Package
We reccomend you make use of our [API](api.md) and [UI Generator](ui.md) to prevent your package(s) from being bloated in size.
___
## Requirements
* Roblox Studio
* Commander
* Luau Knowledge
___
# Getting Started
To get started, create a `ModuleScript` and follow the format located below.

```lua
local module = {
	Name = "Package Name",
	Description = "Package Description",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	
end

return module
```

!> Packages can be ran when being loaded, so the package can register functions and events like PlayerAdded via the [API](api.md). **As a result, you should have an if statement to ignore the first run**, which is below.

```lua
if Type == "command" then

end
```

## Location Options
* Server
* Player
___
# Making a Kick Command

## Finding a Target Using The API
We encourage using the [API](api.md)'s built-in player finder in order to prevent your package from being bloated. If your package is in the `Player` location, the `Attachment` argument will be the target user, in this case, you have to find whether the target exists in the game or not.

!> If you are using a custom player finder, **DO NOT** use fuzzy search or any other kind to find the player, it is heavily reccomended to compare whether the `Attachment` argument completely matches the player's name.

## Kicking the Target
After implementing the target search in your package, you can now create the payload, by default, the built-in player finder returns the player instance, and if there's no match, it will return nil. As a result, **you need to setup and if statement to check whether the result is nil or not**. If the result is not nil you will need to kick the target.

After doing so, your package should look something similar to this,

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = modules.API.getPlayerWithName(Attachment) -- Check if the player is in game, if so return the player's name.
		
		if target then
			target:Kick("Kicked by " .. Client.Name)
		end -- If statement checking if the API does not return nil.
	end
end

return module
```
___
Congratulations! You've successfully made your first package!

?> **Challenge** <br> Are you able to make it so it will ask the administrator for a reason to kicking the target?

> If you require any assistance you can join the [Discord server](https://discord.com/invite/RzxxD7YCaU)!
