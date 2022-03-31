/**
 * ランダムなカラーコードを返す関数
 */
export const generateRandomColorCode = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}
