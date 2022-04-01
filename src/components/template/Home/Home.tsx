import styled from "styled-components"

import { Button } from "@components/atoms/Button"
import { Card } from "@components/molecules/Card"
import { DEFAULT_CATEGORY } from "@components/template/Home/const/category"
import { useCardDataList } from "@components/template/Home/hooks/useCardDataList"
import { useInitCardData } from "@components/template/Home/hooks/useInitCardData"

export const Home = () => {
  const { initCardData, resetInitCard, initCardHandlerProps, initCardValueProps } = useInitCardData()
  const { cardDataList, setCardDataList, cardHandlerProps } = useCardDataList()

  const handleAddNewCard = () => {
    setCardDataList((prev) => [initCardData, ...prev])
    resetInitCard()
  }

  return (
    <Root>
      <AddNewCard>
        <Card
          isInitialCard
          isEdit
          categoriesData={[...DEFAULT_CATEGORY]}
          {...initCardValueProps}
          {...initCardHandlerProps}
        />
        <ButtonWrapper>
          <Button onClick={handleAddNewCard}>Add</Button>
        </ButtonWrapper>
      </AddNewCard>

      <CardList>
        {cardDataList.map((data) => (
          <CardListItem key={data.id}>
            <Card
              isEdit
              categoriesData={[...DEFAULT_CATEGORY]}
              titleValue={data.title}
              textareaValue={data.content}
              categoryName={data.category}
              {...cardHandlerProps}
            />
          </CardListItem>
        ))}
      </CardList>
    </Root>
  )
}

const Root = styled.div`
  padding: 20px;
  margin: 10px auto;
  max-width: 1200px;
`

const AddNewCard = styled.div`
  margin-bottom: 40px;
`

const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

const CardList = styled.ul`
  margin-top: 40px;
`

const CardListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
