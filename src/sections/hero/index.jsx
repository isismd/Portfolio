import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <main className="border-1 rounded-lg mt-4 h-1/2 md:h-3/4 flex flex-col px-4 md:pl-12 justify-center ">
      <div className="md:text-xl">{t("home.hello")}</div>
      <div className="text-2xl md:text-5xl md:w-4/5 my-8">
        {t("home.title1")}
        <span className="inria-serif-light-italic">{t("home.title2")}</span>
        {t("home.title3")}
        <span className="inria-serif-light-italic">{t("home.title4")}</span>
        {t("home.title5")}
      </div>
      <button className="w-fit border-b-2 border-pink-200 p-2 pb-1 rounded-lg hover:border-pink-300 hover:bg-pink-100">
      {t("home.cvBtn")}
      </button>
    </main>
  );
};
