import profileImg from "../assets/Charmathy.jpeg";
function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6"
    >
      {/* Left Side - Photo */}
      <div className="w-80 h-80 border-4 border-cyan-400 rounded-2xl overflow-hidden">
  <img
    src={profileImg}
    alt="Charmathy M"
    className="w-full h-full object-cover"
  />
</div>

      {/* Right Side - About Text */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I'm <span className="font-semibold text-white">Charmathy M</span>,
          a passionate MERN Stack Developer with a strong interest in
          building modern, responsive, and user-friendly web applications.
          I enjoy learning new technologies and solving real-world problems
          through innovative software solutions.
        </p>
      </div>
    </section>
  );
}

export default About;