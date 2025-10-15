import { Const_SoftWare_Strategic_Partners_DB } from "~/app/const";
const SoftwareApisERBSection = () => {
  return (
    <div className="mt-10 bg-gray-800 pt-5 text-white">
      <div className="mx-auto max-w-screen-xl py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Const_SoftWare_Strategic_Partners_DB.map((item, index) => (
            <div key={index} className="flex flex-col p-4 text-left ">
              <h3 className="mt-4 text-center text-[40px] font-normal text-white/90">
                {item.title}
              </h3>
              <p className="mt-4 text-center text-[20px] font-normal text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareApisERBSection;
