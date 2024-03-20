import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";
import MusicPlayer from "../../components/MusicPlayer";

export const About = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col md:flex-row w-full gap-8 mt-12">
      <div className="border-1 rounded-lg py-4 px-4 md:px-12 md:w-4/6">
        <h1 className="text-xl md:text-4xl pt-12 pb-8">
          {t("aboutme.title1")}
          <span className="inria-serif-light-italic">
            {t("aboutme.title2")}
          </span>
          <TbWorld className="inline-block w-8 h-8 mb-2 text-blue-500" />
          {t("aboutme.title3")}
        </h1>
        <div className="mb-6">
          <p className="inria-serif-regular-italic">{t("aboutme.subtitle1")}</p>
          {t("aboutme.description1")}
        </div>
        <div className="mb-6">
          <p className="inria-serif-regular-italic">{t("aboutme.subtitle2")}</p>
          <p>{t("aboutme.description2")}</p>
          <p>
            {t("aboutme.job1")}
            <a
              href="https://www.cge.mt.gov.br/"
              target="_blank"
              className="hover:text-foreground/80 hover:decoration-solid decoration-dotted underline underline-offset-4"
            >
              CGE-MT
            </a>
            {t("aboutme.job2")}

            <a
              href="https://www.pagway.com.br/"
              target="_blank"
              className="hover:text-foreground/80 hover:decoration-solid decoration-dotted underline underline-offset-4"
            >
              Pagway
            </a>
            {t("aboutme.job3")}
            <a
              href="https://www.linkedin.com/company/infocorpjr/"
              target="_blank"
              className="hover:text-foreground/80 hover:decoration-solid decoration-dotted underline underline-offset-4"
            >
              InfoCorp
            </a>
          </p>
        </div>
        <div className="mb-6">
          <p className="inria-serif-regular-italic">{t("aboutme.subtitle3")}</p>
          {t("aboutme.description3")}
        </div>
      </div>
      <div className="flex flex-col md:w-2/6 gap-8">
        <div className="border-1 rounded-lg">
          <MusicPlayer />
        </div>
        <div className="border-1 rounded-lg py-4 px-12 md:h-2/3"></div>
      </div>
    </main>
  );
};