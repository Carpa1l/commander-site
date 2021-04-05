:::danger Incompatibility notice
This page only applies to builds after `0.9.0`. Developer preview builds use a different UI structure and toolkit
:::

:::warning Under construction
This page is still under construction and details may be missing
:::

# UI Toolkit
Latte is the UI framework we use for Commander, with Latte, you can create your own pages with the UI components designed and made by us.

## Components
To access to the components library, simply use the linked metatable `exported.Latte.Components` in your module

### RoundButton.new(Name: string, Image: string, Parent: instance, Callback: function) -> GuiObject
Creates a RoundButton, this is used for the title bar of the window class.

### FlatButton.new(Name: string, Text: string?, Callback: function) -> GuiObject
Creates a FlatButton, this is used in the modal overlay's "Submit" button

### MenuButton.new(Name: string, Text: string?, Parent: instance, Callback: function) -> GuiObject
Creates a [MenuButton](./components/MenuButton.md), used in the tab buttons inside the menu component.

### OutlinedButton.new(Name: string, Text: string?, Parent: instance, Callback:function) -> GuiObject)
Creates an OutlinedButton, used in the donate tab.

### PackageButton.new(Title: string, Description: string, Parent: instance) -> PackageButton

:::warning
This returns a custom metatable, further documentation of the returned item can be found in the corresponding component documentation
:::

Creates a [PackageButton](./components/PackageButton.md), used in both the Player and Server tab.

### CompactTextField.new(Title: string, Placeholder: string, Parent: instance) -> CompactTextField

:::warning
This returns a custom metatable, further documentation of the returned item can be found in the corresponding component documentation
:::

Creates a [CompactTextField](./components/CompactTextField.md), used in the Player tab.

### SeparatedList.new(Name: string, Title: string?, Parent: instance) -> SeparatedList

:::warning
This returns a custom metatable, further documentation of the returned item can be found in the corresponding component documentation
:::

Creates a [SeparatedList](./components/SeparatedList.md), used in the Home tab.

### DenseList.new(Name: string, Parent: instance) -> DenseList

:::warning
This returns a custom metatable, further documentation of the returned item can be found in the corresponding component documentation
:::

Creates a [DenseList](./components/DenseList.md), used in the Chat and Commands History window.

### OverlayInput.new(Title: string, Parent: instance) -> OverlayInput

:::warning
This returns a custom metatable, further documentation of the returned item can be found in the corresponding component documentation
:::

Creates a [OverlayInput](./components/OverlayInput.md), used in the modal.

### Padding.new(Parent: instance) -> Padding

:::warning
This returns a custom metatable, further documentation of the returned item can be found in the corresponding component documentation
:::

Creates a [Padding](./components/Padding.md).

### Page.new(Name: string, Parent: instance) -> Page

Creates a page.

### Window.new(Name: string, Title: string?, Size: Vector2?, ShowMenu: boolean?, Parent: instance) -> Window

:::warning
This returns a custom metatable, further documentation of the returned item can be found in the corresponding component documentation
:::

Creates a [Window](./components/Window.md).