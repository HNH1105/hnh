import { Carousel } from "flowbite-react";
import Link from "next/link";
type SmartMobilitySectionProps = {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  linkHref: string;
  images: string[];
};
const SmartMobilitySection: React.FC<SmartMobilitySectionProps> = ({
  title,
  subtitle,
  description,
  linkText,
  images,
}) => {
  return (
    <section className="bg-gray-900 py-16 text-white ">
      <div className="container mx-auto  grid max-w-screen-xl  grid-cols-1 items-center gap-8  lg:grid-cols-2">
        <div>
          <div className="flex flex-col">
            <span className="text-[60px] font-light italic text-white sm:text-[100px]">
              {title}
            </span>
            <span className="mt-[-20px] text-[60px] font-bold sm:text-[100px]">
              {subtitle}
            </span>
          </div>
        </div>
        <div>
          <p className="mb-6 mt-0 text-[25px] font-light text-white/70 sm:mt-10">
            {description}
          </p>
          <Link
            href="/smart-mobility"
            className="mr-auto mt-8 flex gap-5 text-[15px] font-light text-white/70"
          >
            <span> {linkText} </span>
            <img
              src="/icon/arrowRightWhiteIcon.svg"
              className="text-white/70"
            />
          </Link>
        </div>
      </div>
      <Carousel className="mt-0 h-64  md:h-[500px] lg:mt-20">
        {images.map((image, index) => (
          <img key={index} src={image} className="rounded-lg" alt="" />
        ))}
      </Carousel>
    </section>
  );
};

export default SmartMobilitySection;
