import { motion } from "framer-motion";
import profileImg from "../assets/image.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Hi, I'm <span className="text-cyan-400">Charmathy M</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-semibold text-cyan-400 mt-4"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mt-6 text-lg leading-relaxed"
          >
            With a strong interest in building scalable web applications
            and solving real-world problems through technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-cyan-500 text-white hover:scale-105 transition"
            >
              View Work
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-cyan-400 hover:scale-105 transition"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <img
            src={profileImg}
            alt="Charmathy M"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;