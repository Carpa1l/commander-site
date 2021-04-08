# Code of Conduct

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

## General

### Avoid using GetFenv/SetFenv
The usefulness of GetFenv and SetFenv does benefit developers like us, but as since Roblox's VM has been switched to Luau, GetFenv and SetFenv leads to a huge performance overhead.

#### Alternatives
If possible, you should always look for alternatives to GetFenv or SetFenv in your script for Commander, as our goal is to make an administration system that is lightweight and performant. 

#### Sandboxing

However, both GetFenv and SetFenv is great for sandboxing, if you plan to create a package for sandboxing in Commander, feel free to ignore this rule. But in most cases, you should avoid them and consider an alternative that will not lead to any sort of performance overhead.

### Avoid callback hell
This topic is **similarly the same** as the topic on synchronous or asynchronous code, but we will further explain on why callback can create readability issues and how it will affect your code, even if you are not coding for Commander.

#### Definition of callback hell
Callback hell is bad coding pattern caused by poor coding practices, in which is basically stacking callback functions one by one, something like this:

```lua
local myBelovedModules = script.Library

function findModule(name: string, callback: (string) -> void)
	local theBelovedModule = myBelovedModules:FindFirstChild(name)
	if theBelovedModule and theBelovedModule:IsA("ModuleScript") then
		callback(theBelovedModule)
	end
end

findModule("printer", function()
	findModule("internet", function()
		findModule("toaster", function()
			findModule("coffee", function()
				print(":OO I found everything I need!!")
			end)
		end)
	end)
end)
```

As you can see, the code above will cause readability issue as well as making the code itself hard to maintain when at a larger scale, let's assume there's 100 modules you need to find. That's the problem

#### Alternatives?
There's a lot of alternatives for this, one example is with synchronous events, and another one is with promises, which is already bundled with Commander (You can access it via `module.Services.Promises`). Let's see the code with synchronous events.

```lua
local myBelovedModules = script.Library

function findModule(name: string): rbxscriptsignal
	local event = Instance.new("BindableEvent")
	local theBelovedModule = myBelovedModules:FindFirstChild(name)
	if theBelovedModule and theBelovedModule:IsA("ModuleScript") then
		event:Fire(theBelovedModule)
	else
		event:Fire()
	end
	return event.Event
end

findModule("printer"):Wait()
findModule("internet"):Wait()
findModule("toaster"):Wait()
findModule("coffee"):Wait()
print("Yay, another day of working from home!")
```

Apart from the lines number difference, the code is actually much cleaner and easier to maintain when at a larger scale, while these two examples are not effective enough to see the actual problem with callback hells, you can simply search for callback hells in search engines like Google.

### Object oriented design is not for everything
OO (object-oriented) paradigm makes code cleaner to see, but it is usually much expensive to use than the functional programming, as it contains excessive code, such as implementing the class system, et cetera.

With that being said, overusing OO paradigm will just increase the overall physical size of the code, which is something we are against of. As a result, you should only use OO paradigm when it is actually beneficial but not as a decoration to your code. Functional programing can be beautiful when with good coding practices and clear mind, but OO programming will try to solve the issues of functional programming when the code is complicated, such as UI frameworks, databases, et cetera.