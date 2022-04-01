import produce from "immer"
import { useState } from "react"

import { DEFAULT_CATEGORY } from "@components/template/Home"
import { addCheckedData } from "@components/template/Home/modules/addCheckedData"

export const useFilter = () => {
  const [filterOption, setFilterOption] = useState(addCheckedData([...DEFAULT_CATEGORY]))

  /**
   * optionボタンを押下時の処理
   * @param id
   */
  const handleClickOption = (id: string) => {
    setFilterOption((prev) => {
      return produce(prev, (draft) => {
        const index = prev.findIndex((item) => item.id === id)
        if (index === -1) return
        draft[index].checked = !draft[index].checked
      })
    })
  }

  const checkedList = filterOption.filter((item) => item.checked).map((item) => item.value)

  return {
    filterOption,
    handleClickOption,
    checkedList,
  }
}
