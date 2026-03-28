import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const workspaceRoot = fileURLToPath(new URL('..', import.meta.url));
const storiesDir = join(workspaceRoot, 'apps', 'web', 'src', 'components', 'ui');

const metaNeedsArgsPattern = /const\s+meta\s*=\s*\{[\s\S]*?\bargs\s*:/m;
const metaNeedsArgTypesPattern = /const\s+meta\s*=\s*\{[\s\S]*?\bargTypes\s*:/m;
const needsPlaygroundPattern = /export\s+const\s+Playground\s*:/m;

async function listStoryFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        return listStoryFiles(fullPath);
      }

      if (!entry.isFile() || !entry.name.endsWith('.stories.tsx')) {
        return [];
      }

      return [fullPath];
    }),
  );

  return files.flat();
}

function validateStoryFile(content) {
  const errors = [];

  if (!metaNeedsArgsPattern.test(content)) {
    errors.push("missing `args` in `meta`");
  }

  if (!metaNeedsArgTypesPattern.test(content)) {
    errors.push("missing `argTypes` in `meta`");
  }

  if (!needsPlaygroundPattern.test(content)) {
    errors.push('missing `Playground` story export');
  }

  return errors;
}

async function main() {
  const storyFiles = await listStoryFiles(storiesDir);
  const failures = [];

  for (const file of storyFiles) {
    const content = await readFile(file, 'utf8');

    if (content.includes('controls-check: ignore')) {
      continue;
    }

    const errors = validateStoryFile(content);
    if (errors.length > 0) {
      failures.push({ file, errors });
    }
  }

  if (failures.length === 0) {
    console.log(`Storybook controls check passed (${storyFiles.length} story files).`);
    return;
  }

  console.error('Storybook controls convention failed:\n');
  for (const failure of failures) {
    const displayPath = relative(workspaceRoot, failure.file);
    console.error(`- ${displayPath}`);
    for (const error of failure.errors) {
      console.error(`  - ${error}`);
    }
  }
  console.error(
    '\nAdd `args`, `argTypes`, and `export const Playground` to each UI story, or add `controls-check: ignore` for intentional exceptions.',
  );
  process.exitCode = 1;
}

main().catch((error) => {
  console.error('Failed to run Storybook controls check.');
  console.error(error);
  process.exitCode = 1;
});
