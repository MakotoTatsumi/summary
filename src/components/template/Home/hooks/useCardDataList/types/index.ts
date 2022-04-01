import { ChangeEventHandler } from "react"

import { HandlerType } from "@components/template/Home/hooks/useInitCardData/types"

export type HandleChangeCardData = (
  key: HandlerType,
) => (id: string) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
