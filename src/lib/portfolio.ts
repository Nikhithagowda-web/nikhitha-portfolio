import resumeAsset from "@/assets/Nikhitha_KP_Resume.pdf.asset.json";

export const profile = {
  name: "Nikhitha K P",
  role: "Java Full Stack Developer",
  location: "Bengaluru, Karnataka, India",
  email: "nikhithasoftwaredeveloper@gmail.com",
  phone: "+91 93804 59259",
  phoneHref: "tel:+919380459259",
  linkedin: "https://www.linkedin.com/in/nikhitha-k-p-01b927264/",
  github: "https://github.com/Nikhithagowda-web",
  resumeUrl: resumeAsset.url,
  resumeFileName: "Nikhitha_KP_Java_Full_Stack_Developer_Resume.pdf",
  intro:
    "Computer Science Engineering graduate (2026) building reliable, end-to-end web applications with Java, Spring Boot, React and MySQL — from clean REST APIs to responsive interfaces.",
};

export const skillGroups = [
  {
    title: "Languages & Core",
    description: "Strong foundations in object-oriented design and data.",
    skills: [
      "Java",
      "Core Java",
      "OOP",
      "SQL",
      "Collections",
      "Java 8 Streams",
      "Exception Handling",
    ],
  },
  {
    title: "Backend",
    description: "Server-side applications, persistence and APIs.",
    skills: [
      "Spring Boot",
      "Hibernate",
      "JDBC",
      "Servlets",
      "JSP",
      "REST APIs",
      "MVC Architecture",
    ],
  },
  {
    title: "Frontend",
    description: "Responsive, accessible user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Database & Tools",
    description: "Data modelling, versioning and testing.",
    skills: [
      "MySQL",
      "MySQL Workbench",
      "Git",
      "GitHub",
      "Postman",
      "Maven",
      "Apache Tomcat",
      "Eclipse",
      "VS Code",
    ],
  },
];

export const coreSkills = [
  "Java",
  "Core Java",
  "OOP",
  "SQL",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Spring Boot",
  "Hibernate",
  "JDBC",
  "Servlets",
  "JSP",
  "REST APIs",
  "Git / GitHub",
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce",
    title: "AI-Powered Full Stack E-Commerce Website",
    tagline: "End-to-end online fashion store",
    period: "Jun 2025 – Dec 2025",
    description:
      "A complete shopping experience where users browse products, view details, manage their cart and place orders through a clean, user-friendly interface.",
    highlights: [
      "User authentication, product management, cart, checkout and order confirmation",
      "Java Servlets + JDBC integrated with MySQL for users, products, carts and orders",
      "Deployed on Apache Tomcat with a Maven-based build",
    ],
    tech: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Maven",
      "Tomcat",
    ],
    github: "https://github.com/Nikhithagowda-web",
    demo: "https://ai-powered-full-stack-e-commerce.onrender.com/",
  },
  {
    slug: "smartqueue",
    title: "SmartQueue – Real-Time Intelligent Queue Management System",
    tagline: "Digital tokens instead of physical waiting lines",
    period: "Jun 2026 – Aug 2026",
    description:
      "A full-stack platform that lets customers book appointments remotely, receive digital queue tokens and track their turn — while staff manage queues from a dedicated dashboard.",
    highlights: [
      "Appointment booking, token generation, live queue tracking and staff dashboard",
      "RESTful APIs built with Spring Boot and Hibernate over MySQL",
      "React frontend delivering near-real-time queue status updates",
    ],
    tech: [
      "React.js",
      "Java",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "Postman",
      "Maven",
    ],
    github: "https://github.com/Nikhithagowda-web",
    demo: "https://smartqueue-frontend-u8zs.onrender.com/",
  },
];

export const experience = [
  {
    org: "TAP Academy",
    role: "Java Full Stack Web Development Training",
    period: "Aug 2026 – Jan 2027",
    points: [
      "Hands-on training in Core and Advanced Java, SQL, HTML, CSS and JavaScript.",
      "Built full-stack applications with Java and MySQL, implementing CRUD operations and database integration.",
    ],
  },
  {
    org: "ABC Technology",
    role: "Web Development",
    period: "Jan 2026 – May 2026",
    points: [
      "Developed the Gym Manager CLI using Java, OOP, Collections, JDBC and MySQL.",
      "Implemented member records, membership plans, subscription expiry tracking and renewals.",
    ],
  },
];

export const education = {
  degree: "B.E. in Computer Science and Engineering",
  school: "Cauvery Institute of Technology, Mandya",
  period: "2022 – 2026",
  score: "CGPA 8.0",
};

export const certifications = [
  {
    title: "Web Design Course",
    issuer: "Udemy",
    description:
      "Beginner-to-advanced training in HTML, CSS, responsive web design and website development.",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    description: "AI fundamentals, practical applications and real-world use cases.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;
