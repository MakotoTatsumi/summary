import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { IconPen } from "@components/atoms/Icons/IconPen/IconPen"

type IconPenStoryObj = ComponentStoryObj<typeof IconPen>

const Meta: ComponentMeta<typeof IconPen> = {
  component: IconPen,
}

export const Base: IconPenStoryObj = {}

export default Meta
