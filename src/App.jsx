import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { title: "Welcome + Context", content: ["Thank you for this opportunity—it’s an honor to collaborate with you.", "My goal today is not just to present solutions, but to understand what matters most to you right now."] },
  { title: "Angel’s Moment", content: ["You’ve been carrying a lot, across multiple fronts.", "I’ve designed this support structure to lighten that weight—without getting in your way."] },
  { title: "My Approach to Support", content: ["You lead with vision—I bring the infrastructure that lets that vision breathe.", "I blend systems thinking with adaptability to meet your leadership style."] }
];

export default function EB5PresentationApp() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") next();
      else if (event.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4F4F4] to-[#E4E9EF] flex flex-col items-center justify-center px-4 relative">
      <header className="absolute top-6 left-6">
        <h1 className="text-xl font-bold text-[#082F49]">Danielle Schasse</h1>
        <p className="text-sm text-[#082F49]">Executive Virtual Assistant | Kick-Off Meeting with Angelique G. Brunner, CEO and Founder of EB5 Capital</p>
      </header>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg p-10 rounded-xl shadow-xl max-w-2xl w-full text-[#082F49]"
        >
          <h2 className="text-3xl font-semibold mb-4">{slides[index].title}</h2>
          {slides[index].content.map((text, i) => <p key={i} className="mb-3">{text}</p>)}
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-4 mt-6 items-center">
        <button onClick={prev} className="px-4 py-2 rounded bg-[#D4AF37] text-white hover:bg-[#c19d30] transition">Previous</button>
        <span className="text-[#082F49]">{index + 1} / {slides.length}</span>
        <button onClick={next} className="px-4 py-2 rounded bg-[#082F49] text-white hover:bg-[#061f34] transition">Next</button>
      </div>
    </div>
  );
}