import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
  FaPaintBrush,
  FaComments,
  FaBrain,
  FaUsers,
  FaUserTie,
  FaSyncAlt,
  FaClock,
  FaLightbulb,
  FaCogs
} from "react-icons/fa";

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  const technicalSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, desc: "Semantic page structure" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, desc: "Responsive layouts & styles" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, desc: "Dynamic script scripting" },
    { name: "React", icon: <FaReact className="text-cyan-400 animate-spin-slow" />, desc: "Component-based UI architecture" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, desc: "Server-side JS execution" },
    { name: "Express.js", icon: <FaCogs className="text-gray-400" />, desc: "REST API endpoints routing" },
    { name: "MongoDB", icon: <FaDatabase className="text-green-600" />, desc: "NoSQL document storage" },
    { name: "MySQL", icon: <FaDatabase className="text-cyan-600" />, desc: "Relational database tables" },
    { name: "Java", icon: <FaJava className="text-red-500" />, desc: "Object-oriented program logic" },
    { name: "Python", icon: <FaPython className="text-yellow-600" />, desc: "High-level scripting & scripting" },
    { name: "Git", icon: <FaGitAlt className="text-white" />, desc: "Va distributed version control software used to track changes in coden control  & collaboration" },
    { name: "GitHub", icon: <FaGitAlt className="text-white" />, desc: "Version control & collaboration" },
    { name: "Canva", icon: <FaPaintBrush className="text-purple-400" />, desc: "Interface mockups & graphics" },
  ];

  const softSkills = [
    { name: "Communication", icon: <FaComments className="text-cyan-400" />, desc: "Clear conveying of core ideas" },
    { name: "Problem Solving", icon: <FaBrain className="text-pink-400" />, desc: "Algorithmic thinking & logic" },
    { name: "Teamwork", icon: <FaUsers className="text-green-400" />, desc: "Cooperative project creation" },
    { name: "Leadership", icon: <FaUserTie className="text-yellow-400" />, desc: "Guiding task deliverables" },
    { name: "Adaptability", icon: <FaSyncAlt className="text-blue-400 animate-spin-slow" />, desc: "Quick absorption of tech" },
    { name: "Time Management", icon: <FaClock className="text-orange-400" />, desc: "Meeting product milestones" },
    { name: "Creativity", icon: <FaLightbulb className="text-yellow-300 animate-pulse" />, desc: "Innovative design solutions" },
    { name: "Critical Thinking", icon: <FaBrain className="text-purple-400" />, desc: "Unbiased analytical reviews" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
  };

  return (
    <section
      id="skills"
      className="relative py-16 md:py-28 px-6 lg:min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden"
    >
      {/* Decorative top glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mb-12"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-cyan">
          Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-slate-200 to-brand-cyan bg-clip-text text-transparent mt-2 mb-4">
          Skills
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Here is a detailed breakdown of the technical tools, libraries, and interpersonal attributes I use to build scalable products.
        </p>
      </motion.div>

      {/* Tabs Selector */}
      <div className="flex gap-4 p-1 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md mb-12 relative z-10">
        <button
          onClick={() => setActiveTab("technical")}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeTab === "technical"
              ? "bg-brand-cyan text-black shadow-lg shadow-brand-cyan/20"
              : "text-gray-400 hover:text-white"
            }`}
        >
          Technical
        </button>
        <button
          onClick={() => setActiveTab("soft")}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${activeTab === "soft"
              ? "bg-brand-cyan text-black shadow-lg shadow-brand-cyan/20"
              : "text-gray-400 hover:text-white"
            }`}
        >
          Soft Skills
        </button>
      </div>

      {/* Skills Grid */}
      <motion.div
        key={activeTab}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full z-10"
      >
        {(activeTab === "technical" ? technicalSkills : softSkills).map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: "rgba(0, 240, 255, 0.25)", boxShadow: "0 10px 25px -5px rgba(0, 240, 255, 0.05)" }}
            className="group glass-panel rounded-2xl p-6 border border-white/5 hover:bg-white/[0.03] transition-all duration-300 flex items-start gap-4 cursor-default relative overflow-hidden"
          >
            {/* Top decorative gradient border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="text-3xl p-3 bg-white/5 rounded-xl border border-white/5 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/20 transition-all">
              {skill.icon}
            </div>

            <div>
              <h3 className="text-white font-bold text-base tracking-wide group-hover:text-brand-cyan transition-colors">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;