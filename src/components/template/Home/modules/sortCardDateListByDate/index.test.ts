import { sortCardDateListByDate } from "@components/template/Home/modules/sortCardDateListByDate/index"

const testDataList = [
  {
    id: "95f0a2c4-dd8c-4df7-88ee-e060c6e3c568",
    title: "2番目作成",
    content: "",
    category: "",
    time: "",
    updatedAt: 1648832222243,
  },
  {
    id: "22257705-e6b3-4e18-b830-67a5114a7579",
    title: "1番目作成",
    content: "",
    category: "",
    time: "",
    updatedAt: 1648832216218,
  },
  {
    id: "bd32b275-ff41-4a6c-bb21-b26835f1ad08",
    title: "3番目作成",
    content: "",
    category: "",
    time: "",
    updatedAt: 1648832228375,
  },
]

const result = [
  {
    id: "bd32b275-ff41-4a6c-bb21-b26835f1ad08",
    title: "3番目作成",
    content: "",
    category: "",
    time: "",
    updatedAt: 1648832228375,
  },
  {
    id: "95f0a2c4-dd8c-4df7-88ee-e060c6e3c568",
    title: "2番目作成",
    content: "",
    category: "",
    time: "",
    updatedAt: 1648832222243,
  },
  {
    id: "22257705-e6b3-4e18-b830-67a5114a7579",
    title: "1番目作成",
    content: "",
    category: "",
    time: "",
    updatedAt: 1648832216218,
  },
]

describe("sortCardDateListByDate", () => {
  it("sortData", () => {
    expect(sortCardDateListByDate(testDataList)).toEqual(result)
  })

  it("empty Date", () => {
    expect(sortCardDateListByDate([])).toEqual([])
  })
})
