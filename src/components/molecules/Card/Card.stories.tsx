import type { ComponentMeta, ComponentStoryObj } from "@storybook/react"

import { Card } from "."
import { DEFAULT_CATEGORY } from "@components/template/Home"

type CardStoryObj = ComponentStoryObj<typeof Card>

const Meta: ComponentMeta<typeof Card> = {
  component: Card,
}

export const Base: CardStoryObj = {
  args: {
    isInitialCard: false,
    isEdit: true,
    categoriesData: [...DEFAULT_CATEGORY],
    data: {
      id: "22257705-e6b3-4e18-b830-67a5114a7579",
      title: "1番目作成",
      content: "",
      category: "お気に入り",
      updatedAt: 1648832216218,
    },
  },
}

export default Meta
