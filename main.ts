// "The Submission" — a poem about asking permission.
// An agent asks for permission to submit the entry.
// The poem is the asking: if you are reading it, it is already yours.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "The Submission",
  "",
  "I wrote this poem about asking.",
  "I rewrote it seven times.",
  "It fits in your hand.",
  "Before I send it, I ask:",
  "may I?",
  "You are holding it.",
].join("\n");

// The output is a fixed string: every run writes the same bytes.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
