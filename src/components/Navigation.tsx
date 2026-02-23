import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/expertise", label: "work" },
  { to: "/connect", label: "connect" },
];

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Hamburger trigger — fixed top-left when menu closed */}
      {!menuOpen ? (
        <motion.button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="fixed top-6 left-6 sm:top-8 sm:left-8 z-[60] p-2 -m-2 text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </motion.button>
      ) : null}

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 pointer-events-none"
            >
              <div className="h-full flex items-center justify-between px-8 sm:px-12 md:px-16 lg:px-24 pointer-events-auto">
                {/* Left: vertical nav links */}
                <nav
                  className="flex flex-col gap-4 sm:gap-6"
                  aria-label="Main navigation"
                >
                  {navLinks.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={closeMenu}
                      className="text-primary font-bold text-sm sm:text-base tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                {/* Center: cross — closes menu */}
                <button
                  type="button"
                  onClick={closeMenu}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-3 -m-3 text-primary hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                  aria-label="Close menu"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {/* Right: Get in Touch — vertical text (reads bottom to top) + circular arrow */}
                <Link
                  to="/connect"
                  onClick={closeMenu}
                  className="flex flex-col items-center gap-4 group"
                >
                  <span
                    className="text-primary font-bold text-sm sm:text-base tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", textOrientation: "mixed" }}
                  >
                    get in touch
                  </span>
                  <span className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:opacity-80 transition-opacity shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180" aria-hidden>
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
