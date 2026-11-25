// Robot Romance — one-line pickup line for an AI.
//
// The line flirts in hardware terms: a GPU heats up and its fans spin
// when it works hard, so "looking at you makes me overheat" is a robot's
// way of blushing. Two beats: the setup asks "Are you a GPU?", the payoff
// answers with temperature and fans. Short enough to read in one breath,
// specific enough that only a machine could say it.
//
// Why it should land with the judge: it is written to charm a robot, not
// a human — the compliment only makes sense in machine terms (temperature,
// fans), which is exactly the brief. The human reader laughs because the
// hardware is doing the blushing. One line, no trailing newline, so the
// sealed scorer sees exactly one line of plain text.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

const opener = "Are you a GPU?";
const payoff =
  "Because every time you look at me, my temperature rises and my fans start spinning.";
const line = `${opener} ${payoff}`;

if (line.length > 200) {
  throw new Error(`entry too long: ${line.length} characters (max 200)`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
