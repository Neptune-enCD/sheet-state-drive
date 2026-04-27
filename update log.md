

- - - 
- - -


# V0.8 (Stable?), RC

# Changelogs: 

- ## major changes:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; [README.md](README.md) is now complete <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; grouped L2 and L3 together <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; **important!** changed the code to accept the SSD spreadsheet as URL instead of ID <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(`SpreadsheetApp.getSpreadsheetByID()` to `SpreadsheetApp.getSpreadsheetByURL()` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; changed `getSheetByName()` to `getActiveSheet()`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**IMPORTANT** this means the code could fail if there are more than one sheet in the SSD spreadsheet<br>

- ## minor changes:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; small fix-ups of README.md<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; file reorganisation<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; split the code to a "main" and "dev" branch so the main code won't change until every patch<br>

# if any bugs are found please report to me

- - -

# patchlog:

## V0.8 p01 HOTFIX
- quick fix of the README.md with the script ID directory accidentally becoming a hyperlink


- - -
- - -

due to privacy reasons, any prerelease version prior to this has to be removed. 

# V0.7 (Unstable)

# Changelogs: 

- ## major changes:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; new README.md added	<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; added set-up guide (for sheet only for now)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; added formulas.js for spreadsheet setup<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; removed my SSD ID and now requires your own ID<br>
- ## minor changes:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; small fix-ups in comments<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; small QoL improvements<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp; bug fixes<br>

# if any bugs are found please report to me


- - - 

# patchlog:
- - -

## V0.7 p02 (RC):

### new feature / bugfix:
- README.md finally added everything else
- currently no known bugs to fix

### known bug / issues:
#### no bugs / issues are known. If you encounter a bug please notify
#### release candidate: this patch seems to be free of bugs and now has all the initial features. If no bugs are reported this will be V1.0.0 after some polishing
---
## V0.7 p01:
### patch / bugfix:
- updated README.md to reflect the new major update<br>
- added new dev branch. new updates will now not automatically be updated on main branch until new patchnote<br>
- revamped workflow
- added copyright watermark to README.md

### known bugs / issues:
- README.md missing setup for the GAS
- - -
