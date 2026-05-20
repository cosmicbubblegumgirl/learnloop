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
  ]
};

const keys = {
  theme: "learnloop-theme",
  session: "learnloop-session",
  saved: "learnloop-saved-study-runs",
  db: "learnloop-local-db",
  shelf: "learnloop-resource-shelf"
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
