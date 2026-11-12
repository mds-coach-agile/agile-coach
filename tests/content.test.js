// Content tests: the learning data matches the models taught on the site.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  ROLES_DATA,
  COACHING_STANCES_DATA,
  CONFLICT_LEVELS_DATA,
  CONFLICT_SCENARIOS_DATA,
  QUIZ_QUESTIONS,
} from '../src/data/agileCoachData.ts';

test('the role comparison covers Agile Coach, Scrum Master and manager', () => {
  assert.deepEqual(ROLES_DATA.map((r) => r.id), ['agile-coach', 'scrum-master', 'project-manager']);
});

test('the four coaching stances are present (Adkins, 2010)', () => {
  assert.deepEqual(COACHING_STANCES_DATA.map((s) => s.id), ['teacher', 'mentor', 'facilitator', 'coach']);
});

test('the five conflict levels are numbered 1 to 5 (Speed Leas)', () => {
  assert.deepEqual(CONFLICT_LEVELS_DATA.map((c) => c.level), [1, 2, 3, 4, 5]);
});

test('quiz question ids are unique', () => {
  const ids = QUIZ_QUESTIONS.map((q) => q.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('every quiz question has exactly one correct answer', () => {
  for (const q of QUIZ_QUESTIONS) {
    assert.equal(q.options.filter((o) => o.isCorrect).length, 1, `question ${q.id}`);
  }
});

test('every quiz answer explains why it is right or wrong', () => {
  for (const q of QUIZ_QUESTIONS) {
    for (const o of q.options) {
      assert.ok(o.rationale.trim().length > 0, `question ${q.id}, option ${o.id}`);
    }
  }
});

test('realistic team conflict scenarios cover all 5 Speed Leas levels (US-04)', () => {
  assert.equal(CONFLICT_SCENARIOS_DATA.length, 5, 'should have 5 realistic scenarios');
  const levels = CONFLICT_SCENARIOS_DATA.map((s) => s.initialLevel);
  assert.deepEqual(levels, [1, 2, 3, 4, 5], 'must cover levels 1 to 5');
  for (const s of CONFLICT_SCENARIOS_DATA) {
    assert.equal(s.options.length, 3, `scenario ${s.id} must have exactly 3 options (A, B, C)`);
    const optimalOptions = s.options.filter((o) => o.isOptimal);
    assert.equal(optimalOptions.length, 1, `scenario ${s.id} must have exactly 1 best response`);
    for (const opt of s.options) {
      assert.ok(opt.explanation.trim().length > 0, `scenario ${s.id}, option ${opt.id} missing explanation`);
      assert.ok(opt.coachingTakeaway.trim().length > 0, `scenario ${s.id}, option ${opt.id} missing takeaway`);
    }
  }
});
