# Making a package
Packages can be made if you are using the correct format, this page will teach you how to create a simple package that will kick a player

___

## Requirements
* A working Studio build to test your package
* Luau knowledge
* A Commander installation

___

## How package works
When a package is being loaded by the server, the system will verify the package, whether it is correctly formatted is error-free. After that, the system will assign system packages like the [API](api.md), so the package can make use of the pre-built library to create awesome commands without being bloated in size.

When an administrator has joined the server, the system will send the administrator a list of packages to be created in UI, with their corresponding location (Player or Server).

___

## Package template
Here is a standard package template which will work in Commander 4:
```lua
local module = {
	Name = "Demo package",
	Description = "Description goes here",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	
end

return module
```

___

## Get started
Thanks to our mature [API](api.md) for package to communicate with clients, making a package is much easier than what you think, a package can be made if you know how to use the API and know how to code in Luau.

To get started, create a `ModuleScript` and paste the format above.

### Edit the information
You can edit your package's information by changing the Name, Description and Location in the table, please **note that** you can only use `Player` or `Server` for locations. After editing, it should be something similar to this:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	
end

return module
```

### Listen to user requests
When user clicked the button to request your package, the server will find the package and attempts to call the `.Execute` function with the `Type` argument set to `command`. This was implemented as packages can be ran when being loaded, so the package can register functions to events like PlayerAdded event via the [API](api.md). As a result, you should be having an if statement to ignore first run, which is:

```lua
if Type == "command" then
	
end
```

### Finding the target with the API
We encourage using the [API](api.md)'s built-in player finder in order to save lines for your package. If your package is set to be in `Player`, the `Attachment` argument will be the user's target in string, in this case, you have to find whether the target exists in game or not.

!> If you are using a custom player finder, **DO NOT** use fuzzy search or any kind to find the player, it is recommended to compare whether the `Attachment` argument completely matches the player name.

### Kick the target
After implementing the target searching in your package, you can now create the payload, by default, the built-in player finder returns the player instance, and if there's no match, it will return nil. As a result, you need to setup an if statement to check whether the result is nil or not, and then actually kicks the target if the result is not nil.

After that, your package should be something similar to this:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = modules.API.getPlayerWithName(Attachment)
		
		if target then
			target:Kick("Kicked by " .. Client.Name)
		end
	end
end

return module
```

?> **Challenge** <br> Are you able to make it so it will ask the administrator for a reason to kicking the target?