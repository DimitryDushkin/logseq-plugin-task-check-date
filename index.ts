import "@logseq/libs";
import { getDateForPage } from "logseq-dateutils";

const TASK_MARKERS = new Set(['DONE', 'NOW', "LATER"]);

function main() {
  logseq.DB.onChanged(async (e) => {
    const taskBlock  = e.blocks.find(block => TASK_MARKERS.has(block.marker));
    if (!taskBlock) {
      return;
    }
    
    const hasCompletedProperty = taskBlock.properties.completed;

    if (taskBlock.marker === 'DONE') {
      if (hasCompletedProperty) {
        return;
      }
  
      const userConfigs = await logseq.App.getUserConfigs();
      const preferredDateFormat = userConfigs.preferredDateFormat;
      const datePage = getDateForPage(new Date, preferredDateFormat)

      logseq.Editor.upsertBlockProperty(taskBlock.uuid, 'completed',  datePage);
    } else {
      logseq.Editor.removeBlockProperty(taskBlock.uuid, 'completed');
    }
  });
}

logseq.ready(main).catch(console.error);
