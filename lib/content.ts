export const profile = {
  name: "Ritabrata Ganguly",
  tagline: "I find where systems break before the people using them do.",
  email: "ritabrataganguly7@gmail.com",
  linkedin: "https://www.linkedin.com/in/rbganguly",
  x: "https://x.com/rbganguly99",
  location: "Kolkata, India",
  description:
    "Performance and reliability engineer. AWS Certified Solutions Architect Associate. Kolkata, India.",
};

export const about = {
  heading: "Calm under load.",
  paragraph:
    "I work on the gap between what a system claims and what it actually does. Two and a half years at PwC across banking, FMCG and education taught me that the bottleneck is rarely where anyone expects, and that a finding only counts once the budget holder can repeat it back. I came to engineering from chemical engineering, and to leadership early. I measure before I argue, and I judge the work by what still runs after I have gone.",
  closer: "Let's build systems that don't just work, they fly.",
  signature: "Ritab",
};

export type Metric = { value: string; label: string };

export const metrics: Metric[] = [
  { value: "75K+", label: "End users on platforms\nI instrumented" },
  { value: "20%", label: "Faster issue\ndetection" },
  { value: "30%", label: "Less manual test\nexecution" },
  { value: "3", label: "Regulated sectors\ndelivered into" },
];

export type Role = {
  period: string;
  company: string;
  title: string;
  summary: string;
  detail?: string;
  stats?: { key: string; text: string }[];
  todo?: string;
};

export const roles: Role[] = [
  {
    period: "2023 to 2025",
    company: "PwC India",
    title: "Performance Engineer",
    summary:
      "Clients in three regulated sectors needed SLA guarantees they could not evidence. I built JMeter suites for load, stress, spike and endurance, wired them into Jenkins to run unattended, and rebuilt observability on Prometheus, Grafana and Datadog.",
    stats: [
      { key: "30%", text: "reduction in manual test execution effort" },
      { key: "20%", text: "faster issue detection across 75,000 plus end users" },
      { key: "2024", text: "Distinctive Outcomes Award" },
    ],
  },
  {
    period: "Dec 2025 to present",
    company: "Real",
    title: "QA Engineer",
    summary:
      "Quality engineering at Real, listed on the Nasdaq as REAX. Before this, two and a half years in performance at PwC India.",
    todo: "[RITABRATA: two lines on what you own here, with one number.]",
  },
];

export const certifications = {
  primary: {
    title: "AWS Certified Solutions Architect",
    level: "Associate",
    code: "SAA-C03",
    body: "Distributed systems on AWS for cost, resilience and scale.",
  },
  secondary: {
    title: "AWS Certified Cloud Practitioner",
    level: "Foundational",
    code: "CLF-C02",
    body: "Cloud economics and the service landscape, end to end.",
  },
  others: [
    { title: "Lean Six Sigma Yellow Belt", body: "Process improvement applied to delivery." },
    { title: "Testing throughout the SDLC", body: "Shift left practice and quality gates." },
    { title: "Problem Solving Techniques", body: "Structured root cause analysis." },
  ],
};

export type Venture = {
  role: string;
  name: string;
  body: string;
  art: "bloom" | "rays" | "matrix" | "waves";
};

export const ventures: Venture[] = [
  {
    role: "Co-founder",
    name: "Fugly.in",
    body: "An online fashion label, built from nothing. Thirty nine sales in month one, a team of twenty five, a third more profit.",
    art: "bloom",
  },
  {
    role: "Co-founder",
    name: "The Placement Diary",
    body: "A careers publication that became a service. Seven clients, 3,500 readers in six months.",
    art: "rays",
  },
  {
    role: "Head of Operations",
    name: "E-Summit 23",
    body: "The second largest fest at NIT Durgapur. Two thousand attendees, four sponsors closed.",
    art: "matrix",
  },
  {
    role: "Vice Chairperson",
    name: "ISTE NIT Durgapur",
    body: "Eleven events in a year. A team of fifteen, engagement up a quarter.",
    art: "waves",
  },
];

export const education = {
  degree: "B.Tech, Chemical Engineering",
  school: "NIT Durgapur, 2019 to 2023",
  note: "Trained as a chemical engineer. Process thinking transferred better than anyone expected.",
  honours: [
    { key: "2024", text: "Distinctive Outcomes Award, PwC" },
    { key: "Won", text: "Hult Prize On Campus, NIT Durgapur" },
    { key: "Top 50", text: "Drona IRIS, 2019" },
  ],
};

export type Tool = { name: string; slug?: string; drawn?: "cloud" | "loop" | "pulse" };

export const tools: Tool[] = [
  { name: "Datadog", slug: "datadog" },
  { name: "JMeter", slug: "apachejmeter" },
  { name: "Prometheus", slug: "prometheus" },
  { name: "Grafana", slug: "grafana" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "AWS", drawn: "cloud" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Docker", slug: "docker" },
  { name: "Azure DevOps", drawn: "loop" },
  { name: "Glowroot", drawn: "pulse" },
  { name: "Postman", slug: "postman" },
  { name: "Git", slug: "git" },
  { name: "Python", slug: "python" },
  { name: "Bash", slug: "gnubash" },
  { name: "Linux", slug: "linux" },
];

export const greetings = [
  "Hello",
  "नमस्ते",
  "নমস্কার",
  "Hola",
  "你好",
  "こんにちは",
  "Bonjour",
  "Olá",
  "مرحبا",
  "Ciao",
];
