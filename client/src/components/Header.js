import React from "react";

// Adding some good-looking for header of the page :-)
const Header = (props) => {
  const { label } = props;
  return (
    <h3
      style={{
        textAlign: "center",
        color: "#04363D",
        border: "3.5px solid #04363D",
        padding: "0.350em",
        backgroundColor: "#D3D3D3",
        fontSize: "3em",
      }}
    >
      {label}
    </h3>
  );
};

export default Header;
