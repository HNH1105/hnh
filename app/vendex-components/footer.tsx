import Image from "next/image";
import Link from "next/link";
import { Const_Footer_Text_Line1,
    Const_Footer_Text_Line1_Bold,
    Const_Footer_Text_Line2,
    Const_Footer_Email_Text,
    Const_Footer_Logo_Text,
    Const_Footer_Copyright_Text,
    Const_Footer_Links1,
    Const_Footer_Links2
 } from "../const";
 const FooterSection = () => {
    return (
        <div className="w-full bg-slate-800 ">
            <div className=" text-[#FFFFFF] max-w-7xl mx-auto px-4 py-8">
                <div className="sm:text-[50px] text-[40px] flex flex-col mt-10">
                    <span className="font-light">
                        {Const_Footer_Text_Line1}
                    </span>
                    <span className="font-bold">{Const_Footer_Text_Line1_Bold}</span>
                </div>
                <div className=" flex flex-col">
                    <span className="font-light text-[25px] mt-14 text-white/70">
                       {Const_Footer_Text_Line2}
                    </span>
                    <span className="font-normal sm:text-[50px] text-[40px]">
                       {Const_Footer_Email_Text}
                    </span>
                </div>
                <div className=" flex flex-col mt-14">
                    <hr></hr>
                </div>
                <footer className="mt-5">
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div className="md:flex md:justify-between">
                            <div className="mb-6 md:mb-0 w-[200px]">
                                <a href="https://flowbite.com/" className="flex items-center">
                                    <svg width="125" height="27" viewBox="0 0 125 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M42.2681 23H32.5146V5.15332H42.2681V6.28857H33.772V13.0513H41.792V14.1865H33.772V21.8647H42.2681V23ZM59.3213 23H58.0396L47.4927 7.21631H47.4316C47.4479 7.65576 47.4601 8.10335 47.4683 8.55908C47.4845 9.00667 47.4967 9.47054 47.5049 9.95068C47.5212 10.4227 47.5293 10.911 47.5293 11.4155V23H46.333V5.15332H47.627L58.1372 20.8882H58.1982C58.1901 20.5301 58.1779 20.1151 58.1616 19.6431C58.1535 19.1711 58.1413 18.6868 58.125 18.1904C58.1169 17.694 58.1128 17.2261 58.1128 16.7866V5.15332H59.3213V23ZM77.9492 13.9058C77.9492 15.8996 77.5952 17.5719 76.8872 18.9229C76.1873 20.2738 75.1457 21.291 73.7622 21.9746C72.3869 22.6582 70.682 23 68.6475 23H64.375V5.15332H69.209C71.1133 5.15332 72.7124 5.48698 74.0063 6.1543C75.3003 6.82161 76.2809 7.80632 76.9482 9.1084C77.6156 10.4023 77.9492 12.0015 77.9492 13.9058ZM76.6309 13.9546C76.6309 12.2537 76.3542 10.8337 75.8008 9.69434C75.2474 8.55501 74.401 7.70052 73.2617 7.13086C72.1224 6.55306 70.6779 6.26416 68.9282 6.26416H65.6323V21.8892H68.5864C71.2801 21.8892 73.2943 21.23 74.6289 19.9116C75.9635 18.5851 76.6309 16.5994 76.6309 13.9546ZM91.8896 23H81.9531V5.15332H91.8896V6.98438H84.0283V12.7583H91.438V14.5649H84.0283V21.1689H91.8896V23ZM100.667 5.15332C102.131 5.15332 103.34 5.33643 104.292 5.70264C105.252 6.06071 105.968 6.61003 106.44 7.35059C106.912 8.09115 107.148 9.03516 107.148 10.1826C107.148 11.1266 106.978 11.916 106.636 12.5508C106.294 13.1774 105.846 13.686 105.293 14.0767C104.74 14.4673 104.15 14.7684 103.523 14.98L108.418 23H106.001L101.631 15.5537H97.9199V23H95.8447V5.15332H100.667ZM100.544 6.94775H97.9199V13.7959H100.752C102.209 13.7959 103.279 13.4989 103.962 12.9048C104.654 12.3107 105 11.4359 105 10.2803C105 9.06771 104.634 8.20915 103.901 7.70459C103.177 7.20003 102.058 6.94775 100.544 6.94775ZM122.468 23L120.271 17.3359H113.118L110.933 23H108.833L115.815 5.08008H117.683L124.617 23H122.468ZM119.648 15.4927L117.561 9.86523C117.512 9.71875 117.431 9.47868 117.317 9.14502C117.211 8.81136 117.101 8.46549 116.987 8.10742C116.873 7.74935 116.78 7.46045 116.707 7.24072C116.625 7.57438 116.536 7.90804 116.438 8.2417C116.348 8.56722 116.259 8.8724 116.169 9.15723C116.08 9.43392 116.003 9.66992 115.938 9.86523L113.813 15.4927H119.648Z" fill="white" />
                                        <rect width="27" height="27" rx="5" fill="#7AE35E" />
                                        <path d="M21.2476 5.15332L15.1807 23H11.0547L5 5.15332H8.8208L12.1777 15.7734C12.2347 15.9525 12.3283 16.2902 12.4585 16.7866C12.5887 17.2749 12.7189 17.7957 12.8491 18.3491C12.9875 18.8944 13.0811 19.346 13.1299 19.7041C13.1787 19.346 13.2642 18.8944 13.3862 18.3491C13.5164 17.8039 13.6426 17.2871 13.7646 16.7988C13.8949 16.3024 13.9884 15.9606 14.0454 15.7734L17.4268 5.15332H21.2476Z" fill="#4518EC" />
                                    </svg>
                                </a>
                                <div className="mt-10 w-[200px] text-[15px] text-white/70 font-light">{Const_Footer_Logo_Text}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 w-full sm:w-1/2">
                                <div>
                                    <ul className="text-white/70 dark:text-gray-400 font-light">
                                    {Const_Footer_Links1.map(link => (
                                            <li className="mb-4" key={link.title}>
                                                <a href={link.href} className="hover:underline">{link.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <ul className="text-white/70 dark:text-gray-400 font-light">
                                    {Const_Footer_Links2.map(link => (
                                            <li className="mb-4" key={link.title}>
                                                <a href={link.href} className="hover:underline">{link.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-center sm:justify-between mt-4 sm:mt-10">
                            <span className="text-sm font-light sm:text-center text-white/70 dark:text-gray-400"> {Const_Footer_Copyright_Text}
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default FooterSection;
