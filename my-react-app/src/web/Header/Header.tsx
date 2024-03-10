import { ucMediaQuery } from "../../designs/mediaQuery/hook";
import { ucHeaderStyles } from "./HeaderStyles";
import { ucHeader } from "./hook";

export const Header = () => {
  const { navStyle, liStyle, ulStyle, ulScroolYStyle } = ucHeaderStyles();
  const { hoverNav, navigation, menuNav } = ucHeader({
    ulScroolYStyle,
    ulStyle,
  });
  const { isMobileDevice, isTabletDevice, isLaptop, isDesktop, isBigScreen } =
    ucMediaQuery();
  console.log(
    "isMobileDevice :",
    isMobileDevice,
    "isTabletDevice :",
    isTabletDevice,
    "isLaptop :",
    isLaptop,
    "isDesktop :",
    isDesktop,
    "isBigScreen :",
    isBigScreen
  );

  return (
    <nav style={navStyle}>
      <ul style={hoverNav}>
        {menuNav.map((item, index) => {
          let ruta = `/${item}`;
          if (item === "Home") {
            ruta = "/";
          }
          return (
            <li key={index} onClick={() => navigation(ruta)} style={liStyle}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
