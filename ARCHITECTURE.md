# MakeMe
Architecture Report

## Introduction
This report covers comprehensively the architecture of the system. This describes the proposed architecture of the system and does not define the project charter and deliverables. Ultimately, the client will decide which is suited to their current business needs.

## Context & Background
MakeMe is an innovative solution that aims to bridge the gap between makers with 3D printing capabilities and clients who require 3D printing services. The platform provides a convenient and user-friendly way for clients to select existing 3D models or upload their own. MakeMe addresses the challenges faced by clients looking to find a reliable and affordable 3D printing service, while also providing makers with a broader range of customers and greater access to the market.

## System Architecture
The system would be designed as a web-based application, built on a three-tier architecture consisting of a presentation layer, an application layer, and a data layer. The presentation layer would consist of a user interface accessible through a web browser, where clients and makers can interact with the platform.

The application layer would handle the business logic of the platform, including the 3D model upload and printing process, order management, and payment processing. This layer would also include the algorithm that calculates the material needed and support structure required to print 3D models uploaded by clients.

The data layer would manage the storage and retrieval of data, including 3D models, client and maker information, orders, payments, and transaction history. The system would use a relational database to store and manage the data, with backups and redundancies in place to ensure data integrity.

The platform would also include APIs to allow for third-party integrations, such as external 3D model sharing platforms, and other relevant services.

Finally, the system would use modern security practices, such as data encryption, user authentication and authorization, and secure connections, to ensure the safety and confidentiality of user data and transactions.

## Technology Stack
Based on the requirements of the MakeMe platform, here is a proposed technological stack:
React for the front-end: React is a widely used and popular JavaScript library for building user interfaces. It provides a flexible and efficient way to create complex and interactive UI components, making it an excellent choice for the MakeMe platform's user interface.

Express.js for the REST API: This API would be responsible for handling client requests, processing data, and interfacing with the database, as well as integrating with other third-party services, such as payment processing. Express.js is a popular and flexible web framework for Node.js. It provides a simple and scalable approach to building web applications, making it a suitable choice for the MakeMe platform's back-end.

Heroku for hosting the Express.JS REST API: Heroku is a cloud-based platform that provides a scalable and secure infrastructure for hosting web applications. It offers easy deployment and scaling, and has a strong focus on security and reliability, making it an excellent choice for hosting the MakeMe platform's back-end.

Vercel for hosting the front-end: Vercel is a cloud-based platform that provides a scalable and secure infrastructure for hosting web applications. It is designed for modern web applications, offering easy deployment, high performance, and support for serverless functions, making it an excellent choice for hosting the MakeMe platform's front-end.

PostgreSQL for the database management system: PostgreSQL is a powerful and reliable open-source relational database management system that is widely used and supported. It provides a scalable and efficient data storage solution, with strong support for data consistency and integrity, making it an ideal choice for the MakeMe platform's data layer.

Stripe for payment processing: Stripe is a widely used and reliable payment processing platform that provides a simple and secure way to handle online payments. It offers a robust set of features for handling payments, including support for multiple payment methods, automatic payment retries, and fraud detection, making it an ideal choice for the MakeMe platform's payment processing needs.

Overall, this technological stack provides a powerful, scalable, and secure solution for building the MakeMe platform. It leverages widely used and supported technologies, ensuring that it is easy to maintain and update over time. Additionally, it provides a flexible and efficient solution for handling complex user interfaces, data storage, and payment processing needs, with a focus on scalability, security, and performance.

## Design Decisions and Rationale
### Why Vercel and Heroku?
Vercel for the front-end: Vercel is a cloud-based platform that specializes in hosting modern web applications, including React.js projects. It provides a fast and reliable hosting solution that is optimized for static content and serverless functions, which makes it an excellent choice for hosting the MakeMe platform's front-end. Vercel also provides easy deployment, automatic scaling, and a global CDN, which can improve the platform's performance and availability.

Heroku for the back-end: Heroku is a cloud-based platform that provides a scalable and secure infrastructure for hosting web applications, including Express.js projects. It is designed for web developers, offering easy deployment, scaling, and integration with third-party services, such as databases and payment processors. Heroku also provides strong security features, such as SSL encryption and network isolation, which can help protect the MakeMe platform's data and user information.

Other hosting options may not be preferred for the following reasons:

DIY hosting: Self-hosting the MakeMe platform could be challenging and time-consuming, especially if the team lacks experience in server management and security. DIY hosting also requires ongoing maintenance and updates, which can be expensive and distract from other core business activities.

Traditional web hosts: Traditional web hosts may not be optimised for hosting modern web applications, such as React.js and Express.js projects. They may also have limited scalability and poor performance, which can lead to slow response times and poor user experience.

Other cloud hosting providers: Other cloud hosting providers may offer similar features to Vercel and Heroku, but may not be as well-optimised for hosting web applications, or may not offer the same level of support or integration with other services. Choosing a well-known and widely-used hosting platform can also ensure better community support, documentation, and tooling.

### Why PostgreSQL?
Relational database: PostgreSQL is a powerful and reliable open-source relational database management system. It provides a flexible and efficient data storage solution, with strong support for data consistency and integrity, making it an ideal choice for the MakeMe platform's data layer.

ACID-compliant: PostgreSQL is fully ACID-compliant, which means it provides a high level of data consistency, reliability, and transaction support. This is crucial for the MakeMe platform, as it ensures that all transactions are processed correctly and that user data is protected from corruption or loss.

Extensible and customizable: PostgreSQL is highly extensible and customizable, with support for advanced SQL features, procedural languages, and custom extensions. This makes it easy to tailor the database to specific business needs, and to integrate with other tools and services.

Widely used and supported: PostgreSQL is a popular and widely used open-source database management system, with a large community of developers and users. This means that there is plenty of documentation, support, and tooling available, making it easier to troubleshoot issues and maintain the database over time.

Compatibility with other technologies: PostgreSQL is compatible with a wide range of programming languages and frameworks, including Python, Node.js, and Java, making it easy to integrate with the MakeMe platform's back-end and other third-party services.

In conclusion, PostgreSQL is a powerful, reliable, and flexible database management system that provides a high level of data consistency and integrity, which is crucial for the MakeMe platform's data layer. It is widely used and supported, and provides a range of features and integrations that make it a great choice for modern web applications.


## Technical Standards and Guidelines
Coding Standards: All code for the MakeMe platform should adhere to a consistent and well-documented set of coding standards, including conventions for naming, formatting, commenting, and error handling. These standards should be based on industry best practices and should be reviewed and updated regularly to ensure they remain relevant.

Version Control: All code for the MakeMe platform should be managed using a version control system, such as Git, and should be stored in a central repository to enable collaboration and sharing. Branches should be used to manage changes and releases, and a continuous integration/continuous deployment (CI/CD) pipeline should be implemented to ensure automated testing and deployment of code changes.

Security: The MakeMe platform should adhere to high standards of security, including measures to prevent unauthorized access, data loss, and data corruption. This should include the use of SSL encryption, secure password storage, and robust authentication and authorization mechanisms. All code should be reviewed regularly for potential security vulnerabilities, and patches and updates should be applied promptly to address any issues.

Performance: The MakeMe platform should be designed with performance in mind, with a focus on minimizing load times and maximizing scalability. This should include measures to optimize page loading times, reduce server response times, and minimize the use of resources. The platform should be tested regularly for performance issues, and optimizations should be implemented as needed.

Third-party Services: The MakeMe platform may integrate with various third-party services, such as payment processors and database management systems. All integrations should adhere to high standards of security and performance, and should be thoroughly tested to ensure they work as expected. Third-party services should be evaluated regularly for cost and functionality, and alternatives should be considered if necessary.

Documentation: The MakeMe platform should be thoroughly documented, including code documentation, API documentation, and user guides. Documentation should be clear, concise, and up-to-date, and should provide sufficient detail to enable developers, administrators, and end-users to understand and use the platform effectively.

## Implementation Plan
Requirements Gathering: The first step in implementing the MakeMe platform is to gather requirements from stakeholders, including clients, makers, and administrators. This should include an analysis of user needs, technical requirements, and business objectives.

Design and Architecture: Based on the requirements gathered, the MakeMe platform's design and architecture should be developed, including the user interface, REST API, database schema, and integration with third-party services.

Development: Once the design and architecture are in place, the development of the MakeMe platform can begin. This should be done iteratively, with regular feedback and testing, to ensure that the platform is meeting user needs and technical requirements.

Testing and Quality Assurance: Once the MakeMe platform has been developed, it should be tested thoroughly to ensure that it is functioning correctly, meeting performance and security requirements, and providing a satisfactory user experience. Testing should include unit testing, integration testing, and user acceptance testing.

Deployment and Hosting: Once testing and quality assurance are complete, the MakeMe platform can be deployed and hosted on Vercel and Heroku, as described in the proposed technological stack. This should include the setup and configuration of any necessary services, such as databases, payment processors, and caching.

Monitoring and Maintenance: Once the MakeMe platform is live, it should be monitored regularly to ensure that it is performing well and meeting user needs. This should include monitoring for performance, security, and user satisfaction, as well as ongoing maintenance and updates to address any issues that arise.

Marketing and User Acquisition: Finally, the MakeMe platform should be marketed and promoted to potential users, including clients and makers, to drive adoption and engagement. This should include a range of marketing channels, including social media, search engine optimization, and email marketing, as well as user acquisition strategies, such as referral programs and incentives.


## Risks and Mitigation Strategies
Security Risks: One of the biggest risks associated with the Make Me platform is security risks. This includes risks associated with unauthorized access, data loss, and data corruption. To mitigate these risks, the platform should be designed and implemented with strong security measures in place, including SSL encryption, secure password storage, and robust authentication and authorization mechanisms. The platform should also be reviewed regularly for potential security vulnerabilities, and patches and updates should be applied promptly to address any issues.

Technical Risks: Another potential risk associated with the Make Me platform is technical risks. This includes risks associated with system crashes, data corruption, and other technical issues that could impact the functionality and usability of the platform. To mitigate these risks, the platform should be designed and implemented with robust data backup and recovery mechanisms in place, along with a reliable disaster recovery plan. The platform should also be tested regularly for performance issues, and optimizations should be implemented as needed.

Legal and Compliance Risks: There are also legal and compliance risks associated with the Make Me platform, including risks associated with intellectual property rights, data privacy, and regulatory compliance. To mitigate these risks, the platform should be designed and implemented with strong data privacy and security measures in place, and should adhere to all relevant regulations and standards. The platform should also include clear policies and procedures for handling disputes and ensuring compliance with all legal and regulatory requirements.

Financial Risks: There are also financial risks associated with the Make Me platform, including risks associated with payment processing and fraudulent activity. To mitigate these risks, the platform should use a reliable and secure payment processing system, such as Stripe, and should implement measures to detect and prevent fraudulent activity, such as fraud detection algorithms and user authentication mechanisms.

Operational Risks: Finally, there are operational risks associated with the Make Me platform, including risks associated with disruptions to service, outages, and other issues that could impact user experience and satisfaction. To mitigate these risks, the platform should be designed and implemented with high availability and reliability in mind, and should be monitored regularly for performance and availability issues. The platform should also include clear communication channels for notifying users of any issues or disruptions, and should have robust support mechanisms in place to address any user concerns or issues.

Overall, these risks and mitigation strategies should be considered as part of the overall implementation plan for the Make Me platform, and should be reviewed and updated regularly to ensure that the platform remains secure, reliable, and effective for all users.

## Automated Quality Assurance 
(Recommended but not in Charter)
Testing Framework: The Make Me platform will use a testing framework to create the automated test suite. There are several options for testing frameworks, but one popular choice is Jest, which is a JavaScript testing framework developed by Facebook. Jest provides a number of features for creating and executing tests, including assertions, test runners, and mock functions.

Test Runner: In order to run the automated test suite, the Make Me platform will use a test runner. There are several test runners available, but one popular choice is Mocha, which is a JavaScript test runner that can be used to execute tests in a browser or in a Node.js environment. Mocha provides a number of features for running tests, including test discovery, parallel test execution, and configurable test reports.

Mocking Library: The Make Me platform will use a mocking library to create mock objects for testing. There are several options for mocking libraries, but one popular choice is Sinon.js, which is a JavaScript mocking library that can be used to create spies, stubs, and mocks. Sinon.js provides a number of features for creating and using mock objects, including support for asynchronous code and custom assertions.

Headless Browser: To test the user interface of the Make Me platform, a headless browser will be used. Headless browsers are browsers that can be run without a graphical user interface, which makes them ideal for automated testing. There are several options for headless browsers, but one popular choice is Puppeteer, which is a Node.js library developed by Google that can be used to control Chrome or Chromium browsers. Puppeteer provides a number of features for automating browser interactions, including navigation, input, and rendering.

Continuous Integration Tool: The Make Me platform will use a continuous integration tool to automate the testing process. There are several options for continuous integration tools, but one popular choice is Jenkins, which is an open-source automation server that can be used to automate the building, testing, and deployment of software. Jenkins provides a number of features for automating the testing process, including integration with source control systems, automated builds, and custom test reports.

This QA automated testing infrastructure for the Make Me platform is designed to ensure that the platform is thoroughly tested and validated, with a focus on performance, security, and usability. By using these tools and technologies, the Make Me platform can be developed and tested more effectively, with a higher degree of confidence in its functionality and reliability.


## Quality and Performance Metrics
User Satisfaction: One key metric for the Make Me platform is user satisfaction, which can be measured using various techniques, such as surveys, feedback forms, and user reviews. This metric can provide valuable insights into the usability, functionality, and overall experience of the platform for clients, makers, and administrators.

Uptime and Availability: Another important metric for the Make Me platform is uptime and availability, which can be measured using various monitoring tools and techniques, such as website monitoring software, server logs, and user feedback. This metric can provide valuable insights into the reliability and performance of the platform, and can help identify and resolve any issues that may impact user experience.

Performance and Speed: The performance and speed of the Make Me platform can be measured using various tools and techniques, such as page load times, server response times, and network latency. This metric can provide insights into the efficiency and responsiveness of the platform, and can help identify and resolve any performance issues that may impact user experience.

Security and Privacy: The security and privacy of the Make Me platform can be measured using various techniques, such as vulnerability assessments, penetration testing, and compliance audits. This metric can provide insights into the effectiveness of the platform's security measures, and can help identify and resolve any vulnerabilities or weaknesses that may pose a risk to user data and privacy.

Scalability and Capacity: The scalability and capacity of the Make Me platform can be measured using various techniques, such as load testing, stress testing, and capacity planning. This metric can provide insights into the platform's ability to handle increasing volumes of traffic and usage, and can help identify and address any scalability issues that may impact user experience.

These quality and performance metrics for the Make Me platform are designed to ensure that the platform is developed and maintained to the highest standards of quality, reliability, and performance. By regularly monitoring and measuring these metrics, the platform can be continuously improved and optimised to meet the evolving needs and expectations of clients, makers, and administrators.

## Deployment and Maintenance Plan

a. Release Management: The Make Me platform will have a release management process in place to ensure that all updates and changes are properly reviewed, tested, and approved before they are released to production.

b. Dev, Staging, and Production Environments: The Make Me platform will have separate environments for development, testing, and production to ensure that changes are properly tested and approved before they are deployed to production.

c. Deployment Automation: The deployment of the Make Me platform to production will be automated, using tools such as Jenkins, to ensure that the deployment process is fast, reliable, and repeatable.

d. Rollback Plan: The Make Me platform will have a rollback plan in place to ensure that any issues or problems that arise during deployment can be quickly and easily addressed.

## Maintenance Plan:
a. Monitoring and Alerting: The Make Me platform will be monitored and alerted for issues and errors using tools such as New Relic and AWS CloudWatch. This will help ensure that any issues are identified and addressed quickly, before they impact user experience.

b. Regular Updates and Maintenance: The Make Me platform will receive regular updates and maintenance to ensure that it remains secure, reliable, and up-to-date with the latest technologies and standards.

c. Database Backups and Recovery: The Make Me platform will have regular database backups and recovery mechanisms in place to ensure that data is not lost in the event of a system failure or other issue.

d. Performance Optimization: The Make Me platform will be regularly optimized for performance, using tools such as AWS CloudFront and Cloudflare, to ensure that it is fast, responsive, and efficient.

e. Security and Compliance: The Make Me platform will be regularly reviewed and audited for security and compliance, to ensure that it meets the latest industry standards and regulations.

Overall, this deployment and maintenance plan for the Make Me platform is designed to ensure that the platform is deployed and maintained effectively, with a focus on quality, reliability, and performance. By following this plan, the Make Me platform can provide a valuable service to clients, makers, and administrators, while ensuring that it remains secure, stable, and efficient over the long term.



