import Link from "next/link";
export function HeroSection() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:max-w-3xl xl:shrink-0">
            <main className="">
              <div className="w-full sm:text-center lg:text-left">
                <h1 className="text-2xl tracking-tight sm:text-5xl md:text-[70px]">
                  <span className="block font-light  xl:inline">
                    Smart infrastructure of tomorrow.
                  </span>
                  <span className="block font-bold text-black xl:inline">
                    Today.
                  </span>
                </h1>
                <div className="ont-normal mt-3 text-[25px] font-light leading-[34px] lg:mx-0">
                  We deliver end-to-end software and hardware solutions for
                  companies that demand the very best. Our software with fully
                  customizable workflow and API ecosystem seamlessly connects to
                  any IoT device and enterprise software, elevating your
                  customer interactions into the digital era.
                </div>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="">
                    <Link href="#">
                      <div className="flex items-center justify-center gap-2">
                        <div className=" flex items-center justify-center gap-5 px-8 py-3 text-base font-light text-[#1D2939] md:px-0 md:py-4 md:text-lg">
                          <span>Get in touch</span>
                          <svg
                            width="32"
                            height="24"
                            viewBox="0 0 32 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807611 19.9792 0.807611 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM0 13.5L30 13.5V10.5L0 10.5L0 13.5Z"
                              fill="#1D2939"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className="flex items-center justify-center ">
            <img src="/images/bus-stop-image.svg" className="-mt-24" />
          </div>
        </div>
      </div>
    </section>
  );
}
