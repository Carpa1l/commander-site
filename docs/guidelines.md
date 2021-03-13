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

### Avoid fuzzy searching
We love developers, we helped them with our powerful API, so they do not have to write a brand new system solely for their own purposes, decreasing the average package size. However, there's situations where you need to create your own system, such as searching for an instance in Workspace. While it is simple to implement searching, there's one philosophy you should always follow -- Accuracy.

With fuzzy search, the actual accuracy is decreased rather than increased. As fuzzy searching does not search based on the order of the word, it usually find the number of the character in the code without checking the order, and then calculate the relevancy. So, the actual searched item is not accurate and not predictable.

Instead, we prefer something much accurate, like linear search.