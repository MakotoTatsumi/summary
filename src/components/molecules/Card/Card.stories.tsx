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
    categoryName: "お気に入り",
    titleValue: "タイトル",
    textareaValue: "本文",
  },
}

export default Meta
