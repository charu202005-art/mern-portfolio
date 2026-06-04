import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white py-12 border-t border-white/5 text-center overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-80 h-40 rounded-full bg-brand-cyan/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Name Logo */}
        <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent tracking-widest uppercase">
          Charmathy M.
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-xs md:text-sm text-gray-500 uppercase tracking-[0.25em] font-semibold">
          B.Tech CSE Student | Full Stack Developer
        </p>

        {/* Social Link Badges */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/charu202005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="GitHub Profile"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://linkedin.com/in/charmathy-m"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="mailto:charmathym2005@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all duration-300 shadow-lg cursor-pointer"
            aria-label="Send Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Copyright notice */}
        <p className="mt-10 text-xs text-gray-600 tracking-wider">
          © {currentYear} Charmathy M. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;