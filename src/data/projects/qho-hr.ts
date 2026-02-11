import type { Project } from "./types";

const qhoHr: Project = {
  slug: "qho-hr",
  title: "Qho HR",
  tagline:
    "HR management SaaS — employee portal with dashboard, attendance, leaves, timesheets, and requests.",
  description:
    "Qho HR (uConnect) is an HR management SaaS product that gives employees a single control center for their work life. The dashboard shows welcome messaging, attendance history, leaves, check-ins, and key metrics. Features include announcements, surveys, holidays, timesheets, attendance, leave management, work schedule, requests, feedback, and account settings with theme and security options.",
  role: "Front-End Developer",
  year: "2024",
  duration: "6 months",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Authentication", "React"],
  highlights: [
    "Dashboard with summary cards: Available Leaves, Absentees, Total Leave, Check-Ins",
    "Attendance table with schedule, status, check-in, breaks, check-out, and hours worked",
    "Account settings: profile upload, name/email, and security tabs",
    "Theme switching (light/dark) and authenticated user experience",
  ],
  details: [
    "The product serves as the main window into performance and progress for employees. The dashboard combines a welcome section with an attendance history pie (Present, Vacation, Leave) and an Employees on Vacation table. Summary cards give at-a-glance metrics for the year or month.",
    "I worked on the authenticated shell: sidebar navigation (Dashboard, Announcement, Surveys, Holidays, My Timesheets, My Attendance, My Leaves, Work Schedule, My Requests, My Feedback, Account Settings), header with Check In, notifications, and user avatar dropdown. The settings page supports profile picture upload, display of name and email, and tabs for Account and Security.",
    "Next.js and a consistent auth layer power the app. The UI uses a dark theme with purple accents for active states and clear hierarchy. Forms and tables are built for clarity and quick scanning so employees can manage their time and requests without friction.",
  ],
};

export default qhoHr;
