import { useNavigate } from "react-router-dom";
import { ucFooterStyles } from "./FooterStyle";

export const Footer = () => {
  const navigate = useNavigate();
  const { divFooter, divSocial, ulFooterStyle } = ucFooterStyles();
  const social = [
    {
      name: "GitHub",
      url: "",
    },
    {
      name: "LinkedIn",
      url: "",
    },
    {
      name: "instagram",
      url: "",
    },
  ];

  return (
    <>
      <hr />
      <div style={divFooter}>
        <div>2024 Waddimi Saint Louis - wakaCode</div>
        <div style={divSocial}>
          <div>
            <h3>Elsewhere</h3>
            {social.map((i, idx) => {
              return (
                <ul
                  style={ulFooterStyle}
                  key={idx}
                  onClick={() => navigate(i.url)}
                >
                  <h4>{i.name}</h4>
                </ul>
              );
            })}
          </div>
          <div>
            <h3>icono de chatBot</h3>
          </div>
        </div>
      </div>
    </>
  );
};
