import Image from "next/image";
import Link from "next/link";
interface SoftwareApisGateWaySectionProps {
    header: React.ReactNode;
    headerBold: React.ReactNode;
    description: React.ReactNode;
    linkText: string;
}

const SoftwareApisGateWaySection: React.FC<SoftwareApisGateWaySectionProps> = ({
    header,
    headerBold,
    description,
    linkText,
}) => {
    return (
        <div className="pt-5 mt-10 text-black flex  items-center ">
            <div className=" py-10 flex flex-col sm:flex-row">
                <div className="sm:w-[400px] w-[250px] h-[400px]">
                    <div className="relative h-full w-full flex">
                        <div className="sm:w-[350px] w-[250px] h-[400px] flex-shrink-0 bg-slate-800 relative">
                        </div>
                        <div className="w-[50px] h-[400px]">
                            <img
                                src="/images/api-device.svg"
                                alt="API Gateway Image"
                                className="absolute top-0 right-0 mt-[-1px] h-[402px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-2/3 pl-10 text-[#1D2939]">
                    <span className="lg:text-[70px] text-[35px] font-light">
                    {header} <br/> <b className="font-bold"> {headerBold}</b>
                    </span>
                    <p className="lg:text-2xl text-xl mt-4 md:w-[250px] w-full font-light">
                    {description}
                    </p>
                    <Link href="" className="text-[15px] mt-5 font-light text-[#1D2939] mr-auto flex gap-5">
                                <span className="font-light text-[15px]">{linkText}</span>
                                <img src="/icon/arrowRightIcon.svg" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SoftwareApisGateWaySection;
