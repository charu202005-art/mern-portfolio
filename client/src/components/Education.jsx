import { motion } from "framer-motion";
import collegeImg from "../assets/college.webp";

function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-24 bg-[radial-gradient(ellipse_at_bottom,_rgba(189,0,255,0.05),_transparent_50%)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-cyan">
          Academic Timeline
        </span>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-slate-200 to-brand-cyan bg-clip-text text-transparent mt-2">
          Education
        </h2>
      </motion.div>

      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Column - College Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative group"
        >
          {/* Neon decorative background glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-purple opacity-20 blur group-hover:opacity-40 transition duration-500" />
          
          <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={collegeImg}
              alt="College Campus"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>

        {/* Right Column - Academic Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-brand-cyan/20 transition-all duration-300">
            {/* Soft decorative light strip */}
            <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-brand-cyan to-brand-purple" />

            <div className="flex justify-between items-start flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                2022 - 2026
              </span>
              <span className="text-gray-500 text-xs font-semibold">
                B.Tech (CSE)
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-4 leading-tight group-hover:text-brand-cyan transition-colors">
              Bachelor of Technology (B.Tech)
            </h3>
            
            <p className="text-gray-300 font-semibold text-sm mt-1">
              Computer Science & Engineering
            </p>

            <p className="text-brand-cyan text-sm font-medium mt-3">
              College of Engineering & Technology
            </p>

            <p className="text-gray-400 text-xs mt-1">
              APJ Abdul Kalam Technological University
            </p>

            <p className="text-gray-300 mt-6 leading-relaxed text-sm md:text-base border-t border-white/5 pt-6">
              Pursuing a degree in Computer Science and Engineering with a focus on modern web ecosystems, cloud integration, data structures, and database architectures. Actively exploring frontend user experiences, responsive layout paradigms, and robust API endpoints.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;