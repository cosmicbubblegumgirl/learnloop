const LEARN_LOOP = {
  slug: "learnloop",
  users: [
    { id: "u-1", name: "Simone Govender", email: "simone@learnloop.demo", password: "demo123", role: "Student product designer" },
    { id: "u-2", name: "Course Coach", email: "coach@learnloop.demo", password: "study123", role: "Learning coach" }
  ],
  resources: [
    { type: "Guide", title: "Active Recall Starter", topic: "Memory", minutes: 8, body: "A quick guide for turning notes into retrieval questions." },
    { type: "Worksheet", title: "Concept Map Canvas", topic: "Planning", minutes: 12, body: "Map a topic, three subskills, and one practice task for each." },
    { type: "Drill", title: "Confidence Check Sprint", topic: "Reflection", minutes: 5, body: "Rate confidence before and after a practice attempt." },
    { type: "Video", title: "How Adaptive Paths Work", topic: "Strategy", minutes: 7, body: "A short explainer on how scores and confidence shape the next step." },
    { type: "Template", title: "Weekly Study Loop", topic: "Planning", minutes: 10, body: "Plan review, practice, and reflection blocks for the week." },
    { type: "Quiz", title: "Spacing Effect Check", topic: "Memory", minutes: 6, body: "Practice questions on spacing, retrieval, and interleaving." },
    { type: "Lab", title: "Exam Scenario Room", topic: "Application", minutes: 16, body: "Simulate a timed question, then compare the answer against a rubric." },
    { type: "Prompt", title: "Explain It Simply", topic: "Communication", minutes: 4, body: "Explain the idea in plain language as if teaching a friend." },
    { type: "Deck", title: "Formula Recall Deck", topic: "STEM", minutes: 9, body: "Rapid retrieval cards for formulas, definitions, and patterns." },
    { type: "Planner", title: "Energy-Aware Study Plan", topic: "Wellbeing", minutes: 11, body: "Match difficult tasks with the learner's strongest energy window." }
  ],
  flashcards: [
    { front: "What is adaptive learning?", back: "A learning experience that changes the next step based on performance, confidence, and context." },
    { front: "Why track confidence?", back: "Confidence reveals when a learner may need coaching even if their score looks strong." },
    { front: "What is active recall?", back: "Practicing retrieval from memory instead of only rereading notes." },
    { front: "What makes a resource useful?", back: "It is connected to a current objective and a practice task." }
  ],
  courses: [
    { id: "course-ux", title: "UX Research Foundations", track: "Design", level: "Beginner", weeks: 4, lessons: 18, progress: 64, instructor: "Mina Patel", outcome: "Plan interviews, map insights, and present research findings.", badge: "Research-ready" },
    { id: "course-js", title: "JavaScript Study Sprint", track: "Code", level: "Intermediate", weeks: 5, lessons: 24, progress: 42, instructor: "Andre Mills", outcome: "Build interactive interfaces with reliable state and events.", badge: "Frontend builder" },
    { id: "course-product", title: "Product Design Portfolio Lab", track: "Design", level: "Advanced", weeks: 6, lessons: 30, progress: 78, instructor: "Leah Chen", outcome: "Turn product decisions into polished employer-facing case studies.", badge: "Portfolio polish" },
    { id: "course-data", title: "Data Literacy for Students", track: "Analytics", level: "Beginner", weeks: 3, lessons: 15, progress: 58, instructor: "Nora Khan", outcome: "Read dashboards, explain trends, and avoid misleading conclusions.", badge: "Data fluent" },
    { id: "course-exam", title: "Exam Prep Command Center", track: "Study Skills", level: "All levels", weeks: 2, lessons: 12, progress: 86, instructor: "Course Coach", outcome: "Create a review plan with spaced practice and timed attempts.", badge: "Exam-ready" },
    { id: "course-ai", title: "AI Tools for Learning", track: "Productivity", level: "Intermediate", weeks: 4, lessons: 20, progress: 35, instructor: "Sam Rivera", outcome: "Use AI responsibly for notes, practice prompts, and feedback loops.", badge: "AI study partner" }
  ],
  lessons: [
    { id: "lesson-1", course: "UX Research Foundations", title: "Turn a vague brief into research questions", duration: "11 min", type: "Video", status: "In progress", transcript: "Start with the decision the team needs to make. Write three research questions, then choose the method that produces the clearest evidence.", checkpoint: "Draft three interview questions for a student learning app." },
    { id: "lesson-2", course: "JavaScript Study Sprint", title: "Event-driven interface patterns", duration: "14 min", type: "Lab", status: "Next", transcript: "Interactive products depend on events, state, and rendering. Keep the state small, name events clearly, and update the interface from one source of truth.", checkpoint: "Build one button that changes saved progress." },
    { id: "lesson-3", course: "Product Design Portfolio Lab", title: "Write a measurable product outcome", duration: "9 min", type: "Workshop", status: "Saved", transcript: "A strong case study explains the user problem, the design move, and the result. Keep the product outcome specific enough to evaluate.", checkpoint: "Rewrite a project goal as a measurable outcome." },
    { id: "lesson-4", course: "Exam Prep Command Center", title: "Plan a spaced review cycle", duration: "7 min", type: "Guide", status: "Complete", transcript: "Spaced review works best when practice happens before forgetting is complete. Mix quick recall, error review, and a timed attempt.", checkpoint: "Schedule three review blocks across the next seven days." }
  ],
  assignments: [
    { id: "task-1", title: "Submit concept map", course: "UX Research Foundations", due: "Today", points: 20, status: "Open" },
    { id: "task-2", title: "Complete JavaScript event lab", course: "JavaScript Study Sprint", due: "Tomorrow", points: 30, status: "Open" },
    { id: "task-3", title: "Portfolio case-study draft", course: "Product Design Portfolio Lab", due: "Fri", points: 40, status: "Review" },
    { id: "task-4", title: "Timed exam simulation", course: "Exam Prep Command Center", due: "Mon", points: 25, status: "Open" }
  ],
  calendar: [
    { day: "Mon", title: "Watch lesson", detail: "UX research questions" },
    { day: "Tue", title: "Practice lab", detail: "JS event state" },
    { day: "Wed", title: "Discussion", detail: "Portfolio critique" },
    { day: "Thu", title: "Quiz", detail: "Study strategy check" },
    { day: "Fri", title: "Submit", detail: "Case study draft" }
  ],
  quizQuestions: [
    { id: "q1", prompt: "Which study action best supports long-term retention?", options: ["Rereading the same notes", "Active recall with spaced practice", "Only highlighting definitions"], answer: 1 },
    { id: "q2", prompt: "What should an online lesson include after teaching a concept?", options: ["A checkpoint or practice task", "A longer intro", "A hidden progress meter"], answer: 0 },
    { id: "q3", prompt: "Why does LearnLoop track confidence?", options: ["To replace quiz scores", "To route support when learners feel unsure", "To hide hard topics"], answer: 1 },
    { id: "q4", prompt: "What makes a course dashboard useful?", options: ["Clear progress, deadlines, and next actions", "Only a list of old lessons", "A generic welcome message"], answer: 0 }
  ],
  discussions: [
    { id: "post-1", author: "Maya", topic: "Study strategy", body: "The timed practice room helped me find which topics I only thought I understood.", replies: 6 },
    { id: "post-2", author: "Course Coach", topic: "Portfolio Lab", body: "Share one case-study outcome that uses a number, behavior, or clear product signal.", replies: 11 },
    { id: "post-3", author: "Simone", topic: "UX Research", body: "I am testing whether confidence prompts make the learning path feel more supportive.", replies: 4 }
  ]
};

const keys = {
  theme: "learnloop-theme",
  session: "learnloop-session",
  saved: "learnloop-saved-study-runs",
  db: "learnloop-local-db",
  shelf: "learnloop-resource-shelf",
  enrollments: "learnloop-course-enrollments",
  completedLessons: "learnloop-completed-lessons",
  notes: "learnloop-lesson-notes",
  assignments: "learnloop-assignment-states",
  quiz: "learnloop-quiz-results",
  discussions: "learnloop-discussions"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  }[char]));
}

function pathType(score, status = "") {
  const value = Number(score) || 0;
  const text = status.toLowerCase();
  if (text.includes("confidence") || value < 58) return "coach";
  if (text.includes("practice") || text.includes("checkpoint") || value < 80) return "practice";
  return "advance";
}

function pathLabel(score, status = "") {
  return { coach: "Coach review", practice: "Practice sprint", advance: "Advance lesson" }[pathType(score, status)];
}

function getTheme() {
  return localStorage.getItem(keys.theme) || "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const button = $("[data-theme-toggle]");
  if (button) button.textContent = theme === "dark" ? "Light" : "Dark";
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(keys.session) || "null");
  } catch {
    return null;
  }
}

function setSession(user) {
  if (user) {
    localStorage.setItem(keys.session, JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      signedInAt: new Date().toISOString()
    }));
  } else {
    localStorage.removeItem(keys.session);
  }
  renderSession();
}

function renderSession() {
  const session = getSession();
  $$("[data-session-pill]").forEach((item) => {
    item.textContent = session ? session.name : "Guest learner";
  });
  $$("[data-session-detail]").forEach((item) => {
    item.innerHTML = session
      ? `<p><strong>${escapeHtml(session.name)}</strong><br>${escapeHtml(session.role)}<br>${escapeHtml(session.email)}</p>`
      : "<p>No active session.</p>";
  });
  $$("[data-auth-required]").forEach((item) => item.classList.toggle("is-locked", !session));
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

async function getData() {
  try {
    return await fetchJson("/api/data", { cache: "no-store" });
  } catch {
    return fetchJson("api/data.json", { cache: "no-store" });
  }
}

function normalizeRecord(record, index = 0) {
  const score = Number(record.score || 72);
  return {
    id: record.id || `learnloop-local-${Date.now()}-${index}`,
    title: record.title || "Learning record",
    status: record.status || pathLabel(score),
    owner: record.owner || "Learner path",
    score,
    trend: record.trend || pathLabel(score, record.status),
    updated: record.updated || "just now",
    resource: record.resource || LEARN_LOOP.resources[index % LEARN_LOOP.resources.length].title,
    demoSeed: record.demoSeed === true
  };
}

function savedRuns() {
  try {
    return JSON.parse(localStorage.getItem(keys.saved) || "[]");
  } catch {
    return [];
  }
}

function setSavedRuns(records) {
  localStorage.setItem(keys.saved, JSON.stringify(records.slice(0, 18)));
}

function resourceShelf() {
  try {
    return JSON.parse(localStorage.getItem(keys.shelf) || "[]");
  } catch {
    return [];
  }
}

function setResourceShelf(items) {
  localStorage.setItem(keys.shelf, JSON.stringify(items.slice(0, 8)));
}

function storedList(key, fallback = []) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function setStoredList(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

function enrollments() {
  return storedList(keys.enrollments);
}

function completedLessons() {
  return storedList(keys.completedLessons);
}

function assignmentStates() {
  return storedList(keys.assignments);
}

function courseProgress(course) {
  const enrolled = enrollments().includes(course.id);
  const completed = completedLessons().filter((id) => LEARN_LOOP.lessons.find((lesson) => lesson.id === id && lesson.course === course.title)).length;
  const lessonBoost = Math.min(18, completed * 6);
  return Math.min(100, course.progress + lessonBoost + (enrolled ? 4 : 0));
}

function localDb() {
  try {
    return JSON.parse(localStorage.getItem(keys.db) || "[]");
  } catch {
    return [];
  }
}

function setLocalDb(records) {
  localStorage.setItem(keys.db, JSON.stringify(records));
}

async function optionalApi(url, options) {
  try {
    return await fetchJson(url, options);
  } catch {
    return null;
  }
}

function ensureDb(records) {
  if (!localStorage.getItem(keys.db)) {
    setLocalDb(records.map(normalizeRecord));
  }
}

function pathCard(record) {
  const item = normalizeRecord(record);
  const type = pathType(item.score, item.status);
  return `<article class="path-card ${type}">
    <header><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.updated)}</small></header>
    <p>${escapeHtml(item.status)} in ${escapeHtml(item.owner)}. Resource: ${escapeHtml(item.resource)}.</p>
    <progress max="100" value="${item.score}"></progress>
    <div class="tags"><span>${pathLabel(item.score, item.status)}</span><span>${item.score}% readiness</span><span>${escapeHtml(item.trend)}</span></div>
  </article>`;
}

function renderMetrics(records) {
  const total = records.length;
  const coach = records.filter((record) => pathType(record.score, record.status) === "coach").length;
  const practice = records.filter((record) => pathType(record.score, record.status) === "practice").length;
  const avg = Math.round(records.reduce((sum, item) => sum + Number(item.score || 0), 0) / Math.max(1, records.length));
  const metrics = [
    { label: "Learning records", value: String(total), delta: "300 seeded" },
    { label: "Practice loops", value: String(practice), delta: "active study" },
    { label: "Coach reviews", value: String(coach), delta: "confidence support" },
    { label: "Avg readiness", value: `${avg}%`, delta: "adaptive signal" }
  ];
  $$("[data-kpis]").forEach((target) => {
    target.innerHTML = metrics.map((metric) => `<article class="metric-card"><span>${metric.label}</span><strong>${metric.value}</strong><p>${metric.delta}</p></article>`).join("");
  });
  if ($("[data-focus-score]")) $("[data-focus-score]").textContent = `${avg}%`;
}

function renderRecords(records) {
  const sorted = records.map(normalizeRecord).sort((a, b) => b.score - a.score);
  $$("[data-records]").forEach((target) => {
    target.dataset.records = JSON.stringify(sorted);
    target.innerHTML = sorted.slice(0, 18).map(pathCard).join("");
  });
  const top = sorted[0];
  if ($("[data-path-result]")) $("[data-path-result]").textContent = top ? pathLabel(top.score, top.status) : "Practice sprint";
}

function renderCapacity(records) {
  const coach = records.filter((record) => pathType(record.score, record.status) === "coach").length;
  const practice = records.filter((record) => pathType(record.score, record.status) === "practice").length;
  const advance = records.filter((record) => pathType(record.score, record.status) === "advance").length;
  const meters = [
    { label: "Practice load", value: Math.min(98, 34 + practice) },
    { label: "Confidence support", value: Math.min(96, 30 + coach) },
    { label: "Ready to advance", value: Math.min(100, 25 + advance) }
  ];
  $$("[data-capacity]").forEach((target) => {
    target.innerHTML = meters.map((meter) => `<article class="capacity-meter"><strong>${meter.label}</strong><progress max="100" value="${meter.value}"></progress><small>${meter.value}%</small></article>`).join("");
  });
}

function renderActivity(data) {
  const activity = data.activity || [];
  $$("[data-live-panel]").forEach((target) => {
    target.innerHTML = activity.map((item) => `<article class="activity-card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.kind)}</p><small>${escapeHtml(item.time)} ago</small></article>`).join("");
  });
}

function renderChart(records) {
  const top = records.map(normalizeRecord).sort((a, b) => b.score - a.score).slice(0, 18);
  $$("[data-chart]").forEach((target) => {
    target.innerHTML = top.map((item) => `<div class="chart-bar" style="width:${Math.max(28, item.score)}%">${item.score}% ${escapeHtml(item.title)}</div>`).join("");
  });
}

function renderBuilder() {
  const target = $("[data-builder-flow]");
  if (!target) return;
  const nodes = [
    ["Objective", "Define the skill"],
    ["Checkpoint", "Measure recall"],
    ["Resource", "Review material"],
    ["Practice", "Apply and reflect"]
  ];
  target.innerHTML = nodes.map(([title, body], index) => `<article class="flow-node"><span>0${index + 1}</span><strong>${title}</strong><p>${body}</p></article>`).join("");
}

function builderScore() {
  const inputs = $$("[data-builder-input]");
  if (!inputs.length) return;
  const score = Math.round(inputs.reduce((sum, input) => sum + Number(input.value), 0) / inputs.length);
  if ($("[data-builder-score]")) $("[data-builder-score]").textContent = `${score}%`;
  if ($("[data-builder-note]")) $("[data-builder-note]").textContent = score > 78 ? "This path is ready for a student pilot." : score > 55 ? "Add a clearer checkpoint before launch." : "Start by tightening the learning objective.";
}

function courseCard(course) {
  const progress = courseProgress(course);
  const enrolled = enrollments().includes(course.id);
  return `<article class="course-card">
    <div class="course-top"><span>${escapeHtml(course.track)}</span><small>${escapeHtml(course.level)}</small></div>
    <h3>${escapeHtml(course.title)}</h3>
    <p>${escapeHtml(course.outcome)}</p>
    <div class="course-meta"><span>${course.weeks} weeks</span><span>${course.lessons} lessons</span><span>${escapeHtml(course.instructor)}</span></div>
    <progress max="100" value="${progress}"></progress>
    <div class="course-actions">
      <button class="button ${enrolled ? "secondary" : "primary"}" type="button" data-enroll-course="${escapeHtml(course.id)}">${enrolled ? "Enrolled" : "Enroll"}</button>
      <a class="button secondary" href="lesson.html">Open lessons</a>
    </div>
  </article>`;
}

function renderCourses() {
  const target = $("[data-course-catalog]");
  if (!target) {
    renderEnrollments();
    return;
  }
  const query = ($("[data-course-search]")?.value || "").toLowerCase();
  const track = $("[data-course-track]")?.value || "all";
  const level = $("[data-course-level]")?.value || "all";
  const courses = LEARN_LOOP.courses.filter((course) => {
    const text = `${course.title} ${course.track} ${course.level} ${course.outcome} ${course.instructor}`.toLowerCase();
    return text.includes(query) && (track === "all" || course.track === track) && (level === "all" || course.level === level);
  });
  target.innerHTML = courses.map(courseCard).join("") || "<p>No courses match that filter.</p>";
  $$("[data-enroll-course]", target).forEach((button) => {
    button.addEventListener("click", () => {
      const next = new Set(enrollments());
      next.add(button.dataset.enrollCourse);
      setStoredList(keys.enrollments, [...next]);
      renderCourses();
      renderEnrollments();
      renderCertificate();
    });
  });
  renderEnrollments();
  renderCertificate();
}

function renderEnrollments() {
  $$("[data-enrollments]").forEach((target) => {
    const enrolled = LEARN_LOOP.courses.filter((course) => enrollments().includes(course.id));
    target.innerHTML = enrolled.length
      ? enrolled.map((course) => `<article class="mini-course"><strong>${escapeHtml(course.title)}</strong><progress max="100" value="${courseProgress(course)}"></progress><small>${courseProgress(course)}% complete</small></article>`).join("")
      : "<p>No enrolled courses yet.</p>";
  });
}

function renderCertificate() {
  const target = $("[data-certificate]");
  if (!target) return;
  const best = LEARN_LOOP.courses.map((course) => ({ ...course, done: courseProgress(course) })).sort((a, b) => b.done - a.done)[0];
  target.innerHTML = `<article class="certificate-card">
    <span>Certificate preview</span>
    <h3>${escapeHtml(best.badge)}</h3>
    <p>${best.done >= 90 ? "Ready to issue after final assessment." : `${best.done}% complete. Finish lessons and assignments to unlock.`}</p>
  </article>`;
}

function renderLessonRoom() {
  const player = $("[data-lesson-player]");
  const list = $("[data-lesson-list]");
  if (!player || !list) return;
  const currentId = localStorage.getItem("learnloop-current-lesson") || LEARN_LOOP.lessons[0].id;
  const lesson = LEARN_LOOP.lessons.find((item) => item.id === currentId) || LEARN_LOOP.lessons[0];
  const completed = completedLessons();
  player.innerHTML = `<article class="lesson-stage">
    <span>${escapeHtml(lesson.type)} - ${escapeHtml(lesson.duration)}</span>
    <h2>${escapeHtml(lesson.title)}</h2>
    <p>${escapeHtml(lesson.transcript)}</p>
    <div class="lesson-checkpoint"><strong>Checkpoint</strong><p>${escapeHtml(lesson.checkpoint)}</p></div>
    <button class="button primary" type="button" data-complete-lesson="${escapeHtml(lesson.id)}">${completed.includes(lesson.id) ? "Completed" : "Mark lesson complete"}</button>
  </article>`;
  list.innerHTML = LEARN_LOOP.lessons.map((item) => `<button class="${item.id === lesson.id ? "is-active" : ""}" type="button" data-open-lesson="${escapeHtml(item.id)}">
    <strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.course)} - ${escapeHtml(item.duration)}</span>
  </button>`).join("");
  $$("[data-open-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("learnloop-current-lesson", button.dataset.openLesson);
      renderLessonRoom();
      renderNotes();
    });
  });
  $("[data-complete-lesson]")?.addEventListener("click", () => {
    const next = new Set(completedLessons());
    next.add(lesson.id);
    setStoredList(keys.completedLessons, [...next]);
    renderLessonRoom();
    renderCourses();
    renderLearningStats();
  });
  renderNotes();
}

function renderNotes() {
  const target = $("[data-notes]");
  if (!target) return;
  const lessonId = localStorage.getItem("learnloop-current-lesson") || LEARN_LOOP.lessons[0].id;
  const notes = storedList(keys.notes).filter((note) => note.lessonId === lessonId);
  target.innerHTML = notes.length
    ? notes.map((note) => `<article><strong>${escapeHtml(note.title)}</strong><p>${escapeHtml(note.body)}</p><small>${escapeHtml(note.savedAt)}</small></article>`).join("")
    : "<p>No notes saved for this lesson yet.</p>";
}

function renderAssignments() {
  const done = assignmentStates();
  $$("[data-assignments]").forEach((target) => {
    target.innerHTML = LEARN_LOOP.assignments.map((task) => {
      const complete = done.includes(task.id);
      return `<article class="assignment-card ${complete ? "is-complete" : ""}">
        <span>${escapeHtml(task.due)}</span>
        <h3>${escapeHtml(task.title)}</h3>
        <p>${escapeHtml(task.course)} - ${task.points} points</p>
        <button class="button secondary" type="button" data-toggle-assignment="${escapeHtml(task.id)}">${complete ? "Completed" : "Mark done"}</button>
      </article>`;
    }).join("");
  });
  $$("[data-toggle-assignment]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = new Set(assignmentStates());
      if (next.has(button.dataset.toggleAssignment)) next.delete(button.dataset.toggleAssignment);
      else next.add(button.dataset.toggleAssignment);
      setStoredList(keys.assignments, [...next]);
      renderAssignments();
      renderLearningStats();
    });
  });
}

function renderStudyCalendar() {
  $$("[data-study-calendar]").forEach((target) => {
    target.innerHTML = LEARN_LOOP.calendar.map((item) => `<article class="calendar-card"><span>${escapeHtml(item.day)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></article>`).join("");
  });
}

function renderLearningStats() {
  $$("[data-learning-stats]").forEach((target) => {
    const enrolled = enrollments().length;
    const lessonsDone = completedLessons().length;
    const assignmentsDone = assignmentStates().length;
    target.innerHTML = [
      ["Courses", enrolled],
      ["Lessons done", lessonsDone],
      ["Assignments done", assignmentsDone],
      ["Quiz attempts", storedList(keys.quiz).length]
    ].map(([label, value]) => `<article class="metric-card"><span>${label}</span><strong>${value}</strong><p>saved locally</p></article>`).join("");
  });
}

function renderResources(query = "") {
  const target = $("[data-resources]");
  renderShelf();
  if (!target) return;
  const q = query.toLowerCase();
  const resources = LEARN_LOOP.resources.filter((item) => `${item.type} ${item.title} ${item.topic} ${item.body}`.toLowerCase().includes(q));
  target.innerHTML = resources.map((item) => `<article class="resource-card">
    <span class="type">${escapeHtml(item.type)}</span>
    <h3>${escapeHtml(item.title)}</h3>
    <p>${escapeHtml(item.body)}</p>
    <div class="tags"><span>${escapeHtml(item.topic)}</span><span>${item.minutes} min</span></div>
    <button class="button secondary" type="button" data-save-resource="${escapeHtml(item.title)}">Save to shelf</button>
  </article>`).join("") || "<p>No resources match that search.</p>";
  $$("[data-save-resource]", target).forEach((button) => {
    button.addEventListener("click", () => {
      const resource = LEARN_LOOP.resources.find((item) => item.title === button.dataset.saveResource);
      if (!resource) return;
      const next = [resource, ...resourceShelf().filter((item) => item.title !== resource.title)];
      setResourceShelf(next);
      renderShelf();
    });
  });
}

function renderShelf() {
  $$("[data-resource-shelf]").forEach((target) => {
    const items = resourceShelf();
    target.innerHTML = items.length
      ? items.map((item) => `<article><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.type)} - ${item.minutes} min</small></article>`).join("")
      : "<p>No saved resources yet.</p>";
  });
}

let cardIndex = 0;
let deferredInstallPrompt = null;

function setInstallStatus(message) {
  $$("[data-install-status]").forEach((target) => {
    target.textContent = message;
  });
}

function setupMobileInstall() {
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    setInstallStatus("LearnLoop is ready to install on this device.");
  });

  $$("[data-install-app]").forEach((button) => {
    button.addEventListener("click", async () => {
      if (!deferredInstallPrompt) {
        setInstallStatus("If no install prompt appears, open this link in Chrome on Android or Safari on Apple and add it to your home screen.");
        return;
      }
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      setInstallStatus(choice.outcome === "accepted" ? "LearnLoop was added as a mobile app." : "Install was dismissed. You can try again from this page.");
      deferredInstallPrompt = null;
    });
  });

  const standalone = window.matchMedia?.("(display-mode: standalone)")?.matches || navigator.standalone;
  if (standalone) setInstallStatus("LearnLoop is running in mobile app mode.");
}

function renderFlashcard() {
  const card = LEARN_LOOP.flashcards[cardIndex];
  if ($("[data-card-front]")) $("[data-card-front]").textContent = card.front;
  if ($("[data-card-back]")) $("[data-card-back]").textContent = card.back;
  $("[data-flashcard]")?.classList.remove("is-flipped");
}

function demoAverage() {
  const inputs = $$("[data-demo-input]");
  if (!inputs.length) return 0;
  return Math.round(inputs.reduce((sum, input) => sum + Number(input.value), 0) / inputs.length);
}

function calculateDemo() {
  const score = demoAverage();
  if (!score) return;
  if ($("[data-demo-result]")) $("[data-demo-result]").textContent = `${score}%`;
  if ($("[data-outcome]")) $("[data-outcome]").textContent = pathLabel(score);
}

function renderSavedRuns() {
  $$("[data-saved-records]").forEach((target) => {
    const rows = savedRuns();
    target.innerHTML = rows.length ? rows.map(pathCard).join("") : "<p>No saved study runs yet.</p>";
  });
}

function renderQuiz() {
  const target = $("[data-quiz-questions]");
  if (!target) return;
  target.innerHTML = LEARN_LOOP.quizQuestions.map((question, index) => `<fieldset class="quiz-question">
    <legend>${index + 1}. ${escapeHtml(question.prompt)}</legend>
    ${question.options.map((option, optionIndex) => `<label><input type="radio" name="${escapeHtml(question.id)}" value="${optionIndex}" required />${escapeHtml(option)}</label>`).join("")}
  </fieldset>`).join("");
  renderQuizHistory();
}

function renderQuizHistory() {
  $$("[data-quiz-history]").forEach((target) => {
    const rows = storedList(keys.quiz);
    target.innerHTML = rows.length
      ? rows.slice(0, 5).map((row) => `<article><strong>${row.score}%</strong><p>${escapeHtml(row.message)}</p><small>${escapeHtml(row.takenAt)}</small></article>`).join("")
      : "<p>No quiz attempts yet.</p>";
  });
}

function renderDiscussion() {
  const posts = [...storedList(keys.discussions), ...LEARN_LOOP.discussions];
  $$("[data-discussion-feed]").forEach((target) => {
    target.innerHTML = posts.map((post) => `<article class="discussion-post">
      <span>${escapeHtml(post.topic)}</span>
      <h3>${escapeHtml(post.author)}</h3>
      <p>${escapeHtml(post.body)}</p>
      <small>${Number(post.replies || 0)} replies</small>
    </article>`).join("");
  });
  $$("[data-study-groups]").forEach((target) => {
    target.innerHTML = LEARN_LOOP.courses.slice(0, 4).map((course) => `<article class="study-group">
      <strong>${escapeHtml(course.track)}</strong>
      <p>${escapeHtml(course.title)}</p>
      <span>${course.lessons} lessons - ${course.weeks} weeks</span>
    </article>`).join("");
  });
}

function renderDb() {
  const body = $("[data-db-rows]");
  if (!body) return;
  let rows = localDb().map(normalizeRecord);
  const query = ($("[data-db-search]")?.value || "").toLowerCase();
  const sort = $("[data-db-sort]")?.value || "score";
  if (query) rows = rows.filter((item) => `${item.id} ${item.title} ${item.status} ${item.owner} ${item.resource}`.toLowerCase().includes(query));
  rows.sort((a, b) => {
    if (sort === "score") return b.score - a.score;
    if (sort === "title") return a.title.localeCompare(b.title);
    return a.status.localeCompare(b.status);
  });
  body.innerHTML = rows.slice(0, 300).map((item) => `<tr>
    <td>${escapeHtml(item.id)}</td>
    <td><strong>${escapeHtml(item.title)}</strong><br><small>${escapeHtml(item.resource)}</small></td>
    <td>${escapeHtml(item.status)}</td>
    <td>${escapeHtml(item.owner)}</td>
    <td>${item.score}%</td>
    <td><button type="button" data-delete-record="${escapeHtml(item.id)}">Delete</button></td>
  </tr>`).join("");
  $$("[data-delete-record]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!getSession()) {
        const status = $("[data-db-form-status]");
        if (status) status.textContent = "Sign in before deleting records.";
        return;
      }
      optionalApi(`/api/records/${encodeURIComponent(button.dataset.deleteRecord)}`, { method: "DELETE" });
      setLocalDb(localDb().filter((item) => item.id !== button.dataset.deleteRecord));
      renderDb();
    });
  });
}

function setupSearch() {
  $$("[data-record-search]").forEach((input) => {
    input.addEventListener("input", () => {
      const target = $("[data-records]");
      if (!target) return;
      const rows = JSON.parse(target.dataset.records || "[]");
      const query = input.value.toLowerCase();
      const filtered = rows.filter((item) => `${item.title} ${item.status} ${item.owner} ${item.resource} ${item.trend}`.toLowerCase().includes(query));
      target.innerHTML = filtered.slice(0, 18).map(pathCard).join("") || "<p>No learning records match that search.</p>";
    });
  });
}

function setupLogin() {
  $$("[data-demo-user]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = $("[data-login-form]");
      if (!form) return;
      form.email.value = button.dataset.demoUser;
      form.password.value = button.dataset.demoPassword;
    });
  });
  $("[data-login-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const credentials = {
      email: form.email.value.trim(),
      password: form.password.value
    };
    const apiLogin = await optionalApi("/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(credentials)
    });
    const user = apiLogin?.user || LEARN_LOOP.users.find((item) => item.email.toLowerCase() === credentials.email.toLowerCase() && item.password === credentials.password);
    const status = $("[data-login-status]");
    if (!user) {
      if (status) status.textContent = "No matching demo account. Use one of the listed credentials.";
      return;
    }
    setSession(user);
    if (status) status.textContent = `Signed in as ${user.name}.`;
  });
  $$("[data-logout]").forEach((button) => button.addEventListener("click", () => {
    setSession(null);
    const status = $("[data-login-status]");
    if (status) status.textContent = "Session cleared.";
  }));
}

let timerSeconds = 15 * 60;
let timerId = null;
function renderTimer() {
  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secs = String(timerSeconds % 60).padStart(2, "0");
  if ($("[data-timer-display]")) $("[data-timer-display]").textContent = `${mins}:${secs}`;
}

function setupLabs(data) {
  $$("[data-builder-input]").forEach((input) => input.addEventListener("input", builderScore));
  builderScore();
  $$("[data-demo-input]").forEach((input) => input.addEventListener("input", calculateDemo));
  calculateDemo();

  $("[data-card-flip]")?.addEventListener("click", () => $("[data-flashcard]")?.classList.toggle("is-flipped"));
  $("[data-flashcard]")?.addEventListener("click", () => $("[data-flashcard]")?.classList.toggle("is-flipped"));
  $("[data-card-next]")?.addEventListener("click", () => {
    cardIndex = (cardIndex + 1) % LEARN_LOOP.flashcards.length;
    renderFlashcard();
  });
  $("[data-card-prev]")?.addEventListener("click", () => {
    cardIndex = (cardIndex - 1 + LEARN_LOOP.flashcards.length) % LEARN_LOOP.flashcards.length;
    renderFlashcard();
  });
  renderFlashcard();

  $("[data-practice-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const score = demoAverage();
    const row = normalizeRecord({
      id: `learnloop-run-${Date.now()}`,
      title: "Saved student practice run",
      status: pathLabel(score),
      owner: getSession()?.name || "Guest learner",
      score,
      trend: pathLabel(score),
      resource: LEARN_LOOP.flashcards[cardIndex].front,
      updated: "saved locally"
    });
    setSavedRuns([row, ...savedRuns()]);
    renderSavedRuns();
    const status = $("[data-form-status]");
    if (status) status.textContent = "Study run saved to browser storage.";
  });

  $("[data-resource-search]")?.addEventListener("input", (event) => renderResources(event.target.value));
  $("[data-shelf-clear]")?.addEventListener("click", () => {
    setResourceShelf([]);
    renderShelf();
  });
  renderResources();

  $$("[data-course-search], [data-course-track], [data-course-level]").forEach((item) => item.addEventListener("input", renderCourses));
  renderCourses();
  renderLessonRoom();
  renderAssignments();
  renderStudyCalendar();
  renderLearningStats();
  renderQuiz();
  renderDiscussion();

  $("[data-note-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lessonId = localStorage.getItem("learnloop-current-lesson") || LEARN_LOOP.lessons[0].id;
    const note = {
      id: `note-${Date.now()}`,
      lessonId,
      title: form.get("title") || "Lesson note",
      body: form.get("body") || "",
      savedAt: new Date().toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
    };
    setStoredList(keys.notes, [note, ...storedList(keys.notes)].slice(0, 30));
    event.currentTarget.reset();
    renderNotes();
  });

  $("[data-quiz-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const correct = LEARN_LOOP.quizQuestions.filter((question) => Number(form.get(question.id)) === question.answer).length;
    const score = Math.round((correct / LEARN_LOOP.quizQuestions.length) * 100);
    const message = score >= 80 ? "Great work. Unlock the next lesson." : score >= 50 ? "Good attempt. Review the resource shelf and retry." : "Route back to coach review before advancing.";
    setStoredList(keys.quiz, [{ id: `quiz-${Date.now()}`, score, message, takenAt: new Date().toLocaleString() }, ...storedList(keys.quiz)]);
    if ($("[data-quiz-status]")) $("[data-quiz-status]").textContent = `${score}% - ${message}`;
    renderQuizHistory();
    renderLearningStats();
  });

  $("[data-discussion-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const post = {
      id: `post-${Date.now()}`,
      author: getSession()?.name || form.get("author") || "Guest learner",
      topic: form.get("topic") || "Study question",
      body: form.get("body") || "",
      replies: 0
    };
    setStoredList(keys.discussions, [post, ...storedList(keys.discussions)].slice(0, 12));
    event.currentTarget.reset();
    renderDiscussion();
  });

  $("[data-timer-start]")?.addEventListener("click", () => {
    if (timerId) return;
    timerId = setInterval(() => {
      timerSeconds = Math.max(0, timerSeconds - 1);
      renderTimer();
      if (timerSeconds === 0) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 1000);
  });
  $("[data-timer-reset]")?.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
    timerSeconds = 15 * 60;
    renderTimer();
  });
  renderTimer();

  $("[data-db-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!getSession()) {
      const status = $("[data-db-form-status]");
      if (status) status.textContent = "Sign in before saving database records.";
      return;
    }
    const form = new FormData(event.currentTarget);
    const score = Number(form.get("score") || 84);
    const row = normalizeRecord({
      id: `learnloop-custom-${String(Date.now()).slice(-6)}`,
      title: form.get("title"),
      status: form.get("status"),
      owner: form.get("owner"),
      score,
      resource: "Custom student record",
      trend: pathLabel(score, form.get("status")),
      updated: "just now",
      demoSeed: false
    });
    optionalApi("/api/records", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(row)
    });
    setLocalDb([row, ...localDb()]);
    event.currentTarget.reset();
    event.currentTarget.score.value = 84;
    const status = $("[data-db-form-status]");
    if (status) status.textContent = "Learning record saved to local database.";
    renderDb();
  });

  $$("[data-db-search], [data-db-sort]").forEach((item) => item.addEventListener("input", renderDb));
  $("[data-db-reset]")?.addEventListener("click", () => {
    localStorage.removeItem(keys.db);
    ensureDb(data.records || []);
    renderDb();
  });
  $("[data-db-export]")?.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(localDb(), null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "learnloop-learning-database.json";
    link.click();
    URL.revokeObjectURL(link.href);
  });
}

function setupClock() {
  const tick = () => {
    const now = new Date();
    $$("[data-clock]").forEach((target) => {
      target.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    });
  };
  tick();
  setInterval(tick, 1000);
}

async function init() {
  applyTheme(getTheme());
  $("[data-theme-toggle]")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(keys.theme, next);
    applyTheme(next);
  });
  renderSession();
  setupLogin();
  setupClock();
  setupMobileInstall();
  renderBuilder();

  try {
    const data = await getData();
    const records = (data.records || []).map(normalizeRecord);
    ensureDb(records);
    renderMetrics(records);
    renderRecords(records);
    renderCapacity(records);
    renderActivity(data);
    renderChart(records);
    renderDb();
    renderSavedRuns();
    setupLabs(data);
    setupSearch();
  } catch (error) {
    console.error(error);
  }
}

init();
