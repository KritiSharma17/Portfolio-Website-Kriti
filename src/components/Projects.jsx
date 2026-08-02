import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
} from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio built using React, Vite and Tailwind CSS with beautiful animations and dark mode support.",
    tech: ["React", "Tailwind", "Vite"],
    github: "#",
    demo: "#",
  },

  {
    title: "Recipe Finder",
    description:
      "A responsive recipe search application with categorized recipes, clean UI and modern frontend development.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
  },

  {
    title: "Library Management",
    description:
      "A desktop application for managing books, students, issue records and return history efficiently.",
    tech: ["Python", "SQLite", "Tkinter"],
    github: "#",
    demo: "#",
  },

  {
    title: "Smart AI Classroom",
    description:
      "AI based classroom monitoring system with face recognition attendance and classroom analytics.",
    tech: ["Python", "OpenCV", "AI"],
    github: "#",
    demo: "#",
  },

  {
    title: "SafeRide",
    description:
      "A women safety ride-sharing platform focused on secure travel with emergency support features.",
    tech: ["Flask", "MySQL", "Python"],
    github: "#",
    demo: "#",
  },

  {
    title: "UrbanClap Clone",
    description:
      "A service booking platform with authentication, booking management and responsive dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="
      py-24
      px-6
      lg:px-20
      bg-gray-50
      dark:bg-slate-900
      transition-all
      duration-500
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="uppercase tracking-[6px] font-semibold text-pink-500">
            MY PROJECTS
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">

            Featured
            <span className="text-pink-500"> Projects</span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">

            A collection of projects showcasing my frontend,
            backend and full-stack development skills using
            modern technologies.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -8,
              }}

              className="
              flex
              flex-col
              h-full

              rounded-3xl

              overflow-hidden

              bg-white
              dark:bg-slate-800

              border
              border-pink-100
              dark:border-slate-700

              shadow-lg

              hover:border-pink-500
              hover:shadow-pink-500/20

              transition-all
              duration-300
              "
            >

              {/* Project Header */}

              <div
                className="
                h-36

                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-rose-500

                flex
                flex-col
                items-center
                justify-center

                px-6
                text-center
                "
              >

                <FaLaptopCode className="text-white text-4xl mb-3" />

                <h3 className="text-xl md:text-2xl font-bold text-white">

                  {project.title}

                </h3>

              </div>

              {/* Card Body */}

              <div className="flex flex-col flex-1 p-6">

                <p className="text-slate-600 dark:text-slate-400 leading-7">

                  {project.description}

                </p>

                {/* Technology Stack */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-2.5
                      py-1

                      rounded-full

                      bg-pink-100
                      dark:bg-pink-500/10

                      text-pink-600
                      dark:text-pink-400

                      text-xs
                      font-medium
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons continue in Part 2 */}

                                {/* Bottom Buttons */}

                <div className="mt-auto pt-8 flex gap-3">

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex-1

                    flex
                    items-center
                    justify-center
                    gap-2

                    py-2.5

                    rounded-xl

                    bg-slate-900
                    dark:bg-slate-700

                    text-white
                    text-sm
                    font-medium

                    hover:bg-pink-500

                    transition-all
                    duration-300
                    "
                  >

                    <FaGithub className="text-base" />

                    GitHub

                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    flex-1

                    flex
                    items-center
                    justify-center
                    gap-2

                    py-2.5

                    rounded-xl

                    bg-pink-500

                    text-white
                    text-sm
                    font-medium

                    hover:bg-pink-600

                    transition-all
                    duration-300
                    "
                  >

                    <FaExternalLinkAlt className="text-sm" />

                    Live Demo

                  </motion.a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;