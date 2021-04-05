# Thoughts on Rojo

Rojo is a great utility for developers like us who prefer working with softwares such as Visual Studio Code, Sublime Text, et cetera, and platforms like GitHub and GitLab.

While Rojo is a lifesaver for the most common problems we encountered in developing in Roblox (eg collaborative editing, better autocomplete, much stable code editor), the lack of support coming from Roblox is just way too tiny, making us being in middle of them, where one's Rojo with a third-party code editor, and one's Roblox Studio. In this statement, I'll be stating the problems we have with working with Rojo in Roblox.

## My case

If you know me, I am the creator of Commander, which is an administration panel open sourced under the MIT license. As a result, we prefer using services like GitHub to host our source file so everyone else can view the actual source easier and is able to make changes to the code, such as typo's and bugs by creating a new pull request. Where if done without GitHub, the user have to contact the team, for example me, to adopt the changes made by the user. Which is extremely painful if in a larger scale -- just imagine reading through 200 mail entries per day. Not really ideal for people like us who have a full-time job in real life.

So, we're "forced" to use Rojo and GitHub, and because of that, a lot of stuff become really complicated. Such as requiring users to install Rojo so they can install the system flawlessly. While we do have an installer, it isn't really ideal for us, having to rebuild the file for every change to the codebase. People within the community has been asking for a better loader which allows Commander to be always up-to-date, but it fails to meet our demand as again, it requires us to rebuild the file for every change made to the codebase, and we also have to publish it again. Leaving a big compromise on affecting and potentially ruining our workflow.

Depends on who you are, you might want to ask me why not just fully rely on Roblox Studio, leaving GitHub and Rojo behind? The answer is simple -- Commander is not a one person project, it's more than just one and will be even more in the future. Relying on just Roblox Studio for cross-country collaboration is unrealistic, unreliable and not workable in terms of efficiency and accessibility. 

### Solution?

Note how I mention that I use GitHub for Commander? That's where the real trick comes. There's a fun feature called GitHub action, which can be used for automating PRs, commits, et cetera. What if you can achieve an automated processing and publishing system with GitHub actions? It surely sounds workable and will solve the issue mentioned above, but we honestly don't know. While yes, it will definitely work if it's only publishing, but processing? It requires an actual machine with Rojo built in, and we have to use something that can interact with CLIs, like SSH.

Here's a brief draft of how it will be implemented:
```
User pushed a new commit -> An agent machine pulls the commit and conduct an unit test -> {

​	-> If it succeeded -> Add the installer info (eg readme and license) -> Group in folder -> Update existing model

​	-> If it failed -> Reject the commit

}
```

Is it workable and possible? Of course, but is it sustainable, especially for communities like us who barely have any profit? Nope.

This implementation requires an actual machine with Rojo built in, as mentioned above, which means we have to rent a VPS that uses Windows or Mac. Extremely horrifying, especially with their price tag. Open source communities can barely afford the renting price, as the price for renting a Mac is already over 35 dollars per month. There's no doubt that a Windows-based VPS will cost more.

## So, what's next?

There's really no next step for people like us who suffer from this issue. At the end, Rojo is an unofficial thing. It is not originally made by Roblox, nor is maintained by Roblox. It's very unrealistic for Roblox to add support for Rojo in Studio or maintain Rojo.

We can probably just complain about how restrictive Roblox is in this aspect, nothing else.

___

(I am not a native speaker, grammatical problems may appear in this document)