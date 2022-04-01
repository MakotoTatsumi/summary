import produce from "immer"
import { useState } from "react"

import { CardData } from "@/domain/cardData"
import { CategoryDataType } from "@/domain/category"
import { HandleChangeCardData } from "@components/template/Home/hooks/useCardDataList/types"
import { addUpdatedAt } from "@components/template/Home/modules/addUpdatedAt"
import { setLocalStorage } from "@components/template/Home/modules/setLocalStorage"
import { sortCardDateListByDate } from "@components/template/Home/modules/sortCardDateListByDate"

/**
 * カードリスト内のデータを更新するための処理
 */
export const useCardDataList = (initData: CardData[]) => {
  const [cardDataList, setCardDataList] = useState<CardData[]>(initData)

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
      setCardDataList((prev) => {
        const updated = prev.filter((data) => data.id !== id)
        setLocalStorage(updated)
        return updated
      })
    }
  }

  /**
   * 編集完了時の処理
   * @param data
   * @param id
   */
  const handleEditComplete = (data: CardData, id: string) => {
    setCardDataList((prev) => {
      const index = prev.findIndex((data) => data.id === id)
      if (index === -1) return prev
      const updated = produce(prev, (draft) => {
        draft[index] = addUpdatedAt(data)
      })

      const sortedData = sortCardDateListByDate(updated)
      setLocalStorage(sortedData)
      return sortedData
    })
  }

  return {
    cardDataList,
    setCardDataList,
    cardHandlerProps: {
      handleChangeTextarea: handleChangeCardData("content"),
      handleChangeTitle: handleChangeCardData("title"),
      handleSelect: handleChangeCategory,
      handleDeleteCardWithPrompt,
      handleEditComplete,
    },
  }
}
