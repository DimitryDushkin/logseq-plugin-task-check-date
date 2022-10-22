# logseq-plugin-task-check-date

Logseq plugin for tracking when task was done. Useful for gathering weekly\monthly\whatever report.

## Features
* Adds property "completed" to tasks upon checking
* Adds slash command `Completed tasks for the past week` which queries blocks with `completed` property equal one of 7 past days.

![demo](demo.png)

## Note
Query looks a bit ugly since I didn't find any other option to query block's property dates. Looks like it's not possible for now. Opened a ticket — https://github.com/logseq/logseq/issues/7083

## How to release
1. `yarn build`
2. `git commit -am "up build" && git push`
3. Make release in Github.