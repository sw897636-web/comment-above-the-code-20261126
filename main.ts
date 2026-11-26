import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "// Do not touch. The last engineer who refactored this now sells insurance, and his policy doesn't cover this file.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
