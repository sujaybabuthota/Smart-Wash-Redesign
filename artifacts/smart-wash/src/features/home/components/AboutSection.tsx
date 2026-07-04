import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Clock, CreditCard, Smile, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Time & Budget Savior",
    desc: "Affordable solutions that save you hours. Let us handle laundry while you focus on life.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Tap, Pay, Done!",
    desc: "Seamless online payment in just a few clicks — quick, secure, and hassle-free.",
  },
  {
    icon: <Smile className="w-5 h-5" />,
    title: "Happiness, Delivered",
    desc: "Spotless results, timely delivery, and exceptional service every single time.",
  },
];

const stats = [
  { value: "10k+", label: "Happy Customers" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "Free", label: "Collection & Delivery" },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 overflow-hidden" style={{ background: "linear-gradient(160deg, #f8faff 0%, #ffffff 50%, #f0f5ff 100%)" }}>
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center" ref={ref}>

          {/* LEFT — Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://bosmartwash.in/assets/images/toy.jpg"
                alt="Passionate about laundry"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,110,253,0.85) 0%, transparent 55%)" }} />

              {/* Rating pill overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur rounded-full px-4 py-2 shadow-lg">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-800">5.0 Rating</span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Trusted by</p>
                <p className="text-white font-black text-4xl font-heading leading-none">10,000+</p>
                <p className="text-white/80 text-sm font-medium mt-1">Happy customers served</p>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="absolute -right-6 bottom-16 bg-white rounded-2xl shadow-2xl p-5 hidden md:block"
              style={{ width: 210, border: "1px solid rgba(13,110,253,0.1)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-lg leading-none">100%</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Satisfaction Guarantee</p>
                </div>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Small accent blob */}
            <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-5">About Us</p>
            <h2 className="font-heading font-black text-slate-900 leading-[0.95] mb-8"
              style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}>
              We are passionate<br />about <span className="text-primary">Laundry</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Smart Wash is a student-run laundry service offering efficient, affordable, and eco-friendly solutions. We deliver spotless, fresh clothes while saving you time.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {["100% Customer Satisfaction", "Free Collection & Delivery", "Affordable Prices"].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Feature cards */}
            <div className="grid gap-4 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-sm">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="rounded-full px-8 h-13 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
              asChild
            >
              <a href="https://bosmartwash.in/about.html" target="_blank" rel="noopener noreferrer">
                Discover More
              </a>
            </Button>
          </motion.div>

        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-24 grid grid-cols-3 divide-x divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <span className="font-heading font-black text-primary mb-1" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
                {stat.value}
              </span>
              <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
