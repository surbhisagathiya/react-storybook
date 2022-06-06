import { theme } from "@chakra-ui/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  chakra: {
    theme: theme,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
