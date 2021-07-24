TODO: Fix how links work in the website. Links seem to need a special link class to work, and if that's the case then I should route that through a class in the Layout.js component so that way links can appear as normal in the mdx files.

TODO: Fix how images work in the website. Images seem to need to be wrapped in a special div, and either that should also be done automatically through Layout.js or the css should be cleaned up so images work correctly by default. Another possibility is, if this'll fix the problem or help at all, to convert the images into a next.js Image tag.

TODO: All lists are broken. They don't seem to have their default styles, and are set to `list-style: none` If I had to guess, this is something that was broken from the source.css file, which was taken from the blaseball website. (NOTE: changing `list-style-type` doesn't actually make lists work.). Idk how to fix it and I'll prolly have to get Waffles' help.

TODO: Everything is center-aligned. This is bad from a legibility perspective. Changing this breaks stuff, so idk how to fix it.

TODO: Connect discord channel graphics to the asides in `welcome.mdx`.

TODO: Port discord channel graphics in welcome to the DiscordList.js component.

TODO: Maybe it'd be fun to have the DiscordList.js component support chopping off text after a certain length and adding on ...? Would it be more efficient than just testing it myself and ending the line at the appropriate spot? No. Would it be fun? 