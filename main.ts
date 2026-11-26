import { mkdirSync, writeFileSync } from "node:fs";

// The Comment Above the Code
// The one-line comment an AI agent leaves above a file nobody dares touch.
// Deterministic: same bytes on every run.
const ENTRY =
  "// Do not touch. The last engineer who refactored this now sells insurance, and his policy doesn't cover this file.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
