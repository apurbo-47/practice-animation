import SubscriptionSection from "@/components/shared/SubscriptionSection";
import AboutSection from "@/components/ui/AboutSection";
import HeroSection from "@/components/ui/HeroSection";
import PetAdoption from "@/components/ui/PetAdoption";
import ServiceSection from "@/components/ui/ServiceSection";
import Store from "@/components/ui/Store";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />

      <Store />
      <PetAdoption />
      <SubscriptionSection />
    </div>
  );
}
