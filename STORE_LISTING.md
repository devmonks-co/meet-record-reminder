# Chrome Web Store listing

Paste these into the developer console.

## Store listing

**Name:** Meet Record Reminder

**Summary (max 132 chars):**
A clear reminder to start Gemini notes or recording the moment you join a Google Meet call.

**Category:** Productivity → Tools

**Description:**
Ever finished a great call and realised nobody was taking notes?

Meet Record Reminder shows a clear popup the moment you join a Google Meet call, asking: "Are you recording this call?" Turn on Gemini notes or recording, click "Notes are on", and you're done.

• Shows up only once you're actually in the call, not on the lobby screen
• Appears once per meeting
• Looks like Meet's own dialogs
• Works on every call: booked, scheduled or ad hoc
• No data collected. No network requests. Open source.

Source code: https://github.com/devmonks-co/meet-record-reminder

## Graphics

| Field | File |
|---|---|
| Store icon (128×128) | `icons/icon-128.png` |
| Screenshot (1280×800) | `assets/screenshot-1280x800.png` |
| Small promo tile (440×280) | `assets/promo-440x280.png` |

## Privacy tab

**Single purpose:**
Remind the user to start notes or recording when they join a Google Meet call.

**Host permission justification (`https://meet.google.com/*`):**
The extension has to run on Google Meet pages to detect when the user has joined a call and to show the reminder there. It doesn't run on any other site.

**Remote code:** No.

**Data usage:** Collects no user data. Tick all three certifications.

**Privacy policy URL:**
https://github.com/devmonks-co/meet-record-reminder/blob/main/PRIVACY.md
