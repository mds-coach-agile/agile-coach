# Meeting Minutes — Agile Coach Learning Hub

**Course:** Software Development Methodologies — ISEC
**Team:** Bator Eshizhamsoev (Product Owner / Developer) · Christian Byemba (Developer) · Javed Iqbal (Scrum Master / Developer)
**Client:** Course teacher
**Minutes recorded by:** Javed Iqbal (Scrum Master)

> **Draft.** Fill in the blanks (____) and change anything the team did not actually say.

| Sprint | Dates | Main result | Status |
|---|---|---|---|
| Sprint 0 | 27 Oct – 3 Nov 2026 | Product idea, plan, research and team setup | ✅ Completed |
| Sprint 1 | 3 Nov – 11 Nov 2026 | First version of the website, role content, articles and chatbot test set | ✅ Completed |
| Sprint 2 | 12 Nov – 17 Nov 2026 | Final product, deployment and presentation | 🔄 In progress |

---

# Sprint 0 — 27 Oct to 3 Nov 2026 ✅ Completed

## 1. 27 Oct 2026 — Sprint 0 Kick-off

| | |
|---|---|
| **Location** | In class, ISEC |
| **Duration** | 2 hours |
| **Attendees** | Bator, Christian, Javed |

**Agenda:**
1. Design Thinking: understand the client's needs (60 min)
2. Release Planning: user stories and release plan (30 min)
3. Plan the next steps (30 min)

**Discussed:**
- **Product:** the **Agile Coach Learning Hub**, an interactive website that teaches students what an Agile Coach does.
- **Users:** university students and beginners learning Agile. They want to:
  - understand the Agile Coach role
  - stop confusing the Agile Coach with the Scrum Master and the manager
  - practise with real team situations
  - test what they learned
- **Product goals:** a responsive website, accurate content, simple navigation, a quiz, an AI chatbot (if possible), and deployment to Netlify by 17 Nov.
- **Out of scope:** login, user accounts, analytics.

**User stories written:**

| ID | User story | Priority |
|---|---|---|
| US-01 | Introduction to Agile coaching | Must |
| US-02 | Agile Coach vs Scrum Master vs Manager | Must |
| US-03 | Coaching stances | Should |
| US-04 | Realistic team scenario | Should |
| US-05 | Knowledge check (quiz) | Should |
| US-06 | Navigation between topics | Must |

**Release plan:**

| Milestone | Date |
|---|---|
| Sprint 0 | 27 Oct – 3 Nov |
| Sprint 1 | 3 – 11 Nov |
| Sprint 2 | 12 – 17 Nov |
| Final presentation | 17 Nov |

**Decisions:**
1. Build the Agile Coach Learning Hub.
2. Use Scrum as the method and GitHub for code, documents and backlog.
3. Roles: Bator = Product Owner, Javed = Scrum Master, all three = Developers.
4. Write a Definition of Done.

**Tasks:**

| # | Task | Owner | Due |
|---|---|---|---|
| 1 | Write the Definition of Done | Bator | 3 Nov |
| 2 | Put user stories on GitHub | Bator | 3 Nov |
| 3 | Research the Agile Coach role | Christian | 3 Nov |
| 4 | Set up tools (Netlify, BOTSchool.ai, Lovable.dev) | Christian | 3 Nov |
| 5 | Design Thinking plan and release plan | Javed | 3 Nov |
| 6 | Meeting minutes and Daily Scrum templates | Javed | 3 Nov |

## 2. 3 Nov 2026 — Sprint 0 Review

**Attendees:** Bator, Christian (online), Javed

**Done:**

| Work | By | Pull request / evidence |
|---|---|---|
| Definition of Done | Bator | PR #10: checklist for "done" (responsive pages, code review, Netlify deployment, content check, PO approval) |
| Agile Coach research | Christian | PR #8: the coach role, Coach vs SM vs Manager, four coaching stances, facilitation, conflict, sample situations, references |
| Design Thinking plan (user paths) | Javed | PR #16: session plan with learner journey map, main user paths, user-flow diagram and candidate user stories |
| Release plan | Javed | PR #24: product vision, goals, scope, milestones, risks and roles for the release |
| User stories on GitHub | Bator | Issues #11–#14: home page, Agile Coach role, quiz, chatbot |
| Netlify set up | Christian | Site created: mds-agile-coach.netlify.app |

**Not done:**

| Item | Reason |
|---|---|
| BOTSchool.ai chatbot set up | Needs a credit card (#9). Christian asked the teacher for academic access. |
| Meeting templates | Finished later, on 10 Nov |

---

# Sprint 1 — 3 Nov to 11 Nov 2026 ✅ Completed

## 3. 3 Nov 2026 — Sprint 1 Planning

| | |
|---|---|
| **Location** | In class, ISEC (Christian online) |
| **Time** | 20:30 – 22:30 |
| **Attendees** | Bator, Christian, Javed |

**Sprint Goal:** A learner can navigate topics, understand what an Agile Coach does, and tell the role apart from a Scrum Master and a manager.

**Sprint Backlog (in priority order):**

| # | User story | Priority |
|---|---|---|
| 1 | US-01 Introduction to Agile coaching | Must |
| 2 | US-02 Coach vs Scrum Master vs Manager | Must |
| 3 | US-06 Navigation | Must |
| 4 | US-03 Coaching stances | Should |
| 5 | US-04 Team scenario | Should |
| 6 | US-05 Quiz | Should |

**How we work:** no fixed owners. Each developer takes the next story in the list when free.

**Risk:** the chatbot (BOTSchool.ai) may not be available. It is kept out of Sprint 1.

## 4. 11 Nov 2026 — Sprint 1 Review

| | |
|---|---|
| **Location** | Remote |
| **Attendees** | Bator, Christian, Javed, Teacher |

**Sprint Goal met?** Partly. The website and content cover the goal, but most of it was merged in the last two days and is not yet deployed or fully checked against the Definition of Done.

**Done:**

| Work | By | Pull request / evidence |
|---|---|---|
| Website first version | Bator | PR #30 (10 Nov): React + Vite site with home page, navigation, learning paths, role comparison, coaching stances, conflict levels, quiz and full assessment |
| Design Thinking v2 | Javed | Commit on 9 Nov: updated Design Thinking document |
| Meeting minutes and Daily Scrum log | Javed | PRs #36, #37: minutes for Sprint 0 and Sprint 1, one Daily Scrum log for all sprints |
| Agile Coach role page content | Javed | PR #43 (11 Nov): text for the role page (responsibilities, team autonomy, Coach vs SM vs Manager, what the Scrum Guide says) |
| Four core articles | Javed | PR #46 (11 Nov): articles on coach identity, triad of roles, coaching stances, and conflict and facilitation |
| Articles in the website | Bator | PR #47 (11 Nov): articles catalog and article pages, learning progress tracking, navbar and quiz updates |
| Tests and README for the React site | Christian | PR #38 (written 10 Nov, merged 12 Nov 00:01): updated tests and README for the new website |
| Chatbot test set and training intents | Christian | PR #41 (written 10 Nov, merged 12 Nov 00:12): test questions with expected answers and training intents from the research (#29) |
| Research update on velocity | Christian | PR #48 (11 Nov): why velocity cannot be used to compare teams |

**User stories:**

| User story | Status |
|---|---|
| US-01 Introduction | First version done |
| US-02 Coach vs SM vs Manager | First version done |
| US-03 Coaching stances | First version done |
| US-04 Team scenario | Not started |
| US-05 Quiz | First version done |
| US-06 Navigation | First version done |

**Not done (moved to Sprint 2):**

| Item | Reason |
|---|---|
| US-04 Team scenario | No time |
| Chatbot | Still blocked (credit card, #9) |
| Netlify deployment of the new website | Not finished |
| Content check (proofreading) | Not finished |

**Teacher feedback:**
1. ____
2. ____

## 5. 11 Nov 2026 — Sprint 1 Retrospective

**Attendees:** Bator, Christian, Javed

**What went well 👍**
- Sprint 0 documents (DoD, research, release plan) were finished on time.
- Roles and tools were agreed quickly.
- The website covers most of the user stories.

**What didn't go well 👎**
- Little work was done between 4 and 8 Nov.
- Most work was merged on 10 and 11 Nov, so there was no time to test or deploy it.
- The chatbot blocker stayed open for the whole sprint.
- Minutes were written after the meetings, not during them.

**Actions for Sprint 2:**

| # | Action | Owner | How we check |
|---|---|---|---|
| 1 | Open a pull request in the same session you start a task | Everyone | SM checks open PRs at each Daily Scrum |
| 2 | Raise any blocker with the teacher the same day | Javed (SM) | Blocker list in the Daily Scrum log |

---

# Sprint 2 — 12 Nov to 17 Nov 2026

## 6. 12 Nov 2026 — Sprint 2 Planning

**Attendees:** Bator, Christian, Javed

**Sprint Goal:** ____
*(Suggestion: "A student can use the live website to learn about the Agile Coach role, practise with a team scenario and test their knowledge with a quiz.")*

**Sprint Backlog:**

| # | Item | Owner |
|---|---|---|
| 1 | Deploy the website to Netlify and test it | ____ |
| 2 | Content check (proofread role page and articles) | ____ |
| 3 | US-04 Team scenario | ____ |
| 4 | Fix bugs found in testing | ____ |
| 5 | Chatbot (only if #9 is solved) | Christian |
| 6 | Final presentation | Everyone |

**Rules for this sprint:**
- Open a pull request early (Retro action 1).
- Raise blockers the same day (Retro action 2).
- No new features in the last session, only fixes and the demo rehearsal.

## 7. 12 Nov 2026 — Sprint 2 Work Done

| Work | By | Pull request / evidence |
|---|---|---|
| Automatic tests on GitHub (CI) and navigation test fix | Bator | PR #49 (12 Nov): GitHub Actions workflow tests, type-checks and builds the site on every pull request and push to main; fixed the page-title (h1) navigation test |

## 8. ____ Nov 2026 — Sprint 2 Session

*To add.*

## 9. 17 Nov 2026 — Sprint 2 Review (final presentation)

*To add.*

## 10. 17 Nov 2026 — Sprint 2 Retrospective

*To add.*

---

**Approved by the team:**

| Name | Role | Approved |
|---|---|---|
| Bator Eshizhamsoev | Product Owner | ☐ |
| Christian Byemba | Developer | ☐ |
| Javed Iqbal | Scrum Master | ☐ |
