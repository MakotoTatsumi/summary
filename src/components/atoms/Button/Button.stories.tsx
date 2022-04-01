import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { Button } from "."

type ButtonStoryObj = ComponentStoryObj<typeof Button>

const Meta: ComponentMeta<typeof Button> = {
  component: Button,
}

export const Base: ButtonStoryObj = {}

export default Meta
