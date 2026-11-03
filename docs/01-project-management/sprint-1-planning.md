# Sprint 1 Planning

**Project:** Agile Coach Learning Hub  
**Sprint:** Sprint 1  
**Sprint period:** 27 October – 10 November 2026  
**Planning session:** 27 October 2026 (scheduled in the project timetable)  
**Sprint Review:** 10 November 2026  
**Product Owner:** Bator Eshizhamsoev  
**Scrum Master:** Javed Iqbal  
**Developers:** Bator Eshizhamsoev, Christian Byemba, Javed Iqbal  
**Client / acceptance authority:** Course teacher  

> **Record status:** Planning document prepared from the available project evidence. The proposed Sprint Goal and scope below must be confirmed against what the team actually agreed on 27 October. Do not treat suggested scope, estimates, assignments, or capacity as approved decisions until the team validates them.

---

## 1. Purpose

Sprint Planning establishes why the Sprint is valuable, what work can be selected for the Sprint, and how the Developers intend to deliver the selected work.

The team uses this document to record the Sprint Goal, selected Product Backlog Items, delivery approach, dependencies, and planning decisions.

## 2. Product context

The Agile Coach Learning Hub is an interactive educational website. It teaches students about the Agile Coach role, how it differs from a Scrum Master and a manager, and how coaching principles can be applied in team situations.

The project README identifies the educational scope as Agile coaching, coaching principles, facilitation, team dynamics, conflict resolution, and continuous improvement. The research document provides the evidence base for the Agile Coach role, role comparison, four coaching stances, facilitation, team dynamics, conflict resolution, continuous improvement, scenarios, and quiz content.

The product is an educational website, not a project-management application.

## 3. Proposed Sprint Goal — requires team confirmation

**Proposed goal:**

> Deliver the first usable learning experience of the Agile Coach Learning Hub: provide students with a clear entry point, explain what an Agile Coach does and how the role differs from a Scrum Master and a manager, and let students check their understanding through a short interactive quiz.

This goal is intentionally focused on a coherent learning journey:

1. A student arrives at the home page and can find the learning content.
2. The student learns the Agile Coach role and its differences from related roles.
3. The student checks their understanding using a quiz.

**Team-approved Sprint Goal:** [Record the exact wording agreed by the Scrum Team.]

**Why this Sprint is valuable:** [Record the value agreed by the Product Owner and Scrum Team.]

## 4. Product Backlog Items considered for Sprint 1

The following open GitHub issues were visible when this document was prepared. Their inclusion here is a proposed planning baseline, not proof that they were selected during the 27 October meeting.

| Issue | Product Backlog Item | User value / outcome | Current evidence |
|---|---|---|---|
| [#11 — US-02](https://github.com/mds-coach-agile/agile-coach/issues/11) | Home page and navigation | Students can understand the site's purpose and find learning modules and the quiz. | Open; assigned to Javed Iqbal |
| [#12 — US-03](https://github.com/mds-coach-agile/agile-coach/issues/12) | What is an Agile Coach (vs Scrum Master & Manager) | Students can explain the Agile Coach role and distinguish it from related roles. | Open; no assignee recorded |
| [#13 — US-04](https://github.com/mds-coach-agile/agile-coach/issues/13) | Knowledge quiz with score and feedback | Students can test their understanding and receive immediate feedback. | Open; no assignee recorded |
| [#14 — US-05](https://github.com/mds-coach-agile/agile-coach/issues/14) | AI chatbot trained on research (BOTSchool.ai) | Students can ask questions about the Agile Coach role and receive relevant answers. | Open; no assignee recorded; integration dependency exists |

### Proposed selection approach

- Treat US-02, US-03, and US-04 as the core learning path candidate.
- Treat US-05 as conditional on access to BOTSchool.ai web integration and the team's available capacity.
- The Product Owner orders the Product Backlog. The Developers select the amount of work they believe they can complete.
- The Scrum Team must confirm the actual selected items and any changes to scope.

**Actual Sprint 1 selected items:** [Confirm from the Sprint 1 Planning meeting / GitHub Projects Sprint Backlog.]

## 5. User Story acceptance criteria

Use the acceptance criteria already recorded in the GitHub issues. Do not replace them with this summary.

### US-02 — Home page and navigation

Issue: [#11](https://github.com/mds-coach-agile/agile-coach/issues/11)

- Home page explains the site's purpose clearly in 2–3 sentences.
- Navigation menu links to every available module and the quiz.
- Menu is accessible via keyboard navigation.
- Layout is fully responsive and functions properly on mobile screens down to 375px width.

### US-03 — What is an Agile Coach?

Issue: [#12](https://github.com/mds-coach-agile/agile-coach/issues/12)

- Page defines the Agile Coach role and lists key activities based on the research.
- Comparison table covers Scope, Framework, Authority, and Main Goal across Agile Coach, Scrum Master, and Manager.
- Page explicitly notes that the Scrum Guide 2020 does not define an “Agile Coach” role.
- References and sources are cited directly on the page.

### US-04 — Knowledge quiz

Issue: [#13](https://github.com/mds-coach-agile/agile-coach/issues/13)

- At least 8 questions based on US-03 content and common misconceptions.
- Each question gives immediate correct/incorrect feedback with a one-line explanation.
- Final score is calculated and displayed on completion.
- User can restart the quiz at any time.

### US-05 — AI chatbot (conditional)

Issue: [#14](https://github.com/mds-coach-agile/agile-coach/issues/14)

- BOTSchool.ai “Agile Coach” chatbot is configured using `agile-coach-research.md`.
- A test set of at least 10 questions with expected answers is committed to the repository.
- Bot correctly answers all test questions and results are recorded for Sprint Review.
- Bot gracefully declines out-of-scope questions.

## 6. Dependencies and impediments

### BOTSchool.ai web integration

Issue: [#9 — Get BOTSchool web integration access](https://github.com/mds-coach-agile/agile-coach/issues/9)

The issue records that BOTSchool.ai's free trial requests credit card details before enabling web integration. Christian Byemba asked the teacher on 3 November whether academic access is available.

**Impact:** The issue states that this blocks showing the chatbot on the website, which is required by the current Definition of Done.

**Follow-up:**
- Confirm whether the teacher can provide academic access.
- Do not assume the blocker is resolved until access is verified.
- If access is unavailable, raise the impact and options with the Product Owner and teacher/client. Any change to the agreed scope or acceptance requirements must be explicitly agreed; do not silently waive the Definition of Done.

Other dependencies identified:
- US-03 content must be grounded in the team's research document.
- US-04 quiz questions depend on the approved US-03 content and research.
- Navigation should link only to modules that are available; avoid broken or misleading links.

## 7. Team roles and responsibilities

| Role | Person | Planning responsibility |
|---|---|---|
| Product Owner | Bator Eshizhamsoev | Explain product value, clarify backlog items, order the Product Backlog, and confirm acceptance criteria. |
| Scrum Master | Javed Iqbal | Facilitate Sprint Planning, help the team understand the purpose and process, surface impediments, and support effective Scrum events. |
| Developer | Bator Eshizhamsoev | Collaborate with the Developers to select and plan work; contribute to the Increment. |
| Developer | Christian Byemba | Collaborate with the Developers to select and plan work; contribute to the Increment; follow up on the BOTSchool access issue. |
| Developer | Javed Iqbal | Collaborate with the Developers to select and plan work; contribute to the Increment in addition to Scrum Master responsibilities. |

The Developers collectively own the Sprint Backlog and decide how to turn selected Product Backlog Items into a usable Increment. The Scrum Master does not assign implementation tasks on behalf of the Developers.

## 8. Sprint Backlog and delivery plan

The Sprint Backlog consists of the Sprint Goal, the selected Product Backlog Items, and an actionable plan created by the Developers.

Record the actual work breakdown in GitHub Projects and link the relevant cards here.

| Selected item / task | Developer owner(s) | Status at planning | Estimate / effort | Notes |
|---|---|---|---|---|
| US-02 — Home page and navigation | Javed (issue assignee; confirm team plan) | To confirm | [Team estimate] | [Break down implementation and tests] |
| US-03 — Agile Coach role page | [Developers to agree] | To confirm | [Team estimate] | Depends on research-backed content |
| US-04 — Knowledge quiz | [Developers to agree] | To confirm | [Team estimate] | Depends on US-03 content |
| US-05 — BOTSchool chatbot | [Developers to agree] | To confirm | [Team estimate] | Conditional on web integration access |
| Integration and acceptance testing | Developers collectively | To confirm | [Team estimate] | Test against issue criteria and DoD |

**Important:** No estimates, task-level assignments, or capacity figures are asserted here because the actual planning decisions were not available in the inspected records.

### Capacity and availability

- Sprint duration: 27 October – 10 November 2026.
- Scheduled development working sessions: three sessions of two hours each, according to the course timetable.
- Actual attendance and individual availability: [Record].
- Team capacity / estimates: [Record the values agreed by the Developers].

Do not infer individual capacity from the timetable alone.

## 9. Definition of Done

The project DoD is recorded in [`docs/definition-of-done.md`](../definition-of-done.md).

It includes:
- Responsive and accessible web application across desktop, tablet, and mobile.
- At least one fully functional interactive quiz, self-assessment, or branching scenario.
- Latest code deployed to Netlify from the main GitHub branch.
- BOTSchool.ai chatbot updated with the knowledge base and passing the sprint test set.
- Code review and approval through a GitHub Pull Request before merging into `main`.
- Educational content proofread and verified.
- No critical bugs, broken links, or browser console errors.
- Product Owner verification against acceptance criteria.
- GitHub Projects card moved to Done.

The Scrum Team should apply the agreed DoD consistently. If the DoD changes, record the decision and its approval; do not weaken it informally to make work appear complete.

## 10. Events and working agreements

### Sprint events in the project timetable

| Date | Event / activity | Timebox |
|---|---|---:|
| 27 October 2026 | Design Thinking | 60 minutes |
| 27 October 2026 | Release Planning | 30 minutes |
| 27 October 2026 | Sprint 1 Planning | 30 minutes |
| During Sprint 1 | Daily Scrum | 15 minutes per event |
| 10 November 2026 | Sprint Review and Demo | 15 minutes per team, per course timetable |
| 10 November 2026 | Sprint Retrospective | 10 minutes |

The course timetable specifies three two-hour working sessions during each sprint. Confirm the dates and times of all sessions with the team/teacher and record attendance.

### Working agreements to confirm

- Use GitHub Projects as the team's shared task board.
- Keep issue status current and make impediments visible.
- Discuss progress and coordination at the Daily Scrum.
- Create feature branches and submit Pull Requests for review before merging.
- Do not push directly to `main`.
- Keep research-backed educational content traceable to its sources.
- Record decisions, review feedback, and retrospective actions.

**Agreed working agreements:** [Confirm with the Scrum Team.]

## 11. Risks

| Risk | Impact | Response / owner |
|---|---|---|
| BOTSchool.ai web access requires a credit card | Chatbot may not be embeddable; current DoD includes chatbot integration | Christian follows up with teacher; Product Owner and teacher decide next steps if access remains unavailable |
| Unassigned Product Backlog Items | Unclear ownership and coordination | Developers agree implementation approach and record ownership in GitHub Projects |
| US-04 depends on US-03 content | Quiz content may be delayed or inconsistent | Align questions and explanations with approved research-backed content |
| Scope exceeds team capacity | Sprint Goal may be at risk | Developers forecast based on capacity; Product Owner and Developers negotiate scope without compromising the Sprint Goal |
| Incomplete testing or deployment | Work may fail the Definition of Done | Reserve time for integration, testing, review, and deployment |

## 12. Sprint 1 Planning decisions and meeting record

Complete this section using the actual decisions made during the 27 October session.

- **Actual meeting date/time:** [Record]
- **Participants present:** [Record]
- **Sprint Goal approved:** [Yes / No; record exact wording]
- **Sprint Goal rationale:** [Record]
- **Selected Product Backlog Items:** [Record issue IDs]
- **Items not selected and reasons:** [Record]
- **Team estimates / forecast:** [Record]
- **Developer capacity and availability:** [Record]
- **Dependencies and risks discussed:** [Record]
- **Working agreements confirmed:** [Record]
- **Open questions:** [Record]
- **Teacher/client feedback:** [Record, if any]

### Action log

| Action | Owner | Due date | Status |
|---|---|---|---|
| Confirm Sprint Goal wording and selected items | Product Owner + Developers | 27 October / confirm actual | Pending confirmation |
| Record estimates and capacity | Developers | 27 October / confirm actual | Pending confirmation |
| Update GitHub Projects Sprint Backlog | Developers, supported by Scrum Master | After planning | Pending confirmation |
| Follow up on BOTSchool.ai access | Christian Byemba | Follow-up recorded 3 November | In progress / verify current status |
| Confirm session attendance and planning notes | Scrum Master | As soon as possible | Pending |

## 13. Sprint Planning completion checklist

- [ ] Product Owner explained the value and objective of the Sprint.
- [ ] Scrum Team agreed a Sprint Goal.
- [ ] Developers selected Product Backlog Items for the Sprint.
- [ ] Selected items were sufficiently understood and refined.
- [ ] Developers forecasted the work based on capacity.
- [ ] Developers created an actionable plan in the Sprint Backlog.
- [ ] Dependencies and impediments were made visible.
- [ ] Sprint Backlog was updated in GitHub Projects.
- [ ] Planning decisions and participants were recorded.

## 14. References

- [Project README](../../README.md)
- [Definition of Done](../definition-of-done.md)
- [Agile Coach research](../02-research/agile-coach-research.md)
- [US-02 — Home page and navigation](https://github.com/mds-coach-agile/agile-coach/issues/11)
- [US-03 — What is an Agile Coach](https://github.com/mds-coach-agile/agile-coach/issues/12)
- [US-04 — Knowledge quiz](https://github.com/mds-coach-agile/agile-coach/issues/13)
- [US-05 — AI chatbot](https://github.com/mds-coach-agile/agile-coach/issues/14)
- [BOTSchool.ai access impediment](https://github.com/mds-coach-agile/agile-coach/issues/9)

---

**Document owner:** Scrum Master — Javed Iqbal  
**Review:** Product Owner and Developers  
**Status:** Draft pending confirmation of the actual 27 October planning decisions
