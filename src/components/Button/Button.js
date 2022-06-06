import React from "react";
import "../Button/Button.css"

const Button = ({ children, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
