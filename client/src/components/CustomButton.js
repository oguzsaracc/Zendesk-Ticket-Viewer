import React from "react";
import Button from "react-bootstrap/Button";

// The props are the arguments passed into React components. In our example, variant, size, href, label are arguments that we are used in our buttons.
const CustomButton = (props) => {
  const { variant, size, href, label } = props;

  return (
    <Button variant={variant} className="btn" size={size} href={href}>
      {label}
    </Button>
  );
};

export default CustomButton;
