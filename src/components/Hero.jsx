import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/KritiSharma17",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kriti-sharma-4bb8a430a",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:kritisharma@example.com",
  },
];

const stats = [
  {
    value: "10+",
    title: "Projects",
  },
  {
    value: "8+",
    title: "Technologies",
  },
  {
    value: "100%",
    title: "Dedication",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
      pt-24 lg:pt-28
      bg-white
      dark:bg-slate-950
      transition-all
      duration-500
      "
    >

      {/* Background Glow */}

      <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start mt-4 lg:mt-6 lg:pl-8 xl:pl-10"
          >

            <div
              className="
              relative
              w-full
              max-w-[290px]
              sm:max-w-[320px]
              md:max-w-[340px]

              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700

              bg-white/90
              dark:bg-slate-900/90

              backdrop-blur-xl

              shadow-2xl

              p-5
              md:p-6
              "
            >

              {/* Decorative Circle */}

              <div
                className="
                absolute
                -top-6
                -left-8

                w-32
                h-32

                md:w-36
                md:h-36

                rounded-full

                border-4
                border-dashed
                border-pink-500

                opacity-30
                "
              />

              {/* Image */}

              <div className="overflow-hidden rounded-2xl border-4 border-pink-500">

                <img
                  src="/assets/profile.jpeg"
                  alt="Kriti Sharma"
                  className="
                  w-full
                  h-[300px]
                  sm:h-[340px]
                  md:h-[360px]

                  object-cover
                  object-top

                  scale-[0.92]

                  hover:scale-95

                  transition-all
                  duration-500
                  "
                />

              </div>

              {/* Name */}

              <h2 className="mt-5 text-center text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">

                Kriti Sharma

              </h2>

              {/* Role */}

              <p className="mt-2 text-center text-pink-500 font-semibold">

                Full Stack Developer

              </p>

              {/* Description */}

              <p className="mt-4 text-center text-sm leading-7 text-slate-600 dark:text-slate-400">

                Passionate Full Stack Developer dedicated to
                building responsive web applications,
                clean user interfaces and modern digital
                experiences.

              </p>

              {/* Social Icons */}

              <div className="flex justify-center gap-4 mt-7">

                {socialLinks.map((item, index) => (

                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-10
                    h-10

                    rounded-xl

                    border
                    border-slate-300
                    dark:border-slate-700

                    flex
                    items-center
                    justify-center

                    text-pink-500

                    hover:bg-pink-500
                    hover:text-white
                    hover:-translate-y-1

                    transition-all
                    duration-300
                    "
                  >

                    {item.icon}

                  </a>

                ))}

              </div>

            </div>

          </motion.div>
                    {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <p className="uppercase tracking-[5px] text-sm font-semibold text-pink-500">
              Welcome to my Portfolio
            </p>

            <h1 className="mt-5 font-black leading-[1.05]">

              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-slate-900 dark:text-white">
                SOFTWARE
              </span>

              <span
                className="
                block
                mt-2

                text-5xl
                sm:text-6xl
                lg:text-7xl
                xl:text-8xl

                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-rose-500

                bg-clip-text
                text-transparent
                "
              >
                ENGINEER
              </span>

            </h1>

            {/* Description */}

            <p
              className="
              mt-8

              max-w-xl

              mx-auto
              lg:mx-0

              text-base
              md:text-lg

              leading-8

              text-slate-600
              dark:text-slate-400
              "
            >
              I build responsive websites, scalable web
              applications and modern user interfaces
              using React, JavaScript, Tailwind CSS and
              the latest web technologies to create
              impactful digital experiences.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              {stats.map((item, index) => (

                <div
                  key={index}
                  className="text-center lg:text-left"
                >

                  <h2 className="text-3xl md:text-5xl font-bold text-pink-500">
                    {item.value}
                  </h2>

                  <p
                    className="
                    mt-2

                    uppercase
                    tracking-wide

                    text-xs
                    md:text-sm

                    text-slate-600
                    dark:text-slate-400
                    "
                  >
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div
              className="
              mt-12

              flex
              flex-col
              sm:flex-row

              gap-4

              justify-center
              lg:justify-start
              "
            >

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

                href="#contact"

                className="
                inline-flex

                items-center
                justify-center

                gap-3

                px-8
                py-3

                rounded-full

                bg-gradient-to-r
                from-pink-500
                to-rose-600

                text-white

                font-semibold

                shadow-lg
                shadow-pink-500/30

                hover:shadow-pink-500/50

                transition-all
                duration-300
                "
              >

                Hire Me

                <FaArrowRight />

              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}

                href="/Kriti_Resume.pdf"
                download

                className="
                inline-flex

                items-center
                justify-center

                gap-3

                px-8
                py-3

                rounded-full

                border-2
                border-pink-500

                text-pink-500

                font-semibold

                hover:bg-pink-500
                hover:text-white

                transition-all
                duration-300
                "
              >

                Download Resume

                <FaDownload />

              </motion.a>

            </div>
                        {/* Tech Stack */}

            <div
              className="
              mt-12

              flex
              flex-wrap

              gap-3

              justify-center
              lg:justify-start
              "
            >

              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
              ].map((tech, index) => (

                <motion.span
                  key={index}

                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}

                  className="
                  px-5
                  py-2

                  rounded-full

                  bg-pink-100
                  dark:bg-pink-500/10

                  border
                  border-pink-200
                  dark:border-pink-500/20

                  text-pink-600
                  dark:text-pink-400

                  text-sm
                  font-medium

                  transition-all
                  duration-300
                  "
                >

                  {tech}

                </motion.span>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;