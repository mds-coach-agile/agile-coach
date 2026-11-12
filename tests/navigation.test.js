// Navigation tests: every in-page link must lead to a section that exists.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';

const dir = new URL('../src/components/', import.meta.url);
const files = (await readdir(dir)).filter((name) => name.endsWith('.tsx'));
const source = (await Promise.all(files.map((name) => readFile(new URL(name, dir), 'utf8')))).join('\n');

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

test('the page has exactly one h1', () => {
  assert.equal(source.match(/<h1[\s>]/g)?.length, 1);
});
