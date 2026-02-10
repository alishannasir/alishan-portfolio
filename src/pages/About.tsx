import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-developer.jpg";

const wordAnimation = {
  hidden: {},
  visible: {},
};

const wordChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const AnimatedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <motion.p
      variants={wordAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordChild}
          transition={{ delay: delay + i * 0.04 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "30+" },
  { label: "Technologies", value: "15+" },
  { label: "Happy Clients", value: "20+" },
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
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="pt-40 pb-24 px-8">
          <div className="max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-primary tracking-widest uppercase mb-8"
            >
              About Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="heading-display text-5xl md:text-6xl lg:text-8xl mb-8 leading-[1.05]"
            >
              I craft interfaces{" "}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-muted-foreground italic"
              >
                that feel
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                alive.
              </motion.span>
            </motion.h1>

            <AnimatedText
              text="Front-end developer passionate about turning complex problems into simple, beautiful, and intuitive web experiences. I believe great UI is invisible — it just works."
              className="font-serif text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl"
              delay={0.6}
            />
          </div>
        </section>

        {/* Image with parallax */}
        <section ref={imageRef} className="relative overflow-hidden h-[60vh] md:h-[70vh] mx-8 rounded-lg">
          <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
            <img
              src={aboutImage}
              alt="Developer at work"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </section>

        {/* Stats */}
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="font-serif text-5xl md:text-6xl text-primary mb-2"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story section with word-by-word animation */}
        <section className="py-24 px-8 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-primary tracking-widest uppercase mb-12"
            >
              My Story
            </motion.h3>

            <AnimatedText
              text="I started my journey as a curious teenager tinkering with HTML and CSS, fascinated by the power of turning lines of code into something people could see and interact with."
              className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-10"
            />

            <AnimatedText
              text="Over the years, I've evolved from building simple landing pages to architecting complex web applications used by thousands. I've worked with startups, agencies, and product teams — always pushing the boundaries of what's possible in the browser."
              className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
              delay={0.1}
            />

            <AnimatedText
              text="Today, I specialize in React and TypeScript, building performant and accessible interfaces with modern tools like Tailwind CSS, Framer Motion, and Next.js. I care deeply about design systems, component architecture, and the craft of front-end engineering."
              className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed"
              delay={0.2}
            />
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-8 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-primary tracking-widest uppercase mb-12"
            >
              What I Value
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="border border-foreground/10 rounded-lg p-8 hover:border-primary/30 transition-colors duration-300"
                >
                  <h4 className="font-serif text-xl text-foreground mb-3">{value.title}</h4>
                  <p className="font-serif text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8 border-t border-foreground/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl text-foreground mb-6"
            >
              Let's build something{" "}
              <span className="text-primary italic">together</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-lg text-muted-foreground mb-10"
            >
              I'm always open to new opportunities and interesting projects.
            </motion.p>
            <motion.a
              href="/connect"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-medium text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
