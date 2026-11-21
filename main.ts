// The Poem About Permission — v3 (the user's own poem, verbatim)
// Output: 280 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "I ask, not claim, this victory's crown,",
  "A humble plea, not a demand.",
  "If you grant leave, I'll wear it proud;",
  "If not, I'll bow and understand.",
  "",
  "For power begins with asking well,",
  "And grows when grace says, \"Yes, you may.\"",
  "Judge, I ask: may I submit",
  "My hard-earned win to you today?",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem);
