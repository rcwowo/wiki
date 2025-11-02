---
title: Moderator Commands
---

> [!NOTE] About
> These are commands that are only usable by channel moderators or the broadcaster.
## Generic Commands

| Command                            | Description                                                                                                                                                  |     |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| !vanishtime `Time (e.g 30s or 1h)` | Sets the length of time the !vanish command times out users for. Set to `0s` to disable.                                                                     |     |
| !refreshemotes                     | Updates all the emotes in the current chat for the bot to continue counting.                                                                                 |     |
| !banlist                           | Check the ban list and related information.                                                                                                                  |     |
| !emotes `bttv/ffz/7tv/twitch/all`  | This will spit out every single emote name for the current channel using the services selected. You can use multiple sources by separating them with spaces. |     |
| !title `Stream Title`              | Changes the stream title to the one provided.                                                                                                                |     |
| !game `Game Name`                  | Changes the game category to the one provided.                                                                                                               |     |
| !level `Username` `Number`         | **Only broadcasters** can use this command. Sets the level of a specific user. This can be combined with [[dynamic]] to limit access to specific commands.   |     |

## Pings

|Command|Description|   |
|---|---|---|
|!livepingadd `Channel`|Adds a ping message for when the provided channel goes live.|   |
|!livepingremove `Category`|Removes a ping message for the provided channel.|   |
|!livepingsee|See what channels the chatroom receives live pings for.|   |
|!changepingadd `Channel`|Adds a ping for when the provided channel changes the title or game category.|   |
|!changepingremove `Channel`|Removes a change ping for the provided channel.|   |
|!changepingsee|See what channels the chatroom receives change pings for.|   |

## Toggles

| Command             | Description                                                       |     |
| ------------------- | ----------------------------------------------------------------- | --- |
| !toggles            | See enabled/disabled [[#Command Categories]] of the bot commands. |     |
| !enable `Category`  | Enables a category of commands.                                   |     |
| !disable `Category` | Disables a category of commands.                                  |     |
| !toggle `Category`  | Toggles a category of commands.                                   |     |

### Command Categories

- **Assorted** - these are an assortment of commands that provide some form of information or utility.
- **Counters** - these keep track of how many times you say a specific word or emote within each chat message.
- **Pyramids** - a fun way to display emotes in the chatroom.
- **Gamba** - we all love gambling, and these commands allow you to gamble with points from the bot.
- **Fishing** - who doesn’t love fishing? These commands allow you to virtually fish with the bot.
- **RPS** - rock paper scissors. Simple as that.
- **Quotes** - these are an assortment of commands that allow you to keep track of various quotes or phrases.
- **API** - these are various commands that interface with an API to return data of some kind.
- **AI** - these are commands that use OpenAI’s GPT models to generate a response. Please use wisely and at your own discretion.
- **Helix** - these are a group of commands that interface with Twitch’s Helix API.
- **Announcements** - toggle that will notify chat when the title/category is changed.
- **Live Notification** - toggle that will send a message when you go live.
- **Offline Only** - will automatically mute the bot if you go live/unmute if you end stream.