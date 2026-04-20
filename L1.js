/**
 * LAYER 1: PHYSICAL STORAGE DRIVER
 * Geometry: 2-row blocks (Value on top, Title below)
 * Reserved: Row 1 is used for the Mega Array (ID 0)
 */

const SSD_ID = "13XI2l8r_0A1cLQ3DqRDPldJR1fkMetbDHYKpibqP3-8";
//my SSD sheet link. make a copy of this spreadsheet if you want faster drive with more storage
const SSD_NAME = "SSD";

/**
 * BUS LOGIC: Zigzag ID -> Physical Cell
 * Maps IDs to a 2-row vertical block, skipping Row 1.
 */
function _getPhysicalCoords(id) {
  const n = id;
  // Find the diagonal 'w'
  const w = Math.ceil((Math.sqrt(8 * n + 1) - 1) / 2) - 1;
  const t = (w * w + w) / 2;
  const y = n - t;
  const x = w - y + 2;
  
  let r, c;
  // If n is exactly a triangular number, it lands on the edge
  if (w % 2 === 0) {
    r = y;
    c = x;
  } else {
    r = x;
    c = y;
  }

  // FINAL CHECK: If r is 0, force to 1 (prevents Row 0 error)
  r = Math.max(1, r);
  c = Math.max(1, c);

  return {
    row: (r * 2), 
    col: c }
}


/**
 * L1 WRITE (DMA): Executed by Project A
 */
function write(id, value, title) {
  const sheet = SpreadsheetApp.openById(SSD_ID).getSheetByName(SSD_NAME);
  const coords = _getPhysicalCoords(id);
  
  // Write the Value and Title vertically
  // Values are stringified JSON to preserve data types/objects
  const payload = [[JSON.stringify(value)], [title]];
  sheet.getRange(coords.row, coords.col, 2, 1).setValues(payload);
}

/**
 * L1 READ (SENSE): Executed by Project A
 */
function read(id) {
  const sheet = SpreadsheetApp.openById(SSD_ID).getSheetByName(SSD_NAME);
  const coords = _getPhysicalCoords(id);
  
  // Only the top cell (Value) is needed for data retrieval
  const rawValue = sheet.getRange(coords.row, coords.col).getValue();
  
  try {
    return rawValue ? JSON.parse(rawValue) : null;
  } catch (e) {
    return rawValue || null;
  }
}
