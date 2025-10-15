"use client";
import {
  Const_Get_In_Touch,
  Const_Mobility_Features_DB,
  Const_Mobility_Hero_Desc,
  Const_Mobility_Hero_Headline,
  Const_Mobility_Hero_Headline_Bold,
  Const_Mobility_Offer_Desc_Text,
  Const_Mobility_Offer_Text,
  Const_Mobility_Products_DB,
} from "../const";
import FooterSection from "../vendex-components/footer";
import { VendexHeaderWithUserDropdown } from "../vendex-components/menu";
import { ArticlesSection } from "../vendex-components/mobility/mobility-articles";
import { MobilityFeatureListSection } from "../vendex-components/mobility/mobility-features";
import SmartMobilitySection from "../vendex-components/mobility/mobility-hero";
import { MobilityProductsSection } from "../vendex-components/mobility/mobility-products";
import ServicesSection from "../vendex-components/mobility/mobility-services";
export default function Mobility() {
  return (
    <div className="">
      <div className="bg-[#1D2939] pt-10">
        <VendexHeaderWithUserDropdown />
      </div>
      <SmartMobilitySection
        title={Const_Mobility_Hero_Headline}
        subtitle={Const_Mobility_Hero_Headline_Bold}
        description={Const_Mobility_Hero_Desc}
        linkText={Const_Get_In_Touch}
        linkHref="/smart-mobility"
        images={["/images/flix-station.png", "/images/flix-station.png"]}
      />
      <MobilityFeatureListSection features={Const_Mobility_Features_DB} />
      <div className="mx-auto p-4">
        <MobilityProductsSection products={Const_Mobility_Products_DB} />
      </div>
      <div className="mb-14 flex items-center justify-start bg-white dark:bg-gray-900">
        <div className="h-20 w-36 rounded-r-lg bg-gray-800"></div>
        <div className="ml-4">
          <h3 className="text-[25px] font-normal text-[#1D2939] dark:text-white">
            {Const_Mobility_Offer_Text}
          </h3>
          <p className="pr-2 text-sm text-[#1D2939] dark:text-gray-400">
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
