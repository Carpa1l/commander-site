# Coding guidelines

## Packages

### Synchronous or Asynchronous?
While choosing whether your package should be synchronous or asynchronous, Commander strictly requires all packages to be synchronous in order to comply with our own system. Otherwise, a disclaimer will be displayed, informing the user that the command is incompatible with our system and may not work as expected.

Here's an example of synchronous package with our modal API.

```lua
module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = modules.API.getPlayerWithName(Attachment)
		if not target then return end
		local input = module.API.sendModalToPlayer(Client):Wait()
		if not input then return end
		target.Name = input
		
		return true
	end
end
```

As a result, this package will yield our command processor, meaning codes after the execution will wait for the command to finish processing. In our system, there's a few code after the command processor, so we can log the command usage properly without having the developer to create a new waypoint with our Waypoint module.

However, let's take a look at the asynchronous package.

```lua
module.Execute = function(Client, Type, Attachment)
	if Type == "command" then
		local target = modules.API.getPlayerWithName(Attachment)
		if not target then return end
		module.API.sendModalToPlayer(Client):Connect(function(input)
			if not input then return end
			target.Name = input
		end)
	end
end
```

With this, the code won't yield at all, which means the code after our command processor will be ran instantly. And our logging mechanism won't work as expected, creating false positives. Which is not really ideal for the users.