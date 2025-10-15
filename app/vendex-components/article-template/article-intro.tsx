import Image from "next/image";
import Link from "next/link";
import { Button, Carousel } from "flowbite-react";
import { Const_SoftWare_Intro_Desc1,Const_SoftWare_Intro_Desc2 } from "~/app/const";
const ArticleIntro = () => {
    return (
        <div className="relative w-full ">
            <div className="flex py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
                    <div className="px-5 flex flex-col justify-center items-center">
                        <div className="mb-5 text-left xl:pl-24 sm:text-[25px] text-[20px] pl-2 font-light">
                           {Const_SoftWare_Intro_Desc1}
                        </div>
                        <div className="mb-5 text-left mt-5 xl:pl-24 sm:text-[25px] text-[20px] pl-2 font-light">
                           {Const_SoftWare_Intro_Desc2}
                        </div>
                    </div>
                    <div className="px-5 flex flex-col justify-center items-center">
                        <div className="lg:w-[412px] lg:h-[458px] w-[312px] h-[318px] border rounded-lg justify-center items-center flex">
                            <button className="bg-[#E9FC73] text-[25px] text-gray-800 py-3 px-6 font-light rounded transition duration-300">
                                Upload picture
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
                    <div className="px-5 flex flex-col justify-center items-center">
                        <div className="lg:w-[412px] lg:h-[458px] w-[312px] h-[318px] bg-white border rounded-lg justify-center items-center flex">
                            <button className="bg-[#E9FC73] text-gray-800 py-3 px-6 text-[25px] font-light rounded transition duration-300">
                                Upload picture
                            </button>
                        </div>
                    </div>
                    <div className="px-5 flex flex-col justify-center items-center mt-10 sm:mt-0 ">
                        <div className="mb-5 text-left sm:text-[25px] text-[20px] pl-2 font-light">
                        {Const_SoftWare_Intro_Desc1}
                        </div>
                        <div className="mb-5 text-left mt-5 sm:text-[25px] text-[20px] pl-2 font-light">
                        {Const_SoftWare_Intro_Desc2}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleIntro;
