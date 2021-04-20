# API

:::danger Under construction
This page is currently under construction and is not 100% covered. If you find any information found in this page misleading and false, please create an issue to address those changes in our documentation repository.
:::

The API module in the source code provides an interface for packages and external code to communicate with Commander, as well as making packages painlessly and flawlessly.

For your information, you do not need to initialise the API module in your package as Commander already does tht for you, access API by indexing thru `module.API`, where module is the variable of the table you return in a package.

## Categories
To ensure API will always have a high maintainability, we've seperated API methods into different kind of categories. Player-related API methods are inside the Player category, here is a list of the current available API categories:

- [Players](#Players)

To access a category, simply index thru `API` with the category name.

### Players
The `Players` category holds all available API methods that are related to players. Please note that some of the methods are in Async and will yield if required.

#### sendModal
Sends a modal for user, asking for string input. Returns a BindableEvent.

##### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|Player|`required`|Player|The player instance to send the modal to|
|Title|`Input required`|String|The title of the modal|

###### Returns
|Name|Types|Description
|:---:|:---:|:---:|
|BindableEvent|BindableEvent|An event that will be fired once input is received from client|

#### sendList
Sends a window with a list for user.

##### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|Player|`required`|Player|The player instance to send the window to|
|Title|`required`|String|The title of the window|
|List|`required`|Array|An array of data that will be represented in the window|

#### executeWithPrefix
Executes a function for a specific player, or with 
a prefix

##### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|Client|`required`|Player|The player who is executing the function
|Player|`required`|String|The player name of a prefix to execute the function to|
|Callback|`required`|Function|The function that will be executed|

###### Returns
|Name|Types|Description
|:---:|:---:|:---:|
|Status|Boolean|Returns true if there's a player with the name or the corresponding prefix|

#### getPlayerByName
Gets a player by its name, case insensitive

##### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|Player|`required`|String|The player name to find|

###### Returns
|Name|Types|Description
|:---:|:---:|:---:|
|Player|Player/nil|The player instance that the API found, return nil if there's no result|

#### getPlayerByNamePartial
Gets a player by its partial name, case insensitive

##### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|Player|`required`|String|The player name to find|

###### Returns
|Name|Types|Description
|:---:|:---:|:---:|
|Player|Player/nil|The player instance that the API found, return nil if there's no result|

#### getUserIdFromName
Gets a player's UserId from it's name.

##### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|Name|`required`|String|The player name|

###### Returns
|Name|Types|Description
|:---:|:---:|:---:|
|UserId|Number/String|The UserId of the player, will return a string of message if it fails to find|

#### filterString
Filters a string so it will be moderation-friendly

##### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|From|`required`|Player|The author of the message|
|Content|`required`|String|The message that needs to be filtered|

###### Returns
|Name|Types|Description
|:---:|:---:|:---:|
|Status|Boolean|The status of the filter call|
|Result|String|The actual filtered message, or the error message if Status is `false`

