# Making packages
:::warning
Making a package requires a large amount of knowledge of Luau
:::

Packages are modules with code that will be ran when the user executes the corresponding command. 

By default, Commander ship with packages that are useful to the majority, but if you find there's not enough packages, feel free to visit our [Discord community](https://discord.gg/RzxxD7YCaU), or you can create your own.

**This guide will introduce and teach you how to make your own package with a kick command as an example.**

## How packages work
When Commander is being loaded, the system itself will fetch every packages inside the `Packages` folder, and then verify whether the package is both correctly formatted and error-free. Then, the system will assign all system packages such as the [API](../../ref/api/) to the package, and finally call `.Execute` on the package with type `firstRun`.

When an administrator has joined the game, the system will first fetch commands that can be ran by the user, and finally send the list of the packages to be created in the panel with their corresponding location.

### Location options
By default, there are **two** locations for packages to load in, either **Server** or **Player**.

## Requirements
* Roblox Studio
* An installation of Commander
* Luau knowledge

## Getting started
To get started, create a `ModuleScript` with the name `Kick`. and then follow the format located below:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	
end

return module
```

:::tip
As mentioned above, the system will call the package's `.Execute` function at load time, so the system can verify information, as well as running specific first-run only code from the package. As a result, you should have an if statement in order to separate from the actual command execution from the first run. An example of that can be found below.
:::

```lua
if Type == "command" then
	-- Command execution code goes here
elseif Type == "firstRun" then
	-- First run code goes here
end
```

### Finding the target
In most cases, you should use the built-in player finder. However, if you happened to create your own player finder, please **be sure not** to use fuzzy search for finding the player.

:::tip
If your command is inside the **Player** location, the `Attachment` parameter will be the input of the `TARGET` TextField.
:::

After the player finder, your code should look something similar to this:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = module.API.getPlayerWithName(Attachment)
		if target then
			target:Kick("Kicked by " .. Client.Name)
			return true
		end
		return false
	end
end

return module
```

:::warning
See the incompatibility warning after executing the command? This is because you did not return a boolean after the command is ran. Return `true` when the command is ran successfully, and return `false` when the command failed or was cancelled by user, such as a modal. 
:::

### Getting further
You've implemented a simple kick command, but the administrator can not put a reason to justify the kick. So, what to do?

That's where the `API.sendModalToPlayer` kicks in. This function will send a request to the client, to create a new input modal for user to put text there, as well as a RBXScriptSignal so the command can halt until an input has been submitted.

:::danger Read the docs!
Callback hell affect your code readability and maintainability, as `API.sendModalToPlayer` returns a RBXScriptSignal, you can simply just use `:Wait()` instead of using `:Connect`.

Apart from that, we **highly** recommend to use `:Wait()` for this, you can learn more by reading our [Code of Conduct](../code/)
:::

With `API.sendModalToPlayer`, your code should look something like this:
```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = module.API.getPlayerWithName(Attachment)
		local input = module.API.sendModalToPlayer(Client, "Reason?"):Wait()
		if not target then return false end
		if not input then return false end
		target:Kick("Kicked by " .. Client.Name .. "\nReason: " .. input)
		return true
	end
end

return module
```

**However!** We are still not done yet, `.sendModalToPlayer` by default does **not** filter the actual input. In order to compile with Roblox's safety guidelines, filter the input via `API.filterText`, which will looks something like this:

```lua
local module = {
	Name = "Kick",
	Description = "Kicks a player from the server",
	Location = "Player"
}

module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = module.API.getPlayerWithName(Attachment)
		local input = module.API.sendModalToPlayer(Client, "Reason?"):Wait()
		if not target then return false end
		if not input then return false end
		local status, result = module.API.filterText(Client, input)
		if not status then return false end
		target:Kick("Kicked by " .. Client.Name .. "\nReason: " .. result)
		return true
	end
end

return module
```

:tada: Congratulations, you have successfully made your first package!

## Continue...
Our [API](../../ref/api/) documentation has it all for you to discover, if you have a question or encountered a problem with your own package, feel free to ask in our [Discord Community](https://discord.gg/RzxxD7YCaU).