import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

export default {
  title: "Button",
  components: Button,
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😛 ☘️ 🌸 🐼
    </span>
  </Button>
);
