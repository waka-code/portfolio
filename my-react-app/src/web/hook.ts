import React, { useEffect, useMemo, useState } from "react";
type ucHeaderProps = {
  ulScroolYStyle: React.CSSProperties | undefined;
  ulStyle: React.CSSProperties | undefined;
  fadeUp: string | undefined;
  fadeDown: string | undefined;
};

export const ucScroolHover = ({
  ulScroolYStyle,
  ulStyle,
  fadeUp,
  fadeDown,
}: ucHeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hovverNav = useMemo(() => {
    if (scrollPosition > 50) {
      return {
        ...ulStyle,
        ...ulScroolYStyle,
      };
    } else {
      return ulStyle;
    }
  }, [scrollPosition, ulStyle, ulScroolYStyle]);

  const hoverCards = useMemo(() => {
    return scrollPosition ? fadeUp : fadeDown;
  }, [scrollPosition, fadeDown, fadeUp]);
  
  return { hovverNav, hoverCards };
};
