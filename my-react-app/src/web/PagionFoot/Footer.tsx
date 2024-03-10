import { useNavigate } from "react-router-dom";
import { ucFooterStyles } from "./FooterStyle";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { ucTestData } from "../mockup/mockup";
import { useState } from "react";

export const Footer = () => {
  const navigate = useNavigate();
  const { divFooter, divSocial, ulFooterStyle, divIconsSocia } =
    ucFooterStyles();
  const { social } = ucTestData();
  const [hoverUL, setHoverUl] = useState(false);

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
                  className="ulFooterStyle"
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
            <h3>Contact</h3>
            <div
              style={divIconsSocia}
              onMouseLeave={() => setHoverUl(false)}
              onMouseEnter={() => setHoverUl(true)}
            >
              <IoChatbubbleEllipsesOutline size={40} color={hoverUL ? "black" : undefined} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
