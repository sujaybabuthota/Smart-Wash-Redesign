import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroShowcase } from "@/features/home/components/HeroShowcase";
import { ServicesCarousel } from "@/features/home/components/ServicesCarousel";
import { AboutSection } from "@/features/home/components/AboutSection";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { CtaSection } from "@/features/home/components/CtaSection";
import { BookingModal } from "@/features/booking/components/BookingModal";
import { StickyBookingButton } from "@/features/booking/components/StickyBookingButton";
import { BookingProvider, useBooking } from "@/features/booking/context/BookingContext";

function HomeContent() {
  const { open, openModal, closeModal } = useBooking();
  return (
    <main className="min-h-screen bg-white">
      <Navbar onOpenBooking={openModal} />
      <HeroShowcase onOpenBooking={openModal} />
      <ServicesCarousel />
      <AboutSection />
      <HowItWorks />
      <CtaSection onOpenBooking={openModal} />
      <Footer />
      <StickyBookingButton onClick={openModal} />
      <BookingModal open={open} onClose={closeModal} />
    </main>
  );
}

export default function Home() {
  return (
    <BookingProvider>
      <HomeContent />
    </BookingProvider>
  );
}
