import Link from "next/link";
import { Const_SoftWare_Hero_Headline
  ,Const_SoftWare_Hero_Headline_Bold,
  Const_SoftWare_Hero_Desc,
  Const_Get_In_Touch
 } from "~/app/const";
const SoftwareApisHeroSection = () => {
  return (
    <section className="bg-gray-900 py-16 text-white ">
      <div className=" mx-auto grid grid-cols-1 max-w-screen-xl pb-20 items-center gap-8  lg:grid-cols-2">
        <div>
          <div className="sm:text-[70px] text-[50px] flex flex-wrap">
            <div className="sm:text-[70px] text-[50px] font-light lg:w-[550px] w-full">
              <span className="italic ">{Const_SoftWare_Hero_Headline} </span>
              <b className="font-bold ">
              {Const_SoftWare_Hero_Headline_Bold}
              </b>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-6 text-[25px] font-light text-white/70 sm:mt-10 mt-0">
          {Const_SoftWare_Hero_Desc}
          </p>
          <Link href="/smart-mobility" className="text-[15px] font-light mt-8 text-white/70 mr-auto flex gap-5">
            <span> {Const_Get_In_Touch} </span>
            <img src="/icon/arrowRightWhiteIcon.svg" className="text-white/70" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SoftwareApisHeroSection;
