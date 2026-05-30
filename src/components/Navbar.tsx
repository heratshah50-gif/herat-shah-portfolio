"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 120);
      const sections = links.map((l) => document.getElementById(l.href.slice(1)));
      let current = "home";
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 200) {
          current = links[i].href.slice(1);
          break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        >
          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-sm">
              <a
                href="#home"
                onClick={(e) => scrollTo(e, "#home")}
                className="text-lg font-bold gradient-text-simple"
              >
                HS
              </a>
              <div className="hidden sm:flex items-center gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      active === link.href.slice(1)
                        ? "bg-purple-100 text-purple-700"
                        : "text-stone-500 hover:text-stone-800 hover:bg-stone-100"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={(e) => scrollTo(e, "#contact")}
                className="text-sm font-semibold px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
