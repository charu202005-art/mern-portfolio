import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Typewriter() {
  const titles = ["MERN STACK DEVELOPER", "CREATIVE WEB BUILDER", "FULL STACK ENGINEER"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent mt-2 inline-block min-h-[36px]">
      {titles[index].substring(0, subIndex)}
      <span className={`inline-block w-[3px] h-6 bg-brand-cyan ml-1 transition-opacity ${blink ? "opacity-100" : "opacity-0"}`} style={{ verticalAlign: "middle" }} />
    </h2>
  );
}

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
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-24 bg-[radial-gradient(ellipse_at_top,_rgba(0,240,255,0.08),_transparent_60%)]"
      >
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

        {/* Soft centered decorative glow */}
        <div className="absolute w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center relative z-10">
          
          {/* WELCOME BADGE */}
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

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight"
          >
            Designing <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent">Future-Ready</span> Websites
          </motion.h1>

          {/* SUBTEXT & TYPEWRITER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto"
          >
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="text-white font-semibold tracking-wide">
                Charmathy M
              </span>
              , a creative and result-driven
            </p>

            <Typewriter />

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4">
              Creating highly interactive web applications with robust backend systems, intuitive user interfaces, and engaging user experiences.
            </p>
          </motion.div>

          {/* CALL TO ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-brand-cyan text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 font-bold text-sm tracking-wider uppercase text-center"
            >
              Let's Collaborate
            </a>

            <a
              href="/Charmathy_M_Resume.pdf"
              download
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-brand-cyan text-white hover:text-brand-cyan transition-all duration-300 font-bold text-sm tracking-wider uppercase backdrop-blur-sm text-center"
            >
              Get Resume
            </a>
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