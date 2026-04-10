# Quick Revision Guide - CSE320 Software Engineering

## 🎯 Last-Minute Exam Preparation

This guide provides quick reference to all important concepts, formulas, and comparisons for rapid revision before exams.

---

## 📊 Important Formulas

### 1. Cyclomatic Complexity
```
V(G) = E - N + 2P
Where:
E = Number of edges
N = Number of nodes
P = Number of connected components (usually 1)

Alternative formulas:
V(G) = Number of regions in control flow graph
V(G) = Number of decision points + 1
```

### 2. COCOMO Model
```
Basic COCOMO:
Effort (E) = a × (KLOC)^b  [Person-Months]
Development Time (D) = c × (E)^d  [Months]
Average Staff Size = E / D  [Persons]

COCOMO Coefficients:
┌──────────────┬─────┬─────┬─────┬─────┐
│ Mode         │  a  │  b  │  c  │  d  │
├──────────────┼─────┼─────┼─────┼─────┤
│ Organic      │ 2.4 │1.05 │ 2.5 │0.38 │
│ Semi-detached│ 3.0 │1.12 │ 2.5 │0.35 │
│ Embedded     │ 3.6 │1.20 │ 2.5 │0.32 │
└──────────────┴─────┴─────┴─────┴─────┘
```

### 3. Function Points
```
FP = UFP × TCF
Where:
UFP = Unadjusted Function Points
TCF = Technical Complexity Factor = 0.65 + 0.01 × ΣFi

UFP Calculation:
┌──────────────┬────┬────┬────┬────┬────┐
│ Component    │Low │Avg │High│Very│Ext │
├──────────────┼────┼────┼────┼────┼────┤
│ External In  │ 3  │ 4  │ 6  │ -  │ -  │
│ External Out │ 4  │ 5  │ 7  │ -  │ -  │
│ Logical Files│ 7  │10  │15  │ -  │ -  │
│ Interfaces   │ 5  │ 7  │10  │ -  │ -  │
│ Queries      │ 3  │ 4  │ 6  │ -  │ -  │
└──────────────┴────┴────┴────┴────┴────┘
```

### 4. PERT
```
Expected Time (TE) = (O + 4M + P) / 6
Where:
O = Optimistic time
M = Most likely time
P = Pessimistic time

Variance (V) = [(P - O) / 6]²
Standard Deviation (σ) = (P - O) / 6
```

---

## 🔥 Key Comparisons

### SDLC Models Comparison
| Feature | Waterfall | Spiral | Agile | V-Model |
|---------|-----------|--------|-------|---------|
| Approach | Linear | Iterative | Iterative | Linear |
| Risk Handling | Poor | Excellent | Moderate | Poor |
| Flexibility | Low | High | Very High | Low |
| Customer Involvement | Low | Moderate | Very High | Low |
| Testing | Late | Each cycle | Each sprint | Parallel |
| Best For | Clear req. | High-risk | Dynamic req. | Safety-critical |

### Cohesion Types (Worst to Best)
```
Coincidental → Logical → Temporal → Procedural → Communicational → Sequential → Functional
(Worst)                                                                              (Best)
```

### Coupling Types (Best to Worst)
```
Data → Stamp → Control → External → Common → Content
(Best)                                        (Worst)
```

### Testing Techniques
| Technique | Sees Code? | Focus | Examples |
|-----------|------------|-------|----------|
| Black Box | No | Functionality | EP, BVA, Decision Table |
| White Box | Yes | Internal logic | Statement/Branch coverage |

### Verification vs Validation
| Aspect | Verification | Validation |
|--------|--------------|------------|
| Question | Building product right? | Building right product? |
| Type | Static testing | Dynamic testing |
| When | Before validation | After verification |
| Activities | Reviews, inspections | Functional testing |

### Aggregation vs Composition
| Aspect | Aggregation | Composition |
|--------|-------------|-------------|
| Relationship | Has-a | Contains-a |
| Part exists without whole? | Yes | No |
| Diamond | Empty ◇ | Filled ◆ |
| Strength | Weak | Strong |

### Software Maintenance Types
| Type | Purpose | Example | % Effort |
|------|---------|---------|----------|
| Corrective | Fix bugs | Fix login error | 20% |
| Adaptive | New environment | OS upgrade | 25% |
| Perfective | New features | Add payment gateway | 50% |
| Preventive | Future-proof | Code refactoring | 5% |

### CMMI Maturity Levels
| Level | Name | Focus |
|-------|------|-------|
| 1 | Initial | Ad hoc, chaotic |
| 2 | Managed | Project management |
| 3 | Defined | Organizational standards |
| 4 | Quantitatively Managed | Metrics and measurement |
| 5 | Optimizing | Continuous improvement |

---

## 📋 UML Relationships Quick Reference

| Relationship | Notation | Keyword | Example |
|--------------|----------|---------|---------|
| Association | ──── | Uses-a | Student-Course |
| Aggregation | ◇──── | Has-a | Department-Professor |
| Composition | ◆──── | Contains-a | House-Room |
| Inheritance | ────▷ | Is-a | Dog-Animal |
| Dependency | - - -▷ | Uses | Driver-Car |
| Realization | - -▷ | Implements | Class-Interface |

---

## 🎨 DFD Symbols

| Symbol | Name | Represents |
|--------|------|------------|
| ○ or ( ) | Process | Transformation of data |
| → or →→ | Data Flow | Movement of data |
| ══ or [ ] | Data Store | Storage of data |
| □ or [ ] | External Entity | Source/destination outside system |

---

## 📐 Structure Chart Symbols

| Symbol | Meaning |
|--------|---------|
| Rectangle | Module |
| Arrow down | Module call |
| Circled arrow (↻) | Data couple (data passed) |
| Filled circle (●) | Control flag (condition) |
| Diamond | Conditional call |
| Curved arrow | Loop/iteration |

---

## ⚡ Quick Facts for MCQs

### SDLC Facts:
- Waterfall = Linear Sequential Model = Classic Life Cycle
- Spiral Model proposed by **Barry Boehm (1988)**
- Spiral model emphasizes **Risk Analysis**
- Agile Manifesto created in **2001**
- Scrum sprint duration: **2-4 weeks**
- Daily Scrum duration: **15 minutes**

### Testing Facts:
- Exhaustive testing is **impossible**
- Early testing saves **cost**
- Defect clustering: 80% defects in 20% modules
- Pesticide paradox: Tests become ineffective over time
- BVA tests **6 values** per range
- Cyclomatic complexity gives **maximum test cases** needed

### Design Facts:
- Best cohesion: **Functional**
- Worst coupling: **Content**
- Goal: **High cohesion, Low coupling**
- DFD shows **data flow**, not control flow
- Structure chart shows **module hierarchy**

### UML Facts:
- Use Case diagram shows **system functionality**
- Class diagram shows **static structure**
- Sequence diagram shows **time ordering**
- Activity diagram shows **workflow**
- `<<include>>` = mandatory, `<<extend>>` = optional

### Project Management Facts:
- COCOMO stands for **COnstructive COst MOdel**
- KLOC = **Thousands of Lines of Code**
- CPM = **Critical Path Method** (deterministic)
- PERT = **Program Evaluation Review Technique** (probabilistic)
- Critical path = **Longest path** in network
- Slack/Float = **LS - ES** or **LF - EF**

### Quality Facts:
- ISO 9001 = **Quality Management**
- CMMI has **5 maturity levels**
- Six Sigma = **3.4 defects per million**
- PSP = **Personal Software Process**
- CASE = **Computer-Aided Software Engineering**

---

## 🔢 Numerical Problem Solving Steps

### Cyclomatic Complexity:
1. Draw control flow graph
2. Count edges (E), nodes (N), components (P)
3. Apply: V(G) = E - N + 2P
4. Alternative: Count regions or decision points + 1

### COCOMO:
1. Identify mode (Organic/Semi-detached/Embedded)
2. Get coefficients (a, b, c, d)
3. Convert LOC to KLOC (divide by 1000)
4. Calculate: E = a × (KLOC)^b
5. Calculate: D = c × (E)^d
6. Calculate: Staff Size = E / D

### CPM:
1. Draw network diagram
2. Forward pass: Calculate ES, EF
   - ES = Max EF of all predecessors
   - EF = ES + Duration
3. Backward pass: Calculate LS, LF
   - LF = Min LS of all successors
   - LS = LF - Duration
4. Calculate Slack = LS - ES or LF - EF
5. Critical path = Path with zero slack (longest path)

### PERT:
1. For each activity, calculate:
   - TE = (O + 4M + P) / 6
   - Variance = [(P - O) / 6]²
2. Find critical path using TE
3. Project duration = Sum of TE on critical path
4. Project variance = Sum of variances on critical path

---

## 📝 Answer Writing Tips

### For 2-Mark Questions:
- Write definition + 1 example
- Use 2-3 lines maximum
- Include key terminology

### For 5-Mark Questions:
- Write definition + explanation
- Draw diagram if applicable
- Give 1-2 examples
- Use 10-15 lines

### For 10-Mark Questions:
- Comprehensive explanation
- Draw diagrams (mandatory)
- Multiple examples
- Advantages/disadvantages in table
- Real-world application
- Use 20-30 lines

### General Tips:
✅ Always draw diagrams (even if not asked)  
✅ Use tabular format for comparisons  
✅ Highlight key terms  
✅ Give real-world examples  
✅ Show step-by-step calculations  
✅ Write advantages/disadvantages  
✅ Attempt ALL questions (partial marks)  

---

## 🎯 High-Weightage Topics

### Must Master (Guaranteed Questions):
1. ✅ SDLC Models comparison (10 marks)
2. ✅ DFD creation (10 marks)
3. ✅ Cohesion & Coupling types (5-10 marks)
4. ✅ UML Diagrams (Class, Use Case, Sequence) (10 marks each)
5. ✅ BVA & Equivalence Partitioning (10 marks)
6. ✅ Cyclomatic Complexity (5 marks)
7. ✅ COCOMO numerical (10 marks)
8. ✅ CPM/PERT numerical (10 marks)
9. ✅ CMMI levels (5 marks)
10. ✅ Software Maintenance types (5 marks)

---

## ⏰ Last Day Revision Checklist

- [ ] Review all SDLC model diagrams
- [ ] Practice 2 DFD problems
- [ ] Memorize cohesion & coupling order
- [ ] Practice 2 Class diagrams
- [ ] Practice BVA & EP (3 problems each)
- [ ] Solve 2 Cyclomatic Complexity problems
- [ ] Solve 2 COCOMO problems
- [ ] Solve 2 CPM/PERT problems
- [ ] Review CMMI levels
- [ ] Review maintenance types
- [ ] Go through all MCQs
- [ ] Review formulas sheet

---

## 💡 Exam Day Strategy

### Time Management (3-hour exam):
- Section A (MCQs): 30 minutes
- Section B (Short answers): 60 minutes
- Section C (Long answers): 75 minutes
- Revision: 15 minutes

### Question Selection:
- Start with questions you know best
- Attempt ALL questions
- Draw diagrams for every answer
- Show calculations step-by-step
- Write neatly and organize answers

---

**Best of Luck! You're going to ace this exam! 🎓**

*Remember: Understanding > Memorization*
