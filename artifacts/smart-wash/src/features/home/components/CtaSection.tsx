import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, PhoneCall, Zap, Truck } from "lucide-react";

export function CtaSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const inView1 = useInView(ref1, { once: true, margin: "-80px" });
  const inView2 = useInView(ref2, { once: true, margin: "-80px" });

  return (
    <>
      {/* ── BOOK SERVICES ── */}
      <section className="relative py-28 overflow-hidden">
        {/* Background image + overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://bosmartwash.in/assets/images/machinneeeeeeeeeeeeeee.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(13,20,60,0.96) 0%, rgba(13,110,253,0.88) 100%)" }} />
        </div>

        {/* Decorative circle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 translate-x-1/3 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 translate-x-1/4 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref1}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-blue-300 font-bold tracking-[0.2em] uppercase text-xs mb-6">Ready to get started?</p>
              <h2
                className="font-heading font-black text-white leading-none mb-6"
                style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
              >
                Book Our<br />Services
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
                Easily schedule your laundry pickup at your convenience. Fast, reliable, and professional care — guaranteed.
              </p>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold rounded-full px-8 py-4 text-base hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30 cursor-pointer"
              >
                Schedule Pickup Now
                <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm">→</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Clean Result",
                  desc: "Advanced cleaning techniques for spotless, fresh clothes every time.",
                },
                {
                  icon: <Truck className="w-6 h-6" />,
                  title: "Fast Delivery",
                  desc: "Quick, reliable delivery so your laundry is ready when you need it.",
                },
                {
                  icon: <CheckCircle className="w-6 h-6" />,
                  title: "Free Pickup",
                  desc: "We come to your door at no extra charge — zero effort on your part.",
                },
                {
                  icon: <PhoneCall className="w-6 h-6" />,
                  title: "24/7 Support",
                  desc: "Our team is always available to help with your laundry needs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUALITY + CONTACT ── */}
      <section className="relative py-28 overflow-hidden" ref={ref2}>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://bosmartwash.in/assets/images/cycle.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/92" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">Get In Touch</p>
              <h2
                className="font-heading font-black text-slate-900 leading-none mb-8"
                style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
              >
                Quality Service with<br />
                <span className="text-primary">Free Collection & Delivery</span>
              </h2>

              {/* Phone number — big and bold */}
              <motion.a
                href="tel:+917997034445"
                className="inline-flex items-center gap-4 mb-10 group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:bg-primary/90 transition-colors">
                  <PhoneCall className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-0.5">Call us anytime</p>
                  <p className="font-heading font-black text-slate-900 leading-none"
                    style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}>
                    +91 7997034445
                  </p>
                </div>
              </motion.a>

              <div>
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-3 bg-primary text-white font-bold rounded-full px-10 py-4 text-base hover:bg-primary/90 transition-colors shadow-xl shadow-primary/25 cursor-pointer"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
