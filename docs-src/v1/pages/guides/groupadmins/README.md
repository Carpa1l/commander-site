# Group administrators
Since Developer Preview 2 (A1150), we've added support for group-based permission, so you can set a specific group rank to be able to use Commander, here's a brief example of how:

```lua
module.Admins = {
	["12312312:50"] = "Owner"
}
```

In the example above, Commander will automatically set all users who is in the group with Id `12312312` and with rank 50 to Owner.
We've also added support for `greater than or equal to` and `lesser than or equal to` for group ranks. Here's how:

```lua
module.Admins = {
	["12312312:>50"] = "Owner",
	["12312312:<49"] = "Moderator",
}
```

The example above will tell Commander to automatically set all users who is in the group and with rank `equal to or greater than` `50` to Owner. Meanwhile will also set all users who is in the group but with rank `equal to or lesser` than `40` to Moderator.