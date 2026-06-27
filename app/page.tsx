import SubscriptionSection from "@/components/shared/SubscriptionSection";
import AboutSection from "@/components/ui/AboutSection";
import FaqSection from "@/components/ui/FaqSection";
import HeroSection from "@/components/ui/HeroSection";
import PetAdoption from "@/components/ui/PetAdoption";
import ServiceSection from "@/components/ui/ServiceSection";
import Store from "@/components/ui/Store";
import Testimonial from "@/components/ui/testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />

      <Store />
      <PetAdoption />
      <SubscriptionSection />
      <Testimonial />
      <FaqSection />
    </div>
  );
}
