import "../src/styles/index.css";

import React from "react";
import { Preview } from "@storybook/react";
import { StyledEngineProvider } from "@mui/material";

const preview: Preview = {
  decorators: [
    (Story) => (
      <StyledEngineProvider injectFirst>
        <div>hello</div>
        <Story />
      </StyledEngineProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
