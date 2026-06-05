import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaQrcode, FaRobot, FaLaptopCode, FaDatabase } from "react-icons/fa";

const SkeletonCard = () => (
  <div className="glass-panel p-6 rounded-2xl w-full md:w-[350px] border border-white/5 animate-pulse">
    <div className="h-6 bg-white/10 rounded-md w-3/4 mb-4" />
    <div className="h-4 bg-white/5 rounded-md w-full mb-2" />
    <div className="h-4 bg-white/5 rounded-md w-5/6 mb-6" />
    <div className="h-10 bg-white/10 rounded-xl w-1/3 mt-6" />
  </div>
);

const getProjectIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes("qr") || t.includes("billing")) return <FaQrcode size={22} className="text-brand-cyan" />;
  if (t.includes("robot") || t.includes("navia")) return <FaRobot size={22} className="text-brand-purple" />;
  if (t.includes("guide") || t.includes("map")) return <FaRobot size={22} className="text-brand-purple" />;
  if (t.includes("stack") || t.includes("fullstack") || t.includes("mern")) return <FaLaptopCode size={22} className="text-brand-cyan" />;
  return <FaDatabase size={22} className="text-brand-cyan" />;
};

const ProjectCard = ({ project, variants }) => {
  const cardRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  // Track cursor position coordinates relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Create smooth springs of these coordinates to avoid sudden transitions
  const springConfig = { stiffness: 150, damping: 22, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Map smooth coordinates to rotation angles (limit rotation to +/- 12 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  // Map smooth coordinates to glare background radial gradient position
  const glareBg = useTransform(
    [springX, springY],
    ([latestX, latestY]) => {
      const pctX = (latestX + 0.5) * 100;
      const pctY = (latestY + 0.5) * 100;
      return `radial-gradient(circle 240px at ${pctX}% ${pctY}%, rgba(0, 240, 255, 0.12) 0%, rgba(189, 0, 255, 0.04) 50%, transparent 100%)`;
    }
  );

  // Glare visibility animation
  const opacityVal = useMotionValue(0);
  const opacitySpring = useSpring(opacityVal, springConfig);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
    opacityVal.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    opacityVal.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group glass-panel p-6 rounded-2xl w-full md:w-[350px] border border-white/5 card-hover-3d shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[280px]"
    >
      {/* Blurred background image blend (Holographic watermark) */}
      {project.image && !imageError && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 rounded-2xl select-none">
          <img
            src={project.image}
            alt=""
            onError={() => setImageError(true)}
            className="w-full h-full object-cover filter blur-[35px] opacity-[0.08] group-hover:opacity-[0.20] group-hover:scale-110 transition-all duration-700 ease-out"
          />
          {/* Subtle gradient vignette to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/90 to-transparent" />
        </div>
      )}

      {/* Dynamic light reflection glare layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: glareBg,
          opacity: opacitySpring,
        }}
      />

      {/* Preserve 3D context wrapper for child elements */}
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10">
        {/* Decorative card top border line glow on hover */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Header line: Badges & Glowing themed icon */}
        <div className="flex justify-between items-start gap-4 mb-4" style={{ transformStyle: "preserve-3d" }}>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 depth-badge">
            {(project.technologies && project.technologies.length > 0
              ? project.technologies
              : ["HTML", "CSS", "JavaScript"]
            ).map((tech, techIdx) => (
              <span
                key={techIdx}
                className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/10"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Floating glowing thematic icon */}
          <div className="depth-icon p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand-cyan/35 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center">
            {getProjectIcon(project.title)}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-brand-cyan group-hover:to-white transition-all duration-300 leading-tight depth-title">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-4 depth-desc">
          {project.description}
        </p>
      </div>

      {/* Button actions */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between depth-actions relative z-10">
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
  );
};

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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
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
              <ProjectCard
                key={index}
                project={project}
                variants={cardVariants}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;