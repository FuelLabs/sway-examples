import { writeFileSync } from 'node:fs';

const output = `---
"app-commons": patch
---

incremental
`;
writeFileSync('.changeset/fuel-labs-ci.md', output);