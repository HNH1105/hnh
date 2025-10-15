"use client";
import FooterSection from "./vendex-components/footer";
import { HeroSection } from "./vendex-components/home/home-hero";
import ProductSection from "./vendex-components/home/home-services";
import StrategicPartnerSection from "./vendex-components/home/home-strategic-partner";
import TechSection from "./vendex-components/home/home-tech-design";
import { VendexHeaderWithUserDropdown } from "./vendex-components/menu";
import { ArticlesSection } from "./vendex-components/mobility/mobility-articles";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="pt-10">
      <VendexHeaderWithUserDropdown />
      </div>
      <HeroSection />
      <div>
      <TechSection />
      </div>
      <div>
        <ProductSection />
      </div>
      <StrategicPartnerSection />
      {/* <KnowledgeHubSection /> */}
      <ArticlesSection />
      <FooterSection />
    </div>
  );
}
