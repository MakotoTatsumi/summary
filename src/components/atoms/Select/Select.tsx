import { useSelect } from "downshift"
import { MouseEventHandler, VFC } from "react"
import styled, { css } from "styled-components"

import { Colors } from "@/styles/colors"
import { SelectType } from "@components/atoms/Select/Select.type"

const { COLOR_C5C9C6, COLOR_FF6B6E, COLOR_FFFFFF, COLOR_CCCCCC } = Colors
const DEFAULT_CATEGORY_TEXT = "Set Category"

export const Select: VFC<SelectType> = (props) => {
  const { isEdit, selectedValue, selectList, onSelect } = props

  /**
   * downshiftのuseSelectを呼び出し
   * https://www.downshift-js.com/use-select
   */
  const { isOpen, selectedItem, reset, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps } = useSelect(
    {
      id: "Select",
      items: [...selectList],
      onSelectedItemChange: ({ selectedItem }) => onSelect(selectedItem),
    },
  )

  /**
   * カテゴリをリセット
   */
  const categoryReset: MouseEventHandler<HTMLSpanElement> = (event) => {
    event.stopPropagation()
    onSelect("")
    reset()
  }

  return (
    <Root>
      <CategoryButton isActive={isOpen}>
        <StyledButton disabled={!isEdit} type="button" {...getToggleButtonProps()}>
          {selectedValue || DEFAULT_CATEGORY_TEXT}
        </StyledButton>
        {isEdit && selectedItem && <Close onClick={categoryReset}>✗</Close>}
      </CategoryButton>
      <StyledUl isActive={isOpen} {...getMenuProps()}>
        {isOpen &&
          selectList.map((item, index) => (
            <StyledLi
              style={
                highlightedIndex === index ? { backgroundColor: COLOR_FF6B6E, opacity: 0.8, color: COLOR_FFFFFF } : {}
              }
              key={`${item.id}${index}`}
              {...getItemProps({ item, index })}
            >
              {item.value}
            </StyledLi>
          ))}
      </StyledUl>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
`

const CategoryButton = styled.div<{ isActive: boolean }>`
  background-color: ${COLOR_FF6B6E};
  transition: ease 0.3s;
  padding: 4px 10px;
  min-width: 80px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${COLOR_CCCCCC};
      cursor: auto;
    `}
}`

const StyledButton = styled.button.attrs({ type: "button" })`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  color: ${COLOR_FFFFFF};
  height: 100%;
  width: 100%;
`

const Close = styled.span`
  display: inline-block;
  font-size: 16px;
  color: ${COLOR_FFFFFF};
  padding: 0 5px;
  cursor: pointer;
`

const StyledUl = styled.ul<{ isActive: boolean }>`
  background-color: ${COLOR_FFFFFF};
  border-radius: 4px;
  border: 1px solid ${COLOR_C5C9C6};
  top: 34px;
  position: absolute;
  left: 0;
  z-index: 1000;
  width: 120px;
  display: none;
  ${({ isActive }) =>
    isActive &&
    css`
      display: block;
      outline: none;
    `}
`

const StyledLi = styled.li`
  font-size: 12px;
  padding: 5px 10px;
  cursor: pointer;
`
