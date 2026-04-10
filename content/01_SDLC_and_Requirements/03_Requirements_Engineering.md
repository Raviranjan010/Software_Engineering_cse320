# Requirements Engineering

## Learning Objectives
- Understand functional vs non-functional requirements
- Learn requirement gathering techniques
- Master the FURPS model for quality attributes
- Validate requirements for completeness and correctness

---

## 1.4 Requirements Engineering

### What are Requirements?

**DEF** Requirements are conditions or capabilities needed by a user to solve a problem or achieve an objective. They form the foundation for all subsequent development activities.

### Types of Requirements

| Type | Description | Focus | Examples |
|------|-------------|-------|----------|
| **Functional Requirements** | What the system DOES | Features, functions | Login, Search, Generate Report |
| **Non-Functional Requirements** | How the system PERFORMS | Quality attributes | Performance, Security, Reliability |

### Detailed Comparison

| Aspect | Functional Requirements | Non-Functional Requirements |
|--------|------------------------|------------------------------|
| **Definition** | What system should do | How well system should perform |
| **Nature** | Mandatory features | Quality constraints |
| **Description** | Use cases, user stories | Metrics, standards |
| **Testing** | Functional testing | Performance, security testing |
| **Example** | "System shall allow user login" | "Login response time < 2 seconds" |
| **Priority** | Core functionality | Enhances user experience |

### Examples

**Functional Requirements:**
```
FR-001: The system shall allow users to register with email and password
FR-002: The system shall generate monthly sales reports
FR-003: The system shall calculate shopping cart total with tax
FR-004: The system shall send order confirmation emails
```

**Non-Functional Requirements:**
```
NFR-001: System shall support 1000 concurrent users
NFR-002: Page load time shall be less than 3 seconds
NFR-003: System availability shall be 99.9% uptime
NFR-004: All passwords shall be encrypted using AES-256
```

---

## FURPS Model for Non-Functional Requirements

**★ EXAM** FURPS is a model to categorize software quality attributes:

| Letter | Category | Description | Examples |
|--------|----------|-------------|----------|
| **F** | Functionality | Features, capabilities, security | Login, search, data validation |
| **U** | Usability | User-friendliness, learnability | Intuitive UI, help documentation |
| **R** | Reliability | Failure rate, recoverability | 99.9% uptime, backup recovery |
| **P** | Performance | Speed, efficiency, resource usage | Response time < 2s, throughput |
| **S** | Supportability | Maintainability, testability, portability | Easy to update, cross-platform |

### FURPS Examples

```
Usability: New users shall complete registration within 5 minutes
Reliability: System shall recover from crashes within 30 seconds
Performance: Database queries shall return results in < 1 second
Supportability: System shall support deployment on AWS and Azure
```

---

## 1.5 Requirement Gathering Techniques

**TIP** Use multiple techniques to get comprehensive and accurate requirements.

### Techniques Overview

| Technique | Description | When to Use | Advantages | Limitations |
|-----------|-------------|-------------|------------|-------------|
| **Interviews** | One-on-one discussions with stakeholders | Early stages, key users | Detailed insights, clarifications possible | Time-consuming, interviewer bias |
| **Questionnaires** | Written questions distributed to many users | Large user base | Reaches many people, quantifiable | Low response rate, no follow-up |
| **Observation** | Watch users perform tasks in real environment | Understand actual workflow | Real behavior, not reported | Time-intensive, Hawthorne effect |
| **JAD Sessions** | Joint Application Development workshops | Complex systems, multiple stakeholders | Collaborative, fast consensus | Expensive, needs skilled facilitator |
| **Brainstorming** | Group idea generation without criticism | Creative solutions needed | Many ideas quickly, team building | May produce unrealistic ideas |
| **Prototyping** | Build working model for feedback | Unclear requirements | Visual, early validation | Expensive, scope creep risk |
| **Document Analysis** | Study existing documents and systems | Legacy system replacement | Historical data, regulations | May be outdated, incomplete |

### Technique Selection Guide

| Scenario | Recommended Technique |
|----------|----------------------|
| Small project, few users | Interviews |
| Large organization, many users | Questionnaires + Interviews |
| Complex workflow | Observation + JAD |
| Unclear requirements | Prototyping |
| Innovative product | Brainstorming + Prototyping |
| Regulatory compliance | Document Analysis |

---

## Requirements Validation

**DEF** Requirements validation ensures that requirements are correct, complete, consistent, and feasible before proceeding to design.

### Validation Checklist

```
✓ Is each requirement correct and feasible?
✓ Is each requirement unambiguous (only one interpretation)?
✓ Are all requirements complete (nothing missing)?
✓ Are requirements consistent (no conflicts)?
✓ Is each requirement verifiable/testable?
✓ Are requirements properly prioritized?
✓ Are requirements traceable to their source?
```

### Validation Techniques

| Technique | Description | Effectiveness |
|-----------|-------------|---------------|
| **Requirements Review** | Formal inspection by stakeholders | High - catches inconsistencies |
| **Prototyping** | Build prototype to validate requirements | High - early user feedback |
| **Test-Case Generation** | Write test cases from requirements | Medium - ensures testability |
| **Requirements Tracing** | Create traceability matrix | High - ensures completeness |

---

## Good vs Bad Requirements

### DO's ✅

- Use **"shall"** for mandatory requirements
- Use **"should"** for desirable requirements
- Use **"may"** for optional requirements
- Be specific and measurable
- Use active voice
- Include acceptance criteria
- Assign unique identifiers

**Good Examples:**
```
✅ FR-001: The system shall validate email format before registration
✅ FR-002: The system shall process transactions within 3 seconds
✅ FR-003: The system shall support minimum 1000 concurrent users
✅ NFR-001: System availability shall be 99.9% during business hours
```

### DON'Ts ❌

- Don't use vague terms (fast, user-friendly, efficient)
- Don't mix multiple requirements in one statement
- Don't include design decisions
- Don't use ambiguous words (approximately, etc.)
- Don't write unverifiable requirements

**Bad Examples:**
```
❌ The system should be fast
❌ The system should be user-friendly
❌ The system shall allow users to add books and manage members
❌ The system should handle large amounts of data
```

**Why they're bad:**
- "Fast" → How fast? Specify: "Response time < 2 seconds"
- "User-friendly" → Subjective. Specify: "New users complete task in < 5 minutes"
- Mixing requirements → Split into two separate requirements
- "Large amounts" → Specify: "100,000+ records"

---

## Requirement Prioritization

### MoSCoW Method

| Priority | Meaning | Description | Example |
|----------|---------|-------------|---------|
| **M** | Must Have | Critical for system to function | User authentication |
| **S** | Should Have | Important but not critical | Email notifications |
| **C** | Could Have | Desirable but not necessary | Dark mode |
| **W** | Won't Have (this time) | Agreed to exclude | AI recommendations |

---

## Requirements Traceability Matrix (RTM)

**DEF** RTM tracks requirements from origin through design, implementation, and testing.

### Example RTM

| Req ID | Requirement | Design Doc | Code Module | Test Case | Status |
|--------|-------------|------------|-------------|-----------|--------|
| FR-001 | User login | D-001 | auth_module.py | TC-001 | Implemented |
| FR-002 | Search books | D-002 | search.py | TC-002 | Implemented |
| FR-003 | Generate report | D-003 | report.py | TC-003 | In Progress |
| NFR-001 | Response < 2s | D-001 | config.py | TC-004 | Tested |

### Benefits of RTM
- Ensures all requirements are addressed
- Identifies missing implementations
- Shows impact of requirement changes
- Supports regression testing
- Provides project status visibility

---

## Practice Questions

### MCQs

**Q1. "The system shall respond within 2 seconds" is an example of:**  
a) Functional requirement  
b) Non-functional requirement  
c) Design constraint  
d) Business rule  
**Answer: b) Non-functional requirement**  
*Explanation: It specifies performance, not a feature.*

**Q2. In FURPS model, 'U' stands for:**  
a) Utility  
b) Usability  
c) Uniformity  
d) Uniqueness  
**Answer: b) Usability**

**Q3. Which requirement gathering technique is best for large user bases?**  
a) Interviews  
b) Observation  
c) Questionnaires  
d) Prototyping  
**Answer: c) Questionnaires**

**Q4. Which word indicates a mandatory requirement in SRS?**  
a) Should  
b) May  
c) Shall  
d) Could  
**Answer: c) Shall**

**Q5. RTM stands for:**  
a) Requirements Testing Method  
b) Requirements Traceability Matrix  
c) Real-Time Monitoring  
d) Requirement Tracking Mechanism  
**Answer: b) Requirements Traceability Matrix**

---

### Short Answer Questions

**Q1. Differentiate between functional and non-functional requirements with examples.**  
**Answer:**

| Functional Requirements | Non-Functional Requirements |
|-------------------------|------------------------------|
| What the system should do | How well the system should perform |
| Specific behaviors and features | Quality attributes and constraints |
| Example: "System shall allow user registration" | Example: "Registration page loads in < 3 seconds" |
| Tested through functional testing | Tested through performance, security testing |
| Described using use cases | Described using metrics and standards |
| Core system capabilities | Enhances user experience and quality |

**Q2. Explain the FURPS model with examples.**  
**Answer:**
FURPS categorizes software quality attributes:
- **F**unctionality: Features like login, search, reports
- **U**sability: User-friendliness, intuitive interface, help system
- **R**eliability: 99.9% uptime, fault tolerance, backup recovery
- **P**erformance: Response time < 2s, support 1000 concurrent users
- **S**upportability: Easy to maintain, testable, portable across platforms

**Q3. Why is requirements validation important?**  
**Answer:**
- Detects errors early (cheaper to fix in requirements phase)
- Ensures completeness and consistency
- Reduces rework in later phases
- Establishes clear understanding with stakeholders
- Provides basis for testing
- Prevents scope creep
- Improves software quality
- Reduces project risks and cost overruns

---

## Exam Tips

1. **Functional vs Non-functional**: Always give examples in exams
2. **FURPS model**: Memorize all 5 categories with examples
3. **Gathering techniques**: Know when to use each technique
4. **Good vs bad requirements**: Practice identifying and correcting bad requirements
5. **"Shall" vs "Should"**: Use correctly in requirement examples
6. **RTM**: Draw a sample table when discussing requirements tracking
7. **Validation checklist**: Memorize the 7 validation criteria

---

## Textbook References
- Rajib Mall: Chapter 3 (Requirements Analysis)
- Pressman: Chapter 4 (Understanding Requirements)

---

**Previous Topic**: [SDLC Models](02_SDLC_Models.md)  
**Next Topic**: [SRS Document](04_SRS_Document.md)
