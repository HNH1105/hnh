"use client";
import ServicesSection from "../vendex-components/mobility/mobility-services";
import { VendexHeaderWithUserDropdown } from "../vendex-components/menu";
import FooterSection from "../vendex-components/footer";
import SoftwareApisHeroSection from "../vendex-components/software-apis/software-hero";
import SoftwareApisERBSection from "../vendex-components/software-apis/software-ERB";
import SoftwareApisGateWaySection from "../vendex-components/software-apis/software-API-Gateway";
import { SoftWareFeatureListSection } from "../vendex-components/software-apis/software-features";
import { HardWareFeatureListSection } from "../vendex-components/software-apis/software-hardware-feature";
import SoftwareKnowledgeHubSection from "../vendex-components/software-apis/software-knowledge-hub";
import { Const_SoftWare_Infrastructure_Headline,
  Const_SoftWare_Infrastructure_Headline_Bold,
  Const_SoftWare_Infrastructure_Desc,
  Const_SoftWare_Infrastructure_Link,
  Const_SoftWare_Open_Source_Headline,
  Const_SoftWare_Open_Source_Bold,
  Const_SoftWare_Open_Source_Desc,
  Const_SoftWare_Open_Source_Link
 } from "../const";
import { ArticlesSection } from "../vendex-components/mobility/mobility-articles";
export default function SoftWareApis() {


  return (
    <div className="">
      <div className="bg-[#1D2939] pt-10">
        <VendexHeaderWithUserDropdown />
      </div>
      <SoftwareApisHeroSection />
      <div className="h-64 md:h-[600px] flex items-center justify-center text-black">
      <div>
          <video className="w-full mt-5 sm:h-[500px] h-auto"  controls>
            <source src="/video/videoTest.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
        <SoftwareApisERBSection />
        <SoftwareApisGateWaySection
          header={Const_SoftWare_Infrastructure_Headline}
          headerBold={Const_SoftWare_Infrastructure_Headline_Bold}
          description={Const_SoftWare_Infrastructure_Desc}
          linkText={Const_SoftWare_Infrastructure_Link}
        />
        <SoftWareFeatureListSection />
        <SoftwareApisGateWaySection
          header={Const_SoftWare_Open_Source_Headline}
          headerBold={Const_SoftWare_Open_Source_Bold}
          description={Const_SoftWare_Open_Source_Desc}
          linkText={Const_SoftWare_Open_Source_Link}
        />
        <HardWareFeatureListSection />
        <ServicesSection />
      {/* <SoftwareKnowledgeHubSection /> */}
      <ArticlesSection />
      <FooterSection />
    </div>
  );
}
