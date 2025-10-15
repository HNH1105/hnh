import Image from "next/image";
import Link from "next/link";
import { Const_Home_Knowledge_Hub_Text,Const_SoftWare_Knowledge_Hub_DB, Const_Button_Explore_More_Text } from "~/app/const";
const SoftwareKnowledgeHubSection = () => {
    return (
        <div className="bg-white mb-14">
            <div className="max-w-7xl mx-auto px-4 mt-10 text-[15px] font-light text-[#000000]">
               {Const_Home_Knowledge_Hub_Text}
            </div>
            <div className="max-w-7xl mx-auto px-4 py-4 mt-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Const_SoftWare_Knowledge_Hub_DB.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex flex-col items-center mt-2 bg-[#F3F3F3] p-8 rounded-lg shadow">
                            <div className="relative xl:w-[326px] xl:h-[250px] w-auto h-[150px]  flex items-center justify-center">
                            </div>
                            <span className="lg:text-[30px] text-[22px] text-[#000000] font-light">
                                {item.title}
                            </span>
                            <Link href={item.link} className="text-[15px] mt-8 text-[#1D2939] mr-auto flex gap-5">
                                <span className="font-light text-[15px]">{Const_Button_Explore_More_Text}</span>
                                <img src="/icon/arrowRightIcon.svg" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SoftwareKnowledgeHubSection;
