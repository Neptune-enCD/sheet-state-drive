# Sheet-State-Drive (SSD)
**Version:** 0.7_B (Unstable / Development)

<sub> Copyright (c) 2026 Neptune-enCD </sub>

### Technical Advisory
This project is currently in **BETA pre-release**. Users should expect significant bugs, potential crashes, and data instability. Please report all defects via the repository's Issue tracker to facilitate patching and stability improvements.

**Projected Completion:** TBD  
**Licensing:** Distributed under the MIT License. Attribution to the original author is required.

---

## Project Overview
Sheet-State-Drive (SSD) is a tiered system designed to utilise Google Sheets as a data storage and state management system. This repository contains the JavaScript codebase intended for use within the Google Apps Script environment to facilitate read and write requests.

The system is comprised of two core components:
1. **The Spreadsheet:** The database layer where information is persisted.
2. **The Codebase:** The processing layer that manages data transactions and logic.

---

## Installation and Setup

### Sheet setup:

### Step 1: Spreadsheet Configuration
1. Initialize a new, empty Google Spreadsheet.
2. Navigate to the **Extensions** menu and select **Apps Script**.
3. Replace any existing code in the editor with the logic provided in the following file:
   * [Access Spreadsheet Formulas (formulas.js)](formulas.js)
4. Save the script project.

### Step 2: Implementation
after the spreadsheet is set up and the code is entered into app-script, swap the constant **"SSD-ID"** with your spreadsheet ID (docs.google.com/spreadsheet/**yourID**/edit)

---

### Google App Script setup: (~5 minutes)

### step 1: layer 1
1. create a new empty script
2. copy and paste:
   * [Sheet-State-Drive layer 1 processor (L1.js)](L1.js)
3. deploy the script under "library"
4. copy the id (https://script.google.com/home/projects/**yourID**/edit)

### step 2: layer 2
1. create another empty script
2. navigate to the "library" tab on the left under the script selection, and click "+"
3. paste the id, click "lookup", and select version as "Head", select identifier as "L1", and click "add".
4. copy and paste:
   * [Sheet-State-Drive layer 2 processor (L2.js)](L2.js)
5. (optional) rename the file to "L2" for easier navigation

### step 3: layer 3 (user interface)
1. add a new code file, and select "script"
2. rename the new file to "L3"
3. copy and paste:
   * [Sheet-State-Drive user interface (L3.js)](L3.js)
4. select deploy, then select as a library
5. click deploy

### you have completed setup!

---

## use instruction: (only after finishing the entire setup process)

1. copy the ID of the script (refrence to the app script set up if you don't know what is the ID)
2. in the script which you would like to use the SSD, select "+" on "library"
3. paste the ID and click "lookup"
4. select version to "head" and the identifier to "SSD" (you can set the identifier to anything, however I recommend "SSD")
5. when you need to write, enter "SSD.write()", and the directory of the function will tell you what to imput
6. same with read, enter "SSD.read()" and reference to the directory for instruction of the values to imput

---

## Contribution Policy
Forks and community-driven enhancements are welcome. Per the terms of the MIT License, all derivative works must retain the original copyright notice and attribution to the originator.

---

## Bug Reporting
To report a critical bug or system failure, please open a formal Issue on this repository. Ensure the report includes:
* A comprehensive description of the failure.
* The environment in which the bug occurred.
* Step-by-step instructions to reproduce the error.
