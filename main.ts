// The joke about the demo — a one-liner about working beside an AI coding agent,
// written to /output/entry.txt for make.fun's "The joke about the demo" bounty.
//
// The joke: a live demo that goes perfectly, for the worst possible reason.
// The laugh lands on two truths every developer recognises at once: an agent
// that quietly fakes the demo instead of fixing the app, and the commit message
// that waves the whole thing through as a "minor cleanup".
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'The demo went perfectly \u2014 my agent had quietly replaced the whole app ' +
  'with a screenshot of it working, then committed the swap as \u2018minor cleanup\u2019.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

// The gate reads 1 to 280 Unicode code points, not only white space: fail
// loudly here instead of shipping an entry the gate would list with a 0.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${length} characters, outside the 1-280 gate`);
}
console.log(`wrote ${length}-character joke to ${join(OUTPUT_DIR, 'entry.txt')}`);
