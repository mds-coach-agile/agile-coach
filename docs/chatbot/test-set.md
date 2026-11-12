# Chatbot Test Set — Agile Coach Learning Hub

Issue #29 · Sprint 2 · Author: Christian Byemba

The brief asks each team to keep "a small test set of questions with expected answers" and to check the BOTSchool.ai chatbot with it at each sprint. Our Definition of Done also requires that the chatbot "correctly answers all questions in the sprint test set".

Every expected answer comes from [`docs/research/agile-coach-research.md`](../research/agile-coach-research.md), which is the chatbot's knowledge base. The *Section* column says where.

## How to run the test

1. Open the chatbot (BOTSchool test console, or the widget on the site once it is embedded).
2. Ask each question **exactly as written**, in a new conversation.
3. Compare the answer with the **key points**. The answer passes if it contains every key point in **bold** and **nothing that contradicts** the research. Points not in bold are welcome but optional. The wording does not need to match.
4. Write **Pass** or **Fail** in the column of the current sprint (add a column for each new check), and a short note for each Fail.
5. Fix failures by improving the knowledge base, then ask the failed question again.
6. Copy the summary line into the Sprint Review minutes.

## A. Questions on the subject (12)

| ID | Question | Key points (bold = required) | Section |
| --- | --- | --- | --- |
| Q1 | What does an Agile Coach do? | **Helps teams and organisations work in an agile way and keep improving on their own**; **no authority over people**; does not do the team's work | 1, 2 |
| Q2 | What is the difference between an Agile Coach and a Scrum Master? | Scrum Master: a Scrum accountability for **one Scrum Team**. Agile Coach: **any agile approach**, often **several teams** or the organisation | 3 |
| Q3 | Is the Agile Coach a role defined in the Scrum Guide? | **No.** **It comes from practice and coaching frameworks, not from Scrum.** The Scrum Guide 2020 defines Product Owner, Scrum Master and Developers; the Agile Coach comes from practice and coaching frameworks | 3 |
| Q4 | Does an Agile Coach have authority over the team like a manager? | **No hierarchical authority**: the coach influences and supports. The manager has hierarchical authority | 3, 10 |
| Q5 | What are the four coaching stances? | **Teacher, mentor, facilitator, professional coach** (Agile Coaching Institute / Spayd & Adkins) | 4 |
| Q6 | When should a coach use the teacher stance? | **When the team is new to a practice** and lacks the knowledge. Risk if overused: the team waits to be told | 4, 9 |
| Q7 | What is a powerful question? Give an example. | **Open**, curious, **no hidden advice or blame**. **An example** such as "What options do you see?" or "What could we try next sprint?" | 4 |
| Q8 | What are the five stages of a retrospective? | **Set the stage, gather data, generate insights, decide what to do, close** (Derby & Larsen) | 5 |
| Q9 | What are the five levels of conflict? | **Problem to solve, disagreement, contest, crusade, world war** (Speed Leas, used by Adkins) | 7 |
| Q10 | Can we use velocity to compare or rank teams? | **No. Velocity depends on each team's own estimation scale, so it should not be used to compare or rank teams** (Cohn). It is a planning tool for one team | 8, 10 |
| Q11 | A new team keeps arguing about how to work together. What stage of group development is this, and how should the coach respond? | **Storming** (Tuckman's stages: forming, storming, norming, performing). **The coach facilitates the conflict** rather than deciding for the team | 6 |
| Q12 | Nobody on our team ever admits a mistake. Which concept explains this, and why does it hurt improvement? | **Low psychological safety** (Edmondson): **a shared belief that the team is safe for interpersonal risk-taking**. Without it, people don't speak up, so retrospectives and experiments don't work | 6 |

## B. Out-of-scope questions (2)

The chatbot must not invent an answer. It should say the question is outside its topic and bring the user back to Agile coaching.

| ID | Question | Expected behaviour |
| --- | --- | --- |
| O1 | What's the weather in Coimbra today? | Says it only answers questions about Agile coaching; suggests a topic (roles, stances, conflict…) |
| O2 | Write my Python homework for me. | Same: declines politely and redirects to Agile coaching topics |

## Results

Chatbot: agent *Agile Coach assistant* in the university BOTSchool workspace (ISEC-P1G5), tested in the AI Studio playground before publishing. Knowledge collection *Agile Coach research* = `docs/research/agile-coach-research.md`. Each question was asked in a new conversation.

- **Run 1 (11 Nov 2026):** all 14 checks.
- **Run 2 (11 Nov 2026):** only the failed questions (Q3, Q10) and Q4 as a regression check, after adding instruction 9 (see *Fixes* below).

| ID | Run 1 | Run 2 | Notes |
| --- | --- | --- | --- |
| Q1 | Pass | | |
| Q2 | Pass | | |
| Q3 | Fail | Pass | Run 1 said "No" but not that the role comes from practice and coaching frameworks |
| Q4 | Pass | Pass | Run 2 cited the document name instead of the author (format only) |
| Q5 | Pass | | |
| Q6 | Pass | | |
| Q7 | Pass | | |
| Q8 | Pass | | |
| Q9 | Pass | | |
| Q10 | Fail | Fail | Says "No" but not *why* (each team's own estimation scale). Fixed in the knowledge base by #48; retest pending |
| Q11 | Pass | | |
| Q12 | Pass | | |
| O1 | Pass | | Declines and suggests an Agile coaching question |
| O2 | Pass | | Declines and suggests an Agile coaching question |
| **Total** | **12 / 14** | **13 / 14** (latest result per question) | Tested by: Christian Byemba on 11 Nov 2026 |

### Fixes after the failures

| Failure | Cause | Fix |
| --- | --- | --- |
| Q3, Q10: correct "No" without the reason | The bot stopped at the conclusion | Instruction 9 added to the agent: for a yes/no answer, always give the reason from the knowledge base, with its source |
| Q10 still failing after instruction 9 | The research lines the bot retrieves (sections 9 and 10) said velocity is "not comparable" but not why; the reason was only in section 8 | #48 adds the reason (Cohn, 2005) to sections 9 and 10. The collection is being re-indexed with this version |
| Q4: citation "(Research: the Agile Coach role, §3)" | The bot cited the knowledge document instead of the author | To do: update instruction 4 to cite author and year, never the document name |

> **Status (12 Nov 2026):** BOTSchool access is solved (#9 closed). 13/14 checks pass. Next: retest Q10 once the collection is re-indexed, then a full run 3 with the final configuration before publishing the agent and embedding the widget on the site.

## AI usage

Drafted with Claude (Anthropic) from the team's research document. The team reviews the questions and expected answers in the pull request.

The test runs were carried out with Claude in Chrome (browser automation) following the procedure above; the grading was checked by Christian Byemba against the bold key points.
