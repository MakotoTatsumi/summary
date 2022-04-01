import produce from "immer"
import { useState } from "react"

import { CardData } from "@/domain/cardData"
import { CategoryDataType } from "@/domain/category"
import { HandleChangeCardData } from "@components/template/Home/hooks/useCardDataList/types"

/**
 * カードリスト内のデータを更新するための処理
 */
export const useCardDataList = () => {
  const [cardDataList, setCardDataList] = useState<CardData[]>([])

  /**
   * titleとcontentの値を更新するためのハンドラ
   * @param key - "title" | "content"
   * @param id - CardDataのid
   * @param event - changeEvent
   */
  const handleChangeCardData: HandleChangeCardData = (key) => (id) => (event) => {
    setCardDataList((prev) => {
      const index = prev.findIndex((data) => data.id === id)
      if (!index) return prev

      return produce(prev, (draft) => {
        draft[index][key] = event.target.value
      })
    })
  }

  /**
   * categoryを更新するためのハンドラ
   * @param id - CardDataのid
   * @param selectItem - 選択されたカテゴリ
   */
  const handleChangeCategory = (id: string) => (selectItem: CategoryDataType) => {
    setCardDataList((prev) => {
      const index = prev.findIndex((data) => data.id === id)
      if (!index) return prev

      return produce(prev, (draft) => {
        draft[index]["category"] = selectItem.value
      })
    })
  }

  return {
    cardDataList,
    setCardDataList,
    cardHandlerProps: {
      handleChangeTextarea: handleChangeCardData("content"),
      handleChangeTitle: handleChangeCardData("title"),
      handleSelect: handleChangeCategory,
    },
  }
}
