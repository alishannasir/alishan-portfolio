import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import HoverText from "@/components/HoverText";
import profileImage from "@/assets/myimage.jpg";

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Mail size={18} />, href: "mailto:iamalishannasir@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground border-t border-foreground/10 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 relative min-h-[280px]">
          {/* Let's [photo] work together */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left w-full gap-4 md:gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="heading-display text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight"
            >
              Let's
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden  border border-foreground/10 shrink-0"
            >
              <img
                src={profileImage}
                alt=""
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="heading-display text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight"
            >
              <HoverText text="work" />
            </motion.h2>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="heading-display text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight"
          >
            together
          </motion.h2>

          {/* Contact email — bottom left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-0 left-0 text-sm md:text-base font-serif text-muted-foreground"
          >
            <a
              href="mailto:iamalishannasir@gmail.com"
              className="hover:text-primary transition-colors duration-200"
            >
              <HoverText text="iamalishannasir@gmail.com" />
            </a>
          </motion.div>

          {/* Social links — bottom right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute bottom-0 right-0"
          >
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-foreground/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
