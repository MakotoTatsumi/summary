import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { Home } from "."

type HomeStoryObj = ComponentStoryObj<typeof Home>

const Meta: ComponentMeta<typeof Home> = {
  component: Home,
}

export const Base: HomeStoryObj = {}

export default Meta
