import { useTranslation } from "react-i18next";
import { PiBinocularsFill } from "react-icons/pi";
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <main className="border-1 rounded-lg py-4 pl-4 md:pl-12 flex flex-col mt-24">
      <h1 className="text-xl md:text-3xl">
        {t("projects.title1")}
        <span className="inria-serif-light-italic">{t("projects.title2")}</span>
        <PiBinocularsFill  className="inline-block w-8 h-8 mb-2 mx-2 text-green-600" />
        {t("projects.title3")}
      </h1>
    </main>
  );
};
