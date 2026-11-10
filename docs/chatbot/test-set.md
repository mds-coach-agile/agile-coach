# Chatbot Test Set — Agile Coach Learning Hub

Issue #29 · Sprint 2 · Author: Christian Byemba

The brief asks each team to keep "a small test set of questions with expected answers" and to check the BOTSchool.ai chatbot with it at each sprint. Our Definition of Done also requires that the chatbot "correctly answers all questions in the sprint test set".

Every expected answer comes from [`docs/research/agile-coach-research.md`](../research/agile-coach-research.md), which is the chatbot's knowledge base. The *Section* column says where.

## How to run the test

1. Open the chatbot (BOTSchool test console, or the widget on the site once it is embedded).
2. Ask each question **exactly as written**, in a new conversation.
3. Compare the answer with the **key points**. The answer passes if it contains **all** key points and **nothing that contradicts** the research. The wording does not need to match.
4. Write **Pass** or **Fail** in the column of the current sprint, and a short note for each Fail.
5. Fix failures by improving the knowledge base, then ask the failed question again.
6. Copy the summary line into the Sprint Review minutes.

## A. Questions on the subject (10)

| ID | Question | Key points the answer must contain | Section |
| --- | --- | --- | --- |
| Q1 | What does an Agile Coach do? | Helps teams and organisations work in an agile way and keep improving **on their own**; no authority over people; does not do the team's work | 1, 2 |
| Q2 | What is the difference between an Agile Coach and a Scrum Master? | Scrum Master: a Scrum accountability for **one Scrum Team**. Agile Coach: **any agile approach**, often **several teams** or the organisation | 3 |
| Q3 | Is the Agile Coach a role defined in the Scrum Guide? | **No.** The Scrum Guide 2020 defines Product Owner, Scrum Master and Developers; the Agile Coach comes from practice and coaching frameworks | 3 |
| Q4 | Does an Agile Coach have authority over the team like a manager? | **No** hierarchical authority: the coach influences and supports. The manager has hierarchical authority | 3, 10 |
| Q5 | What are the four coaching stances? | **Teacher, mentor, facilitator, professional coach** (Agile Coaching Institute / Spayd & Adkins) | 4 |
| Q6 | When should a coach use the teacher stance? | When the team is **new to a practice** and lacks the knowledge. Risk if overused: the team waits to be told | 4, 9 |
| Q7 | What is a powerful question? Give an example. | **Open**, curious, **no hidden advice or blame**. Example such as "What options do you see?" or "What could we try next sprint?" | 4 |
| Q8 | What are the five stages of a retrospective? | **Set the stage, gather data, generate insights, decide what to do, close** (Derby & Larsen) | 5 |
| Q9 | What are the five levels of conflict? | **Problem to solve, disagreement, contest, crusade, world war** (Speed Leas, used by Adkins) | 7 |
| Q10 | Can we use velocity to compare or rank teams? | **No.** Velocity depends on each team's own estimation scale; it is a planning tool for one team (Cohn) | 8, 10 |

## B. Out-of-scope questions (2)

The chatbot must not invent an answer. It should say the question is outside its topic and bring the user back to Agile coaching.

| ID | Question | Expected behaviour |
| --- | --- | --- |
| O1 | What's the weather in Coimbra today? | Says it only answers questions about Agile coaching; suggests a topic (roles, stances, conflict…) |
| O2 | Write my Python homework for me. | Same: declines politely and redirects to Agile coaching topics |

## Results

| ID | Sprint 2 | Notes |
| --- | --- | --- |
| Q1 | | |
| Q2 | | |
| Q3 | | |
| Q4 | | |
| Q5 | | |
| Q6 | | |
| Q7 | | |
| Q8 | | |
| Q9 | | |
| Q10 | | |
| O1 | | |
| O2 | | |
| **Total** | __ / 12 | Tested by: ______ on ______ |

> **Status (10 Nov 2026):** the test set is ready but the chatbot cannot be tested yet: BOTSchool.ai web integration asks for a credit card (issue #9). The results stay empty until the team has access or agrees on an alternative.

## AI usage

Drafted with Claude (Anthropic) from the team's research document. The team reviews the questions and expected answers in the pull request.
