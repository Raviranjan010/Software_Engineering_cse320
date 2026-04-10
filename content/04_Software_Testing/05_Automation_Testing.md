# Automation Testing

## Overview
Automation testing refers to using specialized software tools to execute pre-scripted tests on an application before it is released into production.

**DEF**
**Automation Testing**: The process of taking repetitive, time-consuming manual testing tasks and automating them using test scripts and automation frameworks.

## Why Automate?
- **Speed & Efficiency**: Automated tests run much faster than manual tests.
- **Reusability**: Test scripts can be reused across different versions of the application.
- **Reliability**: Eliminates human error during test execution.
- **Continuous Integration**: Crucial for CI/CD pipelines where builds are rapidly deployed.

## Automation Tools Landscape

1. **Selenium IDE & WebDriver**: The industry standard for web application UI testing.
2. **Appium**: Used for mobile application testing (iOS and Android).
3. **JMeter**: Popular for load testing and performance testing.
4. **Postman**: Used for API testing.

**TIP**
Not all tests should be automated. Exploratory testing, usability testing, and one-off edge cases are generally better suited for manual testing. Automate tests that are repetitive, highly prone to human error, and stable.

## Selenium Overview
Selenium is a suite of tools for automating web browsers.
- **Selenium IDE**: A record-and-playback tool for browser actions.
- **Selenium WebDriver**: A programming interface that allows you to write test scripts in Java, Python, C#, etc., to control the browser natively.

**★ EXAM**
**Automation Life Cycle**:
1. Identify Scope of Automation
2. Select the Right Tool
3. Framework Design
4. Test Script Development
5. Execution
6. Maintenance

## Practice Questions

**Q1. Which of the following is an open-source tool primarily used for testing web applications?**
a) QTP / UFT
b) Selenium
c) LoadRunner
d) WinRunner
**Answer: b**
*Explanation: Selenium is the most popular open-source automated testing suite for web applications.*

**Q2. What kind of testing is NOT suitable for automation?**
a) Regression Testing
b) Load Testing
c) Usability Testing
d) Smoke Testing
**Answer: c**
*Explanation: Usability testing requires human observation to judge whether the UI is intuitive and user-friendly.*

**Q3. Which component of Selenium is used to record and playback tests?**
a) Selenium Grid
b) Selenium WebDriver
c) Selenium RC
d) Selenium IDE
**Answer: d**
*Explanation: Selenium IDE is a browser extension that allows testers to record their actions and play them back.*
