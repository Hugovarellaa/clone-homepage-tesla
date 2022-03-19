import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "../context/ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);
  const scrollY = useMotionValue(0);
  const scrollProgress = useMotionValue(0);

  //calculo de scroll
  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updatedScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element;
        const fullscroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop); //number (px)
        scrollProgress.set(scrollTop / fullscroll); //0 - 1 (%)
      };

      element.addEventListener("scroll", updatedScrollValue);

      return () => element?.removeEventListener("scroll", updatedScrollValue);
    }
  }, [scrollProgress, scrollY, wrapperRef]);

  return { scrollY, scrollProgress };
}
