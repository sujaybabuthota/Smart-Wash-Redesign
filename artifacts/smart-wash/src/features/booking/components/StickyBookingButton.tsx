import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export function StickyBookingButton({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClick}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 text-white text-sm font-bold rounded-full px-5 py-3.5 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-transform duration-200"
          style={{ background: "linear-gradient(135deg, #0D6EFD 0%, #2A52BE 100%)" }}
          aria-label="Schedule pickup"
        >
          <CalendarCheck className="w-4 h-4" />
          Schedule Pickup
        </motion.button>
      )}
    </AnimatePresence>
  );
}
