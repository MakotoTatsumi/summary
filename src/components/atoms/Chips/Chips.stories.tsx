import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { Chips } from "."

type ChipsStoryObj = ComponentStoryObj<typeof Chips>

const Meta: ComponentMeta<typeof Chips> = {
  component: Chips,
}

export const Base: ChipsStoryObj = {
  args: {
    children: "お気に入り",
    color: "#ccc",
  },
}

export default Meta
