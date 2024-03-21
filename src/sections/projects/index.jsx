import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { useTranslation } from "react-i18next";
import { PiArrowSquareOutThin, PiBinocularsFill } from "react-icons/pi";
import projetos from "../../data/projects.json";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <main className="py-4 flex flex-col mt-24">
      <h1 className="text-xl px-4 md:px-12 md:text-3xl mt-12">
        {t("projects.title1")}
        <span className="inria-serif-light-italic">{t("projects.title2")}</span>
        <PiBinocularsFill className="inline-block w-8 h-8 mb-2 mx-2 text-green-600" />
        {t("projects.title3")}
      </h1>
      <div className="flex flex-col md:flex-row w-full gap-8 mt-10">
        {projetos.map((projeto, index) => (
          <div key={index} className=" mt-1 flex flex-col md:w-3/5 h-96">
            <div className=" border-1 rounded-lg w-full h-80 overflow-hidden rounded-t-lg">
              <Image
                alt="Project Image"
                src={projeto.imagem}
                radius="none"
                isZoomed
                className="object-cover w-fit h-fit object-center"
              />
            </div>
            <div className="flex flex-row items-start mt-2 justify-between">
              <p className="mt-2 font-light text-foreground/80">
                {t(`projects.${projeto.descricao}`)}
              </p>
              <Button
                isIconOnly
                radius="full"
                variant="light"
                className="text-foreground/80"
                href={projeto.link}
                target="_blank"
              >
                <PiArrowSquareOutThin className="inline-block w-10 h-10 m-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
