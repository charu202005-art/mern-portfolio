import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjectData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white mt-20 text-xl">
        Loading projects...
      </div>
    );
  }

  return (
    <section id="projects" className="bg-gray-900 text-white px-10 py-20">
      <h2 className="text-4xl font-bold text-center text-cyan-400">
        Projects
      </h2>

      <div className="flex justify-center gap-8 mt-12 flex-wrap">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-black p-6 rounded-xl w-full md:w-[350px] shadow-lg border border-cyan-400/20"
          >
            {/* Image */}
            <div className="w-full h-56 flex items-center justify-center bg-black rounded-lg mb-4 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-cyan-400">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-gray-300">
              {project.description}
            </p>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition mt-6"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;