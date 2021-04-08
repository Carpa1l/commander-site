# Commander for Roblox
Commander is an open-source, community-driven and completely free administration panel for games that require simple and efficient moderation in Roblox!

With Commander, game developers can finally find an administration system that is active in development, not bloated, and does not contain any sort of fun/donation commands. Making games much professional with Commander.

![](https://camo.githubusercontent.com/81a8057ef042bbed121cd9a3b6cc6810bc8824694a56170398581322b984b6b0/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3831333539303036383039303337323136362f3831363333363433373932323233343431382f42616e6e65725f322e706e67)

## Uniqueness
Commander has a **lot** of uniqueness, such as:

- Commander is very flexible and customizable, you can customize which command can be ran by a specific level without modifying the command itself. 
- :paintbrush: Commander support theming, make your Commander unique with the 6 themes we ship by default, using community-made themes or even create your own!
- :rocket: Commander is coded to fully utilize the performance granted by Luau.
- :hammer_and_wrench: Commander has great support for developers, allowing developers to create their own package without coding complicated systems.
- :rainbow: It's just great, our UI is designed by a professional UI designer who worked on a lot of unique designs that received many positive feedbacks within the developer community.

## Why is it called Commander?
Commander is a noun, which refers to a person in authority. Just like administrators, they are also a person in authority.

### So why not call it Administrators?
The reason why we picked Commander instead is simple, the `Command` key and commands in administration systems.

That is also how we came up with the logo! It is a command key tilted in negative nine degrees.

## Installation
Commander currently provides 3 ways to install, which is:
- Via Rojo
- Manual installation via .RBXM
- via require loader

### Installing with Rojo
:::warning Requirements
In order to install Commander with Rojo, you need to fulfil the following requirements:
An installation of Rojo 6.0.2 or newer
Cargo
Git
:::

First, clone Commander's [repository](https://github.com/va1kio/commander), then change the current directory to the cloned repository with `cd DIRECTORY`
```
git clone https://github.com/va1kio/commander
cd commander
```

Second, serve the project with Rojo
```
rojo serve
```

Third, open your game/an empty baseplate with Roblox, then connect to Rojo.
Once you've done it, you can start configuring Commander with your external code editor, go to `src/server/SystemPackages/Settings.lua`.

### Installing manually via .RBXM
:::danger Deprecated method
While this method may still be available for the current version, we do not recommend using this method if you plan to keep Commander always up-to-date.
:::

If you happen to find a file called Commander.rbxm in our [GitHub repository](https://github.com/va1kio/commander), click the item and hit the `Download/View raw` button.

After that, simply drag the downloaded file in your game/empty baseplate, and read the `README` module

### Installing via require loader
This is the most easiest method to install Commander, which will allow Commander to be always up-to-date. However, you will not be able to see the actual source code, if you plan to edit the source code, we highly recommend installing Commander via Rojo instead.

First, get the model [here](https://www.roblox.com/library/6648688759/Commander-4). Then, place it to your game with the toolbox. After that, start configuring Commander in the Settings module, inside the require loader.

## Alternatives

- Adonis, a mature administration system but the plugin API can be really hard to use.
- Basic Admin Essential, another mature administration system, but both the main codebase and the UI code is really bloated, not so optimized for games.
- HD Admin, an administration system coded by professional developers, but contains a lot of useless and abusive commands, extremely bloated for games.