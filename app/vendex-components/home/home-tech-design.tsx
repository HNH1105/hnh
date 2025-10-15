import { Carousel } from "flowbite-react";
const TechSection = () => {
  return (
    <section className="bg-gray-800 antialiased ">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center   py-8 sm:py-16  lg:py-24">
        <div className="relative w-full bg-gray-800">
          <div className="flex bg-gray-800 py-10 text-white">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col items-start justify-center">
                <div className="mb-10  text-left text-[35px] lg:text-[70px] ">
                  <h1 className="font-light">TECH & DESIGN</h1>
                  <h1 className="font-extrabold">CONSULTING</h1>
                </div>
                <div className="mb-5  text-left text-[18px] font-light text-white/70 sm:text-[22px] lg:text-[25px] ">
                  We start any project by understanding your Tech-needs and
                  challenges. Sometimes we discover them together. We follow-up
                  with an implementation project map and then deliver
                  <b className="font-bold text-white">
                    &nbsp;end-to-end tailored solutions. &nbsp;
                  </b>
                  From frontend development to cutting-edge IoT-hardware. We got
                  you covered.
                </div>
                <div className="mt-5 flex  ">
                  <button className="flex items-center justify-center bg-transparent py-2 text-[14px] font-light text-white/70 transition duration-300 sm:text-[15px] lg:text-[16px]">
                    <span>Reach out for intro call</span>
                    <span className="ml-5 mt-[-2px] text-[20px] sm:text-[30px]">
                      {" "}
                      →
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <div className="flex h-[318px] w-[312px] items-center justify-center rounded-lg border bg-white lg:h-[458px] lg:w-[412px]">
                  <button className="rounded bg-[#E9FC73] px-6 py-3 text-[20px] font-light text-gray-800 transition duration-300 sm:text-[25px]">
                    CREATE VIDEO
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-gray-800 py-10 text-white">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col items-center justify-center px-5">
                <div className="flex h-[318px] w-[312px] items-center justify-center rounded-lg border bg-white lg:h-[458px] lg:w-[412px]">
                  <button className="rounded bg-[#E9FC73] px-6 py-3 text-[20px] font-light text-gray-800 transition duration-300 sm:text-[25px]">
                    CREATE VIDEO
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center ">
                <div className="mb-10 text-left text-[35px] lg:text-[70px]">
                  <h1 className="font-light">CUSTOM</h1>
                  <h1 className="font-extrabold">SOFTWARE</h1>
                </div>
                <div className="mb-5 pl-2 text-left text-[18px] font-light text-white/70 sm:text-[22px] lg:text-[25px]">
                  Tech is at our core. Our in-house ecosystem, VENDEX-OS,
                  combines a cloud-native backend with various industry-relevant
                  APIs and a modular, fully customizable frontend. We are also
                  connected to open-source AI-models. Designed to seamlessly
                  integrate and elevate your operations and any customer
                  interaction.
                </div>
                <div className="mt-5 flex">
                  <button className="flex items-center justify-center bg-transparent px-4 py-2 text-[14px] font-light text-white/70 transition duration-300 sm:text-[15px] lg:text-[16px]">
                    <span>Explore more</span>
                    <span className="ml-5 mt-[-2px] text-[20px] sm:text-[30px]">
                      {" "}
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-gray-800 py-10 text-white">
            <div className="grid w-full grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col items-start justify-center ">
                <div className="mb-10 text-left text-[35px]  lg:text-[70px] ">
                  <h1 className="font-light">CUTTING EDGE</h1>
                  <h1 className="font-extrabold">HARDWARE</h1>
                </div>
                <div className="mb-5 text-left text-[18px] font-light text-white/70 sm:text-[22px] lg:text-[25px]">
                  We partner with top global manufacturers to deliver premium
                  self-service terminals and IoT-devices, supported by
                  distribution centers and a comprehensive maintenance network
                  across the EU and beyond.
                </div>
                <div className="mt-5 flex  ">
                  <button className="flex items-center justify-center bg-transparent  py-2 text-[14px] font-light text-white/70 transition duration-300 sm:text-[15px] lg:text-[16px]">
                    <span>Ask for product overview</span>
                    <span className="ml-5 mt-[-2px] text-[20px] sm:text-[30px]">
                      {" "}
                      →
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="">
                  <img src="/images/phone-pad.svg" alt="Product Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="-mb-16 mt-24  text-[14px] font-light text-white/70 sm:text-[15px] ">
            <span>Trusted by the best:</span>
          </div>
        </div>
      </div>
      <div
        className="flex h-[350px] bg-gray-800 px-[10%] text-white sm:h-[500px] sm:px-[20%]"
        style={{
          backgroundImage: "url(/images/bus-stop-bg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Carousel className="mt-14 h-64 md:h-96">
          <div className="h-[200px] w-[400px] bg-white bg-opacity-70"> </div>
        </Carousel>
      </div>
      <div
        className="flex h-[100px] bg-gray-800 px-[10%] text-white sm:px-[20%]"
      ></div>
    </section>
  );
};

export default TechSection;
11;
