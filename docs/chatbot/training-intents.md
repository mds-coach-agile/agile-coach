# Chatbot Training Intents — Agile Coach Learning Hub

Issue #29 · Sprint 2 · Author: Christian Byemba

This file is the **training material** for the BOTSchool.ai chatbot: one intent per topic, with example phrases a student might type and the answer the bot should give. Every answer comes from [`docs/research/agile-coach-research.md`](../research/agile-coach-research.md); the *Section* line says where.

It is separate from the [test set](test-set.md), which is used only to **check** the bot. The example phrases below are deliberately worded differently from the test questions, so that passing the test shows the bot understood the content, not that it memorised the questions. **Do not copy the test questions into BOTSchool.**

## How to load it in BOTSchool

1. Open the bot *Agile Coach* → create a program of type **Intent**.
2. For each intent below: create an intent with the **name**, paste the **example phrases** (one per line) and the **answer**.
3. Add the full research document to the **knowledge center**, if the plan allows it, so the bot can also answer questions not listed here.
4. Run the [test set](test-set.md) and fix the intents or the knowledge base for every failed question.

---

## 1. Role and definition

### `role_definition`
Section 1, 2

**Example phrases**
- What's the job of an agile coach?
- Explain the Agile Coach role
- Why would a team need an agile coach?
- What is an agile coach responsible for?
- Describe what agile coaches do day to day

**Answer**
An Agile Coach helps teams and organisations work in an agile way and keep improving on their own. The coach has no authority over people and does not do the team's work: the aim is a team that no longer needs its coach (Adkins, 2010). Typical activities are teaching agile practices, facilitating events, mentoring Scrum Masters and Product Owners, asking open questions, observing and giving feedback, and working with leaders to remove obstacles.

### `coach_vs_scrum_master`
Section 3

**Example phrases**
- Agile coach or scrum master, which one does what?
- Are a scrum master and an agile coach the same job?
- How is a scrum master different from a coach?
- Compare agile coach and scrum master
- Can a scrum master be called an agile coach?

**Answer**
The Scrum Master is an accountability defined by Scrum for one Scrum Team: establishing Scrum and making the team effective (Schwaber & Sutherland, 2020). The Agile Coach works with any agile approach (Scrum, Kanban, XP…), often across several teams or the whole organisation. A Scrum Master often uses coaching skills, which is why the two are confused.

### `coach_vs_manager`
Section 3, 10

**Example phrases**
- Is the agile coach the boss of the team?
- Can an agile coach give orders?
- Agile coach versus manager
- Who has more power, the coach or the manager?
- Does the coach decide who works on what?

**Answer**
No. A manager has hierarchical authority and is responsible for results and people management. An Agile Coach has no authority over people: the coach influences and supports, and helps the team become self-managing. In Scrum, the team itself decides who does what, when and how (Schwaber & Sutherland, 2020).

### `scrum_guide_roles`
Section 3

**Example phrases**
- Does Scrum have an agile coach role?
- Where does the agile coach role come from?
- Which roles does the Scrum Guide define?
- Is "agile coach" an official Scrum accountability?

**Answer**
The Scrum Guide 2020 defines three accountabilities: Product Owner, Scrum Master and Developers. It does not define an Agile Coach. The Agile Coach role comes from practice and from coaching frameworks such as the Agile Coaching Institute's competency framework (Spayd & Adkins, 2011).

---

## 2. Coaching principles

### `stances_overview`
Section 4

**Example phrases**
- Which stances can an agile coach take?
- What roles does a coach switch between?
- Explain the Adkins coaching stances
- How does a coach change posture with a team?

**Answer**
The Agile Coaching Competency Framework (Spayd & Adkins, 2011) describes four stances: **teacher** (shares knowledge), **mentor** (shares own experience), **facilitator** (guides the process, neutral on content) and **professional coach** (asks powerful questions so the person finds the answer). A good coach chooses the stance that fits the situation.

### `stance_teacher`
Section 4, 9

**Example phrases**
- What does the teacher stance mean?
- When is it OK for a coach to explain things directly?
- A new team doesn't know Scrum, what should the coach do?

**Answer**
In the teacher stance the coach shares knowledge the team does not have yet, for example a short training on Scrum events and artifacts for a new team. Then the coach gradually steps back. Risk if overused: the team waits to be told what to do.

### `stance_mentor`
Section 4

**Example phrases**
- What is the mentor stance?
- How does a coach help a new scrum master?
- What's the difference between mentoring and teaching?

**Answer**
In the mentor stance the coach shares their own experience to help someone grow in a role the coach knows, such as a new Scrum Master or Product Owner. Risk if overused: the person copies the coach instead of finding their own style.

### `stance_facilitator`
Section 4, 5

**Example phrases**
- What does a facilitator do?
- What is the facilitator stance?
- Should the coach give their opinion in a retrospective?

**Answer**
As a facilitator, the coach guides a meeting so the group reaches its own decision, staying neutral on the content. It is used for planning, retrospectives and team decisions. Risk if overused: the team never learns to facilitate itself.

### `stance_professional_coach`
Section 4

**Example phrases**
- What is the professional coach stance?
- When should a coach ask questions instead of giving answers?
- Why doesn't the coach just tell the team the solution?

**Answer**
In the professional-coach stance the coach asks powerful questions and the person finds the answer. It fits when the person has the knowledge but is stuck. Risk: for beginners it can feel like a guessing game, so the teacher stance may fit better.

### `powerful_questions`
Section 4

**Example phrases**
- How should a coach ask questions?
- Give me examples of good coaching questions
- Which questions should a coach avoid?
- What makes a coaching question effective?

**Answer**
Powerful questions are open, curious and free of hidden advice or blame, for example "What options do you see?" or "What could we try next sprint?". Avoid closed questions, advice disguised as a question ("Have you tried…?") and "why" questions that sound like blame (Adkins, 2010).

---

## 3. Facilitation

### `facilitation_diamond`
Section 5

**Example phrases**
- How does a group make a decision together?
- What is the groan zone?
- Explain the diamond of participatory decision-making

**Answer**
Kaner et al. describe the "diamond of participatory decision-making": a divergent phase (many ideas), a "groan zone" where the group struggles to understand different views, and a convergent phase (choosing). The facilitator helps the group through the groan zone instead of skipping it (Kaner et al., 2014).

### `retrospective_stages`
Section 5

**Example phrases**
- How do you run a retrospective?
- What's the structure of a good retro?
- Steps to facilitate a sprint retrospective

**Answer**
Derby and Larsen propose five stages: set the stage, gather data, generate insights, decide what to do, and close the retrospective (Derby & Larsen, 2006).

### `timebox`
Section 5, 9

**Example phrases**
- How long should the daily scrum be?
- Our daily standup takes 40 minutes, what can the coach do?
- What is a timebox?

**Answer**
The Scrum Guide time-boxes events; the Daily Scrum lasts 15 minutes (Schwaber & Sutherland, 2020). If it runs much longer, the coach makes this visible and lets the team redesign the meeting in the retrospective, recalling the timebox (facilitator and teacher stances).

---

## 4. Team dynamics

### `tuckman_stages`
Section 6

**Example phrases**
- What are the stages of team development?
- Explain forming storming norming performing
- How does a team evolve over time?

**Answer**
Tuckman described four stages: forming, storming, norming and performing (Tuckman, 1965); a fifth, adjourning, was added later (Tuckman & Jensen, 1977). A coach adapts the stance to the stage: more teaching in forming, more facilitation of conflict in storming, more coaching once the team performs.

### `psychological_safety`
Section 6

**Example phrases**
- What is psychological safety?
- Why are people afraid to speak in our retro?
- Why does team safety matter?

**Answer**
Edmondson defines team psychological safety as a shared belief that the team is safe for interpersonal risk-taking, and links it to team learning (Edmondson, 1999). Retrospectives and experiments only work if people feel safe to speak.

### `self_management`
Section 6

**Example phrases**
- What does self-managing team mean?
- Who decides how the work is done in Scrum?
- The product owner tells developers how to work, is that OK?

**Answer**
The Scrum Guide describes Scrum Teams as self-managing: they decide internally who does what, when and how (Schwaber & Sutherland, 2020). The coach helps the team grow into this instead of deciding for it. If a Product Owner tells developers how to work, the coach talks with the PO one-to-one, starts from their concerns, explains self-management and proposes a one-sprint experiment.

---

## 5. Conflict resolution

### `conflict_levels`
Section 7

**Example phrases**
- How serious is a team conflict?
- Explain the Speed Leas conflict model
- How can a coach measure conflict in a team?

**Answer**
Adkins uses the five levels of conflict defined by Speed Leas: 1 problem to solve, 2 disagreement, 3 contest, 4 crusade, 5 world war (Adkins, 2010). The level tells the coach how serious the conflict is and how to respond.

### `conflict_response`
Section 7, 9

**Example phrases**
- Two developers are fighting over code reviews, what should the coach do?
- How does a coach resolve a conflict?
- Should a coach take sides in a disagreement?

**Answer**
At the lower levels the coach helps the team solve the conflict itself: listening to each person privately, then facilitating a conversation on shared interests that ends in a working agreement. Blaming in public or escalating too early tends to raise the level of conflict (Adkins, 2010).

---

## 6. Continuous improvement

### `continuous_improvement`
Section 8

**Example phrases**
- How does a team keep improving?
- What is the purpose of the sprint retrospective?
- What is inspect and adapt?

**Answer**
The Sprint Retrospective exists to plan ways to increase quality and effectiveness; the team picks the most helpful changes and may add them to the next Sprint Backlog (Schwaber & Sutherland, 2020). Improvement works best as small experiments: try one change for one sprint, look at the result, keep or drop it.

### `metrics_velocity`
Section 8, 9

**Example phrases**
- My manager wants to compare teams by velocity, is that a good idea?
- What is velocity used for?
- Which metrics should an agile team use?

**Answer**
Velocity depends on each team's own estimation scale, so it should not be used to compare or rank teams; it is a planning tool for one team (Cohn, 2005). A coach asks the manager what they need to know and proposes outcome or flow metrics instead.

---

## 7. Conversation

### `greeting`

**Example phrases**
- Hi
- Hello
- What can you do?
- Who are you?

**Answer**
Hi! I'm the Agile Coach Learning Hub assistant. I can answer questions about the Agile Coach role, the difference with a Scrum Master and a manager, coaching stances, facilitation, team dynamics, conflict resolution and continuous improvement. What would you like to know?

### `sources`

**Example phrases**
- Where does this information come from?
- What books can I read about agile coaching?
- Give me your sources

**Answer**
The content is based on: Adkins (2010) *Coaching Agile Teams*; Spayd & Adkins (2011) Agile Coaching Competency Framework; Schwaber & Sutherland (2020) *The Scrum Guide* (free at scrumguides.org); Derby & Larsen (2006) *Agile Retrospectives*; Kaner et al. (2014) *Facilitator's Guide to Participatory Decision-Making*; Tuckman (1965); Edmondson (1999); Cohn (2005) *Agile Estimating and Planning*; Davies & Sedley (2009) *Agile Coaching*.

### `fallback` (out of scope)

Use as the bot's default answer when no intent matches.

**Answer**
Sorry, I can only answer questions about Agile coaching: the Agile Coach role, coaching stances, facilitation, team dynamics, conflict resolution and continuous improvement. Try asking, for example, "How does a coach handle a team conflict?"

## AI usage

Drafted with Claude (Anthropic) from the team's research document. The team reviews the intents and answers in the pull request.
