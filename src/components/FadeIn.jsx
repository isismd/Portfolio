/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
