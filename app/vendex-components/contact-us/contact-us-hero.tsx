import Link from "next/link";
import { Button, Carousel } from "flowbite-react";
import {
    Const_Contact_Hero_Headline_Bold,
    Const_Contact_Name_Text,
    Const_Contact_Email_Text,
    Const_Contact_Accept_Pollicy_Text,
    Const_Contact_Send_Button_Text,
    Const_Contact_Message_Text
} from "~/app/const";
const ContactUsHeroSection = () => {
    return (
        <section className="bg-[#1D2939] py-16 text-white">
            <div className="container mx-auto items-start gap-8 px-8 flex sm:flex-row flex-col">
                <div className="w-full sm:w-2/5 h-full">
                    <div className="flex mt-0 items-center justify-center h-full">
                        <span className="text-[50px] lg:pl-5 pl-2 text-white font-bold">
                            {Const_Contact_Hero_Headline_Bold}
                        </span>
                    </div>
                </div>
                <div className="w-full sm:px-20 px-2">
                    <div className="flex  w-full justify-center items-center">
                        <label className="mr-auto w-1/5 text-white/70 text-[25px]">{Const_Contact_Name_Text}</label>
                        <input type="text" className="w-[90%] ml-10 lg:ml-0 border-0 bg-[#1D2939] border-b-2" />
                    </div>
                    <div className="flex mt-10 w-full justify-center items-center">
                        <label className="mr-auto w-1/5 text-white/70 text-[25px]">{Const_Contact_Email_Text}</label>
                        <input type="text" className="w-[90%] ml-10 lg:ml-0 border-0 bg-[#1D2939] border-b-2" />
                    </div>
                    <div className="flex mt-10 w-full ">
                        <label className="w-1/5 mr-auto text-white/70 justify-start mt-0 items-start text-[25px]">{Const_Contact_Message_Text}</label>
                        <div className="pl-[10px] w-full">
                            <textarea
                                className="w-full h-[200px] ml-7 lg:ml-0 bg-[#1D2939] border-2 text-white/70"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="flex mt-10 w-full">
                        <div className="w-1/5">
                            <input type="checkbox" className="bg-[#1D2939]" />
                        </div>
                        <div className="text-[15px] font-light ml-[-13px] text-white/70">
                            {Const_Contact_Accept_Pollicy_Text}
                        </div>
                    </div>
                    <Link href="#" className="text-[15px] font-light mt-8 text-white/70 mr-auto flex gap-5">
                        <span className="sm:text-[25px] text-[16px]">{Const_Contact_Send_Button_Text}</span>
                        <img src="/icon/arrowRightWhiteIcon2.svg" className="text-white/70 ml-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactUsHeroSection;
