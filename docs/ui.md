# UI generator
The UI generator module is used for developers who want to add custom user interface for their own packages, or want to use our UI for any purposes

___

## Methods
### Generator.newList(Name: string, Parent: instance)
Creates a list container for you to place items in a list, returns a table with an event and a function

#### Functions
##### listObject.addItem(Name: string, Content: string)
Adds an item to the list

### Generator.newWindow(Name: string, Title: string, Attachment: instance)
Creates a window

#### Functions
##### windowObject.close()
Closes the window

##### windowObject.open()
Opens the window

#### windowObject.setTitle(Title: string)
Changes the window's title

### Generator.newInputModal(Title: string)
Creates an input modal

### Generator.newPackageButton(Title: string, Description: string, Parent: instance, Callback: function)
Creates a button for packages
