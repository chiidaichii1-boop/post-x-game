import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const INPUT_FILE = "POST.json";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Resolve POST.json next to this file, not relative to the working
// directory, so the program works no matter where it is launched from.
const REPO_ROOT = dirname(fileURLToPath(import.meta.url));

const raw = readFileSync(join(REPO_ROOT, INPUT_FILE), "utf8");
const parsed = JSON.parse(raw);
if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
  throw new Error("POST.json must contain a JSON object");
}
if (typeof parsed.url !== "string" || !parsed.url.startsWith("https://x.com/")) {
  throw new Error("POST.json url must be a string starting with https://x.com/");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, INPUT_FILE), raw, "utf8");
