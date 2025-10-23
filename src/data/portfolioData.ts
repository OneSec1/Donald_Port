export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Curative Inc",
    summary:
      "Full-Stack Development, Platform Scaling, Cloud Infrastructure, High-Volume Scheduling",
    images: ["projects/curative1.png", "projects/curative2.png"],
    tags: [
      "Python",
      "FastAPI",
      "React",
      "Next.js",
      "RabbitMQ",
      "AWS",
      "Docker",
      "Data Engineering",
      "GraphQL",
      "Platform Scaling",
    ],
    details: {
      challenge:
        "The nation required a rapidly scalable, highly reliable, and compliant platform to manage COVID-19 vaccination scheduling and record synchronization across disparate state registries under unprecedented demand.",
      solution:
        "Spearheaded a 6-engineer team to architect and deploy the nationwide COVID-19 vaccination platform leveraging Python/FastAPI and React/Next.js. Engineered a real-time scheduling backend with transactional APIs, Redis locks, and Celery to manage over 100k weekly appointments. Implemented RabbitMQ pipelines for reliable, error-free synchronization of vaccination records across 50+ state registries for compliance and auditing.",
      impact: [
        "Successfully scaled the vaccination platform to serve millions at peak demand, accelerating patient self-service booking efficiency by 15% through client-side optimizations (response time less than 200ms).",
        "Ensured high reliability and compliance by guaranteeing error-free record synchronization across 50+ state registries and enforcing mTLS/FHIR schema validation on the API perimeter.",
        "Orchestrated AWS CI/CD pipelines (Docker/GitHub Actions) to deliver over 120 stable releases annually with zero downtime in high-pressure production environments.",
      ],
    },
  },
  {
    id: 2,
    title: "Remind – K-12 communication platform",
    summary:
      "Platform Optimization, Real-time Communication, PII Abstraction, Full-Stack Feature Development",
    images: [
      "projects/remind1.png",
      "projects/remind2.jpg",
      "projects/remind3.png",
    ],
    tags: [
      "Python",
      "Flask",
      "Django",
      "Angular",
      "WebSocket",
      "PostgreSQL",
      "AWS",
      "Docker",
      "PII Security",
      "High-Scale Messaging",
    ],
    details: {
      challenge:
        "Maintain a highly-available, high-volume communication platform capable of reliably delivering billions of messages annually while ensuring absolute user privacy and introducing complex real-time features.",
      solution:
        "Optimized 9 Python (Flask/Django) microservices to facilitate billions of annual messages with 99.99% uptime. Engineered the proprietary Contact Shielding feature, guaranteeing 100% user privacy via PII abstraction. Developed and deployed real-time Angular components for the Stamps Polls feature, leveraging WebSockets and PostgreSQL pub-sub to support 1 million concurrent users.",
      impact: [
        "Reliably facilitated billions of messages annually and maintained 99.99% platform uptime through microservice optimization.",
        "Secured all user data by pioneering the Contact Shielding feature, a critical measure for PII abstraction.",
        "Delivered immediate, interactive classroom feedback with the real-time Stamps Polls feature, successfully supporting 1 million concurrent users.",
        "Streamlined deployment and environment consistency by standardizing service environments via Docker and reducing average deployment time by 5 minutes.",
      ],
    },
  },
  {
    id: 3,
    title: "RealtyMogul – Real estate crowdfunding platform",
    summary:
      "Database Optimization, FinTech Compliance, Dashboard Enhancement, Full-Stack Feature Delivery",
    images: [
      "projects/realtymogul1.png",
      "projects/realtymogul2.png",
      "projects/realtymogul3.png",
      "projects/realtymogul4.png",
    ],
    tags: [
      "Ruby on Rails",
      "JavaScript",
      "AngularJS",
      "MySQL",
      "AWS",
      "Caching",
      "FinTech",
      "Compliance",
      "Database Optimization",
    ],
    details: {
      challenge:
        "Rapidly scale the platform to meet new regulatory standards (Reg A+), enhance investor engagement, and ensure absolute transactional integrity for high-volume financial distributions.",
      solution:
        "Revamped Investor and Borrower Dashboards, launching over 10 features to drive engagement. Optimized the Ruby on Rails backend by refactoring over 30 ActiveRecord queries and implementing multi-level caching, achieving a 90% cache hit rate. Executed critical application logic updates to integrate Regulation A+ investor types for platform compliance.",
      impact: [
        "Boosted investor engagement by 25% by revamping core user dashboards and launching high-impact features.",
        "Improved API performance and scalability by implementing multi-level caching strategies, achieving a 90% cache hit rate on key API routes.",
        "Ensured platform compliance by successfully integrating Regulation A+ investor types within the critical 3-month deadline.",
        "Guaranteed financial accuracy by architecting MySQL data models with stored procedures, ensuring transactional integrity for quarterly payments exceeding $20M and achieving 95% test coverage on all financial logic.",
      ],
    },
  },
];
