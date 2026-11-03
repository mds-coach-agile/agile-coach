// US-02 tests: home page structure, navigation and links.
// These read the HTML as text, so they need no browser and no dependencies.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');

const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((m) => m[1]);
const mainNav = html.match(/<nav class="site-nav"[\s\S]*?<\/nav>/)?.[0] ?? '';

test('every id is unique', () => {
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  assert.deepEqual(duplicates, []);
});

test('every in-page link points to an element that exists', () => {
  const broken = hrefs
    .filter((href) => href.startsWith('#'))
    .filter((href) => !ids.includes(href.slice(1)));
  assert.deepEqual(broken, []);
});

test('every local file reference exists', async () => {
  const local = [...html.matchAll(/\s(?:href|src)="([^"#:]+)"/g)].map((m) => m[1]);
  assert.ok(local.length > 0);
  for (const path of local) {
    await access(new URL(path, root)); // throws if the file is missing
  }
});

test('main navigation has the six agreed items, in order', () => {
  const labels = [...mainNav.matchAll(/<a[^>]*>([^<]+)<\/a>/g)].map((m) => m[1].trim());
  assert.deepEqual(labels, [
    'Home',
    'Learn',
    'Role Comparison',
    'Coaching Stances',
    'Practical Scenarios',
    'About',
  ]);
});

test('main navigation is a labelled landmark', () => {
  assert.match(mainNav, /aria-label="Main"/);
});

test('menu button is accessible and controls the navigation', () => {
  const button = html.match(/<button class="nav-toggle"[^>]*>/)?.[0] ?? '';
  assert.match(button, /type="button"/);
  assert.match(button, /aria-expanded="false"/);
  assert.match(button, /aria-controls="primary-nav"/);
  assert.match(mainNav, /id="primary-nav"/);
});

test('page offers a skip link to the main content', () => {
  assert.match(html, /<a class="skip-link" href="#main">/);
  assert.ok(ids.includes('main'));
});

test('headings do not skip levels', () => {
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    assert.ok(levels[i] <= levels[i - 1] + 1, `h${levels[i - 1]} is followed by h${levels[i]}`);
  }
});

test('all seven learning modules are present', () => {
  const modules = html.match(/class="card module-card"/g) ?? [];
  assert.equal(modules.length, 7);
});

test('the four coaching stances are present', () => {
  for (const stance of ['Teacher', 'Mentor', 'Facilitator', 'Professional coach']) {
    assert.match(html, new RegExp(`<h3 class="card__title">${stance}</h3>`));
  }
});

test('the five learning journey steps are present', () => {
  const steps = [...html.matchAll(/<h3 class="journey__title">([^<]+)<\/h3>/g)].map((m) => m[1]);
  assert.deepEqual(steps, ['Discover', 'Explore', 'Understand', 'Practise', 'Improve']);
});

test('the home page states that the Scrum Guide does not define an Agile Coach', () => {
  assert.match(html, /Scrum Guide 2020 does not define an "Agile Coach" role/);
});

test('the navigation script is loaded', () => {
  assert.match(html, /<script src="js\/main.js" defer><\/script>/);
});
