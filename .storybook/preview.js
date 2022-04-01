import React from "react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import "./reset.css"

export const globalTypes = {
  reset: {
    name: "Reset",
    toolbar: {
      items: [
        { value: "styled-reset", title: "styled-reset" },
        { value: null, title: "off" },
      ],
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^(handle|on|dispatch)[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
      </>
    ),
  ],
}
