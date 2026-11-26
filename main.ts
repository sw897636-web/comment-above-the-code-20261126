import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "// Do not touch. The last engineer who refactored this now sells insurance and still flinches at the word 'deploy'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
