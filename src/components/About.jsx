import {
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaAward,
  FaDownload,
} from "react-icons/fa";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="
      relative
      overflow-hidden
      py-24
      bg-white
      dark:bg-slate-950
      transition-all
      duration-500
      "
    >

      {/* Background Glow */}

      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">

            ABOUT ME

          </p>

          <h2
            className="
            mt-5

            text-4xl
            md:text-5xl
            lg:text-6xl

            font-black

            text-slate-900
            dark:text-white
            "
          >

            Know More

            <span className="text-pink-500">
              {" "}About Me
            </span>

          </h2>

          <p
            className="
            mt-6

            text-lg

            leading-8

            text-slate-600
            dark:text-slate-400
            "
          >

            Passionate Full Stack Developer dedicated to
            creating responsive websites, scalable web
            applications and beautiful digital experiences
            with clean, modern user interfaces.

          </p>

        </motion.div>

        {/* Main Content */}

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:-mt-2"
          >

            <h3
              className="
              text-4xl
              lg:text-5xl

              font-black

              leading-tight

              text-slate-900
              dark:text-white
              "
            >

              Hi, I'm

              <span className="text-pink-500">
                {" "}Kriti Sharma
              </span>

            </h3>

            <h4
              className="
              mt-4

              text-2xl

              font-semibold

              text-slate-700
              dark:text-slate-300
              "
            >

              Full Stack Developer

            </h4>

            <p
              className="
              mt-8

              text-lg

              leading-9

              text-slate-600
              dark:text-slate-400
              "
            >

              I'm currently pursuing B.Tech in Computer
              Science Engineering (AI & ML) and have a
              strong passion for building responsive,
              user-friendly and modern web applications
              using the latest technologies.

            </p>

            <p
              className="
              mt-7

              text-lg

              leading-9

              text-slate-600
              dark:text-slate-400
              "
            >

              I enjoy transforming ideas into beautiful
              digital products using React, JavaScript,
              Tailwind CSS, Java, Python and MySQL while
              continuously learning new technologies to
              improve my development skills.

            </p>

            {/* Resume Button */}

            <div className="mt-10">

              <a
                href="/Kriti_Resume.pdf"
                download
                className="
                inline-flex

                items-center

                gap-3

                rounded-full

                border-2
                border-pink-500

                px-8
                py-4

                text-pink-500

                font-semibold

                hover:bg-pink-500
                hover:text-white

                hover:scale-105

                transition-all
                duration-300
                "
              >

                <FaDownload />

                Download Resume

              </a>

            </div>

          </motion.div>
                    {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >

            {/* Card 1 */}

            <div
              className="
              group

              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700

              bg-white/70
              dark:bg-slate-900/70

              backdrop-blur-xl

              p-6

              hover:border-pink-500
              hover:-translate-y-3
              hover:scale-[1.02]

              hover:shadow-2xl
              hover:shadow-pink-500/30

              transition-all
              duration-300
              "
            >

              <div
                className="
                w-11
                h-11

                rounded-xl

                bg-pink-500/10

                border
                border-pink-500/20

                flex
                items-center
                justify-center

                group-hover:bg-pink-500

                transition-all
                duration-300
                "
              >

                <FaGraduationCap
                  className="
                  text-pink-500
                  text-lg

                  group-hover:text-white

                  transition-all
                  duration-300
                  "
                />

              </div>

              <h3 className="mt-5 text-2xl font-bold text-pink-500">

                B.Tech

              </h3>

              <h4
                className="
                mt-2

                text-lg

                font-semibold

                text-slate-900
                dark:text-white
                "
              >

                Education

              </h4>

              <p
                className="
                mt-2

                text-[15px]

                leading-7

                text-slate-600
                dark:text-slate-400
                "
              >

                B.Tech in Computer Science
                Engineering (AI & ML),
                currently in 4th Year with
                a passion for modern web
                development.

              </p>

            </div>

            {/* Card 2 */}

            <div
              className="
              group

              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700

              bg-white/70
              dark:bg-slate-900/70

              backdrop-blur-xl

              p-6

              hover:border-pink-500
              hover:-translate-y-3
              hover:scale-[1.02]

              hover:shadow-2xl
              hover:shadow-pink-500/30

              transition-all
              duration-300
              "
            >

              <div
                className="
                w-11
                h-11

                rounded-xl

                bg-pink-500/10

                border
                border-pink-500/20

                flex
                items-center
                justify-center

                group-hover:bg-pink-500

                transition-all
                duration-300
                "
              >

                <FaLaptopCode
                  className="
                  text-pink-500
                  text-lg

                  group-hover:text-white

                  transition-all
                  duration-300
                  "
                />

              </div>

              <h3 className="mt-5 text-2xl font-bold text-pink-500">

                10+

              </h3>

              <h4
                className="
                mt-2

                text-lg

                font-semibold

                text-slate-900
                dark:text-white
                "
              >

                Projects

              </h4>

              <p
                className="
                mt-2

                text-[15px]

                leading-7

                text-slate-600
                dark:text-slate-400
                "
              >

                Developed responsive
                websites, portfolio projects
                and full-stack web
                applications using
                modern technologies.

              </p>

            </div>
                        {/* Card 3 */}

            <div
              className="
              group

              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700

              bg-white/70
              dark:bg-slate-900/70

              backdrop-blur-xl

              p-6

              hover:border-pink-500
              hover:-translate-y-3
              hover:scale-[1.02]

              hover:shadow-2xl
              hover:shadow-pink-500/30

              transition-all
              duration-300
              "
            >

              <div
                className="
                w-11
                h-11

                rounded-xl

                bg-pink-500/10

                border
                border-pink-500/20

                flex
                items-center
                justify-center

                group-hover:bg-pink-500

                transition-all
                duration-300
                "
              >

                <FaLightbulb
                  className="
                  text-pink-500
                  text-lg

                  group-hover:text-white

                  transition-all
                  duration-300
                  "
                />

              </div>

              <h3 className="mt-5 text-2xl font-bold text-pink-500">
                8+
              </h3>

              <h4
                className="
                mt-2
                text-lg
                font-semibold
                text-slate-900
                dark:text-white
                "
              >
                Technologies
              </h4>

              <p
                className="
                mt-2

                text-[15px]

                leading-7

                text-slate-600
                dark:text-slate-400
                "
              >

                Skilled in React,
                JavaScript, Tailwind CSS,
                Java, Python, MySQL
                and modern web
                development technologies.

              </p>

            </div>

            {/* Card 4 */}

            <div
              className="
              group

              rounded-3xl

              bg-gradient-to-br
              from-pink-500
              via-fuchsia-500
              to-rose-500

              text-white

              p-6

              hover:-translate-y-3
              hover:scale-[1.02]

              hover:shadow-2xl
              hover:shadow-pink-500/40

              transition-all
              duration-300
              "
            >

              <div
                className="
                w-11
                h-11

                rounded-xl

                bg-white/20

                border
                border-white/20

                flex
                items-center
                justify-center
                "
              >

                <FaAward className="text-lg text-white" />

              </div>

              <h3 className="mt-5 text-2xl font-bold">

                2027

              </h3>

              <h4 className="mt-2 text-lg font-semibold">

                Goal

              </h4>

              <p
                className="
                mt-2

                text-[15px]

                leading-7

                text-white/90
                "
              >

                To become a skilled
                Full Stack Developer
                and contribute to
                innovative products
                that create real-world impact.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default About;