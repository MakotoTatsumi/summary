import { v4 as uuidv4 } from "uuid"

import { INITIAL_CARD_DATA } from "@components/template/Home/const/cardData"

export const createInitialCardData = () => ({
  ...INITIAL_CARD_DATA,
  id: uuidv4(),
})
