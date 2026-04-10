# Testing Levels

## Overview
Software testing is typically performed at different levels throughout the software development lifecycle. Each level focuses on different aspects of the system, from individual units to the fully integrated system.

**DEF**
**Testing Levels**: Phases in the testing lifecycle where different components of the software are tested against their expected behavior. The four main levels are Unit, Integration, System, and Acceptance Testing.

## 1. Unit Testing
Unit testing is the lowest level of testing, focusing on individual components, functions, or methods in isolation.
- **Who performs it**: Developers.
- **Technique typically used**: White Box Testing.
- **Goal**: Ensure each unit functions correctly on its own.
- **Tools**: JUnit, NUnit, TestNG, Jest.

## 2. Integration Testing
Once units are tested independently, they are combined and tested together to ensure they interact correctly.
- **Who performs it**: Testers and Developers.
- **Goal**: Identify problems with the interfaces and communication between modules.

**TIP**
Common approaches to integration testing include:
- **Top-Down**: Testing from top-level modules down to low-level modules using stubs.
- **Bottom-Up**: Testing from bottom-level modules up to top-level modules using drivers.
- **Sandwich / Hybrid**: Combining both Top-Down and Bottom-Up testing.

## 3. System Testing
System testing involves testing the complete, integrated system to ensure it meets the specified requirements.
- **Who performs it**: Independent Testers.
- **Technique typically used**: Black Box Testing.
- **Goal**: Validate end-to-end system specifications.

## 4. Acceptance Testing
This is the final phase of testing before the software goes live. It ensures the software is ready for use by the end users.

### Types of Acceptance Testing:
- **Alpha Testing**: Conducted internally by developers and QA inside the organization.
- **Beta Testing**: Conducted in a real environment by a limited number of actual end-users.
- **User Acceptance Testing (UAT)**: Formal testing with respect to user needs, requirements, and business processes.

**★ EXAM**
**V-Model of Testing**:
The V-Model connects testing levels with development phases:
- Requirements Analysis -> Acceptance Testing
- System Design -> System Testing
- Architecture Design -> Integration Testing
- Module Design -> Unit Testing

## Practice Questions

**Q1. Which level of testing uses "Stubs" and "Drivers"?**
a) Unit Testing
b) Integration Testing
c) System Testing
d) Acceptance Testing
**Answer: b**
*Explanation: Stubs and Drivers are dummy modules used to simulate missing lower-level and higher-level components during Integration Testing.*

**Q2. Beta testing is generally done by:**
a) Developers inside the organization
b) Independent testing team
c) Selected end-users in their own environment
d) Project Managers
**Answer: c**
*Explanation: Beta testing is a form of acceptance testing conducted by end-users at their own site/environment.*

**Q3. System testing is predominantly considered as what type of testing?**
a) White Box
b) Clear Box
c) Black Box
d) Open Box
**Answer: c**
*Explanation: System testing evaluates the software against requirements without looking at internal infrastructure.*
