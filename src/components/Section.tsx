import { motion } from "framer-motion";
import { ReactNode } from "react";

const Section = ({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: ReactNode }) => (
  <section id={id} className="relative py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        {eyebrow && (
          <div className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
            // {eyebrow}
          </div>
        )}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          <span className="text-gradient">{title}</span>
        </h2>
      </motion.div>
      {children}
    </div>
  </section>
);

export default Section;
