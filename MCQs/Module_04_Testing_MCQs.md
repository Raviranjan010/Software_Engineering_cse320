# Software Engineering MCQs - Module 4: Software Testing

## Part 1: Testing Fundamentals

**Q1. Testing is the process of:**  
a) Writing code  
b) Executing software to find defects  
c) Designing software  
d) Deploying software  
**Answer: b) Executing software to find defects**  

**Q2. The difference between Verification and Validation is:**  
a) Verification: Are we building the product right? Validation: Are we building the right product?  
b) Verification: Are we building the right product? Validation: Are we building the product right?  
c) Both are same  
d) Neither is important  
**Answer: a) Verification: Are we building the product right? Validation: Are we building the right product?**  

**Q3. Verification involves:**  
a) Dynamic testing  
b) Static testing (reviews, inspections)  
c) Executing code  
d) Running test cases  
**Answer: b) Static testing (reviews, inspections)**  

**Q4. Validation involves:**  
a) Static testing  
b) Dynamic testing (executing code)  
c) Code reviews  
d) Inspections  
**Answer: b) Dynamic testing (executing code)**  

**Q5. An error is:**  
a) Human action that produces incorrect result  
b) Incorrect step in code  
c) Deviation from expected behavior  
d) Test case failure  
**Answer: a) Human action that produces incorrect result**  

**Q6. A defect (bug) is:**  
a) Human action  
b) Incorrect step in code that may cause failure  
c) System crash  
d) Test execution  
**Answer: b) Incorrect step in code that may cause failure**  

**Q7. A failure is:**  
a) Human mistake  
b) Code error  
c) Deviation from expected behavior during execution  
d) Test case design  
**Answer: c) Deviation from expected behavior during execution**  

**Q8. Which testing principle states "Exhaustive testing is impossible"?**  
a) Testing shows presence of defects  
b) Exhaustive testing is impossible  
c) Early testing  
d) Defect clustering  
**Answer: b) Exhaustive testing is impossible**  

**Q9. The cost of fixing a defect increases:**  
a) Decreases in later phases  
b) Remains same  
c) Increases exponentially in later phases  
d) Is zero in production  
**Answer: c) Increases exponentially in later phases**  

**Q10. Alpha testing is performed by:**  
a) Developers  
b) Customers at developer's site  
c) Independent testers  
d) End users at their site  
**Answer: b) Customers at developer's site**  

**Q11. Beta testing is performed by:**  
a) Developers  
b) Customers at their own site  
c) Testers only  
d) Project managers  
**Answer: b) Customers at their own site**  

**Q12. Regression testing ensures:**  
a) New code works  
b) Changes haven't broken existing functionality  
c) First-time testing  
d) Performance testing  
**Answer: b) Changes haven't broken existing functionality**  

**Q13. Smoke testing is:**  
a) Detailed testing  
b) Preliminary testing to check basic functionality  
c) Performance testing  
d) Security testing  
**Answer: b) Preliminary testing to check basic functionality**  

**Q14. White box testing is also known as:**  
a) Behavioral testing  
b) Structural testing  
c) Black box testing  
d) Functional testing  
**Answer: b) Structural testing**  

**Q15. Black box testing is also known as:**  
a) Structural testing  
b) Behavioral/Functional testing  
c) Glass box testing  
d) Clear box testing  
**Answer: b) Behavioral/Functional testing**  

---

## Part 2: Black Box Testing

**Q16. In black box testing, the tester:**  
a) Sees the internal code  
b) Does NOT see the internal code  
c) Modifies the code  
d) Designs the architecture  
**Answer: b) Does NOT see the internal code**  

**Q17. Equivalence Partitioning divides input into:**  
a) Random values  
b) Equivalence classes where all values behave similarly  
c) Only valid values  
d) Only invalid values  
**Answer: b) Equivalence classes where all values behave similarly**  

**Q18. For age validation (18-60), how many equivalence classes exist?**  
a) 1  
b) 2  
c) 3  
d) 4  
**Answer: c) 3**  
*Explanation: Valid [18-60], Invalid below 18, Invalid above 60*

**Q19. Boundary Value Analysis tests:**  
a) Middle values  
b) Values at boundaries  
c) Random values  
d) All values  
**Answer: b) Values at boundaries**  

**Q20. For range [a, b], BVA tests how many values?**  
a) 2  
b) 4  
c) 6  
d) 8  
**Answer: c) 6**  
*Explanation: a-1, a, a+1, b-1, b, b+1*

**Q21. For age 18-60, which is NOT a BVA test value?**  
a) 17  
b) 18  
c) 30  
d) 61  
**Answer: c) 30**  
*Explanation: 30 is middle value, not boundary. BVA: 17, 18, 19, 59, 60, 61*

**Q22. Decision Table Testing is used when:**  
a) Single condition exists  
b) Multiple conditions combine in different ways  
c) Only boundary testing needed  
d) Code structure is known  
**Answer: b) Multiple conditions combine in different ways**  

**Q23. State Transition Testing is useful for:**  
a) Testing mathematical functions  
b) Testing systems with different states  
c) Testing UI only  
d) Testing database  
**Answer: b) Testing systems with different states**  

**Q24. Which technique is MORE effective at finding boundary errors?**  
a) Equivalence Partitioning  
b) Boundary Value Analysis  
c) Both are equal  
d) Neither  
**Answer: b) Boundary Value Analysis**  

**Q25. Best practice is to use:**  
a) Only EP  
b) Only BVA  
c) Both EP and BVA together  
d) Neither  
**Answer: c) Both EP and BVA together**  

**Q26. For password field (6-12 characters), a valid EP test value is:**  
a) 3 characters  
b) 8 characters  
c) 15 characters  
d) 0 characters  
**Answer: b) 8 characters**  

**Q27. Use case testing is based on:**  
a) Code structure  
b) Use case scenarios  
c) Database schema  
d) Network topology  
**Answer: b) Use case scenarios**  

**Q28. Exploratory testing is:**  
a) Scripted testing  
b) Unscripted, simultaneous learning and testing  
c) Automated testing  
d) Performance testing  
**Answer: b) Unscripted, simultaneous learning and testing**  

**Q29. Error Guessing is based on:**  
a) Formal techniques  
b) Tester's experience and intuition  
c) Mathematical models  
d) Code coverage  
**Answer: b) Tester's experience and intuition**  

**Q30. Which is a black box testing technique?**  
a) Statement coverage  
b) Branch coverage  
c) Equivalence Partitioning  
d) Path coverage  
**Answer: c) Equivalence Partitioning**  

---

## Part 3: White Box Testing

**Q31. White box testing requires knowledge of:**  
a) Requirements only  
b) Internal code structure  
c) User interface  
d) Business logic only  
**Answer: b) Internal code structure**  

**Q32. Statement Coverage ensures:**  
a) Every statement is executed at least once  
b) Every branch is taken  
c) Every path is executed  
d) Every condition is tested  
**Answer: a) Every statement is executed at least once**  

**Q33. Branch Coverage ensures:**  
a) Every statement executes  
b) Every decision branch (True/False) is executed  
c) Every path executes  
d) Every function calls  
**Answer: b) Every decision branch (True/False) is executed**  

**Q34. Path Coverage ensures:**  
a) Every statement executes  
b) Every branch executes  
c) Every independent path executes  
d) Every function executes  
**Answer: c) Every independent path executes**  

**Q35. Which is the STRONGEST coverage?**  
a) Statement Coverage  
b) Branch Coverage  
c) Path Coverage  
d) Function Coverage  
**Answer: c) Path Coverage**  

**Q36. Cyclomatic Complexity measures:**  
a) Code size  
b) Logical complexity (number of independent paths)  
c) Execution time  
d) Memory usage  
**Answer: b) Logical complexity (number of independent paths)**  

**Q37. Cyclomatic Complexity V(G) formula is:**  
a) E + N + 2P  
b) E - N + 2P  
c) E * N * P  
d) N - E + P  
**Answer: b) E - N + 2P**  
*Where E=edges, N=nodes, P=connected components*

**Q38. Alternative formula for Cyclomatic Complexity:**  
a) Number of statements + 1  
b) Number of decision nodes + 1  
c) Number of functions + 1  
d) Number of variables + 1  
**Answer: b) Number of decision nodes + 1**  

**Q39. If a program has 10 nodes, 11 edges, 1 component, V(G) is:**  
a) 2  
b) 3  
c) 4  
d) 5  
**Answer: b) 3**  
*Explanation: V(G) = 11 - 10 + 2(1) = 3*

**Q40. Cyclomatic Complexity of 5 means:**  
a) 5 statements  
b) 5 independent paths  
c) 5 functions  
d) 5 variables  
**Answer: b) 5 independent paths**  

**Q41. McCabe's recommended maximum cyclomatic complexity is:**  
a) 5  
b) 10  
c) 20  
d) 50  
**Answer: b) 10**  

**Q42. Which is NOT a white box technique?**  
a) Statement coverage  
b) Branch coverage  
c) Equivalence Partitioning  
d) Path coverage  
**Answer: c) Equivalence Partitioning**  

**Q43. Condition Coverage tests:**  
a) Each boolean sub-expression True and False  
b) Each statement  
c) Each path  
d) Each function  
**Answer: a) Each boolean sub-expression True and False**  

**Q44. Multiple Condition Coverage tests:**  
a) Single conditions  
b) All combinations of conditions  
c) Only valid paths  
d) Only invalid paths  
**Answer: b) All combinations of conditions**  

**Q45. Loop Coverage tests:**  
a) Loop boundaries and iterations  
b) Loop variables only  
c) Loop conditions only  
d) Loop statements only  
**Answer: a) Loop boundaries and iterations**  

---

## Part 4: Testing Levels

**Q46. The FIRST level of testing is:**  
a) Integration Testing  
b) System Testing  
c) Unit Testing  
d) Acceptance Testing  
**Answer: c) Unit Testing**  

**Q47. Unit Testing is performed by:**  
a) Customers  
b) Developers  
c) Independent testers  
d) Project managers  
**Answer: b) Developers**  

**Q48. Integration Testing tests:**  
a) Individual modules  
b) Interaction between integrated modules  
c) Complete system  
d) User acceptance  
**Answer: b) Interaction between integrated modules**  

**Q49. Top-down Integration starts with:**  
a) Low-level modules  
b) High-level modules  
c) Middle modules  
d) All modules simultaneously  
**Answer: b) High-level modules**  

**Q50. Bottom-up Integration starts with:**  
a) High-level modules  
b) Low-level modules  
c) Middle modules  
d) Random modules  
**Answer: b) Low-level modules**  

**Q51. Stubs are used in:**  
a) Bottom-up integration  
b) Top-down integration  
c) Unit testing  
d) System testing  
**Answer: b) Top-down integration**  

**Q52. Drivers are used in:**  
a) Top-down integration  
b) Bottom-up integration  
c) Acceptance testing  
d) Regression testing  
**Answer: b) Bottom-up integration**  

**Q53. Big Bang Integration tests:**  
a) One module at a time  
b) All modules at once  
c) Top modules first  
d) Bottom modules first  
**Answer: b) All modules at once**  

**Q54. System Testing tests:**  
a) Individual modules  
b) Complete integrated system against requirements  
c) Only UI  
d) Only database  
**Answer: b) Complete integrated system against requirements**  

**Q55. User Acceptance Testing (UAT) is performed by:**  
a) Developers  
b) Testers  
c) End users/customers  
d) Project managers  
**Answer: c) End users/customers**  

**Q56. Which testing level validates business requirements?**  
a) Unit Testing  
b) Integration Testing  
c) System Testing  
d) Acceptance Testing  
**Answer: d) Acceptance Testing**  

**Q57. Sandwich/Hybrid Integration combines:**  
a) Top-down and Bottom-up  
b) Unit and System  
c) Black box and White box  
d) Alpha and Beta  
**Answer: a) Top-down and Bottom-up**  

**Q58. A stub:**  
a) Calls the module under test  
b) Simulates lower-level modules  
c) Simulates higher-level modules  
d) Tests the interface  
**Answer: b) Simulates lower-level modules**  

**Q59. A driver:**  
a) Simulates higher-level modules that call the module under test  
b) Simulates lower-level modules  
c) Is the main program  
d) Is a test case  
**Answer: a) Simulates higher-level modules that call the module under test**  

**Q60. Which integration strategy is easiest to debug?**  
a) Big Bang  
b) Top-down  
c) Bottom-up  
d) Both Top-down and Bottom-up  
**Answer: d) Both Top-down and Bottom-up**  

---

## Part 5: Automation and Specialized Testing

**Q61. Test Automation is beneficial for:**  
a) One-time testing  
b) Repetitive tests and regression testing  
c) Exploratory testing  
d) Ad-hoc testing  
**Answer: b) Repetitive tests and regression testing**  

**Q62. Selenium is used for:**  
a) Unit testing  
b) Web application automation testing  
c) Performance testing  
d) Security testing  
**Answer: b) Web application automation testing**  

**Q63. Performance Testing checks:**  
a) Functionality  
b) Speed, responsiveness, stability  
c) Security  
d) Usability  
**Answer: b) Speed, responsiveness, stability**  

**Q64. Load Testing determines:**  
a) System behavior under expected load  
b) System breaking point  
c) Security vulnerabilities  
d) Code quality  
**Answer: a) System behavior under expected load**  

**Q65. Stress Testing determines:**  
a) Normal performance  
b) System behavior beyond normal capacity (breaking point)  
c) UI design  
d) Code coverage  
**Answer: b) System behavior beyond normal capacity (breaking point)**  

**Q66. Security Testing identifies:**  
a) Functional defects  
b) Vulnerabilities and security risks  
c) Performance issues  
d) Usability problems  
**Answer: b) Vulnerabilities and security risks**  

**Q67. Usability Testing evaluates:**  
a) Code quality  
b) User-friendliness and ease of use  
c) Performance  
d) Security  
**Answer: b) User-friendliness and ease of use**  

**Q68. API Testing tests:**  
a) User interface  
b) Application Programming Interfaces  
c) Database only  
d) Network only  
**Answer: b) Application Programming Interfaces**  

**Q69. Mobile Testing challenges include:**  
a) Device fragmentation  
b) Network variations  
c) Battery consumption  
d) All of the above  
**Answer: d) All of the above**  

**Q70. AI-assisted testing can:**  
a) Replace all testers  
b) Generate test cases, predict failures, optimize test suites  
c) Only execute tests  
d) Only report bugs  
**Answer: b) Generate test cases, predict failures, optimize test suites**  

**Q71. JMeter is a tool for:**  
a) Unit testing  
b) Performance/Load testing  
c) Security testing  
d) Code review  
**Answer: b) Performance/Load testing**  

**Q72. JUnit is used for:**  
a) Java unit testing  
b) Web testing  
c) Performance testing  
d) Security testing  
**Answer: a) Java unit testing**  

**Q73. Cross-browser testing ensures:**  
a) Application works on different browsers  
b) Application is secure  
c) Application is fast  
d) Application has good UI  
**Answer: a) Application works on different browsers**  

**Q74. Penetration Testing is:**  
a) Functional testing  
b) Ethical hacking to find security vulnerabilities  
c) Performance testing  
d) Usability testing  
**Answer: b) Ethical hacking to find security vulnerabilities**  

**Q75. Compatibility Testing checks:**  
a) System works across different environments (OS, browsers, devices)  
b) System is secure  
c) System is fast  
d) System is functional  
**Answer: a) System works across different environments (OS, browsers, devices)**  

---

## Part 6: Test Case Design and Metrics

**Q76. A test case includes:**  
a) Only input  
b) Input, expected output, and steps  
c) Only output  
d) Only steps  
**Answer: b) Input, expected output, and steps**  

**Q77. Test coverage measures:**  
a) How much code is tested  
b) How many testers are there  
c) How long testing takes  
d) How many bugs found  
**Answer: a) How much code is tested**  

**Q78. 100% statement coverage means:**  
a) All statements executed at least once  
b) All paths executed  
c) All branches executed  
d) All conditions tested  
**Answer: a) All statements executed at least once**  

**Q79. Defect Density is calculated as:**  
a) Defects / Size (KLOC or FP)  
b) Size / Defects  
c) Defects * Size  
d) Defects + Size  
**Answer: a) Defects / Size (KLOC or FP)**  

**Q80. Test Effectiveness measures:**  
a) How many defects found by testing  
b) How fast testing is done  
c) How many test cases written  
d) How many testers involved  
**Answer: a) How many defects found by testing**  

**Q81. A test suite is:**  
a) Single test case  
b) Collection of test cases  
c) Test report  
d) Test plan  
**Answer: b) Collection of test cases**  

**Q82. Positive testing verifies:**  
a) System handles invalid input  
b) System works with valid input  
c) System crashes  
d) System is slow  
**Answer: b) System works with valid input**  

**Q83. Negative testing verifies:**  
a) System works with valid input  
b) System handles invalid input gracefully  
c) System is fast  
d) System has good UI  
**Answer: b) System handles invalid input gracefully**  

**Q84. Mutation Testing:**  
a) Introduces small changes to code to check test quality  
b) Tests mutations in biology  
c) Tests UI changes  
d) Tests database changes  
**Answer: a) Introduces small changes to code to check test quality**  

**Q85. A test oracle is:**  
a) Test tool  
b) Mechanism to determine expected output  
c) Test case  
d) Test report  
**Answer: b) Mechanism to determine expected output**  

---

## Part 7: Advanced Testing Concepts

**Q86. The pesticide paradox states:**  
a) Testing kills software  
b) Same tests become less effective over time  
c) Testing is expensive  
d) Testing is unnecessary  
**Answer: b) Same tests become less effective over time**  

**Q87. Early testing principle means:**  
a) Test after deployment  
b) Start testing as early as possible  
c) Test only at end  
d) Test only during coding  
**Answer: b) Start testing as early as possible**  

**Q88. Defect clustering means:**  
a) Defects are evenly distributed  
b) Most defects are in few modules  
c) No defects exist  
d) All modules have equal defects  
**Answer: b) Most defects are in few modules**  

**Q89. The absence-of-errors fallacy is:**  
a) Finding no errors means system is perfect  
b) Finding no errors means system meets user needs  
c) Finding no errors is impossible  
d) Finding no errors is easy  
**Answer: b) Finding no errors means system meets user needs**  
*Explanation: Even if no bugs found, system may not meet user needs.*

**Q90. Static testing includes:**  
a) Executing code  
b) Reviews, walkthroughs, inspections  
c) Running test cases  
d) Performance testing  
**Answer: b) Reviews, walkthroughs, inspections**  

**Q91. Dynamic testing includes:**  
a) Code reviews  
b) Executing code with test data  
c) Inspections  
d) Walkthroughs  
**Answer: b) Executing code with test data**  

**Q92. A walkthrough is:**  
a) Formal review process  
b) Informal review led by author  
c) Automated testing  
d) Performance testing  
**Answer: b) Informal review led by author**  

**Q93. An inspection is:**  
a) Informal review  
b) Formal review with defined roles and process  
c) Ad-hoc testing  
d) Exploratory testing  
**Answer: b) Formal review with defined roles and process**  

**Q94. Test-Driven Development (TDD) means:**  
a) Write tests after code  
b) Write tests before code  
c) No testing needed  
d) Only manual testing  
**Answer: b) Write tests before code**  

**Q95. Behavior-Driven Development (BDD) focuses on:**  
a) Code structure  
b) System behavior from user perspective  
c) Database design  
d) Network architecture  
**Answer: b) System behavior from user perspective**  

**Q96. Fuzz Testing involves:**  
a) Valid input testing  
b) Random invalid input to find crashes  
c) UI testing  
d) Performance testing  
**Answer: b) Random invalid input to find crashes**  

**Q97. A/B Testing compares:**  
a) Two versions to see which performs better  
b) Code quality  
c) Test coverage  
d) Defect density  
**Answer: a) Two versions to see which performs better**  

**Q98. Recovery Testing checks:**  
a) System performance  
b) System ability to recover from crashes  
c) System security  
d) System usability  
**Answer: b) System ability to recover from crashes**  

**Q99. Installation Testing verifies:**  
a) System can be installed successfully  
b) System is fast  
c) System is secure  
d) System has good UI  
**Answer: a) System can be installed successfully**  

**Q100. Which metric shows testing completeness?**  
a) Defect Density  
b) Test Coverage  
c) Cyclomatic Complexity  
d) Lines of Code  
**Answer: b) Test Coverage**  

---

## Summary
**Total MCQs: 100**  
**Module Coverage:**
- Testing Fundamentals: Q1-Q15
- Black Box Testing: Q16-Q30
- White Box Testing: Q31-Q45
- Testing Levels: Q46-Q60
- Automation & Specialized Testing: Q61-Q75
- Test Case Design & Metrics: Q76-Q85
- Advanced Testing Concepts: Q86-Q100

**Key Topics Covered:**
✅ Verification vs Validation  
✅ Error, Defect, Failure  
✅ Equivalence Partitioning & BVA  
✅ Decision Table & State Transition Testing  
✅ Statement, Branch, Path Coverage  
✅ Cyclomatic Complexity calculations  
✅ Unit, Integration, System, Acceptance Testing  
✅ Top-down vs Bottom-up integration  
✅ Performance, Security, Usability Testing  
✅ Test metrics and coverage  
✅ Testing principles and best practices  

---

*End of Module 4 MCQs*
