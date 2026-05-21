# LearnLoop

LearnLoop is a standalone adaptive learning webapp for students.

- Purpose: a student study resource for lessons, uploads, flashcards, planning, and revision.
- Pages: study home, course catalog, lesson room, study planner, resources, practice lab, community, progress data, login, mobile app, and study guide.
- Data: 300 preloaded learning records in `api/data.json`.
- Demo login: `student@learnloop.demo` / `demo123`.
- Static backend for GitHub Pages: `api/data.json` and `api/users.json`.
- Local backend: run `npm start` to use `server/server.js` with `/api/health`, `/api/login`, and `/api/records`.
- Uploads: PDFs, PPT/PPTX, MP4, MP3, and PNG files are saved privately in the browser using IndexedDB.
- Android: `downloads/learnloop-student-study.apk` is a signed WebView APK that opens the live LearnLoop app and supports Android file picking.
- Interactions: course enrollment, lesson completion, lesson notes, assignments, study calendar, scored quizzes, discussion posts, flashcards, Loop Tools, study timer, resource search, adaptive path recommender, course builder sliders, saved study runs, searchable database, JSON export, theme toggle, and local CRUD-style records.
