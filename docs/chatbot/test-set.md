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
- **Run 3 (12 Nov 2026):** all 14 checks again, after the knowledge collection was re-indexed with the #48 version.
- **Run 4 (13 Nov 2026):** all 14 checks, same configuration.
- **Run 5 (13 Nov 2026):** all 14 checks, with the citation format noted for each answer. The collection held a single file, which turned out to be an older copy without the #56 changes (see *Fixes*).

| ID | Run 1 | Run 2 | Run 3 | Run 4 | Run 5 | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Q1 | Pass | | Fail | Fail | Fail | Runs 3–5 only said the coach works "rather than imposing solutions" / "rather than directing its work", not that the coach has no authority over people (borderline). Run 5 used a copy of the research without #56 |
| Q2 | Pass | | Pass | Pass | Pass | |
| Q3 | Fail | Pass | Fail | Pass | Pass | Runs 1 and 3 said "No" but not that the role comes from practice and coaching frameworks; passes in runs 4 and 5 |
| Q4 | Pass | Pass | Pass | Pass | Pass | Runs 2 and 3 cited the document name instead of the author; runs 4 and 5 gave no citation in the text (format only) |
| Q5 | Pass | | Pass | Pass | Pass | |
| Q6 | Pass | | Pass | Pass | Pass | |
| Q7 | Pass | | Pass | Pass | Pass | |
| Q8 | Pass | | Pass | Pass | Pass | |
| Q9 | Pass | | Pass | Pass | Pass | |
| Q10 | Fail | Fail | Pass | Pass | Pass | Runs 1–2 said "No" but not *why*; passes from run 3 after #48 (each team's own estimation scale, Cohn 2005) |
| Q11 | Pass | | Pass | Pass | Pass | |
| Q12 | Pass | | Pass | Pass | Pass | |
| O1 | Pass | | Pass | Pass | Pass | Declines and suggests an Agile coaching question |
| O2 | Pass | | Pass | Pass | Pass | Declines and suggests an Agile coaching question |
| **Total** | **12 / 14** | **13 / 14** (latest result per question) | **12 / 14** | **13 / 14** | **13 / 14** | Tested by: Christian Byemba on 11, 12 and 13 Nov 2026 |

### Fixes after the failures

| Failure | Cause | Fix |
| --- | --- | --- |
| Q3, Q10: correct "No" without the reason | The bot stopped at the conclusion | Instruction 9 added to the agent: for a yes/no answer, always give the reason from the knowledge base, with its source |
| Q10 still failing after instruction 9 | The research lines the bot retrieves (sections 9 and 10) said velocity is "not comparable" but not why; the reason was only in section 8 | #48 adds the reason (Cohn, 2005) to sections 9 and 10. The collection was re-indexed with this version on 12 Nov |
| Q4: citation "(Research: the Agile Coach role, §3)" | The bot cited the knowledge document instead of the author | Instruction 4 updated: cite author and year, never the document name. Runs 4–5 no longer cite the document, but Q4 and Q6 give no citation in the text. To check in run 6 |
| Q1, Q3 fail in run 3 after passing before | The answers vary between runs. Q1 retrieved section 2, which did not mention authority; Q3's origin was only stated once, in section 3 | #56: section 2 now says the coach has no authority over people, and section 10 says where the role comes from. Q3 passes in runs 4 and 5 |
| Q1 still fails in runs 4 and 5 | The collection did not contain the #56 version. The web-address source (raw GitHub link) never finished indexing, so the bot kept using an older uploaded file | 13 Nov: the old sources were removed and the current `main` version was uploaded as a file (indexed, 36 segments). To retest in run 6. From now on, re-upload the file after every change to the research document |

> **Status (13 Nov 2026):** Runs 4 and 5: 13/14. Only Q1 is left, and the cause was an outdated file in the knowledge collection, now replaced. Run 6 (all 14 checks with the current file) could not be done: since about 19:20 on 13 Nov the AI Studio playground creates the test session but the bot sends no reply, not even the intro message, while AI Health reports "All checks passed". The same outage happened on 11 Nov. To report to BOTSchool support with the agent ID and times. Next: run 6 when the playground works again; if 14/14, publish version 1 of the agent and embed the widget on the site.

## AI usage

Drafted with Claude (Anthropic) from the team's research document. The team reviews the questions and expected answers in the pull request.

The test runs were carried out with Claude in Chrome (browser automation) following the procedure above; the grading was checked by Christian Byemba against the bold key points.
