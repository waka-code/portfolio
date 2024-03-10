import { ucHeaderStyles } from "./HeaderStyles";
import { ucHeader } from "./hook";

export const Header = () => {
  const { navStyle, liStyle, ulStyle, ulScroolYStyle } = ucHeaderStyles();
  const { hovverNav, navigation, menuNav } = ucHeader({ulScroolYStyle, ulStyle});

  return (
    <nav style={navStyle}>
      <ul style={hovverNav}>
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
