import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { Select } from "."
import { DEFAULT_CATEGORY } from "@components/template/Home"

type SelectStoryObj = ComponentStoryObj<typeof Select>

const Meta: ComponentMeta<typeof Select> = {
  component: Select,
}

export const Base: SelectStoryObj = {
  args: {
    isEdit: false,
    selectedValue: "お気に入り",
    selectList: [...DEFAULT_CATEGORY],
  },
}

export default Meta
