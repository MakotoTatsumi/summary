import produce from "immer"
import { pick } from "remeda"

import { YearListType } from "@components/template/Home/Home.type"
import { CheckedDataType, PopulationDataCache } from "@components/template/Home/hooks/useChartData/types"

/**
 * 取得したAPIデータからChartData用に整形する処理
 * @param checked - 選択されている都道府県のリスト
 * @param cacheData - APIで取得済みのデータ
 * @param yearList - 表示する年度の配列
 */
export const createChartData = (
  checked: CheckedDataType[],
  cacheData: PopulationDataCache,
  yearList: YearListType[],
) => {
  // 未選択なら処理を実行しない
  if (checked.length === 0 || yearList.length === 0) return []

  const currentCheckedList = checked.map((item) => item.prefName)
  const currentOriginalChartData = pick(cacheData, currentCheckedList)

  return produce(yearList, (draft) => {
    Object.keys(currentOriginalChartData).forEach((key) => {
      Object.keys(currentOriginalChartData[key]).forEach((year, index) => {
        // TODO: Immerの型エラーは別途調査する
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        draft[index][key] = currentOriginalChartData[key][year]
      })
    })
  })
}
