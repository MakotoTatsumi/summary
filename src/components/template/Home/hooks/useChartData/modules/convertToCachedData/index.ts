import { Population } from "@/libs/apiClient/resas/@types"

export type PopulationData = Population["data"][number]["data"]

/**
 * キャッシュデータ用にデータを整形
 * @param data
 */
export const convertToCachedData = (data: PopulationData) => {
  return data.reduce((prev, { value, year }) => {
    return { ...prev, [year]: value }
  }, {})
}
