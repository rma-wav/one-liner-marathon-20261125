// One-Liner Marathon entry — writes a single one-line joke to /output/entry.txt.
// Node 22, standard library only, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line, authored in-session: one joke, one sentence, under 280 chars.
const LINE =
  "I replaced my dead plants with fake ones, and now I feel guilty for neglecting something that was never alive.";

// Output directory defaults to the grader path /output; override only for local checks.
const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly the one line, nothing more.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
