export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Senior Software Engineer",
    company: "Blend – San Francisco, CA",
    dates: "Dec 2022 - Sep 2025",
    description: [
      "Led the development of the unified mortgage and auto loan origination process, implementing Native Module Bridging that cut CPU utilization by 35% to achieve sustained 60 FPS fidelity.",
      "Engineered and deployed the external marketing site and critical consumer-facing pages using Next.js and React, leveraging SSR and Edge Functions to boost the target funnel's SEO ranking from page 3 to page 1 and slash TTI by 40%.",
      "Established and governed a centralized monorepo component library (150 reusable components), which accelerated cross-functional feature delivery by 30% and reduced UI-related bugs by 18%.",
      "Architected a robust Ruby on Rails transactional API, successfully processing over 50K+ requests per minute (RPM) at peak load and achieving an average P99 latency of 95ms to support the React Native application.",
      "Revolutionized data access with a GraphQL API Gateway to consolidate fetching across 6 distinct microservices, cutting payload size and frontend over-fetching by 50% across 10K+ daily queries.",
      "Secured the platform by integrating OAuth 2.0 and JWTs for stateless session management, maintaining a documented 99.8% crash-free rate (via Firebase Crashlytics/Sentry).",
      "Directed the implementation of 8 primary CI/CD pipelines, cutting average deployment cycle time from 45 minutes to 15 minutes and reducing environment setup errors by 50%.",
      "Instilled adherence to security and governance standards by establishing 3 mandatory code review practices and auto-generating compliance reports, ensuring zero critical audit failures in two consecutive years."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Curative Inc – Austin, TX",
    dates: "Feb 2020 - Nov 2022",
    description: [
      "Collaborated closely with the CTO and clinical leadership, leading 6 engineers to rapidly build and scale the nationwide COVID-19 vaccination platform, serving millions at peak demand.",
      "Developed responsive booking interfaces in React and Next.js with real-time REST/GraphQL APIs, enabling seamless scheduling of first, second, and booster doses across all devices.",
      "Accelerated patient self-service booking efficiency by 15% by executing client-side performance optimizations, including memoization and routing logic adjustments, maintaining response time under 200ms.",
      "Designed the real-time scheduling backend with transactional APIs, Redis locks, and Celery background jobs, managing 100k+ weekly appointments.",
      "Engineered RabbitMQ pipelines to reliably synchronize vaccination records across 50+ state registries, ensuring error-free delivery for auditing and compliance.",
      "Fortified the API perimeter by implementing and enforcing TLS and Mutual TLS client authentication and validating all incoming payloads against the industry-standard FHIR schema.",
      "Orchestrated CI/CD pipelines on AWS with Docker and GitHub Actions, delivering over 120 stable releases per year with zero downtime in high-pressure production environments.",
      "Enforced mandatory quality gates, sustaining 85% test coverage through behavior-driven unit Jest and integration Supertest tests across all critical API routes.",
      "Collaborated with clinical teams to rapidly design, implement, and deploy adaptive solutions, enabling real-time response to changing healthcare requirements."
    ]
  },
  {
    title: "Senior Full Stack Developer",
    company: "Valtech – Los Angeles, CA",
    dates: "Jul 2018 - Feb 2020",
    description: [
      "Led the maintenance and feature extension across both modern React and legacy Angular UIs for core e-commerce features, actively reducing technical debt by 30% on critical customer paths.",
      "Implemented WebSocket APIs and built corresponding React UI components to deliver critical, sub-100ms real-time inventory insights directly to customer interfaces.",
      "Integrated scalable, high-accuracy ML model predictions into the React UI layer via REST endpoints, powering the Smart Substitutions feature and achieving over 95% accuracy in product recommendations.",
      "Accelerated frontend load times by tuning PostgreSQL queries and leveraging Cassandra for improved distributed read performance, resulting in a 60% speed increase for critical API calls.",
      "Engineered an automated LaunchDarkly-based experimentation system within the frontend codebase to validate performance and feature rollouts, facilitating the concurrent execution of 100 Online Controlled Experiments (OCEs).",
      "Utilized Kafka–Spark streaming pipelines to supply near real-time product analytics and user behavior metrics, enabling responsive UI feature adjustments.",
      "Authored technical documentation, including API specifications for the WebSocket inventory system and operational runbooks for the A/B testing framework, improving onboarding efficiency by 20% for new engineers."
    ]
  },
  {
    title: "Software Engineer",
    company: "Remind – San Francisco, CA",
    dates: "Mar 2016 - Jun 2018",
    description: [
      "Optimized 9 Flask and Django microservices that powered the two-way text messaging platform, reliably facilitating billions of messages annually while maintaining 99.99% uptime.",
      "Pioneered backend logic for complex asynchronous tasks, Scheduled Messages, and executed the proprietary Contact Shielding feature, guaranteeing 100% user privacy via PII abstraction.",
      "Developed frontend features on the teacher dashboard, creating directive-based components for 8 major teacher features that streamlined class management and bulk communication scheduling.",
      "Constructed real-time Angular components for the Stamps Polls feature, leveraging WebSockets and PostgreSQL pub-sub functionality to deliver immediate, interactive classroom feedback, supporting 1M concurrent users.",
      "Designed and exposed APIs for the Multi-Media Sharing feature, ensuring seamless integration with native iOS and Android clients for file and link exchange.",
      "Standardized service environments via Docker containerization and collaborated on the AWS ECS deployment strategy, cutting average deployment time by 5 minutes."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "RealtyMogul – Los Angeles, CA",
    dates: "Jan 2015 - Mar 2016",
    description: [
      "Revamped the Investor and Borrower Dashboards, launching over 10 high-impact features that boosted investor engagement by 25%.",
      "Optimized the core Ruby on Rails backend by refactoring over 30 critical ActiveRecord queries and implementing multi-level caching strategies, achieving a 90% cache hit rate on key API routes.",
      "Executed critical schema and application logic updates in Ruby on Rails to integrate Regulation A+ investor types, completing the project within a 3-month window to ensure platform compliance.",
      "Architected and tested financial data models in MySQL using stored procedures to ensure transactional integrity for quarterly payments exceeding $20M returned to investors.",
      "Instituted an extensive unit and integration test suite for complex financial calculations, achieving 95% coverage on all financial logic, ensuring accurate K-1 tax documentation annually."
    ]
  }
];