import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Book Your Pickup",
    desc: "Schedule through our app or website. Choose a time that suits you — we come to your door.",
    icon: "https://bosmartwash.in/assets/images/1.png",
    color: "#0D6EFD",
  },
  {
    num: "02",
    title: "We Collect",
    desc: "Our team arrives at your doorstep. Clothes are packed carefully and transported to our facility.",
    icon: "https://bosmartwash.in/assets/images/2.png",
    color: "#2A52BE",
  },
  {
    num: "03",
    title: "Expert Care",
    desc: "State-of-the-art machines and eco-friendly detergents clean every garment to perfection.",
    icon: "https://bosmartwash.in/assets/images/3.png",
    color: "#1a3fa8",
  },
  {
    num: "04",
    title: "Fresh Delivery",
    desc: "Clean, neatly packed, and delivered right on time — guaranteed fresh to your door.",
    icon: "https://bosmartwash.in/assets/images/4.png",
    color: "#4A90D9",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-28 overflow-hidden bg-slate-950 relative">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-5">Simple Process</p>
          <h2
            className="font-heading font-black text-white leading-none mb-6"
            style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
          >
            This is how we work
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Four effortless steps — from pickup to delivery, we handle everything so you don't have to.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center relative z-10 group"
            >
              {/* Icon circle */}
              <motion.div
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative mb-8"
              >
                {/* Outer ring */}
                <div className="w-[104px] h-[104px] rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: `0 0 0 8px rgba(13,110,253,0.06)`,
                  }}
                >
                  {/* Inner circle */}
                  <div
                    className="w-[80px] h-[80px] rounded-full flex items-center justify-center"
                    style={{ background: `${step.color}20`, border: `1px solid ${step.color}40` }}
                  >
                    <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
                  </div>
                </div>
                {/* Step number badge */}
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg"
                  style={{ background: step.color }}
                >
                  {index + 1}
                </div>
              </motion.div>

              {/* Large background number */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 font-heading font-black text-white/[0.03] leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(64px, 8vw, 96px)" }}
                aria-hidden="true"
              >
                {step.num}
              </div>

              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-20"
        >
          <a
            href="https://bosmartwash.in/see.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-semibold border border-white/10 rounded-full px-8 py-4 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Start Your First Order
            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
