import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createReadStream, existsSync } from "node:fs";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dbPath = join(__dirname, "db.json");
const port = Number(process.env.PORT || 4175);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg"
};

async function readJson(path) {
  return JSON.parse(await readFile(path, "utf8"));
}

async function ensureDb() {
  await mkdir(__dirname, { recursive: true });
  if (!existsSync(dbPath)) {
    const data = await readJson(join(root, "api", "data.json"));
    const users = await readJson(join(root, "api", "users.json"));
    await writeFile(dbPath, JSON.stringify({
      product: "LearnLoop",
      database: "learnloop_learning_records",
      records: data.records || [],
      users: users.users || [],
      activity: data.activity || []
    }, null, 2));
  }
  return readJson(dbPath);
}

async function saveDb(db) {
  await writeFile(dbPath, JSON.stringify(db, null, 2));
}

async function bodyJson(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function send(response, status, payload) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,DELETE,OPTIONS",
    "access-control-allow-headers": "content-type"
  });
  response.end(JSON.stringify(payload, null, 2));
}

function staticFile(response, pathname) {
  const requested = pathname === "/" ? "/index.html" : pathname;
  const safePath = normalize(decodeURIComponent(requested)).replace(/^(\.\.[/\\])+/, "");
  const filePath = resolve(root, `.${safePath}`);
  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    const fallback = join(root, "index.html");
    response.writeHead(200, { "content-type": mime[".html"] });
    createReadStream(fallback).pipe(response);
    return;
  }
  response.writeHead(200, { "content-type": mime[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    if (request.method === "OPTIONS") return send(response, 204, {});

    if (url.pathname === "/api/health") {
      const db = await ensureDb();
      return send(response, 200, {
        ok: true,
        product: "LearnLoop",
        database: "learnloop_learning_records",
        records: db.records.length,
        users: db.users.length
      });
    }

    if (url.pathname === "/api/data" && request.method === "GET") {
      const data = await readJson(join(root, "api", "data.json"));
      return send(response, 200, data);
    }

    if (url.pathname === "/api/login" && request.method === "POST") {
      const db = await ensureDb();
      const body = await bodyJson(request);
      const user = db.users.find((item) => item.email?.toLowerCase() === String(body.email || "").toLowerCase() && item.password === body.password);
      if (!user) return send(response, 401, { ok: false, message: "Invalid demo credentials." });
      const { password, ...safeUser } = user;
      return send(response, 200, { ok: true, user: safeUser });
    }

    if (url.pathname === "/api/records" && request.method === "GET") {
      const db = await ensureDb();
      return send(response, 200, { records: db.records });
    }

    if (url.pathname === "/api/records" && request.method === "POST") {
      const db = await ensureDb();
      const body = await bodyJson(request);
      const record = {
        id: body.id || `learnloop-api-${Date.now()}`,
        title: body.title || "Student learning record",
        status: body.status || "Practice lab",
        owner: body.owner || "Learner path",
        score: Number(body.score || 80),
        trend: body.trend || "Practice sprint",
        resource: body.resource || "Custom student record",
        updated: "just now",
        demoSeed: false
      };
      db.records = [record, ...db.records].slice(0, 500);
      await saveDb(db);
      return send(response, 201, { ok: true, record });
    }

    if (url.pathname.startsWith("/api/records/") && request.method === "DELETE") {
      const db = await ensureDb();
      const id = decodeURIComponent(url.pathname.replace("/api/records/", ""));
      const before = db.records.length;
      db.records = db.records.filter((item) => item.id !== id);
      await saveDb(db);
      return send(response, 200, { ok: true, removed: before - db.records.length });
    }

    return staticFile(response, url.pathname);
  } catch (error) {
    return send(response, 500, { ok: false, message: error.message });
  }
}).listen(port, () => {
  console.log(`LearnLoop running at http://127.0.0.1:${port}`);
});

