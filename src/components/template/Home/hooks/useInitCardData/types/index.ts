import { ChangeEventHandler } from "react"

import { CardData } from "@/domain/cardData"

export type HandlerType = keyof Pick<CardData, "title" | "content">
export type HandleInitChangeCardData = (key: HandlerType) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
