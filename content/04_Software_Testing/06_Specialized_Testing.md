# Specialized Testing

## Overview
While standard testing covers functional correctness, modern software engineering requires testing specialized aspects of applications such as security, performance, and API integration.

## 1. Performance Testing
Testing the system's responsiveness, stability, and speed under a particular workload.

- **Load Testing**: Testing behavior under expected user loads.
- **Stress Testing**: Pushing the system beyond normal capacity to determine failure points and how it recovers.
- **Spike Testing**: Testing response to sudden, extreme increases in user load.

**TIP**
Using tools like Apache JMeter or Gatling is standard practice for simulating thousands of concurrent users during performance tests.

## 2. Security Testing
Ensuring that the system protects data and maintains functionality as intended.
- **Vulnerability Scanning**: Automated scans for known vulnerabilities.
- **Penetration Testing**: Simulating a malicious attack to find security loopholes.
- **Security Auditing**: Inspecting code and design for security flaws.

## 3. Web and API Testing
Testing the interfaces that allow different software systems to communicate.
- **API Testing**: Bypasses the UI to test business logic directly via REST or SOAP endpoints. Focuses on status codes, payload formatting, and response times.
- **Web Testing**: Checking cross-browser compatibility, responsive design, and web security.

**DEF**
**API Testing**: A type of software testing that analyzes an application programming interface (API) to verify that it fulfills its expected functionality, security, performance, and reliability.

## 4. AI-assisted Testing
Leveraging Machine Learning to improve testing processes.
- Visual regression testing using AI to detect UI anomalies.
- AI generating test cases from historical data.
- Self-healing test scripts that automatically adjust to minor UI changes.

**★ EXAM**
**Major Difference**:
- Performance testing aims to find bottlenecks (not bugs).
- Security testing aims to find vulnerabilities.
- API testing aims to find data layer issues before the UI is built.

## Practice Questions

**Q1. What type of testing focuses on how a system behaves when it is pushed beyond its limits?**
a) Load Testing
b) Stress Testing
c) Volume Testing
d) Recovery Testing
**Answer: b**
*Explanation: Stress testing evaluates system behavior under extreme conditions to find the breaking point.*

**Q2. Which test bypasses the graphical user interface entirely to validate business logic?**
a) Visual Regression Testing
b) Usability Testing
c) API Testing
d) Alpha Testing
**Answer: c**
*Explanation: API testing interacts directly with the backend code logic by sending requests and validating responses, without needing a UI.*

**Q3. Finding known security loopholes in a system automatically is called:**
a) Penetration Testing
b) Vulnerability Scanning
c) Ethical Hacking
d) Spike Testing
**Answer: b**
*Explanation: Vulnerability scanning relies on automated software to check against lists of known vulnerabilities.*
