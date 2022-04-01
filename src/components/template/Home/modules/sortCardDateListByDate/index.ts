import clone from "clone"

import { CardData } from "@/domain/cardData"

export const sortCardDateListByDate = (dataList: CardData[]) => {
  const cloneData = clone(dataList)
  cloneData.sort((a, b) => {
    return b.updatedAt - a.updatedAt
  })

  return cloneData
}
