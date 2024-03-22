import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi2";

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <Button isIconOnly onClick={scrollToTop} radius="full" variant="light" className="fixed bottom-8 right-8 z-50 bg-[#f8f8f8] shadow-md">
        <HiArrowUp className="w-6 h-6 text-foreground/60" />
      </Button>
    )
  );
}
