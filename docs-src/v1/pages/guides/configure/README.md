# Configuring Commander

Commander has a lot of configurations for normal user to edit, from simple and basic configurations like Administrators, to really advanced configurations such as DataStore keys, custom notification sound, themes, et cetera.

In this page, we will walk you through the meaning of each configuration available in Commander, how do those work, and how to edit them.

## Table of Content
[[toc]]

## Overview
By default, Commander ships with recommended configuration, so you do not need to spend a lot of time on setting up the configuration for Commander, here is an overview of all configurations available:

```lua
local module = {}

module.Admins = {
	["nana_kon"] = "Owner",
}

module.Permissions = {
	["Moderator"] = {
		["Priority"] = 1,
		["DisallowPrefixes"] = {
			"All",
			"Others"
		},
		["Permissions"] = {
			"Kick",
			"ChatLogs",
			"JoinLogs",
			"CheckBan",
			"Message",
			"HandTo",
			"View",
			"Unview"
		}
	},
	["Admin"] = {
		["Inherits"] = "Moderator",
		["Priority"] = 2,
		["Permissions"] = {
			"Ban",
			"Shutdown",
			"TimeBan",
			"Unban",
			"SystemMessage",
			"ServerLock"
		}
	},
	["Owner"] = {
		["Inherits"] = "Admin",
		["Priority"] = 3,
		["Permissions"] = {
			"*"
		}
	}
}

module.UI = {
	["Accent"] = Color3.fromRGB(64, 157, 130),
	["Keybind"] = Enum.KeyCode.Semicolon,
	["Theme"] = "Minimal Dark"
}

module.Misc = {
	["DisableCredits"] = false,
	["DataStoresKey"] = {
		["Ban"] = "commander.bans"
	}
}

module.Version = {"1.4.0", "1.4.0 (Official Build)", "Lilium"}

return module
```

Please note that there are a few differences between the default configuration for the Loader version, and the source code one.

## Admins

```lua
module.Admins = {
  ["nana_kon"] = "Owner"
}
```

This table is where you put down all the administrators in Commander, Commander accepts three types of administrators -- Usernames, UserIds and group ranks. Here we will walk you through using each of them:

### Using Usernames
For your information, you may want to avoid using this method, as if the user happened to change their name, their administrator access will be revoked.

```lua
module.Admins = {
  ["Username"] = "Level"
}
```

The `Username` part is where you put the username of the administrator, where the `level` part is where you put the administrator's level. By default, Commander comes with `Moderator`, `Admin`, and `Owner`, each of them has different permission for commands.

### Using UserId
If you want to set a specific user to be an administrator in Commander, you may want to use the UserId option, not only it is unique, it won't be revoked due to a username change.

```lua
module.Admins = {
  [101010] = "Level"
}
```

Using UserId is similar to how you use usernames to setup administrators, but this time, rather than putting a `string`, you are supposed to put a number form, which should be the UserId of the user.

### Using group ranks
Setting every administrators for your group game with the two options above may be time consuming and labour intensive, that's why we came up with group ranks, with that, you can automate the setup process for a range of administrators by filling in the corresponding group Id, and the corresponding group rank number.

```lua
module.Admins = {
  ["10101101:>100"] = "Level"
}
```

Commander accepts a specific format for group ranks, which is `GroupId:GroupRank`, this will assign a specific group rank to be authorized to use Commander. However, if you want to setup multiple ranks, you might want to consider using `GroupId:>GroupRank` or `GroupId:<GroupRank`, where the former one is for `greater than or equal to`, and the latter one is for `lesser than or equal to`. 

## Administrator Levels
There's a few cases where commands may be too powerful for your administration team, you can setup administrator levels to avoid that. With administrator levels, you can restrict the usage of a specific command, and disallow the usage of prefixes, like `all`, `others`, `admins`, et cetera.

```
["Owner"] = {
	["Inherits"] = "Admin",
	["Priority"] = 3,
	["Permissions"] = {
		"*"
	}
}
```

We will take a look at the default `Owner` administrator level, which is the highest level in Commander by default.

The `["Inherits"]` is for when you want to copy configuration from a previous administrator level, such as `"Admin"`, for instance.

The `["Priority"]` is to set the level's priority, by default, because all other levels are 2 and 1 respectively, 3 is the highest, and `["Owner"]` would be the highest level in Commander.

The `["Permission"]` is to allow the usage of a specific command, where `*` stands for all commands, Commander follows the package name found in the panel, you should not be using the package's name in Studio, but the one found in the panel.

Apart from that, there is also an additional configuration in the `Moderator` level configuration, which is `["DisallowPrefixes"]`, which disallows the usage of a specific prefix, such as `All`, `Others`, `Admins`, `Randoms`, et cetera.

## UI
This part is where you configure the user interface for Commander, changes are usually much focused at the panel rather than the client user interface, but you can still see some configuration for it.

```lua
module.UI = {
	["Accent"] = Color3.fromRGB(64, 157, 130),
	["Keybind"] = Enum.KeyCode.Semicolon,
	["Theme"] = "Minimal Dark",
  ["AlertSound"] = 6518811702
}
```


The `["Accent"]` property is to set the panel's theme color, depends on the theme, this option may not affect the interface.

The `["Keybind"]` property is to set the keybind to activate Commander, there's three ways to activate Commander, via the keybind, via the button at the topbar and via the bindable we've created for you.

The `["Theme"]` property is to set the panel's theme, by default, Commander ships with 6 themes, `Teal`, `Minimal`, `Minimal Dark`, `Material`, `Material Dark` and `AMOLED Dark`. Please note that themes are case sensitive, be sure to write in the same case. To install a custom theme, you can refer to the [Installing themes](../installthemes/) page.

The `["AlertSound"]` property is to set the notification sound, you do not need to put this in however, as Commander will simply use the default notification sound if you didn't assign one in the settings module. This property expects a number, not a string with `rbxassetid://` protocol, et cetera.

## Misc
The `Misc` section holds miscellaneous configurations for Commander, in most cases, you do not need to configure those, but we will still explain all of them.

```lua
module.Misc = {
	["DisableCredits"] = false,
	["DataStoresKey"] = {
		["Ban"] = "commander.bans"
  }
}
```

The `["DisableCredits"]` property sets whether Commander should send out a notification of `This game is powered by Commander from Evo...`

The `["DataStoresKey"]` property holds a table of custom DataStore keys, such as the `["Ban"]` key, in most cases, packages usually override it with the default key if you didn't put it in the table.
