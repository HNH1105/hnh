"use client";
import { VendexHeaderWithUserDropdown } from "../vendex-components/menu";
import FooterSection from "../vendex-components/footer";
import ImprintHeroSection from "../vendex-components/imprint/imprint-hero";

export default function Imprint() {
  return (
    <div className="">
      <div className="bg-[#1D2939] pt-10">
        <VendexHeaderWithUserDropdown/>
      </div>
        <ImprintHeroSection/>
        <FooterSection />
    </div>
  );
}
