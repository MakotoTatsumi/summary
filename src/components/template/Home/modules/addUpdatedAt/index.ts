import { CardData } from "@/domain/cardData"

export const addUpdatedAt = (data: CardData) => {
  return {
    ...data,
    updatedAt: new Date().getTime(),
  }
}
