import Link from "next/link";
import { Button, Carousel } from "flowbite-react";
import { Const_SoftWare_Article_Headline,Const_SoftWare_Article_Desc,Const_Get_In_Touch } from "~/app/const";
const ArticleTemplateHeroSection = () => {
  return (
    <section className="bg-gray-900 py-16 text-white ">
      <div className="container mx-auto grid  grid-cols-1 items-center gap-8 px-8 lg:grid-cols-2">
        <div>
          <div className="flex flex-wrap">
            <span className=" text-white font-light lg:w-[500px] lg:pl-5 pl-0 w-full">
               <span className="font-bold md:text-[50px] text-[50px]  sm:mt-10 mt-3 ">
               {Const_SoftWare_Article_Headline}
              </span> </span>
          </div>
        </div>
        <div>
          <p className="mb-6 sm:text-[25px] text-[20px] font-light text-white/70 sm:mt-10 mt-0">
          {Const_SoftWare_Article_Desc}
          </p>
          <Link href="#" className="text-[15px] font-light mt-8 text-white/70 mr-auto flex gap-5">
            <span> {Const_Get_In_Touch} </span>
            <img src="/icon/arrowRightWhiteIcon.svg" className="text-white/70" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticleTemplateHeroSection;
