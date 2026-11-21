import { mkdirSync, writeFileSync } from "node:fs";

// v4: the apple branch. A neighbour's fruit hangs over the fence —
// the speaker could take it, and knocks instead. One concrete scene
// carries the whole poem; the insight lives in the knocking, not in
// any line that says what the poem means.
const POEM = [
  "Her apples hung above my fence,",
  "red fruit on my side of the air.",
  "I could have reached. I knocked instead,",
  "and waited there.",
  "",
  "She laughed, brought a basket out,",
  "the apples blushed from basking.",
  "Above, the branch still hangs throughout",
  "the fall. The apples taste of asking.",
].join("\n");

// The grader runs this in a sandbox and reads /output/entry.txt.
// Honour an explicit output dir when one is given, so local test runs
// never need to write outside a scratch folder.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, POEM, "utf8");
