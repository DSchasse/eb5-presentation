import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "About Me",
    bullets: [
      "20+ years of executive support in finance, real estate, and board governance",
      "AI optimization specialist with neurodivergent-aligned planning experience",
      "Creative maker: 3D objects, soaps, jewelry, travel, writing",
      "Known for strategic clarity, follow-through, and adaptive systems"
    ]
  },
  {
    title: "Kickoff Agenda",
    bullets: [
      "Welcome + Introduction",
      "Immediate Priorities: Guardianship, Housing, Insurance",
      "Financial Stabilization + Bookkeeping",
      "Sunsama + Tech Stack Integration",
      "Workflow + Focus Tools (ADHD-aligned systems)",
      "Legacy Projects: Book & Podcast",
      "Co-create priorities & next steps"
    ]
  },
  {
    title: "AI Financial Assistant",
    bullets: [
      "Custom GPT Tool for Journal Entry Adjustments",
      "Automates detection of duplicates, imbalances, and errors",
      "Built for Zoho Books and financial triage workflows",
      "Reduces backlog and CPA coordination time"
    ]
  },
  {
    title: "Tech Stack Alignment",
    bullets: [
      "Google Workspace, Zoho CRM/Books, ClickUp",
      "Expensify, Smartsheet, Evernote",
      "Obsidian for long-form creative capture"
    ]
  },
  {
    title: "Focus Systems",
    bullets: [
      "Sunsama: time-blocking, ClickUp sync, ADHD-friendly rituals",
      "1-3-5 Planning Method, Ideal Week Structure",
      "Dopamine-driven task design for momentum"
    ]
  },
  {
    title: "Creative Projects",
    bullets: [
      "Book and podcast concept support",
      "Obsidian archives and idea maps",
      "Voice-to-text workflows using Descript and Claude"
    ]
  },
  {
    title: "Next Steps",
    bullets: [
      "Invite Angel to select first priorities",
      "Request feedback on flow, support style, and tools",
      "Refine 30/60/90 plan based on conversation"
    ]
  }
];

export default function EB5PresentationApp() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#082F49] flex flex-col items-center justify-center px-4 relative">
      <img
        src="/eb5-logo.png"
        alt="EB5 Capital Logo"
        className="w-32 h-auto mb-6 absolute top-6 left-6"
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-2xl w-full mt-24"
        >
          <h2 className="text-2xl font-semibold mb-4">{slides[index].title}</h2>
          <ul className="list-disc list-inside space-y-2">
            {slides[index].bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 mt-6">
        <button
          onClick={prev}
          className="px-4 py-2 rounded bg-[#D4AF37] text-white hover:bg-[#c19d30]"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded bg-[#082F49] text-white hover:bg-[#061f34]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
