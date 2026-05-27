import { motion } from "framer-motion";

function Skills() {
  const technicalSkills = [
    {
      name: "HTML",
      description: "Markup language used to structure web pages.",
    },
    {
      name: "CSS",
      description: "Styles web pages and creates responsive designs.",
    },
    {
      name: "JavaScript",
      description: "Programming language used to create dynamic websites.",
    },
    {
      name: "React",
      description: "JavaScript library for building interactive user interfaces.",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for server-side development.",
    },
    {
      name: "Express.js",
      description: "Backend framework used to build REST APIs.",
    },
    {
      name: "MongoDB",
      description: "NoSQL database used to store application data.",
    },
    {
      name: "MySQL",
      description: "Relational database management system.",
    },
    {
      name: "Java",
      description: "Object-oriented programming language.",
    },
    {
      name: "Python",
      description: "Versatile high-level programming language.",
    },
    {
      name: "GitHub",
      description: "Platform for hosting and collaborating on code.",
    },
    {
      name: "Canva",
      description: "User-friendly graphic design platform.",
    },
  ];

  const softSkills = [
    {
      name: "Communication",
      description: "Effectively conveying ideas and collaborating with others.",
    },
    {
      name: "Problem Solving",
      description: "Analyzing challenges and finding practical solutions.",
    },
    {
      name: "Teamwork",
      description: "Working efficiently with team members to achieve goals.",
    },
    {
      name: "Leadership",
      description: "Taking initiative and guiding others when needed.",
    },
    {
      name: "Adaptability",
      description: "Quickly learning and adjusting to new situations.",
    },
    {
      name: "Time Management",
      description: "Organizing tasks efficiently and meeting deadlines.",
    },
    {
      name: "Creativity",
      description: "Generating innovative ideas and solutions.",
    },
    {
      name: "Critical Thinking",
      description: "Evaluating information logically and making decisions.",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4"
      >
        Skills
      </motion.h2>

      <p className="text-gray-400 text-center max-w-2xl mb-12">
        Technologies, tools, and professional skills that help me build
        modern, scalable, and user-friendly applications.
      </p>

      {/* Technical Skills */}
      <h3 className="text-3xl font-bold text-white mb-8">
        Technical Skills
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
        {technicalSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-6 text-center hover:scale-105 hover:border-cyan-400 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <h3 className="text-white font-semibold text-lg">
              {skill.name}
            </h3>

            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3
              w-60 bg-black text-white text-sm p-3 rounded-lg
              opacity-0 group-hover:opacity-100 transition-all duration-300
              pointer-events-none border border-cyan-400 z-50"
            >
              {skill.description}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="text-3xl font-bold text-cyan-400 mt-20 mb-8">
        Soft Skills
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
        {softSkills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-lg border border-cyan-400/20 rounded-2xl p-6 text-center hover:scale-105 hover:border-cyan-400 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <h3 className="text-white font-semibold text-lg">
              {skill.name}
            </h3>

            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3
              w-60 bg-black text-white text-sm p-3 rounded-lg
              opacity-0 group-hover:opacity-100 transition-all duration-300
              pointer-events-none border border-cyan-400 z-50"
            >
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;