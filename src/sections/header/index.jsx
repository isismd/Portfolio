import { useTranslation } from "react-i18next";

export const Header = () => {
  const { i18n } = useTranslation();

  const lngs = {
    en: { nativeName: "EN" },
    ptbr: { nativeName: "BR" },
  };

  return (
    <div className="flex flex-row gap-2 justify-end font-light text-sm">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
          className={
            i18n.language === lng
              ? "border-b-2 border-emerald-200 rounded-sm hover:bg-emerald-50"
              : "pb-0.5 text-gray-400 hover:bg-emerald-50"
          }
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};
