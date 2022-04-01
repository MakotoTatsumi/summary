import { useState } from "react"

import { CardData } from "@/domain/cardData"
import { CategoryDataType } from "@/domain/category"
import { HandleInitChangeCardData, HandlerType } from "@components/template/Home/hooks/useInitCardData/types"
import { createInitialCardData } from "@components/template/Home/modules/createInitialCardData"

export const useInitCardData = () => {
  const [initCardData, setInitCardData] = useState<CardData>(createInitialCardData())

  /**
   * titleとcontentの値を更新するためのハンドラ
   * @param key - "title" | "content"
   * @param event - changeEvent
   */
  const handleChangeInitCardData: HandleInitChangeCardData = (key: HandlerType) => (event) => {
    setInitCardData((prev) => ({
      ...prev,
      [key]: event.target.value,
    }))
  }

  /**
   * categoryを更新するためのハンドラ
   * @param selectItem - 選択されたカテゴリ
   */
  const handleChangeInitCardCategory = (selectItem: CategoryDataType) => {
    setInitCardData((prev) => ({
      ...prev,
      category: selectItem?.value || "",
    }))
  }

  /**
   * 新規カードデータをリセット
   */
  const resetInitCard = () => setInitCardData(createInitialCardData())

  return {
    initCardData,
    resetInitCard,
    initCardValueProps: {
      titleValue: initCardData.title,
      textareaValue: initCardData.content,
      categoryName: initCardData.category,
    },
    initCardHandlerProps: {
      handleChangeTextarea: handleChangeInitCardData("content"),
      handleChangeTitle: handleChangeInitCardData("title"),
      handleSelect: handleChangeInitCardCategory,
    },
  }
}
