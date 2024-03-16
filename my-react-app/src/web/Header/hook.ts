import { useNavigate } from "react-router-dom";
import { ucScrollHover } from "../../designs/hook";

export const ucHeader = ({
  ulScroolYStyle,
  ulStyle,
}: {
  ulScroolYStyle: React.CSSProperties;
  ulStyle: React.CSSProperties;
}) => {
  const menuNav: string[] = ["Home", "About", "Portfolio", "Skill"];
  const navigation = useNavigate();

  const { hoverNav } = ucScrollHover({
    ulScroolYStyle: ulScroolYStyle,
    ulStyle: ulStyle,
    fadeUp: undefined,
    fadeDown: undefined,
  });

  return {
    hoverNav,
    navigation,
    menuNav
  };
};
