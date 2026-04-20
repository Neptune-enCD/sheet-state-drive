/**
 * Saves data to the system.
 * 
 * @param {*} value - The data you want to store.
 * @param {string} title - The unique name for this entry.
 * @param {boolean} [priority=false] - Use TRUE to use the priority space (ID 1-100), FALSE to use standard priority.
 * @param {boolean} [overwrite=true] - Use TRUE to update existing titles, FALSE to block duplicates.
 * @returns {string} Returns "success" if the operation completes.
 */
function write (value,title,priority,overwrite) {
  if (value === undefined) {
    value = null;
    console.warn("value not found. If this is intentional, ignore this");
  }
  if (!title) {
    throw new Error ("title is not found. this script cannot function without a title");
  }
  if (priority === undefined) {
    console.warn("priority not selected. as a result, the priority defaults to standard priority. if this is not wanted please add (true) into the priority selection");
  } else if (typeof priority !== "boolean") {
    console.warn("priority input is not a boolean. To note: this script accepts priority as a boolean. if any non-boolean input is detected, the script defaults to non-priority");
  }
  if (overwrite === undefined) {
    console.warn ("overwrite not selected. as a result the script will default to overwrite values of same title");
  }
  return write_(value,title,priority,overwrite)
}


/** 
 * Reads data from the system
 * 
 * @param {string} title - the unique name to search for. leave '' if you want to search with ID instead
 * @param {number} id - (NOT RECOMMENDED) the id to search for. ignore if you want to search for title
 * 
 * ONLY ONE. DO NOT ENTER BOTH OR NEITHER!
 */
function read (title,id) {
  if (title == '') {
    console.warn("title not entered. please enter one or ignore if ID is used (NOT RECOMMENDED)");
  } else {
    return read_(title)
  }
  if (typeof id === "number") {
    console.log("id used. please be absolutely certain you want to do this as data get regularly moved to different id");
    return id_read_(id)
  }
  throw new Error ("neither input entered! the script is unable to proceed")
}
