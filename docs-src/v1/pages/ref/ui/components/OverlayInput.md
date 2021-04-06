:::danger Incompatibility notice
This page only applies to builds after `0.9.0`. Developer preview builds use a different UI structure and toolkit
:::

:::warning Under construction
This page is still under construction and details may be missing
:::

# OverlayInput
Used for the input modal. Respects `Stylesheet.OverlayInput` properties.

## Properties
### Title
The title of the OverlayInput
### Text
The content of the OverlayInput's TextField, basically a copy of TextBox.Text
### Parent
Leads to the parent of the object

## Events
To access an event, use `OverlayInput.Events`
### Dismissed
Fired when OverlayInput is dismissed, returns the input in either `string` or `boolean`, where `false` indicates the OverlayInput was dismissed by clicking the close button.