// Everything the site says lives here, so it can be edited without touching layout code.
// Keep client and project names out of this file: the case studies are deliberately anonymised.

export const profile = {
  name: "Ratnesh Jaiswal",
  role: "Full-Stack Developer",
  headline: "WordPress/Laravel, Next.js, React and AI automation",
  location: "Mumbai, India · working remotely with UK teams",
  email: "jaisratnesh@gmail.com",
  github: "https://github.com/ratneshjais",
  linkedin: "https://www.linkedin.com/in/ratnesh-jaiswal-31b90a292/",
  resume: "/Ratnesh_Jaiswal_Resume.pdf",
  intro:
    "I build and run web platforms end to end, from Figma to production. For the last five years I've delivered " +
    "WordPress and Laravel sites for UK agency clients, built the internal platform that keeps a fleet of client sites " +
    "patched and healthy, and shipped full-stack Next.js and Payload CMS applications. Lately I automate the repetitive " +
    "parts of engineering with AI agents.",
};

export const stats = [
  { value: "9+", label: "years building for the web" },
  { value: "35+", label: "client sites built and supported" },
  { value: "1,000+", label: "commits in the last five years" },
  { value: "10+", label: "site migrations and handovers" },
];

export type CaseStudy = {
  title: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Full-stack Next.js and Payload CMS application",
    summary:
      "A content-heavy, multi-role web application built on Next.js and Payload CMS, implemented from Figma.",
    points: [
      "Role-based dashboards, multi-step forms, filtered search, a content hub and custom admin screens.",
      "Background processing with BullMQ on Redis, media on S3, error monitoring with Sentry.",
      "Type-checked Schema.org structured data with an automated checker, and Cloudflare Turnstile on forms.",
    ],
    stack: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL", "Redis / BullMQ", "S3", "Sentry"],
  },
  {
    title: "WordPress fleet-management platform",
    summary:
      "An internal platform that gives an agency one view of every client WordPress site it looks after.",
    points: [
      "Site and plugin version overview across the whole estate, with update tracking.",
      "Slack notifications, automatic ticket creation and DNS record capture.",
      "Pre-flight health checks against uptime monitoring, fed by an API endpoint on each site.",
    ],
    stack: ["WordPress", "PHP", "REST APIs", "Slack API", "Cron jobs"],
  },
  {
    title: "AI agent automation for engineering workflows",
    summary:
      "A suite of AI agent skills and hooks that turn recurring, multi-step engineering chores into one command.",
    points: [
      "Monthly site updates and security patches across many repositories, staging first.",
      "Site migrations, archival to S3 storage and premium-plugin onboarding to a private Composer repository.",
      "Figma-to-block generation and ticket and time-tracking workflows.",
    ],
    stack: ["Claude Code", "Agent skills & hooks", "MCP", "GitHub CLI", "Shell"],
  },
  {
    title: "Agency WordPress delivery and maintenance",
    summary:
      "Design-to-deployment WordPress builds for UK clients in energy, recruitment, healthcare, construction and media.",
    points: [
      "Reusable ACF blocks: portfolios, team and careers sections, video showreels, maps, mega menus, article hubs.",
      "Security hardening and performance work, node-sass to dart-sass and PHP 8.1 upgrades.",
      "Staging-first hotfix releases on Kinsta, and private Composer (Satis) packages kept current by GitHub Actions.",
    ],
    stack: ["WordPress", "Bedrock", "Sage / Acorn", "ACF", "Blade", "WooCommerce", "Kinsta"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages & frameworks", items: ["PHP", "Laravel", "TypeScript", "JavaScript", "React", "Next.js", "Node.js"] },
  { group: "CMS", items: ["WordPress (Bedrock, Sage/Acorn, ACF, Blade)", "WooCommerce", "Gravity Forms", "Payload CMS"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "Redis (BullMQ)"] },
  { group: "AI automation", items: ["Claude Code skills & hooks", "MCP", "Prompt engineering"] },
  { group: "DevOps & tooling", items: ["Git", "GitHub Actions", "Composer / Satis", "WP-CLI", "Kinsta", "Cloudflare", "S3", "Sentry"] },
];

export const experience = [
  { company: "SOZO", role: "Software Engineer", period: "Jun 2021 – Present", place: "Gloucester, UK · Remote" },
  { company: "Mphasis", role: "Delv Software Engineer", period: "Apr 2020 – Jun 2021", place: "Mumbai, India" },
  { company: "Datamatics", role: "Associate Consultant", period: "Mar 2019 – Apr 2020", place: "Mumbai, India" },
  { company: "Stelcore Management Services", role: "Developer", period: "Jan 2017 – Jan 2019", place: "Mumbai, India" },
];

export const education = [
  { school: "Thakur Institute of Management Studies, Career Development & Research", degree: "Master of Computer Applications (MCA)", period: "2014 – 2017" },
  { school: "Nirmala Memorial Foundation College of Commerce & Science", degree: "BSc, Information Technology", period: "2010 – 2013" },
];
