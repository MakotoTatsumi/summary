import { CardData } from "@/domain/cardData"
import { CategoryDataType } from "@/domain/category"
import { AnyFunction } from "@shared/types/common"

/**
 * @typedef CardType
 * @property isInitialCard - 最初の作成カードかどうか
 * @property isEdit - 編集状態
 * @property titleValue - タイトル
 * @property textareaValue - 本文
 * @property categoryName - カテゴリ名
 * @property handleChangeTitle - タイトル編集
 * @property handleChangeTextarea - 本文編集
 * @property handleSelect - カテゴリ編集
 */
export type CardType = {
  isInitialCard?: boolean
  isEdit?: boolean
  data: CardData
  categoriesData: CategoryDataType[]
  handleChangeTitle: AnyFunction
  handleChangeTextarea: AnyFunction
  handleSelect: AnyFunction
  handleDeleteCardData?: AnyFunction
  handleEditComplete?: AnyFunction
}
