import {
  Const_Home_Feature_Block1_Desc,
  Const_Home_Feature_Block1_Desc_2,
  Const_Home_Feature_Block1_Desc_Bold,
  Const_Home_Feature_Block1_Headline,
  Const_Home_Feature_Block1_Headline_Bold,
  Const_Home_Feature_Block2_Desc,
  Const_Home_Feature_Block2_Headline,
  Const_Home_Feature_Block2_Headline_Bold,
  Const_Home_Feature_Block3_Desc,
  Const_Home_Feature_Block3_Headline,
  Const_Home_Feature_Block3_Headline_Bold,
} from "~/app/const";

const ServicesSection = () => {
  return (
    <div className="w-full bg-gray-800">
      <div className="mx-auto max-w-screen-xl bg-gray-800">
        <div className="flex bg-gray-800 py-10 text-white">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col  justify-center">
              <div className="mb-10 text-[50px] sm:text-[70px]">
                <h1 className=" font-light">
                  {Const_Home_Feature_Block1_Headline}{" "}
                </h1>
                <h1 className="font-extrabold">
                  {" "}
                  {Const_Home_Feature_Block1_Headline_Bold}{" "}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="mb-5 pl-2 text-left text-[20px] font-light text-white/70">
                <p className="pr-2 leading-relaxed lg:pr-20">
                  {Const_Home_Feature_Block1_Desc}{" "}
                  <span className="font-semibold text-white">
                    {Const_Home_Feature_Block1_Desc_Bold}
                  </span>
                  <br /> {Const_Home_Feature_Block1_Desc_2}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex bg-gray-800 py-10 text-white">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center ">
              <div className="mb-5 pr-2 text-left text-[20px] font-light text-white/70 lg:pr-20 ">
                {Const_Home_Feature_Block2_Desc}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="mb-10 mr-0 mt-10 text-[50px] sm:mr-auto sm:mt-0 sm:text-[70px]">
                <h1 className="font-light">
                  {Const_Home_Feature_Block2_Headline}{" "}
                </h1>
                <h1 className="font-extrabold">
                  {" "}
                  {Const_Home_Feature_Block2_Headline_Bold}{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-800 py-10 text-white">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col  justify-center ">
              <div className="mb-10 text-[50px] sm:text-[70px]">
                <h1 className="font-light">
                  {Const_Home_Feature_Block3_Headline}
                </h1>
                <h1 className="font-extrabold">
                  {Const_Home_Feature_Block3_Headline_Bold}
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="mb-5 pr-2 text-left text-[20px] font-light text-white/70 ">
                {Const_Home_Feature_Block3_Desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
