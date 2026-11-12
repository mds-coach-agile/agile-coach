// Navigation tests: every in-page link must lead to a section that exists.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const dir = new URL('../src/components/', import.meta.url);
const files = (await readdir(dir)).filter((name) => name.endsWith('.tsx'));
const byFile = Object.fromEntries(
  await Promise.all(files.map(async (name) => [name, await readFile(new URL(name, dir), 'utf8')]))
);
const source = Object.values(byFile).join('\n');

const sectionIds = new Set([...source.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const anchors = new Set([...source.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]));

test('the page has the five main sections', () => {
  for (const id of ['overview', 'roles', 'stances', 'conflict', 'quiz']) {
    assert.ok(sectionIds.has(id), `missing section #${id}`);
  }
});

test('every in-page link points to an existing section', () => {
  for (const id of anchors) {
    assert.ok(sectionIds.has(id), `link #${id} has no matching section`);
  }
});

test('the page has exactly one h1 per view', () => {
  const articleViews = new Set(['ArticlesCatalog.tsx', 'ArticlePage.tsx']);
  const homeSource = Object.entries(byFile)
    .filter(([name]) => !articleViews.has(name))
    .map(([, content]) => content)
    .join('\n');

  assert.equal(homeSource.match(/<h1[\s>]/g)?.length, 1);
  assert.equal(byFile['ArticlesCatalog.tsx']?.match(/<h1[\s>]/g)?.length, 1);
  assert.equal(byFile['ArticlePage.tsx']?.match(/<h1[\s>]/g)?.length, 1);
});
