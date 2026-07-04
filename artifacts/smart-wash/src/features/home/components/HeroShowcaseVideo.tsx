import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const customEase = [0.76, 0, 0.23, 1] as const;
const TRANSITION = { duration: 1.2, ease: customEase as unknown as "easeInOut" };

const slides = [
  {
    id: "premium",
    bgColor: "#0D6EFD",
    themeText: "PREMIUM",
    useVideo: true,
  },
  {
    id: "steam",
    bgColor: "#2A52BE",
    themeText: "STEAM",
    heroImage: "/images/steam-hero.png",
  },
  {
    id: "dryclean",
    bgColor: "#1a3fa8",
    themeText: "DRY CLEAN",
    heroImage: "/images/dryclean-hero.png",
  },
  {
    id: "washnfold",
    bgColor: "#4A90D9",
    themeText: "WASH & FOLD",
    heroImage: "/images/washnfold-hero.png",
  },
];

/**
 * Foreground-stripped variant of HeroShowcase, built for screen-recording
 * branding footage. Keeps only: background gradients, large background
 * typography, center product images/video, and carousel transitions.
 * No navbar, no text panels, no buttons, no dots, no tagline, no thumbnail.
 */
export function HeroShowcaseVideo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden select-none"
      style={{ height: "100svh" }}
    >
      {/* Background Color */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id + "-bg"}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundColor: currentSlide.bgColor }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        />
      </AnimatePresence>

      {/* Grain overlay */}
      <div className="bg-noise" />

      {/* ─── LARGE BACKGROUND TEXT TRACK ─── */}
      <div
        className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="flex flex-col w-full"
          style={{ top: 0, left: 0, right: 0, position: "absolute" }}
          animate={{ y: `${-currentIndex * 100}vh` }}
          transition={TRANSITION}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ height: "100svh", width: "100%" }}
            >
              <h1
                className="font-heading font-black text-white text-gradient-mask"
                style={{
                  fontSize: "clamp(80px, 22vw, 340px)",
                  lineHeight: 0.85,
                  letterSpacing: "-0.02em",
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {slide.themeText}
              </h1>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── CENTER HERO IMAGE / VIDEO ─── */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id + "-hero"}
            initial={{ opacity: 0, x: "6%", scale: 1.05 }}
            animate={{ opacity: 1, x: "0%", scale: 1 }}
            exit={{ opacity: 0, x: "-6%", scale: 0.95 }}
            transition={{ ...TRANSITION, delay: 0.15 }}
            className="flex items-center justify-center"
            style={{ height: "70vh", width: "auto", maxWidth: "80vw" }}
          >
            {currentSlide.useVideo ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{ height: "100%", width: "auto", objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))" }}
                src="https://bosmartwash.in/assets/images/hero.mp4"
              />
            ) : (
              <img
                src={(currentSlide as { heroImage?: string }).heroImage}
                alt=""
                style={{ height: "100%", width: "auto", objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.4))" }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
