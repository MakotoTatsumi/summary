import { Population } from "@/libs/apiClient/resas/@types"

/**
 *
 * @param data Population
 */
export const getTotalPopulationData = ({ data }: Population) => {
  return data.find((statistic) => statistic.label === "総人口")?.data || null
}
