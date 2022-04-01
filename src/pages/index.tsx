import { useEffect, useState } from "react"

import type { NextPage } from "next"

import { CardData } from "@/domain/cardData"
import { Home } from "@components/template/Home"
import { LOCAL_STORAGE_DATA_KEY } from "@shared/const"

const HomePage: NextPage = () => {
  const [initData, setInitData] = useState<CardData[] | null>(null)

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_DATA_KEY)
    setInitData(JSON.parse(data || "[]"))
  }, [])

  if (!initData) return null

  return (
    <div>
      <Home initData={initData} />
    </div>
  )
}

export default HomePage
