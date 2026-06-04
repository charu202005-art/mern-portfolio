import { motion } from "framer-motion";
import profileImg from "../assets/Charmathy.jpeg";

function About() {
  const details = [
    { label: "Role", value: "Full Stack MERN Developer" },
    { label: "Degree", value: "B.Tech in Computer Science" },
    { label: "Focus", value: "Modern Interactive UI / Web APIs" },
    { label: "Interests", value: "3D Web Graphics, Cloud Computing" },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden bg-black"
    >
      {/* Decorative side glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 z-10">
        
        {/* Left Side - Interactive Photo Frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          {/* Glowing background borders */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-purple opacity-40 blur group-hover:opacity-100 transition duration-700" />
          
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden glass-panel border border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
            <img
              src={profileImg}
              alt="Charmathy M"
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Right Side - About Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-center md:text-left"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-cyan">
            Background
          </span>

          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-slate-200 to-brand-cyan bg-clip-text text-transparent mt-2 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            I'm <span className="font-semibold text-white">Charmathy M</span>,
            a passionate MERN Stack Developer with a strong interest in
            building modern, responsive, and user-friendly web applications.
            I enjoy learning new technologies and solving real-world problems
            through innovative software solutions.
          </p>

          {/* Quick details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {details.map((detail, index) => (
              <div
                key={index}
                className="glass-panel p-4 rounded-xl text-left border border-white/5 hover:border-brand-cyan/20 transition-all duration-300"
              >
                <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">
                  {detail.label}
                </p>
                <p className="text-white text-sm mt-1 font-medium">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;