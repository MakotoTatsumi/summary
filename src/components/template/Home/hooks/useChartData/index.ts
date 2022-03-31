import { useEffect, useState } from "react"

import { getPopulation } from "@/api/resas/getPopulation"
import { ChartDataType, YearListType } from "@components/template/Home/Home.type"
import { convertToCachedData } from "@components/template/Home/hooks/useChartData/modules/convertToCachedData"
import { createChartData } from "@components/template/Home/hooks/useChartData/modules/createChartData"
import { generateRandomColorCode } from "@components/template/Home/hooks/useChartData/modules/generateRandomColorCode"
import { getTotalPopulationData } from "@components/template/Home/hooks/useChartData/modules/getTotalPopulationData"
import { CheckedDataType, PopulationDataCache } from "@components/template/Home/hooks/useChartData/types"

export const useChartData = () => {
  const [checked, setChecked] = useState<CheckedDataType[]>([])
  const [cacheData, setCacheData] = useState<PopulationDataCache>({})
  const [yearList, setYearList] = useState<YearListType[] | null>(null)
  const [chartData, setChartData] = useState<ChartDataType[]>([])

  useEffect(() => {
    if (!yearList) return
    setChartData(createChartData(checked, cacheData, yearList))
  }, [checked, cacheData, yearList])

  /**
   *
   * @param listData
   */
  const handleClickCheckbox = async (listData: CheckedDataType) => {
    const { prefCode, prefName } = listData

    // チェックリストをセット
    setChecked((prevState) => {
      return prevState.find((list) => list.prefCode === prefCode)
        ? prevState.filter((list) => list.prefCode !== prefCode)
        : [...prevState, { ...listData, colorCode: generateRandomColorCode() }]
    })

    // 同じデータの場合は、取得しないようにキャッシュ処理
    if (cacheData[prefName]) return

    const result = await getPopulation(prefCode)
    if (result.status !== "success") return

    // 総人口データが存在しない場合を考慮
    const totalPopulationData = getTotalPopulationData(result.data.result)
    if (!totalPopulationData) return

    // 初回のみ、ChartData整形用に年度の配列を作成する
    if (!yearList) {
      const getInitialYearList = totalPopulationData?.map((item) => ({
        name: item.year,
      }))
      setYearList(getInitialYearList)
    }

    setCacheData({
      ...cacheData,
      [prefName]: totalPopulationData ? convertToCachedData(totalPopulationData) : {},
    })
  }

  return {
    checked,
    chartData,
    handleClickCheckbox,
  }
}
