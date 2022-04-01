import produce from "immer"
import { useEffect, useState } from "react"

import { CardData } from "@/domain/cardData"
import { CategoryDataType } from "@/domain/category"
import { HandleChangeCardData } from "@components/template/Home/hooks/useCardDataList/types"
import { setLocalStorage } from "@components/template/Home/modules/setLocalStorage"

/**
 * カードリスト内のデータを更新するための処理
 */
export const useCardDataList = (initData: CardData[]) => {
  const [cardDataList, setCardDataList] = useState<CardData[]>(initData)

  useEffect(() => {
    setLocalStorage(cardDataList)
  }, [cardDataList])

  /**
   * titleとcontentの値を更新するためのハンドラ
   * @param key - "title" | "content"
   * @param id - CardDataのid
   * @param event - changeEvent
   */
  const handleChangeCardData: HandleChangeCardData = (key) => (id) => (event) => {
    setCardDataList((prev) => {
      const index = prev.findIndex((data) => data.id === id)
      if (index === -1) return prev

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
      if (index === -1) return prev

      return produce(prev, (draft) => {
        draft[index]["category"] = selectItem?.value || ""
      })
    })
  }

  /**
   * カードデータを削除するための処理
   * @param id - CardDataのid
   * @param selectItem - 選択されたカテゴリ
   */
  const handleDeleteCardWithPrompt = (id: string) => () => {
    if (window.confirm("本当に削除しますか？")) {
      setCardDataList((prev) => prev.filter((data) => data.id !== id))
    }
  }

  return {
    cardDataList,
    setCardDataList,
    cardHandlerProps: {
      handleChangeTextarea: handleChangeCardData("content"),
      handleChangeTitle: handleChangeCardData("title"),
      handleSelect: handleChangeCategory,
      handleDeleteCardWithPrompt,
    },
  }
}
