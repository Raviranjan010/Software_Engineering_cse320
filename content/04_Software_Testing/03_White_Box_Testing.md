# White Box Testing

## Overview
White Box Testing (also known as Clear Box, Glass Box, or Structural Testing) is a testing technique that evaluates the internal code structure, control flows, and data structures of a software application.

**DEF**
**White Box Testing**: A software testing method in which the internal structure, design, and coding of software are tested to verify flow of input-output and to improve design, usability, and security.

## Core Concepts

### 1. Statement Coverage
Ensures every line of code (statement) is executed at least once.
- **Formula**: `(Number of executed statements / Total number of statements) * 100`

### 2. Branch Coverage
Ensures every possible branch (True and False) from each decision point is executed.
- Takes into account `if-else`, `switch-case`, `Loops`.

### 3. Path Coverage
Ensures every possible path linearly independent through a program is executed.

**TIP**
Path coverage is often considered the strongest form of coverage out of statement, branch, and path. But it is also the most difficult and expensive to achieve because of the exponential number of paths.

## Cyclomatic Complexity

McCabe's Cyclomatic Complexity measures the logical complexity of a program representing the number of independent paths.

**★ EXAM**
**Calculation**:
`V(G) = E - N + 2P`
Where:
- E = number of edges
- N = number of nodes
- P = number of connected components

It can also be calculated as:
`V(G) = Number of decision nodes + 1`

<div class="mermaid">
graph TD
  A[Start] --> B{x > 0?}
  B -- Yes --> C[Do something]
  B -- No --> D[Do something else]
  C --> E[End]
  D --> E
</div>

*Cyclomatic Complexity for the above graph is 2.*

## Practice Questions

**Q1. White box testing is also known as:**
a) Behavioral testing
b) Structural testing
c) Closed box testing
d) Opaque testing
**Answer: b**
*Explanation: White box testing is based on the internal structure of the code, therefore it is known as structural testing.*

**Q2. Which of the following is NOT a white box testing technique?**
a) Statement coverage
b) Path coverage
c) Equivalence partitioning
d) Branch coverage
**Answer: c**
*Explanation: Equivalence partitioning is a black box testing technique.*

**Q3. If a program has 10 nodes, 11 edges, and 1 connected component, what is its Cyclomatic Complexity?**
a) 2
b) 3
c) 4
d) 5
**Answer: b**
*Explanation: V(G) = E - N + 2P = 11 - 10 + 2(1) = 1 + 2 = 3.*
