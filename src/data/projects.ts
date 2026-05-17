export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  category: "Automation" | "AI" | "CRM" | "Logistics" | "Full-Stack";
}

export const projects: Project[] = [
  {
    id: "hubspot-slack-bridge",
    title: "HubSpot-to-Slack Bridge",
    description: "Custom middleware bypassing native platform limitations for real-time lead and deal notifications.",
    techStack: ["Google Apps Script", "HubSpot API", "Slack Webhooks"],
    category: "Automation",
    link: "https://github.com/Frankwerd/hubspot-slack-bridge"
  },
  {
    id: "ai-email-stress-tester",
    title: "AI Email Stress-Testing Tool",
    description: "Multithreaded bulk email generation tool distributed as a standalone .exe for performance testing.",
    techStack: ["Python", "Gemini API", "ttkbootstrap", "PyInstaller"],
    category: "AI",
    link: "https://github.com/Frankwerd/ai-email-tester"
  },
  {
    id: "automated-invoice-tracker",
    title: "Automated Invoice Tracker",
    description: "Real-time financial dashboard with auto-logging, status tracking, and automated overdue reminders.",
    techStack: ["Google Apps Script", "Gmail API", "Sheets API"],
    category: "Automation",
    link: "https://github.com/Frankwerd/invoice-tracker"
  },
  {
    id: "erp-lite",
    title: "ERP-lite",
    description: "Serverless ERP system connecting order fulfillment, inventory management, CRM, and freight OMS scanner.",
    techStack: ["Google Apps Script", "JavaScript", "HubSpot API", "Slack API"],
    category: "Automation",
    link: "https://github.com/Frankwerd/erp-lite"
  },
  {
    id: "grantwriter-ai",
    title: "GrantWriter AI",
    description: "AI-powered browser extension co-pilot for grant proposal writing and RFP analysis.",
    techStack: ["JavaScript", "Chrome Extension API", "Google Gemini API", "Chart.js"],
    category: "AI",
    link: "https://github.com/Frankwerd/grantwriter-ai"
  },
  {
    id: "careersuite-ai",
    title: "CareerSuite.ai Platform",
    description: "Full-stack AI job application toolkit with serverless data processing and multi-LLM workflows.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel AI SDK"],
    category: "Full-Stack",
    link: "https://github.com/Frankwerd/careersuite-ai"
  },
  {
    id: "profile-vector",
    title: "Profile Vector",
    description: "AI desktop app generating demographic and persona insights from social media follower lists.",
    techStack: ["Python", "PyQt6", "Google Gemini API", "Pandas"],
    category: "AI",
    link: "https://github.com/Frankwerd/profile-vector"
  },
  {
    id: "logistics-scanner",
    title: "Standalone Logistics Scanner",
    description: "Hardware-agnostic web interface bridging USB/Bluetooth HID scanners with backend ERP for real-time SKU validation.",
    techStack: ["Python", "Tkinter", "REST API", "ERP-Lite Architecture"],
    category: "Logistics",
    link: "https://github.com/Frankwerd/logistics-scanner"
  },
  {
    id: "asana-scheduler",
    title: "Asana Social Scheduler",
    description: "Serverless tool to schedule and post social media content directly from Asana tasks.",
    techStack: ["Python", "AWS Lambda", "AWS SAM", "Asana API"],
    category: "Automation",
    link: "https://github.com/Frankwerd/asana-scheduler"
  },
  {
    id: "january-bot",
    title: "January: AI Chatbot",
    description: "Modular, open-source AI chatbot template with real-time response streaming and BYOK system.",
    techStack: ["Next.js", "React", "Google GenAI SDK", "Vercel AI SDK"],
    category: "AI",
    link: "https://github.com/Frankwerd/january-bot"
  }
];
