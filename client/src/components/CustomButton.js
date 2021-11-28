import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = (props) => {
  const { variant, size, href, label } = props;

  return (
    <Button variant={variant} className="btn" size={size} href={href}>
      {label}
    </Button>
  );
};

export default CustomButton;
