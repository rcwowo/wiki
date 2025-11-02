---
title: Command List
---
# Untoggable Commands

> [!NOTE] Note
> These are categories of commands that cannot be toggled on or off.
## Always Work
These are commands that will always work, regardless of if the bot is muted or not.

|Command|Description|
|---|---|
|!bot|Shows bot information related commands.|
|@orantesus|Tells you if the bot is muted, or if there’s no response, the bot is either disconnected or dead.|
## General Commands
These are general commands that don’t belong to any category, and are mostly for basic functions or help learn how the bot works.

|Command|Description|
|---|---|
|!changes|Quick changelog.|
|!help|Shows a list of enabled commands you can use.|
|!count help|Shows how to interact with counters.|
|!cc help|Shows how to interact with **channel** counters.|
|!nick `Nickname`|Sets your nickname with the bot.|
|!realname `Nickname`|Shows all users who have the nickname provided.|
|!time help|Show personal time related information.|
|!reminder help|Show help for reminders (timers, stickynote system)|
# Toggleable Commands

> [!NOTE] Note
> These are categories of commands that channel moderators and above can toggle on or off.

## Assorted
These are an assortment of commands that provide some form of information or utility.

|Command|Description|Aliases|
|---|---|---|
|!stats `Username`|See your or the provided user’s user stats.||
|!cstats `Username`|See your or the provided user’s channel statistics.||
|!coinflip|Flips a coin.||
|!roll `Number`|Rolls a dice with as many sides as provided.|`!d`|
|!replace `Text` `\| TextA, Text B+`|Will replace all instances of TextA with TextB. This can be used multiple times, or not at all.||
|!colo(u)r|Check a user’s color, as long as they’ve sent a message before.||
|!spacefact|Get a random space fact.||
|!lastactive `Username`|Says how long ago the provided user sent a message.||
|!lastseen `Username`|Says how long ago the provided user sent a message, and what the last message they sent was.||
|!lasthere `Username`|Says how long ago the provided user sent a message in the channel, and the message that was sent. Returns `null` if none.||
|!talkative `Page Number`|See the top chatters recorded by the bot.||
|!clb `Page Number`|See the most used counters.||
|!cclb `Page Number`|See the most used channel counters - may take some time to process.||

## Counters
These are commands for counters. Counters keep track of how many times you say a specific word or emote within each chat message. Counters are **case sensitive**, and will continue to count even if the bot is muted or not in the channel the message was sent in.

### Personal Counters
These are personal counters that are tracked by the user.

| Command                          | Description                                                                                                                               | Aliases                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| !count add `String(s)`           | Adds one or more personal counters.                                                                                                       | `!c add`                       |
| !count show `String(s)`          | Displays how many times one or more counters have been used.                                                                              | `!c show`                      |
| !count show all                  | If Orantesus is a moderator, it will display all counters in descending order. Otherwise, it will display your top 15 most used counters. | `!c show all`                  |
| !count remove/delete `String(s)` | Removes one or more personal counters.                                                                                                    | `!c remove`<br><br>`!c delete` |

### Channel Counters
These are counters that are specific to channels. By default, all channel emotes are added and updated hourly.

| Command                                 | Description                                                                                                                              | Aliases                          |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| !channelcount add `String(s)`           | Adds one or more channel counters.                                                                                                       | `!cc add`                        |
| !channelcount show `String(s)`          | Displays how many times one or more counters have been used.                                                                             | `!cc show`                       |
| !channelcount show all                  | If Orantesus is a moderator, it will display all counters in descending order. Otherwise, it will display the top 15 most used counters. | `!cc show all`                   |
| !channelcount remove/delete `String(s)` | Removes one or more channel counters.                                                                                                    | `!cc remove`<br><br>`!cc delete` |

## Pyramids
Pyramids are a fun way to display emotes in the chatroom.

| Command                       | Description                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| !pyramid `Emote(s)` `Number`  | Pyramid pattern 1 - cycles through the provided emotes at the size of the number provided.                        |
| !pyramid2 `Emote(s)` `Number` | Pyramid pattern 2 - combines provided emotes into one string (_e.g. EZ Clap)_ at the size of the number provided. |
| !pyramid3 `Emote(s)` `Number` | Pyramid pattern 3 - the fanciest pattern, at the size of the number provided.                                     |

## Gamba
We all love gambling, and these commands allow you to gamble with points from the bot.

| Command                         | Description                                         |
| ------------------------------- | --------------------------------------------------- |
| !gamble                         | Gamble your points.                                 |
| !givepoints `Username` `Amount` | Gives an amount of points to the provided username. |
| !lb `Page Number`               | Leaderboard of who has the most points.             |

## Fishing
Who doesn’t love fishing? These commands allow you to virtually fish with the bot.

| Command                  | Description                              |
| ------------------------ | ---------------------------------------- |
| !fish                    | Catch a fish.                            |
| !bucket                  | Tells you how many fish you have caught. |
| !bucketed `Username`     | Check a user’s collected fish.           |
| !throw `Fish` `Number`   | Removes fish from your bucket.           |
| !fishboard `Page Number` | Leaderboard of who has the most fish.    |

## RPS
Rock paper scissors. Simple as that.

| Command      | Description                                |
| ------------ | ------------------------------------------ |
| !rps `r/p/s` | Plays rock paper scissors against the bot. |
| !rps score   | Checks your RPS score (wins - losses)      |

## Quotes
These are an assortment of commands that allow you to keep track of various quotes or phrases.

| Command                      | Description                                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| !quote add/+ `Quote`         | Adds the quote to the list of quotes.                                                                          |
| !quote remove/del/- `Number` | Removes quote with the number provided.                                                                        |
| !quote `Number`              | Shows the specific quote with the number provided, if none is provided it will display a random quote instead. |
| !quotes                      | See how many quotes have been made in the chat.                                                                |

## API
These are various commands that interface with an API to return data of some kind.

| Command                 | Description                                                                                                          | Aliases                                      |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| !cat                    | A random image of a cat.                                                                                             |                                              |
| !dog                    | A random image of a dog.                                                                                             |                                              |
| !advice                 | Provides random, normally useless, advice.                                                                           |                                              |
| !r(andom)colo(u)r       | Provides a random color in hex format (e.g #e53dff) and the name of the color.                                       |                                              |
| !define `Word`          | Gives the definition of the word provided.                                                                           |                                              |
| !google `Search Query`  | Googles your search query, and will output whatever the first result is.                                             |                                              |
| !weather `Location`     | Fetch the weather details at the location provided, if none is provided it will use your set location, if available. |                                              |
| !forecast `Location`    | Fetch the forecast at the location provided, if none is provided it will use your set location, if available.        |                                              |
| !weather set `Location` | Sets your location for the weather and forecast commands.                                                            | `!forecast set`                              |
| !weather remove/delete  | Removes the location stored for the weather and forecast commands.                                                   | `!forecast remove`<br><br>`!forecast delete` |

## AI
The newest buzzword, these are commands that use OpenAI’s GPT models to generate a response. Please use wisely and at your own discretion.

### Free to Use
Fin does pay for AI usage, but these are free to use to any user of the bot.

| Command             | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| !ai `Prompt`        | Spits out an AI generated response.                                  |
| !gpt `Prompt`       | Uses OpenAI’s GPT 3.5 to spit out a response.                        |
| !gpt add `Prompt`   | Adds to a prompt previously done in the chat using OpenAI’s GPT 3.5. |
| @orantesus `Prompt` | Uses OpenAI’s GPT 3.5 to spit out a response.                        |

### Subscribers Only
These are commands that are restricted to subscribers of [Unfindable](https://twitch.tv/unfindable).

| Command            | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| !gpt4 `Prompt`     | Uses OpenAI’s GPT4 to spit out a response.                        |
| !gpt4 add `Prompt` | Adds to a prompt previously done in the chat using OpenAI’s GPT4. |

## Helix
These are a group of commands that interface with Twitch’s Helix API.

| Command                     | Description                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| !title `Stream Title`       | If you are a moderator, it will change the stream title to the one provided. Otherwise it will tell you the current title. |
| !game `Game Name`           | If you are a moderator, it will change the game to the one provided. Otherwise it will tell you the current game.          |
| !vanish                     | If enabled, it will time you out for the amount of time configured by moderators.                                          |
| !islive `Username`          | Tells you if the channel provided is live.                                                                                 |
| !uptime `Username`          | Tells you how long a channel has been live for, if the bot is connected to the channel. Defaults to the current channel.   |
| !lastlive `Username`        | Tells you how long since the provided channel went live.                                                                   |
| !followage `User` `Channel` | Tells you how long a user has followed a channel for. Defaults to the current user and channel.                            |
| !followers `Channel`        | Displays how many followers a specific channel has.                                                                        |
