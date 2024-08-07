import { useTranslation } from "react-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";
import CurriculoPT from "../../../public/assets/pdf/Curriculo 2024 - Isis Daron.pdf"
export const Hero = () => {
  const { t } = useTranslation();

  return (
    <main className="border-1 rounded-lg mt-4 py-32 md:py-60 flex flex-col px-4 md:pl-12 justify-center ">
      <div className="md:text-xl">{t("home.hello")}</div>
      <div className="text-2xl md:text-5xl md:w-4/5 my-8">
        {t("home.title1")}
        <span className="inria-serif-light-italic">{t("home.title2")}</span>
        {t("home.title3")}
        <span className="inria-serif-light-italic">{t("home.title4")}</span>
        {t("home.title5")}
      </div>
      <a
        className="flex flex-row gap-1  w-fit border-b-3 border-pink-200 p-2 pb-1 rounded-md hover:border-pink-300 hover:bg-pink-100"
        href={CurriculoPT} target="_blank"
      >
        {t("home.cvBtn")}
        <IoIosArrowRoundForward className="w-5 h-5" />
      </a>
    </main>
  );
};
