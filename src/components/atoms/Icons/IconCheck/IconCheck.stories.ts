import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { IconCheck } from "@components/atoms/Icons/IconCheck/IconCheck"

type IconCheckStoryObj = ComponentStoryObj<typeof IconCheck>

const Meta: ComponentMeta<typeof IconCheck> = {
  component: IconCheck,
}

export const Base: IconCheckStoryObj = {}

export default Meta
