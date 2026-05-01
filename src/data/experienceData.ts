export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Tech Lead, Senior Full Stack Engineer",
    company: "Virtusa – Remote",
    dates: "Jan 2025 - Present",
    description: [
      "Lead a cross-functional team of 6+ engineers developing AI-powered fintech banking solutions across React/TypeScript web and React Native mobile platforms.",
      "Architected intelligent banking features using OpenAI GPT-4 and LangChain, including conversational financial assistants and automated document processing.",
      "Built RAG systems with vector embeddings for real-time financial document analysis, enabling automated underwriting and compliance reporting (PCI DSS, SOX).",
      "Designed and launched cross-platform React Native banking apps with biometric authentication and real-time transaction processing, serving 100K+ users with 99.9% uptime.",
      "Led backend development using Python and Node.js, building GraphQL APIs, real-time event systems, and ML pipelines for fraud detection and credit risk.",
      "Established engineering best practices (architecture reviews, CI/CD, code standards), reducing deployment time by 60% and improving code quality.",
      "Collaborated with enterprise banking clients to translate requirements into scalable, compliant solutions.",
      "Championed test-first development using Jest and Supertest, achieving 85%+ coverage and catching 90%+ regressions pre-production."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Blend – San Francisco, CA",
    dates: "Dec 2022 - Dec 2024",
    description: [
      "Led the development of the unified mortgage and auto loan origination process, implementing Native Module Bridging that cut CPU utilization by 35% to achieve sustained 60 FPS fidelity.",
      "Engineered and deployed marketing and consumer-facing pages using Next.js and React, improving SEO ranking to page 1 and reducing TTI by 40%.",
      "Established a monorepo component library (150 reusable components), accelerating delivery by 30% and reducing UI bugs by 18%.",
      "Architected a Ruby on Rails API handling 50K+ RPM with 95ms P99 latency.",
      "Built a GraphQL API Gateway consolidating 6 microservices, reducing over-fetching by 50%.",
      "Implemented OAuth 2.0 and JWT authentication, maintaining a 99.8% crash-free rate.",
      "Directed 8 CI/CD pipelines, reducing deployment time from 45 to 15 minutes.",
      "Established governance practices ensuring zero critical audit failures for 2 consecutive years."
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Curative Inc – Austin, TX",
    dates: "Feb 2020 - Nov 2022",
    description: [
      "Led a team of 6 engineers to build and scale a nationwide COVID-19 vaccination platform serving millions.",
      "Developed responsive booking systems in React/Next.js with real-time APIs.",
      "Improved booking efficiency by 15% via frontend performance optimizations.",
      "Designed backend scheduling systems with Redis locks and Celery, handling 100K+ weekly appointments.",
      "Built RabbitMQ pipelines integrating with 50+ state registries.",
      "Implemented TLS/mTLS and FHIR validation for secure healthcare compliance.",
      "Managed AWS CI/CD pipelines delivering 120+ releases annually with zero downtime.",
      "Maintained 85%+ test coverage with Jest and Supertest.",
      "Collaborated with clinical teams to rapidly adapt to evolving healthcare requirements."
    ]
  },
  {
    title: "Senior Full Stack Developer",
    company: "Valtech – Los Angeles, CA",
    dates: "Jul 2018 - Feb 2020",
    description: [
      "Maintained and extended React and Angular applications, reducing technical debt by 30%.",
      "Built WebSocket APIs and real-time UI features with sub-100ms latency.",
      "Integrated ML-powered recommendations achieving 95%+ accuracy.",
      "Optimized PostgreSQL and Cassandra usage, improving API performance by 60%.",
      "Implemented LaunchDarkly experimentation platform supporting 100 concurrent experiments.",
      "Authored documentation and runbooks improving onboarding efficiency by 20%."
    ]
  },
  {
    title: "Software Engineer",
    company: "Remind – San Francisco, CA",
    dates: "Mar 2016 - Jun 2018",
    description: [
      "Optimized Flask and Django microservices supporting billions of messages annually with 99.99% uptime.",
      "Built asynchronous systems including Scheduled Messages and Contact Shielding for privacy.",
      "Developed Angular dashboard features improving teacher workflows.",
      "Built real-time polling features using WebSockets and PostgreSQL pub-sub supporting 1M concurrent users.",
      "Designed APIs for multimedia sharing across web and mobile platforms."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "RealtyMogul – Los Angeles, CA",
    dates: "Jan 2015 - Mar 2016",
    description: [
      "Launched 10+ dashboard features increasing investor engagement by 25%.",
      "Optimized Rails backend with query refactoring and caching, achieving 90% cache hit rate.",
      "Implemented Regulation A+ compliance features within a 3-month deadline.",
      "Built comprehensive test suites achieving 95% coverage for financial systems."
    ]
  }
];
