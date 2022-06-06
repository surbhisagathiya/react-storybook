import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "../components/Header";

export default {
  title: "Header",
  components: Header,
};

export const Text = () => <Header>Hello Header</Header>;

export const Emoji = () => (
  <Header>
    <span role="img" aria-label="so cool">
      😛 ☘️ 🌸 🐼
    </span>
  </Header>
);
