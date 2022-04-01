import { CategoryDataType } from "@/domain/category"

export const addCheckedData = (data: CategoryDataType[]) => data.map((item) => ({ ...item, checked: false }))
