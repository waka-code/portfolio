export const ucFooterStyles = () => {
  const divFooter: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0 20px 0",
  };

  const ulFooterStyle = {
    cursor: "pointer",
  };

  const divSocial: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    width: 250
  };

  const divIconsSocia: React.CSSProperties = {
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   height: "50%",
   cursor: "pointer",
  };
  return {
    divFooter,
    divSocial,
    ulFooterStyle,
    divIconsSocia
  };
};
