import Link from "next/link";

const KnowledgeHubSection = () => {
  const articles = [
    {
      title:
        "How Franchisees benefit from Self-Service digitization & digital signage.",
      link: "/smart-mobility",
    },
    {
      title:
        "The benefits of a cloud-native Self-Service software. Secure and fast.",
      link: "/smart-mobility",
    },
    {
      title:
        "Why it's so hard to integrate with traditional ERPs. And why we still made it.",
      link: "/smart-mobility",
    },
    {
      title: "There are so many ticketing systems. Here is an overview.",
      link: "/smart-mobility",
    },
    {
      title: "Self-Service software is a win-win for everyone. Prove us wrong.",
      link: "/smart-mobility",
    },
    {
      title:
        "How we digitized the onsite sales channels of a leading mobility provider.",
      link: "/smart-mobility",
    },
  ];
  return (
    <div className="mb-14 bg-white">
      <div className="mx-auto flex max-w-screen-xl items-center justify-center px-4  py-8 sm:py-16 lg:px-4 lg:py-24">
        <div className="mx-auto mt-10 px-4 text-[15px] font-light text-[#000000]">
          Our Knowledge Hub:
        </div>
        <div className="mx-auto mt-8 bg-white px-4 py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {articles.slice(0, 3).map((article, index) => (
              <div
                key={index}
                className="mt-2 flex flex-col items-center rounded-lg bg-[#F3F3F3] p-8 shadow"
              >
                <div className="relative flex h-[150px] w-auto items-center  justify-center xl:h-[250px] xl:w-[326px]"></div>
                <span className="text-[22px] font-light text-[#000000] lg:text-[30px]">
                  {article.title}
                </span>
                <Link
                  href={article.link}
                  className="mr-auto mt-8 flex gap-5 text-[15px] text-[#1D2939]"
                >
                  <span className="text-[15px] font-light">Explore more</span>
                  <img src="/icon/arrowRightIcon.svg" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto bg-white px-4 py-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {articles.slice(3, 6).map((article, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-[#F3F3F3] p-8 shadow"
              >
                <span className="mb-5 text-[22px] font-light text-[#000000] lg:text-[30px]">
                  {article.title}
                </span>
                <Link
                  href={article.link}
                  className="mr-auto mt-auto flex gap-5 text-[15px] text-[#1D2939]"
                >
                  <span className="text-[15px] font-light">Explore more</span>
                  <img src="/icon/arrowRightIcon.svg" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHubSection;
