import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <div className="max-w-3xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center gap-12 text-sm tracking-wide">
            <Link to="/" className="nav-link">
              home
            </Link>
            <Link to="/about" className="nav-link">
              about
            </Link>
            <Link to="/expertise" className="nav-link">
              work
            </Link>
            <Link to="/connect" className="nav-link">
              connect
            </Link>
          </div>

          {/* Right: theme toggle then back button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Brand Mark — back button */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-primary hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              aria-label="Go back"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="2"/>
                <line x1="32" y1="8" x2="8" y2="32" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
