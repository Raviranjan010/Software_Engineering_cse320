# Software Engineering MCQs - Module 2: Software Design Principles

## Part 1: Design Principles

**Q1. Software design is the process of:**  
a) Writing code  
b) Testing software  
c) Transforming requirements into a blueprint for construction  
d) Deploying software  
**Answer: c) Transforming requirements into a blueprint for construction**  

**Q2. Which principle focuses on hiding complex implementation details?**  
a) Modularity  
b) Abstraction  
c) Coupling  
d) Cohesion  
**Answer: b) Abstraction**  

**Q3. The principle of dividing a system into separate modules is called:**  
a) Abstraction  
b) Information Hiding  
c) Modularity  
d) Refinement  
**Answer: c) Modularity**  

**Q4. Which is NOT a type of abstraction?**  
a) Procedural Abstraction  
b) Data Abstraction  
c) Control Abstraction  
d) Sequential Abstraction  
**Answer: d) Sequential Abstraction**  
*Explanation: The types are Procedural, Data, Control, and Object abstraction.*

**Q5. Information hiding helps to:**  
a) Increase complexity  
b) Reduce dependencies between modules  
c) Increase coupling  
d) Decrease cohesion  
**Answer: b) Reduce dependencies between modules**  

**Q6. In OOP, private variables are an example of:**  
a) Modularity  
b) Information Hiding  
c) Abstraction  
d) Refinement  
**Answer: b) Information Hiding**  

**Q7. MVC architecture is an example of:**  
a) Information Hiding  
b) Separation of Concerns  
c) Abstraction  
d) Coupling  
**Answer: b) Separation of Concerns**  

**Q8. Stepwise refinement is also known as:**  
a) Bottom-up design  
b) Top-down design  
c) Lateral design  
d) Circular design  
**Answer: b) Top-down design**  

**Q9. Which is NOT a benefit of modularity?**  
a) Parallel development  
b) Easier testing  
c) Increased coupling  
d) Better reusability  
**Answer: c) Increased coupling**  
*Explanation: Modularity aims to decrease coupling, not increase it.*

**Q10. In MVC, the 'M' stands for:**  
a) Module  
b) Model  
c) Method  
d) Management  
**Answer: b) Model**  

**Q11. The 'View' in MVC is responsible for:**  
a) Data storage  
b) User interface  
c) Application flow  
d) Business logic  
**Answer: b) User interface**  

**Q12. Refinement progresses from:**  
a) Detailed to abstract  
b) Abstract to detailed  
c) Random order  
d) None of the above  
**Answer: b) Abstract to detailed**  

**Q13. Which principle states that modules should depend only on interfaces, not internals?**  
a) Modularity  
b) Information Hiding  
c) Abstraction  
d) Separation of Concerns  
**Answer: b) Information Hiding**  

**Q14. Procedural abstraction is exemplified by:**  
a) Class with attributes  
b) Function with a specific task  
c) Database table  
d) User interface  
**Answer: b) Function with a specific task**  

**Q15. The goal of software design is to achieve:**  
a) High coupling, low cohesion  
b) Low coupling, high cohesion  
c) High coupling, high cohesion  
d) Low coupling, low cohesion  
**Answer: b) Low coupling, high cohesion**  

---

## Part 2: Cohesion

**Q16. Cohesion measures:**  
a) Interconnection between modules  
b) Internal strength of a module  
c) Number of modules in a system  
d) Size of modules  
**Answer: b) Internal strength of a module**  

**Q17. Which is the BEST type of cohesion?**  
a) Coincidental  
b) Logical  
c) Functional  
d) Temporal  
**Answer: c) Functional**  

**Q18. Which is the WORST type of cohesion?**  
a) Functional  
b) Sequential  
c) Coincidental  
d) Communicational  
**Answer: c) Coincidental**  

**Q19. A module that performs one and only one well-defined task has:**  
a) Coincidental cohesion  
b) Functional cohesion  
c) Temporal cohesion  
d) Logical cohesion  
**Answer: b) Functional cohesion**  

**Q20. Functions grouped because they execute at the same time exhibit:**  
a) Procedural cohesion  
b) Temporal cohesion  
c) Sequential cohesion  
d) Communicational cohesion  
**Answer: b) Temporal cohesion**  

**Q21. System initialization and cleanup are examples of:**  
a) Functional cohesion  
b) Temporal cohesion  
c) Sequential cohesion  
d) Coincidental cohesion  
**Answer: b) Temporal cohesion**  

**Q22. When output of one element is input to the next, it is:**  
a) Communicational cohesion  
b) Sequential cohesion  
c) Procedural cohesion  
d) Functional cohesion  
**Answer: b) Sequential cohesion**  

**Q23. Functions working on the same data structure have:**  
a) Sequential cohesion  
b) Communicational cohesion  
c) Procedural cohesion  
d) Functional cohesion  
**Answer: b) Communicational cohesion**  

**Q24. A utility module with unrelated functions has:**  
a) Functional cohesion  
b) Logical cohesion  
c) Coincidental cohesion  
d) Sequential cohesion  
**Answer: c) Coincidental cohesion**  

**Q25. Functions grouped by category but performing different tasks exhibit:**  
a) Logical cohesion  
b) Functional cohesion  
c) Procedural cohesion  
d) Temporal cohesion  
**Answer: a) Logical cohesion**  

**Q26. Functions that execute in a specific sequence show:**  
a) Temporal cohesion  
b) Procedural cohesion  
c) Sequential cohesion  
d) Communicational cohesion  
**Answer: b) Procedural cohesion**  

**Q27. The correct order of cohesion from WORST to BEST is:**  
a) Functional, Sequential, Communicational, Procedural, Temporal, Logical, Coincidental  
b) Coincidental, Logical, Temporal, Procedural, Communicational, Sequential, Functional  
c) Coincidental, Temporal, Logical, Procedural, Sequential, Communicational, Functional  
d) Functional, Communicational, Sequential, Procedural, Temporal, Logical, Coincidental  
**Answer: b) Coincidental, Logical, Temporal, Procedural, Communicational, Sequential, Functional**  

**Q28. A calculate_square_root() function that only calculates square root has:**  
a) Sequential cohesion  
b) Functional cohesion  
c) Communicational cohesion  
d) Procedural cohesion  
**Answer: b) Functional cohesion**  

**Q29. An assembly line where each station's output feeds the next is analogous to:**  
a) Coincidental cohesion  
b) Sequential cohesion  
c) Temporal cohesion  
d) Logical cohesion  
**Answer: b) Sequential cohesion**  

**Q30. High cohesion results in:**  
a) Difficult maintenance  
b) Easy testing and maintenance  
c) High coupling  
d) Complex modules  
**Answer: b) Easy testing and maintenance**  

---

## Part 3: Coupling

**Q31. Coupling measures:**  
a) Internal strength of a module  
b) Interconnection between modules  
c) Number of functions in a module  
d) Size of a module  
**Answer: b) Interconnection between modules**  

**Q32. Which is the BEST type of coupling?**  
a) Content coupling  
b) Data coupling  
c) Control coupling  
d) Common coupling  
**Answer: b) Data coupling**  

**Q33. Which is the WORST type of coupling?**  
a) Data coupling  
b) Stamp coupling  
c) Content coupling  
d) Control coupling  
**Answer: c) Content coupling**  

**Q34. Modules communicating only through parameters exhibit:**  
a) Content coupling  
b) Data coupling  
c) Control coupling  
d) Common coupling  
**Answer: b) Data coupling**  

**Q35. When one module modifies internal data of another module, it is:**  
a) Data coupling  
b) Content coupling  
c) Control coupling  
d) Stamp coupling  
**Answer: b) Content coupling**  

**Q36. Modules sharing a global data structure have:**  
a) Data coupling  
b) Common coupling  
c) Control coupling  
d) Stamp coupling  
**Answer: b) Common coupling**  

**Q37. When one module passes a data structure and another uses only part of it, it is:**  
a) Data coupling  
b) Stamp coupling  
c) Control coupling  
d) Content coupling  
**Answer: b) Stamp coupling**  

**Q38. Control coupling occurs when:**  
a) Modules share global data  
b) One module controls the logic of another by passing control flags  
c) Modules communicate through parameters  
d) One module accesses internal data of another  
**Answer: b) One module controls the logic of another by passing control flags**  

**Q39. External coupling happens when:**  
a) Modules share external file format or protocol  
b) Modules pass simple data parameters  
c) Modules share global data  
d) Modules are completely independent  
**Answer: a) Modules share external file format or protocol**  

**Q40. The correct order of coupling from BEST to WORST is:**  
a) Data, Stamp, Control, Common, External, Content  
b) Content, External, Common, Control, Stamp, Data  
c) Data, Control, Stamp, Common, External, Content  
d) Content, Common, Control, Stamp, Data, External  
**Answer: a) Data, Stamp, Control, Common, External, Content**  

**Q41. Low coupling results in:**  
a) Difficult maintenance  
b) High module independence  
c) High dependencies  
d) Complex testing  
**Answer: b) High module independence**  

**Q42. A function calling another function with simple integer parameters demonstrates:**  
a) Content coupling  
b) Data coupling  
c) Control coupling  
d) Common coupling  
**Answer: b) Data coupling**  

**Q43. Two modules reading/writing the same global variable have:**  
a) Data coupling  
b) Common coupling  
c) Stamp coupling  
d) Control coupling  
**Answer: b) Common coupling**  

**Q44. Message coupling is typical in:**  
a) Procedural programming  
b) Object-oriented programming  
c) Assembly language  
d) Functional programming  
**Answer: b) Object-oriented programming**  

**Q45. The ideal design goal is:**  
a) High cohesion, high coupling  
b) Low cohesion, low coupling  
c) High cohesion, low coupling  
d) Low cohesion, high coupling  
**Answer: c) High cohesion, low coupling**  

---

## Part 4: DFD and Structured Analysis

**Q46. DFD stands for:**  
a) Data Function Diagram  
b) Data Flow Diagram  
c) Dynamic Flow Diagram  
d) Data Flow Design  
**Answer: b) Data Flow Diagram**  

**Q47. In DFD, a rectangle represents:**  
a) Process  
b) Data Store  
c) External Entity  
d) Data Flow  
**Answer: c) External Entity**  

**Q48. In DFD, a circle or rounded rectangle represents:**  
a) Process  
b) Data Store  
c) External Entity  
d) Data Flow  
**Answer: a) Process**  

**Q49. In DFD, an open rectangle represents:**  
a) Process  
b) Data Store  
c) External Entity  
d) Data Flow  
**Answer: b) Data Store**  

**Q50. In DFD, an arrow represents:**  
a) Process  
b) Data Store  
c) External Entity  
d) Data Flow  
**Answer: d) Data Flow**  

**Q51. Level 0 DFD is also known as:**  
a) Context Diagram  
b) Detailed DFD  
c) Expanded DFD  
d) Final DFD  
**Answer: a) Context Diagram**  

**Q52. A context diagram shows:**  
a) Detailed processes  
b) System as a single process with external entities  
c) Data stores  
d) Internal system components  
**Answer: b) System as a single process with external entities**  

**Q53. DFD does NOT show:**  
a) Data flows  
b) Processes  
c) Control flow or timing  
d) Data stores  
**Answer: c) Control flow or timing**  

**Q54. In DFD, data cannot flow:**  
a) From entity to process  
b) From process to data store  
c) From entity to entity  
d) From process to entity  
**Answer: c) From entity to entity**  

**Q55. Structured analysis uses:**  
a) UML diagrams  
b) DFDs and data dictionary  
c) Class diagrams  
d) Sequence diagrams  
**Answer: b) DFDs and data dictionary**  

---

## Part 5: Structure Charts

**Q56. Structure charts are used in:**  
a) Object-oriented design  
b) Structured design  
c) Agile development  
d) Prototyping  
**Answer: b) Structured design**  

**Q57. In structure charts, a rectangle represents:**  
a) Data flow  
b) Module  
c) Process  
d) Entity  
**Answer: b) Module**  

**Q58. A line with a hollow circle in structure charts represents:**  
a) Control flow  
b) Data couple (data passed)  
c) Module call  
d) Decision  
**Answer: b) Data couple (data passed)**  

**Q59. A line with a filled circle represents:**  
a) Data couple  
b) Control couple (control information)  
c) Module hierarchy  
d) Data store  
**Answer: b) Control couple (control information)**  

**Q60. Transform analysis is used to:**  
a) Convert DFD to structure chart  
b) Convert class diagram to code  
c) Create use case diagrams  
d) Design databases  
**Answer: a) Convert DFD to structure chart**  

**Q61. Transaction analysis is used when:**  
a) System has single input-output path  
b) System triggers different processes based on input type  
c) System is object-oriented  
d) System uses agile methodology  
**Answer: b) System triggers different processes based on input type**  

**Q62. Structure charts show:**  
a) Temporal relationships  
b) Module hierarchy and relationships  
c) Data flow timing  
d) Object interactions  
**Answer: b) Module hierarchy and relationships**  

**Q63. Fan-out in structure charts refers to:**  
a) Number of modules calling a module  
b) Number of modules a module calls  
c) Data flow direction  
d) Control flow pattern  
**Answer: b) Number of modules a module calls**  

**Q64. Fan-in in structure charts refers to:**  
a) Number of modules a module calls  
b) Number of modules calling a module  
c) Data couples in a module  
d) Control couples in a module  
**Answer: b) Number of modules calling a module**  

**Q65. High fan-out may indicate:**  
a) Good design  
b) Module is too complex, needs decomposition  
c) Low coupling  
d) High cohesion  
**Answer: b) Module is too complex, needs decomposition**  

---

## Part 6: Design Quality and Principles

**Q66. Which design principle reduces complexity by showing only essential features?**  
a) Modularity  
b) Abstraction  
c) Refinement  
d) Coupling  
**Answer: b) Abstraction**  

**Q67. The ability to work on different modules simultaneously is due to:**  
a) High coupling  
b) Modularity  
c) Low cohesion  
d) Content coupling  
**Answer: b) Modularity**  

**Q68. Which is a sign of good software design?**  
a) High coupling, low cohesion  
b) Low coupling, high cohesion  
c) High coupling, high cohesion  
d) Low coupling, low cohesion  
**Answer: b) Low coupling, high cohesion**  

**Q69. A module with coincidental cohesion is:**  
a) Easy to maintain  
b) Difficult to maintain  
c) Highly reusable  
d) Well-structured  
**Answer: b) Difficult to maintain**  

**Q70. Content coupling should be:**  
a) Encouraged  
b) Avoided  
c) Used frequently  
d) Preferred over data coupling  
**Answer: b) Avoided**  

**Q71. The principle of hiding internal details is called:**  
a) Abstraction  
b) Information Hiding  
c) Encapsulation  
d) Both b and c  
**Answer: d) Both b and c**  

**Q72. Which coupling type is most desirable?**  
a) Common coupling  
b) Control coupling  
c) Data coupling  
d) Content coupling  
**Answer: c) Data coupling**  

**Q73. Temporal cohesion is considered:**  
a) High cohesion  
b) Low to moderate cohesion  
c) Functional cohesion  
d) Best cohesion  
**Answer: b) Low to moderate cohesion**  

**Q74. A module that validates email format only exhibits:**  
a) Sequential cohesion  
b) Functional cohesion  
c) Logical cohesion  
d) Temporal cohesion  
**Answer: b) Functional cohesion**  

**Q75. Structure chart is derived from:**  
a) Class diagram  
b) DFD  
c) Use case diagram  
d) Sequence diagram  
**Answer: b) DFD**  

**Q76. In DFD, balancing means:**  
a) Equal number of processes at each level  
b) Data flows must be conserved between levels  
c) Equal data stores at each level  
d) Symmetric diagram  
**Answer: b) Data flows must be conserved between levels**  

**Q77. A data dictionary contains:**  
a) Only data names  
b) Detailed description of all data elements in DFD  
c) Only data types  
d) Only data values  
**Answer: b) Detailed description of all data elements in DFD**  

**Q78. Which is NOT a component of DFD?**  
a) Process  
b) Data Store  
c) Actor  
d) External Entity  
**Answer: c) Actor**  
*Explanation: Actor is from Use Case diagrams, not DFD.*

**Q79. Design patterns help to:**  
a) Reinvent solutions  
b) Reuse proven solutions to common problems  
c) Increase coupling  
d) Decrease cohesion  
**Answer: b) Reuse proven solutions to common problems**  

**Q80. The main objective of structured design is:**  
a) Create object-oriented systems  
b) Transform DFD into structure chart with good module independence  
c) Write efficient code  
d) Test software  
**Answer: b) Transform DFD into structure chart with good module independence**  

**Q81. Refinement helps in:**  
a) Increasing complexity  
b) Progressive elaboration from abstract to detailed  
c) Reducing modularity  
d) Increasing coupling  
**Answer: b) Progressive elaboration from abstract to detailed**  

**Q82. Which cohesion type is related by timing of execution?**  
a) Procedural  
b) Temporal  
c) Sequential  
d) Functional  
**Answer: b) Temporal**  

**Q83. Modules should ideally communicate through:**  
a) Global variables  
b) Parameters (data coupling)  
c) Internal data access  
d) Control flags  
**Answer: b) Parameters (data coupling)**  

**Q84. The 'Controller' in MVC handles:**  
a) Data storage  
b) User interface  
c) Application flow and user input  
d) Database queries  
**Answer: c) Application flow and user input**  

**Q85. Good software design results in:**  
a) Difficult testing  
b) Easy maintenance and modification  
c) High interdependencies  
d) Complex understanding  
**Answer: b) Easy maintenance and modification**  

---

## Summary
**Total MCQs: 85**  
**Module Coverage:**
- Design Principles: Q1-Q15
- Cohesion: Q16-Q30
- Coupling: Q31-Q45
- DFD and Structured Analysis: Q46-Q55
- Structure Charts: Q56-Q65
- Design Quality: Q66-Q85

**Key Topics Covered:**
✅ Abstraction, Modularity, Information Hiding  
✅ 7 Types of Cohesion (Coincidental to Functional)  
✅ 6 Types of Coupling (Data to Content)  
✅ DFD components and levels  
✅ Structure charts notation  
✅ Transform and Transaction analysis  
✅ MVC architecture  
✅ Design quality principles  

---

*End of Module 2 MCQs*
