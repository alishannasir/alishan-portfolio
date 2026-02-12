import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollZigzagLine from "@/components/ScrollZigzagLine";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ArrowUpRight, Mail, MapPin, Github, Linkedin, Youtube, Globe } from "lucide-react";
import { shanImages } from "@/data/adventureImages";

const contactLinks = [
  { href: "mailto:iamalishannasir@gamil.com", label: "Email", text: "iamalishannasir@gamil.com", Icon: Mail },
  { href: "https://github.com/alishannasir", label: "GitHub", text: "github.com/alishannasir", Icon: Github },
  { href: "https://www.linkedin.com/in/ali-shan-a85721272/", label: "LinkedIn", text: "LinkedIn", Icon: Linkedin },
  { href: "https://www.upwork.com/freelancers/~01108fa2a3313a6ad2", label: "Upwork", text: "Upwork", Icon: Globe },
  { href: "https://www.youtube.com/@alishan0206", label: "YouTube", text: "YouTube", Icon: Youtube },
  { href: "https://discord.com/channels/@me", label: "Discord", text: "Discord", Icon: Globe },
];

const Connect = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-background">
      <ScrollZigzagLine variant="connect" scrollProgress={scrollProgress} />
      <Navigation />
      <main className="min-h-screen pt-40 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Have a project in mind? I'd love to hear about it. Reach out and let's create something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4 mb-20"
          >
            <img
              src={shanImages[3]}
              alt=""
              className="w-20 h-20 rounded-md object-cover border border-foreground/10 shrink-0"
            />
            <p className="font-serif text-sm text-muted-foreground/80 italic">
              Off building or out capturing moments? Either way — say hi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-8">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                {contactLinks.map(({ href, label, text, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-serif text-lg">{text}</span>
                    {!href.startsWith("mailto:") && (
                      <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    )}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-8">Location</h3>
              <div className="flex items-start gap-3 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-serif text-lg">Gilgit</p>
                  <p className="font-serif text-lg">Pakistan</p>
                </div>
              </div>
              <p className="font-serif text-muted-foreground/70 mt-8">
                Available for remote collaborations worldwide. Based in Gilgit, Pakistan.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 pt-16 border-t border-foreground/10"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">Project Inquiries</h3>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
              Currently accepting select projects. For project inquiries, please include a brief description of your project, timeline, and budget range.
            </p>
            <a
              href="mailto:iamalishannasir@gamil.com"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-serif text-lg"
            >
              iamalishannasir@gamil.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Connect;
