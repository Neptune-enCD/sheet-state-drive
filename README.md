# Sheet-State-Drive (SSD)
**Version:** 0.6_B (Unstable / Development)

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

### Phase 1: Spreadsheet Configuration
1. Initialize a new, empty Google Spreadsheet.
2. Navigate to the **Extensions** menu and select **Apps Script**.
3. Replace any existing code in the editor with the logic provided in the following file:
   * [Access Spreadsheet Formulas (formulas.js)](formulas.js)
4. Save the script project.

### Phase 2: Implementation
after the spreadsheet is set up and the code is entered into app-script, swap the constant **"SSD-ID"** with your spreadsheet ID (docs.google.com/spreadsheet/**yourID**/edit)

---

## Contribution Policy
Forks and community-driven enhancements are welcome. Per the terms of the MIT License, all derivative works must retain the original copyright notice and attribution to the originator.

---

## Bug Reporting
To report a critical bug or system failure, please open a formal Issue on this repository. Ensure the report includes:
* A comprehensive description of the failure.
* The environment in which the bug occurred.
* Step-by-step instructions to reproduce the error.
