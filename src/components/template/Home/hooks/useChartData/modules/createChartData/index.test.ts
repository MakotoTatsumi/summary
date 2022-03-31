import { createChartData } from "@components/template/Home/hooks/useChartData/modules/createChartData/index"

const checkList = [
  {
    prefCode: "1",
    prefName: "北海道",
    colorCode: "#FFFFFF",
  },
  {
    prefCode: "2",
    prefName: "青森県",
    colorCode: "#EEEEEE",
  },
]

const cachedData = {
  北海道: {
    "1960": 5039206,
    "1965": 5171800,
    "1970": 5184287,
    "1975": 5338206,
    "1980": 5575989,
    "1985": 5679439,
    "1990": 5643647,
    "1995": 5692321,
    "2000": 5683062,
    "2005": 5627737,
    "2010": 5506419,
    "2015": 5381733,
    "2020": 5216615,
    "2025": 5016554,
    "2030": 4791592,
    "2035": 4546357,
    "2040": 4280427,
    "2045": 4004973,
  },
  青森県: {
    "1960": 1426606,
    "1965": 1416591,
    "1970": 1427520,
    "1975": 1468646,
    "1980": 1523907,
    "1985": 1524448,
    "1990": 1482873,
    "1995": 1481663,
    "2000": 1475728,
    "2005": 1436657,
    "2010": 1373339,
    "2015": 1308265,
    "2020": 1235971,
    "2025": 1157332,
    "2030": 1076393,
    "2035": 993737,
    "2040": 908974,
    "2045": 823610,
  },
}

const yearListData = [
  {
    name: 1960,
  },
  {
    name: 1965,
  },
  {
    name: 1970,
  },
  {
    name: 1975,
  },
  {
    name: 1980,
  },
  {
    name: 1985,
  },
  {
    name: 1990,
  },
  {
    name: 1995,
  },
  {
    name: 2000,
  },
  {
    name: 2005,
  },
  {
    name: 2010,
  },
  {
    name: 2015,
  },
  {
    name: 2020,
  },
  {
    name: 2025,
  },
  {
    name: 2030,
  },
  {
    name: 2035,
  },
  {
    name: 2040,
  },
  {
    name: 2045,
  },
]

const result = [
  {
    name: 1960,
    北海道: 5039206,
    青森県: 1426606,
  },
  {
    name: 1965,
    北海道: 5171800,
    青森県: 1416591,
  },
  {
    name: 1970,
    北海道: 5184287,
    青森県: 1427520,
  },
  {
    name: 1975,
    北海道: 5338206,
    青森県: 1468646,
  },
  {
    name: 1980,
    北海道: 5575989,
    青森県: 1523907,
  },
  {
    name: 1985,
    北海道: 5679439,
    青森県: 1524448,
  },
  {
    name: 1990,
    北海道: 5643647,
    青森県: 1482873,
  },
  {
    name: 1995,
    北海道: 5692321,
    青森県: 1481663,
  },
  {
    name: 2000,
    北海道: 5683062,
    青森県: 1475728,
  },
  {
    name: 2005,
    北海道: 5627737,
    青森県: 1436657,
  },
  {
    name: 2010,
    北海道: 5506419,
    青森県: 1373339,
  },
  {
    name: 2015,
    北海道: 5381733,
    青森県: 1308265,
  },
  {
    name: 2020,
    北海道: 5216615,
    青森県: 1235971,
  },
  {
    name: 2025,
    北海道: 5016554,
    青森県: 1157332,
  },
  {
    name: 2030,
    北海道: 4791592,
    青森県: 1076393,
  },
  {
    name: 2035,
    北海道: 4546357,
    青森県: 993737,
  },
  {
    name: 2040,
    北海道: 4280427,
    青森県: 908974,
  },
  {
    name: 2045,
    北海道: 4004973,
    青森県: 823610,
  },
]

describe("createChartData", () => {
  it("CheckListとChartDataが存在する場合", () => {
    expect(createChartData(checkList, cachedData, yearListData)).toEqual(result)
  })

  it("CheckListが空でChartDataが存在する場合", () => {
    expect(createChartData([], cachedData, yearListData)).toEqual([])
  })

  it("CheckListがあるがChartDataが存在しない場合はyearListだけが返る", () => {
    expect(createChartData(checkList, {}, yearListData)).toEqual(yearListData)
  })

  it("yearListのみ取得できなかった場合、空配列を返す", () => {
    expect(createChartData(checkList, cachedData, [])).toEqual([])
  })
})
