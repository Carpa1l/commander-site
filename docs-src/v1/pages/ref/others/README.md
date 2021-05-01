# Others
This section includes reference for other utilities that you may need to use for your package, or to communicate with Commander.

## Client UI
While messaging, notifying and hint can be done with the API, it is heavily restricted and is only available to packages only. If you plan to use Commander's client UI for all notifications, messages and hint. You can refer to this section.

For your convenience, you can communicate with the client UI by using the RemoteEvent `ReplicatedStorage.Commander Remotes.RemoteEvent`, or by using the BindableEvent at `Player.PlayerGui.Client.Elements.Event`

The heading (H3) in the following is automatically the first parameter for firing (example: `newMessage` == `:FireClient(Player, "newMessage", ...)`)

The second parameter is not used for the client UI, you can just leave the second parameter as nil. The third parameter is where you should start filling the parameters for the specific method, which should be a dictionary unless stated.

Dictionary indexes are case sensitive in this case, please refer to the documentation below for the correct naming.

### newMessage
Creates a new message, will dismiss current message if existed

#### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|From|`required`|String|The person/system that sends the message to the client|
|Content|`required`|String|The content of the message|
|Duration|`required`|Number|The duration for the message to dismiss|
|Audio|`required`|Number|The audio ID used to notify the user|

### newHint
Creates a new hint, will dismiss current hint if existed

#### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|From|`required`|String|The person/system that sends the hint to the client|
|Content|`required`|String|The content of the hint|
|Duration|`required`|Number|The duration for the hint to dismiss|
|Audio|`required`|Number|The audio ID used to notify the user|

### newNotify
Creates a new notification.

#### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|From|`required`|String|The person/system that sends the message to the client|
|Content|`required`|String|The content of the message|
|Audio|`required`|Number|The audio ID used to notify the user|

### setCoreGuiEnabled
Set the status for a specific type of CoreGui

#### Parameters
|Name|Default|Types|Description|
|:---:|:---:|:---:|:---:|
|Type|`required`|`Enum.CoreGuiType`|The type of CoreGui to be configured|
|Status|`required`|Boolean|The status of the given CoreGui type|

### setCamera
Configures the client's camera settings

#### Parameters
Please refer to the documentation for `CurrentCamera/Camera` in `developer.roblox.com`. You are not required to set everything, will set back to current camera's settings if one of the parameter is nil.