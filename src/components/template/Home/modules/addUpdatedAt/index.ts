import { CardData } from "@/domain/cardData"

export const addUpdatedAt = (data: CardData) => {
  const now = new Date()

  return {
    ...data,
    updatedAt: now.getTime(),
  }
}
