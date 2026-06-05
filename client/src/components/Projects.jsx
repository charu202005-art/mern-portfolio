import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const SkeletonCard = () => (
  <div className="glass-panel p-6 rounded-2xl w-full md:w-[350px] border border-white/5 animate-pulse">
    <div className="w-full h-48 bg-white/5 rounded-xl mb-5" />
    <div className="h-6 bg-white/10 rounded-md w-3/4 mb-4" />
    <div className="h-4 bg-white/5 rounded-md w-full mb-2" />
    <div className="h-4 bg-white/5 rounded-md w-5/6 mb-6" />
    <div className="h-10 bg-white/10 rounded-xl w-1/3" />
  </div>
);

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = window.location.hostname === "localhost"
      ? "http://localhost:5000/api/projects"
      : "https://mern-portfolio-veds.onrender.com/api/projects";

    fetch(url)
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 20, rotateY: -10, scale: 0.9 },
    show: { opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 14 } }
  };

  return (
    <section
      id="projects"
      className="relative py-16 md:py-28 px-6 lg:min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(0,240,255,0.03),_transparent_50%)] text-white overflow-hidden"
    >
      {/* Floating background ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[120px] animate-float-medium pointer-events-none" />

      {/* Decorative center grid line background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,_transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-cyan">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white via-slate-200 to-brand-cyan bg-clip-text text-transparent mt-2 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Explore some of the fullstack MERN and interactive websites I have built, connected to live database systems.
        </p>
      </motion.div>

      {/* Cards container */}
      <div className="flex justify-center gap-8 flex-wrap max-w-7xl mx-auto relative z-10">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center gap-8 flex-wrap w-full"
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group glass-panel p-6 rounded-2xl w-full md:w-[350px] border border-white/5 card-hover-3d shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Decorative card gradient glow on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Image container */}
                  <div className="w-full h-48 flex items-center justify-center bg-black/40 rounded-xl mb-5 overflow-hidden border border-white/5 relative card-hover-3d-child">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Tech Badges (Dynamic or fallback) */}
                  <div className="flex flex-wrap gap-2 mb-3 depth-badge">
                    {(project.technologies && project.technologies.length > 0
                      ? project.technologies
                      : ["HTML", "CSS", "JavaScript"]
                    ).map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors leading-tight depth-title">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-3 depth-desc">
                    {project.description}
                  </p>
                </div>

                {/* Button actions */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between depth-actions">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-black hover:bg-white transition-all duration-300 font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-cyan/5"
                  >
                    View Project <FaExternalLinkAlt size={10} />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-white/10 hover:border-white text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;