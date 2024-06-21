import "@logseq/libs";
import { SettingSchemaDesc } from "@logseq/libs/dist/LSPlugin.user";
import dayjs from "dayjs";
import { getDateForPage } from "logseq-dateutils";

const SETTINGS_SCHEMA: SettingSchemaDesc[] = [
  {
    default: "DONE, NOW, LATER, DOING, TODO, WAITING",
    description: "Task markers to track when changing the status of tasks.",
    title: "Task markers",
    key: "taskMarkers",
    type: "string",
  },
  {
    default: true,
    description: "Include date when completing tasks.",
    title: "Include date?",
    key: "includeDate",
    type: "boolean",
  },
  {
    default: "completed",
    description: "Property to use for date when marking tasks as completed.",
    title: "Completed date property",
    key: "completedDateProperty",
    type: "string",
  },
  {
    default: false,
    description: "Include time when completing tasks.",
    title: "Include time?",
    key: "includeTime",
    type: "boolean",
  },
  {
    default: "time",
    description: "Property to use for time when marking tasks as completed.",
    title: "Completed time property",
    key: "completedTimeProperty",
    type: "string",
  },

  {
    default: "HH:mm",
    description:
      "Time format to use when including time. See: https://day.js.org/docs/en/parse/string-format",
    title: "Time format",
    key: "timeFormat",
    type: "string",
  },
];

const splitTaskMarkers = (taskMarkers: string | undefined) => {
  if (!taskMarkers) {
    return [];
  }

  return String(taskMarkers)
    .split(",")
    .map((marker) => marker.trim());
};

logseq.useSettingsSchema(SETTINGS_SCHEMA);

function main() {
  let TASK_MARKERS = new Set(
    splitTaskMarkers(logseq.settings?.taskMarkers as string)
  );

  logseq.onSettingsChanged((_previousSettings, settings) => {
    TASK_MARKERS = new Set(splitTaskMarkers(settings?.taskMarkers as string));
  });

  logseq.DB.onChanged(async (event) => {
    const taskBlock = event.blocks.find((block) =>
      block.marker ? TASK_MARKERS.has(block.marker) : false
    );

    if (!taskBlock) {
      return;
    }

    const hasCompletedProperty =
      taskBlock.properties?.[logseq.settings?.completedDateProperty as string];
    const hasTimeProperty =
      taskBlock.properties?.[logseq.settings?.completedTimeProperty as string];

    if (taskBlock.marker === "DONE") {
      if (!hasCompletedProperty && logseq.settings?.includeDate) {
        const userConfigs = await logseq.App.getUserConfigs();
        let preferredDateFormat = userConfigs.preferredDateFormat;
        preferredDateFormat = preferredDateFormat.replace(/E{1,3}/, "EEE"); //handle same E, EE, or EEE bug
        const datePage = getDateForPage(new Date(), preferredDateFormat);

        logseq.Editor.upsertBlockProperty(
          taskBlock.uuid,
          logseq.settings?.completedDateProperty as string,
          datePage
        );
      }

      if (!hasTimeProperty && logseq.settings?.includeTime) {
        const timeNow = dayjs().format(logseq.settings?.timeFormat as string);
        logseq.Editor.upsertBlockProperty(
          taskBlock.uuid,
          logseq.settings?.completedTimeProperty as string,
          timeNow
        );
      }
    } else {
      if (hasCompletedProperty) {
        logseq.Editor.removeBlockProperty(
          taskBlock.uuid,
          logseq.settings?.completedDateProperty as string
        );
      }

      if (hasTimeProperty) {
        logseq.Editor.removeBlockProperty(
          taskBlock.uuid,
          logseq.settings?.completedTimeProperty as string
        );
      }
    }
  });

  logseq.Editor.registerSlashCommand(
    "Completed tasks for the past week",
    async () => {
      const block = await logseq.Editor.getCurrentBlock();
      if (!block) {
        return;
      }

      const userConfigs = await logseq.App.getUserConfigs();
      let preferredDateFormat = userConfigs.preferredDateFormat;
      preferredDateFormat = preferredDateFormat.replace(/E{1,3}/, "EEE"); //handle same E, EE, or EEE bug
      const today = dayjs(new Date());

      let query = "{{query (or ";
      const days: string[] = [];
      for (let i = 0; i < 7; i++) {
        days.push(
          `(property completed ${getDateForPage(
            today.subtract(i + 1, "day").toDate(),
            preferredDateFormat
          )})`
        );
      }
      query += days.join(" ");
      query += ") }}";

      const blockHeader = await logseq.Editor.insertBlock(
        block.uuid,
        "### Tasks completed last week",
        { before: true }
      );
      if (!blockHeader) {
        return;
      }
      await logseq.Editor.insertBlock(blockHeader.uuid, query);
      await logseq.Editor.insertBlock(blockHeader.uuid, "---", {
        sibling: true,
      });
    }
  );
}

logseq.ready(main).catch(console.error);
