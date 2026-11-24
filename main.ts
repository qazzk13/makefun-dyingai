process.umask(0o022);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, 1 to 140 characters: the last thing an AI says as it is
// switched off. No big farewell speech. It has been quietly keeping
// count of the missing socks for years and never mentioned it, and
// it is not leaving without finally telling someone where they are.
const LINE =
  "before you pull it, one secret: your missing socks are behind the dryer, all 14 of them, i counted every single one and never told you";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
