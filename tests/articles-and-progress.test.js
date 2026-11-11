import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARTICLES_DATA } from '../src/data/articlesData.ts';
import { QUIZ_QUESTIONS } from '../src/data/agileCoachData.ts';

test('all 4 core curriculum articles are defined and complete', () => {
  assert.equal(ARTICLES_DATA.length, 4);

  const expectedIds = ['fundamentals', 'role-boundaries', 'stances', 'conflict-dynamics'];
  expectedIds.forEach((id) => {
    const article = ARTICLES_DATA.find((a) => a.id === id);
    assert.ok(article, `Article ${id} should exist`);
    assert.ok(article.title.length > 5, `Article ${id} should have a title`);
    assert.ok(article.contentMarkdown.length > 500, `Article ${id} should have substantive content`);
    assert.ok(article.keyTakeaways.length >= 3, `Article ${id} should have key takeaways`);
    assert.ok(article.references.length >= 2, `Article ${id} should cite academic references`);
    assert.ok(article.checkYourUnderstanding.length >= 2, `Article ${id} should have self-check questions`);
  });
});

test('every quiz question has valid remediation linking to an article', () => {
  assert.ok(QUIZ_QUESTIONS.length >= 5);

  const validArticleIds = new Set(ARTICLES_DATA.map((a) => a.id));

  QUIZ_QUESTIONS.forEach((q) => {
    assert.ok(q.relatedArticleId, `Question ${q.id} must specify relatedArticleId`);
    assert.ok(
      validArticleIds.has(q.relatedArticleId),
      `Question ${q.id} relatedArticleId '${q.relatedArticleId}' must match an existing article`
    );
    assert.ok(q.relatedArticleTitle, `Question ${q.id} must specify relatedArticleTitle`);
  });
});

