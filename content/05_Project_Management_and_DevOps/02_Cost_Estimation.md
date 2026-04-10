# Cost Estimation

## Overview
Cost estimation is a critical activity in Software Project Management. It involves predicting the effort (person-months) and time (duration) required to build a software system.

## 1. Lines of Code (LOC) Estimation
The most basic estimation technique relies on predicting the number of lines of code. However, it's highly language-dependent.

## 2. Function Point Analysis (FPA)
FPA measures the size of software based on functionality requested by and provided to the end-user, independent of programming language.

**Components evaluated**:
- External Inputs (EI)
- External Outputs (EO)
- External Inquiries (EQ)
- Internal Logical Files (ILF)
- External Interface Files (EIF)

**Formula**:
`FP = Count Total * [0.65 + 0.01 * SUM(Fi)]`
Where `SUM(Fi)` is the sum of 14 value adjustment factors.

## 3. COCOMO Model
COCOMO (Constructive Cost Model), developed by Barry Boehm, estimates cost, effort, and schedule based on LOC.

**DEF**
**COCOMO Model**: An algorithmic software cost estimation model that uses a basic regression formula based on historical project data and current project characteristics.

There are three modes:
1. **Organic**: Small, simple projects with experienced teams.
2. **Semi-detached**: Medium complexity projects with mixed teams.
3. **Embedded**: Complex projects with tight constraints (e.g., flight control systems).

### Basic COCOMO Formulas
- **Effort (E)** = `a * (KLOC)^b` (in Person-Months)
- **Time (T)** = `c * (E)^d` (in Months)
- **Persons Required** = `E / T`

*Where `a`, `b`, `c`, and `d` are constants defined for each mode.*

**★ EXAM**
**COCOMO Coefficients to remember for Basic level**:
- Organic: a=2.4, b=1.05, c=2.5, d=0.38
- Semi-detached: a=3.0, b=1.12, c=2.5, d=0.35
- Embedded: a=3.6, b=1.20, c=2.5, d=0.32

## Practice Questions

**Q1. Which estimation model is independent of the programming language used?**
a) COCOMO
b) LOC
c) Function Point Analysis
d) Halstead Complexity
**Answer: c**
*Explanation: Function Point Analysis measures functionality from the user's view, totally independent of the language.*

**Q2. In COCOMO, a complex project with strict hardware, software, and operational constraints is classified as:**
a) Organic
b) Semi-detached
c) Embedded
d) System
**Answer: c**
*Explanation: Embedded mode implies the software must operate within tight constraints, typical for complex systems.*

**Q3. What does "KLOC" stand for in COCOMO?**
a) Kilo Lines of Code
b) Known Lines of Code
c) Key Lines of Components
d) Kilo Logic of Code
**Answer: a**
*Explanation: KLOC stands for Kilo (Thousand) Lines of Code.*
