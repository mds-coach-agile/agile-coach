# Meeting Minutes — Agile Coach Learning Hub

**Course:** Software Development Methodologies — ISEC
**Team:** Bator Eshizhamsoev (Product Owner / Developer) · Christian Byemba (Developer) · Javed Iqbal (Scrum Master / Developer)
**Client:** Course teacher
**Minutes recorded by:** Javed Iqbal (Scrum Master)

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
1. **Website improvements:** Make the website simpler, more user-friendly, and easier to understand and navigate.
2. **Velocity and estimation:** discussed the importance of story point estimation and team velocity in project planning and sprint management.

## 5. 11 Nov 2026 — Sprint 1 Retrospective

| | |
|---|---|
| **Team** | P1 – Tuesday |
| **Facilitator** | Javed Iqbal (Scrum Master) |
| **Attendees** | Javed Iqbal (Scrum Master / Developer), Bator Eshizhamsoev (Product Owner / Developer), Christian Byemba (Developer) |

**1. What went well? 👍**
- The team worked to complete their tasks.
- Delivered a full React + TypeScript + Tailwind single-page website with 4 core learning modules and an interactive quiz (PR #30, PR #47).
- Checked all AI-assisted research and content against primary academic sources (PR #8, PR #41, PR #46, PR #48).

**2. What didn't go well? 👎**
- **Large pull request and out-of-date tests.** User stories #26, #27 and #28 were merged together in one large pull request (PR #30). It replaced the first HTML skeleton with React and broke 3 of the 5 smoke tests (fixed later in PR #38). After the article pages were merged in PR #47, an `<h1>` count test failed (fixed in PR #49).
- **GitHub Projects board and meeting logs updated late.** Early session minutes were written up in Markdown late. Process tasks and PRs were mixed with product stories on the board (no `is:issue` filter). PRs were linked in the Development field only at the end of the sprint.

**3. What should we improve? 💡**
- Keep pull requests small and limited to a single issue.
- Fill in `daily-scrum-log.md` during each session, not at the end of the sprint.

**4. Action items for Sprint 2:**

| # | Action | Responsible person |
|---|---|---|
| 1 | Keep each pull request small and linked to one issue | Everyone |
| 2 | Fill in the Daily Scrum log during each session | Javed (SM) |

**5. Final team agreement:** the team agreed to apply both improvements in Sprint 2.

---

# Sprint 2 — 12 Nov to 17 Nov 2026

## 6. 12 Nov 2026 — Sprint 2 Planning

**Attendees:** Bator, Christian, Javed

**Sprint Goal:** A student can use the live website to learn about the Agile Coach role, practise with a team scenario and test their knowledge with a quiz.

**Sprint Backlog:**

| # | Item | Owner |
|---|---|---|
| 1 | Deploy the website to Netlify and test it | Christian |
| 2 | Content check (proofread role page and articles) | Javed |
| 3 | US-04 Team scenario (#39) | Bator |
| 4 | Fix bugs found in testing | Bator |
| 5 | Chatbot: run the test set and fix weak answers (#9 solved on 11 Nov) | Christian |
| 6 | Final presentation | Everyone |

**Rules for this sprint:**
- Keep each pull request small and linked to one issue (Retro action 1).
- Fill in the Daily Scrum log during each session (Retro action 2).
- No new features in the last session, only fixes and the demo rehearsal.

## 7. 12 Nov 2026 — Sprint 2 Work Done

| Work | By | Pull request / evidence |
|---|---|---|
| Automatic tests on GitHub (CI) and navigation test fix | Bator | PR #49 (12 Nov): GitHub Actions workflow tests, type-checks and builds the site on every pull request and push to main; fixed the page-title (h1) navigation test |
| US-04 Realistic team conflict resolution simulator | Bator | PR #52 (12 Nov, fixes #39): five team conflict scenarios as an interactive simulator on the home page, with content tests |
| GitHub Projects backlog cleanup | Bator, Javed | Issues #50 (US-02 role comparison) and #51 (US-03 coaching stances) added and closed as done by Bator; #53 process issue for the meeting minutes opened by Javed |
| Chatbot test runs 1–3 | Christian | PR #55 (12 Nov, refs #29): run 1 passed 12/14, run 2 13/14, run 3 12/14; Q10 fixed, Q1 and Q3 still vary between runs |
| Research fix for chatbot Q1 and Q3 | Christian | PR #56 (12 Nov, refs #29): research now states that the Agile Coach has no formal authority (section 2) and where the role comes from (section 10) |
| Meeting minutes and Daily Scrum log | Javed | PR #54 (12 Nov, refs #53): minutes for Sprint 0 to Sprint 2 Planning, teacher feedback and Sprint 1 Retrospective; PR #57 (12 Nov): Daily Scrum log filled in for 10–12 Nov |

## 8. 13 Nov 2026 — Sprint 2 Work Done

| Work | By | Pull request / evidence |
|---|---|---|
| Simpler website UI and clearer navigation | Bator | Branch `feature/issue-58-simplify-ui-and-navigation` (fixes #58), merged on 14 Nov as PR #64: 3-step learning path on the home page, fewer main buttons, "next step" links at the end of each learning section, clearer quiz heading, fixed duplicate navigation, nested `<main>` tags and duplicate `id` |
| Practice page for the simulator and quiz | Bator | Same branch: conflict simulator and quiz moved off the home page to `#/practice`, with subpages `#/practice/conflict` and `#/practice/quiz`, breadcrumbs and a "Practice & Quiz" tab in the navbar |
| Chatbot test runs 4 and 5 | Christian | Commit on 13 Nov, merged on 15 Nov as PR #69 (refs #29): both runs 13/14, Q3 now passes, only Q1 left. Cause: the knowledge collection held an older copy of the research without the #56 fix; replaced with the current `main` version. From about 19:20 the BOTSchool playground stopped replying, so run 6 could not be done |

This answers teacher feedback 1 from the Sprint 1 Review (make the website simpler and easier to navigate).

**Still open in the Sprint Backlog:** Netlify deployment and testing (Christian), content check (Javed), chatbot Q1 and run 6 (Christian), final presentation (everyone).

## 9. 14 Nov 2026 — Sprint 2 Work Done

| Work | By | Pull request / evidence |
|---|---|---|
| Simpler website and Practice page merged | Bator | PR #64 (14 Nov, fixes #58): the 13 Nov work is now on main |
| Meeting minutes and Daily Scrum log for 13 Nov | Javed | PR #65 (14 Nov, refs #53) |
| Content check (proofreading) of the website | Javed; reviewed and merged by Christian | PR #66 (14 Nov, refs #60): fixed factual errors (Scrum Master scope, velocity as a success metric), false claims ("certification", "20+ scenarios"), Scrum Guide 2020 terms, missing references (Adkins & Blake 2009, Sinha 2019), a broken quiz hint and reading times; removed internal references from the articles |
| BOTSchool playground outage investigated | Christian | Issue #29: on a separate test agent, any guardrail switched on blocks every reply, and with guardrails off the knowledge search fails, although AI Health reports "All checks passed" (recorded in PR #69) |

**Still open in the Sprint Backlog:**
- Netlify deployment and testing (Christian)
- Chatbot run 6 once the BOTSchool playground works again (Christian, #29, blocked by the outage)
- Check the Adkins & Blake (2009) quotes and Adkins (2010) chapter 9 against the originals (content check follow-up)
- Home page hero text: "Project Manager" and "practise" (content check follow-up)
- Final presentation (everyone)

## 10. 15 Nov 2026 — Sprint 2 Work Done

| Work | By | Pull request / evidence |
|---|---|---|
| Meeting minutes and Daily Scrum log for 13 and 14 Nov | Javed; merged by Bator | PR #67 (15 Nov, refs #53) |
| Chatbot rebuilt as "Agile Coach assistant 2" and test run 6 | Christian; merged by Javed | PR #69 (15 Nov, refs #29): same persona and instructions, the research document in the prompt instead of the search tool, guardrails off until BOTSchool fixes them, model Claude Sonnet 5. Run 6: **14/14** (Q1 now passes) |
| Chatbot widget embedded on the site | Christian; merged by Javed | PR #68 (15 Nov, refs #61, #29): the web chat of the published agent "Agile Coach assistant 2" is loaded in `index.html`. The chat only opens on websites allowed in the BOTSchool channel settings |

**Note:** the guardrails stay off while the BOTSchool platform bug lasts. They must be switched back on, with a new test run, once BOTSchool fixes them. The prompt must be updated by hand whenever the research document changes.

**Still open in the Sprint Backlog:**
- Netlify deployment and testing (Christian); add the Netlify address to the allowed websites of the chatbot channel, then test the widget on the live site (#61)
- Check the Adkins & Blake (2009) quotes and Adkins (2010) chapter 9 against the originals (content check follow-up)
- Home page hero text: "Project Manager" and "practise" (content check follow-up)
- Final presentation (everyone)

## 11. 17 Nov 2026 — Sprint 2 Review (final presentation)

*To add.*

## 12. 17 Nov 2026 — Sprint 2 Retrospective

*To add.*

---

**Approved by the team:**

| Name | Role | Approved |
|---|---|---|
| Bator Eshizhamsoev | Product Owner | ☐ |
| Christian Byemba | Developer | ☐ |
| Javed Iqbal | Scrum Master | ☐ |
