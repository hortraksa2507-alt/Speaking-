# Speaking Exam Trainer

A lightweight web app for practising a 3-part English speaking exam (based on Monash College speaking exam materials).

## What's inside

- **Part 1 — Individual Questions**: topic-based questions (multiculturalism, food, study, hobbies, cities) with a speaking timer and tips.
- **Part 2 — Discuss & Decide**: partner tasks with four options (plastic waste, climate change, and extra practice topics). Discuss each option, then click the one you decide on. Includes a 30-second prep timer plus a 3-minute discussion timer.
- **Part 3 — Discussion**: culture questions (hugging goodbye, interrupting, festivals) with "ideas to talk about" prompts and a discussion timer.
- **Vocabulary**: useful words and phrases organised by category — giving opinions, agreeing/disagreeing, comparing options, making decisions, keeping the conversation going, buying thinking time, plus topic vocabulary for multiculturalism, environment, and social customs. Click any item to hide the meaning and test yourself.
- **Recorder**: record yourself with the microphone and listen back (works in any modern browser, no data leaves your device).

## Running the app

It's a static site — no build step or dependencies. Either open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

> Note: microphone recording requires the page to be served over `http://localhost` or `https://` (browser security requirement).

## Add to your phone's home screen

The app is an installable PWA with its own icon. Open the deployed site on your phone, then:

- **iPhone (Safari)**: tap the Share button → "Add to Home Screen".
- **Android (Chrome)**: tap the ⋮ menu → "Add to Home screen" (or accept the install prompt).

It opens full-screen like a native app and keeps working offline once loaded.

## How to practise

1. Pick a part and a topic (or use 🎲 Random).
2. Press ▶ to start the timer — orange is preparation time, green is speaking time. A beep tells you when to start and stop.
3. Press ● Rec to record yourself, then listen back and repeat the task until it feels easy.
4. Learn the phrases in the Vocabulary tab — they work in every part of the exam.
