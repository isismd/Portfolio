import { Button, Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { HiAtSymbol } from "react-icons/hi2";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="mb-2 md:w-full flex flex-col md:items-end">
        <div className="md:rotate-12 mt-16 mb-2 flex-wrap text-xs md:text-base flow-root font-semibold text-foreground/40">
          {t("contact.small")}
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-8 ">
        <div className="border-1 rounded-lg mt-1 flex flex-col px-4 md:px-8 md:w-1/2 h-80 py-12">
          <p className="text-xl">
            {t("contact.to")}: {t("contact.name")}
          </p>
          <p className="text-foreground/60 ml-6 font-light">
            {t("contact.email")}
          </p>
          <div className="border-l-1 border-pink-300 h-28 flex flex-col justify-center my-4">
            <p className="pl-4 text-lg">{t("contact.message")}</p>
          </div>
          <Button
            as={Link}
            href={`mailto:${t("contact.email")}?body=${t("contact.message")}`}
            variant="bordered"
            className="border-1"
            radius="sm"
          >
            {t("contact.btn")}
          </Button>
        </div>
        <div className="border-1 rounded-lg mt-1 flex flex-col justify-center px-4 md:px-8 md:w-1/2 h-80">
          <h1 className="text-xl md:text-3xl pb-8">
            {t("contact.text1")}
            <span className="inria-serif-light-italic">
              {t("contact.text2")}
            </span>
            <HiAtSymbol className="inline-block w-8 h-8 mb-2 text-orange-400" />
            {t("contact.text3")}
          </h1>
          <div className="gap-3 flex flex-col">
            <a
              href="https://github.com/isismd"
              target="_blank"
              className="flex flex-row gap-2 items-center hover:cursor-pointer hover:text-foreground/70"
            >
              <FaGithub className="inline-block w-5 h-5" />
              <span>github.com/isismd</span>
            </a>
            <a
              href="https://www.linkedin.com/in/isisdaron/"
              target="_blank"
              className="flex flex-row gap-2 items-center hover:cursor-pointer hover:text-foreground/70"
            >
              <FaLinkedinIn className="inline-block w-5 h-5" />
              <span>linkedin.com/in/isisdaron</span>
            </a>
            <a
              href="https://www.behance.net/ISISMD"
              target="_blank"
              className="flex flex-row gap-2 items-center hover:cursor-pointer hover:text-foreground/70"
            >
              <FaBehance className="inline-block w-5 h-5" />
              <span>behance.net/isismd</span>
            </a>
          </div>
        </div>
      </div>
      <p className="w-full text-center mt-24 text-sm">
        made with{" "}
        <IoHeart
          fill="pink"
          className="[&>path]:stroke-transparent mx-1 inline-block"
        />
      </p>
    </section>
  );
};
