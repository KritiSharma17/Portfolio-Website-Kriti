import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    level: "Advanced",
    desc: "Semantic & Accessible Markup",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    level: "Advanced",
    desc: "Responsive UI Design",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "Advanced",
    desc: "Modern ES6+ Development",
  },
  {
    name: "React",
    icon: FaReact,
    level: "Advanced",
    desc: "Reusable UI Components",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Advanced",
    desc: "Fast Modern Styling",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    level: "Intermediate",
    desc: "Backend Development",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    level: "Intermediate",
    desc: "Relational Database",
  },
  {
    name: "Python",
    icon: FaPython,
    level: "Intermediate",
    desc: "Automation & Backend",
  },
  {
    name: "Java",
    icon: FaJava,
    level: "Intermediate",
    desc: "Object-Oriented Programming",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    level: "Advanced",
    desc: "Version Control",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    level: "Advanced",
    desc: "Project Collaboration",
  },
  {
    name: "Vite",
    icon: SiVite,
    level: "Advanced",
    desc: "Lightning Fast Development",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
      py-24
      px-6
      lg:px-20
      bg-white
      dark:bg-slate-950
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
          className="max-w-3xl mx-auto text-center"
        >

          <span className="uppercase tracking-[6px] text-sm font-semibold text-pink-500">
            MY SKILLS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">

            Skills &

            <span className="text-pink-500">
              {" "}Expertise
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">

            Passionate about building beautiful,
            responsive and scalable web applications
            using modern frontend and backend technologies.

          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <motion.div
                key={skill.name}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}

                viewport={{ once: true }}

                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}

                className="
                group
                rounded-3xl
                border
                border-pink-100
                dark:border-slate-700
                bg-white/80
                dark:bg-slate-900/80
                backdrop-blur-xl
                p-6
                shadow-lg
                hover:border-pink-500
                hover:shadow-xl
                hover:shadow-pink-500/20
                transition-all
                duration-300
                "
              >
                                {/* Top Section */}

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    {/* Icon */}

                    <div
                      className="
                      h-14
                      w-14
                      rounded-2xl
                      bg-pink-100
                      dark:bg-pink-500/10
                      flex
                      items-center
                      justify-center
                      group-hover:scale-110
                      transition-all
                      duration-300
                      "
                    >

                      <Icon className="text-3xl text-pink-500" />

                    </div>

                    {/* Name */}

                    <div>

                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {skill.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {skill.desc}
                      </p>

                    </div>

                  </div>

                  {/* Badge */}

                  <span
                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-pink-100
                    dark:bg-pink-500/10
                    text-pink-600
                    dark:text-pink-400
                    text-xs
                    font-semibold
                    "
                  >
                    {skill.level}
                  </span>

                </div>

                {/* Progress Bar */}

                <div className="mt-6">

                  <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width:
                          skill.level === "Advanced"
                            ? "95%"
                            : "75%",
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-pink-500
                      via-fuchsia-500
                      to-rose-500
                      "
                    />

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;