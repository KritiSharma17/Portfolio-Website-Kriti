import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "kriti5harma1708@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    title: "Phone",
    value: "+91 7607600837",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Gorakhpur, Uttar Pradesh",
  },
];

const socials = [
  {
    icon: FaGithub,
    link: "https://github.com/KritiSharma17",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/kriti-sharma-4bb8a430a",
  },
  {
    icon: FaTwitter,
    link: "#",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
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
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <span className="uppercase tracking-[5px] text-sm font-semibold text-pink-500">
            CONTACT
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">

            Let's Work

            <span className="text-pink-500">
              {" "}Together
            </span>

          </h2>

          <p className="mt-6 text-slate-600 dark:text-slate-400 leading-8">

            Have a project idea, internship opportunity
            or simply want to connect? I'd love to hear
            from you.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">

              Get In Touch

            </h3>

            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-8">

              I'm always excited to discuss new
              opportunities, collaborate on innovative
              projects and connect with amazing people.

            </p>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">

              {contactInfo.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}

                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}

                    className="
                    flex
                    items-center
                    gap-5

                    rounded-2xl

                    p-5

                    bg-white
                    dark:bg-slate-900

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

                    <div
                      className="
                      w-14
                      h-14

                      rounded-2xl

                      bg-pink-100
                      dark:bg-pink-500/10

                      flex
                      items-center
                      justify-center
                      "
                    >

                      <Icon className="text-pink-500 text-xl" />

                    </div>

                    <div>

                      <p className="text-sm text-slate-500 dark:text-slate-400">

                        {item.title}

                      </p>

                      <p className="font-semibold text-slate-900 dark:text-white">

                        {item.value}

                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-10">

              {socials.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"

                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}

                    className="
                    w-12
                    h-12

                    rounded-xl

                    border
                    border-pink-200
                    dark:border-slate-700

                    bg-white
                    dark:bg-slate-900

                    text-pink-500

                    flex
                    items-center
                    justify-center

                    hover:bg-pink-500
                    hover:text-white
                    hover:border-pink-500

                    transition-all
                    duration-300
                    "
                  >

                    <Icon className="text-lg" />

                  </motion.a>

                );

              })}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}

            className="
            bg-white
            dark:bg-slate-900

            rounded-3xl

            border
            border-pink-100
            dark:border-slate-700

            shadow-xl

            p-6
            md:p-8
            "
          >

            <form className="space-y-5">
                              {/* Full Name */}

              <div>

                <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="
                  w-full
                  rounded-xl

                  border
                  border-slate-300
                  dark:border-slate-700

                  bg-white
                  dark:bg-slate-950

                  px-5
                  py-3.5

                  text-slate-900
                  dark:text-white

                  outline-none

                  transition-all
                  duration-300

                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/20
                  "
                />

              </div>

              {/* Email */}

              <div>

                <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                  w-full
                  rounded-xl

                  border
                  border-slate-300
                  dark:border-slate-700

                  bg-white
                  dark:bg-slate-950

                  px-5
                  py-3.5

                  text-slate-900
                  dark:text-white

                  outline-none

                  transition-all
                  duration-300

                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/20
                  "
                />

              </div>

              {/* Subject */}

              <div>

                <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="
                  w-full
                  rounded-xl

                  border
                  border-slate-300
                  dark:border-slate-700

                  bg-white
                  dark:bg-slate-950

                  px-5
                  py-3.5

                  text-slate-900
                  dark:text-white

                  outline-none

                  transition-all
                  duration-300

                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/20
                  "
                />

              </div>

              {/* Message */}

              <div>

                <label className="block mb-2 font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="
                  w-full
                  rounded-xl

                  border
                  border-slate-300
                  dark:border-slate-700

                  bg-white
                  dark:bg-slate-950

                  px-5
                  py-4

                  text-slate-900
                  dark:text-white

                  resize-none
                  outline-none

                  transition-all
                  duration-300

                  focus:border-pink-500
                  focus:ring-2
                  focus:ring-pink-500/20
                  "
                />

              </div>

              {/* Button */}

              <motion.button
                type="submit"

                whileHover={{
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="
                w-full

                rounded-xl

                bg-gradient-to-r
                from-pink-500
                via-fuchsia-500
                to-rose-500

                py-4

                text-white
                font-semibold

                flex
                items-center
                justify-center
                gap-3

                shadow-lg
                shadow-pink-500/30

                hover:shadow-pink-500/50

                transition-all
                duration-300
                "
              >

                <FaPaperPlane className="text-base" />

                Send Message

              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;