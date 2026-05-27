function Navbar({ activeSection }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="
          mx-auto mt-4
          w-[98%] max-w-7xl
          flex items-center justify-between
          px-6 md:px-10 py-4
          bg-white/5 backdrop-blur-xl
          border border-white/10
          rounded-full shadow-lg
        "
      >
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 whitespace-nowrap">
          Charmathy M
        </h1>

        {/* Menu */}
        <ul className="flex items-center gap-6 md:gap-10 text-lg">
          {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`relative transition-all duration-300 ${
                  activeSection === item
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                    activeSection === item ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;