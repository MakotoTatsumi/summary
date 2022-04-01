import { VFC } from "react"

import { Card } from "@components/molecules/Card"
import { DEFAULT_CATEGORY } from "@components/template/Home"
import { useInitCardData } from "@components/template/Home/hooks/useInitCardData"

export const Cardlist: VFC = () => {
  const { initCardValueProps, initCardHandlerProps } = useInitCardData()

  return <Card isInitialCard categoriesData={[...DEFAULT_CATEGORY]} {...initCardValueProps} {...initCardHandlerProps} />
}
