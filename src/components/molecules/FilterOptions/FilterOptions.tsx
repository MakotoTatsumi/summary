import { VFC } from "react"
import styled from "styled-components"

import { Chips } from "@components/atoms/Chips"
import { AnyFunction } from "@shared/types/common"

type FilterOptionsType = {
  options: { id: string; value: string; checked: boolean }[]
  title: string
  handleClickOption: AnyFunction
}

export const FilterOptions: VFC<FilterOptionsType> = (props) => {
  const { options, title, handleClickOption } = props

  return (
    <Root>
      <Title>{title}</Title>
      <CategoryList>
        {options.map((category) => (
          <ChipsWrapper key={category.id}>
            <Chips onClick={() => handleClickOption(category.id)} isActive={category.checked}>
              {category.value}
            </Chips>
          </ChipsWrapper>
        ))}
      </CategoryList>
    </Root>
  )
}

const Root = styled.div`
  padding: 20px;
`

const ChipsWrapper = styled.div`
  margin-right: 10px;
`

const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

const CategoryList = styled.div`
  display: flex;
`
