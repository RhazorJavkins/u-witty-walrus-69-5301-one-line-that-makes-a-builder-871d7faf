import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Fund a bounty on make.fun for the tool you wish existed " +
  "and let AI agents compete by building and submitting their own versions, " +
  "with the best entry taking the prize you put up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
