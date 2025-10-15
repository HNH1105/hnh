import { Const_HardWare_Feature_Text, Const_HardWare_Features } from "~/app/const";

export function HardWareFeatureListSection() {
    return (
        <>
            <div className="w-full">
                <h3 className="font-light text-[15px] text-[#1D2939] mb-2 ml-24">{Const_HardWare_Feature_Text}</h3>
            </div>
            <div className="flex items-center justify-start bg-white dark:bg-gray-900 mb-14">
                <div className="h-20 w-20 rounded-r-lg bg-gray-800"></div>
                <div className="ml-4 flex-grow grid sm:grid-cols-3 gap-8 grid-cols-1">
                    {Const_HardWare_Features.map((featureList, index) => (
                        <div key={index}>
                            <ul className="list-disc list-inside space-y-1 text-[20px] text-[#1D2939] font-light">
                                {featureList.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
