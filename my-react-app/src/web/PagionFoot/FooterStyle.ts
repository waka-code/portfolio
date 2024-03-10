export const ucFooterStyles = () => {
  const divFooter: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0 20px 0",
  };

  const ulFooterStyle: React.CSSProperties = {
    cursor: "pointer",
  };

  const divSocial: React.CSSProperties = {
    display: "flex",
    gap: "20px",
  };

  return {
    divFooter,
    divSocial,
    ulFooterStyle,
  };
};
