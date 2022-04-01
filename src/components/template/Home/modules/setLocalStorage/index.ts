import { CardData } from "@/domain/cardData"
import { LOCAL_STORAGE_DATA_KEY } from "@shared/const"

export const setLocalStorage = (cardDataList: CardData[]) => {
  localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(cardDataList))
}
