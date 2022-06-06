import React from "react";
import { action } from "@storybook/addon-actions";
import Card from "../components/Card";

export default {
  title: "Card",
  components: Card,
};

export const Text = () => <Card>Hello Header</Card>;

export const Emoji = () => (
  <Card>
    <span role="img" aria-label="so cool">
      😛 ☘️ 🌸 🐼
    </span>
  </Card>
);
