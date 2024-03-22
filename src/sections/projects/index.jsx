import { Button } from "@nextui-org/button";
import { useTranslation } from "react-i18next";
import { PiArrowSquareOutThin, PiBinocularsFill } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Link } from "@nextui-org/react";
import projetos from "../../data/projects.json";
import "swiper/css";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <main className="py-4 flex flex-col mt-24">
      <h1 className="text-xl px-4 md:px-12 md:text-3xl mb-8">
        {t("projects.title1")}
        <span className="inria-serif-light-italic">{t("projects.title2")}</span>
        <PiBinocularsFill className="inline-block w-8 h-8 mb-2 mx-2 text-green-600" />
        {t("projects.title3")}
      </h1>
      <Swiper
        spaceBetween={32}
        slidesPerView={"auto"}
        centeredSlides={true}
        style={{ width: "100%" }}
        initialSlide={2}
        loop={true}
      >
        {projetos.map((projeto, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[580px] mb-4 text-left border-1 rounded-lg mt-1 flex flex-col h-96"
          >
            <div className="w-full h-56 md:h-72 overflow-hidden p-4">
              <Image
                alt="Project Image"
                src={projeto.imagem}
                radius="none"
                isZoomed
                className="h-full w-full object-cover object-center rounded-md"
              />
            </div>
            <div className="flex flex-row items-start m-4 justify-between gap-2">
              <p>
                <span className="hover:text-foreground/80 hover:decoration-solid decoration-dotted underline underline-offset-4">
                  {projeto.titulo}
                </span>
                <span className="font-light text-foreground/80">
                  — {t(`projects.${projeto.descricao}`)}
                </span>
              </p>
              <Button
                as={Link}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};
