import AboutSection from "@/components/ui/AboutSection";
import HeroSection from "@/components/ui/HeroSection";
import ServiceSection from "@/components/ui/ServiceSection";
import Store from "@/components/ui/Store";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Store />
    </div>
  );
}
