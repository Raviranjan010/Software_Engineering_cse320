# Structure Charts

## Learning Objectives
- Understand structure chart symbols and notation
- Learn transform analysis and transaction analysis
- Apply DFD to structure chart conversion
- Understand fan-in and fan-out concepts

---

## 2.5 Structure Charts

### What is a Structure Chart?

**DEF** A Structure Chart is a hierarchical diagram that shows the organization of a system in terms of modules and the relationships (calls) between them. It is used in function-oriented design to represent module hierarchy and control flow.

### Purpose
- Show module hierarchy
- Indicate which module calls which
- Show data and control flow between modules
- Foundation for implementation
- Documentation of system architecture

---

## Structure Chart Symbols

**★ EXAM** Memorize these symbols:

| Symbol | Shape | Meaning | Example |
|--------|-------|---------|---------|
| **Module** | Rectangle | A function or procedure | `calculateTotal()`, `validateUser()` |
| **Call** | Downward arrow | Module invocation (calls) | Main module calling sub-module |
| **Data Couple** | Small circle on arrow | Data parameters passed | `student_id`, `total_amount` |
| **Control Couple** | Small filled circle on arrow | Control flag/boolean | `is_valid`, `error_flag` |
| **Conditional Call** | Diamond | Call only if condition true | `if (valid) then process` |
| **Loop Call** | Curved arrow (loop arc) | Repeated call | Process all records |

### Visual Representation

```
                   ┌─────────────┐
                   │ Main Module │
                   └──────┬──────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
              ▼           ▼           ▼
        ┌──────────┐ ┌────────┐ ┌──────────┐
        │ Module A │ │Module B│ │ Module C │
        └──────────┘ └────────┘ └──────────┘
            ○                ●
         (data)          (control)
```

---

## Structure Chart vs DFD

| Aspect | DFD | Structure Chart |
|--------|-----|-----------------|
| **Focus** | Data flow | Module hierarchy |
| **Shows** | What data moves where | Which module calls which |
| **Type** | Requirements model | Design model |
| **Timing** | No sequence | Shows calling sequence |
| **Symbols** | Processes, data stores, entities | Modules, calls, couples |
| **Used in** | Analysis phase | Design phase |

---

## Transform Analysis

**DEF** Transform Analysis is a method to convert a DFD into a structure chart by identifying the central transform (main processing) and mapping input, transform, and output branches.

### Steps in Transform Analysis

1. **Draw Level 1 DFD**
2. **Identify three sections:**
   - **Input Branch**: Modules that bring data into the system
   - **Central Transform**: Main processing/transformation
   - **Output Branch**: Modules that send data out
3. **Create structure chart hierarchy:**
   - Top module controls everything
   - Input branch on left
   - Central transform in middle
   - Output branch on right
4. **Add data couples and control couples**

### Example: Transform Analysis

**Scenario: Grade Processing System**

**Level 1 DFD:**
```
1.0 Read Student Data (Input)
2.0 Calculate Grade (Central Transform)
3.0 Generate Report (Output)
```

**Structure Chart:**
```
                    ┌──────────────────┐
                    │ Grade Processing │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌───────────┐ ┌──────────┐ ┌────────────┐
        │ Read Data │ │Calculate │ │ Generate   │
        │           │ │  Grade   │ │  Report    │
        └─────┬─────┘ └──────────┘ └────────────┘
              │
              ▼
        ┌───────────┐
        │  Validate │
        │   Input   │
        └───────────┘
```

**Explanation:**
- Input Branch: Read Data → Validate Input
- Central Transform: Calculate Grade
- Output Branch: Generate Report

---

## Transaction Analysis

**DEF** Transaction Analysis is used when a single module dispatches to multiple transaction-specific modules based on the type of input.

### When to Use
- System handles different types of transactions
- One input triggers different processing paths
- Example: ATM handles withdraw, deposit, balance inquiry

### Structure Pattern

```
                    ┌──────────────┐
                    │   Receive    │
                    │ Transaction  │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Determine  │
                    │  Transaction │◄── Diamond (conditional)
                    │    Type      │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
              ▼            ▼            ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │ Withdraw │ │ Deposit  │ │  Balance │
        │ Process  │ │ Process  │ │  Inquiry │
        └──────────┘ └──────────┘ └──────────┘
```

### Example: E-Commerce Order System

```
                  ┌─────────────┐
                  │  Receive    │
                  │   Order     │
                  └──────┬──────┘
                         │
                         ▼
                  ┌─────────────┐
                  │ Determine   │
                  │ Order Type  │
                  └──────┬──────┘
                         │
              ┌──────────┼──────────┐
              │          │          │
              ▼          ▼          ▼
        ┌─────────┐ ┌────────┐ ┌─────────┐
        │ Regular │ │Express │ │ Cancel  │
        │ Order   │ │ Order  │ │ Order   │
        └─────────┘ └────────┘ └─────────┘
```

---

## Fan-In and Fan-Out

### Fan-Out

**DEF** Fan-out is the number of modules directly controlled (called) by a given module.

**Example:**
```
        ┌──────────┐
        │ Module X │
        └────┬─────┘
             │
      ┌──────┼──────┐
      │      │      │
      ▼      ▼      ▼
     A      B      C

Fan-out of Module X = 3
```

### Fan-In

**DEF** Fan-in is the number of modules that directly call a given module.

**Example:**
```
     A      B      C
      \     |     /
       \    |    /
        ▼   ▼   ▼
        ┌──────┐
        │Module│
        │   Y  │
        └──────┘

Fan-in of Module Y = 3
```

### Guidelines

| Metric | Ideal Value | Reason |
|--------|-------------|--------|
| **Fan-Out** | 7 ± 2 (5 to 9) | Human cognitive limit (Miller's Law) |
| **Fan-In** | High is good | Indicates reusable module |

### Implications

**High Fan-Out:**
- Module is complex controller
- Hard to understand and maintain
- Consider refactoring into sub-modules

**High Fan-In:**
- Module is highly reusable
- Good design (e.g., utility functions)
- Must be well-tested (many dependencies)

**Low Fan-In:**
- Module may not be reusable
- Could be too specialized

---

## DFD to Structure Chart Conversion

### Complete Example: Library System

**Step 1: Level 1 DFD**
```
1.0 Search Catalog
2.0 Issue Book
3.0 Return Book
4.0 Manage Catalog
```

**Step 2: Identify Transform Type**
- This is transform-centered (not transaction-centered)

**Step 3: Create Structure Chart**

```
                    ┌──────────────────┐
                    │  Library System  │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌──────────┐ ┌──────────┐ ┌──────────┐
        │  Search  │ │  Manage  │ │  Manage  │
        │  Catalog │ │Transactions│ Catalog  │
        └────┬─────┘ └────┬─────┘ └──────────┘
             │            │
        ┌────┴─────┐  ┌───┴────┐
        ▼          ▼  ▼        ▼
   ┌────────┐ ┌──────┐ ┌─────┐ ┌──────┐
   │Display │ │Check │ │Issue│ │Return│
   │Results │ │Avail │ │Book │ │Book  │
   └────────┘ └──────┘ └─────┘ └──────┘
```

**Step 4: Add Data Couples**

```
Search Catalog ○───→ Display Results
       (query)         (results)

Check Availability ○───→ Issue Book
       (book_id)         (status)
```

---

## Structure Chart Design Principles

### Best Practices

1. **Module Independence**: High cohesion, low coupling
2. **Appropriate Fan-Out**: Keep between 5-9
3. **Reuse Modules**: High fan-in is good
4. **Clear Hierarchy**: Top-down organization
5. **Minimize Control Couples**: Prefer data couples
6. **Module Size**: Each module should do one thing

### Module Types in Structure Chart

| Type | Position | Purpose | Example |
|------|----------|---------|---------|
| **Coordinator** | Top | Controls overall flow | Main Program |
| **Input Module** | Left branch | Gets data from users/files | ReadFile(), GetUserInput() |
| **Transform Module** | Center | Processes data | CalculateTotal(), ValidateData() |
| **Output Module** | Right branch | Displays/sends results | PrintReport(), SendEmail() |

---

## Practice Questions

### MCQs

**Q1. In a structure chart, a diamond symbol represents:**  
a) Data couple  
b) Control couple  
c) Conditional call  
d) Loop call  
**Answer: c) Conditional call**

**Q2. Transform analysis is used to:**  
a) Convert DFD to structure chart  
b) Draw use case diagrams  
c) Calculate cyclomatic complexity  
d) Design database schema  
**Answer: a) Convert DFD to structure chart**

**Q3. High fan-in indicates:**  
a) Complex module  
b) Reusable module  
c) Poor design  
d) Too many parameters  
**Answer: b) Reusable module**

**Q4. Which is NOT a structure chart symbol?**  
a) Rectangle  
b) Circle on arrow  
c) Filled circle on arrow  
d) Oval  
**Answer: d) Oval**

**Q5. Transaction analysis is used when:**  
a) System has single processing path  
b) System handles multiple transaction types  
c) System has no inputs  
d) System is very small  
**Answer: b) System handles multiple transaction types**

---

### Short Answer Questions

**Q1. Differentiate between transform analysis and transaction analysis.**  
**Answer:**

| Transform Analysis | Transaction Analysis |
|-------------------|---------------------|
| Used for systems with central processing | Used for systems with multiple transaction types |
| Data flows through input → transform → output | Single input dispatches to different processing paths |
| Example: Grade calculation system | Example: ATM system (withdraw, deposit, inquiry) |
| Linear flow | Branching flow based on transaction type |
| Three sections: input, transform, output | One module determines type, routes to specific handlers |

**Q2. Explain fan-in and fan-out with examples. What are ideal values?**  
**Answer:**

**Fan-Out:**
- Definition: Number of modules directly called by a module
- Example: If Module A calls Modules B, C, D → Fan-out = 3
- Ideal: 7 ± 2 (5 to 9) based on Miller's Law
- High fan-out = complex controller, hard to maintain

**Fan-In:**
- Definition: Number of modules that call a given module
- Example: If Modules X, Y, Z all call Module A → Fan-in = 3
- Ideal: High is good (indicates reusability)
- High fan-in = well-tested utility module

**Q3. Convert the following DFD to a structure chart using transform analysis:**
```
1.0 Read Employee Data
2.0 Calculate Salary
3.0 Generate Pay Slip
```

**Answer:**

```
                ┌─────────────────┐
                │  Payroll System │
                └────────┬────────┘
                         │
              ┌──────────┼──────────┐
              │          │          │
              ▼          ▼          ▼
        ┌──────────┐ ┌───────┐ ┌──────────┐
        │  Read    │ │Calculate│ │ Generate │
        │ Employee │ │Salary  │ │ Pay Slip │
        │   Data   │ │       │ │          │
        └────┬─────┘ └───────┘ └──────────┘
             │
             ▼
        ┌──────────┐
        │ Validate │
        │   Data   │
        └──────────┘

Input Branch: Read Employee Data → Validate Data
Central Transform: Calculate Salary
Output Branch: Generate Pay Slip
```

---

## Exam Tips

1. **Memorize symbols**: Rectangle, arrows, circles (data/control), diamond, loop arc
2. **Transform vs Transaction**: Know when to use each
3. **Fan-in/Fan-out**: Ideal values and implications
4. **Practice conversion**: DFD → Structure chart is common exam question
5. **Draw hierarchically**: Top-down, clear organization
6. **Label couples**: Show what data/control is passed
7. **Miller's Law**: 7 ± 2 for fan-out

---

## Textbook References
- Rajib Mall: Chapter 6 (Software Design)
- Pressman: Chapter 9 (Architectural Design)

---

**Previous Topic**: [DFD and Structured Analysis](03_DFD_and_Structured_Analysis.md)  
**Next Module**: [Module 3: OO Development and UML](../03_OO_Development_and_UML/README.md)
