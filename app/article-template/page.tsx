"use client";
import ServicesSection from "../vendex-components/mobility/mobility-services";
import { VendexHeaderWithUserDropdown } from "../vendex-components/menu";
import FooterSection from "../vendex-components/footer";
import ArticleTemplateHeroSection from "../vendex-components/article-template/article-template-hero";
import ArticleIntro from "../vendex-components/article-template/article-intro";
import { Carousel } from "flowbite-react";
import SoftwareKnowledgeHubSection from "../vendex-components/software-apis/software-knowledge-hub";

export default function ArticleTemplate() {
  return (
    <div className="">
      <div className="bg-[#1D2939] pt-10">
        <VendexHeaderWithUserDropdown />
      </div>
      <ArticleTemplateHeroSection />
      <ArticleIntro />
      <Carousel className="h-64 md:h-[500px] lg:mt-20 mt-0">
        <img src="images/bus-stop-bg.svg" className="rounded-lg" alt="" />
      </Carousel>
      <ServicesSection />
      <SoftwareKnowledgeHubSection />
      <FooterSection />
    </div>
  );
}
