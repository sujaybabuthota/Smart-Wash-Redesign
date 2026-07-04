import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "premium",
    title: "Premium Laundry",
    desc: "Top-tier care with eco-friendly products. Your garments returned fresh, spotless, and ready to wear.",
    image: "https://bosmartwash.in/assets/images/premiumlaundry.jpg",
    accent: "#0D6EFD",
    num: "01",
  },
  {
    id: "steam",
    title: "Steam Press",
    desc: "Flawless wrinkle-free finish using advanced steam technology. Crisp, polished, and precise.",
    image: "https://bosmartwash.in/assets/images/steamiron.jpg",
    accent: "#2A52BE",
    num: "02",
  },
  {
    id: "dryclean",
    title: "Dry Cleaning",
    desc: "Gentle methods that preserve the integrity of your most delicate garments.",
    image: "https://bosmartwash.in/assets/images/dryclean.jpg",
    accent: "#1a3fa8",
    num: "03",
  },
  {
    id: "washnfold",
    title: "Wash & Fold",
    desc: "Carefully cleaned and neatly folded for ultimate convenience and organization.",
    image: "https://bosmartwash.in/assets/images/washandfold.jpg",
    accent: "#0D6EFD",
    num: "04",
  },
  {
    id: "shoelaundry",
    title: "Shoe Laundry",
    desc: "Expert cleaning for all footwear types — sneakers to formal shoes.",
    image: "https://bosmartwash.in/assets/images/shoecleaning.jpg",
    accent: "#2A52BE",
    num: "05",
  },
  {
    id: "sareerolling",
    title: "Saree Rolling",
    desc: "Premium rolling services that preserve fabric, embroidery, and design.",
    image: "https://bosmartwash.in/assets/images/sareerolling.jpg",
    accent: "#1a3fa8",
    num: "06",
  },
];

export function ServicesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Our Expertise</p>
              <h2 className="font-heading font-black text-slate-900 leading-none"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}>
                Comprehensive<br />Laundry Services
              </h2>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed text-base md:text-right">
              Professional care for every fabric — from daily wear to delicate evening gowns, handled with precision.
            </p>
          </div>
          {/* Thin rule */}
          <div className="mt-12 h-px bg-slate-100" />
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href="https://bosmartwash.in/see.html"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-white group overflow-hidden block"
              style={{ minHeight: 340 }}
              whileHover="hover"
            >
              {/* Image */}
              <div className="absolute inset-0 z-0">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  variants={{ hover: { scale: 1.08 } }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                {/* Base overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
                {/* Hover color sweep */}
                <motion.div
                  className="absolute inset-0"
                  style={{ background: service.accent }}
                  variants={{ hover: { opacity: 0.55 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8" style={{ minHeight: 340 }}>
                {/* Big number watermark */}
                <motion.span
                  className="absolute top-6 right-6 font-heading font-black text-white/10 leading-none select-none"
                  style={{ fontSize: "clamp(56px, 6vw, 88px)" }}
                  variants={{ hover: { opacity: 0.2 } }}
                >
                  {service.num}
                </motion.span>

                <div>
                  <motion.div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5"
                    variants={{ hover: { backgroundColor: "rgba(255,255,255,0.25)", scale: 1.1 } }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </motion.div>
                  <h3 className="text-white font-bold text-xl mb-2 leading-tight">{service.title}</h3>
                  <motion.p
                    className="text-white/0 text-sm leading-relaxed"
                    variants={{ hover: { color: "rgba(255,255,255,0.8)" } }}
                    transition={{ duration: 0.35 }}
                  >
                    {service.desc}
                  </motion.p>
                  <motion.div
                    className="mt-5 flex items-center gap-2 text-sm font-semibold text-white"
                    variants={{ hover: { x: 4 } }}
                    transition={{ duration: 0.3 }}
                  >
                    Book Now <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
