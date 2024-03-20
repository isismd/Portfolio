import { useTranslation } from "react-i18next";
import { IoIosBuild } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { TbLocationFilled } from "react-icons/tb";
export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="mb-2 md:w-1/4 flex flex-col md:items-end">
        <div className="md:-rotate-12 md:w-40 mt-24 flex-wrap text-xs md:text-base flow-root font-semibold text-foreground/40">
          {t("skills.small1")}
          <span className="inria-serif-bold-italic">{t("skills.small2")}</span>
          <IoHeart
            fill="pink"
            className="[&>path]:stroke-transparent mx-1 inline-block"
          />
          {t("skills.small3")}
        </div>
      </div>
      <main className="flex flex-col text-center items-center">
        <h1 className="text-xl md:text-3xl">
          {t("skills.title1")}
          <span className="inria-serif-light-italic">{t("skills.title2")}</span>
          <IoIosBuild className="inline-block w-8 h-8 mb-2 mx-2 text-yellow-400" />
          {t("skills.title3")}
        </h1>
        <p className="w-full text-right mt-8 text-sm text-foreground/40">
          <TbLocationFilled className="inline-block mb-1 mr-1 -rotate-90" />
          {t("skills.hover")}
        </p>
        <div className="flex flex-col md:flex-row w-full gap-8 ">
          <div className="border-1 rounded-lg mt-1 flex flex-col px-4 md:w-1/2 h-72"></div>
          <div className="border-1 rounded-lg mt-1 flex flex-col px-4 md:w-1/2 h-72"></div>
        </div>
      </main>
    </section>
  );
};
