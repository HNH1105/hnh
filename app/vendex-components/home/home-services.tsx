import Link from "next/link";

const ProductSection = () => {
  const products = [
    {
      imgSrc: "/images/smart-mobility.svg",
      alt: "Smart Mobility",
      titlePart1: "Smart",
      titlePart2: "Mobility",
      linkHref: "/mobility",
    },
    {
      imgSrc: "/images/smart-spaces.svg",
      alt: "Smart Spaces",
      titlePart1: "Smart",
      titlePart2: "Spaces",
      linkHref: "/smart-spaces",
    },
    {
      imgSrc: "/images/digital-signage.svg",
      alt: "Digital Signage",
      titlePart1: "Smart",
      titlePart2: "Signage",
      linkHref: "/digital-signage",
    },
  ];

  const categories = [
    {
      titlePart1: "Self-Service",
      titlePart2: "Terminals",
      description:
        "Modern and elegant touchscreen devices as terminals, kiosks for check-in/processes.",
    },
    {
      titlePart1: "Service",
      titlePart2: "Points",
      description:
        "IoT Service point with wide touchscreen to smart lockers with EV-charging capabilities.",
    },
    {
      titlePart1: "IoT",
      titlePart2: "Devices",
      description:
        "Our digital signage & IoT tracker category. For automated operations.",
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl bg-white px-4 py-8  text-[15px]  text-[#000000] sm:py-16 lg:px-4 lg:py-24">
      <div className=" antialiased ">
        <div className="mx-auto   flex max-w-screen-xl items-center justify-center  ">
          <span className="relative w-full">Industry solutions:</span>
        </div>
        <div className=" bg-white  py-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={index}
                className="mt-2 flex flex-col items-center rounded-lg bg-[#F3F3F3] p-8 shadow"
              >
                <div className="relative flex h-[230px] w-auto items-center justify-center xl:h-[330px] xl:w-[326px]">
                  <img
                    src={product.imgSrc}
                    className="h-[180px] w-[200px] rounded-lg xl:h-[300px] xl:w-full"
                    alt={product.alt}
                  />
                </div>
                <span className="mt-4 text-[30px] font-light text-[#000000]">
                  {product.titlePart1}
                </span>
                <h3 className="text-[30px] font-bold">{product.titlePart2}</h3>
                <Link
                  href={product.linkHref}
                  className="mt-4 flex gap-5 text-[15px] font-light text-[#1D2939]"
                >
                  <span>Explore more</span>
                  <img src="/icon/arrowRightIcon.svg" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" font-light text-[#000000]">Product categories:</div>
        <div className=" bg-white  py-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-[#F3F3F3] p-4 shadow"
              >
                <h3 className="mt-4 text-3xl font-light">
                  {category.titlePart1}
                </h3>
                <h3 className="mt-4 text-3xl font-bold">
                  {category.titlePart2}
                </h3>
                <p className="mt-4 text-center text-[15px] font-light text-[#1D2939]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
