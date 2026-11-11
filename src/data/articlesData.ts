/**
 * Full educational articles data for Agile Coach Learning Hub.
 * Based on research in docs/research/agile-coach-research.md
 * and content in feature/issue-31-core-articles.
 */

export interface ArticleReference {
  citation: string;
  url?: string;
  isFree?: boolean;
}

export interface ArticleData {
  id: string;
  module: string;
  title: string;
  subtitle: string;
  readingTime: string;
  sources: string[];
  keyTakeaways: string[];
  summary: string;
  contentMarkdown: string;
  checkYourUnderstanding: string[];
  references: ArticleReference[];
}

export const ARTICLES_DATA: ArticleData[] = [
  {
    id: 'fundamentals',
    module: '01',
    title: 'The Agile Coach Identity',
    subtitle: 'Beyond the Scrum Master title',
    readingTime: '6 min read',
    sources: [
      'Adkins 2010',
      'Davies & Sedley 2009',
      'Spayd & Adkins 2011',
      'Schwaber & Sutherland 2020',
      'Appelo 2011',
      'Edmondson 1999',
      'Tuckman 1965',
    ],
    summary:
      'Understand the mandate of an Agile Coach: developing self-sufficient, high-performing teams through mindset transformation and systemic awareness without hierarchical authority.',
    keyTakeaways: [
      'An Agile Coach helps teams and organisations work in an agile way and keep improving on their own (Adkins, 2010).',
      'The coach is a catalyst, not a manager: no authority over people, no assigning work, no doing the team’s job.',
      'The coach looks at the whole system around the team, not only at what happens inside the sprint.',
      'Success means the team no longer needs its coach (Adkins, 2010).',
    ],
    contentMarkdown: `## 1. What an Agile Coach is

An Agile Coach helps people find better ways of working, then steps back so the team becomes autonomous (Adkins, 2010). Davies and Sedley describe the coach as someone who helps a team adopt and improve agile practices by working *alongside* it, not by imposing them (Davies & Sedley, 2009).

In a normal week, a coach might:
- Teach agile principles and practices (Scrum, Kanban, XP) when the team does not know them yet;
- Facilitate events and workshops so the group reaches its own decisions;
- Mentor Scrum Masters, Product Owners and managers who are learning their role;
- Ask open questions so people find their own answers;
- Observe the team and give feedback;
- Work with leaders to remove obstacles outside the team's control.

These activities match the four coaching stances of the Agile Coaching Institute: teacher, mentor, facilitator and professional coach (Spayd & Adkins, 2011). Module 03 explains each one in depth.

---

## 2. Catalyst, not manager

In chemistry, a catalyst makes a reaction happen faster without being used up by it. That is a useful picture of the coach: the coach helps change happen in the team, but the change belongs to the team.

A manager and a coach can work with the same team, but they hold very different positions:

| Aspect | Manager | Agile Coach |
| :--- | :--- | :--- |
| **Authority over people** | Hierarchical | None: influences and supports |
| **Responsible for** | Results and people management | Teams that improve on their own |
| **Typical move** | Decides, assigns, follows up | Asks, facilitates, makes patterns visible |

*Source: research document, section 3 (Adkins, 2010; Schwaber & Sutherland, 2020).*

> **In short:** A manager is responsible for getting results *through* the team. A coach is responsible for helping the team become able to get results *by itself*.

---

## 3. Why the coach has no authority, on purpose

Having no hierarchical authority is not a weakness of the role. It is what makes the role work.

1. **Self-management needs space.** The Scrum Guide describes Scrum Teams as "self-managing, meaning they internally decide who does what, when, and how" (Schwaber & Sutherland, 2020). If the coach decided for the team, the team would never learn to decide.
2. **People speak more openly to someone who does not judge their performance.** Retrospectives and experiments only work when people feel safe to speak (Edmondson, 1999; see Module 04).
3. **Influence lasts longer than orders.** A team that found its own solution keeps using it when the coach leaves (Adkins, 2010).

A common misconception is *"the Agile Coach is the team's boss"*. It is completely wrong: the coach has zero hierarchical authority (research document, section 10).

---

## 4. A systemic perspective

Many problems a team experiences do not originate inside the team. A coach therefore looks at the **system** the team works in: other teams, leaders, processes, incentives, and organizational rules.

**Example:** A team keeps missing its Sprint Goal. Looking only inside the sprint, you might blame developer estimates. Looking at the system, the coach may notice that urgent requests from another department arrive every week without going through the Product Owner. That obstacle is outside the team's control, so the coach works with organizational leadership to remove it (research document, section 2).

Appelo makes a similar point for managers in an agile organisation: they should *"manage the system, not the people"* (Appelo, 2011). The coach helps leaders do exactly that.

---

## 5. The goal: a team that no longer needs its coach

Adkins describes the ultimate aim of coaching as a team that no longer needs its coach (Adkins, 2010). In practice, the coach's posture changes dynamically as the team matures:

| Team Situation | Primary Stance | What the coach does more of |
| :--- | :--- | :--- |
| **New team, new to agile** | Teacher | Short trainings on events and artifacts, then stepping back |
| **Team in conflict, finding its way** | Facilitator | Helping the team talk, reflect and create working agreements |
| **Experienced, high-performing team** | Professional Coach | Asking powerful questions, letting the team lead |

*Source: research document, sections 6 and 9 (Tuckman, 1965; Adkins, 2010).*

---

## Practical Example: A new team that does not know Scrum

**Situation:** A newly assembled team has been told to "do Scrum", but nobody has used it before.

**What the coach does:**
1. Runs an interactive workshop on Scrum events and artifacts (Teacher stance).
2. Facilitates the first Sprint Planning and Retrospective so the team experiences the cadence.
3. Over the next sprints, steps back: the Scrum Master facilitates, and the coach observes and gives feedback.
4. After a few sprints, the coach asks the team: *"What would you like to change in how you work?"* and lets the team decide.

**What the coach does NOT do:** Run every ceremony forever, micro-assign tasks, or dictate how the team should work.`,
    checkYourUnderstanding: [
      'Name two things an Agile Coach does NOT do.',
      'Why is the absence of hierarchical authority an essential asset for the coach?',
      'Give an example of an obstacle that is outside the team’s direct control.',
    ],
    references: [
      { citation: 'Adkins, L. (2010). Coaching Agile Teams: A Companion for ScrumMasters, Agile Coaches, and Project Managers in Transition. Addison-Wesley.' },
      { citation: 'Appelo, J. (2011). Management 3.0: Leading Agile Developers, Developing Agile Leaders. Addison-Wesley.' },
      { citation: 'Davies, R. & Sedley, L. (2009). Agile Coaching. The Pragmatic Bookshelf.' },
      { citation: 'Edmondson, A. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383.' },
      { citation: 'Schwaber, K. & Sutherland, J. (2020). The Scrum Guide.', url: 'https://scrumguides.org/scrum-guide.html', isFree: true },
      { citation: 'Spayd, M. K. & Adkins, L. (2011). Developing Great Agile Coaches: Towards a Framework of Agile Coaching Competency. Agile Coaching Institute.' },
      { citation: 'Tuckman, B. W. (1965). Developmental sequence in small groups. Psychological Bulletin, 63(6), 384–399.' },
    ],
  },
  {
    id: 'role-boundaries',
    module: '02',
    title: 'Triad of Roles: Coach, SM & PM',
    subtitle: 'Clarifying overlaps & borders',
    readingTime: '6 min read',
    sources: [
      'Adkins 2010',
      'Schwaber & Sutherland 2020',
      'Appelo 2011',
      'Cohn 2005',
    ],
    summary:
      'Map out the complementary differences between an Agile Coach, a Scrum Master, and a Project/Delivery Manager to eliminate boundary friction.',
    keyTakeaways: [
      'The Scrum Master is an accountability defined by Scrum, for one Scrum Team (Schwaber & Sutherland, 2020).',
      'The Agile Coach works with any agile approach, often across several teams or the whole organisation.',
      'The Project/Delivery Manager has formal or hierarchical authority and is responsible for project milestones and budgets.',
      'In a crisis: the manager decides, the Scrum Master clears impediments, and the coach helps the team solve and learn.',
    ],
    contentMarkdown: `## 1. Why these roles get confused

- **Coaching overlap:** A Scrum Master uses coaching skills every day. The Scrum Guide lists *"Coaching the team members in self-management and cross-functionality"* as one of the ways the Scrum Master serves the team (Schwaber & Sutherland, 2020).
- **Job title inflation:** Many companies give experienced Scrum Masters the job title "Agile Coach", even when their day-to-day focus remains on a single team.
- **Shared commitment:** All three roles care about delivery, so from the outside they can appear identical. The crucial difference is **how** each one acts and **what authority** it wields.

---

## 2. The Comprehensive Comparison Matrix

| Dimension | Agile Coach | Scrum Master | Project / Delivery Manager |
| :--- | :--- | :--- | :--- |
| **Scope** | Several teams, leadership, systemic culture | 1–2 dedicated Scrum or Kanban teams | Specific project, budget, timeline, scope |
| **Framework** | Any agile/lean methodology | Scrum framework adherence | Any delivery model (often hybrid) |
| **Authority style** | Pure influence & psychological safety (no formal power) | Process & servant leadership within team | Direct management authority or structural power |
| **Primary focus** | Long-term capability building, team autonomy | Delivery flow, sprint health, ceremony facilitation | Timeline adherence, budget, risk mitigation |
| **Crisis response** | Helps the team handle it and learn from it | Clears blockers and protects sprint focus | Re-allocates resources, reduces scope, arbitrates |

> **Note on the Manager role:** The Scrum Guide defines only three accountabilities: *the Developers, the Product Owner, and the Scrum Master* (Schwaber & Sutherland, 2020). There is no Project Manager in Scrum. In real organisations, Delivery Managers manage budgets and contracts while Scrum Teams manage execution.

---

## 3. One sentence per role

- **Scrum Master:** Accountable for establishing Scrum as defined in the Scrum Guide and for the Scrum Team's effectiveness (Schwaber & Sutherland, 2020).
- **Agile Coach:** Helps teams and organisations work in an agile way and keep improving on their own, without authority over people (Adkins, 2010).
- **Project/Delivery Manager:** Responsible for delivery outcomes through formal authority. In modern agile setups, they *"manage the system, not the people"* (Appelo, 2011).

---

## 4. Crisis handling: Who owns what?

**The Scenario:** Two days before an important release, the team discovers a critical architectural defect. Stakeholders are panicking and developers are burning out.

| Role | What this role does | Underlying rationale |
| :--- | :--- | :--- |
| **Project / Delivery Manager** | Decides whether to delay the release or cut scope, reallocates emergency budget, and handles executive communication. | Has structural accountability over milestones and resources. |
| **Scrum Master** | Removes blockers preventing the fix (e.g. provisioning urgent sandbox environments) and protects developers from stakeholder noise. | Serves the team by clearing impediments to sprint focus. |
| **Agile Coach** | Facilitates a rapid options-generation session (*"What choices do we have right now?"*). Post-crisis, leads a deep-dive retrospective on root causes. | Never takes over authority; builds team resilience and long-term learning. |

> **The key difference:** In a crisis, the manager acts **for** the team, the Scrum Master acts **around** the team (clearing the runway), and the coach acts **with** the team (fostering reflection and decision capability).

---

## 5. Typical Situations and Coaching Responses

| Situation | Good Coaching Response | Stance |
| :--- | :--- | :--- |
| **Product Owner dictates technical tasks** | 1-on-1 coaching on self-management; propose a 1-sprint experiment where developers pull tasks. | Mentor, Coach |
| **Manager ranks teams by velocity** | Explain why velocity is a local estimation tool, not an productivity benchmark (Cohn, 2005); propose flow metrics like cycle time. | Teacher, Coach |
| **Daily Scrum lasts 45 minutes** | Make time waste visible; prompt team in retrospective to redesign standup; reinforce 15-minute timebox. | Facilitator, Teacher |`,
    checkYourUnderstanding: [
      'Which of the three roles is explicitly defined in the Scrum Guide?',
      'In an emergency release crisis, who decides whether to postpone the deployment date?',
      'Why should velocity never be used to compare two different development teams?',
    ],
    references: [
      { citation: 'Adkins, L. (2010). Coaching Agile Teams. Addison-Wesley.' },
      { citation: 'Appelo, J. (2011). Management 3.0: Leading Agile Developers. Addison-Wesley.' },
      { citation: 'Cohn, M. (2005). Agile Estimating and Planning. Prentice Hall.' },
      { citation: 'Schwaber, K. & Sutherland, J. (2020). The Scrum Guide.', url: 'https://scrumguides.org/scrum-guide.html', isFree: true },
    ],
  },
  {
    id: 'stances',
    module: '03',
    title: 'The 4 Coaching Stances',
    subtitle: 'Lyssa Adkins framework',
    readingTime: '6 min read',
    sources: [
      'Spayd & Adkins 2011',
      'Adkins 2010',
      'Tuckman 1965',
    ],
    summary:
      'Learn when to instruct as a Teacher, guide as a Mentor, remain neutral as a Facilitator, or inquire as a Professional Coach using the Agile Coaching Institute framework.',
    keyTakeaways: [
      'An Agile Coach moves dynamically between four stances: Teacher, Mentor, Facilitator, and Professional Coach (Spayd & Adkins, 2011).',
      'No single stance is superior; the expert coach chooses the stance that fits the coachee’s situational readiness.',
      'Beware of the "Teacher Trap": over-instructing creates learned helplessness where the team waits to be told.',
      'Powerful questions are open-ended, non-judgmental, forward-looking, and free of disguised advice.',
    ],
    contentMarkdown: `## 1. Where the stances come from

The Agile Coaching Competency Framework developed by the Agile Coaching Institute (Spayd & Adkins, 2011) describes the coach as an agile-lean practitioner who fluidly transitions across four distinct stances.

Two stances **impart** something to the person (knowledge or experience). Two stances **draw out** what the team already possesses:

| Imparts (External Input) | Draws Out (Internal Capability) |
| :--- | :--- |
| **Teacher** (Foundational knowledge) | **Facilitator** (Group consensus & decisions) |
| **Mentor** (Lived wisdom & experience) | **Professional Coach** (The coachee’s own answers) |

---

## 2. The Four Stances at a Glance

| Stance | Primary Action | Best Used When | Pitfall if Overused |
| :--- | :--- | :--- | :--- |
| **Teacher** | Shares foundational concepts and framework rules | The team lacks baseline knowledge of agile practices | Team waits to be told what to do (learned helplessness) |
| **Mentor** | Shares lived war stories and options (*"Here is what worked for me"*) | Someone is growing into a specific role (e.g. new Scrum Master) | Coachee copies blindly instead of developing their own style |
| **Facilitator** | Guides process and dialogue while staying neutral on outcome | Planning sessions, retrospectives, complex decision-making | Team relies on external facilitation for every small dispute |
| **Professional Coach** | Asks powerful open inquiries; coachee discovers solution | The coachee knows the domain but is stuck on execution/mindset | Feels like an interrogation for novices who lack domain facts |

---

## 3. Choosing the Right Stance: Decision Heuristic

Two guiding questions help determine your stance in real time:

1. **Does the team have the requisite domain knowledge?**
   - If *No* → Begin with **Teacher** or **Mentor**.
   - If *Yes* → Pivot to **Facilitator** or **Professional Coach**.
2. **Is the interaction with an individual or a group?**
   - Individual seeking role advice → **Mentor** or **Professional Coach**.
   - Collective group needing alignment → **Facilitator**.

### Group Development Connection
Tuckman's group development model (Tuckman, 1965) directly correlates with stance selection:
- **Forming:** High Teacher stance (clarifying rules, agreements, cadences).
- **Storming:** High Facilitator stance (mediating viewpoints, establishing safety).
- **Norming & Performing:** High Professional Coach stance (challenging the team to set higher benchmarks).

---

## 4. The Teacher Trap & How to Escape It

The Teacher stance is seductive: coaches know the answers, and telling people what to do feels efficient. However, remaining in Teacher mode creates **dependency**. The coach becomes an operational bottleneck.

**Warning signs of the Teacher Trap:**
- Team members look to the coach before speaking in standups or retros.
- The coach speaks for more than 40% of retrospective meeting time.
- Initiatives stall whenever the coach is out of the office.

**How to escape:** Respond to questions with an inquiry (*"What options do you see?"*), allow the team to experiment with an imperfect plan, and step physically back from the whiteboard.

---

## 5. Powerful Questions Matrix

A powerful question prompts deep reflection, contains zero disguised advice, and focuses on future possibilities (Adkins, 2010).

| ✅ Powerful Question | ❌ Weak / Biased Question | Flaw in the Weak Question |
| :--- | :--- | :--- |
| *"What options do you see right now?"* | *"Did you finish the user story?"* | Closed question; invites only yes/no. |
| *"What could we experiment with next sprint?"* | *"Have you thought about pair programming?"* | Disguised advice; pushes the coach's preference. |
| *"What would support the team most in this sprint?"* | *"Why did you fail to meet the sprint commitment?"* | "Why" creates defensive posturing and blame. |`,
    checkYourUnderstanding: [
      'List the four coaching stances and classify each as either "imparting" or "drawing out".',
      'A new team has never estimated user stories before. Which stance should you lead with, and why?',
      'Transform the leading question "Shouldn’t you ask the QA engineer first?" into a powerful, non-directive question.',
    ],
    references: [
      { citation: 'Adkins, L. (2010). Coaching Agile Teams. Addison-Wesley.' },
      { citation: 'Spayd, M. K. & Adkins, L. (2011). Developing Great Agile Coaches. Agile Coaching Institute.' },
      { citation: 'Tuckman, B. W. (1965). Developmental sequence in small groups. Psychological Bulletin, 63(6), 384–399.' },
    ],
  },
  {
    id: 'conflict-dynamics',
    module: '04',
    title: 'Conflict & Team Facilitation',
    subtitle: 'Speed Leas 5 levels of conflict',
    readingTime: '7 min read',
    sources: [
      'Adkins 2010',
      'Leas 1985',
      'Derby & Larsen 2006',
      'Kaner et al. 2014',
      'Edmondson 1999',
      'Tuckman 1965',
    ],
    summary:
      'Diagnose team tensions before they turn toxic. Master Speed Leas’ 5 levels of conflict and facilitate healthy resolution through psychological safety.',
    keyTakeaways: [
      'Conflict is normal and necessary for high-performance; the key is diagnosing its escalation level.',
      'Speed Leas defines 5 conflict levels: Problem to Solve, Disagreement, Contest, Crusade, World War (Leas, 1985; Adkins, 2010).',
      'Lower-level conflicts (Levels 1–2) should be resolved by the team itself with light coach facilitation.',
      'The 5-stage retrospective model (Derby & Larsen, 2006) and explicit Working Agreements build lasting psychological safety.',
    ],
    contentMarkdown: `## 1. Why Conflict is Not the Enemy

Teams that never disagree often suffer from artificial harmony. Edmondson defines team **psychological safety** as a shared belief that the team is safe for interpersonal risk-taking (Edmondson, 1999). Without safety, team members hide errors and suppress conflicting opinions.

In Tuckman's model, **Storming** naturally follows **Forming** (Tuckman, 1965). The coach’s objective is not to eradicate conflict, but to channel tension into constructive problem-solving.

---

## 2. Speed Leas' 5 Levels of Conflict

Adapted for agile environments by Lyssa Adkins (2010), this model helps coaches diagnose the temperature of a disagreement:

| Level | Name | Objective of Parties | Typical Language |
| :--- | :--- | :--- | :--- |
| **1** | **Problem to Solve** | Collaborate to find solutions | Fact-oriented: *"Let's check the build logs together."* |
| **2** | **Disagreement** | Self-protection & cautious posturing | Generalised: *"Some people here never review PRs on time."* |
| **3** | **Contest** | Winning over the other party | Factional: *"Our frontend team is right; backend is lagging."* |
| **4** | **Crusade** | Protecting ideology, removing opponent | Moralistic: *"They are toxic and will never change."* |
| **5** | **World War** | Total destruction / mutual elimination | Absolute: *"Either they get transferred off this project or I quit today."* |

---

## 3. Coaching Intervention by Conflict Level

| Level | Recommended Coach Strategy |
| :--- | :--- |
| **Level 1 · Problem to Solve** | Step back. Foster consensus, observe lightly, confirm shared goals are visible. |
| **Level 2 · Disagreement** | Slow the conversation down. Ask each party to paraphrase the other’s position before responding; discover underlying needs. |
| **Level 3 · Contest** | Hold separate 1-on-1s. Dismantle factions; create a structured neutral session focused strictly on verified data. |
| **Level 4 · Crusade** | Employ "shuttle diplomacy" (talking to sides separately). De-escalate ideological rhetoric to Level 2 before joint meetings. |
| **Level 5 · World War** | Safety first. Separate the individuals immediately; engage HR and senior executive leadership for structural remediation. |

> **Golden rules of conflict facilitation:**
> - Never escalate prematurely to management for Level 1 or 2 disagreements.
> - Never conduct public confrontation when language has escalated to Level 3 or higher.

---

## 4. Facilitation Tools for Constructive Alignment

### The Diamond of Participatory Decision-Making
Kaner et al. (2014) illustrate group decision dynamics as a diamond:
1. **Divergent Zone:** Brainstorming diverse perspectives and ideas.
2. **The Groan Zone:** Tense ambiguity where contrasting worldviews collide.
3. **Convergent Zone:** Synthesis and prioritized consensus.

The coach’s role as facilitator is to guide the team **through** the Groan Zone rather than cutting discussions short out of discomfort.

### Derby & Larsen's 5-Stage Retrospective Framework
Retrospectives succeed when structured through intentional stages (Derby & Larsen, 2006):
1. **Set the Stage:** Reaffirm working agreements and establish an inclusive environment.
2. **Gather Data:** Collate objective sprint metrics and timeline facts (separating facts from emotions).
3. **Generate Insights:** Identify root causes and systemic impediments (*"Why did this happen?"*).
4. **Decide What to Do:** Select 1–2 high-leverage experiments for the next sprint backlog.
5. **Close the Retrospective:** Appreciate peer contributions and clarify action owners.

---

## Practical Example: PR Review Warfare

**Situation:** Two senior developers have been arguing aggressively in pull request comments for weeks, causing PR cycle times to surge from 4 hours to 5 days.

**Diagnosis:** Personal insults (*"You clearly don't understand clean architecture"*) indicate **Level 2 escalating to Level 3**.

**Coach Action:**
1. Meets with both developers individually to hear unvarnished frustrations.
2. Facilitates a private 30-minute working agreement session focusing on shared goals: code quality and fast delivery.
3. Guides them to establish a written **PR Working Agreement** (e.g. *"Discuss architectural debates synchronously via call after 2 comments"*).
4. Follows up in 2 weeks to assess relationship health.`,
    checkYourUnderstanding: [
      'Name the 5 levels of conflict according to Speed Leas.',
      'Why is premature managerial escalation damaging in Level 1 or Level 2 conflicts?',
      'Which stage of a retrospective is designed to review team Working Agreements?',
    ],
    references: [
      { citation: 'Adkins, L. (2010). Coaching Agile Teams. Addison-Wesley.' },
      { citation: 'Derby, E. & Larsen, D. (2006). Agile Retrospectives. The Pragmatic Bookshelf.' },
      { citation: 'Edmondson, A. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383.' },
      { citation: 'Kaner, S. et al. (2014). Facilitator’s Guide to Participatory Decision-Making. Jossey-Bass.' },
      { citation: 'Leas, S. B. (1985). Moving Your Church Through Conflict. The Alban Institute.' },
      { citation: 'Tuckman, B. W. (1965). Developmental sequence in small groups. Psychological Bulletin, 63(6), 384–399.' },
    ],
  },
];

