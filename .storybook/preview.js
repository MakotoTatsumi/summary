import React from "react"
import { Reset } from "styled-reset"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

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
  actions: { argTypesRegex: "^on[A-Z].*" },
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
        <Reset />
        <Story />
      </>
    ),
  ],
}
