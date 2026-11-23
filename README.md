# My Better Self — Deployment Guide

## Quick Setup (GitHub Pages — Free)

1. Create a new GitHub repository named `my-better-self`
2. Upload ALL files from this folder to the repository:
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - `icon-192.png`
   - `icon-512.png`
3. Go to repository Settings → Pages
4. Under "Source", select "Deploy from a branch" → `main` → `/ (root)`
5. Click Save
6. Your app will be live at: `https://yourusername.github.io/my-better-self/`

## Install on Android Phone

1. Open the URL in Chrome on your Android phone
2. Chrome will show "Add to Home Screen" banner — tap it
3. Or: tap the three-dot menu → "Install app" or "Add to Home Screen"
4. The app will appear on your home screen like a native app
5. When you first open it, tap "Enable" to turn on notifications

## How Notifications Work

- The Service Worker runs in the background and sends notifications at:
  - 6:20 AM — Wake-up reminder
  - 9:55 AM — Satsang reminder
  - 9:50 PM — Screen cutoff warning
  - 10:25 PM — End-of-day report reminder
  - 11:15 PM — Bedtime reminder
- Notifications work even when the app is closed (as long as Chrome is running)
- For best reliability: keep Chrome running in background (don't force-close it)

## Cycle 1 Start Date

Day 1 = November 26, 2026

## Data

All data is stored locally on your phone (localStorage).
To back up: use the app's export feature (coming in a future update).

