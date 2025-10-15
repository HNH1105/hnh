import { Carousel } from "flowbite-react";
import {
  Const_Imprint_Case1,
  Const_Imprint_Case10,
  Const_Imprint_Case11,
  Const_Imprint_Case2,
  Const_Imprint_Case3_Website,
  Const_Imprint_Case4_Email,
  Const_Imprint_Case5_Phone,
  Const_Imprint_Case6,
  Const_Imprint_Case7_Address,
  Const_Imprint_Case8,
  Const_Imprint_Case9,
  Const_Imprint_Hero_Headline_Bold,
} from "~/app/const";
const ImprintHeroSection = () => {
  return (
    <>
      <section className="bg-[#1D2939] py-16 text-white">
        <div className="max-w-screen-xl mx-auto flex flex-col items-start gap-8 px-8 pb-20 sm:flex-row">
          <div className="h-full w-full sm:w-2/5">
            <div className="mt-0 flex h-full items-center justify-start">
              <span className="pl-2 text-[50px] font-bold text-white lg:pl-4">
                {Const_Imprint_Hero_Headline_Bold}
              </span>
            </div>
          </div>
          <div className="w-full px-2 sm:px-20">
            <div className="flex w-full flex-col text-[20px] font-light text-white/70">
              <label>{Const_Imprint_Case1}</label>
              <label>{Const_Imprint_Case2}</label>
            </div>
            <div className="mt-7 flex w-full flex-col text-[20px] font-light text-white/70">
              <label>{Const_Imprint_Case3_Website}</label>
              <label>{Const_Imprint_Case4_Email} </label>
              <label>{Const_Imprint_Case5_Phone} </label>
            </div>
            <div className="mt-7 flex w-full flex-col text-[20px] font-light text-white/70">
              <label>{Const_Imprint_Case6} </label>
              <label>{Const_Imprint_Case7_Address} </label>
              <label>{Const_Imprint_Case8}</label>
              <label>{Const_Imprint_Case9}</label>
            </div>
            <div className="mt-7 flex w-full flex-col text-[20px] font-light text-white/70">
              <label>{Const_Imprint_Case10} </label>
              <label>{Const_Imprint_Case11}</label>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Carousel className="h-64 bg-[#1D2939] md:h-[500px]">
          <img src="/images/flix-station.png" className="rounded-lg" alt="" />
        </Carousel>
      </div>
    </>
  );
};

export default ImprintHeroSection;
