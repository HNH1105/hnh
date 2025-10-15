"use client";
import { ArticlesSection } from "../vendex-components/mobility/mobility-articles";
import { MobilityFeatureListSection } from "../vendex-components/mobility/mobility-features";
import SmartMobilitySection from "../vendex-components/mobility/mobility-hero";
import { MobilityProductsSection } from "../vendex-components/mobility/mobility-products";
import ServicesSection from "../vendex-components/mobility/mobility-services";
import { VendexHeaderWithUserDropdown } from "../vendex-components/menu";
import FooterSection from "../vendex-components/footer";
import {
  Const_Smart_Space_Hero_Headline,
  Const_Smart_Space_Hero_Headline_Bold,
  Const_Smart_Space_Hero_Desc,
  Const_Get_In_Touch,
  Const_Smart_Space_Features_DB,
  Const_Smart_Space_Products_DB,
  Const_Mobility_Offer_Text,
  Const_Mobility_Offer_Desc_Text
} from "../const";

export default function SmartMobility() {
  return (
    <div className="">
      <div className="bg-[#1D2939] pt-10">
        <VendexHeaderWithUserDropdown />
      </div>
      <SmartMobilitySection
        title={Const_Smart_Space_Hero_Headline}
        subtitle={Const_Smart_Space_Hero_Headline_Bold}
        description={Const_Smart_Space_Hero_Desc}
        linkText={Const_Get_In_Touch}
        linkHref="/smart-spaces"
        images={["/images/smart-space-bg-hero.svg", "/images/smart-space-bg-hero.svg"]}
      />
      <MobilityFeatureListSection features={Const_Smart_Space_Features_DB} />
      <div className="mx-auto p-4">
        <MobilityProductsSection products={Const_Smart_Space_Products_DB} />
      </div>
      <div className="flex items-center justify-start bg-white dark:bg-gray-900 mb-14">
        <div className="h-20 w-36 rounded-r-lg bg-gray-800"></div>
        <div className="ml-4">
          <h3 className="text-[25px] font-normal text-[#1D2939] dark:text-white">
            {Const_Mobility_Offer_Text}
          </h3>
          <p className="text-[15px] text-[#1D2939] dark:text-gray-400 pr-2">
            {Const_Mobility_Offer_Desc_Text}
          </p>
        </div>
      </div>
      <div>
        <ServicesSection />
      </div>
      <ArticlesSection />
      <FooterSection />
    </div>
  );
}
