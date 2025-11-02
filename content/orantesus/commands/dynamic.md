---
title: Dynamic Commands
---

> [!NOTE] About
> Dynamic commands are custom commands specific to a channel, and can only be modified by the broadcaster or channel moderators.


## Managing Dynamic Commands
Dynamic commands have two primary components, the `trigger` and the `response`, as well as options regarding each dynamic command.

**The trigger** is what users in the chatroom will enter to receive a response from the bot. For example, if you added a command such as `!cmd add !test This is a test.` the trigger would be `!test` and whenever it is used, the bot would respond `This is a test.`

Triggers do not need to start with an exclamation point (!) but must be one word.

**The response** can consist of various [[#Command Values]], which allow you to create dynamic commands using data that the bot is able to provide. For example, if you added a command such as `!cmd add !greet Hi, ${_Target_}!` the command would respond with either the mentioned person, or the person who sent the command if no one is mentioned.

|Command|Description|Aliases|
|---|---|---|
|!cmd add `trigger` `response`|Adds a command that will respond with the provided response when the trigger is used.||
|!cmd delete `trigger`|Deletes the command with the specified trigger name.|`!cmd del`<br><br>`!cmd rem`<br><br>`!cmd remove`|
|!cmd edit `trigger` `response`|Change the response of a specific command.||
|!cmd addto `trigger` `response`|Add additional information to a response (longer than Twitch messages allow) to a command.||
|!cmd show `trigger`|Displays how the response for the specified command is formatted.||
|!cmd options `trigger`|Displays the currently set options of the specified command.|`!cmd adjust`|
|!cmd options `trigger` `option:value…`|Sets one or more options for the specified command. To set multiple options at once, separate them with spaces.|`!cmd adjust`|

## Command Options
Dynamic commands also have various options that you can adjust to make various commands respond differently. Such as replying to a message, or giving a command a cooldown.

| Option   | Value Type | Description                                                                                                 | Examples                              |
| -------- | ---------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Enabled  | `Boolean`  | This will allow the command to be used (true)/stop the command from being used (false)                      | `enabled:true`<br><br>`enabled:false` |
| Cooldown | `Integer`  | Stops the bot from responding for the specified number of seconds until the cooldown ends.                  | `cooldown:5`<br><br>`cooldown:60`     |
| Reply    | `Boolean`  | Whether the command should reply directly to the user who triggered it, or just send a message in the chat. | `reply:true`<br><br>`reply:false`     |
| Level    | `Int`      | Limits the command to only be used by certain people above the specified level.                             | `level:0`<br><br>`level:100`          |
| Offline  | `Boolean`  | Limits the command to only being used while the channel is offline (not streaming).                         | `offline:true`<br><br>`offline:false` |
| Online   | `Boolean`  | Limits the command to only being used while the channel is offline (they are streaming).                    | `online:true`<br><br>`online:false`   |

## Command Values
Each command is able to have specific values from data the bot has collected or is able to access. Command values can be accessed by adding `${_ValueName_}` to the response of a command - where the _ValueName_ is replaced by one of the available values below.

For example, a command with the response `Hi, ${_Target_}!` would respond with either:

- If a user is mentioned: `Hi, MentionedUser!`
- Or, if no one is mentioned: `Hi, PersonWhoSentCommand!`

Additionally, command values can be nested within other command values. For example, if you wanted to get the time for a specific user, you could have a command with the response `It is currently ${${Target}.Time} for ${${Target}.Nickname}.` that would respond with either:

- If a user is mentioned: `It is currently 5:56 PM for MentionedUser.`
- Or, if no one is mentioned: `It is currently 5:56 PM for PersonWhoSentCommand.`

### Generic Values

| Value         | Description                                                                                                                                                                                               |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Target        | The second word used in the command. If none is provided, it will default to the person who sent the command.                                                                                             |
| ChannelTarget | The second word used in the command. If none is provided, it will default to the channel name.                                                                                                            |
| Message       | The message the person has sent, excluding the trigger.<br><br>For example, if the user sent the command `!test this is a weird test command` - the message would just be: `this is a weird test command` |
| Sender        | The name of the person who sent the command.                                                                                                                                                              |

### User Data
You can replace the `User` portion of these values with a specific username. For example, if you wanted to exclusively receive the time for a specific user, you could use `SpecificUsername.Time`

| Value                       | Description                                                                                                |
| --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| User.Username               | The user’s name.                                                                                           |
| User.Nickname               | The user’s nickname, if available.                                                                         |
| User.Time                   | The user’s time, if available.                                                                             |
| User.Colour                 | The user’s Twitch name colour as a hex code.                                                               |
| User.Color                  | An alias of User.Colour, the user’s Twitch name color as a hex code.                                       |
| User.MessagesSent           | The number of messages the user has sent across all chats.                                                 |
| User.Points                 | The amount of points the user has.                                                                         |
| User.Fish                   | The amount of fish the user has caught. Null if none.                                                      |
| User.FishTypes              | The types of fish the user has caught. Null if none.                                                       |
| User.Birthday               | The user’s birthday in `yyyy-MM-dd` format, if available.                                                  |
| User.TimeToBirthday         | The amount of time until the user’s birthday, if available.                                                |
| User.RPSWins                | The number of times the user has won in RPS.                                                               |
| User.RPSTies                | The number of times the user has tied in RPS.                                                              |
| User.RPSLosses              | The number of times the user has lost in RPS.                                                              |
| User.LastMessageTime        | The time of the user’s last sent message in `yyyy-MM-dd hh:mm:ss tt` format.                               |
| User.LastMessageHere        | The user’s last known message sent in the current chat, if available.                                      |
| User.LastMessageHereTime    | The time of the user’s last message in the current chat, in `yyyy-MM-dd hh:mm:ss tt` format, if available. |
| User.LastMessageTimeHereAgo | How long it has been since the user last sent a message in the current chat, if available.                 |

### Channel Data
Similar to [[#User Data]], you can replace the `Channel` portion of these values with a specific channel username. For example, if you wanted to exclusively see if a specific channel was live, you could use `SpecificUsername.IsLive`

| Value                         | Description                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Channel.ChannelName           | The channel’s name.                                                                                              |
| Channel.ChannelMessages       | The number of messages sent in the current channel (since the bot connected to it).                              |
| Channel.Title                 | The channel’s currently set title.                                                                               |
| Channel.Game                  | The channel’s currently set game category.                                                                       |
| Channel.IsLive                | "is live" if the channel is live, "is not live" if the channel is not live or could not be found.                |
| Channel.TimeTitleChanged      | The time the title was changed (null if bot is not connected or is not listening for changes).                   |
| Channel.TimeSinceTitleChanged | How long it has been since the title was changed (null if bot is not connected or is not listening for changes). |
| Channel.TimeGameChanged       | The time the game was changed (null if bot is not connected or is not listening for changes).                    |
| Channel.TimeSinceGameChanged  | How long it has been since the game was changed (null if bot is not connected or is not listening for changes).  |
| Channel.TimeLastLive          | The time the channel was last live (null if bot is not connected).                                               |
| Channel.TimeSinceLastLive     | How long it has been since the channel was live (null if bot is not connected).                                  |
| Channel.TimeJoined            | The time bot started listening to the channel (null if bot has not joined channel).                              |
| Channel.TimeSinceJoined       | How long it has been since the bot started listening to this channel (null if bot has not joined channel.)       |
| Channel.BannedUsers           | The number of bans that have occurred in the current chat (null if bot is not connected).                        |
| Channel.GPTTokensUsed         | The amount of Tokens used by GPT (0 if unused).                                                                  |
| Channel.GPT4TokensUsed        | The amount of Tokens used by GPT4 (0 if unused).                                                                 |
| Channel.VanishTime            | The vanish time in seconds for !vanish (0 if bot is not moderator).                                              |

### Assorted Data

| Value             | Description                                                                                                                                                                                                                                                 |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LastFMSong.Name   | Will output the most recently listened to track for the name provided.                                                                                                                                                                                      |
| LastFMRecent.Name | Will output the most recently listened to track for the name provided, with some additional text conditions. For example, if the user is currently listening to the song it will return `is now listening to` otherwise it will say `was last listening to` |