# UI Generator
The UI Generator module is used for developers who want to add their own custom user interface for their own packages, or for any other purposes.

___

## Methods
### Generator.newList(Name: string, Parent: instance)
Creates a list container for you to place items in a list, returns a table with an event and a function.

#### Example
```lua
Generator.newList("List1", UI)
```

#### Functions
##### listObject.addItem(Name: string, Content: string)
Adds an item to the list.

### Generator.newWindow(Name: string, Title: string, Attachment: instance)
Creates a window.

#### Example
```lua
Generator.newWindow("Window1", "Hello world!")
```

#### Functions
##### windowObject.close()
Closes the window.

##### windowObject.open()
Opens the window.

#### windowObject.setTitle(Title: string)
Changes the window's title.

### Generator.newInputModal(Title: string)
Creates an input modal.

### Generator.newPackageButton(Title: string, Description: string, Parent: instance, Callback: function)
Creates a button for packages.
