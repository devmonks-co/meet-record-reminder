# Meet Record Reminder

A tiny Chrome extension that shows a big red "Are you recording this call?" popup the moment you join a Google Meet call.

Built because we missed Gemini notes on a client call. Google Meet has no global "always take notes" switch for every kind of meeting, so this makes forgetting hard.

## What it does

- Waits until you are actually in the call, not on the lobby screen.
- Shows a full-screen reminder once per meeting.
- Dismiss with **Notes are on** or **Not needed**.
- No permissions beyond `meet.google.com`. No data leaves your browser.

## Install

1. Clone this repo.
2. Open `chrome://extensions`.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and pick the repo folder.
5. Join any Meet call to test it.

## License

MIT
