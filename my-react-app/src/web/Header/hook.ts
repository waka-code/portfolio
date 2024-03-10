import { useNavigate } from "react-router-dom";
import { ucScroolHover } from "../../designs/hook";

export const ucHeader = ({
  ulScroolYStyle,
  ulStyle,
}: {
  ulScroolYStyle: React.CSSProperties;
  ulStyle: React.CSSProperties;
}) => {
  const menuNav: string[] = ["Home", "About", "Portfolio", "Skill", "Contact"];
  const navigation = useNavigate();
  const { hoverNav } = ucScroolHover({
    ulScroolYStyle: ulScroolYStyle,
    ulStyle: ulStyle,
    fadeUp: undefined,
    fadeDown: undefined,
  });
  return {
    hoverNav,
    navigation,
    menuNav,
  };
};
