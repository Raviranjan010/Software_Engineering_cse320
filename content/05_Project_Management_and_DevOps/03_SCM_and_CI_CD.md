# SCM and CI/CD

## Overview
Software Configuration Management (SCM) is the discipline of managing change throughout the software lifecycle. Continuous Integration and Continuous Deployment (CI/CD) automate this process.

**DEF**
**Software Configuration Management**: The task of tracking and controlling changes in the software, part of the larger cross-disciplinary field of configuration management.

## Baseline & Version Control
A **Baseline** is an approved version of a software asset that provides a solid foundation for further development. Version Control Systems (VCS) like Git help track changes, allowing developers to revert, branch, and merge code safely.

### Git & GitHub
- **Git**: Distributed version control system.
- **GitHub**: Cloud-based hosting for Git repositories.
- **Commit**: Snapshot of changes.
- **Branch**: An independent line of development.
- **Merge**: Combining branches securely.

## CI/CD Pipeline
Continuous Integration and Continuous Deployment streamline software development by automating testing and releasing.

1. **Continuous Integration (CI)**: Automatically merging developer changes into a central repository multiple times a day. Each merge triggers an automated build and test sequence.
2. **Continuous Delivery (CD)**: Automatically preparing code changes for a release to production.
3. **Continuous Deployment (CD)**: Automatically deploying every code change that passes the tests to production without manual intervention.

**TIP**
Tools like GitHub Actions, Jenkins, and GitLab CI are used to set up CI/CD pipelines.

## Practice Questions

**Q1. What is an approved snapshot of a software project called?**
a) Repository
b) Milestone
c) Baseline
d) Pipeline
**Answer: c**
*Explanation: A baseline is an approved specification or product that can only be changed through formal procedures.*

**Q2. Which practice ensures every code merge triggers an automated build and test?**
a) Continuous Deployment
b) Continuous Integration
c) Software Configuration Management
d) Code Review
**Answer: b**
*Explanation: Continuous Integration (CI) validates code instantly through automated testing to catch integration bugs early.*

**Q3. Which tool is primarily a distributed version control system?**
a) Jenkins
b) Docker
c) Git
d) Jira
**Answer: c**
*Explanation: Git is the industry standard for distributed version control.*
