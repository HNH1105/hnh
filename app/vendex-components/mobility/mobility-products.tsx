import Image from "next/image";
import { useState } from 'react';
import { Const_Mobility_Product_Text } from "~/app/const";

type Product = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type MobilityProductsSectionProps = {
  products: Product[];
};

export const MobilityProductsSection = ({ products }: MobilityProductsSectionProps) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-left sm:py-16 lg:px-6">
          <p className="text-[#000000] text-[15px] font-light dark:text-gray-400 sm:text-xl">
           {Const_Mobility_Product_Text}
          </p>
          <div className="w-full flex justify-center items-center">
            <div>
            <img src="/icon/arrowLeftIcon2.svg" className="cursor-pointer" onClick={handlePrevious} />
            </div>
            <div className="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-12 lg:grid-cols-3">
            {products.slice(currentIndex, currentIndex + itemsPerPage).map((product, index) => (
                <div key={index} className="flex flex-col items-center justify-cente">
                  <div className="h-[280px] w-[125px] flex items-center justify-center">
                    <Image
                      src={product.src}
                      alt={product.alt}
                      width={125}
                      height={280}
                      className="mx-auto mb-4 text-primary-600 dark:text-primary-500"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="mb-2 text-[30px] mt-5 font-normal dark:text-white">
                      {product.title}
                    </h3>
                    <p className="mb-4 text-[#1D2939] text-[20px] font-light dark:text-gray-400">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
            <img src="/icon/ArrowRightIcon2.svg" className="cursor-pointer" onClick={handleNext} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
