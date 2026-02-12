import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Globe } from "lucide-react";
import HoverText from "@/components/HoverText";
import profileImage from "@/assets/myimage.jpg";

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com/alishannasir", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ali-shan-a85721272/", label: "LinkedIn" },
  { icon: <Youtube size={18} />, href: "https://www.youtube.com/@alishan0206", label: "YouTube" },
  { icon: <Globe size={18} />, href: "https://www.upwork.com/freelancers/~01108fa2a3313a6ad2", label: "Upwork" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground border-t border-foreground/10 py-20 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Let's [photo] work together — heading block */}
        <div className="flex flex-col items-center justify-center gap-8 pb-16">
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
              className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden border border-foreground/10 shrink-0"
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
        </div>

        {/* Contact row — email (left) + social icons (right), always below heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-foreground/10"
        >
          <a
            href="mailto:iamalishannasir@gamil.com"
            className="text-sm md:text-base font-serif text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <HoverText text="iamalishannasir@gamil.com" />
          </a>
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
    </footer>
  );
};

export default Footer;
