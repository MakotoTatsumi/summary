import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { IconTrash } from "@components/atoms/Icons/IconTrash/IconTrash"

type IconTrashStoryObj = ComponentStoryObj<typeof IconTrash>

const Meta: ComponentMeta<typeof IconTrash> = {
  component: IconTrash,
}

export const Base: IconTrashStoryObj = {}

export default Meta
