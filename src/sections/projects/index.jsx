import { useTranslation } from "react-i18next";
import { PiBinocularsFill } from "react-icons/pi";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <main className=" py-4  flex flex-col mt-24">
      <h1 className="text-xl px-4 md:px-12 md:text-3xl mt-12">
        {t("projects.title1")}
        <span className="inria-serif-light-italic">{t("projects.title2")}</span>
        <PiBinocularsFill className="inline-block w-8 h-8 mb-2 mx-2 text-green-600" />
        {t("projects.title3")}
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-8 mt-10">
        <div className="border-y-1 border-r-1 rounded-lg mt-1 flex flex-col px-4 md:w-1/5 h-96"></div>
        <div className="border-1 rounded-lg mt-1 flex flex-col px-4 md:w-3/5 h-96"></div>
        <div className="border-y-1 border-l-1 rounded-lg mt-1 flex flex-col px-4 md:w-1/5 h-96"></div>
      </div>
    </main>
  );
};
