import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="min-h-screen bg-gradient-to-b from-black via-[#0f0f1a] to-black text-white px-4 md:px-10 py-20"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 pt-20">

          {/* LEFT SIDE */}
          {/* LEFT SIDE */}
<div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-[0.25em] font-semibold uppercase backdrop-blur-sm shadow-lg">
                Welcome To My Portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center lg:text-left"className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-center lg:text-left"
            >
              Designing <span className="text-white">Future-Ready</span>{" "}
              <span className="text-cyan-500">Websites</span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-8 max-w-xl"
            >
              <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                I'm{" "}
                <span className="text-white font-semibold">
                  Charmathy M
                </span>
                , a passionate
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-cyan-400 animate-pulse mt-2">
                MERN STACK DEVELOPER
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mt-2">
                Building modern and responsive web applications with clean UI,
                scalable backend systems, and modern technologies.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 transition-all duration-300 font-semibold"
              >
                LET'S COLLABORATE
              </a>

              <a
                href="/Charmathy_M_Resume.pdf"
                download="Charmathy_M_Resume.pdf"
                className="px-8 py-4 rounded-xl border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 font-semibold"
              >
                GET RESUME
              </a>
            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-black/60 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-xl backdrop-blur-xl">

              {/* Top Bar */}
              <div
                className="mx-auto mt-3 w-[95%] md:w-[85%]
                flex items-center justify-between
                px-4 md:px-10 py-3 md:py-4
                bg-white/5 backdrop-blur-xl
                border border-white/10
                rounded-full
                shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                <span className="text-xs text-gray-400">
                  Portfolio.ts
                </span>
              </div>

              {/* Code Area */}
              <pre className="p-4 md:p-6 text-xs md:text-sm overflow-x-auto">
                <code className="text-gray-300">
{`const developer = {
  name: 'Charmathy M',
  focus: 'Fullstack Development',
  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  motto: 'Build Modern Web Apps'
};

developer.showcase();`}
                </code>
              </pre>

            </div>
          </motion.div>

        </div>
      </section>

      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;