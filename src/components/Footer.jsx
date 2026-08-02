import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/KritiSharma17",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/kriti-sharma-4bb8a430a",
  },
  {
    icon: FaEnvelope,
    link: "kriti5harma1708@gmail.com",
    
  },
  {
    icon: FaTwitter,
    link: "#",
  },
];

const Footer = () => {

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

  };

  return (

    <footer
      className="
      bg-pink-50
      dark:bg-slate-950

      border-t
      border-pink-100
      dark:border-slate-800

      transition-all
      duration-500
      "
    >

      <div className="max-w-7xl mx-auto px-5 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-pink-500">
              Kriti Sharma
            </h2>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">

              Full Stack Developer passionate about
              building responsive websites,
              modern web applications and
              beautiful user experiences.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">

              Quick Links

            </h3>

            <ul className="mt-6 space-y-3">

              {links.map((link) => (

                <li key={link.name}>

                  <a
                    href={link.href}
                    className="
                    text-slate-600
                    dark:text-slate-400

                    hover:text-pink-500

                    transition
                    duration-300
                    "
                  >

                    {link.name}

                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Connect */}

          <div>

            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">

              Connect With Me

            </h3>

            <p className="mt-5 text-slate-600 dark:text-slate-400">

              Let's connect and build something
              amazing together.

            </p>

            <div className="flex gap-4 mt-6">

              {socials.map((item, index) => {

                const Icon = item.icon;

                return (

                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"

                    className="
                    w-11
                    h-11

                    rounded-xl

                    border
                    border-slate-300
                    dark:border-slate-700

                    flex
                    items-center
                    justify-center

                    hover:bg-pink-500
                    hover:text-white
                    hover:border-pink-500

                    hover:-translate-y-1

                    transition-all
                    duration-300
                    "
                  >

                    <Icon />

                  </a>

                );

              })}

            </div>

          </div>

        </div>
                {/* Divider */}

        <div className="border-t border-slate-200 dark:border-slate-800 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          <p
            className="
            text-sm
            text-slate-600
            dark:text-slate-400

            text-center
            sm:text-left
            "
          >
            © {new Date().getFullYear()} Kriti Sharma. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}

            className="
            h-12
            w-12

            rounded-full

            bg-gradient-to-r
            from-pink-500
            via-fuchsia-500
            to-rose-500

            text-white

            flex
            items-center
            justify-center

            shadow-lg
            shadow-pink-500/30

            hover:-translate-y-1
            hover:scale-110

            hover:shadow-pink-500/50

            transition-all
            duration-300
            "
          >

            <FaArrowUp />

          </button>

        </div>

      </div>

    </footer>

  );

};

export default Footer;