import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollZigzagLine from "@/components/ScrollZigzagLine";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import profileImage from "@/assets/shan.jpeg";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Delivered", value: "4+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "3+" },
];

const values = [
  {
    title: "Pixel Perfect",
    description: "I obsess over the details — spacing, alignment, transitions. Every pixel matters in creating a polished experience.",
  },
  {
    title: "Performance First",
    description: "Fast apps are good apps. I build with bundle size, render cycles, and Core Web Vitals in mind from day one.",
  },
  {
    title: "Accessibility Always",
    description: "The web is for everyone. I follow WCAG standards and test with screen readers to ensure inclusive experiences.",
  },
  {
    title: "Clean Architecture",
    description: "Maintainable code is sustainable code. I write modular, well-tested components that scale with your team.",
  },
];

const About = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen bg-background">
      <ScrollZigzagLine variant="about" scrollProgress={scrollProgress} />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero: small profile + headline */}
        <section className="pt-48 sm:pt-52 pb-16 px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <img
                  src={profileImage}
                  alt=""
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-foreground/10"
                />
              </motion.div>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="heading-display text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
                >
                  I craft interfaces that feel alive.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-lg text-muted-foreground leading-relaxed"
                >
                  Front-end developer focused on simple, clear, and intuitive experiences.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-8 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-3xl md:text-4xl text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-16 px-8 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-primary tracking-widest uppercase mb-8"
            >
              My Story
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-6"
            >
              I started with HTML and CSS, fascinated by turning code into something people could see and use. Over the years I moved from landing pages to full applications used by many — working with startups, agencies, and product teams.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-muted-foreground leading-relaxed"
            >
              I focus on React and TypeScript, performant and accessible UIs, and tools like Tailwind, Framer Motion, and Next.js. I care about design systems, component structure, and front-end craft.
            </motion.p>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-8 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-primary tracking-widest uppercase mb-8"
            >
              What I Value
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="border border-foreground/10 rounded p-6"
                >
                  <h4 className="font-serif text-lg text-foreground mb-2">{value.title}</h4>
                  <p className="font-serif text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-8 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl md:text-4xl text-foreground mb-4"
            >
              Let's build something{" "}
              <span className="text-primary italic">together</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-muted-foreground mb-8"
            >
              Open to new opportunities and interesting projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <Link
                to="/connect"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded text-sm font-medium tracking-wide uppercase hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
