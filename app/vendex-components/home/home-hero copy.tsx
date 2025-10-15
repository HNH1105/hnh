import { Button, Carousel } from "flowbite-react";
import Link from "next/link";
import { Const_Get_In_Touch, Const_Home_Hero_Desc, Const_Home_Hero_Headline, Const_Home_Hero_Headline_Bold } from "~/app/const";
export function HeroSection() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-center px-4 py-8 sm:py-16 lg:px-4 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="md:max-w-3xl xl:shrink-0">
            <main className="">
              <div className="sm:text-center w-full lg:text-left">
                <h1 className="tracking-tight sm:text-[70px] text-[40px] md:leading-[95.33px]">
                  <span className="block xl:inline font-light">{Const_Home_Hero_Headline}</span>
                  <span className="block text-black font-bold xl:inline">
                    {Const_Home_Hero_Headline_Bold}
                  </span>
                </h1>
                <div className="leading-[34.05px] mt-3 w-full text-base font-light text-[#1D2939] sm:mt-5 sm:text-[25px]  sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                  {Const_Home_Hero_Desc}
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    <Link href="#">
                      <div className="flex gap-2 justify-center items-center">
                        <div className=" flex items-center text-[#1D2939] justify-center px-8 gap-5 py-3 text-base font-light md:py-4 md:text-lg md:px-0">
                          <span>{Const_Get_In_Touch}</span>
                          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807611 19.9792 0.807611 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM0 13.5L30 13.5V10.5L0 10.5L0 13.5Z" fill="#1D2939" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className="flex items-center justify-center">
            <img src="/images/bus-stop-image.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
