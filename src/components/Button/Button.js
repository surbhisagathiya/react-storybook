import { Button } from "@chakra-ui/react";
import React from "react";
// import "../Button/Button.css";

const ButtonCom = ({ children, ...rest }) => {
  return (
    <Button variant="solid" colorScheme="red" {...rest}>
      {children}
    </Button>
  );
};

export default ButtonCom;
