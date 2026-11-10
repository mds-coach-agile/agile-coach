# Meeting Minutes — Agile Coach Learning Hub

**Course:** Software Development Methodologies — ISEC
**Team:** Bator Eshizhamsoev (Product Owner / Developer) · Christian Byemba (Developer) · Javed Iqbal (Scrum Master / Developer)
**Client:** Course teacher
**Maintained by:** Javed Iqbal (Scrum Master)

> **How this file works:** meetings are listed in date order; new meetings are added at the bottom.
> Past minutes are not edited silently — corrections are added as a dated note, e.g. *"Correction (10 Nov): …"*.
> All Daily Scrums (every sprint) are logged in one file: `daily-scrum-log.md`.

## Contents

| # | Date | Meeting | Status |
|---|---|---|---|
| 1 | 27 Oct 2026 | Sprint 0 / Pre-game: Design Thinking, Release Planning, Sprint 1 Planning | Written up 10 Nov; awaiting team approval |
| 2 | 03 Nov 2026 | Sprint 1, Session 1 | Written up 10 Nov; awaiting team approval |
| 3 | ____ 2026 | Sprint 1, Session 2 | To add |
| 4 | ____ 2026 | Sprint 1, Session 3 | To add |
| 5 | 10 Nov 2026 | Sprint 1 Review | To fill in during the meeting |
| 6 | 10 Nov 2026 | Sprint 1 Retrospective | To fill in during the meeting |
| 7 | 10 Nov 2026 | Sprint 2 Planning | To fill in during the meeting |
| 8 | ____ 2026 | Sprint 2, Session 2 (Daily Scrum + mid-sprint check) | Log in the Daily Scrum file |
| 9 | ____ 2026 | Sprint 2, Session 3 | Log in the Daily Scrum file |
| 10 | 17 Nov 2026 | Sprint 2 Review (final presentation) and final Retrospective | To add |

---

## 1. 27 Oct 2026 — Sprint 0 / Pre-game


| | |
|---|---|
| **Project** | Agile Coach Learning Hub |
| **Course** | Software Development Methodologies — ISEC |
| **Meeting** | Sprint 0 / Pre-game: Design Thinking, Release Planning, Sprint 1 Planning |
| **Date** | Tuesday, 27 October 2026 |
| **Location** | In class, ISEC |
| **Duration** | 2 hours |
| **Attendees** | ☑ Bator Eshizhamsoev (Product Owner / Developer) ☑ Christian Byemba (Developer) ☑ Javed Iqbal (Scrum Master / Developer) — all 3 team members present |
| **Minutes recorded by** | Javed Iqbal (Scrum Master) |

> **Note:** These minutes were written up on 10 November 2026 from the team's notes of the meeting. Minutes are recorded during each session from Sprint 2 onward.
>
> **About Sprint 0 / Pre-game:** this is a course adaptation, not part of the official Scrum Guide. It is a setup phase before the first Sprint, used to understand the client's needs, plan the release and plan Sprint 1.

---

### 1. Agenda

| # | Item | Timebox |
|---|---|---|
| 1 | Design Thinking: understand the client's needs and possible solutions | 60 min |
| 2 | Release Planning: review user stories, estimate, create the release plan, define the Definition of Done | 30 min |
| 3 | Sprint 1 Planning: Sprint Goal and plan | 30 min |

---

### 2. Design Thinking (60 min)

#### 2.1 The product

The team discussed the product to be built: the **Agile Coach Learning Hub**, an interactive educational website that helps students understand the role of an Agile Coach and how Agile coaches support teams.

#### 2.2 Target users

**Primary users:** university students and beginners studying Agile and software development methodologies.

**Their needs:**
- Understand what an Agile Coach does and why the role exists.
- Stop confusing the Agile Coach with the Scrum Master and the manager.
- Learn practical coaching techniques through realistic team situations.
- Check their understanding quickly.

**Client:** the course teacher, who gives feedback and accepts the final product.

#### 2.3 Product goals

1. Deliver a working, responsive and accessible educational website.
2. Present accurate, research-based content about Agile coaching.
3. Organise the content into clear topics with simple navigation.
4. Let learners check their understanding through an interactive activity.
5. Provide an AI chatbot, if access and time allow.
6. Deploy the final product to Netlify by **17 November 2026**.

#### 2.4 Product specifications (possible solution)

| Area | Specification |
|---|---|
| Home and navigation | A home page that introduces the hub and guides learners to the topics |
| Learning content | What an Agile Coach is and how the role differs from a Scrum Master and a manager; coaching stances, facilitation, team dynamics, conflict resolution and continuous improvement |
| Interactive learning | At least one interactive activity, such as a quiz, self-assessment or practical scenario |
| AI chatbot | A BOTSchool.ai chatbot that answers questions about the Agile Coach role, depending on access |
| Technology | Responsive website, hosted on Netlify, code managed on GitHub |

**Out of scope:** user accounts, login, learner profiles, analytics dashboards, and project-management features.

---

### 3. Release Planning (30 min)

#### 3.1 User stories reviewed

| ID | User story | Priority | Acceptance criteria |
|---|---|---|---|
| US-01 | As a learner, I want a clear introduction to Agile coaching so that I understand the purpose of the role. | Must | The page explains the role in plain language and includes at least one practical example. |
| US-02 | As a learner, I want to compare an Agile Coach, Scrum Master, and manager so that I can distinguish their responsibilities. | Must | The comparison presents meaningful differences in focus and responsibilities. |
| US-03 | As a learner, I want to explore coaching stances so that I can recognise different ways a coach supports a team. | Should | Each included stance has an explanation and an example of when it may be useful. |
| US-04 | As a learner, I want to respond to a realistic team scenario so that I can practise applying coaching concepts. | Should | The learner can choose a response and receives an explanation of the outcome or reasoning. |
| US-05 | As a learner, I want to complete a knowledge check so that I can assess my understanding. | Should | The learner receives clear feedback and can review the relevant learning content. |
| US-06 | As a learner, I want to navigate between topics easily so that I can follow the learning path or revisit concepts. | Must | Topic navigation is visible, understandable, and works across the learning pages. |

*Priorities are indicative and set by the Product Owner. The AI chatbot (BOTSchool.ai) was discussed as a possible feature but was not written as a user story for Sprint 1, because access had not been confirmed.*

#### 3.2 Release plan

| Milestone | Date |
|---|---|
| Sprint 0 / Pre-game (in class) | 27 Oct 2026 |
| Sprint 0 / Pre-game (out of class): refine goals, requirements, tools and user stories | from 27 Oct 2026 |
| Sprint 1: 3 sessions × 2 h, first session in class on 3 Nov | 27 Oct – 10 Nov 2026 |
| Sprint 1 Review, Retrospective, Sprint 2 Planning | 10 Nov 2026 |
| Sprint 2: 3 sessions × 2 h, first session in class on 10 Nov | 10 – 17 Nov 2026 |
| Final presentation and submission | 17 Nov 2026 |

#### 3.3 Definition of Done

The team agreed to define a Definition of Done. It was documented in `docs/definition-of-done.md` and covers: responsive and accessible pages, Netlify deployment, code review through a pull request, accurate content, no critical bugs, and Product Owner approval.

---

### 4. Sprint 1 Planning (30 min)

The team planned Sprint 1 (27 Oct – 10 Nov; 3 working sessions of 2 hours, the first in class on 3 Nov).

#### 4.1 Sprint Goal (Why)

**Sprint 1 Goal:** Build the first version of the Agile Coach Learning Hub, so that a learner can navigate between topics, understand what an Agile Coach does, and tell the role apart from a Scrum Master and a manager.

#### 4.2 Sprint Backlog (What)

All six user stories from the release plan were selected for Sprint 1:

| Order | User story | Priority |
|---|---|---|
| 1 | US-01 Introduction to Agile coaching | Must |
| 2 | US-02 Agile Coach vs Scrum Master vs manager | Must |
| 3 | US-06 Navigation between topics | Must |
| 4 | US-03 Coaching stances | Should |
| 5 | US-04 Realistic team scenario | Should |
| 6 | US-05 Knowledge check | Should |

**Owners:** not assigned in advance. The Developers pull the next available story in priority order whenever they are free (self-management).

#### 4.3 Plan (How)

| Session | Planned work |
|---|---|
| Session 1 — 03 Nov (in class) |  |
| Session 2 — ____ |  |
| Session 3 — ____ |  |

#### 4.4 Risks identified

| Risk | Response |
|---|---|
| BOTSchool.ai access for the chatbot is not confirmed | Keep the chatbot out of the Sprint 1 Backlog; check access during Sprint 0 and ask the instructor if needed |

---

### 5. Roles

| Role | Member |
|---|---|
| Product Owner | Bator Eshizhamsoev |
| Scrum Master | Javed Iqbal |
| Developers | Bator Eshizhamsoev, Christian Byemba, Javed Iqbal |
| Client | Course teacher |

---

### 6. Decisions

| # | Decision |
|---|---|
| 1 | The team will build the Agile Coach Learning Hub as an interactive educational website for students learning Agile. |
| 2 | The product goals and specifications above form the starting point for the Product Backlog. |
| 3 | The team will use **Scrum** as the project methodology. |
| 4 | The team will use **GitHub** for the project (code, documentation and backlog). |
| 5 | Team roles are assigned as listed in section 5. |
| 6 | The Sprint 1 Goal and backlog are as recorded in section 4. |

---

### 7. Action items (Sprint 0 / Pre-game, out of class)

| # | Action | Owner | Due |
|---|---|---|---|
| 1 | Set up the GitHub Projects board (backlog) and choose the burndown chart format | Bator (PO) | Before 3 Nov |
| 2 | Write and refine the user stories | Bator (PO), with the team | Before 3 Nov |
| 3 | Write up the Definition of Done | Bator | Before 3 Nov |
| 4 | Research the Agile Coach role and gather reference materials | Christian | Before 3 Nov |
| 5 | Set up tools and environments (Netlify, BOTSchool.ai, Lovable.dev) | Christian | Before 3 Nov |
| 6 | Create templates for meeting minutes and Daily Scrum logs | Javed | Before 3 Nov |
| 7 | Ask the instructor for clarifications if needed | Javed (SM) | As needed |

---

### 8. Next meeting

Sprint 1, Session 1 — Tuesday, 3 November 2026, in class

---

**Approved by the team:**

| Name | Role | Approved |
|---|---|---|
| Bator Eshizhamsoev | Product Owner | ☐ |
| Christian Byemba | Developer | ☐ |
| Javed Iqbal | Scrum Master | ☐ |

---

## 2. 03 Nov 2026 — Sprint 1, Session 1

| | |
|---|---|
| **Project** | Agile Coach Learning Hub |
| **Meeting** | Sprint 1, Session 1 (working session + Daily Scrum) |
| **Date** | Tuesday, 3 November 2026 |
| **Time** | 20:30 – 22:30 |
| **Sprint** | Sprint 1 (27 October – 10 November 2026) |
| **Location** | In class, ISEC (Christian joined remotely) |
| **Duration** | 2 hours |
| **Attendees** | ☑ Bator Eshizhamsoev (Product Owner / Developer) ☑ Christian Byemba (Developer, remote) ☑ Javed Iqbal (Scrum Master / Developer) — all 3 team members present |
| **Minutes recorded by** | Javed Iqbal (Scrum Master) |

> **Note:** These minutes were written up on 10 November 2026 from the team's notes and the GitHub history for 3 November (commits, pull requests and issues). Work committed before 20:30 was done before the class session. GitHub user `boolishta` is Bator Eshizhamsoev.

---

### 1. Daily Scrum

The team (Bator, Christian, Javed) agreed to start working on the user stories of Sprint 1. Impediment raised: BOTSchool.ai asks for a credit card before enabling web integration (#9). Full entry: `daily-scrum-log.md`, entry 1.

### 2. Work recorded on GitHub on 3 November

| Time | Work | By | Result |
|---|---|---|---|
| 11:15 – 11:31 | Definition of Done created (`docs/definition-of-done.md`) | Bator | Merged — PR #10 |
| 14:26 – 16:41 | Agile Coach research document finalised (`docs/research/agile-coach-research.md`) | Christian | Merged — PR #8 |
| 16:47 – 17:24 | Design Thinking session plan — user paths (#5) | Javed | Merged — PR #16 |
| 18:11 | First home page and navigation (plain HTML, with tests) on branch `feature/issue-11-home-navigation` (#11) | Javed | Not merged (later replaced by the React site in PR #30) |
| 18:44 | Sprint 1 planning record on branch `docs/sprint-1-planning` | Javed | Not merged |
| 21:13 – 21:21 | Repository folders renamed | Javed | Merged — PR #23 |
| 22:34 | Release plan (#20) | Javed | Merged later — PR #24 (9 Nov) |
| During the day | User stories entered on GitHub as issues #11–#14 (home page, Agile Coach role, quiz, chatbot); #11 assigned to Javed | Bator | Open |
| During the day | Christian asked the teacher whether academic access to BOTSchool.ai is available (#9) | Christian | Waiting for answer |

### 3. Discussion and decisions

| # | Topic / decision | Decided by |
|---|---|---|
| 1 | The team refined the project requirements and the user stories. | Team |
| 2 | The team planned the work for Sprint 1. | Team |

### 4. Action items for the next session

| # | Action | Owner | Due |
|---|---|---|---|
| 1 | Start working on the Sprint 1 user stories | Developers (Bator, Christian, Javed) | Next session |

### 5. Next meeting

Sprint 1, Session 2 — ____ 2026 (Sprint 1 ends 10 November 2026)

---

## 3. ____ 2026 — Sprint 1, Session 2

*To add.*

---

## 4. ____ 2026 — Sprint 1, Session 3

*To add.*

---

## 5. 10 Nov 2026 — Sprint 1 Review


| | |
|---|---|
| **Project** | Agile Coach Learning Hub |
| **Date** | 10 November 2026 |
| **Time** | ____:____ – ____:____ (timebox: 20 min, start of Session 1) |
| **Location** | ____________ (in person / online) |
| **Facilitator** | Javed Iqbal (Scrum Master) |
| **Note-taker** | ____________ |
| **Attendees** | ☐ Bator Eshizhamsoev (PO) ☐ Christian Byemba (Dev) ☐ Javed Iqbal (SM) ☐ Teacher (client) |
| **Absent** | ____________ |

> Fill in during the meeting. Write only what was actually said and decided.

---

### 1. Purpose (SM reads out, 1 min)

Inspect the outcome of Sprint 1 (27 Oct – 10 Nov), collect feedback, and update the Product Backlog for Sprint 2.

### 2. Sprint 1 Goal (2 min)

**Agreed Sprint 1 Goal:** Build the first version of the Agile Coach Learning Hub, so that a learner can navigate between topics, understand what an Agile Coach does, and tell the role apart from a Scrum Master and a manager. *(See meeting 1, section 4.1.)*

**Was the Sprint Goal met?** ☐ Yes ☐ Partly ☐ No ☐ No goal agreed

### 3. Work completed — Done (10 min)

| Issue | Item | Evidence | Shown / explained by | Accepted by PO? |
|---|---|---|---|---|
| #1 | Design Thinking | `docs/design-thinking/` | Javed | ☐ |
| #5 | Design Thinking session — user paths | `docs/design-thinking/design-thinking-session-user-paths.md` | Javed | ☐ |
| #2 | Definition of Done | `docs/definition-of-done.md` | Bator | ☐ |
| #3 | Roles assigned | Release plan, section 9 | Bator | ☐ |
| #4 | Meeting minutes / Daily Scrum templates | `docs/meeting-minutes.md` | Javed | ☐ |
| #6, #8 | Agile Coach research | `docs/research/agile-coach-research.md` | Christian | ☐ |
| #7 | Accounts & environments (Netlify, BOTSchool, Lovable) | mds-agile-coach.netlify.app | Christian | ☐ |
| #20 | Release plan | `docs/release-plan/release-plan.md` | Javed | ☐ |

#### 3a. Website pages merged on 10 Nov — PR #30 (decide at the Review)

PR #30 (`agile-coach-pages`, committed by Bator at 10:40, merged to `main` by Javed at 11:03 on 10 Nov) added the first version of the website (React + Vite, one page with sections). The team decides at the Review whether each item meets the Definition of Done (e.g. deployed to Netlify, reviewed, content checked, PO approval).

| Issue | User story | What PR #30 added | Meets DoD? | Accepted by PO? |
|---|---|---|---|---|
| #11 / #26 | US-06 Navigation between topics | Navbar, hero (home) section, learning paths overview, footer | ☐ Yes ☐ No | ☐ |
| #12 / #27 | US-01 Introduction · US-02 Coach vs Scrum Master vs manager | Role comparison section | ☐ Yes ☐ No | ☐ |
| — | US-03 Coaching stances | Coaching stances section | ☐ Yes ☐ No | ☐ |
| — | (not in backlog) | Conflict levels section | ☐ Yes ☐ No | ☐ |
| #13 / #28 | US-05 Knowledge check | Interactive quiz widget and full assessment | ☐ Yes ☐ No | ☐ |

**Deployed to Netlify?** ☐ Yes ☐ No — **Reviewed by a second developer before merging?** ☐ Yes ☐ No

### 4. Work not Done (5 min)

| Issue | Item | Status | Reason | Back to Product Backlog? |
|---|---|---|---|---|
| — | US-04 Realistic team scenario | Not started | __________ | ☐ |
| | Any PR #30 item not accepted as Done in 3a | | __________ | ☐ |
| #9 | BOTSchool web integration access | Blocked since 3 Nov (credit card) | Waiting for teacher | ☐ |

### 5. Feedback from the teacher / stakeholders (10 min)

| # | Feedback | Given by | Action / Backlog impact |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |

**Questions to the teacher:**

| Question | Answer |
|---|---|
| BOTSchool: is academic access available, or is a linked/recorded chatbot acceptable? |  |
| What are the dates of Sprint 2 Sessions 2 and 3? |  |
| Is the 17 Nov presentation Session 3, or a separate event? |  |
| Is work outside the sessions expected or allowed? |  |

### 6. Product Backlog updates (PO, 2 min)

- ☐ Duplicates resolved: keep ☐ #26–#29 ☐ #11–#14, close the other set
- ☐ Priority order for Sprint 2 confirmed by the PO: 1. ______ 2. ______ 3. ______ 4. ______
- ☐ Other changes: ______________________________________________

### 7. Decisions

| # | Decision | Decided by |
|---|---|---|
| 1 |  |  |
| 2 |  |  |

### 8. Action items

| # | Action | Owner | Due |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |

---

## 6. 10 Nov 2026 — Sprint 1 Retrospective


| | |
|---|---|
| **Project** | Agile Coach Learning Hub |
| **Date** | 10 November 2026 |
| **Time** | ____:____ – ____:____ (timebox: 20 min, inside Session 1) |
| **Facilitator** | Javed Iqbal (Scrum Master) |
| **Attendees** | ☐ Bator Eshizhamsoev ☐ Christian Byemba ☐ Javed Iqbal |

> The Retrospective is for the Scrum Team only (no teacher).
> Focus on **how we worked**, not on blaming people. Write only what the team actually said.

---

### Facilitator script (not part of the minutes)

1. **Set the stage (1 min):** "We look at the process, not at people. Goal: leave with 1–2 actions that make Sprint 2 better."
2. **Gather data (6 min):** each person writes 2 notes for each column below, then reads them out.
3. **Generate insights (5 min):** group similar notes; each person gets 2 votes for the most important problem.
4. **Decide actions (6 min):** for the top 1–2 problems, agree a concrete, small action with an owner.
5. **Close (2 min):** read back the actions; each person says one word about the sprint.

**Questions to prompt discussion if needed** (based on what GitHub shows):
- "Our proposed Sprint 1 Goal was home page + role page + quiz. We delivered foundation work. What got in the way?"
- "The home page was built on 3 Nov but had no PR for a week. How can we make work visible earlier?"
- "BOTSchool has been blocked since 3 Nov. How should we handle blockers faster?"
- "How did we communicate between our working sessions?"

---

### 1. What went well? 👍

| # | Item | Raised by |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

### 2. What did not go well? 👎

| # | Item | Raised by |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

### 3. What can we improve? 💡

| # | Idea | Votes |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

### 4. Improvement actions for Sprint 2 (max 2)

Each action must be **specific, small, and checkable** within Sprint 2's three sessions.

| # | Action | Owner | How we check it | Check date |
|---|---|---|---|---|
| 1 |  |  |  |  |
| 2 |  |  |  |  |

*Example of a good action:* "Open a draft PR before the end of the session in which you start a card, so the board shows real progress. Owner: everyone. Check: SM looks at open PRs in each Daily Scrum."
*Example of a bad action:* "Communicate better." (not specific, not checkable)

### 5. Follow-up of previous actions

Not applicable — this is the first Retrospective.

### 6. Closing word from each member

| Member | One word |
|---|---|
| Bator |  |
| Christian |  |
| Javed |  |

---

## 7. 10 Nov 2026 — Sprint 2 Planning


| | |
|---|---|
| **Project** | Agile Coach Learning Hub |
| **Date** | 10 November 2026 |
| **Time** | ____:____ – ____:____ (timebox: 35 min, inside Session 1) |
| **Facilitator** | Javed Iqbal (Scrum Master) |
| **Attendees** | ☐ Bator Eshizhamsoev (PO) ☐ Christian Byemba ☐ Javed Iqbal |
| **Sprint period** | 10 – 17 November 2026 |
| **Sprint format** | 3 working sessions × 2 hours (each session = one sprint "day") |
| **Session dates** | 1: Tue 10 Nov (in class) · 2: ____________ · 3: ____________ |
| **Sprint 2 Review / final presentation** | 17 November 2026 |

> Write only what the team actually agrees. The task proposal in `sprint-2-task-plan.md` is input, not a decision.

---

### Agenda (35 min)

| Time | Topic | Led by |
|---|---|---|
| 0–3 min | Inputs: Review outcome, Retro actions, capacity | SM |
| 3–10 min | **Topic 1 — Why:** agree the Sprint Goal | PO proposes, team agrees |
| 10–15 min | Definition of Done check | Team |
| 15–25 min | **Topic 2 — What:** scope option and backlog items | PO orders, Developers select |
| 25–32 min | **Topic 3 — How:** tasks and owners for Session 1 and 2 | Developers |
| 32–35 min | Read back decisions | SM |

---

### 1. Inputs

**Retro actions carried into this sprint:**
1. ______________________________________________
2. ______________________________________________

**Team capacity:**

| | Person-hours |
|---|---|
| Build time inside sessions (after Scrum events) | ≈ 12 |
| Work outside sessions? ☐ No ☐ Yes: ____ h per person | ____ |
| **Total capacity** | ____ |

### 2. Sprint Goal (Why)

**Agreed Sprint 2 Goal:**

> ______________________________________________________________

*Proposed wording for discussion (not yet agreed):* "A student can visit the live site, learn what an Agile Coach is and how the role differs from a Scrum Master and a manager, and test their knowledge with a quiz."

*Note:* first versions of these pages and the quiz were merged in PR #30 on 10 Nov. If the Review accepts them as Done, the Sprint 2 Goal could focus on what is still missing, e.g. live Netlify deployment, content accuracy, the realistic team scenario (US-04) and the chatbot.

**Agreed by:** ☐ Bator ☐ Christian ☐ Javed

### 3. Definition of Done

**Current issue:** the DoD includes product-level criteria ("at least one quiz works", "chatbot answers the test set") that a single item like the role page cannot meet.

**Decision:** ☐ Keep DoD as is ☐ Update DoD (changes below)

| Change | Agreed? |
|---|---|
| Move "interactive quiz works" and "chatbot answers test set" to release goals / acceptance criteria of #28 and #29 | ☐ |
| Other: | ☐ |

### 4. Sprint Backlog (What)

**Duplicates resolved:** keep ☐ #26–#29 ☐ #11–#14

> **Update (10 Nov, 11:03):** PR #30 merged first versions of #26, #27 and #28 into `main` (see meeting 5, section 3a). The options and estimates below were prepared before that merge, so the team should re-estimate only the **remaining** work on these items.

**Scope option chosen by the PO:**
☐ **A — class time only (~12 h):** #26, #27 (extend home page section), #28. Chatbot not in sprint.
☐ **B — class + outside work (~25 h):** #26, #27, #28, #29 (or chatbot fallback).

| Priority | Issue | Item | Points | Selected? | Notes |
|---|---|---|---|---|---|
| 1 | #26 | Home Page and Navigation | 3 | ☐ | First version merged in PR #30. Remaining work: ________ |
| 2 | #27 | What is an Agile Coach | 5 | ☐ | Role comparison section merged in PR #30. Remaining work: ________ |
| 3 | #28 | Interactive Knowledge Quiz | 5 | ☐ | Quiz and full assessment merged in PR #30. Remaining work: ________ |
| 4 | #29 | BOTSchool Chatbot Test Set | 5 | ☐ | Depends on #9 |
| — | #9 | BOTSchool web access | — | ☐ | Blocked |
| | | **Total selected** | | | |

**Chatbot decision (if in scope and #9 is not resolved by Session 2):** ______________________________________________

### 5. Plan (How)

| Item | Tasks (short) | Owner | Done by (session) |
|---|---|---|---|
| #26 |  |  | ☐ S1 ☐ S2 ☐ S3 |
| #27 |  |  | ☐ S1 ☐ S2 ☐ S3 |
| #28 |  |  | ☐ S1 ☐ S2 ☐ S3 |
| #29 |  |  | ☐ S1 ☐ S2 ☐ S3 |
| Docs |  |  | ☐ S1 ☐ S2 ☐ S3 |
| Presentation |  |  | ☐ S1 ☐ S2 ☐ S3 |

### 6. Working agreements for Sprint 2

| Agreement | Agreed? |
|---|---|
| Daily Scrum: first 10 min of Sessions 2 and 3 | ☐ |
| Every card in progress has a PR before the end of the session it was started in | ☐ |
| PRs are reviewed by the next session at the latest | ☐ |
| Mid-sprint check: last 10 min of Session 2 | ☐ |
| No new features in Session 3, only finishing and fixes | ☐ |
| Demo rehearsal in Session 3 (or end of Session 2 if 17 Nov is Session 3) | ☐ |

### 7. Risks

| Risk | Response | Owner |
|---|---|---|
| Only ~12 h of class build time | Scope option chosen; mid-sprint check in Session 2 | |
| BOTSchool access (#9) | Chatbot kept out of the Sprint Goal; decision by Session 2 | |
| Session 2/3 dates unknown | Confirm with the teacher today | |

### 8. Decisions summary

| # | Decision | Decided by |
|---|---|---|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |

---

## 8. ____ 2026 — Sprint 2, Session 2

Daily Scrum and mid-sprint check: see `daily-scrum-log.md`. Record here any decisions taken (e.g. scope changes by the PO).

---

## 9. ____ 2026 — Sprint 2, Session 3

Daily Scrum and demo rehearsal: see `daily-scrum-log.md`. Record here any decisions taken.

---

## 10. 17 Nov 2026 — Sprint 2 Review (final presentation) and final Retrospective

*To add after the presentation.*
