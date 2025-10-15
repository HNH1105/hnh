import { Const_SoftWare_Feature_Text,Const_SoftWare_Features_DB } from "~/app/const";
export function SoftWareFeatureListSection() {

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <p className="text-[#000000] text-[15px] font-light dark:text-gray-400">
          {Const_SoftWare_Feature_Text}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          {Const_SoftWare_Features_DB.map((item, index) => (
            <div key={index}>
              <h3 className="mb-2 text-[30px] text-[#000000] font-normal dark:text-white">
                {item.title}
              </h3>
              <p className="text-[#1D2939] text-[20px] font-light dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
