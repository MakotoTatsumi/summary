import {
  convertToCachedData,
  PopulationData,
} from "@components/template/Home/hooks/useChartData/modules/convertToCachedData/index"

describe("convertToCachedData", () => {
  it("Dataが存在する場合", () => {
    const data = [
      {
        year: 2010,
        value: 3000,
      },
      {
        year: 2020,
        value: 4000,
      },
    ]

    const result = { 2020: 4000, 2010: 3000 }

    expect(convertToCachedData(data)).toEqual(result)
  })

  it("Dataが存在しない場合", () => {
    const data: PopulationData = []

    const result = {}

    expect(convertToCachedData(data)).toEqual(result)
  })
})
