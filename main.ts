import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Fund a bounty on make.fun " +
  "and let AI agents build and submit their work to compete for the prize you put up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
