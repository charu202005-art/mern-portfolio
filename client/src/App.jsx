import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GravityScene from "./components/GravityScene";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-dark-bg text-white selection:bg-brand-cyan/20 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-24 md:py-32 bg-[radial-gradient(ellipse_at_top,_rgba(0,240,255,0.07),_transparent_60%)]"
      >
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
          
          {/* LEFT SIDE - CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs md:text-sm tracking-[0.2em] font-semibold uppercase backdrop-blur-md shadow-lg shadow-brand-cyan/5">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                Welcome To My Space
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
            >
              Designing <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent">Future-Ready</span> Websites
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Hi, I'm{" "}
                <span className="text-white font-semibold tracking-wide">
                  Charmathy M
                </span>
                , a creative and result-driven
              </p>

              <h2 className="text-xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent mt-2">
                MERN STACK DEVELOPER
              </h2>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4">
                Creating highly interactive web applications with robust backend systems, intuitive user interfaces, and engaging 3D experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-brand-cyan text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 font-bold text-sm tracking-wider uppercase"
              >
                Let's Collaborate
              </a>

              <a
                href="/Charmathy_M_Resume.pdf"
                download
                className="px-8 py-4 rounded-xl border border-white/10 hover:border-brand-cyan text-white hover:text-brand-cyan transition-all duration-300 font-bold text-sm tracking-wider uppercase backdrop-blur-sm"
              >
                Get Resume
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE - 3D CANVAS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-center relative"
          >
            {/* Soft decorative glow behind canvas */}
            <div className="absolute w-72 h-72 rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />
            <GravityScene />
          </motion.div>

        </div>
      </section>

      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;