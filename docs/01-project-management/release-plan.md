# Release Plan — Agile Coach Learning Hub

**Project:** Agile Coach Learning Hub  
**Planning activity:** Release Planning (30 minutes)  
**Planning date:** 27 October 2026  
**Release period:** 27 October–17 November 2026  
**Product Owner:** Bator Eshizhamsoev  
**Scrum Master:** Javed Iqbal  
**Developers:** Bator Eshizhamsoev, Christian Byemba, Javed Iqbal  
**Client / acceptance authority:** Course teacher  
**Status:** Working release plan — proposed scope and priorities require Product Owner confirmation and should be updated with the decisions actually made during the 27 October session.

---

## 1. Product vision

The Agile Coach Learning Hub is an interactive educational website that helps students understand the Agile Coach role and learn how Agile coaches support teams through coaching principles, facilitation, team dynamics, conflict resolution, and continuous improvement.

The learning experience should explain concepts clearly and connect them to practical team situations so that learners can recognise and apply appropriate coaching behaviours.

## 2. Product purpose and target users

**Primary users:** Students and beginners studying Agile and software development methodologies who want to understand the Agile Coach role and how it differs from related roles.

**User needs identified in the project research:**
- Understand what an Agile Coach does and the purpose of the role.
- Distinguish an Agile Coach from a Scrum Master and a manager.
- Understand the four coaching stances: teacher, mentor, facilitator, and professional coach.
- Learn about facilitation, team dynamics, conflict resolution, and continuous improvement.
- Connect concepts to realistic team situations and check understanding.

## 3. Product goals

The release aims to:
1. Deliver a working, accessible and responsive educational website.
2. Present accurate, research-based learning content about Agile coaching.
3. Organise the content into clear learning topics and navigation paths.
4. Include at least one functional interactive learning activity, such as a quiz, self-assessment, or branching scenario, in line with the project Definition of Done.
5. Provide the planned BOTSchool.ai chatbot integration, subject to access and technical feasibility.
6. Deploy the accepted product to Netlify from the `main` branch.

## 4. Scope of the release

### 4.1 Planned in-scope capabilities

| Area | Planned capability | Educational basis |
|---|---|---|
| Home and navigation | Homepage introducing the learning hub and guiding learners to topics | Project README and user-path planning |
| Agile coaching fundamentals | Definition, purpose, responsibilities and autonomy | Research document, sections 1–2 |
| Role comparison | Agile Coach vs Scrum Master vs Manager | Research document, section 3 |
| Coaching principles | Four coaching stances and powerful questions | Research document, section 4 |
| Facilitation | Participatory decision-making and retrospective stages | Research document, section 5 |
| Team dynamics | Tuckman stages, psychological safety and self-management | Research document, section 6 |
| Conflict resolution | Five levels of conflict and suitable responses | Research document, section 7 |
| Continuous improvement | Retrospectives, small experiments and responsible use of metrics | Research document, section 8 |
| Interactive learning | Quiz, self-assessment or branching scenario | Research document, sections 9–10; Definition of Done |
| Chatbot | BOTSchool.ai chatbot using the Agile Coach research as its knowledge base | Research document, section 11; subject to access |

### 4.2 Out of scope for this release

Unless the Product Owner and teacher explicitly approve a change, this release does not include:
- A project-management or Scrum task-management application.
- Jira/Trello-style boards for website learners.
- User accounts, authentication, or learner profiles.
- Complex learning analytics or administrative dashboards.
- Features not connected to the educational purpose or the agreed assignment requirements.

## 5. Release approach and milestones

The assignment schedule defines two development sprints and a final submission milestone.

| Date | Milestone | Planned outcome |
|---|---|---|
| 27 October 2026 | Design Thinking, Release Planning and Sprint 1 Planning | Learner needs and user paths; release scope; Sprint 1 Goal and Sprint Backlog |
| 27 October–10 November 2026 | Sprint 1 | First increment of the educational website and priority learning functionality |
| 10 November 2026 | Sprint 1 Review and Retrospective; Sprint 2 Planning | Demonstrate the increment, collect teacher/client feedback, identify improvements and plan Sprint 2 |
| 10–17 November 2026 | Sprint 2 | Complete remaining agreed scope, integration, testing and deployment readiness |
| 17 November 2026 | Final Review and submission | Demonstrate the final product and submit required project evidence and report |

**Working-session constraint:** The assignment schedule specifies three working sessions of two hours for each sprint. The team should record the actual dates and attendance for all six sessions in its meeting records. The schedule identifies 3 November as the first Sprint 1 working session; confirm the dates of the other sessions with the course timetable rather than assuming them.

## 6. Sprint and release planning principles

- The Product Owner orders the Product Backlog and confirms the value and priority of proposed Product Backlog Items.
- The Scrum Team collaborates to establish a Sprint Goal during Sprint Planning.
- Developers select work for the Sprint Backlog and manage their plan for completing it.
- The Scrum Master facilitates Scrum events, helps the team understand Scrum, and supports the removal of impediments.
- Scope may be clarified and renegotiated with the Product Owner as learning and technical information emerge; quality expectations must not be reduced.
- Work is considered Done only when it satisfies the agreed Definition of Done.

## 7. Definition of Done and quality expectations

The project Definition of Done is documented in [`docs/definition-of-done.md`](../definition-of-done.md). Its current criteria include:
- Responsive and accessible behaviour across desktop, tablet and mobile.
- At least one fully functional interactive quiz, self-assessment, or branching scenario.
- Successful Netlify deployment from the `main` branch.
- BOTSchool.ai updated with the latest knowledge base and correctly answering the sprint test set.
- Code review and approval through a GitHub Pull Request before merging to `main`.
- Proofread and verified Agile coaching educational content.
- No critical bugs, broken links, or browser console errors.
- Product Owner verification against acceptance criteria and the GitHub Projects card moved to Done.

The Product Owner and Developers should review these criteria and clarify any ambiguity before treating a Product Backlog Item as Done. Any change to the agreed Definition of Done should be made transparently by the Scrum Team.

## 8. Dependencies, assumptions and risks

| Item | Type | Impact / response |
|---|---|---|
| BOTSchool.ai access and configuration | Dependency / risk | Access may require payment-card details even for a trial. The team should seek teacher guidance and assess an acceptable alternative if access cannot be obtained. |
| Research-based content | Dependency | Use `docs/02-research/agile-coach-research.md` as the content basis and verify content against its cited references. |
| Teacher feedback and acceptance | Dependency | Present increments during Sprint Reviews and record feedback and acceptance decisions. |
| Limited sprint duration | Risk | Prioritise a small, coherent learning experience; avoid adding unapproved features. |
| Integration and deployment | Risk | Integrate work regularly, review through pull requests, and verify the Netlify deployment before final submission. |
| Team capacity and session dates | Assumption to confirm | Record actual attendance, availability and the dates of all scheduled working sessions. |

## 9. Roles and responsibilities

| Role | Team member | Main responsibility in this project |
|---|---|---|
| Product Owner | Bator Eshizhamsoev | Clarifies product goals, orders the Product Backlog, and confirms acceptance of completed work. |
| Scrum Master | Javed Iqbal | Facilitates Scrum, supports the team, helps address impediments and maintains visibility of the process. |
| Developer | Bator Eshizhamsoev | Builds and tests the product as part of the Developers. |
| Developer | Christian Byemba | Builds and tests the product as part of the Developers. |
| Developer | Javed Iqbal | Contributes to product development as well as Scrum Master responsibilities. |
| Client / acceptance authority | Course teacher | Provides feedback and evaluates/accepts the academic deliverables. |

## 10. Tracking and communication

The team uses the GitHub Projects board as its shared view of work and status. The repository stores project artefacts and evidence, including planning records, research, meeting minutes, daily Scrum records, sprint backlogs and burndown charts.

The team should:
- Keep Product Backlog and Sprint Backlog items visible and up to date.
- Record Daily Scrum outcomes and impediments in the agreed documentation location.
- Update the sprint burndown using the team's actual remaining-work data at the agreed frequency.
- Use pull requests for review before merging code into `main`.
- Demonstrate the increment and collect feedback at each Sprint Review.
- Record retrospective improvement actions with owners and follow-up status.

## 11. Release acceptance

The release is ready for final submission when:
1. The agreed release scope has been implemented or any exclusions have been explicitly agreed with the Product Owner and teacher.
2. The product satisfies the project Definition of Done.
3. The latest accepted version is deployed and the Netlify URL is verified.
4. Educational content and interactive learning functionality have been tested.
5. The teacher/client has had an opportunity to review the final increment.
6. Required project evidence is complete: Design Thinking output, project plan, Product Backlog, Sprint Goals and Sprint Backlogs, burndown charts, Sprint Review and Retrospective minutes, product URL, final report, presentation and backlog-tool link.

## 12. Decisions to confirm from the 27 October Release Planning session

This document is a structured working release plan based on the project README, Agile Coach research, Definition of Done and assignment schedule. It does not claim that the following decisions were formally made unless the team confirms them:

- [ ] Final product vision approved by the Product Owner and team.
- [ ] Release scope and exclusions approved.
- [ ] Product Backlog items selected and ordered for each sprint.
- [ ] Release acceptance expectations agreed with the teacher/client.
- [ ] BOTSchool.ai access plan or fallback agreed.
- [ ] Dates of all six two-hour sprint working sessions confirmed.

**Record of actual session decisions:** Add the decisions, changes, participants and any teacher feedback from the 27 October meeting here before treating this document as the final meeting record.

---

## References and related project documents

- [Project README](../../README.md)
- [Agile Coach role research](../02-research/agile-coach-research.md)
- [Definition of Done](../definition-of-done.md)
- [Design Thinking user-path session](../03-design-thinking/design-thinking-session-user-paths.md)
- [GitHub Projects board](https://github.com/orgs/mds-coach-agile/projects/2/views/2)
