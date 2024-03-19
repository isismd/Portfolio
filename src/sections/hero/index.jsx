import { useTranslation } from "react-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <main className="border-1 rounded-lg mt-4 h-2/3 flex flex-col px-4 md:pl-12 justify-center text-left">
      <div>{t("home.hello")}</div>
      <div className="text-xl md:text-4xl md:w-2/3 my-8">
        {t("home.title1")}
        <span className="inria-serif-regular-italic">{t("home.title2")}</span>
        {t("home.title3")}
        <span className="inria-serif-regular-italic">{t("home.title4")}</span>
        {t("home.title5")}
      </div>
      <button className="w-fit border-b-2 border-rose-200 p-2 rounded-lg hover:border-rose-300">
      {t("home.cvBtn")}
      </button>
    </main>
  );
};
