import collegeImg from "../assets/college.webp";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">
        Education
      </h2>

      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-8 shadow-lg">

        {/* College Image */}
        <div className="flex justify-center mb-8">
          <img
            src={collegeImg}
            alt="College"
            className="w-full max-w-2xl h-64 object-cover rounded-2xl border-4 border-gold-400 shadow-lg"
          />
        </div>

        {/* Education Details */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          Bachelor of Technology (B.Tech) - Computer Science Engineering
        </h3>

        <p className="text-cyan-400 text-lg mt-3">
          Your College Name
        </p>

        <p className="text-gray-400 mt-2">
          APJ Abdul Kalam Technological University
        </p>

        <p className="text-gray-400 mt-2">
          2022 - 2026
        </p>

        <p className="text-gray-300 mt-6 leading-relaxed">
          Pursuing B.Tech in Computer Science Engineering with a strong
          interest in MERN Stack Development, Web Technologies, Software
          Engineering, and Artificial Intelligence. Passionate about
          building modern web applications and solving real-world problems
          through technology.
        </p>
      </div>
    </section>
  );
}

export default Education;