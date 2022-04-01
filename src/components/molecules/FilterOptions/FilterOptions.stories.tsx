import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { FilterOptions } from "."
import { DEFAULT_CATEGORY } from "@components/template/Home"

type FilterOptionsStoryObj = ComponentStoryObj<typeof FilterOptions>

const Meta: ComponentMeta<typeof FilterOptions> = {
  component: FilterOptions,
}

export const Base: FilterOptionsStoryObj = {
  args: {
    title: "CATEGORY",
    options: [...DEFAULT_CATEGORY].map((item) => ({ ...item, checked: false })),
  },
}

export default Meta
