"use client";
import { VendexHeaderWithUserDropdown } from "../vendex-components/menu";
import FooterSection from "../vendex-components/footer";
import ContactUsHeroSection from "../vendex-components/contact-us/contact-us-hero";
export default function ContactUs() {
  return (
    <div className="">
      <div className="bg-[#1D2939] pt-10">
        <VendexHeaderWithUserDropdown />
      </div>
      <ContactUsHeroSection />
      <div className="h-64 md:h-[600px] bg-[#1D2939] flex items-center justify-center text-black">
        <div>
          <video className="w-full sm:h-[500px] h-auto"  controls>
            <source src="/video/videoTest.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
