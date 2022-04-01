import { CategoryDataType } from "@/domain/category"
import { AnyFunction } from "@shared/types/common"

export type SelectType = {
  isEdit: boolean
  selectedValue: string
  selectList: CategoryDataType[]
  onSelect: AnyFunction
}
