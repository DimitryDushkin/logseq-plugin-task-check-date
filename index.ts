import "@logseq/libs";
import * as moment from 'moment';

const TASK_MARKERS = new Set(["DONE", "NOW", "LATER", "DOING", "TODO", "WAITING"]);

function main() {
  logseq.DB.onChanged(async (e) => {
    const taskBlock = e.blocks.find((block) => TASK_MARKERS.has(block.marker));
    if (!taskBlock) {
      return;
    }

    const hasCompletedProperty = taskBlock.properties?.completed;

    if (taskBlock.marker === "DONE") {
      if (hasCompletedProperty) {
        return;
      }

      const datePage = moment().format('YYYYMMDD');

      logseq.Editor.upsertBlockProperty(taskBlock.uuid, "completed", datePage);
    } else {
      if (!hasCompletedProperty) {
        return;
      }
      logseq.Editor.removeBlockProperty(taskBlock.uuid, "completed");
    }
  });

  logseq.Editor.registerSlashCommand(
    "Completed tasks for the past week",
    async () => {
      const block = await logseq.Editor.getCurrentBlock();
      if (!block) {
        return;
      }

      const today = moment();

      let query = "{{query (or ";
      const days: string[] = [];
      for (let i = 0; i < 7; i++) {
        days.push(
          `(property completed ${today.clone().subtract(i + 1, "day").format('YYYYMMDD')})`
        );
      }
      query += days.join(" ");
      query += ") }}";

      const blockHeader = await logseq.Editor.insertBlock(block.uuid, '### Tasks completed last week', { before: true });
      if (!blockHeader) {
        return;
      }
      await logseq.Editor.insertBlock(blockHeader.uuid, query);
      await logseq.Editor.insertBlock(blockHeader.uuid, '---', { sibling: true })
    }
  );
}

logseq.ready(main).catch(console.error);
