import { Heading } from "@chakra-ui/react";
import React from "react";
import "./Header.css";

function Header({ children }) {
  return (
    <Heading className="header">
      {children}
    </Heading>
  );
}

export default Header;
