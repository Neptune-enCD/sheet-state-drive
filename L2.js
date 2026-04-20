const SSD_ID = "13XI2l8r_0A1cLQ3DqRDPldJR1fkMetbDHYKpibqP3-8";
const SSD_NAME = "SSD";

function id_read_(id) {
  if (id > 0) {
    const read_data = L1.read(id);
    return read_data
  } else {
    const spreadsheet = SpreadsheetApp.openById(SSD_ID);
    const sheet = spreadsheet.getSheetByName(SSD_NAME);
    let empty_cell;
    if (id === 0) {
      empty_cell = sheet.getRange(1,2).getValue();
    } else if (id == -1) {
      empty_cell = sheet.getRange(1,3).getValue();
    }
    Logger.log("empty ID:" + empty_cell);
    return empty_cell
  }
}


function getMegaMap_() {
  const cache = CacheService.getScriptCache();
  const cachedData = cache.get("MEGA_MAP_JSON");

  // 1. If cache exists, return it immediately (No API call!)
  if (cachedData !== null) {
    return JSON.parse(cachedData);
  }

  // 2. Cache miss: Perform the slow API/Spreadsheet request
  const ss = SpreadsheetApp.openById(SSD_ID);
  const raw = ss.getSheetByName(SSD_NAME).getRange("A1").getValue();
  
  if (!raw) return {};

  const entries = raw.split("|");
  const megaMap = entries.reduce((map, entry) => {
    const [title, id] = entry.split(":");
    if (title && id) map[title] = parseInt(id);
    return map;
  }, {});

  // 3. Save to cache for 1 hour (3600 seconds) to avoid next API call
  cache.put("MEGA_MAP_JSON", JSON.stringify(megaMap), 3600);

  return megaMap;
}

function read_(title) {
  const lookup_map = getMegaMap_();
  const id_translation = lookup_map[title] || null;
  if (id_translation == null) {
    return null
  }
  const output = id_read_(id_translation);
  Logger.log("output:" + output);
  return output
}

function write_(value, title, priority, not_overwrite) {
  //step 1: check for preexisting data
  const lookup = getMegaMap_();
  let id = lookup[title];
  if (id) {
    if (not_overwrite) {
      throw new Error("BLOCKED: Title '" + title + "' already exists and overwrite is disabled.")
    }
  } else {
    //find empty id
    if (priority === true) {
      id = id_read_(0);
    } else {
      id = id_read_(-1);
    }
  }
  L1.write(id, value, title);
  return "success!  ID: " + id
}
