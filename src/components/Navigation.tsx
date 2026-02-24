import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/expertise", label: "work" },
  { to: "/connect", label: "connect" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-12 text-sm tracking-wide">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden p-2 -m-2 text-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map(({ to, label }) => (
                <Link key={to} to={to} className="nav-link">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="p-2 -m-2 text-primary hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              aria-label="Go back"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 sm:w-10 sm:h-10"
              >
                <line
                  x1="8"
                  y1="8"
                  x2="32"
                  y2="32"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="32"
                  y1="8"
                  x2="8"
                  y2="32"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-20 z-40 bg-foreground/10 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 top-20 z-50 border-b border-border bg-background px-6 py-6 md:hidden"
            >
              <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
                {navLinks.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="nav-link text-base py-2"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
