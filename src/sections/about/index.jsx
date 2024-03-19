import { useTranslation } from "react-i18next";
import EarthGlobe from "../../public/icons/EarthGlobe.png";

export const About = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col md:flex-row w-full gap-8 mt-12">
      <div className="border-1 rounded-lg py-4 px-4 md:px-12 md:w-3/5">
        <h1 className="text-xl md:text-4xl pt-12 pb-8">
          {t("aboutme.title1")}
          <span className="inria-serif-regular-italic">
            {t("aboutme.title2")}
          </span>
          <img
            src={EarthGlobe}
            alt="Earth Globe Icon"
            className="w-8 inline-block pb-1.5"
          />
          {t("aboutme.title3")}
        </h1>
        <div className="mb-6">
          <p className="inria-serif-regular-italic">{t("aboutme.subtitle1")}</p>
          {t("aboutme.description1")}
        </div>
        <div className="mb-6">
          <p className="inria-serif-regular-italic">{t("aboutme.subtitle2")}</p>
          <p>{t("aboutme.description2.1")}</p>
          <p>{t("aboutme.description2.2")}</p>
        </div>
        <div className="mb-6">
          <p className="inria-serif-regular-italic">{t("aboutme.subtitle3")}</p>
          {t("aboutme.description3")}
        </div>
      </div>
      <div className="flex flex-col md:w-2/5 gap-8">
        <div className="border-1 rounded-lg py-4 px-12 md:h-1/3"></div>
        <div className="border-1 rounded-lg py-4 px-12 md:h-2/3"></div>
      </div>
    </main>
  );
};
