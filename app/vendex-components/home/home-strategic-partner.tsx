const StrategicPartnerSection = () => {
  const strategicPartners = [
    {
      title: "AI-models",
      description:
        "Our AI capabilities in the mobility space harness secure open-source models to deliver smart reports and actionable insights. By connecting seamlessly with your systems, we empower you with superior value-add, driving informed decisions and enhancing operational efficiency.",
    },
    {
      title: "Customer Insights",
      description:
        "With our detailed reports and dashboards, we deliver valuable customer insights and help you drive your KPIs, whether it's boosting sales, enhancing customer experience, or maximizing retail opportunities.",
    },
    {
      title: "Maintenance",
      description:
        "We ensure the seamless operation of your software and hardware IoT-devices through continuous monitoring and proactive maintenance. Supported by our extensive network of trusted partners across the EU.",
    },
  ];
  return (
    <div className=" bg-gray-800  text-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center px-4  py-8 sm:py-16 lg:px-4 lg:py-24">
        <div className="">
          <div className="text-[15px] text-white/70 ">
            Your strategic partner:
          </div>
          <div className="">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {strategicPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg p-4 pl-0 text-left shadow"
                >
                  <h3 className="mt-4 text-3xl font-bold">{partner.title}</h3>
                  <p className="mt-4 text-[15px] font-light text-white/70">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPartnerSection;
