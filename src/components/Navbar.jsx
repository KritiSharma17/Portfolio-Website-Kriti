import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
  <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 shadow-sm">

    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      {/* Logo */}

      <Link
        to="/"
        className="text-3xl font-extrabold hover:scale-110 transition duration-300"
      >
        <span className="text-pink-600">
          Kriti
        </span>
      </Link>

      {/* Right Side */}

      <div className="flex items-center">

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10">

          <ul className="flex items-center gap-8">

            {navLinks.map((item) => (

              <li key={item.name}>

                <a
                  href={item.href}
                  className={`
                    relative
                    font-medium
                    transition-all
                    duration-300
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:bg-pink-600
                    after:transition-all
                    after:duration-300

                    ${
                      activeSection === item.id
                        ? "text-pink-600 after:w-full"
                        : "text-gray-700 dark:text-gray-200 hover:text-pink-600 after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </a>

              </li>

            ))}

          </ul>

        </div>

        {/* Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
            ml-8
            p-2
            rounded-full
            bg-pink-100
            dark:bg-slate-700
            hover:scale-110
            transition
            duration-300
            "
          >

            {darkMode ? (

              <Sun
                size={22}
                className="text-yellow-400"
              />

            ) : (

              <Moon
                size={22}
                className="text-pink-600"
              />

            )}

          </button>

        {/* Mobile Button */}

        <button
          className="md:hidden ml-3 text-pink-600"
          onClick={() => setIsOpen(!isOpen)}
        >

          {isOpen ? <X size={30} /> : <Menu size={30} />}

        </button>

      </div>

    </div>

    {/* Mobile Menu */}

    {isOpen && (

      <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">

        {navLinks.map((item) => (

          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`
              block
              px-6
              py-4
              transition-all
              duration-300

              ${
                activeSection === item.id
                  ? "text-pink-600 bg-pink-50 dark:bg-slate-800"
                  : "text-gray-700 dark:text-gray-200 hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-slate-800 hover:pl-8"
              }
            `}
          >
            {item.name}
          </a>

        ))}

      </div>

    )}

  </nav>
);
};
export default Navbar;