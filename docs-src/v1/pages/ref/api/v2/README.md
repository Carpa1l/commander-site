# The API

:::danger Incompatibility notice
This page only applies to builds after `Thymus`. Releases before `Thymus` uses a different structure for API and packages.
:::

:::warning Under construction
This page serves as a rewrite of the current API reference, please stay tuned for a larger coverage of the API.
:::

## Introduction
The API serves as a bridge for packages to interact with clients, reduce actual package size, as well as an interface to communicate with Commander itself.

In order to get access to the API, simply import the API module via `import` in your package, something like this:
```lua
-- assume you've initialized import already
module.init = function()
	local API = import("API")
end
```

## Why use the API?
There's a few reasons why you should consider using the built-in API, instead of relying your own custom implementation, that existed in the API. Such as:

- Greater maintainability, the API is currently maintained by the official developers of Commander, so improvements and new features will be added over time, for your packages' convenience.
- Type-safe, the API is written with `Luau` typechecks, giving you a type-safe coding experience when `Luau` is fully mature and production ready.
- Reduces package size, as the API is shared across packages and the whole system, you will be reducing a lot of unnecessary implementations in your packages, with the API, making your package very lightweight.
- A better way to interact with clients, instead of relying on `RemoteEvent`, while `RemoteEvent` is how we interact with the client, we do not like package developers have to use `RemoteEvent` to achieve the same thing, the API makes stuff easier to understand, and cleaner.

## All available categories
The API is separated into different categories for greater readability, here are the list of current categories available for developers to use:
- Players
- Core

## Players
This category contains methods for anything to do with players, such as getting the user's administration level, getting the player with the name partially, et cetera.

## Core
This category contains methods for anything to do with Commander itself, such as reloading a specific player's Commander UI, creating a new log, et cetera.