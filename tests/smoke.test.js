// Smoke tests: check that the home page has the basics every page needs.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('home page declares a language for screen readers', () => {
  assert.match(html, /<html lang="en">/);
});

test('home page has a title', () => {
  assert.match(html, /<title>[^<]+<\/title>/);
});

test('home page has a responsive viewport meta tag', () => {
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
});

test('home page links the shared stylesheet', () => {
  assert.match(html, /<link rel="stylesheet" href="css\/styles.css">/);
});

test('home page has exactly one h1', () => {
  assert.equal(html.match(/<h1[\s>]/g)?.length, 1);
});
