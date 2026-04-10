# Scheduling Techniques

## Overview
Once tasks are identified via WBS, they must be scheduled effectively to manage dependencies and track time accurately.

**DEF**
**Project Scheduling**: The process of determining when activities need to be started and completed to meet the overall project deadline.

## 1. Gantt Charts
A Gantt chart is a bar chart that illustrates a project schedule. It plots tasks against a timeline, showing start and end dates.
- **Pros**: Easy to read and present to stakeholders.
- **Cons**: Difficult to visualize complex dependencies on very large projects.

## 2. Activity Networks (PERT & CPM)
Activity networks depict project tasks as nodes or arrows, emphasizing relationships and dependencies.

### PERT (Program Evaluation and Review Technique)
Calculates expected time by accounting for uncertainty using a weighted average.
**Formula for Expected Time (Te)**:
`Te = (O + 4M + P) / 6`
Where:
- **O**: Optimistic time
- **M**: Most likely time
- **P**: Pessimistic time

### CPM (Critical Path Method)
Determines the longest path of sequential tasks to predict the absolute minimum project duration.
- **Critical Path**: The series of tasks that dictate the project duration. Any delay on the critical path delays the entire project.
- **Slack (Float)**: The amount of time a task can be delayed without delaying the project. Tasks on the critical path have zero slack.

**★ EXAM**
**CPM vs PERT**:
- CPM is deterministic (uses fixed time estimates).
- PERT is probabilistic (uses probability for time estimates).

## Practice Questions

**Q1. What does the Critical Path in a project network indicate?**
a) The shortest path through the project
b) The longest path dictating minimum project duration
c) The path containing the most risks
d) The path with the most slack
**Answer: b**
*Explanation: The critical path determines the total time required for a project because it has no slack.*

**Q2. In PERT, how is the expected time calculated?**
a) (Optimistic + Pessimistic) / 2
b) (Optimistic + 4*Most Likely + Pessimistic) / 6
c) (Optimistic + Most Likely + Pessimistic) / 3
d) (4*Optimistic + Most Likely + Pessimistic) / 6
**Answer: b**
*Explanation: PERT uses a weighted average heavily favoring the 'most likely' time estimate.*

**Q3. A visual representation using bar charts to show schedules is a:**
a) Gantt Chart
b) Activity Network
c) Use Case Diagram
d) PERT Network
**Answer: a**
*Explanation: Gantt charts use horizontal bars to represent the duration and timing of individual tasks.*
