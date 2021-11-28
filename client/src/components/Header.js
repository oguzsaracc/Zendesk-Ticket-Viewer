import React from "react";

const Header = (props) => {
  const { label } = props;
  return (
    <h3
      style={{
        textAlign: "center",
        color: "#FFFFFF",
        border: "3px dashed #164C84",
        padding: "0.350em",
        backgroundColor: "#04363D",
        fontSize: "2em",
      }}
    >
      {label}
    </h3>
  );
};

export default Header;
