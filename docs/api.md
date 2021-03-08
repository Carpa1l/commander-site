# The API
The API is used for packages to communicate or interact with players without making your packages bloated in size.

You do not need to initialise the API module in your package as the system loader does it for you already. To access it, simply index through the table returned once required, like: `module.API`

___

## Methods
### API.sendModalToPlayer(Player: player, Title: string|nil)
Sends request to player to prompt an input modal, returns a `BindableEvent`, which will be fired when user submitted data. The bindable will return the user input.

#### Example
```lua
module.API.sendModalToPlayer(Player, "What is 1 + 1?"):Connect(function(Input)
	print(Input)
end)
-- both works!
local input = module.API.sendModalToPlayer(Player):Wait()
print(Input)
```

### API.sendListToPlayer(Player: player, Title: string, Attachment: table)
Sends request to player to prompt a window with a list.

#### Example
```lua
module.API.sendListToPlayer(Player, "List", {"Hello world", "Hello, world!"})
```

### API.filterText(From: instance, Content: string)
!> This method yields

Filter the content with `TextService`

#### Example
```lua
print(module.API.filterText(Player, "Goodbye!"))
```

### API.getUserIdWithName(Player: string)
!> This method yields

Gets the player's identifier with their name

#### Example
```lua
print(module.API.getUserIdWithName("nana_kon"))
```

### API.getCharacter(Player: instance) => Character
Gets the player's character with their player instance

#### Example
```lua
print(module.API.getCharacter(module.API.getPlayerWithName("nana_kon")).Humanoid.Health)
```

### API.getPlayerWithName(Player: string)
Gets the player's instance with their name

#### Example
```lua
print(module.API.getPlayerWithName("nana_kon").Name)
```

### API.checkAdmin(UserId: integer)
!> This method yields depends on the situation

Determines whether the player is an administrator or not, the method will yield if the administrator table contains usernames instead of identifiers.

#### Example
```lua
if module.API.checkAdmin(Player.UserId) then
	print("They are an admin!")
end
```

### API.getAdmins()
Returns a table of administrators

#### Example
```lua
for i,v in pairs(module.API.getAdmins()) do
	print(v)
end
```

### API.doThisToPlayers(Client: instance, Player: string, Callback: function) => Player
!> Use this at your own risk, this should not be used in commands that can be extremely abusive.

A lightweight callback processor, accepts "All", "Others", "Random" or the player name.

#### Example
```lua
module.API.doThisToPlayers(Client, "All", function(Player)
	print(Player.Name)
end)
```

### API.getAvailableAdmins()
!> This method yields depends on the situation

Returns the number of administrators in server, this method will yield if the administrator table contains usernames instead of identifiers, as it relies on `API.checkAdmin(Player)`

#### Example
```lua
print("There are " .. module.API.getAvailableAdmins() .. " administrators available!")
```

### API.registerPlayerAddedEvent(Function: function)
Adds the function into the `Players.PlayerAdded` event, useful if you are implementing something that needs to be checked for every player. When a player joins, the function will be called along with the joined player's instance.

#### Example
```lua
module.API.registerPlayerAddedEvent(function(Player)
	warn(Player.Name .. " joined the game.")
end)
```
