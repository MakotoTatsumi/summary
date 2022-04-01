import { getTotalPopulationData } from "@components/template/Home/hooks/useChartData/modules/getTotalPopulationData/index"

import { Population } from "@/libs/apiClient/resas/@types"

describe("getTotalPopulationData", () => {
  it("Dataが存在する場合", () => {
    const data: Population = {
      boundaryYear: 2015,
      data: [
        {
          label: "総人口",
          data: [
            {
              year: 2000,
              value: 2000,
            },
            {
              year: 2010,
              value: 3000,
            },
          ],
        },
        {
          label: "老齢率",
          data: [
            {
              year: 3000,
              value: 2000,
            },
            {
              year: 2010,
              value: 4000,
            },
          ],
        },
      ],
    }

    const result = [
      {
        year: 2000,
        value: 2000,
      },
      {
        year: 2010,
        value: 3000,
      },
    ]

    expect(getTotalPopulationData(data)).toEqual(result)
  })

  it("Dataが存在しない場合", () => {
    const data: Population = {
      boundaryYear: 2015,
      data: [
        {
          label: "老齢率",
          data: [
            {
              year: 3000,
              value: 2000,
            },
            {
              year: 2010,
              value: 4000,
            },
          ],
        },
      ],
    }

    expect(getTotalPopulationData(data)).toBeNull()
  })
})
