# Software Maintenance

## Overview
Software Maintenance is the process of modifying a software product after it has been delivered to correct faults, improve performance, or adapt it to a changing environment.

**DEF**
**Software Maintenance**: The modification of a software product after delivery to correct faults, to improve performance or other attributes, or to adapt the product to a modified environment.

## 1. Types of Maintenance

Maintenance activities generally consume 60-70% of the entire lifecycle cost. They are classified into four categories:

1. **Corrective Maintenance**: Fixing bugs and errors found after software release (approx. 20%).
2. **Adaptive Maintenance**: Modifying the software to run in a new or changed environment (e.g., new OS version) (approx. 25%).
3. **Perfective Maintenance**: Adding new features or improving performance to meet evolving user needs (approx. 50%).
4. **Preventive Maintenance**: Preventing future problems by refactoring code and restructuring (approx. 5%).

**TIP**
Perfective maintenance usually consumes the largest chunk of maintenance effort because users constantly demand new features once the software is launched.

## 2. Re-engineering vs Reverse Engineering
Software often becomes difficult to maintain due to poor structure. 
- **Reverse Engineering**: Analyzing a system to identify its components and their interrelationships, often going from code back to design documents.
- **Re-engineering**: Modifying the software to make it easier to understand, change, or test, typically involving reverse engineering followed by forward reconstruction.

**★ EXAM**
**Key Concept**: Reverse engineering extracts knowledge without modifying the system. Re-engineering actively modifies the system to improve it.

## Practice Questions

**Q1. Modifying software to add new features requested by the user is an example of:**
a) Corrective Maintenance
b) Preventive Maintenance
c) Adaptive Maintenance
d) Perfective Maintenance
**Answer: d**
*Explanation: Perfective maintenance deals with improving software and adding new capabilities based on user requests.*

**Q2. Which type of maintenance typically consumes the highest percentage of effort?**
a) Corrective
b) Adaptive
c) Perfective
d) Preventive
**Answer: c**
*Explanation: Perfective maintenance (adding enhancements) takes up about 50% of the total maintenance effort historically.*

**Q3. Extracting design and architecture models directly from the source code without making changes to the system is called:**
a) Forward Engineering
b) Reverse Engineering
c) Re-engineering
d) Refactoring
**Answer: b**
*Explanation: Reverse engineering involves analyzing the system to deduce its design but stops short of rebuilding or modifying it.*
