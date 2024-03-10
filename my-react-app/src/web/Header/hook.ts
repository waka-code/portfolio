import { useNavigate } from "react-router-dom";
import { ucScroolHover } from "../hook";

export const ucHeader = ({
  ulScroolYStyle,
  ulStyle,
}: {
  ulScroolYStyle: React.CSSProperties;
  ulStyle: React.CSSProperties;
}) => {
  const menuNav: string[] = ["Home", "About", "Portfolio", "Skill", "Contact"];
  const navigation = useNavigate();
  const { hovverNav } = ucScroolHover({
    ulScroolYStyle: ulScroolYStyle,
    ulStyle: ulStyle,
    fadeUp: undefined,
    fadeDown: undefined,
  });
  return {
    hovverNav,
    navigation,
    menuNav,
  };
};
